export enum  Status {
  ToDo = 'task',
  Done = 'done',
  InProgress = 'inProgress'
}

export interface Task{
  name:string;
  id:number;
  status: Status;
}

