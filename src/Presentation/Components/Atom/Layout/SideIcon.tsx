import React from "react";
import { IconType } from "react-icons";

/**
 * The props of the SideIcon component.
 */
export type SideIconProps = {
  /**
   * The link to the icon
   */
  href: string;

  /**
   * The target of the link
   */
  target?: string;

  /**
   * The rel of the link
   */
  rel?: string;

  /**
   * The title of the link
   */
  title?: string;

  /**
   * The icon to display
   */
  Icon: IconType;
};

/**
 * Component that displays the social media icon.
 */
const SideIcon: React.FC<SideIconProps> = ({
  href,
  target,
  rel,
  title,
  Icon,
}) => {
  return (
    <a
      className="py-[1.5rem] text-[1.1rem] block text-white"
      href={href}
      {...(target && { target })}
      {...(rel && { rel })}
      {...(title && { title })}
    >
      <Icon />
    </a>
  );
};

export default SideIcon;
