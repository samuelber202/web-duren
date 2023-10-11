import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function KegiatanDetail() {
  const { id } = useParams(); // Access the id parameter from the URL
  const [kegiatanData, setKegiatanData] = useState(null);

  useEffect(() => {
    // Fetch all Kegiatan data
    axios
      .get("https://651635c709e3260018c9876d.mockapi.io/kegiatan")
      .then((response) => {
        // Filter the data to find the Kegiatan with the specified id
        const kegiatan = response.data.find((kegiatan) => kegiatan.id === id);

        if (kegiatan) {
          setKegiatanData(kegiatan);
        } else {
          console.error(`Kegiatan with id ${id} not found`);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Add id as a dependency to re-fetch data when the id parameter changes

  if (!kegiatanData) {
    return <div>Loading...</div>; // You can replace this with a loading indicator
  }

  // Render the details of the specific Kegiatan
  return (
    <div>
      <h2>Kegiatan Details</h2>
      <p>Title: {kegiatanData.title}</p>
      <p>Description: {kegiatanData.content}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default KegiatanDetail;
