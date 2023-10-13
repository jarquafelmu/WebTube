import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};
// Always initialize context object with null
const SidebarContext = createContext<SidebarContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function isScreenSmall() {
    // 1024 is the large screen breakpoint in tailwind.config.js
    return window.innerWidth < 1024;
  }

  function toggle() {
    if (isScreenSmall()) return setIsSmallOpen((prev) => !prev);
    setIsLargeOpen((prev) => !prev);
  }

  function close() {
    if (isScreenSmall()) return setIsSmallOpen(false);
    setIsLargeOpen(false);
  }

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) {
        setIsSmallOpen(false);
      }
    };

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
