---
layout: page
title: Learning Kits
---

<p>By the end of this course, you will complete the following project(s):</p>

<ul class="archive-list">
   {% for kit in site.learning_kits %}
      <li>
         <span class="project-name"><a href="{{kit.url}}">{{kit.title}}</a></span>
      </li>
   {% endfor %}
</ul>
