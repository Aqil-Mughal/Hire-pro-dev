const Block1 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "images/resource/work-1.png",
      badge:<span
      style={{
        display: "inline-block",
        backgroundColor: "#B000DC1C",
        color: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "400",
        width: "120px", // Adjust the width as needed
        height: "25px",
        color:"#B000DC",
        textAlign:"center" // Adjust the height as needed
      }}
    >Talent Connection
    </span>,
      title: "Unlocking Potential",
      text: `Connecting Top Talent with Thriving Opportunities. Building Lasting
       Relationships: Fostering Strong Connections between Job Seekers and Employers.`,
      
    },
    {
      id: 2,
      icon: "images/resource/work-2.png",
      badge:<span
      style={{
        display: "inline-block",
        backgroundColor: "#DC42001C",
        color: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "400",
        width: "120px", // Adjust the width as needed
        height: "25px",
        color:"#DC1A00",
        textAlign:"center" // Adjust the height as needed
      }}
    >Our Standard
    </span>,
      title: "Upholding Ethical Standards",
      text: `Transparent and Trustworthy Partners in Recruitment. 
      Elevating Professionalism: Delivering Expertise and Competence at Every Step.`,
    },
    {
      id: 3,
      icon: "images/resource/work-3.png",
      badge:<span
      style={{
        display: "inline-block",
        backgroundColor: "#00DC8D1C",
        color: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "400",
        width: "120px", // Adjust the width as needed
        height: "25px",
        color:"#00DC72",
        textAlign:"center" // Adjust the height as needed
      }}
    >We Innovate
    </span>,
      title: "Driving Innovation in Recruitment",
      text: `Leveraging Cutting-Edge Strategies and Technologies. Collaboration for Success: Working Together to Achieve Extraordinary Results.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="work-block col-lg-4 col-md-6 col-sm-12" key={item.id} style={{marginTop:"2%"}}  data-aos="fade-down">
          <div className="inner-box" style={{borderRadius:"15px",}} data-aos="fade-up">
            <h5 style={{textAlign:"left"}}>{item.badge}</h5>
            <h5 style={{textAlign:"left",marginTop:"8%"}}>{item.title}</h5>
            <p style={{textAlign:"left",marginTop:"8%",color:"#525252"}}>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block1;

// <figure className="image">
//               <img src={item.icon} alt="how it works" />
// </figure>