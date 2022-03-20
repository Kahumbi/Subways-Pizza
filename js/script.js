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



 var size = (small, medium, larger)
 var crust = (stuffed, glutenFree, crispy)
 var toppings= (olives, cheese, pepperoni)

 //user interface
 $(container).ready()  

 