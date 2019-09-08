---
layout: page

title: pages.portfolio.title
description: pages.portfolio.desc
img: pages.portfolio.img
namespace: portfolio

permalink: /portfolio/
permalink_pt: /portfolio/
---

{% translate_file portfolio/portfolio.md %}

{% t string.pinned-projects %}

{% assign all_projects = site.projects %}

{% assign pinned_projects = site.projects | where: "pinned", true %}

{% for pinned_project in pinned_projects %}
  * {% t pinned_project.name %}
{% endfor %}

{% t string.all-projects %}

{% for project in all_projects %}
  * {% t project.name %}
{% endfor %}