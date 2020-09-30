<template>
  <farm-main :space="['none', 's']">

    <farm-tabs :tabs="['General', 'Components']">

      <template #general>
        <spray-log-tab-general/>
      </template>

      <template #components>
        <spray-log-tab-components/>
      </template>

    </farm-tabs>

  </farm-main>
</template>

<script>
import SprayLogTabGeneral from './SprayLogTabGeneral';
import SprayLogTabComponents from './SprayLogTabComponents';

export default {
  name: 'SprayLog',
  components: { SprayLogTabGeneral, SprayLogTabComponents },
};
</script>
