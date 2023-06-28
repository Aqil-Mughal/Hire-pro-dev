const AboutBlock = () => {
  const blockContent = [
    {
      id: 1,
      icon: "images/index-14/icons/1.png",
      title: "Strong Employer Branding",
      bgColor: "-orange",
      text: `Develop and enhance your employer brand to attract and retain top talent.`,
      
    },
    {
      id: 2,
      icon: "images/index-14/icons/2.png",
      title: "Onboarding Solutions",
      bgColor: "-red",
      text: `Streamline the onboarding process with our comprehensive solutions. From paperwork management to training modules.`,
    },
    {
      id: 3,
      icon: "images/index-14/icons/4.png",
      title: "Recruitment Process Outsourcing (RPO)",
      bgColor: "-green",
      text: `End-to-end recruitment management, from sourcing to onboarding, freeing you to focus on your core business. .`,
    },
    {
      id: 4,
      icon: "images/index-14/icons/3.png",
      title: "Customized Training and Development",
      bgColor: "-purple",
      text: `Nurture and upskill your workforce with tailored programs for leadership and technical growth. `,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="icon-side -type-1" data-aos="fade-right" >
            <div className={`icon-wrap ${item.bgColor}`}>
              <img src={item.icon} style={{width:"40px"}} alt="image" data-aos="fade-left" />
            </div>

            <div className="content">
              <h4  style={{color:"#1F9747"}} className="title">{item.title}</h4>
              <p className="text" style={{fontSize:"14px",lineHeight:"19px"}}>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutBlock;
