<template>
<!--  <div v-if="data.length > 0" class="container">-->
    <highcharts :options="setData"></highcharts>
</template>

<script>
export default {
  name: "GraphSpeed",
  props: {
    data: { type: Object, required: true }
  },

  computed: {
    setData() {
      return {
        exporting: {
          enabled: false,
        },
        chart: {
          type: "gauge",
          width: 400,
          backgroundColor: 'transparent',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false,
        },
        title: {
          text: "",
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "#FFF"],
                  [1, "#333"],
                ],
              },
              borderWidth: 0,
              outerRadius: "109%",
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "#333"],
                  [1, "#FFF"],
                ],
              },
              borderWidth: 1,
              outerRadius: "107%",
            },
            {
              // default background
            },
            {
              backgroundColor: "#DDD",
              borderWidth: 0,
              outerRadius: "105%",
              innerRadius: "103%",
            },
          ],
        },
        // the value axis
        yAxis: {
          min: 0,
          max: this.data.fact < this.data.plan ? this.data.plan + (this.data.plan * 10) / 100 : this.data.fact,
          minorTickInterval: "auto",
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: "inside",
          minorTickColor: "#666",
          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: "inside",
          tickLength: 10,
          tickColor: "#666",
          labels: {
            step: 2,
            rotation: "auto",
          },
          title: {
            text: "млн. руб.",
          },
          plotBands: [
            {
              from: 0,
              to: this.data.plan - (this.data.plan * 10) / 100,
              color: "#DF5353", // red
            },
            {
              from: this.data.plan - (this.data.plan * 10) / 100,
              to: this.data.plan,
              color: "#DDDF0D", // yellow
            },
            {
              from: this.data.plan,
              to:
                  this.data.fact < this.data.plan
                      ? this.data.plan + (this.data.plan * 10) / 100
                      : this.data.fact,
              color: "#55BF3B", // green
            },
          ],
        },
        tooltip: {
          useHTML: true,
          pointFormat:
              "<div>Процент выполнения: <b>" +
              Math.round((this.data.fact * 100) / this.data.plan) +
              " %</b></div>" +
              "<div>План: <b>" +
              this.data.plan +
              "</b> млн. руб.</div>" +
              "<div>{series.name}: <b>{point.y}</b> млн. руб.</div>",
        },
        series: [
          {
            name: "Факт",
            data: [this.data.fact],
          },
        ],
      }
    }
  }

};
</script>

<style scoped></style>
