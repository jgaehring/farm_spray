<template>
  <div id="spray-screen">
    <div class="container-fluid">

      <div class="late" v-if="lateLogs.length > 0">
        <div class="divider">Late</div>
        <farm-tiles
          :columns="[1, 2, 3]"
          :breakpoints="[0, 600, 900]"
          :space="['0', '1rem']">
          <farm-card
            v-for="(log, i) in lateLogs"
            :key="`late-log-${i}`"
            class="spray-card"
            :breakpoints="[0, 600, 900]"
            :boxShadow="['none', '1px 2px 3px rgba(0, 0, 0, 0.25)']">
            <p class="name">{{log.name}}</p>
            <p class="date">{{log.date}}</p>
          </farm-card>
        </farm-tiles>
      </div>

      <div class="upcoming" v-if="upcomingLogs.length > 0">
        <div class="divider upcoming">Upcoming</div>
        <farm-tiles
          :columns="[1, 2, 3]"
          :breakpoints="[0, 600, 900]"
          :space="['0', '1rem']">
          <farm-card
            v-for="(log, i) in upcomingLogs"
            :key="`upcoming-log-${i}`"
            class="spray-card"
            :breakpoints="[0, 600, 900]"
            :boxShadow="['none', '1px 2px 3px rgba(0, 0, 0, 0.25)']">
            <p class="name">{{log.name}}</p>
            <p class="date">{{log.date}}</p>
          </farm-card>
        </farm-tiles>
      </div>

      <div class="done" v-if="doneLogs.length > 0">
        <div class="divider done">Done</div>
        <farm-tiles
          :columns="[1, 2, 3]"
          :breakpoints="[0, 600, 900]"
          :space="['0', '1rem']">
          <farm-card
            v-for="(log, i) in doneLogs"
            :key="`done-log-${i}`"
            class="spray-card"
            :breakpoints="[0, 600, 900]"
            :boxShadow="['none', '1px 2px 3px rgba(0, 0, 0, 0.25)']">
            <p class="name">{{log.name}}</p>
            <p class="date">{{log.date}}</p>
          </farm-card>
        </farm-tiles>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Spray',
  props: ['logs'],
  data() {
    return {
      lateLogs: [
        { name: 'Pre Emerge - North Field - Corn 2020', date: 'June 10, 2020' },
      ],
      upcomingLogs: [
        { name: 'Post Emerge - North Field - Corn 2020', date: 'June 28, 2020' },
        { name: 'Post Emerge - East Field - Beans 2020', date: 'June 28, 2020' },
      ],
      doneLogs: [
        { name: 'Pre Emerge - East Field - Beans 2020', date: 'June 8, 2020' },
      ],
    };
  },
};
</script>

<style scoped>
#spray-screen {
  background-color: #eee;
}
.container-fluid {
  max-width: 1200px;
  min-height: calc(100vh - 3rem);
  margin: auto;
  background-color: #eee;
  padding: 0;
}

.divider {
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}

.spray-card {
  border: 1px solid #eee;
}
.spray-card p {
  margin-bottom: .25rem;
}
.name {
  font-size: 1rem;
  font-weight: bold;
}

@media (min-width: 600px) {
  .container-fluid {
    padding: 1rem;
  }
  .divider {
    padding: 0.75rem 0 0.25rem 0;
  }
  .spray-card {
    border: none;
  }
}
</style>
