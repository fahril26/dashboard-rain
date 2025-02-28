import Breadcrumb from "./Breadcrumb";

const HeaderContent = ({ title }) => {
  return (
    <div className="flex justify-between mb-10">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <Breadcrumb />
    </div>
  );
};

export default HeaderContent;
