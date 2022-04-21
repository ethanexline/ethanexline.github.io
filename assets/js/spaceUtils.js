function loadSpaceCadet() {

    if (window.innerWidth > 620) {
        document.getElementById("SpaceCadet").style.top = "15px";
        document.getElementById("SpaceCadet").style.left = "15%";

        if (document.getElementById("scadet") == null) {
            $("body").append('<script id=\"loading\">var statusElement=document.getElementById(\"status\"),progressElement=document.getElementById(\"progress\"),Module={preRun:[],postRun:[],print:function(){var e=document.getElementById(\"output\");return e&&(e.value=\"\"),function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments).join(\" \")),console.log(e)}}(),printErr:function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments).join(\" \")),console.error(e)},canvas:function(){var e=document.getElementById(\"canvas\");return e.addEventListener(\"webglcontextlost\",(function(e){alert(\"WebGL context lost. You will need to reload the page.\"),e.preventDefault()}),!1),e}(),setStatus:function(e){if(Module.setStatus.last||(Module.setStatus.last={time:Date.now(),text:\"\"}),e!==Module.setStatus.last.text){var t=e.match(\/([^(]+)\\((\\d+(\\.\\d+)?)\\\/(\\d+)\\)\/),n=Date.now();if(!(t&&n-Module.setStatus.last.time<30)){if(Module.setStatus.last.time=n,Module.setStatus.last.text=e,t)e=t[1],progressElement.value=100*parseInt(t[2]),progressElement.max=100*parseInt(t[4]),progressElement.hidden=!1;else progressElement.value=null,progressElement.max=null,progressElement.hidden=!0,document.getElementById(\"canvas\").style.display=\"\";statusElement.innerHTML=e,\"\"===e?(statusElement.style.display=\"none\",progressElement.style.display=\"none\"):(statusElement.style.display=\"\",progressElement.style.display=\"\")}}},totalDependencies:0,monitorRunDependencies:function(e){this.totalDependencies=Math.max(this.totalDependencies,e),Module.setStatus(e?\"Preparing... (\"+(this.totalDependencies-e)+\"\/\"+this.totalDependencies+\")\":\"All downloads complete.\")}};Module.setStatus(\"Downloading...\"),window.onerror=function(){Module.setStatus(\"Exception thrown, see JavaScript console\"),Module.setStatus=function(e){e&&Module.printErr(\"[post-exception status] \"+e)}}<\/script>');
            $("body").append('<script id=\"scadet\" async src=\"assets\/SpaceCadet\/SpaceCadetPinball.js\"><\/script>');
        }
    } else {
        document.getElementById("spaceWarning").style.display = "block";
    }
}

function unloadSpaceCadet() {
    document.getElementById("SpaceCadet").style.left = "200%";
}

function dispelWarning() {
    document.getElementById("spaceWarning").style.display = "none";
}