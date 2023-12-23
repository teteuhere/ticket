function comprar(){
    let ticket = document.getElementById('tipo-ingresso');
    let quantity = parseInt(document.getElementById('qtd').value);
    if (isNaN(quantity) || quantity <= 0) {
        alert('Please, the amount of ticket need to be a positive number.');
        return
    }
    if(ticket.value == 'pista'){
        buyFloor(quantity);
    } else if (ticket.value == 'inferior'){
        buyInf(quantity);
    } else{
        buySup(quantity);
    }
}

function buyFloor(quantity){
    let qtdFloor = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantity > qtdFloor){
        alert('Quantity isnt avaliable');
    } else { 
        qtdFloor = qtdFloor - quantity;
        document.getElementById('qtd-pista').textContent = qtdFloor;
        alert('Quantity is avaliable, transaction finished');
    }
}

function buyInf(quantity){
    let qtdInf = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantity > qtdInf){
        alert('Quantity isnt avaliable');
    } else { 
        qtdInf = qtdInf - quantity;
        document.getElementById('qtd-inferior').textContent = qtdInf;
        alert('Quantity is avaliable, transaction finished');
    }
}

function buySup(quantity){
    let qtdSup = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantity > qtdSup){
        alert('Quantity isnt avaliable');
    } else { 
        qtdSup = qtdSup - quantity;
        document.getElementById('qtd-superior').textContent = qtdSup;
        alert('Quantity is avaliable, transaction finished');
    }
}