<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeIcons></HomeIcons>
    <HomeHoliday></HomeHoliday>
  </div>
</template>
<script>

import HomeHeader from './components/page/Header'
import HomeIcons from './components/page/Icons'
import HomeHoliday from './components/holiday/Holiday'

export default {
  data () {
    return {
    };
  },
  components: {
    HomeHeader,
    HomeIcons,
    HomeHoliday
  }
}
</script>
<style lang="scss" scoped>
</style>
