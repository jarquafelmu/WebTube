import { ElementType } from "react";
import { buttonStyles } from "../../styles/componentStyles/buttonStyles";
import { twMerge } from "tailwind-merge";

type SmallSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};
export function SmallSideBarItem({ Icon, title, url }: SmallSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col gap-1 items-center rounded-lg"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
