<template>
  <div id="spray-log-screen">

    <farm-tabs :tabs="['General', 'Components']">

      <template #general>
        <div class="container-fluid">
          <farm-tiles
            :columns="[1, 2, 3]"
            :breakpoints="breakpoints"
            :space="['0', '1rem']">
            <farm-log-main-info
              :name="'Pre Emerge - North Field - Corn 2020'"
              :done="false"
              :timestamp="'June 10, 2020'"/>
            <farm-card
              :breakpoints="breakpoints"
              :boxShadow="cardBoxShadow"
              class="spray-log-card">
              <farm-stack>
                <h5>Duration</h5>
                <farm-inline justifyContent="space-around" class="inline">
                  <div class="division-bar" :flex="divisionBarFlex">
                    <div class="top">
                      10:45 AM
                    </div>
                    <div class="bottom">
                      Start
                    </div>
                  </div>
                  <div class="division-bar" :flex="divisionBarFlex">
                    <div class="top">
                      12:00 PM
                    </div>
                    <div class="bottom">
                      Stop
                    </div>
                  </div>
                  <div class="division-bar total" :flex="divisionBarFlex">
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
            <farm-card
              :breakpoints="breakpoints"
              :boxShadow="cardBoxShadow"
              class="spray-log-card">
              <farm-stack>
                <h5>Spray Rate</h5>
                <farm-inline>
                  <div>
                    <p><strong>Material:</strong> Corn Pre 2020</p>
                  </div>
                  <div>
                    <p><strong>Units:</strong> gal/ac</p>
                  </div>
                </farm-inline>
                <farm-inline justifyContent="space-around" class="inline">
                  <div class="division-bar" :flex="divisionBarFlex">
                    <div class="top">
                      25
                    </div>
                    <div class="bottom">
                      Target
                    </div>
                  </div>
                  <div class="division-bar" :flex="divisionBarFlex">
                    <div class="top">
                      23.7
                    </div>
                    <div class="bottom">
                      Actual
                    </div>
                  </div>
                  <div class="division-bar" :flex="divisionBarFlex">
                    <div class="top">
                      -1.3
                    </div>
                    <div class="bottom">
                      Variance
                    </div>
                  </div>
                </farm-inline>
              </farm-stack>
            </farm-card>
            <farm-card
              :breakpoints="breakpoints"
              :boxShadow="cardBoxShadow"
              class="spray-log-card">
              <farm-stack space="1rem">
                <div>
                  <h5>Areas</h5>
                  <farm-inline>
                    <farm-chip>North Field</farm-chip>
                    <div class="add-circle">
                      <icon-add-circle-outline/>
                    </div>
                  </farm-inline>
                </div>
                <div>
                  <h5>Assets</h5>
                  <farm-inline>
                    <farm-chip>Corn 2020</farm-chip>
                    <div class="add-circle">
                      <icon-add-circle-outline/>
                    </div>
                  </farm-inline>
                </div>
                <div>
                  <h5>Equipment</h5>
                  <farm-inline>
                    <farm-chip>SP300F Sprayer</farm-chip>
                    <farm-chip>Deere Tractor</farm-chip>
                    <div class="add-circle">
                      <icon-add-circle-outline/>
                    </div>
                  </farm-inline>
                </div>
              </farm-stack>
            </farm-card>
            <farm-card
              :breakpoints="breakpoints"
              :boxShadow="cardBoxShadow"
              class="spray-log-card">
              <farm-stack>
                <h5>Team</h5>
                <farm-inline>
                  <farm-chip color="green">Bob Smith</farm-chip>
                  <farm-chip color="green">Joe Schmoe</farm-chip>
                  <div class="add-circle">
                    <icon-add-circle-outline/>
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
      breakpoints: [0, 750, 1050],
      cardBoxShadow: ['none', '1px 2px 3px rgba(0, 0, 0, 0.25)'],
      divisionBarFlex: '1 1 auto',
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

.inline {
  text-align: center;
}
.division-bar {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  max-width: 8rem;
}
.top {
  height: 4rem;
  width: 100%;
  padding: 1.25rem 0;
  border-bottom: black solid 2px;
  text-align: center;
  font-size: 1.375rem;
  line-height: 1.375rem;
}
.bottom {
  padding: .5625rem 0;
  text-align: center;
  font-size: .875rem;
  line-height: .875rem;
  text-transform: uppercase;
  letter-spacing: .25rem;
}
.add-circle {
  padding-top: .25rem;
  fill: #555;
}

@media (min-width: 750px) {
  .container-fluid {
    padding: 1rem;
  }
}

</style>
