describe('userInput', function() {
  it("is false for an input that is not a number.", function(){
  expect(userInput("a")).to.equal(false);
  });
});
