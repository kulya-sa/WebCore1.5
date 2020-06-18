!(function (e) {
   var t = {};
   function n(r) {
      if (t[r]) return t[r].exports;
      var a = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
   }
   (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
         n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
         "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
         if ((1 & t && (e = n(e)), 8 & t)) return e;
         if (4 & t && "object" == typeof e && e && e.__esModule) return e;
         var r = Object.create(null);
         if (
            (n.r(r),
            Object.defineProperty(r, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
         )
            for (var a in e)
               n.d(
                  r,
                  a,
                  function (t) {
                     return e[t];
                  }.bind(null, a)
               );
         return r;
      }),
      (n.n = function (e) {
         var t =
            e && e.__esModule
               ? function () {
                    return e.default;
                 }
               : function () {
                    return e;
                 };
         return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
         return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0));
})([
   function (e, t, n) {
      e.exports = n(1);
   },
   function (e, t, n) {
      "use strict";
      n.r(t);
      n(2);
      var r = document.querySelector(".swiper-wrapper"),
         a = document.querySelector(".swiper-container"),
         i = document.querySelector(".expand"),
         d = window.matchMedia("(max-width: 768px)"),
         o =
            (window.matchMedia("(min-width: 768px) and (max-width: 1030px)"),
            window.matchMedia("(min-width: 1030px)"),
            [
               "img/brands/lenovo.svg",
               "img/brands/samsung.svg",
               "img/brands/apple.svg",
               "img/brands/viewsonic.svg",
               "img/brands/bosch.svg",
               "img/brands/hp.svg",
               "img/brands/acer.svg",
               "img/brands/sony.svg",
            ]),
         s = [
            "img/brands/lenovo.svg",
            "img/brands/samsung.svg",
            "img/brands/apple.svg",
         ],
         l = function (e, t) {
            var n = document.createElement("div"),
               a = document.createElement("img"),
               i = document.createElement("div");
            n.classList.add("swiper-slide"),
               i.classList.add("swiper__button"),
               (a.src = e),
               t && n.classList.add("swiper-slide-expanded"),
               n.appendChild(a),
               n.appendChild(i),
               r.appendChild(n);
         },
         c = function (e) {
            if (e) for (var t = 0; t < s.length; t++) l(s[t], !0);
            else for (var n = 0; n < o.length; n++) l(o[n]);
         };
      c();
      i.addEventListener("click", function () {
         !(function () {
            if ("false" == i.dataset.expanded)
               c(!0),
                  i
                     .querySelector(".expand__arrows")
                     .classList.add("expand__arrows-rotated"),
                  (i.querySelector(".expand__text").textContent = "Скрыть"),
                  (i.dataset.expanded = "true");
            else {
               var e = r.querySelectorAll(".swiper-slide-expanded");
               i
                  .querySelector(".expand__arrows")
                  .classList.remove("expand__arrows-rotated"),
                  (i.querySelector(".expand__text").textContent =
                     "Показать все"),
                  (i.dataset.expanded = "true");
               for (var t = 0; t < r.children.length; t++)
                  e[t].parentNode.removeChild(e[t]),
                     (i.dataset.expanded = "false");
            }
         })();
      });
      var u,
         p = function () {
            d.matches &&
               "false" == a.dataset.mobile &&
               ((u = new Swiper(a, {
                  slidesPerView: "auto",
                  spaceBetween: 16,
                  pagination: { el: ".swiper-pagination", clickable: !0 },
               })),
               (a.dataset.mobile = "true")),
               d.matches || ((a.dataset.mobile = "false"), u.destroy(!0, !0));
         };
      window.addEventListener("resize", function () {
         p();
      }),
         p();
   },
   function (e, t, n) {},
]);
//# sourceMappingURL=bundle.js.map
