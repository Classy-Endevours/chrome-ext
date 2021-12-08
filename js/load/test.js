const injectScript = () => {
    const chartContainer = document.createElement("canvas");
    chartContainer.setAttribute("id", "chartContainer");
    document.body.appendChild(chartContainer);
  
    const script = document.createElement("script");
    script.src = "http://127.0.0.1:8080/init.js";
    script.type = 'module'
    document.body.appendChild(script);
  };
  injectScript();
  