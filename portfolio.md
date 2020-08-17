---
layout: page

title: pages.portfolio.title
description: pages.portfolio.desc
img: pages.portfolio.img
namespace: portfolio

pagination:
    enabled: true
    collection: projects
    permalink: 'p/:num/'
    sort_field: 'unique-name'
    sort_reverse: true
    per_page: 4

permalink: /portfolio/
permalink_pt: /portfolio/
---

{% assign all_projects = paginator.posts %}

<!-- {% assign pinned_projects = site.projects | where: "pinned", true %}

<h3>{% t string.pinned-projects %}</h3>

<div class="pinned-area">
    {% for pinned_project in pinned_projects %}
        <div class="project-card-pinned" style="background-image: linear-gradient(to bottom right, {{ pinned_project.color1 }}, {{ pinned_project.color2 }});">
            <a href='{{ pinned_project.url | relative_url }}'>
                <span class="clickable-div"></span>
                    <div class="project-card-pinned-content">
                        {% t pinned_project.title %}
                    </div>
            </a>
        </div>
    {% endfor %}
</div> -->

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