import { v4 as uuidv4 } from "uuid"

export interface ITask {
  id: string
  content: string
  isChecked: boolean
}

export class Task implements ITask {
  id: string = uuidv4()
  content: string
  isChecked: boolean = false

  constructor({ content }: Pick<ITask, "content">) {
    this.content = content
  }
}
