import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Best.css"
import img1 from '../../assets/BestProduct/shirt.png'
import img2 from '../../assets/BestProduct/shirt2.png'
import img3 from '../../assets/BestProduct/shirt3.png'

const products = [
    {
        id: 1,
        title: "Casual Wear",
        img: img1,
    },
    {
        id: 2,
        title: "Printed Shirt",
        img: img2,
    },
    {
        id: 3,
        title: "Women Shirt",
        img: img3,
    },
];

const BestProduct = () => {
    return (
        <Container className="py-5">
            <p style={{ color: "#e6b980" }} className="mb-0">Best Products for you</p>
            <h2 className="fw-bold">Best Products</h2>
            <p className="text-muted" style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            <Row className="g-4 justify-content-center">
                {products.map((item) => (
                    <Col md={3} key={item.id}>
                        <Card className="product-card text-center p-3">
                            <Card.Img
                                variant="top"
                                src={item.img}
                                className="product-img mx-auto"
                                style={{ width: "150px", height: "auto" }}
                            />

                            <Card.Body>
                                <div className="stars mb-2">★★★★★</div>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text className="text-muted small">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Card.Text>
                                <Button className="order-btn"
                                    style={{ backgroundColor: "#e6b980", border:"none" }}
                                >Order Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BestProduct;