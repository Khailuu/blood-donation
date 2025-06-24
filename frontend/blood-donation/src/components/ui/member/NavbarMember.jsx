import { Button, Dropdown, Menu } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { banner2 } from "../../../assets";
import { Settings, User, LogOut } from "lucide-react";
import { authService } from "../../../services/authService";
import { menuItemsMember } from "../../../assets/menu";

export const NavbarMember = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = authService.getCurrentUser();

  const selectedKey =
    menuItemsMember.find(
      (item) =>
        location.pathname === item.path ||
        location.pathname.startsWith(`${item.path}/`)
    )?.key || "home";

  const handleMenuClick = (e) => {
    const clickedItem = menuItemsMember.find((item) => item.key === e.key);
    if (clickedItem) navigate(clickedItem.path);
  };

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <div
      className="navbar-wrapper"
      style={{ borderBottom: "1px solid #ffebee", zIndex: 1 }}
    >
      <div
        className="header"
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src={banner2}
            alt="Logo"
            style={{ width: 55, height: 50, cursor: "pointer" }}
            onClick={() => navigate("/app/member/home")}
          />
        </div>

        {/* Menu chính */}
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={menuItemsMember.map(({ key, label }) => ({
            key,
            label,
            style: {
              fontWeight: 600,
              fontFamily: "'Raleway', sans-serif",
            },
          }))}
          style={{
            flex: 1,
            maxWidth: 600,
            borderBottom: "none",
            margin: "0 24px",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Dropdown
            menu={{
              items: [
                {
                  key: "profile",
                  label: (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <Settings size={16} />
                      <span>Edit Profile</span>
                    </div>
                  ),
                  onClick: () => navigate("/app/member/profile"),
                },
                {
                  key: "logout",
                  label: (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </div>
                  ),
                  onClick: handleLogout,
                },
              ],
            }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 50,
                cursor: "pointer",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                border: "1px solid #ffebee",
              }}
            >
              <div
                style={{
                  background: "#bd0026",
                  borderRadius: "50%",
                  padding: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <User size={16} color="white" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  {currentUser?.name || "User"}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#bd0026",
                    fontWeight: 600,
                    lineHeight: "16px",
                  }}
                >
                  {currentUser?.role
                    ? currentUser.role.charAt(0).toUpperCase() +
                      currentUser.role.slice(1)
                    : "Member"}
                </div>
              </div>
            </div>
          </Dropdown>

          <Button
            type="primary"
            style={{
              backgroundColor: "#bd0026",
              borderRadius: 50,
              height: 40,
              fontWeight: 600,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => navigate("/health-survey")}
          >
            Health Survey
          </Button>
        </div>
      </div>
    </div>
  );
};
