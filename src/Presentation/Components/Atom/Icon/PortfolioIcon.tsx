import { IconType } from "react-icons";

/**
 * Type for the IconElement component
 */
type PortfolioIconProps = {
  /**
   * The icon to be displayed
   */
  Icon: IconType;

  /**
   * The title of the icon
   */
  title: string;

  /**
   * The href of the icon
   */
  href: string;
};

/**
 * Component for the PortfolioItem
 */
const PortfolioIcon: React.FC<PortfolioIconProps> = ({ Icon, title, href }) => (
  <li
    className="bg-border-color flex items-center justify-center p-4 rounded-full 
                w-12 h-12 my-0 mx-2 transition-all duration-[0.4s] ease-in-out 
                hover:bg-primary-color"
  >
    <a
      className="flex items-center justify-center transition-all duration-[0.4s] ease-in-out"
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      <Icon />
    </a>
  </li>
);

export default PortfolioIcon;
