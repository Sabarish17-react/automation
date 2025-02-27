import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "@mui/system";
import { ca } from "date-fns/locale";

function BarChartProj(props) {
  return (
    <div className="App">
      <ReactEcharts
        // key={Date.now()}
        theme="light"
        option={{
          title: {
            left: "center",
            text: props.title,
            textStyle: {
              fontSize: 28,
              fontFamily: "Times New Roman",
            },
            // subtext: 'Fake data'
          },

          color: [props.customColor],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            formatter: function (params) {
              //const value = params[0].value;
              //const unit = params[0].seriesName === 'Value 2' ? ' days' : '';
              //console.log(JSON.stringify(params));
              try {
                var cal = params[1].value - params[0].value;
                if (cal >= 0) {
                } else {
                  cal = 0;
                }
                var actval = Number(params[2].value) + cal;
                return `${
                  '<span style="font-size:1.7rem;color:#000000;" >' +
                  '<b style="color:#000000">' +
                  params[0].name +
                  "</b>" +
                  "<br/><hr>" +
                  params[0].marker +
                  'Target <span style="color:#003366;">' +
                  params[0].value +
                  "</span> Days" +
                  "<br/>" +
                  params[2].marker +
                  'Actual <span style="color:#003366;">' +
                  actval +
                  " </span> Days <br/>" +
                  params[1].marker +
                  'OverDue <span style="color:red;">' +
                  cal +
                  "</span> Days"
                }`;
              } catch (e) {
                alert(e);
              }
            },
          },
          grid: {},
          legend: {
            data: ["Target Days", "Actual Days", "Overdue"],
          },
          xAxis: [
            {
              type: "category",
              data: props.xaxis,
              name: props.xaxisname,
              nameGap: 10,
              nameLocation: "middle",
              // axisLabel: {
              //   interval: 0, // Show all labels on the x-axis
              //   // Rotate the labels to prevent overlap
              // },

              // barCategoryGap: "20%",
              // barGap: "10%",
              nameTextStyle: {
                fontSize: 20,
                color: "#003366",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: props.yaxisname,
              nameGap: 5,
              // nameLocation: 'middle',
              nameTextStyle: {
                fontSize: 20,
              },
              axisLabel: {
                formatter: props.valueformat,
              },
            },
          ],
          series: [
            {
              name: "Target Days",
              type: "bar",
              showBackground: false,
              data: props.yaxis,
              barWidth: "30px",
              itemStyle: {
                normal: {
                  color: props.customColor,
                },
              },
            },
            {
              name: "Overdue",
              type: "bar",
              barGap: "-100%",
              data: props.yaxis2,
              barWidth: "30px",
              itemStyle: {
                normal: {
                  color: "Red",
                },
              },
            },
            {
              name: "Actual Days",
              type: "bar",
              barGap: "-100%",
              data: props.yaxis1,

              barWidth: "30px",
              itemStyle: {
                normal: {
                  color: props.customColor1,
                },
              },
            },
          ],
        }}
        style={{
          width: "100%",
          height: Number(props.chartHeight),
        }}
        // notMerge={true}
        // lazyUpdate={true}
      />
    </div>
  );
}
export default BarChartProj;
