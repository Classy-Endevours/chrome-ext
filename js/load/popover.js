const injectPopover = () => {
  fetch(chrome.runtime.getURL("html/popover.html"))
    .then((r) => r.text())
    .then((html) => {
      document.body.insertAdjacentHTML("beforeend", html);
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = chrome.extension.getURL("css/popover.css");
      document.head.appendChild(linkElement);

      const script = document.createElement("script");
      script.src = chrome.extension.getURL("lib/jquery.js");
      document.body.appendChild(script);
      script.onload = () => {
        const domScript = document.createElement("script");
        domScript.src = chrome.extension.getURL("js/dom/popover.js");
        document.body.appendChild(domScript);
      };
    });
};
injectPopover();
