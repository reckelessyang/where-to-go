<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeIcons></HomeIcons>
    <HomeHoliday></HomeHoliday>
    <HomeTicket></HomeTicket>
  </div>
</template>
<script>

import HomeHeader from './components/page/Header'
import HomeIcons from './components/page/Icons'
import HomeHoliday from './components/page/holiday/Holiday'
import HomeTicket from './components/page/Tickets'

export default {
  data () {
    return {

    };
  },
  components: {
    HomeHeader,
    HomeIcons,
    HomeHoliday,
    HomeTicket
  }
}
</script>
<style lang="scss" scoped>
</style>
