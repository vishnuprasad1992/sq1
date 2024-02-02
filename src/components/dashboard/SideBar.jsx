import { sideMenu } from "../../constants";
import LinkComponent from "./LinkComponent";

// side bar
const SideBar = () => {
  return sideMenu.map((link, i) => (
    // mapping link component
    <LinkComponent
      key={link.path + i}
      path={link.path}
      icon={link.icon}
      className={link.className}
    />
  ));
};

export default SideBar;
