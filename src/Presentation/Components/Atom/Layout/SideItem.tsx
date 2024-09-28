import Link from "next/link";

/**
 * The props of the SideItem component.
 */
type SideItemProps = {
  /**
   * The href of the component.
   */
  href: string;

  /**
   * The text of the component.
   */
  text: string;

  /**
   * The active of the component.
   */
  active?: boolean;

  /**
   * The onClick of the component.
   */
  onClick?: () => void;
};

/**
 * Component that displays the navigation item.
 */
const SideItem: React.FC<SideItemProps> = ({ href, text, active, onClick }) => {
  return (
    <li
      className="flex text-center justify-center prevent-select"
      onClick={onClick}
    >
      <Link
        href={href}
        className={`w-1/2 relative block text-[transparent] 
        font-[800] decoration-none no-underline py-[0.4rem] tracking-[1.5px] 
        transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer
        ${active ? "text-white" : "text-siderbar-light-color"}`}
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        {text}
      </Link>
    </li>
  );
};

export default SideItem;
