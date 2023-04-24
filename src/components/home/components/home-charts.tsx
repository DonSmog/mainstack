import { CardContainer } from "./card";
import { useState, ChangeEvent } from "react";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Legend,
  Title,
  Tooltip
);

const days = [
  {
    id: "1day",
    name: "1 Day",
  },
  {
    id: "3day",
    name: "3 Day",
  },
  {
    id: "7day",
    name: "7 Day",
  },
  {
    id: "30day",
    name: "30 Day",
  },
  {
    id: "all_time",
    name: "All Time",
  },
  {
    id: "custom",
    name: "Custom Date",
  },
];

const HomeCharts = () => {
  const [selected, setSelected] = useState("All Time");
  const isSelected = (value: string) => selected === value;
  const handleRadioClicked = (e: ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.value);

  const getData = async () => {
    return await fetch("https://fe-task-api.mainstack.io/").then((res) =>
      res.json()
    );
  };

  const useData = () => {
    return useQuery("chart", getData, {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });
  };

  const { data, isLoading } = useData();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <ClipLoader color="#FF5403" size={70} />
      </div>
    );
  }

  const topView = Object.keys(data?.graph_data?.views).map((key) => {
    return {
      label: key,
      value: data?.graph_data?.views[key],
    };
  });
  const totalTopView = topView?.reduce(
    (acc: number, item: { label: string; value: number }) => acc + item.value,
    0
  );

  const topViewLabel = topView?.map(
    (item: { label: string; value: number }) => {
      return item.label;
    }
  );
  const topViewData = topView?.map(
    (item: { label: string; value: number }) => item.value
  );

  const topLocationLabel = data?.top_locations?.map(
    (item: { country: string; count: number; percent: number }) =>
      `${item.country} ${item.percent}%`
  );

  const topLocationData = data?.top_locations?.map(
    (item: { country: string; count: number; percent: number }) => item.count
  );

  const topSourcesLabel = data?.top_sources?.map(
    (item: { source: string; count: number; percent: number }) =>
      `${item.source} ${item.percent}%`
  );

  const topSourcesData = data?.top_sources?.map(
    (item: { source: string; count: number; percent: number }) => item.count
  );

  const doughnutOptions = {
    plugins: {
      legend: {
        position: "left" as const,
        rtl: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          pointStyleWidth: 12,
          boxHeight: 9,
          textAlign: "right" as const,
          color: "#131316",
          font: {
            size: 16,
            weight: "600",
          },
        },
      },
    },
  };

  const locationData = {
    labels: topLocationLabel,
    datasets: [
      {
        label: "",
        data: topLocationData,
        backgroundColor: [
          "#599EEA",
          "#844FF6",
          "#0FB77A",
          "#FAB70A",
          "#F09468",
        ],
        borderColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
        borderWidth: 1,
      },
    ],
  };

  const sourcesData = {
    labels: topSourcesLabel,
    datasets: [
      {
        label: "",
        data: topSourcesData,
        backgroundColor: [
          "#599EEA",
          "#844FF6",
          "#0FB77A",
          "#FAB70A",
          "#F09468",
        ],
        borderColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
        borderWidth: 1,
      },
    ],
  };

  const series = [
    {
      name: "Page Views",
      data: topViewData,
    },
  ];
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "area",
      height: 500,
      zoom: {
        enabled: false,
      },
    },
    colors: ["#FF5403"],
    labels: topViewLabel,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    xaxis: {
      type: "datetime",
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 w-full">
        {days.map((day) => (
          <div className="selection" key={day.id}>
            <input
              type="radio"
              id={day.id}
              value={day.name}
              checked={isSelected(`${day.name}`)}
              onChange={handleRadioClicked}
            />
            <label htmlFor={day.id} className="">
              {day.name}
            </label>
          </div>
        ))}
      </div>

      <CardContainer>
        <div className="flex  flex-col gap-2">
          <div className="flex flex-row justify-between items-center w-full">
            <h5 className="text-primary font-bold text-lg">Page Views</h5>
            <span className="text-secondary text-lg cursor-pointer">
              <AiOutlineInfoCircle />
            </span>
          </div>
          <p className="text-secondary text-sm w-fit-content">{selected}</p>
          <h5 className="font-semibold text-[48px] text-primary">
            {totalTopView}
          </h5>
          <Chart options={options} series={series} type="area" height={350} />
        </div>
      </CardContainer>

      <div className="flex gap-3 w-full">
        <div className="flex w-1/2">
          <CardContainer>
            <div className="flex flex-row justify-between items-center w-full">
              <h5 className="text-primary font-bold text-lg">Top Location</h5>
              <span className="text-tertiary text-sm cursor-pointer hover:font-bold">
                View full reports
              </span>
            </div>
            <Doughnut options={doughnutOptions} data={locationData} />
          </CardContainer>
        </div>
        <div className="flex w-1/2">
          <CardContainer>
            <div className="flex flex-row justify-between items-center w-full">
              <h5 className="text-primary font-bold text-lg">
                Top Referral source
              </h5>
              <span className="text-tertiary text-sm cursor-pointer hover:font-bold">
                View full reports
              </span>
            </div>
            <Doughnut options={doughnutOptions} data={sourcesData} />
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default HomeCharts;
