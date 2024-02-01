import { sideMenu } from "../../constants";
import LinkComponent from "./LinkComponent";

const SideBar = () => {
  return sideMenu.map((link, i) => (
    <LinkComponent
      key={link.path + i}
      path={link.path}
      icon={link.icon}
      className={link.className}
    />
  ));
};

export default SideBar;
