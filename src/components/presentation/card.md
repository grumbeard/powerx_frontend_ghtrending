Card is a basic container with a rounded border that typically wraps around child elements.

Card variants include 'Outline Cards' and are determined by an optional `color` property supplied. The default value of `color` is 'gray'.

### Outline Cards
```jsx
<Card>
  <div className='text-xl'>This is a basic Card</div>
  <div>Some Content</div>
</Card>
<Card color='red'>
  <div className='text-xl'>This is a red Card</div>
  <div>Some Content</div>
</Card>
```