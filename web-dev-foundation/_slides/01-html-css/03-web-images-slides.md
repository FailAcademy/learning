---
layout: slidedeck
title: Using Images on the Web Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Using Images on the Web

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Image editing basics
2. Web-friendly image formats
3. Colour on the web
4. Using the `img` element and its attributes
5. Copyright, the public domain, and Creative Commons

---
template: inverse

# Image Editing Basics

---
class: center, middle

### Image Editing 101

We'll be just covering the basics of image editing to give you the necessary tools to **scale**, **rotate**, or **crop** an image, or save it in a way that's **optimized for the web**.

---

# Scaling an Image Down

**Scaling**: Image &rarr; Image Size &rarr; input new **Width** or **Height**

.inline-images[
   ![Photoshop scaling](../../public/img/slide-assets/r2d2-scaling.png)
]

---

# Don't Scale Up Images

Photoshop manipulates **raster** or **bitmap** images that are made of **pixels**, so if you try to scale these images or graphics up they will become pixelated and blurry.

.inline-images[
   ![Don't Scale Up Example](../../public/img/slide-assets/r2d2-blurry.png)
]

---

# Rotating Images

**Rotating**: Image &rarr; Image Rotation &rarr; Select rotate option...

.inline-images[
   ![Photoshop scaling](../../public/img/slide-assets/image-rotation.png)

   ![R2D2 Rotations](../../public/img/slide-assets/r2d2-rotations.png)
]

---

# Cropping Images

**Cropping**: Select Crop Tool &rarr; Drag Crop Box &rarr; Press **Enter** or double-click to apply crop

.inline-images[
   ![R2D2 Crop](../../public/img/slide-assets/r2d2-cropping.png)
]

---
# Optimizing Images

**Saving for Web**: File &rarr; Save for Web... &rarr; Apply your settings

For photos, make sure you choose the **JPEG** option, find a happy medium between retaining as much quality as possible while making the image as small as possible.

.inline-images[
   ![Save For Web](../../public/img/slide-assets/save-for-web-photoshop.png)
]

---

# Image Editing Software

- [Adobe Photoshop](http://www.adobe.com/ca/products/photoshop.html) (Mac or PC)
- [Adobe Illustrator](http://www.adobe.com/ca/products/illustrator.html) (Mac or PC)
- [GIMP](http://www.gimp.org/) (Mac or PC)
- [Pixelmator](http://www.pixelmator.com/) (Mac)

---
template: inverse

# Web-friendly Image Formats

---

# Common Formats

Today, images for the web are saved in the following formats:

- **JPG/JPEG** (Joint Photographers Group)
- **GIF** (Graphics Interchange Format)
- **PNG** (Portable Network Graphics)
- **SVG** (Scalable Vector Graphics)

---

# JPG/JPEG

This image format is best for **photos**, gradients, and graphics with tonal variations.

It's a **lossy** image format, so this means some of the original image data is lost when saved in this format.

---

# GIF

The GIF format offered a way to save images with one level of transparency in a **lossless** format in the early days of the web, and it's still in use today.

GIFs have a limited colour palette of only **256 colours**, so they work best for simple graphics.

And of course, GIFs are frequently used today for saving **animated graphics**.

---

# PNG

This image format is best images and graphics that need to support **multiple levels of transparency** and a large number of colours.

It's also a **lossless** image format, which means that it preserves all of the file's original data.

---

# PNG-8 vs. PNG-24

*But not all PNGs are created equal!*

**PNG-8** is limited to 256 colours and no transparency, and it's preferable to GIFs for simple images (like icons and logos) with minimal colours.

**PNG-24** is best for photos or graphics that need to support a broader array of colours or multiple levels of transparency.

---
class: center, middle

### A Word of Caution!

PNG-24 may support greater transparency, fading, and gradients when saving photos, but these files will be much larger than JPG which means they will take more bandwidth to download and longer to render.

---

# SVG

The SVG format is newer on the scene, but offer a lot of flexibility.

The image data is rendered as XML and can **scale down or up** without any loss of quality, just like a vector-based image in Illustrator.

SVGs work best for graphics such as **logos and icons**.

When using SVGs, it important to **provide a fallback** image format if you need to support older browsers.

---

# Format Cheatsheet

- Use **PNG-8** over **GIF** for graphics with simple colors
- Use **PNG-24** over **JPEG** when using alpha transparency
- Use **JPEG** over **PNG** for photographic images
- Use **GIF** for animated graphics
- Use **SVG** for icons and logos that need to scale

---

# Formatting Pro Tips

- **Scale down images** to the appropriate size for your webpage
- **Choose the correct** image format
- **Optimize images** to be the best possible quality at the smallest possible size
- **Save** image names with relevant names (that will help with SEO later)
- **Keep a copy** of the original image before optimizing it

---

# Exercise 1

Open **Adobe Photoshop** and we'll use **Bridge**(File &rarr; Browser in Bridge)  to view the images in the sample images folder. 

Got through and practice:

- Resizing images through Image &rarr; Image Size
- Crop using Crop Tool (and Options menu fields for `height` and `width` settings)
- Optimize Images through File &rarr; Save for Web (use JPGs for images/PNGs for graphics)

---
template: inverse

# Colour on the Web

---

# Using Color

On the web, we have four options for specifying the colours of our HTML elements:

- Colour names
- HEX codes
- RGB/RGBa values
- HSLA values

---

# Colour Names

There are 147 predefined colour names supported by browsers, which we can use like this:

```css
p {
   color: maroon;
}

a {
   color: MediumSlateBlue;
}
```

Check out [this list](http://en.wikipedia.org/wiki/Web_colors) for all of the names of the predefined colours.

---

# HEX Codes

Alternatively, we can specify a HEX code that corresponds to a specific colour.

For example, the HEX code for white is `#FFFFFF` (or `#FFF` in shorthand).

In your CSS, a HEX code would be used like this:

```css
p {
   color: #111111; /* very dark grey */
}
```

---

# HEX Codes

To get a HEX code, you can use an [online colour picker tool](http://www.colorpicker.com/), or use the colour palette in an image editing program.

.inline-images[
   ![PS colour picker](../../public/img/slide-assets/color-picker-screenshot.png)
]

---

## RGB/RGBa Colours

We can also use RGB (red, green, blue) values to specify colours in our CSS:

```css
a {
   color: rgb(237,67,67);
}
```

The equivalent of this RGB colour in HEX would be `#ed4343`.

---

# RGB/RGBa Colours

Or RGBa values to also specify the opacity of the colour:

```css
header {
   background-color: rgba(237,67,67,0.5);
}
```

The `a` that represents opacity is written as a decimal, with a range of `0` (fully transparent) to `1` (solid).

*Note that RGBa isn't supported by older browsers like IE8.*
---
##Exercise 2

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/WvOmvY/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/WvOmvY/'>WvOmvY</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

template: inverse

# More on the Image Tag

---
class: center, middle

### A Little Bit of History

Images haven't always been a part of the web, but they did arrive early on the scene in 1993. Up until now, the `<img>` tag has only evolved slightly.

---

# The Image Tag

Let's review and dive a little deeper into the `<img>` tag:

```html
<img src="images/grump-cat.jpg" alt="Grumpy Cat scowls furiously" />
```

- `src` tells the browser where to find the image
- `alt` provides a description of the image so the content can be understood by screenreader software and search engines

---

# The Image Tag

We can also specify a few more attributes:

```html
<img src="images/grump-cat.jpg" alt="Grumpy Cat scowls furiously again" title="The Grumpiest Cat on the Web" width="480" height="320" class="align-center" />
```

- `title` provides further info about the image and is displayed in a tool tip
- `width` sets the the width of the image
- `height` sets the height of the image
- `class` or `id` targets special styles in your CSS

---

# Images and CSS

We can use CSS to manipulate our image elements as well:

```html
<img src="images/grump-cat.jpg" alt="Grumpy Cat scowls furiously again" title="The Grumpiest Cat on the Web" class="align-center" />
```

```css
.align-center {
   display: block;
   margin: 0 auto; /* This centers the element */
   width: 480px;
   height: 320px;
   border: 1px solid #FF3300;
}
```

---

# Exercise 2

Goes here...

---
template: inverse

# Copyright & Creative Commons

---
class: center, middle

### What images can you use?

When using others' images on your website, it's important to make sure that you're legally allowed to do so.

---

# Copyrighted Material

- Copyright laws are designed to protect a creator's right to be compensated/attributed and to control how their work is used/shared
- All tangible creative works are protected by copyright immediately upon creation
- When in doubt, assume what you want to use is copyrighted material and seek permission to use it or find a suitable royalty-free alternative

---

# Creative Commons

Creative Commons is a non-profit organization devoted to expanding the range of creative works available for others to build upon legally and to share.

Creative Commons licenses allow for free usage of normally copyrighted work and provide the author/creator flexibility in how their work is shared.

.inline-images[
   ![Creative Commons logo](../../public/img/slide-assets/cc-logo.jpg)
]

---
class: center, middle

.inline-images[
   ![CC License Types](../../public/img/slide-assets/cc_license_types.png)
]

---

# What is CC0?

Let's look at this open type concept [Creative Commons Zero](https://creativecommons.org/about/cc0) where the creator waives all their copyright and related rights by putting them in the **public domain**.

.inline-images[
   ![CC0](../../public/img/slide-assets/cc0-graphic.png)
]

---

# CC-Licensed Images

A few good places to find royalty-free, CC-licensed images:

- [Flickr CC search](https://www.flickr.com/search/?license=2%2C3%2C4%2C5%2C6%2C9)
- [The Stocks](http://thestocks.im/)
- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)

---

template: inverse

# Fin!

{% endhighlight %}
