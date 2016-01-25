function Contact(firstName, lastName, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = ['235 SE.Street Portland, OR'];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  });
});


});
