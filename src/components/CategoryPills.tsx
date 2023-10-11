import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProps) {
  const [translate, setTranslate] = useState(0); // [0, 200, 400, 600, 800, 1000
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef || !containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0].target;
      if (!container) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [categories, translate]);

  return (
    <div className="overflow-x-hidden relative" ref={containerRef}>
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "dark" : "default"}
            onClick={() => onSelect(category)}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setTranslate((prev) => {
                const newTranslate = prev - TRANSLATE_AMOUNT;
                // clamp the minimum translate value to 0
                if (newTranslate < 0) return 0;
                return newTranslate;
              });
              // setIsLeftVisible(translate + TRANSLATE_AMOUNT < 0);
              // // setIsRightVisible(translate + TRANSLATE_AMOUNT > 0);
            }}
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setTranslate((prev) => {
                // if the containerRef is null, return the previous value
                if (!containerRef || !containerRef.current) return prev;

                const newTranslate = prev + TRANSLATE_AMOUNT;
                // clamp the minimum translate value to 0

                // get the full width of the container
                const edge = containerRef.current.scrollWidth;
                // get only the visible width of the container (the amount shown on the screen)
                const width = containerRef.current.clientWidth;
                if (newTranslate + width! >= edge!) return edge - width;

                return newTranslate;
              });
            }}
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
