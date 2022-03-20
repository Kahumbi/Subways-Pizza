//Buisness Logic

 function pizza (size, crust, toppings, total, orderNo) {
    this.size= size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
    this.orderNo = orderNo;
}  
 




  $('.zoom').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    order = order + 1;
    grandTotal = grandTotal + total;
 });  
    var newPizza = new pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

  pizza.prototype.fullOrder = function() {
    return this.size + " " + this.crust + " " + this.toppings;
  }
  $("ul#pizza").append("<li><span class='order'>" + newOrder.fullOrder() + "</span></li>");



  



//user interface
 $(container).ready()  

