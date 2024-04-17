import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ApexCharts from "apexcharts";
import { GoAlert } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { TbNotification } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtonBase, Switch, useScrollTrigger } from "@mui/material";

const HomePage = () => {
  const navagate = useNavigate();
  return (
    <div className="w-full  ">
      <div className="w-full fixed z-10 top-0">
        <div className="p-1  h-[70px] flex items-center justify-between top-0 text-xl font-semibold z-10 leading-6 bg-white relative">
          <span className="p-[4px] flex items-center justify-center rounded-md bg-[#F1F1F1]">
            <IoIosArrowBack />
          </span>
          <p>Workout Tracker</p>
          <div className="h-7 w-7 "></div>
        </div>
      </div>
      <div>
        <div className="mt-10 p-1 h-[180px]">
          <BarChart />
        </div>
        <ButtonBase className="w-full">
          <div className="w-full flex border-[1px] border-[#cad1ee] items-center  bg-gradient-to-r from-[#819cff43] rounded-[10px] to-[#10101000] py-[8px]  ">
            <span className=" m-[12px] text-lg text-[#7E96FF]">
              <GoAlert className="text-[20px]" />
            </span>
            <div>
              <div className="text-sm justify-start items-start flex flex-col">
                <p>You've burned fewer calories than</p>
                <p>yesterday. Time to get moving! </p>
              </div>
            </div>
          </div>
        </ButtonBase>
        <WorkoutCard />
        <div className="px-3">
          <h2 className="text-[16px] font-semibold mt-2 mb-4">
            What Do You Want to Train
          </h2>
          <div className="bg-blue-200  rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between">
              <ul className="list-none space-y-1">
                <li className="text-[12px] text-black">Full Body Workout</li>
                <li className="text-[12px] text-black">Arms</li>
                <li className="text-[12px] text-black">Chest</li>
                <li className="text-[12px] text-black">Bsck</li>
              </ul>
              <div>
                <img
                  className="w-[100px] rounded-full bg-[#FFFFFF7A] h-[100px]"
                  src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mu33qv9pYMsUqYlc9TFa5ztiZhwNCioQkCJ4s~C5W9TtHezEYCOvLE9X3I4rvzFgZJ1X4FDgOQwtkiNovuk7EWLhsinm8Sody3hycvElP3~J6V4oLgXkoHjd~O-oFgMKfjnYA~XKv9WfsKfotsK0WJ0gEjvTY~LXvi34bZZdbcMOZ-EEk5yKQ9kpACihIFgANBY-PN7NpvZN-0p1i05GsvdVvhx9LzOQLnTRmbUJakdyx3pqot3txCBZSpXDnnHJiDlwZwE-j-x84-yE2snCCUTn~LsZBbvKtpP7a1nl9h5I6Tkl503oojKuwQs~zH9rUa30hrt4I3WvV8Gkk5wwHg__"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[76px] -ml-4 px-2 bg-[#ffffff] fixed bottom-0 justify-between w-full  flex">
        <div
          className="w-[63px] h-[63px] text-[26px] flex justify-center items-center"
          onClick={() => navagate("/schedule")}
        >
          <IoHomeOutline />
        </div>
        <div
          className="w-[63px] h-[63px] text-[30px] mt-0.5 flex justify-center items-center"
          onClick={() => navagate("/schedule")}
        >
          <TbNotification />
        </div>
        <div
          className="w-[63px] h-[63px] bg-gradient-to-r from-[#DEE5FF]  to-[#809AFF] rounded-full -translate-y-6 text-[26px] flex justify-center items-center"
          onClick={() => navagate("/schedule")}
        >
          <CiSearch />
        </div>
        <div
          className="w-[63px] h-[63px] text-[30px] mt-0.5 flex justify-center items-center"
          onClick={() => navagate("/schedule")}
        >
          <MdOutlineCameraAlt />
        </div>
        <div
          className="w-[63px] h-[63px] text-[26px] flex justify-center items-center"
          onClick={() => navagate("/schedule")}
        >
          <FaRegUser />
        </div>
      </div>
      <div className="h-[150px]"></div>
    </div>
  );
};

const BarChart = () => {
  const calChart = {
    colors: ["#8099FF"],
    series: [
      {
        name: "Calories",
        color: "#8099FF",
        data: [
          { x: "12:00 AM", y: 231 },
          { x: "12:30 AM", y: 122 },
          { x: "1:00 AM", y: 63 },
          { x: "1:30 AM", y: 421 },

          { x: "8:00 AM", y: 600 },
          { x: "8:30 AM", y: 450 },
          { x: "9:00 AM", y: 550 },
          { x: "9:30 AM", y: 625 },
          { x: "10:00 AM", y: 725 },
          { x: "10:30 AM", y: 825 },
          { x: "11:00 AM", y: 925 },
          { x: "11:30 AM", y: 825 },
          { x: "12:00 PM", y: 725 },

          { x: "2:00 PM", y: 325 },
          { x: "2:30 PM", y: 225 },
          { x: "3:00 PM", y: 125 },

          { x: "11:00 PM", y: 325 },
          { x: "11:30 PM", y: 225 },
          { x: "12:00 AM", y: 231 },
          { x: "12:30 AM", y: 122 },
          { x: "1:00 AM", y: 63 },
          { x: "1:30 AM", y: 421 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "150px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 2,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      strokeDashArray: [3],
      borderColor: "lightgray",
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
      yaxis: {
        lines: {
          show: true,
          offsetX: -30,
          offsetY: 0,
          positions: [300, 600, 900], // Add dotted lines at y ==300 , y==600, y==900
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "",
        "",
        "12:00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "6:00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "12:00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "6:00",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      labels: {
        show: true,
        rotate: 0,
        rotateAlways: false,
        hideOverlappingLabels: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-sm font-normal text-gray-500 dark:text-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      max: 1000, // Set max y-value to 900
    },
    fill: {
      opacity: 1,
    },
  };

  if (
    document.getElementById("column-chart") &&
    typeof ApexCharts !== "undefined"
  ) {
    const chart = new ApexCharts(
      document.getElementById("column-chart"),
      calChart
    );
    chart.render();
  }

  React.useEffect(() => {
    const chart = new ApexCharts(document.getElementById("chart"), calChart);
    chart.render();
    // Cleanup function to avoid memory leaks
    return () => chart.destroy();
  }, []);

  return <div id="chart" className="h-full w-full"></div>;
};

const flexClasses = "flex justify-between items-center";

const labelClasses = "flex items-center cursor-pointer";
const dotClasses =
  "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition";

const WorkoutCard = () => {
  return (
    <div className="px-4 py-6 bg-white space-y-4">
      <div className={flexClasses}>
        <h2 className="text-[16px] font-semibold">Upcoming Workout</h2>
        <a href="#" className="text-blue-500 text-[12px] hover:text-blue-600">
          See more
        </a>
      </div>
      <div className="space-y-3">
        <WorkoutItem
          name="Full Body Workout"
          time="Today 3pm"
          img="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~R5jLwDlFZg5jA64xQhhXbvhiOqzfoczemNjyW41IVUCfJ07EPR-hsYnSBBRI2sqofehWaWTuQY~6RvVQ3wD76Uk4Txe5bN9Yj1DViahbdVfdkonHpB-PV-nkAvCb3M2NCNr6qtm~WbCe8Ev5zORs0VERmpMiOOhbBv355jujI8R0aeICn1CHOqALGYLcoqFrac56bs-WVo5jgsmBTg7gf1NHO-AuLwLmlrvKIaHMDoOPg1EhdNJrWE2shP4dNuAzmevLfNGzn1tgxrdGBTo~lSYqtGIlBfZOQfGq9c5AuV7OKylc4iRvLNCto3-0o-1ytNSDtJ1gRJESlnAmuicQ__"
        />
        <WorkoutItem
          name="Upper Body Workout"
          time="4 Feb, 3:30 pm"
          img="https://s3-alpha-sig.figma.com/img/5688/dda6/63ce83a9876ee1cadf652148a636fe39?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AqtSmY1k0iQ8zli~s3WMSgjesxoSBX573f59fyG3X26w9pIUPYo3nnz3m3c4qUGEIovIU09HBtKVrkQySapb0bh8Yp8U1FJK5aPFsozGeJ8X861G5sPhGHKYlsLopZDDDwAa6ARD3e6uHOn6FB3FULjSyMzWCM9Uf3ARLQk-RlKJA8a-wiR7virfjjVWh4IzgnqiQbjrIqzXxccxMsIXsy0zZjzxEuZlEglquyGS6~c4lWjn~qF0tc8kXABthnR~PLAlkKsLKaMV7GtrCE90MqDMlogLvYNaTUjWgiQ2UvuzhlOWODEEhPSJhpWAX-cKKrst9CGnC6Km~BR-DEGKKg__"
        />
      </div>
    </div>
  );
};

const WorkoutItem = ({ name, time, img }) => {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  };

  return (
    <div className="flex items-center h-[75px] p-4 my-5 bg-white shadow-lg rounded-xl">
      <img
        src={img}
        alt={name}
        className="bg-[#819aff2a] rounded-full w-[50px] h-[50px]"
      />
      <div className="ml-2 flex flex-col gap-1">
        <div className="text-[12px] font-medium">{name}</div>
        <div className="text-zinc-500 text-[10px]">{time}</div>
      </div>
      <div className="ml-auto">
        <label htmlFor="toggle" className={labelClasses}>
          <div className="relative">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only   peer" />
              <div class="relative w-9 h-5 bg-gray-200    rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[20px] after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </label>
      </div>
    </div>
  );
};

export default HomePage;
