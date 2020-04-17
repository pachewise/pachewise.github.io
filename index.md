---
layout: base
sections:
  - python.html
  - js.html
  - java.html
---
{% for section in page.sections %}
  {% include {{ section }} %}
{% endfor %}