// declarations
blaa.value = "_";
blab.value = "_";
blac .value = "_";
blad.value = "_";
blae.value = "_";
blaf.value = "_";
blaout.value = "_";
// Declare SA1 In - Output
var faults = 0;
var trys = 0;
var hints = 0;

var sol = 0;

// Button_hide
var hide = 0;
var count = 0;
getExercise();

dropdown_a.onchange = function () {
    blaa.value = this.value; // a

}
dropdown_b.onchange = function () {
    blab.value = this.value; // b

}
dropdown_c.onchange = function () {
    blac.value = this.value; // c
}
dropdown_d.onchange = function () {
    blad.value = this.value; // d
}
dropdown_e.onchange = function () {
    blae.value = this.value; // e
}
dropdown_f.onchange = function () {
    blaf.value = this.value; // f
}
dropdown_out.onchange = function () {
    blaout.value = this.value; // output
}

var trysID = document.getElementById("trysID");
trysID.innerHTML = trys;
var hintsID = document.getElementById("hintsID");
hintsID.innerHTML = hints;
var faultID = document.getElementById("faultsID");
faultID.innerHTML = faults;

function countFaults() {
    faults++;
    faultID.innerHTML = faults;
}
function countTrys() {
    trys++;
    trysID.innerHTML = trys;
    if(trys == 6) {
        document.getElementById("solution_button").className = "show";
    }

}
function countHints() {
    hints++;
    hintsID.innerHTML = hints;
    if(hints == 6) {
        document.getElementById("solution_button").className = "show";
    }
}

function getExercise() {
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.moveTo(62.5, 0);
    ctx1.lineTo(62.5, 30);
    ctx1.moveTo(62.5, 30);
    ctx1.lineTo(109.375, 30);
    ctx1.moveTo(109.375, 30);
    ctx1.lineTo(109.375, 50);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.arc(125,50,25,25.1,3*Math.PI);
    ctx1.stroke();
    ctx1.moveTo(100, 50);
    ctx1.lineTo(125, 50);
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.arc(125,80,5,0,2*Math.PI);
    ctx1.stroke();
    ctx1.moveTo(125,85);
    ctx1.lineTo(125,100);
    ctx1.stroke();

    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");
    ctx2.moveTo(125, 30);
    ctx2.lineTo(125, 00);
    ctx2.moveTo(15.625, 30);
    ctx2.lineTo(125, 30);
    ctx2.moveTo(15.625, 30);
    ctx2.lineTo(15.625, 50);
    ctx2.stroke();
    ctx2.beginPath();    
    ctx2.arc(0,50,25,25.1,3*Math.PI);
    ctx2.stroke();
    ctx2.moveTo(25, 50);
    ctx2.lineTo(0, 50);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.arc(0,80,5,0,2*Math.PI);
    ctx2.stroke();
    ctx2.moveTo(0,85);
    ctx2.lineTo(0,100);
    ctx2.stroke();

    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.moveTo(0, 0);
    ctx3.lineTo(0, 30);
    ctx3.moveTo(0, 30);
    ctx3.lineTo(62.5, 30);
    ctx3.moveTo(62.5, 30);
    ctx3.lineTo(109.375, 30);
    ctx3.moveTo(109.375, 30);
    ctx3.lineTo(109.375, 50);
    ctx3.stroke();
    ctx3.beginPath();
    ctx3.arc(125,50,25,25.1,3*Math.PI);
    ctx3.stroke();
    ctx3.moveTo(100, 50);
    ctx3.lineTo(125, 50);
    ctx3.stroke();
    ctx3.beginPath();
    ctx3.arc(125,80,5,0,2*Math.PI);
    ctx3.stroke();
    ctx3.moveTo(125,85);
    ctx3.lineTo(125,100);
    ctx3.stroke();

    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    ctx4.moveTo(62.5, 30);
    ctx4.lineTo(62.5, 00);
    ctx4.moveTo(15.625, 30);
    ctx4.lineTo(62.5, 30);
    ctx4.moveTo(15.625, 30);
    ctx4.lineTo(15.625, 50);
    ctx4.stroke();
    ctx4.beginPath();    
    ctx4.arc(0,50,25,25.1,3*Math.PI);
    ctx4.stroke();
    ctx4.moveTo(25, 50);
    ctx4.lineTo(0, 50);
    ctx4.stroke();
    ctx4.beginPath();
    ctx4.arc(0,80,5,0,2*Math.PI);
    ctx4.stroke();
    ctx4.moveTo(0,85);
    ctx4.lineTo(0,100);
    ctx4.stroke();

    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    ctx5.moveTo(125, 0);
    ctx5.lineTo(125, 30);
    ctx5.stroke();

    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    ctx6.moveTo(0, 0);
    ctx6.lineTo(0, 30);
    ctx6.moveTo(0, 30);
    ctx6.lineTo(109.375, 30);
    ctx6.moveTo(109.375, 30);
    ctx6.lineTo(109.375, 50);
    ctx6.stroke();
    ctx6.beginPath();
    ctx6.arc(125,50,25,25.1,3*Math.PI);
    ctx6.stroke();
    ctx6.moveTo(100, 50);
    ctx6.lineTo(125, 50);
    ctx6.stroke();
    ctx6.beginPath();
    ctx6.arc(125,80,5,0,2*Math.PI);
    ctx6.stroke();
    ctx6.moveTo(125,85);
    ctx6.lineTo(125,100);
    ctx6.stroke();

    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");
    ctx7.moveTo(125, 30);
    ctx7.lineTo(125, 00);
    ctx7.moveTo(15.625, 30);
    ctx7.lineTo(125, 30);
    ctx7.moveTo(15.625, 30);
    ctx7.lineTo(15.625, 50);
    ctx7.stroke();
    ctx7.beginPath();     ctx7.arc(0,50,25,25.1,3*Math.PI);
    ctx7.stroke();
    ctx7.moveTo(25, 50);
    ctx7.lineTo(0, 50);
    ctx7.stroke();
    ctx7.beginPath();
    ctx7.arc(0,80,5,0,2*Math.PI);
    ctx7.stroke();
    ctx7.moveTo(0,85);
    ctx7.lineTo(0,100);
    ctx7.stroke();

    var c8 = document.getElementById("canvas8");
    var ctx8 = c8.getContext("2d");
    ctx8.moveTo(0, 0);
    ctx8.lineTo(0, 30);
    ctx8.stroke();
}

function solve_path_byStudent() {
    // reset error_messager
    error_message.innerHTML = "";
    count++;

    // declare the beginning bcs there is no other options for the solution
    bla_f.value = "0";
    bla_d.value = "D'";
        //Independent Inputs
    // declare A
    if(blad.value != "_") {
        if(blaa.value == "D") {
            bla_a.value = "D"
            error_message_collection(2);
        } else if(blaa.value == "D'") {
            bla_a.value = "D'"
            error_message_collection(2);
        } else if(blaa.value == "0") {
            bla_a.value = "0"
            error_message_collection(0);
        } else if(blaa.value == "1") {
            bla_a.value = "1"
            error_message_collection(0);
        }
    } else if(blaa.value != "_" && blad.value == "_"){
        error_message_collection(7);
    }
    //Independent Inputs
    // declare B
    if(blaf.value != "_") {
        if(blab.value == "D") {
            bla_b.value = "D"
            error_message_collection(2);
        } else if(blab.value == "D'") {
            bla_b.value = "D'"
            error_message_collection(2);
        } else if(blab.value == "0") {
            bla_b.value = "0"
            error_message_collection(0);
        } else if(blab.value == "1") {
            bla_b.value = "1"
            error_message_collection(0);
        }
    } else if(blab.value != "_" && blaf.value == "_"){
        error_message_collection(7);
    }


        // declare C
    if(blaf.value != "_") {
        if(blac.value == "0") {
            bla_c.value = "0"
            error_message_collection(0);
        } else if(blac.value == "1") {
            bla_c.value = "1"
            error_message_collection(0);
        } else if(blac.value == "D") {
            bla_c.value = "D"
            error_message_collection(2);
        } else if(blac.value == "D'") {
            bla_c.value = "D'"
            error_message_collection(2);
        }
    } else if(blac.value != "_" && blaf.value == "_"){
        error_message_collection(7);
    }


    // declare E with A and B
    if((bla_a.value == "0") && (bla_b.value == "0")) {
        bla_e.value = "1";
    } else if ((bla_a.value == "0") && (bla_b.value == "1")) {
        bla_e.value = "1";
    } else if((bla_a.value == "0") && (bla_b.value == "D")) {
        bla_e.value = "1";
    } else if ((bla_a.value == "0") && (bla_b.value == "D'")) {
        bla_e.value = "1";

    } else if((bla_a.value == "1") && (bla_b.value == "0")) {
        bla_e.value = "1";
    } else if ((bla_a.value == "1") && (bla_b.value == "1")) {
        bla_e.value = "0";
    } else if((bla_a.value == "1") && (bla_b.value == "D")) {
        bla_e.value = "D'";
    } else if ((bla_a.value == "1") && (bla_b.value == "D'")) {
        bla_e.value = "D";

    } else if((bla_a.value == "D") && (bla_b.value == "0")) {
        bla_e.value = "1";
    } else if((bla_a.value == "D") && (bla_b.value == "1")) {
        bla_e.value = "D'";
    } else if ((bla_a.value == "D") && (bla_b.value == "D")) {
        bla_e.value = "D'"; 
    } else if((bla_a.value == "D") && (bla_b.value == "D'")) {
        bla_e.value = "1";

    } else if ((bla_a.value == "D'") && (bla_b.value == "0")) {
        bla_e.value = "1";
    }else if((bla_a.value == "D'") && (bla_b.value == "1")) {
        bla_e.value = "D";
    } else if ((bla_a.value == "D'") && (bla_b.value == "D")) {
        bla_e.value = "1";
    } else if((bla_a.value == "D'") && (bla_b.value == "D'")) {
        bla_e.value = "D";
    } 

    // declare F with B and C
    if((bla_b.value == "0") && (bla_c.value == "0")) {
        bla_f.value = "1";
    } else if ((bla_b.value == "0") && (bla_c.value == "1")) {
        bla_f.value = "1";
    } else if((bla_b.value == "0") && (bla_c.value == "D")) {
        bla_f.value = "1";
    } else if ((bla_b.value == "0") && (bla_c.value == "D'")) {
        bla_f.value = "1";
    } else if((bla_b.value == "1") && (bla_c.value == "0")) {
        bla_f.value = "1";
    } else if ((bla_b.value == "1") && (bla_c.value == "1")) {
        bla_f.value = "0";
    } else if((bla_b.value == "1") && (bla_c.value == "D")) {
        bla_f.value = "D'";
    } else if ((bla_b.value == "1") && (bla_c.value == "D'")) {
        bla_f.value = "D";
    } else if((bla_b.value == "D") && (bla_c.value == "0")) {
        bla_f.value = "1";
    } else if((bla_b.value == "D") && (bla_c.value == "1")) {
        bla_f.value = "D'";
    } else if ((bla_b.value == "D") && (bla_c.value == "D")) {
        bla_f.value = "D'"; 
    } else if((bla_b.value == "D") && (bla_c.value == "D'")) {
        bla_f.value = "1";
    } else if ((bla_b.value == "D'") && (bla_c.value == "0")) {
        bla_f.value = "1";
    }else if((bla_b.value == "D'") && (bla_c.value == "1")) {
        bla_f.value = "D";
    } else if ((bla_b.value == "D'") && (bla_c.value == "D")) {
        bla_f.value = "1";
    } else if((bla_b.value == "D'") && (bla_c.value == "D'")) {
        bla_f.value = "D";
    } 
    
    // If input not correct then output also
    if((blaf.value != bla_f.value)) {
        bla_c.value = "Input"
    }
    if((blaf.value != bla_f.value)) {
        bla_b.value = "Input"
    }

    // declare Gates from SA1
    if(bla_f.value == "0") {
        bla_d.value ="D'";
    } else if(bla_f.value == "1") {
        bla_d.value = "1";
    }

    if(blad.value == "0") {
        error_message_collection(6);
        error_message_collection(3);
    } else if(blad.value == "D") {
        error_message_collection(6);
    }

    if((blad.value != bla_d.value) && (blae.value != bla_e.value)) {
        bla_a.value = "Input"
    }

    // declare output with Input E and F
    if(blad.value != "_"){
        if((bla_e.value == "0") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if ((bla_e.value == "0") && (bla_d.value == "1")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if((bla_e.value == "0") && (bla_d.value == "D")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if ((bla_e.value == "0") && (bla_d.value == "D'")) {
            bla_out.value = "1";
            error_message_collection(4);
    
    
        } else if((bla_e.value == "1") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if ((bla_e.value == "1") && (bla_d.value == "1")) {
            bla_out.value = "0";
            error_message_collection(4);
        } else if((bla_e.value == "1") && (bla_d.value == "D")) {
            bla_out.value = "D'";
        } else if ((bla_e.value == "1") && (bla_d.value == "D'")) {
            bla_out.value = "D";
            
    
    
        } else if((bla_e.value == "D") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if((bla_e.value == "D") && (bla_d.value == "1")) {
            bla_out.value = "D'";
        } else if ((bla_e.value == "D") && (bla_d.value == "D")) {
            bla_out.value = "D'";
        } else if((bla_e.value == "D") && (bla_d.value == "D'")) {
            bla_out.value = "1";
            error_message_collection(4);
    
        } else if ((bla_e.value == "D'") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(4);
        }else if((bla_e.value == "D'") && (bla_d.value == "1")) {
            bla_out.value = "D";
        } else if ((bla_e.value == "D'") && (bla_d.value == "D")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if((bla_e.value == "D'") && (bla_d.value == "D'")) {
            bla_out.value = "D";
        }
    } else if(blaout.value != "_" && blae.value == "_"){
        error_message_collection(8);
    }
}


// blaa  -> Students
// bla_a -> Solution

function  get_Color_Correction() {
    // reset every Canvas after first solution
    countTrys();
    get_clean_Canvas();
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");
    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");
    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");
    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");
    var c8 = document.getElementById("canvas8");
    var ctx8 = c8.getContext("2d");

    // Input A is available if Students sets A and D values
    if((blaa.value != "_" && blae.value != "_" && blad.value != "_"  && blaout.value != "_") || (blab.value != "_" && blaf.value != "_" && blae.value != "_")){
        if((bla_a.value != blaa.value) || bla_a.value == "D" || bla_a.value == "D'" ||(blae.value != bla_e.value)) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx1.fillStyle = grd;
            ctx1.fillRect(58, 0, 8, 34);
            ctx1.fillRect(58, 26, 50, 8);
            ctx1.fillRect(105, 26, 8, 25);
            countFaults()

        } else if (bla_a.value == blaa.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx1.fillStyle = grd;
            ctx1.fillRect(58, 0, 8, 34);
            ctx1.fillRect(58, 26, 50, 8);
            ctx1.fillRect(105, 26, 8, 25);
        }
    }
    if((blab.value != "_" && blae.value != "_" && blad.value != "_"  && blaout.value != "_") || (blab.value != "_" && blaf.value != "_") ){
        if((bla_b.value != blab.value) || bla_b.value == "D" || bla_b.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx2.fillRect(121, 0, 4, 34); 
            ctx2.fillRect(11, 26, 8, 25);
            ctx2.fillRect(11, 26, 110, 8);
            ctx3.fillRect(0, 0, 4, 34);
            ctx3.fillRect(0, 26, 111, 8);
            ctx3.fillRect(105, 26, 8, 25);
            countFaults()

        } else if (bla_b.value == blab.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx2.fillRect(121, 0, 4, 34); 
            ctx2.fillRect(11, 26, 8, 25);
            ctx2.fillRect(11, 26, 110, 8);
            ctx3.fillRect(0, 0, 4, 34);
            ctx3.fillRect(0, 26, 111, 8);
            ctx3.fillRect(105, 26, 8, 25);
        }
    }
    // Input C is available if Students sets C and D values
     if(blaf.value != "_" && blac.value != "_"){
        // green if C is 0, 1 and red if C is D, D'
        if((bla_c.value != blac.value) || bla_c.value == "D" || bla_c.value == "D'") {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx4.fillStyle = grd;
            ctx4.fillRect(11, 26, 50, 8);
            ctx4.fillRect(11, 26, 8, 25);
            ctx4.fillRect(58, 0, 8, 34);
            countFaults();

        } else if (bla_c.value == blac.value) {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx4.fillStyle = grd;
            ctx4.fillRect(11, 26, 50, 8);
            ctx4.fillRect(11, 26, 8, 25);
            ctx4.fillRect(58, 0, 8, 34);
        }
    }

    // declare SA1 ->D, not allowed D = _
    if(blad.value != "_") {
        // Students first step for the Algo Input SA1 -> E
        if(bla_d.value != blad.value) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx7.fillStyle = grd;
            ctx7.fillRect(11, 26, 8, 25);
            ctx7.fillRect(11, 26, 69, 8);
            countFaults();

        } else if (bla_d.value == blad.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx7.fillStyle = grd;
            ctx7.fillRect(11, 26, 8, 25);
            ctx7.fillRect(11, 26, 69, 8);
        }
    }

    // declare SA1 F
    if(blaf.value != "_"){
        if(bla_f.value != blaf.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);      
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx8.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx3.fillRect(121, 85, 4, 34);
            ctx4.fillRect(0, 85, 4, 34);
            ctx7.fillRect(121, 0, 4, 34);
            ctx7.fillRect(82, 26, 113, 8);
            ctx8.fillRect(0, 0, 4, 34);
            countFaults();

        } else if (bla_f.value == blaf.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);      
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx8.fillStyle = grd;
            grd.addColorStop(0, "green");
            ctx3.fillRect(121, 85, 4, 34);
            ctx4.fillRect(0, 85, 4, 34);
            ctx7.fillRect(121, 0, 4, 34);
            ctx7.fillRect(82, 26, 113, 8);
            ctx8.fillRect(0, 0, 4, 34);
        }
    }


    // combine Inputs into Gate D, not allowed D = _
    if((blad.value != "_" && blaout.value != "_" && blae.value != "_") || (blaf.value != "_" && blab.value != "_" && blae.value != "_" && blaa.value != "_") ){
        // Students first step for the Algo Input SA1 -> D
        if(bla_e.value != blae.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx1.fillStyle = grd;
            ctx2.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx1.fillRect(121, 85, 8, 34);
            ctx2.fillRect(0, 85, 4, 34);
            ctx5.fillRect(121, 0, 4, 34);
            ctx6.fillRect(0, 0, 4, 34);
            ctx6.fillRect(0, 26, 113, 8);
            ctx6.fillRect(105, 26, 8, 23);
            countFaults();

        } else if (bla_e.value == blae.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx1.fillStyle = grd;
            ctx2.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx1.fillRect(121, 85, 8, 34);
            ctx2.fillRect(0, 85, 4, 34);
            ctx5.fillRect(121, 0, 4, 34);
            ctx6.fillRect(0, 0, 4, 34);
            ctx6.fillRect(0, 26, 113, 8);
            ctx6.fillRect(105, 26, 8, 23);
        }
    }

        // declare Output
    // Output is available if Students sets A and E values
    // Output can only be green if in the circuit is no error
    if(blaout.value != "_" && blad.value != "_"){
        if(bla_out.value != blaout.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx6.fillRect(121, 85, 4, 34);
            ctx7.fillRect(0, 85, 4, 34);
            countFaults();
            sol = 0;
            document.getElementById("path_button").style.color = "grey";
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML == "") {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "green");
            ctx6.fillRect(121, 85, 4, 34);
            ctx7.fillRect(0, 85, 4, 34);
            sol = 1;
            document.getElementById("path_button").style.color = "black";
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML != "") {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx6.fillRect(121, 85, 4, 34);
            ctx7.fillRect(0, 85, 4, 34);
            countFaults();
            sol = 0;
            document.getElementById("path_button").style.color = "grey";
        }
    }

    getExercise();
}

function error_message_collection(error_number) {
    if(error_number == 0) {
        error_message.innerHTML == "";
    } else if(error_number == 10) {
        error_message.innerHTML += "";
    } else if(error_number == 1) {
        error_message.innerHTML += "There is no Error."    
    } else if(error_number == 2) {
        error_message.innerHTML += "There is no 'D' value! <br><br>"
    } else if(error_number == 3) {
        error_message.innerHTML += "A fault is already associated with that circuit <br><br>"
    } else if(error_number == 4) {
        error_message.innerHTML += "You have to locate a fault, which detects the generated output.<br><br>"
    } else if (error_number == 5) {
        error_message.innerHTML += "Wrong Stuck-AT-Fault declaration.<br><br>"
    }  else if (error_number == 6) {
        error_message.innerHTML += "Wrong Output.<br><br>"
    } else if (error_number == 7) {
        error_message.innerHTML += "Unknown Input.<br><br>"
    }  else if (error_number == 8) {
        error_message.innerHTML += "Unknown Output.<br><br>"
    } else if (error_number == 11) {
        error_message.innerHTML += "Hint-Button blocked for 2 sec.<br><br>"
    } else if (error_number == 12) {
        error_message.innerHTML += "Hint-Button blocked for 4 sec.<br><br>"
    } else if (error_number == 13) {
        error_message.innerHTML += "Hint-Button blocked for 8 sec.<br><br>"
    }  else if (error_number == 14) {
        error_message.innerHTML += "Hint-Button blocked for 16 sec.<br><br>"
    } else if (error_number == 15) {
        error_message.innerHTML += "Hint-Button blocked for 32 sec.<br><br>"
    } else if (error_number == 16) {
        error_message.innerHTML += "Hint-Button blocked for 64 sec.<br><br>"
    } else if (error_number == 17) {
        error_message.innerHTML += "Hint-Button blocked for 128 sec.<br><br>"
    }

}

function give_one_solution() {
    countHints();
    
    if(hints < 6) {  
        alert("Hint button use "+hints+" of 5");
        if (bla_d.value == undefined) {
            alert("There is no value on the output of SA1")
        }
        else if(blad.value != bla_d.value) {
            alert("The output of SA1 must be set to D' as explained in the rules");    
        }
        else if(blaf.value != bla_f.value) {
            alert("The input of SA1 must be set to 0 as explained in the rules");    
        }        
        else if((blaout.value != bla_out.value) || bla_out.value == "1" || bla_out.value == "0") {
            alert("The output of the circuit must be set to D or D'. It depends on the inputs D and E. The currently value is "+bla_out.value+".");    
        }        
        else if(blae.value != bla_e.value) {
            alert("The value of E is currently "+bla_e.value+". It depends on the inputs of A and B.");    
        }        
        else if(blaa.value != bla_a.value) {
            alert("The input of A can be 0 or 1. It depends on the output.");    
        }
        else if(blab.value != bla_b.value) {
            alert("This must be set to 0 or 1. It depends on the Output E and F.");
        }
        else if(blac.value != bla_c.value) {
            alert("This must be set to 0 or 1.");    
        }
    }else {
        alert("You have used your hints")
    }
    hide++;;
}

// Weiß no ned ob ichs brauch
// clean up canvas (not done)
function get_clean_Canvas() {
    
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.clearRect(0, 0, c1.width, c1.height);
    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");
    ctx2.clearRect(0, 0, c2.width, c2.height);
    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.clearRect(0, 0, c3.width, c3.height);
    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    ctx4.clearRect(0, 0, c4.width, c4.height);
    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    ctx5.clearRect(0, 0, c5.width, c5.height); 
    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    ctx6.clearRect(0, 0, c6.width, c6.height); 
    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");
    ctx7.clearRect(0, 0, c7.width, c7.height);
    var c8 = document.getElementById("canvas8");
    var ctx8 = c8.getContext("2d");
    ctx8.clearRect(0, 0, c8.width, c8.height);

}

// reset values for not saving value
function give_values_to_HTML() {
    bla_a.innerText =  bla_a.value;
    blaa.innerText =  blaa.value;
    bla_b.innerText =  bla_b.value;
    blab.innerText =  blab.value;
    bla_c.innerText =  bla_c.value;
    blac.innerText =  bla_c.value;
    bla_d.innerText =  bla_d.value;
    blad.innerText =  blad.value;
    bla_e.innerText =  bla_e.value;
    blae.innerText =  blae.value;
    bla_f.innerText =  bla_f.value;
    blaf.innerText =  blaf.value;
    bla_out.innerText =  bla_out.value;
    blaout.innerText =  blaout.value;

}

function hide_button() { 
    // 1000 -> 1 sec
    if(hide == 1) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(11);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',2000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',2000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',2000);
    }
    else if(hide == 2) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(12);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',4000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',4000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',4000);
    }
    else if(hide == 3) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(13);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',8000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',8000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',8000);
    }
    else if(hide == 4) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(14);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',16000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',16000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',16000);
    }
    else if(hide == 5) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(15);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',32000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',32000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',32000);
    }
    else if(hide == 6) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(16);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',64000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',64000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',64000);
    }
    else if(hide == 7) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(17);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',128000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',128000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',128000);
    }

}

function show_solution() {
    if(document.getElementById("solution").className == "show") {
        document.getElementById("solution").className = "hide";
        
    } else if(document.getElementById("solution").className == "hide") {
        document.getElementById("solution").className = "show";
        
        bla_a.innerHTML = "0";
        bla_b.innerHTML = "1";
        bla_c.innerHTML = "1";
        bla_d.innerHTML = "D'";
        bla_f.innerHTML = "0"
        bla_e.innerHTML = "1";
        bla_out.innerHTML = "D";
    }
}

function hide_button() { 
    // 1000 -> 1 sec
    if(hide == 1) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(11);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',2000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',2000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',2000);
    }
    else if(hide == 2) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(12);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',4000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',4000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',4000);
    }
    else if(hide == 3) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(13);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',8000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',8000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',8000);
    }
    else if(hide == 4) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(14);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',16000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',16000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',16000);
    }
    else if(hide == 5) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(15);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',32000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',32000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',32000);
    }
    else if(hide == 6) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(16);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',64000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',64000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',64000);
    }
    else if(hide == 7) {
        document.getElementById("hint_button").disabled = true;
        error_message_collection(17);
        setTimeout('document.getElementById("hint_button").style.color="grey"',0);
        setTimeout('document.getElementById("hint_button").disabled=false',128000);
        setTimeout('document.getElementById("hint_button").style.color="unset"',128000);
        setTimeout('document.getElementById("error_message").innerHTML = ""',128000);
    }

}

function get_D_Path() {
    if(sol == 1) {
        var c1 = document.getElementById("canvas1");
        var ctx1 = c1.getContext("2d");
        var c2 = document.getElementById("canvas2");
        var ctx2 = c2.getContext("2d");
        var c3 = document.getElementById("canvas3");
        var ctx3 = c3.getContext("2d");
        var c4 = document.getElementById("canvas4");
        var ctx4 = c4.getContext("2d");
        var c5 = document.getElementById("canvas5");
        var ctx5 = c5.getContext("2d");
        var c6 = document.getElementById("canvas6");
        var ctx6 = c6.getContext("2d");
        var c7 = document.getElementById("canvas7");
        var ctx7 = c7.getContext("2d");
        var c8 = document.getElementById("canvas8");
        var ctx8 = c8.getContext("2d");
        if((blad.value == "D'" && bla_d.value == "D'") || (blad.value == "D" && bla_d.value == "D")) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx7.fillStyle = grd;
            ctx7.fillRect(11, 26, 8, 25);
            ctx7.fillRect(11, 26, 69, 8);
        }    
        if((blaout.value == "D'" && bla_out.value == "D'") || (blaout.value == "D" && bla_out.value == "D")) {
                var grd = ctx6.createLinearGradient(0, 0, 200, 0);        
                var grd = ctx7.createLinearGradient(0, 0, 200, 0);
                ctx6.fillStyle = grd;
                ctx7.fillStyle = grd;
                grd.addColorStop(0, "#E1B400");
                ctx6.fillRect(121, 85, 4, 34);
                ctx7.fillRect(0, 85, 4, 34);
            }
    }   
    getExercise();
}