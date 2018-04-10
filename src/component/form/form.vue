<!-- form -->
<template>
  <div class="a-form">
    <slot name="header"></slot>
    <ul>
      <li v-for="(item, index) in items" :key="index" :class="item.class">
        {{item.name}}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "aform",
  props: {
    items: Array
  }
};
</script>
<style lang='less' scoped>
.a-form {
  color: red;
}
</style>