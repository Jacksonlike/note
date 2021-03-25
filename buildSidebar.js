import fs from 'fs';
import path from 'path';

const ignoreDirs = [/img*/, 'node_modules', /\..+/, 'demo'];
const ignoreFiles = ['sidebar.md', 'README.md'];
let result = '';
let tabSize = -1;

const generateOneTag = (name, filePath) => {
  let tag = Array.from({ length: tabSize > 0 ? tabSize : 0 }, (_) => '  ').join(
    ''
  );
  if (filePath) {
    const relativePath = path
      .relative('.', filePath)
      .replace(/\\/g, '/')
      .replace('.md', '');
    tag += `- [${name}](${relativePath || '/'})\n`;
  } else {
    tag += `- ${name}\n`;
  }
  result += tag;
};

const testNames = (rules, name) =>
  rules.some((item) => {
    if (typeof item === 'string') {
      return item === name;
    }
    return item.test(name);
  });

const fileHandle = (filePath) => {
  const name = path.basename(filePath);
  if (!name.endsWith('.md') || testNames(ignoreFiles, name)) {
    return;
  }
  generateOneTag(name.split('.')[1], filePath);
};

const dirHandle = (dirPath) => {
  const name = path.basename(dirPath);
  if (testNames(ignoreDirs, name)) {
    return;
  }

  const files = fs.readdirSync(dirPath);
  if (files.includes('README.md')) {
    generateOneTag(name === '.' ? '前言' : name, dirPath);
  } else {
    generateOneTag(name);
  }

  tabSize += 1;
  files
    .map((p) => {
      const resolvedPath = path.resolve(path.join(dirPath, p));
      return [resolvedPath, fs.statSync(resolvedPath)];
    })
    .sort((a, b) => {
      if (a[1].isFile() === b[1].isFile()) {
        return a[0] - b[0];
      }
      return a[1].isFile() - b[1].isFile();
    })
    .forEach((item) => {
      if (item[1].isFile()) {
        fileHandle(item[0]);
      } else {
        dirHandle(item[0]);
      }
    });
  tabSize -= 1;
};

dirHandle('./');
fs.writeFileSync('sidebar.md', result);
