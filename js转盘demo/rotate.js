;(function(window) {
  function Rotate(config) {
    var options = {
      steps: [],
      running: false,
      timer: null,
      endCall: null,
      prize: null
      // outEl: document.getElementById('outer')
    };
    this.options = Object.assign(options, config);
  }
  Rotate.prototype = {
    start: function() {
      var config = this.options,
          i = 10;
      if (config.running) return;
      config.running = true;
      
      config.timer = setInterval(function () {
        i += 10;
        if (i >= 360) i = 0;
        config.outEl.style.webkitTransform = 'rotate3d(0,0,1,'+i+'deg)';
      }, 25)
    },
    end: function(prize, endCall) {
      var config = this.options;
      config.prize = prize;
      endCall && (config.endCall = endCall);
      //重置
      config.now = 0;
      config.steps = [];

      this.countSteps();
      // 设置停止角度
      config.timer && clearInterval(config.timer);

      this.animCallback(this.step);
    },
    // 组装step算法
    countSteps: function(prize) {
      var config = this.options,
          deg = this.getPrize(config.prize),
          totalDeg = 360 * 3 + deg,
          a = 0.01,
          t = Math.sqrt(2 * totalDeg / a),
          v = a * t;

      for (var i = 0; i < t; i++) {
        config.steps.push((2 * v * i - a * i * i) / 2)
      }
      config.steps.push(totalDeg)
    },
    animCallback: function(callback) {
      setTimeout(callback.bind(this), 6)
    },
    step: function() {
      var config = this.options;

      config.outEl.style.webkitTransform = 'rotate3d(0,0,1,'+config.steps[config.now++]+'deg)';
      // outter.style.MozTransform = 'rotate(' + steps[now++] + 'deg)';
      if (config.now < config.steps.length) {
        this.animCallback(this.step);
      } else {
        config.running = false;
        config.endCall && config.endCall.call(this);
      }
    },
    getPrize: function(type) {
      //type必填
      var section = this.options.section[type];
          if (section.length === 1) return parseInt(section[0])
          // pareceRate = section.split('~'),
      var minRate = parseInt(section[0]),
          maxRate = parseInt(section[1]);
      return parseInt(Math.random()*(maxRate-minRate+1)+minRate, 10);
    }
  }

  window.Rotate = Rotate;
}(window))