import { useState } from "react"; // Import useState
import { Icons } from "#/icon/icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);
function StatistikaYearly({type=""}) {



  return (
    <div className="container mx-auto">
      
      
    </div>
  )
}

export default StatistikaYearly