const ContactForm = () => {
  return (
    <form  data-aos="fade-up">
      <div className="column">
        <div className="form-group col-lg-12 col-md-12 col-sm-12" style={{width:"90%"}}>
          <div className="response"></div>
        </div>
        {/* End .col */}

        <div className="col-lg-10 col-md-12 col-sm-12 form-group">
          <label style={{color:"#959595"}}>Name *</label>
          <input
            type="text"
            name="username"
            className="username"
            placeholder="Name"
            required
            style={{backgroundColor:"white",border:"1px solid #959595"}}
          />
        </div>
        {/* End .col */}

        <div className="col-lg-10 col-md-12 col-sm-12 form-group">
          <label style={{color:"#959595"}}>Email +</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Email"
            required
            style={{backgroundColor:"white",border:"1px solid #959595"}}
          />
        </div>
        {/* End .col */}

        <div className="col-lg-10 col-md-12 col-sm-12 form-group">
          <label style={{color:"#959595"}}>Phone no *</label>
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder="Phone no"
            required
            style={{backgroundColor:"white",border:"1px solid #959595"}}
          />
        </div>
        {/* End .col */}

        <div className="col-lg-10 col-md-12 col-sm-12 form-group">
          <label style={{color:"#959595"}}>Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            required=""
            style={{backgroundColor:"white",border:"1px solid #959595"}}
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-10 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            id="submit"
            name="submit-form"
            style={{backgroundColor:"#1F9747"}}
          >
            Send
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ContactForm;
