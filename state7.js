demo.state7 = function() {};
demo.state7.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#8841f4';
        console.log('state7');
        
        addChangeStateEventListener();
    },
    update: function() {}
};