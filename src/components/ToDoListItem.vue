<template>
  <li>
    <slot></slot>
    <span class="close" @click="$emit('delete', $event)">X</span>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
/* Style the list items */
li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  font-weight: 600;
  font-family: cursive;

  /* Make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px, rgba(0, 0, 0, 0.2) 0px 11px 15px -7px;
}

/* Set all odd list items to a different colour (zebra-stripes) */
li:nth-child(odd) {
  background: #f9f9f9;
}

/* Add a "checked" mark when clicked on */
li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}
.close:hover {
  background-color: #f44336;
  color: white;
}
</style>
