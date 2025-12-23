import { Container, Row, Col } from "react-bootstrap";
import './footer.css'
import logo from '../../assets/logo.png'

const footerLinks = [
  {
    title: "Important Links",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contactus" }
    ]
  },
  {
    title: "Links",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contactus" }
    ]
  }
];

const socialLinks = [
  { icon: "bi-instagram", url: "#" },
  { icon: "bi-facebook", url: "#" },
  { icon: "bi-linkedin", url: "#" }
];

const Footer = () => {
  return (
    <footer className="footer-section text-light">
      <Container>
        <Row className="py-5">

          {/* Logo & Description */}
          <Col md={4}>
            <img src={logo} width={35} />
            <h4 className="fw-bold">
              FashionHub
            </h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cum in beatae ea recusandae blanditiis veritatis.
            </p>

          </Col>

          {/* Dynamic Link Columns */}
          {footerLinks.map((section, index) => (
            <Col md={2} key={index}>
              <h6 className="fw-bold mb-3">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a href={link.url} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          {/* Contact & Social */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="mb-1">
              <i className="bi bi-geo-alt"></i> Pune, Maharashtra
            </p>
            <p>
              <i className="bi bi-telephone"></i> +91 123456789
            </p>

            <div className="mt-3">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className="social-icon me-3"
                >
                  <i className={`bi ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
      <div>
        <p className="text-center mt-3">© 2025 FashionHub</p>
      </div>
    </footer>
  );
};

export default Footer;