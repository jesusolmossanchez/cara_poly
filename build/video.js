!function(){function e(){a.render(),requestAnimationFrame(e)}var t=new Stats;t.setMode(0);var i=document.getElementById("canvas");i.width=window.innerWidth,i.height=window.innerHeight;var a=null,n=document.createElement("video");navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia?navigator.getUserMedia({video:!0},function(t){n.src=window.URL.createObjectURL(t),n.onloadedmetadata=function(t){n.play(),i.width>this.videoWidth&&(i.width=this.videoWidth,i.height=this.videoHeight),a=new GlRenderer(i,3e3,(!1),n,this),e()},n.load()},function(e){alert("Request camera failed")}):alert("getUserMedia not supported")}();