import { Button, Card, ProgressBar } from "react-bootstrap";

const ProgressSection = () => {
  return (
    <div className="notification rounded p-4 me-3">
      <Card className="p-4">
        <h5>Formation status</h5>
        <span className="upper-card__span mb-4">in progress</span>
        <ProgressBar now={60} />
        <div className="text-center">
          <p className="mt-3 mb-0">Estimated progress</p>
          <span className="upper-card__span ">4-5 Business days</span>
        </div>
        <Button variant="primary" size="sm" className="mt-3 status-btn">
          View status
        </Button>
      </Card>
    </div>
  );
};

export default ProgressSection;
