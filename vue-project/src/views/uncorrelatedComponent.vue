<template>
  <div>
    <ShowProfile></ShowProfile>
    <EditProfile></EditProfile>
  </div>
</template>

<script>
import EditProfile from './EditProfile'
import ShowProfile from './ShowProfile'

export default {
  name: 'uncorrelatedComponent',
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
