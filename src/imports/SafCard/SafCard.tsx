function LeftIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-action/add*">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">arrow-left-from-line</p>
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
        <p className="leading-[1.2]">Hide</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="text-input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
            <p className="leading-[1.35]">Search folders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center relative rounded-[4px] shrink-0 w-full z-[2]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <TextInput />
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="saf-button-embedded-icon">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-l border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
            <p className="leading-[normal]">magnifying-glass</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaretIcon() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/caret-right">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder-open</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewContents() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="saf-tree-view-contents">
      <div aria-hidden="true" className="absolute border-[#50665b] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative w-full">
        <CaretIcon />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
          <p className="leading-[1.5]">Portfolio Meridian</p>
        </div>
      </div>
    </div>
  );
}

function CaretIcon1() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/caret-right">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder-open</p>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0" data-name="number">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.35]">4</p>
      </div>
    </div>
  );
}

function PlaceholderIcon() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="placeholder-icon">
      <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0" data-name="saf-miscellaneous/placeholder">
        <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
        <Number />
      </div>
    </div>
  );
}

function SafTreeViewContents1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon1 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
          <p className="leading-[1.5]">{`Leases & Licences`}</p>
        </div>
        <PlaceholderIcon />
      </div>
    </div>
  );
}

function CaretIcon2() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/caret-right">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewContents2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[52px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon2 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
          <p className="leading-[1.5]">London</p>
        </div>
      </div>
    </div>
  );
}

function CaretIcon3() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/caret-right">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewContents3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[52px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon3 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
          <p className="leading-[1.5]">Manchester</p>
        </div>
      </div>
    </div>
  );
}

function CaretIcon4() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/caret-right">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewContents4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[52px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon4 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
          <p className="leading-[1.5]">Midlands</p>
        </div>
      </div>
    </div>
  );
}

function CaretIcon5() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/caret-right">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewContents5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[52px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon5 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
          <p className="leading-[1.5]">South and Southwest</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item 4">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none" />
        <SafTreeViewContents2 />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item 7">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none" />
        <SafTreeViewContents3 />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item 8">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none" />
        <SafTreeViewContents4 />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item 9">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none" />
        <SafTreeViewContents5 />
      </div>
    </div>
  );
}

function CaretIcon6() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-arrow/caret-right">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0" data-name="number">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.35]">2</p>
      </div>
    </div>
  );
}

function PlaceholderIcon1() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="placeholder-icon">
      <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0" data-name="saf-miscellaneous/placeholder">
        <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
        <Number1 />
      </div>
    </div>
  );
}

function SafTreeViewContents6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon6 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#212223] text-[16px]">
          <p className="leading-[1.5]">Rent Reviews</p>
        </div>
        <PlaceholderIcon1 />
      </div>
    </div>
  );
}

function CaretIcon7() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/folder*">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0" data-name="number">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.35]">3</p>
      </div>
    </div>
  );
}

function PlaceholderIcon2() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="placeholder-icon">
      <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0" data-name="saf-badge-counter">
        <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
        <Number2 />
      </div>
    </div>
  );
}

function SafTreeViewContents7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon7 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
          <p className="leading-[1.5]">Landlord Consents</p>
        </div>
        <PlaceholderIcon2 />
      </div>
    </div>
  );
}

function CaretIcon8() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/folder*">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-center justify-center relative rounded-[10px] shrink-0" data-name="number">
      <div className="flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0062c4] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.35]">1</p>
      </div>
    </div>
  );
}

function PlaceholderIcon3() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="placeholder-icon">
      <div className="bg-[#edf6ff] content-stretch flex h-[16px] items-center justify-center min-h-[16px] px-[4px] relative rounded-[88px] shrink-0" data-name="saf-badge-counter">
        <div aria-hidden="true" className="absolute border border-[#0062c4] border-solid inset-[-1px] pointer-events-none rounded-[89px]" />
        <Number3 />
      </div>
    </div>
  );
}

function SafTreeViewContents8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon8 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
          <p className="leading-[1.5]">Lease Renewals</p>
        </div>
        <PlaceholderIcon3 />
      </div>
    </div>
  );
}

function CaretIcon9() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/folder*">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewContents9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon9 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
          <p className="leading-[1.5]">Correspondence</p>
        </div>
      </div>
    </div>
  );
}

function CaretIcon10() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="caret-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/folder*">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1f1f1f] text-[16px] text-center w-full">
          <p className="leading-[normal]">folder</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewContents10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="saf-tree-view-contents">
      <div className="content-stretch flex gap-[8px] items-start pl-[32px] pr-[12px] py-[2px] relative w-full">
        <CaretIcon10 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1f] text-[16px]">
          <p className="leading-[1.5]">Executed documents</p>
        </div>
      </div>
    </div>
  );
}

function SafTreeViewAssembled() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="saf-tree-view-assembled">
      <div className="bg-[#f5f7f6] content-stretch flex items-start relative rounded-[4px] shrink-0 w-full" data-name="saf-tree-view-parent">
        <div aria-hidden="true" className="absolute border-2 border-[#f5f7f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <SafTreeViewContents />
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item-1">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none" />
        <SafTreeViewContents1 />
      </div>
      <Frame1 />
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item 3">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none" />
        <SafTreeViewContents6 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item-1">
        <SafTreeViewContents7 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item-1">
        <SafTreeViewContents8 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item-1">
        <SafTreeViewContents9 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="saf-tree-view-child-item-1">
        <SafTreeViewContents10 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">list</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">Index</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">clock-rotate-left</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon1 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">Recent</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center w-full">
          <p className="leading-[normal]">share-from-square</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon2 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">Shared items</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">file-import</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon3 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">Received items</p>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">star</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon4 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">Favorites</p>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">pen-to-square</p>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon5 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">eSignature tracking</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">paperclip</p>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon6 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">Attachments</p>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="saf-miscellaneous/placeholder">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] text-center w-full">
          <p className="leading-[normal]">trash-can</p>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] min-h-[32px] relative shrink-0 w-full" data-name="content">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[8px] py-[4px] relative w-full">
        <Icon7 />
        <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#212223] text-[16px]">
          <p className="leading-[1.35]">Deleted items</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full" data-name="saf-option">
        <Content />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full" data-name="saf-option">
        <Content1 />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full" data-name="saf-option">
        <Content2 />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full" data-name="saf-option">
        <Content3 />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-[160px]" data-name="saf-option">
        <Content4 />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full" data-name="saf-option">
        <Content5 />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full" data-name="saf-option">
        <Content6 />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[32px] relative shrink-0 w-full" data-name="saf-option">
        <Content7 />
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="h-[747px] relative shrink-0 w-full" data-name="card-container">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[15px] relative size-full">
        <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start min-h-[24px] relative rounded-[4px] shrink-0" data-name="saf-button">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
          <Contents />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] h-[33px] isolate items-start pb-[20px] relative shrink-0 w-full" data-name="saf-text-field">
          <Field />
        </div>
        <SafTreeViewAssembled />
        <div className="h-px relative shrink-0 w-full" data-name="saf-divider">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute bg-[#8a8a8a] h-px left-0 right-0 top-0" data-name="divider-vector" />
          </div>
          <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-0 pointer-events-none" />
        </div>
        <Frame />
      </div>
    </div>
  );
}

export default function SafCard() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="saf-card">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
        <CardContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}