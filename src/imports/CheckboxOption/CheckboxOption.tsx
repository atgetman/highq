import svgPaths from "./svg-d8bg3mloh0";

function Container() {
  return (
    <div className="relative size-[20px]" data-name="container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="container">
          <path clipRule="evenodd" d={svgPaths.p3dfb03a2} fill="var(--fill-0, white)" fillRule="evenodd" id="check" />
        </g>
      </svg>
    </div>
  );
}

export default function CheckboxOption() {
  return (
    <div className="bg-[#1d4b34] relative rounded-[2px] size-full" data-name="checkbox-option">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <Container />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1d4b34] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}