demo.state2 = function() {};
demo.state2.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#d83863';
        
        addChangeStateEventListener();
    },
    update: function() {}
};