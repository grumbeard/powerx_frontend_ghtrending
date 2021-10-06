InfoCard is a compound component utilizing `Card`. It is a container with a rounded border that typically wraps around child elements. 

A `title` is required and it is displayed in uppercase and centered at the top of the container. Any children supplied is displayed below the title.

InfoCard variants include 'Outline InfoCards' and are determined by an optional `color` property supplied. The default value of `color` is 'gray'.

### Outline InfoCards
```jsx
<InfoCard title='this is a title'>
  <div className='text-xl'>This is a basic InfoCard</div>
  <div>Some Content</div>
</InfoCard>

<InfoCard color='red' title='this is a title'>
  <div className='text-xl'>This is a red InfoCard</div>
  <div>Some Content</div>
</InfoCard>
```