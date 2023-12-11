import styled from "./TaskList.module.css"

import { TaskItem } from "./TaskItem"
import { uuidv4 } from "../../utils/uuidGenerator";

export interface TaskListProps {
  searchValueArray: string[];
  onDelete: (taskToDelete: string) => void;
}

export function TaskList({ searchValueArray, onDelete }: TaskListProps) {
  const taskItems = searchValueArray.map(task => {
    return(
      <TaskItem
        key={uuidv4()}
        task={task}
        onDelete={onDelete}
      />
    )
  });

  return (
    <ul className={styled.list} >{taskItems}</ul>
  )
}