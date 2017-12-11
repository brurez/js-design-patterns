const Factory = require('./simple');

test('Simple Factory', () => {
  const factory = new Factory();

  const pdf = factory.create('pdf');
  expect(pdf.readFile('resume.pdf'))
    .toBe('This is a Pdf file named resume.pdf');

  const epub = factory.create('epub');
  expect(epub.readFile('resume.epub'))
    .toBe('This is a Epub file named resume.epub');

  expect(epub.getExtension()).toBe('epub');

});