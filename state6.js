demo.state6 = function() {};
demo.state6.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#41f4e2';
        console.log('state6');
        
        addChangeStateEventListener();
    },
    update: function() {}
};