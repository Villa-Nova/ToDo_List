import styled from "./TaskList.module.css"
import { TaskItem } from "./TaskItem"
import { ItemProps } from "./TaskItem"

const ARR:ItemProps[] = [
  {
    task: "A",
  },
  {
    task: "B",
  },
  {
    task: "C",
  },
  {
    task: "D",
  },
]

export function TaskList() {
  return (
    <ul className={styled.list} >
      {
        ARR.map(arr => {
          return(
            <TaskItem
              key={arr.task}
              task={arr.task}
            />
          )
        })
      }
    </ul>
  )
}