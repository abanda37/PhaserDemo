demo.state5 = function() {};
demo.state5.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#eef442';
        
        addChangeStateEventListener();
    },
    update: function() {}
};