export enum  Status {
  ToDo = 'task',
  Done = 'done',
  InProgress = 'inProgress'
}

export interface Task{
  name:string;
  detail:string;
  id:number;
  status: Status;
}

