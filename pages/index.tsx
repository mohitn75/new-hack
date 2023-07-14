/* eslint-disable @next/next/no-img-element */

import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Menu } from "primereact/menu";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductService } from "../demo/service/ProductService";
import { LayoutContext } from "../layout/context/layoutcontext";
import Link from "next/link";
import { Demo } from "../types/types";
import { ChartData, ChartOptions } from "chart.js";
import { FileUpload } from "primereact/fileupload";
import axios from "axios";
import { ProgressBar } from "primereact/progressbar";
import { Knob } from "primereact/knob";
import { InputText } from 'primereact/inputtext';


const lineData: ChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "#2f4860",
      borderColor: "#2f4860",
      tension: 0.4,
    },
    {
      label: "Second Dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: "#00bb7e",
      borderColor: "#00bb7e",
      tension: 0.4,
    },
  ],
};
const buttonStyleRed = {
  borderColor: "#FF0000",
  color: "#FF0000",
  cursor: "not-allowed",
};
const buttonStyleGreen = {
  borderColor: "#00FF00",
  color: "#00FF00",
  cursor: "not-allowed",
};

const Dashboard = () => {
  const [finbertData, setFinbertData] = useState<any>({});
  const [inputValue, setInputValue] = useState('');
  const [overallValue, setOverallValue] = useState(50);
  const [products, setProducts] = useState<Demo.Product[]>([]);
  const menu1 = useRef<Menu>(null);
  const menu2 = useRef<Menu>(null);
  const [lineOptions, setLineOptions] = useState<ChartOptions>({});
  const { layoutConfig } = useContext(LayoutContext);
  const uploadUrl = "https://hackathon-backend-25p3nguxwa-de.a.run.app/upload"; // Update with your Flask API URL
  const getApiUrls = [
    "https://hackathon-backend-25p3nguxwa-de.a.run.app/distilbert",
    "https://hackathon-backend-25p3nguxwa-de.a.run.app/roberta",
    "https://hackathon-backend-25p3nguxwa-de.a.run.app/finbert",
    "http://your-api-url4",
  ]; // Update with your GET API URLs

  const [convertedText, setConvertedText] = useState("HELLO");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const finBertDatas = {
    "Analyst Update": 0.9603074193000793,
    "Company | Product News": 0.002390812383964658,
    Currencies: 0.0008924901485443115,
    Dividend: 0.001212208066135645,
    Earnings: 0.00563107430934906,
    "Energy | Oil": 0.0005957380635663867,
    "Fed | Central Banks": 0.0009940479649230838,
    Financials: 0.0006682887324132025,
    "General News | Opinion": 0.0005090037011541426,
    "Gold | Metals | Materials": 0.0010924474336206913,
    IPO: 0.004138212185353041,
    "Legal | Regulation": 0.0020489702001214027,
    "M&A | Investments": 0.0007734919199720025,
    Macro: 0.0004749912186525762,
    Markets: 0.0010347444331273437,
    "Personnel Change": 0.0017919237725436687,
    Politics: 0.0008830860024318099,
    "Stock Commentary": 0.0031345966272056103,
    "Stock Movement": 0.009746182709932327,
    "Treasuries | Corporate Debt": 0.0016803651815280318,
  };
  const labelTemplate = (value) => `${value}%`; // Custom label template function
  let haha = 'Try'
  const handleSubmit = (e) => {
    // Handle the form submission
    console.log('Submitted value:', inputValue);
    // Add your logic here to process the submitted value

    // Clear the input field
    haha = inputValue
    getApis();
  };
  const applyLightTheme = () => {
    const lineOptions: ChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    setLineOptions(lineOptions);
  };

  const applyDarkTheme = () => {
    const lineOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#ebedef",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(160, 167, 181, .3)",
          },
        },
        y: {
          ticks: {
            color: "#ebedef",
          },
          grid: {
            color: "rgba(160, 167, 181, .3)",
          },
        },
      },
    };

    setLineOptions(lineOptions);
  };

  useEffect(() => {
    // Use the effect to trigger re-render when data1 changes
    // You can include other state variables in the dependency array if needed
    console.log(result1, result2, result3);
  }, [result1, result2, result3]);

  const formatCurrency = (value: number) => {
    return value?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const getApis = () => {
    axios.get(getApiUrls[0] + "?text=" + haha).then((response) => {
      setResult1(response.data);
    });
    axios.get(getApiUrls[1] + "?text=" + haha).then((response) => {
      const sortedObj = Object.fromEntries(
        Object.entries(response.data).sort(([, a], [, b]) => b - a)
      );
      setResult2(sortedObj);
    });
    axios.get(getApiUrls[2] + "?text=" + haha).then((response) => {
      const sortedObj = Object.fromEntries(
        Object.entries(response.data).sort(([, a], [, b]) => b - a)
      );
      setResult3(sortedObj);
    });
  };

  const handleFileUpload = (event) => {
    const formData = new FormData();
    formData.append("file", event.files[0]);

    axios
      .post(uploadUrl, formData)
      .then((response) => {
        const convertedText = response.data; // Assuming the response contains the converted text
        setConvertedText(convertedText);

        // Call GET APIs
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid">
      <div className="col-12 lg:col-6 xl:col-8">
        <div className="card mb-0 upload-box">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">
                Browse/Select Audio Files
              </span>
              <div className="text-900 font-medium text-xl">File Upload</div>
            </div>
          </div>
          <FileUpload
            name="file"
            url={uploadUrl}
            mode="advanced"
            accept="audio/*"
            customUpload
            chooseLabel="Select File"
            uploadLabel="Upload"
            cancelLabel="Cancel"
            uploadHandler={handleFileUpload}
          />
          {/* <div className="search-button-padding">
            <Button
              className="search-button"
              label="Analyze"
              icon="pi pi-check"
              onClick={getApis}
            />
          </div> */}
          <br />
          <InputText
          className="input-text-search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className="input-text-btn" label="Analyze Text" onClick={handleSubmit} />
        </div>
      </div>

      {/* <div className="col-12 lg:col-6 xl:col-4">
        <div className="card mb-0">
          <Knob
            className="text-center"
            value={100-(Math.round(result2["POSITIVE"] * 100 * 100) / 100).toFixed(
              2
            )}
            onChange={(e) => setValue(e.value)}
            size={200}
            valueColor={(100-(Math.round(result2["POSITIVE"] * 100 * 100) / 100).toFixed(
              2
            ))>=50?"#FF0000":"00FF00"}
            rangeColor={(100-(Math.round(result2["POSITIVE"] * 100 * 100) / 100).toFixed(
              2
            ))>=50?"#FF0000":"00FF00"}
          />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="text-900 font-medium text-xl text-center  ">
                  RISK ASSESSMENT
                </div>
              </div>
              <div className="col-sm">
                <br />
                <div className="text-center">
                  <Button
                    label={overallValue >= 50 ? "HIGH RISK" : "LOW RISK"}
                    className="p-button-outlined"
                    disabled
                    style={
                      overallValue >= 50 ? buttonStyleRed : buttonStyleGreen
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       */}

      
      <div className="col-12 lg:col-6 xl:col-6">
        <div className="card mb-0">
          <Knob
            className="text-center"
            value={94}
            onChange={(e) => setValue(e.value)}
            size={200}
            valueColor="#FF0000"
            rangeColor="#00FF00"
          />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="text-900 font-medium text-xl text-center  ">
                  RISK ASSESSMENT
                </div>
              </div>
              <div className="col-sm">
                <br />
                <div className="text-center">
                  <Button
                    label={overallValue >= 50 ? "HIGH RISK" : "LOW RISK"}
                    className="p-button-outlined"
                    disabled
                    style={
                      overallValue >= 50 ? buttonStyleRed : buttonStyleGreen
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-12 xl:col-6">
        <div className="card card-name">
          <div className="progress-bar-label-left">Low Monetary Risk</div>
          <ProgressBar
            value={50}
            template={labelTemplate}
          ></ProgressBar>
          <div className="risk-label-right progress-bar-label-right ">High Monetary Risk</div>
          <br /><br />
          <div className="text-900 font-medium text-xl text-center  ">
            FINANCIAL SENTIMENT ANALYSIS
          </div>
        </div>
        <div className="card card-name">
          <div className="progress-bar-label-left">Low Risk</div>
          <ProgressBar 
            className="risk-analyser"
            value={100-(Math.round(result2["POSITIVE"] * 100 * 100) / 100).toFixed(
              2
            )}
            template={labelTemplate}
          ></ProgressBar>
          <div className="risk-label-right progress-bar-label-right ">High Monetary Risk</div>
          <br />
          <br />
          <div className="text-900 font-medium text-xl text-center  ">
            RISK THREAT ANALYSER
          </div>
        </div>

        
      </div>
      <div className="col-12 xl:col-12">
        <div className="card category-card">
        <div className="text-900 font-medium text-xl text-center  ">
            <h5>Financial Impact/Domain</h5>
          </div>
          <ul className="list-none p-0 m-0">
            {/* {Object.entries(finBertData).map(([key, value]) => (
              <div key={key}>
                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">
                  {key}
                </span>
                <div className="mt-2 md:mt-0 flex align-items-center">
                <div
                  className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                  style={{ height: "50%"} }}
                >
                  <div
                    className="bg-orange-500 h-full"
                    style={{ width: "50%" }}
                  />
                </div>
                <span className="text-orange-500 ml-3 font-medium">%50</span>
              </div>
              </div>
            ))} */}

            {result3 &&
              Object.entries(result3).map(([key, value]) => (
                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                  <div>
                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">
                      {key}
                    </span>
                  </div>
                  <div className="mt-2 md:mt-0 flex align-items-center">
                    <div
                      className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                      style={{ height: "8px" }}
                    >
                      <div
                        className="bg-orange-500 h-full"
                        style={{ width: value * 100 }}
                      />
                    </div>
                    <span className="text-orange-500 ml-3 font-medium">
                      {(Math.round(value * 100 * 100) / 100).toFixed(2)}%
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
