import DonutCard from '@/components/DonutCard';

export default function Menu() {
  const products = [
    {
      image: '/images/Donuts_Choco_Blanc.png',
      title: 'Choco Blanc',
      price: 10,
      rating: 5,
    },
    {
      image: '/images/Donuts_Fraise.png',
      title: 'Fraise Love',
      price: 9,
      rating: 4.8,
    },
    {
      image: '/images/Cookies_Choco_Blanc.png',
      title: 'Cookie Choco Blanc',
      price: 8,
      rating: 4.9,
    },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-700">Nos meilleures ventes</h2>
        <p className="text-gray-500 mt-2">Les incontournables du moment</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {products.map((item, index) => (
          <DonutCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
}
