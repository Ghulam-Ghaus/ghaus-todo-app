export interface NavItemType {
  name: string;
  link: string;
  title: string;
  photo: string;
}

export interface TaskType {
  userId?: string;
  id?: string;
  title?: string;
  completed?: boolean;
}
