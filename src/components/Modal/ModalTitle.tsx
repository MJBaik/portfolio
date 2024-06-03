import React from "react";
import { TitleWrapper } from "../../styles/Modal/title";

type Props = {
  title: string;
  link: string[][];
};

function ModalTitle({ title, link }: Props) {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <div className="icons">
        {link.map((e, i) => (
          <a href={e[1]} key={i} target="_blank" rel="noopener noreferrer">
            <img src={e[2]} alt={e[0]} />
          </a>
        ))}
      </div>
    </TitleWrapper>
  );
}

export default React.memo(ModalTitle);
