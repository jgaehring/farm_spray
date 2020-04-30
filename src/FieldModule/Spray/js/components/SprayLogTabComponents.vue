<template>
  <div class="components-tab container-fluid">
    <farm-card>
      <table>
        <caption>
          Enter the total amount of each mix component that was loaded into the
          sprayer for this operation.
        </caption>
        <thead>
          <tr>
            <th scope="col">Mix Component</th>
            <th scope="col">Amount Per Load</th>
            <th scope="col">Units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Water</td>
            <td>1410</td>
            <td>gal</td>
          </tr>
          <tr>
            <td>AMS</td>
            <td>255</td>
            <td>lbs</td>
          </tr>
          <tr>
            <td>Zidua Pro</td>
            <td>6</td>
            <td>gal</td>
          </tr>
          <tr>
            <td>2,4-D</td>
            <td>9.75</td>
            <td>gal</td>
          </tr>
          <tr>
            <td>Grounded</td>
            <td>15</td>
            <td>gal</td>
          </tr>
          <tr>
            <td>Roundup Powermax</td>
            <td>31</td>
            <td>gal</td>
          </tr>
          <tr>
            <td>Firezone</td>
            <td>18.7</td>
            <td>gal</td>
          </tr>
        </tbody>
      </table>
    </farm-card>
  </div>
</template>

<script>
export default {
  name: 'SprayLogTabComponents',
};
</script>

<style scoped>
/* Overall page & table layout */
.components-tab {
  max-width: 1200px;
  margin: auto;
  background-color: #eee;
  padding: 0;
}
.farm-card {
  min-height: calc(100vh - 6rem);
}
table {
  table-layout: fixed;
  width: 100%;
}
caption {
  caption-side: top;
  padding: 0 0 1rem 0;
  color: #555;
  font-size: 1rem;
  font-style: italic;
}

/* Column sizing & gridlines */
thead th:nth-child(1) {
  width: 50%;
  border-bottom: solid 1px black;
  border-right: solid 1px black;
}
thead th:nth-child(2) {
  width: 25%;
  border-bottom: solid 1px black;
  border-left: solid 1px black;
  border-right: solid 1px black;
}
thead th:nth-child(3) {
  width: 25%;
  border-bottom: solid 1px black;
  border-left: solid 1px black;
}
tbody td:nth-child(1) {
  border-bottom: solid 1px #ccc;
  border-right: solid 1px black;
}
tbody td:nth-child(2) {
  border-bottom: solid 1px #ccc;
  border-left: solid 1px black;
  border-right: solid 1px black;
  text-align: center;
}
tbody td:nth-child(3) {
  border-bottom: solid 1px #ccc;
  border-left: solid 1px black;
  text-align: center;
}
tbody tr:last-child td {
  border-bottom: none;
}

/* Internal styling for table cells */
thead {
  text-align: center;
}
td {
  font-size: 1.5rem;
  padding: .75rem;
}

@media (min-width: 750px) {
  .components-tab {
    padding: 1rem;
  }
  .farm-card {
    min-height: calc(100vh - 8rem);
  }
}
</style>
