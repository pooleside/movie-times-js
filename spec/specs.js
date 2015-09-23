describe('Ticket', function() {
  it("creates a new regular price ticket", function() {
    var testTicket = new Ticket("StarWars");
    expect(testTicket.movieName).to.equal("StarWars", "25", "7:00pm");
    expect(testTicket.userAge).to.equal("25");
    expect(testTicket.showTime).to.equal("7:00pm");
  });
});
