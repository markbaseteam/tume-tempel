import Link from "next/link";
import { useState } from "react";
import { classNames } from "../utils/misc";

interface TableOfContentsItemProps {
  id: string;
  level: number;
  name: string;
  selected?: boolean;
}

export function TableOfContentsItem(props: TableOfContentsItemProps) {
  const [showLinkIcon, setShowLinkIcon] = useState<boolean>(false);

  return (
    <Link href={"#" + props.id}>
      <a
        href={"#" + props.id}
        style={{
          color: "inherit",
          textDecoration: "inherit",
          fontWeight: "inherit",
        }}
      >
        <div
          style={{ marginLeft: `${props.level - 1}rem` }}
          className={classNames(
            "text-left cursor-pointer hover:font-bold py-1 flex flex-row items-center truncate",
            props.selected ? "font-bold" : "font-base"
          )}
          onMouseOver={() => setShowLinkIcon(true)}
          onMouseOut={() => setShowLinkIcon(false)}
        >
          <span>
            {props.name}
            <span>
              {showLinkIcon && (
                <span className="ml-1.5 opacity-50 hover:opacity-100">#</span>
              )}
            </span>
          </span>
        </div>
      </a>
    </Link>
  );
}
