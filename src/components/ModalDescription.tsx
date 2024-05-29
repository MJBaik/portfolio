import { IProject } from "../constants/projects";
import { ModalDescWrapper } from "../styles/Modal/description";

type Props = {
  project: IProject;
};

function ModalDescription({ project }: Props) {
  return (
    <ModalDescWrapper>
      <div className="titleBar">
        <h1>{project.title}</h1>
        <div className="icons">
          {project.link.map((e, i) => (
            <a href={e[1]} key={i} target="_blank" rel="noopener noreferrer">
              <img src={e[2]} alt={e[0]} />
            </a>
          ))}
        </div>
      </div>
      <div className="set">
        <div className="subtitle">개요(인원)</div>
        <p>{project.desc}</p>
      </div>
      <div className="set">
        <div className="subtitle">기간</div>
        <p>{project.period}</p>
      </div>
      <div className="set">
        <div className="subtitle">사용 기술</div>
        <p>
          {" "}
          {project.skills.map((e, i) => (
            <span key={i}>{e}, </span>
          ))}
        </p>
      </div>
      <div className="set">
        <div className="subtitle">상세</div>
        {project.detail}
      </div>
      <div className="set">
        <div className="subtitle">비고</div>
        <p>{project.etc}</p>
      </div>
    </ModalDescWrapper>
  );
}

export default ModalDescription;
