import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { X, Filter, ChevronDown, ChevronUp, ShoppingCart, Loader2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { getProducts, getProductQuantities } from '@/api/EcommerceApi';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

const FilterSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-white/10 pb-4">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-left font-medium text-white hover:text-primary transition-colors"
    >
      {title}
      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pt-3 space-y-2">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FilterCheckbox = ({ label, checked, onChange, count }) => (
  <label className="flex items-center space-x-2 cursor-pointer group">
    <Checkbox
      checked={checked}
      onCheckedChange={onChange}
      className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
    />
    <span className="text-sm text-muted-foreground group-hover:text-white transition-colors flex-1">
      {label}
    </span>
    {count !== undefined && (
      <span className="text-xs text-muted-foreground">({count})</span>
    )}
  </label>
);

const ProductCard = ({ product, onAddToCart }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const displayVariant = useMemo(() => product.variants[0], [product]);
  const hasSale = useMemo(() => displayVariant && displayVariant.sale_price_in_cents !== null, [displayVariant]);
  const displayPrice = useMemo(() => hasSale ? displayVariant.sale_price_formatted : displayVariant.price_formatted, [displayVariant, hasSale]);
  const originalPrice = useMemo(() => hasSale ? displayVariant.price_formatted : null, [displayVariant, hasSale]);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.variants.length > 1) {
      onAddToCart(product);
      return;
    }

    const defaultVariant = product.variants[0];

    try {
      await addToCart(product, defaultVariant, 1, defaultVariant.inventory_quantity);
      toast({
        title: "Agregado al carrito! 🛒",
        description: `${product.title} ha sido agregado a tu carrito.`,
      });
    } catch (error) {
      toast({
        title: "Error al agregar al carrito",
        description: error.message,
      });
    }
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="glass-card border-0 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="relative">
          <img
            src={product.image || placeholderImage}
            alt={product.title}
            className="w-full h-64 object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
          {product.ribbon_text && (
            <div className="absolute top-3 left-3 bg-pink-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {product.ribbon_text}
            </div>
          )}
          <div className="absolute top-3 right-3 bg-purple-500/80 text-white text-xs font-bold px-3 py-1 rounded-full flex items-baseline gap-1.5">
            {hasSale && (
              <span className="line-through opacity-70">{originalPrice}</span>
            )}
            <span>{displayPrice}</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold truncate text-white">{product.title}</h3>
          <p className="text-sm text-gray-300 h-10 overflow-hidden">{product.subtitle || '¡Mira este increíble producto!'}</p>
          <Button 
            onClick={handleAddToCart} 
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al carrito
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

const LaptopsCatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 5000000000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProcessors, setSelectedProcessors] = useState([]);
  const [selectedRAM, setSelectedRAM] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  
  // UI states
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    brands: true,
    processors: true,
    ram: true,
    storage: true,
    price: true
  });

  // Filter options
  const brandOptions = ['ACER', 'ASUS', 'HP', 'LENOVO', 'DELL', 'MSI', 'APPLE', 'COMPUMAX'];
  const processorOptions = ['Intel i3', 'Intel i5', 'Intel i7', 'Intel i9', 'Intel Ultra 3', 'Intel Ultra 5', 'Intel Ultra 7', 'AMD Ryzen 3', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9'];
  const ramOptions = ['8 GB', '12 GB', '16 GB', '24 GB', '32 GB'];
  const storageOptions = ['256 GB', '512 GB', '1 TB', '2 TB'];

  const sortOptions = [
    { value: 'featured', label: 'Destacados' },
    { value: 'price-asc', label: 'Precio: Menor a Mayor' },
    { value: 'price-desc', label: 'Precio: Mayor a Menor' },
    { value: 'newest', label: 'Más Recientes' },
    { value: 'popular', label: 'Populares' }
  ];

  useEffect(() => {
    const fetchProductsWithQuantities = async () => {
      try {
        setLoading(true);
        setError(null);

        const productsResponse = await getProducts();

        if (productsResponse.products.length === 0) {
          setProducts([]);
          return;
        }

        const productIds = productsResponse.products.map(product => product.id);

        const quantitiesResponse = await getProductQuantities({
          fields: 'inventory_quantity',
          product_ids: productIds
        });

        const variantQuantityMap = new Map();
        quantitiesResponse.variants.forEach(variant => {
          variantQuantityMap.set(variant.id, variant.inventory_quantity);
        });

        const productsWithQuantities = productsResponse.products.map(product => ({
          ...product,
          variants: product.variants.map(variant => ({
            ...variant,
            inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
          }))
        }));

        setProducts(productsWithQuantities);
      } catch (err) {
        setError(err.message || 'Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProductsWithQuantities();
  }, []);

  // Filter laptops only
  const laptopProducts = useMemo(() => {
    return products.filter(product => 
      product.title.toLowerCase().includes('portatil') ||
      product.title.toLowerCase().includes('laptop') ||
      product.title.toLowerCase().includes('portátil') ||
      product.category?.toLowerCase().includes('portatil') ||
      product.subtitle?.toLowerCase().includes('portatil')
    );
  }, [products]);

  // Apply filters
  const filteredProducts = useMemo(() => {
    let filtered = [...laptopProducts];

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        selectedBrands.some(brand => 
          product.title.toUpperCase().includes(brand)
        )
      );
    }

    // Processor filter
    if (selectedProcessors.length > 0) {
      filtered = filtered.filter(product => 
        selectedProcessors.some(processor => 
          product.title.toUpperCase().includes(processor.toUpperCase())
        )
      );
    }

    // RAM filter
    if (selectedRAM.length > 0) {
      filtered = filtered.filter(product => {
        const title = product.title.toUpperCase();
        return selectedRAM.some(ram => {
          const ramUpper = ram.toUpperCase();
          // Extract the number from the filter option (e.g., "8" from "8 GB")
          const ramNumber = ramUpper.replace(/\D/g, '');
          // Look for exact match with word boundaries
          const regex = new RegExp(`\\b${ramNumber}\\s*GB\\b`, 'i');
          return regex.test(title);
        });
      });
    }

    // Storage filter
    if (selectedStorage.length > 0) {
      filtered = filtered.filter(product => {
        const title = product.title.toUpperCase();
        return selectedStorage.some(storage => {
          const storageUpper = storage.toUpperCase();
          // Extract the number and unit from the filter option (e.g., "512" and "GB" from "512 GB")
          const storageNumber = storageUpper.replace(/\D/g, '');
          const storageUnit = storageUpper.includes('TB') ? 'TB' : 'GB';
          // Look for exact match with word boundaries
          const regex = new RegExp(`\\b${storageNumber}\\s*${storageUnit}\\b`, 'i');
          return regex.test(title);
        });
      });
    }

    // Price filter
    filtered = filtered.filter(product => {
      const variant = product.variants[0];
      const price = variant.sale_price_in_cents || variant.price_in_cents;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => {
          const priceA = a.variants[0].sale_price_in_cents || a.variants[0].price_in_cents;
          const priceB = b.variants[0].sale_price_in_cents || b.variants[0].price_in_cents;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filtered.sort((a, b) => {
          const priceA = a.variants[0].sale_price_in_cents || a.variants[0].price_in_cents;
          const priceB = b.variants[0].sale_price_in_cents || b.variants[0].price_in_cents;
          return priceB - priceA;
        });
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case 'popular':
        filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [laptopProducts, selectedBrands, selectedProcessors, selectedRAM, selectedStorage, priceRange, sortBy]);

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleProcessor = (processor) => {
    setSelectedProcessors(prev => 
      prev.includes(processor) ? prev.filter(p => p !== processor) : [...prev, processor]
    );
  };

  const toggleRAM = (ram) => {
    setSelectedRAM(prev => 
      prev.includes(ram) ? prev.filter(r => r !== ram) : [...prev, ram]
    );
  };

  const toggleStorage = (storage) => {
    setSelectedStorage(prev => 
      prev.includes(storage) ? prev.filter(s => s !== storage) : [...prev, storage]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedProcessors([]);
    setSelectedRAM([]);
    setSelectedStorage([]);
    setPriceRange([0, 5000000000]);
    setSortBy('featured');
  };

  const activeFilterCount = selectedBrands.length + selectedProcessors.length + selectedRAM.length + selectedStorage.length;

  const handleAddToCart = (product) => {
    // Navigate to product detail for multi-variant products
    window.location.href = `/product/${product.id}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-16 w-16 text-white animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 p-8">
        <p>Error al cargar productos: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Portátiles — KIRITSU TECHNOLOGIES</title>
      </Helmet>
      
      {/* Header */}
      <section className="relative border-b border-white/10 py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-[90rem] px-5">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">E-commerce</span>
          <h1 className="font-display text-4xl sm:text-5xl mt-4">
            Catálogo de <span className="text-gradient">Portátiles</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Explora nuestra selección de portátiles y laptops de última generación con la mejor tecnología del mercado.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-[90rem] px-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <Button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              variant="outline"
              className="w-full"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filtros {activeFilterCount > 0 && `(${activeFilterCount})`}
            </Button>
          </div>

          {/* Filters Sidebar */}
          <aside className={`lg:block w-full lg:w-72 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Filtros</h2>
                {activeFilterCount > 0 && (
                  <Button
                    onClick={clearAllFilters}
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80"
                  >
                    Limpiar todos
                  </Button>
                )}
              </div>

              {/* Price Range */}
              <FilterSection
                title="Rango de Precio"
                isOpen={openSections.price}
                onToggle={() => setOpenSections(prev => ({ ...prev, price: !prev.price }))}
              >
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000000000}
                    step={1000000}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${(priceRange[0] / 100).toLocaleString()}</span>
                    <span>${(priceRange[1] / 100).toLocaleString()}</span>
                  </div>
                </div>
              </FilterSection>

              {/* Brands */}
              <FilterSection
                title="Marcas"
                isOpen={openSections.brands}
                onToggle={() => setOpenSections(prev => ({ ...prev, brands: !prev.brands }))}
              >
                {brandOptions.map(brand => (
                  <FilterCheckbox
                    key={brand}
                    label={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                ))}
              </FilterSection>

              {/* Processors */}
              <FilterSection
                title="Procesadores"
                isOpen={openSections.processors}
                onToggle={() => setOpenSections(prev => ({ ...prev, processors: !prev.processors }))}
              >
                {processorOptions.map(processor => (
                  <FilterCheckbox
                    key={processor}
                    label={processor}
                    checked={selectedProcessors.includes(processor)}
                    onChange={() => toggleProcessor(processor)}
                  />
                ))}
              </FilterSection>

              {/* RAM */}
              <FilterSection
                title="Memoria RAM"
                isOpen={openSections.ram}
                onToggle={() => setOpenSections(prev => ({ ...prev, ram: !prev.ram }))}
              >
                {ramOptions.map(ram => (
                  <FilterCheckbox
                    key={ram}
                    label={ram}
                    checked={selectedRAM.includes(ram)}
                    onChange={() => toggleRAM(ram)}
                  />
                ))}
              </FilterSection>

              {/* Storage */}
              <FilterSection
                title="Almacenamiento"
                isOpen={openSections.storage}
                onToggle={() => setOpenSections(prev => ({ ...prev, storage: !prev.storage }))}
              >
                {storageOptions.map(storage => (
                  <FilterCheckbox
                    key={storage}
                    label={storage}
                    checked={selectedStorage.includes(storage)}
                    onChange={() => toggleStorage(storage)}
                  />
                ))}
              </FilterSection>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} encontrados
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-muted-foreground">Ordenar por:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedBrands.map(brand => (
                  <div
                    key={brand}
                    className="flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {brand}
                    <button
                      onClick={() => toggleBrand(brand)}
                      className="hover:text-white transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                {selectedProcessors.map(processor => (
                  <div
                    key={processor}
                    className="flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {processor}
                    <button
                      onClick={() => toggleProcessor(processor)}
                      className="hover:text-white transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                {selectedRAM.map(ram => (
                  <div
                    key={ram}
                    className="flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {ram}
                    <button
                      onClick={() => toggleRAM(ram)}
                      className="hover:text-white transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                {selectedStorage.map(storage => (
                  <div
                    key={storage}
                    className="flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {storage}
                    <button
                      onClick={() => toggleStorage(storage)}
                      className="hover:text-white transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center text-gray-400 p-8">
                <p>No se encontraron productos con los filtros seleccionados.</p>
                <Button
                  onClick={clearAllFilters}
                  variant="outline"
                  className="mt-4"
                >
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} onAddToCart={handleAddToCart} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LaptopsCatalogPage;
