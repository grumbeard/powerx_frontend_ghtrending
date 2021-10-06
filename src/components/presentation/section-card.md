SectionCard is a container with a rounded border that typically wraps around child elements. 

When an optional `title` is supplied, it is displayed in uppercase and left-aligned in a rounded 'upper' container above the 'lower' container. Any children supplied is displayed within the 'lower' container.

### SectionCard without Title
```jsx
<SectionCard>
  <div className='text-xl'>This is a basic SectionCard</div>
  <div>Some Content</div>
</SectionCard>
```

### SectionCard with Title
```jsx
<SectionCard title='this is a title'>
  <div className='text-xl'>This is a basic SectionCard</div>
  <div>Some Content</div>
</SectionCard>
```