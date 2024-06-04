import { useEffect, useMemo, useRef } from "react";
import { HeaderPaddingSection } from "../../styles/Header/padding";

function HeaderPadding() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const scrolling = useRef(false);

  const message = useMemo(() => {
    const ret =
      "안녕하세요, 흐르는 프론트엔드 개발자 백민정입니다. 담기는 그릇에 따라 그 모양이 천차만별로 변화하는 물처럼, 급변하는 시대의 니즈에 맞추어 진화하는 개발자가 되기 위해 공부하고 있습니다. 감사합니다.".split(
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
      for (let i = indexRef.current; i < indexRef.current + 4; i++) {
        if (i >= message.length) break;
        scroll.children[i].classList.add("color");
      }
      indexRef.current += 4;
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
      <div className="bgLine" />
    </HeaderPaddingSection>
  );
}

export default HeaderPadding;
