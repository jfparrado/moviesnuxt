<template>
    <div class="banner-container">
      <br>
      <img class="mainimage" src="~/assets/banner.jpg" alt="Banner Photo"/>
    </div>
    <MasVistoPreview></MasVistoPreview>
    <EstrenosPreview></EstrenosPreview>
  </template>

<script setup>

</script>
<style scoped>
img {
    max-width: 100%;
    max-height: 300px;
    left: "0";
  }
  .banner-container {
    display: flex;
    justify-content: center;
  }

</style>