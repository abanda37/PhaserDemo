demo.state7 = function() {};
demo.state7.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#8841f4';
        
        addChangeStateEventListener();
    },
    update: function() {}
};