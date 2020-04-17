<template>
  <farm-menu-bar :more="false">
    <template #left-menu>
      <li @click="$emit('toggleDrawer')">
        <icon-menu/>
      </li>
      <li>Spraying</li>
    </template>
  </farm-menu-bar>
</template>

<script>
export default {
  name: 'SprayLogMenuBar',
};
</script>

<style scoped>

</style>
