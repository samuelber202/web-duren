import React from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'
import Sidebar from '../components/Sidebar'
import PageLayout from '../components/layouts/pageLayout'

function Dashboard() {
  return (
    <>
    <DashboardLayout>
    <Sidebar/>
    </DashboardLayout>
    </>
  )
}

export default Dashboard