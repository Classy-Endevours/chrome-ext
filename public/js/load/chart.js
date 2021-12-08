import { ADDRESS } from "../../constant.js";

const injectScript = () => {
  const address = ADDRESS
  const chartContainer = document.createElement("canvas");
  chartContainer.setAttribute("id", "chartContainer");
  document.body.appendChild(chartContainer);

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/chart.js";
  document.body.appendChild(script);
  script.onload = () => {
    const domScript = document.createElement("script");
    domScript.src = address + "js/dom/chart.js";
    document.body.appendChild(domScript);
  };
};
injectScript();
export default {}