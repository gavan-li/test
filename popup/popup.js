Vue.component('common-popup', {
  data: function () {
    return {
      scrollTop: '0'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: ''
    }
  },
  computed: {
  },
  watch: {
    /*visible(val) {
      if (val) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        this.scrollTop = scrollTop + 'px'
        // this.$refs.dialog.style.top = document.documentElement.scrollTop || document.body.scrollTop
      }
    }*/
    visible(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
        // document.body.style.paddingRight = '17px'
      } else {
        setTimeout(() => {
          document.body.style = {}
        }, 400)
        
      }
      /*document.body.style.overflow = val ? 'hidden' : 'visible'
      document.body.style.paddingRight = val ?'17px' : '0'*/
    }
  },
  mounted() {
  }, 
  template: `
    <transition name="dialog-fade">
      <div class="popup-wrapper" :style="{'top': scrollTop}" v-show="visible" >
          <div class="popup-content">
            <slot name="content">
            </slot>
          </div>
          <div class="popup-modal" tabindex="0" ></div>
      </div>
    </transition>`
})