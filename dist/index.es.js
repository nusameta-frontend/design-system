"use client";
import { jsx as B, jsxs as kt, Fragment as Ta } from "react/jsx-runtime";
import * as Sa from "react";
import k, { createContext as K, useState as U, useRef as D, useCallback as H, useContext as ie, useEffect as q, useMemo as se, useReducer as Ca, forwardRef as we, createElement as dr } from "react";
import ka, { flushSync as qn } from "react-dom";
function Yn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Yn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Nr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Yn(e)) && (n && (n += " "), n += t);
  return n;
}
const tn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, rn = Nr, Lr = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return rn(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((d) => {
    const c = r == null ? void 0 : r[d], f = i == null ? void 0 : i[d];
    if (c === null) return null;
    const b = tn(c) || tn(f);
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
  return rn(e, a, s, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Na = K(null);
K(null);
K(null);
K(null);
K(null);
const La = K({});
K(null);
const Xn = K(null), j = typeof document < "u" ? k.useLayoutEffect : () => {
};
function Ia(e) {
  let [t, r] = U(e), n = D(t), o = D(null), i = D(() => {
    if (!o.current) return;
    let l = o.current.next();
    if (l.done) {
      o.current = null;
      return;
    }
    n.current === l.value ? i.current() : r(l.value);
  });
  j(() => {
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
const Nt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Zn = /* @__PURE__ */ k.createContext(Nt), Ma = /* @__PURE__ */ k.createContext(!1);
let Ra = !!(typeof window < "u" && window.document && window.document.createElement), Xt = /* @__PURE__ */ new WeakMap();
function Fa(e = !1) {
  let t = ie(Zn), r = D(null);
  if (r.current === null && !e) {
    var n, o;
    let i = (o = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (i) {
      let a = Xt.get(i);
      a == null ? Xt.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== a.state && (t.current = a.id, Xt.delete(i));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function Da(e) {
  let t = ie(Zn);
  t === Nt && !Ra && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = Fa(!!e), n = t === Nt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function Oa(e) {
  let t = k.useId(), [r] = U(Ir()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Nt.prefix}`;
  return e || `${n}-${t}`;
}
const Aa = typeof k.useId == "function" ? Oa : Da;
function _a() {
  return !1;
}
function Va() {
  return !0;
}
function Ha(e) {
  return () => {
  };
}
function Ir() {
  return typeof k.useSyncExternalStore == "function" ? k.useSyncExternalStore(Ha, _a, Va) : ie(Ma);
}
let za = !!(typeof window < "u" && window.document && window.document.createElement), qe = /* @__PURE__ */ new Map(), tt;
typeof FinalizationRegistry < "u" && (tt = new FinalizationRegistry((e) => {
  qe.delete(e);
}));
function Ae(e) {
  let [t, r] = U(e), n = D(null), o = Aa(t), i = D(null);
  if (tt && tt.register(i, o), za) {
    const a = qe.get(o);
    a && !a.includes(n) ? a.push(n) : qe.set(o, [
      n
    ]);
  }
  return j(() => {
    let a = o;
    return () => {
      tt && tt.unregister(i), qe.delete(a);
    };
  }, [
    o
  ]), q(() => {
    let a = n.current;
    return a && r(a), () => {
      a && (n.current = null);
    };
  }), o;
}
function Ba(e, t) {
  if (e === t) return e;
  let r = qe.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = qe.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function cr(e = []) {
  let t = Ae(), [r, n] = Ia(t), o = H(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return j(o, [
    t,
    o,
    ...e
  ]), r;
}
function ct(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const V = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, fe = (e) => e && "window" in e && e.window === e ? e : V(e).defaultView || window;
function Ka(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Ga(e) {
  return Ka(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Wa = !1;
function Vt() {
  return Wa;
}
function J(e, t) {
  if (!Vt()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : Ga(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const ve = (e = document) => {
  var t;
  if (!Vt()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function z(e) {
  return Vt() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class Ua {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!J(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
    return J(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
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
function ja(e, t, r, n) {
  return Vt() ? new Ua(e, t, r, n) : e.createTreeWalker(t, r, n);
}
function Q(...e) {
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
      90 ? t[o] = ct(i, a) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof a == "string" ? t[o] = Nr(i, a) : o === "id" && i && a ? t.id = Ba(i, a) : t[o] = a !== void 0 ? a : i;
    }
  }
  return t;
}
function Jn(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = nn(o, t);
      return r || (r = typeof i == "function"), i;
    });
    if (r) return () => {
      n.forEach((o, i) => {
        typeof o == "function" ? o() : nn(e[i], null);
      });
    };
  };
}
function nn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const qa = /* @__PURE__ */ new Set([
  "id"
]), Ya = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Xa = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Za = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), on = /* @__PURE__ */ new Set([
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
]), Ja = /^(data-.*)$/;
function Pe(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: i = o, propNames: a } = t, l = {};
  for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (qa.has(s) || r && Ya.has(s) || n && Xa.has(s) || o && Za.has(s) || i && (on.has(s) || s.endsWith("Capture") && on.has(s.slice(0, -7))) || a != null && a.has(s) || Ja.test(s)) && (l[s] = e[s]);
  return l;
}
function Ye(e) {
  if (Qa()) e.focus({
    preventScroll: !0
  });
  else {
    let t = el(e);
    e.focus(), tl(t);
  }
}
let mt = null;
function Qa() {
  if (mt == null) {
    mt = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return mt = !0, !0;
        }
      });
    } catch {
    }
  }
  return mt;
}
function el(e) {
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
function tl(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function Ht(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function Mr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Le(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Xe = Le(function() {
  return Mr(/^Mac/i);
}), rl = Le(function() {
  return Mr(/^iPhone/i);
}), Qn = Le(function() {
  return Mr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Xe() && navigator.maxTouchPoints > 1;
}), zt = Le(function() {
  return rl() || Qn();
});
Le(function() {
  return Xe() || zt();
});
const eo = Le(function() {
  return Ht(/AppleWebKit/i) && !to();
}), to = Le(function() {
  return Ht(/Chrome/i);
}), Rr = Le(function() {
  return Ht(/Android/i);
}), nl = Le(function() {
  return Ht(/Firefox/i);
});
function ze(e, t, r = !0) {
  var n, o;
  let { metaKey: i, ctrlKey: a, altKey: l, shiftKey: s } = t;
  nl() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (Xe() ? i = !0 : a = !0);
  let d = eo() && Xe() && !Qn() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
let Fe = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Set();
function an() {
  if (typeof window > "u") return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target) return;
    let o = Fe.get(n.target);
    o || (o = /* @__PURE__ */ new Set(), Fe.set(n.target, o), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), o.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target) return;
    let o = Fe.get(n.target);
    if (o && (o.delete(n.propertyName), o.size === 0 && (n.target.removeEventListener("transitioncancel", r), Fe.delete(n.target)), Fe.size === 0)) {
      for (let i of ur) i();
      ur.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? an() : document.addEventListener("DOMContentLoaded", an));
function ol() {
  for (const [e] of Fe)
    "isConnected" in e && !e.isConnected && Fe.delete(e);
}
function ro(e) {
  requestAnimationFrame(() => {
    ol(), Fe.size === 0 ? e() : ur.add(e);
  });
}
function Fr() {
  let e = D(/* @__PURE__ */ new Map()), t = H((o, i, a, l) => {
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
  return q(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function no(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = Ae(r), o && n ? o = [
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
function Dr(e) {
  const t = D(null), r = D(void 0), n = H((o) => {
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
var Zt;
const il = (Zt = k.useInsertionEffect) !== null && Zt !== void 0 ? Zt : j;
function Ee(e) {
  const t = D(null);
  return il(() => {
    t.current = e;
  }, [
    e
  ]), H((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function al() {
  return typeof window.ResizeObserver < "u";
}
function fr(e) {
  const { ref: t, box: r, onResize: n } = e;
  let o = Ee(n);
  q(() => {
    let i = t == null ? void 0 : t.current;
    if (i)
      if (al()) {
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
function Or(e, t) {
  j(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function vr(e, t) {
  if (!e) return !1;
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
function oo(e, t) {
  let r = e;
  for (vr(r, t) && (r = r.parentElement); r && !vr(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
const ll = /* @__PURE__ */ new Set([
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
function Jt(e) {
  return e instanceof HTMLInputElement && !ll.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function br(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Rr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function sl(e) {
  return !Rr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function io(e, t, r) {
  let n = Ee(() => {
    r && r(t);
  });
  q(() => {
    var o;
    let i = e == null || (o = e.current) === null || o === void 0 ? void 0 : o.form;
    return i == null || i.addEventListener("reset", n), () => {
      i == null || i.removeEventListener("reset", n);
    };
  }, [
    e
  ]);
}
function dl(e, t = !0) {
  let [r, n] = U(!0), o = r && t;
  return j(() => {
    if (o && e.current && "getAnimations" in e.current)
      for (let i of e.current.getAnimations()) i instanceof CSSTransition && i.cancel();
  }, [
    e,
    o
  ]), ao(e, o, H(() => n(!1), [])), o;
}
function cl(e, t) {
  let [r, n] = U(t ? "open" : "closed");
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
  return ao(e, o, H(() => {
    n((i) => i === "exiting" ? "closed" : i);
  }, [])), o;
}
function ao(e, t, r) {
  j(() => {
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
        o || qn(() => {
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
const ul = typeof Element < "u" && "checkVisibility" in Element.prototype;
function fl(e) {
  const t = fe(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: a, visibility: l } = i(e);
    o = a !== "none" && l !== "hidden" && l !== "collapse";
  }
  return o;
}
function vl(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Ar(e, t) {
  return ul ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && fl(e) && vl(e, t) && (!e.parentElement || Ar(e.parentElement, e));
}
const _r = [
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
], bl = _r.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
_r.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const pl = _r.join(':not([hidden]):not([tabindex="-1"]),');
function lo(e) {
  return e.matches(bl) && Ar(e) && !so(e);
}
function ml(e) {
  return e.matches(pl) && Ar(e) && !so(e);
}
function so(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
var Qt;
const gl = typeof document < "u" ? (Qt = k.useInsertionEffect) !== null && Qt !== void 0 ? Qt : k.useLayoutEffect : () => {
};
function Bt(e, t, r) {
  let [n, o] = U(e || t), i = D(n), a = D(e !== void 0), l = e !== void 0;
  q(() => {
    let f = a.current;
    f !== l && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), a.current = l;
  }, [
    l
  ]);
  let s = l ? e : n;
  gl(() => {
    i.current = s;
  });
  let [, d] = Ca(() => ({}), {}), c = H((f, ...b) => {
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
function pr(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
const mr = Symbol("default");
function Kt({ values: e, children: t }) {
  for (let [r, n] of e)
    t = /* @__PURE__ */ k.createElement(r.Provider, {
      value: n
    }, t);
  return t;
}
function Ce(e) {
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
function be(e, t) {
  return (r) => t(typeof e == "function" ? e(r) : e, r);
}
function Gt(e, t) {
  let r = ie(e);
  if (t === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let n = t || mr;
    if (!r.slots[n]) {
      let o = new Intl.ListFormat().format(Object.keys(r.slots).map((a) => `"${a}"`)), i = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${i} Valid slot names are ${o}.`);
    }
    return r.slots[n];
  }
  return r;
}
function pe(e, t, r) {
  let n = Gt(r, e.slot) || {}, { ref: o, ...i } = n, a = Dr(se(() => Jn(t, o), [
    t,
    o
  ])), l = Q(i, e);
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
function co(e = !0) {
  let [t, r] = U(e), n = D(!1), o = H((i) => {
    n.current = !0, r(!!i);
  }, []);
  return j(() => {
    n.current || r(!1);
  }, []), [
    o,
    t
  ];
}
function Lt(e) {
  const t = /^(data-.*)$/;
  let r = {};
  for (const n in e) t.test(n) || (r[n] = e[n]);
  return r;
}
const uo = 7e3;
let Te = null;
function ln(e, t = "assertive", r = uo) {
  Te ? Te.announce(e, t, r) : (Te = new hl(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Te.announce(e, t, r) : setTimeout(() => {
    Te != null && Te.isAttached() && (Te == null || Te.announce(e, t, r));
  }, 100));
}
class hl {
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
  announce(t, r = "assertive", n = uo) {
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
const he = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, It = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, $l = {
  top: "left",
  left: "top"
}, gr = {
  top: "height",
  left: "width"
}, fo = {
  width: "totalWidth",
  height: "totalHeight"
}, gt = {};
let yl = () => typeof document < "u" ? window.visualViewport : null;
function sn(e, t) {
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
  if (eo() && (e.tagName === "BODY" || e.tagName === "HTML") && c) {
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
function xl(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function dn(e, t, r, n, o, i, a) {
  var l;
  let s = (l = o.scroll[e]) !== null && l !== void 0 ? l : 0, d = n[gr[e]], c = a[e] + n.scroll[he[e]] + i, f = a[e] + n.scroll[he[e]] + d - i, b = t - s + n.scroll[he[e]] + a[e] - n[he[e]], g = t - s + r + n.scroll[he[e]] + a[e] - n[he[e]];
  return b < c ? c - b : g > f ? Math.max(f - g, c - b) : 0;
}
function El(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function cn(e) {
  if (gt[e]) return gt[e];
  let [t, r] = e.split(" "), n = he[t] || "right", o = $l[n];
  he[r] || (r = "center");
  let i = gr[n], a = gr[o];
  return gt[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: i,
    crossSize: a
  }, gt[e];
}
function er(e, t, r, n, o, i, a, l, s, d, c) {
  let { placement: f, crossPlacement: b, axis: g, crossAxis: p, size: m, crossSize: h } = n, $ = {};
  var y;
  $[p] = (y = e[p]) !== null && y !== void 0 ? y : 0;
  var w, E, I, M;
  b === "center" ? $[p] += (((w = e[h]) !== null && w !== void 0 ? w : 0) - ((E = r[h]) !== null && E !== void 0 ? E : 0)) / 2 : b !== p && ($[p] += ((I = e[h]) !== null && I !== void 0 ? I : 0) - ((M = r[h]) !== null && M !== void 0 ? M : 0)), $[p] += i;
  const R = e[p] - r[h] + s + d, x = e[p] + e[h] - s - d;
  if ($[p] = pr($[p], R, x), f === g) {
    let F = l ? c[m] : c[fo[m]];
    $[It[g]] = Math.floor(F - e[g] + o);
  } else $[g] = Math.floor(e[g] + e[m] + o);
  return $;
}
function wl(e, t, r, n, o, i, a, l, s, d, c) {
  var f, b;
  let g = (e.top != null ? e.top : s[fo.height] - ((f = e.bottom) !== null && f !== void 0 ? f : 0) - a) - ((b = s.scroll.top) !== null && b !== void 0 ? b : 0), p = d ? r.top : 0;
  var m, h, $;
  let y = {
    // This should be boundary top in container coord system vs viewport top in container coord system
    // For the viewport top, there are several cases
    // 1. pinchzoom case where we want the viewports offset top as top here
    // 2. case where container is offset from the boundary and is contained by the boundary. In this case the top we want here is NOT 0, we want to take boundary's top even though is is a negative number OR the visual viewport, whichever is more restrictive
    top: Math.max(t.top + p, ((m = c == null ? void 0 : c.offsetTop) !== null && m !== void 0 ? m : t.top) + p),
    bottom: Math.min(t.top + t.height + p, ((h = c == null ? void 0 : c.offsetTop) !== null && h !== void 0 ? h : 0) + (($ = c == null ? void 0 : c.height) !== null && $ !== void 0 ? $ : 0))
  };
  var w, E, I, M;
  return l !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, y.bottom - g - (((w = o.top) !== null && w !== void 0 ? w : 0) + ((E = o.bottom) !== null && E !== void 0 ? E : 0) + i))
  ) : Math.max(0, g + a - y.top - (((I = o.top) !== null && I !== void 0 ? I : 0) + ((M = o.bottom) !== null && M !== void 0 ? M : 0) + i));
}
function un(e, t, r, n, o, i, a, l) {
  let { placement: s, axis: d, size: c } = i;
  var f, b;
  if (s === d) return Math.max(0, r[d] - ((f = a.scroll[d]) !== null && f !== void 0 ? f : 0) - (e[d] + (l ? t[d] : 0)) - ((b = n[d]) !== null && b !== void 0 ? b : 0) - n[It[d]] - o);
  var g, p;
  return Math.max(0, e[c] + e[d] + (l ? t[d] : 0) - r[d] - r[c] + ((g = a.scroll[d]) !== null && g !== void 0 ? g : 0) - ((p = n[d]) !== null && p !== void 0 ? p : 0) - n[It[d]] - o);
}
function Pl(e, t, r, n, o, i, a, l, s, d, c, f, b, g, p, m, h, $) {
  let y = cn(e), { size: w, crossAxis: E, crossSize: I, placement: M, crossPlacement: R } = y, x = er(t, l, r, y, c, f, d, b, p, m, s), F = c, _ = un(l, d, t, o, i + c, y, s, h);
  if (a && r[w] > _) {
    let ge = cn(`${It[M]} ${R}`), xe = er(t, l, r, ge, c, f, d, b, p, m, s);
    un(l, d, t, o, i + c, ge, s, h) > _ && (y = ge, x = xe, F = c);
  }
  let re = "bottom";
  y.axis === "top" ? y.placement === "top" ? re = "top" : y.placement === "bottom" && (re = "bottom") : y.crossAxis === "top" && (y.crossPlacement === "top" ? re = "bottom" : y.crossPlacement === "bottom" && (re = "top"));
  let G = dn(E, x[E], r[I], l, s, i, d);
  x[E] += G;
  let W = wl(x, l, d, b, o, i, r.height, re, s, h, $);
  g && g < W && (W = g), r.height = Math.min(r.height, W), x = er(t, l, r, y, F, f, d, b, p, m, s), G = dn(E, x[E], r[I], l, s, i, d), x[E] += G;
  let ee = {}, te = t[E] - x[E] - o[he[E]], Z = te + 0.5 * t[I];
  const le = p / 2 + m;
  var N, ce, u, P;
  const v = he[E] === "left" ? ((N = o.left) !== null && N !== void 0 ? N : 0) + ((ce = o.right) !== null && ce !== void 0 ? ce : 0) : ((u = o.top) !== null && u !== void 0 ? u : 0) + ((P = o.bottom) !== null && P !== void 0 ? P : 0), T = r[I] - v - p / 2 - m, L = t[E] + p / 2 - (x[E] + o[he[E]]), A = t[E] + t[I] - p / 2 - (x[E] + o[he[E]]), me = pr(Z, L, A);
  ee[E] = pr(me, le, T), { placement: M, crossPlacement: R } = y, p ? te = ee[E] : R === "right" ? te += t[I] : R === "center" && (te += t[I] / 2);
  let X = M === "left" || M === "top" ? r[w] : 0, Ie = {
    x: M === "top" || M === "bottom" ? te : X,
    y: M === "left" || M === "right" ? te : X
  };
  return {
    position: x,
    maxHeight: W,
    arrowOffsetLeft: ee.left,
    arrowOffsetTop: ee.top,
    placement: M,
    triggerAnchorPoint: Ie
  };
}
function Tl(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: i, shouldFlip: a, boundaryElement: l, offset: s, crossOffset: d, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: b = 0 } = e, g = yl(), p = n instanceof HTMLElement ? Sl(n) : document.documentElement, m = p === document.documentElement;
  const h = window.getComputedStyle(p).position;
  let $ = !!h && h !== "static", y = m ? lt(r, !1) : fn(r, p, !1);
  if (!m) {
    let { marginTop: ee, marginLeft: te } = window.getComputedStyle(r);
    y.top += parseInt(ee, 10) || 0, y.left += parseInt(te, 10) || 0;
  }
  let w = lt(n, !0), E = El(n);
  var I, M;
  w.width += ((I = E.left) !== null && I !== void 0 ? I : 0) + ((M = E.right) !== null && M !== void 0 ? M : 0);
  var R, x;
  w.height += ((R = E.top) !== null && R !== void 0 ? R : 0) + ((x = E.bottom) !== null && x !== void 0 ? x : 0);
  let F = xl(o), _ = sn(l, g), re = sn(p, g), G = fn(l, p, !1), W = l.contains(p);
  return Pl(t, y, w, F, E, i, a, _, re, G, s, d, $, c, f, b, W, g);
}
function Vr(e, t) {
  let { top: r, left: n, width: o, height: i } = e.getBoundingClientRect();
  return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (o = e.offsetWidth, i = e.offsetHeight), {
    top: r,
    left: n,
    width: o,
    height: i
  };
}
function lt(e, t) {
  let { top: r, left: n, width: o, height: i } = Vr(e, t), { scrollTop: a, scrollLeft: l, clientTop: s, clientLeft: d } = document.documentElement;
  return {
    top: r + a - s,
    left: n + l - d,
    width: o,
    height: i
  };
}
function fn(e, t, r) {
  let n = window.getComputedStyle(e), o;
  if (n.position === "fixed") o = Vr(e, r);
  else {
    o = lt(e, r);
    let i = lt(t, r), a = window.getComputedStyle(t);
    i.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, o.top -= i.top, o.left -= i.left;
  }
  return o.top -= parseInt(n.marginTop, 10) || 0, o.left -= parseInt(n.marginLeft, 10) || 0, o;
}
function Sl(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !vn(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !vn(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function vn(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const vo = /* @__PURE__ */ new WeakMap();
function Cl(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  q(() => {
    if (!r || n === null) return;
    let o = (i) => {
      let a = i.target;
      if (!t.current || a instanceof Node && !a.contains(t.current) || i.target instanceof HTMLInputElement || i.target instanceof HTMLTextAreaElement) return;
      let l = n || vo.get(t.current);
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
const kl = /* @__PURE__ */ new Set([
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
]), Nl = /* @__PURE__ */ new Set([
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
function Ll(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return kl.has(r.script);
  }
  let t = e.split("-")[0];
  return Nl.has(t);
}
const bo = Symbol.for("react-aria.i18n.locale");
function po() {
  let e = typeof window < "u" && window[bo] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Ll(e) ? "rtl" : "ltr"
  };
}
let hr = po(), rt = /* @__PURE__ */ new Set();
function bn() {
  hr = po();
  for (let e of rt) e(hr);
}
function Il() {
  let e = Ir(), [t, r] = U(hr);
  return q(() => (rt.size === 0 && window.addEventListener("languagechange", bn), rt.add(r), () => {
    rt.delete(r), rt.size === 0 && window.removeEventListener("languagechange", bn);
  }), []), e ? {
    locale: typeof window < "u" && window[bo] || "en-US",
    direction: "ltr"
  } : t;
}
const Ml = /* @__PURE__ */ k.createContext(null);
function Hr() {
  let e = Il();
  return ie(Ml) || e;
}
const Rl = Symbol.for("react-aria.i18n.locale"), Fl = Symbol.for("react-aria.i18n.strings");
let Ge;
class Wt {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = Dl(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[Rl];
    if (Ge === void 0) {
      let o = window[Fl];
      if (!o) return null;
      Ge = {};
      for (let i in o) Ge[i] = new Wt({
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
function Dl(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = Ol(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function Ol(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const pn = /* @__PURE__ */ new Map(), mn = /* @__PURE__ */ new Map();
class Al {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let i = this.locale + ":" + n, a = pn.get(i);
    a || (a = new Intl.PluralRules(this.locale, {
      type: n
    }), pn.set(i, a));
    let l = a.select(t);
    return o = r[l] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = mn.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), mn.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
const gn = /* @__PURE__ */ new WeakMap();
function _l(e) {
  let t = gn.get(e);
  return t || (t = new Wt(e), gn.set(e, t)), t;
}
function Vl(e, t) {
  return t && Wt.getGlobalDictionaryForPackage(t) || _l(e);
}
function mo(e, t) {
  let { locale: r } = Hr(), n = Vl(e, t);
  return se(() => new Al(r, n), [
    r,
    n
  ]);
}
function Hl(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function zl(e, t, r) {
  Hl(e, t), t.set(e, r);
}
let ne = typeof document < "u" ? window.visualViewport : null;
function Bl(e) {
  let { direction: t } = Hr(), { arrowSize: r, targetRef: n, overlayRef: o, arrowRef: i, scrollRef: a = o, placement: l = "bottom", containerPadding: s = 12, shouldFlip: d = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: f = 0, crossOffset: b = 0, shouldUpdatePosition: g = !0, isOpen: p = !0, onClose: m, maxHeight: h, arrowBoundaryOffset: $ = 0 } = e, [y, w] = U(null), E = [
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
  ], I = D(ne == null ? void 0 : ne.scale);
  q(() => {
    p && (I.current = ne == null ? void 0 : ne.scale);
  }, [
    p
  ]);
  let M = H(() => {
    if (g === !1 || !p || !o.current || !n.current || !c || (ne == null ? void 0 : ne.scale) !== I.current) return;
    let G = null;
    if (a.current && a.current.contains(document.activeElement)) {
      var W;
      let u = (W = document.activeElement) === null || W === void 0 ? void 0 : W.getBoundingClientRect(), P = a.current.getBoundingClientRect();
      var ee;
      if (G = {
        type: "top",
        offset: ((ee = u == null ? void 0 : u.top) !== null && ee !== void 0 ? ee : 0) - P.top
      }, G.offset > P.height / 2) {
        G.type = "bottom";
        var te;
        G.offset = ((te = u == null ? void 0 : u.bottom) !== null && te !== void 0 ? te : 0) - P.bottom;
      }
    }
    let Z = o.current;
    if (!h && o.current) {
      var le;
      Z.style.top = "0px", Z.style.bottom = "";
      var N;
      Z.style.maxHeight = ((N = (le = window.visualViewport) === null || le === void 0 ? void 0 : le.height) !== null && N !== void 0 ? N : window.innerHeight) + "px";
    }
    let ce = Tl({
      placement: Gl(l, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: a.current || o.current,
      padding: s,
      shouldFlip: d,
      boundaryElement: c,
      offset: f,
      crossOffset: b,
      maxHeight: h,
      arrowSize: r ?? (i != null && i.current ? Vr(i.current, !0).width : 0),
      arrowBoundaryOffset: $
    });
    if (ce.position) {
      if (Z.style.top = "", Z.style.bottom = "", Z.style.left = "", Z.style.right = "", Object.keys(ce.position).forEach((u) => Z.style[u] = ce.position[u] + "px"), Z.style.maxHeight = ce.maxHeight != null ? ce.maxHeight + "px" : "", G && document.activeElement && a.current) {
        let u = document.activeElement.getBoundingClientRect(), P = a.current.getBoundingClientRect(), v = u[G.type] - P[G.type];
        a.current.scrollTop += v - G.offset;
      }
      w(ce);
    }
  }, E);
  j(M, E), Kl(M), fr({
    ref: o,
    onResize: M
  }), fr({
    ref: n,
    onResize: M
  });
  let R = D(!1);
  j(() => {
    let G, W = () => {
      R.current = !0, clearTimeout(G), G = setTimeout(() => {
        R.current = !1;
      }, 500), M();
    }, ee = () => {
      R.current && W();
    };
    return ne == null || ne.addEventListener("resize", W), ne == null || ne.addEventListener("scroll", ee), () => {
      ne == null || ne.removeEventListener("resize", W), ne == null || ne.removeEventListener("scroll", ee);
    };
  }, [
    M
  ]);
  let x = H(() => {
    R.current || m == null || m();
  }, [
    m,
    R
  ]);
  Cl({
    triggerRef: n,
    isOpen: p,
    onClose: m && x
  });
  var F, _, re;
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
    triggerAnchorPoint: (re = y == null ? void 0 : y.triggerAnchorPoint) !== null && re !== void 0 ? re : null,
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
function Kl(e) {
  j(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function Gl(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function zr(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function go(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function ho(e) {
  let t = D({
    isFocused: !1,
    observer: null
  });
  return j(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []), H((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let n = r.target, o = (i) => {
        if (t.current.isFocused = !1, n.disabled) {
          let a = zr(i);
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
let Mt = !1;
function hn(e) {
  for (; e && !lo(e); ) e = e.parentElement;
  let t = fe(e), r = t.document.activeElement;
  if (!r || r === e) return;
  Mt = !0;
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
    cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", a, !0), Mt = !1, n = !1;
  }, d = requestAnimationFrame(s);
  return s;
}
let je = "default", $r = "", Ct = /* @__PURE__ */ new WeakMap();
function $n(e) {
  if (zt()) {
    if (je === "default") {
      const t = V(e);
      $r = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    je = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Ct.set(e, e.style[t]), e.style[t] = "none";
  }
}
function tr(e) {
  if (zt()) {
    if (je !== "disabled") return;
    je = "restoring", setTimeout(() => {
      ro(() => {
        if (je === "restoring") {
          const t = V(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = $r || ""), $r = "", je = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ct.has(e)) {
    let t = Ct.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Ct.delete(e);
  }
}
const st = k.createContext({
  register: () => {
  }
});
st.displayName = "PressResponderContext";
function Wl(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function $o(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function Ul(e, t) {
  var r = $o(e, t, "get");
  return Wl(e, r);
}
function jl(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function yn(e, t, r) {
  var n = $o(e, t, "set");
  return jl(e, n, r), r;
}
function ql(e) {
  let t = ie(st);
  if (t) {
    let { register: r, ...n } = t;
    e = Q(n, e), r();
  }
  return Or(t, e.ref), e;
}
var ht = /* @__PURE__ */ new WeakMap();
class $t {
  continuePropagation() {
    yn(this, ht, !1);
  }
  get shouldStopPropagation() {
    return Ul(this, ht);
  }
  constructor(t, r, n, o) {
    zl(this, ht, {
      writable: !0,
      value: void 0
    }), yn(this, ht, !0);
    var i;
    let a = (i = o == null ? void 0 : o.target) !== null && i !== void 0 ? i : n.currentTarget;
    const l = a == null ? void 0 : a.getBoundingClientRect();
    let s, d = 0, c, f = null;
    n.clientX != null && n.clientY != null && (c = n.clientX, f = n.clientY), l && (c != null && f != null ? (s = c - l.left, d = f - l.top) : (s = l.width / 2, d = l.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = d;
  }
}
const xn = Symbol("linkClicked"), En = "react-aria-pressable-style", wn = "data-react-aria-pressable";
function Rt(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: i, onClick: a, isDisabled: l, isPressed: s, preventFocusOnPress: d, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: f, ref: b, ...g } = ql(e), [p, m] = U(!1), h = D({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: $, removeAllGlobalListeners: y, removeGlobalListener: w } = Fr(), E = H((u, P) => {
    let v = h.current;
    if (l || v.didFirePressStart) return !1;
    let T = !0;
    if (v.isTriggeringEvent = !0, n) {
      let L = new $t("pressstart", P, u);
      n(L), T = L.shouldStopPropagation;
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
    let L = !0;
    if (o) {
      let A = new $t("pressend", P, u);
      o(A), L = A.shouldStopPropagation;
    }
    if (r && r(!1), m(!1), t && v && !l) {
      let A = new $t("press", P, u);
      t(A), L && (L = A.shouldStopPropagation);
    }
    return T.isTriggeringEvent = !1, L;
  }, [
    l,
    o,
    r,
    t
  ]), M = Ee(I), R = H((u, P) => {
    let v = h.current;
    if (l) return !1;
    if (i) {
      v.isTriggeringEvent = !0;
      let T = new $t("pressup", P, u);
      return i(T), v.isTriggeringEvent = !1, T.shouldStopPropagation;
    }
    return !0;
  }, [
    l,
    i
  ]), x = Ee(R), F = H((u) => {
    let P = h.current;
    if (P.isPressed && P.target) {
      P.didFirePressStart && P.pointerType != null && I(_e(P.target, u), P.pointerType, !1), P.isPressed = !1, N(null), P.isOverTarget = !1, P.activePointerId = null, P.pointerType = null, y(), f || tr(P.target);
      for (let v of P.disposables) v();
      P.disposables = [];
    }
  }, [
    f,
    y,
    I
  ]), _ = Ee(F), re = H((u) => {
    c && F(u);
  }, [
    c,
    F
  ]), G = H((u) => {
    l || a == null || a(u);
  }, [
    l,
    a
  ]), W = H((u, P) => {
    if (!l && a) {
      let v = new MouseEvent("click", u);
      go(v, P), a(zr(v));
    }
  }, [
    l,
    a
  ]), ee = Ee(W), [te, Z] = U(!1);
  j(() => {
    let u = h.current;
    if (te) {
      let P = (A) => {
        var me;
        if (u.isPressed && u.target && rr(A, u.target)) {
          var X;
          Sn(z(A), A.key) && A.preventDefault();
          let ge = z(A), xe = J(u.target, z(A));
          M(_e(u.target, A), "keyboard", xe), xe && ee(A, u.target), y(), A.key !== "Enter" && Br(u.target) && J(u.target, ge) && !A[xn] && (A[xn] = !0, ze(u.target, A, !1)), u.isPressed = !1, Z(!1), (X = u.metaKeyEvents) === null || X === void 0 || X.delete(A.key);
        } else if (A.key === "Meta" && (!((me = u.metaKeyEvents) === null || me === void 0) && me.size)) {
          var Ie;
          let ge = u.metaKeyEvents;
          u.metaKeyEvents = void 0;
          for (let xe of ge.values()) (Ie = u.target) === null || Ie === void 0 || Ie.dispatchEvent(new KeyboardEvent("keyup", xe));
        }
      }, v = u.target, L = ct((A) => {
        v && rr(A, v) && !A.repeat && J(v, z(A)) && u.target && x(_e(u.target, A), "keyboard");
      }, P);
      return $(V(u.target), "keyup", L, !0), () => {
        w(V(u.target), "keyup", L, !0);
      };
    }
  }, [
    te,
    $,
    y,
    w
  ]);
  let [le, N] = U(null);
  j(() => {
    let u = h.current;
    if (le === "pointer") {
      let P = (T) => {
        if (T.pointerId === u.activePointerId && u.isPressed && T.button === 0 && u.target) {
          if (J(u.target, z(T)) && u.pointerType != null) {
            let L = !1, A = setTimeout(() => {
              u.isPressed && u.target instanceof HTMLElement && (L ? _(T) : (Ye(u.target), u.target.click()));
            }, 80);
            $(T.currentTarget, "click", () => L = !0, !0), u.disposables.push(() => clearTimeout(A));
          } else _(T);
          u.isOverTarget = !1;
        }
      }, v = (T) => {
        _(T);
      };
      return $(V(u.target), "pointerup", P, !1), $(V(u.target), "pointercancel", v, !1), () => {
        w(V(u.target), "pointerup", P, !1), w(V(u.target), "pointercancel", v, !1);
      };
    } else if (le === "mouse" && process.env.NODE_ENV === "test") {
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
    } else if (le === "touch" && process.env.NODE_ENV === "test") {
      let P = (v) => {
        u.isPressed && J(z(v), u.target) && _({
          currentTarget: u.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      return $(fe(u.target), "scroll", P, !0), () => {
        w(fe(u.target), "scroll", P, !0);
      };
    }
  }, [
    le,
    $,
    w
  ]);
  let ce = se(() => {
    let u = h.current, P = {
      onKeyDown(v) {
        if (rr(v.nativeEvent, v.currentTarget) && J(v.currentTarget, z(v.nativeEvent))) {
          var T;
          Sn(z(v.nativeEvent), v.key) && v.preventDefault();
          let L = !0;
          !u.isPressed && !v.repeat && (u.target = v.currentTarget, u.isPressed = !0, Z(!0), u.pointerType = "keyboard", L = E(v, "keyboard")), L && v.stopPropagation(), v.metaKey && Xe() && ((T = u.metaKeyEvents) === null || T === void 0 || T.set(v.key, v.nativeEvent));
        } else v.key === "Meta" && (u.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(v) {
        if (!(v && !J(v.currentTarget, z(v.nativeEvent))) && v && v.button === 0 && !u.isTriggeringEvent && !ze.isOpening) {
          let T = !0;
          if (l && v.preventDefault(), !u.ignoreEmulatedMouseEvents && !u.isPressed && (u.pointerType === "virtual" || br(v.nativeEvent))) {
            let L = E(v, "virtual"), A = R(v, "virtual"), me = I(v, "virtual");
            G(v), T = L && A && me;
          } else if (u.isPressed && u.pointerType !== "keyboard") {
            let L = u.pointerType || v.nativeEvent.pointerType || "virtual", A = R(_e(v.currentTarget, v), L), me = I(_e(v.currentTarget, v), L, !0);
            T = A && me, u.isOverTarget = !1, G(v), F(v);
          }
          u.ignoreEmulatedMouseEvents = !1, T && v.stopPropagation();
        }
      }
    };
    return typeof PointerEvent < "u" ? (P.onPointerDown = (v) => {
      if (v.button !== 0 || !J(v.currentTarget, z(v.nativeEvent))) return;
      if (sl(v.nativeEvent)) {
        u.pointerType = "virtual";
        return;
      }
      u.pointerType = v.pointerType;
      let T = !0;
      if (!u.isPressed) {
        u.isPressed = !0, N("pointer"), u.isOverTarget = !0, u.activePointerId = v.pointerId, u.target = v.currentTarget, f || $n(u.target), T = E(v, u.pointerType);
        let L = z(v.nativeEvent);
        "releasePointerCapture" in L && L.releasePointerCapture(v.pointerId);
      }
      T && v.stopPropagation();
    }, P.onMouseDown = (v) => {
      if (J(v.currentTarget, z(v.nativeEvent)) && v.button === 0) {
        if (d) {
          let T = hn(v.target);
          T && u.disposables.push(T);
        }
        v.stopPropagation();
      }
    }, P.onPointerUp = (v) => {
      !J(v.currentTarget, z(v.nativeEvent)) || u.pointerType === "virtual" || v.button === 0 && !u.isPressed && R(v, u.pointerType || v.pointerType);
    }, P.onPointerEnter = (v) => {
      v.pointerId === u.activePointerId && u.target && !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, E(_e(u.target, v), u.pointerType));
    }, P.onPointerLeave = (v) => {
      v.pointerId === u.activePointerId && u.target && u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, I(_e(u.target, v), u.pointerType, !1), re(v));
    }, P.onDragStart = (v) => {
      J(v.currentTarget, z(v.nativeEvent)) && F(v);
    }) : process.env.NODE_ENV === "test" && (P.onMouseDown = (v) => {
      if (v.button !== 0 || !J(v.currentTarget, z(v.nativeEvent))) return;
      if (u.ignoreEmulatedMouseEvents) {
        v.stopPropagation();
        return;
      }
      if (u.isPressed = !0, N("mouse"), u.isOverTarget = !0, u.target = v.currentTarget, u.pointerType = br(v.nativeEvent) ? "virtual" : "mouse", qn(() => E(v, u.pointerType)) && v.stopPropagation(), d) {
        let L = hn(v.target);
        L && u.disposables.push(L);
      }
    }, P.onMouseEnter = (v) => {
      if (!J(v.currentTarget, z(v.nativeEvent))) return;
      let T = !0;
      u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !0, T = E(v, u.pointerType)), T && v.stopPropagation();
    }, P.onMouseLeave = (v) => {
      if (!J(v.currentTarget, z(v.nativeEvent))) return;
      let T = !0;
      u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !1, T = I(v, u.pointerType, !1), re(v)), T && v.stopPropagation();
    }, P.onMouseUp = (v) => {
      J(v.currentTarget, z(v.nativeEvent)) && !u.ignoreEmulatedMouseEvents && v.button === 0 && !u.isPressed && R(v, u.pointerType || "mouse");
    }, P.onTouchStart = (v) => {
      if (!J(v.currentTarget, z(v.nativeEvent))) return;
      let T = Yl(v.nativeEvent);
      if (!T) return;
      u.activePointerId = T.identifier, u.ignoreEmulatedMouseEvents = !0, u.isOverTarget = !0, u.isPressed = !0, N("touch"), u.target = v.currentTarget, u.pointerType = "touch", f || $n(u.target), E(Me(u.target, v), u.pointerType) && v.stopPropagation();
    }, P.onTouchMove = (v) => {
      if (!J(v.currentTarget, z(v.nativeEvent))) return;
      if (!u.isPressed) {
        v.stopPropagation();
        return;
      }
      let T = Pn(v.nativeEvent, u.activePointerId), L = !0;
      T && Tn(T, v.currentTarget) ? !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, L = E(Me(u.target, v), u.pointerType)) : u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, L = I(Me(u.target, v), u.pointerType, !1), re(Me(u.target, v))), L && v.stopPropagation();
    }, P.onTouchEnd = (v) => {
      if (!J(v.currentTarget, z(v.nativeEvent))) return;
      if (!u.isPressed) {
        v.stopPropagation();
        return;
      }
      let T = Pn(v.nativeEvent, u.activePointerId), L = !0;
      T && Tn(T, v.currentTarget) && u.pointerType != null ? (R(Me(u.target, v), u.pointerType), L = I(Me(u.target, v), u.pointerType), W(v.nativeEvent, u.target)) : u.isOverTarget && u.pointerType != null && (L = I(Me(u.target, v), u.pointerType, !1)), L && v.stopPropagation(), u.isPressed = !1, N(null), u.activePointerId = null, u.isOverTarget = !1, u.ignoreEmulatedMouseEvents = !0, u.target && !f && tr(u.target), y();
    }, P.onTouchCancel = (v) => {
      J(v.currentTarget, z(v.nativeEvent)) && (v.stopPropagation(), u.isPressed && F(Me(u.target, v)));
    }, P.onDragStart = (v) => {
      J(v.currentTarget, z(v.nativeEvent)) && F(v);
    }), P;
  }, [
    l,
    d,
    y,
    f,
    F,
    re,
    I,
    E,
    R,
    G,
    W
  ]);
  return q(() => {
    if (!b || process.env.NODE_ENV === "test") return;
    const u = V(b.current);
    if (!u || !u.head || u.getElementById(En)) return;
    const P = u.createElement("style");
    P.id = En, P.textContent = `
@layer {
  [${wn}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), u.head.prepend(P);
  }, [
    b
  ]), q(() => {
    let u = h.current;
    return () => {
      var P;
      f || tr((P = u.target) !== null && P !== void 0 ? P : void 0);
      for (let v of u.disposables) v();
      u.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: s || p,
    pressProps: Q(g, ce, {
      [wn]: !0
    })
  };
}
function Br(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function rr(e, t) {
  const { key: r, code: n } = e, o = t, i = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof fe(o).HTMLInputElement && !yo(o, r) || o instanceof fe(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Br(o)) && r !== "Enter");
}
function Yl(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Pn(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function Me(e, t) {
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
function Xl(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function Zl(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Tn(e, t) {
  let r = t.getBoundingClientRect(), n = Xl(e);
  return Zl(r, n);
}
function Jl(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Br(e);
}
function Sn(e, t) {
  return e instanceof HTMLInputElement ? !yo(e, t) : Jl(e);
}
const Ql = /* @__PURE__ */ new Set([
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
function yo(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Ql.has(e.type);
}
let Ke = null, yr = /* @__PURE__ */ new Set(), it = /* @__PURE__ */ new Map(), Be = !1, xr = !1;
const es = {
  Tab: !0,
  Escape: !0
};
function Ut(e, t) {
  for (let r of yr) r(e, t);
}
function ts(e) {
  return !(e.metaKey || !Xe() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ft(e) {
  Be = !0, !ze.isOpening && ts(e) && (Ke = "keyboard", Ut("keyboard", e));
}
function $e(e) {
  Ke = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (Be = !0, Ut("pointer", e));
}
function xo(e) {
  !ze.isOpening && br(e) && (Be = !0, Ke = "virtual");
}
function Eo(e) {
  e.target === window || e.target === document || Mt || !e.isTrusted || (!Be && !xr && (Ke = "virtual", Ut("virtual", e)), Be = !1, xr = !1);
}
function wo() {
  Mt || (Be = !1, xr = !0);
}
function Er(e) {
  if (typeof window > "u" || typeof document > "u" || it.get(fe(e))) return;
  const t = fe(e), r = V(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Be = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Ft, !0), r.addEventListener("keyup", Ft, !0), r.addEventListener("click", xo, !0), t.addEventListener("focus", Eo, !0), t.addEventListener("blur", wo, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", $e, !0), r.addEventListener("pointermove", $e, !0), r.addEventListener("pointerup", $e, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", $e, !0), r.addEventListener("mousemove", $e, !0), r.addEventListener("mouseup", $e, !0)), t.addEventListener("beforeunload", () => {
    Po(e);
  }, {
    once: !0
  }), it.set(t, {
    focus: n
  });
}
const Po = (e, t) => {
  const r = fe(e), n = V(e);
  t && n.removeEventListener("DOMContentLoaded", t), it.has(r) && (r.HTMLElement.prototype.focus = it.get(r).focus, n.removeEventListener("keydown", Ft, !0), n.removeEventListener("keyup", Ft, !0), n.removeEventListener("click", xo, !0), r.removeEventListener("focus", Eo, !0), r.removeEventListener("blur", wo, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", $e, !0), n.removeEventListener("pointermove", $e, !0), n.removeEventListener("pointerup", $e, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", $e, !0), n.removeEventListener("mousemove", $e, !0), n.removeEventListener("mouseup", $e, !0)), it.delete(r));
};
function rs(e) {
  const t = V(e);
  let r;
  return t.readyState !== "loading" ? Er(e) : (r = () => {
    Er(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Po(e, r);
}
typeof document < "u" && rs();
function To() {
  return Ke !== "pointer";
}
function So() {
  return Ke;
}
function ns(e) {
  Ke = e, Ut(e, null);
}
const os = /* @__PURE__ */ new Set([
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
function is(e, t, r) {
  let n = V(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? fe(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? fe(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? fe(r == null ? void 0 : r.target).HTMLElement : HTMLElement, l = typeof window < "u" ? fe(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !os.has(n.activeElement.type) || n.activeElement instanceof i || n.activeElement instanceof a && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof l && !es[r.key]);
}
function as(e, t, r) {
  Er(), q(() => {
    let n = (o, i) => {
      is(!!(r != null && r.isTextInput), o, i) && e(To());
    };
    return yr.add(n), () => {
      yr.delete(n);
    };
  }, t);
}
function dt(e) {
  const t = V(e);
  if (So() === "virtual") {
    let r = ve(t);
    ro(() => {
      const n = ve(t);
      (n === r || n === t.body) && e.isConnected && Ye(e);
    });
  } else Ye(e);
}
function Co(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const i = H((s) => {
    if (s.target === s.currentTarget)
      return n && n(s), o && o(!1), !0;
  }, [
    n,
    o
  ]), a = ho(i), l = H((s) => {
    const d = V(s.target), c = d ? ve(d) : ve();
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
function Cn(e) {
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
function ls(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Cn(e.onKeyDown),
      onKeyUp: Cn(e.onKeyUp)
    }
  };
}
let ss = /* @__PURE__ */ k.createContext(null);
function ds(e) {
  let t = ie(ss) || {};
  Or(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Kr(e, t) {
  let { focusProps: r } = Co(e), { keyboardProps: n } = ls(e), o = Q(r, n), i = ds(t), a = e.isDisabled ? {} : i, l = D(e.autoFocus);
  q(() => {
    l.current && t.current && dt(t.current), l.current = !1;
  }, [
    t
  ]);
  let s = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (s = void 0), {
    focusableProps: Q({
      ...o,
      tabIndex: s
    }, a)
  };
}
const cs = /* @__PURE__ */ k.forwardRef(({ children: e, ...t }, r) => {
  let n = D(!1), o = ie(st);
  r = Dr(r || (o == null ? void 0 : o.ref));
  let i = Q(o || {}, {
    ...t,
    ref: r,
    register() {
      n.current = !0, o && o.register();
    }
  });
  return Or(o, r), q(() => {
    n.current || (process.env.NODE_ENV !== "production" && console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."), n.current = !0);
  }, []), /* @__PURE__ */ k.createElement(st.Provider, {
    value: i
  }, e);
});
function us({ children: e }) {
  let t = se(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ k.createElement(st.Provider, {
    value: t
  }, e);
}
function Gr(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, i = D({
    isFocusWithin: !1
  }), { addGlobalListener: a, removeAllGlobalListeners: l } = Fr(), s = H((f) => {
    f.currentTarget.contains(f.target) && i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, l(), r && r(f), o && o(!1));
  }, [
    r,
    o,
    i,
    l
  ]), d = ho(s), c = H((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const b = V(f.target), g = ve(b);
    if (!i.current.isFocusWithin && g === z(f.nativeEvent)) {
      n && n(f), o && o(!0), i.current.isFocusWithin = !0, d(f);
      let p = f.currentTarget;
      a(b, "focus", (m) => {
        if (i.current.isFocusWithin && !J(p, m.target)) {
          let h = new b.defaultView.FocusEvent("blur", {
            relatedTarget: m.target
          });
          go(h, p);
          let $ = zr(h);
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
let Dt = !1, yt = 0;
function wr() {
  Dt = !0, setTimeout(() => {
    Dt = !1;
  }, 50);
}
function kn(e) {
  e.pointerType === "touch" && wr();
}
function fs() {
  if (!(typeof document > "u"))
    return yt === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", kn) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", wr)), yt++, () => {
      yt--, !(yt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", kn) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", wr));
    };
}
function ut(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [i, a] = U(!1), l = D({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  q(fs, []);
  let { addGlobalListener: s, removeAllGlobalListeners: d } = Fr(), { hoverProps: c, triggerHoverEnd: f } = se(() => {
    let b = (m, h) => {
      if (l.pointerType = h, o || h === "touch" || l.isHovered || !m.currentTarget.contains(m.target)) return;
      l.isHovered = !0;
      let $ = m.currentTarget;
      l.target = $, s(V(m.target), "pointerover", (y) => {
        l.isHovered && l.target && !J(l.target, y.target) && g(y, y.pointerType);
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
      Dt && m.pointerType === "mouse" || b(m, m.pointerType);
    }, p.onPointerLeave = (m) => {
      !o && m.currentTarget.contains(m.target) && g(m, m.pointerType);
    }) : process.env.NODE_ENV === "test" && (p.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (m) => {
      !l.ignoreEmulatedMouseEvents && !Dt && b(m, "mouse"), l.ignoreEmulatedMouseEvents = !1;
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
  return q(() => {
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
function vs(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, i = D({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), a = Ee((s) => {
    r && xt(s, t) && (o && o(s), i.current.isPointerDown = !0);
  }), l = Ee((s) => {
    r && r(s);
  });
  q(() => {
    let s = i.current;
    if (n) return;
    const d = t.current, c = V(d);
    if (typeof PointerEvent < "u") {
      let f = (b) => {
        s.isPointerDown && xt(b, t) && l(b), s.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", a, !0), c.addEventListener("click", f, !0), () => {
        c.removeEventListener("pointerdown", a, !0), c.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (g) => {
        s.ignoreEmulatedMouseEvents ? s.ignoreEmulatedMouseEvents = !1 : s.isPointerDown && xt(g, t) && l(g), s.isPointerDown = !1;
      }, b = (g) => {
        s.ignoreEmulatedMouseEvents = !0, s.isPointerDown && xt(g, t) && l(g), s.isPointerDown = !1;
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
function xt(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const Nn = /* @__PURE__ */ k.createContext(null), Pr = "react-aria-focus-scope-restore";
let Y = null;
function bs(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, i = D(null), a = D(null), l = D([]), { parentNode: s } = ie(Nn) || {}, d = se(() => new Sr({
    scopeRef: l
  }), [
    l
  ]);
  j(() => {
    let b = s || oe.root;
    if (oe.getTreeNode(b.scopeRef) && Y && !Ot(Y, b.scopeRef)) {
      let g = oe.getTreeNode(Y);
      g && (b = g);
    }
    b.addChild(d), oe.addNode(d);
  }, [
    d,
    s
  ]), j(() => {
    let b = oe.getTreeNode(l);
    b && (b.contain = !!r);
  }, [
    r
  ]), j(() => {
    var b;
    let g = (b = i.current) === null || b === void 0 ? void 0 : b.nextSibling, p = [], m = (h) => h.stopPropagation();
    for (; g && g !== a.current; )
      p.push(g), g.addEventListener(Pr, m), g = g.nextSibling;
    return l.current = p, () => {
      for (let h of p) h.removeEventListener(Pr, m);
    };
  }, [
    t
  ]), ys(l, n, r), gs(l, r), xs(l, n, r), $s(l, o), q(() => {
    const b = ve(V(l.current ? l.current[0] : void 0));
    let g = null;
    if (ye(b, l.current)) {
      for (let p of oe.traverse()) p.scopeRef && ye(b, p.scopeRef.current) && (g = p);
      g === oe.getTreeNode(l) && (Y = g.scopeRef);
    }
  }, [
    l
  ]), j(() => () => {
    var b, g, p;
    let m = (p = (g = oe.getTreeNode(l)) === null || g === void 0 || (b = g.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && p !== void 0 ? p : null;
    (l === Y || Ot(l, Y)) && (!m || oe.getTreeNode(m)) && (Y = m), oe.removeTreeNode(l);
  }, [
    l
  ]);
  let c = se(() => ps(l), []), f = se(() => ({
    focusManager: c,
    parentNode: d
  }), [
    d,
    c
  ]);
  return /* @__PURE__ */ k.createElement(Nn.Provider, {
    value: f
  }, /* @__PURE__ */ k.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: i
  }), t, /* @__PURE__ */ k.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: a
  }));
}
function ps(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: i, accept: a } = t;
      var l;
      let s = n || ve(V((l = r[0]) !== null && l !== void 0 ? l : void 0)), d = r[0].previousElementSibling, c = He(r), f = Oe(c, {
        tabbable: o,
        accept: a
      }, r);
      f.currentNode = ye(s, r) ? s : d;
      let b = f.nextNode();
      return !b && i && (f.currentNode = d, b = f.nextNode()), b && Ne(b, !0), b;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: i, accept: a } = t;
      var l;
      let s = n || ve(V((l = r[0]) !== null && l !== void 0 ? l : void 0)), d = r[r.length - 1].nextElementSibling, c = He(r), f = Oe(c, {
        tabbable: o,
        accept: a
      }, r);
      f.currentNode = ye(s, r) ? s : d;
      let b = f.previousNode();
      return !b && i && (f.currentNode = d, b = f.previousNode()), b && Ne(b, !0), b;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, i = He(r), a = Oe(i, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[0].previousElementSibling;
      let l = a.nextNode();
      return l && Ne(l, !0), l;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, i = He(r), a = Oe(i, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[r.length - 1].nextElementSibling;
      let l = a.previousNode();
      return l && Ne(l, !0), l;
    }
  };
}
function He(e) {
  return e[0].parentElement;
}
function nt(e) {
  let t = oe.getTreeNode(Y);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function ms(e) {
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
function gs(e, t) {
  let r = D(void 0), n = D(void 0);
  j(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const i = V(o ? o[0] : void 0);
    let a = (d) => {
      if (d.key !== "Tab" || d.altKey || d.ctrlKey || d.metaKey || !nt(e) || d.isComposing) return;
      let c = ve(i), f = e.current;
      if (!f || !ye(c, f)) return;
      let b = He(f), g = Oe(b, {
        tabbable: !0
      }, f);
      if (!c) return;
      g.currentNode = c;
      let p = d.shiftKey ? g.previousNode() : g.nextNode();
      p || (g.currentNode = d.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, p = d.shiftKey ? g.previousNode() : g.nextNode()), d.preventDefault(), p && Ne(p, !0);
    }, l = (d) => {
      (!Y || Ot(Y, e)) && ye(z(d), e.current) ? (Y = e, r.current = z(d)) : nt(e) && !De(z(d), e) ? r.current ? r.current.focus() : Y && Y.current && Tr(Y.current) : nt(e) && (r.current = z(d));
    }, s = (d) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let c = So(), f = (c === "virtual" || c === null) && Rr() && to(), b = ve(i);
        if (!f && b && nt(e) && !De(b, e)) {
          Y = e;
          let p = z(d);
          if (p && p.isConnected) {
            var g;
            r.current = p, (g = r.current) === null || g === void 0 || g.focus();
          } else Y.current && Tr(Y.current);
        }
      });
    };
    return i.addEventListener("keydown", a, !1), i.addEventListener("focusin", l, !1), o == null || o.forEach((d) => d.addEventListener("focusin", l, !1)), o == null || o.forEach((d) => d.addEventListener("focusout", s, !1)), () => {
      i.removeEventListener("keydown", a, !1), i.removeEventListener("focusin", l, !1), o == null || o.forEach((d) => d.removeEventListener("focusin", l, !1)), o == null || o.forEach((d) => d.removeEventListener("focusout", s, !1));
    };
  }, [
    e,
    t
  ]), j(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function ko(e) {
  return De(e);
}
function ye(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function De(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of oe.traverse(oe.getTreeNode(t)))
    if (r && ye(e, r.current)) return !0;
  return !1;
}
function hs(e) {
  return De(e, Y);
}
function Ot(e, t) {
  var r;
  let n = (r = oe.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function Ne(e, t = !1) {
  if (e != null && !t) try {
    dt(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function No(e, t = !0) {
  let r = e[0].previousElementSibling, n = He(e), o = Oe(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let i = o.nextNode();
  return t && !i && (n = He(e), o = Oe(n, {
    tabbable: !1
  }, e), o.currentNode = r, i = o.nextNode()), i;
}
function Tr(e, t = !0) {
  Ne(No(e, t));
}
function $s(e, t) {
  const r = k.useRef(t);
  q(() => {
    if (r.current) {
      Y = e;
      const n = V(e.current ? e.current[0] : void 0);
      !ye(ve(n), Y.current) && e.current && Tr(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function ys(e, t, r) {
  j(() => {
    if (t || r) return;
    let n = e.current;
    const o = V(n ? n[0] : void 0);
    let i = (a) => {
      let l = z(a);
      ye(l, e.current) ? Y = e : ko(l) || (Y = null);
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
function Ln(e) {
  let t = oe.getTreeNode(Y);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function xs(e, t, r) {
  const n = D(typeof document < "u" ? ve(V(e.current ? e.current[0] : void 0)) : null);
  j(() => {
    let o = e.current;
    const i = V(o ? o[0] : void 0);
    if (!t || r) return;
    let a = () => {
      (!Y || Ot(Y, e)) && ye(ve(i), e.current) && (Y = e);
    };
    return i.addEventListener("focusin", a, !1), o == null || o.forEach((l) => l.addEventListener("focusin", a, !1)), () => {
      i.removeEventListener("focusin", a, !1), o == null || o.forEach((l) => l.removeEventListener("focusin", a, !1));
    };
  }, [
    e,
    r
  ]), j(() => {
    const o = V(e.current ? e.current[0] : void 0);
    if (!t) return;
    let i = (a) => {
      if (a.key !== "Tab" || a.altKey || a.ctrlKey || a.metaKey || !nt(e) || a.isComposing) return;
      let l = o.activeElement;
      if (!De(l, e) || !Ln(e)) return;
      let s = oe.getTreeNode(e);
      if (!s) return;
      let d = s.nodeToRestore, c = Oe(o.body, {
        tabbable: !0
      });
      c.currentNode = l;
      let f = a.shiftKey ? c.previousNode() : c.nextNode();
      if ((!d || !d.isConnected || d === o.body) && (d = void 0, s.nodeToRestore = void 0), (!f || !De(f, e)) && d) {
        c.currentNode = d;
        do
          f = a.shiftKey ? c.previousNode() : c.nextNode();
        while (De(f, e));
        a.preventDefault(), a.stopPropagation(), f ? Ne(f, !0) : ko(d) ? Ne(d, !0) : l.blur();
      }
    };
    return r || o.addEventListener("keydown", i, !0), () => {
      r || o.removeEventListener("keydown", i, !0);
    };
  }, [
    e,
    t,
    r
  ]), j(() => {
    const o = V(e.current ? e.current[0] : void 0);
    if (!t) return;
    let i = oe.getTreeNode(e);
    if (i) {
      var a;
      return i.nodeToRestore = (a = n.current) !== null && a !== void 0 ? a : void 0, () => {
        let l = oe.getTreeNode(e);
        if (!l) return;
        let s = l.nodeToRestore, d = ve(o);
        if (t && s && (d && De(d, e) || d === o.body && Ln(e))) {
          let c = oe.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let f = c.getTreeNode(e);
              for (; f; ) {
                if (f.nodeToRestore && f.nodeToRestore.isConnected) {
                  In(f.nodeToRestore);
                  return;
                }
                f = f.parent;
              }
              for (f = c.getTreeNode(e); f; ) {
                if (f.scopeRef && f.scopeRef.current && oe.getTreeNode(f.scopeRef)) {
                  let b = No(f.scopeRef.current, !0);
                  In(b);
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
function In(e) {
  e.dispatchEvent(new CustomEvent(Pr, {
    bubbles: !0,
    cancelable: !0
  })) && Ne(e);
}
function Oe(e, t, r) {
  let n = t != null && t.tabbable ? ml : lo, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, i = V(o), a = ja(i, e || i, NodeFilter.SHOW_ELEMENT, {
    acceptNode(l) {
      var s;
      return !(t == null || (s = t.from) === null || s === void 0) && s.contains(l) || t != null && t.tabbable && l.tagName === "INPUT" && l.getAttribute("type") === "radio" && (!ms(l) || a.currentNode.tagName === "INPUT" && a.currentNode.type === "radio" && a.currentNode.name === l.name) ? NodeFilter.FILTER_REJECT : n(l) && (!r || ye(l, r)) && (!(t != null && t.accept) || t.accept(l)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
class Wr {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let o = this.fastMap.get(r ?? null);
    if (!o) return;
    let i = new Sr({
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
    for (let i of this.traverse()) i !== r && r.nodeToRestore && i.nodeToRestore && r.scopeRef && r.scopeRef.current && ye(i.nodeToRestore, r.scopeRef.current) && (i.nodeToRestore = r.nodeToRestore);
    let o = r.children;
    n && (n.removeChild(r), o.size > 0 && o.forEach((i) => n && n.addChild(i))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0) for (let r of t.children) yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new Wr();
    var n;
    for (let o of this.traverse()) r.addTreeNode(o.scopeRef, (n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, o.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Sr({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Sr {
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
let oe = new Wr();
function ft(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = D({
    isFocused: !1,
    isFocusVisible: t || To()
  }), [i, a] = U(!1), [l, s] = U(() => o.current.isFocused && o.current.isFocusVisible), d = H(() => s(o.current.isFocused && o.current.isFocusVisible), []), c = H((g) => {
    o.current.isFocused = g, a(g), d();
  }, [
    d
  ]);
  as((g) => {
    o.current.isFocusVisible = g, d();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = Co({
    isDisabled: n,
    onFocusChange: c
  }), { focusWithinProps: b } = Gr({
    isDisabled: !n,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: n ? b : f
  };
}
const Se = [];
function Es(e, t) {
  let { onClose: r, shouldCloseOnBlur: n, isOpen: o, isDismissable: i = !1, isKeyboardDismissDisabled: a = !1, shouldCloseOnInteractOutside: l } = e;
  q(() => {
    if (o && !Se.includes(t))
      return Se.push(t), () => {
        let p = Se.indexOf(t);
        p >= 0 && Se.splice(p, 1);
      };
  }, [
    o,
    t
  ]);
  let s = () => {
    Se[Se.length - 1] === t && r && r();
  }, d = (p) => {
    (!l || l(p.target)) && Se[Se.length - 1] === t && (p.stopPropagation(), p.preventDefault());
  }, c = (p) => {
    (!l || l(p.target)) && (Se[Se.length - 1] === t && (p.stopPropagation(), p.preventDefault()), s());
  }, f = (p) => {
    p.key === "Escape" && !a && !p.nativeEvent.isComposing && (p.stopPropagation(), p.preventDefault(), s());
  };
  vs({
    ref: t,
    onInteractOutside: i && o ? c : void 0,
    onInteractOutsideStart: d
  });
  let { focusWithinProps: b } = Gr({
    isDisabled: !n,
    onBlurWithin: (p) => {
      !p.relatedTarget || hs(p.relatedTarget) || (!l || l(p.relatedTarget)) && (r == null || r());
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
function ws(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  q(() => {
    r && r.current && vo.set(r.current, t.close);
  });
  let i;
  n === "menu" ? i = !0 : n === "listbox" && (i = "listbox");
  let a = Ae();
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
let Et = 0, nr;
function Ps(e = {}) {
  let { isDisabled: t } = e;
  j(() => {
    if (!t)
      return Et++, Et === 1 && (zt() ? nr = Ss() : nr = Ts()), () => {
        Et--, Et === 0 && nr();
      };
  }, [
    t
  ]);
}
function Ts() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return ct(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? or(document.documentElement, "scrollbarGutter", "stable") : or(document.documentElement, "paddingRight", `${e}px`)), or(document.documentElement, "overflow", "hidden"));
}
function Ss() {
  let e, t = !1, r = (s) => {
    let d = s.target;
    e = vr(d) ? d : oo(d, !0), t = !1;
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
    if (c && Jt(c))
      c.focus({
        preventScroll: !0
      }), Mn(c, Jt(d));
    else if (!c) {
      var f;
      let b = (f = d.parentElement) === null || f === void 0 ? void 0 : f.closest("[tabindex]");
      b == null || b.focus({
        preventScroll: !0
      });
    }
  }, a = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function(s) {
    let d = document.activeElement != null && Jt(document.activeElement);
    a.call(this, {
      ...s,
      preventScroll: !0
    }), (!s || !s.preventScroll) && Mn(this, d);
  };
  let l = ct(ir(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), ir(document, "touchmove", o, {
    passive: !1,
    capture: !0
  }), ir(document, "blur", i, !0));
  return () => {
    l(), n.remove(), HTMLElement.prototype.focus = a;
  };
}
function or(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function ir(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function Mn(e, t) {
  t || !at ? Rn(e) : at.addEventListener("resize", () => Rn(e), {
    once: !0
  });
}
function Rn(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let n = oo(r);
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
const Cs = /* @__PURE__ */ K({});
function ks() {
  var e;
  return (e = ie(Cs)) !== null && e !== void 0 ? e : {};
}
var Lo = {};
Lo = {
  dismiss: "تجاهل"
};
var Io = {};
Io = {
  dismiss: "Отхвърляне"
};
var Mo = {};
Mo = {
  dismiss: "Odstranit"
};
var Ro = {};
Ro = {
  dismiss: "Luk"
};
var Fo = {};
Fo = {
  dismiss: "Schließen"
};
var Do = {};
Do = {
  dismiss: "Απόρριψη"
};
var Oo = {};
Oo = {
  dismiss: "Dismiss"
};
var Ao = {};
Ao = {
  dismiss: "Descartar"
};
var _o = {};
_o = {
  dismiss: "Lõpeta"
};
var Vo = {};
Vo = {
  dismiss: "Hylkää"
};
var Ho = {};
Ho = {
  dismiss: "Rejeter"
};
var zo = {};
zo = {
  dismiss: "התעלם"
};
var Bo = {};
Bo = {
  dismiss: "Odbaci"
};
var Ko = {};
Ko = {
  dismiss: "Elutasítás"
};
var Go = {};
Go = {
  dismiss: "Ignora"
};
var Wo = {};
Wo = {
  dismiss: "閉じる"
};
var Uo = {};
Uo = {
  dismiss: "무시"
};
var jo = {};
jo = {
  dismiss: "Atmesti"
};
var qo = {};
qo = {
  dismiss: "Nerādīt"
};
var Yo = {};
Yo = {
  dismiss: "Lukk"
};
var Xo = {};
Xo = {
  dismiss: "Negeren"
};
var Zo = {};
Zo = {
  dismiss: "Zignoruj"
};
var Jo = {};
Jo = {
  dismiss: "Descartar"
};
var Qo = {};
Qo = {
  dismiss: "Dispensar"
};
var ei = {};
ei = {
  dismiss: "Revocare"
};
var ti = {};
ti = {
  dismiss: "Пропустить"
};
var ri = {};
ri = {
  dismiss: "Zrušiť"
};
var ni = {};
ni = {
  dismiss: "Opusti"
};
var oi = {};
oi = {
  dismiss: "Odbaci"
};
var ii = {};
ii = {
  dismiss: "Avvisa"
};
var ai = {};
ai = {
  dismiss: "Kapat"
};
var li = {};
li = {
  dismiss: "Скасувати"
};
var si = {};
si = {
  dismiss: "取消"
};
var di = {};
di = {
  dismiss: "關閉"
};
var ci = {};
ci = {
  "ar-AE": Lo,
  "bg-BG": Io,
  "cs-CZ": Mo,
  "da-DK": Ro,
  "de-DE": Fo,
  "el-GR": Do,
  "en-US": Oo,
  "es-ES": Ao,
  "et-EE": _o,
  "fi-FI": Vo,
  "fr-FR": Ho,
  "he-IL": zo,
  "hr-HR": Bo,
  "hu-HU": Ko,
  "it-IT": Go,
  "ja-JP": Wo,
  "ko-KR": Uo,
  "lt-LT": jo,
  "lv-LV": qo,
  "nb-NO": Yo,
  "nl-NL": Xo,
  "pl-PL": Zo,
  "pt-BR": Jo,
  "pt-PT": Qo,
  "ro-RO": ei,
  "ru-RU": ti,
  "sk-SK": ri,
  "sl-SI": ni,
  "sr-SP": oi,
  "sv-SE": ii,
  "tr-TR": ai,
  "uk-UA": li,
  "zh-CN": si,
  "zh-TW": di
};
const Fn = {
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
function Ns(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = U(!1), { focusWithinProps: i } = Gr({
    isDisabled: !r,
    onFocusWithinChange: (l) => o(l)
  }), a = se(() => n ? t : t ? {
    ...Fn,
    ...t
  } : Fn, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: a
    }
  };
}
function ui(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...i } = e, { visuallyHiddenProps: a } = Ns(e);
  return /* @__PURE__ */ k.createElement(r, Q(i, a), t);
}
function Ls(e) {
  return e && e.__esModule ? e.default : e;
}
function Dn(e) {
  let { onDismiss: t, ...r } = e, n = mo(Ls(ci), "@react-aria/overlays"), o = no(r, n.format("dismiss")), i = () => {
    t && t();
  };
  return /* @__PURE__ */ k.createElement(ui, null, /* @__PURE__ */ k.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const Is = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
let Qe = /* @__PURE__ */ new WeakMap(), ue = [];
function Ms(e, t) {
  let r = fe(e == null ? void 0 : e[0]), n = t instanceof r.Element ? {
    root: t
  } : t;
  var o;
  let i = (o = n == null ? void 0 : n.root) !== null && o !== void 0 ? o : document.body, a = (n == null ? void 0 : n.shouldUseInert) && Is, l = new Set(e), s = /* @__PURE__ */ new Set(), d = (m) => a && m instanceof r.HTMLElement ? m.inert : m.getAttribute("aria-hidden") === "true", c = (m, h) => {
    a && m instanceof r.HTMLElement ? m.inert = h : h ? m.setAttribute("aria-hidden", "true") : (m.removeAttribute("aria-hidden"), m instanceof r.HTMLElement && (m.inert = !1));
  }, f = (m) => {
    for (let w of m.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) l.add(w);
    let h = (w) => {
      if (s.has(w) || l.has(w) || w.parentElement && s.has(w.parentElement) && w.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (let E of l)
        if (w.contains(E)) return NodeFilter.FILTER_SKIP;
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
  ue.length && ue[ue.length - 1].disconnect(), f(i);
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
  return ue.push(p), () => {
    g.disconnect();
    for (let m of s) {
      let h = Qe.get(m);
      h != null && (h === 1 ? (c(m, !1), Qe.delete(m)) : Qe.set(m, h - 1));
    }
    p === ue[ue.length - 1] ? (ue.pop(), ue.length && ue[ue.length - 1].observe()) : ue.splice(ue.indexOf(p), 1);
  };
}
function Rs(e) {
  let t = ue[ue.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
function Fs(e, t) {
  let { triggerRef: r, popoverRef: n, groupRef: o, isNonModal: i, isKeyboardDismissDisabled: a, shouldCloseOnInteractOutside: l, ...s } = e, d = s.trigger === "SubmenuTrigger", { overlayProps: c, underlayProps: f } = Es({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !i || d,
    isKeyboardDismissDisabled: a,
    shouldCloseOnInteractOutside: l
  }, o ?? n), { overlayProps: b, arrowProps: g, placement: p, triggerAnchorPoint: m } = Bl({
    ...s,
    targetRef: r,
    overlayRef: n,
    isOpen: t.isOpen,
    onClose: i && !d ? t.close : null
  });
  return Ps({
    isDisabled: i || !t.isOpen
  }), q(() => {
    if (t.isOpen && n.current) {
      var h, $;
      return i ? Rs((h = o == null ? void 0 : o.current) !== null && h !== void 0 ? h : n.current) : Ms([
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
    popoverProps: Q(c, b),
    arrowProps: g,
    underlayProps: f,
    placement: p,
    triggerAnchorPoint: m
  };
}
const fi = /* @__PURE__ */ k.createContext(null);
function On(e) {
  let t = Ir(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, i] = U(!1), a = se(() => ({
    contain: o,
    setContain: i
  }), [
    o,
    i
  ]), { getContainer: l } = ks();
  if (!e.portalContainer && l && (r = l()), !r) return null;
  let s = e.children;
  return e.disableFocusManagement || (s = /* @__PURE__ */ k.createElement(bs, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, s)), s = /* @__PURE__ */ k.createElement(fi.Provider, {
    value: a
  }, /* @__PURE__ */ k.createElement(us, null, s)), /* @__PURE__ */ ka.createPortal(s, r);
}
function Ds() {
  let e = ie(fi), t = e == null ? void 0 : e.setContain;
  j(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function Os(e) {
  let { id: t, label: r, "aria-labelledby": n, "aria-label": o, labelElementType: i = "label" } = e;
  t = Ae(t);
  let a = Ae(), l = {};
  r ? (n = n ? `${a} ${n}` : a, l = {
    id: a,
    htmlFor: i === "label" ? t : void 0
  }) : !n && !o && process.env.NODE_ENV !== "production" && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let s = no({
    id: t,
    "aria-label": o,
    "aria-labelledby": n
  });
  return {
    labelProps: l,
    fieldProps: s
  };
}
function As(e) {
  let { description: t, errorMessage: r, isInvalid: n, validationState: o } = e, { labelProps: i, fieldProps: a } = Os(e), l = cr([
    !!t,
    !!r,
    n,
    o
  ]), s = cr([
    !!t,
    !!r,
    n,
    o
  ]);
  return a = Q(a, {
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
const vi = {
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
}, bi = {
  ...vi,
  customError: !0,
  valid: !1
}, Ue = {
  isInvalid: !1,
  validationDetails: vi,
  validationErrors: []
}, _s = K({}), At = "__formValidationState" + Date.now();
function Ur(e) {
  if (e[At]) {
    let { realtimeValidation: t, displayValidation: r, updateValidation: n, resetValidation: o, commitValidation: i } = e[At];
    return {
      realtimeValidation: t,
      displayValidation: r,
      updateValidation: n,
      resetValidation: o,
      commitValidation: i
    };
  }
  return Vs(e);
}
function Vs(e) {
  let { isInvalid: t, validationState: r, name: n, value: o, builtinValidation: i, validate: a, validationBehavior: l = "aria" } = e;
  r && (t || (t = r === "invalid"));
  let s = t !== void 0 ? {
    isInvalid: t,
    validationErrors: [],
    validationDetails: bi
  } : null, d = se(() => {
    if (!a || o == null) return null;
    let _ = Hs(a, o);
    return An(_);
  }, [
    a,
    o
  ]);
  i != null && i.validationDetails.valid && (i = void 0);
  let c = ie(_s), f = se(() => n ? Array.isArray(n) ? n.flatMap((_) => Cr(c[_])) : Cr(c[n]) : [], [
    c,
    n
  ]), [b, g] = U(c), [p, m] = U(!1);
  c !== b && (g(c), m(!1));
  let h = se(() => An(p ? [] : f), [
    p,
    f
  ]), $ = D(Ue), [y, w] = U(Ue), E = D(Ue), I = () => {
    if (!M) return;
    R(!1);
    let _ = d || i || $.current;
    ar(_, E.current) || (E.current = _, w(_));
  }, [M, R] = U(!1);
  return q(I), {
    realtimeValidation: s || h || d || i || Ue,
    displayValidation: l === "native" ? s || h || y : s || h || d || i || y,
    updateValidation(_) {
      l === "aria" && !ar(y, _) ? w(_) : $.current = _;
    },
    resetValidation() {
      let _ = Ue;
      ar(_, E.current) || (E.current = _, w(_)), l === "native" && R(!1), m(!0);
    },
    commitValidation() {
      l === "native" && R(!0), m(!0);
    }
  };
}
function Cr(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function Hs(e, t) {
  if (typeof e == "function") {
    let r = e(t);
    if (r && typeof r != "boolean") return Cr(r);
  }
  return [];
}
function An(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: bi
  } : null;
}
function ar(e, t) {
  return e === t ? !0 : !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((r, n) => r === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([r, n]) => t.validationDetails[r] === n);
}
function pi(e, t, r) {
  let { validationBehavior: n, focus: o } = e;
  j(() => {
    if (n === "native" && (r != null && r.current) && !r.current.disabled) {
      let d = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(d), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(Bs(r.current));
    }
  });
  let i = D(!1), a = Ee(() => {
    i.current || t.resetValidation();
  }), l = Ee((d) => {
    var c;
    t.displayValidation.isInvalid || t.commitValidation();
    let f = r == null || (c = r.current) === null || c === void 0 ? void 0 : c.form;
    if (!d.defaultPrevented && r && f && Ks(f) === r.current) {
      var b;
      o ? o() : (b = r.current) === null || b === void 0 || b.focus(), ns("keyboard");
    }
    d.preventDefault();
  }), s = Ee(() => {
    t.commitValidation();
  });
  q(() => {
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
function zs(e) {
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
function Bs(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: zs(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function Ks(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let r = e.elements[t];
    if (!r.validity.valid) return r;
  }
  return null;
}
function mi(e, t) {
  let { inputElementType: r = "input", isDisabled: n = !1, isRequired: o = !1, isReadOnly: i = !1, type: a = "text", validationBehavior: l = "aria" } = e, [s, d] = Bt(e.value, e.defaultValue || "", e.onChange), { focusableProps: c } = Kr(e, t), f = Ur({
    ...e,
    value: s
  }), { isInvalid: b, validationErrors: g, validationDetails: p } = f.displayValidation, { labelProps: m, fieldProps: h, descriptionProps: $, errorMessageProps: y } = As({
    ...e,
    isInvalid: b,
    errorMessage: e.errorMessage || g
  }), w = Pe(e, {
    labelable: !0
  });
  const E = {
    type: a,
    pattern: e.pattern
  };
  let [I] = U(s);
  var M;
  return io(t, (M = e.defaultValue) !== null && M !== void 0 ? M : I, d), pi(e, f, t), {
    labelProps: m,
    inputProps: Q(w, r === "input" ? E : void 0, {
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
      [parseInt(k.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
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
var gi = {};
gi = {
  "Clear search": "مسح البحث"
};
var hi = {};
hi = {
  "Clear search": "Изчистване на търсене"
};
var $i = {};
$i = {
  "Clear search": "Vymazat hledání"
};
var yi = {};
yi = {
  "Clear search": "Ryd søgning"
};
var xi = {};
xi = {
  "Clear search": "Suche zurücksetzen"
};
var Ei = {};
Ei = {
  "Clear search": "Απαλοιφή αναζήτησης"
};
var wi = {};
wi = {
  "Clear search": "Clear search"
};
var Pi = {};
Pi = {
  "Clear search": "Borrar búsqueda"
};
var Ti = {};
Ti = {
  "Clear search": "Tühjenda otsing"
};
var Si = {};
Si = {
  "Clear search": "Tyhjennä haku"
};
var Ci = {};
Ci = {
  "Clear search": "Effacer la recherche"
};
var ki = {};
ki = {
  "Clear search": "נקה חיפוש"
};
var Ni = {};
Ni = {
  "Clear search": "Obriši pretragu"
};
var Li = {};
Li = {
  "Clear search": "Keresés törlése"
};
var Ii = {};
Ii = {
  "Clear search": "Cancella ricerca"
};
var Mi = {};
Mi = {
  "Clear search": "検索をクリア"
};
var Ri = {};
Ri = {
  "Clear search": "검색 지우기"
};
var Fi = {};
Fi = {
  "Clear search": "Išvalyti iešką"
};
var Di = {};
Di = {
  "Clear search": "Notīrīt meklēšanu"
};
var Oi = {};
Oi = {
  "Clear search": "Tøm søk"
};
var Ai = {};
Ai = {
  "Clear search": "Zoekactie wissen"
};
var _i = {};
_i = {
  "Clear search": "Wyczyść zawartość wyszukiwania"
};
var Vi = {};
Vi = {
  "Clear search": "Limpar pesquisa"
};
var Hi = {};
Hi = {
  "Clear search": "Limpar pesquisa"
};
var zi = {};
zi = {
  "Clear search": "Ştergeţi căutarea"
};
var Bi = {};
Bi = {
  "Clear search": "Очистить поиск"
};
var Ki = {};
Ki = {
  "Clear search": "Vymazať vyhľadávanie"
};
var Gi = {};
Gi = {
  "Clear search": "Počisti iskanje"
};
var Wi = {};
Wi = {
  "Clear search": "Obriši pretragu"
};
var Ui = {};
Ui = {
  "Clear search": "Rensa sökning"
};
var ji = {};
ji = {
  "Clear search": "Aramayı temizle"
};
var qi = {};
qi = {
  "Clear search": "Очистити пошук"
};
var Yi = {};
Yi = {
  "Clear search": "清除搜索"
};
var Xi = {};
Xi = {
  "Clear search": "清除搜尋條件"
};
var Zi = {};
Zi = {
  "ar-AE": gi,
  "bg-BG": hi,
  "cs-CZ": $i,
  "da-DK": yi,
  "de-DE": xi,
  "el-GR": Ei,
  "en-US": wi,
  "es-ES": Pi,
  "et-EE": Ti,
  "fi-FI": Si,
  "fr-FR": Ci,
  "he-IL": ki,
  "hr-HR": Ni,
  "hu-HU": Li,
  "it-IT": Ii,
  "ja-JP": Mi,
  "ko-KR": Ri,
  "lt-LT": Fi,
  "lv-LV": Di,
  "nb-NO": Oi,
  "nl-NL": Ai,
  "pl-PL": _i,
  "pt-BR": Vi,
  "pt-PT": Hi,
  "ro-RO": zi,
  "ru-RU": Bi,
  "sk-SK": Ki,
  "sl-SI": Gi,
  "sr-SP": Wi,
  "sv-SE": Ui,
  "tr-TR": ji,
  "uk-UA": qi,
  "zh-CN": Yi,
  "zh-TW": Xi
};
function Gs(e) {
  return e && e.__esModule ? e.default : e;
}
function Ws(e, t, r) {
  let n = mo(Gs(Zi), "@react-aria/searchfield"), { isDisabled: o, isReadOnly: i, onSubmit: a, onClear: l, type: s = "search" } = e, d = ($) => {
    const y = $.key;
    y === "Enter" && (o || i) && $.preventDefault(), !(o || i) && (y === "Enter" && a && ($.preventDefault(), a(t.value)), y === "Escape" && (t.value === "" && (!r.current || r.current.value === "") ? $.continuePropagation() : ($.preventDefault(), t.setValue(""), l && l())));
  }, c = () => {
    t.setValue(""), l && l();
  }, f = () => {
    var $;
    ($ = r.current) === null || $ === void 0 || $.focus();
  }, { labelProps: b, inputProps: g, descriptionProps: p, errorMessageProps: m, ...h } = mi({
    ...e,
    value: t.value,
    onChange: t.setValue,
    onKeyDown: i ? e.onKeyDown : ct(d, e.onKeyDown),
    type: s
  }, r);
  return {
    labelProps: b,
    inputProps: {
      ...g,
      // already handled by useSearchFieldState
      defaultValue: void 0
    },
    clearButtonProps: {
      "aria-label": n.format("Clear search"),
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      isDisabled: o || i,
      onPress: c,
      onPressStart: f
    },
    descriptionProps: p,
    errorMessageProps: m,
    ...h
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
const Ji = /* @__PURE__ */ K(!1);
function vt(e) {
  let t = (r, n) => ie(Ji) ? null : e(r, n);
  return t.displayName = e.displayName || e.name, we(t);
}
function Us() {
  return ie(Ji);
}
function js(e, t) {
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
  let { pressProps: $, isPressed: y } = Rt({
    onPressStart: i,
    onPressEnd: a,
    onPressChange: s,
    onPress: o,
    onPressUp: l,
    onClick: f,
    isDisabled: n,
    preventFocusOnPress: d,
    ref: t
  }), { focusableProps: w } = Kr(e, t);
  c && (w.tabIndex = n ? -1 : w.tabIndex);
  let E = Q(w, $, Pe(e, {
    labelable: !0
  }));
  return {
    isPressed: y,
    buttonProps: Q(h, E, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
function qs(e, t, r) {
  let { isDisabled: n = !1, isReadOnly: o = !1, value: i, name: a, form: l, children: s, "aria-label": d, "aria-labelledby": c, validationState: f = "valid", isInvalid: b, onPressStart: g, onPressEnd: p, onPressChange: m, onPress: h, onPressUp: $, onClick: y } = e, w = (W) => {
    W.stopPropagation(), t.setSelected(W.target.checked);
  }, E = s != null, I = d != null || c != null;
  !E && !I && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: M, isPressed: R } = Rt({
    onPressStart: g,
    onPressEnd: p,
    onPressChange: m,
    onPress: h,
    onPressUp: $,
    onClick: y,
    isDisabled: n
  }), { pressProps: x, isPressed: F } = Rt({
    onPressStart: g,
    onPressEnd: p,
    onPressChange: m,
    onPressUp: $,
    onClick: y,
    onPress(W) {
      var ee;
      h == null || h(W), t.toggle(), (ee = r.current) === null || ee === void 0 || ee.focus();
    },
    isDisabled: n || o
  }), { focusableProps: _ } = Kr(e, r), re = Q(M, _), G = Pe(e, {
    labelable: !0
  });
  return io(r, t.defaultSelected, t.setSelected), {
    labelProps: Q(x, {
      onClick: (W) => W.preventDefault()
    }),
    inputProps: Q(G, {
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
      ...re
    }),
    isSelected: t.isSelected,
    isPressed: R || F,
    isDisabled: n,
    isReadOnly: o,
    isInvalid: b || f === "invalid"
  };
}
function Qi(e, t, r) {
  let n = Ur({
    ...e,
    value: t.isSelected
  }), { isInvalid: o, validationErrors: i, validationDetails: a } = n.displayValidation, { labelProps: l, inputProps: s, isSelected: d, isPressed: c, isDisabled: f, isReadOnly: b } = qs({
    ...e,
    isInvalid: o
  }, t, r);
  pi(e, n, r);
  let { isIndeterminate: g, isRequired: p, validationBehavior: m = "aria" } = e;
  q(() => {
    r.current && (r.current.indeterminate = !!g);
  });
  let { pressProps: h } = Rt({
    isDisabled: f || b,
    onPress() {
      let { [At]: $ } = e, { commitValidation: y } = $ || n;
      y();
    }
  });
  return {
    labelProps: Q(l, h, se(() => ({
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
const Ys = /* @__PURE__ */ new WeakMap();
function ea(e = {}) {
  let { isReadOnly: t } = e, [r, n] = Bt(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = U(r);
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
function Xs(e, t, r) {
  const n = ea({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange($) {
      $ ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange($);
    }
  });
  let { name: o, form: i, descriptionId: a, errorMessageId: l, validationBehavior: s } = Ys.get(t);
  var d;
  s = (d = e.validationBehavior) !== null && d !== void 0 ? d : s;
  let { realtimeValidation: c } = Ur({
    ...e,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), f = D(Ue), b = () => {
    t.setInvalid(e.value, c.isInvalid ? c : f.current);
  };
  q(b);
  let g = t.realtimeValidation.isInvalid ? t.realtimeValidation : c, p = s === "native" ? t.displayValidation : g;
  var m;
  let h = Qi({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || o,
    form: e.form || i,
    isRequired: (m = e.isRequired) !== null && m !== void 0 ? m : t.isRequired,
    validationBehavior: s,
    [At]: {
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
function Zs(e, t) {
  let { role: r = "dialog" } = e, n = cr();
  n = e["aria-label"] ? void 0 : n;
  let o = D(!1);
  return q(() => {
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
  ]), Ds(), {
    dialogProps: {
      ...Pe(e, {
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
const jr = /* @__PURE__ */ K({}), Js = /* @__PURE__ */ vt(function(t, r) {
  [t, r] = pe(t, r, jr);
  let { elementType: n = "label", ...o } = t;
  return /* @__PURE__ */ k.createElement(n, {
    className: "react-aria-Label",
    ...o,
    ref: r
  });
}), Qs = /* @__PURE__ */ K(null), qr = /* @__PURE__ */ K({}), ta = /* @__PURE__ */ vt(function(t, r) {
  [t, r] = pe(t, r, qr);
  let n = t, { isPending: o } = n, { buttonProps: i, isPressed: a } = js(t, r);
  i = ed(i, o);
  let { focusProps: l, isFocused: s, isFocusVisible: d } = ft(t), { hoverProps: c, isHovered: f } = ut({
    ...t,
    isDisabled: t.isDisabled || o
  }), b = {
    isHovered: f,
    isPressed: (n.isPressed || a) && !o,
    isFocused: s,
    isFocusVisible: d,
    isDisabled: t.isDisabled || !1,
    isPending: o ?? !1
  }, g = Ce({
    ...t,
    values: b,
    defaultClassName: "react-aria-Button"
  }), p = Ae(i.id), m = Ae(), h = i["aria-labelledby"];
  o && (h ? h = `${h} ${m}` : i["aria-label"] && (h = `${p} ${m}`));
  let $ = D(o);
  q(() => {
    let w = {
      "aria-labelledby": h || p
    };
    (!$.current && s && o || $.current && s && !o) && ln(w, "assertive"), $.current = o;
  }, [
    o,
    s,
    h,
    p
  ]);
  let y = Pe(t, {
    global: !0
  });
  return delete y.onClick, /* @__PURE__ */ k.createElement("button", {
    ...Q(y, g, i, l, c),
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
  }, /* @__PURE__ */ k.createElement(Qs.Provider, {
    value: {
      id: m
    }
  }, g.children));
});
function ed(e, t) {
  if (t) {
    for (const r in e) r.startsWith("on") && !(r.includes("Focus") || r.includes("Blur")) && (e[r] = void 0);
    e.href = void 0, e.target = void 0;
  }
  return e;
}
const Yr = /* @__PURE__ */ K({}), jt = /* @__PURE__ */ we(function(t, r) {
  [t, r] = pe(t, r, Yr);
  let { elementType: n = "span", ...o } = t;
  return /* @__PURE__ */ k.createElement(n, {
    className: "react-aria-Text",
    ...o,
    ref: r
  });
});
function ra(e) {
  let [t, r] = Bt(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
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
function td(e) {
  let t = ra(e), [r, n] = U(null), [o, i] = U([]), a = () => {
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
function rd(e) {
  let [t, r] = Bt(_n(e.value), _n(e.defaultValue) || "", e.onChange);
  return {
    value: t,
    setValue: r
  };
}
function _n(e) {
  if (e != null)
    return e.toString();
}
const qt = /* @__PURE__ */ K(null), nd = /* @__PURE__ */ we(function(t, r) {
  let n = ie(qt);
  return n != null && n.isInvalid ? /* @__PURE__ */ k.createElement(od, {
    ...t,
    ref: r
  }) : null;
}), od = /* @__PURE__ */ we((e, t) => {
  let r = ie(qt), n = Pe(e, {
    global: !0
  }), o = Ce({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: r.validationErrors.length === 0 ? void 0 : r.validationErrors.join(" "),
    values: r
  });
  return o.children == null ? null : /* @__PURE__ */ k.createElement(jt, {
    slot: "errorMessage",
    ...n,
    ...o,
    ref: t
  });
}), Xr = /* @__PURE__ */ K(null), id = /* @__PURE__ */ K(null), ad = /* @__PURE__ */ we(function(t, r) {
  let { inputRef: n = null, ...o } = t;
  [t, r] = pe(o, r, Na);
  let { validationBehavior: i } = Gt(Xr) || {};
  var a, l;
  let s = (l = (a = t.validationBehavior) !== null && a !== void 0 ? a : i) !== null && l !== void 0 ? l : "native", d = ie(id), c = Dr(se(() => Jn(n, t.inputRef !== void 0 ? t.inputRef : null), [
    n,
    t.inputRef
  ])), { labelProps: f, inputProps: b, isSelected: g, isDisabled: p, isReadOnly: m, isPressed: h, isInvalid: $ } = d ? Xs({
    ...Lt(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, d, c) : Qi({
    ...Lt(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: s
  }, ea(t), c), { isFocused: y, isFocusVisible: w, focusProps: E } = ft(), I = p || m, { hoverProps: M, isHovered: R } = ut({
    ...t,
    isDisabled: I
  }), x = Ce({
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
  }), F = Pe(t, {
    global: !0
  });
  return delete F.id, delete F.onClick, /* @__PURE__ */ k.createElement("label", {
    ...Q(F, f, M, x),
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
  }, /* @__PURE__ */ k.createElement(ui, {
    elementType: "span"
  }, /* @__PURE__ */ k.createElement("input", {
    ...Q(b, E),
    ref: c
  })), x.children);
}), Zr = /* @__PURE__ */ K({}), na = /* @__PURE__ */ we(function(t, r) {
  [t, r] = pe(t, r, Zr);
  let { isDisabled: n, isInvalid: o, isReadOnly: i, onHoverStart: a, onHoverChange: l, onHoverEnd: s, ...d } = t;
  n ?? (n = !!t["aria-disabled"] && t["aria-disabled"] !== "false"), o ?? (o = !!t["aria-invalid"] && t["aria-invalid"] !== "false");
  let { hoverProps: c, isHovered: f } = ut({
    onHoverStart: a,
    onHoverChange: l,
    onHoverEnd: s,
    isDisabled: n
  }), { isFocused: b, isFocusVisible: g, focusProps: p } = ft({
    within: !0
  }), m = Ce({
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
  return /* @__PURE__ */ k.createElement("div", {
    ...Q(d, p, c),
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
}), Jr = /* @__PURE__ */ K({});
let ld = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const oa = /* @__PURE__ */ vt(function(t, r) {
  [t, r] = pe(t, r, Jr);
  let { hoverProps: n, isHovered: o } = ut({
    ...t,
    isDisabled: t.disabled
  }), { isFocused: i, isFocusVisible: a, focusProps: l } = ft({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), s = !!t["aria-invalid"] && t["aria-invalid"] !== "false", d = Ce({
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
  return /* @__PURE__ */ k.createElement("input", {
    ...Q(ld(t), l, n),
    ...d,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": s || void 0
  });
}), sd = /* @__PURE__ */ K({
  placement: "bottom"
}), ia = /* @__PURE__ */ K(null), Vn = /* @__PURE__ */ K(null), dd = /* @__PURE__ */ we(function(t, r) {
  [t, r] = pe(t, r, ia);
  let n = ie(Qr), o = ra(t), i = t.isOpen != null || t.defaultOpen != null || !n ? o : n, a = cl(r, i.isOpen) || t.isExiting || !1, l = Us(), { direction: s } = Hr();
  if (l) {
    let d = t.children;
    return typeof d == "function" && (d = d({
      trigger: t.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1,
      defaultChildren: null
    })), /* @__PURE__ */ k.createElement(k.Fragment, null, d);
  }
  return i && !i.isOpen && !a ? null : /* @__PURE__ */ k.createElement(cd, {
    ...t,
    triggerRef: t.triggerRef,
    state: i,
    popoverRef: r,
    isExiting: a,
    dir: s
  });
});
function cd({ state: e, isExiting: t, UNSTABLE_portalContainer: r, clearContexts: n, ...o }) {
  let i = D(null), a = D(null), l = ie(Vn), s = l && o.trigger === "SubmenuTrigger";
  var d;
  let { popoverProps: c, underlayProps: f, arrowProps: b, placement: g, triggerAnchorPoint: p } = Fs({
    ...o,
    offset: (d = o.offset) !== null && d !== void 0 ? d : 8,
    arrowRef: i,
    // If this is a submenu/subdialog, use the root popover's container
    // to detect outside interaction and add aria-hidden.
    groupRef: s ? l : a
  }, e), m = o.popoverRef, h = dl(m, !!g) || o.isEntering || !1, $ = Ce({
    ...o,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: o.trigger || null,
      placement: g,
      isEntering: h,
      isExiting: t
    }
  }), y = !o.isNonModal || o.trigger === "SubmenuTrigger", [w, E] = U(!1);
  j(() => {
    m.current && E(y && !m.current.querySelector("[role=dialog]"));
  }, [
    m,
    y
  ]), q(() => {
    w && o.trigger !== "SubmenuTrigger" && m.current && !m.current.contains(document.activeElement) && dt(m.current);
  }, [
    w,
    m,
    o.trigger
  ]);
  let I = se(() => {
    let F = $.children;
    if (n) for (let _ of n) F = /* @__PURE__ */ k.createElement(_.Provider, {
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
  }, R = /* @__PURE__ */ k.createElement("div", {
    ...Q(Pe(o, {
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
  }, !o.isNonModal && /* @__PURE__ */ k.createElement(Dn, {
    onDismiss: e.close
  }), /* @__PURE__ */ k.createElement(sd.Provider, {
    value: {
      ...b,
      placement: g,
      ref: i
    }
  }, I), /* @__PURE__ */ k.createElement(Dn, {
    onDismiss: e.close
  }));
  if (!s) return /* @__PURE__ */ k.createElement(On, {
    ...o,
    shouldContainFocus: w,
    isExiting: t,
    portalContainer: r
  }, !o.isNonModal && e.isOpen && /* @__PURE__ */ k.createElement("div", {
    "data-testid": "underlay",
    ...f,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ k.createElement("div", {
    ref: a,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ k.createElement(Vn.Provider, {
    value: a
  }, R)));
  var x;
  return /* @__PURE__ */ k.createElement(On, {
    ...o,
    shouldContainFocus: w,
    isExiting: t,
    portalContainer: (x = r ?? (l == null ? void 0 : l.current)) !== null && x !== void 0 ? x : void 0
  }, R);
}
const ud = /* @__PURE__ */ K(null), aa = /* @__PURE__ */ K(null), Qr = /* @__PURE__ */ K(null);
function fd(e) {
  let t = td(e), r = D(null), { triggerProps: n, overlayProps: o } = ws({
    type: "dialog"
  }, t, r), [i, a] = U(null), l = H(() => {
    r.current && a(r.current.offsetWidth + "px");
  }, [
    r
  ]);
  return fr({
    ref: r,
    onResize: l
  }), n.id = Ae(), o["aria-labelledby"] = n.id, /* @__PURE__ */ k.createElement(Kt, {
    values: [
      [
        Qr,
        t
      ],
      [
        ud,
        t
      ],
      [
        aa,
        o
      ],
      [
        ia,
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
  }, /* @__PURE__ */ k.createElement(cs, {
    ...n,
    ref: r,
    isPressed: t.isOpen
  }, e.children));
}
const vd = /* @__PURE__ */ we(function(t, r) {
  let n = t["aria-labelledby"];
  [t, r] = pe(t, r, aa);
  let { dialogProps: o, titleProps: i } = Zs({
    ...t,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": n
  }, r), a = ie(Qr);
  !o["aria-label"] && !o["aria-labelledby"] && (t["aria-labelledby"] ? o["aria-labelledby"] = t["aria-labelledby"] : process.env.NODE_ENV !== "production" && console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  let l = Ce({
    defaultClassName: "react-aria-Dialog",
    className: t.className,
    style: t.style,
    children: t.children,
    values: {
      close: (a == null ? void 0 : a.close) || (() => {
      })
    }
  }), s = Pe(t, {
    global: !0
  });
  return /* @__PURE__ */ k.createElement("section", {
    ...Q(s, l, o),
    ref: r,
    slot: t.slot || void 0
  }, /* @__PURE__ */ k.createElement(Kt, {
    values: [
      [
        La,
        {
          slots: {
            [mr]: {},
            title: {
              ...i,
              level: 2
            }
          }
        }
      ],
      [
        qr,
        {
          slots: {
            [mr]: {},
            close: {
              onPress: () => a == null ? void 0 : a.close()
            }
          }
        }
      ]
    ]
  }, l.children));
}), bd = /* @__PURE__ */ K(null), pd = /* @__PURE__ */ vt(function(t, r) {
  [t, r] = pe(t, r, bd);
  let { validationBehavior: n } = Gt(Xr) || {};
  var o, i;
  let a = (i = (o = t.validationBehavior) !== null && o !== void 0 ? o : n) !== null && i !== void 0 ? i : "native", l = D(null);
  [t, l] = pe(t, l, Xn);
  let [s, d] = co(!t["aria-label"] && !t["aria-labelledby"]), c = rd({
    ...t,
    validationBehavior: a
  }), { labelProps: f, inputProps: b, clearButtonProps: g, descriptionProps: p, errorMessageProps: m, ...h } = Ws({
    ...Lt(t),
    label: d,
    validationBehavior: a
  }, c, l), $ = Ce({
    ...t,
    values: {
      isEmpty: c.value === "",
      isDisabled: t.isDisabled || !1,
      isInvalid: h.isInvalid || !1,
      isReadOnly: t.isReadOnly || !1,
      isRequired: t.isRequired || !1,
      state: c
    },
    defaultClassName: "react-aria-SearchField"
  }), y = Pe(t, {
    global: !0
  });
  return delete y.id, /* @__PURE__ */ k.createElement("div", {
    ...y,
    ...$,
    ref: r,
    slot: t.slot || void 0,
    "data-empty": c.value === "" || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": h.isInvalid || void 0,
    "data-readonly": t.isReadOnly || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ k.createElement(Kt, {
    values: [
      [
        jr,
        {
          ...f,
          ref: s
        }
      ],
      [
        Jr,
        {
          ...b,
          ref: l
        }
      ],
      [
        qr,
        g
      ],
      [
        Yr,
        {
          slots: {
            description: p,
            errorMessage: m
          }
        }
      ],
      [
        Zr,
        {
          isInvalid: h.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        qt,
        h
      ]
    ]
  }, $.children));
}), la = /* @__PURE__ */ K({});
let md = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const gd = /* @__PURE__ */ we(function(t, r) {
  [t, r] = pe(t, r, la);
  let { hoverProps: n, isHovered: o } = ut(t), { isFocused: i, isFocusVisible: a, focusProps: l } = ft({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), s = !!t["aria-invalid"] && t["aria-invalid"] !== "false", d = Ce({
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
  return /* @__PURE__ */ k.createElement("textarea", {
    ...Q(md(t), l, n),
    ...d,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": s || void 0
  });
}), hd = /* @__PURE__ */ K(null), $d = /* @__PURE__ */ vt(function(t, r) {
  [t, r] = pe(t, r, hd);
  let { validationBehavior: n } = Gt(Xr) || {};
  var o, i;
  let a = (i = (o = t.validationBehavior) !== null && o !== void 0 ? o : n) !== null && i !== void 0 ? i : "native", l = D(null);
  [t, l] = pe(t, l, Xn);
  let [s, d] = co(!t["aria-label"] && !t["aria-labelledby"]), [c, f] = U("input"), { labelProps: b, inputProps: g, descriptionProps: p, errorMessageProps: m, ...h } = mi({
    ...Lt(t),
    inputElementType: c,
    label: d,
    validationBehavior: a
  }, l), $ = H((E) => {
    l.current = E, E && f(E instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, [
    l
  ]), y = Ce({
    ...t,
    values: {
      isDisabled: t.isDisabled || !1,
      isInvalid: h.isInvalid,
      isReadOnly: t.isReadOnly || !1,
      isRequired: t.isRequired || !1
    },
    defaultClassName: "react-aria-TextField"
  }), w = Pe(t, {
    global: !0
  });
  return delete w.id, /* @__PURE__ */ k.createElement("div", {
    ...w,
    ...y,
    ref: r,
    slot: t.slot || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": h.isInvalid || void 0,
    "data-readonly": t.isReadOnly || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ k.createElement(Kt, {
    values: [
      [
        jr,
        {
          ...b,
          ref: s
        }
      ],
      [
        Jr,
        {
          ...g,
          ref: $
        }
      ],
      [
        la,
        {
          ...g,
          ref: $
        }
      ],
      [
        Zr,
        {
          role: "presentation",
          isInvalid: h.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        Yr,
        {
          slots: {
            description: p,
            errorMessage: m
          }
        }
      ],
      [
        qt,
        h
      ]
    ]
  }, y.children));
}), yd = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, xd = (e, t) => ({
  classGroupId: e,
  validator: t
}), sa = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), _t = "-", Hn = [], Ed = "arbitrary..", wd = (e) => {
  const t = Td(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Pd(a);
      const l = a.split(_t), s = l[0] === "" && l.length > 1 ? 1 : 0;
      return da(l, s, t);
    },
    getConflictingClassGroupIds: (a, l) => {
      if (l) {
        const s = n[a], d = r[a];
        return s ? d ? yd(d, s) : s : d || Hn;
      }
      return r[a] || Hn;
    }
  };
}, da = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const o = e[t], i = r.nextPart.get(o);
  if (i) {
    const d = da(e, t + 1, i);
    if (d) return d;
  }
  const a = r.validators;
  if (a === null)
    return;
  const l = t === 0 ? e.join(_t) : e.slice(t).join(_t), s = a.length;
  for (let d = 0; d < s; d++) {
    const c = a[d];
    if (c.validator(l))
      return c.classGroupId;
  }
}, Pd = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? Ed + n : void 0;
})(), Td = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return Sd(r, t);
}, Sd = (e, t) => {
  const r = sa();
  for (const n in e) {
    const o = e[n];
    en(o, r, n, t);
  }
  return r;
}, en = (e, t, r, n) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    Cd(a, t, r, n);
  }
}, Cd = (e, t, r, n) => {
  if (typeof e == "string") {
    kd(e, t, r);
    return;
  }
  if (typeof e == "function") {
    Nd(e, t, r, n);
    return;
  }
  Ld(e, t, r, n);
}, kd = (e, t, r) => {
  const n = e === "" ? t : ca(t, e);
  n.classGroupId = r;
}, Nd = (e, t, r, n) => {
  if (Id(e)) {
    en(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(xd(r, e));
}, Ld = (e, t, r, n) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [l, s] = o[a];
    en(s, ca(t, l), r, n);
  }
}, ca = (e, t) => {
  let r = e;
  const n = t.split(_t), o = n.length;
  for (let i = 0; i < o; i++) {
    const a = n[i];
    let l = r.nextPart.get(a);
    l || (l = sa(), r.nextPart.set(a, l)), r = l;
  }
  return r;
}, Id = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Md = (e) => {
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
}, kr = "!", zn = ":", Rd = [], Bn = (e, t, r, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), Fd = (e) => {
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
        if (h === zn) {
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
    f.endsWith(kr) ? (b = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(kr) && (b = f.slice(1), g = !0)
    );
    const p = d && d > s ? d - s : void 0;
    return Bn(i, g, b, p);
  };
  if (t) {
    const o = t + zn, i = n;
    n = (a) => a.startsWith(o) ? i(a.slice(o.length)) : Bn(Rd, !1, a, void 0, !0);
  }
  if (r) {
    const o = n;
    n = (i) => r({
      className: i,
      parseClassName: o
    });
  }
  return n;
}, Dd = (e) => {
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
}, Od = (e) => ({
  cache: Md(e.cacheSize),
  parseClassName: Fd(e),
  sortModifiers: Dd(e),
  ...wd(e)
}), Ad = /\s+/, _d = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], l = e.trim().split(Ad);
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
    const y = b.length === 0 ? "" : b.length === 1 ? b[0] : i(b).join(":"), w = g ? y + kr : y, E = w + $;
    if (a.indexOf(E) > -1)
      continue;
    a.push(E);
    const I = o($, h);
    for (let M = 0; M < I.length; ++M) {
      const R = I[M];
      a.push(w + R);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
}, Vd = (...e) => {
  let t = 0, r, n, o = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = ua(r)) && (o && (o += " "), o += n);
  return o;
}, ua = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = ua(e[n])) && (r && (r += " "), r += t);
  return r;
}, Kn = (e, ...t) => {
  let r, n, o, i;
  const a = (s) => {
    const d = t.reduce((c, f) => f(c), e());
    return r = Od(d), n = r.cache.get, o = r.cache.set, i = l, l(s);
  }, l = (s) => {
    const d = n(s);
    if (d)
      return d;
    const c = _d(s, r);
    return o(s, c), c;
  };
  return i = a, (...s) => i(Vd(...s));
}, Hd = [], ae = (e) => {
  const t = (r) => r[e] || Hd;
  return t.isThemeGetter = !0, t;
}, fa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, va = /^\((?:(\w[\w-]*):)?(.+)\)$/i, zd = /^\d+\/\d+$/, Bd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Wd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ud = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, We = (e) => zd.test(e), O = (e) => !!e && !Number.isNaN(Number(e)), Re = (e) => !!e && Number.isInteger(Number(e)), lr = (e) => e.endsWith("%") && O(e.slice(0, -1)), ke = (e) => Bd.test(e), jd = () => !0, qd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kd.test(e) && !Gd.test(e)
), ba = () => !1, Yd = (e) => Wd.test(e), Xd = (e) => Ud.test(e), Zd = (e) => !S(e) && !C(e), Jd = (e) => Ze(e, ga, ba), S = (e) => fa.test(e), Ve = (e) => Ze(e, ha, qd), sr = (e) => Ze(e, nc, O), Gn = (e) => Ze(e, pa, ba), Qd = (e) => Ze(e, ma, Xd), wt = (e) => Ze(e, $a, Yd), C = (e) => va.test(e), et = (e) => Je(e, ha), ec = (e) => Je(e, oc), Wn = (e) => Je(e, pa), tc = (e) => Je(e, ga), rc = (e) => Je(e, ma), Pt = (e) => Je(e, $a, !0), Ze = (e, t, r) => {
  const n = fa.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Je = (e, t, r = !1) => {
  const n = va.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, pa = (e) => e === "position" || e === "percentage", ma = (e) => e === "image" || e === "url", ga = (e) => e === "length" || e === "size" || e === "bg-size", ha = (e) => e === "length", nc = (e) => e === "number", oc = (e) => e === "family-name", $a = (e) => e === "shadow", Un = () => {
  const e = ae("color"), t = ae("font"), r = ae("text"), n = ae("font-weight"), o = ae("tracking"), i = ae("leading"), a = ae("breakpoint"), l = ae("container"), s = ae("spacing"), d = ae("radius"), c = ae("shadow"), f = ae("inset-shadow"), b = ae("text-shadow"), g = ae("drop-shadow"), p = ae("blur"), m = ae("perspective"), h = ae("aspect"), $ = ae("ease"), y = ae("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], I = () => [...E(), C, S], M = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], x = () => [C, S, s], F = () => [We, "full", "auto", ...x()], _ = () => [Re, "none", "subgrid", C, S], re = () => ["auto", {
    span: ["full", Re, C, S]
  }, Re, C, S], G = () => [Re, "auto", C, S], W = () => ["auto", "min", "max", "fr", C, S], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], te = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Z = () => ["auto", ...x()], le = () => [We, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], N = () => [e, C, S], ce = () => [...E(), Wn, Gn, {
    position: [C, S]
  }], u = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], P = () => ["auto", "cover", "contain", tc, Jd, {
    size: [C, S]
  }], v = () => [lr, et, Ve], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    C,
    S
  ], L = () => ["", O, et, Ve], A = () => ["solid", "dashed", "dotted", "double"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => [O, lr, Wn, Gn], Ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    C,
    S
  ], ge = () => ["none", O, C, S], xe = () => ["none", O, C, S], bt = () => [O, C, S], pt = () => [We, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ke],
      breakpoint: [ke],
      color: [jd],
      container: [ke],
      "drop-shadow": [ke],
      ease: ["in", "out", "in-out"],
      font: [Zd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ke],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ke],
      shadow: [ke],
      spacing: ["px", O],
      text: [ke],
      "text-shadow": [ke],
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
        aspect: ["auto", "square", We, S, C, h]
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
        columns: [O, S, C, l]
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
        z: [Re, "auto", C, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [We, "full", "auto", l, ...x()]
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
        flex: [O, We, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", O, C, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", O, C, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Re, "first", "last", "none", C, S]
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
        col: re()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
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
        row: re()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ee(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...te(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...te()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ee()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ee()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...te(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...te()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Z()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Z()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Z()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Z()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Z()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
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
        "space-y": x()
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
        size: le()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...le()]
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
          ...le()
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
          ...le()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...le()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...le()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...le()]
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
        font: [n, C, sr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", lr, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ec, S, t]
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
        tracking: [o, C, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [O, "none", C, sr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C, S]
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
        list: ["disc", "decimal", "none", C, S]
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
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
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
        decoration: [O, "from-font", "auto", C, Ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [O, "auto", C, S]
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
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C, S]
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
        content: ["none", C, S]
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
        bg: ce()
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
          }, Re, C, S],
          radial: ["", C, S],
          conic: [Re, C, S]
        }, rc, Qd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
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
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
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
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
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
        "divide-y": L()
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
        border: N()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
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
        "outline-offset": [O, C, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", O, et, Ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
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
          Pt,
          wt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Pt, wt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
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
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [O, Ve]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, Pt, wt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O, C, S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...me(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": me()
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
        "mask-linear": [O]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": X()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": X()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": X()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": X()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": X()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": X()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": X()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
      }],
      "mask-image-radial": [{
        "mask-radial": [C, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": X()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": X()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
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
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [O]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": X()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": X()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
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
        mask: ce()
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
        mask: ["none", C, S]
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
          C,
          S
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ie()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [O, C, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O, C, S]
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
          Pt,
          wt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", O, C, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [O, C, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", O, C, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O, C, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", O, C, S]
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
          C,
          S
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ie()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [O, C, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O, C, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", O, C, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [O, C, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", O, C, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O, C, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O, C, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", O, C, S]
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
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", C, S]
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
        duration: [O, "initial", C, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", $, C, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [O, C, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, C, S]
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
        perspective: [m, C, S]
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
        rotate: ge()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ge()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ge()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ge()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: xe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": xe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": xe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": xe()
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
        skew: bt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": bt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": bt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [C, S, "", "none", "gpu", "cpu"]
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
        translate: pt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pt()
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
        accent: N()
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
        caret: N()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C, S]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        "will-change": ["auto", "scroll", "contents", "transform", C, S]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [O, et, Ve, sr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
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
}, ic = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: i = {}
}) => (ot(e, "cacheSize", t), ot(e, "prefix", r), ot(e, "experimentalParseClassName", n), Tt(e.theme, i.theme), Tt(e.classGroups, i.classGroups), Tt(e.conflictingClassGroups, i.conflictingClassGroups), Tt(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), ot(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), St(e.theme, o.theme), St(e.classGroups, o.classGroups), St(e.conflictingClassGroups, o.conflictingClassGroups), St(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), ya(e, o, "orderSensitiveModifiers"), e), ot = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, Tt = (e, t) => {
  if (t)
    for (const r in t)
      ot(e, r, t[r]);
}, St = (e, t) => {
  if (t)
    for (const r in t)
      ya(e, t, r);
}, ya = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, ac = (e, ...t) => typeof e == "function" ? Kn(Un, e, ...t) : Kn(() => ic(Un(), e), ...t), lc = ac({
  prefix: "nm-"
});
function de(...e) {
  return lc(Nr(e));
}
const sc = Lr(
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
), dc = Sa.forwardRef(
  ({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ B(
    ta,
    {
      ref: o,
      ...n,
      className: be(
        e,
        (i) => de(
          sc({
            variant: t,
            size: r,
            className: i
          })
        )
      )
    }
  )
);
dc.displayName = "Button";
const xa = Lr([
  "nm-text-sm nm-font-medium nm-leading-none",
  "[color:var(--nm-textfield-label-fg)]",
  /* Disabled */
  "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
  /* Invalid */
  "group-data-[invalid]:[color:var(--nm-textfield-label-error-fg)]"
]), Ea = ({ className: e, ...t }) => /* @__PURE__ */ B(Js, { className: de(xa(), e), ...t });
function Fc({ className: e, ...t }) {
  return /* @__PURE__ */ B(
    jt,
    {
      className: de(
        "nm-text-sm [color:var(--nm-textfield-helper-fg)]",
        e
      ),
      ...t,
      slot: "description"
    }
  );
}
function wa({ className: e, ...t }) {
  return /* @__PURE__ */ B(
    nd,
    {
      className: de(
        "nm-text-sm nm-font-medium [color:var(--nm-textfield-helper-error-fg)]",
        e
      ),
      ...t
    }
  );
}
const cc = Lr("", {
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
function uc({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ B(
    na,
    {
      className: be(
        e,
        (n) => de(cc({ variant: t }), n)
      ),
      ...r
    }
  );
}
const fc = $d, vc = ({ className: e, ...t }) => /* @__PURE__ */ B(
  oa,
  {
    className: be(
      e,
      (r) => de(
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
), bc = ({ className: e, ...t }) => /* @__PURE__ */ B(
  gd,
  {
    className: be(
      e,
      (r) => de(
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
function Dc({
  label: e,
  description: t,
  errorMessage: r,
  textArea: n,
  className: o,
  placeholder: i,
  ...a
}) {
  return /* @__PURE__ */ kt(
    fc,
    {
      className: be(
        o,
        (l) => de("nm-font-sans nm-group nm-flex nm-flex-col nm-gap-2", l)
      ),
      ...a,
      children: [
        /* @__PURE__ */ B(Ea, { children: e }),
        n ? /* @__PURE__ */ B(bc, { placeholder: i }) : /* @__PURE__ */ B(vc, { placeholder: i }),
        t && /* @__PURE__ */ B(
          jt,
          {
            className: "nm-text-sm [color:var(--nm-textfield-helper-fg)]",
            slot: "description",
            children: t
          }
        ),
        /* @__PURE__ */ B(wa, { children: r })
      ]
    }
  );
}
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mc = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), jn = (e) => {
  const t = mc(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Pa = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), gc = (e) => {
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
var hc = {
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
const $c = we(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: i,
    iconNode: a,
    ...l
  }, s) => dr(
    "svg",
    {
      ref: s,
      ...hc,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Pa("lucide", o),
      ...!i && !gc(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([d, c]) => dr(d, c)),
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
const Yt = (e, t) => {
  const r = we(
    ({ className: n, ...o }, i) => dr($c, {
      ref: i,
      iconNode: t,
      className: Pa(
        `lucide-${pc(jn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = jn(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], xc = Yt("check", yc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = [["path", { d: "M5 12h14", key: "1ays0h" }]], wc = Yt("minus", Ec);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Tc = Yt("search", Pc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Cc = Yt("x", Sc);
function kc({ className: e, ...t }) {
  return /* @__PURE__ */ B(
    pd,
    {
      className: be(
        e,
        (r) => de("group", r)
      ),
      ...t
    }
  );
}
function Nc({ className: e, ...t }) {
  return /* @__PURE__ */ B(
    oa,
    {
      className: be(
        e,
        (r) => de(
          "nm-min-w-0 nm-flex-1 nm-bg-background nm-px-2 nm-py-1.5 nm-outline nm-outline-0 placeholder:nm-text-muted-foreground [&::-webkit-search-cancel-button]:nm-hidden",
          r
        )
      ),
      ...t
    }
  );
}
function Oc({ className: e, ...t }) {
  return /* @__PURE__ */ B(
    na,
    {
      className: be(
        e,
        (r) => de(
          "nm-flex nm-h-10 nm-w-full nm-items-center nm-overflow-hidden nm-rounded-md nm-border nm-border-input nm-bg-background nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background",
          /* Focus Within */
          "data-[focus-within]:nm-outline-none data-[focus-within]:nm-ring-2 data-[focus-within]:nm-ring-ring data-[focus-within]:nm-ring-offset-2",
          /* Disabled */
          "data-[disabled]:nm-opacity-50",
          r
        )
      ),
      ...t
    }
  );
}
function Lc({ className: e, ...t }) {
  return /* @__PURE__ */ B(
    ta,
    {
      className: be(
        e,
        (r) => de(
          "nm-mr-1 nm-rounded-sm nm-opacity-70 nm-ring-offset-background nm-transition-opacity",
          /* Hover */
          "data-[hovered]:nm-opacity-100",
          /* Disabled */
          "data-[disabled]:nm-pointer-events-none",
          /* Empty */
          "group-data-[empty]:nm-invisible",
          r
        )
      ),
      ...t
    }
  );
}
function Ac({
  label: e,
  description: t,
  className: r,
  errorMessage: n,
  ...o
}) {
  return /* @__PURE__ */ kt(
    kc,
    {
      className: be(
        r,
        (i) => de("group nm-flex nm-flex-col nm-gap-2", i)
      ),
      ...o,
      children: [
        /* @__PURE__ */ B(Ea, { children: e }),
        /* @__PURE__ */ kt(uc, { children: [
          /* @__PURE__ */ B(
            Tc,
            {
              "aria-hidden": !0,
              className: "nm-size-4 nm-text-muted-foreground"
            }
          ),
          /* @__PURE__ */ B(Nc, { placeholder: "Search..." }),
          /* @__PURE__ */ B(Lc, { children: /* @__PURE__ */ B(Cc, { "aria-hidden": !0, className: "nm-size-4" }) })
        ] }),
        t && /* @__PURE__ */ B(
          jt,
          {
            className: "nm-text-sm nm-text-muted-foreground",
            slot: "description",
            children: t
          }
        ),
        /* @__PURE__ */ B(wa, { children: n })
      ]
    }
  );
}
const _c = fd, Vc = ({ className: e, offset: t = 4, ...r }) => /* @__PURE__ */ B(
  dd,
  {
    offset: t,
    className: be(
      e,
      (n) => de(
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
function Hc({ className: e, ...t }) {
  return /* @__PURE__ */ B(
    vd,
    {
      className: de("nm-p-4 nm-outline nm-outline-0", e),
      ...t
    }
  );
}
const zc = ({ className: e, children: t, ...r }) => /* @__PURE__ */ B(
  ad,
  {
    className: be(
      e,
      (n) => de(
        "group/checkbox nm-flex nm-items-center nm-gap-x-2",
        /* Disabled */
        "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
        xa,
        n
      )
    ),
    ...r,
    children: be(t, (n, o) => /* @__PURE__ */ kt(Ta, { children: [
      /* @__PURE__ */ B(
        "div",
        {
          className: de(
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
          children: o.isIndeterminate ? /* @__PURE__ */ B(wc, { className: "nm-size-4" }) : o.isSelected ? /* @__PURE__ */ B(xc, { className: "nm-size-4" }) : null
        }
      ),
      n
    ] }))
  }
);
export {
  dc as Button,
  zc as Checkbox,
  wa as FieldError,
  uc as FieldGroup,
  Fc as FormDescription,
  vc as Input,
  Ac as JollySearchField,
  Ea as Label,
  Vc as Popover,
  Hc as PopoverDialog,
  _c as PopoverTrigger,
  kc as SearchField,
  Lc as SearchFieldClear,
  Oc as SearchFieldGroup,
  Nc as SearchFieldInput,
  bc as TextArea,
  fc as TextField,
  Dc as WrappedField,
  cc as fieldGroupVariants,
  xa as labelVariants
};
//# sourceMappingURL=index.es.js.map
