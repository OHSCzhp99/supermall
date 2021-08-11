<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" :class="{active: index === activeIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }

  .tab-control-item {
    flex: 1;
  }

  /* 文字内边距5px下边条才看起来长些*/
  .tab-control-item span {
    padding: 5px;
  }

  /* 当前活跃变色 和添加下边条 */
  .active span {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>