import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
};

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-zinc-300 transition hover:text-red-500"
    >
      {label}
    </Link>
  );
}
