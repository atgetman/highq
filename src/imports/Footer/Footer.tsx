import svgPaths from "./svg-yi3y942s0o";

function Logo() {
  return (
    <div className="h-[26px] relative shrink-0 w-[193.013px]" data-name="logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193.013 26">
        <g id="logo">
          <g id="Vector">
            <path d={svgPaths.p16737b80} fill="#D64000" />
            <path d={svgPaths.p36f86000} fill="#D64000" />
            <path d={svgPaths.p25578000} fill="#D64000" />
            <path d={svgPaths.p3d763f00} fill="#D64000" />
            <path d={svgPaths.p22659780} fill="#D64000" />
            <path d={svgPaths.p2f2fc000} fill="#D64000" />
            <path d={svgPaths.p2a3be600} fill="#D64000" />
            <path d={svgPaths.pf0ccd40} fill="#D64000" />
            <path d={svgPaths.p1af80e00} fill="#D64000" />
            <path d={svgPaths.p1b41f8c0} fill="#D64000" />
            <path d={svgPaths.p1c8cc900} fill="#D64000" />
            <path d={svgPaths.p257e9b80} fill="#D64000" />
            <path d={svgPaths.p351aea00} fill="#D64000" />
            <path d={svgPaths.p330d6b00} fill="#D64000" />
            <path d={svgPaths.pbe3eb00} fill="#D64000" />
            <path d={svgPaths.p1d5dbc80} fill="#D64000" />
            <path d={svgPaths.p3885d600} fill="#D64000" />
            <path d={svgPaths.p5b2a600} fill="#D64000" />
            <path d={svgPaths.p2499a700} fill="#D64000" />
            <path d={svgPaths.p1060b00} fill="#D64000" />
            <path d={svgPaths.p30033800} fill="#D64000" />
            <path d={svgPaths.pc9fa000} fill="#D64000" />
            <path d={svgPaths.p11ee3500} fill="#D64000" />
            <path d={svgPaths.p2b6d7980} fill="#D64000" />
            <path d={svgPaths.p18489500} fill="#D64000" />
            <path d={svgPaths.p1b991500} fill="#D64000" />
            <path d={svgPaths.p21677c00} fill="#D64000" />
            <path d={svgPaths.p14d22880} fill="#D64000" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p17054400} fill="#212223" />
            <path d={svgPaths.p3a636800} fill="#212223" />
            <path d={svgPaths.p360f8b80} fill="#212223" />
            <path d={svgPaths.p2bd9aa00} fill="#212223" />
            <path d={svgPaths.p1e8ae780} fill="#212223" />
            <path d={svgPaths.p3a54e780} fill="#212223" />
            <path d={svgPaths.p30bfd200} fill="#212223" />
            <path d={svgPaths.p147f6580} fill="#212223" />
            <path d={svgPaths.p3bec2a80} fill="#212223" />
            <path d={svgPaths.p9c43400} fill="#212223" />
            <path d={svgPaths.p240ee600} fill="#212223" />
            <path d={svgPaths.p2406f900} fill="#212223" />
            <path d={svgPaths.p2ea77100} fill="#212223" />
            <path d={svgPaths.p24a192f0} fill="#212223" />
            <path d={svgPaths.p123dbef0} fill="#212223" />
            <path d={svgPaths.p3daeb400} fill="#212223" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GlobalMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[1400px]" data-name="Global menu">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="saf-logo">
        <Logo />
      </div>
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Body">
        <p className="flex-[1_0_0] font-['Clario:Medium',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#212223] text-[0px] text-center whitespace-pre-wrap">
          <a className="cursor-pointer leading-[1.2] text-[14px]" href="https://www.thomsonreuters.com/" target="_blank">
            <span>
              © 2025 Thomson Reuters
            </span>
          </a>
          <span className="leading-[1.2] text-[12px]">{` | `}</span>
          <a className="cursor-pointer leading-[1.2] text-[14px]" href="https://www.thomsonreuters.com/en/privacy-statement.html" target="_blank">
            <span>
              Thomson Reuters Privacy Statement
            </span>
          </a>
          <span className="leading-[1.2] text-[12px]">{` | `}</span>
          <a className="cursor-pointer leading-[1.2] text-[14px]" href="https://highqalpha01.highq.com/highqalpha01/termsOfUse.action?timestamp=1763588222617" target="_blank">
            <span>
              Terms of Use
            </span>
          </a>
          <span className="leading-[1.2] text-[12px]">{` | `}</span>
          <a className="cursor-pointer leading-[1.2] text-[14px]" href="#" onClick={(e) => e.preventDefault()}>
            <span>
              Help
            </span>
          </a>
          <span className="leading-[1.2] text-[12px]">{` |  `}</span>
          <a className="cursor-pointer leading-[1.2] text-[14px]" href="mailto:POC@highq.com" target="_blank">
            <span>
              Contact us
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function Gray() {
  return (
    <div className="bg-[#f3f3f3] flex-[1_0_0] min-h-px min-w-px relative w-full h-[82px]" data-name="Gray">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
          <GlobalMenu />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full h-[82px]" data-name="Footer">
      <Gray />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_#e3e3e3]" />
    </div>
  );
}