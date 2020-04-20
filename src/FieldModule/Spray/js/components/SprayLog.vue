<template>
  <div id="spray-log-screen">

    <farm-tabs :tabs="['General', 'Components']">

      <template #general>
        <div class="container-fluid">
          <farm-tiles
            :columns="[1, 2, 3]"
            :breakpoints="[0, 600, 900]"
            :space="['0', '1rem']">
            <farm-log-main-info
              :name="'Pre Emerge - North Field - Corn 2020'"
              :done="false"
              :timestamp="'June 10, 2020'"/>
          </farm-tiles>
        </div>
      </template>

      <template #components>
        <div class="container-fluid">
          Components
        </div>
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

.container-fluid {
  max-width: 1200px;
  margin: auto;
  background-color: #eee;
  padding: 0;
}

@media (min-width: 600px) {
  .container-fluid {
    padding: 1rem;
  }
}

</style>
