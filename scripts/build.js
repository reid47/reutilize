const path = require('path');
const fs = require('fs-extra');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');

const sourceDir = (fileName = '') => path.resolve(__dirname, `../src/${fileName}`);
const distDir = (fileName = '') => path.resolve(__dirname, `../dist/${fileName}`);

async function buildModule({ fileName, external }) {
  const bundle = await rollup({
    input: sourceDir(fileName),
    plugins: [babel()],
    external
  });

  await bundle.write({
    file: distDir(fileName),
    format: 'cjs',
    interop: false
  });
}

async function buildIndex({ sourceFiles }) {
  const tempFile = sourceDir(`index.${Date.now()}.temp.js`);

  const contents = sourceFiles
    .map(fileName => {
      const moduleName = fileName.replace('.js', '');
      return `export { default as ${moduleName} } from './${fileName}';`;
    })
    .join('\n');

  await fs.writeFile(tempFile, contents, 'utf8');

  await rollup({ input: tempFile, plugins: [babel()] }).then(bundle =>
    bundle.write({
      file: distDir('index.js'),
      format: 'cjs'
    })
  );

  await rollup({ input: tempFile, plugins: [babel()] }).then(bundle =>
    bundle.write({
      file: distDir('index.es.js'),
      format: 'es'
    })
  );

  await fs.unlink(tempFile);
}

async function build() {
  await fs.remove(distDir());

  const sourceFiles = (await fs.readdir(path.resolve(__dirname, '../src'))).filter(
    fileName => !fileName.endsWith('.temp.js')
  );

  const external = sourceFiles.map(sourceDir);
  await sourceFiles.map(fileName => buildModule({ fileName, external }));
  await buildIndex({ sourceFiles });
}

build();
