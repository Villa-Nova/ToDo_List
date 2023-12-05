import styled from "./search.module.css"
import svg from "../../assets/buttonHeaderSvg.svg"
import { ChangeEvent, FormEvent, useState } from "react"

interface SearchProps {
  handleSubmit: (value: string) => void;
}

export function Search({ handleSubmit }: SearchProps) {
  const [search, setSearch] = useState<string>("");

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    handleSubmit(search);
  }

  return (
    <form 
      className={styled.container}
      onSubmit={handleFormSubmit}
    >
      <div className={styled.inputWrapper}>
        <label htmlFor="srcInput" className={styled['sr-only']}>
          Add a new task:
        </label>
        <input 
          type="text" 
          id="srcInput" 
          placeholder="Add a new task" 
          className={styled.input}
          onChange={handleSearch}
        />
      </div>

      <button 
        type="submit" 
        className={styled.button}
      >
        <span>Create</span>
        <img src={svg} alt="Ícone de adicionar" />
      </button>
    </form>
  )
}