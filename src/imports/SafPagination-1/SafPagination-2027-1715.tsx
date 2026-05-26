function Range() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="range">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">1</p>
      </div>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[12px] text-center w-full">
          <p className="leading-[normal]">chevron-left</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[14px] whitespace-nowrap">
        <p className="leading-[1.2]">Previous</p>
      </div>
    </div>
  );
}

function RightIcon() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="right-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8a8a8a] text-[12px] text-center w-full">
          <p className="leading-[normal]">chevron-right</p>
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8a8a8a] text-[14px] whitespace-nowrap">
        <p className="leading-[1.2]">Next</p>
      </div>
      <RightIcon />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="buttons">
      <div className="bg-white content-stretch flex items-start justify-center min-h-[24px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents />
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex items-start justify-center min-h-[24px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <Contents1 />
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

function Divider() {
  return (
    <div className="absolute h-[24px] left-[189px] top-0 w-px" data-name="divider">
      <div className="size-full" />
    </div>
  );
}

function PageControls1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-start relative shrink-0 w-[173px]" data-name="page-controls">
      <PrevNext />
      <Divider />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">Go to page:</p>
      </div>
    </div>
  );
}

function Labels() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="labels">
      <Label />
    </div>
  );
}

function SafNumberField() {
  return (
    <div className="content-stretch flex items-center max-w-[96px] relative shrink-0 w-[78px]" data-name="saf-number-field">
      <Labels />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input">
      <SafNumberField />
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="text-input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">
            <p className="leading-[1.35]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-[78px]" data-name="field">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <TextInput />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Input />
      <Field />
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4b34] text-[14px] whitespace-nowrap">
        <p className="leading-[1.2]">Go</p>
      </div>
    </div>
  );
}

function Go() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-end relative shrink-0" data-name="go">
      <div className="bg-white content-stretch flex items-start justify-center min-h-[24px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents2 />
      </div>
    </div>
  );
}

function GoToPage() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="go-to-page">
      <Frame />
      <div className="flex flex-row items-center self-stretch">
        <Go />
      </div>
    </div>
  );
}

function PageControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Page controls">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="saf-pagination-count">
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
          <p className="leading-[1.35]">Page</p>
        </div>
        <Range />
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
          <p className="leading-[1.35]">of</p>
        </div>
        <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
          <p className="leading-[1.35]">2</p>
        </div>
      </div>
      <PageControls1 />
      <div className="h-[32px] relative shrink-0 w-px" data-name="saf-divider">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 absolute bg-[#e5e5e5] bottom-0 left-1/2 top-0 w-px" data-name="divider-vector" />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none" />
      </div>
      <GoToPage />
    </div>
  );
}

function Range1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="range">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center relative shrink-0">
        <p className="leading-[1.35]">1</p>
      </div>
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[1.35]">to</p>
      </div>
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center relative shrink-0">
        <p className="leading-[1.35]">25</p>
      </div>
    </div>
  );
}

function Total() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="total">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center relative shrink-0">
        <p className="leading-[1.35]">250</p>
      </div>
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[1.35]">)</p>
      </div>
    </div>
  );
}

function Showing() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="showing">
      <div className="content-stretch flex gap-[4px] items-start leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap" data-name="saf-pagination-count">
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0">
          <p className="leading-[1.35]">{`(Showing `}</p>
        </div>
        <Range1 />
        <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0">
          <p className="leading-[1.35]">of</p>
        </div>
        <Total />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">Items per page</p>
      </div>
    </div>
  );
}

function Labels1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="labels">
      <Label1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="text-input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
            <p className="leading-[1.35]">25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-[104px]" data-name="field">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <TextInput1 />
        <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="saf-button-embedded-icon">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
            <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[12px] text-center w-full">
              <p className="leading-[normal]">chevron-down</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function SafSelect() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="saf-select">
      <Labels1 />
      <Field1 />
    </div>
  );
}

function View() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="view">
      <Showing />
      <SafSelect />
    </div>
  );
}

function SafPaginationContent() {
  return (
    <div className="content-stretch flex h-[43px] items-center py-[12px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="saf-pagination-content">
      <View />
    </div>
  );
}

function PageView() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[368px]" data-name="Page view">
      <SafPaginationContent />
    </div>
  );
}

export default function SafPagination() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] py-[4px] relative rounded-bl-[8px] rounded-br-[8px] size-full" data-name="saf-pagination">
      <div aria-hidden="true" className="absolute border-[#8a8a8a] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <PageControls />
      <PageView />
    </div>
  );
}