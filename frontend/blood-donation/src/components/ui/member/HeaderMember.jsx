import { Button, Menu } from "antd";
import Title from "antd/es/typography/Title";
import { Link, useNavigate } from "react-router-dom";
import "../../../css/guest/NavBarGuest.css";
import { menuItems, menuItemsMember } from "../../../assets/menu";
import { banner2 } from "../../../assets";
import { UserOutlined } from "@ant-design/icons";

export const HeaderMember = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    const clicked = menuItems.find((item) => item.key === e.key);
    if (clicked) navigate(clicked.path);
  };

  return (
    <div className="navbar-wrapper" style={{ borderBottom: "1px solid red" }}>
      <div className="header">
        <div
          className="logo-title"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <img src={banner2} alt="" style={{ width: 55, height: 50 }} />
        </div>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          onClick={handleMenuClick}
          items={menuItemsMember.map(({ key, label }) => ({ key, label }))}
          style={{ fontFamily: "raleway", fontWeight: "bold" }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Button shape="circle" icon={<UserOutlined />} />
          <Button
            type="primary"
            style={{
              backgroundColor: "#bd0026",
              borderColor: "#bd0026",
              color: "white",
              marginRight: 12,
              borderRadius: "50px",

              height: "40px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Link style={{ color: "white", textDecoration: "none" }}>
              Health Survey
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
