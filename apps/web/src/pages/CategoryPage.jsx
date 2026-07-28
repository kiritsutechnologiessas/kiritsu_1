import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ProductsList from '@/components/ProductsList';

const categoryTitles = {
  'computador': 'Computadores',
  'portatiles': 'Portátiles',
  'accesorios-pc': 'Accesorios PC',
  'mouse-teclados': 'Mouse y Teclados',
  'software': 'Software'
};

const categoryDescriptions = {
  'computador': 'Computadores de escritorio de alto rendimiento para trabajo y gaming.',
  'portatiles': 'Portátiles y laptops de última generación con la mejor tecnología.',
  'accesorios-pc': 'Accesorios y periféricos para potenciar tu experiencia de cómputo.',
  'mouse-teclados': 'Mouse y teclados ergonómicos para mayor comodidad y precisión.',
  'software': 'Software y licencias para tus necesidades profesionales y personales.'
};

const CategoryPage = () => {
  const { category } = useParams();
  const title = categoryTitles[category] || 'Categoría';
  const description = categoryDescriptions[category] || 'Explora nuestra selección de productos.';

  return (
    <>
      <Helmet>
        <title>{title} — KIRITSU TECHNOLOGIES</title>
      </Helmet>
      <section className="relative border-b border-white/10 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-[90rem] px-5">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">E-commerce</span>
          <h1 className="font-display text-4xl sm:text-5xl mt-4">
            {title} <span className="text-gradient">tecnológicos</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[90rem] px-5 py-16">
        <ProductsList category={category} />
      </section>
    </>
  );
};

export default CategoryPage;
