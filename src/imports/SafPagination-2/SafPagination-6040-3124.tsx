function Range() {
  return (
    <div className="content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal items-start leading-[0] relative shrink-0 text-[#212223] text-[15px] whitespace-nowrap" data-name="range">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5]">1</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5]">–</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5]">25</p>
      </div>
    </div>
  );
}

function Total() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="total">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[15px] whitespace-nowrap">
        <p className="leading-[1.5]">250</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[56px]" data-name="buttons">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="cc-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8a8a8a] text-[12px] text-center w-full">
            <p className="leading-[normal]">chevron-left</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="cc-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
            <p className="leading-[normal]">chevron-right</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrevNext() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="prev-next">
      <Buttons />
    </div>
  );
}

function PageControls() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="page-controls">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="cc-pagination-count">
        <Range />
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[15px] whitespace-nowrap">
          <p className="leading-[1.5]">of</p>
        </div>
        <Total />
      </div>
      <PrevNext />
    </div>
  );
}

function RightIcon() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="right-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
          <p className="leading-[normal]">chevron-down</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
        <p className="leading-[1.2]">5</p>
      </div>
      <RightIcon />
    </div>
  );
}

function SafPaginationCount() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="saf-pagination-count">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[15px] whitespace-nowrap">
        <p className="leading-[1.5]">Rows per page:</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start justify-center min-h-[24px] relative rounded-[4px] shrink-0" data-name="cc-button">
        <div aria-hidden="true" className="absolute border border-[rgba(252,252,252,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents />
      </div>
    </div>
  );
}

function Showing() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="showing">
      <SafPaginationCount />
    </div>
  );
}

function View() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="view">
      <Showing />
    </div>
  );
}

function SafPaginationContent() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="saf-pagination-content">
      <PageControls />
      <div className="h-[24px] overflow-clip relative shrink-0 w-px" data-name="saf-divider">
        <div className="-translate-x-1/2 absolute bg-[#d2d2d2] bottom-0 left-1/2 top-0 w-px" data-name="divider-vector" />
      </div>
      <View />
    </div>
  );
}

export default function SafPagination() {
  return (
    <div className="content-stretch flex items-center justify-end pl-[16px] py-[8px] relative rounded-bl-[16px] rounded-br-[16px] size-full" data-name="saf-pagination">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-br-[8px]" data-name="cc-pagination">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pl-[16px] py-[12px] relative w-full">
            <SafPaginationContent />
          </div>
        </div>
      </div>
    </div>
  );
}