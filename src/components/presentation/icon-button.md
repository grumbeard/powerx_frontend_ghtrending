IconButton is a clickable button that is primarily an **`icon`** that may optionally be displayed alongside a text label with **`label`** prop provided.

IconButton variants include 'Link Buttons' and 'Functional Buttons'.

Only one **`color`** variant is currently available, which is the default of 'gray'.

Where neither **`links`** nor **`onClick`** props are supplied, it's recommended to not use this component although still possible.

'Link Buttons' may be:
  1. links to other parts of the app (**`link`** prop supplied as string)
  2. links to external websites (**`link`** prop supplied as object in the form **`{ pathname: <full url string> }`**)


### Example of Link Buttons
```jsx
import { HeartFillIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react';
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <div className='bg-black text-white p-4 flex'>
    <IconButton
      link='/'
      icon={<HeartFillIcon size={16} />}
      className='hover:bg-opacity-50'
    />
    <IconButton
      link='/404'
      icon={<ThreeBarsIcon size={16} />}
      className='hover:bg-opacity-50 bg-red-300 hover:bg-red-300'
    />
    <IconButton
      link={{pathname: 'https://github.com/grumbeard/powerx_frontend_ghtrending'}}
      icon={<XIcon size={16} />}
      className='hover:bg-opacity-50'
    />
  </div>
</BrowserRouter>
```

'Functional Buttons' are given an **`onClick`** prop in the form of an onClick function. When the **`icon`** or its **`label`** is clicked, the function supplied is triggered.

### Example of Functional Buttons
```jsx
import { HeartFillIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react';

<div className='bg-black text-white p-4 flex'>
  <IconButton
    onClick={() => alert('Heart Button')}
    icon={<HeartFillIcon size={16} />}
    className='hover:bg-opacity-50'
  />
  <IconButton
    onClick={() => alert('Three Bars Button')}
    icon={<ThreeBarsIcon size={16} />}
    className='bg-opacity-50 bg-blue-300 hover:bg-blue-300'
  />
  <IconButton
    onClick={() => alert('X Button')}
    icon={<XIcon size={16} />}
    className='hover:bg-opacity-50 hover:bg-pink-300'
  />
</div>
```