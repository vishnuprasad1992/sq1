import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { subMenuList } from "../../constants";

// menu on right side column
const SubMenu = () => {
  return subMenuList.map((item, i) => (
    <div key={i} className="mx-3" >
      {item.isImg ? (
        <img src={item.img} alt="img" className="submenu-item" />
      ) : (
        <div className="position-relative submenu-item">
          <FontAwesomeIcon icon={item.icon} size="2xl"/>
          {item.isNotification && <span className="position-absolute notification-dot"></span>}
        </div>
      )}
    </div>
  ));
};

export default SubMenu;
