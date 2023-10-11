import React from 'react'
import PageLayout from '../components/layouts/PageLayout'
import GrayBox from '../components/GrayBox'
import GoogleMap from '../components/Maps'
import PengumumanList from '../components/PengumumanList'

function Informasi() {
  return (
    <section>
      <GrayBox/>
    <PageLayout>
      <GoogleMap/>
    </PageLayout>
    
    </section>
  )
}

export default Informasi
