import Router from "next/router";

const SearchForm4 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-4">
          <label>What job are you looking for?</label>
          
          <input
            type="text"
            name="field_name"
            style={{paddingLeft:"0"}}
            placeholder="Job title, keywords, or company"
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <label>Where?</label>
          <input type="text"style={{paddingLeft:"0"}} name="field_name" placeholder="Location or Postal Code" />
          
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
          <label>Distance</label>
          <input type="text"style={{paddingLeft:"0"}} name="field_name" placeholder="Range(km)" />
          
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
          <button
            type="submit"
            className="theme-btn btn-style-two"
            onClick={() => Router.push("/job-list-v6")}
          >
            Find Jobs
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm4;
// <span className="icon flaticon-briefcase"></span>
// <select className="chosen-single form-select">
          //   <option defaultValue="">All Categories</option>
          //   <option defaultValue="44">Accounting / Finance</option>
          //   <option defaultValue="106">Automotive Jobs</option>
          //   <option defaultValue="46">Customer</option>
          //   <option defaultValue="48">Design</option>
          //   <option defaultValue="47">Development</option>
          //   <option defaultValue="45">Health and Care</option>
          //   <option defaultValue="105">Marketing</option>
          //   <option value="107">Project Management</option>
          // </select>
// <span className="icon flaticon-map-locator"></span>
// <span className="icon flaticon-search-1"></span>