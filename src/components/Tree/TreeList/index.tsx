import { useState } from "react";
import { ChildType } from "types/lists";
import Tree from "..";

export default function TreeList({ child }: ChildType) {
  const hasChild = child.children ?? false;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisible = () => setIsVisible((prev) => !prev);

  return (
    <li style={{ listStyle: "none", margin: "0.75rem 0" }}>
      <div
        onClick={handleVisible}
        style={{ cursor: hasChild ? "pointer" : "default" }}
      >
        {child.children && "-"}
        <span
          style={{
            backgroundColor: "yellowgreen",
            borderRadius: 6,
            padding: "0.25rem 0.5rem",
            color: "white",
            marginLeft: 8,
          }}
        >
          {child.title}
        </span>
      </div>

      {hasChild && isVisible && (
        <ul style={{ paddingLeft: 20 }}>
          <Tree lists={child.children!} />
        </ul>
      )}

      {/* default collapse */}
      {/* {hasChild && (
        <ul style={{ paddingLeft: 20 }}>
          <Tree lists={child.children!} />
        </ul>
      )} */}
    </li>
  );
}
