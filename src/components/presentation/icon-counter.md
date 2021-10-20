IconCounter combines an element containing an **`icon`** with some **`value`**. Borders may be added by supplying a **`className`** property.

### Icons with Only Required Props
```jsx
import { EyeIcon, RepoForkedIcon, StarIcon } from '@primer/octicons-react';

<IconCounter
  icon={<StarIcon size={24} />}
  value={10}
/>
```

### Icons with Border
```jsx
import { EyeIcon, RepoForkedIcon, StarIcon } from '@primer/octicons-react';
<div className='w-full flex justify-center'>
<IconCounter
  icon={<StarIcon size={24} />}
  value={10}
  className='border rounded-l-md'
/>

<IconCounter
  icon={<RepoForkedIcon size={24} />}
  value={20}
  className='border'
/>

<IconCounter
  icon={<EyeIcon size={24} />}
  value={30}
  className='border rounded-r-md'
/>
</div>
```

### Icons with Additional Icon Styling
```jsx
import { EyeIcon, RepoForkedIcon, StarIcon } from '@primer/octicons-react';
<IconCounter
  icon={<StarIcon size={24} />}
  iconClass='text-yellow-500'
  value={10}
  className='border rounded-md w-40 mx-auto'
/>
```

### Icons with Additional Value Styling
```jsx
import { EyeIcon, RepoForkedIcon, StarIcon } from '@primer/octicons-react';

<IconCounter
  icon={<StarIcon size={24} />}
  value={10}
  valueClass='text-xl bold underline'
  className='border rounded-md w-40 mx-auto'
/>
```