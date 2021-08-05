import appRootPath from 'app-root-path';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const distDir = join(appRootPath.path, 'dist');

(async () => {
  await mkdir(distDir, { recursive: true });
  await writeFile(join(distDir, 'index.json'), '{}');
})();
