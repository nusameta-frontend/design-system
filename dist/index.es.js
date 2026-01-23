/*!  "use client";  */
import { jsx as Cr } from "react/jsx-runtime";
import _, { useState as ae, useContext as be, useRef as G, useEffect as Z, useCallback as D, useMemo as Ie, forwardRef as Lr, createContext as ft } from "react";
import { flushSync as Mr } from "react-dom";
function Bt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Bt(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function pt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Bt(e)) && (n && (n += " "), n += t);
  return n;
}
const Et = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, xt = pt, Ar = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return xt(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, l = Object.keys(o).map((u) => {
    const f = r == null ? void 0 : r[u], v = s == null ? void 0 : s[u];
    if (f === null) return null;
    const T = Et(f) || Et(v);
    return o[u][T];
  }), d = r && Object.entries(r).reduce((u, f) => {
    let [v, T] = f;
    return T === void 0 || (u[v] = T), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, f) => {
    let { class: v, className: T, ...S } = f;
    return Object.entries(S).every((C) => {
      let [$, w] = C;
      return Array.isArray(w) ? w.includes({
        ...s,
        ...d
      }[$]) : {
        ...s,
        ...d
      }[$] === w;
    }) ? [
      ...u,
      v,
      T
    ] : u;
  }, []);
  return xt(e, l, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, $e = typeof document < "u" ? _.useLayoutEffect : () => {
}, je = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Yt = /* @__PURE__ */ _.createContext(je), Ir = /* @__PURE__ */ _.createContext(!1);
let Fr = !!(typeof window < "u" && window.document && window.document.createElement), Qe = /* @__PURE__ */ new WeakMap();
function Or(e = !1) {
  let t = be(Yt), r = G(null);
  if (r.current === null && !e) {
    var n, o;
    let s = (o = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (s) {
      let l = Qe.get(s);
      l == null ? Qe.set(s, {
        id: t.current,
        state: s.memoizedState
      }) : s.memoizedState !== l.state && (t.current = l.id, Qe.delete(s));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function Nr(e) {
  let t = be(Yt);
  t === je && !Fr && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = Or(!!e), n = t === je && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function Dr(e) {
  let t = _.useId(), [r] = ae(Hr()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${je.prefix}`;
  return e || `${n}-${t}`;
}
const Vr = typeof _.useId == "function" ? Dr : Nr;
function Kr() {
  return !1;
}
function zr() {
  return !0;
}
function Gr(e) {
  return () => {
  };
}
function Hr() {
  return typeof _.useSyncExternalStore == "function" ? _.useSyncExternalStore(Gr, Kr, zr) : be(Ir);
}
let Rr = !!(typeof window < "u" && window.document && window.document.createElement), ye = /* @__PURE__ */ new Map(), Ce;
typeof FinalizationRegistry < "u" && (Ce = new FinalizationRegistry((e) => {
  ye.delete(e);
}));
function Pt(e) {
  let [t, r] = ae(e), n = G(null), o = Vr(t), s = G(null);
  if (Ce && Ce.register(s, o), Rr) {
    const l = ye.get(o);
    l && !l.includes(n) ? l.push(n) : ye.set(o, [
      n
    ]);
  }
  return $e(() => {
    let l = o;
    return () => {
      Ce && Ce.unregister(s), ye.delete(l);
    };
  }, [
    o
  ]), Z(() => {
    let l = n.current;
    return l && r(l), () => {
      l && (n.current = null);
    };
  }), o;
}
function _r(e, t) {
  if (e === t) return e;
  let r = ye.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = ye.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function Xt(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const O = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, R = (e) => e && "window" in e && e.window === e ? e : O(e).defaultView || window;
function Wr(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function jr(e) {
  return Wr(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Ur = !1;
function bt() {
  return Ur;
}
function A(e, t) {
  if (!bt()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : jr(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const Ae = (e = document) => {
  var t;
  if (!bt()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function L(e) {
  return bt() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function le(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let o in n) {
      let s = t[o], l = n[o];
      typeof s == "function" && typeof l == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = Xt(s, l) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof l == "string" ? t[o] = pt(s, l) : o === "id" && s && l ? t.id = _r(s, l) : t[o] = l !== void 0 ? l : s;
    }
  }
  return t;
}
function Br(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = Tt(o, t);
      return r || (r = typeof s == "function"), s;
    });
    if (r) return () => {
      n.forEach((o, s) => {
        typeof o == "function" ? o() : Tt(e[s], null);
      });
    };
  };
}
function Tt(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const Yr = /* @__PURE__ */ new Set([
  "id"
]), Xr = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), qr = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Jr = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), kt = /* @__PURE__ */ new Set([
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
]), Qr = /^(data-.*)$/;
function qt(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: s = o, propNames: l } = t, d = {};
  for (const c in e) Object.prototype.hasOwnProperty.call(e, c) && (Yr.has(c) || r && Xr.has(c) || n && qr.has(c) || o && Jr.has(c) || s && (kt.has(c) || c.endsWith("Capture") && kt.has(c.slice(0, -7))) || l != null && l.has(c) || Qr.test(c)) && (d[c] = e[c]);
  return d;
}
function we(e) {
  if (Zr()) e.focus({
    preventScroll: !0
  });
  else {
    let t = en(e);
    e.focus(), tn(t);
  }
}
let Ne = null;
function Zr() {
  if (Ne == null) {
    Ne = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ne = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ne;
}
function en(e) {
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
function tn(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function qe(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function mt(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function ee(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Ee = ee(function() {
  return mt(/^Mac/i);
}), rn = ee(function() {
  return mt(/^iPhone/i);
}), Jt = ee(function() {
  return mt(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ee() && navigator.maxTouchPoints > 1;
}), gt = ee(function() {
  return rn() || Jt();
});
ee(function() {
  return Ee() || gt();
});
const nn = ee(function() {
  return qe(/AppleWebKit/i) && !on();
}), on = ee(function() {
  return qe(/Chrome/i);
}), Qt = ee(function() {
  return qe(/Android/i);
}), sn = ee(function() {
  return qe(/Firefox/i);
});
function fe(e, t, r = !0) {
  var n, o;
  let { metaKey: s, ctrlKey: l, altKey: d, shiftKey: c } = t;
  sn() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (Ee() ? s = !0 : l = !0);
  let u = nn() && Ee() && !Jt() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: s,
    ctrlKey: l,
    altKey: d,
    shiftKey: c
  }) : new MouseEvent("click", {
    metaKey: s,
    ctrlKey: l,
    altKey: d,
    shiftKey: c,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  fe.isOpening = r, we(e), e.dispatchEvent(u), fe.isOpening = !1;
}
fe.isOpening = !1;
let se = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Set();
function St() {
  if (typeof window > "u") return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target) return;
    let o = se.get(n.target);
    o || (o = /* @__PURE__ */ new Set(), se.set(n.target, o), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), o.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target) return;
    let o = se.get(n.target);
    if (o && (o.delete(n.propertyName), o.size === 0 && (n.target.removeEventListener("transitioncancel", r), se.delete(n.target)), se.size === 0)) {
      for (let s of ot) s();
      ot.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? St() : document.addEventListener("DOMContentLoaded", St));
function an() {
  for (const [e] of se)
    "isConnected" in e && !e.isConnected && se.delete(e);
}
function Zt(e) {
  requestAnimationFrame(() => {
    an(), se.size === 0 ? e() : ot.add(e);
  });
}
function vt() {
  let e = G(/* @__PURE__ */ new Map()), t = D((o, s, l, d) => {
    let c = d != null && d.once ? (...u) => {
      e.current.delete(l), l(...u);
    } : l;
    e.current.set(l, {
      type: s,
      eventTarget: o,
      fn: c,
      options: d
    }), o.addEventListener(s, c, d);
  }, []), r = D((o, s, l, d) => {
    var c;
    let u = ((c = e.current.get(l)) === null || c === void 0 ? void 0 : c.fn) || l;
    o.removeEventListener(s, u, d), e.current.delete(l);
  }, []), n = D(() => {
    e.current.forEach((o, s) => {
      r(o.eventTarget, o.type, s, o.options);
    });
  }, [
    r
  ]);
  return Z(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function ln(e) {
  const t = G(null), r = G(void 0), n = D((o) => {
    if (typeof e == "function") {
      const s = e, l = s(o);
      return () => {
        typeof l == "function" ? l() : s(null);
      };
    } else if (e)
      return e.current = o, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return Ie(() => ({
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
var Ze;
const cn = (Ze = _.useInsertionEffect) !== null && Ze !== void 0 ? Ze : $e;
function De(e) {
  const t = G(null);
  return cn(() => {
    t.current = e;
  }, [
    e
  ]), D((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function er(e, t) {
  $e(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function it(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Qt() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function dn(e) {
  return !Qt() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const un = typeof Element < "u" && "checkVisibility" in Element.prototype;
function fn(e) {
  const t = R(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: s } = e.ownerDocument.defaultView;
    let { display: l, visibility: d } = s(e);
    o = l !== "none" && d !== "hidden" && d !== "collapse";
  }
  return o;
}
function pn(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function tr(e, t) {
  return un ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && fn(e) && pn(e, t) && (!e.parentElement || tr(e.parentElement, e));
}
const rr = [
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
], bn = rr.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
rr.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function mn(e) {
  return e.matches(bn) && tr(e) && !gn(e);
}
function gn(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const vn = Symbol("default");
function hn(e) {
  let { className: t, style: r, children: n, defaultClassName: o, defaultChildren: s, defaultStyle: l, values: d } = e;
  return Ie(() => {
    let c, u, f;
    return typeof t == "function" ? c = t({
      ...d,
      defaultClassName: o
    }) : c = t, typeof r == "function" ? u = r({
      ...d,
      defaultStyle: l || {}
    }) : u = r, typeof n == "function" ? f = n({
      ...d,
      defaultChildren: s
    }) : n == null ? f = s : f = n, {
      className: c ?? o,
      style: u || l ? {
        ...l,
        ...u
      } : void 0,
      children: f ?? s,
      "data-rac": ""
    };
  }, [
    t,
    r,
    n,
    o,
    s,
    l,
    d
  ]);
}
function yn(e, t) {
  return (r) => t(typeof e == "function" ? e(r) : e, r);
}
function $n(e, t) {
  let r = be(e);
  if (t === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let n = t || vn;
    if (!r.slots[n]) {
      let o = new Intl.ListFormat().format(Object.keys(r.slots).map((l) => `"${l}"`)), s = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${s} Valid slot names are ${o}.`);
    }
    return r.slots[n];
  }
  return r;
}
function wn(e, t, r) {
  let n = $n(r, e.slot) || {}, { ref: o, ...s } = n, l = ln(Ie(() => Br(t, o), [
    t,
    o
  ])), d = le(s, e);
  return "style" in s && s.style && "style" in e && e.style && (typeof s.style == "function" || typeof e.style == "function" ? d.style = (c) => {
    let u = typeof s.style == "function" ? s.style(c) : s.style, f = {
      ...c.defaultStyle,
      ...u
    }, v = typeof e.style == "function" ? e.style({
      ...c,
      defaultStyle: f
    }) : e.style;
    return {
      ...f,
      ...v
    };
  } : d.style = {
    ...s.style,
    ...e.style
  }), [
    d,
    l
  ];
}
const nr = 7e3;
let Y = null;
function Ct(e, t = "assertive", r = nr) {
  Y ? Y.announce(e, t, r) : (Y = new En(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Y.announce(e, t, r) : setTimeout(() => {
    Y != null && Y.isAttached() && (Y == null || Y.announce(e, t, r));
  }, 100));
}
class En {
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
  announce(t, r = "assertive", n = nr) {
    var o, s;
    if (!this.node) return;
    let l = document.createElement("div");
    typeof t == "object" ? (l.setAttribute("role", "img"), l.setAttribute("aria-labelledby", t["aria-labelledby"])) : l.textContent = t, r === "assertive" ? (o = this.assertiveLog) === null || o === void 0 || o.appendChild(l) : (s = this.politeLog) === null || s === void 0 || s.appendChild(l), t !== "" && setTimeout(() => {
      l.remove();
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
function xn(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Pn(e, t, r) {
  xn(e, t), t.set(e, r);
}
function ht(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function or(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function ir(e) {
  let t = G({
    isFocused: !1,
    observer: null
  });
  return $e(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []), D((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let n = r.target, o = (s) => {
        if (t.current.isFocused = !1, n.disabled) {
          let l = ht(s);
          e == null || e(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      n.addEventListener("focusout", o, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && n.disabled) {
          var s;
          (s = t.current.observer) === null || s === void 0 || s.disconnect();
          let l = n === document.activeElement ? null : document.activeElement;
          n.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), n.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
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
let Ue = !1;
function Lt(e) {
  for (; e && !mn(e); ) e = e.parentElement;
  let t = R(e), r = t.document.activeElement;
  if (!r || r === e) return;
  Ue = !0;
  let n = !1, o = (f) => {
    (f.target === r || n) && f.stopImmediatePropagation();
  }, s = (f) => {
    (f.target === r || n) && (f.stopImmediatePropagation(), !e && !n && (n = !0, we(r), c()));
  }, l = (f) => {
    (f.target === e || n) && f.stopImmediatePropagation();
  }, d = (f) => {
    (f.target === e || n) && (f.stopImmediatePropagation(), n || (n = !0, we(r), c()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", s, !0), t.addEventListener("focusin", d, !0), t.addEventListener("focus", l, !0);
  let c = () => {
    cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", l, !0), Ue = !1, n = !1;
  }, u = requestAnimationFrame(c);
  return c;
}
let he = "default", st = "", We = /* @__PURE__ */ new WeakMap();
function Mt(e) {
  if (gt()) {
    if (he === "default") {
      const t = O(e);
      st = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    he = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    We.set(e, e.style[t]), e.style[t] = "none";
  }
}
function et(e) {
  if (gt()) {
    if (he !== "disabled") return;
    he = "restoring", setTimeout(() => {
      Zt(() => {
        if (he === "restoring") {
          const t = O(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = st || ""), st = "", he = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && We.has(e)) {
    let t = We.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), We.delete(e);
  }
}
const sr = _.createContext({
  register: () => {
  }
});
sr.displayName = "PressResponderContext";
function Tn(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function ar(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function kn(e, t) {
  var r = ar(e, t, "get");
  return Tn(e, r);
}
function Sn(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function At(e, t, r) {
  var n = ar(e, t, "set");
  return Sn(e, n, r), r;
}
function Cn(e) {
  let t = be(sr);
  if (t) {
    let { register: r, ...n } = t;
    e = le(n, e), r();
  }
  return er(t, e.ref), e;
}
var Ve = /* @__PURE__ */ new WeakMap();
class Ke {
  continuePropagation() {
    At(this, Ve, !1);
  }
  get shouldStopPropagation() {
    return kn(this, Ve);
  }
  constructor(t, r, n, o) {
    Pn(this, Ve, {
      writable: !0,
      value: void 0
    }), At(this, Ve, !0);
    var s;
    let l = (s = o == null ? void 0 : o.target) !== null && s !== void 0 ? s : n.currentTarget;
    const d = l == null ? void 0 : l.getBoundingClientRect();
    let c, u = 0, f, v = null;
    n.clientX != null && n.clientY != null && (f = n.clientX, v = n.clientY), d && (f != null && v != null ? (c = f - d.left, u = v - d.top) : (c = d.width / 2, u = d.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u;
  }
}
const It = Symbol("linkClicked"), Ft = "react-aria-pressable-style", Ot = "data-react-aria-pressable";
function Ln(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: s, onClick: l, isDisabled: d, isPressed: c, preventFocusOnPress: u, shouldCancelOnPointerExit: f, allowTextSelectionOnPress: v, ref: T, ...S } = Cn(e), [C, $] = ae(!1), w = G({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: k, removeAllGlobalListeners: I, removeGlobalListener: F } = vt(), V = D((i, g) => {
    let a = w.current;
    if (d || a.didFirePressStart) return !1;
    let p = !0;
    if (a.isTriggeringEvent = !0, n) {
      let y = new Ke("pressstart", g, i);
      n(y), p = y.shouldStopPropagation;
    }
    return r && r(!0), a.isTriggeringEvent = !1, a.didFirePressStart = !0, $(!0), p;
  }, [
    d,
    n,
    r
  ]), K = D((i, g, a = !0) => {
    let p = w.current;
    if (!p.didFirePressStart) return !1;
    p.didFirePressStart = !1, p.isTriggeringEvent = !0;
    let y = !0;
    if (o) {
      let P = new Ke("pressend", g, i);
      o(P), y = P.shouldStopPropagation;
    }
    if (r && r(!1), $(!1), t && a && !d) {
      let P = new Ke("press", g, i);
      t(P), y && (y = P.shouldStopPropagation);
    }
    return p.isTriggeringEvent = !1, y;
  }, [
    d,
    o,
    r,
    t
  ]), X = De(K), H = D((i, g) => {
    let a = w.current;
    if (d) return !1;
    if (s) {
      a.isTriggeringEvent = !0;
      let p = new Ke("pressup", g, i);
      return s(p), a.isTriggeringEvent = !1, p.shouldStopPropagation;
    }
    return !0;
  }, [
    d,
    s
  ]), E = De(H), z = D((i) => {
    let g = w.current;
    if (g.isPressed && g.target) {
      g.didFirePressStart && g.pointerType != null && K(de(g.target, i), g.pointerType, !1), g.isPressed = !1, h(null), g.isOverTarget = !1, g.activePointerId = null, g.pointerType = null, I(), v || et(g.target);
      for (let a of g.disposables) a();
      g.disposables = [];
    }
  }, [
    v,
    I,
    K
  ]), te = De(z), ce = D((i) => {
    f && z(i);
  }, [
    f,
    z
  ]), re = D((i) => {
    d || l == null || l(i);
  }, [
    d,
    l
  ]), me = D((i, g) => {
    if (!d && l) {
      let a = new MouseEvent("click", i);
      or(a, g), l(ht(a));
    }
  }, [
    d,
    l
  ]), ke = De(me), [q, W] = ae(!1);
  $e(() => {
    let i = w.current;
    if (q) {
      let g = (P) => {
        var B;
        if (i.isPressed && i.target && tt(P, i.target)) {
          var M;
          Vt(L(P), P.key) && P.preventDefault();
          let ne = L(P), J = A(i.target, L(P));
          X(de(i.target, P), "keyboard", J), J && ke(P, i.target), I(), P.key !== "Enter" && yt(i.target) && A(i.target, ne) && !P[It] && (P[It] = !0, fe(i.target, P, !1)), i.isPressed = !1, W(!1), (M = i.metaKeyEvents) === null || M === void 0 || M.delete(P.key);
        } else if (P.key === "Meta" && (!((B = i.metaKeyEvents) === null || B === void 0) && B.size)) {
          var ge;
          let ne = i.metaKeyEvents;
          i.metaKeyEvents = void 0;
          for (let J of ne.values()) (ge = i.target) === null || ge === void 0 || ge.dispatchEvent(new KeyboardEvent("keyup", J));
        }
      }, a = i.target, y = Xt((P) => {
        a && tt(P, a) && !P.repeat && A(a, L(P)) && i.target && E(de(i.target, P), "keyboard");
      }, g);
      return k(O(i.target), "keyup", y, !0), () => {
        F(O(i.target), "keyup", y, !0);
      };
    }
  }, [
    q,
    k,
    I,
    F
  ]);
  let [j, h] = ae(null);
  $e(() => {
    let i = w.current;
    if (j === "pointer") {
      let g = (p) => {
        if (p.pointerId === i.activePointerId && i.isPressed && p.button === 0 && i.target) {
          if (A(i.target, L(p)) && i.pointerType != null) {
            let y = !1, P = setTimeout(() => {
              i.isPressed && i.target instanceof HTMLElement && (y ? te(p) : (we(i.target), i.target.click()));
            }, 80);
            k(p.currentTarget, "click", () => y = !0, !0), i.disposables.push(() => clearTimeout(P));
          } else te(p);
          i.isOverTarget = !1;
        }
      }, a = (p) => {
        te(p);
      };
      return k(O(i.target), "pointerup", g, !1), k(O(i.target), "pointercancel", a, !1), () => {
        F(O(i.target), "pointerup", g, !1), F(O(i.target), "pointercancel", a, !1);
      };
    } else if (j === "mouse" && process.env.NODE_ENV === "test") {
      let g = (a) => {
        if (a.button === 0) {
          if (i.ignoreEmulatedMouseEvents) {
            i.ignoreEmulatedMouseEvents = !1;
            return;
          }
          i.target && i.target.contains(a.target) && i.pointerType != null || te(a), i.isOverTarget = !1;
        }
      };
      return k(O(i.target), "mouseup", g, !1), () => {
        F(O(i.target), "mouseup", g, !1);
      };
    } else if (j === "touch" && process.env.NODE_ENV === "test") {
      let g = (a) => {
        i.isPressed && A(L(a), i.target) && te({
          currentTarget: i.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      return k(R(i.target), "scroll", g, !0), () => {
        F(R(i.target), "scroll", g, !0);
      };
    }
  }, [
    j,
    k,
    F
  ]);
  let Fe = Ie(() => {
    let i = w.current, g = {
      onKeyDown(a) {
        if (tt(a.nativeEvent, a.currentTarget) && A(a.currentTarget, L(a.nativeEvent))) {
          var p;
          Vt(L(a.nativeEvent), a.key) && a.preventDefault();
          let y = !0;
          !i.isPressed && !a.repeat && (i.target = a.currentTarget, i.isPressed = !0, W(!0), i.pointerType = "keyboard", y = V(a, "keyboard")), y && a.stopPropagation(), a.metaKey && Ee() && ((p = i.metaKeyEvents) === null || p === void 0 || p.set(a.key, a.nativeEvent));
        } else a.key === "Meta" && (i.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(a) {
        if (!(a && !A(a.currentTarget, L(a.nativeEvent))) && a && a.button === 0 && !i.isTriggeringEvent && !fe.isOpening) {
          let p = !0;
          if (d && a.preventDefault(), !i.ignoreEmulatedMouseEvents && !i.isPressed && (i.pointerType === "virtual" || it(a.nativeEvent))) {
            let y = V(a, "virtual"), P = H(a, "virtual"), B = K(a, "virtual");
            re(a), p = y && P && B;
          } else if (i.isPressed && i.pointerType !== "keyboard") {
            let y = i.pointerType || a.nativeEvent.pointerType || "virtual", P = H(de(a.currentTarget, a), y), B = K(de(a.currentTarget, a), y, !0);
            p = P && B, i.isOverTarget = !1, re(a), z(a);
          }
          i.ignoreEmulatedMouseEvents = !1, p && a.stopPropagation();
        }
      }
    };
    return typeof PointerEvent < "u" ? (g.onPointerDown = (a) => {
      if (a.button !== 0 || !A(a.currentTarget, L(a.nativeEvent))) return;
      if (dn(a.nativeEvent)) {
        i.pointerType = "virtual";
        return;
      }
      i.pointerType = a.pointerType;
      let p = !0;
      if (!i.isPressed) {
        i.isPressed = !0, h("pointer"), i.isOverTarget = !0, i.activePointerId = a.pointerId, i.target = a.currentTarget, v || Mt(i.target), p = V(a, i.pointerType);
        let y = L(a.nativeEvent);
        "releasePointerCapture" in y && y.releasePointerCapture(a.pointerId);
      }
      p && a.stopPropagation();
    }, g.onMouseDown = (a) => {
      if (A(a.currentTarget, L(a.nativeEvent)) && a.button === 0) {
        if (u) {
          let p = Lt(a.target);
          p && i.disposables.push(p);
        }
        a.stopPropagation();
      }
    }, g.onPointerUp = (a) => {
      !A(a.currentTarget, L(a.nativeEvent)) || i.pointerType === "virtual" || a.button === 0 && !i.isPressed && H(a, i.pointerType || a.pointerType);
    }, g.onPointerEnter = (a) => {
      a.pointerId === i.activePointerId && i.target && !i.isOverTarget && i.pointerType != null && (i.isOverTarget = !0, V(de(i.target, a), i.pointerType));
    }, g.onPointerLeave = (a) => {
      a.pointerId === i.activePointerId && i.target && i.isOverTarget && i.pointerType != null && (i.isOverTarget = !1, K(de(i.target, a), i.pointerType, !1), ce(a));
    }, g.onDragStart = (a) => {
      A(a.currentTarget, L(a.nativeEvent)) && z(a);
    }) : process.env.NODE_ENV === "test" && (g.onMouseDown = (a) => {
      if (a.button !== 0 || !A(a.currentTarget, L(a.nativeEvent))) return;
      if (i.ignoreEmulatedMouseEvents) {
        a.stopPropagation();
        return;
      }
      if (i.isPressed = !0, h("mouse"), i.isOverTarget = !0, i.target = a.currentTarget, i.pointerType = it(a.nativeEvent) ? "virtual" : "mouse", Mr(() => V(a, i.pointerType)) && a.stopPropagation(), u) {
        let y = Lt(a.target);
        y && i.disposables.push(y);
      }
    }, g.onMouseEnter = (a) => {
      if (!A(a.currentTarget, L(a.nativeEvent))) return;
      let p = !0;
      i.isPressed && !i.ignoreEmulatedMouseEvents && i.pointerType != null && (i.isOverTarget = !0, p = V(a, i.pointerType)), p && a.stopPropagation();
    }, g.onMouseLeave = (a) => {
      if (!A(a.currentTarget, L(a.nativeEvent))) return;
      let p = !0;
      i.isPressed && !i.ignoreEmulatedMouseEvents && i.pointerType != null && (i.isOverTarget = !1, p = K(a, i.pointerType, !1), ce(a)), p && a.stopPropagation();
    }, g.onMouseUp = (a) => {
      A(a.currentTarget, L(a.nativeEvent)) && !i.ignoreEmulatedMouseEvents && a.button === 0 && !i.isPressed && H(a, i.pointerType || "mouse");
    }, g.onTouchStart = (a) => {
      if (!A(a.currentTarget, L(a.nativeEvent))) return;
      let p = Mn(a.nativeEvent);
      if (!p) return;
      i.activePointerId = p.identifier, i.ignoreEmulatedMouseEvents = !0, i.isOverTarget = !0, i.isPressed = !0, h("touch"), i.target = a.currentTarget, i.pointerType = "touch", v || Mt(i.target), V(oe(i.target, a), i.pointerType) && a.stopPropagation();
    }, g.onTouchMove = (a) => {
      if (!A(a.currentTarget, L(a.nativeEvent))) return;
      if (!i.isPressed) {
        a.stopPropagation();
        return;
      }
      let p = Nt(a.nativeEvent, i.activePointerId), y = !0;
      p && Dt(p, a.currentTarget) ? !i.isOverTarget && i.pointerType != null && (i.isOverTarget = !0, y = V(oe(i.target, a), i.pointerType)) : i.isOverTarget && i.pointerType != null && (i.isOverTarget = !1, y = K(oe(i.target, a), i.pointerType, !1), ce(oe(i.target, a))), y && a.stopPropagation();
    }, g.onTouchEnd = (a) => {
      if (!A(a.currentTarget, L(a.nativeEvent))) return;
      if (!i.isPressed) {
        a.stopPropagation();
        return;
      }
      let p = Nt(a.nativeEvent, i.activePointerId), y = !0;
      p && Dt(p, a.currentTarget) && i.pointerType != null ? (H(oe(i.target, a), i.pointerType), y = K(oe(i.target, a), i.pointerType), me(a.nativeEvent, i.target)) : i.isOverTarget && i.pointerType != null && (y = K(oe(i.target, a), i.pointerType, !1)), y && a.stopPropagation(), i.isPressed = !1, h(null), i.activePointerId = null, i.isOverTarget = !1, i.ignoreEmulatedMouseEvents = !0, i.target && !v && et(i.target), I();
    }, g.onTouchCancel = (a) => {
      A(a.currentTarget, L(a.nativeEvent)) && (a.stopPropagation(), i.isPressed && z(oe(i.target, a)));
    }, g.onDragStart = (a) => {
      A(a.currentTarget, L(a.nativeEvent)) && z(a);
    }), g;
  }, [
    d,
    u,
    I,
    v,
    z,
    ce,
    K,
    V,
    H,
    re,
    me
  ]);
  return Z(() => {
    if (!T || process.env.NODE_ENV === "test") return;
    const i = O(T.current);
    if (!i || !i.head || i.getElementById(Ft)) return;
    const g = i.createElement("style");
    g.id = Ft, g.textContent = `
@layer {
  [${Ot}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), i.head.prepend(g);
  }, [
    T
  ]), Z(() => {
    let i = w.current;
    return () => {
      var g;
      v || et((g = i.target) !== null && g !== void 0 ? g : void 0);
      for (let a of i.disposables) a();
      i.disposables = [];
    };
  }, [
    v
  ]), {
    isPressed: c || C,
    pressProps: le(S, Fe, {
      [Ot]: !0
    })
  };
}
function yt(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function tt(e, t) {
  const { key: r, code: n } = e, o = t, s = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof R(o).HTMLInputElement && !lr(o, r) || o instanceof R(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((s === "link" || !s && yt(o)) && r !== "Enter");
}
function Mn(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Nt(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function oe(e, t) {
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
function de(e, t) {
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
function An(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function In(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Dt(e, t) {
  let r = t.getBoundingClientRect(), n = An(e);
  return In(r, n);
}
function Fn(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !yt(e);
}
function Vt(e, t) {
  return e instanceof HTMLInputElement ? !lr(e, t) : Fn(e);
}
const On = /* @__PURE__ */ new Set([
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
function lr(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : On.has(e.type);
}
let xe = null, at = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), pe = !1, lt = !1;
const Nn = {
  Tab: !0,
  Escape: !0
};
function $t(e, t) {
  for (let r of at) r(e, t);
}
function Dn(e) {
  return !(e.metaKey || !Ee() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Be(e) {
  pe = !0, !fe.isOpening && Dn(e) && (xe = "keyboard", $t("keyboard", e));
}
function U(e) {
  xe = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (pe = !0, $t("pointer", e));
}
function cr(e) {
  !fe.isOpening && it(e) && (pe = !0, xe = "virtual");
}
function dr(e) {
  e.target === window || e.target === document || Ue || !e.isTrusted || (!pe && !lt && (xe = "virtual", $t("virtual", e)), pe = !1, lt = !1);
}
function ur() {
  Ue || (pe = !1, lt = !0);
}
function ct(e) {
  if (typeof window > "u" || typeof document > "u" || Me.get(R(e))) return;
  const t = R(e), r = O(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    pe = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Be, !0), r.addEventListener("keyup", Be, !0), r.addEventListener("click", cr, !0), t.addEventListener("focus", dr, !0), t.addEventListener("blur", ur, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", U, !0), r.addEventListener("pointermove", U, !0), r.addEventListener("pointerup", U, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", U, !0), r.addEventListener("mousemove", U, !0), r.addEventListener("mouseup", U, !0)), t.addEventListener("beforeunload", () => {
    fr(e);
  }, {
    once: !0
  }), Me.set(t, {
    focus: n
  });
}
const fr = (e, t) => {
  const r = R(e), n = O(e);
  t && n.removeEventListener("DOMContentLoaded", t), Me.has(r) && (r.HTMLElement.prototype.focus = Me.get(r).focus, n.removeEventListener("keydown", Be, !0), n.removeEventListener("keyup", Be, !0), n.removeEventListener("click", cr, !0), r.removeEventListener("focus", dr, !0), r.removeEventListener("blur", ur, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", U, !0), n.removeEventListener("pointermove", U, !0), n.removeEventListener("pointerup", U, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", U, !0), n.removeEventListener("mousemove", U, !0), n.removeEventListener("mouseup", U, !0)), Me.delete(r));
};
function Vn(e) {
  const t = O(e);
  let r;
  return t.readyState !== "loading" ? ct(e) : (r = () => {
    ct(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => fr(e, r);
}
typeof document < "u" && Vn();
function pr() {
  return xe !== "pointer";
}
function Kn() {
  return xe;
}
const zn = /* @__PURE__ */ new Set([
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
function Gn(e, t, r) {
  let n = O(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? R(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? R(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? R(r == null ? void 0 : r.target).HTMLElement : HTMLElement, d = typeof window < "u" ? R(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !zn.has(n.activeElement.type) || n.activeElement instanceof s || n.activeElement instanceof l && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof d && !Nn[r.key]);
}
function Hn(e, t, r) {
  ct(), Z(() => {
    let n = (o, s) => {
      Gn(!!(r != null && r.isTextInput), o, s) && e(pr());
    };
    return at.add(n), () => {
      at.delete(n);
    };
  }, t);
}
function Rn(e) {
  const t = O(e);
  if (Kn() === "virtual") {
    let r = Ae(t);
    Zt(() => {
      const n = Ae(t);
      (n === r || n === t.body) && e.isConnected && we(e);
    });
  } else we(e);
}
function br(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const s = D((c) => {
    if (c.target === c.currentTarget)
      return n && n(c), o && o(!1), !0;
  }, [
    n,
    o
  ]), l = ir(s), d = D((c) => {
    const u = O(c.target), f = u ? Ae(u) : Ae();
    c.target === c.currentTarget && f === L(c.nativeEvent) && (r && r(c), o && o(!0), l(c));
  }, [
    o,
    r,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || o || n) ? d : void 0,
      onBlur: !t && (n || o) ? s : void 0
    }
  };
}
function Kt(e) {
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
function _n(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Kt(e.onKeyDown),
      onKeyUp: Kt(e.onKeyUp)
    }
  };
}
let Wn = /* @__PURE__ */ _.createContext(null);
function jn(e) {
  let t = be(Wn) || {};
  er(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Un(e, t) {
  let { focusProps: r } = br(e), { keyboardProps: n } = _n(e), o = le(r, n), s = jn(t), l = e.isDisabled ? {} : s, d = G(e.autoFocus);
  Z(() => {
    d.current && t.current && Rn(t.current), d.current = !1;
  }, [
    t
  ]);
  let c = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (c = void 0), {
    focusableProps: le({
      ...o,
      tabIndex: c
    }, l)
  };
}
function Bn(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, s = G({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: d } = vt(), c = D((v) => {
    v.currentTarget.contains(v.target) && s.current.isFocusWithin && !v.currentTarget.contains(v.relatedTarget) && (s.current.isFocusWithin = !1, d(), r && r(v), o && o(!1));
  }, [
    r,
    o,
    s,
    d
  ]), u = ir(c), f = D((v) => {
    if (!v.currentTarget.contains(v.target)) return;
    const T = O(v.target), S = Ae(T);
    if (!s.current.isFocusWithin && S === L(v.nativeEvent)) {
      n && n(v), o && o(!0), s.current.isFocusWithin = !0, u(v);
      let C = v.currentTarget;
      l(T, "focus", ($) => {
        if (s.current.isFocusWithin && !A(C, $.target)) {
          let w = new T.defaultView.FocusEvent("blur", {
            relatedTarget: $.target
          });
          or(w, C);
          let k = ht(w);
          c(k);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    u,
    l,
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
let Ye = !1, ze = 0;
function dt() {
  Ye = !0, setTimeout(() => {
    Ye = !1;
  }, 50);
}
function zt(e) {
  e.pointerType === "touch" && dt();
}
function Yn() {
  if (!(typeof document > "u"))
    return ze === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", zt) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", dt)), ze++, () => {
      ze--, !(ze > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", zt) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", dt));
    };
}
function Xn(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [s, l] = ae(!1), d = G({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Z(Yn, []);
  let { addGlobalListener: c, removeAllGlobalListeners: u } = vt(), { hoverProps: f, triggerHoverEnd: v } = Ie(() => {
    let T = ($, w) => {
      if (d.pointerType = w, o || w === "touch" || d.isHovered || !$.currentTarget.contains($.target)) return;
      d.isHovered = !0;
      let k = $.currentTarget;
      d.target = k, c(O($.target), "pointerover", (I) => {
        d.isHovered && d.target && !A(d.target, I.target) && S(I, I.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: k,
        pointerType: w
      }), r && r(!0), l(!0);
    }, S = ($, w) => {
      let k = d.target;
      d.pointerType = "", d.target = null, !(w === "touch" || !d.isHovered || !k) && (d.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: k,
        pointerType: w
      }), r && r(!1), l(!1));
    }, C = {};
    return typeof PointerEvent < "u" ? (C.onPointerEnter = ($) => {
      Ye && $.pointerType === "mouse" || T($, $.pointerType);
    }, C.onPointerLeave = ($) => {
      !o && $.currentTarget.contains($.target) && S($, $.pointerType);
    }) : process.env.NODE_ENV === "test" && (C.onTouchStart = () => {
      d.ignoreEmulatedMouseEvents = !0;
    }, C.onMouseEnter = ($) => {
      !d.ignoreEmulatedMouseEvents && !Ye && T($, "mouse"), d.ignoreEmulatedMouseEvents = !1;
    }, C.onMouseLeave = ($) => {
      !o && $.currentTarget.contains($.target) && S($, "mouse");
    }), {
      hoverProps: C,
      triggerHoverEnd: S
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
  return Z(() => {
    o && v({
      currentTarget: d.target
    }, d.pointerType);
  }, [
    o
  ]), {
    hoverProps: f,
    isHovered: s
  };
}
function qn(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = G({
    isFocused: !1,
    isFocusVisible: t || pr()
  }), [s, l] = ae(!1), [d, c] = ae(() => o.current.isFocused && o.current.isFocusVisible), u = D(() => c(o.current.isFocused && o.current.isFocusVisible), []), f = D((S) => {
    o.current.isFocused = S, l(S), u();
  }, [
    u
  ]);
  Hn((S) => {
    o.current.isFocusVisible = S, u();
  }, [], {
    isTextInput: r
  });
  let { focusProps: v } = br({
    isDisabled: n,
    onFocusChange: f
  }), { focusWithinProps: T } = Bn({
    isDisabled: !n,
    onFocusWithinChange: f
  });
  return {
    isFocused: s,
    isFocusVisible: d,
    focusProps: n ? T : v
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
const Jn = /* @__PURE__ */ ft(!1);
function Qn(e) {
  let t = (r, n) => be(Jn) ? null : e(r, n);
  return t.displayName = e.displayName || e.name, Lr(t);
}
function Zn(e, t) {
  let { elementType: r = "button", isDisabled: n, onPress: o, onPressStart: s, onPressEnd: l, onPressUp: d, onPressChange: c, preventFocusOnPress: u, allowFocusWhenDisabled: f, onClick: v, href: T, target: S, rel: C, type: $ = "button" } = e, w;
  r === "button" ? w = {
    type: $,
    disabled: n,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : w = {
    role: "button",
    href: r === "a" && !n ? T : void 0,
    target: r === "a" ? S : void 0,
    type: r === "input" ? $ : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? C : void 0
  };
  let { pressProps: k, isPressed: I } = Ln({
    onPressStart: s,
    onPressEnd: l,
    onPressChange: c,
    onPress: o,
    onPressUp: d,
    onClick: v,
    isDisabled: n,
    preventFocusOnPress: u,
    ref: t
  }), { focusableProps: F } = Un(e, t);
  f && (F.tabIndex = n ? -1 : F.tabIndex);
  let V = le(F, k, qt(e, {
    labelable: !0
  }));
  return {
    isPressed: I,
    buttonProps: le(w, V, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
const eo = /* @__PURE__ */ ft(null), to = /* @__PURE__ */ ft({}), ro = /* @__PURE__ */ Qn(function(t, r) {
  [t, r] = wn(t, r, to);
  let n = t, { isPending: o } = n, { buttonProps: s, isPressed: l } = Zn(t, r);
  s = no(s, o);
  let { focusProps: d, isFocused: c, isFocusVisible: u } = qn(t), { hoverProps: f, isHovered: v } = Xn({
    ...t,
    isDisabled: t.isDisabled || o
  }), T = {
    isHovered: v,
    isPressed: (n.isPressed || l) && !o,
    isFocused: c,
    isFocusVisible: u,
    isDisabled: t.isDisabled || !1,
    isPending: o ?? !1
  }, S = hn({
    ...t,
    values: T,
    defaultClassName: "react-aria-Button"
  }), C = Pt(s.id), $ = Pt(), w = s["aria-labelledby"];
  o && (w ? w = `${w} ${$}` : s["aria-label"] && (w = `${C} ${$}`));
  let k = G(o);
  Z(() => {
    let F = {
      "aria-labelledby": w || C
    };
    (!k.current && c && o || k.current && c && !o) && Ct(F, "assertive"), k.current = o;
  }, [
    o,
    c,
    w,
    C
  ]);
  let I = qt(t, {
    global: !0
  });
  return delete I.onClick, /* @__PURE__ */ _.createElement("button", {
    ...le(I, S, s, d, f),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: s.type === "submit" && o ? "button" : s.type,
    id: C,
    ref: r,
    "aria-labelledby": w,
    slot: t.slot || void 0,
    "aria-disabled": o ? "true" : s["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": T.isPressed || void 0,
    "data-hovered": v || void 0,
    "data-focused": c || void 0,
    "data-pending": o || void 0,
    "data-focus-visible": u || void 0
  }, /* @__PURE__ */ _.createElement(eo.Provider, {
    value: {
      id: $
    }
  }, S.children));
});
function no(e, t) {
  if (t) {
    for (const r in e) r.startsWith("on") && !(r.includes("Focus") || r.includes("Blur")) && (e[r] = void 0);
    e.href = void 0, e.target = void 0;
  }
  return e;
}
const oo = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, io = (e, t) => ({
  classGroupId: e,
  validator: t
}), mr = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Xe = "-", Gt = [], so = "arbitrary..", ao = (e) => {
  const t = co(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return lo(l);
      const d = l.split(Xe), c = d[0] === "" && d.length > 1 ? 1 : 0;
      return gr(d, c, t);
    },
    getConflictingClassGroupIds: (l, d) => {
      if (d) {
        const c = n[l], u = r[l];
        return c ? u ? oo(u, c) : c : u || Gt;
      }
      return r[l] || Gt;
    }
  };
}, gr = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const o = e[t], s = r.nextPart.get(o);
  if (s) {
    const u = gr(e, t + 1, s);
    if (u) return u;
  }
  const l = r.validators;
  if (l === null)
    return;
  const d = t === 0 ? e.join(Xe) : e.slice(t).join(Xe), c = l.length;
  for (let u = 0; u < c; u++) {
    const f = l[u];
    if (f.validator(d))
      return f.classGroupId;
  }
}, lo = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? so + n : void 0;
})(), co = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return uo(r, t);
}, uo = (e, t) => {
  const r = mr();
  for (const n in e) {
    const o = e[n];
    wt(o, r, n, t);
  }
  return r;
}, wt = (e, t, r, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const l = e[s];
    fo(l, t, r, n);
  }
}, fo = (e, t, r, n) => {
  if (typeof e == "string") {
    po(e, t, r);
    return;
  }
  if (typeof e == "function") {
    bo(e, t, r, n);
    return;
  }
  mo(e, t, r, n);
}, po = (e, t, r) => {
  const n = e === "" ? t : vr(t, e);
  n.classGroupId = r;
}, bo = (e, t, r, n) => {
  if (go(e)) {
    wt(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(io(r, e));
}, mo = (e, t, r, n) => {
  const o = Object.entries(e), s = o.length;
  for (let l = 0; l < s; l++) {
    const [d, c] = o[l];
    wt(c, vr(t, d), r, n);
  }
}, vr = (e, t) => {
  let r = e;
  const n = t.split(Xe), o = n.length;
  for (let s = 0; s < o; s++) {
    const l = n[s];
    let d = r.nextPart.get(l);
    d || (d = mr(), r.nextPart.set(l, d)), r = d;
  }
  return r;
}, go = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, vo = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const o = (s, l) => {
    r[s] = l, t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let l = r[s];
      if (l !== void 0)
        return l;
      if ((l = n[s]) !== void 0)
        return o(s, l), l;
    },
    set(s, l) {
      s in r ? r[s] = l : o(s, l);
    }
  };
}, ut = "!", Ht = ":", ho = [], Rt = (e, t, r, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), yo = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let l = 0, d = 0, c = 0, u;
    const f = o.length;
    for (let $ = 0; $ < f; $++) {
      const w = o[$];
      if (l === 0 && d === 0) {
        if (w === Ht) {
          s.push(o.slice(c, $)), c = $ + 1;
          continue;
        }
        if (w === "/") {
          u = $;
          continue;
        }
      }
      w === "[" ? l++ : w === "]" ? l-- : w === "(" ? d++ : w === ")" && d--;
    }
    const v = s.length === 0 ? o : o.slice(c);
    let T = v, S = !1;
    v.endsWith(ut) ? (T = v.slice(0, -1), S = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      v.startsWith(ut) && (T = v.slice(1), S = !0)
    );
    const C = u && u > c ? u - c : void 0;
    return Rt(s, S, T, C);
  };
  if (t) {
    const o = t + Ht, s = n;
    n = (l) => l.startsWith(o) ? s(l.slice(o.length)) : Rt(ho, !1, l, void 0, !0);
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, $o = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let o = [];
    for (let s = 0; s < r.length; s++) {
      const l = r[s], d = l[0] === "[", c = t.has(l);
      d || c ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(l)) : o.push(l);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, wo = (e) => ({
  cache: vo(e.cacheSize),
  parseClassName: yo(e),
  sortModifiers: $o(e),
  ...ao(e)
}), Eo = /\s+/, xo = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, l = [], d = e.trim().split(Eo);
  let c = "";
  for (let u = d.length - 1; u >= 0; u -= 1) {
    const f = d[u], {
      isExternal: v,
      modifiers: T,
      hasImportantModifier: S,
      baseClassName: C,
      maybePostfixModifierPosition: $
    } = r(f);
    if (v) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let w = !!$, k = n(w ? C.substring(0, $) : C);
    if (!k) {
      if (!w) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (k = n(C), !k) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      w = !1;
    }
    const I = T.length === 0 ? "" : T.length === 1 ? T[0] : s(T).join(":"), F = S ? I + ut : I, V = F + k;
    if (l.indexOf(V) > -1)
      continue;
    l.push(V);
    const K = o(k, w);
    for (let X = 0; X < K.length; ++X) {
      const H = K[X];
      l.push(F + H);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Po = (...e) => {
  let t = 0, r, n, o = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = hr(r)) && (o && (o += " "), o += n);
  return o;
}, hr = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = hr(e[n])) && (r && (r += " "), r += t);
  return r;
}, _t = (e, ...t) => {
  let r, n, o, s;
  const l = (c) => {
    const u = t.reduce((f, v) => v(f), e());
    return r = wo(u), n = r.cache.get, o = r.cache.set, s = d, d(c);
  }, d = (c) => {
    const u = n(c);
    if (u)
      return u;
    const f = xo(c, r);
    return o(c, f), f;
  };
  return s = l, (...c) => s(Po(...c));
}, To = [], N = (e) => {
  const t = (r) => r[e] || To;
  return t.isThemeGetter = !0, t;
}, yr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $r = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ko = /^\d+\/\d+$/, So = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Co = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Lo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Mo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ao = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ve = (e) => ko.test(e), x = (e) => !!e && !Number.isNaN(Number(e)), ie = (e) => !!e && Number.isInteger(Number(e)), rt = (e) => e.endsWith("%") && x(e.slice(0, -1)), Q = (e) => So.test(e), Io = () => !0, Fo = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Co.test(e) && !Lo.test(e)
), wr = () => !1, Oo = (e) => Mo.test(e), No = (e) => Ao.test(e), Do = (e) => !b(e) && !m(e), Vo = (e) => Pe(e, Pr, wr), b = (e) => yr.test(e), ue = (e) => Pe(e, Tr, Fo), nt = (e) => Pe(e, Ro, x), Wt = (e) => Pe(e, Er, wr), Ko = (e) => Pe(e, xr, No), Ge = (e) => Pe(e, kr, Oo), m = (e) => $r.test(e), Se = (e) => Te(e, Tr), zo = (e) => Te(e, _o), jt = (e) => Te(e, Er), Go = (e) => Te(e, Pr), Ho = (e) => Te(e, xr), He = (e) => Te(e, kr, !0), Pe = (e, t, r) => {
  const n = yr.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Te = (e, t, r = !1) => {
  const n = $r.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Er = (e) => e === "position" || e === "percentage", xr = (e) => e === "image" || e === "url", Pr = (e) => e === "length" || e === "size" || e === "bg-size", Tr = (e) => e === "length", Ro = (e) => e === "number", _o = (e) => e === "family-name", kr = (e) => e === "shadow", Ut = () => {
  const e = N("color"), t = N("font"), r = N("text"), n = N("font-weight"), o = N("tracking"), s = N("leading"), l = N("breakpoint"), d = N("container"), c = N("spacing"), u = N("radius"), f = N("shadow"), v = N("inset-shadow"), T = N("text-shadow"), S = N("drop-shadow"), C = N("blur"), $ = N("perspective"), w = N("aspect"), k = N("ease"), I = N("animate"), F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], V = () => [
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
  ], K = () => [...V(), m, b], X = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", "contain", "none"], E = () => [m, b, c], z = () => [ve, "full", "auto", ...E()], te = () => [ie, "none", "subgrid", m, b], ce = () => ["auto", {
    span: ["full", ie, m, b]
  }, ie, m, b], re = () => [ie, "auto", m, b], me = () => ["auto", "min", "max", "fr", m, b], ke = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...E()], j = () => [ve, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], h = () => [e, m, b], Fe = () => [...V(), jt, Wt, {
    position: [m, b]
  }], i = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], g = () => ["auto", "cover", "contain", Go, Vo, {
    size: [m, b]
  }], a = () => [rt, Se, ue], p = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    m,
    b
  ], y = () => ["", x, Se, ue], P = () => ["solid", "dashed", "dotted", "double"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => [x, rt, jt, Wt], ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    C,
    m,
    b
  ], ne = () => ["none", x, m, b], J = () => ["none", x, m, b], Je = () => [x, m, b], Oe = () => [ve, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [Io],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [Do],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Q],
      shadow: [Q],
      spacing: ["px", x],
      text: [Q],
      "text-shadow": [Q],
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
        aspect: ["auto", "square", ve, b, m, w]
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
        columns: [x, b, m, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
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
        object: K()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: X()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": X()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": X()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: H()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": H()
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
        inset: z()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": z()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": z()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: z()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: z()
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
        z: [ie, "auto", m, b]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ve, "full", "auto", d, ...E()]
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
        flex: [x, ve, "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", x, m, b]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", x, m, b]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ie, "first", "last", "none", m, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": te()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ce()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": re()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": re()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": te()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ce()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": re()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": re()
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
        "auto-cols": me()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": me()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ke(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ke()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ke()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: W()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: W()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: W()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: W()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: W()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: W()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: W()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: W()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: W()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
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
        "space-y": E()
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
        size: j()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...j()]
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
          ...j()
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
            screen: [l]
          },
          ...j()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...j()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...j()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...j()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Se, ue]
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
        font: [n, m, nt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", rt, b]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zo, b, t]
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
        tracking: [o, m, b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [x, "none", m, nt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", m, b]
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
        list: ["disc", "decimal", "none", m, b]
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
        placeholder: h()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: h()
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
        decoration: [...P(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [x, "from-font", "auto", m, ue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: h()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [x, "auto", m, b]
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
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m, b]
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
        content: ["none", m, b]
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
        bg: Fe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: i()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: g()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ie, m, b],
          radial: ["", m, b],
          conic: [ie, m, b]
        }, Ho, Ko]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: h()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: a()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: a()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: a()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: h()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: h()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: h()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: p()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": p()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": p()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": p()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": p()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": p()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": p()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": p()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": p()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": p()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": p()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": p()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": p()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": p()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": p()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": y()
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
        "divide-y": y()
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
        border: [...P(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...P(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: h()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": h()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": h()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": h()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": h()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": h()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": h()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": h()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": h()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: h()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...P(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [x, m, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", x, Se, ue]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: h()
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
          He,
          Ge
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: h()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, He, Ge]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": h()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: y()
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
        ring: h()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [x, ue]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": h()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": y()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": h()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", T, He, Ge]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": h()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x, m, b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...B(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "mask-linear": [x]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": M()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": h()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": h()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": M()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": h()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": h()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": M()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": h()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": h()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": M()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": h()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": h()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": M()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": h()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": h()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": M()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": h()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": h()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": M()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": h()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": h()
      }],
      "mask-image-radial": [{
        "mask-radial": [m, b]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": h()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": h()
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
        "mask-radial-at": V()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [x]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": M()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": h()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": h()
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
        mask: Fe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: i()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: g()
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
        mask: ["none", m, b]
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
          m,
          b
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ge()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [x, m, b]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [x, m, b]
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
          S,
          He,
          Ge
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": h()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", x, m, b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [x, m, b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", x, m, b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x, m, b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", x, m, b]
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
          m,
          b
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ge()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [x, m, b]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [x, m, b]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", x, m, b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [x, m, b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", x, m, b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x, m, b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x, m, b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", x, m, b]
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
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", m, b]
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
        duration: [x, "initial", m, b]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", k, m, b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [x, m, b]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", I, m, b]
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
        perspective: [$, m, b]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": K()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
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
        skew: Je()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Je()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Je()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [m, b, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: K()
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
        translate: Oe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Oe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Oe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Oe()
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
        accent: h()
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
        caret: h()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m, b]
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
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
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
        "will-change": ["auto", "scroll", "contents", "transform", m, b]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...h()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [x, Se, ue, nt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...h()]
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
}, Wo = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: s = {}
}) => (Le(e, "cacheSize", t), Le(e, "prefix", r), Le(e, "experimentalParseClassName", n), Re(e.theme, s.theme), Re(e.classGroups, s.classGroups), Re(e.conflictingClassGroups, s.conflictingClassGroups), Re(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), Le(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), _e(e.theme, o.theme), _e(e.classGroups, o.classGroups), _e(e.conflictingClassGroups, o.conflictingClassGroups), _e(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Sr(e, o, "orderSensitiveModifiers"), e), Le = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, Re = (e, t) => {
  if (t)
    for (const r in t)
      Le(e, r, t[r]);
}, _e = (e, t) => {
  if (t)
    for (const r in t)
      Sr(e, t, r);
}, Sr = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, jo = (e, ...t) => typeof e == "function" ? _t(Ut, e, ...t) : _t(() => Wo(Ut(), e), ...t), Uo = jo({
  prefix: "nm-"
});
function Bo(...e) {
  return Uo(pt(e));
}
const Yo = Ar(
  [
    "nm-inline-flex nm-items-center nm-justify-center nm-whitespace-nowrap nm-rounded-md nm-text-sm nm-font-medium nm-ring-offset-background nm-transition-colors",
    /* Disabled */
    "data-[disabled]:nm-pointer-events-none data-[disabled]:nm-opacity-50 ",
    /* Focus Visible */
    "data-[focus-visible]:nm-outline-none data-[focus-visible]:nm-ring-2 data-[focus-visible]:nm-ring-ring data-[focus-visible]:nm-ring-offset-2",
    /* Resets */
    "focus-visible:nm-outline-none"
  ],
  {
    variants: {
      variant: {
        default: "nm-bg-primary nm-text-primary-foreground data-[hovered]:nm-bg-primary/90",
        destructive: "nm-bg-destructive nm-text-destructive-foreground data-[hovered]:nm-bg-destructive/90",
        outline: "nm-border nm-border-input nm-bg-background data-[hovered]:nm-bg-accent data-[hovered]:nm-text-accent-foreground",
        secondary: "nm-bg-secondary nm-text-secondary-foreground data-[hovered]:nm-bg-secondary/80",
        ghost: "data-[hovered]:nm-bg-accent data-[hovered]:nm-text-accent-foreground",
        link: "nm-text-primary nm-underline-offset-4 data-[hovered]:nm-underline"
      },
      size: {
        default: "nm-h-10 nm-px-4 nm-py-2",
        sm: "nm-h-9 nm-rounded-md nm-px-3",
        lg: "nm-h-11 nm-rounded-md nm-px-8",
        icon: "nm-size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Qo = ({ className: e, variant: t, size: r, ...n }) => /* @__PURE__ */ Cr(
  ro,
  {
    className: yn(
      e,
      (o) => Bo(
        Yo({
          variant: t,
          size: r,
          className: o
        })
      )
    ),
    ...n
  }
);
export {
  Qo as default
};
//# sourceMappingURL=index.es.js.map
