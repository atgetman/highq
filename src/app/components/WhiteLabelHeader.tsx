import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import imgLogo from '../../imports/Header/0d978f80071c27d2e1b8da912f9867d4fb8d94e0.png';
import imgAvatar from '../../imports/Header/28e5ea53f31daa8bccbf1d10f99dd35d45b6fe8b.png';
import { Search, Sparkles, Bell, Mail, Star, ChevronDown, MoreHorizontal } from 'lucide-react';
import { SafButton } from './SafButton';
import { SafButtonMenu } from './SafButtonMenu';

interface WhiteLabelHeaderProps {
  onCoCounselClick?: () => void;
}

export function WhiteLabelHeader({ onCoCounselClick }: WhiteLabelHeaderProps) {
  const location = useLocation();
  const [isPrimaryMoreOpen, setIsPrimaryMoreOpen] = useState(false);
  const [isSecondaryMoreOpen, setIsSecondaryMoreOpen] = useState(false);
  
  return (
    <div className="bg-white w-full">
      {/* Top Header with Logo and Icons */}
      <div className="min-h-[56px]">
        <div className="max-w-[1400px] mx-auto px-[15px] min-h-[56px] flex flex-wrap items-center justify-between gap-2 py-2">
          {/* Logo */}
          <Link to="/" className="h-[35px] w-[263px] flex-shrink-0">
            <img 
              alt="armstrong + fischer" 
              className="h-full w-full object-contain" 
              src={imgLogo} 
            />
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
              <Search className="w-4 h-4 text-[#123021]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
              <Sparkles className="w-4 h-4 text-[#404040]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
              <Bell className="w-4 h-4 text-[#123021]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
              <Mail className="w-4 h-4 text-[#123021]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
              <Star className="w-4 h-4 text-[#123021]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center">
              <div className="w-[34px] h-[34px] rounded-full border border-[#acb7b1] overflow-hidden bg-[#0a4e75] flex items-center justify-center">
                <span className="text-white font-['Source_Sans_3:SemiBold',sans-serif] text-[14px]">
                  TS
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="h-[56px] border-b border-[#d2d2d2]">
        <div className="max-w-[1400px] mx-auto px-[15px] h-[56px] flex items-center gap-1">
          {/* Always visible items */}
          <div className="hidden 2xl:flex items-center gap-1 h-full">
            <NavItem label="Marketplace" />
            <NavItem label="Marketplace templates" hasDropdown />
            <NavItem label="Our people" />
            <NavItem label="Dashboards" hasDropdown />
            <NavItem label="Dealcloser" />
            <NavItem label="Template generation" />
          </div>

          {/* Responsive: Show fewer items on smaller screens */}
          <div className="hidden xl:flex 2xl:hidden items-center gap-1 h-full">
            <NavItem label="Marketplace" />
            <NavItem label="Marketplace templates" hasDropdown />
            <NavItem label="Our people" />
            <NavItem label="Dashboards" hasDropdown />
            <MoreDropdown 
              isOpen={isPrimaryMoreOpen} 
              setIsOpen={setIsPrimaryMoreOpen}
              items={[
                { label: 'Dealcloser' },
                { label: 'Template generation' }
              ]}
            />
          </div>

          <div className="hidden lg:flex xl:hidden items-center gap-1 h-full">
            <NavItem label="Marketplace" />
            <NavItem label="Marketplace templates" hasDropdown />
            <MoreDropdown 
              isOpen={isPrimaryMoreOpen} 
              setIsOpen={setIsPrimaryMoreOpen}
              items={[
                { label: 'Our people' },
                { label: 'Dashboards', hasDropdown: true },
                { label: 'Dealcloser' },
                { label: 'Template generation' }
              ]}
            />
          </div>

          <div className="flex lg:hidden items-center gap-1 h-full">
            <NavItem label="Marketplace" />
            <MoreDropdown 
              isOpen={isPrimaryMoreOpen} 
              setIsOpen={setIsPrimaryMoreOpen}
              items={[
                { label: 'Marketplace templates', hasDropdown: true },
                { label: 'Our people' },
                { label: 'Dashboards', hasDropdown: true },
                { label: 'Dealcloser' },
                { label: 'Template generation' }
              ]}
            />
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="h-[56px] bg-[#F7F7F7] border-b border-[#d2d2d2]">
        <div className="max-w-[1400px] mx-auto px-[15px] h-[56px] flex items-center gap-2">
          {/* Portfolio Meridian Dropdown */}
          <div className="w-[200px] flex-shrink-0">
            <SafButtonMenu />
          </div>

          {/* HighQ Assist Button */}
          <div className="h-[32px] flex-shrink-0 mr-2">
            <SafButton onClick={onCoCounselClick} />
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-[#CCCCCC] flex-shrink-0 mr-2" />

          {/* Always visible items */}
          <div className="hidden 2xl:flex items-center gap-2 h-full">
            <NavItem label="Project dashboard" to="/" active={location.pathname === '/'} />
            <NavItem label="Activity" />
            <NavItem label="Documents" to="/documents" active={location.pathname === '/documents'} />
            <NavItem label="Tracker" to="/tracker" active={location.pathname === '/tracker'} />
            <NavItem label="Tasks" />
            <NavItem label="Reporting" hasDropdown />
            <NavItem label="Admin" />
          </div>

          {/* Responsive: Show fewer items on smaller screens */}
          <div className="hidden xl:flex 2xl:hidden items-center gap-2 h-full">
            <NavItem label="Project dashboard" to="/" active={location.pathname === '/'} />
            <NavItem label="Activity" />
            <NavItem label="Documents" to="/documents" active={location.pathname === '/documents'} />
            <NavItem label="Tracker" to="/tracker" active={location.pathname === '/tracker'} />
            <MoreDropdown 
              isOpen={isSecondaryMoreOpen} 
              setIsOpen={setIsSecondaryMoreOpen}
              items={[
                { label: 'Tasks' },
                { label: 'Reporting', hasDropdown: true },
                { label: 'Admin' }
              ]}
            />
          </div>

          <div className="hidden lg:flex xl:hidden items-center gap-2 h-full">
            <NavItem label="Project dashboard" to="/" active={location.pathname === '/'} />
            <NavItem label="Documents" to="/documents" active={location.pathname === '/documents'} />
            <NavItem label="Tracker" to="/tracker" active={location.pathname === '/tracker'} />
            <MoreDropdown 
              isOpen={isSecondaryMoreOpen} 
              setIsOpen={setIsSecondaryMoreOpen}
              items={[
                { label: 'Activity' },
                { label: 'Tasks' },
                { label: 'Reporting', hasDropdown: true },
                { label: 'Admin' }
              ]}
            />
          </div>

          <div className="flex lg:hidden items-center gap-2 h-full">
            <NavItem label="Project dashboard" to="/" active={location.pathname === '/'} />
            <MoreDropdown 
              isOpen={isSecondaryMoreOpen} 
              setIsOpen={setIsSecondaryMoreOpen}
              items={[
                { label: 'Activity' },
                { label: 'Documents', to: '/documents' },
                { label: 'Tracker', to: '/tracker' },
                { label: 'Tasks' },
                { label: 'Reporting', hasDropdown: true },
                { label: 'Admin' }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
  to?: string;
  lightTheme?: boolean;
}

function NavItem({ label, active, hasDropdown, to, lightTheme }: NavItemProps) {
  const textColor = lightTheme ? 'text-white' : 'text-[#212223]';
  const hoverBg = lightTheme ? 'group-hover:bg-[#0c5e8a]' : 'group-hover:bg-[#e8e8e8]';
  
  const content = (
    <div className="h-full flex flex-col items-center justify-center relative group">
      <div className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-tl-[4px] rounded-tr-[4px] transition-colors ${hoverBg}`}>
        <p className={`font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[1.5] relative ${textColor} text-[16px] whitespace-nowrap`}>
          {label}
        </p>
        {hasDropdown && (
          <ChevronDown className={`w-3 h-3 ${textColor}`} />
        )}
      </div>
      {active && (
        <div className="absolute bottom-0 left-0 right-0 bg-[#94d1c2] h-[3px] rounded-tl-[4px] rounded-tr-[4px] z-10" />
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="h-full flex items-center no-underline">
        {content}
      </Link>
    );
  }

  return (
    <div className="h-full flex items-center">
      {content}
    </div>
  );
}

interface MoreDropdownProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  items: { label: string; hasDropdown?: boolean; to?: string }[];
}

function MoreDropdown({ isOpen, setIsOpen, items }: MoreDropdownProps) {
  return (
    <div className="relative h-full flex items-center">
      <button
        className="h-full flex flex-col items-center justify-center relative group px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-tl-[4px] rounded-tr-[4px] transition-colors group-hover:bg-[#e8e8e8]">
          <p className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[1.5] relative text-[#212223] text-[16px] whitespace-nowrap">
            More...
          </p>
        </div>
      </button>
      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown menu */}
          <div className="absolute top-full left-0 mt-[-1px] bg-white border border-[#d2d2d2] shadow-lg z-50 min-w-[200px] rounded-b-[4px]">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#f7f7f7] transition-colors"
              >
                {item.to ? (
                  <Link 
                    to={item.to} 
                    className="flex items-center justify-between px-4 py-3 no-underline text-[#212223]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[15px]">
                      {item.label}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-3 h-3 text-[#212223]" />
                    )}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
                    <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[15px] text-[#212223]">
                      {item.label}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-3 h-3 text-[#212223]" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}