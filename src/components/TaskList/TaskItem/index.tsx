import styled from "./TaskItem.module.css"
import svg from "../../../assets/trash.svg"

export interface ItemProps {
  task: string,
}

export function TaskItem({ task }:ItemProps) {
  return (
    <li className={styled.li_item}>
      <div className={styled.li_content}>
        <header>
          <label htmlFor="listItem" className={styled['sr-only']}>
            Checkbox  
          </label>

          <input type="checkbox" id="listItem" className={styled.li_input} />
        </header>

        <div className={styled.li_text_content}>
          <p className={styled.li_text}>
            {task}
          </p>
        </div>

        <footer>
          <button className={styled.li_button_img} >
            <img src={svg} alt="" className={styled.li_img} />
          </button>
        </footer>
      </div>
    </li>
  )
}