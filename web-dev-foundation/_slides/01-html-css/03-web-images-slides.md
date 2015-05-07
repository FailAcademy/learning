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

1. Basic Photoshop Overview
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
##Basic Photoshop Image Functions

****Scaling****: Image &rarr; Image Size &rarr;  Input New Size

****Rotating****: Image &rarr; Image Rotation &rarr; Select Rotate Option

****Cropping****: Toolbar &rarr; Select Crop Tool &rarr; Drag Crop Box & Apply Crop 

****Saving for Web****:  Save for Web &rarr; Select Appropriate Format/Settings

---
template: inverse

# Common Web Formats
##JPG, PNG, GIF, SVG

---
## Common Web Formats

****JPG****: (Joint Photographers Group) Best for photos, gradients, graphics with tonal variations. Lossy image format.

****PNG-24****: (Portable Network Graphics)Best for graphics and photos, supports multiple levels of transparency, and millions of colours.

****PNG-8****: Raster image format, limited to 256 colours, no transparency. Preferred format over the GIF as file sizes are 10-30% smaller. 1 level of transparency. Lossless format.  Great for flat colour graphics like logos/icons/illustrations.

---
## Common Web Formats (cont.)

****GIF****: (Graphics Interchange Format) This is a bitmap image format, but limited to 256 colours, no transparency. Often used now to save GIF animations. 1 level of transparency. Lossless format. Great for flat colour graphics like logos/icons/illustrations.

****SVG***: (Scalable Vector Graphics) Vector graphics for the web that's rendered in XML. No quality loss when zoomed or scaled.
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

# IMG Tag Usage

---
# Image Tag Attributes
```html
<img src="photo.jpg" alt="photo description" title="further description of image" class="float_left />
```

***alt tag***: Provide alternate text to describe the image

***title tag***:  Provides further information about the image that is displayed in a tool tip

***class tag***: Provides a link to the CSS stylesheet 

---
template: inverse

# Web Imaging Tools
---
## Common Image Editing Software


---
template: inverse
# Copyright & Creative Commons

---

## Copyright Considerations 


---

## Creative Commons


---

template: inverse

# Fin!

{% endhighlight %}
