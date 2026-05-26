function Container() {
  return (
    <div className="relative size-[20px]" data-name="container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="container" />
      </svg>
    </div>
  );
}

function CheckboxOption() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[20px]" data-name="checkbox-option">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <Container />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function RightIcon() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="right-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[12px] text-center w-full">
          <p className="leading-[normal]">chevron-down</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">Actions</p>
      </div>
      <RightIcon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="saf-checkbox">
        <CheckboxOption />
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">{`Select all `}</p>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents />
      </div>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">arrow-up-arrow-down</p>
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">filter</p>
        </div>
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon1 />
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0" data-name="number">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.35]">5</p>
      </div>
    </div>
  );
}

function TableActions() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center justify-end relative shrink-0" data-name="Table actions">
      <div className="bg-white content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0 z-[3]" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents1 />
      </div>
      <div className="bg-white content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0 z-[2]" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents2 />
        <div className="absolute bg-[#0062c4] h-[16px] min-h-[16px] right-[-8px] rounded-[88px] top-[-3px]" data-name="saf-badge-counter">
          <div className="content-stretch flex h-full items-center justify-center min-h-[inherit] overflow-clip px-[4px] relative rounded-[inherit]">
            <Number />
          </div>
          <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px] shadow-[0px_0px_0px_1px_white]" />
        </div>
      </div>
    </div>
  );
}

function SafToolbarBottomRight() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="saf-toolbar-bottom-right">
      <TableActions />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full">
      <Frame />
      <SafToolbarBottomRight />
    </div>
  );
}