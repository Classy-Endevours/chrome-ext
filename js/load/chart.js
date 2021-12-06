const injectScript = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/chart.js";
  script.async = true;
  document.body.appendChild(script);
};
injectScript();
