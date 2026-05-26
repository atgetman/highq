import imgWelcome from "./be51e2d331a898da1e2aa88dd84de350298bed7f.png";

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

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-center px-[15px] relative shrink-0 w-[1400px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function Welcome() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Welcome">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-50 size-full" src={imgWelcome} />
      </div>
      <Frame2 />
    </div>
  );
}