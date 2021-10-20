/* Side Bar Toggle */
import cn from "classnames";
import { useState } from "react";
import { PropTypes } from 'prop-types';

export const SideBarToggle = ({
  isInitiallyExpanded,
  sideBarRef,
  sideBarClassToToggle,
  mainContentRef,
  mainContentClassToToggle,
  toggleIconExpanded,
  toggleIconClosed,
  toggleLabel,
  ...props
}) => {
  const className = cn(
    'flex items-center cursor-pointer',
    props.className
  );
  
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(isInitiallyExpanded || false);
  
  const toggleSideBar = () => {
    if (sideBarRef.current) sideBarRef.current.classList.toggle(sideBarClassToToggle);
    if (mainContentRef.current) mainContentRef.current.classList.toggle(mainContentClassToToggle);
    setIsSideBarExpanded(!isSideBarExpanded);
  };
  
  return (
    <div {...props} onClick={toggleSideBar} className={className}>
      <span className='mr-2'>
        {isSideBarExpanded
          ? toggleIconExpanded
            ? toggleIconExpanded
            : toggleIconClosed
          : toggleIconClosed
        }
      </span>
    { toggleLabel &&
      <p className='uppercase'>{toggleLabel}</p>
    }
    </div>
  );
};

SideBarToggle.propTypes = {
  isInitiallyExpanded: PropTypes.bool,
  sideBarRef: PropTypes.object.isRequired,
  sideBarClassToToggle: PropTypes.string,
  mainContentRef: PropTypes.object.isRequired,
  mainContentClassToToggle: PropTypes.string,
  toggleIconExpanded: PropTypes.element,
  toggleIconClosed: PropTypes.element.isRequired,
  toggleLabel: PropTypes.string
};

SideBarToggle.defaultProps = {
  isInitiallyExpanded: false
};