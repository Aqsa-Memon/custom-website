import Image from "next/image"

export default function Shop() {
  // Sample products data
  const products = [
    { id: 1, name: 'Classic Baseball Cap', price: '$20', img: '/baseball.jpg' },
    { id: 2, name: 'Vintage Hat', price: '$35', img: '/vintage.png' },
    { id: 3, name: 'Snapback Cap', price: '$25', img: '/snapback.jpg' },
    { id: 4, name: 'Beanie', price: '$15', img: '/beanie.png' },
    { id: 5, name: 'Sun Hat', price: '$30', img: '/sunhat.jpg' },
  ]

  return (
    <div>
      <main className="shop">
        <h1>Our Collection</h1>
        <p>Discover our wide selection of hats and caps for every style.</p>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <Image src={product.img} height={300} width={300} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
