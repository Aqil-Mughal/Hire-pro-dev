// import { FaMapMarkerAlt } from 'react-icons/fa';
import QRCode from 'qrcode.react';
import Phone from "../../../public/images/icons/phone.png"
import { TelephoneFill } from 'react-bootstrap-icons';
import { GeoAltFill, EnvelopeFill } from 'react-bootstrap-icons';
import { auto } from '@popperjs/core';

<TelephoneFill />

const Address = () => {

  const qrValue = 'https://www.aamanto.com/';
  return (
    <div style={{ width: "100%", display: "flex", }} className='qr_box' data-aos="fade-right">
      <div style={{ width: "60%",}}>
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
      <div style={{ width: "20%", display: "flex", justifyContent: "center", margin: "auto", }} data-aos="fade-left" >
        <QRCode style={{ width: "100%", height: "1", }} value={qrValue} />
      </div>
    </div>
  );
};

export default Address;
