# GLASS

<br />

## Add a shining glass effect to elements in your web page

There are two files you need to add to your web page in order to get effects

1. glass.css
2. glass.js

<br />

## You can get these two files through npm

### To install in current project (folder)

```
$ npm install @lassi/glass
$ npm install
```

### To install gloabally then add to project

```
$ npm install -g @lassi/glass
$ npm install @lassi/glass
$ npm install
```

you can find two files in `node_modules/glass` folder
<br />
`glass.js` needs JQuery support. Please add JQuery to your webpage before adding `glass.js`

<br />

## How to use

Check the example in `sample` folder

1. Add css class `glass` to an element for default glass effect
2. Modify default effect by adding fallowing attributes

- `data-shining-color` : Change the color of shine. This value can be a rgb, rgba function, color name or a # code
- `data-shining-duration` : Change the duration of shining effect. Can be seconds (s) or miliseconds (ms)
- `data-shining-opacity` : Change the opacity of the shine. Must be a value between 1 and 0

<br />
<br />
<br />
That's all for now. This is my first package distribution and I hope this effort will make your playground more easier. Please let me know your ideas about this 🙂
