import React from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <section>
      <DashboardLayout>
        <Sidebar />
      </DashboardLayout>
    </section>
  );
}

export default Dashboard;
