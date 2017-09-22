demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#4286f4';
        console.log('state3');
        
        addChangeStateEventListener();
    },
    update: function() {}
};