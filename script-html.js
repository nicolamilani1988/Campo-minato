// // FUNZIONE per comporre array di lunghezza totLength con numeri compresi tra min e max
//   function getRndDifferentNumbers (min,max, totLength){

//   var arrayTot = [];
//   var array = [];

//   do{

//     var minRnd = min;
//     var maxRnd = max - minRnd + 1;
//     var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
//     var index = arrayTot.indexOf(numRnd);
//     arrayTot.push(numRnd);

//     if (index == -1){
//         array.push(numRnd)
//       }

//   }  while (array.length < totLength)

//   return array;

// }

// // FUNZIONE creazione celle campo minato
//   function createCell (max){
//     var cella = document.getElementById("griglia");
//     for(var i=0;i<max;i++){
//       cella.innerHTML += '<li class="cell" data-numb="'+ (i+1) + '"><span class="cifra">'+(i+1)+'</span></li>';
//     }
//   }


//   // Richiesta livello e creazione campo da gioco
//   do{
//     var levelSelect = prompt("Seleziona livello tra facile, medio , difficile");
//     var level = levelSelect.toLowerCase();

//     if (level !== "facile" && level !== "medio" && level !== "difficile"){
//       alert("seleziona livello corretto tra facile , medio , difficile");
//     }
//   } while (level !== "facile" && level !== "medio" && level !== "difficile");

//   if(level == "facile"){
//     createCell(100);
//     var bombs = getRndDifferentNumbers(1,100,16);
//     console.log("numeri delle mine: ",bombs);
//   } else if (level == "medio"){
//     createCell(80);
//     var bombs = getRndDifferentNumbers(1,80,16);
//     console.log("numeri delle mine: ",bombs);
//   } else {
//     createCell(50);
//     var bombs = getRndDifferentNumbers(1,50,16);
//     console.log("numeri delle mine: ",bombs);
//   }


//   // Svolgimento gioco
//   var shots = [];
//   var myCells = document.getElementsByTagName("li");
//   for(var i=0;i<myCells.length;i++){
//     var myCell = myCells[i];

//     myCell.addEventListener("click",function(){

//       var selectedCell = this;

//       var selectedNum = parseInt(selectedCell.dataset.numb);

//       var shotsNumber = (shots.length)+1;
//       console.log("colpi sparati ",shotsNumber);
//       if(shots.includes(selectedNum)){
//         alert("Non fare il furbo, inserisci un altro numero")
//       } else if(!bombs.includes(selectedNum)){
//         shots.push(selectedNum);
//         selectedCell.style.backgroundColor = "green";
//         console.log("Colpi usati: ",shots);
//       } else {
//         selectedCell.style.backgroundColor = "red";
//         alert("SEI SCOPPIATO DOPO AVER SPARATO " + (shotsNumber) + " BOMBE");
//       }

//     })

//   }
function levelSelect(){
  const emptyField = $("table").html('');
  const selectedLevel = $("input[name='level']:checked").val();
    
    createField(selectedLevel);
}

function createRow(){
  for (let i = 0;i<10;i++){
    const table = $("table");
    table.append(`
    <td class="cell">
      <div class="number"></div>
      <div class="cover"></div>
    </td>
    `)
  }
}

function createField(level){
  const rowNum = level;
  for(let i=0;i<rowNum;i++){
    const table = $("table");
    table.append(`
      <tr>
        ${createRow()}
      </tr>  
    `)
  }
}

function init(){
  //funzione ok per selezione livello. Da decommentare dopo sviluppo
  //$("#level-button").click(levelSelect);

    // funzione da commentare dopo sviluppo, perchè data dal click(levelSelect)
   createField(5);



} 

$(init);
