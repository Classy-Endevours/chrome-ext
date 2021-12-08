import { ADDRESS } from "../../constant.js";

function getDomPath(el) {
  var stack = [];
  while (el.parentNode != null) {
    console.log(el.nodeName);
    var sibCount = 0;
    var sibIndex = 0;
    for (var i = 0; i < el.parentNode.childNodes.length; i++) {
      var sib = el.parentNode.childNodes[i];
      if (sib.nodeName == el.nodeName) {
        if (sib === el) {
          sibIndex = sibCount;
        }
        sibCount++;
      }
    }
    if (el.hasAttribute("id") && el.id != "") {
      stack.unshift(el.nodeName.toLowerCase() + "#" + el.id);
    } else if (sibCount > 1) {
      stack.unshift(el.nodeName.toLowerCase() + ":eq(" + sibIndex + ")");
    } else {
      stack.unshift(el.nodeName.toLowerCase());
    }
    el = el.parentNode;
  }

  return stack.slice(1); // removes the html element
}

const injectSelectorScript = () => {
  const ghost = document.createElement("div");
  ghost.setAttribute("id", "ghost-select");
  ghost.setAttribute("class", "ghost-select");
  ghost.appendChild(document.createElement("span"));
  document.body.prepend(ghost);

  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = ADDRESS + "css/ghost.css";
  document.head.appendChild(linkElement);

  const script = document.createElement("script");
  script.src = ADDRESS + "lib/jquery.js";
  document.body.appendChild(script);
  script.onload = () => {
    const selectorScript = document.createElement("script");
    selectorScript.src = ADDRESS + "js/dom/selector.js";
    document.body.appendChild(selectorScript);
  };

  //   const script = document.createElement("script");
  //   script.src = "https://cdn.jsdelivr.net/npm/chart.js";
  //   document.body.appendChild(script);
};
// injectSelectorScript();
const list = [];
const injectSelectable = () => {
  const script = document.createElement("script");
  script.src = ADDRESS + "lib/jquery.js";
  document.body.appendChild(script);

  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = ADDRESS + "css/selectable.css";
  document.head.appendChild(linkElement);

  script.onload = () => {
    const script1 = document.createElement("script");
    script1.src =
      "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
    document.body.appendChild(script1);

    script1.onload = () => {
      $(document).ready(function () {
        $("body")
          .selectable({
            cancel: "#ET_POPOVER_CONTAINER",
            stop: () => {
              $(".ui-selected").each((index, obj) => {
                list.push(getDomPath(obj).join(" > "));
                console.log({ list });
              });
            },
          });
      });
    };
  };
};
injectSelectable();
export default {};
