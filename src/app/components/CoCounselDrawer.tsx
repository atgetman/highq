import React, { useState, useRef, useEffect } from 'react';
import { Resizable } from 're-resizable';
import InteractiveSafDrawer from './InteractiveSafDrawer';
import { ChatHistory } from './ChatHistory';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface CoCounselDrawerProps {
  onClose: () => void;
  onExpandChange?: (isExpanded: boolean) => void;
  triggerMessage?: { content: string; timestamp: number; prefillOnly?: boolean } | null;
  onMessageTriggered?: () => void;
  context?: 'documents' | 'tracker' | 'general';
}

export function CoCounselDrawer({ onClose, onExpandChange, triggerMessage, onMessageTriggered, context = 'general' }: CoCounselDrawerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [prefillText, setPrefillText] = useState('');
  const dragRef = useRef<{ startX: number; startY: number; elemX: number; elemY: number } | null>(null);

  const handleExpand = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onExpandChange?.(newExpandedState);
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    
    // Restore body scroll before closing
    document.body.style.overflow = '';
    
    // Clear messages and prefill text to reset state
    setMessages([]);
    setPrefillText('');
    
    // Always close completely when X is clicked
    setIsExpanded(false);
    onExpandChange?.(false);
    onClose();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.drag-handle') && !(e.target as HTMLElement).closest('.no-drag')) {
      e.preventDefault();
      setIsDragging(true);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        elemX: position.x,
        elemY: position.y,
      };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && dragRef.current) {
      const deltaX = e.clientX - dragRef.current.startX;
      const deltaY = e.clientY - dragRef.current.startY;
      setPosition({
        x: dragRef.current.elemX + deltaX,
        y: dragRef.current.elemY + deltaY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragRef.current = null;
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, position]);

  // Cleanup: restore body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle mouse enter/leave for scroll prevention
  const handleDrawerMouseEnter = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleDrawerMouseLeave = () => {
    document.body.style.overflow = '';
  };

  const handleShowHistory = () => {
    setShowHistory(true);
  };

  const handleBackFromHistory = () => {
    setShowHistory(false);
  };

  const handleLoadChat = (chatId: string) => {
    // Mock loading a chat - in real implementation, this would load messages from storage
    const mockMessages: Message[] = [
      {
        id: '1',
        content: 'Which leases have break options in the next 90 days?',
        sender: 'user',
        timestamp: new Date(Date.now() - 120000)
      },
      {
        id: '2',
        content: 'Based on the current portfolio data, there are 3 leases with break options in the next 90 days:\\n\\n1. **125 High Street, Manchester** - Break date: May 15, 2026\\n2. **Park Plaza Office Suite** - Break date: June 1, 2026\\n3. **Riverside Retail Unit** - Break date: June 22, 2026\\n\\nWould you like more details on any of these properties?',
        sender: 'assistant',
        timestamp: new Date(Date.now() - 60000)
      }
    ];
    setMessages(mockMessages);
    setShowHistory(false);
  };

  const handleNewThread = () => {
    setMessages([]);
    setShowHistory(false);
  };

  useEffect(() => {
    if (triggerMessage) {
      if (triggerMessage.prefillOnly) {
        // Just prefill the input, don't send message yet
        setPrefillText(triggerMessage.content);
      } else {
        // Send message immediately
        const newMessage: Message = {
          id: 'triggered',
          content: triggerMessage.content,
          sender: 'user',
          timestamp: new Date(triggerMessage.timestamp)
        };
        setMessages([newMessage]);
      }
      onMessageTriggered?.();
    }
  }, [triggerMessage, onMessageTriggered]);

  if (isExpanded) {
    return (
      <div 
        className="fixed z-[100] border border-[#D2D2D2] rounded-lg"
        style={{
          top: `${80 + position.y}px`,
          left: `calc(50% + ${position.x}px)`,
          transform: 'translateX(-50%)',
          cursor: isDragging ? 'grabbing' : 'auto',
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleDrawerMouseEnter}
        onMouseLeave={handleDrawerMouseLeave}
      >
        <Resizable
          defaultSize={{
            width: 960,
            height: 680,
          }}
          minWidth={400}
          minHeight={400}
          className="shadow-2xl rounded-lg overflow-hidden bg-white flex flex-col"
        >
          <div className="flex-1 overflow-auto relative">
            {showHistory ? (
              <ChatHistory 
                onBack={handleBackFromHistory}
                onLoadChat={handleLoadChat}
                isExpanded={isExpanded}
                onNewThread={handleNewThread}
                onExpand={handleExpand}
                onClose={handleClose}
              />
            ) : (
              <InteractiveSafDrawer
                onClose={handleClose}
                onExpand={handleExpand}
                isExpanded={isExpanded}
                messages={messages}
                setMessages={setMessages}
                onShowHistory={handleShowHistory}
                onNewThread={handleNewThread}
                prefillText={prefillText}
                context={context}
              />
            )}
          </div>
        </Resizable>
      </div>
    );
  }

  return (
    <div 
      className="fixed right-0 top-0 w-[400px] h-screen z-50 overflow-hidden"
      onMouseEnter={handleDrawerMouseEnter}
      onMouseLeave={handleDrawerMouseLeave}
    >
      <div className="h-full overflow-y-auto">
        {showHistory ? (
          <ChatHistory 
            onBack={handleBackFromHistory}
            onLoadChat={handleLoadChat}
            isExpanded={isExpanded}
            onNewThread={handleNewThread}
            onExpand={handleExpand}
            onClose={handleClose}
          />
        ) : (
          <InteractiveSafDrawer
            onClose={handleClose}
            onExpand={handleExpand}
            isExpanded={isExpanded}
            messages={messages}
            setMessages={setMessages}
            onShowHistory={handleShowHistory}
            onNewThread={handleNewThread}
            prefillText={prefillText}
            context={context}
          />
        )}
      </div>
    </div>
  );
}