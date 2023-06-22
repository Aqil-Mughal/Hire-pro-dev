// import { FaMapMarkerAlt } from 'react-icons/fa';
import QRCode from 'qrcode.react';
import Phone from "../../../public/images/icons/phone.png"
import { TelephoneFill } from 'react-bootstrap-icons';
import { GeoAltFill, EnvelopeFill } from 'react-bootstrap-icons';

// Inside your JSX code



import { auto } from '@popperjs/core';

// Inside your JSX code
<TelephoneFill />

const Address = () => {

  const qrValue = 'https://www.aamanto.com/';
  return (
    <div style={{ width: "500px", display: "flex", }}>
      <div style={{ width: "40%",}}>
        <div className="address-icon">
        </div>
        <div className="address-info" style={{ display: "flex" }}>
          <div style={{ fontSize: "20px" }}>
            <TelephoneFill />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h3 className="address-title" style={{ fontWeight: "400" }}>Phone: <br /><span style={{ color: "#1967D2", fontWeight: "300" }}>03 5432 1234</span></h3>
          </div>
        </div>
        <div className="address-info" style={{ display: "flex" }}>
          <div style={{ fontSize: "20px" }}>
          <GeoAltFill />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h3 className="address-title" style={{ fontWeight: "400" }}>ADDRESS <br /><span style={{ color: "#1967D2",fontWeight: "300" }}>lake city lahore</span></h3>
          </div>
        </div>

        <div className="address-info" style={{ display: "flex" }}>
          <div style={{ fontSize: "20px" }}>
          <EnvelopeFill />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h3 className="address-title" style={{fontWeight:"400"}}>EMAIL
              <br /><span style={{ color: "#1967D2",fontWeight: "300"}}>info@aamanto.com</span></h3>
          </div>
        </div>

      </div>
      <div style={{ width: "20%", display: "flex", justifyContent: "center", margin: "auto", }}>
        <QRCode style={{ width: "120px", height: "120px", }} value={qrValue} />
      </div>
    </div>
  );
};

export default Address;
