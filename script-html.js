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



// Seleziono livello e in base a quello si crea campo e intervallo bombe
function levelSelect(){
  const emptyField = $("table").html('');
  const selectedLevel = $("input[name='level']:checked").val();
    
  createField(selectedLevel);
  const bombs = getRndDifferentNumbers (1,(selectedLevel*10),16)
}

// 0. Funzioni per creazione campo
function createField(level){
  const rowTot = level;
  for(let i=0;i<rowTot;i++){
    const table = $("table");
    const rowNum = i+1;
    table.append(`
      <tr id="row-${rowNum}">
        
      </tr> 
    `)

    createRow(rowNum);
  }  
}

function createRow(rowNum){
  const rowNumber = rowNum;
  for (let i = 0;i<10;i++){
    const tableRow = $(`#row-${rowNumber}`);
    tableRow.append(`
    <td class="cell">
      <div class="number"><span>${((rowNumber-1)*10)+(i+1)}</span></div>
      <div class="cover"></div>
    </td>
    `)
  }
}

// 1.creazione array 16 bombe
function getRndDifferentNumbers (min,max,totLength){
    const array = [];
    while (array.length < totLength){
      let minRnd = min;
      let maxRnd = max - minRnd + 1;
      const numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
      if(!array.includes(numRnd)){
        array.push(numRnd);
      }
    }
    console.log(array);
    return array; 
  }

  function selectCell(){
    const clickedCell = $(this);
    const cellValue = parseInt(clickedCell.find("span").text());
    console.log(cellValue);
  }



function init(){
  //funzione ok per selezione livello. Da decommentare dopo sviluppo
  //$("#level-button").click(levelSelect);


  // 0. creo il campo
  // funzione da commentare dopo sviluppo, perchè data dal click(levelSelect)
  createField(5);


  // 1. creo array di 16 bombe
  // funzione da commentare dopo sviluppo, perchè data dal click(levelSelect)
  const bombs = getRndDifferentNumbers (1,50,16);

  // 2. funzione da scatenare al click su .cell
  $(".cell").click(selectCell);
  
} 

$(init);
