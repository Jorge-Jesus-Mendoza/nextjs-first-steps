"use client";

import Link from "next/link";
import style from "../../styles/General.module.css";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  icon: JSX.Element;
  subtitle: string;
  path: string;
}

const SidebarMenuItem = ({ title, icon, subtitle, path }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${pathname === path ? style["active-link"] : style.link}`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
