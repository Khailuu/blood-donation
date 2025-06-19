import { Typography } from "antd";
import { Heart, User, LogOut, Bell, Settings } from "lucide-react";
const { Title } = Typography;

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg border-b-2 border-pink-200 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            {/* <div className="bg-pink-600 p-2 rounded-xl shadow-md">
              <Heart className="h-8 w-8 text-white" fill="currentColor" />
            </div>
            <div>
              <span className="text-2xl font-bold text-pink-700">
                Blood Bank
              </span>
              <p className="text-xs text-pink-500 font-medium">
                Quản lý hiến máu
              </p>
            </div> */}

            <div className="logo-title">
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
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100">
              <div className=" p-2 rounded-full" style={{backgroundColor: "#bd0026"}}>
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">
                  Hotaru
                </span>
                <span
                  className="text-xs "
                  style={{ color: "#bd0026", fontWeight: "600" }}
                >
                  Staff
                </span>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-white px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105" style={{backgroundColor: "#bd0026"}}>
              <LogOut className="h-4 w-4 " />
              <span className="text-sm font-bold">Log out</span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 " style={{backgroundColor: "#ed6d8b"}}></div>
    </nav>
  );
};
