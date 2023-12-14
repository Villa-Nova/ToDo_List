import styled from "./TaskList.module.css"

import { TaskItem } from "./TaskItem"
import { uuidv4 } from "../../utils/uuidGenerator"
// import { useState } from "react";

export interface TaskListProps {
  searchValueArray: string[];
  onDelete: (taskToDelete: string) => void;
  onChangeCheckBox: (taskId: string) => void;
}

export function TaskList({ searchValueArray, onDelete, onChangeCheckBox }: TaskListProps) {
    const taskItems = searchValueArray.map(task => {
    return(
      <TaskItem
        id={task}
        key={uuidv4()}
        task={task}
        onDelete={onDelete}
        onChangeCheckBox={onChangeCheckBox}
      />
    )
  });

  return (
    <ul className={styled.list} >{taskItems}</ul>
  )
}