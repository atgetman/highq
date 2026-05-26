function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">Search</p>
      </div>
    </div>
  );
}

function Labels() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-[360px]" data-name="labels">
      <Label />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
        <p className="leading-[1.35]">Search files, tags, users</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border-[#8a8a8a] border-r border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] py-[4px] relative size-full">
          <Input />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <TextInput />
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="saf-button-embedded-icon">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
            <p className="leading-[normal]">magnifying-glass</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35] whitespace-pre">{`Aditi  Singh`}</p>
      </div>
    </div>
  );
}

function SafButtonIcon() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="saf-button-icon">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="action/close*">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
          <p className="leading-[normal]">xmark-large</p>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212223] text-[14px] whitespace-nowrap">
        <p className="leading-[1.35]">United kingdom</p>
      </div>
    </div>
  );
}

function SafButtonIcon1() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="saf-button-icon">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="action/close*">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
          <p className="leading-[normal]">xmark-large</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[24px] pl-[8px] relative rounded-[4px] shrink-0" data-name="saf-chip">
        <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Label1 />
        <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0" data-name="saf-chip-close">
          <SafButtonIcon />
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[24px] pl-[8px] relative rounded-[4px] shrink-0" data-name="saf-chip">
        <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Label2 />
        <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0" data-name="saf-chip-close">
          <SafButtonIcon1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="saf-search-field">
        <Labels />
        <Field />
      </div>
      <Frame />
    </div>
  );
}