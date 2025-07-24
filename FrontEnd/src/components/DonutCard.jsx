'use client';

import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function DonutCard({ image, title, price, rating }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-xs mx-auto hover:shadow-xl transition duration-300">
      {/* Image ronde */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Titre + rating */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-700">★ {rating}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
      </p>

      {/* Prix + Actions */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">${price}</span>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full border hover:bg-gray-100 transition">
            <HeartIcon className="h-5 w-5 text-gray-700" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
            <ShoppingCartIcon className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
