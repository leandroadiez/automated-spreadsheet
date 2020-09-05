
const linebreak = document.createElement('br');

// INITIALIZATION
function init(){
    addLabelAgregados();
    addAsignado();
    addComplejidad();
    addDeploys();
    addTiempoEstimado();
    addGrabarJSON();
    document.getElementsByClassName('logo')[0].classList.add('spinspinspin');
}


// COMPONENTS ADDED BY TEMPERIES SPREADSHEET AUTOMATION
function addLabelAgregados(){
    const labelAgregados = document.createElement('h4');
    labelAgregados.innerText = 'Campos agregados por Temperies Spreadsheet Automation:';
    document.querySelector('#divLeft').appendChild(labelAgregados);
    document.querySelector('#divLeft').appendChild(linebreak);
}
function addAsignado(){
    console.log("Agregando asignado");

    const divAsignado = document.createElement('div');
    const asignado = document.createElement('input');
    const labelAsignado = document.createElement('label');

    asignado.id = 'idAsignado';
    asignado.type = 'text';
    labelAsignado.innerText = 'Nombre y apellido: ';
    divAsignado.class = "camposAgregados";
    asignado.placeholder = '...';

    divAsignado.appendChild(labelAsignado);
    divAsignado.appendChild(asignado);
    document.querySelector('#divLeft').appendChild(labelAsignado);
    document.querySelector('#divLeft').appendChild(asignado);
    //document.querySelector('#divLeft').appendChild(linebreak);
}
function addGrabarJSON(){
    let grabarJSON = document.createElement('button');
    grabarJSON.id = 'idGrabarJSON';
    grabarJSON.innerText = 'Grabar JSON';
    document.querySelector('#divBotones').appendChild(grabarJSON);
    grabarJSON.addEventListener('click', setJSON);
}
function addComplejidad(){
    console.log("Agregando extra fields");

    const divComplejidad = document.createElement('div');
    const labelComplejidad = document.createElement('label');
    const selectComplejidad = document.createElement('select');
    const optionSeleccione = document.createElement('option');
    const optionMuyBaja = document.createElement('option');
    const optionBaja = document.createElement('option');
    const optionMedia = document.createElement('option');
    const optionAlta = document.createElement('option');
    const optionMuyAlta = document.createElement('option');
    
    divComplejidad.class = "camposAgregados";
    
    labelComplejidad.innerText = 'Complejidad';

    selectComplejidad.id = 'idComplejidad';
    optionSeleccione.innerText = 'Seleccione...';
    optionMuyBaja.innerText = 'Muy baja';
    optionBaja.innerText = 'Baja';
    optionMedia.innerText = 'Media';
    optionAlta.innerText = 'Alta';
    optionMuyAlta.innerText = 'Muy alta';

    divComplejidad.appendChild(labelComplejidad);
    divComplejidad.appendChild(selectComplejidad);

    selectComplejidad.appendChild(optionSeleccione);
    selectComplejidad.appendChild(optionMuyBaja);
    selectComplejidad.appendChild(optionBaja);
    selectComplejidad.appendChild(optionMedia);
    selectComplejidad.appendChild(optionAlta);
    selectComplejidad.appendChild(optionMuyAlta);
    
    document.querySelector('#divLeft').appendChild(divComplejidad);
    //document.querySelector('#divLeft').appendChild(linebreak);
}
function addDeploys(){
    console.log("Agregando deploys");

    const divDeploys = document.createElement('div');
    const cantDeploys = document.createElement('input');
    const labelDeploys = document.createElement('label');

    cantDeploys.id = 'idDeploys';
    cantDeploys.type = 'number';
    labelDeploys.innerText = 'Nº Deploys';
    divDeploys.class = "camposAgregados";
    cantDeploys.placeholder = '...';

    divDeploys.appendChild(labelDeploys);
    divDeploys.appendChild(cantDeploys);
    document.querySelector('#divLeft').appendChild(labelDeploys);
    document.querySelector('#divLeft').appendChild(cantDeploys);
    document.querySelector('#divLeft').appendChild(linebreak);
}
function addTiempoEstimado(){
    console.log("Agregando tiempo estimado");

    const divTiempoEstimado = document.createElement('div');
    const tiempoEstimado = document.createElement('input');
    const labelTiempoEstimado = document.createElement('label');

    // tiempoEstimado.step = '0.25';
    tiempoEstimado.id = 'idTiempoEstimado';
    tiempoEstimado.type = 'text';
    labelTiempoEstimado.innerText = 'Tiempo estimado: ';
    divTiempoEstimado.class = "camposAgregados";
    tiempoEstimado.placeholder = '...';

    divTiempoEstimado.appendChild(labelTiempoEstimado);
    divTiempoEstimado.appendChild(tiempoEstimado);
    document.querySelector('#divLeft').appendChild(labelTiempoEstimado);
    document.querySelector('#divLeft').appendChild(tiempoEstimado);
    //document.querySelector('#divLeft').appendChild(linebreak);
}


// GETTERS & SETTERS
function getProductoCliente(){
    var proyecto = document.getElementById('selProyecto');
    var valueProyecto = proyecto.options[proyecto.selectedIndex].text;
    return valueProyecto;
}
function getModulo(){
    var modulos = document.getElementById('selModulos');
    var valueModulos = modulos.options[modulos.selectedIndex].text;
    return valueModulos;
}
function getAsignado(){
    var usuario = document.getElementById('idAsignado').value;
    return usuario;
}
function getMantisTask(){
    var mantisTask = document.getElementById('selMantisTasks');
    var valueMantisTask = mantisTask.options[mantisTask.selectedIndex].text;
    return valueMantisTask;
}
function getDescription(){
    var description = document.getElementById('txtTarea').value;
    return description;
}
function getFechaInicio(){
    var fechaInicio = document.getElementById('txtFecha').value;
    return fechaInicio;
}
function getHoras(){
    var horas = document.getElementById('selectHoras');
    var valueHoras = horas.options[horas.selectedIndex].text;

    var minutos = document.getElementById('selectMinutos');
    var valueMinutos = minutos.options[minutos.selectedIndex].text;

    var tiempo = parseInt(valueHoras, 10) + (parseInt(valueMinutos, 10)/60);
    return tiempo;
}
function getComplejidad(){
    var complejidad = document.getElementById('idComplejidad');
    var valueComplejidad = complejidad.options[complejidad.selectedIndex].text;
    return valueComplejidad;
}
function getDeploys(){
    var deploys = document.getElementById('idDeploys').value;
    return deploys;
}
function getTiempoEstimado(){
    var tiempoEstimado = document.getElementById('idTiempoEstimado').value;
    return tiempoEstimado;
}
function setJSON(){
    //Falta hacer que incluya TODOS los campos que se ingresaron en la tarea
    var clave = Date.now();
    //console.log(clave);

    var tareaNueva = {
        ProductoCliente : getProductoCliente(),
        Modulo : getModulo(),
        Asignado : getAsignado(),
        MantisTask : getMantisTask(),
        Description : getDescription(),
        FechaInicio : getFechaInicio(),
        Horas : getHoras(),
        Complejidad : getComplejidad(),
        Deploys : getDeploys(),
        TiempoEstimado : getTiempoEstimado()
    }
    
    localStorage.setItem(clave, JSON.stringify(tareaNueva));
    //console.log(JSON.parse(localStorage.getItem(clave)));


    
    // tareas.push(tareaNueva);
    // console.log("Proyecto seleccionado: " + tareas[0].ProductoCliente);
    // console.log("Modulo seleccionado: " + tareas[0].Modulo);
    // console.log("Usuario ingresado: " + tareas[0].Asignado);
    // console.log("Mantis Task seleccionada: " + tareas[0].MantisTask);
    // console.log("Descripcion ingresada: " + tareas[0].Description);
    // console.log("Fecha inicio ingresada: " + tareas[0].FechaInicio);
    // console.log("Horas ingresadas: " + tareas[0].Horas);
    // console.log("Complejidad ingresada: " + tareas[0].Complejidad);
    // console.log("Deploys ingresados: " + tareas[0].Deploys);
    // console.log("Tiempo estimado ingresado: " + tareas[0].TiempoEstimado);
}

window.onload = init;