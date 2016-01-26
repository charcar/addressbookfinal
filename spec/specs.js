describe('Contact', function() {
  it("creates a new contact with the given properties.", function() {
  var testContact = new Contact ("Mike","Lor","235 SE.Street Portland, OR");
  expect(testContact.firstName).to.equal("Mike");
  expect(testContact.lastName).to.equal("Lor");
  expect(testContact.address).to.eql(['235 SE.Street Portland, OR']);
  });

  it("adds the fullName method to a contact", function() {
  var testContact = new Contact ("Erik","Tolentino");
  expect(testContact.fullName()).to.equal("Erik Tolentino");
  });
});

describe('Address', function() {
  it("creates a new address with the given specification", function() {
    var testAddress = new Address("123 Main St", "City", "State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("City");
    expect(testAddress.state).to.equal("State");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Main St", "City", "State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, City, State");
  });
});
