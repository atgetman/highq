function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Label">
      <div className="content-stretch flex flex-col h-[16px] items-center justify-center px-[4px] relative shrink-0 w-[24px]" data-name="miscellaneous/coCounsel">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4db299] text-[16px] text-center w-full">
          <p className="leading-[normal]">{`\uE1E3`}</p>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Knowledge2017:Medium',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[18px]">HighQ guide</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Buttons">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="saf-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
            <p className="leading-[normal]">xmark-large</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="avatar">
      <div className="bg-[#fcfcfc] content-stretch flex flex-col items-center justify-center relative rounded-[88px] shrink-0 size-[24px]" data-name="saf-avatar">
        <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[88px]" />
        <div className="content-stretch flex flex-col items-center justify-center pt-[2px] relative shrink-0 size-[16px]" data-name="miscellaneous/user*">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4db299] text-[14px] text-center w-full">
            <p className="leading-[normal]">{`\uE1E3`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailsSkillChip() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-[24px] items-start min-h-px min-w-px relative" data-name="Details + Skill Chip">
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="saf-metadata">
        <div className="absolute flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal inset-[5%_0_0_0] justify-center leading-[0] text-[#737373] text-[14px]">
          <p className="leading-[1.35]">HighQ guide - 9:08 a.m.</p>
        </div>
      </div>
    </div>
  );
}

function MessageDetails() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Message details">
      <Avatar />
      <DetailsSkillChip />
    </div>
  );
}

function Request() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Request">
      <div className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-black w-full whitespace-pre-wrap">
        <p className="font-['Clario:Medium',sans-serif] leading-[1.2] mb-0 not-italic text-[#212223] text-[28px]">Ask questions about HighQ features, setup and best practices</p>
        <p className="leading-[1.5] mb-0 text-[16px]">&nbsp;</p>
        <p className="mb-0 text-[16px]">
          <span className="leading-[1.5]">{`Answers come straight from our `}</span>
          <span className="decoration-solid leading-[1.5] text-[#0062c4] underline">{`Help & Support documentation`}</span>
          <span className="leading-[1.5]">{`. Review answers for accuracy. `}</span>
        </p>
        <p className="leading-[1.5] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[1.5] mb-0 text-[16px]">Try one of the sample prompts below or ask your own question.</p>
        <p className="leading-[1.5] mb-0 text-[16px]">&nbsp;</p>
        <ul className="list-disc mb-0">
          <li className="mb-[16px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] text-[#212223] text-[16px]">{`  What are the latest HighQ release highlights?`}</span>
          </li>
          <li className="mb-[16px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] text-[#212223] text-[16px]">{`  How do I design an effective Form in HighQ?`}</span>
          </li>
          <li className="mb-[16px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] text-[#212223] text-[16px]">
              {`  How do I set up document workflows for review and`}
              <br aria-hidden="true" />
              {`  approval?`}
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] text-[#212223] text-[16px]">{`  How do I set up the optimal iSheet?`}</span>
          </li>
        </ul>
        <p className="leading-[1.5] text-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function UserRequest() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="User request">
      <Request />
    </div>
  );
}

function DesktopInlineReplyTypesMfe() {
  return (
    <div className="relative shrink-0 w-full" data-name="Desktop inline reply types - MFE">
      <div className="content-stretch flex flex-col gap-[10px] items-start pl-[32px] relative w-full">
        <UserRequest />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start shrink-0 sticky top-0 w-full z-[2]" data-name="Header">
      <MessageDetails />
      <DesktopInlineReplyTypesMfe />
    </div>
  );
}

function MessageContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] isolate items-start max-w-[700px] relative shrink-0 w-full" data-name="Message content">
      <Header />
    </div>
  );
}

function TextScrollbar() {
  return (
    <div className="content-stretch flex gap-[8px] items-start max-h-[144px] min-h-[64px] overflow-clip relative shrink-0 w-full" data-name="text + scrollbar">
      <p className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#666] text-[16px]">Type a question...</p>
    </div>
  );
}

function ActionsSlotButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0 w-full" data-name="actions-slot + button">
      <div className="bg-[#f2f2f2] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="saf-button-icon">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-action/add*">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8a8a8a] text-[16px] text-center w-full">
            <p className="leading-[normal]">paper-plane</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full z-[1]" data-name="input">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <TextScrollbar />
          <ActionsSlotButton />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputActionsBar() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative rounded-[8px] shrink-0 w-full" data-name="input + actions bar">
      <Input />
    </div>
  );
}

function SecurityMessage() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="security message">
      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#404040] text-[0px] text-right">
        <p className="text-[14px]">
          <span className="leading-[1.35] text-[#404040]">Your data is</span>
          <span className="leading-[1.35]">{` `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] text-[#0062c4] underline">secure and private</span>
          <span className="leading-[1.35]">{`. `}</span>
        </p>
      </div>
    </div>
  );
}

function Prompt() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[288px] relative shrink-0 w-full" data-name="prompt">
      <InputActionsBar />
      <SecurityMessage />
    </div>
  );
}

function CoCoPromptMfe() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-end max-w-[700px] min-w-[375px] relative shrink-0 w-full" data-name="CoCo-Prompt MFE">
      <div className="content-stretch flex flex-col items-start min-w-[288px] relative rounded-[8px] shrink-0 w-full" data-name="saf-ai-prompt-input">
        <Prompt />
      </div>
    </div>
  );
}

function ChatPromptDesktopFa() {
  return (
    <div className="max-w-[700px] min-w-[375px] relative shrink-0 w-full" data-name="Chat prompt - Desktop FA">
      <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[20px] relative w-full">
          <CoCoPromptMfe />
        </div>
      </div>
    </div>
  );
}

function Chat1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative z-[3]" data-name="Chat">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px overflow-clip relative w-full" data-name="Example chat thread">
        <div className="bg-white relative shrink-0 w-full" data-name="User message">
          <div aria-hidden="true" className="absolute border-[#d2d2d2] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center px-[20px] py-[16px] relative w-full">
              <MessageContent />
            </div>
          </div>
        </div>
      </div>
      <ChatPromptDesktopFa />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] isolate items-start min-h-px min-w-px relative w-full" data-name="Body">
      <Chat1 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[12px] rounded-tr-[12px] w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Container header">
          <div aria-hidden="true" className="absolute border-[#dedede] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
              <Label />
              <Buttons />
            </div>
          </div>
        </div>
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border-[#737373] border-l border-r border-solid border-t inset-[-1px_-1px_0_-1px] pointer-events-none rounded-tl-[13px] rounded-tr-[13px] shadow-[0px_8px_16px_8px_rgba(31,31,31,0.1)]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bg-[#f0f7f5] content-stretch flex flex-col items-center justify-center left-[52px] p-[10px] rounded-[17px] size-[24px] top-[559px]" data-name="Icon">
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[5px] size-[16px] top-[3px]" data-name="saf-miscellaneous/note">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[12px] text-center w-full">
          <p className="leading-[normal]">pen-to-square</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute bg-[#f0f7f5] content-stretch flex flex-col items-center justify-center left-[52px] p-[10px] rounded-[17px] size-[24px] top-[598px]" data-name="Icon">
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[4px] size-[16px] top-[4px]" data-name="saf-miscellaneous/list">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[12px] text-center w-full">
          <p className="leading-[normal]">list</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-[#f0f7f5] content-stretch flex flex-col items-center justify-center left-[52px] p-[10px] rounded-[17px] size-[24px] top-[638px]" data-name="Icon">
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[4px] size-[16px] top-[4px]" data-name="saf-action/group">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[12px] text-center w-full">
          <p className="leading-[normal]">list-tree</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute bg-[#f0f7f5] content-stretch flex flex-col items-center justify-center left-[52px] p-[10px] rounded-[17px] size-[24px] top-[703px]" data-name="Icon">
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[4px] size-[16px] top-[3px]" data-name="saf-miscellaneous/grid-compact">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[12px] text-center w-full">
          <p className="leading-[normal]">{`\uF0CE`}</p>
        </div>
      </div>
    </div>
  );
}

export default function Chat() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Chat">
      <Container />
      <Icon />
      <Icon1 />
      <Icon2 />
      <Icon3 />
    </div>
  );
}