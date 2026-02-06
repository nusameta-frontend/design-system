"use client";
import { jsx as K, jsxs as Nt, Fragment as Sa } from "react/jsx-runtime";
import * as ka from "react";
import C, { createContext as W, useState as q, useRef as D, useCallback as z, useContext as ie, useEffect as Y, useMemo as le, useReducer as Na, forwardRef as xe, createElement as ur } from "react";
import La, { flushSync as Jn } from "react-dom";
function Qn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Qn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Mr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Qn(e)) && (n && (n += " "), n += t);
  return n;
}
const on = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, an = Mr, Rr = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return an(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((d) => {
    const c = r == null ? void 0 : r[d], u = i == null ? void 0 : i[d];
    if (c === null) return null;
    const p = on(c) || on(u);
    return o[d][p];
  }), l = r && Object.entries(r).reduce((d, c) => {
    let [u, p] = c;
    return p === void 0 || (d[u] = p), d;
  }, {}), s = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, c) => {
    let { class: u, className: p, ...m } = c;
    return Object.entries(m).every((h) => {
      let [v, g] = h;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...l
      }[v]) : {
        ...i,
        ...l
      }[v] === g;
    }) ? [
      ...d,
      u,
      p
    ] : d;
  }, []);
  return an(e, a, s, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Ia = W(null);
W(null);
W(null);
W(null);
W(null);
const Ma = W({});
W(null);
const eo = W(null), G = typeof document < "u" ? C.useLayoutEffect : () => {
};
function Ra(e) {
  let [t, r] = q(e), n = D(t), o = D(null), i = D(() => {
    if (!o.current) return;
    let l = o.current.next();
    if (l.done) {
      o.current = null;
      return;
    }
    n.current === l.value ? i.current() : r(l.value);
  });
  G(() => {
    n.current = t, o.current && i.current();
  });
  let a = z((l) => {
    o.current = l(n.current), i.current();
  }, [
    i
  ]);
  return [
    t,
    a
  ];
}
const Lt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, to = /* @__PURE__ */ C.createContext(Lt), Da = /* @__PURE__ */ C.createContext(!1);
let Fa = !!(typeof window < "u" && window.document && window.document.createElement), Jt = /* @__PURE__ */ new WeakMap();
function Oa(e = !1) {
  let t = ie(to), r = D(null);
  if (r.current === null && !e) {
    var n, o;
    let i = (o = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (i) {
      let a = Jt.get(i);
      a == null ? Jt.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== a.state && (t.current = a.id, Jt.delete(i));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function Aa(e) {
  let t = ie(to);
  t === Lt && !Fa && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = Oa(!!e), n = t === Lt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function _a(e) {
  let t = C.useId(), [r] = q(Dr()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Lt.prefix}`;
  return e || `${n}-${t}`;
}
const Va = typeof C.useId == "function" ? _a : Aa;
function Ha() {
  return !1;
}
function za() {
  return !0;
}
function Ba(e) {
  return () => {
  };
}
function Dr() {
  return typeof C.useSyncExternalStore == "function" ? C.useSyncExternalStore(Ba, Ha, za) : ie(Da);
}
let Ka = !!(typeof window < "u" && window.document && window.document.createElement), Ye = /* @__PURE__ */ new Map(), rt;
typeof FinalizationRegistry < "u" && (rt = new FinalizationRegistry((e) => {
  Ye.delete(e);
}));
function _e(e) {
  let [t, r] = q(e), n = D(null), o = Va(t), i = D(null);
  if (rt && rt.register(i, o), Ka) {
    const a = Ye.get(o);
    a && !a.includes(n) ? a.push(n) : Ye.set(o, [
      n
    ]);
  }
  return G(() => {
    let a = o;
    return () => {
      rt && rt.unregister(i), Ye.delete(a);
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
function Ga(e, t) {
  if (e === t) return e;
  let r = Ye.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = Ye.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function fr(e = []) {
  let t = _e(), [r, n] = Ra(t), o = z(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return G(o, [
    t,
    o,
    ...e
  ]), r;
}
function ut(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const H = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, fe = (e) => e && "window" in e && e.window === e ? e : H(e).defaultView || window;
function Wa(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Ua(e) {
  return Wa(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let ja = !1;
function Ht() {
  return ja;
}
function F(e, t) {
  if (!Ht()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : Ua(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const ve = (e = document) => {
  var t;
  if (!Ht()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function B(e) {
  return Ht() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class qa {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!F(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
    return F(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
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
function Ya(e, t, r, n) {
  return Ht() ? new qa(e, t, r, n) : e.createTreeWalker(t, r, n);
}
function zt(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = ln(o, t);
      return r || (r = typeof i == "function"), i;
    });
    if (r) return () => {
      n.forEach((o, i) => {
        typeof o == "function" ? o() : ln(e[i], null);
      });
    };
  };
}
function ln(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
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
      90 ? t[o] = ut(i, a) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof a == "string" ? t[o] = Mr(i, a) : o === "id" && i && a ? t.id = Ga(i, a) : o === "ref" && i && a ? t.ref = zt(i, a) : t[o] = a !== void 0 ? a : i;
    }
  }
  return t;
}
const Xa = /* @__PURE__ */ new Set([
  "id"
]), Za = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Ja = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Qa = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), sn = /* @__PURE__ */ new Set([
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
]), el = /^(data-.*)$/;
function Pe(e, t = {}) {
  let { labelable: r, isLink: n, global: o, events: i = o, propNames: a } = t, l = {};
  for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (Xa.has(s) || r && Za.has(s) || n && Ja.has(s) || o && Qa.has(s) || i && (sn.has(s) || s.endsWith("Capture") && sn.has(s.slice(0, -7))) || a != null && a.has(s) || el.test(s)) && (l[s] = e[s]);
  return l;
}
function Xe(e) {
  if (tl()) e.focus({
    preventScroll: !0
  });
  else {
    let t = rl(e);
    e.focus(), nl(t);
  }
}
let gt = null;
function tl() {
  if (gt == null) {
    gt = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return gt = !0, !0;
        }
      });
    } catch {
    }
  }
  return gt;
}
function rl(e) {
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
function nl(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function Bt(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function Fr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ie(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Ze = Ie(function() {
  return Fr(/^Mac/i);
}), ol = Ie(function() {
  return Fr(/^iPhone/i);
}), ro = Ie(function() {
  return Fr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ze() && navigator.maxTouchPoints > 1;
}), Kt = Ie(function() {
  return ol() || ro();
});
Ie(function() {
  return Ze() || Kt();
});
const no = Ie(function() {
  return Bt(/AppleWebKit/i) && !oo();
}), oo = Ie(function() {
  return Bt(/Chrome/i);
}), Or = Ie(function() {
  return Bt(/Android/i);
}), il = Ie(function() {
  return Bt(/Firefox/i);
});
function Be(e, t, r = !0) {
  var n, o;
  let { metaKey: i, ctrlKey: a, altKey: l, shiftKey: s } = t;
  il() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (Ze() ? i = !0 : a = !0);
  let d = no() && Ze() && !ro() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
  Be.isOpening = r, Xe(e), e.dispatchEvent(d), Be.isOpening = !1;
}
Be.isOpening = !1;
let Fe = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Set();
function dn() {
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
      for (let i of vr) i();
      vr.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? dn() : document.addEventListener("DOMContentLoaded", dn));
function al() {
  for (const [e] of Fe)
    "isConnected" in e && !e.isConnected && Fe.delete(e);
}
function io(e) {
  requestAnimationFrame(() => {
    al(), Fe.size === 0 ? e() : vr.add(e);
  });
}
function Ar() {
  let e = D(/* @__PURE__ */ new Map()), t = z((o, i, a, l) => {
    let s = l != null && l.once ? (...d) => {
      e.current.delete(a), a(...d);
    } : a;
    e.current.set(a, {
      type: i,
      eventTarget: o,
      fn: s,
      options: l
    }), o.addEventListener(i, s, l);
  }, []), r = z((o, i, a, l) => {
    var s;
    let d = ((s = e.current.get(a)) === null || s === void 0 ? void 0 : s.fn) || a;
    o.removeEventListener(i, d, l), e.current.delete(a);
  }, []), n = z(() => {
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
function ao(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = _e(r), o && n ? o = [
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
function _r(e) {
  const t = D(null), r = D(void 0), n = z((o) => {
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
  return le(() => ({
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
var Qt;
const ll = (Qt = C.useInsertionEffect) !== null && Qt !== void 0 ? Qt : G;
function we(e) {
  const t = D(null);
  return ll(() => {
    t.current = e;
  }, [
    e
  ]), z((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function sl() {
  return typeof window.ResizeObserver < "u";
}
function br(e) {
  const { ref: t, box: r, onResize: n } = e;
  let o = we(n);
  Y(() => {
    let i = t == null ? void 0 : t.current;
    if (i)
      if (sl()) {
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
function Vr(e, t) {
  G(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function pr(e, t) {
  if (!e) return !1;
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
function lo(e, t) {
  let r = e;
  for (pr(r, t) && (r = r.parentElement); r && !pr(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
const dl = /* @__PURE__ */ new Set([
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
function er(e) {
  return e instanceof HTMLInputElement && !dl.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function mr(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Or() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function cl(e) {
  return !Or() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function so(e, t, r) {
  let n = we(() => {
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
function ul(e, t = !0) {
  let [r, n] = q(!0), o = r && t;
  return G(() => {
    if (o && e.current && "getAnimations" in e.current)
      for (let i of e.current.getAnimations()) i instanceof CSSTransition && i.cancel();
  }, [
    e,
    o
  ]), co(e, o, z(() => n(!1), [])), o;
}
function fl(e, t) {
  let [r, n] = q(t ? "open" : "closed");
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
  return co(e, o, z(() => {
    n((i) => i === "exiting" ? "closed" : i);
  }, [])), o;
}
function co(e, t, r) {
  G(() => {
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
        o || Jn(() => {
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
const vl = typeof Element < "u" && "checkVisibility" in Element.prototype;
function bl(e) {
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
function pl(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Hr(e, t) {
  return vl ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && bl(e) && pl(e, t) && (!e.parentElement || Hr(e.parentElement, e));
}
const zr = [
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
], ml = zr.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
zr.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const gl = zr.join(':not([hidden]):not([tabindex="-1"]),');
function uo(e) {
  return e.matches(ml) && Hr(e) && !fo(e);
}
function hl(e) {
  return e.matches(gl) && Hr(e) && !fo(e);
}
function fo(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
var tr;
const $l = typeof document < "u" ? (tr = C.useInsertionEffect) !== null && tr !== void 0 ? tr : C.useLayoutEffect : () => {
};
function Gt(e, t, r) {
  let [n, o] = q(e || t), i = D(n), a = D(e !== void 0), l = e !== void 0;
  Y(() => {
    let u = a.current;
    u !== l && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), a.current = l;
  }, [
    l
  ]);
  let s = l ? e : n;
  $l(() => {
    i.current = s;
  });
  let [, d] = Na(() => ({}), {}), c = z((u, ...p) => {
    let m = typeof u == "function" ? u(i.current) : u;
    Object.is(i.current, m) || (i.current = m, o(m), d(), r == null || r(m, ...p));
  }, [
    r
  ]);
  return [
    s,
    c
  ];
}
function gr(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
const hr = Symbol("default");
function Wt({ values: e, children: t }) {
  for (let [r, n] of e)
    t = /* @__PURE__ */ C.createElement(r.Provider, {
      value: n
    }, t);
  return t;
}
function ke(e) {
  let { className: t, style: r, children: n, defaultClassName: o, defaultChildren: i, defaultStyle: a, values: l, render: s } = e;
  return le(() => {
    let d, c, u;
    return typeof t == "function" ? d = t({
      ...l,
      defaultClassName: o
    }) : d = t, typeof r == "function" ? c = r({
      ...l,
      defaultStyle: a || {}
    }) : c = r, typeof n == "function" ? u = n({
      ...l,
      defaultChildren: i
    }) : n == null ? u = i : u = n, {
      className: d ?? o,
      style: c || a ? {
        ...a,
        ...c
      } : void 0,
      children: u ?? i,
      "data-rac": "",
      render: s ? (p) => s(p, l) : void 0
    };
  }, [
    t,
    r,
    n,
    o,
    i,
    a,
    l,
    s
  ]);
}
function be(e, t) {
  return (r) => t(typeof e == "function" ? e(r) : e, r);
}
function Ut(e, t) {
  let r = ie(e);
  if (t === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let n = t || hr;
    if (!r.slots[n]) {
      let o = new Intl.ListFormat().format(Object.keys(r.slots).map((a) => `"${a}"`)), i = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${i} Valid slot names are ${o}.`);
    }
    return r.slots[n];
  }
  return r;
}
function pe(e, t, r) {
  let n = Ut(r, e.slot) || {}, { ref: o, ...i } = n, a = _r(le(() => zt(t, o), [
    t,
    o
  ])), l = Q(i, e);
  return "style" in i && i.style && "style" in e && e.style && (typeof i.style == "function" || typeof e.style == "function" ? l.style = (s) => {
    let d = typeof i.style == "function" ? i.style(s) : i.style, c = {
      ...s.defaultStyle,
      ...d
    }, u = typeof e.style == "function" ? e.style({
      ...s,
      defaultStyle: c
    }) : e.style;
    return {
      ...c,
      ...u
    };
  } : l.style = {
    ...i.style,
    ...e.style
  }), [
    l,
    a
  ];
}
function vo(e = !0) {
  let [t, r] = q(e), n = D(!1), o = z((i) => {
    n.current = !0, r(!!i);
  }, []);
  return G(() => {
    n.current || r(!1);
  }, []), [
    o,
    t
  ];
}
function It(e) {
  const t = /^(data-.*)$/;
  let r = {};
  for (const n in e) t.test(n) || (r[n] = e[n]);
  return r;
}
function yl(e, t, r) {
  let { render: n, ...o } = t, i = D(null), a = le(() => zt(r, i), [
    r,
    i
  ]);
  G(() => {
    process.env.NODE_ENV !== "production" && n && (i.current ? i.current.localName !== e && console.warn(`Unexpected DOM element returned by custom \`render\` function. Expected <${e}>, got <${i.current.localName}>. This may break the component behavior and accessibility.`) : console.warn("Ref was not connected to DOM element returned by custom `render` function. Did you forget to pass through or merge the `ref`?"));
  }, [
    e,
    n
  ]);
  let l = {
    ...o,
    ref: a
  };
  return n ? n(l, void 0) : /* @__PURE__ */ C.createElement(e, l);
}
const cn = {}, Te = new Proxy({}, {
  get(e, t) {
    if (typeof t != "string") return;
    let r = cn[t];
    return r || (r = /* @__PURE__ */ xe(yl.bind(null, t)), cn[t] = r), r;
  }
}), bo = 7e3;
let Ce = null;
function un(e, t = "assertive", r = bo) {
  Ce ? Ce.announce(e, t, r) : (Ce = new xl(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Ce.announce(e, t, r) : setTimeout(() => {
    Ce != null && Ce.isAttached() && (Ce == null || Ce.announce(e, t, r));
  }, 100));
}
class xl {
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
  announce(t, r = "assertive", n = bo) {
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
}, Mt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, El = {
  top: "left",
  left: "top"
}, $r = {
  top: "height",
  left: "width"
}, po = {
  width: "totalWidth",
  height: "totalHeight"
}, ht = {};
let wl = () => typeof document < "u" ? window.visualViewport : null;
function fn(e, t) {
  let r = 0, n = 0, o = 0, i = 0, a = 0, l = 0, s = {};
  var d;
  let c = ((d = t == null ? void 0 : t.scale) !== null && d !== void 0 ? d : 1) > 1;
  if (e.tagName === "BODY" || e.tagName === "HTML") {
    let v = document.documentElement;
    o = v.clientWidth, i = v.clientHeight;
    var u;
    r = (u = t == null ? void 0 : t.width) !== null && u !== void 0 ? u : o;
    var p;
    n = (p = t == null ? void 0 : t.height) !== null && p !== void 0 ? p : i, s.top = v.scrollTop || e.scrollTop, s.left = v.scrollLeft || e.scrollLeft, t && (a = t.offsetTop, l = t.offsetLeft);
  } else
    ({ width: r, height: n, top: a, left: l } = st(e, !1)), s.top = e.scrollTop, s.left = e.scrollLeft, o = r, i = n;
  if (no() && (e.tagName === "BODY" || e.tagName === "HTML") && c) {
    s.top = 0, s.left = 0;
    var m;
    a = (m = t == null ? void 0 : t.pageTop) !== null && m !== void 0 ? m : 0;
    var h;
    l = (h = t == null ? void 0 : t.pageLeft) !== null && h !== void 0 ? h : 0;
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
function Pl(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function vn(e, t, r, n, o, i, a) {
  var l;
  let s = (l = o.scroll[e]) !== null && l !== void 0 ? l : 0, d = n[$r[e]], c = a[e] + n.scroll[he[e]] + i, u = a[e] + n.scroll[he[e]] + d - i, p = t - s + n.scroll[he[e]] + a[e] - n[he[e]], m = t - s + r + n.scroll[he[e]] + a[e] - n[he[e]];
  return p < c ? c - p : m > u ? Math.max(u - m, c - p) : 0;
}
function Tl(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function bn(e) {
  if (ht[e]) return ht[e];
  let [t, r] = e.split(" "), n = he[t] || "right", o = El[n];
  he[r] || (r = "center");
  let i = $r[n], a = $r[o];
  return ht[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: i,
    crossSize: a
  }, ht[e];
}
function rr(e, t, r, n, o, i, a, l, s, d, c) {
  let { placement: u, crossPlacement: p, axis: m, crossAxis: h, size: v, crossSize: g } = n, $ = {};
  var y;
  $[h] = (y = e[h]) !== null && y !== void 0 ? y : 0;
  var w, E, I, M;
  p === "center" ? $[h] += (((w = e[g]) !== null && w !== void 0 ? w : 0) - ((E = r[g]) !== null && E !== void 0 ? E : 0)) / 2 : p !== h && ($[h] += ((I = e[g]) !== null && I !== void 0 ? I : 0) - ((M = r[g]) !== null && M !== void 0 ? M : 0)), $[h] += i;
  const R = e[h] - r[g] + s + d, x = e[h] + e[g] - s - d;
  if ($[h] = gr($[h], R, x), u === m) {
    let O = l ? c[v] : c[po[v]];
    $[Mt[m]] = Math.floor(O - e[m] + o);
  } else $[m] = Math.floor(e[m] + e[v] + o);
  return $;
}
function Cl(e, t, r, n, o, i, a, l, s, d, c) {
  var u, p;
  let m = (e.top != null ? e.top : s[po.height] - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - a) - ((p = s.scroll.top) !== null && p !== void 0 ? p : 0), h = d ? r.top : 0;
  var v, g, $;
  let y = {
    // This should be boundary top in container coord system vs viewport top in container coord system
    // For the viewport top, there are several cases
    // 1. pinchzoom case where we want the viewports offset top as top here
    // 2. case where container is offset from the boundary and is contained by the boundary. In this case the top we want here is NOT 0, we want to take boundary's top even though is is a negative number OR the visual viewport, whichever is more restrictive
    top: Math.max(t.top + h, ((v = c == null ? void 0 : c.offsetTop) !== null && v !== void 0 ? v : t.top) + h),
    bottom: Math.min(t.top + t.height + h, ((g = c == null ? void 0 : c.offsetTop) !== null && g !== void 0 ? g : 0) + (($ = c == null ? void 0 : c.height) !== null && $ !== void 0 ? $ : 0))
  };
  var w, E, I, M;
  return l !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, y.bottom - m - (((w = o.top) !== null && w !== void 0 ? w : 0) + ((E = o.bottom) !== null && E !== void 0 ? E : 0) + i))
  ) : Math.max(0, m + a - y.top - (((I = o.top) !== null && I !== void 0 ? I : 0) + ((M = o.bottom) !== null && M !== void 0 ? M : 0) + i));
}
function pn(e, t, r, n, o, i, a, l) {
  let { placement: s, axis: d, size: c } = i;
  var u, p;
  if (s === d) return Math.max(0, r[d] - ((u = a.scroll[d]) !== null && u !== void 0 ? u : 0) - (e[d] + (l ? t[d] : 0)) - ((p = n[d]) !== null && p !== void 0 ? p : 0) - n[Mt[d]] - o);
  var m, h;
  return Math.max(0, e[c] + e[d] + (l ? t[d] : 0) - r[d] - r[c] + ((m = a.scroll[d]) !== null && m !== void 0 ? m : 0) - ((h = n[d]) !== null && h !== void 0 ? h : 0) - n[Mt[d]] - o);
}
function Sl(e, t, r, n, o, i, a, l, s, d, c, u, p, m, h, v, g, $) {
  let y = bn(e), { size: w, crossAxis: E, crossSize: I, placement: M, crossPlacement: R } = y, x = rr(t, l, r, y, c, u, d, p, h, v, s), O = c, V = pn(l, d, t, o, i + c, y, s, g);
  if (a && r[w] > V) {
    let ge = bn(`${Mt[M]} ${R}`), Ee = rr(t, l, r, ge, c, u, d, p, h, v, s);
    pn(l, d, t, o, i + c, ge, s, g) > V && (y = ge, x = Ee, O = c);
  }
  let re = "bottom";
  y.axis === "top" ? y.placement === "top" ? re = "top" : y.placement === "bottom" && (re = "bottom") : y.crossAxis === "top" && (y.crossPlacement === "top" ? re = "bottom" : y.crossPlacement === "bottom" && (re = "top"));
  let U = vn(E, x[E], r[I], l, s, i, d);
  x[E] += U;
  let j = Cl(x, l, d, p, o, i, r.height, re, s, g, $);
  m && m < j && (j = m), r.height = Math.min(r.height, j), x = rr(t, l, r, y, O, u, d, p, h, v, s), U = vn(E, x[E], r[I], l, s, i, d), x[E] += U;
  let ee = {}, te = t[E] - x[E] - o[he[E]], J = te + 0.5 * t[I];
  const se = h / 2 + v;
  var N, ce, f, P;
  const b = he[E] === "left" ? ((N = o.left) !== null && N !== void 0 ? N : 0) + ((ce = o.right) !== null && ce !== void 0 ? ce : 0) : ((f = o.top) !== null && f !== void 0 ? f : 0) + ((P = o.bottom) !== null && P !== void 0 ? P : 0), T = r[I] - b - h / 2 - v, L = t[E] + h / 2 - (x[E] + o[he[E]]), _ = t[E] + t[I] - h / 2 - (x[E] + o[he[E]]), me = gr(J, L, _);
  ee[E] = gr(me, se, T), { placement: M, crossPlacement: R } = y, h ? te = ee[E] : R === "right" ? te += t[I] : R === "center" && (te += t[I] / 2);
  let Z = M === "left" || M === "top" ? r[w] : 0, Me = {
    x: M === "top" || M === "bottom" ? te : Z,
    y: M === "left" || M === "right" ? te : Z
  };
  return {
    position: x,
    maxHeight: j,
    arrowOffsetLeft: ee.left,
    arrowOffsetTop: ee.top,
    placement: M,
    triggerAnchorPoint: Me
  };
}
function kl(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: i, shouldFlip: a, boundaryElement: l, offset: s, crossOffset: d, maxHeight: c, arrowSize: u = 0, arrowBoundaryOffset: p = 0 } = e, m = wl(), h = n instanceof HTMLElement ? Nl(n) : document.documentElement, v = h === document.documentElement;
  const g = window.getComputedStyle(h).position;
  let $ = !!g && g !== "static", y = v ? st(r, !1) : mn(r, h, !1);
  if (!v) {
    let { marginTop: ee, marginLeft: te } = window.getComputedStyle(r);
    y.top += parseInt(ee, 10) || 0, y.left += parseInt(te, 10) || 0;
  }
  let w = st(n, !0), E = Tl(n);
  var I, M;
  w.width += ((I = E.left) !== null && I !== void 0 ? I : 0) + ((M = E.right) !== null && M !== void 0 ? M : 0);
  var R, x;
  w.height += ((R = E.top) !== null && R !== void 0 ? R : 0) + ((x = E.bottom) !== null && x !== void 0 ? x : 0);
  let O = Pl(o), V = fn(l, m), re = fn(h, m), U = mn(l, h, !1), j = F(l, h);
  return Sl(t, y, w, O, E, i, a, V, re, U, s, d, $, c, u, p, j, m);
}
function Br(e, t) {
  let { top: r, left: n, width: o, height: i } = e.getBoundingClientRect();
  return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (o = e.offsetWidth, i = e.offsetHeight), {
    top: r,
    left: n,
    width: o,
    height: i
  };
}
function st(e, t) {
  let { top: r, left: n, width: o, height: i } = Br(e, t), { scrollTop: a, scrollLeft: l, clientTop: s, clientLeft: d } = document.documentElement;
  return {
    top: r + a - s,
    left: n + l - d,
    width: o,
    height: i
  };
}
function mn(e, t, r) {
  let n = window.getComputedStyle(e), o;
  if (n.position === "fixed") o = Br(e, r);
  else {
    o = st(e, r);
    let i = st(t, r), a = window.getComputedStyle(t);
    i.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, o.top -= i.top, o.left -= i.left;
  }
  return o.top -= parseInt(n.marginTop, 10) || 0, o.left -= parseInt(n.marginLeft, 10) || 0, o;
}
function Nl(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !gn(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !gn(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function gn(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const mo = /* @__PURE__ */ new WeakMap();
function Ll(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  Y(() => {
    if (!r || n === null) return;
    let o = (i) => {
      let a = i.target;
      if (!t.current || a instanceof Node && !F(a, t.current) || i.target instanceof HTMLInputElement || i.target instanceof HTMLTextAreaElement) return;
      let l = n || mo.get(t.current);
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
const Il = /* @__PURE__ */ new Set([
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
]), Ml = /* @__PURE__ */ new Set([
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
function Rl(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return Il.has(r.script);
  }
  let t = e.split("-")[0];
  return Ml.has(t);
}
const go = Symbol.for("react-aria.i18n.locale");
function ho() {
  let e = typeof window < "u" && window[go] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Rl(e) ? "rtl" : "ltr"
  };
}
let yr = ho(), nt = /* @__PURE__ */ new Set();
function hn() {
  yr = ho();
  for (let e of nt) e(yr);
}
function Dl() {
  let e = Dr(), [t, r] = q(yr);
  return Y(() => (nt.size === 0 && window.addEventListener("languagechange", hn), nt.add(r), () => {
    nt.delete(r), nt.size === 0 && window.removeEventListener("languagechange", hn);
  }), []), e ? {
    locale: typeof window < "u" && window[go] || "en-US",
    direction: "ltr"
  } : t;
}
const Fl = /* @__PURE__ */ C.createContext(null);
function Kr() {
  let e = Dl();
  return ie(Fl) || e;
}
const Ol = Symbol.for("react-aria.i18n.locale"), Al = Symbol.for("react-aria.i18n.strings");
let We;
class jt {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = _l(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[Ol];
    if (We === void 0) {
      let o = window[Al];
      if (!o) return null;
      We = {};
      for (let i in o) We[i] = new jt({
        [r]: o[i]
      }, r);
    }
    let n = We == null ? void 0 : We[t];
    if (!n) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(t, r = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n)), this.defaultLocale = r;
  }
}
function _l(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = Vl(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function Vl(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const $n = /* @__PURE__ */ new Map(), yn = /* @__PURE__ */ new Map();
class Hl {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let i = this.locale + ":" + n, a = $n.get(i);
    a || (a = new Intl.PluralRules(this.locale, {
      type: n
    }), $n.set(i, a));
    let l = a.select(t);
    return o = r[l] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = yn.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), yn.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
const xn = /* @__PURE__ */ new WeakMap();
function zl(e) {
  let t = xn.get(e);
  return t || (t = new jt(e), xn.set(e, t)), t;
}
function Bl(e, t) {
  return t && jt.getGlobalDictionaryForPackage(t) || zl(e);
}
function $o(e, t) {
  let { locale: r } = Kr(), n = Bl(e, t);
  return le(() => new Hl(r, n), [
    r,
    n
  ]);
}
function Kl(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Gl(e, t, r) {
  Kl(e, t), t.set(e, r);
}
let ne = typeof document < "u" ? window.visualViewport : null;
function Wl(e) {
  let { direction: t } = Kr(), { arrowSize: r, targetRef: n, overlayRef: o, arrowRef: i, scrollRef: a = o, placement: l = "bottom", containerPadding: s = 12, shouldFlip: d = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: u = 0, crossOffset: p = 0, shouldUpdatePosition: m = !0, isOpen: h = !0, onClose: v, maxHeight: g, arrowBoundaryOffset: $ = 0 } = e, [y, w] = q(null), E = [
    m,
    l,
    o.current,
    n.current,
    i == null ? void 0 : i.current,
    a.current,
    s,
    d,
    c,
    u,
    p,
    h,
    t,
    g,
    $,
    r
  ], I = D(ne == null ? void 0 : ne.scale);
  Y(() => {
    h && (I.current = ne == null ? void 0 : ne.scale);
  }, [
    h
  ]);
  let M = z(() => {
    if (m === !1 || !h || !o.current || !n.current || !c || (ne == null ? void 0 : ne.scale) !== I.current) return;
    let U = null;
    if (a.current && F(a.current, document.activeElement)) {
      var j;
      let f = (j = document.activeElement) === null || j === void 0 ? void 0 : j.getBoundingClientRect(), P = a.current.getBoundingClientRect();
      var ee;
      if (U = {
        type: "top",
        offset: ((ee = f == null ? void 0 : f.top) !== null && ee !== void 0 ? ee : 0) - P.top
      }, U.offset > P.height / 2) {
        U.type = "bottom";
        var te;
        U.offset = ((te = f == null ? void 0 : f.bottom) !== null && te !== void 0 ? te : 0) - P.bottom;
      }
    }
    let J = o.current;
    if (!g && o.current) {
      var se;
      J.style.top = "0px", J.style.bottom = "";
      var N;
      J.style.maxHeight = ((N = (se = window.visualViewport) === null || se === void 0 ? void 0 : se.height) !== null && N !== void 0 ? N : window.innerHeight) + "px";
    }
    let ce = kl({
      placement: jl(l, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: a.current || o.current,
      padding: s,
      shouldFlip: d,
      boundaryElement: c,
      offset: u,
      crossOffset: p,
      maxHeight: g,
      arrowSize: r ?? (i != null && i.current ? Br(i.current, !0).width : 0),
      arrowBoundaryOffset: $
    });
    if (ce.position) {
      if (J.style.top = "", J.style.bottom = "", J.style.left = "", J.style.right = "", Object.keys(ce.position).forEach((f) => J.style[f] = ce.position[f] + "px"), J.style.maxHeight = ce.maxHeight != null ? ce.maxHeight + "px" : "", U && document.activeElement && a.current) {
        let f = document.activeElement.getBoundingClientRect(), P = a.current.getBoundingClientRect(), b = f[U.type] - P[U.type];
        a.current.scrollTop += b - U.offset;
      }
      w(ce);
    }
  }, E);
  G(M, E), Ul(M), br({
    ref: o,
    onResize: M
  }), br({
    ref: n,
    onResize: M
  });
  let R = D(!1);
  G(() => {
    let U, j = () => {
      R.current = !0, clearTimeout(U), U = setTimeout(() => {
        R.current = !1;
      }, 500), M();
    }, ee = () => {
      R.current && j();
    };
    return ne == null || ne.addEventListener("resize", j), ne == null || ne.addEventListener("scroll", ee), () => {
      ne == null || ne.removeEventListener("resize", j), ne == null || ne.removeEventListener("scroll", ee);
    };
  }, [
    M
  ]);
  let x = z(() => {
    R.current || v == null || v();
  }, [
    v,
    R
  ]);
  Ll({
    triggerRef: n,
    isOpen: h,
    onClose: v && x
  });
  var O, V, re;
  return {
    overlayProps: {
      style: {
        position: y ? "absolute" : "fixed",
        top: y ? void 0 : 0,
        left: y ? void 0 : 0,
        zIndex: 1e5,
        ...y == null ? void 0 : y.position,
        maxHeight: (O = y == null ? void 0 : y.maxHeight) !== null && O !== void 0 ? O : "100vh"
      }
    },
    placement: (V = y == null ? void 0 : y.placement) !== null && V !== void 0 ? V : null,
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
function Ul(e) {
  G(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function jl(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Gr(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function yo(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function xo(e) {
  let t = D({
    isFocused: !1,
    observer: null
  });
  return G(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []), z((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let n = r.target, o = (i) => {
        if (t.current.isFocused = !1, n.disabled) {
          let a = Gr(i);
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
let Rt = !1;
function En(e) {
  for (; e && !uo(e); ) e = e.parentElement;
  let t = fe(e), r = t.document.activeElement;
  if (!r || r === e) return;
  Rt = !0;
  let n = !1, o = (c) => {
    (c.target === r || n) && c.stopImmediatePropagation();
  }, i = (c) => {
    (c.target === r || n) && (c.stopImmediatePropagation(), !e && !n && (n = !0, Xe(r), s()));
  }, a = (c) => {
    (c.target === e || n) && c.stopImmediatePropagation();
  }, l = (c) => {
    (c.target === e || n) && (c.stopImmediatePropagation(), n || (n = !0, Xe(r), s()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", a, !0);
  let s = () => {
    cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", a, !0), Rt = !1, n = !1;
  }, d = requestAnimationFrame(s);
  return s;
}
let qe = "default", xr = "", kt = /* @__PURE__ */ new WeakMap();
function wn(e) {
  if (Kt()) {
    if (qe === "default") {
      const t = H(e);
      xr = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    qe = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    kt.set(e, e.style[t]), e.style[t] = "none";
  }
}
function nr(e) {
  if (Kt()) {
    if (qe !== "disabled") return;
    qe = "restoring", setTimeout(() => {
      io(() => {
        if (qe === "restoring") {
          const t = H(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = xr || ""), xr = "", qe = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && kt.has(e)) {
    let t = kt.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), kt.delete(e);
  }
}
const dt = C.createContext({
  register: () => {
  }
});
dt.displayName = "PressResponderContext";
function ql(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Eo(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function Yl(e, t) {
  var r = Eo(e, t, "get");
  return ql(e, r);
}
function Xl(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Pn(e, t, r) {
  var n = Eo(e, t, "set");
  return Xl(e, n, r), r;
}
function Zl(e) {
  let t = ie(dt);
  if (t) {
    let { register: r, ref: n, ...o } = t;
    e = Q(o, e), r();
  }
  return Vr(t, e.ref), e;
}
var $t = /* @__PURE__ */ new WeakMap();
class yt {
  continuePropagation() {
    Pn(this, $t, !1);
  }
  get shouldStopPropagation() {
    return Yl(this, $t);
  }
  constructor(t, r, n, o) {
    Gl(this, $t, {
      writable: !0,
      value: void 0
    }), Pn(this, $t, !0);
    var i;
    let a = (i = o == null ? void 0 : o.target) !== null && i !== void 0 ? i : n.currentTarget;
    const l = a == null ? void 0 : a.getBoundingClientRect();
    let s, d = 0, c, u = null;
    n.clientX != null && n.clientY != null && (c = n.clientX, u = n.clientY), l && (c != null && u != null ? (s = c - l.left, d = u - l.top) : (s = l.width / 2, d = l.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = d, this.key = n.key;
  }
}
const Tn = Symbol("linkClicked"), Cn = "react-aria-pressable-style", Sn = "data-react-aria-pressable";
function Dt(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: i, onClick: a, isDisabled: l, isPressed: s, preventFocusOnPress: d, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: u, ref: p, ...m } = Zl(e), [h, v] = q(!1), g = D({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: $, removeAllGlobalListeners: y, removeGlobalListener: w } = Ar(), E = z((f, P) => {
    let b = g.current;
    if (l || b.didFirePressStart) return !1;
    let T = !0;
    if (b.isTriggeringEvent = !0, n) {
      let L = new yt("pressstart", P, f);
      n(L), T = L.shouldStopPropagation;
    }
    return r && r(!0), b.isTriggeringEvent = !1, b.didFirePressStart = !0, v(!0), T;
  }, [
    l,
    n,
    r
  ]), I = z((f, P, b = !0) => {
    let T = g.current;
    if (!T.didFirePressStart) return !1;
    T.didFirePressStart = !1, T.isTriggeringEvent = !0;
    let L = !0;
    if (o) {
      let _ = new yt("pressend", P, f);
      o(_), L = _.shouldStopPropagation;
    }
    if (r && r(!1), v(!1), t && b && !l) {
      let _ = new yt("press", P, f);
      t(_), L && (L = _.shouldStopPropagation);
    }
    return T.isTriggeringEvent = !1, L;
  }, [
    l,
    o,
    r,
    t
  ]), M = we(I), R = z((f, P) => {
    let b = g.current;
    if (l) return !1;
    if (i) {
      b.isTriggeringEvent = !0;
      let T = new yt("pressup", P, f);
      return i(T), b.isTriggeringEvent = !1, T.shouldStopPropagation;
    }
    return !0;
  }, [
    l,
    i
  ]), x = we(R), O = z((f) => {
    let P = g.current;
    if (P.isPressed && P.target) {
      P.didFirePressStart && P.pointerType != null && I(Ve(P.target, f), P.pointerType, !1), P.isPressed = !1, N(null), P.isOverTarget = !1, P.activePointerId = null, P.pointerType = null, y(), u || nr(P.target);
      for (let b of P.disposables) b();
      P.disposables = [];
    }
  }, [
    u,
    y,
    I
  ]), V = we(O), re = z((f) => {
    c && O(f);
  }, [
    c,
    O
  ]), U = z((f) => {
    l || a == null || a(f);
  }, [
    l,
    a
  ]), j = z((f, P) => {
    if (!l && a) {
      let b = new MouseEvent("click", f);
      yo(b, P), a(Gr(b));
    }
  }, [
    l,
    a
  ]), ee = we(j), [te, J] = q(!1);
  G(() => {
    let f = g.current;
    if (te) {
      let P = (_) => {
        var me;
        if (f.isPressed && f.target && or(_, f.target)) {
          var Z;
          Ln(B(_), _.key) && _.preventDefault();
          let ge = B(_), Ee = F(f.target, B(_));
          M(Ve(f.target, _), "keyboard", Ee), Ee && ee(_, f.target), y(), _.key !== "Enter" && Wr(f.target) && F(f.target, ge) && !_[Tn] && (_[Tn] = !0, Be(f.target, _, !1)), f.isPressed = !1, J(!1), (Z = f.metaKeyEvents) === null || Z === void 0 || Z.delete(_.key);
        } else if (_.key === "Meta" && (!((me = f.metaKeyEvents) === null || me === void 0) && me.size)) {
          var Me;
          let ge = f.metaKeyEvents;
          f.metaKeyEvents = void 0;
          for (let Ee of ge.values()) (Me = f.target) === null || Me === void 0 || Me.dispatchEvent(new KeyboardEvent("keyup", Ee));
        }
      }, b = f.target, L = ut((_) => {
        b && or(_, b) && !_.repeat && F(b, B(_)) && f.target && x(Ve(f.target, _), "keyboard");
      }, P);
      return $(H(f.target), "keyup", L, !0), () => {
        w(H(f.target), "keyup", L, !0);
      };
    }
  }, [
    te,
    $,
    y,
    w
  ]);
  let [se, N] = q(null);
  G(() => {
    let f = g.current;
    if (se === "pointer") {
      let P = (T) => {
        if (T.pointerId === f.activePointerId && f.isPressed && T.button === 0 && f.target) {
          if (F(f.target, B(T)) && f.pointerType != null) {
            let L = !1, _ = setTimeout(() => {
              f.isPressed && f.target instanceof HTMLElement && (L ? V(T) : (Xe(f.target), f.target.click()));
            }, 80);
            $(T.currentTarget, "click", () => L = !0, !0), f.disposables.push(() => clearTimeout(_));
          } else V(T);
          f.isOverTarget = !1;
        }
      }, b = (T) => {
        V(T);
      };
      return $(H(f.target), "pointerup", P, !1), $(H(f.target), "pointercancel", b, !1), () => {
        w(H(f.target), "pointerup", P, !1), w(H(f.target), "pointercancel", b, !1);
      };
    } else if (se === "mouse" && process.env.NODE_ENV === "test") {
      let P = (b) => {
        if (b.button === 0) {
          if (f.ignoreEmulatedMouseEvents) {
            f.ignoreEmulatedMouseEvents = !1;
            return;
          }
          f.target && F(f.target, b.target) && f.pointerType != null || V(b), f.isOverTarget = !1;
        }
      };
      return $(H(f.target), "mouseup", P, !1), () => {
        w(H(f.target), "mouseup", P, !1);
      };
    } else if (se === "touch" && process.env.NODE_ENV === "test") {
      let P = (b) => {
        f.isPressed && F(B(b), f.target) && V({
          currentTarget: f.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      return $(fe(f.target), "scroll", P, !0), () => {
        w(fe(f.target), "scroll", P, !0);
      };
    }
  }, [
    se,
    $,
    w
  ]);
  let ce = le(() => {
    let f = g.current, P = {
      onKeyDown(b) {
        if (or(b.nativeEvent, b.currentTarget) && F(b.currentTarget, B(b.nativeEvent))) {
          var T;
          Ln(B(b.nativeEvent), b.key) && b.preventDefault();
          let L = !0;
          !f.isPressed && !b.repeat && (f.target = b.currentTarget, f.isPressed = !0, J(!0), f.pointerType = "keyboard", L = E(b, "keyboard")), L && b.stopPropagation(), b.metaKey && Ze() && ((T = f.metaKeyEvents) === null || T === void 0 || T.set(b.key, b.nativeEvent));
        } else b.key === "Meta" && (f.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(b) {
        if (!(b && !F(b.currentTarget, B(b.nativeEvent))) && b && b.button === 0 && !f.isTriggeringEvent && !Be.isOpening) {
          let T = !0;
          if (l && b.preventDefault(), !f.ignoreEmulatedMouseEvents && !f.isPressed && (f.pointerType === "virtual" || mr(b.nativeEvent))) {
            let L = E(b, "virtual"), _ = R(b, "virtual"), me = I(b, "virtual");
            U(b), T = L && _ && me;
          } else if (f.isPressed && f.pointerType !== "keyboard") {
            let L = f.pointerType || b.nativeEvent.pointerType || "virtual", _ = R(Ve(b.currentTarget, b), L), me = I(Ve(b.currentTarget, b), L, !0);
            T = _ && me, f.isOverTarget = !1, U(b), O(b);
          }
          f.ignoreEmulatedMouseEvents = !1, T && b.stopPropagation();
        }
      }
    };
    return typeof PointerEvent < "u" ? (P.onPointerDown = (b) => {
      if (b.button !== 0 || !F(b.currentTarget, B(b.nativeEvent))) return;
      if (cl(b.nativeEvent)) {
        f.pointerType = "virtual";
        return;
      }
      f.pointerType = b.pointerType;
      let T = !0;
      if (!f.isPressed) {
        f.isPressed = !0, N("pointer"), f.isOverTarget = !0, f.activePointerId = b.pointerId, f.target = b.currentTarget, u || wn(f.target), T = E(b, f.pointerType);
        let L = B(b.nativeEvent);
        "releasePointerCapture" in L && ("hasPointerCapture" in L ? L.hasPointerCapture(b.pointerId) && L.releasePointerCapture(b.pointerId) : L.releasePointerCapture(b.pointerId));
      }
      T && b.stopPropagation();
    }, P.onMouseDown = (b) => {
      if (F(b.currentTarget, B(b.nativeEvent)) && b.button === 0) {
        if (d) {
          let T = En(b.target);
          T && f.disposables.push(T);
        }
        b.stopPropagation();
      }
    }, P.onPointerUp = (b) => {
      !F(b.currentTarget, B(b.nativeEvent)) || f.pointerType === "virtual" || b.button === 0 && !f.isPressed && R(b, f.pointerType || b.pointerType);
    }, P.onPointerEnter = (b) => {
      b.pointerId === f.activePointerId && f.target && !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, E(Ve(f.target, b), f.pointerType));
    }, P.onPointerLeave = (b) => {
      b.pointerId === f.activePointerId && f.target && f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, I(Ve(f.target, b), f.pointerType, !1), re(b));
    }, P.onDragStart = (b) => {
      F(b.currentTarget, B(b.nativeEvent)) && O(b);
    }) : process.env.NODE_ENV === "test" && (P.onMouseDown = (b) => {
      if (b.button !== 0 || !F(b.currentTarget, B(b.nativeEvent))) return;
      if (f.ignoreEmulatedMouseEvents) {
        b.stopPropagation();
        return;
      }
      if (f.isPressed = !0, N("mouse"), f.isOverTarget = !0, f.target = b.currentTarget, f.pointerType = mr(b.nativeEvent) ? "virtual" : "mouse", Jn(() => E(b, f.pointerType)) && b.stopPropagation(), d) {
        let L = En(b.target);
        L && f.disposables.push(L);
      }
    }, P.onMouseEnter = (b) => {
      if (!F(b.currentTarget, B(b.nativeEvent))) return;
      let T = !0;
      f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !0, T = E(b, f.pointerType)), T && b.stopPropagation();
    }, P.onMouseLeave = (b) => {
      if (!F(b.currentTarget, B(b.nativeEvent))) return;
      let T = !0;
      f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !1, T = I(b, f.pointerType, !1), re(b)), T && b.stopPropagation();
    }, P.onMouseUp = (b) => {
      F(b.currentTarget, B(b.nativeEvent)) && !f.ignoreEmulatedMouseEvents && b.button === 0 && !f.isPressed && R(b, f.pointerType || "mouse");
    }, P.onTouchStart = (b) => {
      if (!F(b.currentTarget, B(b.nativeEvent))) return;
      let T = Jl(b.nativeEvent);
      if (!T) return;
      f.activePointerId = T.identifier, f.ignoreEmulatedMouseEvents = !0, f.isOverTarget = !0, f.isPressed = !0, N("touch"), f.target = b.currentTarget, f.pointerType = "touch", u || wn(f.target), E(Re(f.target, b), f.pointerType) && b.stopPropagation();
    }, P.onTouchMove = (b) => {
      if (!F(b.currentTarget, B(b.nativeEvent))) return;
      if (!f.isPressed) {
        b.stopPropagation();
        return;
      }
      let T = kn(b.nativeEvent, f.activePointerId), L = !0;
      T && Nn(T, b.currentTarget) ? !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, L = E(Re(f.target, b), f.pointerType)) : f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, L = I(Re(f.target, b), f.pointerType, !1), re(Re(f.target, b))), L && b.stopPropagation();
    }, P.onTouchEnd = (b) => {
      if (!F(b.currentTarget, B(b.nativeEvent))) return;
      if (!f.isPressed) {
        b.stopPropagation();
        return;
      }
      let T = kn(b.nativeEvent, f.activePointerId), L = !0;
      T && Nn(T, b.currentTarget) && f.pointerType != null ? (R(Re(f.target, b), f.pointerType), L = I(Re(f.target, b), f.pointerType), j(b.nativeEvent, f.target)) : f.isOverTarget && f.pointerType != null && (L = I(Re(f.target, b), f.pointerType, !1)), L && b.stopPropagation(), f.isPressed = !1, N(null), f.activePointerId = null, f.isOverTarget = !1, f.ignoreEmulatedMouseEvents = !0, f.target && !u && nr(f.target), y();
    }, P.onTouchCancel = (b) => {
      F(b.currentTarget, B(b.nativeEvent)) && (b.stopPropagation(), f.isPressed && O(Re(f.target, b)));
    }, P.onDragStart = (b) => {
      F(b.currentTarget, B(b.nativeEvent)) && O(b);
    }), P;
  }, [
    l,
    d,
    y,
    u,
    O,
    re,
    I,
    E,
    R,
    U,
    j
  ]);
  return Y(() => {
    if (!p || process.env.NODE_ENV === "test") return;
    const f = H(p.current);
    if (!f || !f.head || f.getElementById(Cn)) return;
    const P = f.createElement("style");
    P.id = Cn, P.textContent = `
@layer {
  [${Sn}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), f.head.prepend(P);
  }, [
    p
  ]), Y(() => {
    let f = g.current;
    return () => {
      var P;
      u || nr((P = f.target) !== null && P !== void 0 ? P : void 0);
      for (let b of f.disposables) b();
      f.disposables = [];
    };
  }, [
    u
  ]), {
    isPressed: s || h,
    pressProps: Q(m, ce, {
      [Sn]: !0
    })
  };
}
function Wr(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function or(e, t) {
  const { key: r, code: n } = e, o = t, i = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof fe(o).HTMLInputElement && !wo(o, r) || o instanceof fe(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Wr(o)) && r !== "Enter");
}
function Jl(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function kn(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function Re(e, t) {
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
function Ve(e, t) {
  let r = t.clientX, n = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: n,
    key: t.key
  };
}
function Ql(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function es(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Nn(e, t) {
  let r = t.getBoundingClientRect(), n = Ql(e);
  return es(r, n);
}
function ts(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Wr(e);
}
function Ln(e, t) {
  return e instanceof HTMLInputElement ? !wo(e, t) : ts(e);
}
const rs = /* @__PURE__ */ new Set([
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
function wo(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : rs.has(e.type);
}
let Ge = null;
const Er = /* @__PURE__ */ new Set();
let at = /* @__PURE__ */ new Map(), Ke = !1, wr = !1;
const ns = {
  Tab: !0,
  Escape: !0
};
function qt(e, t) {
  for (let r of Er) r(e, t);
}
function os(e) {
  return !(e.metaKey || !Ze() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ft(e) {
  Ke = !0, !Be.isOpening && os(e) && (Ge = "keyboard", qt("keyboard", e));
}
function $e(e) {
  Ge = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (Ke = !0, qt("pointer", e));
}
function Po(e) {
  !Be.isOpening && mr(e) && (Ke = !0, Ge = "virtual");
}
function To(e) {
  e.target === window || e.target === document || Rt || !e.isTrusted || (!Ke && !wr && (Ge = "virtual", qt("virtual", e)), Ke = !1, wr = !1);
}
function Co() {
  Rt || (Ke = !1, wr = !0);
}
function Pr(e) {
  if (typeof window > "u" || typeof document > "u" || at.get(fe(e))) return;
  const t = fe(e), r = H(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ke = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Ft, !0), r.addEventListener("keyup", Ft, !0), r.addEventListener("click", Po, !0), t.addEventListener("focus", To, !0), t.addEventListener("blur", Co, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", $e, !0), r.addEventListener("pointermove", $e, !0), r.addEventListener("pointerup", $e, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", $e, !0), r.addEventListener("mousemove", $e, !0), r.addEventListener("mouseup", $e, !0)), t.addEventListener("beforeunload", () => {
    So(e);
  }, {
    once: !0
  }), at.set(t, {
    focus: n
  });
}
const So = (e, t) => {
  const r = fe(e), n = H(e);
  t && n.removeEventListener("DOMContentLoaded", t), at.has(r) && (r.HTMLElement.prototype.focus = at.get(r).focus, n.removeEventListener("keydown", Ft, !0), n.removeEventListener("keyup", Ft, !0), n.removeEventListener("click", Po, !0), r.removeEventListener("focus", To, !0), r.removeEventListener("blur", Co, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", $e, !0), n.removeEventListener("pointermove", $e, !0), n.removeEventListener("pointerup", $e, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", $e, !0), n.removeEventListener("mousemove", $e, !0), n.removeEventListener("mouseup", $e, !0)), at.delete(r));
};
function is(e) {
  const t = H(e);
  let r;
  return t.readyState !== "loading" ? Pr(e) : (r = () => {
    Pr(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => So(e, r);
}
typeof document < "u" && is();
function Tr() {
  return Ge !== "pointer";
}
function ko() {
  return Ge;
}
function as(e) {
  Ge = e, qt(e, null);
}
const ls = /* @__PURE__ */ new Set([
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
function ss(e, t, r) {
  let n = H(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? fe(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? fe(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? fe(r == null ? void 0 : r.target).HTMLElement : HTMLElement, l = typeof window < "u" ? fe(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !ls.has(n.activeElement.type) || n.activeElement instanceof i || n.activeElement instanceof a && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof l && !ns[r.key]);
}
function ds(e, t, r) {
  Pr(), Y(() => {
    if ((r == null ? void 0 : r.enabled) === !1) return;
    let n = (o, i) => {
      ss(!!(r != null && r.isTextInput), o, i) && e(Tr());
    };
    return Er.add(n), () => {
      Er.delete(n);
    };
  }, t);
}
function ct(e) {
  const t = H(e);
  if (ko() === "virtual") {
    let r = ve(t);
    io(() => {
      const n = ve(t);
      (n === r || n === t.body) && e.isConnected && Xe(e);
    });
  } else Xe(e);
}
function No(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const i = z((s) => {
    if (s.target === s.currentTarget)
      return n && n(s), o && o(!1), !0;
  }, [
    n,
    o
  ]), a = xo(i), l = z((s) => {
    const d = H(s.target), c = d ? ve(d) : ve();
    s.target === s.currentTarget && c === B(s.nativeEvent) && (r && r(s), o && o(!0), a(s));
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
function In(e) {
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
function cs(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: In(e.onKeyDown),
      onKeyUp: In(e.onKeyUp)
    }
  };
}
let us = /* @__PURE__ */ C.createContext(null);
function fs(e) {
  let t = ie(us) || {};
  Vr(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Ur(e, t) {
  let { focusProps: r } = No(e), { keyboardProps: n } = cs(e), o = Q(r, n), i = fs(t), a = e.isDisabled ? {} : i, l = D(e.autoFocus);
  Y(() => {
    l.current && t.current && ct(t.current), l.current = !1;
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
const vs = /* @__PURE__ */ C.forwardRef(({ children: e, ...t }, r) => {
  let n = D(!1), o = ie(dt), i = Q(o || {}, {
    ...t,
    register() {
      n.current = !0, o && o.register();
    }
  });
  return i.ref = _r(r || (o == null ? void 0 : o.ref)), Vr(o, i.ref), Y(() => {
    n.current || (process.env.NODE_ENV !== "production" && console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."), n.current = !0);
  }, []), /* @__PURE__ */ C.createElement(dt.Provider, {
    value: i
  }, e);
});
function bs({ children: e }) {
  let t = le(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ C.createElement(dt.Provider, {
    value: t
  }, e);
}
function jr(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, i = D({
    isFocusWithin: !1
  }), { addGlobalListener: a, removeAllGlobalListeners: l } = Ar(), s = z((u) => {
    F(u.currentTarget, u.target) && i.current.isFocusWithin && !F(u.currentTarget, u.relatedTarget) && (i.current.isFocusWithin = !1, l(), r && r(u), o && o(!1));
  }, [
    r,
    o,
    i,
    l
  ]), d = xo(s), c = z((u) => {
    if (!F(u.currentTarget, u.target)) return;
    const p = H(u.target), m = ve(p);
    if (!i.current.isFocusWithin && m === B(u.nativeEvent)) {
      n && n(u), o && o(!0), i.current.isFocusWithin = !0, d(u);
      let h = u.currentTarget;
      a(p, "focus", (v) => {
        if (i.current.isFocusWithin && !F(h, v.target)) {
          let g = new p.defaultView.FocusEvent("blur", {
            relatedTarget: v.target
          });
          yo(g, h);
          let $ = Gr(g);
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
let Ot = !1, xt = 0;
function Cr() {
  Ot = !0, setTimeout(() => {
    Ot = !1;
  }, 50);
}
function Mn(e) {
  e.pointerType === "touch" && Cr();
}
function ps() {
  if (!(typeof document > "u"))
    return xt === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", Mn) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Cr)), xt++, () => {
      xt--, !(xt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Mn) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Cr));
    };
}
function ft(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [i, a] = q(!1), l = D({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Y(ps, []);
  let { addGlobalListener: s, removeAllGlobalListeners: d } = Ar(), { hoverProps: c, triggerHoverEnd: u } = le(() => {
    let p = (v, g) => {
      if (l.pointerType = g, o || g === "touch" || l.isHovered || !F(v.currentTarget, v.target)) return;
      l.isHovered = !0;
      let $ = v.currentTarget;
      l.target = $, s(H(v.target), "pointerover", (y) => {
        l.isHovered && l.target && !F(l.target, y.target) && m(y, y.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: $,
        pointerType: g
      }), r && r(!0), a(!0);
    }, m = (v, g) => {
      let $ = l.target;
      l.pointerType = "", l.target = null, !(g === "touch" || !l.isHovered || !$) && (l.isHovered = !1, d(), n && n({
        type: "hoverend",
        target: $,
        pointerType: g
      }), r && r(!1), a(!1));
    }, h = {};
    return typeof PointerEvent < "u" ? (h.onPointerEnter = (v) => {
      Ot && v.pointerType === "mouse" || p(v, v.pointerType);
    }, h.onPointerLeave = (v) => {
      !o && F(v.currentTarget, v.target) && m(v, v.pointerType);
    }) : process.env.NODE_ENV === "test" && (h.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, h.onMouseEnter = (v) => {
      !l.ignoreEmulatedMouseEvents && !Ot && p(v, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, h.onMouseLeave = (v) => {
      !o && F(v.currentTarget, v.target) && m(v, "mouse");
    }), {
      hoverProps: h,
      triggerHoverEnd: m
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
  return Y(() => {
    o && u({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function ms(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, i = D({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), a = we((s) => {
    r && Et(s, t) && (o && o(s), i.current.isPointerDown = !0);
  }), l = we((s) => {
    r && r(s);
  });
  Y(() => {
    let s = i.current;
    if (n) return;
    const d = t.current, c = H(d);
    if (typeof PointerEvent < "u") {
      let u = (p) => {
        s.isPointerDown && Et(p, t) && l(p), s.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", a, !0), c.addEventListener("click", u, !0), () => {
        c.removeEventListener("pointerdown", a, !0), c.removeEventListener("click", u, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let u = (m) => {
        s.ignoreEmulatedMouseEvents ? s.ignoreEmulatedMouseEvents = !1 : s.isPointerDown && Et(m, t) && l(m), s.isPointerDown = !1;
      }, p = (m) => {
        s.ignoreEmulatedMouseEvents = !0, s.isPointerDown && Et(m, t) && l(m), s.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", a, !0), c.addEventListener("mouseup", u, !0), c.addEventListener("touchstart", a, !0), c.addEventListener("touchend", p, !0), () => {
        c.removeEventListener("mousedown", a, !0), c.removeEventListener("mouseup", u, !0), c.removeEventListener("touchstart", a, !0), c.removeEventListener("touchend", p, !0);
      };
    }
  }, [
    t,
    n
  ]);
}
function Et(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !F(r.documentElement, e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const Rn = /* @__PURE__ */ C.createContext(null), Sr = "react-aria-focus-scope-restore";
let X = null;
function gs(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, i = D(null), a = D(null), l = D([]), { parentNode: s } = ie(Rn) || {}, d = le(() => new Nr({
    scopeRef: l
  }), [
    l
  ]);
  G(() => {
    let p = s || oe.root;
    if (oe.getTreeNode(p.scopeRef) && X && !At(X, p.scopeRef)) {
      let m = oe.getTreeNode(X);
      m && (p = m);
    }
    p.addChild(d), oe.addNode(d);
  }, [
    d,
    s
  ]), G(() => {
    let p = oe.getTreeNode(l);
    p && (p.contain = !!r);
  }, [
    r
  ]), G(() => {
    var p;
    let m = (p = i.current) === null || p === void 0 ? void 0 : p.nextSibling, h = [], v = (g) => g.stopPropagation();
    for (; m && m !== a.current; )
      h.push(m), m.addEventListener(Sr, v), m = m.nextSibling;
    return l.current = h, () => {
      for (let g of h) g.removeEventListener(Sr, v);
    };
  }, [
    t
  ]), ws(l, n, r), ys(l, r), Ps(l, n, r), Es(l, o), Y(() => {
    const p = ve(H(l.current ? l.current[0] : void 0));
    let m = null;
    if (ye(p, l.current)) {
      for (let h of oe.traverse()) h.scopeRef && ye(p, h.scopeRef.current) && (m = h);
      m === oe.getTreeNode(l) && (X = m.scopeRef);
    }
  }, [
    l
  ]), G(() => () => {
    var p, m, h;
    let v = (h = (m = oe.getTreeNode(l)) === null || m === void 0 || (p = m.parent) === null || p === void 0 ? void 0 : p.scopeRef) !== null && h !== void 0 ? h : null;
    (l === X || At(l, X)) && (!v || oe.getTreeNode(v)) && (X = v), oe.removeTreeNode(l);
  }, [
    l
  ]);
  let c = le(() => hs(l), []), u = le(() => ({
    focusManager: c,
    parentNode: d
  }), [
    d,
    c
  ]);
  return /* @__PURE__ */ C.createElement(Rn.Provider, {
    value: u
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
function hs(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: i, accept: a } = t;
      var l;
      let s = n || ve(H((l = r[0]) !== null && l !== void 0 ? l : void 0)), d = r[0].previousElementSibling, c = ze(r), u = Ae(c, {
        tabbable: o,
        accept: a
      }, r);
      u.currentNode = ye(s, r) ? s : d;
      let p = u.nextNode();
      return !p && i && (u.currentNode = d, p = u.nextNode()), p && Le(p, !0), p;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: i, accept: a } = t;
      var l;
      let s = n || ve(H((l = r[0]) !== null && l !== void 0 ? l : void 0)), d = r[r.length - 1].nextElementSibling, c = ze(r), u = Ae(c, {
        tabbable: o,
        accept: a
      }, r);
      u.currentNode = ye(s, r) ? s : d;
      let p = u.previousNode();
      return !p && i && (u.currentNode = d, p = u.previousNode()), p && Le(p, !0), p;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, i = ze(r), a = Ae(i, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[0].previousElementSibling;
      let l = a.nextNode();
      return l && Le(l, !0), l;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, i = ze(r), a = Ae(i, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[r.length - 1].nextElementSibling;
      let l = a.previousNode();
      return l && Le(l, !0), l;
    }
  };
}
function ze(e) {
  return e[0].parentElement;
}
function ot(e) {
  let t = oe.getTreeNode(X);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function $s(e) {
  if (e.checked) return !0;
  let t = [];
  if (!e.form) t = [
    ...H(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)
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
function ys(e, t) {
  let r = D(void 0), n = D(void 0);
  G(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const i = H(o ? o[0] : void 0);
    let a = (d) => {
      if (d.key !== "Tab" || d.altKey || d.ctrlKey || d.metaKey || !ot(e) || d.isComposing) return;
      let c = ve(i), u = e.current;
      if (!u || !ye(c, u)) return;
      let p = ze(u), m = Ae(p, {
        tabbable: !0
      }, u);
      if (!c) return;
      m.currentNode = c;
      let h = d.shiftKey ? m.previousNode() : m.nextNode();
      h || (m.currentNode = d.shiftKey ? u[u.length - 1].nextElementSibling : u[0].previousElementSibling, h = d.shiftKey ? m.previousNode() : m.nextNode()), d.preventDefault(), h && Le(h, !0);
    }, l = (d) => {
      (!X || At(X, e)) && ye(B(d), e.current) ? (X = e, r.current = B(d)) : ot(e) && !Oe(B(d), e) ? r.current ? r.current.focus() : X && X.current && kr(X.current) : ot(e) && (r.current = B(d));
    }, s = (d) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let c = ko(), u = (c === "virtual" || c === null) && Or() && oo(), p = ve(i);
        if (!u && p && ot(e) && !Oe(p, e)) {
          X = e;
          let h = B(d);
          if (h && h.isConnected) {
            var m;
            r.current = h, (m = r.current) === null || m === void 0 || m.focus();
          } else X.current && kr(X.current);
        }
      });
    };
    return i.addEventListener("keydown", a, !1), i.addEventListener("focusin", l, !1), o == null || o.forEach((d) => d.addEventListener("focusin", l, !1)), o == null || o.forEach((d) => d.addEventListener("focusout", s, !1)), () => {
      i.removeEventListener("keydown", a, !1), i.removeEventListener("focusin", l, !1), o == null || o.forEach((d) => d.removeEventListener("focusin", l, !1)), o == null || o.forEach((d) => d.removeEventListener("focusout", s, !1));
    };
  }, [
    e,
    t
  ]), G(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function Lo(e) {
  return Oe(e);
}
function ye(e, t) {
  return !e || !t ? !1 : t.some((r) => F(r, e));
}
function Oe(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of oe.traverse(oe.getTreeNode(t)))
    if (r && ye(e, r.current)) return !0;
  return !1;
}
function xs(e) {
  return Oe(e, X);
}
function At(e, t) {
  var r;
  let n = (r = oe.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function Le(e, t = !1) {
  if (e != null && !t) try {
    ct(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function Io(e, t = !0) {
  let r = e[0].previousElementSibling, n = ze(e), o = Ae(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let i = o.nextNode();
  return t && !i && (n = ze(e), o = Ae(n, {
    tabbable: !1
  }, e), o.currentNode = r, i = o.nextNode()), i;
}
function kr(e, t = !0) {
  Le(Io(e, t));
}
function Es(e, t) {
  const r = C.useRef(t);
  Y(() => {
    if (r.current) {
      X = e;
      const n = H(e.current ? e.current[0] : void 0);
      !ye(ve(n), X.current) && e.current && kr(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function ws(e, t, r) {
  G(() => {
    if (t || r) return;
    let n = e.current;
    const o = H(n ? n[0] : void 0);
    let i = (a) => {
      let l = B(a);
      ye(l, e.current) ? X = e : Lo(l) || (X = null);
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
function Dn(e) {
  let t = oe.getTreeNode(X);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Ps(e, t, r) {
  const n = D(typeof document < "u" ? ve(H(e.current ? e.current[0] : void 0)) : null);
  G(() => {
    let o = e.current;
    const i = H(o ? o[0] : void 0);
    if (!t || r) return;
    let a = () => {
      (!X || At(X, e)) && ye(ve(i), e.current) && (X = e);
    };
    return i.addEventListener("focusin", a, !1), o == null || o.forEach((l) => l.addEventListener("focusin", a, !1)), () => {
      i.removeEventListener("focusin", a, !1), o == null || o.forEach((l) => l.removeEventListener("focusin", a, !1));
    };
  }, [
    e,
    r
  ]), G(() => {
    const o = H(e.current ? e.current[0] : void 0);
    if (!t) return;
    let i = (a) => {
      if (a.key !== "Tab" || a.altKey || a.ctrlKey || a.metaKey || !ot(e) || a.isComposing) return;
      let l = o.activeElement;
      if (!Oe(l, e) || !Dn(e)) return;
      let s = oe.getTreeNode(e);
      if (!s) return;
      let d = s.nodeToRestore, c = Ae(o.body, {
        tabbable: !0
      });
      c.currentNode = l;
      let u = a.shiftKey ? c.previousNode() : c.nextNode();
      if ((!d || !d.isConnected || d === o.body) && (d = void 0, s.nodeToRestore = void 0), (!u || !Oe(u, e)) && d) {
        c.currentNode = d;
        do
          u = a.shiftKey ? c.previousNode() : c.nextNode();
        while (Oe(u, e));
        a.preventDefault(), a.stopPropagation(), u ? Le(u, !0) : Lo(d) ? Le(d, !0) : l.blur();
      }
    };
    return r || o.addEventListener("keydown", i, !0), () => {
      r || o.removeEventListener("keydown", i, !0);
    };
  }, [
    e,
    t,
    r
  ]), G(() => {
    const o = H(e.current ? e.current[0] : void 0);
    if (!t) return;
    let i = oe.getTreeNode(e);
    if (i) {
      var a;
      return i.nodeToRestore = (a = n.current) !== null && a !== void 0 ? a : void 0, () => {
        let l = oe.getTreeNode(e);
        if (!l) return;
        let s = l.nodeToRestore, d = ve(o);
        if (t && s && (d && Oe(d, e) || d === o.body && Dn(e))) {
          let c = oe.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let u = c.getTreeNode(e);
              for (; u; ) {
                if (u.nodeToRestore && u.nodeToRestore.isConnected) {
                  Fn(u.nodeToRestore);
                  return;
                }
                u = u.parent;
              }
              for (u = c.getTreeNode(e); u; ) {
                if (u.scopeRef && u.scopeRef.current && oe.getTreeNode(u.scopeRef)) {
                  let p = Io(u.scopeRef.current, !0);
                  Fn(p);
                  return;
                }
                u = u.parent;
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
function Fn(e) {
  e.dispatchEvent(new CustomEvent(Sr, {
    bubbles: !0,
    cancelable: !0
  })) && Le(e);
}
function Ae(e, t, r) {
  let n = t != null && t.tabbable ? hl : uo, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, i = H(o), a = Ya(i, e || i, NodeFilter.SHOW_ELEMENT, {
    acceptNode(l) {
      return F(t == null ? void 0 : t.from, l) || t != null && t.tabbable && l.tagName === "INPUT" && l.getAttribute("type") === "radio" && (!$s(l) || a.currentNode.tagName === "INPUT" && a.currentNode.type === "radio" && a.currentNode.name === l.name) ? NodeFilter.FILTER_REJECT : n(l) && (!r || ye(l, r)) && (!(t != null && t.accept) || t.accept(l)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
class qr {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let o = this.fastMap.get(r ?? null);
    if (!o) return;
    let i = new Nr({
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
    let r = new qr();
    var n;
    for (let o of this.traverse()) r.addTreeNode(o.scopeRef, (n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, o.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Nr({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Nr {
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
let oe = new qr();
function vt(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = D({
    isFocused: !1,
    isFocusVisible: t || Tr()
  }), [i, a] = q(!1), [l, s] = q(() => o.current.isFocused && o.current.isFocusVisible), d = z(() => s(o.current.isFocused && o.current.isFocusVisible), []), c = z((m) => {
    o.current.isFocused = m, o.current.isFocusVisible = Tr(), a(m), d();
  }, [
    d
  ]);
  ds((m) => {
    o.current.isFocusVisible = m, d();
  }, [
    r,
    i
  ], {
    enabled: i,
    isTextInput: r
  });
  let { focusProps: u } = No({
    isDisabled: n,
    onFocusChange: c
  }), { focusWithinProps: p } = jr({
    isDisabled: !n,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: n ? p : u
  };
}
const Se = [];
function Ts(e, t) {
  let { onClose: r, shouldCloseOnBlur: n, isOpen: o, isDismissable: i = !1, isKeyboardDismissDisabled: a = !1, shouldCloseOnInteractOutside: l } = e, s = D(void 0);
  Y(() => {
    if (o && !Se.includes(t))
      return Se.push(t), () => {
        let v = Se.indexOf(t);
        v >= 0 && Se.splice(v, 1);
      };
  }, [
    o,
    t
  ]);
  let d = () => {
    Se[Se.length - 1] === t && r && r();
  }, c = (v) => {
    const g = Se[Se.length - 1];
    s.current = g, (!l || l(v.target)) && g === t && (v.stopPropagation(), v.preventDefault());
  }, u = (v) => {
    (!l || l(v.target)) && (Se[Se.length - 1] === t && (v.stopPropagation(), v.preventDefault()), s.current === t && d()), s.current = void 0;
  }, p = (v) => {
    v.key === "Escape" && !a && !v.nativeEvent.isComposing && (v.stopPropagation(), v.preventDefault(), d());
  };
  ms({
    ref: t,
    onInteractOutside: i && o ? u : void 0,
    onInteractOutsideStart: c
  });
  let { focusWithinProps: m } = jr({
    isDisabled: !n,
    onBlurWithin: (v) => {
      !v.relatedTarget || xs(v.relatedTarget) || (!l || l(v.relatedTarget)) && (r == null || r());
    }
  }), h = (v) => {
    v.target === v.currentTarget && v.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: p,
      ...m
    },
    underlayProps: {
      onPointerDown: h
    }
  };
}
function Cs(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  Y(() => {
    r && r.current && mo.set(r.current, t.close);
  });
  let i;
  n === "menu" ? i = !0 : n === "listbox" && (i = "listbox");
  let a = _e();
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
const lt = typeof document < "u" && window.visualViewport;
let wt = 0, ir;
function Ss(e = {}) {
  let { isDisabled: t } = e;
  G(() => {
    if (!t)
      return wt++, wt === 1 && (Kt() ? ir = Ns() : ir = ks()), () => {
        wt--, wt === 0 && ir();
      };
  }, [
    t
  ]);
}
function ks() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return ut(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? ar(document.documentElement, "scrollbarGutter", "stable") : ar(document.documentElement, "paddingRight", `${e}px`)), ar(document.documentElement, "overflow", "hidden"));
}
function Ns() {
  let e, t = !1, r = (s) => {
    let d = s.target;
    e = pr(d) ? d : lo(d, !0), t = !1;
    let c = d.ownerDocument.defaultView.getSelection();
    c && !c.isCollapsed && c.containsNode(d, !0) && (t = !0), s.composedPath().some((u) => u instanceof HTMLInputElement && u.type === "range") && (t = !0), "selectionStart" in d && "selectionEnd" in d && d.selectionStart < d.selectionEnd && d.ownerDocument.activeElement === d && (t = !0);
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
    if (c && er(c))
      c.focus({
        preventScroll: !0
      }), On(c, er(d));
    else if (!c) {
      var u;
      let p = (u = d.parentElement) === null || u === void 0 ? void 0 : u.closest("[tabindex]");
      p == null || p.focus({
        preventScroll: !0
      });
    }
  }, a = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function(s) {
    let d = document.activeElement != null && er(document.activeElement);
    a.call(this, {
      ...s,
      preventScroll: !0
    }), (!s || !s.preventScroll) && On(this, d);
  };
  let l = ut(lr(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), lr(document, "touchmove", o, {
    passive: !1,
    capture: !0
  }), lr(document, "blur", i, !0));
  return () => {
    l(), n.remove(), HTMLElement.prototype.focus = a;
  };
}
function ar(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function lr(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function On(e, t) {
  t || !lt ? An(e) : lt.addEventListener("resize", () => An(e), {
    once: !0
  });
}
function An(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let n = lo(r);
    if (n !== document.documentElement && n !== document.body && n !== r) {
      let o = n.getBoundingClientRect(), i = r.getBoundingClientRect();
      if (i.top < o.top || i.bottom > o.top + r.clientHeight) {
        let a = o.bottom;
        lt && (a = Math.min(a, lt.offsetTop + lt.height));
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
const Ls = /* @__PURE__ */ W({});
function Is() {
  var e;
  return (e = ie(Ls)) !== null && e !== void 0 ? e : {};
}
var Mo = {};
Mo = {
  dismiss: "تجاهل"
};
var Ro = {};
Ro = {
  dismiss: "Отхвърляне"
};
var Do = {};
Do = {
  dismiss: "Odstranit"
};
var Fo = {};
Fo = {
  dismiss: "Luk"
};
var Oo = {};
Oo = {
  dismiss: "Schließen"
};
var Ao = {};
Ao = {
  dismiss: "Απόρριψη"
};
var _o = {};
_o = {
  dismiss: "Dismiss"
};
var Vo = {};
Vo = {
  dismiss: "Descartar"
};
var Ho = {};
Ho = {
  dismiss: "Lõpeta"
};
var zo = {};
zo = {
  dismiss: "Hylkää"
};
var Bo = {};
Bo = {
  dismiss: "Rejeter"
};
var Ko = {};
Ko = {
  dismiss: "התעלם"
};
var Go = {};
Go = {
  dismiss: "Odbaci"
};
var Wo = {};
Wo = {
  dismiss: "Elutasítás"
};
var Uo = {};
Uo = {
  dismiss: "Ignora"
};
var jo = {};
jo = {
  dismiss: "閉じる"
};
var qo = {};
qo = {
  dismiss: "무시"
};
var Yo = {};
Yo = {
  dismiss: "Atmesti"
};
var Xo = {};
Xo = {
  dismiss: "Nerādīt"
};
var Zo = {};
Zo = {
  dismiss: "Lukk"
};
var Jo = {};
Jo = {
  dismiss: "Negeren"
};
var Qo = {};
Qo = {
  dismiss: "Zignoruj"
};
var ei = {};
ei = {
  dismiss: "Descartar"
};
var ti = {};
ti = {
  dismiss: "Dispensar"
};
var ri = {};
ri = {
  dismiss: "Revocare"
};
var ni = {};
ni = {
  dismiss: "Пропустить"
};
var oi = {};
oi = {
  dismiss: "Zrušiť"
};
var ii = {};
ii = {
  dismiss: "Opusti"
};
var ai = {};
ai = {
  dismiss: "Odbaci"
};
var li = {};
li = {
  dismiss: "Avvisa"
};
var si = {};
si = {
  dismiss: "Kapat"
};
var di = {};
di = {
  dismiss: "Скасувати"
};
var ci = {};
ci = {
  dismiss: "取消"
};
var ui = {};
ui = {
  dismiss: "關閉"
};
var fi = {};
fi = {
  "ar-AE": Mo,
  "bg-BG": Ro,
  "cs-CZ": Do,
  "da-DK": Fo,
  "de-DE": Oo,
  "el-GR": Ao,
  "en-US": _o,
  "es-ES": Vo,
  "et-EE": Ho,
  "fi-FI": zo,
  "fr-FR": Bo,
  "he-IL": Ko,
  "hr-HR": Go,
  "hu-HU": Wo,
  "it-IT": Uo,
  "ja-JP": jo,
  "ko-KR": qo,
  "lt-LT": Yo,
  "lv-LV": Xo,
  "nb-NO": Zo,
  "nl-NL": Jo,
  "pl-PL": Qo,
  "pt-BR": ei,
  "pt-PT": ti,
  "ro-RO": ri,
  "ru-RU": ni,
  "sk-SK": oi,
  "sl-SI": ii,
  "sr-SP": ai,
  "sv-SE": li,
  "tr-TR": si,
  "uk-UA": di,
  "zh-CN": ci,
  "zh-TW": ui
};
const _n = {
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
function Ms(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = q(!1), { focusWithinProps: i } = jr({
    isDisabled: !r,
    onFocusWithinChange: (l) => o(l)
  }), a = le(() => n ? t : t ? {
    ..._n,
    ...t
  } : _n, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: a
    }
  };
}
function vi(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...i } = e, { visuallyHiddenProps: a } = Ms(e);
  return /* @__PURE__ */ C.createElement(r, Q(i, a), t);
}
function Rs(e) {
  return e && e.__esModule ? e.default : e;
}
function Vn(e) {
  let { onDismiss: t, ...r } = e, n = $o(Rs(fi), "@react-aria/overlays"), o = ao(r, n.format("dismiss")), i = () => {
    t && t();
  };
  return /* @__PURE__ */ C.createElement(vi, null, /* @__PURE__ */ C.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const Ds = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
let et = /* @__PURE__ */ new WeakMap(), ue = [];
function Fs(e, t) {
  let r = fe(e == null ? void 0 : e[0]), n = t instanceof r.Element ? {
    root: t
  } : t;
  var o;
  let i = (o = n == null ? void 0 : n.root) !== null && o !== void 0 ? o : document.body, a = (n == null ? void 0 : n.shouldUseInert) && Ds, l = new Set(e), s = /* @__PURE__ */ new Set(), d = (v) => a && v instanceof r.HTMLElement ? v.inert : v.getAttribute("aria-hidden") === "true", c = (v, g) => {
    a && v instanceof r.HTMLElement ? v.inert = g : g ? v.setAttribute("aria-hidden", "true") : (v.removeAttribute("aria-hidden"), v instanceof r.HTMLElement && (v.inert = !1));
  }, u = (v) => {
    for (let w of v.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) l.add(w);
    let g = (w) => {
      if (s.has(w) || l.has(w) || w.parentElement && s.has(w.parentElement) && w.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (let E of l)
        if (F(w, E)) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, $ = document.createTreeWalker(v, NodeFilter.SHOW_ELEMENT, {
      acceptNode: g
    }), y = g(v);
    if (y === NodeFilter.FILTER_ACCEPT && p(v), y !== NodeFilter.FILTER_REJECT) {
      let w = $.nextNode();
      for (; w != null; )
        p(w), w = $.nextNode();
    }
  }, p = (v) => {
    var g;
    let $ = (g = et.get(v)) !== null && g !== void 0 ? g : 0;
    d(v) && $ === 0 || ($ === 0 && c(v, !0), s.add(v), et.set(v, $ + 1));
  };
  ue.length && ue[ue.length - 1].disconnect(), u(i);
  let m = new MutationObserver((v) => {
    for (let g of v)
      if (g.type === "childList" && g.target.isConnected && ![
        ...l,
        ...s
      ].some(($) => F($, g.target)))
        for (let $ of g.addedNodes)
          ($ instanceof HTMLElement || $ instanceof SVGElement) && ($.dataset.liveAnnouncer === "true" || $.dataset.reactAriaTopLayer === "true") ? l.add($) : $ instanceof Element && u($);
  });
  m.observe(i, {
    childList: !0,
    subtree: !0
  });
  let h = {
    visibleNodes: l,
    hiddenNodes: s,
    observe() {
      m.observe(i, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      m.disconnect();
    }
  };
  return ue.push(h), () => {
    m.disconnect();
    for (let v of s) {
      let g = et.get(v);
      g != null && (g === 1 ? (c(v, !1), et.delete(v)) : et.set(v, g - 1));
    }
    h === ue[ue.length - 1] ? (ue.pop(), ue.length && ue[ue.length - 1].observe()) : ue.splice(ue.indexOf(h), 1);
  };
}
function Os(e) {
  let t = ue[ue.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
function As(e, t) {
  let { triggerRef: r, popoverRef: n, groupRef: o, isNonModal: i, isKeyboardDismissDisabled: a, shouldCloseOnInteractOutside: l, ...s } = e, d = s.trigger === "SubmenuTrigger", { overlayProps: c, underlayProps: u } = Ts({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !i || d,
    isKeyboardDismissDisabled: a,
    shouldCloseOnInteractOutside: l
  }, o ?? n), { overlayProps: p, arrowProps: m, placement: h, triggerAnchorPoint: v } = Wl({
    ...s,
    targetRef: r,
    overlayRef: n,
    isOpen: t.isOpen,
    onClose: i && !d ? t.close : null
  });
  return Ss({
    isDisabled: i || !t.isOpen
  }), Y(() => {
    if (t.isOpen && n.current) {
      var g, $;
      return i ? Os((g = o == null ? void 0 : o.current) !== null && g !== void 0 ? g : n.current) : Fs([
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
    popoverProps: Q(c, p),
    arrowProps: m,
    underlayProps: u,
    placement: h,
    triggerAnchorPoint: v
  };
}
const bi = /* @__PURE__ */ C.createContext(null);
function Hn(e) {
  let t = Dr(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, i] = q(!1), a = le(() => ({
    contain: o,
    setContain: i
  }), [
    o,
    i
  ]), { getContainer: l } = Is();
  if (!e.portalContainer && l && (r = l()), !r) return null;
  let s = e.children;
  return e.disableFocusManagement || (s = /* @__PURE__ */ C.createElement(gs, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, s)), s = /* @__PURE__ */ C.createElement(bi.Provider, {
    value: a
  }, /* @__PURE__ */ C.createElement(bs, null, s)), /* @__PURE__ */ La.createPortal(s, r);
}
function _s() {
  let e = ie(bi), t = e == null ? void 0 : e.setContain;
  G(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function Vs(e) {
  let { id: t, label: r, "aria-labelledby": n, "aria-label": o, labelElementType: i = "label" } = e;
  t = _e(t);
  let a = _e(), l = {};
  r ? (n = n ? `${a} ${n}` : a, l = {
    id: a,
    htmlFor: i === "label" ? t : void 0
  }) : !n && !o && process.env.NODE_ENV !== "production" && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let s = ao({
    id: t,
    "aria-label": o,
    "aria-labelledby": n
  });
  return {
    labelProps: l,
    fieldProps: s
  };
}
function Hs(e) {
  let { description: t, errorMessage: r, isInvalid: n, validationState: o } = e, { labelProps: i, fieldProps: a } = Vs(e), l = fr([
    !!t,
    !!r,
    n,
    o
  ]), s = fr([
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
const pi = {
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
}, mi = {
  ...pi,
  customError: !0,
  valid: !1
}, je = {
  isInvalid: !1,
  validationDetails: pi,
  validationErrors: []
}, zs = W({}), _t = "__formValidationState" + Date.now();
function Yr(e) {
  if (e[_t]) {
    let { realtimeValidation: t, displayValidation: r, updateValidation: n, resetValidation: o, commitValidation: i } = e[_t];
    return {
      realtimeValidation: t,
      displayValidation: r,
      updateValidation: n,
      resetValidation: o,
      commitValidation: i
    };
  }
  return Bs(e);
}
function Bs(e) {
  let { isInvalid: t, validationState: r, name: n, value: o, builtinValidation: i, validate: a, validationBehavior: l = "aria" } = e;
  r && (t || (t = r === "invalid"));
  let s = t !== void 0 ? {
    isInvalid: t,
    validationErrors: [],
    validationDetails: mi
  } : null, d = le(() => {
    if (!a || o == null) return null;
    let V = Ks(a, o);
    return zn(V);
  }, [
    a,
    o
  ]);
  i != null && i.validationDetails.valid && (i = void 0);
  let c = ie(zs), u = le(() => n ? Array.isArray(n) ? n.flatMap((V) => Lr(c[V])) : Lr(c[n]) : [], [
    c,
    n
  ]), [p, m] = q(c), [h, v] = q(!1);
  c !== p && (m(c), v(!1));
  let g = le(() => zn(h ? [] : u), [
    h,
    u
  ]), $ = D(je), [y, w] = q(je), E = D(je), I = () => {
    if (!M) return;
    R(!1);
    let V = d || i || $.current;
    sr(V, E.current) || (E.current = V, w(V));
  }, [M, R] = q(!1);
  return Y(I), {
    realtimeValidation: s || g || d || i || je,
    displayValidation: l === "native" ? s || g || y : s || g || d || i || y,
    updateValidation(V) {
      l === "aria" && !sr(y, V) ? w(V) : $.current = V;
    },
    resetValidation() {
      let V = je;
      sr(V, E.current) || (E.current = V, w(V)), l === "native" && R(!1), v(!0);
    },
    commitValidation() {
      l === "native" && R(!0), v(!0);
    }
  };
}
function Lr(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function Ks(e, t) {
  if (typeof e == "function") {
    let r = e(t);
    if (r && typeof r != "boolean") return Lr(r);
  }
  return [];
}
function zn(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: mi
  } : null;
}
function sr(e, t) {
  return e === t ? !0 : !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((r, n) => r === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([r, n]) => t.validationDetails[r] === n);
}
function gi(e, t, r) {
  let { validationBehavior: n, focus: o } = e;
  G(() => {
    if (n === "native" && (r != null && r.current) && !r.current.disabled) {
      let d = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(d), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(Ws(r.current));
    }
  });
  let i = D(!1), a = we(() => {
    i.current || t.resetValidation();
  }), l = we((d) => {
    var c;
    t.displayValidation.isInvalid || t.commitValidation();
    let u = r == null || (c = r.current) === null || c === void 0 ? void 0 : c.form;
    if (!d.defaultPrevented && r && u && Us(u) === r.current) {
      var p;
      o ? o() : (p = r.current) === null || p === void 0 || p.focus(), as("keyboard");
    }
    d.preventDefault();
  }), s = we(() => {
    t.commitValidation();
  });
  Y(() => {
    let d = r == null ? void 0 : r.current;
    if (!d) return;
    let c = d.form, u = c == null ? void 0 : c.reset;
    return c && (c.reset = () => {
      i.current = !window.event || window.event.type === "message" && window.event.target instanceof MessagePort, u == null || u.call(c), i.current = !1;
    }), d.addEventListener("invalid", l), d.addEventListener("change", s), c == null || c.addEventListener("reset", a), () => {
      d.removeEventListener("invalid", l), d.removeEventListener("change", s), c == null || c.removeEventListener("reset", a), c && (c.reset = u);
    };
  }, [
    r,
    n
  ]);
}
function Gs(e) {
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
function Ws(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: Gs(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function Us(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let r = e.elements[t];
    if (!r.validity.valid) return r;
  }
  return null;
}
function hi(e, t) {
  let { inputElementType: r = "input", isDisabled: n = !1, isRequired: o = !1, isReadOnly: i = !1, type: a = "text", validationBehavior: l = "aria" } = e, [s, d] = Gt(e.value, e.defaultValue || "", e.onChange), { focusableProps: c } = Ur(e, t), u = Yr({
    ...e,
    value: s
  }), { isInvalid: p, validationErrors: m, validationDetails: h } = u.displayValidation, { labelProps: v, fieldProps: g, descriptionProps: $, errorMessageProps: y } = Hs({
    ...e,
    isInvalid: p,
    errorMessage: e.errorMessage || m
  }), w = Pe(e, {
    labelable: !0
  });
  const E = {
    type: a,
    pattern: e.pattern
  };
  let [I] = q(s);
  var M;
  return so(t, (M = e.defaultValue) !== null && M !== void 0 ? M : I, d), gi(e, u, t), {
    labelProps: v,
    inputProps: Q(w, r === "input" ? E : void 0, {
      disabled: n,
      readOnly: i,
      required: o && l === "native",
      "aria-required": o && l === "aria" || void 0,
      "aria-invalid": p || void 0,
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
      ...g
    }),
    descriptionProps: $,
    errorMessageProps: y,
    isInvalid: p,
    validationErrors: m,
    validationDetails: h
  };
}
var $i = {};
$i = {
  "Clear search": "مسح البحث"
};
var yi = {};
yi = {
  "Clear search": "Изчистване на търсене"
};
var xi = {};
xi = {
  "Clear search": "Vymazat hledání"
};
var Ei = {};
Ei = {
  "Clear search": "Ryd søgning"
};
var wi = {};
wi = {
  "Clear search": "Suche zurücksetzen"
};
var Pi = {};
Pi = {
  "Clear search": "Απαλοιφή αναζήτησης"
};
var Ti = {};
Ti = {
  "Clear search": "Clear search"
};
var Ci = {};
Ci = {
  "Clear search": "Borrar búsqueda"
};
var Si = {};
Si = {
  "Clear search": "Tühjenda otsing"
};
var ki = {};
ki = {
  "Clear search": "Tyhjennä haku"
};
var Ni = {};
Ni = {
  "Clear search": "Effacer la recherche"
};
var Li = {};
Li = {
  "Clear search": "נקה חיפוש"
};
var Ii = {};
Ii = {
  "Clear search": "Obriši pretragu"
};
var Mi = {};
Mi = {
  "Clear search": "Keresés törlése"
};
var Ri = {};
Ri = {
  "Clear search": "Cancella ricerca"
};
var Di = {};
Di = {
  "Clear search": "検索をクリア"
};
var Fi = {};
Fi = {
  "Clear search": "검색 지우기"
};
var Oi = {};
Oi = {
  "Clear search": "Išvalyti iešką"
};
var Ai = {};
Ai = {
  "Clear search": "Notīrīt meklēšanu"
};
var _i = {};
_i = {
  "Clear search": "Tøm søk"
};
var Vi = {};
Vi = {
  "Clear search": "Zoekactie wissen"
};
var Hi = {};
Hi = {
  "Clear search": "Wyczyść zawartość wyszukiwania"
};
var zi = {};
zi = {
  "Clear search": "Limpar pesquisa"
};
var Bi = {};
Bi = {
  "Clear search": "Limpar pesquisa"
};
var Ki = {};
Ki = {
  "Clear search": "Ştergeţi căutarea"
};
var Gi = {};
Gi = {
  "Clear search": "Очистить поиск"
};
var Wi = {};
Wi = {
  "Clear search": "Vymazať vyhľadávanie"
};
var Ui = {};
Ui = {
  "Clear search": "Počisti iskanje"
};
var ji = {};
ji = {
  "Clear search": "Obriši pretragu"
};
var qi = {};
qi = {
  "Clear search": "Rensa sökning"
};
var Yi = {};
Yi = {
  "Clear search": "Aramayı temizle"
};
var Xi = {};
Xi = {
  "Clear search": "Очистити пошук"
};
var Zi = {};
Zi = {
  "Clear search": "清除搜索"
};
var Ji = {};
Ji = {
  "Clear search": "清除搜尋條件"
};
var Qi = {};
Qi = {
  "ar-AE": $i,
  "bg-BG": yi,
  "cs-CZ": xi,
  "da-DK": Ei,
  "de-DE": wi,
  "el-GR": Pi,
  "en-US": Ti,
  "es-ES": Ci,
  "et-EE": Si,
  "fi-FI": ki,
  "fr-FR": Ni,
  "he-IL": Li,
  "hr-HR": Ii,
  "hu-HU": Mi,
  "it-IT": Ri,
  "ja-JP": Di,
  "ko-KR": Fi,
  "lt-LT": Oi,
  "lv-LV": Ai,
  "nb-NO": _i,
  "nl-NL": Vi,
  "pl-PL": Hi,
  "pt-BR": zi,
  "pt-PT": Bi,
  "ro-RO": Ki,
  "ru-RU": Gi,
  "sk-SK": Wi,
  "sl-SI": Ui,
  "sr-SP": ji,
  "sv-SE": qi,
  "tr-TR": Yi,
  "uk-UA": Xi,
  "zh-CN": Zi,
  "zh-TW": Ji
};
function js(e) {
  return e && e.__esModule ? e.default : e;
}
function qs(e, t, r) {
  let n = $o(js(Qi), "@react-aria/searchfield"), { isDisabled: o, isReadOnly: i, onSubmit: a, onClear: l, type: s = "search" } = e, d = ($) => {
    const y = $.key;
    y === "Enter" && (o || i) && $.preventDefault(), !(o || i) && (y === "Enter" && a && ($.preventDefault(), a(t.value)), y === "Escape" && (t.value === "" && (!r.current || r.current.value === "") ? $.continuePropagation() : ($.preventDefault(), t.setValue(""), l && l())));
  }, c = () => {
    t.setValue(""), l && l();
  }, u = () => {
    var $;
    ($ = r.current) === null || $ === void 0 || $.focus();
  }, { labelProps: p, inputProps: m, descriptionProps: h, errorMessageProps: v, ...g } = hi({
    ...e,
    value: t.value,
    onChange: t.setValue,
    onKeyDown: i ? e.onKeyDown : ut(d, e.onKeyDown),
    type: s
  }, r);
  return {
    labelProps: p,
    inputProps: {
      ...m,
      // already handled by useSearchFieldState
      defaultValue: void 0
    },
    clearButtonProps: {
      "aria-label": n.format("Clear search"),
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      isDisabled: o || i,
      onPress: c,
      onPressStart: u
    },
    descriptionProps: h,
    errorMessageProps: v,
    ...g
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
const ea = /* @__PURE__ */ W(!1);
function bt(e) {
  let t = (r, n) => ie(ea) ? null : e(r, n);
  return t.displayName = e.displayName || e.name, xe(t);
}
function Ys() {
  return ie(ea);
}
function Xs(e, t) {
  let { elementType: r = "button", isDisabled: n, onPress: o, onPressStart: i, onPressEnd: a, onPressUp: l, onPressChange: s, preventFocusOnPress: d, allowFocusWhenDisabled: c, onClick: u, href: p, target: m, rel: h, type: v = "button" } = e, g;
  r === "button" ? g = {
    type: v,
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
    href: r === "a" && !n ? p : void 0,
    target: r === "a" ? m : void 0,
    type: r === "input" ? v : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? h : void 0
  };
  let { pressProps: $, isPressed: y } = Dt({
    onPressStart: i,
    onPressEnd: a,
    onPressChange: s,
    onPress: o,
    onPressUp: l,
    onClick: u,
    isDisabled: n,
    preventFocusOnPress: d,
    ref: t
  }), { focusableProps: w } = Ur(e, t);
  c && (w.tabIndex = n ? -1 : w.tabIndex);
  let E = Q(w, $, Pe(e, {
    labelable: !0
  }));
  return {
    isPressed: y,
    buttonProps: Q(g, E, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
function Zs(e, t, r) {
  let { isDisabled: n = !1, isReadOnly: o = !1, value: i, name: a, form: l, children: s, "aria-label": d, "aria-labelledby": c, validationState: u = "valid", isInvalid: p, onPressStart: m, onPressEnd: h, onPressChange: v, onPress: g, onPressUp: $, onClick: y } = e, w = (j) => {
    j.stopPropagation(), t.setSelected(j.target.checked);
  }, E = s != null, I = d != null || c != null;
  !E && !I && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: M, isPressed: R } = Dt({
    onPressStart: m,
    onPressEnd: h,
    onPressChange: v,
    onPress: g,
    onPressUp: $,
    onClick: y,
    isDisabled: n
  }), { pressProps: x, isPressed: O } = Dt({
    onPressStart: m,
    onPressEnd: h,
    onPressChange: v,
    onPressUp: $,
    onClick: y,
    onPress(j) {
      var ee;
      g == null || g(j), t.toggle(), (ee = r.current) === null || ee === void 0 || ee.focus();
    },
    isDisabled: n || o
  }), { focusableProps: V } = Ur(e, r), re = Q(M, V), U = Pe(e, {
    labelable: !0
  });
  return so(r, t.defaultSelected, t.setSelected), {
    labelProps: Q(x, {
      onClick: (j) => j.preventDefault()
    }),
    inputProps: Q(U, {
      "aria-invalid": p || u === "invalid" || void 0,
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
    isPressed: R || O,
    isDisabled: n,
    isReadOnly: o,
    isInvalid: p || u === "invalid"
  };
}
function ta(e, t, r) {
  let n = Yr({
    ...e,
    value: t.isSelected
  }), { isInvalid: o, validationErrors: i, validationDetails: a } = n.displayValidation, { labelProps: l, inputProps: s, isSelected: d, isPressed: c, isDisabled: u, isReadOnly: p } = Zs({
    ...e,
    isInvalid: o
  }, t, r);
  gi(e, n, r);
  let { isIndeterminate: m, isRequired: h, validationBehavior: v = "aria" } = e;
  Y(() => {
    r.current && (r.current.indeterminate = !!m);
  });
  let { pressProps: g } = Dt({
    isDisabled: u || p,
    onPress() {
      let { [_t]: $ } = e, { commitValidation: y } = $ || n;
      y();
    }
  });
  return {
    labelProps: Q(l, g, le(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: ($) => $.preventDefault()
    }), [])),
    inputProps: {
      ...s,
      checked: d,
      "aria-required": h && v === "aria" || void 0,
      required: h && v === "native"
    },
    isSelected: d,
    isPressed: c,
    isDisabled: u,
    isReadOnly: p,
    isInvalid: o,
    validationErrors: i,
    validationDetails: a
  };
}
const Js = /* @__PURE__ */ new WeakMap();
function ra(e = {}) {
  let { isReadOnly: t } = e, [r, n] = Gt(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = q(r);
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
function Qs(e, t, r) {
  const n = ra({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange($) {
      $ ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange($);
    }
  });
  let { name: o, form: i, descriptionId: a, errorMessageId: l, validationBehavior: s } = Js.get(t);
  var d;
  s = (d = e.validationBehavior) !== null && d !== void 0 ? d : s;
  let { realtimeValidation: c } = Yr({
    ...e,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), u = D(je), p = () => {
    t.setInvalid(e.value, c.isInvalid ? c : u.current);
  };
  Y(p);
  let m = t.realtimeValidation.isInvalid ? t.realtimeValidation : c, h = s === "native" ? t.displayValidation : m;
  var v;
  let g = ta({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || o,
    form: e.form || i,
    isRequired: (v = e.isRequired) !== null && v !== void 0 ? v : t.isRequired,
    validationBehavior: s,
    [_t]: {
      realtimeValidation: m,
      displayValidation: h,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation($) {
        u.current = $, p();
      }
    }
  }, n, r);
  return {
    ...g,
    inputProps: {
      ...g.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? l : null,
        a
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
function ed(e, t) {
  let { role: r = "dialog" } = e, n = fr();
  n = e["aria-label"] ? void 0 : n;
  let o = D(!1);
  return Y(() => {
    if (t.current && !F(t.current, document.activeElement)) {
      ct(t.current);
      let i = setTimeout(() => {
        (document.activeElement === t.current || document.activeElement === document.body) && (o.current = !0, t.current && (t.current.blur(), ct(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(i);
      };
    }
  }, [
    t
  ]), _s(), {
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
const Xr = /* @__PURE__ */ W({}), td = /* @__PURE__ */ bt(function(t, r) {
  [t, r] = pe(t, r, Xr);
  let { elementType: n = "label", ...o } = t, i = Te[n];
  return /* @__PURE__ */ C.createElement(i, {
    className: "react-aria-Label",
    ...o,
    ref: r
  });
}), rd = /* @__PURE__ */ W(null), Zr = /* @__PURE__ */ W({}), na = /* @__PURE__ */ bt(function(t, r) {
  [t, r] = pe(t, r, Zr);
  let n = t, { isPending: o } = n, { buttonProps: i, isPressed: a } = Xs(t, r);
  i = nd(i, o);
  let { focusProps: l, isFocused: s, isFocusVisible: d } = vt(t), { hoverProps: c, isHovered: u } = ft({
    ...t,
    isDisabled: t.isDisabled || o
  }), p = {
    isHovered: u,
    isPressed: (n.isPressed || a) && !o,
    isFocused: s,
    isFocusVisible: d,
    isDisabled: t.isDisabled || !1,
    isPending: o ?? !1
  }, m = ke({
    ...t,
    values: p,
    defaultClassName: "react-aria-Button"
  }), h = _e(i.id), v = _e(), g = i["aria-labelledby"];
  o && (g ? g = `${g} ${v}` : i["aria-label"] && (g = `${h} ${v}`));
  let $ = D(o);
  Y(() => {
    let w = {
      "aria-labelledby": g || h
    };
    (!$.current && s && o || $.current && s && !o) && un(w, "assertive"), $.current = o;
  }, [
    o,
    s,
    g,
    h
  ]);
  let y = Pe(t, {
    global: !0
  });
  return delete y.onClick, /* @__PURE__ */ C.createElement(Te.button, {
    ...Q(y, m, i, l, c),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: i.type === "submit" && o ? "button" : i.type,
    id: h,
    ref: r,
    "aria-labelledby": g,
    slot: t.slot || void 0,
    "aria-disabled": o ? "true" : i["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-hovered": u || void 0,
    "data-focused": s || void 0,
    "data-pending": o || void 0,
    "data-focus-visible": d || void 0
  }, /* @__PURE__ */ C.createElement(rd.Provider, {
    value: {
      id: v
    }
  }, m.children));
});
function nd(e, t) {
  if (t) {
    for (const r in e) r.startsWith("on") && !(r.includes("Focus") || r.includes("Blur")) && (e[r] = void 0);
    e.href = void 0, e.target = void 0;
  }
  return e;
}
const Jr = /* @__PURE__ */ W({}), Yt = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = pe(t, r, Jr);
  let { elementType: n = "span", ...o } = t, i = Te[n];
  return /* @__PURE__ */ C.createElement(i, {
    className: "react-aria-Text",
    ...o,
    ref: r
  });
});
function oa(e) {
  let [t, r] = Gt(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = z(() => {
    r(!0);
  }, [
    r
  ]), o = z(() => {
    r(!1);
  }, [
    r
  ]), i = z(() => {
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
function od(e) {
  let t = oa(e), [r, n] = q(null), [o, i] = q([]), a = () => {
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
      i((u) => c > u.length ? u : [
        ...u.slice(0, c),
        d
      ]);
    },
    closeSubmenu: (d, c) => {
      i((u) => u[c] === d ? u.slice(0, c) : u);
    }
  };
}
function id(e) {
  let [t, r] = Gt(Bn(e.value), Bn(e.defaultValue) || "", e.onChange);
  return {
    value: t,
    setValue: r
  };
}
function Bn(e) {
  if (e != null)
    return e.toString();
}
const Xt = /* @__PURE__ */ W(null), ad = /* @__PURE__ */ xe(function(t, r) {
  let n = ie(Xt);
  return n != null && n.isInvalid ? /* @__PURE__ */ C.createElement(ld, {
    ...t,
    ref: r
  }) : null;
}), ld = /* @__PURE__ */ xe((e, t) => {
  let r = ie(Xt), n = Pe(e, {
    global: !0
  }), o = ke({
    ...e,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: r.validationErrors.length === 0 ? void 0 : r.validationErrors.join(" "),
    values: r
  });
  return o.children == null ? null : /* @__PURE__ */ C.createElement(Yt, {
    slot: "errorMessage",
    ...n,
    ...o,
    ref: t
  });
}), Qr = /* @__PURE__ */ W(null), sd = /* @__PURE__ */ W(null), dd = /* @__PURE__ */ xe(function(t, r) {
  let { inputRef: n = null, ...o } = t;
  [t, r] = pe(o, r, Ia);
  let { validationBehavior: i } = Ut(Qr) || {};
  var a, l;
  let s = (l = (a = t.validationBehavior) !== null && a !== void 0 ? a : i) !== null && l !== void 0 ? l : "native", d = ie(sd), c = _r(le(() => zt(n, t.inputRef !== void 0 ? t.inputRef : null), [
    n,
    t.inputRef
  ])), { labelProps: u, inputProps: p, isSelected: m, isDisabled: h, isReadOnly: v, isPressed: g, isInvalid: $ } = d ? Qs({
    ...It(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, d, c) : ta({
    ...It(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: s
  }, ra(t), c), { isFocused: y, isFocusVisible: w, focusProps: E } = vt(), I = h || v, { hoverProps: M, isHovered: R } = ft({
    ...t,
    isDisabled: I
  }), x = ke({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: m,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: g,
      isHovered: R,
      isFocused: y,
      isFocusVisible: w,
      isDisabled: h,
      isReadOnly: v,
      isInvalid: $,
      isRequired: t.isRequired || !1
    }
  }), O = Pe(t, {
    global: !0
  });
  return delete O.id, delete O.onClick, /* @__PURE__ */ C.createElement(Te.label, {
    ...Q(O, u, M, x),
    ref: r,
    slot: t.slot || void 0,
    "data-selected": m || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": g || void 0,
    "data-hovered": R || void 0,
    "data-focused": y || void 0,
    "data-focus-visible": w || void 0,
    "data-disabled": h || void 0,
    "data-readonly": v || void 0,
    "data-invalid": $ || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ C.createElement(vi, {
    elementType: "span"
  }, /* @__PURE__ */ C.createElement("input", {
    ...Q(p, E),
    ref: c
  })), x.children);
}), en = /* @__PURE__ */ W({}), ia = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = pe(t, r, en);
  let { isDisabled: n, isInvalid: o, isReadOnly: i, onHoverStart: a, onHoverChange: l, onHoverEnd: s, ...d } = t;
  n ?? (n = !!t["aria-disabled"] && t["aria-disabled"] !== "false"), o ?? (o = !!t["aria-invalid"] && t["aria-invalid"] !== "false");
  let { hoverProps: c, isHovered: u } = ft({
    onHoverStart: a,
    onHoverChange: l,
    onHoverEnd: s,
    isDisabled: n
  }), { isFocused: p, isFocusVisible: m, focusProps: h } = vt({
    within: !0
  }), v = ke({
    ...t,
    values: {
      isHovered: u,
      isFocusWithin: p,
      isFocusVisible: m,
      isDisabled: n,
      isInvalid: o
    },
    defaultClassName: "react-aria-Group"
  });
  var g, $;
  return /* @__PURE__ */ C.createElement(Te.div, {
    ...Q(d, h, c),
    ...v,
    ref: r,
    role: (g = t.role) !== null && g !== void 0 ? g : "group",
    slot: ($ = t.slot) !== null && $ !== void 0 ? $ : void 0,
    "data-focus-within": p || void 0,
    "data-hovered": u || void 0,
    "data-focus-visible": m || void 0,
    "data-disabled": n || void 0,
    "data-invalid": o || void 0,
    "data-readonly": i || void 0
  }, v.children);
}), tn = /* @__PURE__ */ W({});
let cd = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const aa = /* @__PURE__ */ bt(function(t, r) {
  [t, r] = pe(t, r, tn);
  let { hoverProps: n, isHovered: o } = ft({
    ...t,
    isDisabled: t.disabled
  }), { isFocused: i, isFocusVisible: a, focusProps: l } = vt({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), s = !!t["aria-invalid"] && t["aria-invalid"] !== "false", d = ke({
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
  return /* @__PURE__ */ C.createElement(Te.input, {
    ...Q(cd(t), l, n),
    ...d,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": s || void 0
  });
}), ud = /* @__PURE__ */ W({
  placement: "bottom"
}), la = /* @__PURE__ */ W(null), Kn = /* @__PURE__ */ W(null), fd = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = pe(t, r, la);
  let n = ie(rn), o = oa(t), i = t.isOpen != null || t.defaultOpen != null || !n ? o : n, a = fl(r, i.isOpen) || t.isExiting || !1, l = Ys(), { direction: s } = Kr();
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
  return i && !i.isOpen && !a ? null : /* @__PURE__ */ C.createElement(vd, {
    ...t,
    triggerRef: t.triggerRef,
    state: i,
    popoverRef: r,
    isExiting: a,
    dir: s
  });
});
function vd({ state: e, isExiting: t, UNSTABLE_portalContainer: r, clearContexts: n, ...o }) {
  let i = D(null), a = D(null), l = ie(Kn), s = l && o.trigger === "SubmenuTrigger";
  var d;
  let { popoverProps: c, underlayProps: u, arrowProps: p, placement: m, triggerAnchorPoint: h } = As({
    ...o,
    offset: (d = o.offset) !== null && d !== void 0 ? d : 8,
    arrowRef: i,
    // If this is a submenu/subdialog, use the root popover's container
    // to detect outside interaction and add aria-hidden.
    groupRef: s ? l : a
  }, e), v = o.popoverRef, g = ul(v, !!m) || o.isEntering || !1, $ = ke({
    ...o,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: o.trigger || null,
      placement: m,
      isEntering: g,
      isExiting: t
    }
  }), y = !o.isNonModal || o.trigger === "SubmenuTrigger", [w, E] = q(!1);
  G(() => {
    v.current && E(y && !v.current.querySelector("[role=dialog]"));
  }, [
    v,
    y
  ]), Y(() => {
    w && o.trigger !== "SubmenuTrigger" && v.current && !F(v.current, document.activeElement) && ct(v.current);
  }, [
    w,
    v,
    o.trigger
  ]);
  let I = le(() => {
    let O = $.children;
    if (n) for (let V of n) O = /* @__PURE__ */ C.createElement(V.Provider, {
      value: null
    }, O);
    return O;
  }, [
    $.children,
    n
  ]), M = {
    ...c.style,
    "--trigger-anchor-point": h ? `${h.x}px ${h.y}px` : void 0,
    ...$.style
  }, R = /* @__PURE__ */ C.createElement(Te.div, {
    ...Q(Pe(o, {
      global: !0
    }), c),
    ...$,
    role: w ? "dialog" : void 0,
    tabIndex: w ? -1 : void 0,
    "aria-label": o["aria-label"],
    "aria-labelledby": o["aria-labelledby"],
    ref: v,
    slot: o.slot || void 0,
    style: M,
    dir: o.dir,
    "data-trigger": o.trigger,
    "data-placement": m,
    "data-entering": g || void 0,
    "data-exiting": t || void 0
  }, !o.isNonModal && /* @__PURE__ */ C.createElement(Vn, {
    onDismiss: e.close
  }), /* @__PURE__ */ C.createElement(ud.Provider, {
    value: {
      ...p,
      placement: m,
      ref: i
    }
  }, I), /* @__PURE__ */ C.createElement(Vn, {
    onDismiss: e.close
  }));
  if (!s) return /* @__PURE__ */ C.createElement(Hn, {
    ...o,
    shouldContainFocus: w,
    isExiting: t,
    portalContainer: r
  }, !o.isNonModal && e.isOpen && /* @__PURE__ */ C.createElement("div", {
    "data-testid": "underlay",
    ...u,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ C.createElement("div", {
    ref: a,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ C.createElement(Kn.Provider, {
    value: a
  }, R)));
  var x;
  return /* @__PURE__ */ C.createElement(Hn, {
    ...o,
    shouldContainFocus: w,
    isExiting: t,
    portalContainer: (x = r ?? (l == null ? void 0 : l.current)) !== null && x !== void 0 ? x : void 0
  }, R);
}
const bd = /* @__PURE__ */ W(null), sa = /* @__PURE__ */ W(null), rn = /* @__PURE__ */ W(null);
function pd(e) {
  let t = od(e), r = D(null), { triggerProps: n, overlayProps: o } = Cs({
    type: "dialog"
  }, t, r), [i, a] = q(null), l = z(() => {
    r.current && a(r.current.offsetWidth + "px");
  }, [
    r
  ]);
  return br({
    ref: r,
    onResize: l
  }), n.id = _e(), o["aria-labelledby"] = n.id, /* @__PURE__ */ C.createElement(Wt, {
    values: [
      [
        rn,
        t
      ],
      [
        bd,
        t
      ],
      [
        sa,
        o
      ],
      [
        la,
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
  }, /* @__PURE__ */ C.createElement(vs, {
    ...n,
    ref: r,
    isPressed: t.isOpen
  }, e.children));
}
const md = /* @__PURE__ */ xe(function(t, r) {
  let n = t["aria-labelledby"];
  [t, r] = pe(t, r, sa);
  let { dialogProps: o, titleProps: i } = ed({
    ...t,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": n
  }, r), a = ie(rn);
  !o["aria-label"] && !o["aria-labelledby"] && (t["aria-labelledby"] ? o["aria-labelledby"] = t["aria-labelledby"] : process.env.NODE_ENV !== "production" && console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  let l = ke({
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
  return /* @__PURE__ */ C.createElement(Te.section, {
    ...Q(s, l, o),
    render: t.render,
    ref: r,
    slot: t.slot || void 0
  }, /* @__PURE__ */ C.createElement(Wt, {
    values: [
      [
        Ma,
        {
          slots: {
            [hr]: {},
            title: {
              ...i,
              level: 2
            }
          }
        }
      ],
      [
        Zr,
        {
          slots: {
            [hr]: {},
            close: {
              onPress: () => a == null ? void 0 : a.close()
            }
          }
        }
      ]
    ]
  }, l.children));
}), gd = /* @__PURE__ */ W(null), hd = /* @__PURE__ */ bt(function(t, r) {
  [t, r] = pe(t, r, gd);
  let { validationBehavior: n } = Ut(Qr) || {};
  var o, i;
  let a = (i = (o = t.validationBehavior) !== null && o !== void 0 ? o : n) !== null && i !== void 0 ? i : "native", l = D(null);
  [t, l] = pe(t, l, eo);
  let [s, d] = vo(!t["aria-label"] && !t["aria-labelledby"]), c = id({
    ...t,
    validationBehavior: a
  }), { labelProps: u, inputProps: p, clearButtonProps: m, descriptionProps: h, errorMessageProps: v, ...g } = qs({
    ...It(t),
    label: d,
    validationBehavior: a
  }, c, l), $ = ke({
    ...t,
    values: {
      isEmpty: c.value === "",
      isDisabled: t.isDisabled || !1,
      isInvalid: g.isInvalid || !1,
      isReadOnly: t.isReadOnly || !1,
      isRequired: t.isRequired || !1,
      state: c
    },
    defaultClassName: "react-aria-SearchField"
  }), y = Pe(t, {
    global: !0
  });
  return delete y.id, /* @__PURE__ */ C.createElement(Te.div, {
    ...y,
    ...$,
    ref: r,
    slot: t.slot || void 0,
    "data-empty": c.value === "" || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": g.isInvalid || void 0,
    "data-readonly": t.isReadOnly || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ C.createElement(Wt, {
    values: [
      [
        Xr,
        {
          ...u,
          ref: s
        }
      ],
      [
        tn,
        {
          ...p,
          ref: l
        }
      ],
      [
        Zr,
        m
      ],
      [
        Jr,
        {
          slots: {
            description: h,
            errorMessage: v
          }
        }
      ],
      [
        en,
        {
          isInvalid: g.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        Xt,
        g
      ]
    ]
  }, $.children));
}), da = /* @__PURE__ */ W({});
let $d = (e) => {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, ...o } = e;
  return o;
};
const yd = /* @__PURE__ */ xe(function(t, r) {
  [t, r] = pe(t, r, da);
  let { hoverProps: n, isHovered: o } = ft(t), { isFocused: i, isFocusVisible: a, focusProps: l } = vt({
    isTextInput: !0,
    autoFocus: t.autoFocus
  }), s = !!t["aria-invalid"] && t["aria-invalid"] !== "false", d = ke({
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
  return /* @__PURE__ */ C.createElement(Te.textarea, {
    ...Q($d(t), l, n),
    ...d,
    ref: r,
    "data-focused": i || void 0,
    "data-disabled": t.disabled || void 0,
    "data-hovered": o || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": s || void 0
  });
}), xd = /* @__PURE__ */ W(null), Ed = /* @__PURE__ */ bt(function(t, r) {
  [t, r] = pe(t, r, xd);
  let { validationBehavior: n } = Ut(Qr) || {};
  var o, i;
  let a = (i = (o = t.validationBehavior) !== null && o !== void 0 ? o : n) !== null && i !== void 0 ? i : "native", l = D(null);
  [t, l] = pe(t, l, eo);
  let [s, d] = vo(!t["aria-label"] && !t["aria-labelledby"]), [c, u] = q("input"), { labelProps: p, inputProps: m, descriptionProps: h, errorMessageProps: v, ...g } = hi({
    ...It(t),
    inputElementType: c,
    label: d,
    validationBehavior: a
  }, l), $ = z((E) => {
    l.current = E, E && u(E instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, [
    l
  ]), y = ke({
    ...t,
    values: {
      isDisabled: t.isDisabled || !1,
      isInvalid: g.isInvalid,
      isReadOnly: t.isReadOnly || !1,
      isRequired: t.isRequired || !1
    },
    defaultClassName: "react-aria-TextField"
  }), w = Pe(t, {
    global: !0
  });
  return delete w.id, /* @__PURE__ */ C.createElement(Te.div, {
    ...w,
    ...y,
    ref: r,
    slot: t.slot || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": g.isInvalid || void 0,
    "data-readonly": t.isReadOnly || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ C.createElement(Wt, {
    values: [
      [
        Xr,
        {
          ...p,
          ref: s
        }
      ],
      [
        tn,
        {
          ...m,
          ref: $
        }
      ],
      [
        da,
        {
          ...m,
          ref: $
        }
      ],
      [
        en,
        {
          role: "presentation",
          isInvalid: g.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        Jr,
        {
          slots: {
            description: h,
            errorMessage: v
          }
        }
      ],
      [
        Xt,
        g
      ]
    ]
  }, y.children));
}), wd = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, Pd = (e, t) => ({
  classGroupId: e,
  validator: t
}), ca = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Vt = "-", Gn = [], Td = "arbitrary..", Cd = (e) => {
  const t = kd(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Sd(a);
      const l = a.split(Vt), s = l[0] === "" && l.length > 1 ? 1 : 0;
      return ua(l, s, t);
    },
    getConflictingClassGroupIds: (a, l) => {
      if (l) {
        const s = n[a], d = r[a];
        return s ? d ? wd(d, s) : s : d || Gn;
      }
      return r[a] || Gn;
    }
  };
}, ua = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const o = e[t], i = r.nextPart.get(o);
  if (i) {
    const d = ua(e, t + 1, i);
    if (d) return d;
  }
  const a = r.validators;
  if (a === null)
    return;
  const l = t === 0 ? e.join(Vt) : e.slice(t).join(Vt), s = a.length;
  for (let d = 0; d < s; d++) {
    const c = a[d];
    if (c.validator(l))
      return c.classGroupId;
  }
}, Sd = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? Td + n : void 0;
})(), kd = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return Nd(r, t);
}, Nd = (e, t) => {
  const r = ca();
  for (const n in e) {
    const o = e[n];
    nn(o, r, n, t);
  }
  return r;
}, nn = (e, t, r, n) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    Ld(a, t, r, n);
  }
}, Ld = (e, t, r, n) => {
  if (typeof e == "string") {
    Id(e, t, r);
    return;
  }
  if (typeof e == "function") {
    Md(e, t, r, n);
    return;
  }
  Rd(e, t, r, n);
}, Id = (e, t, r) => {
  const n = e === "" ? t : fa(t, e);
  n.classGroupId = r;
}, Md = (e, t, r, n) => {
  if (Dd(e)) {
    nn(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Pd(r, e));
}, Rd = (e, t, r, n) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [l, s] = o[a];
    nn(s, fa(t, l), r, n);
  }
}, fa = (e, t) => {
  let r = e;
  const n = t.split(Vt), o = n.length;
  for (let i = 0; i < o; i++) {
    const a = n[i];
    let l = r.nextPart.get(a);
    l || (l = ca(), r.nextPart.set(a, l)), r = l;
  }
  return r;
}, Dd = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Fd = (e) => {
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
}, Ir = "!", Wn = ":", Od = [], Un = (e, t, r, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), Ad = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const i = [];
    let a = 0, l = 0, s = 0, d;
    const c = o.length;
    for (let v = 0; v < c; v++) {
      const g = o[v];
      if (a === 0 && l === 0) {
        if (g === Wn) {
          i.push(o.slice(s, v)), s = v + 1;
          continue;
        }
        if (g === "/") {
          d = v;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? l++ : g === ")" && l--;
    }
    const u = i.length === 0 ? o : o.slice(s);
    let p = u, m = !1;
    u.endsWith(Ir) ? (p = u.slice(0, -1), m = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(Ir) && (p = u.slice(1), m = !0)
    );
    const h = d && d > s ? d - s : void 0;
    return Un(i, m, p, h);
  };
  if (t) {
    const o = t + Wn, i = n;
    n = (a) => a.startsWith(o) ? i(a.slice(o.length)) : Un(Od, !1, a, void 0, !0);
  }
  if (r) {
    const o = n;
    n = (i) => r({
      className: i,
      parseClassName: o
    });
  }
  return n;
}, _d = (e) => {
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
}, Vd = (e) => ({
  cache: Fd(e.cacheSize),
  parseClassName: Ad(e),
  sortModifiers: _d(e),
  ...Cd(e)
}), Hd = /\s+/, zd = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], l = e.trim().split(Hd);
  let s = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const c = l[d], {
      isExternal: u,
      modifiers: p,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: v
    } = r(c);
    if (u) {
      s = c + (s.length > 0 ? " " + s : s);
      continue;
    }
    let g = !!v, $ = n(g ? h.substring(0, v) : h);
    if (!$) {
      if (!g) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if ($ = n(h), !$) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      g = !1;
    }
    const y = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), w = m ? y + Ir : y, E = w + $;
    if (a.indexOf(E) > -1)
      continue;
    a.push(E);
    const I = o($, g);
    for (let M = 0; M < I.length; ++M) {
      const R = I[M];
      a.push(w + R);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
}, Bd = (...e) => {
  let t = 0, r, n, o = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = va(r)) && (o && (o += " "), o += n);
  return o;
}, va = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = va(e[n])) && (r && (r += " "), r += t);
  return r;
}, jn = (e, ...t) => {
  let r, n, o, i;
  const a = (s) => {
    const d = t.reduce((c, u) => u(c), e());
    return r = Vd(d), n = r.cache.get, o = r.cache.set, i = l, l(s);
  }, l = (s) => {
    const d = n(s);
    if (d)
      return d;
    const c = zd(s, r);
    return o(s, c), c;
  };
  return i = a, (...s) => i(Bd(...s));
}, Kd = [], ae = (e) => {
  const t = (r) => r[e] || Kd;
  return t.isThemeGetter = !0, t;
}, ba = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pa = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Gd = /^\d+\/\d+$/, Wd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ud = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, qd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Yd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ue = (e) => Gd.test(e), A = (e) => !!e && !Number.isNaN(Number(e)), De = (e) => !!e && Number.isInteger(Number(e)), dr = (e) => e.endsWith("%") && A(e.slice(0, -1)), Ne = (e) => Wd.test(e), Xd = () => !0, Zd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ud.test(e) && !jd.test(e)
), ma = () => !1, Jd = (e) => qd.test(e), Qd = (e) => Yd.test(e), ec = (e) => !S(e) && !k(e), tc = (e) => Je(e, $a, ma), S = (e) => ba.test(e), He = (e) => Je(e, ya, Zd), cr = (e) => Je(e, ac, A), qn = (e) => Je(e, ga, ma), rc = (e) => Je(e, ha, Qd), Pt = (e) => Je(e, xa, Jd), k = (e) => pa.test(e), tt = (e) => Qe(e, ya), nc = (e) => Qe(e, lc), Yn = (e) => Qe(e, ga), oc = (e) => Qe(e, $a), ic = (e) => Qe(e, ha), Tt = (e) => Qe(e, xa, !0), Je = (e, t, r) => {
  const n = ba.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Qe = (e, t, r = !1) => {
  const n = pa.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, ga = (e) => e === "position" || e === "percentage", ha = (e) => e === "image" || e === "url", $a = (e) => e === "length" || e === "size" || e === "bg-size", ya = (e) => e === "length", ac = (e) => e === "number", lc = (e) => e === "family-name", xa = (e) => e === "shadow", Xn = () => {
  const e = ae("color"), t = ae("font"), r = ae("text"), n = ae("font-weight"), o = ae("tracking"), i = ae("leading"), a = ae("breakpoint"), l = ae("container"), s = ae("spacing"), d = ae("radius"), c = ae("shadow"), u = ae("inset-shadow"), p = ae("text-shadow"), m = ae("drop-shadow"), h = ae("blur"), v = ae("perspective"), g = ae("aspect"), $ = ae("ease"), y = ae("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], I = () => [...E(), k, S], M = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], x = () => [k, S, s], O = () => [Ue, "full", "auto", ...x()], V = () => [De, "none", "subgrid", k, S], re = () => ["auto", {
    span: ["full", De, k, S]
  }, De, k, S], U = () => [De, "auto", k, S], j = () => ["auto", "min", "max", "fr", k, S], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], te = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], J = () => ["auto", ...x()], se = () => [Ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], N = () => [e, k, S], ce = () => [...E(), Yn, qn, {
    position: [k, S]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], P = () => ["auto", "cover", "contain", oc, tc, {
    size: [k, S]
  }], b = () => [dr, tt, He], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    k,
    S
  ], L = () => ["", A, tt, He], _ = () => ["solid", "dashed", "dotted", "double"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [A, dr, Yn, qn], Me = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    k,
    S
  ], ge = () => ["none", A, k, S], Ee = () => ["none", A, k, S], pt = () => [A, k, S], mt = () => [Ue, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ne],
      breakpoint: [Ne],
      color: [Xd],
      container: [Ne],
      "drop-shadow": [Ne],
      ease: ["in", "out", "in-out"],
      font: [ec],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ne],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ne],
      shadow: [Ne],
      spacing: ["px", A],
      text: [Ne],
      "text-shadow": [Ne],
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
        aspect: ["auto", "square", Ue, S, k, g]
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
        columns: [A, S, k, l]
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
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [De, "auto", k, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ue, "full", "auto", l, ...x()]
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
        flex: [A, Ue, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", A, k, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", A, k, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [De, "first", "last", "none", k, S]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
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
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
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
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
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
        m: J()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: J()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: J()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: J()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: J()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: J()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: J()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: J()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: J()
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
        size: se()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...se()]
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
          ...se()
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
          ...se()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...se()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...se()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...se()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, tt, He]
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
        font: [n, k, cr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", dr, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nc, S, t]
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
        "line-clamp": [A, "none", k, cr]
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
        decoration: [..._(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [A, "from-font", "auto", k, He]
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
        "underline-offset": [A, "auto", k, S]
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
        bg: ce()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: f()
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
          }, De, k, S],
          radial: ["", k, S],
          conic: [De, k, S]
        }, ic, rc]
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
        from: b()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: b()
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
        border: [..._(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [..._(), "hidden", "none"]
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
        outline: [..._(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [A, k, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", A, tt, He]
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
          Tt,
          Pt
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
        "inset-shadow": ["none", u, Tt, Pt]
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
        "ring-offset": [A, He]
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
        "text-shadow": ["none", p, Tt, Pt]
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
        opacity: [A, k, S]
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
        "mask-linear": [A]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
      }],
      "mask-image-radial": [{
        "mask-radial": [k, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Z()
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
        "mask-conic": [A]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Z()
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
        mask: f()
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
        blur: Me()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [A, k, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [A, k, S]
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
          m,
          Tt,
          Pt
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
        grayscale: ["", A, k, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [A, k, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", A, k, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [A, k, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", A, k, S]
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
        "backdrop-blur": Me()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [A, k, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [A, k, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", A, k, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [A, k, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", A, k, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A, k, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A, k, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", A, k, S]
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
        duration: [A, "initial", k, S]
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
        delay: [A, k, S]
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
        perspective: [v, k, S]
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
        scale: Ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Ee()
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
        skew: pt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pt()
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
        translate: mt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": mt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": mt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": mt()
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
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [A, tt, He, cr]
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
}, sc = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: i = {}
}) => (it(e, "cacheSize", t), it(e, "prefix", r), it(e, "experimentalParseClassName", n), Ct(e.theme, i.theme), Ct(e.classGroups, i.classGroups), Ct(e.conflictingClassGroups, i.conflictingClassGroups), Ct(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), it(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), St(e.theme, o.theme), St(e.classGroups, o.classGroups), St(e.conflictingClassGroups, o.conflictingClassGroups), St(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Ea(e, o, "orderSensitiveModifiers"), e), it = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, Ct = (e, t) => {
  if (t)
    for (const r in t)
      it(e, r, t[r]);
}, St = (e, t) => {
  if (t)
    for (const r in t)
      Ea(e, t, r);
}, Ea = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, dc = (e, ...t) => typeof e == "function" ? jn(Xn, e, ...t) : jn(() => sc(Xn(), e), ...t), cc = dc({
  prefix: "nm-"
});
function de(...e) {
  return cc(Mr(e));
}
const uc = Rr(
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
), fc = ka.forwardRef(
  ({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ K(
    na,
    {
      ref: o,
      ...n,
      className: be(
        e,
        (i) => de(
          uc({
            variant: t,
            size: r,
            className: i
          })
        )
      )
    }
  )
);
fc.displayName = "Button";
const wa = Rr([
  "nm-text-sm nm-font-medium nm-leading-none",
  "nm-text-textfield-label",
  /* Disabled */
  "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
  /* Invalid */
  "group-data-[invalid]:nm-text-textfield-label-error"
]), Pa = ({ className: e, ...t }) => /* @__PURE__ */ K(td, { className: de(wa(), e), ...t });
function Ac({ className: e, ...t }) {
  return /* @__PURE__ */ K(
    Yt,
    {
      className: de(
        "nm-text-sm nm-text-textfield-helper",
        e
      ),
      ...t,
      slot: "description"
    }
  );
}
function Ta({ className: e, ...t }) {
  return /* @__PURE__ */ K(
    ad,
    {
      className: de(
        "nm-text-sm nm-font-medium nm-text-textfield-helper-error",
        e
      ),
      ...t
    }
  );
}
const vc = Rr("", {
  variants: {
    variant: {
      default: [
        "nm-relative nm-flex nm-h-10 nm-w-full nm-items-center nm-overflow-hidden nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background",
        /* Base Styles from Tokens */
        "nm-border-textfield-border nm-bg-textfield",
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
function bc({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ K(
    ia,
    {
      className: be(
        e,
        (n) => de(vc({ variant: t }), n)
      ),
      ...r
    }
  );
}
const pc = Ed, mc = ({ className: e, ...t }) => /* @__PURE__ */ K(
  aa,
  {
    className: be(
      e,
      (r) => de(
        "nm-flex nm-h-10 nm-w-full nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background nm-transition-colors",
        /* Base Styles from Tokens */
        "nm-border-textfield-border nm-text-textfield-foreground nm-bg-textfield",
        /* File Input Reset */
        "file:nm-border-0 file:nm-bg-transparent file:nm-text-sm file:nm-font-medium",
        /* Placeholder */
        "placeholder:nm-opacity-100 placeholder:nm-text-textfield-placeholder",
        /* Disabled State */
        "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-50 data-[disabled]:nm-bg-textfield-disabled data-[disabled]:nm-text-textfield-disabled-foreground",
        /* Focused State */
        "data-[focused]:nm-outline-none data-[focused]:nm-ring-2 [data-focused]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focused]:nm-ring-offset-2",
        /* Resets */
        "focus-visible:nm-outline-none",
        r
      )
    ),
    ...t
  }
), gc = ({ className: e, ...t }) => /* @__PURE__ */ K(
  yd,
  {
    className: be(
      e,
      (r) => de(
        "nm-flex nm-min-h-[80px] nm-w-full nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background nm-transition-colors",
        /* Base Styles from Tokens */
        "nm-border-textfield-border nm-text-textfield-foreground nm-bg-textfield",
        /* Placeholder */
        "placeholder:nm-opacity-100 placeholder:nm-text-textfield-placeholder",
        /* Focused State */
        "data-[focused]:nm-outline-none data-[focused]:nm-ring-2 [data-focused]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focused]:nm-ring-offset-2",
        /* Disabled State */
        "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-50 data-[disabled]:nm-bg-textfield-disabled data-[disabled]:nm-text-textfield-disabled-foreground",
        /* Resets */
        "focus-visible:nm-outline-none",
        r
      )
    ),
    ...t
  }
);
function _c({
  label: e,
  description: t,
  errorMessage: r,
  textArea: n,
  className: o,
  placeholder: i,
  ...a
}) {
  return /* @__PURE__ */ Nt(
    pc,
    {
      className: be(
        o,
        (l) => de("nm-font-sans nm-group nm-flex nm-flex-col nm-gap-2", l)
      ),
      ...a,
      children: [
        /* @__PURE__ */ K(Pa, { children: e }),
        n ? /* @__PURE__ */ K(gc, { placeholder: i }) : /* @__PURE__ */ K(mc, { placeholder: i }),
        t && /* @__PURE__ */ K(
          Yt,
          {
            className: "nm-text-sm nm-text-textfield-helper",
            slot: "description",
            children: t
          }
        ),
        /* @__PURE__ */ K(Ta, { children: r })
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
const hc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $c = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Zn = (e) => {
  const t = $c(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ca = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), yc = (e) => {
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
var xc = {
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
const Ec = xe(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: i,
    iconNode: a,
    ...l
  }, s) => ur(
    "svg",
    {
      ref: s,
      ...xc,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Ca("lucide", o),
      ...!i && !yc(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([d, c]) => ur(d, c)),
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
const Zt = (e, t) => {
  const r = xe(
    ({ className: n, ...o }, i) => ur(Ec, {
      ref: i,
      iconNode: t,
      className: Ca(
        `lucide-${hc(Zn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = Zn(e), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Pc = Zt("check", wc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = [["path", { d: "M5 12h14", key: "1ays0h" }]], Cc = Zt("minus", Tc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], kc = Zt("search", Sc);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Lc = Zt("x", Nc);
function Ic({ className: e, ...t }) {
  return /* @__PURE__ */ K(
    hd,
    {
      className: be(
        e,
        (r) => de("group", r)
      ),
      ...t
    }
  );
}
function Mc({ className: e, ...t }) {
  return /* @__PURE__ */ K(
    aa,
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
function Vc({ className: e, ...t }) {
  return /* @__PURE__ */ K(
    ia,
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
function Rc({ className: e, ...t }) {
  return /* @__PURE__ */ K(
    na,
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
function Hc({
  label: e,
  description: t,
  className: r,
  errorMessage: n,
  ...o
}) {
  return /* @__PURE__ */ Nt(
    Ic,
    {
      className: be(
        r,
        (i) => de("group nm-flex nm-flex-col nm-gap-2", i)
      ),
      ...o,
      children: [
        /* @__PURE__ */ K(Pa, { children: e }),
        /* @__PURE__ */ Nt(bc, { children: [
          /* @__PURE__ */ K(
            kc,
            {
              "aria-hidden": !0,
              className: "nm-size-4 nm-text-muted-foreground"
            }
          ),
          /* @__PURE__ */ K(Mc, { placeholder: "Search..." }),
          /* @__PURE__ */ K(Rc, { children: /* @__PURE__ */ K(Lc, { "aria-hidden": !0, className: "nm-size-4" }) })
        ] }),
        t && /* @__PURE__ */ K(
          Yt,
          {
            className: "nm-text-sm nm-text-muted-foreground",
            slot: "description",
            children: t
          }
        ),
        /* @__PURE__ */ K(Ta, { children: n })
      ]
    }
  );
}
const zc = pd, Bc = ({ className: e, offset: t = 4, ...r }) => /* @__PURE__ */ K(
  fd,
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
function Kc({ className: e, ...t }) {
  return /* @__PURE__ */ K(
    md,
    {
      className: de("nm-p-4 nm-outline nm-outline-0", e),
      ...t
    }
  );
}
const Gc = ({ className: e, children: t, ...r }) => /* @__PURE__ */ K(
  dd,
  {
    className: be(
      e,
      (n) => de(
        "group/checkbox nm-flex nm-items-center nm-gap-x-2",
        /* Disabled */
        "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
        wa,
        n
      )
    ),
    ...r,
    children: be(t, (n, o) => /* @__PURE__ */ Nt(Sa, { children: [
      /* @__PURE__ */ K(
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
          children: o.isIndeterminate ? /* @__PURE__ */ K(Cc, { className: "nm-size-4" }) : o.isSelected ? /* @__PURE__ */ K(Pc, { className: "nm-size-4" }) : null
        }
      ),
      n
    ] }))
  }
);
export {
  fc as Button,
  Gc as Checkbox,
  Ta as FieldError,
  bc as FieldGroup,
  Ac as FormDescription,
  mc as Input,
  Hc as JollySearchField,
  Pa as Label,
  Bc as Popover,
  Kc as PopoverDialog,
  zc as PopoverTrigger,
  Ic as SearchField,
  Rc as SearchFieldClear,
  Vc as SearchFieldGroup,
  Mc as SearchFieldInput,
  gc as TextArea,
  pc as TextField,
  _c as WrappedField,
  vc as fieldGroupVariants,
  wa as labelVariants
};
//# sourceMappingURL=index.es.js.map
