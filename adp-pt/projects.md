---
layout: page
title: Projects
---

<p>By the end of this course, you will complete the following project(s):</p>

<ul class="archive-list">
   {% for project in site.projects %}
      <li>
         <span class="project-name"><a href="{{project.url}}">{{project.title}}</a></span>
         <span class="project-due"><strong>Due Date:</strong> {{ project.due }}</span>
      </li>
   {% endfor %}
</ul>
