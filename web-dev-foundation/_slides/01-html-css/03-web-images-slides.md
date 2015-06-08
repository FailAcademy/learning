---
layout: slidedeck
title: Intro to Web Images Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Web Images

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Photoshop Essentials
2. Crop, Size and Save for Web
3. Common Web Formats
4. Image Best Practices
5. IMG tag considerations
6. Web tools for Image Editing
7. Copyright & Creative Commons

---

template: inverse

# Photoshop Overview
##Using Photoshop for the Web

---
## Photoshop Essentials
In this Web Developer Essentials program, we'll be just covering the essentials of this photo-editing program to give you the necessary tools to `Scale`, `Rotate`, `Crop` and `Save for the Web`. This will allow to to insert **optimized** images into your websites!

---
##Making Images Smaller

****Scaling****: Image &rarr; Image Size &rarr;  Input New `Height` or `Width`

![Photoshop scaling](../../public/img/slide-assets/r2d2-scaling.png)

---
## Don't Scale Up Images

Photoshop manipulates `raster` or `bitmapped` images, that are made up of **pixels**, so it's really recommended **NOT** to size up images/photos as they will become *pixelated* and *blurry*! 

![Don't Scale Up Example](../../public/img/slide-assets/r2d2-blurry.png)
---
##Rotating Images

****Rotating****: Image &rarr; Image Rotation &rarr; Select Rotate Option

![Photoshop scaling](../../public/img/slide-assets/image-rotation.png)

![R2D2 Rotations](../../public/img/slide-assets/r2d2-rotations.png)

---
## Cropping Images
****Cropping****: Toolbar &rarr; Select Crop Tool &rarr; Drag Crop Box & Press `Return` to **Apply Crop** 

![R2D2 Crop](../../public/img/slide-assets/r2d2-cropping.png)

---
## Optimized Web Images

****Saving for Web****:  Save for Web &rarr; Select Appropriate Format/Settings
For photos, make sure you choose the 
`JPG` option, and set it between 70-80% to keep the file size *optimized*.

![Save For Web](../../public/img/slide-assets/save-for-web-photoshop.png)

---
## Use HEX/RGBa Colours
As designers, you have a few methods for specifying colour in a webpage. 

****HEX**** Using the hexidecimal code system to reference colours is fairly simple. There are colour sites like [HTML Color Codes](http://html-color-codes.com), which shows the web safe hex codes shown as a 3 paired number/letter sequence. Alternately, you can use the Colour Picker from Photoshop or other image editor to reference one of the 16 million available colours.
`White is reference in hexcode by #FFFFFF or #FFF (shorthand)` 
 
***RGBa**** Using RGBa is more versatile in that you can specify opacity as well as the Red, Green, and Blue colour mixes.
`rgba(255,255,255,1)`

*****Opacity***** The *a* that represents opacity is specified in decimals, with a range of 0.0 (fully transparent) to 1.0 (solid).

---
template: inverse

# Common Web Formats
##JPG, PNG, GIF, SVG

---
## Common Web Formats

****JPG****: (Joint Photographers Group) Best for photos, gradients, graphics with tonal variations. Lossy image format.

****GIF****: (Graphics Interchange Format) This is a bitmap image format, but limited to 256 colours, no transparency. Often used now to save GIF animations. 1 level of transparency. Lossless format. Great for flat colour graphics like logos/icons/illustrations.

---
## Common Web Formats (cont.)

****PNG-8****: Raster image format, limited to 256 colours, no transparency. Preferred format over the GIF as file sizes are 10-30% smaller. 1 level of transparency. Lossless format.  Great for flat colour graphics like logos/icons/illustrations.

****PNG-24****: (Portable Network Graphics)Best for graphics and photos, supports multiple levels of transparency, and millions of colours.

****SVG****: (Scalable Vector Graphics) Vector graphics for the web that's rendered in XML. No quality loss when zoomed or scaled.
---
## Word of Caution: PNG-24

NOTE: PNG-24, which has 24 bits of colour (8bits per channel), allowing for up to 16 million colours, and provides greater transparency fading, gradients of colour, and better support for saving for photos. The draw back of this format is the larger file sizes, even larger than JPG, so consider the use of this format carefully, as it will affect download speed of the graphic. 

---
template: inverse

# Image Best Practices

---
## Image Best Practices
- Scale down images to the appropriate size for your webpage
- Choose the correct image format
- Optimize Images to a good quality and efficient file size
- Add alt tags to all images
- Save image names with relevant keywords (that will tie into SEO later)
- Keep a copy of the original editable .PSD file that you refer back to

---

template: inverse

# Image Tag Usage

---
## Image Tag Attributes

`<img src="photo.jpg" alt="photo description" title="further description of image" class="float_left />`

***alt tag:*** Provide alternate text to describe the image

***title tag:***  Provides further information about the image that is displayed in a tool tip

***class tag:***: Provides a link to the CSS stylesheet in order to style the image with properties like border and padding (from the Box Model)

---
## Specifying Height/Width for Images
***HTML method*** 
The height and width of a graphic/image can be specified with the HTML tags: height and width.  The browser is able to render the images quicker if it knows the dimensions.

`<img src="logo.png" alt="Logo" height=150px width=150px">`

***CSS method*** 
With HTML5 conventions and use of external stylesheets to separate content from styling, you are seeing that height/width are now being referenced further in stylesheet instead. 

`img src="logo.png" alt="Logo" class="logostyle">`

```CSS
.logostyle {
height: 150px;
width: 150px;
border: 0px;
}
```

---
template: inverse

# Web Imaging Tools
---
## Common Image Editing Software
- **Adobe Photoshop** - Industry standard image editing software
- **Adobe Illustrator** - Industry standard graphics editing software
- **Gimp** - Free **G**NU **I**mage **M**anipulating **P**rogram
- **Pixelmator** - Available for Mac and iOS

---
template: inverse
# Copyright & Creative Commons

---

## Creative Commons
- is a non-profit organization devoted to expanding the range of creative works available for others to build upon legally and to share.
- different types of licenses, as shown in various visual symbols, will show what rights are reserved and waived by the creator so that their work can be used by others
- allows for free usage of normally copyrighted work
- provides the author/creator flexibility in how their work is shared

---
## Different CC License Types

.inline-images[![CC License Types](../../public/img/slide-assets/cc_license_types.png)]

---

## Copyright Considerations 
- Copyright laws are designed to protect a creator's right to be compensated/attributed and to control how their work is used/shared. 
- All tangible creative works are protected by copyright immediately upon creation. 
- When in doubt, assume what you want to use is copyrighted material and seek permission to use it or find a suitable royalty free alternative.

---

## Copyright Tech DO's and Don'ts
- The internet is not public domain, things you "google" cannot just be downloaded to be used, examples include graphics, logos, fonts, photographs, and illustrations.

.inline-images[![Google Search Box](../../public/img/slide-assets/google-search-box.png)]
---

## Copyright Tech DO's and Don'ts
- Posting links that contain only a URL and the title of the site is generally acceptable.
- Don't copy a site's HTML or CSS (or any scripting code)
- Always get permission to use a copyrighted online work from the owner of that work
- Don't link to sites that contain large amounts of video or audio 

---

## What is CC0?

Let's look at this open type concept [Creative Commons Zero](https://creativecommons.org/about/cc0) where the creator waives all their copyright and related rights.

![CC0](../../public/img/slide-assets/cc0-graphic.png)

---

template: inverse

# Fin!

{% endhighlight %}
