$(document).ready(function(){
    document.getElementById('nomej1').addEventListener("input", copiaJg1)
    document.getElementById('nomej2').addEventListener("input", copiaJg2)
    document.getElementById('botaoTransferencia').addEventListener("click", realizarTransferencia)

    function copiaJg1(evt)
    {
        document.getElementById('transfOrigem1').innerText = evt.target.value
        document.getElementById('transfDest1').innerText = evt.target.value
    }

    function copiaJg2(evt)
    {
        document.getElementById('transfOrigem2').innerText = evt.target.value
        document.getElementById('transfDest2').innerText = evt.target.value
    }

    function realizarTransferencia()
    {
        alert('entrou')
        document.getElementById('foiTransferido').innerHTML = ''
        try
        {
            if (document.getElementById('transferenciaOrigem') == null) throw 'Jogador de origem não selecionado!'
            //let origem = document.getElementById('transferenciaOrigem').value
        }
        catch(err)
        {
            document.getElementById('foiTransferido').innerHTML = err + ' Transferência não realizada'
        }
    }
    
});