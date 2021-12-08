import { ADDRESS } from "../../constant.js";

const injectPopover = () => {
  const address = ADDRESS
  fetch(address + "html/popover.html")
    .then((r) => r.text())
    .then((html) => {
      document.body.insertAdjacentHTML("beforeend", html);
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = address + "css/popover.css";
      document.head.appendChild(linkElement);

      const script = document.createElement("script");
      script.src = address + "lib/jquery.js";
      document.body.appendChild(script);
      script.onload = () => {
        const domScript = document.createElement("script");
        domScript.src = address + "js/dom/popover.js";
        document.body.appendChild(domScript);
      };
    });
};
injectPopover();
export default {}
