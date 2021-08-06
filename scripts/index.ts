import allNodeVersions from 'all-node-versions';
import appRootPath from 'app-root-path';
import { mkdir, writeFile } from 'fs/promises';
import md5file from 'md5-file';
import { join } from 'path';

const distDir = join(appRootPath.path, 'dist');
const distFile = join(distDir, 'index.json');

(async () => {
  const data = JSON.stringify(await allNodeVersions());
  await mkdir(distDir, { recursive: true });
  await writeFile(distFile, data);
  await writeFile(`${distFile}.md5`, await md5file(distFile));
})();
