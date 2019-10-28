function Popup(options) {
    this.options=options?options:{};
    this._init();
    this._bindEvent();
};
/*
parentDom
title
content
showSureOption
showCancelOption
callbackEvent
 */
Popup.prototype={
    _init:function(options){
        opt.showSureOption=opt.showSureOption?opt.showSureOption:1;
        opt.showCancelOption=opt.showCancelOption?opt.showCancelOption:1;
        opt.callbackEvent=opt.callbackEvent?opt.callbackEvent:function () {};

        var shade = options.shade ? '<div class="layer_shade"></div>';

        var title = options.title ? '<h4 id="layer_title">'+ options.title+'</h4>' : '';

        var btns = (function() {
            if (!options.btns) return '';
            var btndom = '<span class="layer_btn">' + btns[0] || '确定' + '</span>';
            if (options.btns.length === 2) btndom += '<span class="layer_btn">' + btns[1] || '取消' + '</span>';
            return '<div class="layer_btns">' + btndom + '</div>'
        }());

        var container = shade+
        '<div class="layer_container">'+
            title+
            '<div class="layer_content" id="layer_content">'+
                options.content+
            '</div>'+
            btns+
        '</div>';

        var layer = document.createElement('div');
        layer.style.display = 'none';
        layer.className = 'layer';
        layer.innerHTML = container;
        // var script = document.getElementsByTagName('script')[0];
        // opt.parentDom.insertBefore(layer,script);
        document.body.appendChild(layer);
        this.layer = layer;
    },
    _bindEvent: function() {
        var that = this;
        if(that.options.showSureOption===1){
            document.getElementById('sure').addEventListener('click',function () {
                that._sure();
            });
        }
        if(that.options.showCancelOption===1){
            document.getElementById('cancel').addEventListener('click',function () {
                that._cancel();
            });
        }
    },
    _sure:function () {
        //this指向dom元素
        this._close();
    },
    _cancel:function(){
        this._close();
    },
    _close:function(){
        this.layer.style.display='none';
    },
    _open:function() {
        this.layer.style.display='block';
    },
    _changeHtml:function(options){
        document.getElementById('layer_title').innerHTML=options.title;
        document.getElementById('layer_content').innerHTML=options.content;
    }
};
