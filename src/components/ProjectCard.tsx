interface IProps {
    img:string;
    alt:string;
    link:string;
    cardTitle:string;
    technologies:string;
}
const ProjectCard = ({img,alt,link,cardTitle,technologies}: IProps) => {
  return (
    <div
      className="col-12 col-lg-4 mb-5"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="maincontainer">
        <div className="thecard">
          <div className="thefront">
            <img className="card-img-top" src={img} alt={alt} />
          </div>
          <div className="theback d-flex flex-column justify-content-around">
            <a href={link} target="_blank">
              <div>
                <h5 className="card-title">{cardTitle}</h5>
                <i className="bx bx-link-external"></i>
              </div>
            </a>
            <span>{technologies}</span>
            {/* <span className="notes">In Progress...</span> */}
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default ProjectCard;
