function myFunction() {
    var bill = prompt("Please enter the bil amount");

    if (bill != null) {
        var percentage = prompt("Please enter the percentage");
        if (percentage != null){
            var prcnt = percentage * .01;
            var tip = bill * prcnt;
            var gtotal = tip+parseInt(bill);
            var total = prompt("The total of the tip is " +tip +"$" +"\nAnd the grand total is " +gtotal +"$" +"\nDo you want to calculate a new tip ?");
            var yes = 0;
            var no = 1;
            if (total=== "yes"){
                prompt("I'm lazy , press the TRY button")

            }
            else{
                alert ("If you want to start again press the try button ")
            }


            }
            }









}