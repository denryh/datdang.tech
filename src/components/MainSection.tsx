import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Resume from "./Resume";
import Replay from "./Replay";

export default MainSection;

const links = [
  {
    href: "https://www.linkedin.com/in/dgthanhdat/",
    label: "LinkedIn",
    icon: <LinkedIn />,
  },
  {
    href: "https://github.com/denryh",
    label: "GitHub",
    icon: <GitHub />,
  },
  {
    href: "/datdang_swd_resume.pdf",
    label: "Resume",
    icon: <Resume />,
    download: true,
  },
];

function MainSection({
  active,
  onReplay,
}: {
  active: boolean;
  onReplay: () => void;
}) {
  return (
    <section
      className={`absolute inset-0 z-10 grid place-items-center transition-all duration-1000 ${active ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <ul className="grid justify-items-center gap-4">
        {links.map(function toLink(link) {
          return <LinkItem {...link} />;
        })}
      </ul>

      <button
        className="absolute bottom-10 rounded-full border border-white p-2 transition-colors duration-500 hover:bg-white hover:text-black sm:right-10"
        onClick={onReplay}
      >
        <Replay className="size-4 md:size-5" />
      </button>
    </section>
  );
}

function LinkItem({
  href,
  label,
  icon,
  download,
}: {
  href: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  download?: boolean;
}) {
  const downloadName = download ? href.slice(href.lastIndexOf("/")) : undefined;

  return (
    <li className="group cursor-pointer rounded-xl px-4 py-1">
      <a
        className="flex items-center justify-between space-x-1"
        href={href}
        download={downloadName}
      >
        <span className="font-medium transition-transform duration-500 group-hover:-translate-x-1 group-hover:-rotate-1">
          {label}
        </span>
        <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-6">
          {icon}
        </span>
      </a>
    </li>
  );
}
