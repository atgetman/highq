function SampleText() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[10px] top-0 w-[468px]" data-name="Sample text">
      <div className="flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-black">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[1.5] mb-0 whitespace-pre-wrap">2 critical deadlines require immediate action:</p>
        <p className="leading-[1.5] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ol className="leading-[1.5] mb-0" start="1">
          <li className="mb-[16px] ms-[21px]">
            <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">14–18 Oxford Street</span>
            {` — Break notice for Zara UK must be served by `}
            <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">15 July 2026</span>. If missed, the break option at 24 August 2026 is lost and the lease runs to 2031.
          </li>
          <li className="ms-[21px]">
            <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Tower Point, Brighton</span>
            {` — Lease expired 28 February 2025. Tenant is holding over under the Landlord and Tenant Act 1954. Renewal terms have not yet been agreed — risk of statutory continuation.`}
          </li>
        </ol>
        <p className="leading-[1.5] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <p className="font-['Source_Sans_3:Italic',sans-serif] italic leading-[1.5] whitespace-pre-wrap">Total annual rent across properties expiring or breaking before end of 2026: £3,760,000</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <SampleText />
    </div>
  );
}