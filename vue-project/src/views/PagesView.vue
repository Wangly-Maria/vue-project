<template>
  <div class="pages-view">
  	<h3>父向子传参(props),子向父：1、自定义事件$emit</h3>
    <router-link :to="{name: 'ParentChild1'}"><button>用例</button></router-link>
    <br />
    <h3>父向子传参(props),子向父：2、回调函数</h3>
    <router-link :to="{name: 'ParentChild2'}"><button>用例</button></router-link>
    <h3>兄弟组件通讯:1.通过父组件进行兄弟组件之间通讯</h3>
    <router-link :to="{name: 'ParentChild3'}"><button>用例</button></router-link>
    <h3>不相关组件间的交互:使用事件总线共享组件之间的Props</h3>
    <router-link :to="{name: 'uncorrelatedComponent'}"><button>用例</button></router-link>
  </div>
</template>

<script>
import EditProfile from '../views/EditProfile'
import ShowProfile from '../views/ShowProfile'

export default {
  name: 'pages-view',
  components: { EditProfile, ShowProfile },
  data () {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
