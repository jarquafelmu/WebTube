import logo from "../assets/logo.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  const sideButtons = [
    {
      icon: <Search />,
      label: "Search",
      href: "/search",
      onClick: () => setShowFullWidthSearch(true),
      hiddenOnMedium: true,
    },
    {
      icon: <Mic />,
      label: "Mic",
      href: "/mic",
      hiddenOnMedium: true,
      onClick: () => {},
    },
    {
      icon: <Upload />,
      label: "Upload",
      href: "/upload",
      hiddenOnMedium: false,
      onClick: () => {},
    },
    {
      icon: <Bell />,
      label: "Notifications",
      href: "/notifications",
      hiddenOnMedium: false,
      onClick: () => {},
    },
    {
      icon: <User />,
      label: "Profile",
      href: "/profile",
      hiddenOnMedium: false,
      onClick: () => {},
    },
  ] as const;

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } gap-4 items-center flex-shrink-0`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="" className="h-4 object-scale-down" />
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setShowFullWidthSearch(false)}
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500"
          />
          <Button
            type="button"
            className="rounded-r-full py-2 px-4 border-secondary-border border border-l-0 flex-shrink-0"
          >
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } flex-shrink-0 md:gap-2`}
      >
        {sideButtons.map((button) => (
          <Button
            key={button.label}
            title={button.label}
            size="icon"
            variant="ghost"
            onClick={button.onClick}
            className={`${button.hiddenOnMedium ? "md:hidden" : ""}`}
          >
            {button.icon}
          </Button>
        ))}
      </div>
    </div>
  );
}
