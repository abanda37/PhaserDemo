demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#4286f4';
        
        addChangeStateEventListener();
    },
    update: function() {}
};