import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './styles.module.css'

interface TaskProps {
  task: string
  isDone: boolean
  id: number
  removeTask: (id: number) => void
  doneTask: (id: number) => void
}

export function Task({ task, isDone, id, removeTask, doneTask }: TaskProps) {

  return (
    <div className={styles.container}>
      <button
        onClick={() => doneTask(id)}
      >
        {isDone
          ? <CheckCircle color='#4EA8DE' size={16} />
          : <Circle color='#4EA8DE' size={16} />
        }

      </button>

      <strong
        className={isDone ? styles.completeTask : ''}
      >
        {task}
      </strong>

      <button
        onClick={() => removeTask(id)}
      >
        <Trash size={16} />
      </button>
    </div>
  )
}