/**
 * @fileoverview Task for updating `updated` YAML field.
 * Run this command while you have dirty files and it will update their
 * `updated` YAML field.
 *
 * Example: npm run updated && git commit -am 'Updated some blog posts'
 *
 */

// function isTranslatedFile(fileName) {
//   return
// }

const run = async () => {
  console.log('omg im running');
  console.log('process.argv', process.argv;
  console.log('process.argv0', process.argv.slice(2)[0]);

  // console.log('files', argv.files);
  console.log('typeof', typeof process.argv.slice(2)[0]);

  // const translatedfiles = process.argv.files.filter(isTranslatedFile);
  // console.log('files', process.argv.files);
};

run();
