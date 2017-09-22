demo.state8 = function() {};
demo.state8.prototype = {
    preload: function() {}, 
    create: function() {
        game.stage.backgroundColor = '#f441ca';
        console.log('state8');
        
        addChangeStateEventListener();
    },
    update: function() {}
};