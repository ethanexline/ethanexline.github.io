//THIS IS MY HORIZONTAL SCROLLING. RSS TO JAVASCRIPT CODE IS AT THE END OF IT!!!!!

var tickerEntries = new Array();

//---------------------------------------------------------------------------------------------------------
// Configuration
//---------------------------------------------------------------------------------------------------------

var tickerWidth = 400;                              // width (pixels)
var tickerMargin = 20;                              // margin (pixels)
var tickerDelay = 30;                               // scrolling delay (smaller = faster)
var tickerSpacer = "+++";                           // spacer between ticker entries

var tickerBGColor = "#E0F0FF";                      // background color
var tickerHLColor = "#FFF0E0";                      // hilight (mouse over) color

var tickerFont = "Courier New, Courier, Monospace"; // font family (CSS-spec)
var tickerFontSize = 16;                            // font size (pixels)
var tickerFontColor = "blue";                       // font color

var tickerBorderWidth = 2;                          // border width (pixels)
var tickerBorderStyle = "groove";                   // border style (CSS-spec)
var tickerBorderColor = "#FFFFFF";                  // border color

//---------------------------------------------------------------------------------------------------------
// Functions
//---------------------------------------------------------------------------------------------------------

var DOM = document.getElementById;
var IE4 = document.all;

var tickerIV, tickerID;
var tickerItems = new Array();
var tickerHeight = tickerFontSize + 8;

function tickerGetObj(id) {
    if(DOM) return document.getElementById(id);
    else if(IE4) return document.all[id];
    else return false;
}

function tickerObject(id) {
    this.elem = tickerGetObj(id);
    this.width = this.elem.offsetWidth;
    this.x = tickerWidth;
    this.css = this.elem.style;
    this.css.width = this.width + 'px';
    this.css.left = this.x + 'px';
    this.move = false;
    return this;
}

function tickerNext() {
    if(!DOM && !IE4) return;
    var obj = tickerItems[tickerID];
    if(obj) {
        obj.x = tickerWidth;
        obj.css.left = tickerWidth + 'px';
        obj.move = true;
    }
}

function tickerMove() {
    if(!DOM && !IE4) return;
    for(var i = 0; i < tickerItems.length; i++) {
        if(tickerItems[i].move) {
            if(tickerItems[i].x > -tickerItems[i].width) {
                tickerItems[i].x -= 2;
                tickerItems[i].css.left = tickerItems[i].x + 'px';
            }
            else tickerItems[i].move = false;
        }
    }
    if(tickerItems.length == 1) {
        if(tickerItems[tickerID].x + tickerItems[tickerID].width <= 0) {
            tickerNext();
        }
    }
    else if(tickerItems[tickerID].x + tickerItems[tickerID].width <= tickerWidth) {
        tickerID++;
        if(tickerID >= tickerItems.length) tickerID = 0;
        tickerNext();
    }
}

function tickerStart(init) {
    if(!DOM && !IE4) return;
    if(tickerBGColor) {
        var obj = tickerGetObj('divTicker');
        obj.style.backgroundColor = tickerBGColor;
    }
    if(init) {
        tickerID = 0;
        tickerNext();
    }
    if (tickerIV) clearInterval(tickerIV);
    tickerIV = setInterval('tickerMove()', tickerDelay);
}

function tickerStop() {
    if(!DOM && !IE4) return;
    clearInterval(tickerIV);
    if(tickerHLColor) {
        var obj = tickerGetObj('divTicker');
        obj.style.backgroundColor = tickerHLColor;
    }
}

function tickerInit() {
    if(!DOM && !IE4) return;

    var obj = tickerGetObj('divTicker');
    obj.style.width = tickerWidth + 'px';
    obj.style.visibility = 'visible';
    //tickerStart(true);
    tickerUpdateItems(tickerEntries);
}

function tickerReload() {
    if(!DOM && !IE4) return;
    document.location.reload();
}

//window.onresize = tickerReload;
window.onload = tickerInit;

//---------------------------------------------------------------------------------------------------------
// Build ticker
//---------------------------------------------------------------------------------------------------------

document.write(
    '<style> ' +
    '#divTicker { ' +
    'position: absolute; ' +
    'width: 10000px; ' +
    'height: ' + tickerHeight + 'px; ' +
    'cursor: default; ' +
    'overflow: hidden; ' +
    'visibility: hidden; ' +
    (tickerBorderWidth ? 'border-width: ' + tickerBorderWidth + 'px; ' : '') +
    (tickerBorderStyle ? 'border-style: ' + tickerBorderStyle + '; ' : '') +
    (tickerBorderColor ? 'border-color: ' + tickerBorderColor + '; ' : '') +
    '} ' +
    '.cssTickerContainer { ' +
    'position: relative; ' +
    'height: ' + tickerHeight + 'px; ' +
    'margin-top: ' + tickerMargin + 'px; ' +
    'margin-bottom: ' + tickerMargin + 'px; ' +
    '} ' +
    '.cssTickerEntry { ' +
    'position:absolute;top:2px; white-space:nowrap;'+
    'font-family: ' + tickerFont + '; ' +
    'font-size: ' + tickerFontSize + 'px; ' +
    'color: ' + tickerFontColor + '; ' +
    '} ' +
    '</style>'
);

function tickerUpdateItems(items) {
    var ticker = document.getElementById('divTicker');
    ticker.innerHTML = '';
    if (items.length > 0) {
        for (var i = 0; i < items.length; i++) {
            var tickerItem = document.createElement('DIV');
            tickerItem.id = 'divTickerEntry' + (i + 1);
            tickerItem.className  = 'cssTickerEntry';
            tickerItem.innerHTML ='&nbsp;' + items[i] +'&nbsp;' +tickerSpacer;
            ticker.appendChild(tickerItem);
        }
    }
    tickerItems=[];
    for (var i = 0; i < items.length; i++) {
        tickerItems[i] = new tickerObject('divTickerEntry' + (i + 1));
    }
    tickerStart(true);
}

function loadXMLDoc(dname){
    xhttp = new XMLHttpRequest();

    xhttp.open("GET",dname,true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
    xhttp.send();
    return xhttp.responseXML;
}

var feed = loadXMLDoc("https://www.brainyquote.com/link/quotefu.rss");
load(feed);

function load(result) {
if (!result === null) {
    var titles=[];
    var container = document.getElementById("feed");
    var html = '';
    for (var i = 0; i < result; i++) {
        var entry = result.feed.entries[i];
        titles.push(entry.title);
        html += '<p>' + entry.publishedDate + '&nbsp' + entry.title;
    }

    container.innerHTML = html;
    tickerUpdateItems(titles);
}
};

// END OF RSS TO JAVASCRIPT