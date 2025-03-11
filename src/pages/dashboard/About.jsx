import { HeaderContent } from "../../components/molecules";

const About = () => {
  return (
    <>
      <HeaderContent title={"About"} />

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Statistik Pengguna
            </h4>
            <p className="text-gray-500">
              Terdapat 1.245 pengguna aktif saat ini.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Total Laporan
            </h4>
            <p className="text-gray-500">Jumlah laporan yang diterima: 45</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Pengaturan Terbaru
            </h4>
            <p className="text-gray-500">
              Pengaturan telah diperbarui pada 25 Februari 2025.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Pengaturan Terbaru
            </h4>
            <p className="text-gray-500">
              Pengaturan telah diperbarui pada 25 Februari 2025.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
