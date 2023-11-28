import styles from "./App.module.css"
import { Header } from "./components/Header"
import { NoTask } from "./components/NoTask"
import { Search } from "./components/Search"
import { TaskList } from "./components/TaskList"
import { TaskCounter } from "./components/TaskCounter"

export function App() {

  return (
    <>
      <Header />

      <main className={styles.center}>
        <Search />
        <TaskCounter />
        <TaskList />
        {/* <NoTask/> */}
      </main>
    </>
  )
}
