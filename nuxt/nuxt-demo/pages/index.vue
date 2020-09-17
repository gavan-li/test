<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        {{counter}}
      </h1>
      <h2 class="subtitle">
        Welcome to the iView + Nuxt.js template
      </h2>
      <div class="list" v-if="list.length > 0">
        <div v-for="(item,index) in list" :key="index+'0'">
          <label>姓名</label><span>{{item.autor}}</span>
          <label>标题</label><span>{{item.college}}</span>
          <label>主题</label><span>{{item.course_name}}</span>
        </div>
        <div v-for="(item,index) in newlist" :key="index+'1'">
          <label>姓名</label><span>{{item.autor}}</span>
          <label>标题</label><span>{{item.college}}</span>
          <label>主题</label><span>{{item.course_name}}</span>
        </div>
      </div>
      <button @click="getData">下拉</button>
      <button @click="modifyHandle">修改</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getList } from '~/assets/api.js'
// import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      newlist: []
    }
  },
  async asyncData({ $axios }) {
    const list = await $axios.get(getList)
    return {
      list: list || []
    }
  },
  computed: {
    ...mapState({
      counter: 'counter'
    })
  },
  methods: {
    ...mapActions(['ajax']),
    modifyHandle() {
      // this.$store.commit('increment', 'new title')
      // this.$store.dispatch('ajax')
      this.ajax()
    },
    async getData() {
      const newlist = await this.$axios.get(getList)
      this.newlist = this.newlist.concat(newlist)
    }
  },
  components: {
    // Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
