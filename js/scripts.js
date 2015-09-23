function Ticket (movieName, userAge, showTime){
  this.movieName = movieName
  this.userAge = userAge
  this.showTime = showTime
}

Ticket.prototype.ticketInfo = function() {
  return this.movieName + ", " + this.userAge + ", " this.showTime;
}

function buyTicket(movieName,showTime,userAge) {
  this.movieName = movieName;
  this.showTime = showTime;
  this.userAge = userAge;
  this.ticketPrice = [];

  var ticketPrice = 15;
  if...

function resetFields() {
  $("input#moviename").val("");
  $("input#showtime").val("");
  $("input.userage").val("");

}
$(document).ready(function() {


  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("#moviename").val();

    var inputtedShowTime = $("#showtime").val();
    var inputtedUserAge = $("#userage").val();
    var newTicket = new Ticket(inputtedMovieName, inputtedShowTime, inputtedUserAge);

    $("ul#tickets").append("<li><span class='ticket'>" + newTicket.ticketInfo + "</span></li>");



      $("#show-tickets").show();
      $(".moviename").text(newTicket.moviename);
      $(".showtime").text(newTicket.showtime);
      $(".userage").text(newTicket.userage);

    var clear = new resetFields();
  });//closes form new-contact
