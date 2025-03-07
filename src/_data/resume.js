import me from './me.json' with { type: "json" };
import meta from './meta.json' with { type: "json" };
import media from './media.json' with { type: "json" };
import work from './work.json' with { type: "json" };
import education from './education.json' with { type: "json" };
import certificates from './certificates.json' with { type: "json" };
import projects from './projects.json' with { type: "json" };

export default {
    "basics": {
        "name": me.name,
        "label": "Senior Engineering Leader",
        "email": me.email,
        "url": meta.url,
        "location": me.location,
        "summary": "I'm a proven leader with over 12 years of experience in software engineering, including over 5 years in management, 4 of those at the Director/VP level. I am passionate about building inclusive, high-performing teams and have a strong track record of delivering quality web applications that drive business growth. My expertise spans backend, frontend, cloud infrastructure, security, and artificial intelligence. I'm also an active contributor to open-source projects. I'm fluent in Spanish.",
        "profiles": media,
    },
    "work": work,
    "education": education,
    "certificates": certificates,
    "projects": projects
}
