/*!  "use client";  */
import { jsx as e } from "react/jsx-runtime";
const y = ({
  primary: o = !1,
  size: t = "medium",
  backgroundColor: n,
  label: r,
  ...s
}) => {
  const b = o ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${t}`, b].join(" "),
      style: { backgroundColor: n },
      ...s,
      children: r
    }
  );
};
export {
  y as Button
};
//# sourceMappingURL=index.es.js.map
