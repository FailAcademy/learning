---
layout: page
title: Projects
---

<p>Projects for this course:</p>

<ul>
   {% for project in site.projects %}
      <li>
         <a href="{{project.url}}">{{project.title}}</a>
      </li>
   {% endfor %}
</ul>
