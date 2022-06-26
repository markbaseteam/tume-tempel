import Link from "next/link";
import { useState } from "react";
import { classNames } from "../utils/misc";

const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();

interface InternalHoverLinkProps {
  href: string;
  path: string;
  text: string;
  linkedPostContent: string;
}

export function InternalHoverLink(props: InternalHoverLinkProps) {
  const [showInlineLinkPopover, setShowInlineLinkPopover] =
    useState<boolean>(false);

  return (
    <span key={props.href}>
      <Link href={props.path}>
        <a
          onMouseOver={() => setShowInlineLinkPopover(true)}
          onMouseOut={() => setShowInlineLinkPopover(false)}
          className="px-0.5 mx-0.5 mr-1 rounded-sm bg-indigo-200 hover:bg-indigo-300 text-gray-800 hover:text-gray-600 opacity-70 no-underline"
        >
          {props.text}
        </a>
      </Link>
      <span
        className={classNames(
          "whitespace-normal prose sm:prose-md dark:prose-invert dark:text-gray-300 linkPopup scrollbar-thin dark:scrollbar-thumb-black dark:scrollbar-track-dark scrollbar-thumb-gray-400 scrollbar-track-zinc-100 scrollbar-thumb-rounded-full",
          showInlineLinkPopover && props.linkedPostContent ? "" : "hidden"
        )}
        dangerouslySetInnerHTML={{
          __html: md.render(props.linkedPostContent),
        }}
      ></span>
    </span>
  );
}
