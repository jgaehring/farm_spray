<template>
  <div id="spray-log-screen">

    <farm-tabs :tabs="['General', 'Components']">

      <template #general>
        <farm-tiles :columns="1" :space="'0'">
          <farm-card>
            Main Info
          </farm-card>
        </farm-tiles>
      </template>

      <template #components>
        <farm-tiles :columns="1" :space="'0'">
          <farm-card>
            Components
          </farm-card>
        </farm-tiles>
      </template>

    </farm-tabs>

  </div>
</template>

<script>
export default {
  name: 'SprayLog',
};
</script>

<style scoped>
#spray-log-screen {
  background-color: #eee;
  height: calc(100vh - 3rem);
}
</style>
