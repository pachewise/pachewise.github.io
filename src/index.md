---
layout: base
---
<nav>
<span>I know:</span>
{%- for language in languages %}
<a href="#{{language.name | downcase}}">{{ language.name }}</a>
{%- endfor %}
</nav>

{% for language in languages %}
  {% include "lang-blurb.html" %}
{% endfor %}
