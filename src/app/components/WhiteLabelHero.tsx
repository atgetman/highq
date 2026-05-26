import React from 'react';
import { Star } from 'lucide-react';
import imgWelcome from 'figma:asset/be51e2d331a898da1e2aa88dd84de350298bed7f.png';

interface WhiteLabelHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

export function WhiteLabelHero({ 
  title = "My dashboard",
  description = "Find all the relevant information, action items, and answers for Portfolio Meridian in one place.",
  backgroundImage = imgWelcome,
  backgroundColor = "#000000"
}: WhiteLabelHeroProps) {
  return (
    <div 
      className="relative h-[200px] flex items-center overflow-hidden"
      style={{ 
        backgroundColor
      }}
    >
      {/* Background Image at 50% opacity */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-white font-['Clario:Medium',sans-serif] text-[32px] leading-[1.2] mb-2">
              {title}
            </h1>
            <p className="text-white/90 font-['Source_Sans_3:Regular',sans-serif] text-[16px] leading-[1.5] whitespace-nowrap">
              {description}
            </p>
          </div>

          {/* Star/Favorite Icon */}
          <button className="bg-white p-2 rounded hover:bg-gray-100 transition-colors mt-2">
            <Star className="w-5 h-5 text-[#404040]" />
          </button>
        </div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}