---
layout: page

title: pages.portfolio.title
description: pages.portfolio.desc
output-desc: true
img: pages.portfolio.img
namespace: portfolio

pagination:
    enabled: true
    collection: projects
    permalink: 'p/:num/'
    sort_field: 'unique-name'
    sort_reverse: true
    per_page: 8

permalink: /portfolio/
permalink_pt: /portfolio/
---

{% assign all_projects = paginator.posts %}

{% for project in all_projects %}
    <div class="project-card" style="background-image: linear-gradient(to bottom right, {{ project.color1 }}, {{ project.color2 }});">
        <a href='{{ project.url | relative_url }}'>
            <span class="clickable-div"></span>
            <div class="project-card-content">{% t project.title %}</div>
        </a>
    </div>
{% endfor %}

{% if paginator.total_pages > 1 %}

        <ul>

            {% if paginator.previous_page %}

                <li>
                    <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}">{%- t string.newer-posts -%}</a>
                </li>

            {% endif %}

            {% if paginator.next_page %}

                <li>
                    <a href="{{ paginator.next_page_path | prepend: site.baseurl }}">{%- t string.older-posts -%}</a>
                </li>

            {% endif %}

        </ul>

    {% endif %}

    {% if paginator.page_trail %}

        {% for trail in paginator.page_trail %}

            <li {% if page.url == trail.path %}class="selected"{% endif %}>
                <a href="{{ trail.path | prepend: site.baseurl }}" title="{{trail.title}}">{{ trail.num }}</a>
            </li>

        {% endfor %}

    {% endif %}