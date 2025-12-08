import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps
>(({ className, placeholderClassName, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        "web:flex web:w-full border border-outline bg-background px-3 py-4 rounded-xl lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring text-xs web:focus-visible:ring-offset-2",
        props.editable === false && "opacity-50 web:cursor-not-allowed",
        className
      )}
      placeholderClassName={cn("text-text-light text-xs", placeholderClassName)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
