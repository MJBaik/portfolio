import React, { useState } from "react";
import { ImageWrapper } from "../../styles/Modal/images";

type Props = {
  images: string[];
  thumbs: string[];
};

function ModalImage({ images, thumbs }: Props) {
  const [now, setNow] = useState(0);

  const playGIF = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLElement;
    target.setAttribute("src", images[now]);
  };

  const stopGIF = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLElement;
    target.setAttribute("src", thumbs[now]);
  };

  return (
    <ImageWrapper $num={images.length}>
      <div className="imageBox">
        <p className="notice">※마우스를 올리면 gif가 재생됩니다.</p>
        <img
          className="mainImage"
          src={thumbs[now]}
          alt="mainImage"
          onMouseEnter={playGIF}
          onMouseLeave={stopGIF}
        />
      </div>
      <div className="thumbnail">
        {thumbs.map((e, i) => (
          <img
            className="mainImage"
            src={e}
            alt="image"
            key={i}
            onClick={() => setNow(i)}
          />
        ))}
      </div>
    </ImageWrapper>
  );
}

export default ModalImage;
