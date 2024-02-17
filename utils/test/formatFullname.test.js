const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(123)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return proper fullname', () => {
    expect(formatFullname('JOHN DoE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('John DOE')).to.equal('John Doe');
    expect(formatFullname('john dOE')).to.equal('John Doe');
  });

  it('should return an error if arg length is 0', () => {
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if arg is not proper', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
    expect(formatFullname('   Doe')).to.equal('Error');
    expect(formatFullname('John Doe John')).to.equal('Error');
  });
});
