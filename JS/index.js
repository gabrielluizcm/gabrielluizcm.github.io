document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('abrirLicenca').addEventListener('click', abrePopup)
        document.getElementById('botaoLicenca').addEventListener('click', fechaPopup)

    function abrePopup() {
        document.getElementById('popupLicenca').style.display = 'block'
    }

    function fechaPopup() {
        document.getElementById('popupLicenca').style.display = 'none'
    }
})