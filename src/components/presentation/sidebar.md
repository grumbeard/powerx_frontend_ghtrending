Sidebar is a simple section that can be used with a **`SidebarToggle`** to hide and show itself in relation to some 'Main Content'.

It's initial visibility can be set with the prop **`isInitiallyExpanded`**.

### Example of Initially Visible Sidebar
```jsx
import { useRef } from 'react';

const Demo = () => {
  const sideBarRef = useRef();

  return (
    <div className='w-full h-full text-white'>
      <main className='grid grid-cols-6 relative'>
        <SideBar
          ref={sideBarRef}
          className='w-4/5 lg:w-full col-span-2 bg-black h-80'
          isInitiallyExpanded={true}
        >
          <ul>
            <li className='bg-pink-300 text-xl p-2 m-2'>Sidebar Content</li>
            <li className='bg-pink-300 text-xl p-2 m-2'>Sidebar Content</li>
            <li className='bg-pink-300 text-xl p-2 m-2'>Sidebar Content</li>
            <li className='bg-pink-300 text-xl p-2 m-2'>Sidebar Content</li>
          </ul>
        </SideBar>
      </main>
    </div>
  );
}
<Demo />
```

Visual example of initially hidden sidebar omitted for unhelpfulness.