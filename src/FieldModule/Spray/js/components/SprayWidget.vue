<template>
  <div>
      <p
        @click="openSpraying">
        Record Spraying Activity
      </p>
  </div>
</template>

<script>
export default {
  name: 'SprayWidget',
  props: ['logs'],
  methods: {
    openSpraying(e) {
      e.stopPropagation();
      this.$router.push({ path: '/spray' });
    },
  },
};
</script>

<style scoped>

</style>
