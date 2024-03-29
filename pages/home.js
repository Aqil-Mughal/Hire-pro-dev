import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home9 from "../components/home-9";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <Home9 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
