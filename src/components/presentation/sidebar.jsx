/* Bookmarks Side Bar */
import cn from "classnames";
import { forwardRef } from "react";

export const SideBar = forwardRef(function SideBar(
  { children, isInitiallyExpanded, ...props },
  ref
) {
  const visibility = isInitiallyExpanded
    ? ''
    : 'hidden';
  
  const className = cn(
    'mx-auto py-10 px-2',
    visibility,
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
