//business logic
var triangle = function(side1,side2,side3){
  if (side1 === side2 && side2 === side3) {
  return "equilateral";
} else if (side1 === side2 || side2 === side3 || side1===side3) {
  return "isosceles";
}
}

/*var isosceles = function(side1,side2,side3){
  if (side1Input === side2Input || side2Input === side3Input || side1Input===side3Input)
  return true;
};*/


//front end logic
$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var side1Input = parseInt($("input#side1").val());
    var side2Input = parseInt($("input#side2").val());
    var side3Input = parseInt($("input#side3").val());

    var results = triangle(side1Input,side2Input,side3Input);
    $("#output p").text(results);


    event.preventDefault();
  });

});

// if (side1Input === side2Input && side2Input === side3Input) {
//   $("#equilateral").show();
// } else if (side1Input === side2Input || side2Input === side3Input || side1Input === side3Input) {
//   $("#isosceles").show();
// }
