<template >
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
</script>

<style scoped>
/* add any layout-specific styles here */

</style>
