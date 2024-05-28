import { useState } from "react";
import { ImageWrapper } from "../styles/Modal/images";

type Props = {
  images: string[];
};

function ModalImage({ images }: Props) {
  const [now, setNow] = useState(0);

  return (
    <ImageWrapper $num={images.length}>
      <img className="mainImage" src={images[now]} alt="mainImage" />
      <div className="thumbnail">
        {images.map((e, i) => (
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
