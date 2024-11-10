import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Hat Store</div>
      <nav>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
