import { Card, Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/dashboard/SideBar";
import UpperSection from "../components/dashboard/UpperSection";
import ChartSectionCard from "../components/dashboard/ChartSectionCard";
import ChartSection from "../components/dashboard/ChartSection";
import DashboardEmail from "../components/dashboard/DashboardEmail";
import ProgressSection from "../components/dashboard/ProgressSection";

const Dashboard = () => {
  return (
    <Container fluid className="bg-light dashboard">
      <Row>
        <Col xs={12} lg={12}>
          <Row>
            <Col
              lg={1}
              xs={2}
              sm={1}
              className="sidebar p-sm-1 bg-primary rounded d-flex align-items-center flex-column justify-content-md-center vh-100 position-relative"
            >
              <SideBar />
            </Col>
            <Col lg={11} xs={10} sm={11} className="py-3">
              <Row>
                <Col lg={8} xs={12} className="px-4">
                  <h2>Welcome back Ally!</h2>
                  <Row className="mt-4 mb-4">
                    <UpperSection />
                  </Row>
                  <Row className="mt-2">
                    <Col lg={3} xs={12}>
                      <div className="d-flex flex-column justify-content-center">
                        <ChartSectionCard />
                      </div>
                    </Col>
                    <Col lg={9} xs={12} className="pb-3">
                      <Card className="rounded-0 h-100 px-3 text-blue">
                        <div className="d-flex justify-content-between chart-leg">
                          <small className="">New clients</small>
                          <small>last 7 days vs prior week</small>
                        </div>
                        <div>
                          <ChartSection />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="rounded-0 h-100 px-3 text-blue">
                        <DashboardEmail />
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={4}>
                  <ProgressSection />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
