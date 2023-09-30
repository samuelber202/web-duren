import KegiatanPageCard from "../components/KegiatanPageCard";
import PageLayout from "../components/layouts/PageLayout";

const KegiatanWargaPage = () => {
  return (
    <section>
      <PageLayout>
        <KegiatanPageCard
          title="Kegiatan 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quod."
          image="https://picsum.photos/200"
        />
      </PageLayout>
    </section>
  );
};

export default KegiatanWargaPage;
