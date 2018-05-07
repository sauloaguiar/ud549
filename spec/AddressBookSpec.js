describe("Address Book", function() {
  var addressBook, thisContact;

  beforeEach(function(){
    addressBook = new AddressBook(),
    thisContact = new Contact();
  });

  it("should add a contact to the book", function() {
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it("should be able to delete a contact", function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

describe("Async Address Book", function() {
  var addressBook;
  beforeEach(function(done) {
    addressBook = new AddressBook();
    addressBook.getInitialContacts(function() {
      done();
    });
  });

  it("should grab initial contacts", function(done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  })
});