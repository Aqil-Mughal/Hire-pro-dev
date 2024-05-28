import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Employment from "../components/pages-menu/employment/index"

const index = () => {
  return (
    <>
      <Seo pageTitle="Employment" />
      <Employment />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
