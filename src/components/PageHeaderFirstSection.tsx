import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import Button from "./Button";
import { useSidebarContext } from "../context/SidebarContext";

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export const PageHeaderFirstSection = ({
  hidden = false,
}: PageHeaderFirstSectionProps) => {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`${
        hidden ? "hidden" : "flex"
      } gap-4 items-center flex-shrink-0`}
    >
      <Button variant="ghost" size="icon" onClick={() => toggle()}>
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} alt="Page Logo" className="h-4 object-scale-down" />
      </a>
    </div>
  );
};
