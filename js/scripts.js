// business logic
function ListItem(task) {
  this.userTask = task;
}

// user interface logic

$(function() {
  $("form#to-do-list").submit(function(event) {
    event.preventDefault();

    // takes user input from form
    var newInput = $("input#task").val();

    // create objects from form values
    var newListItem = new ListItem(newInput);

    // adds new task to results list on the right side of screen
    $("ol#result-list").append("<li> <span class='return'>" + newListItem.userTask + "</span><span class='glyphicon glyphicon-remove'></span></li>");

    // on click crossout text
    $(".return").last().click(function(){
      $(this).toggleClass("crossout");
    });

    //click x to remove list item
    $(".glyphicon-remove").last().click(function() {
      $(this).parent().remove();
    });

    $("#deathlist").fadeIn(3000);
  });

});
