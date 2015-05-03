---
layout: page
title: Lab Assignments
---

<p>Lab assignments for this course:</p>

<ul>
   {% for lab in site.labs %}
      <li>
         <a href="{{lab.url}}">{{lab.title}}</a>
      </li>
   {% endfor %}
</ul>
