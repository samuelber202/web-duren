import React from 'react'
import PageLayout from '../components/layouts/pageLayout'
import GrayBox from '../components/GrayBox'
import GoogleMap from '../components/Maps'

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