const BreadCrumb = ({ title = "", desc = "", image = "" }) => {
  return (
    <div className="upper-title-box">
      <div className="row">
        <div className="col-6 m-auto">
          <h3>{title}</h3>
          <div className="text">{desc}</div>
        </div>
        <div className="col-6 text-end">
          <img src={image} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
