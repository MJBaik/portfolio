import React, { ReactElement } from "react";

type Props = {
  subtitle: string;
  desc: string | ReactElement | ReactElement[];
};

function ModalDescSet({ subtitle, desc }: Props) {
  return (
    <div className="set">
      <div className="subtitle">{subtitle}</div>
      <p>{desc}</p>
    </div>
  );
}

export default React.memo(ModalDescSet);
