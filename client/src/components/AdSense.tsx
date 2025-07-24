import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderText?: string;
}

export default function AdSense({ 
  adSlot, 
  adFormat = "auto", 
  width, 
  height, 
  className = "",
  placeholderText = "Advertisement Space"
}: AdSenseProps) {
  useEffect(() => {
    try {
      // Only load ads if AdSense is properly configured
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log('AdSense not loaded yet');
    }
  }, []);

  // Check if AdSense is configured
  const isAdSenseConfigured = true; // AdSense is now configured with your publisher ID

  if (!isAdSenseConfigured) {
    // Show placeholder while AdSense is not configured
    return (
      <div className={`bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium ${className}`} 
           style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}>
        <span className="mr-2">📺</span>
        {placeholderText}
      </div>
    );
  }

  return (
    <div className={`${className} max-w-full overflow-hidden`}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', maxWidth: '100%', overflow: 'hidden' }}
        data-ad-client="ca-pub-4614672997891312"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        {...(width && { 'data-ad-layout-key': width })}
      />
    </div>
  );
}

// Pre-configured ad components for strategic placement
export function LeftSidebarAd() {
  return (
    <AdSense 
      adSlot="auto"
      adFormat="auto"
      width={300}
      height={600}
      className="sticky top-8 hidden lg:block"
      placeholderText="Left Sidebar Ad"
    />
  );
}

export function RightSidebarAd() {
  return (
    <AdSense 
      adSlot="auto"
      adFormat="auto"
      width={300}
      height={600}
      className="sticky top-8 hidden lg:block"
      placeholderText="Right Sidebar Ad"
    />
  );
}

export function BelowContentAd() {
  return (
    <AdSense 
      adSlot="auto"
      adFormat="auto"
      height={250}
      className="w-full max-w-2xl mx-auto"
      placeholderText="Below Content Ad"
    />
  );
}

export function MobileAd() {
  return (
    <AdSense 
      adSlot="auto"
      adFormat="auto"
      height={250}
      className="w-full lg:hidden"
      placeholderText="Mobile Ad"
    />
  );
}