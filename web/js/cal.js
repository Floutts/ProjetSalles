$(document).ready(function($){


    function deleteAll(){
        $('#month1').hide();
        $('#month2').hide();
        $('#month3').hide();
        $('#month4').hide();
        $('#month5').hide();
        $('#month6').hide();
        $('#month7').hide();
        $('#month8').hide();
        $('#month9').hide();
        $('#month10').hide();
        $('#month11').hide();
        $('#month12').hide();
        $('#dateActuelle').empty();
    }
    deleteAll()
    var d = new Date ;
    moisActuel = d.getMonth()+1;
    moisActuel = parseInt(moisActuel);
    if (moisActuel === 1 ){
        $('#month1').show();
        $('#dateActuelle').append("<center><h3> Janvier  </h3></center>");
    }

    $('#linkMonth1').click(function(){
        deleteAll()
        $('#month1').show();
        $('#dateActuelle').append("<center><h3> Janvier  </h3></center>");
    })
    $('#linkMonth2').click(function(){
        deleteAll()
        $('#month2').show();
        $('#dateActuelle').append("<center><h3> Février  </h3></center>");

    })
    $('#linkMonth3').click(function(){
        deleteAll()
        $('#month3').show();
        $('#dateActuelle').append("<center><h3> Mars  </h3></center>");

    })
    $('#linkMonth4').click(function(){
        deleteAll()
        $('#month4').show();
        $('#dateActuelle').append("<center><h3> Avril  </h3></center>");

    })
    $('#linkMonth5').click(function(){
        deleteAll()
        $('#month5').show();
        $('#dateActuelle').append("<center><h3> Mai  </h3></center>");

    })
    $('#linkMonth6').click(function(){
        deleteAll()
        $('#month6').show();
        $('#dateActuelle').append("<center><h3> Juin  </h3></center>");

    })
    $('#linkMonth7').click(function(){
        deleteAll()
        $('#month7').show();
        $('#dateActuelle').append("<center><h3> Juillet  </h3></center>");

    })
    $('#linkMonth8').click(function(){
        deleteAll()
        $('#month8').show();
        $('#dateActuelle').append("<center><h3> Aout  </h3></center>");

    })
    $('#linkMonth9').click(function(){
        deleteAll()
        $('#month9').show();
        $('#dateActuelle').append("<center><h3> Septembre  </h3></center>");


    })
    $('#linkMonth10').click(function(){
        deleteAll()
        $('#month10').show();
        $('#dateActuelle').append("<center><h3> Octobre  </h3></center>");

    })
    $('#linkMonth11').click(function(){
        deleteAll()
        $('#month11').show();
        $('#dateActuelle').append("<center><h3> Novembre  </h3></center>");

    })
    $('#linkMonth12').click(function(){
        deleteAll()
        $('#month12').show();
        $('#dateActuelle').append("<center><h3> Décembre  </h3></center>");

    })
});