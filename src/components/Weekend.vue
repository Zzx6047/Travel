<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {

    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/mixins.scss';
.title {
  line-height: 0.8rem;
  background: #ccc;
  text-indent: 0.2rem;
}
.item {
  .item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.09%;
  }
  .item-img {
    width: 100%;
  }
  .item-info {
    padding: .1rem;
    .item-title {
      @include ellipsis;
      line-height: .54rem;
      font-size: .32rem;
    }
    .item-desc {
      @include ellipsis;
      line-height: .4rem;
      color: #ccc;
    }
  }
}
</style>
