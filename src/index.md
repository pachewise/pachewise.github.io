---
layout: base
---

<nav aria-label="main navigation">
<a href="#about">About Me</a>
<a href="#languages">Languages</a>
<a href="/resume">Résumé</a>
</nav>

<a name="about"></a>
{% include "about.md" | markdownify %}

<nav>
<span>I know:</span>
{%- for language in languages %}
<a href="#{{language.name | downcase}}">{{ language.name }}</a>
{%- endfor %}
</nav>

{% for language in languages %}
  {% include "lang-blurb.html" %}
{% endfor %}
