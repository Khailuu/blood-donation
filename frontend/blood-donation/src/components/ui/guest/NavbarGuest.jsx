import { Button, Menu } from "antd";
import Title from "antd/es/typography/Title";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../../css/guest/NavBarGuest.css";
import { menuItems } from "../../../assets/menu";

export const NavbarGuest = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hàm lấy key menu theo pathname
  const getSelectedKey = () => {
    const found = menuItems.find((item) => item.path === location.pathname);
    return found ? [found.key] : [];
  };

  const handleMenuClick = (e) => {
    const clicked = menuItems.find((item) => item.key === e.key);
    if (clicked) navigate(clicked.path);
  };

  return (
    <div className="navbar-wrapper">
      <div className="header">
        <div className="logo-title">
          <Link to="/">
            <Title
              level={2}
              style={{
                color: "#bd0026",
                margin: 0,
                fontFamily: "Oi",
                fontWeight: "normal",
              }}
            >
              HEMORA
            </Title>
          </Link>
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={getSelectedKey()}
          onClick={handleMenuClick}
          items={menuItems.map(({ key, label }) => ({ key, label }))}
          style={{ fontFamily: "raleway", fontWeight: "bold" }}
        />

        <div className="auth-section">
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button
              className="btn-login"
              type="primary"
              style={{
                backgroundColor: "#bd0026",
                borderColor: "#bd0026",
                color: "white",
                marginRight: 12,
                borderRadius: "50px",
                width: "100px",
                height: "40px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "15px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(0.95)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};