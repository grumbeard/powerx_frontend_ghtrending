/* Bookmarks Side Bar */
import cn from "classnames";
import { forwardRef } from "react";

export const SideBar = forwardRef(function SideBar(
  { children, ...props },
  ref
) {
  const className = cn(
    'mx-auto py-10 px-2 hidden',
    props.className
  );
  
  return (
    <section
      {...props}
      className={className}
      ref={ref}
    >
      {children}
    </section>
  );
});