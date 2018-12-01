window.onload()=()=>{
    app.init;
}

var app={
    init:function(){
        this.loadContent();
    },
    addRow:function(data){
        tb=document.getElementsByClassName('players');
        tr=document.createElement('tr');
        tr.innerHTML=`<td>${data.id}</td> 
                      <td>${data.nombre}</td>
                      <td>${data.juego}</td>    
                      <td>${data.años}</td>
                      <td>
                      <a href='#' class=delete>Eliminar</a>
                      <a href='#' class=update>Modificar</a>
        `;
        tb.append(tr);
    },
    loadContent:function(){
        fetch('api/')
    }
}