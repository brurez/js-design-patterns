const Factory = require('./abstract').Factory;
const Pdf = require('./abstract').Pdf;
const Epub = require('./abstract').Epub;

test('Abstract factory', () => {
  const factory = new Factory();

  factory.register('pdf', Pdf);
  factory.register('epub', Epub);

  const pdf = factory.create('pdf');
  const epub = factory.create('epub');

  function factoryCreateRtf() {
    factory.create('rtf');
  }

  expect(factoryCreateRtf).toThrowError('you must register the type');

  function registerInvalidClass(){
    factory.register('invalid', function(){});
  }

  expect(registerInvalidClass).toThrowError('must have readfile function');

  expect(pdf.readFile('resume.pdf'))
    .toBe('This is a Pdf file named resume.pdf');

  expect(epub.readFile('resume.epub'))
    .toBe('This is a Epub file named resume.epub');

  expect(epub.getExtension()).toBe('epub');
});