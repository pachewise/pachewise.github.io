---
layout: base
---

<nav aria-label="main navigation">
<a href="#about">About</a>
<div>
<a href="#leadership">Leadership</a>
<nav aria-label="leadership navigation">
<a href="#system-design">System Design</a>
<a href="#tech-debt">Tech Debt</a>
<a href="#foss">FOSS</a>
<a href="#ai">AI</a>
</nav>
</div>
<div>
<a href="#languages">Languages</a>
<nav aria-label="languages navigation">
{%- for language in languages %}
<a href="#{{language.name | downcase}}">{{ language.name }}</a>
{%- endfor %}
</nav>
</div>
<a href="/resume">Résumé</a>
</nav>

<section>
{% include "about.md" | markdownify %}
</section>

<section>
{% include "leadership.md" | markdownify %}
</section>

<section>
<h1>Languages</h1>

{% for language in languages %}
  {% include "lang-blurb.html" %}
{% endfor %}
</section>
