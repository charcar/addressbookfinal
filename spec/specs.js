describe('Contact', function() {
  it("creates a new contact with the given properties.", function(){
  var testContact = new Contact ("Mike","Lor","235 SE.Street Portland, OR");
  expect(testContact.firstName).to.equal("Mike");
  expect(testContact.lastName).to.equal("Lor");
  expect(testContact.addresses).to.eql(['235 SE.Street Portland, OR']);
  });

  it("adds the fullName method to a contact", function(){
  var testContact = new Contact ("Erik","Tolentino");
  expect(testContact.fullName()).to.equal("Erik Tolentino");
  });

});
