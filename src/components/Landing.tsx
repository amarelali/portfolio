import NavBar from "./NavBar";
import resume from "../assets/AMAR_EL ALI_Resume.pdf";
import background from "../assets/bg.jpeg";

interface IProps {}
const Landing = ({}: IProps) => {
  return (
    <>
      <section id="loadingPage">
        <i className="fas fa-ellipsis-h fa-beat-fade"></i>
      </section>
      <div className="full-window image-container position-relative">
        <div className="w-100 position-absolute h-100">
          <NavBar />
        </div>
        <img src={background} className="bg" alt="bg" />
        <div className="mycontent container d-flex flex-column h-75 align-items-center position-absolute">
          <h1 className="m-auto text-white description">
            Hi there! my name is Amar El Ali and
            <br />I am a <span id="typing-effect">Software Developer</span>
          </h1>
          <div className="downloadBtn">
            <a href={resume}>Download the cv</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
