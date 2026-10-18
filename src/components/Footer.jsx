const COLUMNS = [
  {
    title: "Բանկի մասին",
    links: [
      { label: "Մեր մասին", href: "#" },
      { label: "Ղեկավարություն", href: "#" },
      { label: "Բաժնետերեր", href: "#" },
      { label: "Հաշվետվություններ", href: "#" },
      { label: "Իրավական ակտեր", href: "#" },
      { label: "Սակագներ", href: "#" },
      { label: "Օտարվող գույք", href: "#" },
      { label: "Կառուցապատողներ", href: "#" },
      { label: "Գործընկեր ավտոսրահներ", href: "#" },
      { label: "Սակագների արխիվ", href: "#" },
    ],
  },
  {
    title: "Օգտակար հղումներ",
    links: [
      { label: "Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)", href: "#" },
      { label: "Հաճախորդի ռեզիդենտության չափանիշներ", href: "#" },
      { label: "Կարգավորում", href: "#" },
      { label: "Գաղտնիության քաղաքականություն", href: "#" },
      { label: "Ֆին. հաշտարար", href: "#" },
      { label: "Ֆինանսական հանցագործությունների կանխարգելում", href: "#" },
      { label: "Հղումներ Բանկի քարտապանների համար", href: "#" },
    ],
  },
  {
    title: "Այլ հղումներ",
    links: [
      { label: "EvocaONLINE", href: "#" },
      { label: "Պահատուփեր", href: "#" },
      { label: "Հաճախ տրվող հարցեր", href: "#" },
      { label: "Հայտարարություններ", href: "#" },
      { label: "Dibrary", href: "#" },
      { label: "Բուլլետիններ", href: "#" },
      { label: "Հետադարձ կապ", href: "#" },
      { label: "Կայքի քարտեզ", href: "#" },
    ],
  },
];

const CONTACT_LINKS = [
  { label: "Բանկի հասցեները և աշխատաժամերը", href: "#" },
  { label: "Կապ մեզ հետ", href: "#" },
  { label: "+374 10 605555", href: "tel:+37410605555" },
  { label: "8444", href: "tel:8444" },
];

const iconCls = "h-6 w-6 fill-current";

const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className={iconCls} aria-hidden="true">
        <path d="M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.2 2 10 3.700 10 6v2H7.500v3H10v11h4V11h2.700l.4-3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className={iconCls} aria-hidden="true">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.500a4.500 4.500 0 110 9 4.500 4.500 0 010-9zm0 2a2.500 2.500 0 100 5 2.500 2.500 0 000-5zM17.300 5.800a1.100 1.100 0 110 2.200 1.100 1.100 0 010-2.200z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M21.600 7.200a2.500 2.500 0 00-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4a2.500 2.500 0 00-1.800 1.800C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 001.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 001.800-1.800C22 15.200 22 12 22 12s0-3.200-.4-4.800zM10 15V9l5.200 3L10 15z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className={iconCls} aria-hidden="true">
        <path d="M4.500 8.500h3.400V20H4.500V8.500zM6.200 3a2 2 0 110 4 2 2 0 010-4zM10 8.500h3.200v1.600c.5-.9 1.700-1.900 3.500-1.900 3.600 0 4.300 2.400 4.300 5.500V20h-3.400v-5.600c0-1.400 0-3.100-1.900-3.100s-2.200 1.500-2.200 3V20H10V8.500z" />
      </svg>
    ),
  },
];

const FooterLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={`transition-colors hover:text-[#6a0dd6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a0dd6] ${className}`}
  >
    {children}
  </a>
);

const StoreBadge = ({ href, small, big, children }) => (
  <a
    href={href}
    className="inline-flex h-[34px] items-center gap-1.5 rounded-md bg-black px-2.5 text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a0dd6]"
  >
    {children}
    <span className="flex flex-col leading-none">
      <span className="text-[7px] uppercase tracking-wide">{small}</span>
      <span className="text-[13px] font-medium">{big}</span>
    </span>
  </a>
);

export default function Footer({
  logoSrc = null, // օր.՝ "/images/evocabank-logo.svg"
  address = ["ք. Երևան, 0010,", "Հանրապետության 44/2"],
  regulator = "Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից",
  copyright = "1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ",
  appStoreHref = "#",
  googlePlayHref = "#",
}) {
  return (
    <footer className="w-full border-t border-[#eeeeee] bg-white text-[#1f1f1f]">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 px-6 pb-16 pt-[52px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:px-12 2xl:grid-cols-[411px_293px_293px_293px_1fr] 2xl:pl-[145px]">
        {/* Լոգո, հասցե, իրավական տեքստ */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/" aria-label="Evocabank" className="inline-block">
            {logoSrc ? (
              <img src={logoSrc} alt="Evocabank" className="h-[30px] w-auto" />
            ) : (
              <span className="select-none text-[40px] leading-none text-[#8c8c8c]">
                <span className="font-black tracking-tight">evoca</span>
                <span className="text-[30px] font-light">BANK</span>
              </span>
            )}
          </a>

          <address className="mt-[58px] text-[17px] not-italic leading-6">
            {address.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>

          <p className="mt-10 max-w-[260px] text-[15px] font-semibold leading-6">
            {regulator}
          </p>
          <p className="mt-2 max-w-[260px] text-[13px] leading-6 text-[#7a7a7a]">
            {copyright}
          </p>
        </div>

        {/* Հղումների սյունակներ */}
        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title} className="max-w-[260px]">
            <h3 className="text-xl font-medium leading-[30px]">{col.title}</h3>
            <ul className="mt-[18px] space-y-6">
              {col.links.map((l) => (
                <li key={l.label} className="text-[17px] leading-6">
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Սոցցանցեր, հավելվածներ, կոնտակտներ */}
        <div>
          <ul className="flex items-center gap-[26px] text-[#a3a3a3]">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  className="block transition-colors hover:text-[#6a0dd6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a0dd6]"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-[34px] flex flex-wrap gap-3">
            <StoreBadge href={appStoreHref} small="Download on the" big="App Store" />
            <StoreBadge href={googlePlayHref} small="Get it on" big="Google Play">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M3 2.500l10 9.500L3 21.500z" fill="#00c3ff" />
                <path d="M3 2.500L16.500 9.500 13 12z" fill="#00f076" />
                <path d="M3 21.500L16.500 14.500 13 12z" fill="#ff3a44" />
                <path d="M16.500 9.500l4 2.500-4 2.500-3.500-2.500z" fill="#ffd500" />
              </svg>
            </StoreBadge>
          </div>

          <ul className="mt-9 space-y-6 text-[17px] leading-6">
            {CONTACT_LINKS.map((l) => (
              <li key={l.label} className="max-w-[200px]">
                <FooterLink href={l.href} className="text-[#6a0dd6] hover:underline">
                  {l.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}