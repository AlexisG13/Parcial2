window.onload=()=>{
    app.init();
}

var app={
    init:()=>{
        this.loadContent;
    },
    addRow: (data)=>{
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
    loadContent:()=>{
        fetch('/api/Jugador%20de%20ESports',method='get').then
        (res.players.forEach(element => {
           this.addRow(element); 
        }))
    }
}