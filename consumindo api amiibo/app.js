fetch('https://www.amiiboapi.com/api/amiibo/')
.then(response=>response.json())
.then(data=>{
   
    var result = data.amiibo;
    for(let i=0; i<result.length;i++){

        //if(i===100){break};

        var body = document.body;
        var row = document.querySelector('.row');
        var col = document.createElement('div');
        var content = document.createElement('div');

        var spanSerie = document.createElement('span');
        spanSerie.setAttribute('class', 'serie');

        var spanPerso = document.createElement('span');
        spanPerso.setAttribute('class', 'perso');

        var spanSerieJogo = document.createElement('span');
        spanSerieJogo.setAttribute('class', 'serieJogo');

        var spanImgJogo = document.createElement('img');
        spanImgJogo.setAttribute('class', 'img');
        
        var nomeSerie = result[i].amiiboSeries;
        var perso = result[i].character;
        var serieJogo = result[i].gameSeries;
        var imgJogo = result[i].image;

        spanSerie.innerHTML = "Amiibo Series: "+nomeSerie;
        spanPerso.innerHTML = "Nome do personagem: "+perso;
        spanSerieJogo .innerHTML = "Série de jogos: "+serieJogo;


        col.setAttribute('class','col');
        content.setAttribute('class','content');
        spanImgJogo.setAttribute('src',imgJogo);

        content.appendChild(spanSerie)
        content.appendChild(spanPerso)
        content.appendChild(spanSerieJogo)
        content.appendChild(spanImgJogo)
        col.appendChild(content);
        row.appendChild(col);
        body.appendChild(row);
    }
})

function search(){
    var input = document.querySelector('#buscar').value;
    var filtro = input.toUpperCase();
    var content = document.querySelectorAll('.content');

    for(let i=0; i<content.length;i++){
        
        var persoTxt = content[i].childNodes[1].innerText || content[i].childNodes[1].textContent;

       if(persoTxt.toUpperCase().indexOf(filtro) > -1){
            content[i].style.display = "";
            content[i].parentNode.style.display = "";
       }else{
        content[i].style.display = "none";
        content[i].parentNode.style.display = "none";
       }
    }

    
}