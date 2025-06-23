import { NavbarMember } from "../../components/ui/member/NavbarMember";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../../components/ui/common/FooterComponent";

export const MemberPage = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};
