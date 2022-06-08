import { useState } from 'react'

import { Header } from './components/Header'
import { SearchBar } from './components/SerachBar'
import { Task } from './components/Task'

import styles from './App.module.css'
import './global.css'

import noTasks from './assets/noTasks.svg'


interface Task {
  id: number,
  task: string,
  isDone: boolean,
}

interface NewTask {
  task: string
}

export function App() {
  const [taskList, setTaskList] = useState<Task[]>([])

  const tasksDone = taskList.filter(task => task.isDone === true).length


  function handleCreateTask(task: string) {
    setTaskList([...taskList, {
      id: taskList.length + 1,
      task: task,
      isDone: false
    }])
  }

  function handleRemoveTask(id: number) {
    const newTaskList = taskList.filter(task => task.id !== id)

    setTaskList(newTaskList)
  }

  function handleDoneTask(id: number) {
    const updateTask = taskList.map(task => task.id === id ? {
      id: task.id,
      task: task.task,
      isDone: !task.isDone
    } : {
      id: task.id,
      task: task.task,
      isDone: task.isDone
    })
    setTaskList(updateTask)
  }

  return (
    <>
      <Header />

      <main className={styles.container}>
        <SearchBar handleCreateTask={handleCreateTask} />

        <div className={styles.content}>
          <div className={styles.tasksProgress}>
            <div className={styles.tasksToDo}>
              <strong>Tarefas criadas</strong>
              <span>{taskList.length}</span>
            </div>

            <div className={styles.tasksToDo}>
              <strong>Concluídas</strong>
              {taskList.length !== 0 ? <span>{tasksDone} de {taskList.length}</span> : <span>0</span>}

            </div>
          </div>

          {taskList.length !== 0
            ? (
              <div className={styles.tasksList}>
                {taskList.map((task) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    isDone={task.isDone}
                    removeTask={handleRemoveTask}
                    doneTask={handleDoneTask}
                  />
                ))}
              </div>

            )
            : (
              <div className={styles.noTasks}>
                <img src={noTasks} alt="" />
              </div>
            )
          }




        </div>
      </main>
    </>
  )
}


