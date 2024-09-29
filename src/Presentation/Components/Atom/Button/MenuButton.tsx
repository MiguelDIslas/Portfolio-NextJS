import { MdMenu } from "react-icons/md";

/**
 * The props of the MenuButton component.
 */
type MenuButtonProps = {
  /**
   * The onClick of the component.
   */
  onClick: () => void;
};

/**
 * Component that displays the menu button.
 */
const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed right-[5%] top-[3%] hidden z-[15] large:block">
      <MdMenu
        className="text-[3rem] text-white cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

export default MenuButton;
