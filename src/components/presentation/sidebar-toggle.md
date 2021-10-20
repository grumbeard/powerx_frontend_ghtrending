SidebarToggle is an icon with an optional **`label`** that works with a **`Sidebar`** and some other element ('Main Content') toggle classes on both components when clicked.

To specify additional **`className`** for the **`Sidebar`** and 'Main Content' on toggle, provide optional **`sideBarClassToToggle`** and **`mainContentClassToToggle`** props respectively.

When toggleIconExpanded is not provided, it defaults to using the icon provided with prop **`toggleIconClosed`**.

### Example with toggleIconExpanded Provided
```jsx
import { useRef } from 'react';
import { HeartFillIcon, XIcon } from '@primer/octicons-react';

const Demo = () => {
  const sideBarRef = useRef();
  const mainContentRef = useRef();
  
  return (
    <div className='w-full h-full text-white'>
      <main className='grid grid-cols-6 relative'>
        <div
          ref={sideBarRef}
          className='w-4/5 lg:w-full col-span-6 lg:col-span-1 h-80 mx-auto py-10 px-2 bg-pink-300 text-center hidden'
        >
        <h1 className='mt-10'>Sidebar</h1>
        </div>
        <div
          ref={mainContentRef}
          className='col-span-6 h-80 bg-gray-800 text-center'
        >
        <h1 className='mt-10'>Main Content</h1>
        <SideBarToggle
          isInitiallyExpanded={false}
          sideBarRef={sideBarRef}
          sideBarClassToToggle='hidden'
          mainContentRef={mainContentRef}
          mainContentClassToToggle='lg:col-span-5'
          toggleIconExpanded={<XIcon size={24} />}
          toggleIconClosed={<HeartFillIcon size={24} />}
          toggleLabel='list'
          className='absolute left-0 top-0 py-2 pl-4 pr-8 rounded-br-md bg-black'
        />
        </div>
      </main>
    </div>
  );
};

<Demo />
```

### Example with toggleIconExpanded Not Provided
```jsx
import { useRef } from 'react';
import { HeartFillIcon, XIcon } from '@primer/octicons-react';

const Demo = () => {
  const sideBarRef = useRef();
  const mainContentRef = useRef();
  
  return (
    <div className='w-full h-full text-white'>
      <main className='grid grid-cols-6 relative'>
        <div
          ref={sideBarRef}
          className='w-4/5 lg:w-full col-span-6 lg:col-span-1 h-80 mx-auto py-10 px-2 bg-pink-300 text-center hidden'
        >
        <h1 className='mt-10'>Sidebar</h1>
        </div>
        <div
          ref={mainContentRef}
          className='col-span-6 h-80 bg-gray-800 text-center'
        >
        <h1 className='mt-10'>Main Content</h1>
        <SideBarToggle
          isInitiallyExpanded={false}
          sideBarRef={sideBarRef}
          sideBarClassToToggle='hidden'
          mainContentRef={mainContentRef}
          mainContentClassToToggle='lg:col-span-5'
          toggleIconClosed={<HeartFillIcon size={24} />}
          toggleLabel='list'
          className='absolute left-0 top-0 py-2 pl-4 pr-8 rounded-br-md bg-black'
        />
        </div>
      </main>
    </div>
  );
};

<Demo />
```