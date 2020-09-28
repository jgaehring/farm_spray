<template>
  <div id="spray-widget-container">
    <div class="fade-left"></div>
    <div class="fade-right"></div>
    <div class="spray-card-container">
      <div class="scroll-x" :style="scrollStyle">
        <farm-card
          class="spray-card"
          boxShadow="strong"
          width="s"
          space="s">
          <p class="name">
            Pre Emerge - North Field - 2020 Corn
          </p>
          <p class="date">
            June 10, 2020
          </p>
        </farm-card>
        <farm-card
          class="spray-card"
          boxShadow="strong"
          width="s"
          space="s">
          <p class="name">
            Post Emerge - North Field - 2020 Corn
          </p>
          <p class="date">
            June 28, 2020
          </p>
        </farm-card>
        <farm-card
          class="spray-card"
          boxShadow="strong"
          width="s"
          space="s">
          <p class="name">
            Post Emerge - East Field - 2020 Beans
          </p>
          <p class="date">
            June 28, 2020
          </p>
        </farm-card>
      </div>
    </div>
    <div class="btn-container">
      <button class="btn btn-info">Show all</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SprayWidget',
  props: ['logs'],
  data() {
    return {
      scrollStyle: {
        paddingBottom: '15px',
      },
    };
  },
  mounted() {
    this.calcScrollStyle();
  },
  methods: {
    // This calculates the exact padding needed to hide the scrollbar, because
    // it can vary between browsers.
    calcScrollStyle() {
      const scrollX = document.querySelector('.scroll-x');
      const paddingBottom = `calc(1rem + ${scrollX.offsetHeight - scrollX.clientHeight}px)`;
      this.scrollStyle = { paddingBottom };
    },
  },
};
</script>

<style scoped>
#spray-widget-container {
  position: relative;
}
.fade-left {
  position: absolute;
  top: 0px;
  left: calc(var(--s) * -1);
  height: 100%;
  width: var(--s);
  z-index: 10;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), var(--white) 50%);
}
.fade-right {
  position: absolute;
  top: 0px;
  right: calc(var(--s) * -1);
  height: 100%;
  width: var(--s);
  z-index: 10;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--white) 50%);
}

.spray-card-container {
  white-space: nowrap;
  overflow: hidden;
  padding: var(--xs) var(--s);
  margin-left: calc(var(--s) * -1);
  margin-right: calc(var(--s) * -1);
  height: 6.25rem;
}
.scroll-x {
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: content-box;
  height: 100%;
  margin-right: calc(var(--s) * -1);
  margin-left: calc(var(--s) * -1);
  padding-left: var(--s);
}
.spray-card {
  display: inline-block;
  white-space: normal;
  margin-right: 1rem;
  margin-top: .5rem;
}

p {
  margin-bottom: .125rem;
  line-height: 1rem;
}
.name {
  font-weight: bold;
  font-size: .875rem;
}
.date {
  font-size: .625rem;
  text-transform: uppercase;
}

.btn-container {
  padding-top: .5rem;
}
</style>
