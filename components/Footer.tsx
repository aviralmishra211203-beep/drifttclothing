export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-widest">DRIFTT</h2>
            <p className="text-gray-400 mt-4 leading-7">
              Premium luxury streetwear designed for those who move differently.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Oversized Tees</li>
              <li>Hoodies</li>
              <li>Caps</li>
              <li>New Arrivals</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Our Story</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 DRIFTT Apparel. All rights reserved.</p>

          <p className="mt-4 md:mt-0">
            Built with passion in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}