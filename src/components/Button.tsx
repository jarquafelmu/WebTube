import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../styles/componentStyles/buttonStyles";

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({
  variant,
  size,
  children,
  className,
  // default to button type so that it doesn't submit forms and refresh the page
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      // Using twMerge from tailwind-merge to merge the classes from the buttonStyles function with the className prop
      className={twMerge(buttonStyles({ variant, size, className }), className)}
    >
      {children}
    </button>
  );
}
