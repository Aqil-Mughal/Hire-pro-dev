const CopyrightFooter = () => {
  return (
    <div className="copyright-text" style={{backgroundColor:"#1F9747",height:"5vh"}}>
      <p style={{color:"white"}}>
        {/* © {new Date().getFullYear()} Superio by{" "} */}
        Made by{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{color:"white",fontWeight:"bold"}}
        >
          Aamanto Tecnologies
        </a>
        . All Rights Reserved © 2023.
      </p>
    </div>
  );
};

export default CopyrightFooter;
