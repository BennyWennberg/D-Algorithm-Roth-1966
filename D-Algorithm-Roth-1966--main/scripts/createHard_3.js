// declarations
blaa.value = "_";
blab.value = "_";
blac .value = "_";
blad.value = "_";
blad2.value = "_";
blae.value = "_";
blaf.value = "_";
blag.value = "_";
blah .value = "_";
blai.value = "_";
blaj.value = "_";
blak.value = "_";
blal.value = "_";
blam.value = "_";
blan.value = "_";
blao.value = "_";
blaout.value = "_";
// Declare SA1 In - Output
var bla_1 = "_";
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
dropdown_b.onchange = function () {
    blab.value = this.value; // b

}
dropdown_c.onchange = function () {
    blac.value = this.value; // c
}
dropdown_d.onchange = function () {
    blad.value = this.value; // d
}
dropdown_d2.onchange = function () {
    blad2.value = this.value; // d
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
dropdown_i.onchange = function () {
    blai.value = this.value; // d
}
dropdown_j.onchange = function () {
    blaj.value = this.value; // e
}
dropdown_k.onchange = function () {
    blak.value = this.value; // f
}
dropdown_l.onchange = function () {
    blal.value = this.value; // c
}
dropdown_m.onchange = function () {
    blam.value = this.value; // d
}
dropdown_n.onchange = function () {
    blan.value = this.value; // d
}
dropdown_o.onchange = function () {
    blao.value = this.value; // e
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

// done
function getExercise() {
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.moveTo(50, 0);
    ctx1.lineTo(50, 100);
    ctx1.stroke();
    
    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");
    /*
    ctx2.moveTo(25, 0);
    ctx2.lineTo(25, 30);
    ctx2.moveTo(15.625, 30);
    ctx2.lineTo(25, 30);*/
    ctx2.moveTo(15.625, 100);
    ctx2.lineTo(15.625, 0);
    ctx2.moveTo(46.875, 30);
    ctx2.lineTo(46.875, 100);
    ctx2.moveTo(46.875, 30);
    ctx2.lineTo(125, 30);
    ctx2.moveTo(125, 0);
    ctx2.lineTo(125, 30);
    ctx2.stroke();
    ctx2.moveTo(56.25, 100);
    ctx2.lineTo(6.25, 100);
    ctx2.stroke();
    
    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.moveTo(100,0);
    ctx3.lineTo(100,30);
    ctx3.moveTo(31.25,30);
    ctx3.lineTo(31.25,50);
    ctx3.moveTo(62.5,30);
    ctx3.lineTo(62.5,50);
    ctx3.moveTo(0,30);
    ctx3.lineTo(31.25,30);
    ctx3.stroke();
    ctx3.beginPath();
    ctx3.arc(46.875,50,25,25.1,3*Math.PI);
    ctx3.stroke();
    ctx3.moveTo(21.875, 50);
    ctx3.lineTo(71.875, 50);
    ctx3.moveTo(62.5,30);
    ctx3.lineTo(125,30);
    ctx3.stroke();
    ctx3.beginPath();
    ctx3.arc(46.875,80,5,0,2*Math.PI);
    ctx3.stroke();
    ctx3.moveTo(46.875,85);
    ctx3.lineTo(46.875,100);
    ctx3.stroke();
    
    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    ctx4.moveTo(75,0);
    ctx4.lineTo(75,100);
    ctx4.moveTo(0,30);
    ctx4.lineTo(46.875,30);
    ctx4.moveTo(46.875,30);
    ctx4.lineTo(46.875,100);
    ctx4.stroke();
    
    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    ctx5.moveTo(50, 0);
    ctx5.lineTo(50, 100);
    ctx5.stroke();
    
    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    
    ctx6.beginPath();
    ctx6.arc(31.25,00,25,25.1,3*Math.PI);
    ctx6.stroke();
    ctx6.moveTo(56.25, 00);
    ctx6.lineTo(6.25, 00);
    ctx6.stroke();
    ctx6.beginPath();
    ctx6.arc(31.25,30,5,0,2*Math.PI);
    ctx6.stroke();
    ctx6.moveTo(31.25,35);
    ctx6.lineTo(31.25,65);
    ctx6.stroke();
    ctx6.moveTo(46.25,65);
    ctx6.lineTo(16.25,65);
    ctx6.stroke();
    ctx6.moveTo(46.25,65);
    ctx6.lineTo(31.25,90);
    ctx6.stroke();
    ctx6.moveTo(16.25,65);
    ctx6.lineTo(31.25,90);
    ctx6.stroke();
    ctx6.beginPath();
    ctx6.arc(31.25,95,5,0,2*Math.PI);
    ctx6.stroke();
    
    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");
    
    ctx7.moveTo(46.875,0);
    ctx7.lineTo(46.875,100);
    ctx7.stroke();
    
    var c8 = document.getElementById("canvas8");
    var ctx8 = c8.getContext("2d");
    ctx8.moveTo(75,0);
    ctx8.lineTo(75,30);
    ctx8.moveTo(46.875,30);
    ctx8.lineTo(46.875,0);
    ctx8.stroke();
    ctx8.beginPath();
    ctx8.arc(62.5,30,25,25.1,3*Math.PI);
    ctx8.stroke();
    ctx8.moveTo(87.5, 30);
    ctx8.lineTo(37.5, 30);
    ctx8.stroke();
    ctx8.beginPath();
    ctx8.arc(62.5,60,5,0,2*Math.PI);
    ctx8.stroke();
    ctx8.moveTo(62.5,65);
    ctx8.lineTo(62.5,100);
    ctx8.stroke();
    
    var c9 = document.getElementById("canvas9");
    var ctx9 = c9.getContext("2d");
    
    ctx9.moveTo(78.125,20);
    ctx9.lineTo(78.125,50);
    ctx9.moveTo(50,0);
    ctx9.lineTo(50,50);
    ctx9.moveTo(78.125,20);
    ctx9.lineTo(125,20);
    ctx9.stroke();
    ctx9.beginPath();
    ctx9.arc(62.50,50,25,25.1,3*Math.PI);
    ctx9.stroke();
    ctx9.moveTo(87.5, 50);
    ctx9.lineTo(37, 50);
    ctx9.stroke();
    ctx9.beginPath();
    ctx9.arc(62.50,80,5,0,2*Math.PI);
    ctx9.stroke();
    ctx9.moveTo(62.50,85);
    ctx9.lineTo(62.50,100);
    ctx9.stroke();
    
    var c10 = document.getElementById("canvas10");
    var ctx10 = c10.getContext("2d");
    
    ctx10.moveTo(31.25,0);
    ctx10.lineTo(31.25,20);
    ctx10.moveTo(109.375,20);
    ctx10.lineTo(0,20);
    ctx10.moveTo(109.375,20);
    ctx10.lineTo(109.375,50);
    ctx10.moveTo(125,100);
    ctx10.lineTo(125,85);
    ctx10.stroke();
    ctx10.beginPath();
    ctx10.arc(125,50,25,25.1,3*Math.PI);
    ctx10.stroke();
    ctx10.moveTo(100, 50);
    ctx10.lineTo(125, 50);
    ctx10.stroke();
    ctx10.beginPath();
    ctx10.arc(125,80,5,0,2*Math.PI);
    ctx10.stroke();
    
    var c11 = document.getElementById("canvas11");
    var ctx11 = c11.getContext("2d");
    
    ctx11.moveTo(15.625,20);
    ctx11.lineTo(46.875,20);
    ctx11.moveTo(46.875,0);
    ctx11.lineTo(46.875,20);
    ctx11.moveTo(15.625,20);
    ctx11.lineTo(15.625,50);
    ctx11.moveTo(0,100);
    ctx11.lineTo(0,85);
    ctx11.stroke();
    ctx11.beginPath();
    ctx11.arc(0,50,25,25.1,3*Math.PI);
    ctx11.stroke();
    ctx11.moveTo(0, 50);
    ctx11.lineTo(25, 50);
    ctx11.stroke();
    ctx11.beginPath();
    ctx11.arc(0,80,5,0,2*Math.PI);
    ctx11.stroke();
    
    var c12 = document.getElementById("canvas12");
    var ctx12 = c12.getContext("2d");
    ctx12.moveTo(62.5,0);
    ctx12.lineTo(62.5,35);
    ctx12.stroke();
    ctx12.moveTo(50,35);
    ctx12.lineTo(75,35);
    ctx12.stroke();
    ctx12.moveTo(50,35);
    ctx12.lineTo(62.5,60);
    ctx12.stroke();
    ctx12.moveTo(75,35);
    ctx12.lineTo(62.5,60);
    ctx12.stroke();
    ctx12.beginPath();
    ctx12.arc(62.5,65,5,0,2*Math.PI);
    ctx12.stroke();
    ctx12.moveTo(62.5,100);
    ctx12.lineTo(62.5,70);
    ctx12.stroke();
    
    var c13 = document.getElementById("canvas13");
    var ctx13 = c13.getContext("2d");
    
    ctx13.moveTo(62.50,0);
    ctx13.lineTo(62.50,20);
    ctx13.moveTo(62.50,20);
    ctx13.lineTo(109.375,20);
    ctx13.moveTo(109.375,20);
    ctx13.lineTo(109.375,50);
    ctx13.stroke();
    ctx13.beginPath();
    ctx13.arc(125,50,25,25.1,3*Math.PI);
    ctx13.stroke();
    ctx13.moveTo(100, 50);
    ctx13.lineTo(125, 50);
    ctx13.stroke();
    ctx13.beginPath();
    ctx13.arc(125,80,5,0,2*Math.PI);
    ctx13.stroke();
    ctx13.moveTo(125,100);
    ctx13.lineTo(125,85);
    ctx13.stroke();
    
    var c14 = document.getElementById("canvas14");
    var ctx14 = c14.getContext("2d");
    ctx14.moveTo(125,0);
    ctx14.lineTo(125,100);
    ctx14.stroke();
    ctx14.moveTo(15.625,20);
    ctx14.lineTo(125,20);
    ctx14.moveTo(15.625,20);
    ctx14.lineTo(15.625,50);
    ctx14.stroke();
    ctx14.moveTo(0,100);
    ctx14.lineTo(0,85);
    ctx14.stroke();
    ctx14.beginPath();
    ctx14.arc(0,50,25,25.1,3*Math.PI);
    ctx14.stroke();
    ctx14.moveTo(0, 50);
    ctx14.lineTo(25, 50);
    ctx14.stroke();
    ctx14.beginPath();
    ctx14.arc(0,80,5,0,2*Math.PI);
    ctx14.stroke();
    var c15 = document.getElementById("canvas15");
    var ctx15 = c15.getContext("2d");
    ctx15.moveTo(0,0);
    ctx15.lineTo(0,100);
    ctx15.stroke();
    ctx15.moveTo(0,20);
    ctx15.lineTo(109.375,20);
    ctx15.moveTo(109.375,20);
    ctx15.lineTo(109.375,50);
    ctx15.stroke();
    ctx15.beginPath();
    ctx15.arc(125,50,25,25.1,3*Math.PI);
    ctx15.stroke();
    ctx15.moveTo(100, 50);
    ctx15.lineTo(125, 50);
    ctx15.stroke();
    ctx15.beginPath();
    ctx15.arc(125,80,5,0,2*Math.PI);
    ctx15.stroke();
    ctx15.moveTo(125,100);
    ctx15.lineTo(125,85);
    ctx15.stroke();
    
    var c16 = document.getElementById("canvas16");
    var ctx16 = c16.getContext("2d");
    ctx16.moveTo(62.5,0);
    ctx16.lineTo(62.5,20);
    ctx16.stroke();
    ctx16.moveTo(15.625,20);
    ctx16.lineTo(62.5,20);
    ctx16.moveTo(15.625,20);
    ctx16.lineTo(15.625,50);
    ctx16.stroke();
    ctx16.moveTo(0,100);
    ctx16.lineTo(0,85);
    ctx16.stroke();
    ctx16.beginPath();
    ctx16.arc(0,50,25,25.1,3*Math.PI);
    ctx16.stroke();
    ctx16.moveTo(0, 50);
    ctx16.lineTo(25, 50);
    ctx16.stroke();
    ctx16.beginPath();
    ctx16.arc(0,80,5,0,2*Math.PI);
    ctx16.stroke();
    
    
    var c17 = document.getElementById("canvas17");
    var ctx17 = c17.getContext("2d");
    ctx17.moveTo(125, 0);
    ctx17.lineTo(125, 20);
    ctx17.stroke();
    
    
    var c18 = document.getElementById("canvas18");
    var ctx18 = c18.getContext("2d");
    ctx18.moveTo(125,0);
    ctx18.lineTo(125, 50);
    ctx18.stroke();
    ctx18.moveTo(109.375, 20);
    ctx18.lineTo(109.375, 50);
    ctx18.moveTo(109.375, 20);
    ctx18.lineTo(0, 20);
    ctx18.moveTo(0, 0);
    ctx18.lineTo(0, 20);
    ctx18.stroke();
    ctx18.beginPath();
    ctx18.arc(125,50,25,25.1,3*Math.PI);
    ctx18.stroke();
    ctx18.moveTo(100, 50);
    ctx18.lineTo(125, 50);
    ctx18.stroke();
    ctx18.beginPath();
    ctx18.arc(125,80,5,0,2*Math.PI);
    ctx18.stroke();
    ctx18.moveTo(125,85);
    ctx18.lineTo(125,100);
    ctx18.stroke();
    
    var c19 = document.getElementById("canvas19");
    var ctx19 = c19.getContext("2d");
    
    ctx19.moveTo(125,20);
    ctx19.lineTo(125, 0);
    ctx19.moveTo(125,20);
    ctx19.lineTo(15.625, 20);
    ctx19.moveTo(0,0);
    ctx19.lineTo(0, 50);
    ctx19.stroke();
    ctx19.moveTo(15.625, 20);
    ctx19.lineTo(15.625, 50);
    ctx19.stroke();
    ctx19.beginPath();
    ctx19.arc(0,50,25,25.1,3*Math.PI);
    ctx19.stroke();
    ctx19.moveTo(25, 50);
    ctx19.lineTo(0, 50);
    ctx19.stroke();
    ctx19.beginPath();
    ctx19.arc(0,80,5,0,2*Math.PI);
    ctx19.stroke();
    ctx19.moveTo(0,85);
    ctx19.lineTo(0,100);
    ctx19.stroke();
    
    var c20 = document.getElementById("canvas20");
    var ctx20 = c20.getContext("2d");
    ctx20.moveTo(0, 0);
    ctx20.lineTo(0, 20);
    ctx20.stroke();
}

// muss noch
function solve_path_byStudent() {
    // reset error_messager
    error_message.innerHTML = "";
    count++;

    // declare the beginning bcs there is no other options for the solution
    bla_c.value = "1";
    bla_f.value = "D";
    
    //Independent Inputs
    // declare A
    if(blaj.value != "_" ) {
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
    } else if(blaa.value != "_" && blaj.value == "_"){
    error_message_collection(7);
    }    

    // Output A depending on F
    if(blaf.value != bla_f.value){
        bla_a.value = "Input"
    }
    
    //Independent Inputs
    // declare B
    if(blaf.value != "_" ) {
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
    }else if(blab.value != "_" && blaf.value == "_"){
        error_message_collection(7);
    } 

    // Output B depending on F
    if(blaf.value != bla_f.value){
        bla_b.value = "Input"
    }   

    // declare C
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



    // declare D
    if(blac.value != "_" ) {
        if(blad.value == "0") {
            bla_d.value = "0"
            error_message_collection(0);
        } else if(blad.value == "1") {
            bla_d.value = "1"
            error_message_collection(0);
        } else if(blad.value == "D") {
            bla_d.value = "D"
            error_message_collection(2);
        } else if(blad.value == "D'") {
            bla_d.value = "D'"
            error_message_collection(2);
        }
    }  else if(blad.value != "_" && blac.value == "_"){
        error_message_collection(7);
    }  


    // declare D2
    if(blac.value != "_" ) {
        if(blad2.value == "0") {
            bla_d2.value = "0"
            error_message_collection(0);
        } else if(blad2.value == "1") {
            bla_d2.value = "1"
            error_message_collection(0);
        } else if(blad2.value == "D") {
            bla_d2.value = "D"
            error_message_collection(2);
        } else if(blad2.value == "D'") {
            bla_d2.value = "D'"
            error_message_collection(2);
        }
    }else if(blad2.value != "_" && blac.value == "_"){
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

    // Output D depending on C
    if(blac.value != bla_c.value){
        bla_d.value = "Input"
        bla_d2.value = "Input"
    }


    // declare E
    if(blad2.value != "_" || blai.value != "_") {
        if(blae.value == "0") {
            bla_e.value = "0"
            error_message_collection(0);
        } else if(blae.value == "1") {
            bla_e.value = "1"
            error_message_collection(0);
        } else if(blae.value == "D") {
            bla_e.value = "D"
            error_message_collection(2);
        } else if(blae.value == "D'") {
            bla_e.value = "D'"
            error_message_collection(2);
        }
    } else if((blae.value != "_" && blad2.value == "_") || (blae.value != "_" && blai.value == "_")){
        error_message_collection(7);
    } 

    // Output D depending on C
    if(blaf.value != bla_f.value){
        bla_e.value = "Input"
    }

    // declare Gates from SA1 F and H,H'
    if(bla_c.value == "1") {
        bla_f.value ="D";
    } else if(bla_c.value == "0") {
        bla_f.value = "0";
    }

    if(blaf.value == "0" ) {
        error_message_collection(6);
        error_message_collection(3);
    } else if(blaf.value == "D'" ) {
        error_message_collection(6);
    }


    // declare H with B and F
    if (bla_e.value != "_" && bla_f.value != "_") {
        if((bla_b.value == "0") && (bla_f.value == "0")) {
            bla_h.value = "1";
        } else if ((bla_b.value == "0") && (bla_f.value == "1")) {
            bla_h.value = "1";
        } else if((bla_b.value == "0") && (bla_f.value == "D")) {
            bla_h.value = "1";
        } else if ((bla_b.value == "0") && (bla_f.value == "D'")) {
            bla_h.value = "1";

        } else if((bla_b.value == "1") && (bla_f.value == "0")) {
            bla_h.value = "1";
        } else if ((bla_b.value == "1") && (bla_f.value == "1")) {
            bla_h.value = "0";
        } else if((bla_b.value == "1") && (bla_f.value == "D")) {
            bla_h.value = "D'";
        } else if ((bla_b.value == "1") && (bla_f.value == "D'")) {
            bla_h.value = "D";

        } else if((bla_b.value == "D") && (bla_f.value == "0")) {
            bla_h.value = "1";
        } else if((bla_b.value == "D") && (bla_f.value == "1")) {
            bla_h.value = "D'";
        } else if ((bla_b.value == "D") && (bla_f.value == "D")) {
            bla_h.value = "D'"; 
        } else if((bla_b.value == "D") && (bla_f.value == "D'")) {
            bla_h.value = "1";

        } else if ((bla_b.value == "D'") && (bla_f.value == "0")) {
            bla_h.value = "1";
        }else if((bla_b.value == "D'") && (bla_f.value == "1")) {
            bla_h.value = "D";
        } else if ((bla_b.value == "D'") && (bla_f.value == "D")) {
            bla_h.value = "1";
        } else if((bla_b.value == "D'") && (bla_f.value == "D'")) {
            bla_h.value = "D";
        } 
    }

    // Output H depending on B and F
    if((blab.value != bla_b.value) || (blaf.value != bla_f.value)) {
        bla_h.value = "Input"
    }

    // Declare J
    if(bla_h.value == "0" ) {
        bla_j.value = "1"
    } else if(bla_h.value == "1" ) {
        bla_j.value = "0"
    } else if(bla_h.value == "D" ) {
        bla_j.value = "D'"
    } else if(bla_h.value == "D'") {
        bla_j.value = "D"
    } 

    // declare G with C and D
    if((bla_c.value == "0") && (bla_d.value == "0")) {
        bla_g.value = "1";
    } else if ((bla_c.value == "0") && (bla_d.value == "1")) {
        bla_g.value = "1";
    } else if((bla_c.value == "0") && (bla_d.value == "D")) {
        bla_g.value = "1";
    } else if ((bla_c.value == "0") && (bla_d.value == "D'")) {
        bla_g.value = "1";

    } else if((bla_c.value == "1") && (bla_d.value == "0")) {
        bla_g.value = "1";
    } else if ((bla_c.value == "1") && (bla_d.value == "1")) {
        bla_g.value = "0";
    } else if((bla_c.value == "1") && (bla_d.value == "D")) {
        bla_g.value = "D'";
    } else if ((bla_c.value == "1") && (bla_d.value == "D'")) {
        bla_g.value = "D";

    } else if((bla_c.value == "D") && (bla_d.value == "0")) {
        bla_g.value = "1";
    } else if((bla_c.value == "D") && (bla_d.value == "1")) {
        bla_g.value = "D'";
    } else if ((bla_c.value == "D") && (bla_d.value == "D")) {
        bla_g.value = "D'"; 
    } else if((bla_c.value == "D") && (bla_d.value == "D'")) {
        bla_g.value = "1";
    } else if ((bla_c.value == "D'") && (bla_d.value == "0")) {
        bla_g.value = "1";
    }else if((bla_c.value == "D'") && (bla_d.value == "1")) {
        bla_g.value = "D";
    } else if ((bla_c.value == "D'") && (bla_d.value == "D")) {
        bla_g.value = "1";
    } else if((bla_c.value == "D'") && (bla_d.value == "D'")) {
        bla_g.value = "D";
    }  

    // Output G depending on C and D
    if((blac.value != bla_c.value) || (blad.value != bla_d.value)) {
        bla_g.value = "Input"
    }


    // declare I with D2 and E
    if((bla_e.value == "0") && (bla_d2.value == "0")) {
        bla_i.value = "1";
    } else if ((bla_e.value == "0") && (bla_d2.value == "1")) {
        bla_i.value = "1";
    } else if((bla_e.value == "0") && (bla_d2.value == "D")) {
        bla_i.value = "1";
    } else if ((bla_e.value == "0") && (bla_d2.value == "D'")) {
        bla_i.value = "1";

    } else if((bla_e.value == "1") && (bla_d2.value == "0")) {
        bla_i.value = "1";
    } else if ((bla_e.value == "1") && (bla_d2.value == "1")) {
        bla_i.value = "0";
    } else if((bla_e.value == "1") && (bla_d2.value == "D")) {
        bla_i.value = "D'";
    } else if ((bla_e.value == "1") && (bla_d2.value == "D'")) {
        bla_i.value = "D";
    } else if((bla_e.value == "D") && (bla_d2.value == "0")) {
        bla_i.value = "1";
    } else if((bla_e.value == "D") && (bla_d2.value == "1")) {
        bla_i.value = "D'";
    } else if ((bla_e.value == "D") && (bla_d2value == "D")) {
        bla_i.value = "D'"; 
    } else if((bla_e.value == "D") && (bla_d2.value == "D'")) {
        bla_i.value = "1";
    } else if ((bla_e.value == "D'") && (bla_d2.value == "0")) {
        bla_i.value = "1";
    }else if((bla_e.value == "D'") && (bla_d2.value == "1")) {
        bla_i.value = "D";
    } else if ((bla_e.value == "D'") && (bla_d2.value == "D")) {
        bla_i.value = "1";
    } else if((bla_e.value == "D'") && (bla_d2.value == "D'")) {
        bla_i.value = "D";
    }  

    // Output I depending on D2 and E
    if((blad2.value != bla_d2.value) || (blae.value != bla_e.value)) {
        bla_i.value = "Input"
    }

    // declare M 
    if(bla_i.value == "0" ) {
        bla_m.value = "1"
    } else if(bla_i.value == "1" ) {
        bla_m.value = "0"
    } else if(bla_i.value == "D" ) {
        bla_m.value = "D'"
    } else if(bla_i.value == "D'") {
        bla_m.value = "D"
    } 

    // Output M depending on I
    if(blai.value != bla_i.value){
        bla_m.value = "Input"
    }


    // declare K with A and J
    if((bla_a.value == "0") && (bla_j.value == "0")) {
        bla_k.value = "1";
    } else if ((bla_a.value == "0") && (bla_j.value == "1")) {
        bla_k.value = "1";
    } else if((bla_a.value == "0") && (bla_j.value == "D")) {
        bla_k.value = "1";
    } else if ((bla_a.value == "0") && (bla_j.value == "D'")) {
        bla_k.value = "1";
    } else if((bla_a.value == "1") && (bla_j.value == "0")) {
        bla_k.value = "1";
    } else if ((bla_a.value == "1") && (bla_j.value == "1")) {
        bla_k.value = "0";
    } else if((bla_a.value == "1") && (bla_j.value == "D")) {
        bla_k.value = "D'";
    } else if ((bla_a.value == "1") && (bla_j.value == "D'")) {
        bla_k.value = "D";
    } else if((bla_a.value == "D") && (bla_j.value == "0")) {
        bla_k.value = "1";
    } else if((bla_a.value == "D") && (bla_j.value == "1")) {
        bla_k.value = "D'";
    } else if ((bla_a.value == "D") && (bla_j.value == "D")) {
        bla_k.value = "D'"; 
    } else if((bla_a.value == "D") && (bla_j.value == "D'")) {
        bla_k.value = "1";
    } else if ((bla_a.value == "D'") && (bla_j.value == "0")) {
        bla_k.value = "1";
    }else if((bla_a.value == "D'") && (bla_j.value == "1")) {
        bla_k.value = "D";
    } else if ((bla_a.value == "D'") && (bla_j.value == "D")) {
        bla_k.value = "1";
    } else if((bla_a.value == "D'") && (bla_j.value == "D'")) {
        bla_k.value = "D";
    }  

    // Output K depending on A and J
    if((blaa.value != bla_a.value) || (blaj.value != bla_j.value)) {
        bla_k.value = "Input"
    }

     // declare L with G and J
     if((bla_g.value == "0") && (bla_j.value == "0")) {
        bla_l.value = "1";
    } else if ((bla_g.value == "0") && (bla_j.value == "1")) {
        bla_l.value = "1";
    } else if((bla_g.value == "0") && (bla_j.value == "D")) {
        bla_l.value = "1";
    } else if ((bla_g.value == "0") && (bla_j.value == "D'")) {
        bla_l.value = "1";
    } else if((bla_g.value == "1") && (bla_j.value == "0")) {
        bla_l.value = "1";
    } else if ((bla_g.value == "1") && (bla_j.value == "1")) {
        bla_l.value = "0";
    } else if((bla_g.value == "1") && (bla_j.value == "D")) {
        bla_l.value = "D'";
    } else if ((bla_g.value == "1") && (bla_j.value == "D'")) {
        bla_l.value = "D";
    } else if((bla_g.value == "D") && (bla_j.value == "0")) {
        bla_l.value = "1";
    } else if((bla_g.value == "D") && (bla_j.value == "1")) {
        bla_l.value = "D'";
    } else if ((bla_g.value == "D") && (bla_j.value == "D")) {
        bla_l.value = "D'"; 
    } else if((bla_g.value == "D") && (bla_j.value == "D'")) {
        bla_l.value = "1";
    } else if ((bla_g.value == "D'") && (bla_j.value == "0")) {
        bla_l.value = "1";
    }else if((bla_g.value == "D'") && (bla_j.value == "1")) {
        bla_l.value = "D";
    } else if ((bla_g.value == "D'") && (bla_j.value == "D")) {
        bla_l.value = "1";
    } else if((bla_g.value == "D'") && (bla_j.value == "D'")) {
        bla_l.value = "D";
    }  

    // Output L depending on J and G
    if((blaj.value != bla_j.value) || (blag.value != bla_g.value)) {
        bla_l.value = "Input"
    }

    // declare N with K and L
    if((bla_k.value == "0") && (bla_l.value == "0")) {
        bla_n.value = "1";
    } else if ((bla_k.value == "0") && (bla_l.value == "1")) {
        bla_n.value = "1";
    } else if((bla_k.value == "0") && (bla_l.value == "D")) {
        bla_n.value = "1";
    } else if ((bla_k.value == "0") && (bla_l.value == "D'")) {
        bla_n.value = "1";

    } else if((bla_k.value == "1") && (bla_l.value == "0")) {
        bla_n.value = "1";
    } else if ((bla_k.value == "1") && (bla_l.value == "1")) {
        bla_n.value = "0";
    } else if((bla_k.value == "1") && (bla_l.value == "D")) {
        bla_n.value = "D'";
    } else if ((bla_k.value == "1") && (bla_l.value == "D'")) {
        bla_n.value = "D";

    } else if((bla_k.value == "D") && (bla_l.value == "0")) {
        bla_n.value = "1";
    } else if((bla_k.value == "D") && (bla_l.value == "1")) {
        bla_n.value = "D'";
    } else if ((bla_k.value == "D") && (bla_l.value == "D")) {
        bla_n.value = "D'"; 
    } else if((bla_k.value == "D") && (bla_l.value == "D'")) {
        bla_n.value = "1";
    } else if ((bla_k.value == "D'") && (bla_l.value == "0")) {
        bla_n.value = "1";
    }else if((bla_k.value == "D'") && (bla_l.value == "1")) {
        bla_n.value = "D";
    } else if ((bla_k.value == "D'") && (bla_l.value == "D")) {
        bla_n.value = "1";
    } else if((bla_k.value == "D'") && (bla_l.value == "D'")) {
        bla_n.value = "D";
    }  

    // Output N depending on K and L
    if((blak.value != bla_k.value) || (blal.value != bla_l.value)) {
        bla_n.value = "Input"
    }

    // declare o with m and L
    if((bla_m.value == "0") && (bla_l.value == "0")) {
        bla_o.value = "1";
    } else if ((bla_m.value == "0") && (bla_l.value == "1")) {
        bla_o.value = "1";
    } else if((bla_m.value == "0") && (bla_l.value == "D")) {
        bla_o.value = "1";
    } else if ((bla_m.value == "0") && (bla_l.value == "D'")) {
        bla_o.value = "1";

    } else if((bla_m.value == "1") && (bla_l.value == "0")) {
        bla_o.value = "1";
    } else if ((bla_m.value == "1") && (bla_l.value == "1")) {
        bla_o.value = "0";
    } else if((bla_m.value == "1") && (bla_l.value == "D")) {
        bla_o.value = "D'";
    } else if ((bla_m.value == "1") && (bla_l.value == "D'")) {
        bla_o.value = "D";

    } else if((bla_m.value == "D") && (bla_l.value == "0")) {
        bla_o.value = "1";
    } else if((bla_m.value == "D") && (bla_l.value == "1")) {
        bla_o.value = "D'";
    } else if ((bla_m.value == "D") && (bla_l.value == "D")) {
        bla_o.value = "D'"; 
    } else if((bla_m.value == "D") && (bla_l.value == "D'")) {
        bla_o.value = "1";
    } else if ((bla_m.value == "D'") && (bla_l.value == "0")) {
        bla_o.value = "1";
    }else if((bla_m.value == "D'") && (bla_l.value == "1")) {
        bla_o.value = "D";
    } else if ((bla_m.value == "D'") && (bla_l.value == "D")) {
        bla_o.value = "1";
    } else if((bla_m.value == "D'") && (bla_l.value == "D'")) {
        bla_o.value = "D";
    }  

    // Output O depending on L and M
    if((blal.value != bla_l.value) || (blam.value != bla_m.value)) {
        bla_o.value = "Input"
    }


    // declare output with Input I, K, L, J
    // first I and K into Out1
    if((bla_n.value == "0") && (bla_l.value == "0")) {
        bla_1 = "0";
    } else if ((bla_n.value == "0") && (bla_l.value == "1")) {
        bla_1 = "0";
    } else if((bla_n.value == "0") && (bla_l.value == "D")) {
        bla_1 = "0";
    } else if ((bla_n.value == "0") && (bla_l.value == "D'")) {
        bla_1 = "0";

    } else if((bla_n.value == "1") && (bla_l.value == "0")) {
        bla_1 = "0";
    } else if ((bla_n.value == "1") && (bla_l.value == "1")) {
        bla_1 = "1";
    } else if((bla_n.value == "1") && (bla_l.value == "D")) {
        bla_1 = "D";
    } else if ((bla_n.value == "1") && (bla_l.value == "D'")) {
        bla_1 = "D'";

    } else if((bla_n.value == "D") && (bla_l.value == "0")) {
        bla_1 = "0";
    } else if((bla_n.value == "D") && (bla_l.value == "1")) {
        bla_1 = "D";
    } else if ((bla_n.value == "D") && (bla_l.value == "D")) {
        bla_1 = "D"; 
    } else if((bla_n.value == "D") && (bla_l.value == "D'")) {
        bla_1 = "0";

    } else if ((bla_n.value == "D'") && (bla_l.value == "0")) {
        bla_1 = "0";
    }else if((bla_n.value == "D'") && (bla_l.value == "1")) {
        bla_1 = "D'";
    } else if ((bla_n.value == "D'") && (bla_l.value == "D")) {
        bla_1 = "0";
    } else if((bla_n.value == "D'") && (bla_l.value == "D'")) {
        bla_1 = "D'";
    }  

    // Last Out1 and Out2 into Output
    if((bla_1 == "0") && (bla_o.value == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if ((bla_1 == "0") && (bla_o.value == "1")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if((bla_1 == "0") && (bla_o.value == "D")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if ((bla_1 == "0") && (bla_o.value == "D'")) {
        bla_out.value = "1";
        error_message_collection(4);

    } else if((bla_1 == "1") && (bla_o.value == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if ((bla_1 == "1") && (bla_o.value == "1")) {
        bla_out.value = "0";
        error_message_collection(4);
    } else if((bla_1 == "1") && (bla_o.value == "D")) {
        bla_out.value = "D'";
    } else if ((bla_1 == "1") && (bla_o.value == "D'")) {
        bla_out.value = "D";

    } else if((bla_1 == "D") && (bla_o.value == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if((bla_1 == "D") && (bla_o.value == "1")) {
        bla_out.value = "D'";
    } else if ((bla_1 == "D") && (bla_o.value == "D")) {
        bla_out.value = "D'"; 
    } else if((bla_1 == "D") && (bla_o.value == "D'")) {
        bla_out.value = "1";
        error_message_collection(4);

    } else if ((bla_1 == "D'") && (bla_o.value == "0")) {
        bla_out.value = "1";
        error_message_collection(4);
    }else if((bla_1 == "D'") && (bla_o.value == "1")) {
        bla_out.value = "D";
    } else if ((bla_1 == "D'") && (bla_o.value == "D")) {
        bla_out.value = "1";
        error_message_collection(4);
    } else if((bla_1 == "D'") && (bla_o.value == "D'")) {
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
    var c17 = document.getElementById("canvas17");
    var ctx17 = c17.getContext("2d");
    var c18 = document.getElementById("canvas18");
    var ctx18 = c18.getContext("2d");
    var c19 = document.getElementById("canvas19");
    var ctx19 = c19.getContext("2d");    
    var c20 = document.getElementById("canvas20");
    var ctx20 = c20.getContext("2d");

    // Input A is available if Students sets A and D values
   if(blaa.value != "_" && blaj.value != "_" && blah.value != "_"  && blaf.value != "_") {
        if((bla_a.value != blaa.value) || bla_a.value == "D" || bla_a.value == "D'") {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx1.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx1.fillRect(46, 0, 8, 100);
            ctx5.fillRect(46, 0, 8, 100);
            ctx9.fillRect(46, 0, 8, 50);
            countFaults()

        } else if (bla_a.value == blaa.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx1.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx1.fillRect(46, 0, 8, 100);
            ctx5.fillRect(46, 0, 8, 100);
            ctx9.fillRect(46, 0, 8, 50);
        }
    }
   if(blab.value != "_" && blaf.value != "_" ){
        if((bla_b.value != blab.value) || bla_b.value == "D" || bla_b.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx2.fillStyle = grd;
            ctx2.fillRect(12, 0, 8, 100);
            countFaults()

        } else if (bla_b.value == blab.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx2.fillStyle = grd;
            ctx2.fillRect(12, 0, 8, 100);
        }
    }
    // Input C is available if Students sets C and D values
    if(blac.value != "_" ){
        // green if C is 0, 1 and red if C is D, D'
        if((bla_c.value != blac.value) || bla_c.value == "D" || bla_c.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx2.fillRect(43, 26, 8, 19);
            ctx2.fillRect(43, 26, 100, 8);
            ctx2.fillRect(121, 0, 8, 26);
            ctx3.fillRect(27, 26, 8, 25);
            ctx3.fillRect(0, 26, 35, 8);
            ctx3.fillRect(0, 0, 2, 33);
            countFaults();

        } else if (bla_c.value == blac.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx2.fillRect(43, 26, 8, 19);
            ctx2.fillRect(43, 26, 100, 8);
            ctx2.fillRect(121, 0, 8, 26);
            ctx3.fillRect(27, 26, 8, 25);
            ctx3.fillRect(0, 26, 35, 8);
            ctx3.fillRect(0, 0, 2, 33);
        }
   }

    // declare SA1 ->D, not allowed D = _
    if(blad.value != "_" && blac.value != "_") {
        // Students first step for the Algo Input SA1 -> E
        if(bla_d.value != blad.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx3.fillStyle = grd;
            ctx3.fillRect(58, 26, 8, 25);
            ctx3.fillRect(58, 26, 42, 8);
            ctx3.fillRect(96, 0, 4, 33);
            countFaults();

        } else if (bla_d.value == blad.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx3.fillStyle = grd;
            ctx3.fillRect(58, 26, 8, 25);
            ctx3.fillRect(58, 26, 42, 8);
            ctx3.fillRect(96, 0, 4, 33);
        }
    }

    // declare SA1 ->D, not allowed D = _
   if(blad.value != "_" && blad2 != "_" && blac.value != "_") {
        // Students first step for the Algo Input SA1 -> E
        if(bla_d2.value != blad2.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx3.fillRect(100, 26, 42, 8);
            ctx3.fillRect(100, 0, 4, 33);
            ctx4.fillRect(43, 26, 8, 100);
            ctx4.fillRect(0, 26, 45, 8);
            ctx8.fillRect(43, 0, 8, 30);
            countFaults();

        } else if (bla_d2.value == blad2.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx3.fillRect(100, 26, 42, 8);
            ctx3.fillRect(100, 0, 4, 33);
            ctx4.fillRect(43, 26, 8, 100);
            ctx4.fillRect(0, 26, 45, 8);
            ctx8.fillRect(43, 0, 8, 30);
        }
    }


    // declare SA1 F
    if(blaf.value != "_"){
        if(bla_f.value != blaf.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx2.fillStyle = grd;
            ctx2.fillRect(43, 45, 8, 70);
            countFaults();

        } else if (bla_f.value == blaf.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx2.fillStyle = grd;
            ctx2.fillRect(43, 50, 8, 70);
        }
    }


    // combine Inputs into Gate D, not allowed D = _
    if((blac.value != "_" && blad.value != "_" && blad2.value != "_"&& blae.value != "_") || (blai.value != "_" && blam.value != "_" && blal.value != "_" && blae.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_e.value != blae.value) {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx8.fillRect(71, 0, 8, 30);
            ctx4.fillRect(71, 0, 8, 100);
            countFaults();

        } else if (bla_e.value == blae.value) {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx8.fillRect(71, 0, 8, 30);
            ctx4.fillRect(71, 0, 8, 100);
        }
    }

    if(blaf.value != "_" && blah.value != "_" ) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_h.value != blah.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx6.fillStyle = grd;
            ctx6.fillRect(27, 35, 8, 30);
            countFaults();

        } else if (bla_h.value == blah.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx6.fillStyle = grd;
            ctx6.fillRect(27, 35, 8, 30);
        }
    }

    if(blaf.value != "_" && blah.value != "_" && blaj.value != "_") {
        // Students first step for the Algo Input SA1 -> D
        if(bla_j.value != blaj.value) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx9.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx9.fillRect(74, 16, 55, 8);
            ctx9.fillRect(74, 16, 8, 35);        
            ctx10.fillRect(27, 0, 8, 20);
            ctx10.fillRect(0, 16, 113, 8);
            ctx10.fillRect(105, 16, 8, 35);
            countFaults();

        } else if (bla_j.value == blaj.value) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx9.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx9.fillRect(74, 16, 55, 8);
            ctx9.fillRect(74, 16, 8, 35);        
            ctx10.fillRect(27, 0, 8, 20);
            ctx10.fillRect(0, 16, 113, 8);
            ctx10.fillRect(105, 16, 8, 35);
        }
    }


    if((blac.value != "_" && blag.value != "_") || (blaf.value != "_" && blah.value != "_" && blac.value != "_" && blag.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_g.value != blag.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx3.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx3.fillRect(43, 85, 8, 100);
            ctx7.fillRect(43, 0, 8, 100);
            ctx11.fillRect(43, 0, 8, 24)
            ctx11.fillRect(12, 20, 8, 30);
            ctx11.fillRect(12, 16, 37, 8);
            countFaults();

        } else if (bla_g.value == blag.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx3.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx3.fillRect(43, 85, 8, 100);
            ctx7.fillRect(43, 0, 8, 100);
            ctx11.fillRect(43, 0, 8, 24)
            ctx11.fillRect(12, 20, 8, 30);
            ctx11.fillRect(12, 16, 37, 8);
        }
    }

    if((blaout.value != "_" && blal.value != "_" && blao.value != "_" && blam.value != "_" && blai.value != "_" ) || (blac.value != "_" && blad2.value != "_" && blae.value != "_" && blai.value != "_")) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_i.value != blai.value) {
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx8.fillStyle = grd;
            ctx12.fillStyle = grd;      
            ctx8.fillRect(58.5, 65, 8, 40);
            ctx12.fillRect(58.5, 0, 8, 35);
            countFaults();

        } else if (bla_i.value == blai.value) {
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx8.fillStyle = grd;
            ctx12.fillStyle = grd;      
            ctx8.fillRect(58.5, 65, 8, 40);
            ctx12.fillRect(58.5, 0, 8, 35);
        }
    }

    if(blaf.value != "_" && blah.value != "_" && blaj.value != "_" && blak.value != "_" ) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_k.value != blak.value) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx9.fillStyle = grd;
            ctx13.fillStyle = grd;
            ctx9.fillRect(58.5, 85, 8, 20);
            ctx13.fillRect(58.5, 16, 53, 8);
            ctx13.fillRect(58.5, 0, 8, 20);
            ctx13.fillRect(105, 16, 8, 34);
            countFaults();

        } else if (bla_k.value == blak.value) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx9.fillStyle = grd;
            ctx13.fillStyle = grd;
            ctx9.fillRect(58.5, 85, 8, 20);
            ctx13.fillRect(58.5, 16, 53, 8);
            ctx13.fillRect(58.5, 0, 8, 20);
            ctx13.fillRect(105, 16, 8, 34);
        }
    }

    if(blaf.value != "_" && blah.value != "_" && blaj.value != "_" && blal.value != "_" ) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_l.value != blal.value) {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx10.fillRect(121, 85, 4, 20); 
            ctx11.fillRect(0, 85, 4, 20);  
            ctx14.fillRect(12, 16, 120, 8);
            ctx14.fillRect(12, 16, 8, 35);
            ctx14.fillRect(121, 0, 8, 100);
            ctx15.fillRect(0, 16, 112, 8);
            ctx15.fillRect(105, 16, 8, 35);
            ctx15.fillRect(0, 0, 4, 100);
            ctx18.fillRect(121, 0, 4, 50); 
            ctx19.fillRect(0, 0, 4, 50); 
            countFaults();

        } else if (bla_l.value == blal.value) {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx10.fillRect(121, 85, 4, 20); 
            ctx11.fillRect(0, 85, 4, 20);  
            ctx14.fillRect(12, 16, 120, 8);
            ctx14.fillRect(12, 16, 8, 35);
            ctx14.fillRect(121, 0, 8, 100);
            ctx15.fillRect(0, 16, 112, 8);
            ctx15.fillRect(105, 16, 8, 35);
            ctx15.fillRect(0, 0, 4, 100);
            ctx18.fillRect(121, 0, 4, 50); 
            ctx19.fillRect(0, 0, 4, 50); 
        }
    }

    if((blaf.value != "_" && blah.value != "_" && blaj.value != "_" && blaout.value != "_"&& blao.value != "_"&& blam.value != "_"|| (blac.value != "_" && blad2.value != "_" && blae.value != "_" && blai.value != "_" && blam.value != "_")) ) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_m.value != blam.value) {
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            var grd = ctx16.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx12.fillStyle = grd;
            ctx16.fillStyle = grd; 
            ctx16.fillRect(58.5, 0, 8, 20);
            ctx16.fillRect(11.625, 16, 55.5, 8);
            ctx16.fillRect(11.625, 16, 8, 35);
            ctx12.fillRect(58.5, 70, 8, 40);
            countFaults();

        } else if (bla_m.value == blam.value) {
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            var grd = ctx16.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx12.fillStyle = grd;
            ctx16.fillStyle = grd; 
            ctx16.fillRect(58.5, 0, 8, 20);
            ctx16.fillRect(11.625, 16, 55.5, 8);
            ctx16.fillRect(11.625, 16, 8, 35);
            ctx12.fillRect(58.5, 70, 8, 40);
        }
    }

    if(blaf.value != "_" && blah.value != "_" && blaj.value != "_" && blal.value != "_" && blak.value != "_" && blan.value != "_" ) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_n.value != blan.value) {
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx17.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx13.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx17.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx13.fillRect(121, 85, 4, 24);
            ctx14.fillRect(0, 85, 4, 20);
            ctx17.fillRect(121, 0, 4, 24);
            ctx18.fillRect(105, 16, 8, 35);
            ctx18.fillRect(0, 16, 110, 8); 
            ctx18.fillRect(0, 0, 4, 24);
            countFaults();

        } else if (bla_n.value == blan.value) {
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx17.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx13.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx17.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx13.fillRect(121, 85, 4, 24);
            ctx14.fillRect(0, 85, 4, 20);
            ctx17.fillRect(121, 0, 4, 24);
            ctx18.fillRect(105, 16, 8, 35);
            ctx18.fillRect(0, 16, 110, 8); 
            ctx18.fillRect(0, 0, 4, 24);
        }
    }

    if(blaf.value != "_" && blah.value != "_" && blaj.value != "_" && blal.value != "_" && blao.value != "_") {
        // Students first step for the Algo Input SA1 -> D
        if(bla_o.value != blao.value) {
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx16.createLinearGradient(0, 0, 200, 0);
            var grd = ctx20.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx15.fillStyle = grd;
            ctx16.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx20.fillStyle = grd;
            ctx15.fillRect(121, 85, 4, 24);
            ctx16.fillRect(0, 85, 4, 20);
            ctx19.fillRect(121, 0, 4, 20);
            ctx19.fillRect(12, 20, 8, 30);
            ctx19.fillRect(12, 16, 120, 8); 
            ctx20.fillRect(0, 0, 4, 24);
            countFaults();

        } else if (bla_o.value == blao.value) {
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx16.createLinearGradient(0, 0, 200, 0);
            var grd = ctx20.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx15.fillStyle = grd;
            ctx16.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx20.fillStyle = grd;
            ctx15.fillRect(121, 85, 4, 24);
            ctx16.fillRect(0, 85, 4, 20);
            ctx19.fillRect(121, 0, 4, 20);
            ctx19.fillRect(12, 20, 8, 30);
            ctx19.fillRect(12, 16, 120, 8); 
            ctx20.fillRect(0, 0, 4, 24);
        }
    }
        // declare Output
    // Output is available if Students sets A and E values
    // Output can only be green if in the circuit is no error
    if(blaf.value != "_" && blah.value != "_" && blaj.value != "_" && blal.value != "_" && blan.value != "_" && blao.value != "_" && blaout.value != "_") {
        if(bla_out.value != blaout.value) {
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx18.fillRect(121, 85, 4, 35);
            ctx19.fillRect(0, 85, 4, 35);
            countFaults();
            sol = 0;
            document.getElementById("path_button").style.color = "grey";
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML == "") {
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx18.fillRect(121, 85, 4, 35);
            ctx19.fillRect(0, 85, 4, 35);
            sol = 1;
            document.getElementById("path_button").style.color = "black";
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML != "") {
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx18.fillRect(121, 85, 4, 35);
            ctx19.fillRect(0, 85, 4, 35);
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
        if (bla_f.value == undefined) {
            alert("There is no value on the output of SA1")
        }
        else if(blaf.value != bla_f.value) {
            alert("The output of SA0 must be set to D as explained in the rules.");    
        }
        else if(blac.value != bla_c.value) {
            alert("The input of SA0 must be set to 1 as explained in the rules.");    
        }
        else if(blah.value != bla_h.value) {
            alert("The value of H is currently "+bla_h.value+". It depends on the inputs of B and F.");    
        }
        else if(blaj.value != bla_j.value) {
            alert("The value of J is currently "+bla_j.value+"as explained in the rules.");    
        }
        else if(blak.value != bla_k.value) {
            alert("The value of K is currently "+bla_k.value+". It dependson the inputs of J and A.");    
        }
        else if(blal.value != bla_l.value) {
            alert("The value of L is currently "+bla_l.value+". It dependson the inputs of J and G.");    
        }
        else if(blan.value != bla_n.value) {
            alert("The value of N is currently "+bla_n.value+". It dependson the inputs of K and L.");    
        }
        else if((blaout.value != bla_out.value) || bla_out.value == "1" || bla_out.value == "0") {
            alert("The output of the circuit must be set to D or D'as explained in the examples.");    
        }
        else if(blao.value != bla_o.value) {
            alert("The value of O is currently "+bla_o.value+".");    
        }
        else if(blam.value != bla_m.value) {
            alert("The value of M is currently "+bla_m.value+". It depends on the Output and the value of L.");   
        }
        else if(blai.value != bla_i.value) {
            alert("The value of I is currently "+bla_i.value+". It depends on the Output and the values of D2 and E.");   
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
        bla_b.innerHTML = "1";
        bla_c.innerHTML = "1";
        bla_d.innerHTML = "1";
        bla_d2.innerHTML = "1";
        bla_e.innerHTML = "0";
        bla_f.innerHTML = "D";
        bla_g.innerHTML = "0";
        bla_h.innerHTML = "D'";
        bla_i.innerHTML = "1";
        bla_j.innerHTML = "D";
        bla_k.innerHTML = "D'";
        bla_l.innerHTML = "1";
        bla_m.innerHTML = "0";
        bla_n.innerHTML = "D";
        bla_0.innerHTML = "1";
        bla_out.innerHTML = "D";
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
        var c17 = document.getElementById("canvas17");
        var ctx17 = c17.getContext("2d");
        var c18 = document.getElementById("canvas18");
        var ctx18 = c18.getContext("2d");
        var c19 = document.getElementById("canvas19");
        var ctx19 = c19.getContext("2d");
        if((blaf.value == "D'" && bla_f.value == "D'") || (blaf.value == "D" && bla_f.value == "D")) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx2.fillStyle = grd;
            ctx2.fillRect(43, 45, 8, 70);
        }    
        if((blah.value == "D'" && bla_h.value == "D'") || (blah.value == "D" && bla_h.value == "D")) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx6.fillStyle = grd;
            ctx6.fillRect(27, 35, 8, 30);
        }  
        if((blaj.value == "D'" && bla_j.value == "D'") || (blaj.value == "D" && bla_j.value == "D")) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx9.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx9.fillRect(74, 16, 55, 8);
            ctx9.fillRect(74, 16, 8, 35);        
            ctx10.fillRect(27, 0, 8, 20);
            ctx10.fillRect(0, 16, 113, 8);
            ctx10.fillRect(105, 16, 8, 35);
        }
        if((blal.value == "D'" && bla_l.value == "D'") || (blal.value == "D" && bla_l.value == "D")) {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx15.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx15.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx10.fillRect(121, 85, 4, 20); 
            ctx11.fillRect(0, 85, 4, 20);  
            ctx14.fillRect(12, 16, 120, 8);
            ctx14.fillRect(12, 16, 8, 35);
            ctx14.fillRect(121, 0, 8, 100);
            ctx15.fillRect(0, 16, 112, 8);
            ctx15.fillRect(105, 16, 8, 35);
            ctx15.fillRect(0, 0, 4, 100);
            ctx18.fillRect(121, 0, 4, 50); 
            ctx19.fillRect(0, 0, 4, 50); 
        }  
        if((blak.value == "D'" && bla_k.value == "D'") || (blak.value == "D" && bla_k.value == "D")) {
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx9.fillStyle = grd;
            ctx13.fillStyle = grd;
            ctx9.fillRect(58.5, 85, 8, 20);
            ctx13.fillRect(58.5, 16, 53, 8);
            ctx13.fillRect(58.5, 0, 8, 20);
            ctx13.fillRect(105, 16, 8, 34);
        }  
        if((blan.value == "D'" && bla_n.value == "D'") || (blan.value == "D" && bla_n.value == "D")) {
            var grd = ctx13.createLinearGradient(0, 0, 200, 0);
            var grd = ctx14.createLinearGradient(0, 0, 200, 0);
            var grd = ctx17.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx13.fillStyle = grd;
            ctx14.fillStyle = grd;
            ctx17.fillStyle = grd;
            ctx18.fillStyle = grd;
            ctx13.fillRect(121, 85, 4, 24);
            ctx14.fillRect(0, 85, 4, 20);
            ctx17.fillRect(121, 0, 4, 24);
            ctx18.fillRect(105, 16, 8, 35);
            ctx18.fillRect(0, 16, 110, 8); 
            ctx18.fillRect(0, 0, 4, 24);
        }  
        if((blaout.value == "D'" && bla_out.value == "D'") || (blaout.value == "D" && bla_out.value == "D")) {
            var grd = ctx19.createLinearGradient(0, 0, 200, 0);
            var grd = ctx18.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "#E1B400");
            ctx18.fillStyle = grd;
            ctx19.fillStyle = grd;
            ctx18.fillRect(121, 85, 4, 35);
            ctx19.fillRect(0, 85, 4, 35);
        }
    }   
    getExercise();
}