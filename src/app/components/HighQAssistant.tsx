import React, { useState } from 'react';
import { X, FileText, List, Network, Table, Send, ChevronRight, HelpCircle, ChevronLeft } from 'lucide-react';

interface HighQAssistantProps {
  onClose: () => void;
  shouldShift?: boolean;
}

export function HighQAssistant({ onClose, shouldShift }: HighQAssistantProps) {
  const [message, setMessage] = useState('');
  const [showResources, setShowResources] = useState(false);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const samplePrompts = [
    { icon: <FileText className="w-4 h-4" />, text: "What are the latest HighQ release highlights?" },
    { icon: <List className="w-4 h-4" />, text: "How do I design an effective Form in HighQ?" },
    { icon: <Network className="w-4 h-4" />, text: "How do I set up document workflows for review and approval?" },
    { icon: <Table className="w-4 h-4" />, text: "How do I set up the optimal iSheet?" }
  ];

  const resourceLinks = [
    { title: "Announcements", subtitle: "What's new", badge: null },
    { title: "Documentation", subtitle: "Knowledge and help", badge: 1 },
    { title: "Product updates", subtitle: "What's new", badge: 36 },
    { title: "Technical support", subtitle: "Contact us", badge: 1 },
    { title: "Operational status", subtitle: "Current service status", badge: 1 },
    { title: "CLM system setup guides", subtitle: "CLM Solution Template", badge: null },
    { title: "CLM site setup guides", subtitle: "CLM Solution Template", badge: null }
  ];

  const productUpdates = [
    {
      date: "Nov 7, 2025",
      title: "Feature update - November 2025",
      description: "v5.9.18 expands inline editing for the Modernized iSheets UI only:",
      bullets: ["User Lookup columns now support inline edits"]
    },
    {
      date: "Oct 13, 2025",
      title: "Feature update October 2025",
      description: "v5.9.17 introduces enhanced workflow automation and improved collaboration features:",
      bullets: ["New approval routing options", "Real-time collaboration indicators", "Enhanced notification system"]
    },
    {
      date: "Sep 22, 2025",
      title: "Feature update September 2025",
      description: "v5.9.16 brings performance improvements and new integrations:",
      bullets: ["Faster page load times", "Microsoft Teams integration", "Improved mobile experience"]
    }
  ];

  return (
    <div className={`fixed bottom-6 w-[475px] bg-white rounded-[12px] shadow-[0px_8px_16px_8px_rgba(31,31,31,0.1)] border border-[#737373] border-b-0 flex flex-col z-50 transition-all duration-300 ${
      shouldShift ? 'right-[424px]' : 'right-6'
    }`} style={{ maxHeight: 'calc(100vh - 48px)' }}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-[#DEDEDE]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#4DB299] rounded flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-['Clario:Medium',sans-serif] font-medium text-[18px] text-[#1F1F1F]">HighQ guide</h3>
        </div>
        <div className="flex items-center gap-1">
          {!showResources && (
            <button 
              onClick={() => setShowResources(true)}
              className="flex gap-[8px] items-center px-[8px] py-[4px] rounded-[4px] bg-[rgba(255,255,255,0.01)] hover:bg-[#F2F2F2] transition-colors"
              title="View Resources"
            >
              <List className="w-4 h-4 text-[#1d4b34]" />
              <span className="font-['Clario:Medium',sans-serif] font-medium text-[16px] text-[#1d4b34] leading-[1.35]">Resources</span>
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-2 hover:bg-[#F2F2F2] rounded transition-colors"
          >
            <X className="w-4 h-4 text-[#1F1F1F]" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        {!showResources ? (
          /* Chat View */
          <div className="flex flex-col h-full">
            {/* Welcome Message */}
            <div className="p-5 border-b border-[#D2D2D2]">
              <div className="flex items-start gap-2 mb-2">
                <div className="w-6 h-6 bg-[#FCFCFC] border border-[#D2D2D2] rounded-full flex items-center justify-center shrink-0">
                  <HelpCircle className="w-3.5 h-3.5 text-[#4DB299]" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] text-[#737373] leading-[1.35]">HighQ guide - 9:08 a.m.</p>
                </div>
              </div>

              <div className="pl-8">
                <h2 className="font-['Clario:Medium',sans-serif] font-medium text-[22px] text-[#212223] leading-[1.2] mb-4">
                  Ask questions about HighQ features, setup and best practices
                </h2>

                <p className="text-[16px] text-[#212223] leading-[1.5] mb-4">
                  Answers come straight from our <a href="#" className="text-[#0062C4] underline hover:text-[#054688]">Help & Support documentation</a>. Review answers for accuracy.
                </p>

                <p className="text-[16px] text-[#212223] leading-[1.5] mb-4">
                  Try one of the sample prompts below or ask your own question.
                </p>

                {/* Sample Prompts */}
                <ul className="space-y-4">
                  {samplePrompts.map((prompt, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F0F7F5] rounded-full flex items-center justify-center shrink-0">
                        {prompt.icon}
                      </div>
                      <button className="text-left text-[16px] text-[#212223] leading-[1.5] hover:text-[#0062C4] transition-colors font-normal">
                        {prompt.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>
          </div>
        ) : selectedResource ? (
          /* Resource Detail View */
          <div>
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E5E5E5]">
              <button 
                onClick={() => setSelectedResource(null)}
                className="p-2 rounded-[4px] bg-[rgba(255,255,255,0.01)] hover:bg-[#F2F2F2] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#737373]" />
              </button>
              <h2 className="font-['Clario:Medium',sans-serif] font-medium text-[20px] text-[#212223]">{selectedResource}</h2>
            </div>

            <div className="px-5 py-4 space-y-4">
              {productUpdates.map((update, index) => (
                <div key={index} className="bg-[#F5F5F5] rounded-lg p-5">
                  <p className="text-[14px] text-[#212223] mb-3">{update.date}</p>
                  <h3 className="font-['Clario:Medium',sans-serif] font-medium text-[16px] text-[#212223] mb-3">
                    {update.title}
                  </h3>
                  <p className="text-[16px] text-[#212223] mb-3 italic">
                    {update.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    {update.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-[16px] text-[#212223]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="text-[16px] text-[#0062C4] hover:text-[#054688] underline">
                    Full release notes ›
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Resources List View */
          <div>
            <div className="flex items-center gap-1 px-5 py-4 border-b border-[#E5E5E5]">
              <button 
                onClick={() => setShowResources(false)}
                className="p-2 rounded-[4px] bg-[rgba(255,255,255,0.01)] hover:bg-[#F2F2F2] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#737373]" />
              </button>
              <h2 className="font-['Clario:Medium',sans-serif] font-medium text-[20px] text-[#212223]">Resources</h2>
            </div>

            <div className="px-5 py-2">
              {resourceLinks.map((link, index) => (
                <div key={index}>
                  <button 
                    onClick={() => setSelectedResource(link.title)}
                    className="w-full flex items-center justify-between py-3 hover:bg-[#F7F7F7] rounded transition-colors group"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="text-[16px] text-[#212223] font-medium mb-1">
                        {link.title}
                      </h3>
                      <p className="text-[14px] text-[#737373]">
                        {link.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {link.badge !== null && (
                        <div className="w-6 h-6 bg-[#0062C4] text-white rounded-full flex items-center justify-center text-[12px] font-semibold">
                          {link.badge}
                        </div>
                      )}
                      <ChevronRight className="w-5 h-5 text-[#737373] group-hover:text-[#212223]" />
                    </div>
                  </button>
                  {index < resourceLinks.length - 1 && (
                    <div className="h-px bg-[#E5E5E5]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Area - Only show in chat view */}
      {!showResources && (
        <div className="p-5 border-t border-[#E5E5E5]">
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a question..."
              rows={3}
              className="w-full px-3 py-2 pr-12 bg-white border border-[#8A8A8A] rounded-lg focus:outline-none focus:border-[#0062C4] focus:border-2 resize-none text-[16px] text-[#212223] leading-[1.5] placeholder:text-[#666]"
            />
            <button className="absolute right-3 bottom-3 p-2 bg-[#F2F2F2] rounded hover:bg-[#E5E5E5] transition-colors">
              <Send className="w-4 h-4 text-[#8A8A8A]" />
            </button>
          </div>
          <div className="text-right mt-1">
            <a href="#" className="text-[14px] text-[#0062C4] hover:text-[#054688] underline">
              Your data is secure and private
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
