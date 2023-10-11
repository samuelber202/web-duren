import React from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import CardWithLinks from "../components/CardWithLink";

function Dashboard() {
  return (
    <section>
      <DashboardLayout >
      <CardWithLinks/>
      </DashboardLayout>
    </section>
  );
}

export default Dashboard;
