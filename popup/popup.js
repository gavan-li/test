Vue.component('common-popup', {
  data: function () {
    return {
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: ''
    }
  },
  computed: {
    style() {
      let style = {};
      if (this.width) {
        style.width = this.width;
      }
      if (!this.fullscreen) {
        style.marginTop = this.top;
      }
      return style;
    }
  },
  /* mounted() {
    if (this.visible) {
      this.rendered = true;
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    }
  }, */
  template: `
    <transition name="dialog-fade">
      <div class="popup-wrapper"  v-show="visible" >
          <div class="popup-content" ref="dialog">
            <slot name="content">
            </slot>
          </div>
          <div class="popup-modal" tabindex="0" ></div>
      </div>
    </transition>`
})