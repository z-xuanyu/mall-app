<template>
    <div class="popular">
        <popular-swiper></popular-swiper>
        <popular-icons></popular-icons>
        <popular-brand></popular-brand>
        <popular-list></popular-list>
    </div>
</template>
<script>
import PopularSwiper from './popular/Swiper'
import PopularIcons from './popular/Icons'
import PopularBrand from './popular/Brand'
import PopularList from './popular/List'
export default {
    name:'Popular',
    components:{
        PopularSwiper,
        PopularIcons,
        PopularBrand,
        PopularList
    }
}
</script>
<style lang="less" scoped>
</style>