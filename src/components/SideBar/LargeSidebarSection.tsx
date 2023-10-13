import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Button from "../Button";
import { type LargeSideBarItems } from "../../utils/types";
import { LargeSideBarItem } from "./LargeSideBarItem";

type LargeSidebarSectionProps = {
  title?: string;
  visibleItemCount?: number;
  items: LargeSideBarItems[];
  showDivider?: boolean;
};

export function LargeSidebarSection({
  items,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
  showDivider = false,
}: LargeSidebarSectionProps) {
  // flatten so that this is only a one dimensional array
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? items : items.slice(0, visibleItemCount);
  const showExpandButton = items.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleItems.map(({ IconOrImgUrl, title, url, isActive, id }) => (
        <LargeSideBarItem
          key={id || title}
          IconOrImgUrl={IconOrImgUrl}
          title={title}
          url={url}
          isActive={isActive}
        />
      ))}
      {showExpandButton && (
        <Button
          variant="ghost"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show less" : "Show more"}</div>
        </Button>
      )}
      {showDivider && <hr />}
    </div>
  );
}
