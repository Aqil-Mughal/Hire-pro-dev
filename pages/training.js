import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Training from "../components/pages-menu/training/index";

const index = () => {
  return (
    <>
      <Seo pageTitle="Training" />
      <Training />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
