import { Fragment } from "react";
import { ListsType, ListType } from "types/lists";
import TreeList from "./TreeList";

export default function Tree({ lists }: ListsType) {
  return (
    <ul
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      {lists.map((list: ListType) => (
        <Fragment key={list.id}>
          <TreeList child={list} />
        </Fragment>
      ))}
    </ul>
  );
}
