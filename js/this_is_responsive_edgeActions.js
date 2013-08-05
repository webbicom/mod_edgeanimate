
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){this.onMove=function(posX,posY){timelineControl=Number(posX)*10;sym.stop(timelineControl);}
sym.$("textup_sym").css({"width":"70%","position":"relative","margin":"0 auto"});var isTouch=('ontouchstart'in window);function kill(type){window.document.body.addEventListener(type,function(e){e.preventDefault();e.stopPropagation();return false;},true);}
if(isTouch){kill('mousemove');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mousemove",function(sym,e){this.onMove(e.pageX,e.pageY);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){sym.getSymbol("textup_sym").play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'birdfly_sym'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6342,function(sym,e){sym.play(0);});
//Edge binding end
})("birdfly_sym");
//Edge symbol end:'birdfly_sym'

//=========================================================

//Edge symbol: 'birdsprite_sym'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",236,function(sym,e){sym.play(0);});
//Edge binding end
})("birdsprite_sym");
//Edge symbol end:'birdsprite_sym'

//=========================================================

//Edge symbol: 'text_sym'
(function(symbolName){})("text_sym");
//Edge symbol end:'text_sym'

//=========================================================

//Edge symbol: 'clouds_background_sym'
(function(symbolName){})("clouds_background_sym");
//Edge symbol end:'clouds_background_sym'

//=========================================================

//Edge symbol: 'clouds_background_sym_1'
(function(symbolName){})("clouds_foreground_sym");
//Edge symbol end:'clouds_foreground_sym'

//=========================================================

//Edge symbol: 'textup_sym'
(function(symbolName){})("textup_sym");
//Edge symbol end:'textup_sym'
})(jQuery,AdobeEdge,"EDGE-124939132");