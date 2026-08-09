import React, { useState, useEffect } from 'react';
import { Camera, Upload, X, Eye, Image as ImageIcon } from 'lucide-react';

interface EditorialPlaceholderProps {
  label: string;
  type?: 'portrait' | 'campaign' | 'screenshot' | 'analytics' | 'before_after' | 'calendar';
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'banner' | 'auto';
  className?: string;
  defaultImage?: string;
  subtitle?: string;
  showUploadOption?: boolean;
}

export const EditorialPlaceholder: React.FC<EditorialPlaceholderProps> = ({
  label,
  type = 'campaign',
  aspectRatio = 'landscape',
  className = '',
  defaultImage,
  subtitle,
  showUploadOption = true
}) => {
  const [customImage, setCustomImage] = useState<string | null>(defaultImage || null);
  const [imgSrc, setImgSrc] = useState<string | null>(defaultImage || null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const activeImage = customImage || defaultImage || null;
    setImgSrc(activeImage);
  }, [defaultImage, customImage]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setImgSrc(url);
    }
  };

  const handleImgError = () => {
    // If the imported module URL failed for any reason, try the public path fallback
    if (typeof label === 'string' && imgSrc && !imgSrc.startsWith('/images/')) {
      const lowerLabel = label.toLowerCase();
      if (lowerLabel.includes('deepasha') || type === 'portrait') {
        setImgSrc('/images/about-who-i-am.png');
        return;
      }
      if (lowerLabel.includes('maitra')) {
        setImgSrc('/images/maitra-social-media.png');
        return;
      }
      if (lowerLabel.includes('steelman')) {
        setImgSrc('/images/steelman-campaign-strategy.png');
        return;
      }
      if (lowerLabel.includes('real estate') || lowerLabel.includes('realestate') || lowerLabel.includes('lead generation')) {
        setImgSrc('/images/realestate-lead-generation.png');
        return;
      }
      if (lowerLabel.includes('restaurant') || lowerLabel.includes('content strategy')) {
        setImgSrc('/images/restaurant-content-strategy.png');
        return;
      }
    }
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'portrait':
        return 'aspect-[3/4]';
      case 'square':
        return 'aspect-square';
      case 'banner':
        return 'aspect-[21/9]';
      case 'auto':
        return 'h-auto';
      case 'landscape':
      default:
        return 'aspect-[16/10]';
    }
  };

  const getTypeBadge = () => {
    switch (type) {
      case 'portrait': return 'EDITORIAL PORTRAIT';
      case 'analytics': return 'METRICS / DATA';
      case 'before_after': return 'BEFORE / AFTER STRATEGY';
      case 'calendar': return 'CONTENT CALENDAR';
      case 'screenshot': return 'SOCIAL MEDIA SCREENSHOT';
      case 'campaign':
      default: return 'CAMPAIGN VISUAL';
    }
  };

  const activeSrc = imgSrc || defaultImage || customImage;

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {activeSrc ? (
        <div className={`relative w-full ${getAspectClass()} overflow-hidden border border-[#58111A]/20 bg-[#FAF7F2]`}>
          <img
            src={activeSrc}
            alt={label}
            onError={handleImgError}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#58111A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="p-3 bg-[#FAF7F2] text-[#58111A] text-xs font-semibold uppercase tracking-wider hover:bg-[#58111A] hover:text-[#FAF7F2] transition-colors flex items-center gap-2"
            >
              <Eye className="w-4 h-4" /> Expand
            </button>
            {showUploadOption && (
              <label className="p-3 bg-[#58111A] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#3D0B12] transition-colors cursor-pointer flex items-center gap-2">
                <Upload className="w-4 h-4" /> Replace
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`relative w-full ${getAspectClass()} bg-[#FAF7F2] border-2 border-dashed border-[#58111A]/25 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#58111A]/60 hover:bg-[#F5E8EA]/40`}
        >
          {/* Top header strip */}
          <div className="flex items-center justify-between text-[10px] tracking-widest uppercase font-mono text-[#58111A]/70">
            <span className="inline-flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#58111A] animate-pulse"></span>
              {getTypeBadge()}
            </span>
          </div>

          {/* Center editorial message */}
          <div className="my-auto py-6 text-center">
            <div className="inline-flex p-3 bg-[#58111A]/5 rounded-full mb-3 text-[#58111A]">
              {type === 'portrait' ? <Camera className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
            </div>
            <h4 className="font-serif-editorial text-lg md:text-xl font-bold text-[#58111A] tracking-tight max-w-md mx-auto leading-snug">
              {label}
            </h4>
            {subtitle && (
              <p className="text-xs text-[#1A1412]/70 mt-2 max-w-sm mx-auto font-sans-editorial">
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom upload action */}
          <div className="flex items-center justify-between pt-3 border-t border-[#58111A]/10 text-xs">
            <span className="text-[10px] tracking-wider uppercase text-[#1A1412]/50">
              EDITORIAL VISUAL
            </span>
            {showUploadOption && (
              <label className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#58111A] hover:text-[#3D0B12] cursor-pointer hover:underline transition-colors uppercase tracking-wider">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Visual</span>
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            )}
          </div>
        </div>
      )}

      {/* Expanded Modal */}
      {showModal && activeSrc && (
        <div className="fixed inset-0 z-50 bg-[#1A1412]/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center">
          <div className="relative max-w-4xl w-full bg-[#FAF7F2] p-4 md:p-6 border border-[#58111A]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#58111A]">
                {label}
              </span>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-[#58111A]/10 rounded transition-colors text-[#58111A]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <img src={activeSrc} alt={label} className="w-full max-h-[75vh] object-contain mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
};
