Buttons typically wrap around child elements that contain text. Button variants include 'Solid Buttons' and 'Outline Buttons' and are determined by an optional `color` property supplied.

### Solid Buttons
```jsx
<div className='flex gap-2'>
  <Button>Basic</Button>
  <Button color='gray'>Gray</Button>
  <Button color='green'>Green</Button>
</div>
```

### Outline Buttons
```jsx
<div className='bg-black p-2'>
  <Button color='white-outline'>White Outline</Button>
</div>
```