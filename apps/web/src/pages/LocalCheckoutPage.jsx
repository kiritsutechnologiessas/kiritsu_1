import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Mail, Phone, MapPin, CreditCard, Package, Loader2, X, MessageCircle } from 'lucide-react';
import { formatCurrency, formatCOP } from '@/api/EcommerceApi';
import { useToast } from '@/hooks/use-toast';

const AddiModal = ({ isOpen, onClose, cartItems, onContinue }) => {
  if (!isOpen) return null;

  const totalInCOP = cartItems.reduce((total, item) => {
    const price = item.variant.sale_price_in_cents ?? item.variant.price_in_cents;
    return total + price * item.quantity;
  }, 0);

  const productTitle = cartItems.length > 0 ? cartItems[0].product.title : 'producto';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Te acompañamos paso a paso hacia tu nuevo computador</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Solo necesito tu cédula</h3>
                <p className="text-gray-700">Es completamente seguro - Solo para verificar tu identidad</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Compárteme tu WhatsApp</h3>
                <p className="text-gray-700">Te escribo personalmente para conocer tus necesidades</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">Conversamos sobre tu situación</h3>
                <p className="text-gray-700">Te explico todas las opciones disponibles y resuelvo tus dudas</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">¡Listo! Tu computador te espera</h3>
                <p className="text-gray-700">Defines cuotas cómodas y obtienes tu equipo cuando quieras</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button onClick={onContinue} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base">
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddiFormModal = ({ isOpen, onClose, cartItems, onBack }) => {
  const [formData, setFormData] = useState({
    documento: '',
    telefono: '',
    nombre: ''
  });

  if (!isOpen) return null;

  const totalInCOP = cartItems.reduce((total, item) => {
    const price = item.variant.sale_price_in_cents ?? item.variant.price_in_cents;
    return total + price * item.quantity;
  }, 0);

  const productTitle = cartItems.length > 0 ? cartItems[0].product.title : 'producto';
  const formattedTotal = formatCOP(totalInCOP);

  const handleWhatsAppClick = () => {
    const message = `Hola Kiritsu! Me interesa la financiación con Addi para ${productTitle} por un valor de ${formattedTotal}. Mis datos son:\n📄 Documento: ${formData.documento}\n📱 Teléfono: ${formData.telefono}\n👤 Nombre: ${formData.nombre}\nNecesito ayuda para continuar con el proceso de financiación con Addi.`;
    const whatsappUrl = `https://wa.me/573017614184?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Addi - Completa tus datos</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="documento" className="text-gray-900">Número de documento</Label>
              <Input
                id="documento"
                type="text"
                value={formData.documento}
                onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
                placeholder="ejemplo: 12345678"
                className="text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-gray-900">Número de teléfono</Label>
              <Input
                id="telefono"
                type="tel"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="ejemplo: 3001234567"
                className="text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-gray-900">Nombre completo</Label>
              <Input
                id="nombre"
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="ejemplo: Juan Pérez"
                className="text-gray-900"
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-base flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp con asesor especializado
            </Button>

            <Button
              onClick={onBack}
              variant="outline"
              className="w-full font-semibold py-3 text-base"
            >
              Atrás
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocalCheckoutPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    departamento: '',
    codigo_descuento: '',
    notas: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAddiModal, setShowAddiModal] = useState(false);
  const [showAddiForm, setShowAddiForm] = useState(false);

  // Helper function to format price based on currency
  const formatPrice = (amountInCents, currencyInfo) => {
    if (currencyInfo?.code === 'COP') {
      return formatCOP(amountInCents);
    }
    return formatCurrency(amountInCents, currencyInfo);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build message body
    const messageBody = `
NUEVO PEDIDO - KIRITSU TECHNOLOGIES SAS

DATOS DEL CLIENTE:
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Dirección: ${formData.direccion}
Ciudad: ${formData.ciudad}
Departamento: ${formData.departamento}
Código de Descuento: ${formData.codigo_descuento || 'No aplicado'}

PRODUCTOS:
${cartItems.map((item, index) => `
${index + 1}. ${item.product.title}
   - Variante: ${item.variant.title}
   - Cantidad: ${item.quantity}
   - Precio unitario: ${formatPrice(item.variant.price_in_cents, item.variant.currency_info)}
   - Subtotal: ${formatPrice(
     (item.variant.sale_price_in_cents ?? item.variant.price_in_cents) * item.quantity,
     item.variant.currency_info
   )}
   - SKU: ${item.variant.sku}
`).join('\n')}

TOTAL: ${formatPrice(cartItems.reduce((total, item) => {
  const price = item.variant.sale_price_in_cents ?? item.variant.price_in_cents;
  return total + price * item.quantity;
}, 0), { code: 'COP' })}

NOTAS ADICIONALES:
${formData.notas || 'Sin notas adicionales'}
    `.trim();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ed0a3636-babe-4a53-8adb-1d72d5cea619',
          name: formData.nombre,
          email: formData.email,
          cc: formData.email,
          subject: `Nuevo Pedido - ${formData.nombre}`,
          message: messageBody,
          from_name: 'Checkout Web KIRITSU',
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Pedido enviado',
          description: 'Gracias por tu pedido. Te contactaremos pronto para coordinar el pago y la entrega.',
        });
        clearCart();
        navigate('/tienda');
      } else {
        throw new Error(result.message || 'Error al procesar la solicitud');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'No fue posible enviar el pedido',
        description: error?.message || 'Inténtalo nuevamente en unos minutos.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <Package className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">Agrega productos antes de proceder al checkout</p>
            <Button onClick={() => navigate('/tienda')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a la tienda
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/tienda')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la tienda
        </Button>

        <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Información de Envío
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección *</Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    required
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Calle 123 #45-67"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="codigo_descuento">Código de Descuento</Label>
                  <Input
                    id="codigo_descuento"
                    name="codigo_descuento"
                    value={formData.codigo_descuento}
                    onChange={handleChange}
                    placeholder="Si no cuenta con un código déjelo en blanco"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input
                      id="ciudad"
                      name="ciudad"
                      required
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Bogotá"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="departamento">Departamento *</Label>
                    <Input
                      id="departamento"
                      name="departamento"
                      required
                      value={formData.departamento}
                      onChange={handleChange}
                      placeholder="Cundinamarca"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notas">Notas Adicionales</Label>
                  <Textarea
                    id="notas"
                    name="notas"
                    value={formData.notas}
                    onChange={handleChange}
                    placeholder="Instrucciones especiales de entrega..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Pedido
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Resumen del pedido */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Resumen del Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.variant.id} className="flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-sm">{item.product.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.variant.title}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm">Cantidad: {item.quantity}</span>
                          <span className="text-sm font-semibold">
                            {formatPrice(
                              (item.variant.sale_price_in_cents ?? item.variant.price_in_cents) * item.quantity,
                              item.variant.currency_info
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-2xl font-bold">
                    {cartItems.length > 0 ? formatCOP(cartItems.reduce((total, item) => {
                      const price = item.variant.sale_price_in_cents ?? item.variant.price_in_cents;
                      return total + price * item.quantity;
                    }, 0)) : 'CO $0'}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="text-sm text-muted-foreground w-full">
                    <p className="font-medium text-foreground mb-3">Método de Pago</p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p><span className="font-medium text-foreground">Banco:</span> Bancolombia</p>
                        <p><span className="font-medium text-foreground">Tipo de Cuenta:</span> Ahorros</p>
                        <p><span className="font-medium text-foreground">N° de Cuenta:</span> 67886259139</p>
                        <p className="text-xs text-primary font-medium mt-2">Nota: Al realizar la transferencia se debe enviar el comprobante de pago a kiritsutechnologiessas@gmail.com después de realizar el pedido.</p>
                      </div>

                      <Separator />

                      <div>
                        <p className="font-medium text-foreground mb-3">¿Prefieres pagar en cuotas?</p>
                        <button
                          onClick={() => setShowAddiModal(true)}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                        >
                          <CreditCard className="h-5 w-5" />
                          Pagar con Addi
                        </button>
                        <p className="text-xs text-muted-foreground mt-2 text-center">Financia tu compra en cuotas cómodas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AddiModal
        isOpen={showAddiModal}
        onClose={() => setShowAddiModal(false)}
        cartItems={cartItems}
        onContinue={() => {
          setShowAddiModal(false);
          setShowAddiForm(true);
        }}
      />

      <AddiFormModal
        isOpen={showAddiForm}
        onClose={() => setShowAddiForm(false)}
        cartItems={cartItems}
        onBack={() => {
          setShowAddiForm(false);
          setShowAddiModal(true);
        }}
      />
    </div>
  );
};

export default LocalCheckoutPage;
