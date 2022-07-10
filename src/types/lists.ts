export interface Type {
  id: string;
  title: string;
}

export interface ListType {
  id: string;
  title: string;
  children?: Array<Type>;
}

export interface ChildType {
  child: ListType;
}

export interface ListsType {
  lists: Array<ListType>;
}
