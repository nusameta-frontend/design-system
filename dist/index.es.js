"use client";
import { jsx as le, jsxs as Vn, Fragment as Fi } from "react/jsx-runtime";
import * as Di from "react";
import C, { createContext as j, useState as G, useRef as O, useCallback as H, useContext as oe, useEffect as U, useMemo as se, useReducer as Oi, forwardRef as xe, createElement as tr } from "react";
import Ai, { flushSync as Hn } from "react-dom";
function zn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = zn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function xr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = zn(e)) && (n && (n += " "), n += t);
  return n;
}
const jr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, qr = xr, wr = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return qr(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((d) => {
    const c = r == null ? void 0 : r[d], f = i == null ? void 0 : i[d];
    if (c === null) return null;
    const b = jr(c) || jr(f);
    return o[d][b];
  }), l = r && Object.entries(r).reduce((d, c) => {
    let [f, b] = c;
    return b === void 0 || (d[f] = b), d;
  }, {}), s = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, c) => {
    let { class: f, className: b, ...g } = c;
    return Object.entries(g).every((p) => {
      let [m, h] = p;
      return Array.isArray(h) ? h.includes({
        ...i,
        ...l
      }[m]) : {
        ...i,
        ...l
      }[m] === h;
    }) ? [
      ...d,
      f,
      b
    ] : d;
  }, []);
  return qr(e, a, s, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, _i = j(null);
j(null);
j(null);
j(null);
j(null);
const Vi = j({});
j(null);
const Hi = j(null), W = typeof document < "u" ? C.useLayoutEffect : () => {
};
function zi(e) {
  let [t, r] = G(e), n = O(t), o = O(null), i = O(() => {
    if (!o.current) return;
    let l = o.current.next();
    if (l.done) {
      o.current = null;
      return;
    }
    n.current === l.value ? i.current() : r(l.value);
  });
  W(() => {
    n.current = t, o.current && i.current();
  });
  let a = H((l) => {
    o.current = l(n.current), i.current();
  }, [
    i
  ]);
  return [
    t,
    a
  ];
}
const St = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Kn = /* @__PURE__ */ C.createContext(St), Ki = /* @__PURE__ */ C.createContext(!1);
let Bi = !!(typeof window < "u" && window.document && window.document.createElement), Kt = /* @__PURE__ */ new WeakMap();
function Gi(e = !1) {
  let t = oe(Kn), r = O(null);
  if (r.current === null && !e) {
    var n, o;
    let i = (o = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (i) {
      let a = Kt.get(i);
      a == null ? Kt.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== a.state && (t.current = a.id, Kt.delete(i));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function Wi(e) {
  let t = oe(Kn);
  t === St && !Bi && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = Gi(!!e), n = t === St && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function Ui(e) {
  let t = C.useId(), [r] = G(Pr()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${St.prefix}`;
  return e || `${n}-${t}`;
}
const ji = typeof C.useId == "function" ? Ui : Wi;
function qi() {
  return !1;
}
function Yi() {
  return !0;
}
function Xi(e) {
  return () => {
  };
}
function Pr() {
  return typeof C.useSyncExternalStore == "function" ? C.useSyncExternalStore(Xi, qi, Yi) : oe(Ki);
}
let Zi = !!(typeof window < "u" && window.document && window.document.createElement), qe = /* @__PURE__ */ new Map(), tt;
typeof FinalizationRegistry < "u" && (tt = new FinalizationRegistry((e) => {
  qe.delete(e);
}));
function Oe(e) {
  let [t, r] = G(e), n = O(null), o = ji(t), i = O(null);
  if (tt && tt.register(i, o), Zi) {
    const a = qe.get(o);
    a && !a.includes(n) ? a.push(n) : qe.set(o, [
      n
    ]);
  }
  return W(() => {
    let a = o;
    return () => {
      tt && tt.unregister(i), qe.delete(a);
    };
  }, [
    o
  ]), U(() => {
    let a = n.current;
    return a && r(a), () => {
      a && (n.current = null);
    };
  }), o;
}
function Ji(e, t) {
  if (e === t) return e;
  let r = qe.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = qe.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function rr(e = []) {
  let t = Oe(), [r, n] = zi(t), o = H(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return W(o, [
    t,
    o,
    ...e
  ]), r;
}
function Dt(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const V = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, ue = (e) => e && "window" in e && e.window === e ? e : V(e).defaultView || window;
function Qi(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function ea(e) {
  return Qi(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let ta = !1;
function Ot() {
  return ta;
}
function Z(e, t) {
  if (!Ot()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : ea(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const fe = (e = document) => {
  var t;
  if (!Ot()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function z(e) {
  return Ot() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class ra {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!Z(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const r = [];
    let n = t, o = t;
    for (this._currentNode = t; n && n !== this.root; ) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const a = n, l = this._doc.createTreeWalker(a, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      r.push(l), l.currentNode = o, this._currentSetFor.add(l), n = o = a.host;
    } else n = n.parentNode;
    const i = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    r.push(i), i.currentNode = o, this._currentSetFor.add(i), this._walkerStack = r;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let t = this.currentNode, r = this.nextNode();
    return Z(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
  }
  lastChild() {
    let r = this._walkerStack[0].lastChild();
    return r && (this.currentNode = r), r;
  }
  nextNode() {
    const t = this._walkerStack[0].nextNode();
    if (t) {
      if (t.shadowRoot) {
        var r;
        let o;
        if (typeof this.filter == "function" ? o = this.filter(t) : !((r = this.filter) === null || r === void 0) && r.acceptNode && (o = this.filter.acceptNode(t)), o === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = t, t;
        let i = this.nextNode();
        return i && (this.currentNode = i), i;
      }
      return t && (this.currentNode = t), t;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let n = this.nextNode();
      return n && (this.currentNode = n), n;
    } else return null;
  }
  previousNode() {
    const t = this._walkerStack[0];
    if (t.currentNode === t.root) {
      if (this._currentSetFor.has(t))
        if (this._currentSetFor.delete(t), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let o = this.previousNode();
          return o && (this.currentNode = o), o;
        } else return null;
      return null;
    }
    const r = t.previousNode();
    if (r) {
      if (r.shadowRoot) {
        var n;
        let i;
        if (typeof this.filter == "function" ? i = this.filter(r) : !((n = this.filter) === null || n === void 0) && n.acceptNode && (i = this.filter.acceptNode(r)), i === NodeFilter.FILTER_ACCEPT)
          return r && (this.currentNode = r), r;
        let a = this.lastChild();
        return a && (this.currentNode = a), a;
      }
      return r && (this.currentNode = r), r;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let o = this.previousNode();
      return o && (this.currentNode = o), o;
    } else return null;
  }
  /**
   * @deprecated
   */
  nextSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  previousSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  parentNode() {
    return null;
  }
  constructor(t, r, n, o) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (a) => {
      if (a.nodeType === Node.ELEMENT_NODE) {
        const s = a.shadowRoot;
        if (s) {
          const d = this._doc.createTreeWalker(s, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(d), NodeFilter.FILTER_ACCEPT;
        } else {
          var l;
          if (typeof this.filter == "function") return this.filter(a);
          if (!((l = this.filter) === null || l === void 0) && l.acceptNode) return this.filter.acceptNode(a);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = t, this.root = r, this.filter = o ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = r, this._walkerStack.unshift(t.createTreeWalker(r, n, this._acceptNode));
    const i = r.shadowRoot;
    if (i) {
      const a = this._doc.createTreeWalker(i, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(a);
    }
  }
}
function na(e, t, r, n) {
  return Ot() ? new ra(e, t, r, n) : e.createTreeWalker(t, r, n);
}
function J(...e) {
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
      90 ? t[o] = Dt(i, a) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof a == "string" ? t[o] = xr(i, a) : o === "id" && i && a ? t.id = Ji(i, a) : t[o] = a !== void 0 ? a : i;
    }
  }
  return t;
}
function Bn(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = Yr(o, t);
      return r || (r = typeof i == "function"), i;
    });
    if (r) return () => {
      n.forEach((o, i) => {
        typeof o == "function" ? o() : Yr(e[i], null);
      });
    };
  };
}
function Yr(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const oa = /* @__PURE__ */ new Set([
  "id"
]), ia = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), aa = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), la = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), Xr = /* @__PURE__ */ new Set([
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
]), sa = /^(data-.*)$/;
function Te(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: i = o, propNames: a } = t, l = {};
  for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (oa.has(s) || r && ia.has(s) || n && aa.has(s) || o && la.has(s) || i && (Xr.has(s) || s.endsWith("Capture") && Xr.has(s.slice(0, -7))) || a != null && a.has(s) || sa.test(s)) && (l[s] = e[s]);
  return l;
}
function Ye(e) {
  if (da()) e.focus({
    preventScroll: !0
  });
  else {
    let t = ca(e);
    e.focus(), ua(t);
  }
}
let bt = null;
function da() {
  if (bt == null) {
    bt = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return bt = !0, !0;
        }
      });
    } catch {
    }
  }
  return bt;
}
function ca(e) {
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
function ua(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function At(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function Tr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ce(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Xe = Ce(function() {
  return Tr(/^Mac/i);
}), fa = Ce(function() {
  return Tr(/^iPhone/i);
}), Gn = Ce(function() {
  return Tr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Xe() && navigator.maxTouchPoints > 1;
}), _t = Ce(function() {
  return fa() || Gn();
});
Ce(function() {
  return Xe() || _t();
});
const Wn = Ce(function() {
  return At(/AppleWebKit/i) && !Un();
}), Un = Ce(function() {
  return At(/Chrome/i);
}), Sr = Ce(function() {
  return At(/Android/i);
}), va = Ce(function() {
  return At(/Firefox/i);
});
function ze(e, t, r = !0) {
  var n, o;
  let { metaKey: i, ctrlKey: a, altKey: l, shiftKey: s } = t;
  va() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (Xe() ? i = !0 : a = !0);
  let d = Wn() && Xe() && !Gn() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: a,
    altKey: l,
    shiftKey: s
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: a,
    altKey: l,
    shiftKey: s,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  ze.isOpening = r, Ye(e), e.dispatchEvent(d), ze.isOpening = !1;
}
ze.isOpening = !1;
let Re = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Set();
function Zr() {
  if (typeof window > "u") return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target) return;
    let o = Re.get(n.target);
    o || (o = /* @__PURE__ */ new Set(), Re.set(n.target, o), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), o.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target) return;
    let o = Re.get(n.target);
    if (o && (o.delete(n.propertyName), o.size === 0 && (n.target.removeEventListener("transitioncancel", r), Re.delete(n.target)), Re.size === 0)) {
      for (let i of nr) i();
      nr.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Zr() : document.addEventListener("DOMContentLoaded", Zr));
function ba() {
  for (const [e] of Re)
    "isConnected" in e && !e.isConnected && Re.delete(e);
}
function jn(e) {
  requestAnimationFrame(() => {
    ba(), Re.size === 0 ? e() : nr.add(e);
  });
}
function kr() {
  let e = O(/* @__PURE__ */ new Map()), t = H((o, i, a, l) => {
    let s = l != null && l.once ? (...d) => {
      e.current.delete(a), a(...d);
    } : a;
    e.current.set(a, {
      type: i,
      eventTarget: o,
      fn: s,
      options: l
    }), o.addEventListener(i, s, l);
  }, []), r = H((o, i, a, l) => {
    var s;
    let d = ((s = e.current.get(a)) === null || s === void 0 ? void 0 : s.fn) || a;
    o.removeEventListener(i, d, l), e.current.delete(a);
  }, []), n = H(() => {
    e.current.forEach((o, i) => {
      r(o.eventTarget, o.type, i, o.options);
    });
  }, [
    r
  ]);
  return U(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function qn(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = Oe(r), o && n ? o = [
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
function Cr(e) {
  const t = O(null), r = O(void 0), n = H((o) => {
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
  return se(() => ({
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
var Bt;
const pa = (Bt = C.useInsertionEffect) !== null && Bt !== void 0 ? Bt : W;
function ye(e) {
  const t = O(null);
  return pa(() => {
    t.current = e;
  }, [
    e
  ]), H((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function ma() {
  return typeof window.ResizeObserver < "u";
}
function or(e) {
  const { ref: t, box: r, onResize: n } = e;
  let o = ye(n);
  U(() => {
    let i = t == null ? void 0 : t.current;
    if (i)
      if (ma()) {
        const a = new window.ResizeObserver((l) => {
          l.length && o();
        });
        return a.observe(i, {
          box: r
        }), () => {
          i && a.unobserve(i);
        };
      } else
        return window.addEventListener("resize", o, !1), () => {
          window.removeEventListener("resize", o, !1);
        };
  }, [
    t,
    r
  ]);
}
function Lr(e, t) {
  W(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function ir(e, t) {
  if (!e) return !1;
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
function Yn(e, t) {
  let r = e;
  for (ir(r, t) && (r = r.parentElement); r && !ir(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
const ga = /* @__PURE__ */ new Set([
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
function Gt(e) {
  return e instanceof HTMLInputElement && !ga.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function ar(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Sr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ha(e) {
  return !Sr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function Xn(e, t, r) {
  let n = ye(() => {
    r && r(t);
  });
  U(() => {
    var o;
    let i = e == null || (o = e.current) === null || o === void 0 ? void 0 : o.form;
    return i == null || i.addEventListener("reset", n), () => {
      i == null || i.removeEventListener("reset", n);
    };
  }, [
    e
  ]);
}
function $a(e, t = !0) {
  let [r, n] = G(!0), o = r && t;
  return W(() => {
    if (o && e.current && "getAnimations" in e.current)
      for (let i of e.current.getAnimations()) i instanceof CSSTransition && i.cancel();
  }, [
    e,
    o
  ]), Zn(e, o, H(() => n(!1), [])), o;
}
function ya(e, t) {
  let [r, n] = G(t ? "open" : "closed");
  switch (r) {
    case "open":
      t || n("exiting");
      break;
    case "closed":
    case "exiting":
      t && n("open");
      break;
  }
  let o = r === "exiting";
  return Zn(e, o, H(() => {
    n((i) => i === "exiting" ? "closed" : i);
  }, [])), o;
}
function Zn(e, t, r) {
  W(() => {
    if (t && e.current) {
      if (!("getAnimations" in e.current)) {
        r();
        return;
      }
      let n = e.current.getAnimations();
      if (n.length === 0) {
        r();
        return;
      }
      let o = !1;
      return Promise.all(n.map((i) => i.finished)).then(() => {
        o || Hn(() => {
          r();
        });
      }).catch(() => {
      }), () => {
        o = !0;
      };
    }
  }, [
    e,
    t,
    r
  ]);
}
const Ea = typeof Element < "u" && "checkVisibility" in Element.prototype;
function xa(e) {
  const t = ue(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: a, visibility: l } = i(e);
    o = a !== "none" && l !== "hidden" && l !== "collapse";
  }
  return o;
}
function wa(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Nr(e, t) {
  return Ea ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && xa(e) && wa(e, t) && (!e.parentElement || Nr(e.parentElement, e));
}
const Ir = [
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
], Pa = Ir.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ir.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Ta = Ir.join(':not([hidden]):not([tabindex="-1"]),');
function Jn(e) {
  return e.matches(Pa) && Nr(e) && !Qn(e);
}
function Sa(e) {
  return e.matches(Ta) && Nr(e) && !Qn(e);
}
function Qn(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
var Wt;
const ka = typeof document < "u" ? (Wt = C.useInsertionEffect) !== null && Wt !== void 0 ? Wt : C.useLayoutEffect : () => {
};
function Mr(e, t, r) {
  let [n, o] = G(e || t), i = O(n), a = O(e !== void 0), l = e !== void 0;
  U(() => {
    let f = a.current;
    f !== l && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), a.current = l;
  }, [
    l
  ]);
  let s = l ? e : n;
  ka(() => {
    i.current = s;
  });
  let [, d] = Oi(() => ({}), {}), c = H((f, ...b) => {
    let g = typeof f == "function" ? f(i.current) : f;
    Object.is(i.current, g) || (i.current = g, o(g), d(), r == null || r(g, ...b));
  }, [
    r
  ]);
  return [
    s,
    c
  ];
}
function lr(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
const sr = Symbol("default");
function Rr({ values: e, children: t }) {
  for (let [r, n] of e)
    t = /* @__PURE__ */ C.createElement(r.Provider, {
      value: n
    }, t);
  return t;
}
function Le(e) {
  let { className: t, style: r, children: n, defaultClassName: o, defaultChildren: i, defaultStyle: a, values: l } = e;
  return se(() => {
    let s, d, c;
    return typeof t == "function" ? s = t({
      ...l,
      defaultClassName: o
    }) : s = t, typeof r == "function" ? d = r({
      ...l,
      defaultStyle: a || {}
    }) : d = r, typeof n == "function" ? c = n({
      ...l,
      defaultChildren: i
    }) : n == null ? c = i : c = n, {
      className: s ?? o,
      style: d || a ? {
        ...a,
        ...d
      } : void 0,
      children: c ?? i,
      "data-rac": ""
    };
  }, [
    t,
    r,
    n,
    o,
    i,
    a,
    l
  ]);
}
function Ae(e, t) {
  return (r) => t(typeof e == "function" ? e(r) : e, r);
}
function Fr(e, t) {
  let r = oe(e);
  if (t === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let n = t || sr;
    if (!r.slots[n]) {
      let o = new Intl.ListFormat().format(Object.keys(r.slots).map((a) => `"${a}"`)), i = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${i} Valid slot names are ${o}.`);
    }
    return r.slots[n];
  }
  return r;
}
function Ee(e, t, r) {
  let n = Fr(r, e.slot) || {}, { ref: o, ...i } = n, a = Cr(se(() => Bn(t, o), [
    t,
    o
  ])), l = J(i, e);
  return "style" in i && i.style && "style" in e && e.style && (typeof i.style == "function" || typeof e.style == "function" ? l.style = (s) => {
    let d = typeof i.style == "function" ? i.style(s) : i.style, c = {
      ...s.defaultStyle,
      ...d
    }, f = typeof e.style == "function" ? e.style({
      ...s,
      defaultStyle: c
    }) : e.style;
    return {
      ...c,
      ...f
    };
  } : l.style = {
    ...i.style,
    ...e.style
  }), [
    l,
    a
  ];
}
function Ca(e = !0) {
  let [t, r] = G(e), n = O(!1), o = H((i) => {
    n.current = !0, r(!!i);
  }, []);
  return W(() => {
    n.current || r(!1);
  }, []), [
    o,
    t
  ];
}
function dr(e) {
  const t = /^(data-.*)$/;
  let r = {};
  for (const n in e) t.test(n) || (r[n] = e[n]);
  return r;
}
const eo = 7e3;
let we = null;
function Jr(e, t = "assertive", r = eo) {
  we ? we.announce(e, t, r) : (we = new La(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? we.announce(e, t, r) : setTimeout(() => {
    we != null && we.isAttached() && (we == null || we.announce(e, t, r));
  }, 100));
}
class La {
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
  announce(t, r = "assertive", n = eo) {
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
const pe = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, kt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Na = {
  top: "left",
  left: "top"
}, cr = {
  top: "height",
  left: "width"
}, to = {
  width: "totalWidth",
  height: "totalHeight"
}, pt = {};
let Ia = () => typeof document < "u" ? window.visualViewport : null;
function Qr(e, t) {
  let r = 0, n = 0, o = 0, i = 0, a = 0, l = 0, s = {};
  var d;
  let c = ((d = t == null ? void 0 : t.scale) !== null && d !== void 0 ? d : 1) > 1;
  if (e.tagName === "BODY" || e.tagName === "HTML") {
    let m = document.documentElement;
    o = m.clientWidth, i = m.clientHeight;
    var f;
    r = (f = t == null ? void 0 : t.width) !== null && f !== void 0 ? f : o;
    var b;
    n = (b = t == null ? void 0 : t.height) !== null && b !== void 0 ? b : i, s.top = m.scrollTop || e.scrollTop, s.left = m.scrollLeft || e.scrollLeft, t && (a = t.offsetTop, l = t.offsetLeft);
  } else
    ({ width: r, height: n, top: a, left: l } = lt(e, !1)), s.top = e.scrollTop, s.left = e.scrollLeft, o = r, i = n;
  if (Wn() && (e.tagName === "BODY" || e.tagName === "HTML") && c) {
    s.top = 0, s.left = 0;
    var g;
    a = (g = t == null ? void 0 : t.pageTop) !== null && g !== void 0 ? g : 0;
    var p;
    l = (p = t == null ? void 0 : t.pageLeft) !== null && p !== void 0 ? p : 0;
  }
  return {
    width: r,
    height: n,
    totalWidth: o,
    totalHeight: i,
    scroll: s,
    top: a,
    left: l
  };
}
function Ma(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function en(e, t, r, n, o, i, a) {
  var l;
  let s = (l = o.scroll[e]) !== null && l !== void 0 ? l : 0, d = n[cr[e]], c = a[e] + n.scroll[pe[e]] + i, f = a[e] + n.scroll[pe[e]] + d - i, b = t - s + n.scroll[pe[e]] + a[e] - n[pe[e]], g = t - s + r + n.scroll[pe[e]] + a[e] - n[pe[e]];
  return b < c ? c - b : g > f ? Math.max(f - g, c - b) : 0;
}
function Ra(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function tn(e) {
  if (pt[e]) return pt[e];
  let [t, r] = e.split(" "), n = pe[t] || "right", o = Na[n];
  pe[r] || (r = "center");
  let i = cr[n], a = cr[o];
  return pt[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: i,
    crossSize: a
  }, pt[e];
}
function Ut(e, t, r, n, o, i, a, l, s, d, c) {
  let { placement: f, crossPlacement: b, axis: g, crossAxis: p, size: m, crossSize: h } = n, $ = {};
  var y;
  $[p] = (y = e[p]) !== null && y !== void 0 ? y : 0;
  var w, x, I, M;
  b === "center" ? $[p] += (((w = e[h]) !== null && w !== void 0 ? w : 0) - ((x = r[h]) !== null && x !== void 0 ? x : 0)) / 2 : b !== p && ($[p] += ((I = e[h]) !== null && I !== void 0 ? I : 0) - ((M = r[h]) !== null && M !== void 0 ? M : 0)), $[p] += i;
  const R = e[p] - r[h] + s + d, E = e[p] + e[h] - s - d;
  if ($[p] = lr($[p], R, E), f === g) {
    let F = l ? c[m] : c[to[m]];
    $[kt[g]] = Math.floor(F - e[g] + o);
  } else $[g] = Math.floor(e[g] + e[m] + o);
  return $;
}
function Fa(e, t, r, n, o, i, a, l, s, d, c) {
  var f, b;
  let g = (e.top != null ? e.top : s[to.height] - ((f = e.bottom) !== null && f !== void 0 ? f : 0) - a) - ((b = s.scroll.top) !== null && b !== void 0 ? b : 0), p = d ? r.top : 0;
  var m, h, $;
  let y = {
    // This should be boundary top in container coord system vs viewport top in container coord system
    // For the viewport top, there are several cases
    // 1. pinchzoom case where we want the viewports offset top as top here
    // 2. case where container is offset from the boundary and is contained by the boundary. In this case the top we want here is NOT 0, we want to take boundary's top even though is is a negative number OR the visual viewport, whichever is more restrictive
    top: Math.max(t.top + p, ((m = c == null ? void 0 : c.offsetTop) !== null && m !== void 0 ? m : t.top) + p),
    bottom: Math.min(t.top + t.height + p, ((h = c == null ? void 0 : c.offsetTop) !== null && h !== void 0 ? h : 0) + (($ = c == null ? void 0 : c.height) !== null && $ !== void 0 ? $ : 0))
  };
  var w, x, I, M;
  return l !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, y.bottom - g - (((w = o.top) !== null && w !== void 0 ? w : 0) + ((x = o.bottom) !== null && x !== void 0 ? x : 0) + i))
  ) : Math.max(0, g + a - y.top - (((I = o.top) !== null && I !== void 0 ? I : 0) + ((M = o.bottom) !== null && M !== void 0 ? M : 0) + i));
}
function rn(e, t, r, n, o, i, a, l) {
  let { placement: s, axis: d, size: c } = i;
  var f, b;
  if (s === d) return Math.max(0, r[d] - ((f = a.scroll[d]) !== null && f !== void 0 ? f : 0) - (e[d] + (l ? t[d] : 0)) - ((b = n[d]) !== null && b !== void 0 ? b : 0) - n[kt[d]] - o);
  var g, p;
  return Math.max(0, e[c] + e[d] + (l ? t[d] : 0) - r[d] - r[c] + ((g = a.scroll[d]) !== null && g !== void 0 ? g : 0) - ((p = n[d]) !== null && p !== void 0 ? p : 0) - n[kt[d]] - o);
}
function Da(e, t, r, n, o, i, a, l, s, d, c, f, b, g, p, m, h, $) {
  let y = tn(e), { size: w, crossAxis: x, crossSize: I, placement: M, crossPlacement: R } = y, E = Ut(t, l, r, y, c, f, d, b, p, m, s), F = c, _ = rn(l, d, t, o, i + c, y, s, h);
  if (a && r[w] > _) {
    let be = tn(`${kt[M]} ${R}`), $e = Ut(t, l, r, be, c, f, d, b, p, m, s);
    rn(l, d, t, o, i + c, be, s, h) > _ && (y = be, E = $e, F = c);
  }
  let te = "bottom";
  y.axis === "top" ? y.placement === "top" ? te = "top" : y.placement === "bottom" && (te = "bottom") : y.crossAxis === "top" && (y.crossPlacement === "top" ? te = "bottom" : y.crossPlacement === "bottom" && (te = "top"));
  let K = en(x, E[x], r[I], l, s, i, d);
  E[x] += K;
  let B = Fa(E, l, d, b, o, i, r.height, te, s, h, $);
  g && g < B && (B = g), r.height = Math.min(r.height, B), E = Ut(t, l, r, y, F, f, d, b, p, m, s), K = en(x, E[x], r[I], l, s, i, d), E[x] += K;
  let Q = {}, ee = t[x] - E[x] - o[pe[x]], X = ee + 0.5 * t[I];
  const ae = p / 2 + m;
  var L, de, u, P;
  const v = pe[x] === "left" ? ((L = o.left) !== null && L !== void 0 ? L : 0) + ((de = o.right) !== null && de !== void 0 ? de : 0) : ((u = o.top) !== null && u !== void 0 ? u : 0) + ((P = o.bottom) !== null && P !== void 0 ? P : 0), T = r[I] - v - p / 2 - m, N = t[x] + p / 2 - (E[x] + o[pe[x]]), A = t[x] + t[I] - p / 2 - (E[x] + o[pe[x]]), ve = lr(X, N, A);
  Q[x] = lr(ve, ae, T), { placement: M, crossPlacement: R } = y, p ? ee = Q[x] : R === "right" ? ee += t[I] : R === "center" && (ee += t[I] / 2);
  let Y = M === "left" || M === "top" ? r[w] : 0, Ne = {
    x: M === "top" || M === "bottom" ? ee : Y,
    y: M === "left" || M === "right" ? ee : Y
  };
  return {
    position: E,
    maxHeight: B,
    arrowOffsetLeft: Q.left,
    arrowOffsetTop: Q.top,
    placement: M,
    triggerAnchorPoint: Ne
  };
}
function Oa(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: i, shouldFlip: a, boundaryElement: l, offset: s, crossOffset: d, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: b = 0 } = e, g = Ia(), p = n instanceof HTMLElement ? Aa(n) : document.documentElement, m = p === document.documentElement;
  const h = window.getComputedStyle(p).position;
  let $ = !!h && h !== "static", y = m ? lt(r, !1) : nn(r, p, !1);
  if (!m) {
    let { marginTop: Q, marginLeft: ee } = window.getComputedStyle(r);
    y.top += parseInt(Q, 10) || 0, y.left += parseInt(ee, 10) || 0;
  }
  let w = lt(n, !0), x = Ra(n);
  var I, M;
  w.width += ((I = x.left) !== null && I !== void 0 ? I : 0) + ((M = x.right) !== null && M !== void 0 ? M : 0);
  var R, E;
  w.height += ((R = x.top) !== null && R !== void 0 ? R : 0) + ((E = x.bottom) !== null && E !== void 0 ? E : 0);
  let F = Ma(o), _ = Qr(l, g), te = Qr(p, g), K = nn(l, p, !1), B = l.contains(p);
  return Da(t, y, w, F, x, i, a, _, te, K, s, d, $, c, f, b, B, g);
}
function Dr(e, t) {
  let { top: r, left: n, width: o, height: i } = e.getBoundingClientRect();
  return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (o = e.offsetWidth, i = e.offsetHeight), {
    top: r,
    left: n,
    width: o,
    height: i
  };
}
function lt(e, t) {
  let { top: r, left: n, width: o, height: i } = Dr(e, t), { scrollTop: a, scrollLeft: l, clientTop: s, clientLeft: d } = document.documentElement;
  return {
    top: r + a - s,
    left: n + l - d,
    width: o,
    height: i
  };
}
function nn(e, t, r) {
  let n = window.getComputedStyle(e), o;
  if (n.position === "fixed") o = Dr(e, r);
  else {
    o = lt(e, r);
    let i = lt(t, r), a = window.getComputedStyle(t);
    i.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, o.top -= i.top, o.left -= i.left;
  }
  return o.top -= parseInt(n.marginTop, 10) || 0, o.left -= parseInt(n.marginLeft, 10) || 0, o;
}
function Aa(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !on(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !on(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function on(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const ro = /* @__PURE__ */ new WeakMap();
function _a(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  U(() => {
    if (!r || n === null) return;
    let o = (i) => {
      let a = i.target;
      if (!t.current || a instanceof Node && !a.contains(t.current) || i.target instanceof HTMLInputElement || i.target instanceof HTMLTextAreaElement) return;
      let l = n || ro.get(t.current);
      l && l();
    };
    return window.addEventListener("scroll", o, !0), () => {
      window.removeEventListener("scroll", o, !0);
    };
  }, [
    r,
    n,
    t
  ]);
}
const Va = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), Ha = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function za(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return Va.has(r.script);
  }
  let t = e.split("-")[0];
  return Ha.has(t);
}
const no = Symbol.for("react-aria.i18n.locale");
function oo() {
  let e = typeof window < "u" && window[no] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: za(e) ? "rtl" : "ltr"
  };
}
let ur = oo(), rt = /* @__PURE__ */ new Set();
function an() {
  ur = oo();
  for (let e of rt) e(ur);
}
function Ka() {
  let e = Pr(), [t, r] = G(ur);
  return U(() => (rt.size === 0 && window.addEventListener("languagechange", an), rt.add(r), () => {
    rt.delete(r), rt.size === 0 && window.removeEventListener("languagechange", an);
  }), []), e ? {
    locale: typeof window < "u" && window[no] || "en-US",
    direction: "ltr"
  } : t;
}
const Ba = /* @__PURE__ */ C.createContext(null);
function Or() {
  let e = Ka();
  return oe(Ba) || e;
}
const Ga = Symbol.for("react-aria.i18n.locale"), Wa = Symbol.for("react-aria.i18n.strings");
let Ge;
class Vt {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = Ua(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[Ga];
    if (Ge === void 0) {
      let o = window[Wa];
      if (!o) return null;
      Ge = {};
      for (let i in o) Ge[i] = new Vt({
        [r]: o[i]
      }, r);
    }
    let n = Ge == null ? void 0 : Ge[t];
    if (!n) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(t, r = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n)), this.defaultLocale = r;
  }
}
function Ua(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = ja(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function ja(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const ln = /* @__PURE__ */ new Map(), sn = /* @__PURE__ */ new Map();
class qa {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let i = this.locale + ":" + n, a = ln.get(i);
    a || (a = new Intl.PluralRules(this.locale, {
      type: n
    }), ln.set(i, a));
    let l = a.select(t);
    return o = r[l] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = sn.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), sn.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
const dn = /* @__PURE__ */ new WeakMap();
function Ya(e) {
  let t = dn.get(e);
  return t || (t = new Vt(e), dn.set(e, t)), t;
}
function Xa(e, t) {
  return t && Vt.getGlobalDictionaryForPackage(t) || Ya(e);
}
function Za(e, t) {
  let { locale: r } = Or(), n = Xa(e, t);
  return se(() => new qa(r, n), [
    r,
    n
  ]);
}
function Ja(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Qa(e, t, r) {
  Ja(e, t), t.set(e, r);
}
let re = typeof document < "u" ? window.visualViewport : null;
function el(e) {
  let { direction: t } = Or(), { arrowSize: r, targetRef: n, overlayRef: o, arrowRef: i, scrollRef: a = o, placement: l = "bottom", containerPadding: s = 12, shouldFlip: d = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: f = 0, crossOffset: b = 0, shouldUpdatePosition: g = !0, isOpen: p = !0, onClose: m, maxHeight: h, arrowBoundaryOffset: $ = 0 } = e, [y, w] = G(null), x = [
    g,
    l,
    o.current,
    n.current,
    i == null ? void 0 : i.current,
    a.current,
    s,
    d,
    c,
    f,
    b,
    p,
    t,
    h,
    $,
    r
  ], I = O(re == null ? void 0 : re.scale);
  U(() => {
    p && (I.current = re == null ? void 0 : re.scale);
  }, [
    p
  ]);
  let M = H(() => {
    if (g === !1 || !p || !o.current || !n.current || !c || (re == null ? void 0 : re.scale) !== I.current) return;
    let K = null;
    if (a.current && a.current.contains(document.activeElement)) {
      var B;
      let u = (B = document.activeElement) === null || B === void 0 ? void 0 : B.getBoundingClientRect(), P = a.current.getBoundingClientRect();
      var Q;
      if (K = {
        type: "top",
        offset: ((Q = u == null ? void 0 : u.top) !== null && Q !== void 0 ? Q : 0) - P.top
      }, K.offset > P.height / 2) {
        K.type = "bottom";
        var ee;
        K.offset = ((ee = u == null ? void 0 : u.bottom) !== null && ee !== void 0 ? ee : 0) - P.bottom;
      }
    }
    let X = o.current;
    if (!h && o.current) {
      var ae;
      X.style.top = "0px", X.style.bottom = "";
      var L;
      X.style.maxHeight = ((L = (ae = window.visualViewport) === null || ae === void 0 ? void 0 : ae.height) !== null && L !== void 0 ? L : window.innerHeight) + "px";
    }
    let de = Oa({
      placement: rl(l, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: a.current || o.current,
      padding: s,
      shouldFlip: d,
      boundaryElement: c,
      offset: f,
      crossOffset: b,
      maxHeight: h,
      arrowSize: r ?? (i != null && i.current ? Dr(i.current, !0).width : 0),
      arrowBoundaryOffset: $
    });
    if (de.position) {
      if (X.style.top = "", X.style.bottom = "", X.style.left = "", X.style.right = "", Object.keys(de.position).forEach((u) => X.style[u] = de.position[u] + "px"), X.style.maxHeight = de.maxHeight != null ? de.maxHeight + "px" : "", K && document.activeElement && a.current) {
        let u = document.activeElement.getBoundingClientRect(), P = a.current.getBoundingClientRect(), v = u[K.type] - P[K.type];
        a.current.scrollTop += v - K.offset;
      }
      w(de);
    }
  }, x);
  W(M, x), tl(M), or({
    ref: o,
    onResize: M
  }), or({
    ref: n,
    onResize: M
  });
  let R = O(!1);
  W(() => {
    let K, B = () => {
      R.current = !0, clearTimeout(K), K = setTimeout(() => {
        R.current = !1;
      }, 500), M();
    }, Q = () => {
      R.current && B();
    };
    return re == null || re.addEventListener("resize", B), re == null || re.addEventListener("scroll", Q), () => {
      re == null || re.removeEventListener("resize", B), re == null || re.removeEventListener("scroll", Q);
    };
  }, [
    M
  ]);
  let E = H(() => {
    R.current || m == null || m();
  }, [
    m,
    R
  ]);
  _a({
    triggerRef: n,
    isOpen: p,
    onClose: m && E
  });
  var F, _, te;
  return {
    overlayProps: {
      style: {
        position: y ? "absolute" : "fixed",
        top: y ? void 0 : 0,
        left: y ? void 0 : 0,
        zIndex: 1e5,
        ...y == null ? void 0 : y.position,
        maxHeight: (F = y == null ? void 0 : y.maxHeight) !== null && F !== void 0 ? F : "100vh"
      }
    },
    placement: (_ = y == null ? void 0 : y.placement) !== null && _ !== void 0 ? _ : null,
    triggerAnchorPoint: (te = y == null ? void 0 : y.triggerAnchorPoint) !== null && te !== void 0 ? te : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: y == null ? void 0 : y.arrowOffsetLeft,
        top: y == null ? void 0 : y.arrowOffsetTop
      }
    },
    updatePosition: M
  };
}
function tl(e) {
  W(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function rl(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Ar(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function io(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function ao(e) {
  let t = O({
    isFocused: !1,
    observer: null
  });
  return W(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []), H((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let n = r.target, o = (i) => {
        if (t.current.isFocused = !1, n.disabled) {
          let a = Ar(i);
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
let Ct = !1;
function cn(e) {
  for (; e && !Jn(e); ) e = e.parentElement;
  let t = ue(e), r = t.document.activeElement;
  if (!r || r === e) return;
  Ct = !0;
  let n = !1, o = (c) => {
    (c.target === r || n) && c.stopImmediatePropagation();
  }, i = (c) => {
    (c.target === r || n) && (c.stopImmediatePropagation(), !e && !n && (n = !0, Ye(r), s()));
  }, a = (c) => {
    (c.target === e || n) && c.stopImmediatePropagation();
  }, l = (c) => {
    (c.target === e || n) && (c.stopImmediatePropagation(), n || (n = !0, Ye(r), s()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", a, !0);
  let s = () => {
    cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", a, !0), Ct = !1, n = !1;
  }, d = requestAnimationFrame(s);
  return s;
}
let je = "default", fr = "", Tt = /* @__PURE__ */ new WeakMap();
function un(e) {
  if (_t()) {
    if (je === "default") {
      const t = V(e);
      fr = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    je = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Tt.set(e, e.style[t]), e.style[t] = "none";
  }
}
function jt(e) {
  if (_t()) {
    if (je !== "disabled") return;
    je = "restoring", setTimeout(() => {
      jn(() => {
        if (je === "restoring") {
          const t = V(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = fr || ""), fr = "", je = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Tt.has(e)) {
    let t = Tt.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Tt.delete(e);
  }
}
const st = C.createContext({
  register: () => {
  }
});
st.displayName = "PressResponderContext";
function nl(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function lo(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function ol(e, t) {
  var r = lo(e, t, "get");
  return nl(e, r);
}
function il(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function fn(e, t, r) {
  var n = lo(e, t, "set");
  return il(e, n, r), r;
}
function al(e) {
  let t = oe(st);
  if (t) {
    let { register: r, ...n } = t;
    e = J(n, e), r();
  }
  return Lr(t, e.ref), e;
}
var mt = /* @__PURE__ */ new WeakMap();
class gt {
  continuePropagation() {
    fn(this, mt, !1);
  }
  get shouldStopPropagation() {
    return ol(this, mt);
  }
  constructor(t, r, n, o) {
    Qa(this, mt, {
      writable: !0,
      value: void 0
    }), fn(this, mt, !0);
    var i;
    let a = (i = o == null ? void 0 : o.target) !== null && i !== void 0 ? i : n.currentTarget;
    const l = a == null ? void 0 : a.getBoundingClientRect();
    let s, d = 0, c, f = null;
    n.clientX != null && n.clientY != null && (c = n.clientX, f = n.clientY), l && (c != null && f != null ? (s = c - l.left, d = f - l.top) : (s = l.width / 2, d = l.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = d;
  }
}
const vn = Symbol("linkClicked"), bn = "react-aria-pressable-style", pn = "data-react-aria-pressable";
function Lt(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: i, onClick: a, isDisabled: l, isPressed: s, preventFocusOnPress: d, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: f, ref: b, ...g } = al(e), [p, m] = G(!1), h = O({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: $, removeAllGlobalListeners: y, removeGlobalListener: w } = kr(), x = H((u, P) => {
    let v = h.current;
    if (l || v.didFirePressStart) return !1;
    let T = !0;
    if (v.isTriggeringEvent = !0, n) {
      let N = new gt("pressstart", P, u);
      n(N), T = N.shouldStopPropagation;
    }
    return r && r(!0), v.isTriggeringEvent = !1, v.didFirePressStart = !0, m(!0), T;
  }, [
    l,
    n,
    r
  ]), I = H((u, P, v = !0) => {
    let T = h.current;
    if (!T.didFirePressStart) return !1;
    T.didFirePressStart = !1, T.isTriggeringEvent = !0;
    let N = !0;
    if (o) {
      let A = new gt("pressend", P, u);
      o(A), N = A.shouldStopPropagation;
    }
    if (r && r(!1), m(!1), t && v && !l) {
      let A = new gt("press", P, u);
      t(A), N && (N = A.shouldStopPropagation);
    }
    return T.isTriggeringEvent = !1, N;
  }, [
    l,
    o,
    r,
    t
  ]), M = ye(I), R = H((u, P) => {
    let v = h.current;
    if (l) return !1;
    if (i) {
      v.isTriggeringEvent = !0;
      let T = new gt("pressup", P, u);
      return i(T), v.isTriggeringEvent = !1, T.shouldStopPropagation;
    }
    return !0;
  }, [
    l,
    i
  ]), E = ye(R), F = H((u) => {
    let P = h.current;
    if (P.isPressed && P.target) {
      P.didFirePressStart && P.pointerType != null && I(_e(P.target, u), P.pointerType, !1), P.isPressed = !1, L(null), P.isOverTarget = !1, P.activePointerId = null, P.pointerType = null, y(), f || jt(P.target);
      for (let v of P.disposables) v();
      P.disposables = [];
    }
  }, [
    f,
    y,
    I
  ]), _ = ye(F), te = H((u) => {
    c && F(u);
  }, [
    c,
    F
  ]), K = H((u) => {
    l || a == null || a(u);
  }, [
    l,
    a
  ]), B = H((u, P) => {
    if (!l && a) {
      let v = new MouseEvent("click", u);
      io(v, P), a(Ar(v));
    }
  }, [
    l,
    a
  ]), Q = ye(B), [ee, X] = G(!1);
  W(() => {
    let u = h.current;
    if (ee) {
      let P = (A) => {
        var ve;
        if (u.isPressed && u.target && qt(A, u.target)) {
          var Y;
          hn(z(A), A.key) && A.preventDefault();
          let be = z(A), $e = Z(u.target, z(A));
          M(_e(u.target, A), "keyboard", $e), $e && Q(A, u.target), y(), A.key !== "Enter" && _r(u.target) && Z(u.target, be) && !A[vn] && (A[vn] = !0, ze(u.target, A, !1)), u.isPressed = !1, X(!1), (Y = u.metaKeyEvents) === null || Y === void 0 || Y.delete(A.key);
        } else if (A.key === "Meta" && (!((ve = u.metaKeyEvents) === null || ve === void 0) && ve.size)) {
          var Ne;
          let be = u.metaKeyEvents;
          u.metaKeyEvents = void 0;
          for (let $e of be.values()) (Ne = u.target) === null || Ne === void 0 || Ne.dispatchEvent(new KeyboardEvent("keyup", $e));
        }
      }, v = u.target, N = Dt((A) => {
        v && qt(A, v) && !A.repeat && Z(v, z(A)) && u.target && E(_e(u.target, A), "keyboard");
      }, P);
      return $(V(u.target), "keyup", N, !0), () => {
        w(V(u.target), "keyup", N, !0);
      };
    }
  }, [
    ee,
    $,
    y,
    w
  ]);
  let [ae, L] = G(null);
  W(() => {
    let u = h.current;
    if (ae === "pointer") {
      let P = (T) => {
        if (T.pointerId === u.activePointerId && u.isPressed && T.button === 0 && u.target) {
          if (Z(u.target, z(T)) && u.pointerType != null) {
            let N = !1, A = setTimeout(() => {
              u.isPressed && u.target instanceof HTMLElement && (N ? _(T) : (Ye(u.target), u.target.click()));
            }, 80);
            $(T.currentTarget, "click", () => N = !0, !0), u.disposables.push(() => clearTimeout(A));
          } else _(T);
          u.isOverTarget = !1;
        }
      }, v = (T) => {
        _(T);
      };
      return $(V(u.target), "pointerup", P, !1), $(V(u.target), "pointercancel", v, !1), () => {
        w(V(u.target), "pointerup", P, !1), w(V(u.target), "pointercancel", v, !1);
      };
    } else if (ae === "mouse" && process.env.NODE_ENV === "test") {
      let P = (v) => {
        if (v.button === 0) {
          if (u.ignoreEmulatedMouseEvents) {
            u.ignoreEmulatedMouseEvents = !1;
            return;
          }
          u.target && u.target.contains(v.target) && u.pointerType != null || _(v), u.isOverTarget = !1;
        }
      };
      return $(V(u.target), "mouseup", P, !1), () => {
        w(V(u.target), "mouseup", P, !1);
      };
    } else if (ae === "touch" && process.env.NODE_ENV === "test") {
      let P = (v) => {
        u.isPressed && Z(z(v), u.target) && _({
          currentTarget: u.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      return $(ue(u.target), "scroll", P, !0), () => {
        w(ue(u.target), "scroll", P, !0);
      };
    }
  }, [
    ae,
    $,
    w
  ]);
  let de = se(() => {
    let u = h.current, P = {
      onKeyDown(v) {
        if (qt(v.nativeEvent, v.currentTarget) && Z(v.currentTarget, z(v.nativeEvent))) {
          var T;
          hn(z(v.nativeEvent), v.key) && v.preventDefault();
          let N = !0;
          !u.isPressed && !v.repeat && (u.target = v.currentTarget, u.isPressed = !0, X(!0), u.pointerType = "keyboard", N = x(v, "keyboard")), N && v.stopPropagation(), v.metaKey && Xe() && ((T = u.metaKeyEvents) === null || T === void 0 || T.set(v.key, v.nativeEvent));
        } else v.key === "Meta" && (u.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(v) {
        if (!(v && !Z(v.currentTarget, z(v.nativeEvent))) && v && v.button === 0 && !u.isTriggeringEvent && !ze.isOpening) {
          let T = !0;
          if (l && v.preventDefault(), !u.ignoreEmulatedMouseEvents && !u.isPressed && (u.pointerType === "virtual" || ar(v.nativeEvent))) {
            let N = x(v, "virtual"), A = R(v, "virtual"), ve = I(v, "virtual");
            K(v), T = N && A && ve;
          } else if (u.isPressed && u.pointerType !== "keyboard") {
            let N = u.pointerType || v.nativeEvent.pointerType || "virtual", A = R(_e(v.currentTarget, v), N), ve = I(_e(v.currentTarget, v), N, !0);
            T = A && ve, u.isOverTarget = !1, K(v), F(v);
          }
          u.ignoreEmulatedMouseEvents = !1, T && v.stopPropagation();
        }
      }
    };
    return typeof PointerEvent < "u" ? (P.onPointerDown = (v) => {
      if (v.button !== 0 || !Z(v.currentTarget, z(v.nativeEvent))) return;
      if (ha(v.nativeEvent)) {
        u.pointerType = "virtual";
        return;
      }
      u.pointerType = v.pointerType;
      let T = !0;
      if (!u.isPressed) {
        u.isPressed = !0, L("pointer"), u.isOverTarget = !0, u.activePointerId = v.pointerId, u.target = v.currentTarget, f || un(u.target), T = x(v, u.pointerType);
        let N = z(v.nativeEvent);
        "releasePointerCapture" in N && N.releasePointerCapture(v.pointerId);
      }
      T && v.stopPropagation();
    }, P.onMouseDown = (v) => {
      if (Z(v.currentTarget, z(v.nativeEvent)) && v.button === 0) {
        if (d) {
          let T = cn(v.target);
          T && u.disposables.push(T);
        }
        v.stopPropagation();
      }
    }, P.onPointerUp = (v) => {
      !Z(v.currentTarget, z(v.nativeEvent)) || u.pointerType === "virtual" || v.button === 0 && !u.isPressed && R(v, u.pointerType || v.pointerType);
    }, P.onPointerEnter = (v) => {
      v.pointerId === u.activePointerId && u.target && !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, x(_e(u.target, v), u.pointerType));
    }, P.onPointerLeave = (v) => {
      v.pointerId === u.activePointerId && u.target && u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, I(_e(u.target, v), u.pointerType, !1), te(v));
    }, P.onDragStart = (v) => {
      Z(v.currentTarget, z(v.nativeEvent)) && F(v);
    }) : process.env.NODE_ENV === "test" && (P.onMouseDown = (v) => {
      if (v.button !== 0 || !Z(v.currentTarget, z(v.nativeEvent))) return;
      if (u.ignoreEmulatedMouseEvents) {
        v.stopPropagation();
        return;
      }
      if (u.isPressed = !0, L("mouse"), u.isOverTarget = !0, u.target = v.currentTarget, u.pointerType = ar(v.nativeEvent) ? "virtual" : "mouse", Hn(() => x(v, u.pointerType)) && v.stopPropagation(), d) {
        let N = cn(v.target);
        N && u.disposables.push(N);
      }
    }, P.onMouseEnter = (v) => {
      if (!Z(v.currentTarget, z(v.nativeEvent))) return;
      let T = !0;
      u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !0, T = x(v, u.pointerType)), T && v.stopPropagation();
    }, P.onMouseLeave = (v) => {
      if (!Z(v.currentTarget, z(v.nativeEvent))) return;
      let T = !0;
      u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !1, T = I(v, u.pointerType, !1), te(v)), T && v.stopPropagation();
    }, P.onMouseUp = (v) => {
      Z(v.currentTarget, z(v.nativeEvent)) && !u.ignoreEmulatedMouseEvents && v.button === 0 && !u.isPressed && R(v, u.pointerType || "mouse");
    }, P.onTouchStart = (v) => {
      if (!Z(v.currentTarget, z(v.nativeEvent))) return;
      let T = ll(v.nativeEvent);
      if (!T) return;
      u.activePointerId = T.identifier, u.ignoreEmulatedMouseEvents = !0, u.isOverTarget = !0, u.isPressed = !0, L("touch"), u.target = v.currentTarget, u.pointerType = "touch", f || un(u.target), x(Ie(u.target, v), u.pointerType) && v.stopPropagation();
    }, P.onTouchMove = (v) => {
      if (!Z(v.currentTarget, z(v.nativeEvent))) return;
      if (!u.isPressed) {
        v.stopPropagation();
        return;
      }
      let T = mn(v.nativeEvent, u.activePointerId), N = !0;
      T && gn(T, v.currentTarget) ? !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, N = x(Ie(u.target, v), u.pointerType)) : u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, N = I(Ie(u.target, v), u.pointerType, !1), te(Ie(u.target, v))), N && v.stopPropagation();
    }, P.onTouchEnd = (v) => {
      if (!Z(v.currentTarget, z(v.nativeEvent))) return;
      if (!u.isPressed) {
        v.stopPropagation();
        return;
      }
      let T = mn(v.nativeEvent, u.activePointerId), N = !0;
      T && gn(T, v.currentTarget) && u.pointerType != null ? (R(Ie(u.target, v), u.pointerType), N = I(Ie(u.target, v), u.pointerType), B(v.nativeEvent, u.target)) : u.isOverTarget && u.pointerType != null && (N = I(Ie(u.target, v), u.pointerType, !1)), N && v.stopPropagation(), u.isPressed = !1, L(null), u.activePointerId = null, u.isOverTarget = !1, u.ignoreEmulatedMouseEvents = !0, u.target && !f && jt(u.target), y();
    }, P.onTouchCancel = (v) => {
      Z(v.currentTarget, z(v.nativeEvent)) && (v.stopPropagation(), u.isPressed && F(Ie(u.target, v)));
    }, P.onDragStart = (v) => {
      Z(v.currentTarget, z(v.nativeEvent)) && F(v);
    }), P;
  }, [
    l,
    d,
    y,
    f,
    F,
    te,
    I,
    x,
    R,
    K,
    B
  ]);
  return U(() => {
    if (!b || process.env.NODE_ENV === "test") return;
    const u = V(b.current);
    if (!u || !u.head || u.getElementById(bn)) return;
    const P = u.createElement("style");
    P.id = bn, P.textContent = `
@layer {
  [${pn}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), u.head.prepend(P);
  }, [
    b
  ]), U(() => {
    let u = h.current;
    return () => {
      var P;
      f || jt((P = u.target) !== null && P !== void 0 ? P : void 0);
      for (let v of u.disposables) v();
      u.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: s || p,
    pressProps: J(g, de, {
      [pn]: !0
    })
  };
}
function _r(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function qt(e, t) {
  const { key: r, code: n } = e, o = t, i = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof ue(o).HTMLInputElement && !so(o, r) || o instanceof ue(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && _r(o)) && r !== "Enter");
}
function ll(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function mn(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function Ie(e, t) {
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
function _e(e, t) {
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
function sl(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function dl(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function gn(e, t) {
  let r = t.getBoundingClientRect(), n = sl(e);
  return dl(r, n);
}
function cl(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !_r(e);
}
function hn(e, t) {
  return e instanceof HTMLInputElement ? !so(e, t) : cl(e);
}
const ul = /* @__PURE__ */ new Set([
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
function so(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : ul.has(e.type);
}
let Be = null, vr = /* @__PURE__ */ new Set(), it = /* @__PURE__ */ new Map(), Ke = !1, br = !1;
const fl = {
  Tab: !0,
  Escape: !0
};
function Ht(e, t) {
  for (let r of vr) r(e, t);
}
function vl(e) {
  return !(e.metaKey || !Xe() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Nt(e) {
  Ke = !0, !ze.isOpening && vl(e) && (Be = "keyboard", Ht("keyboard", e));
}
function me(e) {
  Be = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (Ke = !0, Ht("pointer", e));
}
function co(e) {
  !ze.isOpening && ar(e) && (Ke = !0, Be = "virtual");
}
function uo(e) {
  e.target === window || e.target === document || Ct || !e.isTrusted || (!Ke && !br && (Be = "virtual", Ht("virtual", e)), Ke = !1, br = !1);
}
function fo() {
  Ct || (Ke = !1, br = !0);
}
function pr(e) {
  if (typeof window > "u" || typeof document > "u" || it.get(ue(e))) return;
  const t = ue(e), r = V(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ke = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Nt, !0), r.addEventListener("keyup", Nt, !0), r.addEventListener("click", co, !0), t.addEventListener("focus", uo, !0), t.addEventListener("blur", fo, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", me, !0), r.addEventListener("pointermove", me, !0), r.addEventListener("pointerup", me, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", me, !0), r.addEventListener("mousemove", me, !0), r.addEventListener("mouseup", me, !0)), t.addEventListener("beforeunload", () => {
    vo(e);
  }, {
    once: !0
  }), it.set(t, {
    focus: n
  });
}
const vo = (e, t) => {
  const r = ue(e), n = V(e);
  t && n.removeEventListener("DOMContentLoaded", t), it.has(r) && (r.HTMLElement.prototype.focus = it.get(r).focus, n.removeEventListener("keydown", Nt, !0), n.removeEventListener("keyup", Nt, !0), n.removeEventListener("click", co, !0), r.removeEventListener("focus", uo, !0), r.removeEventListener("blur", fo, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", me, !0), n.removeEventListener("pointermove", me, !0), n.removeEventListener("pointerup", me, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", me, !0), n.removeEventListener("mousemove", me, !0), n.removeEventListener("mouseup", me, !0)), it.delete(r));
};
function bl(e) {
  const t = V(e);
  let r;
  return t.readyState !== "loading" ? pr(e) : (r = () => {
    pr(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => vo(e, r);
}
typeof document < "u" && bl();
function bo() {
  return Be !== "pointer";
}
function po() {
  return Be;
}
function pl(e) {
  Be = e, Ht(e, null);
}
const ml = /* @__PURE__ */ new Set([
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
function gl(e, t, r) {
  let n = V(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? ue(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? ue(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? ue(r == null ? void 0 : r.target).HTMLElement : HTMLElement, l = typeof window < "u" ? ue(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !ml.has(n.activeElement.type) || n.activeElement instanceof i || n.activeElement instanceof a && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof l && !fl[r.key]);
}
function hl(e, t, r) {
  pr(), U(() => {
    let n = (o, i) => {
      gl(!!(r != null && r.isTextInput), o, i) && e(bo());
    };
    return vr.add(n), () => {
      vr.delete(n);
    };
  }, t);
}
function dt(e) {
  const t = V(e);
  if (po() === "virtual") {
    let r = fe(t);
    jn(() => {
      const n = fe(t);
      (n === r || n === t.body) && e.isConnected && Ye(e);
    });
  } else Ye(e);
}
function mo(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const i = H((s) => {
    if (s.target === s.currentTarget)
      return n && n(s), o && o(!1), !0;
  }, [
    n,
    o
  ]), a = ao(i), l = H((s) => {
    const d = V(s.target), c = d ? fe(d) : fe();
    s.target === s.currentTarget && c === z(s.nativeEvent) && (r && r(s), o && o(!0), a(s));
  }, [
    o,
    r,
    a
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || o || n) ? l : void 0,
      onBlur: !t && (n || o) ? i : void 0
    }
  };
}
function $n(e) {
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
function $l(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: $n(e.onKeyDown),
      onKeyUp: $n(e.onKeyUp)
    }
  };
}
let yl = /* @__PURE__ */ C.createContext(null);
function El(e) {
  let t = oe(yl) || {};
  Lr(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Vr(e, t) {
  let { focusProps: r } = mo(e), { keyboardProps: n } = $l(e), o = J(r, n), i = El(t), a = e.isDisabled ? {} : i, l = O(e.autoFocus);
  U(() => {
    l.current && t.current && dt(t.current), l.current = !1;
  }, [
    t
  ]);
  let s = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (s = void 0), {
    focusableProps: J({
      ...o,
      tabIndex: s
    }, a)
  };
}
const xl = /* @__PURE__ */ C.forwardRef(({ children: e, ...t }, r) => {
  let n = O(!1), o = oe(st);
  r = Cr(r || (o == null ? void 0 : o.ref));
  let i = J(o || {}, {
    ...t,
    ref: r,
    register() {
      n.current = !0, o && o.register();
    }
  });
  return Lr(o, r), U(() => {
    n.current || (process.env.NODE_ENV !== "production" && console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."), n.current = !0);
  }, []), /* @__PURE__ */ C.createElement(st.Provider, {
    value: i
  }, e);
});
function wl({ children: e }) {
  let t = se(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ C.createElement(st.Provider, {
    value: t
  }, e);
}
function Hr(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, i = O({
    isFocusWithin: !1
  }), { addGlobalListener: a, removeAllGlobalListeners: l } = kr(), s = H((f) => {
    f.currentTarget.contains(f.target) && i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, l(), r && r(f), o && o(!1));
  }, [
    r,
    o,
    i,
    l
  ]), d = ao(s), c = H((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const b = V(f.target), g = fe(b);
    if (!i.current.isFocusWithin && g === z(f.nativeEvent)) {
      n && n(f), o && o(!0), i.current.isFocusWithin = !0, d(f);
      let p = f.currentTarget;
      a(b, "focus", (m) => {
        if (i.current.isFocusWithin && !Z(p, m.target)) {
          let h = new b.defaultView.FocusEvent("blur", {
            relatedTarget: m.target
          });
          io(h, p);
          let $ = Ar(h);
          s($);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    d,
    a,
    s
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: s
    }
  };
}
let It = !1, ht = 0;
function mr() {
  It = !0, setTimeout(() => {
    It = !1;
  }, 50);
}
function yn(e) {
  e.pointerType === "touch" && mr();
}
function Pl() {
  if (!(typeof document > "u"))
    return ht === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", yn) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", mr)), ht++, () => {
      ht--, !(ht > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", yn) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", mr));
    };
}
function ct(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [i, a] = G(!1), l = O({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  U(Pl, []);
  let { addGlobalListener: s, removeAllGlobalListeners: d } = kr(), { hoverProps: c, triggerHoverEnd: f } = se(() => {
    let b = (m, h) => {
      if (l.pointerType = h, o || h === "touch" || l.isHovered || !m.currentTarget.contains(m.target)) return;
      l.isHovered = !0;
      let $ = m.currentTarget;
      l.target = $, s(V(m.target), "pointerover", (y) => {
        l.isHovered && l.target && !Z(l.target, y.target) && g(y, y.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: $,
        pointerType: h
      }), r && r(!0), a(!0);
    }, g = (m, h) => {
      let $ = l.target;
      l.pointerType = "", l.target = null, !(h === "touch" || !l.isHovered || !$) && (l.isHovered = !1, d(), n && n({
        type: "hoverend",
        target: $,
        pointerType: h
      }), r && r(!1), a(!1));
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (m) => {
      It && m.pointerType === "mouse" || b(m, m.pointerType);
    }, p.onPointerLeave = (m) => {
      !o && m.currentTarget.contains(m.target) && g(m, m.pointerType);
    }) : process.env.NODE_ENV === "test" && (p.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (m) => {
      !l.ignoreEmulatedMouseEvents && !It && b(m, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (m) => {
      !o && m.currentTarget.contains(m.target) && g(m, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: g
    };
  }, [
    t,
    r,
    n,
    o,
    l,
    s,
    d
  ]);
  return U(() => {
    o && f({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function Tl(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, i = O({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), a = ye((s) => {
    r && $t(s, t) && (o && o(s), i.current.isPointerDown = !0);
  }), l = ye((s) => {
    r && r(s);
  });
  U(() => {
    let s = i.current;
    if (n) return;
    const d = t.current, c = V(d);
    if (typeof PointerEvent < "u") {
      let f = (b) => {
        s.isPointerDown && $t(b, t) && l(b), s.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", a, !0), c.addEventListener("click", f, !0), () => {
        c.removeEventListener("pointerdown", a, !0), c.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (g) => {
        s.ignoreEmulatedMouseEvents ? s.ignoreEmulatedMouseEvents = !1 : s.isPointerDown && $t(g, t) && l(g), s.isPointerDown = !1;
      }, b = (g) => {
        s.ignoreEmulatedMouseEvents = !0, s.isPointerDown && $t(g, t) && l(g), s.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", a, !0), c.addEventListener("mouseup", f, !0), c.addEventListener("touchstart", a, !0), c.addEventListener("touchend", b, !0), () => {
        c.removeEventListener("mousedown", a, !0), c.removeEventListener("mouseup", f, !0), c.removeEventListener("touchstart", a, !0), c.removeEventListener("touchend", b, !0);
      };
    }
  }, [
    t,
    n
  ]);
}
function $t(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const En = /* @__PURE__ */ C.createContext(null), gr = "react-aria-focus-scope-restore";
let q = null;
function Sl(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, i = O(null), a = O(null), l = O([]), { parentNode: s } = oe(En) || {}, d = se(() => new $r({
    scopeRef: l
  }), [
    l
  ]);
  W(() => {
    let b = s || ne.root;
    if (ne.getTreeNode(b.scopeRef) && q && !Mt(q, b.scopeRef)) {
      let g = ne.getTreeNode(q);
      g && (b = g);
    }
    b.addChild(d), ne.addNode(d);
  }, [
    d,
    s
  ]), W(() => {
    let b = ne.getTreeNode(l);
    b && (b.contain = !!r);
  }, [
    r
  ]), W(() => {
    var b;
    let g = (b = i.current) === null || b === void 0 ? void 0 : b.nextSibling, p = [], m = (h) => h.stopPropagation();
    for (; g && g !== a.current; )
      p.push(g), g.addEventListener(gr, m), g = g.nextSibling;
    return l.current = p, () => {
      for (let h of p) h.removeEventListener(gr, m);
    };
  }, [
    t
  ]), Ml(l, n, r), Ll(l, r), Rl(l, n, r), Il(l, o), U(() => {
    const b = fe(V(l.current ? l.current[0] : void 0));
    let g = null;
    if (ge(b, l.current)) {
      for (let p of ne.traverse()) p.scopeRef && ge(b, p.scopeRef.current) && (g = p);
      g === ne.getTreeNode(l) && (q = g.scopeRef);
    }
  }, [
    l
  ]), W(() => () => {
    var b, g, p;
    let m = (p = (g = ne.getTreeNode(l)) === null || g === void 0 || (b = g.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && p !== void 0 ? p : null;
    (l === q || Mt(l, q)) && (!m || ne.getTreeNode(m)) && (q = m), ne.removeTreeNode(l);
  }, [
    l
  ]);
  let c = se(() => kl(l), []), f = se(() => ({
    focusManager: c,
    parentNode: d
  }), [
    d,
    c
  ]);
  return /* @__PURE__ */ C.createElement(En.Provider, {
    value: f
  }, /* @__PURE__ */ C.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: i
  }), t, /* @__PURE__ */ C.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: a
  }));
}
function kl(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: i, accept: a } = t;
      var l;
      let s = n || fe(V((l = r[0]) !== null && l !== void 0 ? l : void 0)), d = r[0].previousElementSibling, c = He(r), f = De(c, {
        tabbable: o,
        accept: a
      }, r);
      f.currentNode = ge(s, r) ? s : d;
      let b = f.nextNode();
      return !b && i && (f.currentNode = d, b = f.nextNode()), b && ke(b, !0), b;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: i, accept: a } = t;
      var l;
      let s = n || fe(V((l = r[0]) !== null && l !== void 0 ? l : void 0)), d = r[r.length - 1].nextElementSibling, c = He(r), f = De(c, {
        tabbable: o,
        accept: a
      }, r);
      f.currentNode = ge(s, r) ? s : d;
      let b = f.previousNode();
      return !b && i && (f.currentNode = d, b = f.previousNode()), b && ke(b, !0), b;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, i = He(r), a = De(i, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[0].previousElementSibling;
      let l = a.nextNode();
      return l && ke(l, !0), l;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, i = He(r), a = De(i, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[r.length - 1].nextElementSibling;
      let l = a.previousNode();
      return l && ke(l, !0), l;
    }
  };
}
function He(e) {
  return e[0].parentElement;
}
function nt(e) {
  let t = ne.getTreeNode(q);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Cl(e) {
  if (e.checked) return !0;
  let t = [];
  if (!e.form) t = [
    ...V(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)
  ].filter((i) => !i.form);
  else {
    var r, n;
    let i = (n = e.form) === null || n === void 0 || (r = n.elements) === null || r === void 0 ? void 0 : r.namedItem(e.name);
    t = [
      ...i ?? []
    ];
  }
  return t ? !t.some((i) => i.checked) : !1;
}
function Ll(e, t) {
  let r = O(void 0), n = O(void 0);
  W(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const i = V(o ? o[0] : void 0);
    let a = (d) => {
      if (d.key !== "Tab" || d.altKey || d.ctrlKey || d.metaKey || !nt(e) || d.isComposing) return;
      let c = fe(i), f = e.current;
      if (!f || !ge(c, f)) return;
      let b = He(f), g = De(b, {
        tabbable: !0
      }, f);
      if (!c) return;
      g.currentNode = c;
      let p = d.shiftKey ? g.previousNode() : g.nextNode();
      p || (g.currentNode = d.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, p = d.shiftKey ? g.previousNode() : g.nextNode()), d.preventDefault(), p && ke(p, !0);
    }, l = (d) => {
      (!q || Mt(q, e)) && ge(z(d), e.current) ? (q = e, r.current = z(d)) : nt(e) && !Fe(z(d), e) ? r.current ? r.current.focus() : q && q.current && hr(q.current) : nt(e) && (r.current = z(d));
    }, s = (d) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let c = po(), f = (c === "virtual" || c === null) && Sr() && Un(), b = fe(i);
        if (!f && b && nt(e) && !Fe(b, e)) {
          q = e;
          let p = z(d);
          if (p && p.isConnected) {
            var g;
            r.current = p, (g = r.current) === null || g === void 0 || g.focus();
          } else q.current && hr(q.current);
        }
      });
    };
    return i.addEventListener("keydown", a, !1), i.addEventListener("focusin", l, !1), o == null || o.forEach((d) => d.addEventListener("focusin", l, !1)), o == null || o.forEach((d) => d.addEventListener("focusout", s, !1)), () => {
      i.removeEventListener("keydown", a, !1), i.removeEventListener("focusin", l, !1), o == null || o.forEach((d) => d.removeEventListener("focusin", l, !1)), o == null || o.forEach((d) => d.removeEventListener("focusout", s, !1));
    };
  }, [
    e,
    t
  ]), W(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function go(e) {
  return Fe(e);
}
function ge(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function Fe(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of ne.traverse(ne.getTreeNode(t)))
    if (r && ge(e, r.current)) return !0;
  return !1;
}
function Nl(e) {
  return Fe(e, q);
}
function Mt(e, t) {
  var r;
  let n = (r = ne.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function ke(e, t = !1) {
  if (e != null && !t) try {
    dt(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function ho(e, t = !0) {
  let r = e[0].previousElementSibling, n = He(e), o = De(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let i = o.nextNode();
  return t && !i && (n = He(e), o = De(n, {
    tabbable: !1
  }, e), o.currentNode = r, i = o.nextNode()), i;
}
function hr(e, t = !0) {
  ke(ho(e, t));
}
function Il(e, t) {
  const r = C.useRef(t);
  U(() => {
    if (r.current) {
      q = e;
      const n = V(e.current ? e.current[0] : void 0);
      !ge(fe(n), q.current) && e.current && hr(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function Ml(e, t, r) {
  W(() => {
    if (t || r) return;
    let n = e.current;
    const o = V(n ? n[0] : void 0);
    let i = (a) => {
      let l = z(a);
      ge(l, e.current) ? q = e : go(l) || (q = null);
    };
    return o.addEventListener("focusin", i, !1), n == null || n.forEach((a) => a.addEventListener("focusin", i, !1)), () => {
      o.removeEventListener("focusin", i, !1), n == null || n.forEach((a) => a.removeEventListener("focusin", i, !1));
    };
  }, [
    e,
    t,
    r
  ]);
}
function xn(e) {
  let t = ne.getTreeNode(q);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Rl(e, t, r) {
  const n = O(typeof document < "u" ? fe(V(e.current ? e.current[0] : void 0)) : null);
  W(() => {
    let o = e.current;
    const i = V(o ? o[0] : void 0);
    if (!t || r) return;
    let a = () => {
      (!q || Mt(q, e)) && ge(fe(i), e.current) && (q = e);
    };
    return i.addEventListener("focusin", a, !1), o == null || o.forEach((l) => l.addEventListener("focusin", a, !1)), () => {
      i.removeEventListener("focusin", a, !1), o == null || o.forEach((l) => l.removeEventListener("focusin", a, !1));
    };
  }, [
    e,
    r
  ]), W(() => {
    const o = V(e.current ? e.current[0] : void 0);
    if (!t) return;
    let i = (a) => {
      if (a.key !== "Tab" || a.altKey || a.ctrlKey || a.metaKey || !nt(e) || a.isComposing) return;
      let l = o.activeElement;
      if (!Fe(l, e) || !xn(e)) return;
      let s = ne.getTreeNode(e);
      if (!s) return;
      let d = s.nodeToRestore, c = De(o.body, {
        tabbable: !0
      });
      c.currentNode = l;
      let f = a.shiftKey ? c.previousNode() : c.nextNode();
      if ((!d || !d.isConnected || d === o.body) && (d = void 0, s.nodeToRestore = void 0), (!f || !Fe(f, e)) && d) {
        c.currentNode = d;
        do
          f = a.shiftKey ? c.previousNode() : c.nextNode();
        while (Fe(f, e));
        a.preventDefault(), a.stopPropagation(), f ? ke(f, !0) : go(d) ? ke(d, !0) : l.blur();
      }
    };
    return r || o.addEventListener("keydown", i, !0), () => {
      r || o.removeEventListener("keydown", i, !0);
    };
  }, [
    e,
    t,
    r
  ]), W(() => {
    const o = V(e.current ? e.current[0] : void 0);
    if (!t) return;
    let i = ne.getTreeNode(e);
    if (i) {
      var a;
      return i.nodeToRestore = (a = n.current) !== null && a !== void 0 ? a : void 0, () => {
        let l = ne.getTreeNode(e);
        if (!l) return;
        let s = l.nodeToRestore, d = fe(o);
        if (t && s && (d && Fe(d, e) || d === o.body && xn(e))) {
          let c = ne.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let f = c.getTreeNode(e);
              for (; f; ) {
                if (f.nodeToRestore && f.nodeToRestore.isConnected) {
                  wn(f.nodeToRestore);
                  return;
                }
                f = f.parent;
              }
              for (f = c.getTreeNode(e); f; ) {
                if (f.scopeRef && f.scopeRef.current && ne.getTreeNode(f.scopeRef)) {
                  let b = ho(f.scopeRef.current, !0);
                  wn(b);
                  return;
                }
                f = f.parent;
              }
            }
          });
        }
      };
    }
  }, [
    e,
    t
  ]);
}
function wn(e) {
  e.dispatchEvent(new CustomEvent(gr, {
    bubbles: !0,
    cancelable: !0
  })) && ke(e);
}
function De(e, t, r) {
  let n = t != null && t.tabbable ? Sa : Jn, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, i = V(o), a = na(i, e || i, NodeFilter.SHOW_ELEMENT, {
    acceptNode(l) {
      var s;
      return !(t == null || (s = t.from) === null || s === void 0) && s.contains(l) || t != null && t.tabbable && l.tagName === "INPUT" && l.getAttribute("type") === "radio" && (!Cl(l) || a.currentNode.tagName === "INPUT" && a.currentNode.type === "radio" && a.currentNode.name === l.name) ? NodeFilter.FILTER_REJECT : n(l) && (!r || ge(l, r)) && (!(t != null && t.accept) || t.accept(l)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
class zr {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let o = this.fastMap.get(r ?? null);
    if (!o) return;
    let i = new $r({
      scopeRef: t
    });
    o.addChild(i), i.parent = o, this.fastMap.set(t, i), n && (i.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let r = this.fastMap.get(t);
    if (!r) return;
    let n = r.parent;
    for (let i of this.traverse()) i !== r && r.nodeToRestore && i.nodeToRestore && r.scopeRef && r.scopeRef.current && ge(i.nodeToRestore, r.scopeRef.current) && (i.nodeToRestore = r.nodeToRestore);
    let o = r.children;
    n && (n.removeChild(r), o.size > 0 && o.forEach((i) => n && n.addChild(i))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0) for (let r of t.children) yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new zr();
    var n;
    for (let o of this.traverse()) r.addTreeNode(o.scopeRef, (n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, o.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new $r({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class $r {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
let ne = new zr();
function ut(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = O({
    isFocused: !1,
    isFocusVisible: t || bo()
  }), [i, a] = G(!1), [l, s] = G(() => o.current.isFocused && o.current.isFocusVisible), d = H(() => s(o.current.isFocused && o.current.isFocusVisible), []), c = H((g) => {
    o.current.isFocused = g, a(g), d();
  }, [
    d
  ]);
  hl((g) => {
    o.current.isFocusVisible = g, d();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = mo({
    isDisabled: n,
    onFocusChange: c
  }), { focusWithinProps: b } = Hr({
    isDisabled: !n,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: n ? b : f
  };
}
const Pe = [];
function Fl(e, t) {
  let { onClose: r, shouldCloseOnBlur: n, isOpen: o, isDismissable: i = !1, isKeyboardDismissDisabled: a = !1, shouldCloseOnInteractOutside: l } = e;
  U(() => {
    if (o && !Pe.includes(t))
      return Pe.push(t), () => {
        let p = Pe.indexOf(t);
        p >= 0 && Pe.splice(p, 1);
      };
  }, [
    o,
    t
  ]);
  let s = () => {
    Pe[Pe.length - 1] === t && r && r();
  }, d = (p) => {
    (!l || l(p.target)) && Pe[Pe.length - 1] === t && (p.stopPropagation(), p.preventDefault());
  }, c = (p) => {
    (!l || l(p.target)) && (Pe[Pe.length - 1] === t && (p.stopPropagation(), p.preventDefault()), s());
  }, f = (p) => {
    p.key === "Escape" && !a && !p.nativeEvent.isComposing && (p.stopPropagation(), p.preventDefault(), s());
  };
  Tl({
    ref: t,
    onInteractOutside: i && o ? c : void 0,
    onInteractOutsideStart: d
  });
  let { focusWithinProps: b } = Hr({
    isDisabled: !n,
    onBlurWithin: (p) => {
      !p.relatedTarget || Nl(p.relatedTarget) || (!l || l(p.relatedTarget)) && (r == null || r());
    }
  }), g = (p) => {
    p.target === p.currentTarget && p.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: f,
      ...b
    },
    underlayProps: {
      onPointerDown: g
    }
  };
}
function Dl(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  U(() => {
    r && r.current && ro.set(r.current, t.close);
  });
  let i;
  n === "menu" ? i = !0 : n === "listbox" && (i = "listbox");
  let a = Oe();
  return {
    triggerProps: {
      "aria-haspopup": i,
      "aria-expanded": o,
      "aria-controls": o ? a : void 0,
      onPress: t.toggle
    },
    overlayProps: {
      id: a
    }
  };
}
const at = typeof document < "u" && window.visualViewport;
let yt = 0, Yt;
function Ol(e = {}) {
  let { isDisabled: t } = e;
  W(() => {
    if (!t)
      return yt++, yt === 1 && (_t() ? Yt = _l() : Yt = Al()), () => {
        yt--, yt === 0 && Yt();
      };
  }, [
    t
  ]);
}
function Al() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return Dt(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? Xt(document.documentElement, "scrollbarGutter", "stable") : Xt(document.documentElement, "paddingRight", `${e}px`)), Xt(document.documentElement, "overflow", "hidden"));
}
function _l() {
  let e, t = !1, r = (s) => {
    let d = s.target;
    e = ir(d) ? d : Yn(d, !0), t = !1;
    let c = d.ownerDocument.defaultView.getSelection();
    c && !c.isCollapsed && c.containsNode(d, !0) && (t = !0), "selectionStart" in d && "selectionEnd" in d && d.selectionStart < d.selectionEnd && d.ownerDocument.activeElement === d && (t = !0);
  }, n = document.createElement("style");
  n.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim(), document.head.prepend(n);
  let o = (s) => {
    if (!(s.touches.length === 2 || t)) {
      if (!e || e === document.documentElement || e === document.body) {
        s.preventDefault();
        return;
      }
      e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && s.preventDefault();
    }
  }, i = (s) => {
    let d = s.target, c = s.relatedTarget;
    if (c && Gt(c))
      c.focus({
        preventScroll: !0
      }), Pn(c, Gt(d));
    else if (!c) {
      var f;
      let b = (f = d.parentElement) === null || f === void 0 ? void 0 : f.closest("[tabindex]");
      b == null || b.focus({
        preventScroll: !0
      });
    }
  }, a = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function(s) {
    let d = document.activeElement != null && Gt(document.activeElement);
    a.call(this, {
      ...s,
      preventScroll: !0
    }), (!s || !s.preventScroll) && Pn(this, d);
  };
  let l = Dt(Zt(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), Zt(document, "touchmove", o, {
    passive: !1,
    capture: !0
  }), Zt(document, "blur", i, !0));
  return () => {
    l(), n.remove(), HTMLElement.prototype.focus = a;
  };
}
function Xt(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function Zt(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function Pn(e, t) {
  t || !at ? Tn(e) : at.addEventListener("resize", () => Tn(e), {
    once: !0
  });
}
function Tn(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let n = Yn(r);
    if (n !== document.documentElement && n !== document.body && n !== r) {
      let o = n.getBoundingClientRect(), i = r.getBoundingClientRect();
      if (i.top < o.top || i.bottom > o.top + r.clientHeight) {
        let a = o.bottom;
        at && (a = Math.min(a, at.offsetTop + at.height));
        let l = i.top - o.top - ((a - o.top) / 2 - i.height / 2);
        n.scrollTo({
          // Clamp to the valid range to prevent over-scrolling.
          top: Math.max(0, Math.min(n.scrollHeight - n.clientHeight, n.scrollTop + l)),
          behavior: "smooth"
        });
      }
    }
    r = n.parentElement;
  }
}
const Vl = /* @__PURE__ */ j({});
function Hl() {
  var e;
  return (e = oe(Vl)) !== null && e !== void 0 ? e : {};
}
var $o = {};
$o = {
  dismiss: "تجاهل"
};
var yo = {};
yo = {
  dismiss: "Отхвърляне"
};
var Eo = {};
Eo = {
  dismiss: "Odstranit"
};
var xo = {};
xo = {
  dismiss: "Luk"
};
var wo = {};
wo = {
  dismiss: "Schließen"
};
var Po = {};
Po = {
  dismiss: "Απόρριψη"
};
var To = {};
To = {
  dismiss: "Dismiss"
};
var So = {};
So = {
  dismiss: "Descartar"
};
var ko = {};
ko = {
  dismiss: "Lõpeta"
};
var Co = {};
Co = {
  dismiss: "Hylkää"
};
var Lo = {};
Lo = {
  dismiss: "Rejeter"
};
var No = {};
No = {
  dismiss: "התעלם"
};
var Io = {};
Io = {
  dismiss: "Odbaci"
};
var Mo = {};
Mo = {
  dismiss: "Elutasítás"
};
var Ro = {};
Ro = {
  dismiss: "Ignora"
};
var Fo = {};
Fo = {
  dismiss: "閉じる"
};
var Do = {};
Do = {
  dismiss: "무시"
};
var Oo = {};
Oo = {
  dismiss: "Atmesti"
};
var Ao = {};
Ao = {
  dismiss: "Nerādīt"
};
var _o = {};
_o = {
  dismiss: "Lukk"
};
var Vo = {};
Vo = {
  dismiss: "Negeren"
};
var Ho = {};
Ho = {
  dismiss: "Zignoruj"
};
var zo = {};
zo = {
  dismiss: "Descartar"
};
var Ko = {};
Ko = {
  dismiss: "Dispensar"
};
var Bo = {};
Bo = {
  dismiss: "Revocare"
};
var Go = {};
Go = {
  dismiss: "Пропустить"
};
var Wo = {};
Wo = {
  dismiss: "Zrušiť"
};
var Uo = {};
Uo = {
  dismiss: "Opusti"
};
var jo = {};
jo = {
  dismiss: "Odbaci"
};
var qo = {};
qo = {
  dismiss: "Avvisa"
};
var Yo = {};
Yo = {
  dismiss: "Kapat"
};
var Xo = {};
Xo = {
  dismiss: "Скасувати"
};
var Zo = {};
Zo = {
  dismiss: "取消"
};
var Jo = {};
Jo = {
  dismiss: "關閉"
};
var Qo = {};
Qo = {
  "ar-AE": $o,
  "bg-BG": yo,
  "cs-CZ": Eo,
  "da-DK": xo,
  "de-DE": wo,
  "el-GR": Po,
  "en-US": To,
  "es-ES": So,
  "et-EE": ko,
  "fi-FI": Co,
  "fr-FR": Lo,
  "he-IL": No,
  "hr-HR": Io,
  "hu-HU": Mo,
  "it-IT": Ro,
  "ja-JP": Fo,
  "ko-KR": Do,
  "lt-LT": Oo,
  "lv-LV": Ao,
  "nb-NO": _o,
  "nl-NL": Vo,
  "pl-PL": Ho,
  "pt-BR": zo,
  "pt-PT": Ko,
  "ro-RO": Bo,
  "ru-RU": Go,
  "sk-SK": Wo,
  "sl-SI": Uo,
  "sr-SP": jo,
  "sv-SE": qo,
  "tr-TR": Yo,
  "uk-UA": Xo,
  "zh-CN": Zo,
  "zh-TW": Jo
};
const Sn = {
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
};
function zl(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = G(!1), { focusWithinProps: i } = Hr({
    isDisabled: !r,
    onFocusWithinChange: (l) => o(l)
  }), a = se(() => n ? t : t ? {
    ...Sn,
    ...t
  } : Sn, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: a
    }
  };
}
function ei(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...i } = e, { visuallyHiddenProps: a } = zl(e);
  return /* @__PURE__ */ C.createElement(r, J(i, a), t);
}
function Kl(e) {
  return e && e.__esModule ? e.default : e;
}
function kn(e) {
  let { onDismiss: t, ...r } = e, n = Za(Kl(Qo), "@react-aria/overlays"), o = qn(r, n.format("dismiss")), i = () => {
    t && t();
  };
  return /* @__PURE__ */ C.createElement(ei, null, /* @__PURE__ */ C.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const Bl = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
let Qe = /* @__PURE__ */ new WeakMap(), ce = [];
function Gl(e, t) {
  let r = ue(e == null ? void 0 : e[0]), n = t instanceof r.Element ? {
    root: t
  } : t;
  var o;
  let i = (o = n == null ? void 0 : n.root) !== null && o !== void 0 ? o : document.body, a = (n == null ? void 0 : n.shouldUseInert) && Bl, l = new Set(e), s = /* @__PURE__ */ new Set(), d = (m) => a && m instanceof r.HTMLElement ? m.inert : m.getAttribute("aria-hidden") === "true", c = (m, h) => {
    a && m instanceof r.HTMLElement ? m.inert = h : h ? m.setAttribute("aria-hidden", "true") : (m.removeAttribute("aria-hidden"), m instanceof r.HTMLElement && (m.inert = !1));
  }, f = (m) => {
    for (let w of m.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) l.add(w);
    let h = (w) => {
      if (s.has(w) || l.has(w) || w.parentElement && s.has(w.parentElement) && w.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (let x of l)
        if (w.contains(x)) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, $ = document.createTreeWalker(m, NodeFilter.SHOW_ELEMENT, {
      acceptNode: h
    }), y = h(m);
    if (y === NodeFilter.FILTER_ACCEPT && b(m), y !== NodeFilter.FILTER_REJECT) {
      let w = $.nextNode();
      for (; w != null; )
        b(w), w = $.nextNode();
    }
  }, b = (m) => {
    var h;
    let $ = (h = Qe.get(m)) !== null && h !== void 0 ? h : 0;
    d(m) && $ === 0 || ($ === 0 && c(m, !0), s.add(m), Qe.set(m, $ + 1));
  };
  ce.length && ce[ce.length - 1].disconnect(), f(i);
  let g = new MutationObserver((m) => {
    for (let h of m)
      if (h.type === "childList" && ![
        ...l,
        ...s
      ].some(($) => $.contains(h.target)))
        for (let $ of h.addedNodes)
          ($ instanceof HTMLElement || $ instanceof SVGElement) && ($.dataset.liveAnnouncer === "true" || $.dataset.reactAriaTopLayer === "true") ? l.add($) : $ instanceof Element && f($);
  });
  g.observe(i, {
    childList: !0,
    subtree: !0
  });
  let p = {
    visibleNodes: l,
    hiddenNodes: s,
    observe() {
      g.observe(i, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      g.disconnect();
    }
  };
  return ce.push(p), () => {
    g.disconnect();
    for (let m of s) {
      let h = Qe.get(m);
      h != null && (h === 1 ? (c(m, !1), Qe.delete(m)) : Qe.set(m, h - 1));
    }
    p === ce[ce.length - 1] ? (ce.pop(), ce.length && ce[ce.length - 1].observe()) : ce.splice(ce.indexOf(p), 1);
  };
}
function Wl(e) {
  let t = ce[ce.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
function Ul(e, t) {
  let { triggerRef: r, popoverRef: n, groupRef: o, isNonModal: i, isKeyboardDismissDisabled: a, shouldCloseOnInteractOutside: l, ...s } = e, d = s.trigger === "SubmenuTrigger", { overlayProps: c, underlayProps: f } = Fl({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !i || d,
    isKeyboardDismissDisabled: a,
    shouldCloseOnInteractOutside: l
  }, o ?? n), { overlayProps: b, arrowProps: g, placement: p, triggerAnchorPoint: m } = el({
    ...s,
    targetRef: r,
    overlayRef: n,
    isOpen: t.isOpen,
    onClose: i && !d ? t.close : null
  });
  return Ol({
    isDisabled: i || !t.isOpen
  }), U(() => {
    if (t.isOpen && n.current) {
      var h, $;
      return i ? Wl((h = o == null ? void 0 : o.current) !== null && h !== void 0 ? h : n.current) : Gl([
        ($ = o == null ? void 0 : o.current) !== null && $ !== void 0 ? $ : n.current
      ], {
        shouldUseInert: !0
      });
    }
  }, [
    i,
    t.isOpen,
    n,
    o
  ]), {
    popoverProps: J(c, b),
    arrowProps: g,
    underlayProps: f,
    placement: p,
    triggerAnchorPoint: m
  };
}
const ti = /* @__PURE__ */ C.createContext(null);
function Cn(e) {
  let t = Pr(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, i] = G(!1), a = se(() => ({
    contain: o,
    setContain: i
  }), [
    o,
    i
  ]), { getContainer: l } = Hl();
  if (!e.portalContainer && l && (r = l()), !r) return null;
  let s = e.children;
  return e.disableFocusManagement || (s = /* @__PURE__ */ C.createElement(Sl, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, s)), s = /* @__PURE__ */ C.createElement(ti.Provider, {
    value: a
  }, /* @__PURE__ */ C.createElement(wl, null, s)), /* @__PURE__ */ Ai.createPortal(s, r);
}
function jl() {
  let e = oe(ti), t = e == null ? void 0 : e.setContain;
  W(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function ql(e) {
  let { id: t, label: r, "aria-labelledby": n, "aria-label": o, labelElementType: i = "label" } = e;
  t = Oe(t);
  let a = Oe(), l = {};
  r ? (n = n ? `${a} ${n}` : a, l = {
    id: a,
    htmlFor: i === "label" ? t : void 0
  }) : !n && !o && process.env.NODE_ENV !== "production" && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let s = qn({
    id: t,
    "aria-label": o,
    "aria-labelledby": n
  });
  return {
    labelProps: l,
    fieldProps: s
  };
}
function Yl(e) {
  let { description: t, errorMessage: r, isInvalid: n, validationState: o } = e, { labelProps: i, fieldProps: a } = ql(e), l = rr([
    !!t,
    !!r,
    n,
    o
  ]), s = rr([
    !!t,
    !!r,
    n,
    o
  ]);
  return a = J(a, {
    "aria-describedby": [
      l,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      s,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: i,
    fieldProps: a,
    descriptionProps: {
      id: l
    },
    errorMessageProps: {
      id: s
    }
  };
}
const ri = {
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
}, ni = {
  ...ri,
  customError: !0,
  valid: !1
}, Ue = {
  isInvalid: !1,
  validationDetails: ri,
  validationErrors: []
}, Xl = j({}), Rt = "__formValidationState" + Date.now();
function Kr(e) {
  if (e[Rt]) {
    let { realtimeValidation: t, displayValidation: r, updateValidation: n, resetValidation: o, commitValidation: i } = e[Rt];
    return {
      realtimeValidation: t,
      displayValidation: r,
      updateValidation: n,
      resetValidation: o,
      commitValidation: i
    };
  }
  return Zl(e);
}
function Zl(e) {
  let { isInvalid: t, validationState: r, name: n, value: o, builtinValidation: i, validate: a, validationBehavior: l = "aria" } = e;
  r && (t || (t = r === "invalid"));
  let s = t !== void 0 ? {
    isInvalid: t,
    validationErrors: [],
    validationDetails: ni
  } : null, d = se(() => {
    if (!a || o == null) return null;
    let _ = Jl(a, o);
    return Ln(_);
  }, [
    a,
    o
  ]);
  i != null && i.validationDetails.valid && (i = void 0);
  let c = oe(Xl), f = se(() => n ? Array.isArray(n) ? n.flatMap((_) => yr(c[_])) : yr(c[n]) : [], [
    c,
    n
  ]), [b, g] = G(c), [p, m] = G(!1);
  c !== b && (g(c), m(!1));
  let h = se(() => Ln(p ? [] : f), [
    p,
    f
  ]), $ = O(Ue), [y, w] = G(Ue), x = O(Ue), I = () => {
    if (!M) return;
    R(!1);
    let _ = d || i || $.current;
    Jt(_, x.current) || (x.current = _, w(_));
  }, [M, R] = G(!1);
  return U(I), {
    realtimeValidation: s || h || d || i || Ue,
    displayValidation: l === "native" ? s || h || y : s || h || d || i || y,
    updateValidation(_) {
      l === "aria" && !Jt(y, _) ? w(_) : $.current = _;
    },
    resetValidation() {
      let _ = Ue;
      Jt(_, x.current) || (x.current = _, w(_)), l === "native" && R(!1), m(!0);
    },
    commitValidation() {
      l === "native" && R(!0), m(!0);
    }
  };
}
function yr(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function Jl(e, t) {
  if (typeof e == "function") {
    let r = e(t);
    if (r && typeof r != "boolean") return yr(r);
  }
  return [];
}
function Ln(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: ni
  } : null;
}
function Jt(e, t) {
  return e === t ? !0 : !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((r, n) => r === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([r, n]) => t.validationDetails[r] === n);
}
function oi(e, t, r) {
  let { validationBehavior: n, focus: o } = e;
  W(() => {
    if (n === "native" && (r != null && r.current) && !r.current.disabled) {
      let d = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(d), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(es(r.current));
    }
  });
  let i = O(!1), a = ye(() => {
    i.current || t.resetValidation();
  }), l = ye((d) => {
    var c;
    t.displayValidation.isInvalid || t.commitValidation();
    let f = r == null || (c = r.current) === null || c === void 0 ? void 0 : c.form;
    if (!d.defaultPrevented && r && f && ts(f) === r.current) {
      var b;
      o ? o() : (b = r.current) === null || b === void 0 || b.focus(), pl("keyboard");
    }
    d.preventDefault();
  }), s = ye(() => {
    t.commitValidation();
  });
  U(() => {
    let d = r == null ? void 0 : r.current;
    if (!d) return;
    let c = d.form, f = c == null ? void 0 : c.reset;
    return c && (c.reset = () => {
      i.current = !window.event || window.event.type === "message" && window.event.target instanceof MessagePort, f == null || f.call(c), i.current = !1;
    }), d.addEventListener("invalid", l), d.addEventListener("change", s), c == null || c.addEventListener("reset", a), () => {
      d.removeEventListener("invalid", l), d.removeEventListener("change", s), c == null || c.removeEventListener("reset", a), c && (c.reset = f);
    };
  }, [
    r,
    n
  ]);
}
function Ql(e) {
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
function es(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: Ql(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function ts(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let r = e.elements[t];
    if (!r.validity.valid) return r;
  }
  return null;
}
function rs(e, t) {
  let { inputElementType: r = "input", isDisabled: n = !1, isRequired: o = !1, isReadOnly: i = !1, type: a = "text", validationBehavior: l = "aria" } = e, [s, d] = Mr(e.value, e.defaultValue || "", e.onChange), { focusableProps: c } = Vr(e, t), f = Kr({
    ...e,
    value: s
  }), { isInvalid: b, validationErrors: g, validationDetails: p } = f.displayValidation, { labelProps: m, fieldProps: h, descriptionProps: $, errorMessageProps: y } = Yl({
    ...e,
    isInvalid: b,
    errorMessage: e.errorMessage || g
  }), w = Te(e, {
    labelable: !0
  });
  const x = {
    type: a,
    pattern: e.pattern
  };
  let [I] = G(s);
  var M;
  return Xn(t, (M = e.defaultValue) !== null && M !== void 0 ? M : I, d), oi(e, f, t), {
    labelProps: m,
    inputProps: J(w, r === "input" ? x : void 0, {
      disabled: n,
      readOnly: i,
      required: o && l === "native",
      "aria-required": o && l === "aria" || void 0,
      "aria-invalid": b || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-activedescendant": e["aria-activedescendant"],
      "aria-autocomplete": e["aria-autocomplete"],
      "aria-haspopup": e["aria-haspopup"],
      "aria-controls": e["aria-controls"],
      value: s,
      onChange: (R) => d(R.target.value),
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
      [parseInt(C.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
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
      ...c,
      ...h
    }),
    descriptionProps: $,
    errorMessageProps: y,
    isInvalid: b,
    validationErrors: g,
    validationDetails: p
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
const ii = /* @__PURE__ */ j(!1);
function zt(e) {
  let t = (r, n) => oe(ii) ? null : e(r, n);
  return t.displayName = e.displayName || e.name, xe(t);
}
function ns() {
  return oe(ii);
}
function os(e, t) {
  let { elementType: r = "button", isDisabled: n, onPress: o, onPressStart: i, onPressEnd: a, onPressUp: l, onPressChange: s, preventFocusOnPress: d, allowFocusWhenDisabled: c, onClick: f, href: b, target: g, rel: p, type: m = "button" } = e, h;
  r === "button" ? h = {
    type: m,
    disabled: n,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : h = {
    role: "button",
    href: r === "a" && !n ? b : void 0,
    target: r === "a" ? g : void 0,
    type: r === "input" ? m : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? p : void 0
  };
  let { pressProps: $, isPressed: y } = Lt({
    onPressStart: i,
    onPressEnd: a,
    onPressChange: s,
    onPress: o,
    onPressUp: l,
    onClick: f,
    isDisabled: n,
    preventFocusOnPress: d,
    ref: t
  }), { focusableProps: w } = Vr(e, t);
  c && (w.tabIndex = n ? -1 : w.tabIndex);
  let x = J(w, $, Te(e, {
    labelable: !0
  }));
  return {
    isPressed: y,
    buttonProps: J(h, x, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
function is(e, t, r) {
  let { isDisabled: n = !1, isReadOnly: o = !1, value: i, name: a, form: l, children: s, "aria-label": d, "aria-labelledby": c, validationState: f = "valid", isInvalid: b, onPressStart: g, onPressEnd: p, onPressChange: m, onPress: h, onPressUp: $, onClick: y } = e, w = (B) => {
    B.stopPropagation(), t.setSelected(B.target.checked);
  }, x = s != null, I = d != null || c != null;
  !x && !I && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: M, isPressed: R } = Lt({
    onPressStart: g,
    onPressEnd: p,
    onPressChange: m,
    onPress: h,
    onPressUp: $,
    onClick: y,
    isDisabled: n
  }), { pressProps: E, isPressed: F } = Lt({
    onPressStart: g,
    onPressEnd: p,
    onPressChange: m,
    onPressUp: $,
    onClick: y,
    onPress(B) {
      var Q;
      h == null || h(B), t.toggle(), (Q = r.current) === null || Q === void 0 || Q.focus();
    },
    isDisabled: n || o
  }), { focusableProps: _ } = Vr(e, r), te = J(M, _), K = Te(e, {
    labelable: !0
  });
  return Xn(r, t.defaultSelected, t.setSelected), {
    labelProps: J(E, {
      onClick: (B) => B.preventDefault()
    }),
    inputProps: J(K, {
      "aria-invalid": b || f === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": o || void 0,
      onChange: w,
      disabled: n,
      ...i == null ? {} : {
        value: i
      },
      name: a,
      form: l,
      type: "checkbox",
      ...te
    }),
    isSelected: t.isSelected,
    isPressed: R || F,
    isDisabled: n,
    isReadOnly: o,
    isInvalid: b || f === "invalid"
  };
}
function ai(e, t, r) {
  let n = Kr({
    ...e,
    value: t.isSelected
  }), { isInvalid: o, validationErrors: i, validationDetails: a } = n.displayValidation, { labelProps: l, inputProps: s, isSelected: d, isPressed: c, isDisabled: f, isReadOnly: b } = is({
    ...e,
    isInvalid: o
  }, t, r);
  oi(e, n, r);
  let { isIndeterminate: g, isRequired: p, validationBehavior: m = "aria" } = e;
  U(() => {
    r.current && (r.current.indeterminate = !!g);
  });
  let { pressProps: h } = Lt({
    isDisabled: f || b,
    onPress() {
      let { [Rt]: $ } = e, { commitValidation: y } = $ || n;
      y();
    }
  });
  return {
    labelProps: J(l, h, se(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: ($) => $.preventDefault()
    }), [])),
    inputProps: {
      ...s,
      checked: d,
      "aria-required": p && m === "aria" || void 0,
      required: p && m === "native"
    },
    isSelected: d,
    isPressed: c,
    isDisabled: f,
    isReadOnly: b,
    isInvalid: o,
    validationErrors: i,
    validationDetails: a
  };
}
const as = /* @__PURE__ */ new WeakMap();
function li(e = {}) {
  let { isReadOnly: t } = e, [r, n] = Mr(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = G(r);
  function i(s) {
    t || n(s);
  }
  function a() {
    t || n(!r);
  }
  var l;
  return {
    isSelected: r,
    defaultSelected: (l = e.defaultSelected) !== null && l !== void 0 ? l : o,
    setSelected: i,
    toggle: a
  };
}
function ls(e, t, r) {
  const n = li({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange($) {
      $ ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange($);
    }
  });
  let { name: o, form: i, descriptionId: a, errorMessageId: l, validationBehavior: s } = as.get(t);
  var d;
  s = (d = e.validationBehavior) !== null && d !== void 0 ? d : s;
  let { realtimeValidation: c } = Kr({
    ...e,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), f = O(Ue), b = () => {
    t.setInvalid(e.value, c.isInvalid ? c : f.current);
  };
  U(b);
  let g = t.realtimeValidation.isInvalid ? t.realtimeValidation : c, p = s === "native" ? t.displayValidation : g;
  var m;
  let h = ai({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || o,
    form: e.form || i,
    isRequired: (m = e.isRequired) !== null && m !== void 0 ? m : t.isRequired,
    validationBehavior: s,
    [Rt]: {
      realtimeValidation: g,
      displayValidation: p,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation($) {
        f.current = $, b();
      }
    }
  }, n, r);
  return {
    ...h,
    inputProps: {
      ...h.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? l : null,
        a
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
function ss(e, t) {
  let { role: r = "dialog" } = e, n = rr();
  n = e["aria-label"] ? void 0 : n;
  let o = O(!1);
  return U(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      dt(t.current);
      let i = setTimeout(() => {
        (document.activeElement === t.current || document.activeElement === document.body) && (o.current = !0, t.current && (t.current.blur(), dt(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(i);
      };
    }
  }, [
    t
  ]), jl(), {
    dialogProps: {
      ...Te(e, {
        labelable: !0
      }),
      role: r,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] || n,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (i) => {
        o.current && i.stopPropagation();
      }
    },
    titleProps: {
      id: n
    }
  };
}
const si = /* @__PURE__ */ j({}), ds = /* @__PURE__ */ zt(function(t, r) {
  [t, r] = Ee(t, r, si);
  let { elementType: n = "label", ...o } = t;
  return /* @__PURE__ */ C.createElement(n, {
    className: "react-aria-Label",
    ...o,
    ref: r
  });
}), cs = /* @__PURE__ */ j(null), di = /* @__PURE__ */ j({}), us = /* @__PURE__ */ zt(function(t, r) {
  [t, r] = Ee(t, r, di);
  let n = t, { isPending: o } = n, { buttonProps: i, isPressed: a } = os(t, r);
  i = fs(i, o);
  let { focusProps: l, isFocused: s, isFocusVisible: d } = ut(t), { hoverProps: c, isHovered: f } = ct({
    ...t,
    isDisabled: t.isDisabled || o
  }), b = {
    isHovered: f,
    isPressed: (n.isPressed || a) && !o,
    isFocused: s,
    isFocusVisible: d,
    isDisabled: t.isDisabled || !1,
    isPending: o ?? !1
  }, g = Le({
    ...t,
    values: b,
    defaultClassName: "react-aria-Button"
  }), p = Oe(i.id), m = Oe(), h = i["aria-labelledby"];
  o && (h ? h = `${h} ${m}` : i["aria-label"] && (h = `${p} ${m}`));
  let $ = O(o);
  U(() => {
    let w = {
      "aria-labelledby": h || p
    };
    (!$.current && s && o || $.current && s && !o) && Jr(w, "assertive"), $.current = o;
  }, [
    o,
    s,
    h,
    p
  ]);
  let y = Te(t, {
    global: !0
  });
  return delete y.onClick, /* @__PURE__ */ C.createElement("button", {
    ...J(y, g, i, l, c),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: i.type === "submit" && o ? "button" : i.type,
    id: p,
    ref: r,
    "aria-labelledby": h,
    slot: t.slot || void 0,
    "aria-disabled": o ? "true" : i["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": b.isPressed || void 0,
    "data-hovered": f || void 0,
    "data-focused": s || void 0,
    "data-pending": o || void 0,
    "data-focus-visible": d || void 0
  }, /* @__PURE__ */ C.createElement(cs.Provider, {
    value: {
      id: m
    }
  }, g.children));
});
function fs(e, t) {
  if (t) {
    for (const r in e) r.startsWith("on") && !(r.includes("Focus") || r.includes("Blur")) && (e[r] = void 0);
    e.href = void 0, e.target = void 0;
  }
  return e;
}
const ci = /* @__PURE__ */ j({}), Br = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = Ee(t, r, ci);
  let { elementType: n = "span", ...o } = t;
  return /* @__PURE__ */ C.createElement(n, {
    className: "react-aria-Text",
    ...o,
    ref: r
  });
});
function ui(e) {
  let [t, r] = Mr(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = H(() => {
    r(!0);
  }, [
    r
  ]), o = H(() => {
    r(!1);
  }, [
    r
  ]), i = H(() => {
    r(!t);
  }, [
    r,
    t
  ]);
  return {
    isOpen: t,
    setOpen: r,
    open: n,
    close: o,
    toggle: i
  };
}
function vs(e) {
  let t = ui(e), [r, n] = G(null), [o, i] = G([]), a = () => {
    i([]), t.close();
  };
  return {
    focusStrategy: r,
    ...t,
    open(d = null) {
      n(d), t.open();
    },
    toggle(d = null) {
      n(d), t.toggle();
    },
    close() {
      a();
    },
    expandedKeysStack: o,
    openSubmenu: (d, c) => {
      i((f) => c > f.length ? f : [
        ...f.slice(0, c),
        d
      ]);
    },
    closeSubmenu: (d, c) => {
      i((f) => f[c] === d ? f.slice(0, c) : f);
    }
  };
}
const Gr = /* @__PURE__ */ j(null), bs = /* @__PURE__ */ xe(function(t, r) {
  let n = oe(Gr);
  return n != null && n.isInvalid ? /* @__PURE__ */ C.createElement(ps, {
    ...t,
    ref: r
  }) : null;
}), ps = /* @__PURE__ */ xe((e, t) => {
  let r = oe(Gr), n = Te(e, {
    global: !0
  }), o = Le({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: r.validationErrors.length === 0 ? void 0 : r.validationErrors.join(" "),
    values: r
  });
  return o.children == null ? null : /* @__PURE__ */ C.createElement(Br, {
    slot: "errorMessage",
    ...n,
    ...o,
    ref: t
  });
}), fi = /* @__PURE__ */ j(null), ms = /* @__PURE__ */ j(null), gs = /* @__PURE__ */ xe(function(t, r) {
  let { inputRef: n = null, ...o } = t;
  [t, r] = Ee(o, r, _i);
  let { validationBehavior: i } = Fr(fi) || {};
  var a, l;
  let s = (l = (a = t.validationBehavior) !== null && a !== void 0 ? a : i) !== null && l !== void 0 ? l : "native", d = oe(ms), c = Cr(se(() => Bn(n, t.inputRef !== void 0 ? t.inputRef : null), [
    n,
    t.inputRef
  ])), { labelProps: f, inputProps: b, isSelected: g, isDisabled: p, isReadOnly: m, isPressed: h, isInvalid: $ } = d ? ls({
    ...dr(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, d, c) : ai({
    ...dr(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: s
  }, li(t), c), { isFocused: y, isFocusVisible: w, focusProps: x } = ut(), I = p || m, { hoverProps: M, isHovered: R } = ct({
    ...t,
    isDisabled: I
  }), E = Le({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: g,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: h,
      isHovered: R,
      isFocused: y,
      isFocusVisible: w,
      isDisabled: p,
      isReadOnly: m,
      isInvalid: $,
      isRequired: t.isRequired || !1
    }
  }), F = Te(t, {
    global: !0
  });
  return delete F.id, delete F.onClick, /* @__PURE__ */ C.createElement("label", {
    ...J(F, f, M, E),
    ref: r,
    slot: t.slot || void 0,
    "data-selected": g || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": h || void 0,
    "data-hovered": R || void 0,
    "data-focused": y || void 0,
    "data-focus-visible": w || void 0,
    "data-disabled": p || void 0,
    "data-readonly": m || void 0,
    "data-invalid": $ || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ C.createElement(ei, {
    elementType: "span"
  }, /* @__PURE__ */ C.createElement("input", {
    ...J(b, x),
    ref: c
  })), E.children);
}), vi = /* @__PURE__ */ j({}), hs = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = Ee(t, r, vi);
  let { isDisabled: n, isInvalid: o, isReadOnly: i, onHoverStart: a, onHoverChange: l, onHoverEnd: s, ...d } = t;
  n ?? (n = !!t["aria-disabled"] && t["aria-disabled"] !== "false"), o ?? (o = !!t["aria-invalid"] && t["aria-invalid"] !== "false");
  let { hoverProps: c, isHovered: f } = ct({
    onHoverStart: a,
    onHoverChange: l,
    onHoverEnd: s,
    isDisabled: n
  }), { isFocused: b, isFocusVisible: g, focusProps: p } = ut({
    within: !0
  }), m = Le({
    ...t,
    values: {
      isHovered: f,
      isFocusWithin: b,
      isFocusVisible: g,
      isDisabled: n,
      isInvalid: o
    },
    defaultClassName: "react-aria-Group"
  });
  var h, $;
  return /* @__PURE__ */ C.createElement("div", {
    ...J(d, p, c),
    ...m,
    ref: r,
    role: (h = t.role) !== null && h !== void 0 ? h : "group",
    slot: ($ = t.slot) !== null && $ !== void 0 ? $ : void 0,
    "data-focus-within": b || void 0,
    "data-hovered": f || void 0,
    "data-focus-visible": g || void 0,
    "data-disabled": n || void 0,
    "data-invalid": o || void 0,
    "data-readonly": i || void 0
  }, m.children);
}), bi = /* @__PURE__ */ j({});
let $s = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const ys = /* @__PURE__ */ zt(function(t, r) {
  [t, r] = Ee(t, r, bi);
  let { hoverProps: n, isHovered: o } = ct({
    ...t,
    isDisabled: t.disabled
  }), { isFocused: i, isFocusVisible: a, focusProps: l } = ut({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), s = !!t["aria-invalid"] && t["aria-invalid"] !== "false", d = Le({
    ...t,
    values: {
      isHovered: o,
      isFocused: i,
      isFocusVisible: a,
      isDisabled: t.disabled || !1,
      isInvalid: s
    },
    defaultClassName: "react-aria-Input"
  });
  return /* @__PURE__ */ C.createElement("input", {
    ...J($s(t), l, n),
    ...d,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": s || void 0
  });
}), Es = /* @__PURE__ */ j({
  placement: "bottom"
}), pi = /* @__PURE__ */ j(null), Nn = /* @__PURE__ */ j(null), xs = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = Ee(t, r, pi);
  let n = oe(Wr), o = ui(t), i = t.isOpen != null || t.defaultOpen != null || !n ? o : n, a = ya(r, i.isOpen) || t.isExiting || !1, l = ns(), { direction: s } = Or();
  if (l) {
    let d = t.children;
    return typeof d == "function" && (d = d({
      trigger: t.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1,
      defaultChildren: null
    })), /* @__PURE__ */ C.createElement(C.Fragment, null, d);
  }
  return i && !i.isOpen && !a ? null : /* @__PURE__ */ C.createElement(ws, {
    ...t,
    triggerRef: t.triggerRef,
    state: i,
    popoverRef: r,
    isExiting: a,
    dir: s
  });
});
function ws({ state: e, isExiting: t, UNSTABLE_portalContainer: r, clearContexts: n, ...o }) {
  let i = O(null), a = O(null), l = oe(Nn), s = l && o.trigger === "SubmenuTrigger";
  var d;
  let { popoverProps: c, underlayProps: f, arrowProps: b, placement: g, triggerAnchorPoint: p } = Ul({
    ...o,
    offset: (d = o.offset) !== null && d !== void 0 ? d : 8,
    arrowRef: i,
    // If this is a submenu/subdialog, use the root popover's container
    // to detect outside interaction and add aria-hidden.
    groupRef: s ? l : a
  }, e), m = o.popoverRef, h = $a(m, !!g) || o.isEntering || !1, $ = Le({
    ...o,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: o.trigger || null,
      placement: g,
      isEntering: h,
      isExiting: t
    }
  }), y = !o.isNonModal || o.trigger === "SubmenuTrigger", [w, x] = G(!1);
  W(() => {
    m.current && x(y && !m.current.querySelector("[role=dialog]"));
  }, [
    m,
    y
  ]), U(() => {
    w && o.trigger !== "SubmenuTrigger" && m.current && !m.current.contains(document.activeElement) && dt(m.current);
  }, [
    w,
    m,
    o.trigger
  ]);
  let I = se(() => {
    let F = $.children;
    if (n) for (let _ of n) F = /* @__PURE__ */ C.createElement(_.Provider, {
      value: null
    }, F);
    return F;
  }, [
    $.children,
    n
  ]), M = {
    ...c.style,
    "--trigger-anchor-point": p ? `${p.x}px ${p.y}px` : void 0,
    ...$.style
  }, R = /* @__PURE__ */ C.createElement("div", {
    ...J(Te(o, {
      global: !0
    }), c),
    ...$,
    role: w ? "dialog" : void 0,
    tabIndex: w ? -1 : void 0,
    "aria-label": o["aria-label"],
    "aria-labelledby": o["aria-labelledby"],
    ref: m,
    slot: o.slot || void 0,
    style: M,
    dir: o.dir,
    "data-trigger": o.trigger,
    "data-placement": g,
    "data-entering": h || void 0,
    "data-exiting": t || void 0
  }, !o.isNonModal && /* @__PURE__ */ C.createElement(kn, {
    onDismiss: e.close
  }), /* @__PURE__ */ C.createElement(Es.Provider, {
    value: {
      ...b,
      placement: g,
      ref: i
    }
  }, I), /* @__PURE__ */ C.createElement(kn, {
    onDismiss: e.close
  }));
  if (!s) return /* @__PURE__ */ C.createElement(Cn, {
    ...o,
    shouldContainFocus: w,
    isExiting: t,
    portalContainer: r
  }, !o.isNonModal && e.isOpen && /* @__PURE__ */ C.createElement("div", {
    "data-testid": "underlay",
    ...f,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ C.createElement("div", {
    ref: a,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ C.createElement(Nn.Provider, {
    value: a
  }, R)));
  var E;
  return /* @__PURE__ */ C.createElement(Cn, {
    ...o,
    shouldContainFocus: w,
    isExiting: t,
    portalContainer: (E = r ?? (l == null ? void 0 : l.current)) !== null && E !== void 0 ? E : void 0
  }, R);
}
const Ps = /* @__PURE__ */ j(null), mi = /* @__PURE__ */ j(null), Wr = /* @__PURE__ */ j(null);
function Ts(e) {
  let t = vs(e), r = O(null), { triggerProps: n, overlayProps: o } = Dl({
    type: "dialog"
  }, t, r), [i, a] = G(null), l = H(() => {
    r.current && a(r.current.offsetWidth + "px");
  }, [
    r
  ]);
  return or({
    ref: r,
    onResize: l
  }), n.id = Oe(), o["aria-labelledby"] = n.id, /* @__PURE__ */ C.createElement(Rr, {
    values: [
      [
        Wr,
        t
      ],
      [
        Ps,
        t
      ],
      [
        mi,
        o
      ],
      [
        pi,
        {
          trigger: "DialogTrigger",
          triggerRef: r,
          "aria-labelledby": o["aria-labelledby"],
          style: {
            "--trigger-width": i
          }
        }
      ]
    ]
  }, /* @__PURE__ */ C.createElement(xl, {
    ...n,
    ref: r,
    isPressed: t.isOpen
  }, e.children));
}
const Ss = /* @__PURE__ */ xe(function(t, r) {
  let n = t["aria-labelledby"];
  [t, r] = Ee(t, r, mi);
  let { dialogProps: o, titleProps: i } = ss({
    ...t,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": n
  }, r), a = oe(Wr);
  !o["aria-label"] && !o["aria-labelledby"] && (t["aria-labelledby"] ? o["aria-labelledby"] = t["aria-labelledby"] : process.env.NODE_ENV !== "production" && console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  let l = Le({
    defaultClassName: "react-aria-Dialog",
    className: t.className,
    style: t.style,
    children: t.children,
    values: {
      close: (a == null ? void 0 : a.close) || (() => {
      })
    }
  }), s = Te(t, {
    global: !0
  });
  return /* @__PURE__ */ C.createElement("section", {
    ...J(s, l, o),
    ref: r,
    slot: t.slot || void 0
  }, /* @__PURE__ */ C.createElement(Rr, {
    values: [
      [
        Vi,
        {
          slots: {
            [sr]: {},
            title: {
              ...i,
              level: 2
            }
          }
        }
      ],
      [
        di,
        {
          slots: {
            [sr]: {},
            close: {
              onPress: () => a == null ? void 0 : a.close()
            }
          }
        }
      ]
    ]
  }, l.children));
}), gi = /* @__PURE__ */ j({});
let ks = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const Cs = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = Ee(t, r, gi);
  let { hoverProps: n, isHovered: o } = ct(t), { isFocused: i, isFocusVisible: a, focusProps: l } = ut({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), s = !!t["aria-invalid"] && t["aria-invalid"] !== "false", d = Le({
    ...t,
    values: {
      isHovered: o,
      isFocused: i,
      isFocusVisible: a,
      isDisabled: t.disabled || !1,
      isInvalid: s
    },
    defaultClassName: "react-aria-TextArea"
  });
  return /* @__PURE__ */ C.createElement("textarea", {
    ...J(ks(t), l, n),
    ...d,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": s || void 0
  });
}), Ls = /* @__PURE__ */ j(null), Ns = /* @__PURE__ */ zt(function(t, r) {
  [t, r] = Ee(t, r, Ls);
  let { validationBehavior: n } = Fr(fi) || {};
  var o, i;
  let a = (i = (o = t.validationBehavior) !== null && o !== void 0 ? o : n) !== null && i !== void 0 ? i : "native", l = O(null);
  [t, l] = Ee(t, l, Hi);
  let [s, d] = Ca(!t["aria-label"] && !t["aria-labelledby"]), [c, f] = G("input"), { labelProps: b, inputProps: g, descriptionProps: p, errorMessageProps: m, ...h } = rs({
    ...dr(t),
    inputElementType: c,
    label: d,
    validationBehavior: a
  }, l), $ = H((x) => {
    l.current = x, x && f(x instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, [
    l
  ]), y = Le({
    ...t,
    values: {
      isDisabled: t.isDisabled || !1,
      isInvalid: h.isInvalid,
      isReadOnly: t.isReadOnly || !1,
      isRequired: t.isRequired || !1
    },
    defaultClassName: "react-aria-TextField"
  }), w = Te(t, {
    global: !0
  });
  return delete w.id, /* @__PURE__ */ C.createElement("div", {
    ...w,
    ...y,
    ref: r,
    slot: t.slot || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": h.isInvalid || void 0,
    "data-readonly": t.isReadOnly || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ C.createElement(Rr, {
    values: [
      [
        si,
        {
          ...b,
          ref: s
        }
      ],
      [
        bi,
        {
          ...g,
          ref: $
        }
      ],
      [
        gi,
        {
          ...g,
          ref: $
        }
      ],
      [
        vi,
        {
          role: "presentation",
          isInvalid: h.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        ci,
        {
          slots: {
            description: p,
            errorMessage: m
          }
        }
      ],
      [
        Gr,
        h
      ]
    ]
  }, y.children));
}), Is = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, Ms = (e, t) => ({
  classGroupId: e,
  validator: t
}), hi = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Ft = "-", In = [], Rs = "arbitrary..", Fs = (e) => {
  const t = Os(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Ds(a);
      const l = a.split(Ft), s = l[0] === "" && l.length > 1 ? 1 : 0;
      return $i(l, s, t);
    },
    getConflictingClassGroupIds: (a, l) => {
      if (l) {
        const s = n[a], d = r[a];
        return s ? d ? Is(d, s) : s : d || In;
      }
      return r[a] || In;
    }
  };
}, $i = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const o = e[t], i = r.nextPart.get(o);
  if (i) {
    const d = $i(e, t + 1, i);
    if (d) return d;
  }
  const a = r.validators;
  if (a === null)
    return;
  const l = t === 0 ? e.join(Ft) : e.slice(t).join(Ft), s = a.length;
  for (let d = 0; d < s; d++) {
    const c = a[d];
    if (c.validator(l))
      return c.classGroupId;
  }
}, Ds = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? Rs + n : void 0;
})(), Os = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return As(r, t);
}, As = (e, t) => {
  const r = hi();
  for (const n in e) {
    const o = e[n];
    Ur(o, r, n, t);
  }
  return r;
}, Ur = (e, t, r, n) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    _s(a, t, r, n);
  }
}, _s = (e, t, r, n) => {
  if (typeof e == "string") {
    Vs(e, t, r);
    return;
  }
  if (typeof e == "function") {
    Hs(e, t, r, n);
    return;
  }
  zs(e, t, r, n);
}, Vs = (e, t, r) => {
  const n = e === "" ? t : yi(t, e);
  n.classGroupId = r;
}, Hs = (e, t, r, n) => {
  if (Ks(e)) {
    Ur(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Ms(r, e));
}, zs = (e, t, r, n) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [l, s] = o[a];
    Ur(s, yi(t, l), r, n);
  }
}, yi = (e, t) => {
  let r = e;
  const n = t.split(Ft), o = n.length;
  for (let i = 0; i < o; i++) {
    const a = n[i];
    let l = r.nextPart.get(a);
    l || (l = hi(), r.nextPart.set(a, l)), r = l;
  }
  return r;
}, Ks = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Bs = (e) => {
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
}, Er = "!", Mn = ":", Gs = [], Rn = (e, t, r, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), Ws = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const i = [];
    let a = 0, l = 0, s = 0, d;
    const c = o.length;
    for (let m = 0; m < c; m++) {
      const h = o[m];
      if (a === 0 && l === 0) {
        if (h === Mn) {
          i.push(o.slice(s, m)), s = m + 1;
          continue;
        }
        if (h === "/") {
          d = m;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? l++ : h === ")" && l--;
    }
    const f = i.length === 0 ? o : o.slice(s);
    let b = f, g = !1;
    f.endsWith(Er) ? (b = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Er) && (b = f.slice(1), g = !0)
    );
    const p = d && d > s ? d - s : void 0;
    return Rn(i, g, b, p);
  };
  if (t) {
    const o = t + Mn, i = n;
    n = (a) => a.startsWith(o) ? i(a.slice(o.length)) : Rn(Gs, !1, a, void 0, !0);
  }
  if (r) {
    const o = n;
    n = (i) => r({
      className: i,
      parseClassName: o
    });
  }
  return n;
}, Us = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let o = [];
    for (let i = 0; i < r.length; i++) {
      const a = r[i], l = a[0] === "[", s = t.has(a);
      l || s ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, js = (e) => ({
  cache: Bs(e.cacheSize),
  parseClassName: Ws(e),
  sortModifiers: Us(e),
  ...Fs(e)
}), qs = /\s+/, Ys = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], l = e.trim().split(qs);
  let s = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const c = l[d], {
      isExternal: f,
      modifiers: b,
      hasImportantModifier: g,
      baseClassName: p,
      maybePostfixModifierPosition: m
    } = r(c);
    if (f) {
      s = c + (s.length > 0 ? " " + s : s);
      continue;
    }
    let h = !!m, $ = n(h ? p.substring(0, m) : p);
    if (!$) {
      if (!h) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if ($ = n(p), !$) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      h = !1;
    }
    const y = b.length === 0 ? "" : b.length === 1 ? b[0] : i(b).join(":"), w = g ? y + Er : y, x = w + $;
    if (a.indexOf(x) > -1)
      continue;
    a.push(x);
    const I = o($, h);
    for (let M = 0; M < I.length; ++M) {
      const R = I[M];
      a.push(w + R);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
}, Xs = (...e) => {
  let t = 0, r, n, o = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = Ei(r)) && (o && (o += " "), o += n);
  return o;
}, Ei = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ei(e[n])) && (r && (r += " "), r += t);
  return r;
}, Fn = (e, ...t) => {
  let r, n, o, i;
  const a = (s) => {
    const d = t.reduce((c, f) => f(c), e());
    return r = js(d), n = r.cache.get, o = r.cache.set, i = l, l(s);
  }, l = (s) => {
    const d = n(s);
    if (d)
      return d;
    const c = Ys(s, r);
    return o(s, c), c;
  };
  return i = a, (...s) => i(Xs(...s));
}, Zs = [], ie = (e) => {
  const t = (r) => r[e] || Zs;
  return t.isThemeGetter = !0, t;
}, xi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Js = /^\d+\/\d+$/, Qs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ed = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, td = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, nd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, We = (e) => Js.test(e), D = (e) => !!e && !Number.isNaN(Number(e)), Me = (e) => !!e && Number.isInteger(Number(e)), Qt = (e) => e.endsWith("%") && D(e.slice(0, -1)), Se = (e) => Qs.test(e), od = () => !0, id = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ed.test(e) && !td.test(e)
), Pi = () => !1, ad = (e) => rd.test(e), ld = (e) => nd.test(e), sd = (e) => !S(e) && !k(e), dd = (e) => Ze(e, ki, Pi), S = (e) => xi.test(e), Ve = (e) => Ze(e, Ci, id), er = (e) => Ze(e, bd, D), Dn = (e) => Ze(e, Ti, Pi), cd = (e) => Ze(e, Si, ld), Et = (e) => Ze(e, Li, ad), k = (e) => wi.test(e), et = (e) => Je(e, Ci), ud = (e) => Je(e, pd), On = (e) => Je(e, Ti), fd = (e) => Je(e, ki), vd = (e) => Je(e, Si), xt = (e) => Je(e, Li, !0), Ze = (e, t, r) => {
  const n = xi.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Je = (e, t, r = !1) => {
  const n = wi.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Ti = (e) => e === "position" || e === "percentage", Si = (e) => e === "image" || e === "url", ki = (e) => e === "length" || e === "size" || e === "bg-size", Ci = (e) => e === "length", bd = (e) => e === "number", pd = (e) => e === "family-name", Li = (e) => e === "shadow", An = () => {
  const e = ie("color"), t = ie("font"), r = ie("text"), n = ie("font-weight"), o = ie("tracking"), i = ie("leading"), a = ie("breakpoint"), l = ie("container"), s = ie("spacing"), d = ie("radius"), c = ie("shadow"), f = ie("inset-shadow"), b = ie("text-shadow"), g = ie("drop-shadow"), p = ie("blur"), m = ie("perspective"), h = ie("aspect"), $ = ie("ease"), y = ie("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], I = () => [...x(), k, S], M = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], E = () => [k, S, s], F = () => [We, "full", "auto", ...E()], _ = () => [Me, "none", "subgrid", k, S], te = () => ["auto", {
    span: ["full", Me, k, S]
  }, Me, k, S], K = () => [Me, "auto", k, S], B = () => ["auto", "min", "max", "fr", k, S], Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ee = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], X = () => ["auto", ...E()], ae = () => [We, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], L = () => [e, k, S], de = () => [...x(), On, Dn, {
    position: [k, S]
  }], u = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], P = () => ["auto", "cover", "contain", fd, dd, {
    size: [k, S]
  }], v = () => [Qt, et, Ve], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    k,
    S
  ], N = () => ["", D, et, Ve], A = () => ["solid", "dashed", "dotted", "double"], ve = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => [D, Qt, On, Dn], Ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    k,
    S
  ], be = () => ["none", D, k, S], $e = () => ["none", D, k, S], ft = () => [D, k, S], vt = () => [We, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Se],
      breakpoint: [Se],
      color: [od],
      container: [Se],
      "drop-shadow": [Se],
      ease: ["in", "out", "in-out"],
      font: [sd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Se],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Se],
      shadow: [Se],
      spacing: ["px", D],
      text: [Se],
      "text-shadow": [Se],
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
        aspect: ["auto", "square", We, S, k, h]
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
        columns: [D, S, k, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        object: I()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [Me, "auto", k, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [We, "full", "auto", l, ...E()]
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
        flex: [D, We, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", D, k, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", D, k, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Me, "first", "last", "none", k, S]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": _()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: te()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": _()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: te()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": B()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": B()
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
        justify: [...Q(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ee(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ee()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Q()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Q()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ee(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ee()]
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
        m: X()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: X()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: X()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: X()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: X()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: X()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: X()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: X()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: X()
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
        size: ae()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...ae()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ae()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...ae()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ae()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ae()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ae()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, et, Ve]
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
        font: [n, k, er]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qt, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ud, S, t]
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
        tracking: [o, k, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [D, "none", k, er]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k, S]
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
        list: ["disc", "decimal", "none", k, S]
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
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
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
        decoration: [...A(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [D, "from-font", "auto", k, Ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [D, "auto", k, S]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k, S]
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
        content: ["none", k, S]
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
        bg: de()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: u()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: P()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Me, k, S],
          radial: ["", k, S],
          conic: [Me, k, S]
        }, vd, cd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: v()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: v()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: v()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: T()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": T()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": T()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": T()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": T()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": T()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": T()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": T()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": T()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": T()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": T()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": T()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": T()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": T()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": T()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: N()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": N()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": N()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": N()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": N()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": N()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": N()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": N()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": N()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": N()
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
        "divide-y": N()
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
        border: [...A(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...A(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...A(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [D, k, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", D, et, Ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
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
          c,
          xt,
          Et
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, xt, Et]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: N()
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
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [D, Ve]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": N()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, xt, Et]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [D, k, S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ve(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ve()
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
        "mask-linear": [D]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Y()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Y()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Y()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Y()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Y()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Y()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Y()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Y()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [k, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Y()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Y()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
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
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [D]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Y()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Y()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
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
        mask: de()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: u()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: P()
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
        mask: ["none", k, S]
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
          k,
          S
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ne()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [D, k, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [D, k, S]
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
          g,
          xt,
          Et
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", D, k, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [D, k, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", D, k, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [D, k, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", D, k, S]
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
          k,
          S
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ne()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [D, k, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [D, k, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", D, k, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [D, k, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", D, k, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [D, k, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [D, k, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", D, k, S]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", k, S]
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
        duration: [D, "initial", k, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", $, k, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [D, k, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, k, S]
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
        perspective: [m, k, S]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": I()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: be()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": be()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": be()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": be()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: $e()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": $e()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": $e()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": $e()
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
        skew: ft()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ft()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ft()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [k, S, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: I()
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
        translate: vt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": vt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": vt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": vt()
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
        accent: L()
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
        caret: L()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k, S]
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
        "will-change": ["auto", "scroll", "contents", "transform", k, S]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [D, et, Ve, er]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
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
}, md = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: i = {}
}) => (ot(e, "cacheSize", t), ot(e, "prefix", r), ot(e, "experimentalParseClassName", n), wt(e.theme, i.theme), wt(e.classGroups, i.classGroups), wt(e.conflictingClassGroups, i.conflictingClassGroups), wt(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), ot(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), Pt(e.theme, o.theme), Pt(e.classGroups, o.classGroups), Pt(e.conflictingClassGroups, o.conflictingClassGroups), Pt(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Ni(e, o, "orderSensitiveModifiers"), e), ot = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, wt = (e, t) => {
  if (t)
    for (const r in t)
      ot(e, r, t[r]);
}, Pt = (e, t) => {
  if (t)
    for (const r in t)
      Ni(e, t, r);
}, Ni = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, gd = (e, ...t) => typeof e == "function" ? Fn(An, e, ...t) : Fn(() => md(An(), e), ...t), hd = gd({
  prefix: "nm-"
});
function he(...e) {
  return hd(xr(e));
}
const $d = wr(
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
), yd = Di.forwardRef(
  ({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ le(
    us,
    {
      ref: o,
      ...n,
      className: Ae(
        e,
        (i) => he(
          $d({
            variant: t,
            size: r,
            className: i
          })
        )
      )
    }
  )
);
yd.displayName = "Button";
const Ii = wr([
  "nm-text-sm nm-font-medium nm-leading-none",
  "[color:var(--nm-textfield-label-fg)]",
  /* Disabled */
  "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
  /* Invalid */
  "group-data-[invalid]:[color:var(--nm-textfield-label-error-fg)]"
]), Ed = ({ className: e, ...t }) => /* @__PURE__ */ le(ds, { className: he(Ii(), e), ...t });
function Vd({ className: e, ...t }) {
  return /* @__PURE__ */ le(
    Br,
    {
      className: he(
        "nm-text-sm [color:var(--nm-textfield-helper-fg)]",
        e
      ),
      ...t,
      slot: "description"
    }
  );
}
function xd({ className: e, ...t }) {
  return /* @__PURE__ */ le(
    bs,
    {
      className: he(
        "nm-text-sm nm-font-medium [color:var(--nm-textfield-helper-error-fg)]",
        e
      ),
      ...t
    }
  );
}
const wd = wr("", {
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
function Hd({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ le(
    hs,
    {
      className: Ae(
        e,
        (n) => he(wd({ variant: t }), n)
      ),
      ...r
    }
  );
}
const Pd = Ns, Td = ({ className: e, ...t }) => /* @__PURE__ */ le(
  ys,
  {
    className: Ae(
      e,
      (r) => he(
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
), Sd = ({ className: e, ...t }) => /* @__PURE__ */ le(
  Cs,
  {
    className: Ae(
      e,
      (r) => he(
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
function zd({
  label: e,
  description: t,
  errorMessage: r,
  textArea: n,
  className: o,
  placeholder: i,
  ...a
}) {
  return /* @__PURE__ */ Vn(
    Pd,
    {
      className: Ae(
        o,
        (l) => he("nm-font-sans nm-group nm-flex nm-flex-col nm-gap-2", l)
      ),
      ...a,
      children: [
        /* @__PURE__ */ le(Ed, { children: e }),
        n ? /* @__PURE__ */ le(Sd, { placeholder: i }) : /* @__PURE__ */ le(Td, { placeholder: i }),
        t && /* @__PURE__ */ le(
          Br,
          {
            className: "nm-text-sm [color:var(--nm-textfield-helper-fg)]",
            slot: "description",
            children: t
          }
        ),
        /* @__PURE__ */ le(xd, { children: r })
      ]
    }
  );
}
const Kd = Ts, Bd = ({ className: e, offset: t = 4, ...r }) => /* @__PURE__ */ le(
  xs,
  {
    offset: t,
    className: Ae(
      e,
      (n) => he(
        "nm-z-50 nm-rounded-md nm-border nm-bg-popover nm-text-popover-foreground nm-shadow-md nm-outline-none",
        /* Entering */
        "data-[entering]:nm-animate-in data-[entering]:nm-fade-in-0 data-[entering]:nm-zoom-in-95",
        /* Exiting */
        "data-[exiting]:nm-animate-out data-[exiting]:nm-fade-out-0 data-[exiting]:nm-zoom-out-95",
        /* Placement */
        "data-[placement=bottom]:nm-slide-in-from-top-2 data-[placement=left]:nm-slide-in-from-right-2 data-[placement=right]:nm-slide-in-from-left-2 data-[placement=top]:nm-slide-in-from-bottom-2",
        n
      )
    ),
    ...r
  }
);
function Gd({ className: e, ...t }) {
  return /* @__PURE__ */ le(
    Ss,
    {
      className: he("nm-p-4 nm-outline nm-outline-0", e),
      ...t
    }
  );
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Cd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), _n = (e) => {
  const t = Cd(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Mi = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Ld = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = xe(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: i,
    iconNode: a,
    ...l
  }, s) => tr(
    "svg",
    {
      ref: s,
      ...Nd,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Mi("lucide", o),
      ...!i && !Ld(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([d, c]) => tr(d, c)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = (e, t) => {
  const r = xe(
    ({ className: n, ...o }, i) => tr(Id, {
      ref: i,
      iconNode: t,
      className: Mi(
        `lucide-${kd(_n(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = _n(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Rd = Ri("check", Md);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = [["path", { d: "M5 12h14", key: "1ays0h" }]], Dd = Ri("minus", Fd), Wd = ({ className: e, children: t, ...r }) => /* @__PURE__ */ le(
  gs,
  {
    className: Ae(
      e,
      (n) => he(
        "group/checkbox nm-flex nm-items-center nm-gap-x-2",
        /* Disabled */
        "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
        Ii,
        n
      )
    ),
    ...r,
    children: Ae(t, (n, o) => /* @__PURE__ */ Vn(Fi, { children: [
      /* @__PURE__ */ le(
        "div",
        {
          className: he(
            "nm-flex nm-size-4 nm-shrink-0 nm-items-center nm-justify-center nm-rounded-sm nm-border nm-border-primary nm-text-current nm-ring-offset-background",
            /* Focus Visible */
            "group-data-[focus-visible]/checkbox:nm-outline-none group-data-[focus-visible]/checkbox:nm-ring-2 group-data-[focus-visible]/checkbox:nm-ring-ring group-data-[focus-visible]/checkbox:nm-ring-offset-2",
            /* Selected */
            "group-data-[indeterminate]/checkbox:nm-bg-primary group-data-[selected]/checkbox:nm-bg-primary group-data-[indeterminate]/checkbox:nm-text-primary-foreground  group-data-[selected]/checkbox:nm-text-primary-foreground",
            /* Disabled */
            "group-data-[disabled]/checkbox:nm-cursor-not-allowed group-data-[disabled]/checkbox:nm-opacity-50",
            /* Invalid */
            "group-data-[invalid]/checkbox:nm-border-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:nm-bg-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:nm-text-destructive-foreground",
            /* Resets */
            "focus:nm-outline-none focus-visible:nm-outline-none"
          ),
          children: o.isIndeterminate ? /* @__PURE__ */ le(Dd, { className: "nm-size-4" }) : o.isSelected ? /* @__PURE__ */ le(Rd, { className: "nm-size-4" }) : null
        }
      ),
      n
    ] }))
  }
);
export {
  yd as Button,
  Wd as Checkbox,
  xd as FieldError,
  Hd as FieldGroup,
  Vd as FormDescription,
  Td as Input,
  Ed as Label,
  Bd as Popover,
  Gd as PopoverDialog,
  Kd as PopoverTrigger,
  Sd as TextArea,
  Pd as TextField,
  zd as WrappedField,
  wd as fieldGroupVariants,
  Ii as labelVariants
};
//# sourceMappingURL=index.es.js.map
