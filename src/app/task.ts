export enum  Status {
  ToDo = 'task',
  Done = 'done',
  InProgress = 'inProgress'
}


export interface Task{
  name:string;
  isDone:boolean;
  id:number;
  status?: Status;
}

