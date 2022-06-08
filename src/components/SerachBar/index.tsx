import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './styles.module.css'

interface SearchBarProps {
  handleCreateTask: (task: string) => void
}

interface Task {
  id: number,
  task: string,
  isDone: boolean
}

export function SearchBar({ handleCreateTask }: SearchBarProps) {
  const [newTask, setNewTask] = useState<string>('')

  function handleNewTask() {
    handleCreateTask(newTask)
    setNewTask('')
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setNewTask(event.target.value)}
      />
      <button
        type="submit"
        onClick={handleNewTask}
        disabled={newTask.length === 0}
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  )
}