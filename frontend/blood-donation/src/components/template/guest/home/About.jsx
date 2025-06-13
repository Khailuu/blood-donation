import { Typography } from "antd";
const { Title } = Typography;
import "../../../../css/guest/About.css"; 



export const About = () => {
  const testimonials = [
    { id: 1, name: "Azione", logo: "fpyt" },
    { id: 2, name: "Il Sole", logo: "ilsole-logo" },
    { id: 3, name: "24 ORE", logo: "24ore-logo" },
    { id: 4, name: "Raf", logo: "raf-logo" },
    { id: 5, name: "Fortb", logo: "fortb-logo" },
    { id: 6, name: "Azione", logo: "azione-logo" },
    { id: 7, name: "Il Sole", logo: "ilsole-logo" },
    { id: 8, name: "24 ORE", logo: "24ore-logo" },
    { id: 9, name: "Raf", logo: "raf-logo" },
    { id: 10, name: "Fortb", logo: "fortb-logo" },
  ];

  return (
    <div className="testimonials-section" style={{border: "1px solid brown"}}>
      <Title level={2} className="section-title" style={{ textAlign: "center", marginBottom: "20px", color: "#bd0026", fontFamily: 'Oi', fontWeight: 'normal', fontSize: '50px' }}>
        About Us
      </Title>

      <div className="marquee-container">
        <div className="marquee-content">
          {testimonials.map((item) => (
            <div key={item.id} className="logo-item">
              <div className={`logo ${item.logo}`}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
