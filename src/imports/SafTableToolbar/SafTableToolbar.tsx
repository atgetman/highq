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
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8a8a8a] text-[16px] text-center w-full">
          <p className="leading-[normal]">chevron-down</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8a8a8a] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">Actions</p>
      </div>
      <RightIcon />
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f7f7] text-[16px] text-center w-full">
          <p className="leading-[normal]">plus</p>
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">Add</p>
      </div>
    </div>
  );
}

function RowLevelActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[16px] relative shrink-0 w-[869px]" data-name="Row-level actions">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[89px]" data-name="saf-checkbox">
        <CheckboxOption />
        <p className="flex-[1_0_0] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">Select all</p>
      </div>
      <div className="content-stretch flex font-['Source_Sans_3:SemiBold',sans-serif] font-semibold gap-[8px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" data-name="saf-table-selected">
        <p className="relative shrink-0">0</p>
        <p className="relative shrink-0">selected</p>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents />
      </div>
      <div className="bg-[#123021] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#123021] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents1 />
      </div>
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">objects-column</p>
        </div>
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon1 />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">Reorder columns</p>
      </div>
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8a8a8a] text-[16px] text-center w-full">
          <p className="leading-[normal]">arrows-rotate</p>
        </div>
      </div>
    </div>
  );
}

function Contents3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon2 />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">Reset to default</p>
      </div>
    </div>
  );
}

function TableActions() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center justify-end relative shrink-0" data-name="Table actions">
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0 z-[2]" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents2 />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0 z-[1]" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents3 />
      </div>
    </div>
  );
}

function Contents4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">Apply to all</p>
      </div>
    </div>
  );
}

function SafToolbarBottomRight() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end pr-[36px] relative shrink-0" data-name="saf-toolbar-bottom-right">
      <TableActions />
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-px" data-name="saf-divider">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="-translate-x-1/2 absolute bg-[#8a8a8a] bottom-0 left-1/2 top-0 w-px" data-name="divider-vector" />
          </div>
          <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents4 />
      </div>
    </div>
  );
}

export default function SafTableToolbar() {
  return (
    <div className="content-stretch flex items-center justify-between pr-[16px] py-[12px] relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="saf-table-toolbar">
      <RowLevelActions />
      <SafToolbarBottomRight />
    </div>
  );
}