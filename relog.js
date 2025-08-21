
document.addEventListener('DOMContentLoaded', () => {


    function relog() {
        let datos = new Date();
        let hora = datos.getHours().toString().padStart(2, 0);
        let minuto = datos.getMinutes().toString().padStart(2, 0);
        let segundo = datos.getSeconds().toString().padStart(2, 0);

        if(datos.getHours()>=12){
            formato = "PM";
        }else{
            formato ="AM";
        }
        hora = hora % 12;
        hora = hora ? hora : 12;

        document.getElementById('relog').innerHTML = `${hora}:${minuto}:${segundo}:  ${formato}`;
    }

    setInterval(relog, 1000);
    relog();
})