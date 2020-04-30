<template>
  <div id="spray-log-screen">

    <farm-tabs :tabs="['General', 'Components']">

      <template #general>
        <spray-log-tab-general/>
      </template>

      <template #components>
        <spray-log-tab-components/>
      </template>

    </farm-tabs>

  </div>
</template>

<script>
import SprayLogTabGeneral from './SprayLogTabGeneral';
import SprayLogTabComponents from './SprayLogTabComponents';

export default {
  name: 'SprayLog',
  components: { SprayLogTabGeneral, SprayLogTabComponents },
};
</script>

<style scoped>
#spray-log-screen {
  background-color: #eee;
  height: calc(100vh - 3rem);
}
</style>
