import * as mdi from '@mdi/js';
import {readFile,readdir,writeFile} from 'node:fs/promises';
const files=['src/profiles.js','demo/fixtures.js',...(await readdir('src/legacy')).filter(f=>f.endsWith('.js')).map(f=>'src/legacy/'+f)];
const keys=new Set(['mdi:devices','mdi:air-conditioner']);for(const f of files)for(const match of (await readFile(f,'utf8')).matchAll(/mdi:[a-z0-9-]+/g))keys.add(match[0]);
const icons={};for(const key of keys){const name='mdi'+key.slice(4).split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('');if(mdi[name])icons[key]=mdi[name]}
await writeFile('demo/icons.json',JSON.stringify(icons));
