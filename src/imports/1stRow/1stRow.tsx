import svgPaths from "./svg-hdpocmen46";

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <p className="font-['Clario:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1f1f1f] text-[24px] w-[301px]">Instructions</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Body">
        <div className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px] whitespace-pre-wrap">
          <p className="leading-[1.5] mb-0">{`This portal gives you access to the contract templates you have permission to create which means that you do not need to speak to the legal department to get these contracts done. Giving you the flexibility to work as needed saving you hassle and time wasted waiting for the legal team getting back to you. `}</p>
          <p className="leading-[1.5] mb-0">&nbsp;</p>
          <p className="leading-[1.5] mb-0">Self- serve guidance will help you get started then start generating the contracts you need effortlessly.</p>
          <p className="leading-[1.5] mb-0">&nbsp;</p>
          <p className="leading-[1.5]">Please do complete the below form for anything you believe you should have access too.</p>
        </div>
      </div>
    </div>
  );
}

function ModuleHeadingButtonGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Module heading + button group">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[24px] relative rounded-[8px]" data-name="1">
      <ModuleHeadingButtonGroup />
    </div>
  );
}

function ModuleHeadingButtonGroup1() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Module heading + button group">
      <p className="flex-[1_0_0] font-['Clario:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[24px]">Quick links</p>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f7f7] text-[16px] text-center w-full">
          <p className="leading-[normal]">gavel</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Company legal notice</p>
      </div>
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f7f7] text-[16px] text-center w-full">
          <p className="leading-[normal]">{`\uF56C`}</p>
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon1 />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Non disclosure agreement</p>
      </div>
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f7f7] text-[16px] text-center w-full">
          <p className="leading-[normal]">file-check</p>
        </div>
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon2 />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Commercial terms supply of service</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="flex-[1_0_0] h-[333px] min-h-px min-w-px relative rounded-[8px]" data-name="2">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <ModuleHeadingButtonGroup1 />
        <div className="bg-[#0a4e75] content-stretch flex items-start justify-center min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="saf-button">
          <div aria-hidden="true" className="absolute border border-[#123021] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" />
          <Contents />
        </div>
        <div className="bg-[#0a4e75] content-stretch flex items-start justify-center min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="saf-button">
          <div aria-hidden="true" className="absolute border border-[#123021] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" />
          <Contents1 />
        </div>
        <div className="bg-[#0a4e75] content-stretch flex items-start justify-center min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="saf-button">
          <div aria-hidden="true" className="absolute border border-[#123021] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" />
          <Contents2 />
        </div>
      </div>
    </div>
  );
}

function ModuleHeadingButtonGroup2() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Module heading + button group">
      <p className="flex-[1_0_0] font-['Clario:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[24px]">Guidance</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.56%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="Group">
          <path d={svgPaths.p2a230500} fill="var(--fill-0, #D50000)" id="frame" />
          <g id="Pdf-logo">
            <path d={svgPaths.pb1df500} fill="var(--fill-0, #D50000)" id="Shape" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LargePdf() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="large_pdf 1">
      <Group />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">Updated</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <LargePdf />
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative" data-name="saf-anchor">
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[16px] whitespace-nowrap">
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] underline">Tips and tricks</p>
        </div>
      </div>
      <div className="bg-[#edf6ff] content-stretch flex gap-[4px] items-center justify-center min-h-[24px] px-[8px] py-[2px] relative rounded-[88px] shrink-0" data-name="saf-badge-status">
        <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
        <Label />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.56%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="Group">
          <path d={svgPaths.p2a230500} fill="var(--fill-0, #D50000)" id="frame" />
          <g id="Pdf-logo">
            <path d={svgPaths.pb1df500} fill="var(--fill-0, #D50000)" id="Shape" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LargePdf1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="large_pdf 1">
      <Group1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">New</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <LargePdf1 />
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative" data-name="saf-anchor">
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[16px] whitespace-nowrap">
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] underline">Guidance and notes</p>
        </div>
      </div>
      <div className="bg-[#edf6ff] content-stretch flex gap-[4px] items-center justify-center min-h-[24px] px-[8px] py-[2px] relative rounded-[88px] shrink-0" data-name="saf-badge-status">
        <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
        <Label1 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.56%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="Group">
          <path d={svgPaths.p2a230500} fill="var(--fill-0, #D50000)" id="frame" />
          <g id="Pdf-logo">
            <path d={svgPaths.pb1df500} fill="var(--fill-0, #D50000)" id="Shape" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LargePdf2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="large_pdf 1">
      <Group2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">New</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <LargePdf2 />
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative" data-name="saf-anchor">
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[0px] whitespace-nowrap">
          <a className="[text-decoration-skip-ink:none] block cursor-pointer decoration-solid leading-[1.5] text-[16px] underline" href="https://highqalpha01.highq.com/highqalpha01/documentHome.action?metaData.siteID=198&metaData.parentFolderID=6440&metaData.documentID=11735" target="_blank">{`Self-service instructions `}</a>
        </div>
      </div>
      <div className="bg-[#edf6ff] content-stretch flex gap-[4px] items-center justify-center min-h-[24px] px-[8px] py-[2px] relative rounded-[88px] shrink-0" data-name="saf-badge-status">
        <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
        <Label2 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="flex-[1_0_0] h-[333px] min-h-px min-w-px relative rounded-[8px]" data-name="4">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <ModuleHeadingButtonGroup2 />
        <Frame2 />
        <div className="bg-[#d2d2d2] h-px shrink-0 w-[380px]" />
        <Frame3 />
        <div className="bg-[#d2d2d2] h-px shrink-0 w-[380px]" />
        <Frame4 />
        <div className="bg-[#d2d2d2] h-px shrink-0 w-[380px]" />
      </div>
    </div>
  );
}

export default function Component1stRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center px-[15px] relative size-full" data-name="1st row">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}