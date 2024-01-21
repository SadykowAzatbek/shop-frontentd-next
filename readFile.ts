import {promises as fs} from 'fs';

const fileName = './test.json';

const run = async () => {
  try {
    const fileContents = await fs.readFile(fileName);
    const result = JSON.parse(fileContents.toString());
    console.log('result: ', result);
  } catch (err) {
    console.error(err);
  }
};

void run();