import { Link } from "wouter";

export default function Footer() {
  const handleLinkClick = () => {
    // Scroll to top when any link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <nav className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors" onClick={handleLinkClick}>
              VAT Remover
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/how-to-use" className="hover:text-gray-900 transition-colors" onClick={handleLinkClick}>
              How To Use
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/examples" className="hover:text-gray-900 transition-colors" onClick={handleLinkClick}>
              Examples
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/business-guide" className="hover:text-gray-900 transition-colors" onClick={handleLinkClick}>
              Business Guide
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/faq" className="hover:text-gray-900 transition-colors" onClick={handleLinkClick}>
              FAQ
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/disclaimer" className="hover:text-gray-900 transition-colors" onClick={handleLinkClick}>
              Disclaimer
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/feedback" className="hover:text-gray-900 transition-colors" onClick={handleLinkClick}>
              Feedback
            </Link>
          </nav>
          <div className="mt-4 text-xs text-gray-500">
            © 2025 SA VAT Calculator brought to you by LeadCafé - Simple, accurate VAT calculations for South African businesses.
          </div>
        </div>
      </div>
    </footer>
  );
}