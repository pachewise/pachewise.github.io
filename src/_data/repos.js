// original source: https://github.com/maxboeck/resume/blob/9c177fcb8abc315514e57e2701152871a529e2be/src/data/repositories.js
import Fetch from "@11ty/eleventy-fetch";

const GITHUB_USERNAME = 'pachewise';

export default async function () {
    try {
        console.log('Fetching GitHub repos...');
        const repos = await Fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/starred?per_page=5&sort=stars&direction=desc`,
          {
            duration: "1d",
            type: "json",
          }
        );
        return repos;
    } catch (e) {
        console.log('Failed fetching GitHub repos')
        return [];
    }
}
