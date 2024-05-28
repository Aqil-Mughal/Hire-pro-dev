import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import HiringForm from '../components/pages-menu/hiring-form'

const index = () => {
    return (
        <>
            <Seo pageTitle="Hiring Form" />
            <HiringForm />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
