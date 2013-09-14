

Le module edgeanimate
===============

Joomla module designed  to include animations produced with Edge Animate.

Un module destiné à mettre en place une animation créée avec [Edge Animate][1] dans Joomla.
[Une démo ici.][2]
[Des démos téléchargeables de Edge Animate ici.][3]

Un projet EdgeAnimate est généralement composé d'un dossier images et de 3 fichiers JS :

leprojet_edge.js

leprojet_edgeActions.js

leprojet_edgePreload.js

A gauche de l'underscore (_), le nom du projet.

A droite de l'underscore (_), le nom du fichier JS.


# Mode d'emploi du module
###Installation
Installer le module mod_edgeanimate.

>Uploader les images dans le dossier /images/ du module.

et

>Uploader les fichiers Edge animate dans le dossier /js/ du module.



### Modifications à faire dans les fichiers JS 
Pour implémenter les animations Edge Animate via ce module, il faut tout d'abord modifier les fichiers JS générés par Edge Animate.

1 - Dans :

>modules/mod_edgeanimate/js/lenomduprojet_edge.js

Modifier :
``` js  
var im= 'chemin absolu vers le dossier images';
``` 
soit :
``` js  
var im= 'http://nomdusite/modules/mod_edgeanimate/images';
``` 

2 - Dans :

>modules/mod_edgeanimate/js/lenomduprojet_edgePreload.js

La fin de ce fichier peut se présenter sous une forme compressée :
``` js  
requiresSVG=false;doDelayLoad=false;htFallbacks={"http://code.jquery.com/jquery-latest.js":"http://code.jquery.com/jquery-latest.js"}; aLoader=[{load:"http://code.jquery.com/jquery-latest.js",callback:function(result,key){if(!window.jQuery){yepnope({load:"http://code.jquery.com/jquery-latest.js",callback:edgeCallback});return false;}return true;}},{load:"http://download.adobe.com/pub/adobe/edge/animate/2.0.0/edge.2.0.0.min.js"},{load:"lenomduprojet_edge.js"},{load:"lenomduprojet_edgeActions.js"}];if(AdobeEdge.bootstrapLoading){signaledLoading=true;AdobeEdge.loadResources=doLoadResources;AdobeEdge.playWhenReady=playWhenReady;}
loadResources(aLoader,doDelayLoad);preContent={dom:[]};
//simpleContent
dlContent={dom:[]};
//simpleContent
})("EDGE-38094116");
``` 
Pour le reformater afin que les modications apparaissent clairement, repérer :
``` js 
requiresSVG=false;
``` 
Faire un retour chariot après le point-virgule.

Supprimer tout ce qui se trouve en dessous du point-virgule et remplacer par :

**NB : Penser à noter la référence numérique du projet**, par exemple EDGE-79003129
``` js 
   requiresSVG=false;

   doDelayLoad=false;
   htFallbacks={
    };

   aLoader = [
    { load: "http://code.jquery.com/jquery-latest.js"},
    { load: "http://download.adobe.com/pub/adobe/edge/animate/2.0.0/edge.2.0.0.min.js"},
          { load: "lenomduprojet_edge.js"},
          { load: "lenomduprojet_edgeActions.js"}];

if (AdobeEdge.bootstrapLoading) { signaledLoading = true; AdobeEdge.loadResources=doLoadResources; AdobeEdge.playWhenReady=playWhenReady; }

loadResources(aLoader, doDelayLoad);

preContent={dom: [ ]};//simpleContent

dlContent={dom: [ ]};//simpleContent

})( "EDGE-XXXXXXXX");
``` 
Modifier "lenomduprojet" par le nom de VOTRE projet.

IMPORTANT : Préciser la référence numérique de VOTRE projet.

### Dans les réglages du module 
###CSS
J'ai inclus un fichier CSS vide, edge.css, dans le module. 

Il peut servir à inclure des spécifications CSS propres à ce module.

### JS
![Edge animate module settings](https://dl.dropboxusercontent.com/u/32803028/labo/edge_animate_module_settings.jpg)

Sélectionner 
lenomduprojet_edgePreload.js

et deuxieme JS, 
selectionner
nothing.js

PS : ceci à revoir

### Possibilité d'inclusion dans un article via loadposition
Créer une position edgeanimate dans le module.

Inclure dans un article
``` js 
{loadposition edgeanimate}
``` 


  [1]: https://creative.adobe.com/products/animate
  [2]: http://html.adobe.com/edge/animate/showcase/birds/
  [3]: http://www.adobe.com/devnet/edge-animate/articles/showcase-sample-files.html
