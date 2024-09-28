import { IconType } from "react-icons";

/**
 * The props of the SocialMediaButton component.
 */
type SocialMediaButtonProps = {
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
 * Component that displays the social media icon. It's the same as SocialIcon.tsx but with animation.
 */
const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  href,
  target,
  rel,
  title,
  Icon,
}): JSX.Element => {
  return (
    <a
      className="border-[2px] border-border-color flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer 
      hover:border-primary-color hover:text-primary-color
      [&:not(:last-child)]:mr-4 z-10"
      href={href}
      {...(target && { target })}
      {...(rel && { rel })}
      {...(title && { title })}
    >
      <Icon className="m-2" />
    </a>
  );
};

export default SocialMediaButton;
