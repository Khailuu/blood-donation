import {
  BarChartOutlined,
  UserOutlined,
  BookOutlined,
  ThunderboltOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const menuItems = [
  { label: "Home", key: "home", path: "/" },
  { label: "Donate", key: "donate", path: "/donate" },
  { label: "Blog", key: "blog", path: "/blog" },
  { label: "Contacts", key: "contacts", path: "/contacts" },
];

const menuItemsMember = [
  { label: "Home", key: "home", path: "/" },
  { label: "Donate", key: "donate", path: "/donate" },
  { label: "Schedule", key: "schedule", path: "/schedule" },
  { label: "Blog", key: "blog", path: "/blog" },
];

const menuItemsAdmin = [
  { key: "1", icon: <BarChartOutlined />, label: "Dashboard" },
  { key: "2", icon: <BookOutlined />, label: "Library" },
  { key: "3", icon: <UserOutlined />, label: "People" },
  { key: "4", icon: <ThunderboltOutlined />, label: "Activities" },
  {
    key: "5",
    icon: <QuestionCircleOutlined />,
    label: "Get Started",
  },
  { key: "6", icon: <SettingOutlined />, label: "Settings" },
];

export { menuItems, menuItemsMember, menuItemsAdmin };
