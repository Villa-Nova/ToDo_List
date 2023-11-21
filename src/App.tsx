import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Search } from "./components/Search"

export function App() {

  return (
    <>
      <Header />

      <form className={styles.center}>
        <Search />
      </form>
    </>
  )
}
