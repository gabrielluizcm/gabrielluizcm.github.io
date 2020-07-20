
$(".icone").mouseenter(function(){
    $(this).animate({
        fontSize: "50px",
        marginBottom: '-10px'
    }, 50);
}).mouseleave(function(){
    $(this).animate({
        fontSize: '40px',
        marginBottom: 0
    }, 50);
});

$('#botaoModal').click(function() {
    $('#modal0').modal('show')
})

proxSextou = new Date.today().next().friday().at('6pm').getTime()

setInterval(function () {
    dataAtual = new Date().getTime()

    diferenca = proxSextou - dataAtual

    dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    if (Date.today().is().weekday())
        if (Date.today().is().friday() ) {
            if (diferenca <= 0) {
                $('#countdown').html('Já sextou, irmão! Tá liberadah a badernah!')
            }
            else {
                if (horas > 1)
                    $('#countdown').html('Quase lá! Faltam só ' + horas + " horas, " + minutos + " minutos e " + segundos + " segundos! (Sextou é válido após horário comercial")
                else if (horas == 1)
                    $('#countdown').html('Quase lá! Falta só ' + horas + " hora, " + minutos + " minutos e " + segundos + " segundos! (Sextou é válido após horário comercial")
                else
                    $('#countdown').html('Quase lá! Faltam só ' + minutos + " minutos e " + segundos + " segundos! (Sextou é válido após horário comercial")
            }
        }
        else
            if (dias > 1)
                $('#countdown').html(dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos")
            else
                $('#countdown').html(dias + " dia, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos")
    else
        $('#countdown').html('Bah meu é fim de semana, bora curtir! Segunda-feira eu volto a contar!')
}, 1000)

