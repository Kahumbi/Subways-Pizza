//Buisness Logic

function myOrder (size, crust, toppings) {
    this.size= size;
    this.crust = crust;
    this.toppings = toppings;
  }  
  myOrder.prototype.fullOrder = function() {
    return this.size + " " + this.crust + " " + this.toppings;
  }
  $("ul#myOrder").append("<li><span class='order'>" + newOrder.fullOrder() + "</span></li>");



  var sizeOfPizza = $(".size option:selected").val();
  var toppingsOfPizza = $(".toppings option:selected").val();
  var crustOfPizza = $(".crust option:selected").val();
  var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
  var order = 1;
  var grandTotal = 0;

  

 //user interface
 $(container).ready()  

