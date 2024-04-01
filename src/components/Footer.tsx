interface IProps {}
const Footer = ({}: IProps) => {
  return (
    <footer>
      <section className="p-5 contacts" id="contacts">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="m-auto">
                  <h4 className=" d-flex justify-content-center sectionTitle">
                    Contacts
                  </h4>
                  <span className="titleUnderline d-flex align-items-center">
                    <hr />
                    <i className="bx bx-caret-down"></i>
                    <hr />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 m-4">
            <div className="container">
              <div className="row">
                <div
                  className="col-12 col-lg-4 col-md-6 mb-3"
                  data-aos="zoom-out-up"
                >
                  <div className="contactus-content m-0 m-md-auto width-fit-content">
                    <div className="contact-title d-flex gap-2 mb-2">
                      <i className="bx align-self-center  bx-envelope"></i>
                      E-mail
                    </div>
                    <span>
                      <a href="mailto:amaromarelali@gmail.com">
                        amaromarelali@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="col-12 col-lg-4 col-md-6 mb-3"
                  data-aos="zoom-out-up"
                >
                  <div className="contactus-content m-0 m-md-auto width-fit-content ">
                    <div className="contact-title d-flex gap-2 mb-2">
                      <i className="bx align-self-center  bxs-phone"></i>
                      Phone Number
                    </div>
                    <span>
                      <a href="tel:+96181215877">+961 81 215 877</a>
                    </span>
                  </div>
                </div>
                <div
                  className="col-12 col-lg-4 col-md-6 mb-3"
                  data-aos="zoom-out-up"
                >
                  <div className="contactus-content m-0 m-md-auto width-fit-content ">
                    <div className="contact-title d-flex gap-2 mb-2">
                      <i className="bx align-self-center  bx-share-alt"></i>
                      Social Media
                    </div>
                    <span className="icons">
                      <a
                        href="https://www.linkedin.com/in/amarelali/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin-square"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
