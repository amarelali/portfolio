interface IProps {
    title:string;
}
const Skill = ({title}: IProps) => {
  return (
    <div className="col-6 col-md-3 col-lg-2 mb-3" data-aos="zoom-in-right">
      <div className="skillcont d-flex m-sm-auto">
        <span className="m-auto" style={{ color: "white" }}>
          {title}
        </span>
      </div>
    </div>
  );
};
export default Skill;
