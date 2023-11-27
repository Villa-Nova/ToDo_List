import styled from "./NoTask.module.css"
import svg from "../../assets/list.svg"

export function NoTask() {
  return (
    <div className={styled.align_itens}>
      <>
        <img src={svg} alt="" className={styled.svg}/>

        <div className={styled.font_style}>
          <p className={styled.font_style_primary}>You don't have tasks registered yet</p>
          <p className={styled.font_style_secundary}>Create tasks and organize your to-do items</p>
        </div>
      </>
    </div>
  )
}