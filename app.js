function fnCheckAll(Element){
    //console.log(Element.checked);
    for(let e of document.querySelectorAll('.checkbox>input[type=checkbox]'))
        e.checked = Element.checked;
}

function fnUpdateAmountItem(Element){
    //console.log(Element.value);
    var rowEl = Element.parentElement.parentElement;
    var num = Element.value;
    var price = rowEl.querySelectorAll('span')[2].innerText;
    var total = num*parseFloat(price);
    //console.log(parseFloat(rowEl.querySelectorAll('span')[2].innerText));
    rowEl.querySelectorAll('span')[3].innerText = total + "$";

    updateGrandTotal();
}

function DeleteItem(Element){
    Element.parentElement.parentElement.remove();
}
for(let e of document.getElementsByClassName('delete'))
    e.addEventListener('click',function(){DeleteItem(this)});

    let grandTotal = 0;

function updateGrandTotal() {
        grandTotal = 0;
        for (let row of document.querySelectorAll('.row')) {
            let totalSpan = row.querySelector('.total>span');
            if (totalSpan) {
                grandTotal += parseFloat(totalSpan.innerText);
            }

    }
document.getElementById('grandtotal').innerText = grandTotal + "$";
}

window.addEventListener('load', function() {
    updateGrandTotal();
});
