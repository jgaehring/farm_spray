<template>
  <div class="general-tab container-fluid">
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
        <farm-stack space="1rem">
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
        <farm-stack space="1rem">
          <h5>Spray Rate</h5>
          <farm-inline>
            <div flex="1 1 auto">
              <p>
                <strong>Material:</strong>
                &nbsp;
                <span class="spray-details">Pre 2020</span>
              </p>
            </div>
            <div flex="1 1 auto">
              <p>
                <strong>Units:</strong>
                &nbsp;
                <span class="spray-details">gal/ac</span>
              </p>
            </div>
            <div flex="1 1 auto">
              <p>
                <strong>Total Acreage:</strong>
                &nbsp;
                <span class="spray-details">106.2</span>
              </p>
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
          <h5>Areas</h5>
          <farm-inline>
            <farm-chip>North Field</farm-chip>
            <div class="add-circle">
              <icon-add-circle-outline/>
            </div>
          </farm-inline>
          <h5>Assets</h5>
          <farm-inline>
            <farm-chip>Corn 2020</farm-chip>
            <div class="add-circle">
              <icon-add-circle-outline/>
            </div>
          </farm-inline>
          <h5>Equipment</h5>
          <farm-inline>
            <farm-chip>SP300F Sprayer</farm-chip>
            <farm-chip>Deere Tractor</farm-chip>
            <div class="add-circle">
              <icon-add-circle-outline/>
            </div>
          </farm-inline>
        </farm-stack>
      </farm-card>
      <farm-card
        :breakpoints="breakpoints"
        :boxShadow="cardBoxShadow"
        class="spray-log-card">
        <farm-stack space="1rem">
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
      <farm-card>
        <farm-stack space="1rem">
          <h5>Notes</h5>
          <p class="notes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </farm-stack>
      </farm-card>
    </farm-tiles>
  </div>
</template>

<script>
export default {
  name: 'SprayLogTabGeneral',
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
.general-tab {
  max-width: 1200px;
  margin: auto;
  background-color: #eee;
  padding: 0;
}

.spray-log-card {
  border: 1px solid #eee;
}
h5, p {
  margin-bottom: 0;
}

.spray-details {
  font-size: 1rem;
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

.notes {
  font-size: .875rem;
  color: #555;
  margin-bottom: 0;
}

@media (min-width: 750px) {
  .general-tab {
    padding: 1rem;
  }
}
</style>
