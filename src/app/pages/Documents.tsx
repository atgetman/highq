import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import { 
  ChevronDown, 
  ChevronRight,
  Upload, 
  Plus, 
  MoreVertical, 
  Eye,
  Search,
  Folder,
  Star,
  FileText,
  Maximize2,
  ChevronLeft,
  FolderOpen,
  File
} from 'lucide-react';
import { DocumentsSidebar } from '../components/DocumentsSidebar';

interface FolderItem {
  id: string;
  name: string;
  count?: number;
  expanded?: boolean;
  children?: FolderItem[];
}

interface DocumentRow {
  id: string;
  name: string;
  type: 'PDF' | 'DOCX';
  version: string;
  updatedBy: string;
  date: string;
  status: string;
}

// Helper function to get file icon based on type
const getFileIcon = (type: 'PDF' | 'DOCX') => {
  if (type === 'PDF') {
    // Red PDF icon
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V7L12 2Z" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#FEE2E2"/>
        <path d="M12 2V7H17" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11H13M7 14H10" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  } else {
    // Blue DOCX icon
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V7L12 2Z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#DBEAFE"/>
        <path d="M12 2V7H17" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11H13M7 14H13" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
};

export function Documents() {
  const { isCoCounselOpen } = useOutletContext<{ isCoCounselOpen: boolean }>();
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [showActionsMenu, setShowActionsMenu] = useState(false);

  const folderStructure: FolderItem[] = [
    {
      id: 'root',
      name: 'CLM solution template 2023',
      expanded: true,
      children: [
        { id: 'contract-intake', name: 'Contract Intake', count: 16 },
        { id: 'contract-mgmt', name: 'Contract Management Storage' },
        { id: 'review-negotiate', name: 'Review & Negotiate' },
        { id: 'contract-signing', name: 'Contract Signing', count: 2 },
        { id: 'automated-sla', name: 'Automated SLA', count: 3 },
        { id: 'automated-nda', name: 'Automated NDA', count: 3 },
        { id: 'instructions', name: 'Instructions', count: 1 },
        { id: 'test-search', name: 'Test_Search', count: 7 }
      ]
    }
  ];

  const documents: DocumentRow[] = [
    { id: '1', name: 'Zara UK — Lease (14-18 Oxford Street).pdf', type: 'PDF', version: 'Executed', updatedBy: 'Rachel Drummond', date: '12/03/2024', status: 'Executed' },
    { id: '2', name: 'Zara UK — Braemar (Draft).docx', type: 'DOCX', version: 'v1', updatedBy: 'Rachel Drummond', date: '15/01/2026', status: 'Active' },
    { id: '3', name: 'Barclays Bank — Lease (Meridian House Canary Wharf).pdf', type: 'PDF', version: 'Executed', updatedBy: 'James Okafor', date: '22/08/2023', status: 'Executed' },
    { id: '4', name: 'Barclays Bank — Rent Review (Meridian House).docx', type: 'DOCX', version: 'Served', updatedBy: 'James Okafor', date: '28/02/2026', status: 'Pending' },
    { id: '5', name: 'Hargreaves Lansdown — Lease (Pavilion B Bristol).pdf', type: 'PDF', version: 'Executed', updatedBy: 'Rachel Drummond', date: '17/11/2023', status: 'Executed' },
    { id: '6', name: 'Hargreaves Lansdown — Sublettings (Bristol North).pdf', type: 'PDF', version: 'Executed', updatedBy: 'Rachel Drummond', date: '05/03/2026', status: 'Pending' },
    { id: '7', name: 'Hargreaves Lansdown — Licence to Underlet (Draft).docx', type: 'DOCX', version: 'v1', updatedBy: 'Rachel Drummond', date: '19/02/2026', status: 'Active' },
    { id: '8', name: 'Nationwide — Sublease (190 Euston Road).pdf', type: 'PDF', version: 'Executed', updatedBy: 'James Okafor', date: '30/06/2024', status: 'Executed' },
    { id: '9', name: 'Legal & General — Lease Grant Point Stree.pdf', type: 'PDF', version: 'Executed', updatedBy: 'David Lam', date: '14/09/2023', status: 'Executed' },
    { id: '10', name: 'Legal & General — Section 25 Notice.docx', type: 'DOCX', version: 'Served', updatedBy: 'David Lam', date: '08/01/2026', status: 'Pending' },
    { id: '11', name: 'Next plc — Lease Grant (Retail Manchester).pdf', type: 'PDF', version: 'Executed', updatedBy: 'Rachel Drummond', date: '21/05/2024', status: 'Executed' },
    { id: '12', name: 'PwC LLP — Lease (5 Brindleyplace Birmingham).pdf', type: 'PDF', version: 'Executed', updatedBy: 'James Okafor', date: '03/07/2023', status: 'Executed' },
    { id: '13', name: 'Hiscox Insurance — Lease (23 May Lane).pdf', type: 'PDF', version: 'Executed', updatedBy: 'James Okafor', date: '16/04/2024', status: 'Active' },
    { id: '14', name: 'Sports Direct — Lease (Lakeside Shopping Centre Esse).pdf', type: 'PDF', version: 'Executed', updatedBy: 'Rachel Drummond', date: '11/10/2023', status: 'Active' },
    { id: '15', name: 'Marks & Spencer — Lease (Forge Retail Park Sheffield).pdf', type: 'PDF', version: 'Executed', updatedBy: 'Rachel Drummond', date: '27/03/2026', status: 'Active' },
    { id: '16', name: 'Nationwide — Landlord Consent (Bristol).docx', type: 'DOCX', version: 'v2', updatedBy: 'David Lam', date: '02/04/2026', status: 'In progress' },
    { id: '17', name: 'Barclays Bank — Rent Review Memorandum (Draft).docx', type: 'DOCX', version: 'v1', updatedBy: 'James Okafor', date: '22/01/2026', status: 'Drafting' },
    { id: '18', name: 'Legal & General — Consent to Underlet.docx', type: 'DOCX', version: 'v1', updatedBy: 'David Lam', date: '10/03/2026', status: 'Saved' }
  ];

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === documents.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(documents.map(doc => doc.id));
    }
  };

  const toggleRowSelection = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className={`px-10 py-6 transition-all duration-300 ${isCoCounselOpen ? 'pr-6' : ''}`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Page Header */}
        <h1 className="text-[28px] font-['Clario:Medium',sans-serif] text-[#1f1f1f] leading-[1.2] mb-6">
          Document repository
        </h1>

        <div className="flex gap-6 mb-12">
          {/* Left Sidebar */}
          <div className={sidebarCollapsed ? "w-auto flex-shrink-0 sticky top-6 self-start" : "w-[270px] flex-shrink-0 sticky top-6 self-start"}>
            <DocumentsSidebar 
              isCollapsed={sidebarCollapsed}
              onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
          </div>

          {/* Main Content */}
          <div className={`flex-1 bg-white border border-[#d2d2d2] rounded-[8px] overflow-hidden flex flex-col`}>
            {/* Breadcrumb Header */}
            <div className="border-b border-[#d2d2d2] px-6 py-4">
              <div className="flex items-center gap-2">
                <button className="flex items-center text-[#1d4b34] hover:bg-[#f5f5f5] p-1 rounded-[4px] transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-[24px] font-['Clario:Medium',sans-serif] text-[#1f1f1f] leading-[1.2]">
                  Leases & licences
                </h2>
              </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white border-b border-[#d2d2d2] px-4 py-3 flex items-center justify-between gap-4">
              {/* Left side - Buttons */}
              <div className="flex items-center gap-2">
                {/* Upload Button */}
                <div className="bg-white hover:bg-[#edf2f0] flex items-center justify-center h-[32px] relative rounded-[4px] group transition-colors">
                  <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <button className="flex gap-2 h-[32px] items-center justify-center px-2 relative rounded-[4px] cursor-pointer">
                    <Upload className="w-4 h-4 text-[#1d4b34]" />
                    <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                      <p className="leading-[1.35]">Upload</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#1d4b34]" />
                  </button>
                </div>

                {/* New Button */}
                <div className="bg-white hover:bg-[#edf2f0] flex items-center justify-center h-[32px] relative rounded-[4px] group transition-colors">
                  <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <button className="flex gap-2 h-[32px] items-center justify-center px-2 relative rounded-[4px] cursor-pointer">
                    <Plus className="w-4 h-4 text-[#1d4b34]" />
                    <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                      <p className="leading-[1.35]">New</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#1d4b34]" />
                  </button>
                </div>

                {/* View Button */}
                <div className="bg-white hover:bg-[#edf2f0] flex items-center justify-center h-[32px] relative rounded-[4px] group transition-colors">
                  <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <button className="flex gap-2 h-[32px] items-center justify-center px-2 relative rounded-[4px] cursor-pointer">
                    <Eye className="w-4 h-4 text-[#1d4b34]" />
                    <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                      <p className="leading-[1.35]">View</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#1d4b34]" />
                  </button>
                </div>

                {/* HighQ Assist Button */}
                <div className="bg-white hover:bg-[#edf2f0] flex items-center justify-center h-[32px] relative rounded-[4px] group transition-colors">
                  <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <button className="flex gap-2 h-[32px] items-center justify-center px-2 relative rounded-[4px] cursor-pointer">
                    <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#1d4b34] text-[16px] whitespace-nowrap">
                      <p className="leading-[1.35]">HighQ Assist</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#1d4b34]" />
                  </button>
                </div>
              </div>

              {/* Right side - Search and Actions */}
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

                {/* Three dots menu */}
                <div className="relative">
                  <div className="bg-white flex items-start justify-center min-h-[32px] relative rounded-[4px]">
                    <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                    <button 
                      onClick={() => setShowActionsMenu(!showActionsMenu)}
                      className="flex gap-2 h-[32px] w-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                    >
                      <MoreVertical className="w-4 h-4 text-[#1d4b34]" />
                    </button>
                  </div>
                  
                  {/* Dropdown */}
                  {showActionsMenu && (
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
                <div className="bg-white flex items-start justify-center min-h-[32px] relative rounded-[4px]">
                  <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <button className="flex gap-2 h-[32px] w-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                    <Maximize2 className="w-4 h-4 text-[#1d4b34]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Selection bar */}
            <div className="flex items-center justify-between py-3 border-b border-[#d2d2d2]">
              {/* Left side - Selection actions */}
              <div className="flex items-center gap-4 px-4">
                {/* Checkbox with Select all */}
                <div className="flex items-center gap-2">
                  <div className="bg-white relative rounded-[2px] shrink-0 size-[20px]">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === documents.length}
                      onChange={toggleSelectAll}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full pointer-events-none">
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="relative size-[20px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="container" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                  </div>
                  <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.3] text-[#1f1f1f] text-[16px]">Select all</p>
                </div>
                
                {/* Selected count */}
                <div className="flex gap-2 items-start font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#1f1f1f] text-[16px] whitespace-nowrap">
                  <p>{selectedRows.length}</p>
                  <p>selected</p>
                </div>
                
                {/* Actions dropdown */}
                <div className="bg-[rgba(255,255,255,0.01)] flex items-start justify-center min-h-[32px] relative rounded-[4px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
                  <div className="flex gap-2 h-[32px] items-center justify-center overflow-clip px-2 py-1 relative rounded-[4px]">
                    <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic text-[#8a8a8a] text-[16px] whitespace-nowrap">
                      <p className="leading-[1.35]">Actions</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#8a8a8a]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto">
              <table className="w-full">
                <thead className="bg-[#F5F5F5] border-b border-[#d2d2d2] sticky top-0">
                  <tr>
                    <th className="w-10 px-4 py-3">
                      {/* Empty for checkbox column */}
                    </th>
                    <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f]">
                      <div className="flex items-center gap-1">
                        Document name
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f] w-24">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f] w-32">
                      <div className="flex items-center gap-1">
                        Version
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f] w-40">
                      <div className="flex items-center gap-1">
                        Updated by
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f] w-32">
                      <div className="flex items-center gap-1">
                        Date
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f] w-32">
                      Status
                    </th>
                    <th className="w-20"></th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map(doc => (
                    <tr key={doc.id} className="border-b border-[#F0F0F0] hover:bg-[#FAFAFA]">
                      <td className="px-4 py-3">
                        <div className="bg-white relative rounded-[2px] shrink-0 size-[20px]">
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(doc.id)}
                            onChange={() => toggleRowSelection(doc.id)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full pointer-events-none">
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="-scale-y-100 flex-none rotate-180">
                                <div className="relative size-[20px]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <g id="container" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {getFileIcon(doc.type)}
                          <span className="text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#1f1f1f]">
                            {doc.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#737373]">
                        {doc.type}
                      </td>
                      <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#737373]">
                        {doc.version}
                      </td>
                      <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#737373]">
                        {doc.updatedBy}
                      </td>
                      <td className="px-4 py-3 text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#737373]">
                        {doc.date}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center justify-center px-[8px] py-[2px] text-[14px] font-['Source_Sans_3:Regular',sans-serif] rounded-[88px] relative ${
                          doc.status === 'Active' 
                            ? 'bg-[#eaffe5] text-[#387c2b]' 
                            : doc.status === 'Executed'
                              ? 'bg-[#e3f2fd] text-[#1565c0]'
                              : doc.status === 'Pending'
                                ? 'bg-[#fff3e0] text-[#e65100]'
                                : 'bg-[#ededed] text-[#404040]'
                        }`}>
                          <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[89px] ${
                            doc.status === 'Active' 
                              ? 'border-[#387c2b]' 
                              : doc.status === 'Executed'
                                ? 'border-[#1565c0]'
                                : doc.status === 'Pending'
                                  ? 'border-[#e65100]'
                                  : 'border-[#404040]'
                          }`} />
                          <span className="leading-[1.35]">{doc.status}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-[#F5F5F5] rounded">
                            <Star className="w-4 h-4 text-[#737373]" />
                          </button>
                          <button className="p-1 hover:bg-[#F5F5F5] rounded">
                            <MoreVertical className="w-4 h-4 text-[#737373]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-white border-t border-[#d2d2d2] px-6 py-3 flex items-center justify-center">
              <span className="text-[14px] font-['Source_Sans_3:Regular',sans-serif] text-[#737373]">
                1 - 18 of 18
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}