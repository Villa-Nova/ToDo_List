import styled from "./TaskList.module.css"
import { TaskItem } from "./TaskItem"

export function TaskList() {
  return (
    <ul className={styled.list} >
      <TaskItem/>
    </ul>
  )
}