---
layout: base
sections:
  - python.html
  - js.html
  - java.html
---

{% for section in sections %}
{% include "{{ section }}" %}
{% endfor %}
