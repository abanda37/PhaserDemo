demo.state4 = function() {};
demo.state4.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#f44242';
        
        addChangeStateEventListener();
    },
    update: function() {}
};