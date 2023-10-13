import { ArrowLeft, Mic, Search } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
import { sideButtons } from "../data/home";
import { PageHeaderFirstSection } from "../components/PageHeaderFirstSection";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
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
        {sideButtons.map(({ label, Icon, hiddenOnMedium }) => (
          <Button
            key={label}
            title={label}
            size="icon"
            variant="ghost"
            onClick={
              label === "Search" ? () => setShowFullWidthSearch(true) : () => {}
            }
            className={`${hiddenOnMedium ? "md:hidden" : ""}`}
          >
            <Icon />
          </Button>
        ))}
      </div>
    </div>
  );
}
