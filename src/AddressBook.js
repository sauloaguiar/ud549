function AddressBook() {
  this.contacts = new Array();
  this.initialComplete = false;
}

AddressBook.prototype.getContact = function(position) {
  return this.contacts[position];
};

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index, 1);
}

AddressBook.prototype.getInitialContacts = function(callback) {
  var self = this;

  setTimeout(function(){
    self.initialComplete = true;
    if (callback) {
      return callback();
    }
  }, 3);
}