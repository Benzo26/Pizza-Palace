(document).ready(function(){
    $("table").hide();
    $(".finalorder-buttons").hide();
    $(".prompt-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".prompt-info h4").hide();

    $('.btn.order').click(function() {
        var sizeOfPizza = $(".size option:selected").val();
        var toppingsOfPizza = $(".toppings option:selected").val();
        var crustOfPizza = $(".crust option:selected").val();
        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        var order = 1;
        var grandTotal = 0;
    
    $("table").show();
    $(".finalorder-buttons").show();
    $(".btn.order").hide(); 
    
    }