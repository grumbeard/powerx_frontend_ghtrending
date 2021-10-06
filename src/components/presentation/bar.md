Bars are horizontal rectangles that represent a numerical `value` over a `total`. The value is displayed as a percentage (Floats: 2 decimal place) of the total above each Bar. Bars may be distinguished by supplying an optional `label`.

```jsx
<Bar value={0} total={100} />
<Bar value={20} total={100} />
<Bar value={40} total={100} />
<Bar value={60} total={100} label='Apple' />
<Bar value={80} total={100} label='Orange' />
<Bar value={100} total={100} label='Pear' />
```

When hovered, a tooltip appears over the Bar displaying the optional `hoverInfo` supplied.
```jsx
<Bar value={135} total={7911} hoverInfo='Optional Information' />
<Bar value={246} total={810} hoverInfo={`Raw value: ${246}`} />
```