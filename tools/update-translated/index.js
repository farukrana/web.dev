/**
 * @fileoverview Task for updating `updated` YAML field.
 * Run this command while you have dirty files and it will update their
 * `updated` YAML field.
 *
 * Example: npm run updated && git commit -am 'Updated some blog posts'
 *
 */

const run = async () => {
  console.log('omg im running');
  console.log('process.argv', process.argv);
  console.log('files', process.argv.files);
};

run();
