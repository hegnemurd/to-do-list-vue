<template>
  <ul id="myUL">
    <slot></slot>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
/* Remove margins and padding from the list*/
ul {
  margin: 0;
  padding: 0;
}
</style>
