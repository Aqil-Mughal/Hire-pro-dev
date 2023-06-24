import Link from "next/link";
import jobCatContent from "../../data/job-catergories";

const JobCategorie2 = () => {
  return (
    <>
      {jobCatContent.slice(0, 14).map((item) => (
        <div
          className="category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
            <div className="content" style={{justifyContent:"center"}}>
              <span className={`icon ${item.icon}`} style={{backgroundColor:"#DFEDFF"}}>
              <img src={item?.image} style={{width:"30px"}} />
              </span>
              <h4>
                <Link href="/job-list-v2">{item.catTitle}</Link>
              </h4>
              
              
            </div>
          </div>
      ))}
    </>
  );
};

export default JobCategorie2;
// <p>({item.jobNumber} open positions)</p>

// <img src={item?.images} style={{marginTop:"5%"}} />