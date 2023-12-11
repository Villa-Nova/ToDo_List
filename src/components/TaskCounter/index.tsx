import styled from "./TaskCounter.module.css";

interface TaskCounterProps {
  searchValueArray: string[]
}

export function TaskCounter({ searchValueArray }: TaskCounterProps) {

  return (
    <div className={styled.flex}>
      <p className={styled.font_blue}>
        Tasks created
        <span className={styled.circle}>
          {searchValueArray.length}
        </span>
      </p>

      <p className={styled.font_purple}>
        Completed tasks
        <span className={styled.circle}>0</span>
      </p>
    </div>
  )
}