---
layout: base
sections:
  - python.html
  - java.html
  - js.html
---
{% for section in page.sections %}
  {% include {{ section }} %}
{% endfor %}