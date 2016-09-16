// node addResources.js

const fs = require('fs');

// grab each additional resources

let output = `---
layout: page
title: Resources
---

`;

const weeks = fs.readdirSync('./_lessons')
  .filter(name => name.match(/^week/));

const lessons = weeks.map(week => {
  return (fs.readdirSync('./_lessons/' + week)
    .filter(name => name.match(/^[0-9]/))
    .map(file => {
      const content = fs.readFileSync(`./_lessons/${week}/${file}`, 'utf8').split('\n');
      let r = false;
      let title = null;
      let resources = content.map(c => {
        if (r && c !== '\n') {
          output += c + '\n';
        }

        const titleMatch = c.match(/^title: ([A-Za-z0-9 ]+)/);

        if (titleMatch && titleMatch[1]) {
          title = titleMatch[1];
        }
        if (c.match(/^## Additional Resources/) || c.match(/^## Resources/)) {
          r = true;
          output += '### ' + title + '\n\n';
        }
        return file;
      });
      if (content) {
        output += '\n\n';
      }
    })
  );
});

fs.writeFileSync('./resources.md', output);