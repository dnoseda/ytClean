'use strict';

console.log('\'Allo \'Allo! Content script');



let cleanYt = function() {
  let ytdRendererTypes = ['ytd-grid-video-renderer','ytd-compact-video-renderer']
  for (var j = ytdRendererTypes.length - 1; j >= 0; j--) {
    let ytdRendererType = ytdRendererTypes[j];
  
    let elementList = document.getElementsByTagName(ytdRendererType);
    for (var i = elementList.length - 1; i >= 0; i--) {
      let element = elementList[i]
    
      let elementTitle = element.querySelector('span#video-title')
      if(elementTitle){
        let title = elementTitle.innerHTML.split('\n').join().toLowerCase();
        // TODO: Que quede configurado qué puede borrar
        // TODO: que borre en una busqueda
        // TODO Que borre en sugeridos
        if(title.match(/dark souls/) || title.match(/ds3/)){
           let parent = element.parentElement;
           parent.removeChild(element);
           console.log('borrado elemento "'+title.trim()+'"');
        }
      }
    }
  }
  setTimeout(cleanYt, 100);
}

cleanYt();