import React from 'react'
import { BannerGuest } from '../../components/template/guest/home/BannerGuest'
import { Convenience } from '../../components/template/guest/home/Convenience'
import {WhyDonation} from '../../components/template/guest/home/WhyDonation'
import {DoubtsSection} from '../../components/template/guest/home/DoubtsSection'
import { About } from '../../components/template/guest/home/About'

export const HomePage = () => {
  return (
    <>
      <BannerGuest/>
      <Convenience/>
      <WhyDonation/>
      <About/>
      <DoubtsSection/>
    </>
  )
}
