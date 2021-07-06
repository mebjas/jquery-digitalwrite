# digitalwrite jQuery plugin
[![todofy badge](https://todofy.org/b/mebjas/jquery-digitalwrite)](https://todofy.org/r/mebjas/jquery-digitalwrite)

jQuery plugin to write charecters in digital format in a 5x5 matrix.

Using this plugin, you can create such charecters with animations, color options & size options!
In future it may enable you to transform one charecter to another - that should be kinda cool!

# Live Demo & more information - [minhazav.dev](https://blog.minhazav.dev/research/jquery-digital-write)
Its live on: https://blog.minhazav.dev/research/jquery-digital-write

# How to use: ([Read More](https://blog.minhazav.dev/research/jquery-digital-write))
 - Create a `div`
 ```html
 <div id="M_Placeholder"></div>
 ```
 
 - Include `jQuery` and this library and in js
 ```js
$("#M_Placeholder").digitalwrite({char: 'M'});
 ```
 
 This will create a 5X5 digital `M` with `width = 100px` & `height = 500px`, in black color.
 These properties can be customised as follows:
 
 `char` - (required) Charecter to print, `(A-Z, '.', '!') supported`<br>
 `height` - height of the charecter in px<br>
 `width` - width of the charecter in px<br>
 `background` - background color of the blocks, ex `red`, `rgba(255, 0, 0, 1)`<br>
 `border` - border property of the blocks, ex `1px solid red`, `2px dotted black`<br>
 `animation` - how the blocks animate to form the charecter at the end. Categories are: `none`, `motion`, `spiral`, `contract` & `fade` of these `spiral` & `fade` are experimental and buggy!<br>
 `success` - (function) callback called when charecter has been printed on screen<br>
 `timeout` - control speed of animation, value in ms, `500, default`

So if we use everything it would look something like
```js
$("#M_Placeholder").digitalwrite({
    char: 'M',
    height: 120,
    width: 120,
    background: 'rgba(0, 0, 0, .1)',
    border: '1px dased black',
    animate: 'contract',
    success: function() {
        console.info('Charecter M ready');
    }
});
```

### You can also convert a text to other text!
```js
$("#M_Placeholder").transformTo('K', function() {
  console.info('successfully transformed to K');  
});
```
![Image M](http://minhazav.xyz/samples/jquery-digitalwrite-example/aM.png) will transform to ![Image K](http://minhazav.xyz/samples/jquery-digitalwrite-example/aK.png) with animation!

For more information [view documentation](http://minhazav.xyz/samples/jquery-digitalwrite-example/)


### Animations
Different possible animations are: `none`, `motion`, `spiral`, `contract` & `fade`
![screenshot](http://minhazav.xyz/samples/jquery-digitalwrite-example/animations.gif)
