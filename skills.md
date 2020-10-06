---
layout: page

title: pages.skills.title
description: pages.skills.desc
img: pages.skills.img
namespace: skills

permalink: /skills/
permalink_pt: /habilidades/
---

{% assign all_skills = site.skills %}

{%- for skill in all_skills -%}
    <div class="chip">
        <svg class="chip-icon" viewBox="0 0 24 24">
            <use href="{{ '/assets/skill-icons/' | append: skill.unique-name | append: '.svg#icon' | relative_url }}"></use>
        </svg>
        {%- t skill.title -%}
    </div>
{%- endfor -%}