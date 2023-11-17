import styled from "./header.module.css";
import svg from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.header_content} >
        <img src={svg} />
        
        <h1 className={styled.font_to}>
          to
          <span className={styled.font_do}>
            do
          </span>
        </h1>
      </div>
    </header>
  );
}