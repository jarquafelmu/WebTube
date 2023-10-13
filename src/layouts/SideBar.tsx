import { PageHeaderFirstSection } from "../components/PageHeaderFirstSection";
import { LargeSidebarSection } from "../components/SideBar/LargeSidebarSection";
import { SmallSideBarItem } from "../components/SideBar/SmallSideBarItem";
import { useSidebarContext } from "../context/SidebarContext";
import { LARGE_SIDE_BAR_SECTIONS, SMALL_SIDE_BAR_ITEMS } from "../data/sidebar";

export default function SideBar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  return (
    <>
      {/* Small Sidebar */}
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        {SMALL_SIDE_BAR_ITEMS.map(({ Icon, title, url }) => (
          <SmallSideBarItem key={title} Icon={Icon} title={title} url={url} />
        ))}
      </aside>

      {/* Background overlay */}
      {isSmallOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
          onClick={close}
        />
      )}

      {/* Large Sidebar */}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky-0 top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        {LARGE_SIDE_BAR_SECTIONS.map(
          ({ title, items, visibleItemCount, id }, index) => (
            <LargeSidebarSection
              key={id}
              title={title}
              items={items}
              visibleItemCount={visibleItemCount}
              showDivider={index !== LARGE_SIDE_BAR_SECTIONS.length - 1}
            />
          )
        )}
      </aside>
    </>
  );
}
