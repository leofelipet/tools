document.addEventListener("DOMContentLoaded", function () {
  if (!window.location.search.includes("elementor")) {
    var e = document.querySelectorAll(".use-hide-system");
    void 0 !== e[0] &&
      e.forEach(function (e) {
        var t = e.getAttribute("hide-system-section-start-hide"),
          i = e.getAttribute("hide-system-opacity"),
          o = e.getAttribute("hide-system-scroll");
        ((+i < 0 && +i > 1) || null == i) && (i = 1), console.log("firstSectionHide: ", t);
        var s = e.querySelectorAll(".hide-system-action"),
          l = e.querySelectorAll(".hide-system-reaction");
        if (void 0 !== s[0] && void 0 !== l[0]) {
          l.forEach(function (e) {
            e.style.display = "none";
          }),
            (null !== t && "" !== t && null != t) || (s[0].classList.add("ativo"), (l[0].style.display = "flex"));
          var n = s[0],
            r = l[0];
          s.forEach(function (t, s) {
            (t.style.cursor = "pointer"),
              (t.style.opacity = "" + i),
              t.addEventListener("click", function (s) {
                s.preventDefault(), s.stopPropagation();
                var l = t.getAttribute("hide-system-id");
                if (
                  (n.classList.remove("ativo"),
                    (n.style.opacity = "" + i),
                    (r.style.display = "none"),
                    (n = t).classList.add("ativo"),
                    ((r = e.querySelector('.hide-system-reaction[hide-system-id="' + l + '"]')).style.display = "flex"),
                    null != o && "" !== o)
                ) {
                  window.scroll({
                    top:
                      (function (e) {
                        var t = 0;
                        if (e.offsetParent)
                          do {
                            (t += e.offsetTop), (e = e.offsetParent);
                          } while (e);
                        return t < 0 ? 0 : t;
                      })(r) - 60,
                    behavior: "smooth",
                  });
                }
              });
          });
        }
      });
  }
});
