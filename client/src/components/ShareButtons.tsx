import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Share2, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Linkedin,
  Copy,
  Bookmark
} from "lucide-react";

interface ShareButtonsProps {
  variant?: "compact" | "full";
  className?: string;
}

export default function ShareButtons({ variant = "full", className = "" }: ShareButtonsProps) {
  const { toast } = useToast();

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://vatremover.co.za';
  const shareTitle = "SA VAT Calculator - Remove 15% VAT Instantly";
  const shareText = "Check out this free South African VAT calculator! Instantly remove 15% VAT from any amount with real-time calculations and copy functionality.";

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailShare = () => {
    try {
      const emailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\nVisit: ${shareUrl}`)}`;
      window.location.href = emailUrl;
    } catch (error) {
      // Fallback for browsers that don't support mailto
      const fallbackUrl = `mailto:?subject=${shareTitle}&body=${shareText} - ${shareUrl}`;
      window.location.href = fallbackUrl;
    }
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "The VAT calculator link has been copied to your clipboard",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy link to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled sharing or error occurred
      }
    } else {
      // Fallback to copy link
      handleCopyLink();
    }
  };

  const handleAddBookmark = () => {
    const pageTitle = "SA VAT Calculator - Remove 15% VAT Instantly";
    const pageUrl = shareUrl;

    // Check if the browser supports adding bookmarks
    if (window.sidebar && window.sidebar.addPanel) {
      // Firefox
      window.sidebar.addPanel(pageTitle, pageUrl, '');
    } else if (window.external && ('AddFavorite' in window.external)) {
      // Internet Explorer
      window.external.AddFavorite(pageUrl, pageTitle);
    } else {
      // Modern browsers - show instructions
      toast({
        title: "Add to Bookmarks",
        description: `Press Ctrl+D (Windows) or Cmd+D (Mac) to bookmark this page`,
        duration: 5000,
      });
    }
  };

  if (variant === "compact") {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        <Button
          size="sm"
          variant="outline"
          onClick={handleNativeShare}
          className="text-primary hover:bg-primary hover:text-white transition-colors duration-200"
        >
          <Share2 className="w-3 h-3 mr-1" />
          Share
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleWhatsAppShare}
          className="text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-3 h-3" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleAddBookmark}
          className="text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
          title="Add to Bookmarks"
        >
          <Bookmark className="w-3 h-3" />
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6 ${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center justify-center">
          <Share2 className="w-5 h-5 mr-2 text-primary" />
          Share This VAT Calculator
        </h3>
        <p className="text-sm text-gray-600">
          Help others save time with instant VAT calculations
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Button
          onClick={handleWhatsAppShare}
          className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 group"
        >
          <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
          WhatsApp
        </Button>

        <Button
          onClick={handleEmailShare}
          className="bg-gray-600 hover:bg-gray-700 text-white transition-colors duration-200 group"
        >
          <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
          Email
        </Button>

        <Button
          onClick={handleFacebookShare}
          className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 group"
        >
          <Facebook className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
          Facebook
        </Button>

        <Button
          onClick={handleTwitterShare}
          className="bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-200 group"
        >
          <Twitter className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
          Twitter
        </Button>

        <Button
          onClick={handleLinkedInShare}
          className="bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-200 group"
        >
          <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
          LinkedIn
        </Button>

        <Button
          onClick={handleCopyLink}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 group"
        >
          <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
          Copy Link
        </Button>
      </div>

      <div className="mt-4 text-center">
        <Button
          onClick={handleNativeShare}
          variant="ghost"
          size="sm"
          className="text-primary hover:bg-primary/10"
        >
          <Share2 className="w-3 h-3 mr-1" />
          More sharing options
        </Button>
      </div>
    </div>
  );
}