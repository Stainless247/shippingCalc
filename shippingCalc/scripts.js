// document.querySelector("#displayAnswer").addEventListener('click', checkTotal)

function checkTotal() {
    cst = document.querySelector('#cost').value
    loc = document.querySelector('#local').value
    total = parseInt(cst) + parseInt(loc) + 30
    document.querySelector('#displayAnswer').innerText = total
    naira = total * 700
    document.querySelector('#nairaValue').innerText = naira
}