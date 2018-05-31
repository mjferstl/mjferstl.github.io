// german names
var teamNamesGER = [
    "Russland","Saudi-Arabien","Ägypten","Uruguay",// A
    "Marokko","Iran","Portugal","Spanien", // B
    "Frankreich","Australien","Peru","Dänemark", // C
    "Argentinien","Island","Kroatien","Nigeria", // D
    "Costa-Rica","Serbien","Brasilien","Schweiz", // E
    "Deutschland","Mexiko","Schweden","Südkorea", // F
    "Belgien","Panama","Tunesien","England", // G
    "Kolumbien","Japan","Polen","Senegal" // H
    ];
var teamGroup12TxtGER = ["Sieger Gruppe ","Zweiter Gruppe "];
var teamTxtGER = ["Sieger AF ","Sieger VF ","Verlierer HF ","Sieger HF "];
var winnerTextGER = " ist Weltmeister!";
// english names
var teamNamesENG = [
    "Russia","Saudi-Arabia","Egypt","Uruguay",// A
    "Morocco","Iran","Portugal","Spain", // B
    "France","Australia","Peru","Denmark", // C
    "Argentina","Iceland","Croatia","Nigeria", // D
    "Costa-Rica","Serbia","Brasil","Switzerland", // E
    "Germany","Mexico","Sweden","South Korea", // F
    "Belgium","Panama","Tunisia","England", // G
    "Colombia","Japan","Poland","Senegal" // H
    ];
var teamGroup12TxtENG = ["1st Group ","2nd Group "];
var teamTxtENG = ["Winner R16 ","Winner QF ","Loser SF ","Winner SF "];
var winnerTextENG = " has won the world cup!";
var winnerText = winnerTextENG;
// choose Language
var teamNames = teamNamesENG;
var teamGroup12Txt = teamGroup12TxtENG;
var teamTxt = teamTxtENG;
//groups
var groups = ["A","B","C","D","E","F","G","H"];
var teamGroupFirst = ["C","A","B","D","E","G","F","H"];
var teamGroupSecond = ["D","B","A","C","F","H","E","G"];
var teamQFOrder = [1,2,6,5,8,7,3,4];
// time and date, when the games start
var gameTimes = [
    "14.6. 17:00","15.6. 14:00","19.6. 20:00",
    "20.6. 17:00","25.6. 16:00","25.6. 16:00", // A
    "15.6. 17:00","15.6. 20:00","20.6. 14:00",
    "20.6. 20:00","25.6. 20:00","25.6. 20:00", // B
    "16.6. 12:00","16.6. 18:00","21.6. 14:00",
    "21.6. 17:00","26.6. 16:00","26.6. 16:00", // C
    "16.6. 15:00","16.6. 21:00","21.6. 20:00",
    "22.6. 17:00","26.6. 20:00","26.6. 20:00", // D
    "17.6. 14:00","17.6. 20:00","22.6. 14:00",
    "22.6. 20:00","27.6. 20:00","27.6. 20:00", // E
    "17.6. 17:00","18.6. 14:00","23.6. 17:00",
    "23.6. 20:00","27.6. 16:00","27.6. 16:00", // F
    "18.6. 17:00","18.6. 20:00","23.6. 14:00",
    "24.6. 14:00","28.6. 20:00","28.6. 20:00", // G
    "19.6. 14:00","19.6. 17:00","24.6. 17:00",
    "24.6. 20:00","28.6. 16:00","28.6. 16:00", // H
    "30.6. 16:00","30.6. 20:00","01.7. 16:00",
    "01.7. 20:00","02.7. 16:00","02.7. 20:00",
    "03.7. 16:00","03.7. 20:00", // Round of 16
    "06.7. 16:00","06.7. 20:00","07.7. 16:00","07.7. 20:00", // quarter finals
    "10.7. 20:00","11.7. 20:00", // semi finals
    "14.7. 16:00","15.7. 20:00" // finals
    ];
var teamsPoints = [];
var teamsGoals = [];
var teamsGGoals = [];
var teamsGroupGames = [];
var goals1 = 0;
var goals2 = 0;
var team1 = "";
var team2 = "";
var START = true;
var groupHomeTeams = [1,3,1,4,4,2,
    1,3,3,2,4,2,
    1,3,4,1,4,2,
    1,3,1,4,2,4,
    1,3,3,2,2,4,
    1,3,4,1,4,2,
    1,3,1,4,4,2,
    1,3,2,3,4,2
    ];
var groupOutTeams =  [2,4,3,2,1,3,
    2,4,1,4,1,3,
    2,4,2,3,1,3,
    2,4,3,2,3,1,
    2,4,1,4,3,1,
    2,4,2,3,1,3,
    2,4,3,2,1,3,
    2,4,4,1,1,3
    ];

function initPoints() {
    for (i=0; i<teamNames.length; i++) {
        teamsPoints[teamNames[i]] = 0;
        teamsGoals[teamNames[i]] = 0;
        teamsGGoals[teamNames[i]] = 0;
        teamsGroupGames[teamNames[i]] = 0;
    }
    if (START) {
        createTables();
        START = false;
    }
}

function createPlan() {
    $("#Seite").text("");
	// Title with image
    $("#Seite").append('<div class="row">' +
		'<div class="col-sm-8">' +
		'<h1 style="text-align:center">World Cup 2018</h1>' +
		'</div>' +
		'<div class="col-sm-4">' +
		'<img src="http://img.tradera.net/medium/827/271751827_58022dba-749d-4909-892c-7670bf99dade.jpg" height="128" class="img-fluid">' +
		'</div>' +
		'</div>');
	//
    // Set the games for every group
    for (i=0; i<groups.length; i++){
        $("#Seite").append('<div class="row"><div class="col-sm-12">' +
			'<h4>Group '+groups[i]+'</h4>' +
			'</div>' +
			'</div>');
        $("#Seite").append('<div class="row" id="Gruppe'+groups[i]+'"></div>');
        $("#Gruppe"+groups[i]).append('<div class="col-sm-6" id="Gruppe'+groups[i]+'_Spielplan"></div>');
        $("#Gruppe"+groups[i]+"_Spielplan").append('<div class="Gruppenspiele">' +
			'<table class="table table-added" id="Gruppe'+groups[i]+'_Spiele"></table>' +
			'</div>');
        for (j=0; j<6; j++) {
            $("#Gruppe" + groups[i] + "_Spiele").append('<tr>' + 
                '<td class="Spielzeiten">'+gameTimes[(i*6+j)]+'</td>' + 
                '<td class="Spielplan_Teamname" id="Game'+(i*6+j)+'_Team1">'+teamNames[((i*4)+groupHomeTeams[i*6+j]-1)]+'</td>' +
                '<td style="text-align:center;width:20px"> - </td>' +
                '<td class="Spielplan_Teamname" id="Game'+(i*6+j)+'_Team2">'+teamNames[((i*4)+groupOutTeams[i*6+j]-1)]+'</td>' +
                '<td><input type="number" style="width:30px" id="Game'+(i*6+j)+'_Tore1" min="0" step="1"></td>' +
                '<td style="text-align:center;width:10px"> : </td>' +
                '<td><input type="number" style="width:30px" id="Game'+(i*6+j)+'_Tore2" min="0" step="1"></td>' +
                '</tr>');
        }
    }
    // Round of 16
    $("#Seite").append('<div class="row">' +
		'<div class="col-sm-12">' +
		'<h4>Round of 16</h4>' +
		'</div>' +
		'</div>');
    $("#Seite").append('<div class="row">' +
		'<div class="col-sm-8">' +
		'<div class="roundOf16">' +
		'<table class="table table-added" id="roundOf16"></table>' +
		'</div>' +
		'</div>' +
		'</div>');
    for (i=0; i<8; i++) {
        $("#roundOf16").append('<tr><td class="Spielzeiten">'+gameTimes[groups.length*6+i]+'</td><td class="Spielplan_Teamname" id="roundOf16_m'+(i+1)+'_team1">'+teamGroup12Txt[0]+teamGroupFirst[i]+'</td><td> - </td><td class="Spielplan_Teamname" id="roundOf16_m'+(i+1)+'_team2">'+teamGroup12Txt[1]+teamGroupSecond[i]+'</td>' +
            '<td><input type="number" style="width:30px" id="roundOf16_m'+(i+1)+'_Tore1" min="0" step="1"></td>' +
            '<td style="text-align:center;width:10px"> : </td>' +
            '<td><input type="number" style="width:30px" id="roundOf16_m'+(i+1)+'_Tore2" min="0" step="1"></td>' +
            '</tr>');
    }
    // Quarter finals
    $("#Seite").append('<div class="row"><div class="col-sm-12"><h4>Quarter-finals</h4></div></div>');
    $("#Seite").append('<div class="row"><div class="col-sm-8"><table class="table table-added" id="quarterFinals"></table></div></div>');
    for (i=0; i<4; i++) {
        $("#quarterFinals").append('<tr id="quarterFinalm'+(i+1)+'"><td class="Spielzeiten">'+gameTimes[groups.length*6+8+i]+'</td><td class="Spielplan_Teamname" id="quarterFinals_m'+(i+1)+'_team1">'+teamTxt[0]+''+teamQFOrder[(i*2)]+'</td><td> - </td><td class="Spielplan_Teamname" id="quarterFinals_m'+(i+1)+'_team2">'+teamTxt[0]+''+teamQFOrder[(i*2+1)]+'</td>' +
            '<td><input type="number" style="width:30px" id="quarterFinals_m'+(i+1)+'_Tore1" min="0" step="1"></td>' +
            '<td style="text-align:center;width:10px"> : </td>' +
            '<td><input type="number" style="width:30px" id="quarterFinals_m'+(i+1)+'_Tore2" min="0" step="1"></td>' +
            '</tr>');
    }
    // Semi finals
    $("#Seite").append('<div class="row"><div class="col-sm-12"><h4>Semi-finals</h4></div></div>');
    $("#Seite").append('<div class="row"><div class="col-sm-8"><table class="table table-added" id="semiFinals"></table></div></div>');
    for (i=0; i<2; i++) {
        $("#semiFinals").append('<tr id="semiFinalsm'+(i+1)+'"><td class="Spielzeiten">'+gameTimes[groups.length*6+8+4+i]+'</td><td class="Spielplan_Teamname" id="semiFinals_m'+(i+1)+'_team1">'+teamTxt[1]+(i*2+1)+'</td><td> - </td><td class="Spielplan_Teamname" id="semiFinals_m'+(i+1)+'_team2">'+teamTxt[1]+(i*2+2)+'</td>' +
            '<td><input type="number" style="width:30px" id="semiFinals_m'+(i+1)+'_Tore1" min="0" step="1"></td>' +
            '<td style="text-align:center;width:10px"> : </td>' +
            '<td><input type="number" style="width:30px" id="semiFinals_m'+(i+1)+'_Tore2" min="0" step="1"></td>' +
            '</tr>');
    }
    // Finals
    $("#Seite").append('<div class="row"><div class="col-sm-12"><h4>Third place play-off</h4></div></div>');
    $("#Seite").append('<div class="row"><div class="col-sm-8"><table class="table table-added" id="Final3"></table></div></div>');
    $("#Final3").append('<tr id="Final3_match"><td class="Spielzeiten">'+gameTimes[groups.length*6+8+4+2]+'</td><td class="Spielplan_Teamname" id="Final3_team1">'+teamTxt[2]+'1</td><td> - </td><td class="Spielplan_Teamname" id="Final3_team2">'+teamTxt[2]+'2</td>' +
        '<td><input type="number" style="width:30px" id="Final3_Tore1" min="0" step="1"></td>' +
        '<td style="text-align:center;width:10px"> : </td>' +
        '<td><input type="number" style="width:30px" id="Final3_Tore2" min="0" step="1"></td>' +
        '</tr>');
    // Finals
    $("#Seite").append('<div class="row"><div class="col-sm-12"><h4>Final</h4></div></div>');
    $("#Seite").append('<div class="row"><div class="col-sm-8"><table class="table table-added" id="Final"></table></div></div>');
    $("#Final").append('<tr id="Final_match"><td class="Spielzeiten">'+gameTimes[groups.length*6+8+4+2+1]+'</td><td class="Spielplan_Teamname" id="Final_team1">'+teamTxt[3]+'1</td><td> - </td><td class="Spielplan_Teamname" id="Final_team2">'+teamTxt[3]+'2</td>' +
        '<td><input type="number" style="width:30px" id="Final_Tore1" min="0" step="1"></td>' +
        '<td style="text-align:center;width:10px"> : </td>' +
        '<td><input type="number" style="width:30px" id="Final_Tore2" min="0" step="1"></td>' +
        '</tr>');
    //
    $("#Seite").append('<div class="row"><div class="col-sm-12" id="Winner"></div></div>');
    //
    initPoints();
}

function addPoints(team1,team2,tore1,tore2){
    teamsGoals[team1] += tore1;
    teamsGGoals[team1] += tore2;
    // 
    teamsGoals[team2] += tore2;
    teamsGGoals[team2] += tore1;
    //
    teamsGroupGames[team1] += 1;
    teamsGroupGames[team2] += 1;
    //
    if (tore1 > tore2) {
        teamsPoints[team1] += 3;
        teamsPoints[team2] += 0;
    }
    else if (tore1 < tore2) {
        teamsPoints[team1] += 0;
        teamsPoints[team2] += 3;
    }
    else {
        teamsPoints[team1] += 1;
        teamsPoints[team2] += 1;
    }
}

function calcPoints () {
    initPoints();
    for (i=0; i<groups.length; i++) {
        for (j=0; j<6; j++) {
            goals1 = $("#Game"+(i*6+j)+"_Tore1").val();
            goals2 = $("#Game"+(i*6+j)+"_Tore2").val();
            team1 = $("#Game"+(i*6+j)+"_Team1").text();
            team2 = $("#Game"+(i*6+j)+"_Team2").text();
            if ((goals1 === "") || (goals2 === "")) {
                // do nothing
            }
            else if ( (parseInt(goals1) < 0) || (parseInt(goals2 < 0)) ) {
                alert('Eine negative Anzahl an Toren ist nicht erlaubt!')
            }
            else {
                //alert(team1 +" " + team2);
                addPoints(team1,team2,parseInt(goals1),parseInt(goals2));
            }
        }
    }
    updateTables();
}

function createTables () {
    for (k=0; k<groups.length; k++){
        $("#Gruppe"+groups[k]).append('<div class="col-sm-4" id="Gruppe'+groups[k]+'_Stand"></div>');
        $("#Gruppe"+groups[k]+"_Stand").append('<div class="Gruppentabelle" style="float:left"><table class="table table-added" id="Gruppe'+groups[k]+'_Tabelle"></table></div>');
        for (i=0; i<teamNames.length/groups.length; i++) {
            $('#Gruppe'+groups[k]+'_Tabelle').append('<tr id="Gruppe'+groups[k]+'_Platz'+i+'">' +
                '<td id="Gr'+groups[k]+'_P'+i+'_name" style="width:150px">'+teamNames[(k*4+i)]+'</td>' +
                '<td id="Gr'+groups[k]+'_P'+i+'_Spiele" class="GruppenspieleAnzahl">'+teamsGroupGames[teamNames[(k*4+i)]]+'</td>' +
                '<td id="Gr'+groups[k]+'_P'+i+'_Tore" style="text-align:center;width:120px">'+teamsGoals[teamNames[(k*4+i)]]+' : '+teamsGGoals[teamNames[(k*4+i)]]+'</td>' + 
                '<td id="Gr'+groups[k]+'_P'+i+'_Punkte" style="text-align:right;width:30px">'+teamsPoints[teamNames[(k*4+i)]]+'</td>' +
                '</tr>');
        }
    }
}

function updateTables() {
    for (k=0; k<groups.length; k++){
        for (i=0; i<teamNames.length/groups.length; i++) {
            $('#Gr'+groups[k]+'_P'+i+'_name').text(teamNames[(k*4+i)]);
            $('#Gr'+groups[k]+'_P'+i+'_Spiele').text(teamsGroupGames[teamNames[(k*4+i)]]);
            $('#Gr'+groups[k]+'_P'+i+'_Punkte').text(teamsPoints[teamNames[(k*4+i)]]);
            $('#Gr'+groups[k]+'_P'+i+'_Tore').text(teamsGoals[teamNames[(k*4+i)]]+" : "+teamsGGoals[teamNames[(k*4+i)]]);
        }
    }
    sortGroups();
}

// Berechne die Tordifferenz
function torDiff(nameOfTeam) {
    return (teamsGoals[nameOfTeam] - teamsGGoals[nameOfTeam]);
}

var points1, points2, name1, name2;
var oldStr, newStr;
function sortGroups() {
    for (k=0; k<groups.length; k++){
        oldStr = 'A';
        newStr = 'B';
        while(oldStr != newStr) {
            oldStr = newStr;
            for (i=0; i<(teamNames.length/groups.length-1); i++) {
                points1 = $("#Gr"+groups[k]+"_P"+i+"_Punkte").text();
                points2 = $("#Gr"+groups[k]+"_P"+(i+1)+"_Punkte").text();
                name1 = $("#Gr"+groups[k]+"_P"+i+"_name").text();
                name2 = $("#Gr"+groups[k]+"_P"+(i+1)+"_name").text();
                if ( (parseInt(points2) > parseInt(points1)) || // Team 2 hat mehr Punkte als Team 1 --> tauschen
                    ( (parseInt(points2) == parseInt(points1)) && (torDiff(name2) > torDiff(name1)) ) || // Team 2 hat gleiche Punkte aber bessere Tordifferenz als Team 1 --> tauschen
                    ( (parseInt(points2) == parseInt(points1)) && (torDiff(name2) == torDiff(name1)) && (teamsGoals[name2] > teamsGoals[name1]) ) // Team 2 hat gleiche Punkte, gleiche Tordifferenz aber mehr Tore als Team 1 --> tauschen
                    ) {
                    // change Positions
                    $("#Gruppe"+groups[k]+"_Platz"+i).html('<td id="Gr'+groups[k]+'_P'+i+'_name" style="width:150px">'+name2+'</td>' +
                        '<td id="Gr'+groups[k]+'_P'+i+'_Spiele" class="GruppenspieleAnzahl">'+teamsGroupGames[name2]+'</td>' +
                        '<td id="Gr'+groups[k]+'_P'+i+'_Tore" style="text-align:center;width:120px">'+teamsGoals[name2]+' : '+teamsGGoals[name2]+'</td>' +
                        '<td id="Gr'+groups[k]+'_P'+i+'_Punkte" style="text-align:right;width:30px">'+teamsPoints[name2]+'</td>');
                    $("#Gruppe"+groups[k]+"_Platz"+(i+1)).html('<td id="Gr'+groups[k]+'_P'+(i+1)+'_name" style="width:150px">'+name1+'</td>' +
                        '<td id="Gr'+groups[k]+'_P'+(i+1)+'_Spiele" class="GruppenspieleAnzahl">'+teamsGroupGames[name1]+'</td>' +
                        '<td id="Gr'+groups[k]+'_P'+(i+1)+'_Tore" style="text-align:center;width:120px">'+teamsGoals[name1]+' : '+teamsGGoals[name1]+'</td>' +
                        '<td id="Gr'+groups[k]+'_P'+(i+1)+'_Punkte" style="text-align:right;width:30px">'+teamsPoints[name1]+'</td>');
                    //console.log("Tausche "+$("#Gr"+groups[k]+"_P"+i+"_name").text() + " und "+$("#Gr"+groups[k]+"_P"+(i+1)+"_name").text())
                }
            }
            newStr = $("#Gruppe"+groups[k]+"_Tabelle").html();
        }
    }
    checkRoundOf16();
}

function checkRoundOf16() {
    for (k=0; k<groups.length; k++) {
        if (
        (teamsGroupGames[teamNames[k*4]] == 3) && 
        (teamsGroupGames[teamNames[k*4+1]] == 3) && 
        (teamsGroupGames[teamNames[k*4+2]] == 3) && 
        (teamsGroupGames[teamNames[k*4+3]] == 3) ) {
            for (i=0; i<4; i++) {
                $("#Gruppe"+groups[k]+"_Platz"+i).css("font-weight","bold");
           }
           setRoundOf16(groups[k],$("#Gr"+groups[k]+"_P0_name").text(),$("#Gr"+groups[k]+"_P1_name").text());
       }
       else {
           for (i=0; i<4; i++) {
                $("#Gruppe"+groups[k]+"_Platz"+i).css("font-weight","normal");
           }
           setRoundOf16(groups[k],teamGroup12Txt[0]+groups[k],teamGroup12Txt[1]+groups[k]);
       }
    }
    checkQuarterFinals();
}

var qFinTeam;
function checkQuarterFinals() {
    console.log('Check Quarter Finals');
    for (i=0; i<4; i++) {
        for (j=0; j<2; j++) {
            //console.log($("#roundOf16_m"+(i*2+j+1)+"_team1").text() + ' gegen ' + $("#roundOf16_m"+(i*2+j+1)+"_team2").text() + ' Test:' + (i*2+j+1) + ' |' + ($("#roundOf16_m"+(i*2+j+1)+"_Tore1").text()) + '|' + (($("#roundOf16_m"+(i*2+j+1)+"_Tore1").text()) === ""));
            qFinTeam = Math.floor((teamQFOrder.indexOf((i*2+j+1)))/2)+1;
            if ( ($("#roundOf16_m"+(i*2+j+1)+"_team1").text() != (teamGroup12Txt[0]+teamGroupFirst[i*2+j])) &&
                 ($("#roundOf16_m"+(i*2+j+1)+"_team2").text() != (teamGroup12Txt[1]+teamGroupSecond[i*2+j])) &&
                 ($("#roundOf16_m"+(i*2+j+1)+"_Tore1").val().length != 0) &&
                 ($("#roundOf16_m"+(i*2+j+1)+"_Tore2").val().length != 0) &&
                 ($("#roundOf16_m"+(i*2+j+1)+"_Tore1").val() != $("#roundOf16_m"+(i*2+j+1)+"_Tore2").val())
                 ) {
                    //console.log('i = '+i+', j = '+j+', (i*2+j+1) = '+(i*2+j+1)+'; Tore: '+ $("#roundOf16_m"+(i*2+j+1)+"_Tore1").val());
                    team1 = $("#roundOf16_m"+(i*2+j+1)+"_team1").text();
                    team2 = $("#roundOf16_m"+(i*2+j+1)+"_team2").text();
                    //console.log('Achtelfinale: '+ team1 + ' gegen ' + team2);
                    goals1 = $("#roundOf16_m"+(i*2+j+1)+"_Tore1").val();
                    goals2 = $("#roundOf16_m"+(i*2+j+1)+"_Tore2").val();
                    $("#quarterFinals_m"+qFinTeam+"_team"+(teamQFOrder.indexOf(i*2+j+1)%2+1)).text(findWinner(team1,team2,goals1,goals2));
            }
            else {
                $("#quarterFinals_m"+qFinTeam+"_team"+(teamQFOrder.indexOf(i*2+j+1)%2+1)).text(teamTxt[0]+''+(i*2+j+1));
            }
        }
    }
    checkSemiFinals();
}

function checkSemiFinals() {
    for (i=0; i<2; i++){
        for (j=0; j<2; j++) {
            if (($("#quarterFinals_m"+(i*2+j+1)+"_Tore1").val().length != 0) && 
                ($("#quarterFinals_m"+(i*2+j+1)+"_Tore2").val().length != 0) &&
                ($("#quarterFinals_m"+(i*2+j+1)+"_Tore1").val() != $("#quarterFinals_m"+(i*2+j+1)+"_Tore2").val()) &&
                ($("#quarterFinals_m"+(i*2+j+1)+"_team1").text() != (teamTxt[0]+''+(i*2+j+1))) &&
                ($("#quarterFinals_m"+(i*2+j+1)+"_team2").text() != (teamTxt[0]+''+(i*2+j+2)))
                ) {
                    team1 = $("#quarterFinals_m"+(i*2+j+1)+"_team1").text();
                    team2 = $("#quarterFinals_m"+(i*2+j+1)+"_team2").text();
                    goals1 = $("#quarterFinals_m"+(i*2+j+1)+"_Tore1").val();
                    goals2 = $("#quarterFinals_m"+(i*2+j+1)+"_Tore2").val();
                    $("#semiFinals_m"+(i+1)+"_team"+(j+1)).text(findWinner(team1,team2,goals1,goals2));
            }
            else {
                $("#semiFinals_m"+(i+1)+"_team"+(j+1)).text(teamTxt[1]+''+(i*2+j+1));
            }
        }
    }
    checkFinals();
}

function checkFinals() {
    for (i=0; i<2; i++) {
        if ( ($("#semiFinals_m"+(i+1)+"_Tore1").val().length != 0) && 
             ($("#semiFinals_m"+(i+1)+"_Tore2").val().length != 0) && 
             ($("#semiFinals_m"+(i+1)+"_Tore1").val() != $("#semiFinals_m"+(i+1)+"_Tore2").val()) && 
             ($("#semiFinals_m"+(i+1)+"_team1").text() != (teamTxt[1]+''+(i*2+1))) &&
             ($("#semiFinals_m"+(i+1)+"_team2").text() != (teamTxt[1]+''+(i*2+2)))
            ) {
                team1 = $("#semiFinals_m"+(i+1)+"_team1").text();
                team2 = $("#semiFinals_m"+(i+1)+"_team2").text();
                goals1 = $("#semiFinals_m"+(i+1)+"_Tore1").val();
                goals2 = $("#semiFinals_m"+(i+1)+"_Tore2").val();
                $("#Final3_team"+(i+1)).text(findLoser(team1,team2,goals1,goals2));
                $("#Final_team"+(i+1)).text(findWinner(team1,team2,goals1,goals2));
        }
        else {
            $("#Final3_team"+(i+1)).text(teamTxt[2]+''+(i+1));
            $("#Final_team"+(i+1)).text(teamTxt[3]+''+(i+1));
        }
    }
}

function setWinner() {
    if ( ($("#Final_Tore1").val().length != 0) && 
         ($("#Final_Tore2").val().length != 0) && 
         ($("#Final_Tore1").val() != $("#Final_Tore2").val()) && 
         ($("#Final_team1").text() != (teamTxt[3]+'1')) &&
         ($("#Final_team2").text() != (teamTxt[3]+'2'))
        ) {
            team1 = $("#Final_team1").text();
            team2 = $("#Final_team2").text();
            goals1 = $("#Final_Tore1").val();
            goals2 = $("#Final_Tore2").val();
            $("#Winner").html('<h4>'+findWinner(team1,team2,goals1,goals2)+''+winnerText+'</h4>');
    }
    else {
        $("#Winner").html('');
    }
}

var a, b;
function setRoundOf16(gruppe,erster,zweiter) {
    a = teamGroupFirst.indexOf(gruppe);
    b = teamGroupSecond.indexOf(gruppe);
    $("#roundOf16_m"+(a+1)+"_team1").text(erster);
    $("#roundOf16_m"+(b+1)+"_team2").text(zweiter);
}

function findWinner(t1,t2,g1,g2) {
    if(g1 > g2) {
        return t1;
    }
    else if (g2 > g1) {
        return t2;
    }
}

function findLoser(t1,t2,g1,g2) {
    if(g1 > g2) {
        return t2;
    }
    else if (g2 > g1) {
        return t1;
    }
}

$(function() {
   createPlan();
   $(document).bind('keyup', function(e){
        //console.log($("#roundOf16_m1_Tore1").val());
        calcPoints();
        //console.log($("#roundOf16_m1_Tore2").val());
    });
});
