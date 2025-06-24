import React from 'react'
import { BannerGuestDonate } from '../../components/template/guest/donate/BannerGuestDonate'
import { Requirement } from '../../components/template/guest/donate/Requirement'
import { Process } from '../../components/template/guest/donate/Process'
import { DoubtsSection } from '../../components/template/guest/home/DoubtsSection'
import { BloodInformation } from '../../components/template/guest/donate/BloodInformation'

export default function DonatePage() {
  return (
    <>
      <BannerGuestDonate/>
      <Requirement/>
      <Process/>
      <BloodInformation/>
      <DoubtsSection/>
    </>
  )
}
