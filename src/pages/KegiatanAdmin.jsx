import React from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout';
import KegiatanForm from '../components/KegiatanForm';

function KegiatanAdmin() {
  return (
    
        <section>
      <DashboardLayout heading="Kegiatan">
        <KegiatanForm/>
</DashboardLayout>

        </section>
      );
    }
   
  


export default KegiatanAdmin