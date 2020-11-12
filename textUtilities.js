var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase(title) {
  return title
    .split(' ')
    .map((el) => {
      return el[0].toUpperCase() + el.substring(1);
    })
    .join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');

// expect for our purpose lastly
expect(titleCase('the great mouse detective')).to.equal(
  'The Great Mouse Detective'
);
