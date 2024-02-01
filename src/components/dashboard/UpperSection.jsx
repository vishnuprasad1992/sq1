import { Card, Col } from "react-bootstrap";
import { upperCards } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpperSection = () => {
  return upperCards.map((card, i) => (
    <Col key={card.mText+i}>
      <Card className="ps-4 pe-3 py-4 rounded-0 text-blue">
        <div className="d-flex justify-content-between pb-3">
          <FontAwesomeIcon icon={card.lIcon} className="fa-xl" />
          <FontAwesomeIcon icon={card.rIcon} className="fa-xl"/>
        </div>
        <h5 className="pb-2">{card.mText}</h5>
        <span className="upper-card__span pad-r">{card.bText}</span>
      </Card>
    </Col>
  ));
};

export default UpperSection;
