/**
 * Created by web on 11/23/2016.
 */

function tipCalculate(slider,bill){
    var tip = document.getElementById('tip');
    var slideval = document.getElementById('slideval');
    var bill = document.getElementById(bill).value;
    var prcnt = slider * .01;
    var totaltip = document.getElementById('totaltip');

    tip.innerHTML = "$"+(bill * prcnt).toFixed(2);
    slideval.innerHTML = slider+ "%";
    totaltip.innerHTML = "$"+(bill+tip);


}