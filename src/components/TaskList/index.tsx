import styled from "./TaskList.module.css"
import { TaskItem } from "./TaskItem"
import { ItemProps } from "./TaskItem"

const ARR:ItemProps[] = [
  {
    task: "Fazer café",
  },
  {
    task: "treinar",
  },
  {
    task: "Trampar",
  },
  {
    task: "Estudar",
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