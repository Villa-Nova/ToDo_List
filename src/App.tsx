import { useState } from "react"

import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { TaskList } from "./components/TaskList"
import { TaskCounter } from "./components/TaskCounter"
import { NoTask } from "./components/NoTask"

export function App() {
  const [, setSearchValue] = useState<string | undefined>("");
  const [searchValueArray, setSearchValueArray] = useState<string[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const updateLocalStorage = (tasks: string[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const handleSearchSubmit = (value: string) => {
    setSearchValue(value);
    const newTasks = [...searchValueArray, value];
    setSearchValueArray(newTasks);
    updateLocalStorage(newTasks);
  };

  const handleDelete = (taskToDelete: string) => {
    const newTasks = searchValueArray.filter(taskArray => taskArray !== taskToDelete);
    setSearchValueArray(newTasks);
    updateLocalStorage(newTasks);
  };

  return (
    <>
      <Header />

      <main className={styles.center}>
        <Search 
          handleSubmit={handleSearchSubmit} 
        />
        <TaskCounter 
          searchValueArray={searchValueArray} 
        />
        
        {
          searchValueArray.length === 0 ? (
            <NoTask /> 
          ) : (
            <TaskList 
              searchValueArray={searchValueArray}
              onDelete={handleDelete}
            />
          )
        }
      </main>
    </>
  )
}
