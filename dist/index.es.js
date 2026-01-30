"use client";
import { jsx as Z, jsxs as rn } from "react/jsx-runtime";
import * as nn from "react";
import V, { createContext as z, useState as j, useRef as D, useCallback as O, useContext as ne, useEffect as Y, useMemo as be, useReducer as on, forwardRef as Ie } from "react";
import { flushSync as an } from "react-dom";
function pr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = pr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Lt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = pr(e)) && (n && (n += " "), n += t);
  return n;
}
const Kt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, zt = Lt, Mt = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return zt(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((u) => {
    const f = r == null ? void 0 : r[u], p = i == null ? void 0 : i[u];
    if (f === null) return null;
    const E = Kt(f) || Kt(p);
    return o[u][E];
  }), d = r && Object.entries(r).reduce((u, f) => {
    let [p, E] = f;
    return E === void 0 || (u[p] = E), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, f) => {
    let { class: p, className: E, ...P } = f;
    return Object.entries(P).every((S) => {
      let [y, g] = S;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...d
      }[y]) : {
        ...i,
        ...d
      }[y] === g;
    }) ? [
      ...u,
      p,
      E
    ] : u;
  }, []);
  return zt(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
z(null);
z(null);
z(null);
z(null);
z(null);
z({});
z(null);
const sn = z(null), re = typeof document < "u" ? V.useLayoutEffect : () => {
};
function ln(e) {
  let [t, r] = j(e), n = D(t), o = D(null), i = D(() => {
    if (!o.current) return;
    let d = o.current.next();
    if (d.done) {
      o.current = null;
      return;
    }
    n.current === d.value ? i.current() : r(d.value);
  });
  re(() => {
    n.current = t, o.current && i.current();
  });
  let a = O((d) => {
    o.current = d(n.current), i.current();
  }, [
    i
  ]);
  return [
    t,
    a
  ];
}
const tt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, br = /* @__PURE__ */ V.createContext(tt), dn = /* @__PURE__ */ V.createContext(!1);
let cn = !!(typeof window < "u" && window.document && window.document.createElement), ft = /* @__PURE__ */ new WeakMap();
function un(e = !1) {
  let t = ne(br), r = D(null);
  if (r.current === null && !e) {
    var n, o;
    let i = (o = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (i) {
      let a = ft.get(i);
      a == null ? ft.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== a.state && (t.current = a.id, ft.delete(i));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function fn(e) {
  let t = ne(br);
  t === tt && !cn && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = un(!!e), n = t === tt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function pn(e) {
  let t = V.useId(), [r] = j(hn()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${tt.prefix}`;
  return e || `${n}-${t}`;
}
const bn = typeof V.useId == "function" ? pn : fn;
function mn() {
  return !1;
}
function vn() {
  return !0;
}
function gn(e) {
  return () => {
  };
}
function hn() {
  return typeof V.useSyncExternalStore == "function" ? V.useSyncExternalStore(gn, mn, vn) : ne(dn);
}
let yn = !!(typeof window < "u" && window.document && window.document.createElement), Se = /* @__PURE__ */ new Map(), He;
typeof FinalizationRegistry < "u" && (He = new FinalizationRegistry((e) => {
  Se.delete(e);
}));
function Ce(e) {
  let [t, r] = j(e), n = D(null), o = bn(t), i = D(null);
  if (He && He.register(i, o), yn) {
    const a = Se.get(o);
    a && !a.includes(n) ? a.push(n) : Se.set(o, [
      n
    ]);
  }
  return re(() => {
    let a = o;
    return () => {
      He && He.unregister(i), Se.delete(a);
    };
  }, [
    o
  ]), Y(() => {
    let a = n.current;
    return a && r(a), () => {
      a && (n.current = null);
    };
  }), o;
}
function $n(e, t) {
  if (e === t) return e;
  let r = Se.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = Se.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function Gt(e = []) {
  let t = Ce(), [r, n] = ln(t), o = O(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return re(o, [
    t,
    o,
    ...e
  ]), r;
}
function mr(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const K = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, W = (e) => e && "window" in e && e.window === e ? e : K(e).defaultView || window;
function En(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function xn(e) {
  return En(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let wn = !1;
function It() {
  return wn;
}
function R(e, t) {
  if (!It()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : xn(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const ze = (e = document) => {
  var t;
  if (!It()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function F(e) {
  return It() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function X(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let o in n) {
      let i = t[o], a = n[o];
      typeof i == "function" && typeof a == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = mr(i, a) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof a == "string" ? t[o] = Lt(i, a) : o === "id" && i && a ? t.id = $n(i, a) : t[o] = a !== void 0 ? a : i;
    }
  }
  return t;
}
function Pn(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = _t(o, t);
      return r || (r = typeof i == "function"), i;
    });
    if (r) return () => {
      n.forEach((o, i) => {
        typeof o == "function" ? o() : _t(e[i], null);
      });
    };
  };
}
function _t(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const Tn = /* @__PURE__ */ new Set([
  "id"
]), kn = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Sn = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Cn = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), Bt = /* @__PURE__ */ new Set([
  "onClick",
  "onAuxClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onScroll",
  "onWheel",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionCancel",
  "onTransitionEnd",
  "onTransitionRun",
  "onTransitionStart"
]), Ln = /^(data-.*)$/;
function Ge(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: i = o, propNames: a } = t, d = {};
  for (const c in e) Object.prototype.hasOwnProperty.call(e, c) && (Tn.has(c) || r && kn.has(c) || n && Sn.has(c) || o && Cn.has(c) || i && (Bt.has(c) || c.endsWith("Capture") && Bt.has(c.slice(0, -7))) || a != null && a.has(c) || Ln.test(c)) && (d[c] = e[c]);
  return d;
}
function Le(e) {
  if (Mn()) e.focus({
    preventScroll: !0
  });
  else {
    let t = In(e);
    e.focus(), Vn(t);
  }
}
let Ue = null;
function Mn() {
  if (Ue == null) {
    Ue = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ue = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ue;
}
function In(e) {
  let t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== n; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return n instanceof HTMLElement && r.push({
    element: n,
    scrollTop: n.scrollTop,
    scrollLeft: n.scrollLeft
  }), r;
}
function Vn(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function at(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function Vt(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function se(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Me = se(function() {
  return Vt(/^Mac/i);
}), Fn = se(function() {
  return Vt(/^iPhone/i);
}), vr = se(function() {
  return Vt(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Me() && navigator.maxTouchPoints > 1;
}), Ft = se(function() {
  return Fn() || vr();
});
se(function() {
  return Me() || Ft();
});
const An = se(function() {
  return at(/AppleWebKit/i) && !On();
}), On = se(function() {
  return at(/Chrome/i);
}), gr = se(function() {
  return at(/Android/i);
}), Dn = se(function() {
  return at(/Firefox/i);
});
function $e(e, t, r = !0) {
  var n, o;
  let { metaKey: i, ctrlKey: a, altKey: d, shiftKey: c } = t;
  Dn() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (Me() ? i = !0 : a = !0);
  let u = An() && Me() && !vr() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: a,
    altKey: d,
    shiftKey: c
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: a,
    altKey: d,
    shiftKey: c,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  $e.isOpening = r, Le(e), e.dispatchEvent(u), $e.isOpening = !1;
}
$e.isOpening = !1;
let fe = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Set();
function jt() {
  if (typeof window > "u") return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target) return;
    let o = fe.get(n.target);
    o || (o = /* @__PURE__ */ new Set(), fe.set(n.target, o), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), o.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target) return;
    let o = fe.get(n.target);
    if (o && (o.delete(n.propertyName), o.size === 0 && (n.target.removeEventListener("transitioncancel", r), fe.delete(n.target)), fe.size === 0)) {
      for (let i of $t) i();
      $t.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? jt() : document.addEventListener("DOMContentLoaded", jt));
function Nn() {
  for (const [e] of fe)
    "isConnected" in e && !e.isConnected && fe.delete(e);
}
function hr(e) {
  requestAnimationFrame(() => {
    Nn(), fe.size === 0 ? e() : $t.add(e);
  });
}
function At() {
  let e = D(/* @__PURE__ */ new Map()), t = O((o, i, a, d) => {
    let c = d != null && d.once ? (...u) => {
      e.current.delete(a), a(...u);
    } : a;
    e.current.set(a, {
      type: i,
      eventTarget: o,
      fn: c,
      options: d
    }), o.addEventListener(i, c, d);
  }, []), r = O((o, i, a, d) => {
    var c;
    let u = ((c = e.current.get(a)) === null || c === void 0 ? void 0 : c.fn) || a;
    o.removeEventListener(i, u, d), e.current.delete(a);
  }, []), n = O(() => {
    e.current.forEach((o, i) => {
      r(o.eventTarget, o.type, i, o.options);
    });
  }, [
    r
  ]);
  return Y(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function Hn(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = Ce(r), o && n ? o = [
    .../* @__PURE__ */ new Set([
      r,
      ...o.trim().split(/\s+/)
    ])
  ].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), !n && !o && t && (n = t), {
    id: r,
    "aria-label": n,
    "aria-labelledby": o
  };
}
function Rn(e) {
  const t = D(null), r = D(void 0), n = O((o) => {
    if (typeof e == "function") {
      const i = e, a = i(o);
      return () => {
        typeof a == "function" ? a() : i(null);
      };
    } else if (e)
      return e.current = o, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return be(() => ({
    get current() {
      return t.current;
    },
    set current(o) {
      t.current = o, r.current && (r.current(), r.current = void 0), o != null && (r.current = n(o));
    }
  }), [
    n
  ]);
}
var pt;
const Kn = (pt = V.useInsertionEffect) !== null && pt !== void 0 ? pt : re;
function pe(e) {
  const t = D(null);
  return Kn(() => {
    t.current = e;
  }, [
    e
  ]), O((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function yr(e, t) {
  re(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Et(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : gr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function zn(e) {
  return !gr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function Gn(e, t, r) {
  let n = pe(() => {
    r && r(t);
  });
  Y(() => {
    var o;
    let i = e == null || (o = e.current) === null || o === void 0 ? void 0 : o.form;
    return i == null || i.addEventListener("reset", n), () => {
      i == null || i.removeEventListener("reset", n);
    };
  }, [
    e
  ]);
}
const _n = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Bn(e) {
  const t = W(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: a, visibility: d } = i(e);
    o = a !== "none" && d !== "hidden" && d !== "collapse";
  }
  return o;
}
function jn(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function $r(e, t) {
  return _n ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && Bn(e) && jn(e, t) && (!e.parentElement || $r(e.parentElement, e));
}
const Er = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])',
  "permission"
], Un = Er.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Er.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function Wn(e) {
  return e.matches(Un) && $r(e) && !Yn(e);
}
function Yn(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
var bt;
const Xn = typeof document < "u" ? (bt = V.useInsertionEffect) !== null && bt !== void 0 ? bt : V.useLayoutEffect : () => {
};
function qn(e, t, r) {
  let [n, o] = j(e || t), i = D(n), a = D(e !== void 0), d = e !== void 0;
  Y(() => {
    let p = a.current;
    p !== d && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${p ? "controlled" : "uncontrolled"} to ${d ? "controlled" : "uncontrolled"}.`), a.current = d;
  }, [
    d
  ]);
  let c = d ? e : n;
  Xn(() => {
    i.current = c;
  });
  let [, u] = on(() => ({}), {}), f = O((p, ...E) => {
    let P = typeof p == "function" ? p(i.current) : p;
    Object.is(i.current, P) || (i.current = P, o(P), u(), r == null || r(P, ...E));
  }, [
    r
  ]);
  return [
    c,
    f
  ];
}
const Qn = Symbol("default");
function Jn({ values: e, children: t }) {
  for (let [r, n] of e)
    t = /* @__PURE__ */ V.createElement(r.Provider, {
      value: n
    }, t);
  return t;
}
function Ve(e) {
  let { className: t, style: r, children: n, defaultClassName: o, defaultChildren: i, defaultStyle: a, values: d } = e;
  return be(() => {
    let c, u, f;
    return typeof t == "function" ? c = t({
      ...d,
      defaultClassName: o
    }) : c = t, typeof r == "function" ? u = r({
      ...d,
      defaultStyle: a || {}
    }) : u = r, typeof n == "function" ? f = n({
      ...d,
      defaultChildren: i
    }) : n == null ? f = i : f = n, {
      className: c ?? o,
      style: u || a ? {
        ...a,
        ...u
      } : void 0,
      children: f ?? i,
      "data-rac": ""
    };
  }, [
    t,
    r,
    n,
    o,
    i,
    a,
    d
  ]);
}
function _e(e, t) {
  return (r) => t(typeof e == "function" ? e(r) : e, r);
}
function xr(e, t) {
  let r = ne(e);
  if (t === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let n = t || Qn;
    if (!r.slots[n]) {
      let o = new Intl.ListFormat().format(Object.keys(r.slots).map((a) => `"${a}"`)), i = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${i} Valid slot names are ${o}.`);
    }
    return r.slots[n];
  }
  return r;
}
function me(e, t, r) {
  let n = xr(r, e.slot) || {}, { ref: o, ...i } = n, a = Rn(be(() => Pn(t, o), [
    t,
    o
  ])), d = X(i, e);
  return "style" in i && i.style && "style" in e && e.style && (typeof i.style == "function" || typeof e.style == "function" ? d.style = (c) => {
    let u = typeof i.style == "function" ? i.style(c) : i.style, f = {
      ...c.defaultStyle,
      ...u
    }, p = typeof e.style == "function" ? e.style({
      ...c,
      defaultStyle: f
    }) : e.style;
    return {
      ...f,
      ...p
    };
  } : d.style = {
    ...i.style,
    ...e.style
  }), [
    d,
    a
  ];
}
function Zn(e = !0) {
  let [t, r] = j(e), n = D(!1), o = O((i) => {
    n.current = !0, r(!!i);
  }, []);
  return re(() => {
    n.current || r(!1);
  }, []), [
    o,
    t
  ];
}
function eo(e) {
  const t = /^(data-.*)$/;
  let r = {};
  for (const n in e) t.test(n) || (r[n] = e[n]);
  return r;
}
const wr = 7e3;
let te = null;
function Ut(e, t = "assertive", r = wr) {
  te ? te.announce(e, t, r) : (te = new to(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? te.announce(e, t, r) : setTimeout(() => {
    te != null && te.isAttached() && (te == null || te.announce(e, t, r));
  }, 100));
}
class to {
  isAttached() {
    var t;
    return (t = this.node) === null || t === void 0 ? void 0 : t.isConnected;
  }
  createLog(t) {
    let r = document.createElement("div");
    return r.setAttribute("role", "log"), r.setAttribute("aria-live", t), r.setAttribute("aria-relevant", "additions"), r;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, r = "assertive", n = wr) {
    var o, i;
    if (!this.node) return;
    let a = document.createElement("div");
    typeof t == "object" ? (a.setAttribute("role", "img"), a.setAttribute("aria-labelledby", t["aria-labelledby"])) : a.textContent = t, r === "assertive" ? (o = this.assertiveLog) === null || o === void 0 || o.appendChild(a) : (i = this.politeLog) === null || i === void 0 || i.appendChild(a), t !== "" && setTimeout(() => {
      a.remove();
    }, n);
  }
  clear(t) {
    this.node && ((!t || t === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!t || t === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
  }
}
function ro(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function no(e, t, r) {
  ro(e, t), t.set(e, r);
}
function Ot(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Pr(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Tr(e) {
  let t = D({
    isFocused: !1,
    observer: null
  });
  return re(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []), O((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let n = r.target, o = (i) => {
        if (t.current.isFocused = !1, n.disabled) {
          let a = Ot(i);
          e == null || e(a);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      n.addEventListener("focusout", o, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && n.disabled) {
          var i;
          (i = t.current.observer) === null || i === void 0 || i.disconnect();
          let a = n === document.activeElement ? null : document.activeElement;
          n.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: a
          })), n.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: a
          }));
        }
      }), t.current.observer.observe(n, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    e
  ]);
}
let rt = !1;
function Wt(e) {
  for (; e && !Wn(e); ) e = e.parentElement;
  let t = W(e), r = t.document.activeElement;
  if (!r || r === e) return;
  rt = !0;
  let n = !1, o = (f) => {
    (f.target === r || n) && f.stopImmediatePropagation();
  }, i = (f) => {
    (f.target === r || n) && (f.stopImmediatePropagation(), !e && !n && (n = !0, Le(r), c()));
  }, a = (f) => {
    (f.target === e || n) && f.stopImmediatePropagation();
  }, d = (f) => {
    (f.target === e || n) && (f.stopImmediatePropagation(), n || (n = !0, Le(r), c()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", d, !0), t.addEventListener("focus", a, !0);
  let c = () => {
    cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", a, !0), rt = !1, n = !1;
  }, u = requestAnimationFrame(c);
  return c;
}
let ke = "default", xt = "", et = /* @__PURE__ */ new WeakMap();
function Yt(e) {
  if (Ft()) {
    if (ke === "default") {
      const t = K(e);
      xt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    ke = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    et.set(e, e.style[t]), e.style[t] = "none";
  }
}
function mt(e) {
  if (Ft()) {
    if (ke !== "disabled") return;
    ke = "restoring", setTimeout(() => {
      hr(() => {
        if (ke === "restoring") {
          const t = K(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = xt || ""), xt = "", ke = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && et.has(e)) {
    let t = et.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), et.delete(e);
  }
}
const kr = V.createContext({
  register: () => {
  }
});
kr.displayName = "PressResponderContext";
function oo(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Sr(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function io(e, t) {
  var r = Sr(e, t, "get");
  return oo(e, r);
}
function ao(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Xt(e, t, r) {
  var n = Sr(e, t, "set");
  return ao(e, n, r), r;
}
function so(e) {
  let t = ne(kr);
  if (t) {
    let { register: r, ...n } = t;
    e = X(n, e), r();
  }
  return yr(t, e.ref), e;
}
var We = /* @__PURE__ */ new WeakMap();
class Ye {
  continuePropagation() {
    Xt(this, We, !1);
  }
  get shouldStopPropagation() {
    return io(this, We);
  }
  constructor(t, r, n, o) {
    no(this, We, {
      writable: !0,
      value: void 0
    }), Xt(this, We, !0);
    var i;
    let a = (i = o == null ? void 0 : o.target) !== null && i !== void 0 ? i : n.currentTarget;
    const d = a == null ? void 0 : a.getBoundingClientRect();
    let c, u = 0, f, p = null;
    n.clientX != null && n.clientY != null && (f = n.clientX, p = n.clientY), d && (f != null && p != null ? (c = f - d.left, u = p - d.top) : (c = d.width / 2, u = d.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u;
  }
}
const qt = Symbol("linkClicked"), Qt = "react-aria-pressable-style", Jt = "data-react-aria-pressable";
function lo(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: i, onClick: a, isDisabled: d, isPressed: c, preventFocusOnPress: u, shouldCancelOnPointerExit: f, allowTextSelectionOnPress: p, ref: E, ...P } = so(e), [S, y] = j(!1), g = D({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: T, removeAllGlobalListeners: L, removeGlobalListener: M } = At(), I = O((s, h) => {
    let l = g.current;
    if (d || l.didFirePressStart) return !1;
    let b = !0;
    if (l.isTriggeringEvent = !0, n) {
      let x = new Ye("pressstart", h, s);
      n(x), b = x.shouldStopPropagation;
    }
    return r && r(!0), l.isTriggeringEvent = !1, l.didFirePressStart = !0, y(!0), b;
  }, [
    d,
    n,
    r
  ]), N = O((s, h, l = !0) => {
    let b = g.current;
    if (!b.didFirePressStart) return !1;
    b.didFirePressStart = !1, b.isTriggeringEvent = !0;
    let x = !0;
    if (o) {
      let C = new Ye("pressend", h, s);
      o(C), x = C.shouldStopPropagation;
    }
    if (r && r(!1), y(!1), t && l && !d) {
      let C = new Ye("press", h, s);
      t(C), x && (x = C.shouldStopPropagation);
    }
    return b.isTriggeringEvent = !1, x;
  }, [
    d,
    o,
    r,
    t
  ]), U = pe(N), G = O((s, h) => {
    let l = g.current;
    if (d) return !1;
    if (i) {
      l.isTriggeringEvent = !0;
      let b = new Ye("pressup", h, s);
      return i(b), l.isTriggeringEvent = !1, b.shouldStopPropagation;
    }
    return !0;
  }, [
    d,
    i
  ]), w = pe(G), _ = O((s) => {
    let h = g.current;
    if (h.isPressed && h.target) {
      h.didFirePressStart && h.pointerType != null && N(he(h.target, s), h.pointerType, !1), h.isPressed = !1, $(null), h.isOverTarget = !1, h.activePointerId = null, h.pointerType = null, L(), p || mt(h.target);
      for (let l of h.disposables) l();
      h.disposables = [];
    }
  }, [
    p,
    L,
    N
  ]), A = pe(_), ge = O((s) => {
    f && _(s);
  }, [
    f,
    _
  ]), le = O((s) => {
    d || a == null || a(s);
  }, [
    d,
    a
  ]), we = O((s, h) => {
    if (!d && a) {
      let l = new MouseEvent("click", s);
      Pr(l, h), a(Ot(l));
    }
  }, [
    d,
    a
  ]), Oe = pe(we), [oe, q] = j(!1);
  re(() => {
    let s = g.current;
    if (oe) {
      let h = (C) => {
        var ee;
        if (s.isPressed && s.target && vt(C, s.target)) {
          var H;
          tr(F(C), C.key) && C.preventDefault();
          let de = F(C), ie = R(s.target, F(C));
          U(he(s.target, C), "keyboard", ie), ie && Oe(C, s.target), L(), C.key !== "Enter" && Dt(s.target) && R(s.target, de) && !C[qt] && (C[qt] = !0, $e(s.target, C, !1)), s.isPressed = !1, q(!1), (H = s.metaKeyEvents) === null || H === void 0 || H.delete(C.key);
        } else if (C.key === "Meta" && (!((ee = s.metaKeyEvents) === null || ee === void 0) && ee.size)) {
          var Pe;
          let de = s.metaKeyEvents;
          s.metaKeyEvents = void 0;
          for (let ie of de.values()) (Pe = s.target) === null || Pe === void 0 || Pe.dispatchEvent(new KeyboardEvent("keyup", ie));
        }
      }, l = s.target, x = mr((C) => {
        l && vt(C, l) && !C.repeat && R(l, F(C)) && s.target && w(he(s.target, C), "keyboard");
      }, h);
      return T(K(s.target), "keyup", x, !0), () => {
        M(K(s.target), "keyup", x, !0);
      };
    }
  }, [
    oe,
    T,
    L,
    M
  ]);
  let [Q, $] = j(null);
  re(() => {
    let s = g.current;
    if (Q === "pointer") {
      let h = (b) => {
        if (b.pointerId === s.activePointerId && s.isPressed && b.button === 0 && s.target) {
          if (R(s.target, F(b)) && s.pointerType != null) {
            let x = !1, C = setTimeout(() => {
              s.isPressed && s.target instanceof HTMLElement && (x ? A(b) : (Le(s.target), s.target.click()));
            }, 80);
            T(b.currentTarget, "click", () => x = !0, !0), s.disposables.push(() => clearTimeout(C));
          } else A(b);
          s.isOverTarget = !1;
        }
      }, l = (b) => {
        A(b);
      };
      return T(K(s.target), "pointerup", h, !1), T(K(s.target), "pointercancel", l, !1), () => {
        M(K(s.target), "pointerup", h, !1), M(K(s.target), "pointercancel", l, !1);
      };
    } else if (Q === "mouse" && process.env.NODE_ENV === "test") {
      let h = (l) => {
        if (l.button === 0) {
          if (s.ignoreEmulatedMouseEvents) {
            s.ignoreEmulatedMouseEvents = !1;
            return;
          }
          s.target && s.target.contains(l.target) && s.pointerType != null || A(l), s.isOverTarget = !1;
        }
      };
      return T(K(s.target), "mouseup", h, !1), () => {
        M(K(s.target), "mouseup", h, !1);
      };
    } else if (Q === "touch" && process.env.NODE_ENV === "test") {
      let h = (l) => {
        s.isPressed && R(F(l), s.target) && A({
          currentTarget: s.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      return T(W(s.target), "scroll", h, !0), () => {
        M(W(s.target), "scroll", h, !0);
      };
    }
  }, [
    Q,
    T,
    M
  ]);
  let Be = be(() => {
    let s = g.current, h = {
      onKeyDown(l) {
        if (vt(l.nativeEvent, l.currentTarget) && R(l.currentTarget, F(l.nativeEvent))) {
          var b;
          tr(F(l.nativeEvent), l.key) && l.preventDefault();
          let x = !0;
          !s.isPressed && !l.repeat && (s.target = l.currentTarget, s.isPressed = !0, q(!0), s.pointerType = "keyboard", x = I(l, "keyboard")), x && l.stopPropagation(), l.metaKey && Me() && ((b = s.metaKeyEvents) === null || b === void 0 || b.set(l.key, l.nativeEvent));
        } else l.key === "Meta" && (s.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(l) {
        if (!(l && !R(l.currentTarget, F(l.nativeEvent))) && l && l.button === 0 && !s.isTriggeringEvent && !$e.isOpening) {
          let b = !0;
          if (d && l.preventDefault(), !s.ignoreEmulatedMouseEvents && !s.isPressed && (s.pointerType === "virtual" || Et(l.nativeEvent))) {
            let x = I(l, "virtual"), C = G(l, "virtual"), ee = N(l, "virtual");
            le(l), b = x && C && ee;
          } else if (s.isPressed && s.pointerType !== "keyboard") {
            let x = s.pointerType || l.nativeEvent.pointerType || "virtual", C = G(he(l.currentTarget, l), x), ee = N(he(l.currentTarget, l), x, !0);
            b = C && ee, s.isOverTarget = !1, le(l), _(l);
          }
          s.ignoreEmulatedMouseEvents = !1, b && l.stopPropagation();
        }
      }
    };
    return typeof PointerEvent < "u" ? (h.onPointerDown = (l) => {
      if (l.button !== 0 || !R(l.currentTarget, F(l.nativeEvent))) return;
      if (zn(l.nativeEvent)) {
        s.pointerType = "virtual";
        return;
      }
      s.pointerType = l.pointerType;
      let b = !0;
      if (!s.isPressed) {
        s.isPressed = !0, $("pointer"), s.isOverTarget = !0, s.activePointerId = l.pointerId, s.target = l.currentTarget, p || Yt(s.target), b = I(l, s.pointerType);
        let x = F(l.nativeEvent);
        "releasePointerCapture" in x && x.releasePointerCapture(l.pointerId);
      }
      b && l.stopPropagation();
    }, h.onMouseDown = (l) => {
      if (R(l.currentTarget, F(l.nativeEvent)) && l.button === 0) {
        if (u) {
          let b = Wt(l.target);
          b && s.disposables.push(b);
        }
        l.stopPropagation();
      }
    }, h.onPointerUp = (l) => {
      !R(l.currentTarget, F(l.nativeEvent)) || s.pointerType === "virtual" || l.button === 0 && !s.isPressed && G(l, s.pointerType || l.pointerType);
    }, h.onPointerEnter = (l) => {
      l.pointerId === s.activePointerId && s.target && !s.isOverTarget && s.pointerType != null && (s.isOverTarget = !0, I(he(s.target, l), s.pointerType));
    }, h.onPointerLeave = (l) => {
      l.pointerId === s.activePointerId && s.target && s.isOverTarget && s.pointerType != null && (s.isOverTarget = !1, N(he(s.target, l), s.pointerType, !1), ge(l));
    }, h.onDragStart = (l) => {
      R(l.currentTarget, F(l.nativeEvent)) && _(l);
    }) : process.env.NODE_ENV === "test" && (h.onMouseDown = (l) => {
      if (l.button !== 0 || !R(l.currentTarget, F(l.nativeEvent))) return;
      if (s.ignoreEmulatedMouseEvents) {
        l.stopPropagation();
        return;
      }
      if (s.isPressed = !0, $("mouse"), s.isOverTarget = !0, s.target = l.currentTarget, s.pointerType = Et(l.nativeEvent) ? "virtual" : "mouse", an(() => I(l, s.pointerType)) && l.stopPropagation(), u) {
        let x = Wt(l.target);
        x && s.disposables.push(x);
      }
    }, h.onMouseEnter = (l) => {
      if (!R(l.currentTarget, F(l.nativeEvent))) return;
      let b = !0;
      s.isPressed && !s.ignoreEmulatedMouseEvents && s.pointerType != null && (s.isOverTarget = !0, b = I(l, s.pointerType)), b && l.stopPropagation();
    }, h.onMouseLeave = (l) => {
      if (!R(l.currentTarget, F(l.nativeEvent))) return;
      let b = !0;
      s.isPressed && !s.ignoreEmulatedMouseEvents && s.pointerType != null && (s.isOverTarget = !1, b = N(l, s.pointerType, !1), ge(l)), b && l.stopPropagation();
    }, h.onMouseUp = (l) => {
      R(l.currentTarget, F(l.nativeEvent)) && !s.ignoreEmulatedMouseEvents && l.button === 0 && !s.isPressed && G(l, s.pointerType || "mouse");
    }, h.onTouchStart = (l) => {
      if (!R(l.currentTarget, F(l.nativeEvent))) return;
      let b = co(l.nativeEvent);
      if (!b) return;
      s.activePointerId = b.identifier, s.ignoreEmulatedMouseEvents = !0, s.isOverTarget = !0, s.isPressed = !0, $("touch"), s.target = l.currentTarget, s.pointerType = "touch", p || Yt(s.target), I(ce(s.target, l), s.pointerType) && l.stopPropagation();
    }, h.onTouchMove = (l) => {
      if (!R(l.currentTarget, F(l.nativeEvent))) return;
      if (!s.isPressed) {
        l.stopPropagation();
        return;
      }
      let b = Zt(l.nativeEvent, s.activePointerId), x = !0;
      b && er(b, l.currentTarget) ? !s.isOverTarget && s.pointerType != null && (s.isOverTarget = !0, x = I(ce(s.target, l), s.pointerType)) : s.isOverTarget && s.pointerType != null && (s.isOverTarget = !1, x = N(ce(s.target, l), s.pointerType, !1), ge(ce(s.target, l))), x && l.stopPropagation();
    }, h.onTouchEnd = (l) => {
      if (!R(l.currentTarget, F(l.nativeEvent))) return;
      if (!s.isPressed) {
        l.stopPropagation();
        return;
      }
      let b = Zt(l.nativeEvent, s.activePointerId), x = !0;
      b && er(b, l.currentTarget) && s.pointerType != null ? (G(ce(s.target, l), s.pointerType), x = N(ce(s.target, l), s.pointerType), we(l.nativeEvent, s.target)) : s.isOverTarget && s.pointerType != null && (x = N(ce(s.target, l), s.pointerType, !1)), x && l.stopPropagation(), s.isPressed = !1, $(null), s.activePointerId = null, s.isOverTarget = !1, s.ignoreEmulatedMouseEvents = !0, s.target && !p && mt(s.target), L();
    }, h.onTouchCancel = (l) => {
      R(l.currentTarget, F(l.nativeEvent)) && (l.stopPropagation(), s.isPressed && _(ce(s.target, l)));
    }, h.onDragStart = (l) => {
      R(l.currentTarget, F(l.nativeEvent)) && _(l);
    }), h;
  }, [
    d,
    u,
    L,
    p,
    _,
    ge,
    N,
    I,
    G,
    le,
    we
  ]);
  return Y(() => {
    if (!E || process.env.NODE_ENV === "test") return;
    const s = K(E.current);
    if (!s || !s.head || s.getElementById(Qt)) return;
    const h = s.createElement("style");
    h.id = Qt, h.textContent = `
@layer {
  [${Jt}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), s.head.prepend(h);
  }, [
    E
  ]), Y(() => {
    let s = g.current;
    return () => {
      var h;
      p || mt((h = s.target) !== null && h !== void 0 ? h : void 0);
      for (let l of s.disposables) l();
      s.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: c || S,
    pressProps: X(P, Be, {
      [Jt]: !0
    })
  };
}
function Dt(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function vt(e, t) {
  const { key: r, code: n } = e, o = t, i = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof W(o).HTMLInputElement && !Cr(o, r) || o instanceof W(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Dt(o)) && r !== "Enter");
}
function co(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Zt(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function ce(e, t) {
  let r = 0, n = 0;
  return t.targetTouches && t.targetTouches.length === 1 && (r = t.targetTouches[0].clientX, n = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: n
  };
}
function he(e, t) {
  let r = t.clientX, n = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: n
  };
}
function uo(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function fo(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function er(e, t) {
  let r = t.getBoundingClientRect(), n = uo(e);
  return fo(r, n);
}
function po(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Dt(e);
}
function tr(e, t) {
  return e instanceof HTMLInputElement ? !Cr(e, t) : po(e);
}
const bo = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Cr(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : bo.has(e.type);
}
let xe = null, wt = /* @__PURE__ */ new Set(), Ke = /* @__PURE__ */ new Map(), Ee = !1, Pt = !1;
const mo = {
  Tab: !0,
  Escape: !0
};
function st(e, t) {
  for (let r of wt) r(e, t);
}
function vo(e) {
  return !(e.metaKey || !Me() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function nt(e) {
  Ee = !0, !$e.isOpening && vo(e) && (xe = "keyboard", st("keyboard", e));
}
function J(e) {
  xe = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (Ee = !0, st("pointer", e));
}
function Lr(e) {
  !$e.isOpening && Et(e) && (Ee = !0, xe = "virtual");
}
function Mr(e) {
  e.target === window || e.target === document || rt || !e.isTrusted || (!Ee && !Pt && (xe = "virtual", st("virtual", e)), Ee = !1, Pt = !1);
}
function Ir() {
  rt || (Ee = !1, Pt = !0);
}
function Tt(e) {
  if (typeof window > "u" || typeof document > "u" || Ke.get(W(e))) return;
  const t = W(e), r = K(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ee = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", nt, !0), r.addEventListener("keyup", nt, !0), r.addEventListener("click", Lr, !0), t.addEventListener("focus", Mr, !0), t.addEventListener("blur", Ir, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", J, !0), r.addEventListener("pointermove", J, !0), r.addEventListener("pointerup", J, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", J, !0), r.addEventListener("mousemove", J, !0), r.addEventListener("mouseup", J, !0)), t.addEventListener("beforeunload", () => {
    Vr(e);
  }, {
    once: !0
  }), Ke.set(t, {
    focus: n
  });
}
const Vr = (e, t) => {
  const r = W(e), n = K(e);
  t && n.removeEventListener("DOMContentLoaded", t), Ke.has(r) && (r.HTMLElement.prototype.focus = Ke.get(r).focus, n.removeEventListener("keydown", nt, !0), n.removeEventListener("keyup", nt, !0), n.removeEventListener("click", Lr, !0), r.removeEventListener("focus", Mr, !0), r.removeEventListener("blur", Ir, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", J, !0), n.removeEventListener("pointermove", J, !0), n.removeEventListener("pointerup", J, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", J, !0), n.removeEventListener("mousemove", J, !0), n.removeEventListener("mouseup", J, !0)), Ke.delete(r));
};
function go(e) {
  const t = K(e);
  let r;
  return t.readyState !== "loading" ? Tt(e) : (r = () => {
    Tt(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Vr(e, r);
}
typeof document < "u" && go();
function Fr() {
  return xe !== "pointer";
}
function ho() {
  return xe;
}
function yo(e) {
  xe = e, st(e, null);
}
const $o = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Eo(e, t, r) {
  let n = K(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? W(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? W(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? W(r == null ? void 0 : r.target).HTMLElement : HTMLElement, d = typeof window < "u" ? W(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !$o.has(n.activeElement.type) || n.activeElement instanceof i || n.activeElement instanceof a && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof d && !mo[r.key]);
}
function xo(e, t, r) {
  Tt(), Y(() => {
    let n = (o, i) => {
      Eo(!!(r != null && r.isTextInput), o, i) && e(Fr());
    };
    return wt.add(n), () => {
      wt.delete(n);
    };
  }, t);
}
function wo(e) {
  const t = K(e);
  if (ho() === "virtual") {
    let r = ze(t);
    hr(() => {
      const n = ze(t);
      (n === r || n === t.body) && e.isConnected && Le(e);
    });
  } else Le(e);
}
function Ar(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const i = O((c) => {
    if (c.target === c.currentTarget)
      return n && n(c), o && o(!1), !0;
  }, [
    n,
    o
  ]), a = Tr(i), d = O((c) => {
    const u = K(c.target), f = u ? ze(u) : ze();
    c.target === c.currentTarget && f === F(c.nativeEvent) && (r && r(c), o && o(!0), a(c));
  }, [
    o,
    r,
    a
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || o || n) ? d : void 0,
      onBlur: !t && (n || o) ? i : void 0
    }
  };
}
function rr(e) {
  if (!e) return;
  let t = !0;
  return (r) => {
    let n = {
      ...r,
      preventDefault() {
        r.preventDefault();
      },
      isDefaultPrevented() {
        return r.isDefaultPrevented();
      },
      stopPropagation() {
        t && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : t = !0;
      },
      continuePropagation() {
        t = !1;
      },
      isPropagationStopped() {
        return t;
      }
    };
    e(n), t && r.stopPropagation();
  };
}
function Po(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: rr(e.onKeyDown),
      onKeyUp: rr(e.onKeyUp)
    }
  };
}
let To = /* @__PURE__ */ V.createContext(null);
function ko(e) {
  let t = ne(To) || {};
  yr(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Or(e, t) {
  let { focusProps: r } = Ar(e), { keyboardProps: n } = Po(e), o = X(r, n), i = ko(t), a = e.isDisabled ? {} : i, d = D(e.autoFocus);
  Y(() => {
    d.current && t.current && wo(t.current), d.current = !1;
  }, [
    t
  ]);
  let c = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (c = void 0), {
    focusableProps: X({
      ...o,
      tabIndex: c
    }, a)
  };
}
function So(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, i = D({
    isFocusWithin: !1
  }), { addGlobalListener: a, removeAllGlobalListeners: d } = At(), c = O((p) => {
    p.currentTarget.contains(p.target) && i.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (i.current.isFocusWithin = !1, d(), r && r(p), o && o(!1));
  }, [
    r,
    o,
    i,
    d
  ]), u = Tr(c), f = O((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const E = K(p.target), P = ze(E);
    if (!i.current.isFocusWithin && P === F(p.nativeEvent)) {
      n && n(p), o && o(!0), i.current.isFocusWithin = !0, u(p);
      let S = p.currentTarget;
      a(E, "focus", (y) => {
        if (i.current.isFocusWithin && !R(S, y.target)) {
          let g = new E.defaultView.FocusEvent("blur", {
            relatedTarget: y.target
          });
          Pr(g, S);
          let T = Ot(g);
          c(T);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    u,
    a,
    c
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: f,
      onBlur: c
    }
  };
}
let ot = !1, Xe = 0;
function kt() {
  ot = !0, setTimeout(() => {
    ot = !1;
  }, 50);
}
function nr(e) {
  e.pointerType === "touch" && kt();
}
function Co() {
  if (!(typeof document > "u"))
    return Xe === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", nr) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", kt)), Xe++, () => {
      Xe--, !(Xe > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", nr) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", kt));
    };
}
function lt(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [i, a] = j(!1), d = D({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Y(Co, []);
  let { addGlobalListener: c, removeAllGlobalListeners: u } = At(), { hoverProps: f, triggerHoverEnd: p } = be(() => {
    let E = (y, g) => {
      if (d.pointerType = g, o || g === "touch" || d.isHovered || !y.currentTarget.contains(y.target)) return;
      d.isHovered = !0;
      let T = y.currentTarget;
      d.target = T, c(K(y.target), "pointerover", (L) => {
        d.isHovered && d.target && !R(d.target, L.target) && P(L, L.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: T,
        pointerType: g
      }), r && r(!0), a(!0);
    }, P = (y, g) => {
      let T = d.target;
      d.pointerType = "", d.target = null, !(g === "touch" || !d.isHovered || !T) && (d.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: T,
        pointerType: g
      }), r && r(!1), a(!1));
    }, S = {};
    return typeof PointerEvent < "u" ? (S.onPointerEnter = (y) => {
      ot && y.pointerType === "mouse" || E(y, y.pointerType);
    }, S.onPointerLeave = (y) => {
      !o && y.currentTarget.contains(y.target) && P(y, y.pointerType);
    }) : process.env.NODE_ENV === "test" && (S.onTouchStart = () => {
      d.ignoreEmulatedMouseEvents = !0;
    }, S.onMouseEnter = (y) => {
      !d.ignoreEmulatedMouseEvents && !ot && E(y, "mouse"), d.ignoreEmulatedMouseEvents = !1;
    }, S.onMouseLeave = (y) => {
      !o && y.currentTarget.contains(y.target) && P(y, "mouse");
    }), {
      hoverProps: S,
      triggerHoverEnd: P
    };
  }, [
    t,
    r,
    n,
    o,
    d,
    c,
    u
  ]);
  return Y(() => {
    o && p({
      currentTarget: d.target
    }, d.pointerType);
  }, [
    o
  ]), {
    hoverProps: f,
    isHovered: i
  };
}
function dt(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = D({
    isFocused: !1,
    isFocusVisible: t || Fr()
  }), [i, a] = j(!1), [d, c] = j(() => o.current.isFocused && o.current.isFocusVisible), u = O(() => c(o.current.isFocused && o.current.isFocusVisible), []), f = O((P) => {
    o.current.isFocused = P, a(P), u();
  }, [
    u
  ]);
  xo((P) => {
    o.current.isFocusVisible = P, u();
  }, [], {
    isTextInput: r
  });
  let { focusProps: p } = Ar({
    isDisabled: n,
    onFocusChange: f
  }), { focusWithinProps: E } = So({
    isDisabled: !n,
    onFocusWithinChange: f
  });
  return {
    isFocused: i,
    isFocusVisible: d,
    focusProps: n ? E : p
  };
}
function Lo(e) {
  let { id: t, label: r, "aria-labelledby": n, "aria-label": o, labelElementType: i = "label" } = e;
  t = Ce(t);
  let a = Ce(), d = {};
  r ? (n = n ? `${a} ${n}` : a, d = {
    id: a,
    htmlFor: i === "label" ? t : void 0
  }) : !n && !o && process.env.NODE_ENV !== "production" && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let c = Hn({
    id: t,
    "aria-label": o,
    "aria-labelledby": n
  });
  return {
    labelProps: d,
    fieldProps: c
  };
}
function Mo(e) {
  let { description: t, errorMessage: r, isInvalid: n, validationState: o } = e, { labelProps: i, fieldProps: a } = Lo(e), d = Gt([
    !!t,
    !!r,
    n,
    o
  ]), c = Gt([
    !!t,
    !!r,
    n,
    o
  ]);
  return a = X(a, {
    "aria-describedby": [
      d,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      c,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: i,
    fieldProps: a,
    descriptionProps: {
      id: d
    },
    errorMessageProps: {
      id: c
    }
  };
}
const Dr = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, Nr = {
  ...Dr,
  customError: !0,
  valid: !1
}, De = {
  isInvalid: !1,
  validationDetails: Dr,
  validationErrors: []
}, Io = z({}), or = "__formValidationState" + Date.now();
function Vo(e) {
  if (e[or]) {
    let { realtimeValidation: t, displayValidation: r, updateValidation: n, resetValidation: o, commitValidation: i } = e[or];
    return {
      realtimeValidation: t,
      displayValidation: r,
      updateValidation: n,
      resetValidation: o,
      commitValidation: i
    };
  }
  return Fo(e);
}
function Fo(e) {
  let { isInvalid: t, validationState: r, name: n, value: o, builtinValidation: i, validate: a, validationBehavior: d = "aria" } = e;
  r && (t || (t = r === "invalid"));
  let c = t !== void 0 ? {
    isInvalid: t,
    validationErrors: [],
    validationDetails: Nr
  } : null, u = be(() => {
    if (!a || o == null) return null;
    let A = Ao(a, o);
    return ir(A);
  }, [
    a,
    o
  ]);
  i != null && i.validationDetails.valid && (i = void 0);
  let f = ne(Io), p = be(() => n ? Array.isArray(n) ? n.flatMap((A) => St(f[A])) : St(f[n]) : [], [
    f,
    n
  ]), [E, P] = j(f), [S, y] = j(!1);
  f !== E && (P(f), y(!1));
  let g = be(() => ir(S ? [] : p), [
    S,
    p
  ]), T = D(De), [L, M] = j(De), I = D(De), N = () => {
    if (!U) return;
    G(!1);
    let A = u || i || T.current;
    gt(A, I.current) || (I.current = A, M(A));
  }, [U, G] = j(!1);
  return Y(N), {
    realtimeValidation: c || g || u || i || De,
    displayValidation: d === "native" ? c || g || L : c || g || u || i || L,
    updateValidation(A) {
      d === "aria" && !gt(L, A) ? M(A) : T.current = A;
    },
    resetValidation() {
      let A = De;
      gt(A, I.current) || (I.current = A, M(A)), d === "native" && G(!1), y(!0);
    },
    commitValidation() {
      d === "native" && G(!0), y(!0);
    }
  };
}
function St(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function Ao(e, t) {
  if (typeof e == "function") {
    let r = e(t);
    if (r && typeof r != "boolean") return St(r);
  }
  return [];
}
function ir(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: Nr
  } : null;
}
function gt(e, t) {
  return e === t ? !0 : !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((r, n) => r === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([r, n]) => t.validationDetails[r] === n);
}
function Oo(e, t, r) {
  let { validationBehavior: n, focus: o } = e;
  re(() => {
    if (n === "native" && (r != null && r.current) && !r.current.disabled) {
      let u = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(u), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(No(r.current));
    }
  });
  let i = D(!1), a = pe(() => {
    i.current || t.resetValidation();
  }), d = pe((u) => {
    var f;
    t.displayValidation.isInvalid || t.commitValidation();
    let p = r == null || (f = r.current) === null || f === void 0 ? void 0 : f.form;
    if (!u.defaultPrevented && r && p && Ho(p) === r.current) {
      var E;
      o ? o() : (E = r.current) === null || E === void 0 || E.focus(), yo("keyboard");
    }
    u.preventDefault();
  }), c = pe(() => {
    t.commitValidation();
  });
  Y(() => {
    let u = r == null ? void 0 : r.current;
    if (!u) return;
    let f = u.form, p = f == null ? void 0 : f.reset;
    return f && (f.reset = () => {
      i.current = !window.event || window.event.type === "message" && window.event.target instanceof MessagePort, p == null || p.call(f), i.current = !1;
    }), u.addEventListener("invalid", d), u.addEventListener("change", c), f == null || f.addEventListener("reset", a), () => {
      u.removeEventListener("invalid", d), u.removeEventListener("change", c), f == null || f.removeEventListener("reset", a), f && (f.reset = p);
    };
  }, [
    r,
    n
  ]);
}
function Do(e) {
  let t = e.validity;
  return {
    badInput: t.badInput,
    customError: t.customError,
    patternMismatch: t.patternMismatch,
    rangeOverflow: t.rangeOverflow,
    rangeUnderflow: t.rangeUnderflow,
    stepMismatch: t.stepMismatch,
    tooLong: t.tooLong,
    tooShort: t.tooShort,
    typeMismatch: t.typeMismatch,
    valueMissing: t.valueMissing,
    valid: t.valid
  };
}
function No(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: Do(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function Ho(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let r = e.elements[t];
    if (!r.validity.valid) return r;
  }
  return null;
}
function Ro(e, t) {
  let { inputElementType: r = "input", isDisabled: n = !1, isRequired: o = !1, isReadOnly: i = !1, type: a = "text", validationBehavior: d = "aria" } = e, [c, u] = qn(e.value, e.defaultValue || "", e.onChange), { focusableProps: f } = Or(e, t), p = Vo({
    ...e,
    value: c
  }), { isInvalid: E, validationErrors: P, validationDetails: S } = p.displayValidation, { labelProps: y, fieldProps: g, descriptionProps: T, errorMessageProps: L } = Mo({
    ...e,
    isInvalid: E,
    errorMessage: e.errorMessage || P
  }), M = Ge(e, {
    labelable: !0
  });
  const I = {
    type: a,
    pattern: e.pattern
  };
  let [N] = j(c);
  var U;
  return Gn(t, (U = e.defaultValue) !== null && U !== void 0 ? U : N, u), Oo(e, p, t), {
    labelProps: y,
    inputProps: X(M, r === "input" ? I : void 0, {
      disabled: n,
      readOnly: i,
      required: o && d === "native",
      "aria-required": o && d === "aria" || void 0,
      "aria-invalid": E || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-activedescendant": e["aria-activedescendant"],
      "aria-autocomplete": e["aria-autocomplete"],
      "aria-haspopup": e["aria-haspopup"],
      "aria-controls": e["aria-controls"],
      value: c,
      onChange: (G) => u(G.target.value),
      autoComplete: e.autoComplete,
      autoCapitalize: e.autoCapitalize,
      maxLength: e.maxLength,
      minLength: e.minLength,
      name: e.name,
      form: e.form,
      placeholder: e.placeholder,
      inputMode: e.inputMode,
      autoCorrect: e.autoCorrect,
      spellCheck: e.spellCheck,
      [parseInt(V.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
      // Clipboard events
      onCopy: e.onCopy,
      onCut: e.onCut,
      onPaste: e.onPaste,
      // Composition events
      onCompositionEnd: e.onCompositionEnd,
      onCompositionStart: e.onCompositionStart,
      onCompositionUpdate: e.onCompositionUpdate,
      // Selection events
      onSelect: e.onSelect,
      // Input events
      onBeforeInput: e.onBeforeInput,
      onInput: e.onInput,
      ...f,
      ...g
    }),
    descriptionProps: T,
    errorMessageProps: L,
    isInvalid: E,
    validationErrors: P,
    validationDetails: S
  };
}
if (typeof HTMLTemplateElement < "u") {
  const e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this);
    }
  });
}
const Ko = /* @__PURE__ */ z(!1);
function ct(e) {
  let t = (r, n) => ne(Ko) ? null : e(r, n);
  return t.displayName = e.displayName || e.name, Ie(t);
}
function zo(e, t) {
  let { elementType: r = "button", isDisabled: n, onPress: o, onPressStart: i, onPressEnd: a, onPressUp: d, onPressChange: c, preventFocusOnPress: u, allowFocusWhenDisabled: f, onClick: p, href: E, target: P, rel: S, type: y = "button" } = e, g;
  r === "button" ? g = {
    type: y,
    disabled: n,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : g = {
    role: "button",
    href: r === "a" && !n ? E : void 0,
    target: r === "a" ? P : void 0,
    type: r === "input" ? y : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? S : void 0
  };
  let { pressProps: T, isPressed: L } = lo({
    onPressStart: i,
    onPressEnd: a,
    onPressChange: c,
    onPress: o,
    onPressUp: d,
    onClick: p,
    isDisabled: n,
    preventFocusOnPress: u,
    ref: t
  }), { focusableProps: M } = Or(e, t);
  f && (M.tabIndex = n ? -1 : M.tabIndex);
  let I = X(M, T, Ge(e, {
    labelable: !0
  }));
  return {
    isPressed: L,
    buttonProps: X(g, I, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
const Hr = /* @__PURE__ */ z({}), Go = /* @__PURE__ */ ct(function(t, r) {
  [t, r] = me(t, r, Hr);
  let { elementType: n = "label", ...o } = t;
  return /* @__PURE__ */ V.createElement(n, {
    className: "react-aria-Label",
    ...o,
    ref: r
  });
}), _o = /* @__PURE__ */ z(null), Bo = /* @__PURE__ */ z({}), jo = /* @__PURE__ */ ct(function(t, r) {
  [t, r] = me(t, r, Bo);
  let n = t, { isPending: o } = n, { buttonProps: i, isPressed: a } = zo(t, r);
  i = Uo(i, o);
  let { focusProps: d, isFocused: c, isFocusVisible: u } = dt(t), { hoverProps: f, isHovered: p } = lt({
    ...t,
    isDisabled: t.isDisabled || o
  }), E = {
    isHovered: p,
    isPressed: (n.isPressed || a) && !o,
    isFocused: c,
    isFocusVisible: u,
    isDisabled: t.isDisabled || !1,
    isPending: o ?? !1
  }, P = Ve({
    ...t,
    values: E,
    defaultClassName: "react-aria-Button"
  }), S = Ce(i.id), y = Ce(), g = i["aria-labelledby"];
  o && (g ? g = `${g} ${y}` : i["aria-label"] && (g = `${S} ${y}`));
  let T = D(o);
  Y(() => {
    let M = {
      "aria-labelledby": g || S
    };
    (!T.current && c && o || T.current && c && !o) && Ut(M, "assertive"), T.current = o;
  }, [
    o,
    c,
    g,
    S
  ]);
  let L = Ge(t, {
    global: !0
  });
  return delete L.onClick, /* @__PURE__ */ V.createElement("button", {
    ...X(L, P, i, d, f),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: i.type === "submit" && o ? "button" : i.type,
    id: S,
    ref: r,
    "aria-labelledby": g,
    slot: t.slot || void 0,
    "aria-disabled": o ? "true" : i["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": E.isPressed || void 0,
    "data-hovered": p || void 0,
    "data-focused": c || void 0,
    "data-pending": o || void 0,
    "data-focus-visible": u || void 0
  }, /* @__PURE__ */ V.createElement(_o.Provider, {
    value: {
      id: y
    }
  }, P.children));
});
function Uo(e, t) {
  if (t) {
    for (const r in e) r.startsWith("on") && !(r.includes("Focus") || r.includes("Blur")) && (e[r] = void 0);
    e.href = void 0, e.target = void 0;
  }
  return e;
}
const Rr = /* @__PURE__ */ z({}), Nt = /* @__PURE__ */ Ie(function(t, r) {
  [t, r] = me(t, r, Rr);
  let { elementType: n = "span", ...o } = t;
  return /* @__PURE__ */ V.createElement(n, {
    className: "react-aria-Text",
    ...o,
    ref: r
  });
}), Ht = /* @__PURE__ */ z(null), Wo = /* @__PURE__ */ Ie(function(t, r) {
  let n = ne(Ht);
  return n != null && n.isInvalid ? /* @__PURE__ */ V.createElement(Yo, {
    ...t,
    ref: r
  }) : null;
}), Yo = /* @__PURE__ */ Ie((e, t) => {
  let r = ne(Ht), n = Ge(e, {
    global: !0
  }), o = Ve({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: r.validationErrors.length === 0 ? void 0 : r.validationErrors.join(" "),
    values: r
  });
  return o.children == null ? null : /* @__PURE__ */ V.createElement(Nt, {
    slot: "errorMessage",
    ...n,
    ...o,
    ref: t
  });
}), Xo = /* @__PURE__ */ z(null), Kr = /* @__PURE__ */ z({}), qo = /* @__PURE__ */ Ie(function(t, r) {
  [t, r] = me(t, r, Kr);
  let { isDisabled: n, isInvalid: o, isReadOnly: i, onHoverStart: a, onHoverChange: d, onHoverEnd: c, ...u } = t;
  n ?? (n = !!t["aria-disabled"] && t["aria-disabled"] !== "false"), o ?? (o = !!t["aria-invalid"] && t["aria-invalid"] !== "false");
  let { hoverProps: f, isHovered: p } = lt({
    onHoverStart: a,
    onHoverChange: d,
    onHoverEnd: c,
    isDisabled: n
  }), { isFocused: E, isFocusVisible: P, focusProps: S } = dt({
    within: !0
  }), y = Ve({
    ...t,
    values: {
      isHovered: p,
      isFocusWithin: E,
      isFocusVisible: P,
      isDisabled: n,
      isInvalid: o
    },
    defaultClassName: "react-aria-Group"
  });
  var g, T;
  return /* @__PURE__ */ V.createElement("div", {
    ...X(u, S, f),
    ...y,
    ref: r,
    role: (g = t.role) !== null && g !== void 0 ? g : "group",
    slot: (T = t.slot) !== null && T !== void 0 ? T : void 0,
    "data-focus-within": E || void 0,
    "data-hovered": p || void 0,
    "data-focus-visible": P || void 0,
    "data-disabled": n || void 0,
    "data-invalid": o || void 0,
    "data-readonly": i || void 0
  }, y.children);
}), zr = /* @__PURE__ */ z({});
let Qo = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const Jo = /* @__PURE__ */ ct(function(t, r) {
  [t, r] = me(t, r, zr);
  let { hoverProps: n, isHovered: o } = lt({
    ...t,
    isDisabled: t.disabled
  }), { isFocused: i, isFocusVisible: a, focusProps: d } = dt({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), c = !!t["aria-invalid"] && t["aria-invalid"] !== "false", u = Ve({
    ...t,
    values: {
      isHovered: o,
      isFocused: i,
      isFocusVisible: a,
      isDisabled: t.disabled || !1,
      isInvalid: c
    },
    defaultClassName: "react-aria-Input"
  });
  return /* @__PURE__ */ V.createElement("input", {
    ...X(Qo(t), d, n),
    ...u,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": c || void 0
  });
}), Gr = /* @__PURE__ */ z({});
let Zo = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const ei = /* @__PURE__ */ Ie(function(t, r) {
  [t, r] = me(t, r, Gr);
  let { hoverProps: n, isHovered: o } = lt(t), { isFocused: i, isFocusVisible: a, focusProps: d } = dt({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), c = !!t["aria-invalid"] && t["aria-invalid"] !== "false", u = Ve({
    ...t,
    values: {
      isHovered: o,
      isFocused: i,
      isFocusVisible: a,
      isDisabled: t.disabled || !1,
      isInvalid: c
    },
    defaultClassName: "react-aria-TextArea"
  });
  return /* @__PURE__ */ V.createElement("textarea", {
    ...X(Zo(t), d, n),
    ...u,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": c || void 0
  });
}), ti = /* @__PURE__ */ z(null), ri = /* @__PURE__ */ ct(function(t, r) {
  [t, r] = me(t, r, ti);
  let { validationBehavior: n } = xr(Xo) || {};
  var o, i;
  let a = (i = (o = t.validationBehavior) !== null && o !== void 0 ? o : n) !== null && i !== void 0 ? i : "native", d = D(null);
  [t, d] = me(t, d, sn);
  let [c, u] = Zn(!t["aria-label"] && !t["aria-labelledby"]), [f, p] = j("input"), { labelProps: E, inputProps: P, descriptionProps: S, errorMessageProps: y, ...g } = Ro({
    ...eo(t),
    inputElementType: f,
    label: u,
    validationBehavior: a
  }, d), T = O((I) => {
    d.current = I, I && p(I instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, [
    d
  ]), L = Ve({
    ...t,
    values: {
      isDisabled: t.isDisabled || !1,
      isInvalid: g.isInvalid,
      isReadOnly: t.isReadOnly || !1,
      isRequired: t.isRequired || !1
    },
    defaultClassName: "react-aria-TextField"
  }), M = Ge(t, {
    global: !0
  });
  return delete M.id, /* @__PURE__ */ V.createElement("div", {
    ...M,
    ...L,
    ref: r,
    slot: t.slot || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": g.isInvalid || void 0,
    "data-readonly": t.isReadOnly || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ V.createElement(Jn, {
    values: [
      [
        Hr,
        {
          ...E,
          ref: c
        }
      ],
      [
        zr,
        {
          ...P,
          ref: T
        }
      ],
      [
        Gr,
        {
          ...P,
          ref: T
        }
      ],
      [
        Kr,
        {
          role: "presentation",
          isInvalid: g.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        Rr,
        {
          slots: {
            description: S,
            errorMessage: y
          }
        }
      ],
      [
        Ht,
        g
      ]
    ]
  }, L.children));
}), ni = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, oi = (e, t) => ({
  classGroupId: e,
  validator: t
}), _r = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), it = "-", ar = [], ii = "arbitrary..", ai = (e) => {
  const t = li(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return si(a);
      const d = a.split(it), c = d[0] === "" && d.length > 1 ? 1 : 0;
      return Br(d, c, t);
    },
    getConflictingClassGroupIds: (a, d) => {
      if (d) {
        const c = n[a], u = r[a];
        return c ? u ? ni(u, c) : c : u || ar;
      }
      return r[a] || ar;
    }
  };
}, Br = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const o = e[t], i = r.nextPart.get(o);
  if (i) {
    const u = Br(e, t + 1, i);
    if (u) return u;
  }
  const a = r.validators;
  if (a === null)
    return;
  const d = t === 0 ? e.join(it) : e.slice(t).join(it), c = a.length;
  for (let u = 0; u < c; u++) {
    const f = a[u];
    if (f.validator(d))
      return f.classGroupId;
  }
}, si = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? ii + n : void 0;
})(), li = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return di(r, t);
}, di = (e, t) => {
  const r = _r();
  for (const n in e) {
    const o = e[n];
    Rt(o, r, n, t);
  }
  return r;
}, Rt = (e, t, r, n) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    ci(a, t, r, n);
  }
}, ci = (e, t, r, n) => {
  if (typeof e == "string") {
    ui(e, t, r);
    return;
  }
  if (typeof e == "function") {
    fi(e, t, r, n);
    return;
  }
  pi(e, t, r, n);
}, ui = (e, t, r) => {
  const n = e === "" ? t : jr(t, e);
  n.classGroupId = r;
}, fi = (e, t, r, n) => {
  if (bi(e)) {
    Rt(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(oi(r, e));
}, pi = (e, t, r, n) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [d, c] = o[a];
    Rt(c, jr(t, d), r, n);
  }
}, jr = (e, t) => {
  let r = e;
  const n = t.split(it), o = n.length;
  for (let i = 0; i < o; i++) {
    const a = n[i];
    let d = r.nextPart.get(a);
    d || (d = _r(), r.nextPart.set(a, d)), r = d;
  }
  return r;
}, bi = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, mi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const o = (i, a) => {
    r[i] = a, t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let a = r[i];
      if (a !== void 0)
        return a;
      if ((a = n[i]) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      i in r ? r[i] = a : o(i, a);
    }
  };
}, Ct = "!", sr = ":", vi = [], lr = (e, t, r, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), gi = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const i = [];
    let a = 0, d = 0, c = 0, u;
    const f = o.length;
    for (let y = 0; y < f; y++) {
      const g = o[y];
      if (a === 0 && d === 0) {
        if (g === sr) {
          i.push(o.slice(c, y)), c = y + 1;
          continue;
        }
        if (g === "/") {
          u = y;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? d++ : g === ")" && d--;
    }
    const p = i.length === 0 ? o : o.slice(c);
    let E = p, P = !1;
    p.endsWith(Ct) ? (E = p.slice(0, -1), P = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(Ct) && (E = p.slice(1), P = !0)
    );
    const S = u && u > c ? u - c : void 0;
    return lr(i, P, E, S);
  };
  if (t) {
    const o = t + sr, i = n;
    n = (a) => a.startsWith(o) ? i(a.slice(o.length)) : lr(vi, !1, a, void 0, !0);
  }
  if (r) {
    const o = n;
    n = (i) => r({
      className: i,
      parseClassName: o
    });
  }
  return n;
}, hi = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let o = [];
    for (let i = 0; i < r.length; i++) {
      const a = r[i], d = a[0] === "[", c = t.has(a);
      d || c ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, yi = (e) => ({
  cache: mi(e.cacheSize),
  parseClassName: gi(e),
  sortModifiers: hi(e),
  ...ai(e)
}), $i = /\s+/, Ei = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], d = e.trim().split($i);
  let c = "";
  for (let u = d.length - 1; u >= 0; u -= 1) {
    const f = d[u], {
      isExternal: p,
      modifiers: E,
      hasImportantModifier: P,
      baseClassName: S,
      maybePostfixModifierPosition: y
    } = r(f);
    if (p) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!y, T = n(g ? S.substring(0, y) : S);
    if (!T) {
      if (!g) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (T = n(S), !T) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const L = E.length === 0 ? "" : E.length === 1 ? E[0] : i(E).join(":"), M = P ? L + Ct : L, I = M + T;
    if (a.indexOf(I) > -1)
      continue;
    a.push(I);
    const N = o(T, g);
    for (let U = 0; U < N.length; ++U) {
      const G = N[U];
      a.push(M + G);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
}, xi = (...e) => {
  let t = 0, r, n, o = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = Ur(r)) && (o && (o += " "), o += n);
  return o;
}, Ur = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ur(e[n])) && (r && (r += " "), r += t);
  return r;
}, dr = (e, ...t) => {
  let r, n, o, i;
  const a = (c) => {
    const u = t.reduce((f, p) => p(f), e());
    return r = yi(u), n = r.cache.get, o = r.cache.set, i = d, d(c);
  }, d = (c) => {
    const u = n(c);
    if (u)
      return u;
    const f = Ei(c, r);
    return o(c, f), f;
  };
  return i = a, (...c) => i(xi(...c));
}, wi = [], B = (e) => {
  const t = (r) => r[e] || wi;
  return t.isThemeGetter = !0, t;
}, Wr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Yr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Pi = /^\d+\/\d+$/, Ti = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ki = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Si = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ci = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Li = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Te = (e) => Pi.test(e), k = (e) => !!e && !Number.isNaN(Number(e)), ue = (e) => !!e && Number.isInteger(Number(e)), ht = (e) => e.endsWith("%") && k(e.slice(0, -1)), ae = (e) => Ti.test(e), Mi = () => !0, Ii = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ki.test(e) && !Si.test(e)
), Xr = () => !1, Vi = (e) => Ci.test(e), Fi = (e) => Li.test(e), Ai = (e) => !m(e) && !v(e), Oi = (e) => Fe(e, Jr, Xr), m = (e) => Wr.test(e), ye = (e) => Fe(e, Zr, Ii), yt = (e) => Fe(e, Ki, k), cr = (e) => Fe(e, qr, Xr), Di = (e) => Fe(e, Qr, Fi), qe = (e) => Fe(e, en, Vi), v = (e) => Yr.test(e), Ne = (e) => Ae(e, Zr), Ni = (e) => Ae(e, zi), ur = (e) => Ae(e, qr), Hi = (e) => Ae(e, Jr), Ri = (e) => Ae(e, Qr), Qe = (e) => Ae(e, en, !0), Fe = (e, t, r) => {
  const n = Wr.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ae = (e, t, r = !1) => {
  const n = Yr.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, qr = (e) => e === "position" || e === "percentage", Qr = (e) => e === "image" || e === "url", Jr = (e) => e === "length" || e === "size" || e === "bg-size", Zr = (e) => e === "length", Ki = (e) => e === "number", zi = (e) => e === "family-name", en = (e) => e === "shadow", fr = () => {
  const e = B("color"), t = B("font"), r = B("text"), n = B("font-weight"), o = B("tracking"), i = B("leading"), a = B("breakpoint"), d = B("container"), c = B("spacing"), u = B("radius"), f = B("shadow"), p = B("inset-shadow"), E = B("text-shadow"), P = B("drop-shadow"), S = B("blur"), y = B("perspective"), g = B("aspect"), T = B("ease"), L = B("animate"), M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], N = () => [...I(), v, m], U = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", "contain", "none"], w = () => [v, m, c], _ = () => [Te, "full", "auto", ...w()], A = () => [ue, "none", "subgrid", v, m], ge = () => ["auto", {
    span: ["full", ue, v, m]
  }, ue, v, m], le = () => [ue, "auto", v, m], we = () => ["auto", "min", "max", "fr", v, m], Oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], oe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...w()], Q = () => [Te, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], $ = () => [e, v, m], Be = () => [...I(), ur, cr, {
    position: [v, m]
  }], s = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], h = () => ["auto", "cover", "contain", Hi, Oi, {
    size: [v, m]
  }], l = () => [ht, Ne, ye], b = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    v,
    m
  ], x = () => ["", k, Ne, ye], C = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [k, ht, ur, cr], Pe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    S,
    v,
    m
  ], de = () => ["none", k, v, m], ie = () => ["none", k, v, m], ut = () => [k, v, m], je = () => [Te, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ae],
      breakpoint: [ae],
      color: [Mi],
      container: [ae],
      "drop-shadow": [ae],
      ease: ["in", "out", "in-out"],
      font: [Ai],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ae],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ae],
      shadow: [ae],
      spacing: ["px", k],
      text: [ae],
      "text-shadow": [ae],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Te, m, v, g]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [k, m, v, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": M()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": M()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: _()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: _()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ue, "auto", v, m]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Te, "full", "auto", d, ...w()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [k, Te, "auto", "initial", "none", m]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", k, v, m]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", k, v, m]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ue, "first", "last", "none", v, m]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ge()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": le()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": le()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ge()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": le()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": le()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": we()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": we()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Oe(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...oe(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...oe()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Oe()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...oe(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...oe(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Oe()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...oe(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...oe()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: q()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: q()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: q()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: q()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: q()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: q()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: q()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: q()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: q()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": w()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...Q()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Q()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ne, ye]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, v, yt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ht, m]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ni, m, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, v, m]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [k, "none", v, yt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...w()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v, m]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", v, m]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: $()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: $()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...C(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [k, "from-font", "auto", v, ye]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: $()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [k, "auto", v, m]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v, m]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", v, m]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Be()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: s()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: h()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ue, v, m],
          radial: ["", v, m],
          conic: [ue, v, m]
        }, Ri, Di]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: $()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: l()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: l()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: l()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: $()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: $()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: b()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": b()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": b()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": b()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": b()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": b()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": b()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": b()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": b()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": b()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": b()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": b()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": b()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": b()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": b()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: x()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": x()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": x()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": x()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": x()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": x()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": x()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": x()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": x()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": x()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": x()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...C(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...C(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: $()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": $()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": $()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": $()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": $()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": $()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": $()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": $()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": $()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: $()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...C(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [k, v, m]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", k, Ne, ye]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: $()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          Qe,
          qe
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: $()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, Qe, qe]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": $()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: x()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: $()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [k, ye]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": $()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": x()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": $()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", E, Qe, qe]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": $()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k, v, m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [k]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": H()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": H()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": $()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": H()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": H()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": $()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": H()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": H()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": $()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": H()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": H()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": $()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": H()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": H()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": $()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": H()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": H()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": $()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": H()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": H()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": $()
      }],
      "mask-image-radial": [{
        "mask-radial": [v, m]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": H()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": H()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [k]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": H()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": H()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": $()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Be()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: s()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: h()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", v, m]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          v,
          m
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Pe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [k, v, m]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [k, v, m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          P,
          Qe,
          qe
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": $()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", k, v, m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [k, v, m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", k, v, m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k, v, m]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", k, v, m]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          v,
          m
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Pe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [k, v, m]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [k, v, m]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", k, v, m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [k, v, m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", k, v, m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k, v, m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k, v, m]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", k, v, m]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", v, m]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [k, "initial", v, m]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, v, m]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [k, v, m]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", L, v, m]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [y, v, m]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: de()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": de()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": de()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": de()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ut()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ut()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ut()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [v, m, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: je()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": je()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": je()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": je()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: $()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: $()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v, m]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", v, m]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...$()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [k, Ne, ye, yt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...$()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Gi = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: i = {}
}) => (Re(e, "cacheSize", t), Re(e, "prefix", r), Re(e, "experimentalParseClassName", n), Je(e.theme, i.theme), Je(e.classGroups, i.classGroups), Je(e.conflictingClassGroups, i.conflictingClassGroups), Je(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Re(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), Ze(e.theme, o.theme), Ze(e.classGroups, o.classGroups), Ze(e.conflictingClassGroups, o.conflictingClassGroups), Ze(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), tn(e, o, "orderSensitiveModifiers"), e), Re = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, Je = (e, t) => {
  if (t)
    for (const r in t)
      Re(e, r, t[r]);
}, Ze = (e, t) => {
  if (t)
    for (const r in t)
      tn(e, t, r);
}, tn = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, _i = (e, ...t) => typeof e == "function" ? dr(fr, e, ...t) : dr(() => Gi(fr(), e), ...t), Bi = _i({
  prefix: "nm-"
});
function ve(...e) {
  return Bi(Lt(e));
}
const ji = Mt(
  [
    // Base Styles
    "nm-font-sans nm-inline-flex nm-items-center nm-justify-center nm-whitespace-nowrap nm-rounded-md nm-text-sm nm-font-medium nm-ring-offset-background nm-transition-colors",
    /* Disabled State  */
    "data-[disabled]:nm-pointer-events-none data-[disabled]:nm-opacity-50",
    /* Focus Visible State */
    "data-[focus-visible]:nm-outline-none data-[focus-visible]:nm-ring-2 data-[focus-visible]:nm-ring-ring data-[focus-visible]:nm-ring-offset-2",
    /* Resets */
    "focus-visible:nm-outline-none",
    /* Cursor pointer is good for buttons */
    "nm-cursor-pointer"
  ],
  {
    variants: {
      variant: {
        default: "nm-bg-btn-primary nm-text-btn-primary-fg data-[hovered]:nm-bg-btn-primary-hover",
        destructive: "nm-bg-btn-destructive nm-text-btn-destructive-fg data-[hovered]:nm-bg-btn-destructive-hover",
        outline: "nm-border nm-border-input nm-bg-background data-[hovered]:nm-bg-btn-ghost-hover-bg data-[hovered]:nm-text-btn-ghost-hover-fg",
        secondary: "nm-bg-btn-secondary nm-text-btn-secondary-fg data-[hovered]:nm-bg-btn-secondary-hover",
        ghost: "data-[hovered]:nm-bg-btn-ghost-hover-bg data-[hovered]:nm-text-btn-ghost-hover-fg",
        link: "nm-text-btn-primary nm-underline-offset-4 data-[hovered]:nm-underline"
      },
      size: {
        default: "nm-h-10 nm-px-4 nm-py-2  ",
        sm: "nm-h-9 nm-rounded-md nm-px-3",
        lg: "nm-h-11 nm-rounded-md nm-px-8",
        icon: "nm-h-10 nm-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ui = nn.forwardRef(
  ({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ Z(
    jo,
    {
      ref: o,
      ...n,
      className: _e(
        e,
        (i) => ve(
          ji({
            variant: t,
            size: r,
            className: i
          })
        )
      )
    }
  )
);
Ui.displayName = "Button";
const Wi = Mt([
  "nm-text-sm nm-font-medium nm-leading-none",
  "[color:var(--nm-textfield-label-fg)]",
  /* Disabled */
  "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
  /* Invalid */
  "group-data-[invalid]:[color:var(--nm-textfield-label-error-fg)]"
]), Yi = ({ className: e, ...t }) => /* @__PURE__ */ Z(Go, { className: ve(Wi(), e), ...t });
function na({ className: e, ...t }) {
  return /* @__PURE__ */ Z(
    Nt,
    {
      className: ve(
        "nm-text-sm [color:var(--nm-textfield-helper-fg)]",
        e
      ),
      ...t,
      slot: "description"
    }
  );
}
function Xi({ className: e, ...t }) {
  return /* @__PURE__ */ Z(
    Wo,
    {
      className: ve(
        "nm-text-sm nm-font-medium [color:var(--nm-textfield-helper-error-fg)]",
        e
      ),
      ...t
    }
  );
}
const qi = Mt("", {
  variants: {
    variant: {
      default: [
        "nm-relative nm-flex nm-h-10 nm-w-full nm-items-center nm-overflow-hidden nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background",
        /* Base Styles from Tokens */
        "[border-color:var(--nm-textfield-border)] [background-color:var(--nm-textfield-bg)]",
        /* Focus Within */
        "data-[focus-within]:nm-outline-none data-[focus-within]:nm-ring-2 [data-focus-within]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focus-within]:nm-ring-offset-2",
        /* Disabled */
        "data-[disabled]:nm-opacity-50"
      ],
      ghost: ""
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function oa({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ Z(
    qo,
    {
      className: _e(
        e,
        (n) => ve(qi({ variant: t }), n)
      ),
      ...r
    }
  );
}
const Qi = ri, Ji = ({ className: e, ...t }) => /* @__PURE__ */ Z(
  Jo,
  {
    className: _e(
      e,
      (r) => ve(
        "nm-flex nm-h-10 nm-w-full nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background nm-transition-colors",
        /* Base Styles from Tokens */
        "[border-color:var(--nm-textfield-border)] [color:var(--nm-textfield-fg)] [background-color:var(--nm-textfield-bg)]",
        /* File Input Reset */
        "file:nm-border-0 file:nm-bg-transparent file:nm-text-sm file:nm-font-medium",
        /* Placeholder */
        "[&::placeholder]:opacity-100 [&::placeholder]:[color:var(--nm-textfield-placeholder)]",
        /* Disabled State */
        "data-[disabled]:nm-cursor-not-allowed [data-disabled]:opacity-50 [data-disabled]:[background-color:var(--nm-textfield-disabled-bg)] [data-disabled]:[color:var(--nm-textfield-disabled-fg)]",
        /* Focused State */
        "data-[focused]:nm-outline-none data-[focused]:nm-ring-2 [data-focused]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focused]:nm-ring-offset-2",
        /* Resets */
        "focus-visible:nm-outline-none",
        r
      )
    ),
    ...t
  }
), Zi = ({ className: e, ...t }) => /* @__PURE__ */ Z(
  ei,
  {
    className: _e(
      e,
      (r) => ve(
        "nm-flex nm-min-h-[80px] nm-w-full nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background nm-transition-colors",
        /* Base Styles from Tokens */
        "[border-color:var(--nm-textfield-border)] [color:var(--nm-textfield-fg)] [background-color:var(--nm-textfield-bg)]",
        /* Placeholder */
        "[&::placeholder]:opacity-100 [&::placeholder]:[color:var(--nm-textfield-placeholder)]",
        /* Focused State */
        "data-[focused]:nm-outline-none data-[focused]:nm-ring-2 [data-focused]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focused]:nm-ring-offset-2",
        /* Disabled State */
        "data-[disabled]:nm-cursor-not-allowed [data-disabled]:opacity-50 [data-disabled]:[background-color:var(--nm-textfield-disabled-bg)] [data-disabled]:[color:var(--nm-textfield-disabled-fg)]",
        /* Resets */
        "focus-visible:nm-outline-none",
        r
      )
    ),
    ...t
  }
);
function ia({
  label: e,
  description: t,
  errorMessage: r,
  textArea: n,
  className: o,
  placeholder: i,
  ...a
}) {
  return /* @__PURE__ */ rn(
    Qi,
    {
      className: _e(
        o,
        (d) => ve("nm-font-sans nm-group nm-flex nm-flex-col nm-gap-2", d)
      ),
      ...a,
      children: [
        /* @__PURE__ */ Z(Yi, { children: e }),
        n ? /* @__PURE__ */ Z(Zi, { placeholder: i }) : /* @__PURE__ */ Z(Ji, { placeholder: i }),
        t && /* @__PURE__ */ Z(
          Nt,
          {
            className: "nm-text-sm [color:var(--nm-textfield-helper-fg)]",
            slot: "description",
            children: t
          }
        ),
        /* @__PURE__ */ Z(Xi, { children: r })
      ]
    }
  );
}
export {
  Ui as Button,
  Xi as FieldError,
  oa as FieldGroup,
  na as FormDescription,
  Ji as Input,
  Yi as Label,
  Zi as TextArea,
  Qi as TextField,
  ia as WrappedField,
  qi as fieldGroupVariants,
  Wi as labelVariants
};
//# sourceMappingURL=index.es.js.map
