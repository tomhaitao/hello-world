(function() {
    var  mousePress = false; 
	var imageResources = getImageRes();
    my.ImageManager.load(imageResources, loadImageResources);

    /**
     * 加载图片资源
     */
    function loadImageResources(number) {
        my.DOM.get('progressText').innerHTML = '正在加载图片...(' + ~~(number / imageResources.length * 100) + '%)';
        if(number < imageResources.length) {
            return false;
        }
        my.DOM.remove(my.DOM.get('progressText'));
        init();
    }

    /**
     * 初始化
     */
    function init() {
        // 创建游戏对象
        var mouseHit = new MouseHit();
        mouseHit.init();
        var ui = mouseHit.ui;

        // 点击开始按钮
        ui.onplay = function() {
            this.toBody();
            mouseHit.stateInit();
        }
        // 暂停
       /* ui.onpause = function() {
            clearInterval(mouseHit.drawCanvasInterval);
			clearInterval(mouseHit.drawMouseInterval);
        }
        // 暂停重新开始
        ui.onreadystart = function() {
            mouseHit.__setIntervalFunc(mouseHit);
        }
        // 继续游戏
        ui.onresume = function() {
           mouseHit.__setIntervalFunc(mouseHit);
        }*/
    }

})();
