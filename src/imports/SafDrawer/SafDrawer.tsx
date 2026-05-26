function Branding() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24px] items-center min-h-px min-w-px relative drag-handle" data-name="Branding">
      <div className="content-stretch flex flex-col h-[16px] items-center justify-center relative shrink-0 w-[20px]" data-name="saf-miscellaneous/coCounsel">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d64000] text-[20px] text-center w-full">
          <p className="leading-[normal]">sparkles</p>
        </div>
      </div>
      <p className="font-['Clario:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#232425] text-[20px] w-[252px]">HighQ Assist</p>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[16px] text-[#1d4b34] text-[16px] text-center">
          <p className="leading-[normal]">{`\uF4A8`}</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">clock-rotate-left</p>
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon1 />
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">arrow-up-right-and-arrow-down-left-from-center</p>
        </div>
      </div>
    </div>
  );
}

function LeftIconMinimize() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 14L6 10M6 10V13.5M6 10H2.5M14 2L10 6M10 6V2.5M10 6H13.5" stroke="#1d4b34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

function Contents2({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="contents">
      <LeftIcon2 />
    </div>
  );
}

function Contents2Minimize({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="contents">
      <LeftIconMinimize />
    </div>
  );
}

function LeftIcon3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">xmark-large</p>
        </div>
      </div>
    </div>
  );
}

function Contents3({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="contents">
      <LeftIcon3 />
    </div>
  );
}

function Frame({ onClose, onExpand, isExpanded }: { onClose?: () => void; onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 no-drag">
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents1 />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        {isExpanded ? <Contents2Minimize onClick={onExpand} /> : <Contents2 onClick={onExpand} />}
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents3 onClick={onClose} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 text-[#de6633] text-[16px] text-center text-shadow-[0px_4px_33px_rgba(247,93,27,0.4)]">
        <p className="leading-[normal]">{`\uE5D6`}</p>
      </div>
      <p className="font-['Clario:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[#666] text-[20px]">Good morning, Thomas</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[0px] w-full">
        <p className="text-[28px]">
          <span className="leading-[1.2]">
            Your knowledge, amplified.
            <br aria-hidden="true" />
            {`Get precise insights from your `}
          </span>
          <span className="font-['Clario:Bold',sans-serif] leading-[1.2] not-italic">ACME portal</span>
          <span className="leading-[1.2]">.</span>
        </p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#404040] text-[12px] whitespace-nowrap">
        <p className="leading-[1.2]">Powered by MCP</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Intro">
        <Frame6 />
        <Frame7 />
      </div>
      <div className="bg-[#ededed] content-stretch flex gap-[4px] items-center justify-center min-h-[24px] px-[8px] py-[2px] relative rounded-[88px] shrink-0" data-name="saf-badge-status">
        <Label />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212223] text-[16px] w-full">Work smarter by connecting directly to your files, iSheets, and matters. Ask anything and get accurate answers rooted in your actual content.</p>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-name="Intro">
      <Frame8 />
      <Frame5 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">View expiring leases</p>
      </div>
    </div>
  );
}

function SuggestionPill() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0" data-name="SuggestionPill">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="relative shrink-0 size-[16px]" data-name="saf-action/show*">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] text-center w-full">
            <p className="leading-[normal]">eye</p>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Draft renewal notices</p>
      </div>
    </div>
  );
}

function SuggestionPill1() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0" data-name="SuggestionPill">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="relative shrink-0 size-[16px]" data-name="saf-miscellaneous/note">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] text-center w-full">
            <p className="leading-[normal]">pen-to-square</p>
          </div>
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Compare market rates</p>
      </div>
    </div>
  );
}

function SuggestionPill2() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0" data-name="SuggestionPill">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="relative shrink-0 size-[16px]" data-name="saf-miscellaneous/chart">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] text-center w-full">
            <p className="leading-[normal]">chart-line</p>
          </div>
        </div>
      </div>
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#212223] text-[14px] text-center whitespace-nowrap">Summarize a matter</p>
      </div>
    </div>
  );
}

function SuggestionPill3() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[6px] h-[35px] items-center px-[13px] py-px relative rounded-[33554400px] shrink-0" data-name="SuggestionPill">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="relative shrink-0 size-[16px]" data-name="saf-miscellaneous/clipboard">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[14px] text-center w-full">
            <p className="leading-[normal]">clipboard-check</p>
          </div>
        </div>
      </div>
      <Text3 />
    </div>
  );
}

function Suggestions({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className={`content-stretch flex gap-[10px] items-start py-[10px] relative shrink-0 w-full ${isExpanded ? 'flex-row flex-wrap' : 'flex-col'}`} data-name="Suggestions">
      <SuggestionPill />
      <SuggestionPill1 />
      <SuggestionPill2 />
      <SuggestionPill3 />
    </div>
  );
}

function Frame9({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-end min-h-px min-w-px relative w-full">
      <Intro />
      <Suggestions isExpanded={isExpanded} />
    </div>
  );
}

function Processing({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className="bg-[#fcfcfc] flex-1 relative w-full overflow-auto" data-name="Processing 2">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] h-full">
        <Frame9 isExpanded={isExpanded} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
            <p>
              <span className="leading-[1.5]">{`Insights from site: `}</span>
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5]">ACME portal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px pt-px relative" data-name="input-text">
      <p className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] min-h-px min-w-px relative text-[#666] text-[15px]">Ask about your data...</p>
    </div>
  );
}

function RightSend() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Right Send">
      <div className="content-stretch flex items-start relative shrink-0" data-name="bttn: send prompt">
        <div className="bg-[#314b3e] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#415e4e]" data-name="saf-button-icon">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
          <div className="shrink-0 size-[16px] flex items-center justify-center" data-name="send-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L8 4M8 4L4 8M8 4L12 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAreaField() {
  return (
    <div className="bg-white h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="text-area-field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[11px] items-center pl-[16px] pr-[12px] py-[8px] relative size-full">
          <InputText />
          <RightSend />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#ebf0ed] relative rounded-[13px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-px relative w-full">
          <Frame3 />
          <TextAreaField />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[8px] relative shrink-0">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[0px] text-right whitespace-nowrap">
        <p className="text-[12px]">
          <span className="leading-[1.35]">{`Your data is `}</span>
          <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] text-[#0062c4]">private and secure</span>
          <span className="leading-[1.35]">{`. `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Input container">
      <div className="content-stretch flex flex-col items-center py-[8px] relative shrink-0 w-full" data-name="Chat input">
        <Frame4 />
      </div>
    </div>
  );
}

export default function SafDrawer({ onClose, onExpand, isExpanded }: { onClose?: () => void; onExpand?: () => void; isExpanded?: boolean }) {
  return (
    <div className="bg-[#fcfcfc] content-stretch flex flex-col items-start relative size-full" data-name="saf-drawer">
      <div className="h-[56px] relative shrink-0 w-full" data-name="header">
        <div aria-hidden="true" className="absolute border-[#dedede] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <Branding />
            <Frame onClose={onClose} onExpand={onExpand} isExpanded={isExpanded} />
          </div>
        </div>
      </div>
      <Processing isExpanded={isExpanded} />
      <div className="bg-[#fcfcfc] relative shrink-0 w-full" data-name="active">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
          <InputContainer />
        </div>
      </div>
    </div>
  );
}