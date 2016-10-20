//business logic

//front end logic
$(document).ready(function(){

  $("form#triangle").submit(function(event){
    var side1Input = parseInt($("input#side1").val());
    var side2Input = parseInt($("input#side2").val());
    var side3Input = parseInt($("input#side3").val());

    if (side1Input === side2Input && side2Input === side3Input) {
      $("#equilateral").show();
    }

    event.preventDefault();
  });

});
