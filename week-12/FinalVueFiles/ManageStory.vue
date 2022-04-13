<script setup></script>

<template>
  <div>
    <h1>Story Writer</h1>
    <div class="div-containter-input">
      <div class="div-input">
        <label>Title</label>
        <input type="text" placeholder="input your title here..." />
      </div>
    </div>
    <div class="div-containter-input">
      <div class="div-input">
        <label>Story</label>
        <textarea
          cols="100"
          rows="10"
          placeholder="input your story here..."
        ></textarea>
      </div>
    </div>
    <div>
      <button style="margin-right: 10px">Create</button>
      <button>Cancel</button>
    </div>
  </div>
</template>

<style scoped>
.div-contatiner-input {
  display: flex;
  flex-direction: column;
}
.div-input {
  display: flex;
  align-items: top;
}
</style>
