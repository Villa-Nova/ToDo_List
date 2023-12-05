import { useState } from "react"

import styles from "./App.module.css"

import { Header } from "./components/Header"
/* import { NoTask } from "./components/NoTask" */
import { Search } from "./components/Search"
import { TaskList } from "./components/TaskList"
import { TaskCounter } from "./components/TaskCounter"

export function App() {
  const [searchValue, setSearchValue] = useState<string | undefined>("");

  function handleSearchSubmit(value: string) {
    setSearchValue(value);
    console.log(searchValue);
  }

  return (
    <>
      <Header />

      <main className={styles.center}>
        <Search handleSubmit={handleSearchSubmit} />
        <TaskCounter />
        <TaskList />
      </main>
    </>
  )
}
