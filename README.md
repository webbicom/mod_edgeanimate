mod_edgeanimate
===============

joomla module designed  to include animations produced with Edge Animate.

#  télécharger les fichiers dans dossier js du module

NB : de nouveaux fichiers JS (nommés différemment) peuvent coexister avec plusieurs projets Edge Animate

# créer un module edgeanimate
NB : en fonction de ce que je précise plus haut, on peut implémenter plusieurs projets Edge Animate
en créant/ou en clonant plusieurs modules edgeanimate

# Rappel des modifs à faire dans les fichiers JS 
dans
modules/mod_edgeanimate/js/projet-volume_edge.js

Modifier :
``` js  
var im= 'chemin absolu vers le dossier images';
``` 
soit:
``` js  
var im= 'http://nomdusite/modules/mod_edgeanimate/images';
``` 

dans 
modules/mod_edgeanimate/js/projet-volume_edgePreload.js

Modifier à la fin :
``` js  
htFallbacks={"http://code.jquery.com/jquery-latest.js":"http://code.jquery.com/jquery-latest.js"}; 
aLoader=[{load:"http://code.jquery.com/jquery-latest.js",callback:function(result,key){if(!window.jQuery){yepnope({load:"http://code.jquery.com/jquery-latest.js",callback:edgeCallback});
return false;}return true;}},
{load:"http://download.adobe.com/pub/adobe/edge/animate/2.0.0/edge.2.0.0.min.js"},
{load:"http://nameofsite/modules/mod_edgeanimate/js/skyscraper_edge.js"},
{load:"http://nameofsite/modules/mod_edgeanimate/js/skyscraper_edgeActions.js"}];
``` 

# Dans les réglages du module 
CSS
j'ai conservé edge.css, donc à sélectionner

# JS
![Edge animate module settings](https://dl.dropboxusercontent.com/u/32803028/labo/edge_animate_module_settings.jpg)

Sélectionner 
projet-volume_edgePreload.js

et deuxieme JS select
selectionner
nothing.js

PS : ceci à revoir

# Possibilité d'inclusion via loadposition
Position du module :
edgeanimate2
dans un article
``` js 
{loadposition edgeanimate2}
``` 
