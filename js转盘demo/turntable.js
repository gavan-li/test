Vue.component('turn-table', {
	template: `
		<div class="turn-box">
      <div class="turn-outer" ref="turnTable">
        <div class="turn-inner">
          <ul class="turn-line-list">
            <li class="turn-line" v-for="item,index in newInfos" :key="index"
            :style="{'transform': 'rotate('+(item.rate+step/2)+'deg)'}"></li>
          </ul>
          <ul class="turn-item-list">
            <li class="turn-item" v-for="item,index in newInfos" :key="item.id"
              :style="{'transform': 'rotate('+item.rate+'deg)'}">
              <p class="turn-item-text">{{item.name}}</p>
              <div class="turn-item-img">
                <img :src="item.img" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <slot name="turn-btn"></slot>
    </div>
	`,
	data: function() {
		return {
			now: 0,
	    index: 0,
	    steps: [],
	    timer: null
		}
	},
	props: ['info', 'endCallback'],
  computed: {
    step() {
      return 360 / this.info.length
    },
    newInfos() {
      return this.info.map((item, index) => {
        item.rate = this.step * index + this.step / 2
        return item
      })
    }
  },
  methods: {
    start() {
      let index = 0
      this.timer = setInterval(() => {
        index += 5;
        if (this.now >= 360) index = 0;
        this.$refs.turnTable.style.webkitTransform = 'rotate3d(0, 0, 1,'+ index +'deg)';
      }, 6)
    },
    end(id) {
      this.timer && clearInterval(this.timer)
      this.$refs.turnTable.style.webkitTransform = 'rotate3d(0, 0, 1, 0deg)';
      this.countSteps(id)
      this.animCallback(this.frame)
    },
    animCallback(callback) {
      setTimeout(callback.bind(this), 6)
    },
    countSteps(id) {
      var obj = this.newInfos.find(item => {
        if (!id) return item.name == 'No Luck'
        return id == item.id
      })
      var totalDeg = 360 * 5 - obj.rate,
        a = 0.01,
        t = Math.sqrt(2 * totalDeg / a),
        v = a * t;
      for (var i = 0; i < t; i++) {
        this.steps.push((2 * v * i - a * i * i) / 2)
      }
      this.steps.push(totalDeg)
    },
    frame() {
      this.$refs.turnTable.style.webkitTransform = 'rotate3d(0,0,1,'+this.steps[this.index++]+'deg)';
      if (this.index < this.steps.length) {
        this.animCallback(this.frame);
      } else {
        this.endCallback && this.endCallback()
      }
    }
  }
})