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
            <farm-card
              :breakpoints="[0, 600, 900]"
              :boxShadow="['none', '1px 2px 3px rgba(0, 0, 0, 0.25)']"
              class="spray-log-card">
              <farm-stack>
                <h5>Duration</h5>
                <farm-inline justifyContent="center">
                  <div :style="styleDivisionBar">
                    <div class="top">
                      10:45 AM
                    </div>
                    <div class="bottom">
                      Start
                    </div>
                  </div>
                  <div :style="styleDivisionBar">
                    <div class="top">
                      1:00 PM
                    </div>
                    <div class="bottom">
                      Stop
                    </div>
                  </div>
                  <div :style="styleDivisionBar">
                    <div class="top">
                      2:15
                    </div>
                    <div class="bottom">
                      Total
                    </div>
                  </div>
                </farm-inline>
              </farm-stack>
            </farm-card>
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
  data() {
    return {
      styleDivisionBar: {
        flex: '0 0 auto',
        minWidth: '7rem',
        maxWidth: '50%',
      },
    };
  },
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

.spray-log-card {
  border: 1px solid #eee;
}

.top {
  height: 4rem;
  width: 100%;
  padding: 1.25rem 0;
  border-bottom: black solid 2px;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
.bottom {
  padding: .5625rem 0;
  text-align: center;
  font-size: .875rem;
  line-height: .875rem;
  text-transform: uppercase;
  letter-spacing: .25rem;
}

@media (min-width: 600px) {
  .container-fluid {
    padding: 1rem;
  }
}

</style>
