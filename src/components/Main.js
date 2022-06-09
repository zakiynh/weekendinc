import SectionTop from "./SectionTop";
import SectionMiddle from "./SectionMiddle";
import SectionBottom from "./SectionBottom";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHelpTips, fetchTestimony } from "../store/actions";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestimony());
    dispatch(fetchHelpTips());
  }, [dispatch])
  return (
    <>
      <div className="bg-[#EEBECE] h-full w-full lg:w-screen">
        <SectionTop />
        <div className="relative">
          <SectionMiddle />
          <Carousel />
          <SectionBottom />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
