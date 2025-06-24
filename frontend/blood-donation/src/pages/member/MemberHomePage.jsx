import React from "react";
import { BannerMember } from "../../components/template/member/home/BannerMember";
import {DoubtsSection} from '../../components/template/guest/home/DoubtsSection'
import { DonateSpace } from "../../components/template/member/home/DonateSpace";

export const MemberHomePage = () => {
  return (
    <div>
      <BannerMember />
      <DonateSpace />
      <DoubtsSection />
    </div>
  );
};
