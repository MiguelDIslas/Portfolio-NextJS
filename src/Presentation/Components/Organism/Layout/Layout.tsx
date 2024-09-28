"use client";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import { useLayout } from "@State/layout.state";
import SideBar from "@Components/Molecules/Layout/SideBar";
import CodeButton from "@Components/Atom/Button/CodeButton";
import MenuButton from "@Components/Atom/Button/MenuButton";
import LanguageSelect from "../Select/LanguageSelect";

/**
 * Layout component.
 */
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { navToggle, toggleNav, activeRoute } = useLayout();

  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      <LanguageSelect />
      <CodeButton />
      <SideBar activeRoute={activeRoute} navToggle={navToggle} />
      <MenuButton onClick={toggleNav} />
      <div className="ml-0 min-h-screen relative xl:ml-60">{children}</div>
    </div>
  );
};

export default Layout;
