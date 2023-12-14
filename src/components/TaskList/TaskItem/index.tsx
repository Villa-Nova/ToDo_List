import { useEffect, useState } from "react"

import styled from "./TaskItem.module.css"
import svg from "../../../assets/trash.svg"

export interface ItemProps {
  id: string;
  task: string;
  onDelete: (taskToDelete: string) => void;
  onChangeCheckBox: (taskId: string) => void;
}

export function TaskItem({ id, task, onDelete, onChangeCheckBox }: ItemProps) { 
  const localStorageKey = "checkboxesState";
  const savedCheckboxStates = localStorage.getItem(localStorageKey);
  const initialCheckboxStates = savedCheckboxStates ? JSON.parse(savedCheckboxStates) : {};
  const [isCheck, setIsCheck] = useState<boolean>(initialCheckboxStates[id] || false);

  const handleCheckboxChange = () => {
    setIsCheck(!isCheck);
    onChangeCheckBox(id);
  };

  useEffect(() => {
    const checkboxStates = savedCheckboxStates ? JSON.parse(savedCheckboxStates) : {};

    checkboxStates[id] = isCheck;

    localStorage.setItem(localStorageKey, JSON.stringify(checkboxStates));
  }, [id, isCheck, onChangeCheckBox, savedCheckboxStates]);

  return (
    <li 
      id={id} 
      className={styled.li_item} 
    >
      <div className={styled.li_content}>
        <header>
          <label htmlFor={id} className={styled['sr-only']}>
            Checkbox  
          </label>

          <input 
            id={id} 
            type="checkbox" 
            className={styled.li_input}
            onChange={handleCheckboxChange}
            checked={isCheck}
          />
        </header>

        <div className={styled.li_text_content}>
          <p className={ isCheck ? styled.li_text_checked : styled.li_text}>
            {task}
          </p>
        </div>

        <footer>
          <button 
            className={styled.li_button_img} 
            onClick={() => onDelete(task)}
          >
            <img 
              src={svg} 
              alt="Icon of a trash can" 
              className={styled.li_img} 
            />
          </button>
        </footer>
      </div>
    </li>
  )
}