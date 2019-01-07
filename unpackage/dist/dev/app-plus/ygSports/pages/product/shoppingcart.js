
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"body { background: #F6F7F8; }\n",],undefined,{path:"./pages/product/shoppingcart.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/product/shoppingcart.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      