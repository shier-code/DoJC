(function(){

    function initMap(){
      this.init()
    }
    initMap.prototype.init=function(){
      console.log('this is used IIFE')
    }
    // return {
    //   iife:new initMap()
    // }
    new initMap()
  })()