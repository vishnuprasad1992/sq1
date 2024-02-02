import { Badge, Card } from "react-bootstrap";
import { chartCards } from "../../constants";

const ChartSectionCard = () => {
  // mapping chart cards
  return chartCards.map((card, i) => (
    <Card key={card.title+i} className="ps-4 pe-3 py-4 rounded-0 text-blue mb-3">
      <h6>{card.title}</h6>
      <div className="d-flex justify-content-around">
        <h3>{card.value}</h3>
        <Badge className="h-max mt-2" bg={`${card.isClient ?"secondary":"danger"}`}>{card.badge}</Badge>
      </div>
    </Card>
  ));
};

export default ChartSectionCard;
