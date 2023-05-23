// declarations
blaa.value = "_";
blaa2.value = "_";
blab.value = "_";
blab2.value = "_";
blac.value = "_";
blac2.value = "_";
blad.value = "_";
blad2.value = "_";
blae.value = "_";
blaf.value = "_";
blag.value = "_";
blah.value = "_";
blah2.value = "_";
blai .value = "_";
blaj.value = "_";
blak.value = "_";
blal.value = "_";
blaout.value = "_";

// 4 input zwischenschritte for Output
var bla_1 = "_";
var bla_2 = "_";
// Declare SA1 In - Output
var faults = 0;
var trys = 0;
var hints = 0;

var sol = 1;

// Button_hide
var hide = 0;
var count = 0;
getExercise();

dropdown_a.onchange = function () {
    blaa.value = this.value; // a
}
dropdown_a2.onchange = function () {
    blaa2.value = this.value; // a
}
dropdown_b.onchange = function () {
    blab.value = this.value; // b
}
dropdown_b2.onchange = function () {
    blab2.value = this.value; // b
}
dropdown_c.onchange = function () {
    blac.value = this.value; // c
}
dropdown_c2.onchange = function () {
    blac2.value = this.value; // b
}
dropdown_d.onchange = function () {
    blad.value = this.value; // d
}
dropdown_d2.onchange = function () {
    blad2.value = this.value; // b
}
dropdown_e.onchange = function () {
    blae.value = this.value; // e
}
dropdown_f.onchange = function () {
    blaf.value = this.value; // f
}
dropdown_g.onchange = function () {
    blag.value = this.value; // c
}
dropdown_h.onchange = function () {
    blah.value = this.value; // d
}
dropdown_h2.onchange = function () {
    blah2.value = this.value; // d
}
dropdown_i.onchange = function () {
    blai.value = this.value; // e
}
dropdown_j.onchange = function () {
    blaj.value = this.value; // f
}
dropdown_k.onchange = function () {
    blak.value = this.value; // e
}
dropdown_l.onchange = function () {
    blal.value = this.value; // f
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

}

function countHints() {
    hints++;
    hintsID.innerHTML = hints;
    if(hints == 6) {
        document.getElementById("solution_button").className = "show";
    }
}

// Schaltkreis vorlage done
function getExercise() {
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.moveTo(62.5, 0);
    ctx1.lineTo(62.5, 100);
    ctx1.stroke();
    ctx1.moveTo(125, 50);
    ctx1.lineTo(31.5, 50);
    ctx1.stroke();
    ctx1.moveTo(31.5, 50);
    ctx1.lineTo(31.5, 100);
    ctx1.stroke();
    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");
    ctx2.moveTo(62.5, 0);
    ctx2.lineTo(62.5, 100);
    ctx2.stroke();
    ctx2.moveTo(62.5, 50);
    ctx2.lineTo(0, 50);
    ctx2.stroke();
    ctx2.moveTo(93.75, 50);
    ctx2.lineTo(125, 50);
    ctx2.stroke();
    ctx2.moveTo(93.75, 50);
    ctx2.lineTo(93.75, 100);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.arc(62, 50, 2, 0, 2 * Math.PI);
    ctx2.stroke();

    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.moveTo(62.5, 0);
    ctx3.lineTo(62.5, 50);
    ctx3.stroke();
    ctx3.moveTo(125, 50);
    ctx3.lineTo(0, 50);
    ctx3.stroke();
    ctx3.beginPath();
    ctx3.arc(62.5, 50, 2, 0, 2 * Math.PI);
    ctx3.stroke();

    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    ctx4.moveTo(62.5, 0);
    ctx4.lineTo(62.5, 100);
    ctx4.stroke();
    ctx4.moveTo(93.75, 50);
    ctx4.lineTo(0, 50);
    ctx4.stroke();
    ctx4.moveTo(93.75, 50);
    ctx4.lineTo(93.75, 100);
    ctx4.stroke();

    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    ctx5.moveTo(62.5, 0);
    ctx5.lineTo(62.5, 35);
    ctx5.stroke();
    ctx5.moveTo(62.5, 70);
    ctx5.lineTo(62.5, 100);
    ctx5.stroke();
    ctx5.moveTo(62.5, 25);
    ctx5.lineTo(125, 25);
    ctx5.stroke();
    ctx5.moveTo(31.5, 0);
    ctx5.lineTo(31.5, 100);
    ctx5.stroke();
    ctx5.beginPath();
    ctx5.arc(62.5, 25, 2, 0, 2 * Math.PI);
    ctx5.stroke();

    //Negation dreieck + Kreis
    ctx5.moveTo(50, 35);
    ctx5.lineTo(75, 35);
    ctx5.stroke();
    ctx5.moveTo(50, 35);
    ctx5.lineTo(62.5, 60);
    ctx5.stroke();
    ctx5.moveTo(75, 35);
    ctx5.lineTo(62.5, 60);
    ctx5.stroke();
    ctx5.beginPath();
    ctx5.arc(62.5, 65, 5, 0, 2 * Math.PI);
    ctx5.stroke();

    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    ctx6.moveTo(62.5, 0);
    ctx6.lineTo(62.5, 30);
    ctx6.stroke();
    ctx6.moveTo(93.75, 0);
    ctx6.lineTo(93.75, 30);
    ctx6.stroke();
    ctx6.moveTo(0, 25);
    ctx6.lineTo(46.875, 25);
    ctx6.stroke();
    ctx6.moveTo(46.875, 25);
    ctx6.lineTo(46.875, 100);
    ctx6.stroke();
    ctx6.moveTo(78.125, 65);
    ctx6.lineTo(78.125, 100);
    ctx6.stroke();

    // UND-Gatter + Negation
    ctx6.beginPath();
    ctx6.arc(78.125, 30, 25, 25.1, 3 * Math.PI);
    ctx6.stroke();
    ctx6.moveTo(53.125, 30);
    ctx6.lineTo(103.125, 30);
    ctx6.stroke();
    ctx6.beginPath();
    ctx6.arc(78.125, 60, 5, 0, 2 * Math.PI);
    ctx6.stroke();


    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");
    ctx7.moveTo(78.125, 25);
    ctx7.lineTo(78.125, 100);
    ctx7.stroke();
    ctx7.moveTo(78.125, 25);
    ctx7.lineTo(125, 25);
    ctx7.stroke();

    var c8 = document.getElementById("canvas8");
    var ctx8 = c8.getContext("2d");
    ctx8.moveTo(62.5, 0);
    ctx8.lineTo(62.5, 35);
    ctx8.stroke();
    ctx8.moveTo(62.5, 70);
    ctx8.lineTo(62.5, 100);
    ctx8.stroke();
    ctx8.moveTo(62.5, 25);
    ctx8.lineTo(0, 25);
    ctx8.stroke();
    ctx8.moveTo(93.75, 0);
    ctx8.lineTo(93.75, 100);
    ctx8.stroke();

    //Negation dreieck + Kreis
    ctx8.moveTo(50, 35);
    ctx8.lineTo(75, 35);
    ctx8.stroke();
    ctx8.moveTo(50, 35);
    ctx8.lineTo(62.5, 60);
    ctx8.stroke();
    ctx8.moveTo(75, 35);
    ctx8.lineTo(62.5, 60);
    ctx8.stroke();
    ctx8.beginPath();
    ctx8.arc(62.5, 65, 5, 0, 2 * Math.PI);
    ctx8.stroke();
    ctx8.beginPath();
    ctx8.arc(62.5, 25, 2, 0, 2 * Math.PI);
    ctx8.stroke();

    var c9 = document.getElementById("canvas9");
    var ctx9 = c9.getContext("2d");
    ctx9.moveTo(62.5, 0);
    ctx9.lineTo(62.5, 30);
    ctx9.stroke();
    ctx9.moveTo(31.5, 0);
    ctx9.lineTo(31.5, 30);
    ctx9.stroke();


    // UND-gatter + Negation
    ctx9.beginPath();
    ctx9.arc(46.875, 30, 25, 25.1, 3 * Math.PI);
    ctx9.stroke();

    ctx9.moveTo(21.875, 30);
    ctx9.lineTo(71.875, 30);
    ctx9.stroke();

    ctx9.beginPath();
    ctx9.arc(46.875, 60, 5, 0, 2 * Math.PI);
    ctx9.stroke();

    ctx9.moveTo(46.875, 65);
    ctx9.lineTo(46.875, 100);
    ctx9.stroke();


    var c10 = document.getElementById("canvas10");
    var ctx10 = c10.getContext("2d");
    ctx10.moveTo(78.125, 0);
    ctx10.lineTo(78.125, 100);
    ctx10.stroke();
    ctx10.moveTo(46.875, 0);
    ctx10.lineTo(46.875, 100);
    ctx10.stroke();
    ctx10.moveTo(78.125, 75);
    ctx10.lineTo(125, 75);
    ctx10.stroke();
    ctx10.beginPath();
    ctx10.arc(78, 75, 2, 0, 2 * Math.PI);
    ctx10.stroke();

    var c11 = document.getElementById("canvas11");
    var ctx11 = c11.getContext("2d");
    ctx11.moveTo(78.125, 0);
    ctx11.lineTo(78.125, 100);
    ctx11.stroke();
    ctx11.moveTo(46.875, 75);
    ctx11.lineTo(46.875, 100);
    ctx11.stroke();
    ctx11.moveTo(0, 75);
    ctx11.lineTo(46.875, 75);
    ctx11.stroke();


    var c12 = document.getElementById("canvas12");
    var ctx12 = c12.getContext("2d");
    ctx12.moveTo(62.5, 0);
    ctx12.lineTo(62.5, 30);
    ctx12.stroke();
    ctx12.moveTo(93.75, 0);
    ctx12.lineTo(93.75, 30);
    ctx12.stroke();


    // UND-gatter + Negation
    ctx12.beginPath();
    ctx12.arc(78.125, 30, 25, 25.1, 3 * Math.PI);
    ctx12.stroke();

    ctx12.moveTo(53.125, 30);
    ctx12.lineTo(103.125, 30);
    ctx12.stroke();

    ctx12.beginPath();
    ctx12.arc(78.125, 60, 5, 0, 2 * Math.PI);
    ctx12.stroke();

    ctx12.moveTo(78.125, 65);
    ctx12.lineTo(78.125, 100);
    ctx12.stroke();

    var c13 = document.getElementById("canvas13");
    var ctx13 = c13.getContext("2d");
    ctx13.moveTo(46.875, 0);
    ctx13.lineTo(46.875, 85);
    ctx13.stroke();
    ctx13.moveTo(46.875, 85);
    ctx13.lineTo(125, 85);
    ctx13.stroke();

    var c14 = document.getElementById("canvas14");
    var ctx14 = c14.getContext("2d");
    ctx14.moveTo(78.125, 0);
    ctx14.lineTo(78.125, 30);
    ctx14.stroke();
    ctx14.moveTo(46.875, 0);
    ctx14.lineTo(46.875, 30);
    ctx14.stroke();
    // UND-gatter + Negation
    ctx14.beginPath();
    ctx14.arc(62.5, 30, 25, 25.1, 3 * Math.PI);
    ctx14.stroke();

    ctx14.moveTo(37.5, 30);
    ctx14.lineTo(87.5, 30);
    ctx14.stroke();

    ctx14.beginPath();
    ctx14.arc(62.5, 60, 5, 0, 2 * Math.PI);
    ctx14.stroke();

    ctx14.moveTo(62.5, 65);
    ctx14.lineTo(62.5, 75);
    ctx14.stroke();
    ctx14.moveTo(62.5, 75);
    ctx14.lineTo(117.1875, 75);
    ctx14.stroke();
    ctx14.moveTo(117.1875, 75);
    ctx14.lineTo(117.1875, 100);
    ctx14.stroke();


    ctx14.moveTo(0, 85);
    ctx14.lineTo(105, 85);
    ctx14.stroke();
    ctx14.moveTo(105, 85);
    ctx14.lineTo(105, 100);
    ctx14.stroke();


    var c15 = document.getElementById("canvas15");
    var ctx15 = c15.getContext("2d");
    ctx15.moveTo(78.125, 0);
    ctx15.lineTo(78.125, 30);
    ctx15.stroke();
    ctx15.moveTo(46.875, 0);
    ctx15.lineTo(46.875, 30);
    ctx15.stroke();


    // UND-gatter + Negation
    ctx15.beginPath();
    ctx15.arc(62.5, 30, 25, 25.1, 3 * Math.PI);
    ctx15.stroke();

    ctx15.moveTo(37.5, 30);
    ctx15.lineTo(87.5, 30);
    ctx15.stroke();

    ctx15.beginPath();
    ctx15.arc(62.5, 60, 5, 0, 2 * Math.PI);
    ctx15.stroke();

    ctx15.moveTo(62.5, 65);
    ctx15.lineTo(62.5, 75);
    ctx15.stroke();
    ctx15.moveTo(62.5, 75);
    ctx15.lineTo(7.8125, 75);
    ctx15.stroke();
    ctx15.moveTo(7.8125, 75);
    ctx15.lineTo(7.8125, 100);
    ctx15.stroke();


    ctx15.moveTo(20, 85);
    ctx15.lineTo(125, 85);
    ctx15.stroke();
    ctx15.moveTo(20, 85);
    ctx15.lineTo(20, 100);
    ctx15.stroke();

    var c16 = document.getElementById("canvas16");
    var ctx16 = c16.getContext("2d");
    ctx16.moveTo(78.125, 0);
    ctx16.lineTo(78.125, 85);
    ctx16.stroke();
    ctx16.moveTo(78.125, 85);
    ctx16.lineTo(0, 85);
    ctx16.stroke();

    var c18 = document.getElementById("canvas18");
    var ctx18 = c18.getContext("2d");
    ctx18.moveTo(117.1875, 0);
    ctx18.lineTo(117.1875, 30);
    ctx18.stroke();
    ctx18.moveTo(105, 0);
    ctx18.lineTo(105, 30);
    ctx18.stroke();


    // UND-gatter + Negation
    ctx18.beginPath();
    ctx18.arc(125, 30, 25, 25.1, 3 * Math.PI);
    ctx18.stroke();

    ctx18.moveTo(100, 30);
    ctx18.lineTo(125, 30);
    ctx18.stroke();

    ctx18.beginPath();
    ctx18.arc(125, 60, 5, 0, 2 * Math.PI);
    ctx18.stroke();

    ctx18.moveTo(125, 65);
    ctx18.lineTo(125, 100);
    ctx18.stroke();

    
    var c19 = document.getElementById("canvas19");
    var ctx19 = c19.getContext("2d");
    ctx19.moveTo(7.8125, 0);
    ctx19.lineTo(7.8125, 30);
    ctx19.stroke();
    ctx19.moveTo(20, 0);
    ctx19.lineTo(20, 30);
    ctx19.stroke();


    // UND-gatter + Negation
    ctx19.beginPath();
    ctx19.arc(0, 30, 25, 25.1, 3 * Math.PI);
    ctx19.stroke();
    ctx19.moveTo(25, 30);
    ctx19.lineTo(0, 30);
    ctx19.stroke();
    ctx19.beginPath();
    ctx19.arc(0, 60, 5, 0, 2 * Math.PI);
    ctx19.stroke();
    ctx19.moveTo(0, 65);
    ctx19.lineTo(0, 100);
    ctx19.stroke();
}

// nebenbedinungen in und outputs
function solve_path_byStudent() {
    // reset error_messager
    error_message.innerHTML = "";
    count++;

    // declare the beginning bcs there is no other options for the solution
    bla_f.value = "0";
    bla_h.value = "D'";
    bla_h2.value = "D'";

        //Independent Inputs
    // declare A
    if(blaa2.value != "_" || blae.value != "_") {
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
    } else if((blaa.value != "_" && blae.value == "_") || (blaa.value != "_" && blaa2.value == "_")){
    error_message_collection(7);
    }

    // declare A2
    if(blah.value != "_" || blae.value != "_") {
        if(blaa2.value == "D") {
            bla_a2.value = "D"
            error_message_collection(2);
        } else if(blaa2.value == "D'") {
            bla_a2.value = "D'"
            error_message_collection(2);
        } else if(blaa2.value == "0") {
            bla_a2.value = "0"
            error_message_collection(0);
        } else if(blaa2.value == "1") {
            bla_a2.value = "1"
            error_message_collection(0);
        }
    } else if((blaa2.value != "_" && blae.value == "_") || (blaa2.value != "_" && blah.value == "_")){
    error_message_collection(7);
    }

    // wenn A und A2 nicht identisch sind 
    if(blaa2.value != "_" && blaa.value != "_") {
        if(blaa2.value != blaa.value) {
            bla_a2.value = "_"
            bla_a.value = "_"
        }else {
        bla_a2.value =  blaa2.value;
        bla_a.value = blaa.value;      
        }    
    }

    // Output A depending on H and F
    if((blah.value != bla_h.value)) {
        bla_a.value = "Input"
        bla_a2.value = "Input"
    }
    
    
    //Independent Inputs

    // declare B
    if(blaf.value != "_" || blab2.value != "_") {
        if(blab.value == "0") {
            bla_b.value = "0"
            error_message_collection(0);
        } else if(blab.value == "1") {
            bla_b.value = "1"
            error_message_collection(0);
        } else if(blab.value == "D") {
            bla_b.value = "D"
            error_message_collection(2);
        } else if(blab.value == "D'") {
            bla_b.value = "D'"
            error_message_collection(2);
        }
    } else if((blab.value != "_" && blaf.value == "_") || (blab.value != "_" && blab2.value == "_")){
        error_message_collection(7);
    }

    // declare B2
    if(blai.value != "_" || blab.value != "_") {
        if(blab2.value == "0") {
            bla_b2.value = "0"
            error_message_collection(0);
        } else if(blab2.value == "1") {
            bla_b2.value = "1"
            error_message_collection(0);
        } else if(blab2.value == "D") {
            bla_b2.value = "D"
            error_message_collection(2);
        } else if(blab2.value == "D'") {
            bla_b2.value = "D'"
            error_message_collection(2);
        }
    } else if((blab2.value != "_" && blai.value == "_") || (blab2.value != "_" && blab.value == "_")){
        error_message_collection(7);
    }

    // wenn B und B2 nicht identisch sind 
    if(blab2.value != "_" && blab.value != "_") {
        if(blab2.value != blab.value) {
            bla_b2.value = "_"
            bla_b.value = "_"
        }else {
        bla_b2.value =  blab2.value;
        bla_b.value = blab.value;      
        }    
    }

    

    // declare C
    if(blaf.value != "_" || blac2.value != "_") {
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
    } else if((blac.value != "_" && blaf.value == "_") || (blac.value != "_" && blac2.value == "_")){
        error_message_collection(7);
    }

    // declare C2
    if(blaj.value != "_" || blac.value != "_") {
        if(blac2.value == "0") {
            bla_c2.value = "0"
            error_message_collection(0);
        } else if(blac2.value == "1") {
            bla_c2.value = "1"
            error_message_collection(0);
        } else if(blac2.value == "D") {
            bla_c2.value = "D"
            error_message_collection(2);
        } else if(blac2.value == "D'") {
            bla_c2.value = "D'"
            error_message_collection(2);
        }
    } else if((blac2.value != "_" && blaj.value == "_") || (blac2.value != "_" && blac.value == "_")){
        error_message_collection(7);
    }

    // wenn C und C2 nicht identisch sind 
    if(blac2.value != "_" && blac.value != "_") {
        if(blac2.value != blac.value) {
            bla_c2.value = "_"
            bla_c.value = "_"
        }else {
        bla_c2.value =  blac2.value;
        bla_c.value = blac.value;      
        }    
    }

    // declare D
    if(blag.value != "_" || blad2.value != "_") {
        if(blad.value == "0") {
            bla_d.value = "0"
        } else if(blad.value == "1") {
            bla_d.value = "1"
        } else if(blad.value == "D") {
            bla_d.value = "D"
            error_message_collection(2);
        } else if(blad.value == "D'") {
            bla_d.value = "D'"
            error_message_collection(2);
        }
    } else if((blad.value != "_" && blag.value == "_") || (blad.value != "_" && blad2.value == "_")){
        error_message_collection(7);
    }
    // declare D2
    if(blad.value != "_" || blah2.value != "_") {
        if(blad2.value == "0") {
            bla_d2.value = "0"
        } else if(blad2.value == "1") {
            bla_d2.value = "1"
        } else if(blad2.value == "D") {
            bla_d2.value = "D"
            error_message_collection(2);
        } else if(blad2.value == "D'") {
            bla_d2.value = "D'"
            error_message_collection(2);
        }
    } else if((blad2.value != "_" && blah2.value == "_") || (blad2.value != "_" && blad.value == "_")){
        error_message_collection(7);
    }
    // wenn D und D2 nicht identisch sind 
    if(blad2.value != "_" && blad.value != "_") {
        if(blad2.value != blad.value) {
            bla_d2.value = "_"
            bla_d.value = "_"
        }else {
        bla_d2.value =  blad2.value;
        bla_d.value = blad.value;      
        }    
    }

    if( (blah2.value != bla_h2.value)) {
        bla_d.value = "Input"
        bla_d2.value = "Input"
    }



    // declare F with B and C
    if (bla_b.value != "_" && bla_c.value != "_") {
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
    }
    if(blab.value != "_" && blac.value != "_") {
        if((blab.value != bla_b.value) || (blac.value != bla_c.value)) {
            bla_f.value = "Input"
        }
    }

    // Output B depending on F
    if( (blaf.value != bla_f.value)) {
        bla_b.value = "Input"
        bla_b2.value = "Input"
    }

    // Output C depending on F
    if(blaf.value != bla_f.value) {
        bla_c.value = "Input"
        bla_c2.value = "Input"
    }

    // declare Gates from SA1 F and H,H'
    if(bla_f.value == "0") {
        bla_h.value ="D'";
        bla_h2.value ="D'";
    } else if(bla_f.value == "1") {
        bla_h.value = "1";
        bla_h2.value ="1";
    }

    if(blah.value == "0" || blah2.value == "0") {
        error_message_collection(6);
        error_message_collection(3);
    } else if(blah.value == "D" || blah2.value == "D") {
        error_message_collection(6);
    }


    // declare E and G
    // wenn die gleich sind dann bleiben deren Value,
    // falls beide Inputs verschieden werden die auf "_" geändert
    // und die if wird nicht ausgerufen
    if(bla_a.value == "0" || bla_a2.value == "0") {
        bla_e.value = "1"
    } else if(bla_a.value == "1" || bla_a2.value == "1") {
        bla_e.value = "0"
    } else if(bla_a.value == "D" || bla_a2.value == "D") {
        bla_e.value = "D'"
    } else if(bla_a.value == "D'" || bla_a2.value == "D'") {
        bla_e.value = "D"
    } 

    if(bla_d.value == "0" || bla_d2.value == "0") {
        bla_g.value = "1"
    } else if(bla_d.value == "1" || bla_d2.value == "1") {
        bla_g.value = "0"
    } else if(bla_d.value == "D" || bla_d2.value == "D") {
        bla_g.value = "D'"
    } else if(bla_d.value == "D'" || bla_d2.value == "D'") {
        bla_g.value = "D"
    } 




    // declare I with B2 and E
    if((bla_b2.value == "0") && (bla_e.value == "0")) {
        bla_i.value = "1";
    } else if ((bla_b2.value == "0") && (bla_e.value == "1")) {
        bla_i.value = "1";
    } else if((bla_b2.value == "0") && (bla_e.value == "D")) {
        bla_i.value = "1";
    } else if ((bla_b2.value == "0") && (bla_e.value == "D'")) {
        bla_i.value = "1";

    } else if((bla_b2.value == "1") && (bla_e.value == "0")) {
        bla_i.value = "1";
    } else if ((bla_b2.value == "1") && (bla_e.value == "1")) {
        bla_i.value = "0";
    } else if((bla_b2.value == "1") && (bla_e.value == "D")) {
        bla_i.value = "D'";
    } else if ((bla_b2.value == "1") && (bla_e.value == "D'")) {
        bla_i.value = "D";

    } else if((bla_b2.value == "D") && (bla_e.value == "0")) {
        bla_i.value = "1";
    } else if((bla_b2.value == "D") && (bla_e.value == "1")) {
        bla_i.value = "D'";
    } else if ((bla_b2.value == "D") && (bla_e.value == "D")) {
        bla_i.value = "D'"; 
    } else if((bla_b2.value == "D") && (bla_e.value == "D'")) {
        bla_i.value = "1";

    } else if ((bla_b2.value == "D'") && (bla_e.value == "0")) {
        bla_i.value = "1";
    }else if((bla_b2.value == "D'") && (bla_e.value == "1")) {
        bla_i.value = "D";
    } else if ((bla_b2.value == "D'") && (bla_e.value == "D")) {
        bla_i.value = "1";
    } else if((bla_b2.value == "D'") && (bla_e.value == "D'")) {
        bla_i.value = "D";
    }  
    
    // Output I depending on E and B2
    if((blae.value != bla_e.value) || (blab2.value != bla_b2.value)) {
        bla_i.value = "Input"
    }

    

    // declare J with C2 and G
    if((bla_c2.value == "0") && (bla_g.value == "0")) {
        bla_j.value = "1";
    } else if ((bla_c2.value == "0") && (bla_g.value == "1")) {
        bla_j.value = "1";
    } else if((bla_c2.value == "0") && (bla_g.value == "D")) {
        bla_j.value = "1";
    } else if ((bla_c2.value == "0") && (bla_g.value == "D'")) {
        bla_j.value = "1";

    } else if((bla_c2.value == "1") && (bla_g.value == "0")) {
        bla_j.value = "1";
    } else if ((bla_c2.value == "1") && (bla_g.value == "1")) {
        bla_j.value = "0";
    } else if((bla_c2.value == "1") && (bla_g.value == "D")) {
        bla_j.value = "D'";
    } else if ((bla_c2.value == "1") && (bla_g.value == "D'")) {
        bla_j.value = "D";

    } else if((bla_c2.value == "D") && (bla_g.value == "0")) {
        bla_j.value = "1";
    } else if((bla_c2.value == "D") && (bla_g.value == "1")) {
        bla_j.value = "D'";
    } else if ((bla_c2.value == "D") && (bla_g.value == "D")) {
        bla_j.value = "D'"; 
    } else if((bla_c2.value == "D") && (bla_g.value == "D'")) {
        bla_j.value = "1";

    } else if ((bla_c2.value == "D'") && (bla_g.value == "0")) {
        bla_j.value = "1";
    }else if((bla_c2.value == "D'") && (bla_g.value == "1")) {
        bla_j.value = "D";
    } else if ((bla_c2.value == "D'") && (bla_g.value == "D")) {
        bla_j.value = "1";
    } else if((bla_c2.value == "D'") && (bla_g.value == "D'")) {
        bla_j.value = "D";
    }  

    // Output I depending on E and B2
    if((blag.value != bla_g.value) || (blac2.value != bla_c2.value)) {
        bla_j.value = "Input"
    }

    // declare K with A2 and H
    if((bla_a2.value == "0") && (bla_h.value == "0")) {
        bla_k.value = "1";
    } else if ((bla_a2.value == "0") && (bla_h.value == "1")) {
        bla_k.value = "1";
    } else if((bla_a2.value == "0") && (bla_h.value == "D")) {
        bla_k.value = "1";
    } else if ((bla_a2.value == "0") && (bla_h.value == "D'")) {
        bla_k.value = "1";

    } else if((bla_a2.value == "1") && (bla_h.value == "0")) {
        bla_k.value = "1";
    } else if ((bla_a2.value == "1") && (bla_h.value == "1")) {
        bla_k.value = "0";
    } else if((bla_a2.value == "1") && (bla_h.value == "D")) {
        bla_k.value = "D'";
    } else if ((bla_a2.value == "1") && (bla_h.value == "D'")) {
        bla_k.value = "D";

    } else if((bla_a2.value == "D") && (bla_h.value == "0")) {
        bla_k.value = "1";
    } else if((bla_a2.value == "D") && (bla_h.value == "1")) {
        bla_k.value = "D'";
    } else if ((bla_a2.value == "D") && (bla_h.value == "D")) {
        bla_k.value = "D'"; 
    } else if((bla_a2.value == "D") && (bla_h.value == "D'")) {
        bla_k.value = "1";

    } else if ((bla_a2.value == "D'") && (bla_h.value == "0")) {
        bla_k.value = "1";
    }else if((bla_a2.value == "D'") && (bla_h.value == "1")) {
        bla_k.value = "D";
    } else if ((bla_a2.value == "D'") && (bla_h.value == "D")) {
        bla_k.value = "1";
    } else if((bla_a2.value == "D'") && (bla_h.value == "D'")) {
        bla_k.value = "D";
    }  

    // Output K depending on H and A2
    if((blah.value != bla_h.value) || (blaa2.value != bla_a2.value)) {
        bla_k.value = "Input"
    }

    // declare L with D2 and H2
    if((bla_d2.value == "0") && (bla_h2.value == "0")) {
        bla_l.value = "1";
    } else if ((bla_d2.value == "0") && (bla_h2.value == "1")) {
        bla_l.value = "1";
    } else if((bla_d2.value == "0") && (bla_h2.value == "D")) {
        bla_l.value = "1";
    } else if ((bla_d2.value == "0") && (bla_h2.value == "D'")) {
        bla_l.value = "1";

    } else if((bla_d2.value == "1") && (bla_h2.value == "0")) {
        bla_l.value = "1";
    } else if ((bla_d2.value == "1") && (bla_h2.value == "1")) {
        bla_l.value = "0";
    } else if((bla_d2.value == "1") && (bla_h2.value == "D")) {
        bla_l.value = "D'";
    } else if ((bla_d2.value == "1") && (bla_h2.value == "D'")) {
        bla_l.value = "D";

    } else if((bla_d2.value == "D") && (bla_h2.value == "0")) {
        bla_l.value = "1";
    } else if((bla_d2.value == "D") && (bla_h2.value == "1")) {
        bla_l.value = "D'";
    } else if ((bla_d2.value == "D") && (bla_h2.value == "D")) {
        bla_l.value = "D'"; 
    } else if((bla_d2.value == "D") && (bla_h2.value == "D'")) {
        bla_l.value = "1";

    } else if ((bla_d2.value == "D'") && (bla_h2.value == "0")) {
        bla_l.value = "1";
    }else if((bla_d2.value == "D'") && (bla_h2.value == "1")) {
        bla_l.value = "D";
    } else if ((bla_d2.value == "D'") && (bla_h2.value == "D")) {
        bla_l.value = "1";
    } else if((bla_d2.value == "D'") && (bla_h2.value == "D'")) {
        bla_l.value = "D";
    }  

    // Output L depending on H2 and A2
    if((blah2.value != bla_h2.value) || (blad2.value != bla_d2.value)) {
        bla_l.value = "Input"
    }


    // declare output with Input I, K, L, J
    // first I and K into Out1
    if((bla_i.value == "0") && (bla_k.value == "0")) {
        bla_1 = "0";
    } else if ((bla_i.value == "0") && (bla_k.value == "1")) {
        bla_1 = "0";
    } else if((bla_i.value == "0") && (bla_k.value == "D")) {
        bla_1 = "0";
    } else if ((bla_i.value == "0") && (bla_k.value == "D'")) {
        bla_1 = "0";

    } else if((bla_i.value == "1") && (bla_k.value == "0")) {
        bla_1 = "0";
    } else if ((bla_i.value == "1") && (bla_k.value == "1")) {
        bla_1 = "1";
    } else if((bla_i.value == "1") && (bla_k.value == "D")) {
        bla_1 = "D";
    } else if ((bla_i.value == "1") && (bla_k.value == "D'")) {
        bla_1 = "D'";

    } else if((bla_i.value == "D") && (bla_k.value == "0")) {
        bla_1 = "0";
    } else if((bla_i.value == "D") && (bla_k.value == "1")) {
        bla_1 = "D";
    } else if ((bla_i.value == "D") && (bla_k.value == "D")) {
        bla_1 = "D"; 
    } else if((bla_i.value == "D") && (bla_k.value == "D'")) {
        bla_1 = "0";

    } else if ((bla_i.value == "D'") && (bla_k.value == "0")) {
        bla_1 = "0";
    }else if((bla_i.value == "D'") && (bla_k.value == "1")) {
        bla_1 = "D'";
    } else if ((bla_i.value == "D'") && (bla_k.value == "D")) {
        bla_1 = "0";
    } else if((bla_i.value == "D'") && (bla_k.value == "D'")) {
        bla_1 = "D'";
    }  

    // Second L and J into Out2
    if((bla_l.value == "0") && (bla_j.value == "0")) {
        bla_2 = "0";
    } else if ((bla_l.value == "0") && (bla_j.value == "1")) {
        bla_2 = "0";
    } else if((bla_l.value == "0") && (bla_j.value == "D")) {
        bla_2 = "0";
    } else if ((bla_l.value == "0") && (bla_j.value == "D'")) {
        bla_2 = "0";

    } else if((bla_l.value == "1") && (bla_j.value == "0")) {
        bla_2 = "0";
    } else if ((bla_l.value == "1") && (bla_j.value == "1")) {
        bla_2 = "1";
    } else if((bla_l.value == "1") && (bla_j.value == "D")) {
        bla_2 = "D";
    } else if ((bla_l.value == "1") && (bla_j.value == "D'")) {
        bla_2 = "D'";

    } else if((bla_l.value == "D") && (bla_j.value == "0")) {
        bla_2 = "0";
    } else if((bla_l.value == "D") && (bla_j.value == "1")) {
        bla_2 = "D";
    } else if ((bla_l.value == "D") && (bla_j.value == "D")) {
        bla_2 = "D"; 
    } else if((bla_l.value == "D") && (bla_j.value == "D'")) {
        bla_2 = "0";

    } else if ((bla_l.value == "D'") && (bla_j.value == "0")) {
        bla_2 = "0";
    }else if((bla_l.value == "D'") && (bla_j.value == "1")) {
        bla_2 = "D'";
    } else if ((bla_l.value == "D'") && (bla_j.value == "D")) {
        bla_2 = "0";
    } else if((bla_l.value == "D'") && (bla_j.value == "D'")) {
        bla_2 = "D'";
    }  

    // Last Out1 and Out2 into Output
    if((bla_1 == "0") && (bla_2 == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if ((bla_1 == "0") && (bla_2 == "1")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if((bla_1 == "0") && (bla_2 == "D")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if ((bla_1 == "0") && (bla_2 == "D'")) {
        bla_out.value = "1";
        error_message_collection(4);

    } else if((bla_1 == "1") && (bla_2 == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if ((bla_1 == "1") && (bla_2 == "1")) {
        bla_out.value = "0";
        error_message_collection(4);
    } else if((bla_1 == "1") && (bla_2 == "D")) {
        bla_out.value = "D'";
    } else if ((bla_1 == "1") && (bla_2 == "D'")) {
        bla_out.value = "D";

    } else if((bla_1 == "D") && (bla_2 == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if((bla_1 == "D") && (bla_2 == "1")) {
        bla_out.value = "D'";
    } else if ((bla_1 == "D") && (bla_2 == "D")) {
        bla_out.value = "D'"; 
    } else if((bla_1 == "D") && (bla_2 == "D'")) {
        bla_out.value = "1";
        error_message_collection(4);

    } else if ((bla_1 == "D'") && (bla_2 == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    }else if((bla_1 == "D'") && (bla_2 == "1")) {
        bla_out.value = "D";
    } else if ((bla_1 == "D'") && (bla_2 == "D")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if((bla_1 == "D'") && (bla_2 == "D'")) {
        bla_out.value = "D";
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
    var c9 = document.getElementById("canvas9");
    var ctx9 = c9.getContext("2d");
    var c10 = document.getElementById("canvas10");
    var ctx10 = c10.getContext("2d");
    var c11 = document.getElementById("canvas11");
    var ctx11 = c11.getContext("2d");
    var c12 = document.getElementById("canvas12");
    var ctx12 = c12.getContext("2d");
    var c13 = document.getElementById("canvas13");
    var ctx13 = c13.getContext("2d");
    var c14 = document.getElementById("canvas14");
    var ctx14 = c14.getContext("2d");
    var c15 = document.getElementById("canvas15");
    var ctx15 = c15.getContext("2d");
    var c16 = document.getElementById("canvas16");
    var ctx16 = c16.getContext("2d");
    var c18 = document.getElementById("canvas18");
    var ctx18 = c18.getContext("2d");
    var c19 = document.getElementById("canvas19");
    var ctx19 = c19.getContext("2d");

    // Input A is available if Students sets A and D values
    if((blaa.value != "_" && blae.value != "_" && blai.value != "_"  && blaout.value != "_") || (blah.value != "_" && blaa2.value != "_" && blaa.value != "_")){
        if((bla_a.value != blaa.value) || bla_a.value == "D" || bla_a.value == "D'") {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx1.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx1.fillRect(58, 0, 8, 125);
            ctx5.fillRect(58, 0, 8, 35);
            countFaults()

        } else if (bla_a.value == blaa.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx1.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx1.fillRect(58, 0, 8, 125);
            ctx5.fillRect(58, 0, 8, 35);
        }
    }

    // Input A is available if Students sets A and D values
    if((blaa2.value != "_" && blak.value != "_" && blah.value != "_")){
        if((bla_a2.value != blaa2.value) || bla_a2.value == "D" || bla_a2.value == "D'") {
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx5.fillRect(60, 21, 125, 8);
            ctx6.fillRect(0, 21, 45, 8);
            ctx6.fillRect(43, 21, 8, 125);
            ctx10.fillRect(43, 0, 8, 125);
            ctx14.fillRect(43, 0, 8, 30);
            countFaults()

        } else if (bla_a2.value == blaa2.value) {
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx5.fillRect(60, 21, 125, 8);
            ctx6.fillRect(0, 21, 45, 8);
            ctx6.fillRect(43, 21, 8, 125);
            ctx10.fillRect(43, 0, 8, 125);
            ctx14.fillRect(43, 0, 8, 30);
        }
    }

    if(blab.value != "_" && blaf.value != "_" ){
        if((bla_b.value != blab.value) || bla_b.value == "D" || bla_b.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx2.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx2.fillRect(58, 50, 8, 100);
            ctx2.fillRect(62, 0, 4, 100);
            ctx6.fillRect(58, 0, 8, 30);
            countFaults()

        } else if (bla_b.value == blab.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx2.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx2.fillRect(58, 50, 8, 100);
            ctx2.fillRect(62, 0, 4, 100);
            ctx6.fillRect(58, 0, 8, 30);
        }
    }

    if((blab2.value != "_" && blai.value != "_" && blaout.value != "_" ) || (blab.value != "_" && blaf.value != "_" && blab2.value != "_") ){
        if((bla_b2.value != blab2.value) || bla_b2.value == "D" || bla_b2.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx1.fillStyle = grd;
            ctx2.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx1.fillRect(27, 46, 100, 8);
            ctx1.fillRect(27, 46, 8, 80);
            ctx2.fillRect(0, 46, 64, 8);
            ctx2.fillRect(57, 0, 5, 46);
            ctx5.fillRect(27, 0, 8, 100)
            ctx9.fillRect(27, 0, 8, 30);
            countFaults()

        } else if (bla_b2.value == blab2.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx1.fillStyle = grd;
            ctx2.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx1.fillRect(27, 46, 100, 8);
            ctx1.fillRect(27, 46, 8, 80);
            ctx2.fillRect(0, 46, 64, 8);
            ctx2.fillRect(57, 0, 5, 46);
            ctx5.fillRect(27, 0, 8, 100)
            ctx9.fillRect(27, 0, 8, 30);
        }
    }
    // Input C is available if Students sets C and D values
    if(blaf.value != "_" && blac.value != "_"){
        // green if C is 0, 1 and red if C is D, D'
        if((bla_c.value != blac.value) || bla_c.value == "D" || bla_c.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx2.fillRect(89, 46, 8, 100);
            ctx3.fillRect(0, 46, 63, 8);
            ctx2.fillRect(89, 46, 40, 8);
            ctx3.fillRect(58, 0, 4, 46);
            ctx6.fillRect(89, 0, 8, 29);
            countFaults();

        } else if (bla_c.value == blac.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx2.fillRect(89, 46, 8, 100);
            ctx3.fillRect(0, 46, 63, 8);
            ctx2.fillRect(89, 46, 40, 8);
            ctx3.fillRect(58, 0, 4, 46);
            ctx6.fillRect(89, 0, 8, 29);
        }
    }

    // Input C'
    if((blaf.value != "_" && blac.value != "_" && blac2.value != "_") || (blac2.value != "_" && blaj.value != "_" && blaout.value != "_" )){
        // green if C is 0, 1 and red if C is D, D'
        if((bla_c2.value != blac2.value) || bla_c2.value == "D" || bla_c2.value == "D'") {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx12.fillStyle = grd;
            ctx3.fillRect(62, 46, 70, 8);
            ctx3.fillRect(62, 0, 4, 46);
            ctx4.fillRect(0, 46, 89, 8);
            ctx4.fillRect(89, 46, 8, 100);
            ctx8.fillRect(89, 0, 8, 100);
            ctx12.fillRect(89, 0, 8, 30);
            countFaults();

        } else if (bla_c2.value == blac2.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx12.fillStyle = grd;
            ctx3.fillRect(62, 46, 70, 8);
            ctx3.fillRect(62, 0, 4, 46);
            ctx4.fillRect(0, 46, 89, 8);
            ctx4.fillRect(89, 46, 8, 100);
            ctx8.fillRect(89, 0, 8, 100);
            ctx12.fillRect(89, 0, 8, 30);
        }
    }
    // Input D
    if((blad.value != "_" && blag.value != "_" && blaj.value != "_" && blaout.value != "_")|| (blah2.value != "_" && blad2.value != "_" && blad.value != "_")) {
        // Students first step for the Algo Input SA1 -> E
        if(bla_d.value != blad.value) {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx4.fillStyle = grd;
            ctx4.fillRect(58, 0, 8, 100);
            ctx8.fillStyle = grd;
            ctx8.fillRect(58, 0, 8, 34);
            countFaults();

        } else if (bla_d.value == blad.value) {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx4.fillStyle = grd;
            ctx4.fillRect(58, 0, 8, 100);
            ctx8.fillStyle = grd;
            ctx8.fillRect(58, 0, 8, 34);
        }
    }

    
    // Input D'
    if((blad.value != "_" && blad2.value != "_") || (blah2.value != "_" && blad2.value != "_")) {
        // Students first step for the Algo Input SA1 -> E
        if(bla_d2.value != blad2.value) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx7.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx8.fillRect(0, 20, 61, 8);
            ctx7.fillRect(73, 20, 55, 8);
            ctx7.fillRect(73, 20, 8, 125);
            ctx11.fillRect(73, 0, 8, 125);
            ctx15.fillRect(73, 0, 8, 30);
            countFaults();

        } else if (bla_d2.value == blad2.value) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx7.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx8.fillRect(0, 20, 61, 8);
            ctx7.fillRect(73, 20, 55, 8);
            ctx7.fillRect(73, 20, 8, 125);
            ctx11.fillRect(73, 0, 8, 125);
            ctx15.fillRect(73, 0, 8, 30);
        }
    }

    // declare SA1 F
    if(blaf.value != "_"){
        if(bla_f.value != blaf.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx6.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx6.fillRect(74, 65, 8, 40);
            ctx10.fillRect(74, 0, 8, 18);
            countFaults();

        } else if (bla_f.value == blaf.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx6.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx6.fillRect(74, 65, 8, 40);
            ctx10.fillRect(74, 0, 8, 18);
        }
    }

        // declare SA1 H
    if(blah.value != "_"){
        if(bla_h.value != blah.value) {
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx10.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx14.fillRect(74, 0, 8, 30);
            ctx10.fillRect(74, 18, 4, 55);
            ctx10.fillRect(74, 75, 8, 55);
            countFaults();

        } else if (bla_h.value == blah.value) {
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx10.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx14.fillRect(74, 0, 8, 30);
            ctx10.fillRect(74, 18, 4, 55);
            ctx10.fillRect(74, 75, 8, 55);
        }
    }

    // declare SA1 H'
    if(blah2.value != "_"){
        if(bla_h2.value != blah2.value) {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx10.fillRect(78, 18, 4, 60);
            ctx10.fillRect(80, 71, 60, 8);
            ctx11.fillRect(43, 71, 8, 30);
            ctx11.fillRect(0, 71, 50, 8);
            ctx15.fillRect(43, 0, 8, 30);
            countFaults();

        } else if (bla_h2.value == blah2.value) {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx10.fillRect(78, 18, 4, 60);
            ctx10.fillRect(80, 71, 60, 8);
            ctx11.fillRect(43, 71, 8, 30);
            ctx11.fillRect(0, 71, 50, 8);
            ctx15.fillRect(43, 0, 8, 30);
        }
    }


    // Input E
    // combine Inputs into Gate D, not allowed D = _
    if((blai.value != "_" && blaout.value != "_" && blae.value != "_") || (blaa2.value != "_" && blak.value != "_" && blae.value != "_" ) || (blaf.value != "_" && blab.value != "_" && blai.value != "_" && blab2.value != "_" && blae.value != "_" )) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_e.value != blae.value) {
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx5.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx5.fillRect(58, 71, 8, 30);
            ctx9.fillRect(58, 0, 8, 30);
            countFaults();

        } else if (bla_e.value == blae.value) {
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx5.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx5.fillRect(58, 71, 8, 30);
            ctx9.fillRect(58, 0, 8, 30);
        }
    }

    // Input L
    // combine Inputs into Gate D, not allowed D = _
    if((blah2.value != "_" && blad2.value != "_" && blal.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_l.value != blal.value) {
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx15.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx15.fillRect(58, 65, 8, 13);
            ctx15.fillRect(4, 71, 62, 8);
            ctx15.fillRect(4, 71, 8, 400);
            ctx19.fillRect(4, 0, 8, 30);
            countFaults();

        } else if (bla_l.value == blal.value) {
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx15.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx15.fillRect(58, 65, 8, 13);
            ctx15.fillRect(4, 71, 62, 8);
            ctx15.fillRect(4, 71, 8, 400);
            ctx19.fillRect(4, 0, 8, 30);
        }
    }

    // Input K
    // combine Inputs into Gate D, not allowed D = _
    if((blak.value != "_" && blah.value != "_" && blaa2.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_k.value != blak.value) {
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx14.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx14.fillRect(58, 65, 8, 13);
            ctx14.fillRect(60, 71, 60, 8);
            ctx14.fillRect(113, 71, 8, 400);
            ctx18.fillRect(113, 0, 8, 30);
            countFaults();

        } else if (bla_k.value == blak.value) {
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx14.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx14.fillRect(58, 65, 8, 13);
            ctx14.fillRect(60, 71, 60, 8);
            ctx14.fillRect(113, 71, 8, 400);
            ctx18.fillRect(113, 0, 8, 30);
        }
    }

    // Input G
    // combine Inputs into Gate D, not allowed D = _
    if((blah2.value != "_" && blal.value != "_" && blad2.value != "_" && blag.value != "_") || (blah2.value != "_" && blal.value != "_" && blaout.value != "_" && blaj.value != "_" && blag.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_g.value != blag.value) {
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx8.fillStyle = grd;
            ctx8.fillRect(58, 71, 8, 30);
            ctx12.fillStyle = grd;
            ctx12.fillRect(58, 0, 8, 30);
            countFaults();

        } else if (bla_g.value == blag.value) {
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx8.fillStyle = grd;
            ctx8.fillRect(58, 71, 8, 30);
            ctx12.fillStyle = grd;
            ctx12.fillRect(58, 0, 8, 30);
        }
    }

    // Input J
    // combine Inputs into Gate D, not allowed D = _
    if((blaj.value != "_" && blaout.value != "_" && blak.value != "_"  && blah.value != "_") || (blah.value != "_" && blak.value != "_" && blaa2.value != "_" && blae.value != "_"&& blai.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_j.value != blaj.value) {
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx16.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            // Fill with gradient
            ctx12.fillStyle = grd;            
            ctx15.fillStyle = grd;
            ctx16.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx12.fillRect(73, 65, 8, 90);
            ctx15.fillRect(16, 81, 110, 8);
            ctx15.fillRect(16, 88, 8, 30);
            ctx16.fillRect(73, 0, 8, 88);
            ctx16.fillRect(0, 81, 80, 8);
            ctx19.fillRect(16, 0, 8, 30);
            countFaults();

        } else if (bla_j.value == blaj.value) {
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx16.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            // Fill with gradient
            ctx12.fillStyle = grd;            
            ctx15.fillStyle = grd;
            ctx16.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx12.fillRect(73, 65, 8, 90);
            ctx15.fillRect(16, 81, 110, 8);
            ctx15.fillRect(16, 88, 8, 30);
            ctx16.fillRect(73, 0, 8, 88);
            ctx16.fillRect(0, 81, 80, 8);
            ctx19.fillRect(16, 0, 8, 30);
        }
    }

// Input I
    // combine Inputs into Gate D, not allowed D = _
    if((blal.value != "_" && blaout.value != "_" && blak.value != "_"&& blah.value != "_" && blah2.value != "_" && blai.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_i.value != blai.value) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx9.fillStyle = grd;
            ctx13.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx9.fillRect(43, 65, 8, 40);
            ctx13.fillRect(43, 0, 8, 87);
            ctx13.fillRect(43, 81, 100, 8);
            ctx14.fillRect(0, 81, 101, 8);
            ctx14.fillRect(101, 81, 8, 45);
            ctx18.fillRect(101, 0, 8, 30);
            countFaults();

        } else if (bla_i.value == blai.value) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx9.fillStyle = grd;
            ctx13.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx9.fillRect(43, 65, 8, 40);
            ctx13.fillRect(43, 0, 8, 87);
            ctx13.fillRect(43, 81, 100, 8);
            ctx14.fillRect(0, 81, 101, 8);
            ctx14.fillRect(101, 81, 8, 45);
            ctx18.fillRect(101, 0, 8, 30);
        }
    }


        // declare Output
    // Output is available if Students sets A and E values
    // Output can only be green if in the circuit is no error
    if(blaout.value != "_" && blak.value != "_"&& blal.value != "_" && blai.value != "_" && blaj.value != "_" && blah.value != "_" &&blah2.value != "_" ){
        if(bla_out.value != blaout.value) {
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx18.fillRect(121, 65, 4, 34);
            ctx19.fillRect(0, 65, 4, 34);
            countFaults();
            sol = 0;
            document.getElementById("path_button").style.color = "grey";
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML == "") {
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            grd.addColorStop(0, "green");
            ctx18.fillRect(121, 65, 4, 34);
            ctx19.fillRect(0, 65, 4, 34);
            sol = 1;
            document.getElementById("path_button").style.color = "black";
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML != "") {
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx18.fillRect(121, 65, 4, 34);
            ctx19.fillRect(0, 65, 4, 34);
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
        if (bla_h.value == undefined) {
            alert("There is no value on the output of SA1")
        }
        else if(blah.value != bla_h.value) {
            alert("The output of SA1 must be set to D' as explained in the rules");    
        }
        else if(blaf.value != bla_f.value) {
            alert("The input of SA1 must be set to 0 as explained in the rules");    
        }
        else if(blak.value != bla_k.value) {
            alert("The value of K is currently "+bla_k.value+". It depends on the inputs of H and A2.");    
        }
        else if(blal.value != bla_l.value) {
            alert("The value of L is currently "+bla_l.value+". It depends on the inputs of H2 and D2.");    
        }
        else if((blaout.value != bla_out.value) || bla_out.value == "1" || bla_out.value == "0") {
            alert("The output of the circuit must be set to D or D'as explained in the examples.");    
        }
        else if(blai.value != bla_i.value) {
            alert("The value of I is currently "+bla_i.value+". It depends on the Output and the values of B2 and E.");    
        }
        else if(blaj.value != bla_j.value) {
            alert("The value of J is currently "+bla_j.value+". It depends on the Output and the values of C2 and G.");   
        }
        else if(blac.value != bla_c.value) {
            alert("This must be set to 0 or 1. It depends on the value of F");    
        }
        else if(blab.value != bla_b.value) {
            alert("This must be set to 0 or 1. It depends on the value of F");    
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
    bla_a2.innerText =  bla_a2.value;
    blaa2.innerText =  blaa2.value;
    bla_b.innerText =  bla_b.value;
    blab.innerText =  blab.value;
    bla_b2.innerText =  bla_b2.value;
    blab2.innerText =  blab2.value;
    bla_c.innerText =  bla_c.value;
    blac.innerText =  bla_c.value;
    bla_c2.innerText =  bla_c2.value;
    blac2.innerText =  bla_c2.value;
    bla_d.innerText =  bla_d.value;
    blad.innerText =  blad.value;
    bla_d2.innerText =  bla_d2.value;
    blad2.innerText =  blad2.value;
    bla_e.innerText =  bla_e.value;
    blae.innerText =  blae.value;
    bla_f.innerText =  bla_f.value;
    blaf.innerText =  blaf.value;
    bla_g.innerText =  bla_g.value;
    blag.innerText =  blag.value;
    bla_h.innerText =  bla_h.value;
    blah.innerText =  bla_h.value;
    bla_h2.innerText =  bla_h2.value;
    blah2.innerText =  bla_h2.value;
    bla_i.innerText =  bla_i.value;
    blai.innerText =  blai.value;
    bla_j.innerText =  bla_j.value;
    blaj.innerText =  blaj.value;
    bla_k.innerText =  bla_k.value;
    blak.innerText =  blak.value;
    bla_l.innerText =  bla_l.value;
    blal.innerText =  blal.value;
    bla_m.innerText =  bla_m.value;
    blam.innerText =  bla_m.value;
    bla_n.innerText =  bla_n.value;
    blan.innerText =  blan.value;
    bla_o.innerText =  bla_o.value;
    blao.innerText =  blao.value;
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
        
        bla_a.innerHTML = "1";
        bla_a2.innerHTML = "1";
        bla_b.innerHTML = "1";
        bla_b2.innerHTML = "1";
        bla_c.innerHTML = "1";
        bla_c2.innerHTML = "1";
        bla_d.innerHTML = "1";
        bla_d2.innerHTML = "1";
        bla_e.innerHTML = "0";
        bla_f.innerHTML = "0";
        bla_g.innerHTML = "0";
        bla_h.innerHTML = "D'";
        bla_h2.innerHTML = "D'";
        bla_i.innerHTML = "1";
        bla_j.innerHTML = "1";
        bla_k.innerHTML = "D";
        bla_l.innerHTML = "D";
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
        var c9 = document.getElementById("canvas9");
        var ctx9 = c9.getContext("2d");
        var c10 = document.getElementById("canvas10");
        var ctx10 = c10.getContext("2d");
        var c11 = document.getElementById("canvas11");
        var ctx11 = c11.getContext("2d");
        var c12 = document.getElementById("canvas12");
        var ctx12 = c12.getContext("2d");
        var c13 = document.getElementById("canvas13");
        var ctx13 = c13.getContext("2d");
        var c14 = document.getElementById("canvas14");
        var ctx14 = c14.getContext("2d");
        var c15 = document.getElementById("canvas15");
        var ctx15 = c15.getContext("2d");
        var c16 = document.getElementById("canvas16");
        var ctx16 = c16.getContext("2d");
        var c18 = document.getElementById("canvas18");
        var ctx18 = c18.getContext("2d");
        var c19 = document.getElementById("canvas19");
        var ctx19 = c19.getContext("2d");
        if((blah.value == "D'" && bla_h.value == "D'") || (blah.value == "D" && bla_h.value == "D")) {
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx10.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx14.fillRect(74, 0, 8, 30);
            ctx10.fillRect(74, 18, 4, 55);
            ctx10.fillRect(74, 75, 8, 55);
        }    
        if((blah2.value == "D'" && bla_h2.value == "D'") || (blah2.value == "D" && bla_h2.value == "D")) {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx10.fillRect(78, 18, 4, 60);
            ctx10.fillRect(80, 71, 60, 8);
            ctx11.fillRect(43, 71, 8, 30);
            ctx11.fillRect(0, 71, 50, 8);
            ctx15.fillRect(43, 0, 8, 30);
        }  
        if((blal.value == "D'" && bla_l.value == "D'") || (blal.value == "D" && bla_l.value == "D")) {
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx15.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx15.fillRect(58, 65, 8, 13);
            ctx15.fillRect(4, 71, 62, 8);
            ctx15.fillRect(4, 71, 8, 400);
            ctx19.fillRect(4, 0, 8, 30);
        }  
        if((blak.value == "D'" && bla_k.value == "D'") || (blak.value == "D" && bla_k.value == "D")) {
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx14.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx14.fillRect(58, 65, 8, 13);
            ctx14.fillRect(60, 71, 60, 8);
            ctx14.fillRect(113, 71, 8, 400);
            ctx18.fillRect(113, 0, 8, 30);
        }  
        if((blaout.value == "D'" && bla_out.value == "D'") || (blaout.value == "D" && bla_out.value == "D")) {
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            grd.addColorStop(0, "#E1B400");
            ctx18.fillRect(121, 65, 4, 34);
            ctx19.fillRect(0, 65, 4, 34);
        }
    }   
    getExercise();
}