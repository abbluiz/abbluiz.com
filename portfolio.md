---
layout: page

title: pages.portfolio.title
description: pages.portfolio.desc
img: pages.portfolio.img
namespace: portfolio

permalink: /portfolio/
permalink_pt: /portfolio/
---

{% assign all_projects = site.projects %}

{% assign pinned_projects = site.projects | where: "pinned", true %}

<h3>{% t string.pinned-projects %}</h3>

<div class="pinned-area">
{% for pinned_project in pinned_projects %}
  <div class="project-card-pinned">
    <div class="project-card-pinned-content">
      {% t pinned_project.title %}
    </div>
  </div>
{% endfor %}
</div>

<h3>{% t string.all-projects %}</h3>

{% for project in all_projects %}
  <div class="project-card">
    <div class="project-card-content">{% t project.title %}</div>
  </div>
{% endfor %}