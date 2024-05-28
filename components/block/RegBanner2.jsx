import Link from "next/link";

const RegBanner2 = () => {
  const regBannerContent = [
    {
      id: 1,
      name: "Employers",
      text: ` Employers actively evaluate and identify the most suitable candidate to meet the organization's `,
      avatar: "images/resource/employ.png",
      bannerClass: "banner-style-one",
      buttonLabel: "Hiring Form",
      buttonLink: "/hiring-form",
      backgroundColor: "#1F9097",
      buttonFontColor: "#747474",
    },
    {
      id: 2,
      name: "Candidate",
      text: `Candidates have the opportunity to secure a job by successfully navigating the hiring process`,
      avatar: "images/resource/candidate.png",
      bannerClass: "banner-style-two",
      buttonLabel: "Submit Resume",
      buttonLink: "/submit-resume",
      buttonFontColor: "#747474",
      backgroundColor: "#5B1F97",
      
    },
  ];
  return (
    <>
      {regBannerContent.map((item) => (
        <div
          className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
          key={item.id}
         
        >
          <div className="inner-box" style={{ backgroundColor: item.backgroundColor, }}>
            <div className="content" data-aos="fade-right">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <Link href={item.buttonLink} className="theme-btn btn-style-five" style={{ color: item.buttonFontColor,}} data-aos="fade-up-right">
              {item.buttonLabel}
              </Link>
              
            </div>
            <figure className="image">
              <img src={item.avatar} alt="resource"data-aos="fade-left"/>
            </figure>
          </div>
        </div>
      ))}
    </>
  );
};

export default RegBanner2;
