<template>
  <img :src="image" alt="">
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      image: 'https://i.ytimg.com/vi/d1FZGpv2-Q4/maxresdefault.jpg'
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
