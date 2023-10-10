import React from 'react'
import PageLayout from '../components/layouts/pageLayout'
import GrayBox from '../components/GrayBox'
import GoogleMap from '../components/Maps'
import PengumumanList from '../components/PengumumanList'

function Informasi() {
  return (
    <section>
      <GrayBox/>
    <PageLayout>
      <GoogleMap/>
      <PengumumanList/>
    </PageLayout>
    
    </section>
  )
}

export default Informasi