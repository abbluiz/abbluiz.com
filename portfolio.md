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

{% if site.lang == "en" %}
  {% capture link1 %}{{ site.baseurl_root }}{% tl portfolio pt %}{% endcapture %}
  <a href="{{ link1 }}" >{% t global.portuguese %}</a>
{% elsif site.lang == "pt" %}
  {% capture link2 %}{{ site.baseurl_root }}{% tl portfolio en  %}{% endcapture %}
  <a href="{{ link2 }}" >{% t global.english %}</a>
{% endif %}