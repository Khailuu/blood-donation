import { Button, Dropdown, Menu, Modal } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { banner2 } from "../../../assets";
import { Settings, User, LogOut } from "lucide-react";
import { authService } from "../../../services/authService";
import { menuItemsMember } from "../../../assets/menu";
import { useState, useEffect } from "react";
import { userService } from "../../../services/manageUserService";

export const NavbarMember = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await userService.getCurrentUser();
        console.log({ user });

        setCurrentUser(user);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const selectedKey =
    menuItemsMember.find(
      (item) =>
        location.pathname === item.path ||
        location.pathname.startsWith(`${item.path}/`)
    )?.key || "home";

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return 0;
    const birthDate = new Date(dateOfBirth);
    console.log({ birthDate, dateOfBirth });

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log({ age });

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleMenuClick = (e) => {
    const clickedItem = menuItemsMember.find((item) => item.key === e.key);

    if (clickedItem) {
      if (clickedItem.key === "donate") {
        const age = calculateAge(currentUser?.dateOfBirth);
        if (!currentUser?.dateOfBirth || age < 18) {
          setModalVisible(true);
          return;
        }
      }
      navigate(clickedItem.path);
    }
  };

  const handleLogout = () => {
    authService.logout();
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="navbar-wrapper">
      <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src={banner2}
            alt="Logo"
            style={{ width: 55, height: 50, cursor: "pointer" }}
            onClick={() => navigate("/app/member/home")}
          />
        </div>

        {/* Main Menu */}
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
                  {currentUser?.fullName || "User"}
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

          {/* <Link to="/app/member/health-survey">
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
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Health Survey
            </Button>
          </Link> */}
        </div>
      </div>

      <Modal
        title="Age Verification Required"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button
            key="back"
            onClick={() => setModalVisible(false)}
            style={{
              backgroundColor: "#fff ",
              color: "#bd0026",
              border: "1px solid #bd0026",
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
          >
            Cancel
          </Button>,
          <Button
            key="update"
            type="primary"
            onClick={() => {
              setModalVisible(false);
              navigate("/app/member/profile");
            }}
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
          >
            Update Profile
          </Button>,
        ]}
        centered
        style={{ textAlign: "center" }}
      >
        <div style={{ fontSize: 16, marginBottom: 16 }}>
          <p>You must be at least 18 years old to access the donation page.</p>
          {currentUser?.dayOfBirth && (
            <p>
              Your current age: {calculateAge(currentUser.dayOfBirth)} years old
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};
