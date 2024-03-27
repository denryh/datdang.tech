export default function Screen({
  children,
  active,
  onClick,
}: {
  children?: string;
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <section
      onClick={onClick}
      className={`absolute inset-0 grid h-full cursor-pointer place-items-center transition-all duration-1000 md:text-xl ${active ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <p className="mx-auto max-w-60 px-2 md:max-w-[60ch]">{children}</p>
    </section>
  );
}
