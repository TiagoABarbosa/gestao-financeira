import { useEffect, useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import * as C from "./styles";

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <C.Topo>
      <C.Button
        type="button"
        onClick={scrollToTop}
        className={classNames(isVisible ? "opacity:100" : "opacity:0")}
      >
        <AiOutlineUp size={24} title="Voltar ao Topo" />
      </C.Button>
    </C.Topo>
  );
};
