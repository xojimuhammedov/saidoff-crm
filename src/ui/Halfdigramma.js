import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Select from "@/ui/Select";

const renderChart = (seriesData, title) => ({
  chart: {
    type: "pie",
    backgroundColor: "#ffffff",
    options: { chart: { custom: { label: "gfdsgfds" } } },
    events: {
      render() {
        const series = this.series[0];

        if (!this.options.chart.custom) {
          this.options.chart.custom = {};
        }

        let customLabel = this.options.chart.custom.label;

        if (!customLabel) {
          customLabel = this.options.chart.custom.label = this.renderer
            .label(
              `<strong>${series.data.reduce((acc, point) => acc + point.y, 0).toLocaleString()}</strong>`,
            )
            .css({
              color: "#000",
              textAnchor: "middle",
            })
            .add();
        }

        const x = series.center[0] + this.plotLeft,
          y = series.center[1] + this.plotTop - customLabel.attr("height") / 2;

        customLabel.attr({ x, y });
        customLabel.css({ fontSize: `${series.center[2] / 12}px` });
      },
    },
  },
  title: {
    text: title,
    align: "left",
    marginLeft: 33,
  },
  plotOptions: {
    pie: {
      innerSize: "60%",
      depth: 45,
      startAngle: 180,
      dataLabels: {
        distance: 20,
        format: "{point.y:.0f}",
        style: {
          fontSize: "16px",
          fontWeight: "500",
          color: "#000",
        },
      },
      showInLegend: true,
    },
  },
  series: [{ name: "To'lov", data: seriesData }],
  legend: {
    itemStyle: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#000",
    },
  },
});

const Dashboard = () => {
  const chartOptions1 = renderChart([
    { name: "Berilgan", y: 2000000, color: "#00FF00" },
    { name: "Berilmagan", y: 9200000, color: "#FF0000" },
  ]);

  const chartOptions2 = renderChart([
    { name: "To'langan", y: 6000000, color: "#00FF00" },
    { name: "To'lanmagan", y: 10000000, color: "#FF0000" },
  ]);

  return (
    <>
      {/* HODIMLAR OYLIGI */}
      <div className="rounded-[16px] bg-white px-7 py-6">
        <div className="flex items-center justify-between">
          <h4 className="text-[20px]">O'quvchilar to'lovi</h4>
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions1} />
      </div>

      {/* O'QUVCHILAR TO'LOVI */}
      <div className="rounded-[16px] bg-white px-7 py-6">
        <div className="flex items-center justify-between">
          <h4 className="text-[20px]">O'quvchilar to'lovi</h4>
          <select
            id="dropdown"
            className={`h-11 w-44 rounded-lg border px-3 py-2 text-[#787F95] shadow focus:bg-white focus:outline-none`}
          >
            <option value="Amaliyotchilar">Amaliyotchilar</option>
            <option value="Boshqaruvchilar">Boshqaruvchilar</option>
            <option value="O'qituvchilar">O'qituvchilar</option>
            <option value="Talabalar">Talabalar</option>
          </select>
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions2} />
      </div>
    </>
  );
};

export default Dashboard;
