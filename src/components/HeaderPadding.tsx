import { useEffect, useMemo, useRef } from "react";
import { HeaderPaddingSection } from "../styles/Header/padding";

function HeaderPadding() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const scrolling = useRef(false);

  const message = useMemo(() => {
    const ret =
      "안녕하세요, 배움과 적응이 빠른 프론트엔드 개발자입니다. 담기는 그릇에 따라 그 모양이 천차만별로 변화하는 물처럼, 급변하는 시대의 니즈에 맞추어 진화하는 개발자가 되기 위해 공부하고 있습니다. 감사합니다.".split(
        ""
      );
    return ret;
  }, []);

  const handleScroll = () => {
    if (scrolling.current) return;
    if (indexRef.current >= message.length) {
      window.removeEventListener("scroll", handleScroll);
      return;
    }
    const scroll = scrollRef.current;
    const { innerHeight } = window;
    if (!scroll) return;
    const top = scroll.getBoundingClientRect().top;
    if (top < innerHeight - 200) {
      for (let i = indexRef.current; i < indexRef.current + 2; i++) {
        if (i >= message.length) break;
        scroll.children[i].classList.add("color");
      }
      indexRef.current += 2;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderPaddingSection>
      <div className="inner" ref={scrollRef}>
        {message.map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bgLine"
      >
        <path
          stroke="rgb(175, 204, 208)"
          strokeWidth={"5px"}
          fill="none"
          d="M0,32L48,58.7C96,85,192,139,288,149.3C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,0z"
        ></path>
        <path
          stroke="rgb(86, 129, 137)"
          strokeWidth={"5px"}
          fill="none"
          d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,224C960,171,1056,85,1152,48C1248,11,1344,21,1392,26.7L1440,32L1440,0z"
        ></path>
      </svg>
    </HeaderPaddingSection>
  );
}

export default HeaderPadding;
