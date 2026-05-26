import React from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronRight, Plus } from 'lucide-react';

interface SiteSwitcher {
  route: string;
  label: string;
}

const siteSwitchers: SiteSwitcher[] = [
  { route: '/alpine', label: 'Project Alpine' },
  { route: '/lg', label: 'L&G Portfolio' },
  { route: '/vodafone', label: 'Vodafone Employment' },
];

const siteMeta: Record<string, { name: string; type: string }> = {
  '/alpine': { name: 'Project Alpine', type: 'M&A' },
  '/lg': { name: 'L&G Portfolio', type: 'Real Estate' },
  '/vodafone': { name: 'Vodafone Employment', type: 'Employment' },
};

export function GlobalNavBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === '/';
  const currentSite = siteMeta[pathname];

  return (
    <nav className="h-11 bg-white border-b border-[#E5E5E5] flex items-center px-4 sticky top-0 z-30">
      {/* LEFT: Logomark + breadcrumb */}
      <div className="flex items-center gap-2 min-w-0">
        <Link
          to="/"
          className="w-7 h-7 rounded bg-[#123021] flex items-center justify-center no-underline hover:bg-[#1d4b34] transition-colors flex-shrink-0"
          aria-label="HighQ home"
        >
          <span className="text-white font-['Clario:Bold',sans-serif] text-[12px] leading-none">
            HQ
          </span>
        </Link>

        {!isHome && (
          <div className="flex items-center gap-2 min-w-0">
            <ChevronRight className="w-3.5 h-3.5 text-[#999] flex-shrink-0" />
            <Link
              to="/"
              className="font-['Source_Sans_3',sans-serif] font-medium text-[13px] text-[#404040] hover:text-[#123021] no-underline whitespace-nowrap"
            >
              Sites
            </Link>
            {currentSite && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-[#999] flex-shrink-0" />
                <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[13px] text-[#123021] truncate">
                  {currentSite.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#EAF2F7] text-[#0a4e75] text-[10px] font-['Source_Sans_3',sans-serif] font-semibold uppercase tracking-wide flex-shrink-0">
                  {currentSite.type}
                </span>
              </>
            )}
          </div>
        )}
      </div>

      {/* CENTRE: Site switcher (md+, hidden on home) */}
      {!isHome && (
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {siteSwitchers.map((site) => {
            const isActive = pathname === site.route;
            return (
              <Link
                key={site.route}
                to={site.route}
                className={`px-3 py-1 rounded-full font-['Source_Sans_3',sans-serif] font-medium text-[13px] no-underline transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#123021] text-white'
                    : 'text-[#666] hover:bg-[#E8F0EA] hover:text-[#123021]'
                }`}
              >
                {site.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* RIGHT: New site + avatar */}
      <div className="flex items-center gap-2 ml-auto flex-shrink-0">
        <button className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded border border-[#C7DCC9] bg-[#F1F7F2] text-[#1d4b34] hover:bg-[#E3EFE5] font-['Source_Sans_3',sans-serif] font-medium text-[13px] transition-colors">
          <Plus className="w-3.5 h-3.5" />
          New site
        </button>
        <button
          className="w-7 h-7 rounded-full bg-[#0a4e75] flex items-center justify-center hover:bg-[#0c5e8a] transition-colors"
          aria-label="Ben Hartley profile"
        >
          <span className="text-white font-['Source_Sans_3',sans-serif] font-semibold text-[11px]">
            BH
          </span>
        </button>
      </div>
    </nav>
  );
}
