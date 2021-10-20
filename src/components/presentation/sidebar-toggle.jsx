/* Side Bar Toggle */
import cn from "classnames";
import { useState } from "react";

export const SideBarToggle = ({
  isInitiallyExpanded,
  sideBarRef,
  sideBarClassOnToggle,
  mainContentRef,
  mainContentClassOnToggle,
  toggleIconExpanded,
  toggleIconClosed,
  toggleLabel,
  ...props
}) => {
  const className = cn(
    'flex items-center cursor-pointer',
    props.className
  );
  
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(isInitiallyExpanded);
  
  const toggleSideBar = () => {
    sideBarRef.current.classList.toggle(sideBarClassOnToggle);
    mainContentRef.current.classList.toggle(mainContentClassOnToggle);
    setIsSideBarExpanded(!isSideBarExpanded);
  };
  
  return (
    <div {...props} onClick={toggleSideBar} className={className}>
      <span className='mr-2'>
        {isSideBarExpanded
          ? toggleIconExpanded
          : toggleIconClosed
        }
      </span>
    { toggleLabel &&
      <p className='uppercase'>{toggleLabel}</p>
    }
    </div>
  );
};