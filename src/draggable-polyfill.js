/**
 * draggable polyfill
 */
// https://juejin.cn/post/6844903982742110222#heading-9
(function () {
  if ("setDragImage" in window.DataTransfer.prototype && document.body.animate) {
      var cloneObj = null;
      var offsetX = 0;
      var offsetY = 0;
      var startX = 0;
      var startY = 0;
      var dragbox = null;
      var lastDrop = null;
      var axis,_axis;
      var previewImage = new Image();
      previewImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC";
      var styles = document.createElement("style");
      styles.textContent = '[dragging]{position:static!important;box-sizing:border-box!important;margin:0!important;}\
      .drag-obj{position:fixed;left:0;top:0;z-index:999;pointer-events:none;}'
      document.querySelector('head').appendChild(styles);

      // 隐藏默认的原生"幽灵"预览图.
      // 并使用fakeObj来模拟预览图.
      document.addEventListener('dragstart', function (ev) {
          if (ev.target.nodeType === Node.ELEMENT_NODE) {
              dragbox = ev.target;
              dragbox.dragData = {};
              axis = dragbox.getAttribute('axis');
              _axis = axis;
              ev.dataTransfer.setData('text','');
              ev.dataTransfer.setDragImage(previewImage, 0, 0);
              var rect = dragbox.getBoundingClientRect();
              var left = rect.left;
              var top = rect.top;
              startX = ev.clientX;
              startY = ev.clientY;
              offsetX = startX - left;
              offsetY = startY - top;
              dragbox.style.transition = 'none';
              cloneObj = document.createElement('DIV');
              var fakeObj = dragbox.cloneNode(true); // fakeObj就是模拟拖拽时的预览块.
              fakeObj.style.width = dragbox.offsetWidth+'px';
              fakeObj.style.height = dragbox.offsetHeight+'px';
              fakeObj.style.transform = 'translate3d(0,0,0)';
              fakeObj.style.opacity = '1';
              fakeObj.setAttribute('dragging', '');
              cloneObj.appendChild(fakeObj);
              cloneObj.className = 'drag-obj';
              cloneObj.style = 'transform:translate3d( ' + left + 'px ,' + top + 'px,0);';
              document.body.appendChild(cloneObj);
          }
      })

      document.addEventListener('dragend', function (ev) {
          if(cloneObj){
              var rect = ev.target.getBoundingClientRect();
              var left = rect.left;
              var top = rect.top;
              var reset = cloneObj.animate(
                  [
                      { transform: cloneObj.style.transform},
                      { transform: 'translate3d('+left+'px,'+top+'px,0)' }
                  ],
                  // 拖拽完成后, fakeObj立即消失
                  // {
                  //     duration: 150,
                  //     easing:"ease-in-out",
                  // }
              )
              reset.onfinish = function(){
                  document.body.removeChild(cloneObj);
                  cloneObj = null;
                  dragbox.dragData = null;
                  dragbox.style.visibility = 'visible';
              }
          }
      })

      document.addEventListener('drop', function(ev) {
          const dropbox = ev.target.closest('[allowdrop]');
          ev.preventDefault();
          if (dropbox) {
              ev.stopPropagation();
              dropbox.removeAttribute('over');
          }
      })


      document.addEventListener('dragenter', function(ev) {
          if (lastDrop) {
            lastDrop.toggleAttribute('over',false);
          }
          const dropbox = ev.target.closest('[allowdrop]'); // 获取最近的放置目标
          if (dropbox) {
            dropbox.toggleAttribute('over',true);
            lastDrop = dropbox;
          }
      })

      document.addEventListener('dragover', function (ev) {
          ev.preventDefault();
          const dropbox = ev.target.closest('[allowdrop]');
          if (dropbox) {
              ev.dataTransfer.dropEffect = 'copy';
          } else {
              ev.dataTransfer.dropEffect = 'move';
          }
          if (cloneObj) {
              // 关键: 当在拖拽的copy behavior的时候, 原拖拽元素还是要显示, 此时, 需要注释掉下面这个行代码.
              // 在拖拽的move behavior的时候, 原拖拽元素不需显示, 此时设置为hidden, 该代码需要放开.
              // dragbox.style.visibility = 'hidden';
              var left = ~~(ev.clientX - offsetX);
              var top = ~~(ev.clientY - offsetY);
              if(ev.shiftKey || axis ){
                  if(_axis==='X'){
                      top = ~~(startY - offsetY);
                  }else if(_axis==='Y'){
                      left = ~~(startX - offsetX);
                  }else{
                      _axis = ~~Math.abs(ev.clientX-startX)>~~Math.abs(ev.clientY-startY) && 'X' || ~~Math.abs(ev.clientX-startX)<~~Math.abs(ev.clientY-startY) && 'Y' || '';
                  }
              }else{
                  _axis = '';
              }
              startX = left + offsetX;
              startY = top + offsetY;
              cloneObj.style.transform = 'translate3d( ' + left + 'px ,' + top + 'px,0)';
              dragbox.dragData.left = left;
              dragbox.dragData.top = top;
          }
      })
  }
})();
