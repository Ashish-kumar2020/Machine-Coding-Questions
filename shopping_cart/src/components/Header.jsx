import { Heart, Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
            S
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            ShopKart
          </h1>
        </div>

        {/* Search */}
        <div className="hidden w-full max-w-xl md:block">
          <div className="flex items-center rounded-xl border bg-gray-100 px-4">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent px-3 py-3 outline-none"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 font-medium text-gray-600 lg:flex">
          <a href="#" className="hover:text-indigo-600">
            Home
          </a>

          <a href="#" className="hover:text-indigo-600">
            Shop
          </a>

          <a href="#" className="hover:text-indigo-600">
            Categories
          </a>

          <a href="#" className="hover:text-indigo-600">
            Deals
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="relative">
            <Heart className="text-gray-700" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </span>
          </button>

          <button className="relative">
            <ShoppingCart className="text-gray-700" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
              4
            </span>
          </button>

          <button className="rounded-full border p-2 hover:bg-gray-100">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;