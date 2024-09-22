document.write('nice shirt!');


let namep = "Milla";

const year = 2023;

const isokn= true

const emptyv = null

document.write(namep);

//create object
let people = {
    grades:'graduate',
    height: '5.3'
};

document.write(people.grades)

//create an array
let seasons = ['spring','winter']
document.write(seasons[0]);

//create an rray using fucntions
let seasons02 = new Array('autumn','spring')
document.write(seasons02[0]);

//create a function
function greet(){
    document.write('good job');
}

greet();


//function for paragraph
function getmsg(){
    return 'print message for paragraph';
}

document.getElementById('msg').innerHTML = getmsg();