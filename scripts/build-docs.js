const path = require('path');
const fs = require('fs-extra');
const doctrine = require('doctrine');

const jsDocRegex = /\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//;
const sourceDir = (fileName = '') => path.resolve(__dirname, `../src/${fileName}`);
const readmePath = path.resolve(__dirname, '../README.md');

const replaceApiDocs = (readme, newDocs) => {
  const linesBefore = [];
  const linesAfter = [];
  let matchStart, matchEnd;
  readme.split('\n').forEach(line => {
    if (!matchStart) {
      linesBefore.push(line);
      if (line === '<!--BEGIN_API_DOCS-->') {
        matchStart = true;
      }
    } else if (!matchEnd) {
      if (line === '<!--END_API_DOCS-->') {
        matchEnd = true;
        linesAfter.push(line);
      }
    } else {
      linesAfter.push(line);
    }
  });
  return [...linesBefore, newDocs, ...linesAfter].join('\n');
};

async function buildDocs() {
  const sourceFiles = (await fs.readdir(path.resolve(__dirname, '../src'))).filter(
    fileName => !fileName.endsWith('.temp.js') && !fileName.endsWith('.test.js')
  );

  const docs = (await Promise.all(
    sourceFiles.sort().map(async fileName => {
      const moduleName = fileName.replace('.js', '');
      const lines = [`### \`${moduleName}\``, `[source](/src/${fileName})`];
      const fileContents = (await fs.readFile(sourceDir(fileName))).toString();
      const jsDoc = (fileContents.match(jsDocRegex) || {})[0];
      if (jsDoc) {
        const { description, tags } = doctrine.parse(jsDoc, { unwrap: true });
        lines.push(description, '');
        const example = tags.find(tag => tag.title === 'example');
        if (example) lines.push('```js', example.description, '```');
      }
      return lines.join('\n');
    })
  )).join('\n\n');

  const readme = (await fs.readFile(readmePath)).toString();
  const newReadmeContents = replaceApiDocs(readme, docs);
  await fs.writeFile(readmePath, newReadmeContents, 'utf8');
}

buildDocs();
