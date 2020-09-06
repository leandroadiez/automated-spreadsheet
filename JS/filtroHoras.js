const exportar = document.createElement('button');
exportar.innerText = "Exportar JSON";
exportar.id = 'exportar';
document.querySelector('#id_usuario').appendChild(exportar);

exportar.addEventListener('click', () => {
    //var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    // while (i--) {
    //     values.push(localStorage.getItem(keys[i]));
    // }
    // Values = arreglo de valores de Local Storage
    
    // Convertir cada item de Local Storage en una fila de una tabla
    let tabla = document.createElement("table");
    tabla.id = 'myTable';
    document.body.appendChild(tabla);
    //document.getElementById('myTable').classList.add('tableHidden');

    for(let j=0; j<keys.length; j++){
        let task = JSON.parse(localStorage.getItem(keys[j]));
        //console.log(JSON.stringify(task.Modulo));
        
        //Creo una fila
        let tr = document.createElement("tr");

        //ProductoCliente
        let th = document.createElement("th");
        let thTexto = document.createTextNode(JSON.stringify(task.ProductoCliente));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Modulo
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.Modulo));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Asignado
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.Asignado));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //MantisTask
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.MantisTask));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Description
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.Description));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Fecha Inicio
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.FechaInicio));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Fecha Finalizacion (por defecto es igual a la fecha inicio)
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.FechaInicio));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Horas
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.Horas));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Estado
        th = document.createElement("th");
        thTexto = document.createTextNode("");
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Complejidad
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.Complejidad));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Deploys
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.Deploys));
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Tiempo de Tarea (n. de deploy * tiempo estimado)
        th = document.createElement("th");
        thTexto = document.createTextNode("");
        th.appendChild(thTexto);
        tr.appendChild(th);
        //Tiempo Estimado
        th = document.createElement("th");
        thTexto = document.createTextNode(JSON.stringify(task.TiempoEstimado));
        th.appendChild(thTexto);
        tr.appendChild(th);

        tabla.appendChild(tr);
    }


    let filename = 'planillaTemperies';
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById('myTable');
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }
    else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
       
        //triggering the function
        downloadLink.click();
    }

    // let xd = JSON.parse(localStorage.getItem(1599142539067));
    // console.log(JSON.stringify(xd.Modulo));
});
