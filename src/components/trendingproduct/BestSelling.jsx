import { Container, Row, Col, Card } from "react-bootstrap";
import products from "../trendingproduct/BestSellingProducts";

const AllProducts = () => {
  return (
    <Container className="my-5">
       <p style={{color:"#e6b980"}} className="mb-0">Top Selling Products for you</p>
      <h2 className="fw-bold">Products</h2>
      <p className="text-muted" style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>

      <Row>
        {products.map((item) => (
          <Col md={2} sm={6} xs={12} key={item.id} className="mb-4">
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

export default AllProducts;