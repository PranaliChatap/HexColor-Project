//function for button contain onclick changeColor

function changeColor(){

    //create array for hex numbers which contain 0-9, A-F code
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", 
    "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
    //container 
    let hexcode = '';
    
    //since hex code contains six alphanumerics , we took i<6 in for loop
    for(let i=0;i<6;i++){

     //We dont want decimal random number, therefore we took Math.floor    
    let random_index = Math.floor(Math.random()
        * hex_numbers.length);

        hexcode += hex_numbers[random_index]
    }
     
    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}