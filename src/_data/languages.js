import work from './work.json' with { type: "json" };
import reposFn from './repos.js';

const reduceArray = (objects, func) => (objects.reduce((addr, curr) => {
    const jsonKey = JSON.stringify(curr);
    if (!addr.has(jsonKey) && func(curr)) {
        addr.add(jsonKey)
    }
    return addr;
}, new Set()).values().map(o => JSON.parse(o)));


const relevantWork = (language) => (
    reduceArray(work.map(j => ({ name: j.name, url: j.url, languages: j.languages})), o => o.languages.includes(language))
);

const repos = await reposFn();
console.log(work, repos);
const relevantOss = (language) => (
    reduceArray(repos.map(r => ({ name: r.name, url: r.html_url, language: r.language })), o => o.language === language)
);

console.log([...relevantWork("Python")], "moo")

export default [
    {
      "name": "Python",
      "tagline": "My bread and butter.",
      "experience": [
        {
            "name": "MIT (Lab Assistant)",
            "url": "https://web.mit.edu/6.01/www/"
        },
        ...relevantWork("Python")
      ],
      "oss": [...relevantOss("Python")]
    },
    {
        "name": "TypeScript",
        "tagline": "JavaScript is \"dead\"; Long live TypeScript.",
        "experience": [...relevantWork("TypeScript")],
        "oss": [
            {
                "name": "Ptolemy",
                "url": "https://github.com/PtolemyLovesYou/ptolemy"
            }
        ]
    },
    {
        "name": "Rust",
        "tagline": "Your favorite language's favorite language.",
        "experience": [],
        "oss": []
    }
]
