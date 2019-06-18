document.addEventListener('DOMContentLoaded', function () {
    window.onbeforeunload = confirmarSaida
    window.onload = responsiveness
    window.onresize = responsiveness

    function responsiveness()
    {
        var windowWidth = document.documentElement.clientWidth
        var windowHeight = document.documentElement.clientHeight
        console.log(windowWidth, windowHeight)

        if (windowWidth < windowHeight)
        {
            document.getElementById('coluna1').style.cssFloat = 'none'
            document.getElementById('coluna2').style.cssFloat = 'none'
            document.getElementById('coluna2').style.paddingTop = '10px'
            document.getElementById('coluna1').style.width = '65%'
            document.getElementById('coluna2').style.width = '65%'

        }
        else
        {
            document.getElementById('coluna1').style.cssFloat = 'left'
            document.getElementById('coluna2').style.cssFloat = 'right'
            document.getElementById('coluna2').style.paddingTop = '0'
            document.getElementById('coluna1').style.width = '45%'
            document.getElementById('coluna2').style.width = '45%'
        }
    }

    {   //Event Listeners
        document.getElementById('botaoTransferencia').addEventListener("click", realizarTransferencia)
        document.getElementById('botaoDeposito').addEventListener("click", realizarDeposito)
        document.getElementById('botaoPagamento').addEventListener("click", realizarPagamento)
        document.getElementById('confirmaJogadores').addEventListener("click", confirmarJogadores)
        document.getElementById('abrirLicenca').addEventListener('click', abrePopup)
        document.getElementById('botaoLicenca').addEventListener('click', fechaPopup)
        {   //botão de divs rebatíveis
            let i, rebativeis = document.getElementsByClassName('rebativel')
            for (i = 0; i < rebativeis.length; i++)
                rebativeis[i].addEventListener("click", rebateDiv)
        }
    }

    function copiaJg1() {
        document.getElementById('transfOrigem1').innerText = document.getElementById('nomej1').value
        document.getElementById('transfDest1').innerText = document.getElementById('nomej1').value
        document.getElementById('deposito1').innerText = document.getElementById('nomej1').value
        document.getElementById('pagamento1').innerText = document.getElementById('nomej1').value
    }

    function copiaJg2() {
        document.getElementById('transfOrigem2').innerText = document.getElementById('nomej2').value
        document.getElementById('transfDest2').innerText = document.getElementById('nomej2').value
        document.getElementById('deposito2').innerText = document.getElementById('nomej2').value
        document.getElementById('pagamento2').innerText = document.getElementById('nomej2').value
    }

    function copiaJg3() {
        document.getElementById('transfOrigem3').innerText = document.getElementById('nomej3').value
        document.getElementById('transfDest3').innerText = document.getElementById('nomej3').value
        document.getElementById('deposito3').innerText = document.getElementById('nomej3').value
        document.getElementById('pagamento3').innerText = document.getElementById('nomej3').value
    }

    function copiaJg4() {
        document.getElementById('transfOrigem4').innerText = document.getElementById('nomej4').value
        document.getElementById('transfDest4').innerText = document.getElementById('nomej4').value
        document.getElementById('deposito4').innerText = document.getElementById('nomej4').value
        document.getElementById('pagamento4').innerText = document.getElementById('nomej4').value
    }

    function copiaJg5() {
        document.getElementById('transfOrigem5').innerText = document.getElementById('nomej5').value
        document.getElementById('transfDest5').innerText = document.getElementById('nomej5').value
        document.getElementById('deposito5').innerText = document.getElementById('nomej5').value
        document.getElementById('pagamento5').innerText = document.getElementById('nomej5').value
    }

    function copiaJg6() {
        document.getElementById('transfOrigem6').innerText = document.getElementById('nomej6').value
        document.getElementById('transfDest6').innerText = document.getElementById('nomej5').value
        document.getElementById('deposito6').innerText = document.getElementById('nomej5').value
        document.getElementById('pagamento6').innerText = document.getElementById('nomej5').value
    }

    function realizarTransferencia() {
        let radios, origem, destino, valor, i
        document.getElementById('foiTransferido').style.display = 'inline-block'
        try {
            radios = document.getElementsByName('transferenciaOrigem')
            for (i = 0; i < radios.length; i++)
                if (radios[i].checked)
                    origem = radios[i].value
            radios = document.getElementsByName('transferenciaDestino')
            for (i = 0; i < radios.length; i++)
                if (radios[i].checked)
                    destino = radios[i].value
            valor = parseInt(document.getElementById('valorTransf').value)
            if (valor <= 0)
                throw 'Valor de transferência nulo ou negativo!'
            else
                if (origem == destino)
                    throw 'Jogadores de origem e destino iguais!'
                else {
                    document.getElementById(destino).innerHTML = parseInt(document.getElementById(destino).innerHTML) + valor
                    document.getElementById(origem).innerHTML = parseInt(document.getElementById(origem).innerHTML) - valor
                    document.getElementById('foiTransferido').innerHTML = 'Transferência realizada com sucesso!'
                }
        }
        catch (err) {
            document.getElementById('foiTransferido').innerHTML = err + ' Transferência não realizada'
        }
        finally {
            window.setTimeout(limpaConfirmacao, 2000)
        }
    }

    function realizarDeposito() {
        let radio, destino, i, valor = parseInt(document.getElementById('valorDeposito').value)
        radio = document.getElementsByName('deposito')
        document.getElementById('foiDepositado').style.display = 'inline-block'
        for (i = 0; i < radio.length; i++)
            if (radio[i].checked) {
                destino = radio[i].value
                document.getElementById(destino).innerHTML = parseInt(document.getElementById(destino).innerHTML) + valor
                document.getElementById('foiDepositado').innerHTML = "Deposito realizado com sucesso!"
                break
            }
        window.setTimeout(limpaConfirmacao, 2000)
    }

    function realizarPagamento() {
        let radio, origem, i, valor = parseInt(document.getElementById('valorPagamento').value)
        radio = document.getElementsByName('pagamento')
        document.getElementById('foiPago').style.display = 'inline-block'
        for (i = 0; i < radio.length; i++)
            if (radio[i].checked) {
                origem = radio[i].value
                document.getElementById(origem).innerHTML = parseInt(document.getElementById(origem).innerHTML) - valor
                document.getElementById('foiPago').innerHTML = "Pagamento realizado com sucesso!"
                break
            }
        window.setTimeout(limpaConfirmacao, 2000)
    }

    function confirmarSaida() {
        return 0
    }

    function confirmarJogadores(evt) {
        let radiosTransfOrigem, radiosTransfDest, radiosDep, radiosPag, rebativeis, i


        rebativeis = document.getElementsByClassName('rebativel')
        for(i = 0; i < rebativeis.length; i++)
        {
            rebativeis[i].disabled = false
        }

        radiosTransfOrigem = document.getElementsByName('transferenciaOrigem')
        radiosTransfDest = document.getElementsByName('transferenciaDestino')
        radiosDep = document.getElementsByName('deposito')
        radiosPag = document.getElementsByName('pagamento')



        {   //Verificando as entradas de texto e desativando seus correspondentes se vazias
            if (document.getElementById('nomej1').value == '') {
                document.getElementById('nomej1').disabled = true
                radiosTransfOrigem[0].disabled = true
                radiosTransfDest[0].disabled = true
                radiosDep[0].disabled = true
                radiosPag[0].disabled = true
            }
            else
            {
                document.getElementById('valorJogador1').innerHTML = 2458
                copiaJg1()
            }

            if (document.getElementById('nomej2').value == '') {
                document.getElementById('nomej2').disabled = true
                radiosTransfOrigem[1].disabled = true
                radiosTransfDest[1].disabled = true
                radiosDep[1].disabled = true
                radiosPag[1].disabled = true
            }
            else
            {
                document.getElementById('valorJogador2').innerHTML = 2458
                copiaJg2()
            }

            if (document.getElementById('nomej3').value == '') {
                document.getElementById('nomej3').disabled = true
                radiosTransfOrigem[2].disabled = true
                radiosTransfDest[2].disabled = true
                radiosDep[2].disabled = true
                radiosPag[2].disabled = true
            }
            else
            {
                document.getElementById('valorJogador3').innerHTML = 2458
                copiaJg3()
            }

            if (document.getElementById('nomej4').value == '') {
                document.getElementById('nomej4').disabled = true
                radiosTransfOrigem[3].disabled = true
                radiosTransfDest[3].disabled = true
                radiosDep[3].disabled = true
                radiosPag[3].disabled = true
            }
            else
            {
                document.getElementById('valorJogador4').innerHTML = 2458
                copiaJg4()
            }

            if (document.getElementById('nomej5').value == '') {
                document.getElementById('nomej5').disabled = true
                radiosTransfOrigem[4].disabled = true
                radiosTransfDest[4].disabled = true
                radiosDep[4].disabled = true
                radiosPag[4].disabled = true
            }
            else
            {
                document.getElementById('valorJogador5').innerHTML = 2458
                copiaJg5()
            }

            if (document.getElementById('nomej6').value == '') {
                document.getElementById('nomej6').disabled = true
                radiosTransfOrigem[5].disabled = true
                radiosTransfDest[5].disabled = true
                radiosDep[5].disabled = true
                radiosPag[5].disabled = true
            }
            else
            {
                document.getElementById('valorJogador6').innerHTML = 2458
                copiaJg6()
            }
        }
        evt.target.disabled = true
    }

    function limpaConfirmacao() {
        let i, botoes
        botoes = document.getElementsByClassName('confirmacao')
        for (i = 0; i < botoes.length; i++)
            botoes[i].style.display = 'none'
    }

    function rebateDiv(evt)
    {
        evt.target.classList.toggle('ativo')
        div = evt.target.nextElementSibling
        if (div.style.maxHeight)
        {
            div.style.maxHeight = null
            div.style.padding = '0'
        }
        else
        {
            div.style.maxHeight = div.scrollHeight + 'px'
            div.style.padding = '0 16px 0 16px'
        }
    }

    function abrePopup()
    {
        document.getElementById('popupLicenca').style.display = 'block'
    }

    function fechaPopup()
    {
        document.getElementById('popupLicenca').style.display = 'none'
    }
});