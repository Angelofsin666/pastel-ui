import {build} from 'esbuild';
import {mkdir, copyFile} from 'node:fs/promises';
await mkdir('dist', {recursive:true});
await build({entryPoints:['src/index.js'],bundle:true,format:'esm',target:['es2020'],outfile:'dist/pastel-ui.js',minify:true,legalComments:'eof'});
await copyFile('src/legacy/lawn-mower.png','dist/lawn-mower.png');
await copyFile('src/legacy/ac-unit.svg','dist/ac-unit.svg');
console.log('Built dist/pastel-ui.js and assets');
