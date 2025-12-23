import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import products from "../trendingproduct/BestSellingProducts";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col>
                    <p style={{color:"#e6b980"}} className="mb-0">Top Selling Products for you</p>
                    <h2 className="fw-bold">Products</h2>
                    <p className="text-muted" style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </Col>

                <Col className="text-end">
                    <Button onClick={() => navigate("/products")} style={{backgroundColor:"#e6b980", border:"none", color:"black"}}>
                        View All
                    </Button>
                </Col>
            </Row>

            <Row className="justify-content-center">
                {products.slice(0, 6).map((item) => (
                    <Col md={2} sm={4} xs={6} key={item.id} className="mb-4">
                        <Card className="border-0">
                            <Card.Img
                                src={item.image}
                                style={{ height: "260px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <h6>{item.title}</h6>
                                <p className="text-muted mb-1">{item.color}</p>
                                <span style={{ color: "#f4b400" }}>⭐ {item.rating}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;