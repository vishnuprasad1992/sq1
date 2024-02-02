import { Card } from "react-bootstrap";

const MeetingCard = () => {
  return (
      <Card className="p-4 mt-3">
        <h6 className="mb-0">Board meeting</h6>
        <span className="upper-card__span mb-4">March 22 at 6pm</span>
        <small>You have been invited to attend a meeting of Board of Directors</small>
      </Card>
  );
};

export default MeetingCard;
