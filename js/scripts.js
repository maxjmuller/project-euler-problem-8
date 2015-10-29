// def largest_product (string):
//     digits = [int(x) for x in list(string)]
//
//     index = 0
//     highest_product = 0
//     while index + 12 < len(digits):
//         j = 0
//         product = 1
//
//         while product != 0 and j <= 12:
//             product *= digits[index + j]
//             j += 1
//
//         if product == 0:
//             index += j
//             continue
//         elif product > highest_product:
//             highest_product = product
//
//         index += 1
//
//     return highest_product
//
// print largest_product('73167'


var largestProduct = function(adjacent,series) {
  var digits = series.split("").map(Number);

  var highestProduct = 0;
  var highestIndex = 0;
  for (var index = 0; index <= digits.length-adjacent; index += 1) {
    var product = 1;
      for (var j = 0; j <= adjacent-1 ; j += 1) {
        product *= digits[index+j]
      }
    if (product > highestProduct) {
      var highestProduct = product;
      var highestIndex = index;
    }
  }
  debugger;
  return [highestProduct,highestIndex];
}



$(document).ready(function() {
  $("form#solver").submit(function(event) {
    var series = $("input#series").val();
    var adjacent = parseInt($("input#adjacent").val());
    var answer = largestProduct(adjacent,series);
    var highestProduct = answer[0];
    var highestIndex = answer[1];
    $("span#adjacent").text(adjacent);
    $("span#string").text(highestIndex+1);
    $("span#highestProduct").text(highestProduct);

    $("#result").show();
    event.preventDefault();
  });
});
