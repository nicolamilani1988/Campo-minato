// Seleziono livello e in base a quello si crea campo e intervallo bombe
function levelSelect(){
  const emptyField = $("table").html(''); //svuotare campo a ogni click
  const selectedLevel = $("input[name='level']:checked").val();
  const bombs = getRndDifferentNumbers (1,(selectedLevel*10),16);

  createField(selectedLevel); // creare campo
  gameOn(bombs); // giocare
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

// 0a. funzione per creare celle di ogni singola riga
function createRow(rowNum){
  const rowNumber = rowNum;
  for (let i = 0;i<10;i++){
    const tableRow = $(`#row-${rowNumber}`);
    tableRow.append(`
    <td class="cell">
      <div class="number" style="visibility:hidden"><span>${((rowNumber-1)*10)+(i+1)}</span></div>
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

  //2.funzione gioco
  function gameOn(bombs){
    const shots = [];
    const shot = $(".cell").click(function(){
      const clickedCell = $(this);
      const cellValue = parseInt(clickedCell.find("span").text());
      if(!shots.includes(cellValue)){
        shots.push(cellValue);
        clickedCell.find(".cover").hide();
        $(".counter").find("span").text(shots.length);
        console.log(shots);
      } else {
        alert("Seleziona un'altra cella");
      }
      results(cellValue,bombs,clickedCell,shots);
      })
  }
    
  // 2a. funzione se scoppio
  function results (value1,arr1,value2,arr2){
    if(arr1.includes(value1)){

      value2.addClass("red-bomb");
      $("#game-over").fadeIn();
      $(".game-over-message").append(`${arr2.length} COLPI<br>Refresha la pagina per giocare di nuovo`)   
    }
  }



function init(){
  //funzione ok per selezione livello. Da decommentare dopo sviluppo
  $("#level-button").click(levelSelect);


  // 0. creo il campo
  // funzione da commentare dopo sviluppo, perchè data dal click(levelSelect)
  //createField(5);


  // 1. creo array di 16 bombe
  // funzione da commentare dopo sviluppo, perchè data dal click(levelSelect)
  //const bombs = getRndDifferentNumbers (1,50,16);


  // 2. individuo valore al click su .cell e lo metto in array
  
  
} 

$(init);
