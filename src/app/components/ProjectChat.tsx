import React, { useState, useRef } from 'react';
import { Sparkles, Paperclip, BookOpen, AtSign, Calendar, FileCheck2, BarChart3, TrendingUp, ArrowUp } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ProjectChatProps {
  onSendToCoCounsel?: (message: string, prefillOnly?: boolean) => void;
}

export function ProjectChat({ onSendToCoCounsel }: ProjectChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputValue.trim() || isProcessing) return;

    // Send the message to the main HighQ Assist chat
    if (onSendToCoCounsel) {
      onSendToCoCounsel(inputValue, false);
      setInputValue('');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsProcessing(true);

    // Auto-scroll to bottom
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      }
    }, 100);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I\'m analyzing your Portfolio Meridian project. How can I help you with due diligence, lease reviews, or property analysis?'
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
      
      // Auto-scroll after response
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
      }, 100);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestionPrompts = [
    { icon: <Calendar className="text-[#404040]" size={14} />, text: 'Upcoming lease break options' },
    { icon: <FileCheck2 className="text-[#404040]" size={14} />, text: 'Outstanding landlord consents' },
    { icon: <BarChart3 className="text-[#404040]" size={14} />, text: 'Open rent review positions' }
  ];

  return (
    <div className="bg-white border border-[#dedede] rounded-lg flex flex-col h-full overflow-hidden relative">
      {/* Orange glow - positioned where the input field is */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[85%] h-[100px] z-0 pointer-events-none rounded-[20px]" style={{
        background: 'rgba(214,64,0,0.15)',
        filter: 'blur(25px)'
      }} />

      {/* Header */}
      <div className="px-[24px] pt-4 pb-2 relative z-10">
        <div className="flex items-center gap-[8px]">
          <Sparkles className="text-[#d64000]" size={20} fill="#d64000" />
          <h3 className="text-[#212223] text-[20px] font-['Clario:Medium',sans-serif]">
            Ask HighQ Assist about your project
          </h3>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-[24px] pb-6 min-h-0 relative z-10">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-start pt-[12px] h-full gap-4">
            {/* Input with green section */}
            <div className="w-full max-w-[800px] relative">
              
              <div className="bg-[#ebf0ed] relative z-10 rounded-[13px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
                <div className="flex flex-col justify-end size-full">
                  <div className="content-stretch flex flex-col items-start justify-end p-px relative w-full">
                    {/* Frame3 - Insights from site */}
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[6px] relative w-full">
                          <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
                            <p>
                              <span className="leading-[1.5]">Insights from site: </span>
                              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5]">Portfolio Meridian</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* TextAreaField */}
                    <div className="bg-white h-[80px] relative rounded-[12px] shrink-0 w-full">
                      <div className="flex flex-row items-stretch overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[11px] items-stretch pl-[16px] pr-[12px] py-[12px] relative size-full">
                          <textarea
                            ref={textareaRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Ask about your matter..."
                            rows={2}
                            className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#212223] text-[15px] bg-transparent border-none outline-none placeholder:text-[#666] resize-none"
                            disabled={isProcessing}
                          />
                          {/* RightSend */}
                          <div className="content-stretch flex gap-[8px] items-end pb-[6px] relative shrink-0">
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div 
                                onClick={isProcessing ? undefined : handleSend}
                                className="bg-[#314b3e] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#415e4e]"
                              >
                                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
                                <div className="shrink-0 size-[16px] flex items-center justify-center">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12L8 4M8 4L4 8M8 4L12 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className={`absolute border-solid inset-[-1px] pointer-events-none rounded-[13px] transition-colors ${isFocused ? 'border-[2px] border-[#1d4b34]' : 'border border-[#d2d2d2]'}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestion Pills */}
            <div className="flex flex-wrap gap-[10px] justify-center max-w-[800px] relative z-10">
              {suggestionPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputValue(prompt.text);
                    // Focus the textarea after setting the value
                    setTimeout(() => {
                      textareaRef.current?.focus();
                    }, 0);
                  }}
                  className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px rounded-[33554400px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors border border-[#d2d2d2]"
                >
                  {prompt.icon}
                  <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] text-[#212223] text-[14px] text-center whitespace-nowrap">
                    {prompt.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Privacy Message */}
            <div className="flex justify-center w-full max-w-[800px]">
              <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[0px] text-center whitespace-nowrap">
                <p className="text-[12px]">
                  <span className="leading-[1.35]">Your data is </span>
                  <a href="#" className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] text-[#0062c4] hover:underline">private and secure</a>
                  <span className="leading-[1.35]">.</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map(message => (
              <div key={message.id} className="flex flex-col gap-2">
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-[#d64000]" size={16} fill="#d64000" />
                    <span className="text-[#666666] text-[13px] font-['Source_Sans_3:Medium',sans-serif]">
                      HighQ Assist
                    </span>
                  </div>
                )}
                <div className={`${message.role === 'user' ? 'ml-auto' : ''}`}>
                  <div 
                    className={`inline-block px-[16px] py-[12px] rounded-[12px] max-w-[85%] ${
                      message.role === 'user' 
                        ? 'bg-[#314b3e] text-white ml-auto' 
                        : 'bg-white border border-[#e5e5e5] text-[#212223]'
                    }`}
                  >
                    <p className="text-[14px] font-['Source_Sans_3:Regular',sans-serif] leading-[1.5] whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-[#d64000]" size={16} fill="#d64000" />
                  <span className="text-[#666666] text-[13px] font-['Source_Sans_3:Medium',sans-serif]">
                    HighQ Assist
                  </span>
                </div>
                <div className="bg-white border border-[#e5e5e5] px-[16px] py-[12px] rounded-[12px] inline-block">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#999999] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#999999] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#999999] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area - Shown when there are messages */}
      {messages.length > 0 && (
        <div className="px-[24px] pb-[16px]">
          <div className="shadow-[0px_0px_20px_0px_rgba(214,64,0,0.15)] rounded-[13px]">
            <div className="bg-[#ebf0ed] relative rounded-[13px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
              <div className="flex flex-col justify-end size-full">
                <div className="content-stretch flex flex-col items-start justify-end p-px relative w-full">
                  {/* Frame3 - Insights from site */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[6px] relative w-full">
                        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
                          <p>
                            <span className="leading-[1.5]">Insights from site: </span>
                            <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5]">Portfolio Meridian</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* TextAreaField */}
                  <div className="bg-white h-[80px] relative rounded-[12px] shrink-0 w-full">
                    <div className="flex flex-row items-stretch overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[11px] items-stretch pl-[16px] pr-[12px] py-[12px] relative size-full">
                        <textarea
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          placeholder="Ask about your matter..."
                          rows={2}
                          className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#212223] text-[15px] bg-transparent border-none outline-none placeholder:text-[#666] resize-none"
                          disabled={isProcessing}
                        />
                        {/* RightSend */}
                        <div className="content-stretch flex gap-[8px] items-end pb-[6px] relative shrink-0">
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div 
                              onClick={isProcessing ? undefined : handleSend}
                              className="bg-[#314b3e] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#415e4e]"
                            >
                              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
                              <div className="shrink-0 size-[16px] flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 12L8 4M8 4L4 8M8 4L12 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className={`absolute border-solid inset-[-1px] pointer-events-none rounded-[13px] transition-colors ${isFocused ? 'border-[2px] border-[#1d4b34]' : 'border border-[#d2d2d2]'}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}