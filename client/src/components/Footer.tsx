import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <nav className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              VAT Remover
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/how-to-use" className="hover:text-gray-900 transition-colors">
              How To Use
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/examples" className="hover:text-gray-900 transition-colors">
              Examples
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/business-guide" className="hover:text-gray-900 transition-colors">
              Business Guide
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/faq" className="hover:text-gray-900 transition-colors">
              FAQ
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/feedback" className="hover:text-gray-900 transition-colors">
              Feedback
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/disclaimer" className="hover:text-gray-900 transition-colors">
              Disclaimer
            </Link>
          </nav>
          <div className="mt-4 text-xs text-gray-500">
            © 2025 VAT Remover. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}