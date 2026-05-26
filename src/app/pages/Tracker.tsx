import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import { ChevronDown, Search, MoreVertical, RotateCcw, Columns3, ChevronLeft, ChevronRight, Maximize2, Grid3x3, Plus, Share2, Download } from 'lucide-react';
import { SelectField } from '../components/SelectField';
import { CoCounselInsightsPanel } from '../components/CoCounselInsightsPanel';
import { Sparkles } from 'lucide-react';
import checkboxSvgPaths from '../../imports/Container-1/svg-7eno29jiqv';
import { Checkbox } from '../components/Checkbox';

interface LeaseData {
  id: number;
  propertyName: string;
  location: string;
  tenant: string;
  leaseStartDate: string;
  leaseEndDate: string;
  breakDate: string;
  rentReviewDate: string;
  currentRent: string;
  status: 'Active' | 'Expiring Soon' | 'Break Notice' | 'Under Review';
  sqft: string;
  landlord: string;
}

const leaseData: LeaseData[] = [
  {
    id: 1,
    propertyName: "City Centre Office",
    location: "Manchester, M1 4BT",
    tenant: "Tech Solutions Ltd",
    leaseStartDate: "01/04/2021",
    leaseEndDate: "31/03/2031",
    breakDate: "31/03/2026",
    rentReviewDate: "01/04/2027",
    currentRent: "£185,000",
    status: "Break Notice",
    sqft: "12,500",
    landlord: "Commercial Property Holdings"
  },
  {
    id: 2,
    propertyName: "Riverside Business Park",
    location: "Leeds, LS1 4AP",
    tenant: "Financial Services Group",
    leaseStartDate: "15/06/2022",
    leaseEndDate: "14/06/2032",
    breakDate: "14/06/2027",
    rentReviewDate: "15/12/2026",
    currentRent: "£245,000",
    status: "Active",
    sqft: "18,750",
    landlord: "Yorkshire Estates Ltd"
  },
  {
    id: 3,
    propertyName: "Metro Tower",
    location: "Birmingham, B2 4QA",
    tenant: "Consulting Partners LLP",
    leaseStartDate: "01/01/2023",
    leaseEndDate: "31/12/2028",
    breakDate: "N/A",
    rentReviewDate: "01/01/2027",
    currentRent: "£320,000",
    status: "Expiring Soon",
    sqft: "22,000",
    landlord: "Midlands Commercial"
  },
  {
    id: 4,
    propertyName: "Gateway Building",
    location: "London, EC2M 7PP",
    tenant: "Marketing Agency Ltd",
    leaseStartDate: "01/09/2020",
    leaseEndDate: "31/08/2030",
    breakDate: "31/08/2025",
    rentReviewDate: "01/03/2026",
    currentRent: "£425,000",
    status: "Under Review",
    sqft: "15,200",
    landlord: "London Property Group"
  },
  {
    id: 5,
    propertyName: "Parkside Offices",
    location: "Bristol, BS1 3LG",
    tenant: "Design Studio Co",
    leaseStartDate: "01/11/2022",
    leaseEndDate: "31/10/2032",
    breakDate: "31/10/2027",
    rentReviewDate: "01/11/2028",
    currentRent: "£165,000",
    status: "Active",
    sqft: "9,800",
    landlord: "Southwest Properties"
  },
  {
    id: 6,
    propertyName: "Innovation Centre",
    location: "Cambridge, CB2 1TN",
    tenant: "Research Labs Ltd",
    leaseStartDate: "01/03/2021",
    leaseEndDate: "28/02/2031",
    breakDate: "28/02/2026",
    rentReviewDate: "01/09/2026",
    currentRent: "£275,000",
    status: "Active",
    sqft: "16,500",
    landlord: "University Estates"
  },
  {
    id: 7,
    propertyName: "Waterfront Plaza",
    location: "Liverpool, L1 8JQ",
    tenant: "Retail Operations PLC",
    leaseStartDate: "01/05/2017",
    leaseEndDate: "30/04/2027",
    breakDate: "30/04/2022",
    rentReviewDate: "01/05/2022",
    currentRent: "£195,000",
    status: "Active",
    sqft: "14,200",
    landlord: "Mersey Developments"
  },
  {
    id: 8,
    propertyName: "Enterprise House",
    location: "Sheffield, S1 2JE",
    tenant: "Manufacturing Services",
    leaseStartDate: "15/07/2020",
    leaseEndDate: "14/07/2025",
    breakDate: "N/A",
    rentReviewDate: "15/01/2024",
    currentRent: "£142,000",
    status: "Expiring Soon",
    sqft: "11,300",
    landlord: "Industrial Estates Ltd"
  },
  {
    id: 9,
    propertyName: "Quayside Tower",
    location: "Newcastle, NE1 3DX",
    tenant: "Digital Media Group",
    leaseStartDate: "01/02/2021",
    leaseEndDate: "31/01/2031",
    breakDate: "31/01/2026",
    rentReviewDate: "01/08/2025",
    currentRent: "£210,000",
    status: "Active",
    sqft: "14,800",
    landlord: "Northeast Properties"
  },
  {
    id: 10,
    propertyName: "Victoria Business Centre",
    location: "Edinburgh, EH2 4BN",
    tenant: "Legal Services Scotland",
    leaseStartDate: "01/10/2019",
    leaseEndDate: "30/09/2024",
    breakDate: "N/A",
    rentReviewDate: "01/04/2024",
    currentRent: "£298,000",
    status: "Expiring Soon",
    sqft: "19,400",
    landlord: "Scottish Commercial Estates"
  }
];

export function Tracker() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [selectedSheet, setSelectedSheet] = useState('lease-tracker');
  const [selectedView, setSelectedView] = useState('all-matters');
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [showInsightsPanel, setShowInsightsPanel] = useState(false);
  const context = useOutletContext<{ 
    isCoCounselOpen: boolean;
    sendMessageToChat?: (message: string) => void;
  }>();
  
  const { isCoCounselOpen, sendMessageToChat } = context || { isCoCounselOpen: false };

  const totalPages = Math.ceil(leaseData.length / itemsPerPage);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showAdvancedSearch && !target.closest('.kebab-menu')) {
        setShowAdvancedSearch(false);
      }
      if (showActionsMenu && !target.closest('.actions-menu')) {
        setShowActionsMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAdvancedSearch, showActionsMenu]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-[#eaffe5] text-[#387c2b] border-[#387c2b]';
      case 'Expiring Soon':
        return 'bg-[#fff8e5] text-[#ab3300] border-[#ab3300]';
      case 'Break Notice':
        return 'bg-[#ffeded] text-[#dc0a0a] border-[#dc0a0a]';
      case 'Under Review':
        return 'bg-[#ededed] text-[#404040] border-[#404040]';
      default:
        return 'bg-[#ededed] text-[#404040] border-[#404040]';
    }
  };

  const toggleRowSelection = (id: number) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === leaseData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(leaseData.map(row => row.id));
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Content Container - 1370px wide, centered */}
      <div className={`max-w-[1370px] mx-auto py-6 pb-8 ${isCoCounselOpen ? 'px-[15px]' : ''}`}>
        {/* Page Header */}
        <h1 className="text-[28px] font-['Clario:Medium',sans-serif] text-[#1f1f1f] leading-[1.2] mb-6">
          Lease Tracker
        </h1>

        {/* iSheet Container with border and rounded corners */}
        <div className="bg-white border border-[#8a8a8a] rounded-[8px] overflow-hidden">
          {/* Toolbar - First Row */}
          <div className="bg-white h-[56px] px-[16px] flex items-center justify-between border-b border-[#d2d2d2]">
            {/* Left side - Dropdowns */}
            <div className="flex items-center gap-2">
              {/* iSheet Dropdown */}
              <SelectField
                options={[
                  { value: 'lease-tracker', label: 'iSheet: Lease tracker' }
                ]}
                value={selectedSheet}
                onChange={(e) => setSelectedSheet(e.target.value)}
                className="w-[260px]"
              />

              {/* View Dropdown */}
              <SelectField
                options={[
                  { value: 'all-matters', label: 'View: All Matters' }
                ]}
                value={selectedView}
                onChange={(e) => setSelectedView(e.target.value)}
                className="w-[240px]"
              />
            </div>

            {/* Right side - Search and View Options */}
            <div className="flex items-center gap-2">
              {/* Search - Figma Field Design */}
              <div className="bg-[#f7f7f7] flex items-center relative rounded-[4px] h-[32px] w-[400px]">
                <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                
                {/* Text Input */}
                <div className="bg-white flex-[1_0_0] h-[32px] relative rounded-bl-[4px] rounded-tl-[4px]">
                  <div aria-hidden="true" className="absolute border-[#8a8a8a] border-r border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="flex items-center pl-[12px] py-[4px] relative size-full">
                      <input
                        type="text"
                        placeholder="Press enter to search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#212223] bg-transparent border-none outline-none placeholder:text-[#999]"
                      />
                      {searchQuery && (
                        <div className="bg-[rgba(255,255,255,0.01)] flex items-center justify-center relative shrink-0 size-[32px]">
                          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
                          <button 
                            onClick={() => setSearchQuery('')}
                            className="flex items-center justify-center size-[32px] hover:bg-gray-100 transition-colors"
                          >
                            <svg className="w-4 h-4 text-[#212223]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Search Icon Button */}
                <div className="bg-[rgba(255,255,255,0.01)] flex items-center justify-center relative shrink-0 size-[32px]">
                  <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
                  <button className="flex items-center justify-center size-full hover:bg-gray-100 transition-colors rounded-r-[4px]">
                    <Search className="w-4 h-4 text-[#212223]" />
                  </button>
                </div>
              </div>

              {/* Three dots menu - with kebab options */}
              <div className="relative kebab-menu">
                <div className="bg-white hover:bg-[#edf2f0] flex items-start justify-center min-h-[32px] relative rounded-[4px] transition-colors">
                  <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <button 
                    onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                    className="flex gap-2 h-[32px] w-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] cursor-pointer"
                  >
                    <MoreVertical className="w-4 h-4 text-[#1d4b34]" />
                  </button>
                </div>
                
                {/* Dropdown with all options */}
                {showAdvancedSearch && (
                  <div className="absolute top-full right-0 mt-1 w-[240px] bg-white border border-[#d2d2d2] rounded-[4px] shadow-lg z-10">
                    <div className="py-1">
                      <button className="w-full px-4 py-2 text-left text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] hover:bg-[#f5f5f5] transition-colors">
                        Advanced search
                      </button>
                      <button className="w-full px-4 py-2 text-left text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] hover:bg-[#f5f5f5] transition-colors">
                        Export to Excel
                      </button>
                      <button className="w-full px-4 py-2 text-left text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] hover:bg-[#f5f5f5] transition-colors">
                        Save current view
                      </button>
                      <div className="border-t border-[#d2d2d2] my-1" />
                      <button className="w-full px-4 py-2 text-left text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] hover:bg-[#f5f5f5] transition-colors">
                        Manage columns
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Maximize */}
              <div className="bg-white hover:bg-[#edf2f0] flex items-start justify-center min-h-[32px] relative rounded-[4px] transition-colors">
                <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                <button className="flex gap-2 h-[32px] w-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] cursor-pointer">
                  <Maximize2 className="w-4 h-4 text-[#1d4b34]" />
                </button>
              </div>
            </div>
          </div>

          {/* Selection bar - Figma Design */}
          <div className="flex items-center justify-between py-3 max-w-[1370px] mx-auto">
            {/* Row-level actions - Left side */}
            <div className="flex items-center gap-4 px-4">
              {/* Checkbox with Select all */}
              <div className="flex items-center gap-2">
                <Checkbox 
                  checked={selectedRows.length === leaseData.length}
                  onChange={toggleSelectAll}
                />
                <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.3] text-[#1f1f1f] text-[16px]">Select all</p>
              </div>
              
              {/* Selected count */}
              <div className="flex gap-2 items-start font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#1f1f1f] text-[16px] whitespace-nowrap">
                <p>{selectedRows.length}</p>
                <p>selected</p>
              </div>
              
              {/* Actions dropdown */}
              <div className="relative actions-menu">
                <div className={`flex items-start justify-center min-h-[32px] relative rounded-[4px] ${
                  selectedRows.length > 0 ? 'bg-white' : 'bg-[rgba(255,255,255,0.01)]'
                }`}>
                  <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[5px] ${
                    selectedRows.length > 0 ? 'border-[#6e8178]' : 'border-[rgba(255,255,255,0.01)]'
                  }`} />
                  <button 
                    onClick={() => selectedRows.length > 0 && setShowActionsMenu(!showActionsMenu)}
                    disabled={selectedRows.length === 0}
                    className={`flex gap-2 h-[32px] items-center justify-center overflow-clip px-2 py-1 relative rounded-[4px] transition-colors ${
                      selectedRows.length > 0 ? 'cursor-pointer hover:bg-[#f5f5f5]' : 'cursor-not-allowed'
                    }`}
                  >
                    <div className={`flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[16px] whitespace-nowrap ${
                      selectedRows.length > 0 ? 'text-[#1d4b34]' : 'text-[#8a8a8a]'
                    }`}>
                      <p className="leading-[1.35]">Actions</p>
                    </div>
                    <ChevronDown className={`w-4 h-4 ${selectedRows.length > 0 ? 'text-[#1d4b34]' : 'text-[#8a8a8a]'}`} />
                  </button>
                </div>
                
                {/* Actions Dropdown Menu */}
                {showActionsMenu && selectedRows.length > 0 && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-[8px] shadow-[0px_4px_12px_4px_rgba(31,31,31,0.1)] z-10 min-w-[220px]">
                    <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                    <div className="content-stretch flex items-start overflow-clip p-[4px] relative rounded-[inherit]">
                      <div className="content-stretch flex flex-col items-start relative w-full">
                        <button className="bg-[rgba(255,255,255,0)] hover:bg-[#f5f5f5] transition-colors relative w-full">
                          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                            <Download className="w-[16px] h-[16px] text-[#1d4b34] shrink-0" />
                            <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] text-[#1f1f1f] text-[16px]">
                              <p className="leading-[1.5]">Export</p>
                            </div>
                          </div>
                        </button>
                        <button className="bg-[rgba(255,255,255,0)] hover:bg-[#f5f5f5] transition-colors relative w-full">
                          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                            <Share2 className="w-[16px] h-[16px] text-[#1d4b34] shrink-0" />
                            <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] text-[#1f1f1f] text-[16px]">
                              <p className="leading-[1.5]">Share</p>
                            </div>
                          </div>
                        </button>
                        <button 
                          onClick={() => {
                            setShowInsightsPanel(true);
                            setShowActionsMenu(false);
                          }}
                          className="bg-[rgba(255,255,255,0)] hover:bg-[#f5f5f5] transition-colors relative w-full"
                        >
                          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                            <Sparkles className="w-[16px] h-[16px] text-[#d64000] shrink-0" fill="#d64000" />
                            <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] text-[#1f1f1f] text-[16px]">
                              <p className="leading-[1.5] whitespace-nowrap">HighQ Assist insights</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Add button */}
              <div className="bg-white flex items-start justify-center min-h-[32px] relative rounded-[4px]">
                <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                <div className="flex gap-2 h-[32px] items-center justify-center px-2 py-1 relative rounded-[4px] cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <Plus className="w-4 h-4 text-[#1d4b34]" />
                  <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                    <p className="leading-[1.35]">Add</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Table actions - Right side */}
            <div className="flex gap-3 items-center justify-end pr-9">
              {/* Reorder columns button */}
              <div className="bg-[rgba(255,255,255,0.01)] flex items-start justify-center min-h-[32px] relative rounded-[4px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                <div className="flex gap-2 h-[32px] items-center justify-center overflow-clip px-2 py-1 relative rounded-[4px] cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <Columns3 className="w-4 h-4 text-[#1d4b34]" />
                  <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                    <p className="leading-[1.35]">Reorder columns</p>
                  </div>
                </div>
              </div>
              
              {/* Reset to default button */}
              <div className="bg-[rgba(255,255,255,0.01)] flex items-start justify-center min-h-[32px] relative rounded-[4px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                <div className="flex gap-2 h-[32px] items-center justify-center overflow-clip px-2 py-1 relative rounded-[4px] cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <RotateCcw className="w-4 h-4 text-[#8a8a8a]" />
                  <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                    <p className="leading-[1.35]">Reset to default</p>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="flex flex-row items-center self-stretch">
                <div className="h-full relative shrink-0 w-px">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="-translate-x-1/2 absolute bg-[#8a8a8a] bottom-0 left-1/2 top-0 w-px" />
                  </div>
                </div>
              </div>
              
              {/* Apply to all button */}
              <div className="bg-[rgba(255,255,255,0.01)] flex items-start justify-center min-h-[32px] relative rounded-[4px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                <div className="flex gap-2 h-[32px] items-center justify-center overflow-clip px-2 py-1 relative rounded-[4px] cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                    <p className="leading-[1.35]">Apply to all</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1600px]">
              <thead className="bg-[#f5f5f5] sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left border-b border-[#d2d2d2] w-[40px]">
                    <Checkbox 
                      checked={selectedRows.length === leaseData.length}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Property Name</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Location</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Tenant</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Lease Start Date</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Lease End Date</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Break Date</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Rent Review Date</th>
                  <th className="px-4 py-3 text-right text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Current Rent</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Status</th>
                  <th className="px-4 py-3 text-right text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Sqft</th>
                  <th className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#212223] border-b border-[#d2d2d2] whitespace-nowrap">Landlord</th>
                </tr>
              </thead>
              <tbody>
                {leaseData.map((row) => (
                  <tr key={row.id} className="hover:bg-[#f9f9f9] transition-colors">
                    <td className="px-4 py-3 border-b border-[#e5e5e5]">
                      <Checkbox 
                        checked={selectedRows.includes(row.id)}
                        onChange={() => toggleRowSelection(row.id)}
                      />
                    </td>
                    <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.propertyName}</td>
                    <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.location}</td>
                    <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.tenant}</td>
                    <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.leaseStartDate}</td>
                    <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.leaseEndDate}</td>
                    <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.breakDate}</td>
                    <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.rentReviewDate}</td>
                    <td className="px-4 py-3 text-right text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.currentRent}</td>
                    <td className="px-4 py-3 border-b border-[#e5e5e5]">
                      <div className={`content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[88px] inline-flex ${getStatusColor(row.status)}`}>
                        <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[89px] ${
                          row.status === 'Active' ? 'border-[#387c2b]' :
                          row.status === 'Expiring Soon' ? 'border-[#ab3300]' :
                          row.status === 'Break Notice' ? 'border-[#dc0a0a]' :
                          'border-[#404040]'
                        }`} />
                        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap">
                          <p className="leading-[1.35]">{row.status}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.sqft}</td>
                    <td className="px-4 py-3 text-left text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#212223] border-b border-[#e5e5e5] whitespace-nowrap">{row.landlord}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination - Figma Design */}
          <div className="bg-white flex items-center justify-between px-[16px] py-[4px] relative border-t border-[#8a8a8a]">
            {/* Left side - Page Controls */}
            <div className="flex gap-[16px] items-center">
              {/* Page count */}
              <div className="flex gap-[4px] items-start text-[14px]">
                <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] text-[#212223] whitespace-nowrap">
                  <p className="leading-[1.35]">Page</p>
                </div>
                <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[#212223] whitespace-nowrap">
                  <p className="leading-[1.35]">{currentPage}</p>
                </div>
                <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] text-[#212223] whitespace-nowrap">
                  <p className="leading-[1.35]">of</p>
                </div>
                <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[#212223] whitespace-nowrap">
                  <p className="leading-[1.35]">{totalPages}</p>
                </div>
              </div>
              
              {/* Previous/Next buttons */}
              <div className="flex gap-[12px] items-start">
                {/* Previous button */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={`bg-white flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] rounded-[4px] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#f5f5f5]'}`}
                  style={{ border: currentPage === 1 ? 'none' : '1px solid #1d4b34' }}
                >
                  <ChevronLeft className={`w-4 h-4 ${currentPage === 1 ? 'text-[#8a8a8a]' : 'text-[#1d4b34]'}`} />
                  <div className={`flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[14px] whitespace-nowrap ${currentPage === 1 ? 'text-[#8a8a8a]' : 'text-[#1d4b34]'}`}>
                    <p className="leading-[1.2]">Previous</p>
                  </div>
                </button>
                
                {/* Next button */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={`flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] rounded-[4px] ${currentPage === totalPages ? 'bg-[#f2f2f2] opacity-50 cursor-not-allowed' : 'bg-white cursor-pointer hover:bg-[#f5f5f5]'}`}
                  style={{ border: currentPage === totalPages ? 'none' : '1px solid #1d4b34' }}
                >
                  <div className={`flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[14px] whitespace-nowrap ${currentPage === totalPages ? 'text-[#8a8a8a]' : 'text-[#1d4b34]'}`}>
                    <p className="leading-[1.2]">Next</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${currentPage === totalPages ? 'text-[#8a8a8a]' : 'text-[#1d4b34]'}`} />
                </button>
              </div>
              
              {/* Divider */}
              <div className="h-[32px] relative w-px">
                <div className="overflow-clip relative rounded-[inherit] size-full">
                  <div className="-translate-x-1/2 absolute bg-[#e5e5e5] bottom-0 left-1/2 top-0 w-px" />
                </div>
              </div>
              
              {/* Go to page */}
              <div className="flex gap-[12px] items-center">
                {/* Input with label */}
                <div className="flex gap-[4px] items-center">
                  <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[#212223] text-[14px] whitespace-nowrap">
                    <p className="leading-[1.35]">Go to page:</p>
                  </div>
                  <div className="bg-white h-[24px] relative rounded-[4px] w-[78px]">
                    <input
                      type="number"
                      min={1}
                      max={totalPages}
                      value={currentPage}
                      onChange={(e) => {
                        const page = parseInt(e.target.value);
                        if (page >= 1 && page <= totalPages) {
                          setCurrentPage(page);
                        }
                      }}
                      className="w-full h-full px-[12px] py-[4px] rounded-[4px] font-['Source_Sans_3:Regular',sans-serif] text-[16px] text-[#212223] focus:outline-none"
                      style={{ border: '1px solid #8a8a8a' }}
                    />
                  </div>
                </div>
                
                {/* Go button */}
                <button
                  onClick={() => {}}
                  className="bg-white flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] rounded-[4px] cursor-pointer hover:bg-[#f5f5f5]"
                  style={{ border: '1px solid #1d4b34' }}
                >
                  <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[14px] whitespace-nowrap">
                    <p className="leading-[1.2]">Go</p>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Right side - View */}
            <div className="flex gap-[16px] items-center">
              {/* Showing count */}
              <div className="flex gap-[4px] items-start leading-[0] text-[#212223] text-[14px] whitespace-nowrap">
                <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center">
                  <p className="leading-[1.35]">(Showing </p>
                </div>
                <div className="flex gap-[4px] items-start">
                  <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center">
                    <p className="leading-[1.35]">1</p>
                  </div>
                  <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center">
                    <p className="leading-[1.35]">to</p>
                  </div>
                  <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center">
                    <p className="leading-[1.35]">{Math.min(itemsPerPage, leaseData.length)}</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center">
                  <p className="leading-[1.35]">of</p>
                </div>
                <div className="flex items-start">
                  <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center">
                    <p className="leading-[1.35]">{leaseData.length}</p>
                  </div>
                  <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center">
                    <p className="leading-[1.35]">)</p>
                  </div>
                </div>
              </div>
              
              {/* Items per page select */}
              <div className="flex gap-[8px] items-center">
                <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[#212223] text-[14px] whitespace-nowrap">
                  <p className="leading-[1.35]">Items per page</p>
                </div>
                <div className="bg-white h-[24px] relative rounded-[4px] w-[104px]">
                  <div className="flex items-center overflow-clip relative rounded-[inherit] size-full">
                    <select
                      value={itemsPerPage}
                      onChange={(e) => {
                        const newItemsPerPage = parseInt(e.target.value);
                        setItemsPerPage(newItemsPerPage);
                        setCurrentPage(1);
                      }}
                      className="flex-1 h-full px-[12px] py-[4px] appearance-none bg-transparent font-['Source_Sans_3:Regular',sans-serif] text-[14px] text-[#212223] cursor-pointer focus:outline-none"
                    >
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    <div className="flex items-center justify-center relative shrink-0 size-[32px] pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-[#1d4b34]" />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* HighQ Assist Insights Panel */}
      {showInsightsPanel && (
        <CoCounselInsightsPanel
          propertyName="City Centre Office"
          location="Tech Solutions Ltd · Manchester, M1 4BT"
          onClose={() => setShowInsightsPanel(false)}
          onAskCoCounsel={() => {
            setShowInsightsPanel(false);
            sendMessageToChat && sendMessageToChat("Give me a full summary of City Centre Office, Manchester — Tech Solutions Ltd. Include the current lease status, any critical dates, recommended actions, and flag any risks I should be aware of.", true);
          }}
        />
      )}
    </div>
  );
}