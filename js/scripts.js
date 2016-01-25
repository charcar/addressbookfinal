function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = ['235 SE.Street Portland, OR'];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
