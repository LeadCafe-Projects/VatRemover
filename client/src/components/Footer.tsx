import { Link } from "wouter";
import ShareButtons from "./ShareButtons";

export default function Footer() {
  const handleLinkClick = () => {
    // Scroll to top when any link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Sharing Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Found this useful?</h3>
            <p className="text-sm text-gray-300 mb-4">Share with colleagues and friends who need VAT calculations</p>
            <ShareButtons variant="compact" className="justify-center" />
          </div>
          
          <nav className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors" onClick={handleLinkClick}>
              VAT Remover
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/how-to-use" className="hover:text-white transition-colors" onClick={handleLinkClick}>
              How To Use
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/examples" className="hover:text-white transition-colors" onClick={handleLinkClick}>
              Examples
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/business-guide" className="hover:text-white transition-colors" onClick={handleLinkClick}>
              Business Guide
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/faq" className="hover:text-white transition-colors" onClick={handleLinkClick}>
              FAQ
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors" onClick={handleLinkClick}>
              Disclaimer
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/feedback" className="hover:text-white transition-colors" onClick={handleLinkClick}>
              Feedback
            </Link>
          </nav>
          <div className="mt-4 text-xs text-gray-400">
            © 2025 SA VAT Calculator brought to you by LeadCafé - Simple, accurate VAT calculations for South African businesses.
          </div>
        </div>
      </div>
    </footer>
  );
}