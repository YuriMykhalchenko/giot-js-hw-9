!function(){var t,e={body:document.body,start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};e.start.addEventListener("click",(function(){e.stop.removeAttribute("disabled"),e.start.setAttribute("disabled",!0),t=setInterval((function(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.stop.addEventListener("click",(function(){e.stop.setAttribute("disabled",!0),e.start.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.f2428979.js.map
