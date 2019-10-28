!function() {
  function Rotate(config) {
    var options = {
      steps: [],
      totalDeg: 360 * 5,
      a: 0.01,
      now: 0,
      running: false,
      prize: null,
      outEl: document.getElementById('outer')
    };
    this.options = Object.assign(options, config);
    this.init();
  }
  Rotate.prototype = {
    init: function() {
      this.countSteps();
      this.animCallback(this.step);
    },
    // 组装step算法
    countSteps: function() {
      var config = this.options;
      var t = Math.sqrt(2 * config.totalDeg / config.a);
      var v = config.a * t;
      for (var i = 0; i < t; i++) {
        config.steps.push((2 * v * i - config.a * i * i) / 2)
      }
      config.steps.push(config.totalDeg)
    },
    animCallback: function(callback) {
      window.setTimeout(callback.bind(this), 1000 / 60)
    },
    step: function() {
      var config = this.options;
      config.outEl.style.webkitTransform = 'rotate(' + config.steps[config.now++] + 'deg)';
      // outter.style.MozTransform = 'rotate(' + steps[now++] + 'deg)';
      if (config.now < config.steps.length) {
          this.animCallback(this.step)
      } else {
        config.running = false;
        setTimeout(function () {
          if (config.prize != null) {
            var type = "";
            if (config.prize == 1) {
              type = "一等奖"
            } else if (prize == 2) {
              type = "二等奖"
            } else if (prize == 3) {
              type = "三等奖"
            }
          } else {
            // alert("谢谢您的参与，下次再接再厉")
          }
        }, 200)
      }
    }
  }
  new Rotate();
}()