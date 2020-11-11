var competitors1 = []; //Первая половина участников 
var competitors2 = []; //Вторая половина участников
var rounds = []; //Раунды
var massive1 = [];
var massive2 = [];
var name;

//ПОЛУЧАЕМ МАССИВЫ ИЗ ДАННЫХ, ВВЕДЕННЫХ ПОЛЬЗОВАТЕЛЕМ
function getNumbers() {
    createSectors();
    createRounds();
    createCompetitors1();
    createCompetitors2();
    shuffleSectors(massive1);
    shuffleSectors(massive2);
    createCompList();
    createRoundsList();
    createcolumnsList();
    tableExtend();
    createTable1();
}

function tableExtend(){
    let i = 0;
    while (i < rounds.length){
        name = i;
        createTable1();
        getNewSectors(massive1);
        getNewSectors(massive2);
        i++;
    }
}

function createTable1() {
    var number = 0;
    let tableStr = '';
    while (number < competitors1.length){
        getNewSectors(massive1);
        getNewSectors(massive2);
        let container = document.querySelectorAll('.column')[name];
        let comp1 = `<div class="cell">${massive1[0]}</div>`;
        let comp2 = `<div class="cell">${massive2[0]}</div>`;
        tableStr += comp1 + comp2;
        container.innerHTML = tableStr;
        number++;
    }
}

function createcolumnsList() {
    let columnsStr = '';
    let container = document.querySelector('#columnsList');
    for (let i = 0; i < rounds.length; i++) {
        columnsStr += `<div id ='column${i}'class="column">
            </div>`;
        container.innerHTML = columnsStr;
    }
}

//СОЗДАЕМ СПИСОК УЧАСТНИКОВ В ТАБЛИЦЕ
function createCompList() {
    let compListStr = '';
    let container = document.querySelector('#competitorsList')
    for (let i = 1; i <= document.getElementById('competitors').value; i++) {
        compListStr += `<div class="competitorNum">${i}</div>`;
        container.innerHTML = compListStr;
    }
}

//СОЗДАЕМ СПИСОК РАУНДОВ В ТАБЛИЦЕ
function createRoundsList() {
    let roundsStr = '';
    let container = document.querySelector('#roundsList')
    for (let i = 1; i <= document.getElementById('rounds').value; i++) {
        roundsStr += `<div class="roundNumber">${i} тур</div>`;
        container.innerHTML = roundsStr;
    }
}

//ПЕРЕМЕЩАЕМ ДАННЫЕ МАССИВА "СЕКТОРЫ" ПО КРУГУ
function getNewSectors(massive) {
    var step = 1; //Шаг перемещения массива
    for (i = 0; i < step; i++) massive.unshift(massive.pop());
}

//ПЕРЕМЕШИВАЕМ ЗАДАННОЕ КОЛИЧЕСТВО СЕКТОРОВ
function shuffleSectors(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let previousNum = Math.floor(Math.random() * (i + 1));
        [array[i], array[previousNum]] = [array[previousNum], array[i]];
    }
}



//ПОЛУЧАЕМ КОЛИЧЕСТВО СЕКТОРОВ
function createSectors() {

    for (let i = 1; i <= document.getElementById('sectors').value; i++) {
        massive1.push(i);
        massive2.push(i);
    }
}

//ПОЛУЧАЕМ КОЛИЧЕСТВО РАУНДОВ
function createRounds() {
    for (let i = 1; i <= document.getElementById('rounds').value; i++) {
        rounds.push(i);
    }
}

//ПОЛУЧАЕМ ПЕРВУЮ ПОЛОВИНУ УЧАСТНИКОВ
function createCompetitors1() {
    for (let i = 1; i <= (document.getElementById('competitors').value / 2); i++) {
        competitors1.push(i);
    }
}

//ПОЛУЧАЕМ ВТОРУЮ ПОЛОВИНУ УЧАСТНИКОВ
function createCompetitors2() {
    for (let i = (document.getElementById('competitors').value / 2) + 1; i <= document.getElementById('competitors').value; i++) {
        competitors2.push(i);
    }
}