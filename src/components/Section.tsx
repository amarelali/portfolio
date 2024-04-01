import { ReactNode } from "react";

interface IProps {
  name: string;
  title:string;
  children:ReactNode;
}
const Section = ({ name,title ,children}: IProps) => {
  return (
    <section className={`p-5 ${name}`} id={`${name}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex">
              <div className="m-auto">
                <h4 className="d-flex justify-content-center sectionTitle">
                  {title}
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
        {children}
      </div>
    </section>
  );
};
export default Section;
