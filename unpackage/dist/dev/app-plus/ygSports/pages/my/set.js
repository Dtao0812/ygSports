
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"body { background: #F6F7F8; }\n",],undefined,{path:"./pages/my/set.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/my/set.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      