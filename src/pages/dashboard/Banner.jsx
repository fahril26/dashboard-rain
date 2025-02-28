import { useEffect, useState } from "react";
import { HeaderContent } from "../../components/molecules";
import Calendar from "../../components/organism/Calendar";
import { getBannerService } from "../../service";
import Cookies from "js-cookie";

const Banner = () => {
  const [dataBanner, setDataBanner] = useState([]);
  // const accessToken = Cookies.get("accessToken");

  // useEffect(() => {
  //   getBannerService(accessToken, setDataBanner);
  // }, []);

  return (
    <div className="p-6">
      <HeaderContent title={"Banner"} />

      <Calendar dataEvent={dataBanner} />
    </div>
  );
};

export default Banner;
