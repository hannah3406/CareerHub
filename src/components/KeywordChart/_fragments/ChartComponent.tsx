import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import * as xlsx from "xlsx";
import { Chart } from "react-chartjs-2";
import { Popover, Button } from "antd";
import { Box } from "@chakra-ui/react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";

import randomcolor from "randomcolor";
import styled from "@emotion/styled";
import { DummyList } from "container/Statistics/types";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement,
  Filler
);
interface DoughnutChartProps {
  dummy: DummyList;
  labels: string[];
  values: number[];
  chartType: string;
}

const ChartComponent = (props: DoughnutChartProps) => {
  const canvas = document.getElementsByTagName("canvas")[0];

  const { labels, values, chartType, dummy } = props;
  const [type, setType] = useState<any>("bar");
  const [isFill, setIsFill] = useState<boolean>(false);
  const [randomColor, setRandomColor] = useState<string[]>([]);
  const [max, setMax] = useState<number>(0);
  const [min, setMin] = useState<number>(0);

  const getStepSize = (min: number, max: number) => {
    const range = max - min;
    const interval = Math.ceil(range / 5);
    const exponent = Math.floor(Math.log10(interval));
    const factor = Math.pow(10, exponent);
    return Math.ceil(interval / factor) * factor;
  };
  //chart data
  const data = {
    labels,
    datasets: [
      {
        data: values,
        label: "빈도수",
        backgroundColor: chartType === "doughnut" ? randomColor : "#D89999",
        hoverOffset: 4,
        fill: isFill ? "start" : isFill,
        tension: 0.3,
      },
    ],
  };
  //chart options
  const options = {
    backgroundColor: "#fff",
    responsive: true,
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
    rotation: 90,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: chartType !== "doughnut" && {
      x: {
        axis: "x",
        grid: {
          color: "#ddd",
          lineWidth: 1,
        },
        ticks: {
          color: "#808080",
          maxTicksLimit: 6,
        },
        border: {
          dash: [5, 2],
          color: "#a3a8aa",
        },
      },
      y: {
        axis: "y",
        grid: {
          display: false,
        },
        afterDataLimits: (scale: { max: number }) => {
          scale.max = scale.max * 1.2;
        },
        ticks: {
          color: "#808080",
          stepSize: getStepSize(min, max),
        },
      },
    },
  };

  //chart import image
  const downloadChart = (format: string) => {
    const chartCanvas = canvas;
    canvas.getContext("2d", { willReadFrequently: true });
    const newCanvas = document.createElement("canvas");
    newCanvas.width = chartCanvas.width;
    newCanvas.height = chartCanvas.height;
    const ctx = newCanvas.getContext("2d");

    if (ctx) {
      ctx.fillStyle = options.backgroundColor || "#fff";
      ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
      ctx.drawImage(chartCanvas, 0, 0);

      newCanvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, format);
        }
      });
    }
  };
  //chart import xlsx
  const downloadXLSX = () => {
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(dummy);
    xlsx.utils.book_append_sheet(workbook, worksheet, "sheet1");
    xlsx.writeFile(workbook, "chart_data.xlsx");
  };
  //chart import json
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(dummy)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chart_data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const imgContent = (
    <div>
      <ButtonStyle onClick={() => downloadChart(`chart_${chartType}.png`)}>
        PNG
      </ButtonStyle>
      <ButtonStyle onClick={() => downloadChart(`chart_${chartType}.jpeg`)}>
        JPEG
      </ButtonStyle>
    </div>
  );
  const dataContent = (
    <div>
      <ButtonStyle onClick={downloadXLSX}>XLSX</ButtonStyle>
      <ButtonStyle onClick={downloadJSON}>JSON</ButtonStyle>
    </div>
  );
  const content = (
    <div>
      <Popover placement="leftTop" content={imgContent} arrow={true}>
        <ButtonStyle>이미지 다운로드</ButtonStyle>
      </Popover>
      <Popover placement="leftTop" content={dataContent} arrow={true}>
        <ButtonStyle>데이터 다운로드</ButtonStyle>
      </Popover>
    </div>
  );
  useEffect(() => {
    setIsFill(chartType === "linefill");
    if (chartType === "linefill") {
      return setType("line");
    }
    if (chartType === "doughnut") {
      setRandomColor(
        randomcolor({
          count: 10,
        })
      );
    }
    setType(chartType);
  }, [chartType]);
  useEffect(() => {
    const min = Math.min.apply(null, values);
    const max = Math.max.apply(null, values);
    setMax(max);
    setMin(min);
  }, [values]);

  return (
    <>
      <Box textAlign="right" p="15px 0">
        <div
          style={{
            width: 100,
            display: "inline-block",
            border: "1px solid #ddd",
          }}
        >
          <Popover placement="leftTop" content={content} arrow={true}>
            <ButtonStyle> 다운로드</ButtonStyle>
          </Popover>
        </div>
      </Box>
      <ChartWrapper type={type}>
        <Chart data={data} type={type} options={options} />
      </ChartWrapper>
    </>
  );
};

export default ChartComponent;

interface IChartWrapperProps {
  type: string;
}
const ChartWrapper = styled.section`
  width: ${(props: IChartWrapperProps) =>
    props.type === "doughnut" ? "50%" : "100%"};
  margin: 0 auto 40px;
  position: relative;
  canvas {
    max-width: 100%;
    background-color: #fff !important;
  }
`;

const ButtonStyle = styled(Button)`
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background: #d89999;
    span {
      font-weight: bold;
      color: #fff;
    }
  }
  &:focus {
    background: #d89999;
    span {
      font-weight: bold;
      color: #fff;
    }
  }
`;
