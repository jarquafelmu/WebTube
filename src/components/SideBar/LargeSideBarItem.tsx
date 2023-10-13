import { ElementType } from "react";
import { buttonStyles } from "../../styles/componentStyles/buttonStyles";
import { twMerge } from "tailwind-merge";

type LargeSideBarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

export function LargeSideBarItem({
  IconOrImgUrl,
  title,
  url,
  isActive = false,
}: LargeSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "bg-neutral-100 hover:bg-secondary font-bold" : undefined
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img
          src={IconOrImgUrl}
          alt="Subscription Profile Image"
          className="rounded-full w-6 h-6"
        />
      ) : (
        <IconOrImgUrl className="w-6 h-6" />
      )}

      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
