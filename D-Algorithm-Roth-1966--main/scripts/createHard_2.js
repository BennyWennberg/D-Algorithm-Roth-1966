// declarations
blaa.value = "_";
blab.value = "_";
blac.value = "_";
blad.value = "_";
blae.value = "_";
blaf.value = "_";
blag.value = "_";
blah.value = "_";
blai.value = "_";
blaj.value = "_";
blaout.value = "_";
// Declare SA1 In - Output
var faults = 0;
var trys = 0;
var hints = 0;

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
dropdown_g.onchange = function () {
    blag.value = this.value; // g
}
dropdown_h.onchange = function () {
    blah.value = this.value; // h
}
dropdown_i.onchange = function () {
    blai.value = this.value; // i
}
dropdown_j.onchange = function () {
    blaj.value = this.value; // j
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
    ctx1.moveTo(62.5,0);
    ctx1.lineTo(62.5,20);
    ctx1.moveTo(62.5,20);
    ctx1.lineTo(109.375,20);
    ctx1.moveTo(109.375,20);
    ctx1.lineTo(109.375,50);
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
    ctx2.moveTo(62.5,0);
    ctx2.lineTo(62.5,20);
    ctx2.moveTo(62.5,20);
    ctx2.lineTo(15.625,20);
    ctx2.moveTo(15.625,20);
    ctx2.lineTo(15.625,50);
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
    ctx3.moveTo(62.5,0);
    ctx3.lineTo(62.5,100);
    ctx3.stroke();

    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    ctx4.moveTo(62.5,0);
    ctx4.lineTo(62.5,50);
    ctx4.stroke();
    ctx4.moveTo(62.5,90);
    ctx4.lineTo(62.5,100);
    ctx4.stroke();
    ctx4.moveTo(50,50);
    ctx4.lineTo(75,50);
    ctx4.stroke();
    ctx4.moveTo(50,50);
    ctx4.lineTo(62.5,80);
    ctx4.stroke();
    ctx4.moveTo(75,50);
    ctx4.lineTo(62.5,80);
    ctx4.stroke();
    ctx4.beginPath();
    ctx4.arc(62.5,85,5,0,2*Math.PI);
    ctx4.stroke();

    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    ctx5.moveTo(125,0);
    ctx5.lineTo(125,20);
    ctx5.moveTo(125,20);
    ctx5.lineTo(46.875,20);
    ctx5.moveTo(46.875,20);
    ctx5.lineTo(46.875,60);
    ctx5.moveTo(78.125,80);
    ctx5.lineTo(78.125,100);
    ctx5.moveTo(78.125,80);
    ctx5.lineTo(125,80);
    ctx5.stroke();
    ctx5.moveTo(35,60);
    ctx5.lineTo(60,60);
    ctx5.stroke();
    ctx5.moveTo(35,60);
    ctx5.lineTo(47.5,90);
    ctx5.stroke();
    ctx5.moveTo(60,60);
    ctx5.lineTo(47.5,90);
    ctx5.stroke();
    ctx5.beginPath();
    ctx5.arc(47.5,95,5,0,2*Math.PI);
    ctx5.stroke();


    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    ctx6.moveTo(62.5, 0);
    ctx6.moveTo(0,0);
    ctx6.lineTo(0,20);
    ctx6.moveTo(0,20);
    ctx6.lineTo(125,20);
    ctx6.moveTo(93.75,80);
    ctx6.lineTo(93.75,100);
    ctx6.moveTo(93.75,80);
    ctx6.lineTo(0,80);
    ctx6.stroke();


    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");
    ctx7.moveTo(62.5,0);
    ctx7.lineTo(62.5,50);
    ctx7.moveTo(31.25,20);
    ctx7.lineTo(31.25,50);
    ctx7.moveTo(0,20);
    ctx7.lineTo(31.25,20);
    ctx7.stroke();
    ctx7.beginPath();
    ctx7.arc(46.875,50,25,25.1,3*Math.PI);
    ctx7.stroke();
    ctx7.moveTo(21.875, 50);
    ctx7.lineTo(71.875, 50);
    ctx7.moveTo(62.5,20);
    ctx7.lineTo(125,20);
    ctx7.stroke();
    ctx7.beginPath();
    ctx7.arc(46.875,80,5,0,2*Math.PI);
    ctx7.stroke();
    ctx7.moveTo(46.875,85);
    ctx7.lineTo(46.875,100);
    ctx7.stroke();

    var c8 = document.getElementById("canvas8");
    var ctx8 = c8.getContext("2d");
    ctx8.moveTo(62.5,0);
    ctx8.lineTo(62.5,50);
    ctx8.moveTo(0,20);
    ctx8.lineTo(31.25,20);
    ctx8.moveTo(31.25,20);
    ctx8.lineTo(31.25,50);
    ctx8.stroke();
    ctx8.moveTo(46.875,85);
    ctx8.lineTo(46.875,100);
    ctx8.stroke();
    ctx8.beginPath();
    ctx8.arc(46.875,50,25,25.1,3*Math.PI);
    ctx8.stroke();
    ctx8.moveTo(71.875, 50);
    ctx8.lineTo(21.875, 50);
    ctx8.stroke();
    ctx8.beginPath();
    ctx8.arc(46.875,80,5,0,2*Math.PI);
    ctx8.stroke();

    var c9 = document.getElementById("canvas9");
    var ctx9 = c9.getContext("2d");
    ctx9.moveTo(46.875,30);
    ctx9.lineTo(46.875,0);
    ctx9.moveTo(78.125,0);
    ctx9.lineTo(78.125,30);
    ctx9.stroke();
    ctx9.beginPath();
    ctx9.arc(62.5,30,25,25.1,3*Math.PI);
    ctx9.stroke();
    ctx9.moveTo(87.5, 30);
    ctx9.lineTo(37.5, 30);
    ctx9.stroke();
    ctx9.beginPath();
    ctx9.arc(62.5,60,5,0,2*Math.PI);
    ctx9.stroke();
    ctx9.moveTo(62.5,65);
    ctx9.lineTo(62.5,100);
    ctx9.stroke();

    var c10 = document.getElementById("canvas10");
    var ctx10 = c10.getContext("2d");
    ctx10.moveTo(93.75,30);
    ctx10.lineTo(93.75,0);
    ctx10.moveTo(93.75,30);
    ctx10.lineTo(125,30);
    ctx10.moveTo(125,75);
    ctx10.lineTo(125,100);
    ctx10.stroke();

    var c11 = document.getElementById("canvas11");
    var ctx11 = c11.getContext("2d");
    ctx11.moveTo(46.875,75);
    ctx11.lineTo(46.875,0);
    ctx11.moveTo(109.375,75);
    ctx11.lineTo(0,75);
    ctx11.moveTo(46.875,30);
    ctx11.lineTo(0,30);
    ctx11.moveTo(0,100);
    ctx11.lineTo(0,75);
    ctx11.moveTo(109.375,75);
    ctx11.lineTo(109.375,100);
    ctx11.stroke();


    var c12 = document.getElementById("canvas12");
    var ctx12 = c12.getContext("2d");
    ctx12.moveTo(46.875,75);
    ctx12.lineTo(46.875,0);
    ctx12.moveTo(46.875,75);
    ctx12.lineTo(15.625,75);
    ctx12.moveTo(15.625,75);
    ctx12.lineTo(15.625,100);
    ctx12.stroke();

    var c13 = document.getElementById("canvas13");
    var ctx13 = c13.getContext("2d");
    ctx13.moveTo(62.5,0);
    ctx13.lineTo(62.5,35);
    ctx13.stroke();
    ctx13.moveTo(62.5,70);
    ctx13.lineTo(62.5,85);
    ctx13.moveTo(125,85);
    ctx13.lineTo(62.5,85);
    ctx13.stroke();
    ctx13.moveTo(50,35);
    ctx13.lineTo(75,35);
    ctx13.stroke();
    ctx13.moveTo(50,35);
    ctx13.lineTo(62.5,60);
    ctx13.stroke();
    ctx13.moveTo(75,35);
    ctx13.lineTo(62.5,60);
    ctx13.stroke();
    ctx13.beginPath();
    ctx13.arc(62.5,65,5,0,2*Math.PI);
    ctx13.stroke();

    var c14 = document.getElementById("canvas14");
    var ctx14 = c14.getContext("2d");
    ctx14.moveTo(0,85);
    ctx14.lineTo(110.1875,85);
    ctx14.moveTo(110.1875,100)
    ctx14.lineTo(110.1875,85)
    ctx14.moveTo(125,100)
    ctx14.lineTo(125,0)
    ctx14.stroke();


    var c15 = document.getElementById("canvas15");
    var ctx15 = c15.getContext("2d");
    ctx15.moveTo(109.375,0);
    ctx15.lineTo(109.375,25);
    ctx15.moveTo(125,85);
    ctx15.lineTo(14.8125,85);
    ctx15.moveTo(14.8125,100)
    ctx15.lineTo(14.8125,85)
    ctx15.moveTo(0,100)
    ctx15.lineTo(0,0)
    ctx15.moveTo(125,85);
    ctx15.lineTo(125,60);
    ctx15.stroke();
    ctx15.beginPath();
    ctx15.arc(125,25,25,25.1,3*Math.PI);
    ctx15.stroke();
    ctx15.moveTo(100, 25);
    ctx15.lineTo(125, 25);
    ctx15.stroke();
    ctx15.beginPath();
    ctx15.arc(125,55,5,0,2*Math.PI);
    ctx15.stroke();

    var c16 = document.getElementById("canvas16");
    var ctx16 = c16.getContext("2d");
    ctx16.moveTo(15.625,0);
    ctx16.lineTo(15.625,25);
    ctx16.moveTo(0,85);
    ctx16.lineTo(0,60);
    ctx16.stroke();
    ctx16.beginPath();
    ctx16.arc(0,25,25,25.1,3*Math.PI);
    ctx16.stroke();
    ctx16.moveTo(25, 25);
    ctx16.lineTo(0, 25);
    ctx16.stroke();
    ctx16.beginPath();
    ctx16.arc(0,55,5,0,2*Math.PI);
    ctx16.stroke();

    var c18 = document.getElementById("canvas18");
    var ctx18 = c18.getContext("2d");
    ctx18.moveTo(110.1875,0);
    ctx18.lineTo(110.1875,25);
    ctx18.moveTo(125,0);
    ctx18.lineTo(125,25);
    ctx18.moveTo(125,100);
    ctx18.lineTo(125,60);
    ctx18.stroke();
    ctx18.beginPath();
    ctx18.arc(125,25,25,25.1,3*Math.PI);
    ctx18.stroke();
    ctx18.moveTo(100, 25);
    ctx18.lineTo(125, 25);
    ctx18.stroke();
    ctx18.beginPath();
    ctx18.arc(125,55,5,0,2*Math.PI);
    ctx18.stroke();

    
    var c19 = document.getElementById("canvas19");
    var ctx19 = c19.getContext("2d");
    ctx19.moveTo(14.8125,0);
    ctx19.lineTo(14.8125,25);
    ctx19.moveTo(0,0);
    ctx19.lineTo(0,25);
    ctx19.moveTo(0,100);
    ctx19.lineTo(0,60);
    ctx19.stroke();
    ctx19.beginPath();
    ctx19.arc(0,25,25,25.1,3*Math.PI);
    ctx19.stroke();
    ctx19.moveTo(0, 25);
    ctx19.lineTo(25, 25);
    ctx19.stroke();
    ctx19.beginPath();
    ctx19.arc(0,55,5,0,2*Math.PI);
    ctx19.stroke();
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
        if(blaa.value == "D") {
            bla_a.value = "D"
            error_message_collection(2);
        } else if(blaa.value == "D'") {
            bla_a.value = "D'"
            error_message_collection(2);
        } else if(blaa.value == "0") {
            bla_a.value = "0"
        } else if(blaa.value == "1") {
            bla_a.value = "1"
        } else if(blae.value != "_" && blad.value == "_"){
        error_message_collection(7);
        }
    //Independent Inputs
    // declare B
    if(blab.value == "D") {
        bla_b.value = "D"
        error_message_collection(2);
    } else if(blab.value == "D'") {
        bla_b.value = "D'"
        error_message_collection(2);
    } else if(blab.value == "0") {
        bla_b.value = "0"
    } else if(blab.value == "1") {
        bla_b.value = "1"
    }
        // declare C
    if(blaf.value != "_") {
        if(blac.value == "0") {
            bla_c.value = "0"
        } else if(blac.value == "1") {
            bla_c.value = "1"
        } else if(blac.value == "D") {
            bla_c.value = "D"
            error_message_collection(2);
        } else if(blac.value == "D'") {
            bla_c.value = "D'"
            error_message_collection(2);
        }
    } else if(blaf.value != "_" && blab.value == "_"){
        error_message_collection(7);
    }


    // declare E with A and D
    if((bla_out.value == "0") && (bla_d.value == "0")) {
        bla_e.value = "1";
    } else if ((bla_out.value == "0") && (bla_d.value == "1")) {
        bla_e.value = "1";
    } else if((bla_out.value == "0") && (bla_d.value == "D")) {
        bla_e.value = "1";
    } else if ((bla_out.value == "0") && (bla_d.value == "D'")) {
        bla_e.value = "1";

    } else if((bla_out.value == "1") && (bla_d.value == "0")) {
        bla_e.value = "1";
    } else if ((bla_out.value == "1") && (bla_d.value == "1")) {
        bla_e.value = "0";
    } else if((bla_out.value == "1") && (bla_d.value == "D")) {
        bla_e.value = "D'";
    } else if ((bla_out.value == "1") && (bla_d.value == "D'")) {
        bla_e.value = "D";

    } else if((bla_out.value == "D") && (bla_d.value == "0")) {
        bla_e.value = "1";
    } else if((bla_out.value == "D") && (bla_d.value == "1")) {
        bla_e.value = "D'";
    } else if ((bla_out.value == "D") && (bla_d.value == "D")) {
        bla_e.value = "D'"; 
    } else if((bla_out.value == "D") && (bla_d.value == "D'")) {
        bla_e.value = "1";

    } else if ((bla_out.value == "D'") && (bla_d.value == "0")) {
        bla_e.value = "1";
    }else if((bla_out.value == "D'") && (bla_d.value == "1")) {
        bla_e.value = "D";
    } else if ((bla_out.value == "D'") && (bla_d.value == "D")) {
        bla_e.value = "1";
    } else if((bla_out.value == "D'") && (bla_d.value == "D'")) {
        bla_e.value = "D";
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
    if (bla_e.value != "_" && bla_f.value != "_") {
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

    // declare Gates from SA1
    if(bla_f.value == "0") {
        bla_d.value ="D'";
    } else if(bla_f.value == "1") {
        bla_d.value = "1";
    }

    // declare output with Input E and F
    if(blad.value != "_"){
        if((bla_e.value == "0") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if ((bla_e.value == "0") && (bla_d.value == "1")) {
            bla_out.value = "1";
            error_message_collection(3);
            error_message_collection(4);
        } else if((bla_e.value == "0") && (bla_d.value == "D")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if ((bla_e.value == "0") && (bla_d.value == "D'")) {
            bla_out.value = "1";
            error_message_collection(4);
    
    
        } else if((bla_e.value == "1") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(3);
        } else if ((bla_e.value == "1") && (bla_d.value == "1")) {
            bla_out.value = "0";
            error_message_collection(3);
        } else if((bla_e.value == "1") && (bla_d.value == "D")) {
            bla_out.value = "D'";
            error_message_collection(2);
        } else if ((bla_e.value == "1") && (bla_d.value == "D'")) {
            bla_out.value = "D";
            
    
    
        } else if((bla_e.value == "D") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(3);
            error_message_collection(4);
        } else if((bla_e.value == "D") && (bla_d.value == "1")) {
            bla_out.value = "D'";
            error_message_collection(3);
        } else if ((bla_e.value == "D") && (bla_d.value == "D")) {
            bla_out.value = "D'";
            error_message_collection(6);
        } else if((bla_e.value == "D") && (bla_d.value == "D'")) {
            bla_out.value = "1";
            error_message_collection(4);
    
        } else if ((bla_e.value == "D'") && (bla_d.value == "0")) {
            bla_out.value = "1";
            error_message_collection(3);
            error_message_collection(4);
        }else if((bla_e.value == "D'") && (bla_d.value == "1")) {
            bla_out.value = "D";
            error_message_collection(10);
        } else if ((bla_e.value == "D'") && (bla_d.value == "D")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if((bla_e.value == "D'") && (bla_d.value == "D'")) {
            bla_out.value = "D";
            error_message_collection(3);
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
    var c9 = document.getElementById("canvas9");
    var ctx9 = c9.getContext("2d");
    var c10 = document.getElementById("canvas10");
    var ctx10 = c10.getContext("2d");
    var c11 = document.getElementById("canvas11");
    var ctx11 = c11.getContext("2d");
    var c12 = document.getElementById("canvas12");
    var ctx12 = c12.getContext("2d");

    // Input A is available if Students sets A and D values
    if((blaa.value != "_" && blae.value != "_" && blag.value != "_" )){
        if((bla_a.value != blaa.value) || bla_a.value == "D" || bla_a.value == "D'") {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx1.fillStyle = grd;
            ctx1.fillRect(58, 0, 8, 34);
            countFaults()

        } else if (bla_a.value == blaa.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx1.fillStyle = grd;
            ctx1.fillRect(58, 0, 8, 34);
        }
    }
    if(blab.value != "_" && blaf.value != "_"){
        if((bla_b.value != blab.value) || bla_b.value == "D" || bla_b.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx2.fillStyle = grd;
            ctx2.fillRect(58, 0, 8, 34);
            ctx2.fillRect(58, 26, 55, 8);
            ctx2.fillRect(105, 26, 8, 23);
            countFaults()

        } else if (bla_b.value == blab.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx2.fillStyle = grd;
            ctx2.fillRect(58, 0, 8, 34);
            ctx2.fillRect(58, 26, 55, 8);
            ctx2.fillRect(105, 26, 8, 23);
        }
    }
    // Input C is available if Students sets C and D values
    if(blaf.value != "_" && blac.value != "_"){
        // green if C is 0, 1 and red if C is D, D'
        if((bla_c.value != blac.value) || bla_c.value == "D" || bla_c.value == "D'") {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx3.fillStyle = grd;
            ctx3.fillRect(58, 0, 8, 34);
            ctx3.fillRect(11, 26, 55, 8);
            ctx3.fillRect(11, 26, 8, 23);
            countFaults();

        } else if (bla_c.value == blac.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx3.fillStyle = grd;
            ctx3.fillRect(58, 0, 8, 34);
            ctx3.fillRect(11, 26, 55, 8);
            ctx3.fillRect(11, 26, 8, 23);
        }
    }

    // declare SA1 ->D, not allowed D = _
    if(blad.value != "_" && blag.value != "_") {
        // Students first step for the Algo Input SA1 -> E
        if((bla_d.value != blad.value) || bla_d.value == "D" || bla_d.value == "D'") {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx4.fillRect(58, 0, 8, 100);
            ctx8.fillRect(58, 0, 8, 33);
            ctx8.fillRect(11, 26, 55, 8);
            ctx8.fillRect(11, 26, 8, 23);
           countFaults();

        } else if (bla_d.value == blad.value) {
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx4.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx4.fillRect(58, 0, 8, 100);
            ctx8.fillRect(58, 0, 8, 33);
            ctx8.fillRect(11, 26, 55, 8);
            ctx8.fillRect(11, 26, 8, 23);
        }
    }

    // combine Inputs into Gate D, not allowed D = _
    if(blae.value != "_" && blag.value != "_") {
        // Students first step for the Algo Input SA1 -> D
        if((bla_e.value != blae.value) || bla_e.value == "D" || bla_e.value == "D'") {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx1.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx1.fillRect(58, 70, 8, 34);
            ctx5.fillRect(58, 0, 8, 26);
            ctx5.fillRect(58, 26, 55, 8);
            ctx5.fillRect(105, 26, 8, 23);
            countFaults();

        } else if (bla_e.value == blae.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx1.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx1.fillRect(58, 70, 8, 34);
            ctx5.fillRect(58, 0, 8, 26);
            ctx5.fillRect(58, 26, 55, 8);
            ctx5.fillRect(105, 26, 8, 23);
        }
    }

    // declare SA1 F
    if(blaf.value != "_"){
        if(bla_f.value != blaf.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);      
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx2.fillRect(121, 85, 8, 34);
            ctx3.fillRect(0, 85, 4, 34);
            ctx6.fillRect(121, 0, 8, 10);
            ctx7.fillRect(0, 0, 4, 10);

            countFaults();

        } else if (bla_f.value == blaf.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);      
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "green");
            ctx2.fillRect(121, 85, 8, 34);
            ctx3.fillRect(0, 85, 4, 34);
            ctx6.fillRect(121, 0, 8, 10);
            ctx7.fillRect(0, 0, 4, 10);
        }
    }

    // G
    if(blag.value != "_") {
        // Students first step for the Algo Input SA1 -> D
        if(bla_g.value != blag.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx6.fillRect(121, 10, 8, 20);
            ctx6.fillRect(11, 26, 120, 8);
            ctx6.fillRect(11, 26, 8, 23);
            ctx7.fillRect(0, 10, 4, 20);
            ctx7.fillRect(0, 26, 113, 8);
            ctx7.fillRect(105, 26, 8, 23);
            countFaults();

        } else if (bla_g.value == blag.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx6.fillRect(121, 10, 8, 20);
            ctx6.fillRect(11, 26, 120, 8);
            ctx6.fillRect(11, 26, 8, 23);
            ctx7.fillRect(0, 10, 4, 20);
            ctx7.fillRect(0, 26, 113, 8);
            ctx7.fillRect(105, 26, 8, 23);
        }
    }

    // H
    if(blag.value != "_" && blah.value != "_") {
        // Students first step for the Algo Input SA1 -> D
        if(bla_h.value != blah.value) {
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx5.fillRect(121, 85, 4, 26);
            ctx6.fillRect(0, 85, 4, 26);
            ctx9.fillRect(121, 0, 4, 34);
            ctx10.fillRect(0, 0, 4, 34);
            ctx10.fillRect(0, 26, 113, 8);
            ctx10.fillRect(105, 26, 8, 23);

            countFaults();

        } else if (bla_h.value == blah.value) {
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            var grd = ctx9.createLinearGradient(0, 0, 200, 0);
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx9.fillStyle = grd;
            ctx10.fillStyle = grd;
            ctx5.fillRect(121, 85, 4, 26);
            ctx6.fillRect(0, 85, 4, 26);
            ctx9.fillRect(121, 0, 4, 34);
            ctx10.fillRect(0, 0, 4, 34);
            ctx10.fillRect(0, 26, 113, 8);
            ctx10.fillRect(105, 26, 8, 23);
        }
    }

    // I
    if(blag.value != "_" && blai.value != "_") {
        // Students first step for the Algo Input SA1 -> D
        if(bla_i.value != blai.value) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx7.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx12.fillStyle = grd;
            ctx7.fillRect(121, 85, 4, 26);
            ctx8.fillRect(0, 85, 4, 26);
            ctx11.fillRect(121, 0, 4, 34);
            ctx11.fillRect(90, 26, 35, 8);
            ctx12.fillRect(0, 0, 4, 34);
            countFaults();

        } else if (bla_i.value == blai.value) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            var grd = ctx8.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            var grd = ctx12.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx7.fillStyle = grd;
            ctx8.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx12.fillStyle = grd;
            ctx7.fillRect(121, 85, 4, 26);
            ctx8.fillRect(0, 85, 4, 26);
            ctx11.fillRect(121, 0, 4, 34);
            ctx11.fillRect(90, 26, 35, 8);
            ctx12.fillRect(0, 0, 4, 34);
        }
    }


    // J
    if((blag.value != "_" && blah.value != "_" && blae.value != "_" && blaout.value != "_" && blaj.value != "_") ||(blag.value != "_" && blai.value != "_" && blaj.value != "_") ) {
        // Students first step for the Algo Input SA1 -> D
        if(bla_j.value != blaj.value) {
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx11.fillStyle = grd;
            ctx11.fillRect(11, 26, 46, 8);
            ctx11.fillRect(11, 26, 8, 23);
            countFaults();

        } else if (bla_j.value == blaj.value) {
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx11.fillStyle = grd;
            ctx11.fillRect(11, 26, 46, 8);
            ctx11.fillRect(11, 26, 8, 23);
        }
    }



        // declare Output
    // Output is available if Students sets A and E values
    // Output can only be green if in the circuit is no error
    if(blaout.value != "_" && blad.value != "_"){
        if(bla_out.value != blaout.value) {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx10.fillRect(121, 85, 4, 26);
            ctx11.fillRect(0, 85, 4, 26); 
            countFaults();

        } else if ((bla_out.value == blaout.value) && error_message.innerHTML == "") {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            
            ctx10.fillRect(121, 85, 4, 26);
            ctx11.fillRect(0, 85, 4, 26); 
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML != "") {
            var grd = ctx10.createLinearGradient(0, 0, 200, 0);
            var grd = ctx11.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");
            ctx10.fillStyle = grd;
            ctx11.fillStyle = grd;
            ctx10.fillRect(121, 85, 4, 26);
            ctx11.fillRect(0, 85, 4, 26); 
            countFaults();
        }
    }

    getExercise();
}

function error_message_collection(error_number) {
    if(error_number == 0) {
        error_message.innerHTML = "";
    } else if(error_number == 10) {
        error_message.innerHTML += "";
    } else if(error_number == 1) {
        error_message.innerHTML += "There is no Error."    
    } else if(error_number == 2) {
        error_message.innerHTML += "There is no Stuck-At-Fault! <br><br>"
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
    }
}

function give_one_solution() {
    countHints();
    
    if(hints < 6) {  
        alert("Hint button use "+hints+" of 5");
        if (bla_e.value == undefined) {
            alert("There is no value on the output of SA1")
        }
        else if(blae.value != bla_e.value) {
            alert("The output of SA1 must be set to D' as explained in the rules");    
        }
        else if(blaa.value != bla_a.value) {
            alert("The input of A can be 0 or 1. It depends on the output we want.");    
        }
        else if(blaout.value != bla_out.value) {
            alert("The output of the circuit must be set to D or D'. It depends on the inputs.");    
        }

        else if(blad.value != bla_d.value) {
            alert("The output of SA1 must be set to 1 as explained in the rules");    
        }
        else if(blab.value != bla_b.value) {
            alert("This must be set to 0 or 1. It depends on input C");    
        }
        else if(blac.value != bla_c.value) {
            alert("This must be set to 0 or 1. It depends on input B");    
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
    var c9 = document.getElementById("canvas9");
    var ctx9 = c9.getContext("2d");
    ctx9.clearRect(0, 0, c9.width, c9.height); 
    var c10 = document.getElementById("canvas10");
    var ctx10 = c10.getContext("2d");
    ctx10.clearRect(0, 0, c10.width, c10.height);
    var c11 = document.getElementById("canvas11");
    var ctx11 = c11.getContext("2d");
    ctx11.clearRect(0, 0, c11.width, c11.height);
    var c12 = document.getElementById("canvas12");
    var ctx12 = c12.getContext("2d");
    ctx12.clearRect(0, 0, c12.width, c12.height);

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
    bla_g.innerText =  bla_g.value;
    blag.innerText =  blag.value;
    bla_h.innerText =  bla_h.value;
    blah.innerText =  blah.value;
    bla_i.innerText =  bla_i.value;
    blai.innerText =  blai.value;
    bla_j.innerText =  bla_j.value;
    blaj.innerText =  blaj.value;
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
        bla_d.innerHTML = "0";
        bla_e.innerHTML = "1"
        bla_f.innerHTML = "D'";
        bla_g.innerHTML = "1";
        bla_h.innerHTML = "0";
        bla_i.innerHTML = "1"
        bla_j.innerHTML = "D'";
        bla_out.innerHTML = "D";
    }
}