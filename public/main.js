$('game').ready(function(){
    let jred = prompt("Joueur 1, quel est votre pseudo ?");
    let jyellow = prompt("Joueur 2, quel est votre pseudo ?");
    jred === null ? jred ="Rouge" : jred=jred;
    jyellow === null ? jyellow="Jaune" : jyellow=jyellow;
    $('#scores').append("<div id='jred'>" + jred + " : <span class='points'></span></div>" + "<div id='jyellow'>" + jyellow + " : <span class='points'></span></div>")
    
    const p4 = new Puissance_4('#game');
    
    $('#restart').on('click', function(){
        $('#game').empty();
        p4.drawGame();
        $('#restart').css('visibility', 'hidden');
        $('#game').css('pointer-events', 'auto');
    })
});