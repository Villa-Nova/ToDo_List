import styled from "./search.module.css"
import svg from "../../assets/buttonHeaderSvg.svg"

export function Search() {
  return (
    <div className={styled.container}>
      <div className={styled.inputWrapper}>
        <label htmlFor="srcInput" className={styled['sr-only']}>
          Add a new task:
        </label>
        <input type="text" id="srcInput" placeholder="Add a new task" className={styled.input} />
      </div>

      <button type="submit" className={styled.button}>
        <span>Create</span>
        <img src={svg} alt="Ícone de adicionar" />
      </button>
    </div>
  )
}