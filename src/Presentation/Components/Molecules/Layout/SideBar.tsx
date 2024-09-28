import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import i18n from "@Language/i18n";
import { UrlsEnum } from "@Enum/UrlsEnum";
import { Routes } from "@Constants/Route";
import { useLayout } from "@State/layout.state";
import SideItem from "@Components/Atom/Layout/SideItem";
import SideIcon from "@Components/Atom/Layout/SideIcon";

/**
 * The props of the SideBar component.
 */
type SideBarProps = {
  /**
   * The toggle of the sidebar.
   */
  navToggle: boolean;

  /**
   * The active route.
   */
  activeRoute: string;
};

/**
 * Component that displays the sidebar.
 */
const SideBar: React.FC<SideBarProps> = ({ navToggle, activeRoute }) => {
  const { setActiveRoute } = useLayout();
  return (
    <div
      className={`w-[15rem] fixed h-screen bg-siderbar-dark-color overflow-hidden transition-all duration-75 ease-in-out z-20
                ${navToggle ? "translate-x-0 " : "large:translate-x-[-100%]"}`}
    >
      <div className="flex justify-between flex-col items-center h-full w-full">
        <div className="w-full flex justify-center border-b-border-color border-b-[1px]">
          <Image
            className="w-[70%] h-auto prevent-select"
            src="/png/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <ul className="w-full h-auto text-center flex flex-col justify-between ">
          {Object.values(Routes).map((route) => (
            <SideItem
              key={route.href}
              text={i18n.t(route.translate)}
              href={route.href}
              onClick={() => setActiveRoute(route.href)}
              active={activeRoute === route.href}
            />
          ))}
        </ul>
        <footer className="w-full h-auto flex border-t-[1px] border-t-border-color text-center justify-evenly">
          <SideIcon
            href={UrlsEnum.Github}
            target="_blank"
            rel="noreferrer"
            title="Github profile"
            Icon={FaGithub}
          />
          <SideIcon href={UrlsEnum.MailTo} title="Email" Icon={MdEmail} />
          <SideIcon
            href={UrlsEnum.LinkedIn}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile"
            Icon={FaLinkedin}
          />
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
