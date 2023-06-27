import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import SubmitResumeForm from '../components/pages-menu/submit-resume'

const index = () => {
    return (
        <>
            <Seo pageTitle="Submit Resume" />
            <SubmitResumeForm />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
