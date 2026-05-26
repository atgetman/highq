import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  FileText, 
  Upload, 
  MoreVertical, 
  X, 
  Filter,
  Star,
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ProjectFile {
  id: string;
  name: string;
  size: string;
  date: string;
  lastEditedBy: string;
  type: 'PDF' | 'DOCX' | 'XLSX';
  tags?: string[];
  version: string;
  status: 'Active' | 'Executed' | 'Pending' | 'Archived';
}

const files: ProjectFile[] = [
  { id: '1', name: 'Zara UK — Lease (14-18 Oxford Street).pdf', size: '2.4 MB', date: '12/03/2024', lastEditedBy: 'Thomas Shelby', type: 'PDF', version: 'Executed', status: 'Executed' },
  { id: '2', name: 'Zara UK — Braemar (Draft).docx', size: '156 KB', date: '15/01/2026', lastEditedBy: 'Thomas Shelby', type: 'DOCX', version: 'v1', status: 'Active' },
  { id: '3', name: 'Barclays Bank — Lease (Meridian House Canary Wharf).pdf', size: '3.1 MB', date: '22/08/2023', lastEditedBy: 'Arthur Shelby', type: 'PDF', version: 'Executed', status: 'Executed' },
  { id: '4', name: 'Barclays Bank — Rent Review (Meridian House).docx', size: '89 KB', date: '28/02/2026', lastEditedBy: 'Arthur Shelby', type: 'DOCX', version: 'Served', status: 'Pending' },
  { id: '5', name: 'Hargreaves Lansdown — Lease (Pavilion B Bristol).pdf', size: '1.8 MB', date: '17/11/2023', lastEditedBy: 'Thomas Shelby', type: 'PDF', version: 'Executed', status: 'Executed' },
  { id: '6', name: 'Hargreaves Lansdown — Sublettings (Bristol North).pdf', size: '2.2 MB', date: '05/03/2026', lastEditedBy: 'Thomas Shelby', type: 'PDF', version: 'Executed', status: 'Pending' },
  { id: '7', name: 'Hargreaves Lansdown — Licence to Underlet (Draft).docx', size: '134 KB', date: '19/02/2026', lastEditedBy: 'Thomas Shelby', type: 'DOCX', version: 'v1', status: 'Active' },
  { id: '8', name: 'Nationwide — Sublease (190 Euston Road).pdf', size: '2.7 MB', date: '30/06/2024', lastEditedBy: 'Arthur Shelby', type: 'PDF', version: 'Executed', status: 'Executed' },
  { id: '9', name: 'Legal & General — Lease Grant Point Stree.pdf', size: '1.9 MB', date: '14/09/2023', lastEditedBy: 'Polly Gray', type: 'PDF', version: 'Executed', status: 'Executed' },
  { id: '10', name: 'Legal & General — Section 25 Notice.docx', size: '67 KB', date: '08/01/2026', lastEditedBy: 'Polly Gray', type: 'DOCX', version: 'Served', status: 'Pending' },
  { id: '11', name: 'Next plc — Lease Grant (Retail Manchester).pdf', size: '3.4 MB', date: '21/05/2024', lastEditedBy: 'Thomas Shelby', type: 'PDF', version: 'Executed', status: 'Executed' },
  { id: '12', name: 'PwC LLP — Lease (5 Brindleyplace Birmingham).pdf', size: '2.9 MB', date: '03/07/2023', lastEditedBy: 'Arthur Shelby', type: 'PDF', version: 'Executed', status: 'Executed' },
  { id: '13', name: 'Hiscox Insurance — Lease (23 May Lane).pdf', size: '1.6 MB', date: '16/04/2024', lastEditedBy: 'Arthur Shelby', type: 'PDF', version: 'Executed', status: 'Active' },
  { id: '14', name: 'Sports Direct — Lease (Lakeside Shopping Centre Esse).pdf', size: '3.8 MB', date: '11/10/2023', lastEditedBy: 'Thomas Shelby', type: 'PDF', version: 'Executed', status: 'Active' },
  { id: '15', name: 'Marks & Spencer — Lease (Forge Retail Park Sheffield).pdf', size: '2.5 MB', date: '27/03/2026', lastEditedBy: 'Thomas Shelby', type: 'PDF', version: 'Executed', status: 'Active' },
  { id: '16', name: 'Nationwide — Landlord Consent (Bristol).docx', size: '98 KB', date: '02/04/2026', lastEditedBy: 'Polly Gray', type: 'DOCX', version: 'v2', status: 'Active' },
  { id: '17', name: 'Barclays Bank — Rent Review Memorandum (Draft).docx', size: '112 KB', date: '22/01/2026', lastEditedBy: 'Arthur Shelby', type: 'DOCX', version: 'v1', status: 'Active' },
  { id: '18', name: 'Legal & General — Consent to Underlet.docx', size: '78 KB', date: '10/03/2026', lastEditedBy: 'Polly Gray', type: 'DOCX', version: 'v1', status: 'Active' },
];

// Helper function to get file icon based on type
const getFileIcon = (type: 'PDF' | 'DOCX' | 'XLSX') => {
  if (type === 'PDF') {
    // Red PDF icon
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V7L12 2Z" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#FEE2E2"/>
        <path d="M12 2V7H17" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11H13M7 14H10" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  } else if (type === 'DOCX') {
    // Blue DOCX icon
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V7L12 2Z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#DBEAFE"/>
        <path d="M12 2V7H17" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11H13M7 14H13" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  } else {
    // Green XLSX icon
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V7L12 2Z" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#DCFCE7"/>
        <path d="M12 2V7H17" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11H13M7 14H13M10 11V14" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
};

export function ProjectFiles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>(['Aditi Singh', 'United kingdom']);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const toggleSelectAll = () => {
    const currentPageFiles = paginatedFiles.map(f => f.id);
    const allCurrentSelected = currentPageFiles.every(id => selectedFiles.includes(id));
    
    if (allCurrentSelected) {
      setSelectedFiles(selectedFiles.filter(id => !currentPageFiles.includes(id)));
    } else {
      const newSelected = [...selectedFiles];
      currentPageFiles.forEach(id => {
        if (!newSelected.includes(id)) {
          newSelected.push(id);
        }
      });
      setSelectedFiles(newSelected);
    }
  };

  const toggleFileSelection = (fileId: string) => {
    if (selectedFiles.includes(fileId)) {
      setSelectedFiles(selectedFiles.filter(id => id !== fileId));
    } else {
      setSelectedFiles([...selectedFiles, fileId]);
    }
  };

  const filteredFiles = files.filter(file => {
    return file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.lastEditedBy.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Pagination logic
  const totalFiles = filteredFiles.length;
  const totalPages = Math.ceil(totalFiles / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalFiles);
  const paginatedFiles = filteredFiles.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const activeFilterCount = 5; // Mock count for the badge

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg px-6 pt-4 pb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-[#212223] text-[20px] font-['Clario:Medium',sans-serif]">
            Files
          </h3>
          <div className="flex items-center justify-center w-6 h-6 bg-[#E5E5E5] rounded-full">
            <span className="text-[#212223] text-[14px] font-['Source_Sans_3:SemiBold',sans-serif]">
              {filteredFiles.length}
            </span>
          </div>
        </div>
        <button className="bg-white hover:bg-[#edf2f0] content-stretch flex items-center justify-center relative rounded-[4px] h-[32px] px-[8px] py-[4px] gap-[8px] transition-colors group">
          <div aria-hidden="true" className="absolute border border-[#6e8178] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
          <Upload size={14} className="text-[#1d4b34] relative z-10" />
          <span className="text-[#1d4b34] text-[14px] font-['Clario:Medium',sans-serif] leading-[1.35] relative z-10">
            Upload
          </span>
        </button>
      </div>

      {/* Search Section */}
      <div className="mb-4">
        <div className="bg-[#f7f7f7] relative rounded-[4px] flex items-center">
          <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
          <input
            type="text"
            placeholder="Search files, tags, users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white flex-1 h-[32px] px-3 py-1 text-[#212223] text-[16px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.35] border-r border-[#8a8a8a] rounded-l-[4px] outline-none"
          />
          <button className="bg-[rgba(255,255,255,0.01)] flex items-center justify-center size-[32px] shrink-0">
            <Search size={16} className="text-[#212223]" />
          </button>
        </div>
        
        {/* Active Filters */}
        {activeFilters.length > 0 && searchTerm && (
          <div className="flex gap-[10px] mt-3">
            {activeFilters.map((filter, index) => (
              <div 
                key={index}
                className="bg-white flex gap-1 items-center justify-center min-h-[24px] pl-2 rounded-[4px] border border-[#8a8a8a]"
              >
                <span className="text-[#212223] text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.35]">
                  {filter}
                </span>
                <button 
                  onClick={() => removeFilter(filter)}
                  className="flex items-center justify-center size-6 hover:bg-gray-100 rounded-[2px] transition-colors"
                >
                  <X size={12} className="text-[#212223]" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 items-center">
          {/* Checkbox with Select all */}
          <div className="flex items-center gap-2">
            <div className="relative size-5">
              <input
                type="checkbox"
                checked={selectedFiles.length === files.length}
                onChange={toggleSelectAll}
                className="peer sr-only"
              />
              <div className="bg-white border border-[#8a8a8a] rounded-[2px] size-5 peer-checked:bg-[#1d4b34] peer-checked:border-[#1d4b34] transition-colors" />
              {selectedFiles.length === files.length && (
                <svg className="absolute inset-0 w-5 h-5 pointer-events-none" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.3] text-[#1f1f1f] text-[16px]">Select all</p>
          </div>
          
          {/* Selected count - "0 selected" format */}
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.3] text-[#1f1f1f] text-[16px]">
            <span className="font-['Source_Sans_3:SemiBold',sans-serif]">{selectedFiles.length}</span> selected
          </p>
          
          <div className="relative">
            <button 
              onClick={() => setShowActionsMenu(!showActionsMenu)}
              className="bg-[rgba(255,255,255,0.01)] flex gap-2 items-center justify-center h-[32px] px-2 py-1 rounded-[4px] hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#1d4b34] text-[16px] font-['Clario:Medium',sans-serif] leading-[1.35]">
                Actions
              </span>
              <ChevronDown size={16} className="text-[#1d4b34]" />
            </button>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <button className="bg-white border border-[#1d4b34] flex items-center justify-center h-[32px] w-[32px] rounded-[4px] hover:bg-gray-50 transition-colors">
            <ArrowUpDown size={16} className="text-[#1d4b34]" />
          </button>
          
          <button className="bg-white border border-[#1d4b34] flex items-center justify-center h-[32px] w-[32px] rounded-[4px] hover:bg-gray-50 transition-colors">
            <Filter size={16} className="text-[#1d4b34]"/>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <colgroup>
            <col style={{ width: '40px' }} />
            <col style={{ width: 'auto' }} />
            <col style={{ width: '120px' }} />
            <col style={{ width: '160px' }} />
            <col style={{ width: '120px' }} />
            <col style={{ width: '120px' }} />
            <col style={{ width: '80px' }} />
          </colgroup>
          <thead className="bg-[#F5F5F5] border-b border-[#d2d2d2]">
            <tr>
              <th className="w-10"></th>
              <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f]">
                <div className="flex items-center gap-1">
                  Document name
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f]">
                <div className="flex items-center gap-1">
                  Version
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f]">
                <div className="flex items-center gap-1">
                  Updated by
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f]">
                <div className="flex items-center gap-1">
                  Date
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="text-left px-4 py-3 text-[14px] font-['Source_Sans_3:SemiBold',sans-serif] text-[#1f1f1f]">
                Status
              </th>
              <th className="w-20"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedFiles.map((file) => (
              <tr 
                key={file.id} 
                className="border-b border-[#F0F0F0] hover:bg-[#FAFAFA] cursor-pointer group"
              >
                <td className="px-4 py-3">
                  <div className="relative size-5">
                    <input
                      type="checkbox"
                      checked={selectedFiles.includes(file.id)}
                      onChange={() => toggleFileSelection(file.id)}
                      className="peer sr-only"
                    />
                    <div className="bg-white border border-[#8a8a8a] rounded-[2px] size-5 peer-checked:bg-[#1d4b34] peer-checked:border-[#1d4b34] transition-colors" />
                    {selectedFiles.includes(file.id) && (
                      <svg className="absolute inset-0 w-5 h-5 pointer-events-none" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex items-center justify-center w-8 h-8 shrink-0">
                      {getFileIcon(file.type)}
                    </div>
                    <span className="text-[#212223] text-[14px] font-['Source_Sans_3:Regular',sans-serif] truncate">
                      {file.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[#666666] text-[14px] font-['Source_Sans_3:Regular',sans-serif]">
                  {file.version}
                </td>
                <td className="px-4 py-3 text-[#666666] text-[14px] font-['Source_Sans_3:Regular',sans-serif]">
                  {file.lastEditedBy}
                </td>
                <td className="px-4 py-3 text-[#666666] text-[14px] font-['Source_Sans_3:Regular',sans-serif]">
                  {file.date}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center justify-center px-[8px] py-[2px] text-[14px] font-['Source_Sans_3:Regular',sans-serif] rounded-[88px] relative ${
                    file.status === 'Active' 
                      ? 'bg-[#eaffe5] text-[#387c2b]' 
                      : file.status === 'Executed'
                        ? 'bg-[#e3f2fd] text-[#1565c0]' 
                        : file.status === 'Pending'
                          ? 'bg-[#fff3e0] text-[#e65100]' 
                          : 'bg-[#ededed] text-[#404040]'
                  }`}>
                    <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[89px] ${
                      file.status === 'Active' 
                        ? 'border-[#387c2b]' 
                        : file.status === 'Executed'
                          ? 'border-[#1565c0]' 
                          : file.status === 'Pending'
                            ? 'border-[#e65100]' 
                            : 'border-[#404040]'
                    }`} />
                    <span className="leading-[1.35]">{file.status}</span>
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
      <div className="content-stretch flex items-center justify-center py-[8px] relative">
        <div className="content-stretch flex gap-[8px] items-center relative font-['Source_Sans_3:Regular',sans-serif] text-[15px] text-[#212223]">
          <div className="content-stretch flex gap-[4px] items-center">
            <div className="flex justify-center">
              <p className="leading-[1.5]">{startIndex + 1}</p>
            </div>
            <div className="flex justify-center">
              <p className="leading-[1.5]">–</p>
            </div>
            <div className="flex justify-center">
              <p className="leading-[1.5]">{endIndex}</p>
            </div>
            <div className="flex justify-center">
              <p className="leading-[1.5]">of</p>
            </div>
            <div className="flex justify-center">
              <p className="leading-[1.5]">{totalFiles}</p>
            </div>
          </div>
          {/* Buttons */}
          <div className="content-stretch flex gap-[8px] items-center w-[56px]">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-[rgba(255,255,255,0)] flex items-center justify-center p-[4px] rounded-[4px] disabled:opacity-30"
            >
              <ChevronLeft size={16} className="text-[#8a8a8a]" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-[rgba(255,255,255,0)] flex items-center justify-center p-[4px] rounded-[4px] disabled:opacity-30"
            >
              <ChevronRight size={16} className="text-[#212223]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}