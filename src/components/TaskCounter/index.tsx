import styled from "./TaskCounter.module.css";

export function TaskCounter() {
  return (
    <div className={styled.flex}>
      <p className={styled.font_blue}>
        Tasks created
        <span className={styled.circle}>0</span>
      </p>

      <p className={styled.font_purple}>
        Completed tasks
        <span className={styled.circle}>0</span>
      </p>
    </div>
  )
}