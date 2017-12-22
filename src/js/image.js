(function () {
    var img = './src/img/paco.jpg';
    var canvas = document.getElementById('canvas');

    // init canvas width to that of window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var vertices = 650;

    if(window.innerWidth/2 < 700){
        vertices = window.innerWidth/1.5;
    }

    var renderer = new GlRenderer(canvas, vertices, true, img, function() {
        //renderTime(start);
    });

    // event handling
    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderer.resize();
        rerender();
    };


    function rerender() {
        renderer = new GlRenderer(canvas, 400, true, img, function() {
            //renderTime(start);
        });
    }

    var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        renderer = new GlRenderer(canvas, 400, true, img, function() {
            //renderTime(start);
        });
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //if(!("ondevicemotion" in window)){alert("Not Supported");}

})();
