import React from "react";
import AboutLayout from "../components/layouts/AboutLayout";
import GoogleMap from "../components/Maps";

function Informasi() {
  return (
    <section>
      <AboutLayout title={"INFORMASI & PETA"}>
        <GoogleMap />
      </AboutLayout>
    </section>
  );
}

export default Informasi;
