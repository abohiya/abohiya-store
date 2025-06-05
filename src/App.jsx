import React from 'react'
import ProductCard from './components/ProductCard'

const products = [
  {
    id: 1,
    name: 'صيكان جلد طبيعي',
    price: '200 درهم',
    image: 'https://example.com/image1.jpg',
  },
  {
    id: 2,
    name: 'صيكان فاخر',
    price: '300 درهم',
    image: 'https://example.com/image2.jpg',
  },
]

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">منتجات ABOHIYA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App