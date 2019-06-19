---
layout: page

title: pages.about
namespace: about

permalink: /about/
permalink_pt: /sobre/
---

{% translate_file about/about.md %}

{% if site.lang == "en" %}
  {% capture link1 %}{{ site.baseurl_root }}{% tl about pt %}{% endcapture %}
  <a href="{{ link1 }}" >{% t global.portuguese %}</a>
{% elsif site.lang == "pt" %}
  {% capture link2 %}{{ site.baseurl_root }}{% tl about en  %}{% endcapture %}
  <a href="{{ link2 }}" >{% t global.english %}</a>
{% endif %}