<template>
  <div id="myDiv" class="header">
    <h2>To Do List</h2>
    <input
      v-model="inputValue"
      type="text"
      id="myInput"
      placeholder="Title..."
      @keyup.enter="$emit('addNewElement', $event, inputValue)"
    />
    <button @click="$emit('addNewElement', $event, inputValue)" class="addBtn">
      Add
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  }
};
</script>

<style scoped>
/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px, rgba(0, 0, 0, 0.2) 0px 11px 15px -7px;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
