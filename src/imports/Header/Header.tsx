import imgInstanceLogo100411051 from "./0d978f80071c27d2e1b8da912f9867d4fb8d94e0.png";
import imgContainer from "./28e5ea53f31daa8bccbf1d10f99dd35d45b6fe8b.png";
import imgWelcome from "./be51e2d331a898da1e2aa88dd84de350298bed7f.png";

function Logo() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Logo">
      <div className="absolute h-[35px] left-0 top-0 w-[263px]" data-name="instanceLogo_1004_1105 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInstanceLogo100411051} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[35px] relative shrink-0 w-full">
      <Logo />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame6 />
    </div>
  );
}

function LogoAndProductIdentity() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative" data-name="logo-and-product-identity">
      <Frame5 />
    </div>
  );
}

function SafButtonIcon1() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="saf-button-icon">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.01)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <div className="pointer-events-none relative rounded-[88px] shrink-0 size-[34px]" data-name="container">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[88px] size-full" src={imgContainer} />
            <div aria-hidden="true" className="absolute border border-[#acb7b1] border-solid inset-0 rounded-[88px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SafButtonAvatar1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[37px]" data-name="saf-button-avatar">
      <SafButtonIcon1 />
    </div>
  );
}

function SafAvatar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[88px] shrink-0" data-name="saf-avatar">
      <SafButtonAvatar1 />
    </div>
  );
}

function SafButtonIcon() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="saf-button-icon">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[8px] relative size-full">
          <SafAvatar />
        </div>
      </div>
    </div>
  );
}

function SafButtonAvatar() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 size-[36px] top-0" data-name="saf-button-avatar">
      <SafButtonIcon />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="avatar">
      <SafButtonAvatar />
    </div>
  );
}

function Global() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="global">
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="saf-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#123021] text-[16px] text-center w-full">
            <p className="leading-[normal]">magnifying-glass</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="saf-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center w-full">
            <p className="leading-[normal]">sparkles</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="saf-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#123021] text-[16px] text-center w-full">
            <p className="leading-[normal]">bell</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="saf-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#123021] text-[16px] text-center w-full">
            <p className="leading-[normal]">envelope</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="saf-button-icon">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#123021] text-[16px] text-center w-full">
            <p className="leading-[normal]">star</p>
          </div>
        </div>
      </div>
      <Avatar />
    </div>
  );
}

function HeaderContents() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[15px] py-[8px] relative shrink-0 w-[1400px]" data-name="header-contents">
      <LogoAndProductIdentity />
      <Global />
    </div>
  );
}

function SafProductHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center relative shrink-0 w-full" data-name="saf-product-header">
      <HeaderContents />
    </div>
  );
}

function LtGlobalGuideProductHeaderLongTermSolutionCompact() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="LT global guide / product header / long term solution - compact">
      <SafProductHeader />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] h-full relative shrink-0 z-[1]" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full isolate items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap z-[2]">Marketplace</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Marketplace templates</p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="arrow/chevron-small-down">
            <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
              <p className="leading-[normal]">chevron-down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Our people</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Dashboards</p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="arrow/chevron-small-down">
            <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
              <p className="leading-[normal]">chevron-down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Dealcloser</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Template generation</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center mb-[-3px] p-[16px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="container">
      <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Knowledge management</p>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="arrow/chevron-small-down">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white w-full">
          <p className="leading-[normal]">chevron-down</p>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center relative shrink-0 z-[1]" data-name="Navigation">
      <div className="content-stretch flex h-[56px] isolate items-center justify-center relative shrink-0 z-[7]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[6]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container1 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[5]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container2 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[4]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container3 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[3]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container4 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[2]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container5 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center pb-[3px] relative shrink-0 z-[1]" data-name="saf-nav-items-horizontal">
        <Container6 />
      </div>
    </div>
  );
}

function SafNav() {
  return (
    <div className="content-stretch flex isolate items-center px-[15px] relative shrink-0 w-[1400px] z-[1]" data-name="saf-nav">
      <div aria-hidden="true" className="absolute border-[#d2d2d2] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Navigation />
    </div>
  );
}

function Grey() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[54px] isolate items-center justify-center relative shrink-0 w-full" data-name="Grey">
      <div aria-hidden="true" className="absolute border-[#d2d2d2] border-b border-solid inset-0 pointer-events-none" />
      <SafNav />
    </div>
  );
}

function Orange() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Orange">
      <div aria-hidden="true" className="absolute border-[#8a8a8a] border-b-3 border-solid inset-0 pointer-events-none" />
      <Grey />
    </div>
  );
}

function RightIcon() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 z-[1]" data-name="right-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[12px] text-center w-full">
          <p className="leading-[normal]">chevron-down</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[4px] z-[3]" data-name="contents">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[8px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[16px] z-[2]">
            <p className="leading-[1.35]">ACME portal</p>
          </div>
          <RightIcon />
        </div>
      </div>
    </div>
  );
}

function ButtonArea() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[2]" data-name="button-area">
      <div className="bg-white content-stretch flex isolate items-start min-h-[32px] relative rounded-[4px] shrink-0 w-full z-[1]" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#8a8a8a] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" />
        <Contents />
      </div>
    </div>
  );
}

function SafButtonMenu() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[32px] isolate items-start left-0 top-0 w-[208px]" data-name="saf-button+menu">
      <ButtonArea />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <SafButtonMenu />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px] z-[12]">
      <Frame4 />
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left-icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=true">
        <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center w-full">
          <p className="leading-[normal]">sparkles</p>
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="contents">
      <LeftIcon />
      <div className="flex flex-col font-['Clario:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">
        <p className="leading-[1.35]">HighQ Assist</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 z-[10]">
      <div className="bg-white content-stretch flex items-start justify-center min-h-[32px] relative rounded-[4px] shrink-0" data-name="saf-button">
        <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <Contents1 />
      </div>
      <div className="h-[31px] overflow-clip relative shrink-0 w-px" data-name="saf-divider">
        <div className="-translate-x-1/2 absolute bg-[#8a8a8a] bottom-0 left-1/2 top-0 w-px" data-name="divider-vector" />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] h-full relative shrink-0 z-[1]" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full isolate items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap z-[2]">Dashboard</p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px] z-[1]" data-name="arrow/chevron-small-down">
            <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
              <p className="leading-[normal]">chevron-down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Activity</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Documents</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Tracker</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Tasks</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.01)] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center p-[16px] relative">
          <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Reporting</p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="arrow/chevron-small-down">
            <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Solid',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[12px] text-center w-full">
              <p className="leading-[normal]">chevron-down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center mb-[-3px] p-[16px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="container">
      <p className="font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#212223] text-[16px] whitespace-nowrap">Admin</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center relative shrink-0 z-[1]" data-name="Navigation">
      <Frame2 />
      <Frame7 />
      <div className="content-stretch flex h-[56px] isolate items-center justify-center relative shrink-0 z-[8]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container7 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[7]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container8 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[6]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container9 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[5]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container10 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[4]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container11 />
        </div>
      </div>
      <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 z-[3]" data-name="saf-nav-items-horizontal">
        <div className="flex flex-row items-center self-stretch">
          <Container12 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center pb-[3px] relative shrink-0 z-[1]" data-name="saf-nav-items-horizontal">
        <Container13 />
      </div>
    </div>
  );
}

function SafNav1() {
  return (
    <div className="content-stretch flex isolate items-center px-[15px] relative shrink-0 w-[1400px] z-[1]" data-name="saf-nav">
      <div aria-hidden="true" className="absolute border-[#d2d2d2] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Navigation1 />
    </div>
  );
}

function Grey1() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center justify-center relative shrink-0 w-full" data-name="Grey">
      <SafNav1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start leading-[0] min-h-px min-w-px relative text-white">
      <div className="flex flex-col font-['Clario:Medium',sans-serif] h-[35px] justify-center not-italic relative shrink-0 text-[40px] w-[450px]">
        <p className="leading-[1.2]">European directives</p>
      </div>
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal h-[35px] justify-center relative shrink-0 text-[16px] w-[741px]">
        <p className="leading-[1.3]">{`Track new directives, understand associated risks, and meet every compliance deadline with confidence. `}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="saf-button-icon">
        <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="filled=false">
          <div className="flex flex-[1_0_0] flex-col font-['Font_Awesome_6_Sharp:Light',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d4b34] text-[16px] text-center w-full">
            <p className="leading-[normal]">star</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-center px-[15px] relative shrink-0 w-[1400px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Welcome() {
  return (
    <div className="content-stretch flex flex-col h-[235px] items-center justify-center relative shrink-0 w-full" data-name="Welcome">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-50 size-full" src={imgWelcome} />
      </div>
      <Frame3 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Header">
      <LtGlobalGuideProductHeaderLongTermSolutionCompact />
      <Orange />
      <Grey1 />
      <Welcome />
    </div>
  );
}
