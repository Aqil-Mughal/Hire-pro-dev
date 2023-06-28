import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { GET_LOCATION_DROPDOWN } from "../../../data/graphQL/Queries";
import { useLazyQuery } from "@apollo/client";

const SearchForm4 = () => {

  //API
  const options = []
  const router = useRouter()

  const [titleState, setTitleState] = useState("")
  const [locationState, setLocationState] = useState("")
  const [rangeState, setRangeState] = useState("")
  const [onChangeAddressState, setOnChangeAddressState] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/job-list',
      query: { title: titleState, location: !locationState.value ? "" : locationState.value, range: rangeState },
    }
    )

  };

  console.log(titleState, locationState, rangeState, onChangeAddressState)


  //Location
  const [getLocationDropdownFunc, getLocationDropdown] = useLazyQuery(GET_LOCATION_DROPDOWN, {
    variables: { address: onChangeAddressState ? onChangeAddressState : "Canada", }
  })

  useEffect(() => {
    getLocationDropdownFunc();
  }, []);

  const updateDropDownFunc = () => {
    return getLocationDropdown?.data?.addressList.map((row, key) =>
      options.push({ value: row, label: row })
    );
  };
  updateDropDownFunc();

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-4">
          <label>What job are you looking for?</label>

          <input
            type="text"
            name="field_name"
            style={{ paddingLeft: "0" }}
            placeholder="Job title or keywords"
            value={titleState}
            onChange={(e) => setTitleState(e.target.value)}
          />
        </div>

        {/* <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <label>Where?</label>
          <input type="text" style={{ paddingLeft: "0" }} name="field_name" placeholder="Location or Postal Code" />
        </div> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <label>Where?</label>
          <ReactSelect
            placeholder="Location"
            options={options}
            onInputChange={(value) =>
              setOnChangeAddressState(value)
            }
            onChange={(value) => setLocationState(value)}
            styles={{
              indicatorSeparator: (baseStyles) => ({
                ...baseStyles,
                display: "none",

              }),
              input: (baseStyles, state) => ({
                ...baseStyles,
                color: "#696969",
                margin: 0,
                padding: 0
              }),
              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: "#696969"
              }),
              valueContainer: (baseStyles, state) => ({
                ...baseStyles,
                padding: 0
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                marginLeft: 35,
                padding: 0,
                color: "#696969",
                background: "transparent",
                border: "none",
                boxShadow: "none",
              }),
              placeholder: (baseStyles) => {
                return {
                  ...baseStyles,
                  color: "#696969",
                };
              },
            }}
          />
        </div>

        <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
          <label>Distance</label>
          <input
            type="text"
            style={{ paddingLeft: "0" }}
            name="field_name"
            placeholder="Range(km)"
            value={rangeState}
            onChange={(e) => setRangeState(e.target.value)}
          />

        </div>

        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
          <button
            type="submit"
            className="theme-btn btn-style-one"
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