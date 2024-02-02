import { Card, Col } from "react-bootstrap";
import { upperCards } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import UpperCardDropdown from "./UpperCardDropdown";

// upper card section
const UpperSection = () => {
  // use state hooks for showing dropdown menu
  const [index, setIndex] = useState(null);
  const [show, setShow] = useState(false);

  return upperCards.map((card, i) => (
    // mapping the cards
    <Col key={card.mText + i}>
      <Card className="ps-4 pe-3 py-4 rounded-0 text-blue">
        <div className="d-flex justify-content-between pb-3">
          <FontAwesomeIcon icon={card.lIcon} className="fa-xl" />
          <div
            className="inline-block pointer position-relative"
            onClick={() => {
              setIndex(i);
              setShow(i !== index ? true :!show)
            }}
          >
            <FontAwesomeIcon icon={card.rIcon} className="fa-xl" />
            {index === i && show &&  <UpperCardDropdown />}
          </div>
        </div>
        <h5 className="pb-2">{card.mText}</h5>
        <span className="upper-card__span pad-r">{card.bText}</span>
      </Card>
    </Col>
  ));
};

export default UpperSection;
