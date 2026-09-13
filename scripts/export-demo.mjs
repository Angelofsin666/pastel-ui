import {writeFile} from 'node:fs/promises';
import {examples} from '../demo/fixtures.js';
await writeFile('docs/examples.json',JSON.stringify(examples,null,2));
