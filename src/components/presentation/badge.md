Badges typically wrap around child elements that contain text. 

Badge variants include 'Solid Badges' and 'Outline Badges' and are determined by an optional `color` property supplied. 


### Solid Badges
```jsx
<div className='flex gap-2'>
  <Badge>Basic</Badge>
  <Badge color='gray'>Gray</Badge>
  <Badge color='green'>Green</Badge>
  <Badge color='yellow'>Yellow</Badge>
  <Badge color='red'>Red</Badge>
</div>
```
### Outline Badges
```jsx
<div className='bg-black p-2'>
  <Badge color='white-outline'>White Outline</Badge>
</div>
```