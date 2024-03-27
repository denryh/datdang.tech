import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Resume from "./Resume";
import Replay from "./Replay";

export default function MainSection({
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
        <li className="group cursor-pointer rounded-xl px-4 py-1">
          <a
            className="flex items-center justify-between space-x-1"
            href="https://www.linkedin.com/in/dgthanhdat/"
          >
            <span className="font-medium transition-transform duration-500 group-hover:-translate-x-1 group-hover:-rotate-1">
              LinkedIn
            </span>
            <LinkedIn className="transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-6" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-xl px-4 py-1">
          <a
            className="flex items-center justify-between space-x-1"
            href="https://github.com/denryh"
          >
            <span className="font-medium transition-transform duration-500 group-hover:-translate-x-1 group-hover:-rotate-1">
              GitHub
            </span>
            <GitHub className="transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-6" />
          </a>
        </li>
        <li className="group cursor-pointer rounded-xl px-4 py-1">
          <a
            className="flex items-center justify-between space-x-1"
            href="/datdang_swd_resume.pdf"
            download="/datdang_swd_resume.pdf"
          >
            <span className="font-medium transition-transform duration-500 group-hover:-translate-x-1 group-hover:-rotate-1">
              Resume
            </span>
            <Resume className="transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-6" />
          </a>
        </li>
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
