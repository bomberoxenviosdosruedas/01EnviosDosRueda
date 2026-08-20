/* @ds-bundle: {"format":4,"namespace":"EnviosDosruedasDesignSystem_a2df0d","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"1a2c330bbdf9","components/core/Badge.jsx":"00b054c9951f","components/core/Button.jsx":"02343544fb79","components/core/Card.jsx":"56657153fd03","components/core/Separator.jsx":"e6aa972aa1aa","components/core/Skeleton.jsx":"2b222557f1b4","components/data/StatBlock.jsx":"7ecd24a83b4c","components/data/Table.jsx":"2db18f0d033f","components/feedback/Alert.jsx":"532fcc6a395e","components/feedback/Dialog.jsx":"47a80127cab6","components/feedback/Progress.jsx":"3a22e253e41a","components/feedback/Toast.jsx":"d3dc739afe00","components/feedback/Tooltip.jsx":"437789576c46","components/forms/Checkbox.jsx":"5ebfdf304c2a","components/forms/Input.jsx":"3fe2fc9df93f","components/forms/Label.jsx":"1abd9f95223e","components/forms/RadioGroup.jsx":"8936626e22a3","components/forms/Select.jsx":"dd7df6ffc0f0","components/forms/Slider.jsx":"85023ff5cb3b","components/forms/Switch.jsx":"dd29f3c675a4","components/forms/Textarea.jsx":"f1bfd1d03a04","components/navigation/Accordion.jsx":"089d3fb487ab","components/navigation/NavItem.jsx":"e44bbecfc969","components/navigation/Tabs.jsx":"d7ee75a344dd","ui_kits/website/Chrome.jsx":"2b527818765c","ui_kits/website/ContactoScreen.jsx":"acd4bf6e3c89","ui_kits/website/CotizarScreen.jsx":"338a124acfeb","ui_kits/website/HomeScreen.jsx":"40cc5dfbe477","ui_kits/website/ServicioScreen.jsx":"6472e7336eb8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EnviosDosruedasDesignSystem_a2df0d = window.EnviosDosruedasDesignSystem_a2df0d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  alt = "",
  initials = "",
  size = 40,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      overflow: "hidden",
      background: "var(--surface-muted)",
      color: "var(--brand-blue)",
      fontFamily: "var(--font-subheading)",
      fontSize: size * 0.42,
      letterSpacing: "var(--tracking-wide)",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  default: {
    background: "var(--action-primary)",
    color: "var(--action-primary-fg)",
    borderColor: "transparent"
  },
  secondary: {
    background: "var(--action-accent)",
    color: "var(--action-accent-fg)",
    borderColor: "transparent"
  },
  destructive: {
    background: "var(--action-danger)",
    color: "var(--action-danger-fg)",
    borderColor: "transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--text-body)",
    borderColor: "var(--border-subtle)"
  },
  glass: {
    background: "rgba(255,255,255,0.10)",
    color: "#fff",
    borderColor: "rgba(255,255,255,0.15)"
  }
};
function Badge({
  variant = "default",
  dot = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      borderRadius: "var(--radius-full)",
      borderWidth: 1,
      borderStyle: "solid",
      padding: "0.125rem 0.625rem",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      fontFamily: "var(--font-body)",
      ...V[variant],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-full)",
      background: "var(--brand-yellow)",
      boxShadow: "var(--glow-yellow)"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  default: {
    background: "var(--action-primary)",
    color: "var(--action-primary-fg)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "var(--action-accent)",
    color: "var(--action-accent-fg)",
    border: "1px solid transparent"
  },
  outline: {
    background: "var(--surface-card)",
    color: "var(--text-body)",
    border: "1px solid var(--border-subtle)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent"
  },
  destructive: {
    background: "var(--action-danger)",
    color: "var(--action-danger-fg)",
    border: "1px solid transparent"
  },
  link: {
    background: "transparent",
    color: "var(--action-primary)",
    border: "1px solid transparent",
    textDecoration: "underline",
    textUnderlineOffset: "4px"
  }
};
const SIZES = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 var(--space-3)",
    fontSize: "var(--text-sm)"
  },
  default: {
    height: "var(--control-h)",
    padding: "0 var(--space-4)",
    fontSize: "var(--text-sm)"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 var(--space-8)",
    fontSize: "var(--text-sm)"
  },
  xl: {
    height: "var(--control-h-xl)",
    padding: "0 var(--space-10)",
    fontSize: "var(--text-xl)",
    fontFamily: "var(--font-subheading)",
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase"
  },
  hero: {
    height: "var(--control-h-2xl)",
    padding: "0 2.5rem",
    fontSize: "var(--text-xl)",
    fontFamily: "var(--font-subheading)",
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase",
    fontWeight: "var(--weight-bold)"
  },
  icon: {
    height: "var(--control-h)",
    width: "var(--control-h)",
    padding: 0
  }
};
function Button({
  variant = "default",
  size = "default",
  disabled = false,
  square = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false),
    [active, setActive] = React.useState(false);
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    whiteSpace: "nowrap",
    borderRadius: square ? "0" : "var(--radius-md)",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)",
    transform: active && !disabled ? "scale(var(--press-scale))" : "none",
    filter: hover && !disabled ? "brightness(0.92)" : "none",
    ...VARIANTS[variant],
    ...SIZES[size],
    ...style
  };
  if (variant === "ghost" && hover && !disabled) {
    s.background = "var(--action-accent)";
    s.color = "var(--action-accent-fg)";
    s.filter = "none";
  }
  if (variant === "outline" && hover && !disabled) {
    s.background = "var(--action-accent)";
    s.color = "var(--action-accent-fg)";
    s.filter = "none";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevation = "sm",
  accent = false,
  style,
  children,
  ...rest
}) {
  const shadow = {
    sm: "var(--shadow-sm)",
    xl: "var(--shadow-xl)",
    "2xl": "var(--shadow-2xl)"
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: accent ? "4px solid var(--brand-yellow)" : "1px solid var(--border-subtle)",
      boxShadow: shadow,
      overflow: "hidden",
      ...style
    }
  }, rest), children);
}
function CardHeader({
  invert = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)",
      padding: "var(--space-6)",
      background: invert ? "var(--brand-blue)" : "transparent",
      color: invert ? "var(--text-on-invert)" : "inherit",
      ...style
    }
  }, rest), children);
}
function CardTitle({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-headline)",
      textTransform: "uppercase",
      fontSize: "var(--text-2xl)",
      lineHeight: "var(--leading-none)",
      letterSpacing: "var(--tracking-tight)",
      ...style
    }
  }, rest), children);
}
function CardDescription({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), children);
}
function CardContent({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "var(--space-6)",
      paddingTop: 0,
      ...style
    }
  }, rest), children);
}
function CardFooter({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-6)",
      paddingTop: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Separator({
  orientation = "horizontal",
  onInvert = false,
  style,
  ...rest
}) {
  const c = onInvert ? "var(--border-on-invert)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: orientation === "vertical" ? {
      width: 1,
      alignSelf: "stretch",
      background: c,
      ...style
    } : {
      height: 1,
      width: "100%",
      background: c,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Skeleton({
  width = "100%",
  height = 16,
  radius = "var(--radius-md)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height,
      borderRadius: radius,
      background: "var(--surface-muted)",
      animation: "dr-pulse 1.6s var(--ease-out) infinite",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, "@keyframes dr-pulse{0%,100%{opacity:1}50%{opacity:.5}}"));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  label,
  value,
  unit,
  onInvert = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: 2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-2xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-mega)",
      fontWeight: "var(--weight-bold)",
      color: onInvert ? "rgba(255,255,255,0.4)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-4xl)",
      lineHeight: "var(--leading-none)",
      letterSpacing: "var(--tracking-tight)",
      color: onInvert ? "#fff" : "var(--text-heading)"
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      marginLeft: 6,
      opacity: 0.4
    }
  }, unit)));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  columns = [],
  rows = [],
  caption,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      overflowX: "auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)"
    }
  }, caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: "bottom",
      paddingTop: "var(--space-4)",
      color: "var(--text-muted)",
      fontSize: "var(--text-xs)",
      textAlign: "left"
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: "left",
      padding: "var(--space-3) var(--space-4)",
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-subheading)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--text-muted)",
      fontWeight: "var(--weight-normal)"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? "var(--surface-muted)" : "transparent"
    }
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: "var(--space-3) var(--space-4)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, cell)))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  default: {
    background: "var(--surface-card)",
    color: "var(--text-body)",
    border: "1px solid var(--border-subtle)"
  },
  accent: {
    background: "var(--brand-yellow)",
    color: "var(--action-accent-fg)",
    border: "1px solid transparent"
  },
  destructive: {
    background: "var(--surface-card)",
    color: "var(--action-danger)",
    border: "1px solid var(--action-danger)"
  }
};
function Alert({
  variant = "default",
  title,
  icon,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-4)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      ...V[variant],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontFamily: "var(--font-subheading)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      fontSize: "var(--text-base)",
      marginBottom: 2
    }
  }, title), children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  footer,
  onClose,
  style,
  children,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(6,54,165,0.45)",
      backdropFilter: "blur(4px)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(480px,92vw)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-2xl)",
      padding: "var(--space-6)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-2xl)",
      color: "var(--text-heading)",
      marginBottom: "var(--space-2)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Progress({
  value = 0,
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height: 8,
      width: "100%",
      borderRadius: "var(--radius-full)",
      background: "var(--surface-muted)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: Math.max(0, Math.min(100, value)) + "%",
      background: accent ? "var(--brand-yellow)" : "var(--action-primary)",
      transition: "width var(--dur) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  title,
  description,
  variant = "default",
  onClose,
  style,
  ...rest
}) {
  const inv = variant === "invert";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      width: 360,
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-4)",
      boxShadow: "var(--shadow-2xl)",
      fontFamily: "var(--font-body)",
      background: inv ? "var(--brand-blue)" : "var(--surface-card)",
      color: inv ? "#fff" : "var(--text-body)",
      border: "1px solid " + (inv ? "var(--border-on-invert)" : "var(--border-subtle)"),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontFamily: "var(--font-subheading)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      fontSize: "var(--text-base)"
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      opacity: 0.7
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "inherit",
      opacity: 0.5,
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--brand-blue)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      padding: "var(--space-1-5) var(--space-2-5)",
      borderRadius: "var(--radius-md)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-lg)",
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  defaultChecked = false,
  disabled = false,
  onCheckedChange,
  label,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(defaultChecked);
  const val = checked === undefined ? on : checked;
  const toggle = () => {
    if (disabled) return;
    const n = !val;
    if (checked === undefined) setOn(n);
    onCheckedChange && onCheckedChange(n);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      ...style
    },
    onClick: toggle
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid " + (val ? "var(--action-primary)" : "var(--border-subtle)"),
      background: val ? "var(--action-primary)" : "transparent",
      color: "var(--action-primary-fg)",
      fontSize: 11,
      lineHeight: 1,
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, val ? "✓" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "flex",
      height: "var(--control-h)",
      width: "100%",
      borderRadius: "var(--radius-md)",
      border: "1px solid " + (invalid ? "var(--action-danger)" : "var(--border-subtle)"),
      background: "var(--surface-card)",
      padding: "0 var(--space-3)",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-body)",
      color: "var(--text-body)",
      outline: "none",
      boxShadow: focus ? "0 0 0 2px var(--surface-page),0 0 0 4px var(--focus-ring)" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Label({
  eyebrow = false,
  onInvert = false,
  style,
  children,
  ...rest
}) {
  const base = eyebrow ? {
    fontFamily: "var(--font-subheading)",
    fontSize: "var(--text-2xs)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-mega)",
    fontWeight: "var(--weight-bold)"
  } : {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--weight-semibold)"
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "block",
      color: onInvert ? "rgba(255,255,255,0.4)" : "var(--text-muted)",
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RadioGroup({
  options = [],
  value,
  defaultValue,
  onValueChange,
  style,
  ...rest
}) {
  const [val, setVal] = React.useState(defaultValue ?? options[0]?.value);
  const cur = value === undefined ? val : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "grid",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("span", {
    key: o.value,
    onClick: () => {
      if (value === undefined) setVal(o.value);
      onValueChange && onValueChange(o.value);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "var(--radius-full)",
      border: "1px solid " + (cur === o.value ? "var(--action-primary)" : "var(--border-subtle)"),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, cur === o.value && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-full)",
      background: "var(--action-primary)"
    }
  })), o.label)));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    style: {
      height: "var(--control-h)",
      width: "100%",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      padding: "0 var(--space-3)",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-body)",
      color: "var(--text-body)",
      outline: "none",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slider({
  min = 0,
  max = 100,
  defaultValue = 50,
  onValueChange,
  style,
  ...rest
}) {
  const [v, setV] = React.useState(defaultValue);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    min: min,
    max: max,
    value: v,
    onChange: e => {
      const n = Number(e.target.value);
      setV(n);
      onValueChange && onValueChange(n);
    },
    style: {
      width: "100%",
      accentColor: "var(--brand-blue)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  onCheckedChange,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(defaultChecked);
  const val = checked === undefined ? on : checked;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": val,
    disabled: disabled,
    onClick: () => {
      const n = !val;
      if (checked === undefined) setOn(n);
      onCheckedChange && onCheckedChange(n);
    },
    style: {
      width: 44,
      height: 24,
      borderRadius: "var(--radius-full)",
      border: "1px solid transparent",
      padding: 2,
      background: val ? "var(--action-primary)" : "var(--border-subtle)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-full)",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transform: val ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: 80,
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      padding: "var(--space-2) var(--space-3)",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-body)",
      color: "var(--text-body)",
      outline: "none",
      resize: "vertical",
      boxShadow: focus ? "0 0 0 2px var(--surface-page),0 0 0 4px var(--focus-ring)" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-body)",
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "var(--space-4) 0",
      textAlign: "left",
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-lg)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--brand-blue)"
    }
  }, it.title, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)",
      transform: open === i ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }, "\u25BE")), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "var(--space-4)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, it.content))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  label,
  icon,
  active = false,
  hasDropdown = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "var(--space-5) var(--space-7)",
      borderRight: "1px solid var(--border-on-invert)",
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-base)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      textDecoration: "none",
      cursor: "pointer",
      color: hover || active ? "#fff" : "rgba(255,255,255,0.8)",
      background: hover ? "rgba(255,255,255,0.05)" : "transparent",
      transition: "all var(--dur) var(--ease-out)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)",
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, label), hasDropdown && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.6)",
      fontSize: 11,
      transform: hover ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }, "\u25BE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 4,
      background: "var(--brand-yellow)",
      transform: hover || active ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  defaultValue,
  onValueChange,
  style,
  ...rest
}) {
  const [cur, setCur] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = tabs.find(t => t.value === cur);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-1)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    onClick: () => {
      setCur(t.value);
      onValueChange && onValueChange(t.value);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "var(--space-2-5) var(--space-4)",
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-base)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      color: cur === t.value ? "var(--brand-blue)" : "var(--text-muted)",
      borderBottom: "3px solid " + (cur === t.value ? "var(--brand-yellow)" : "transparent"),
      marginBottom: -1,
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-4)",
      fontSize: "var(--text-sm)"
    }
  }, active && active.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Badge,
  NavItem,
  Separator
} = window.EnviosDosruedasDesignSystem_a2df0d;
const ICON = (n, size = 20, yellow = false) => /*#__PURE__*/React.createElement("img", {
  src: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/" + n + ".svg",
  width: size,
  height: size,
  alt: "",
  style: {
    filter: yellow ? "invert(89%) sepia(72%) saturate(3000%) hue-rotate(3deg) brightness(105%)" : "none"
  }
});
const NAV = [{
  label: "Inicio",
  icon: "house",
  screen: "home"
}, {
  label: "Servicios",
  icon: "bike",
  dropdown: [{
    label: "Envíos Express",
    desc: "Rápido, en 2 horas",
    icon: "zap"
  }, {
    label: "Envíos LowCost",
    desc: "Económico e inteligente",
    icon: "trending-down"
  }, {
    label: "Envíos Flex (MeLi)",
    desc: "Socio MercadoLibre Flex",
    icon: "clock"
  }, {
    label: "E-Commerce & 3PL",
    desc: "Logística para PyMEs",
    icon: "shopping-bag"
  }]
}, {
  label: "Nosotros",
  icon: "info",
  dropdown: [{
    label: "Sobre Nosotros",
    desc: "Quiénes somos",
    icon: "info"
  }, {
    label: "Preguntas Frecuentes",
    desc: "Todas tus dudas resueltas",
    icon: "circle-help"
  }, {
    label: "Nuestras Redes",
    desc: "Comunidad en movimiento",
    icon: "share-2"
  }]
}, {
  label: "Contacto",
  icon: "mail",
  screen: "contacto"
}];
function Navbar({
  screen,
  go
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(6,54,165,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-on-invert)",
      padding: "0 var(--space-6)",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: "pointer",
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo_envios.webp",
    alt: "Envios Dosruedas",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-3xl)",
      letterSpacing: "var(--tracking-tighter)",
      textTransform: "uppercase",
      color: "#fff",
      lineHeight: 1
    }
  }, "Envios ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)"
    }
  }, "Dosruedas"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      borderLeft: "1px solid var(--border-on-invert)"
    }
  }, NAV.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative"
    },
    onMouseEnter: () => setOpen(it.dropdown ? i : null),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement(NavItem, {
    label: it.label,
    icon: ICON(it.icon, 16, true),
    hasDropdown: !!it.dropdown,
    active: screen === it.screen,
    onClick: () => it.screen && go(it.screen)
  }), it.dropdown && open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: "100%",
      width: 320,
      paddingTop: 4,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(6,54,165,0.97)",
      backdropFilter: "blur(12px)",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border-on-invert)",
      boxShadow: "var(--shadow-2xl)",
      padding: 8,
      display: "grid",
      gap: 6
    }
  }, it.dropdown.map((dd, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    onClick: () => go("servicio"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: 12,
      borderRadius: "var(--radius-lg)",
      cursor: "pointer",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.05)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 10,
      borderRadius: "var(--radius-lg)",
      background: "rgba(255,255,255,0.05)",
      display: "inline-flex"
    }
  }, ICON(dd.icon, 20, true)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-sm)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      color: "#fff",
      lineHeight: 1
    }
  }, dd.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 4,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "rgba(255,255,255,0.6)"
    }
  }, dd.desc))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+542236602699",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-code)",
      fontSize: "var(--text-sm)",
      color: "rgba(255,255,255,0.8)",
      textDecoration: "none"
    }
  }, ICON("phone", 16, true), "223 660-2699"), /*#__PURE__*/React.createElement(Button, {
    square: true,
    variant: "secondary",
    onClick: () => go("cotizar"),
    style: {
      height: "var(--control-h-lg)",
      fontFamily: "var(--font-body)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wider)",
      fontWeight: 700
    }
  }, "Cotizar Ya \u2192"))));
}
const FOOT = [["Empresa", ["Nosotros", "Nuestra Red", "Trabaja con nosotros", "Sostenibilidad"]], ["Servicios", ["Mensajería Urbana", "E-commerce Logística", "Envíos Nacionales", "Trámites Legales"]]];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--brand-blue)",
      color: "#fff",
      padding: "var(--space-16) var(--space-6) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo_envios.webp",
    alt: "",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-2xl)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-tighter)"
    }
  }, "Envios ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)"
    }
  }, "Dosruedas"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,0.7)"
    }
  }, "L\xEDderes en mensajer\xEDa express y log\xEDstica urbana sobre dos ruedas. Innovaci\xF3n, rapidez y seguridad en cada entrega."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, ["facebook", "twitter", "instagram"].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      filter: "invert(1)",
      opacity: .85
    }
  }, ICON(n, 20))))), FOOT.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "grid",
      gap: "var(--space-6)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--brand-yellow)"
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "grid",
      gap: "var(--space-4)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "rgba(255,255,255,0.7)"
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--brand-yellow)"
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "grid",
      gap: "var(--space-4)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "rgba(255,255,255,0.7)"
    }
  }, [["map-pin", "Friuli 1972, Mar del Plata"], ["phone", "223 660-2699"], ["mail", "hola@enviosdosruedas.com"]].map(([i, t]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      gap: 12
    }
  }, ICON(i, 20, true), t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-16) auto 0",
      paddingTop: "var(--space-8)",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "rgba(255,255,255,0.4)"
    }
  }, "\xA9 2026 Envios Dosruedas. Todos los derechos reservados. Dise\xF1ado para la velocidad."));
}
Object.assign(window, {
  Navbar,
  Footer,
  ICON,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactoScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Input,
  Textarea,
  Label,
  Checkbox,
  Select,
  Toast
} = window.EnviosDosruedasDesignSystem_a2df0d;
const CHANNELS = [{
  t: "WhatsApp Comercial",
  d: "Respuestas y cotizaciones de envíos en tiempo real.",
  i: "message-square"
}, {
  t: "Llamada de Coordinación",
  d: "Para hablar directamente con un coordinador logístico.",
  i: "phone"
}, {
  t: "Solicitar Cotización B2B",
  d: "Envianos tu base de envíos para un plan personalizado.",
  i: "mail"
}];
function ContactoScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "var(--space-16) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      maxWidth: 1152,
      margin: "0 auto",
      borderRadius: "var(--radius-4xl)",
      padding: "var(--space-16)",
      background: "var(--surface-tint-blue)",
      border: "1px solid rgba(6,54,165,0.05)",
      boxShadow: "var(--shadow-panel)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -128,
      left: -128,
      width: 384,
      height: 384,
      borderRadius: "50%",
      background: "var(--brand-yellow)",
      opacity: .4,
      filter: "blur(100px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -160,
      right: -128,
      width: 500,
      height: 500,
      borderRadius: "50%",
      background: "var(--brand-blue)",
      opacity: .3,
      filter: "blur(130px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: "start",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 16px",
      borderRadius: "var(--radius-full)",
      border: "1px solid rgba(6,54,165,0.10)",
      background: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(8px)",
      color: "var(--brand-blue)",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-mega)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--brand-yellow)",
      boxShadow: "var(--glow-yellow)"
    }
  }), "Conexi\xF3n Directa Mar del Plata"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "9rem",
      fontStyle: "italic",
      lineHeight: .8,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--brand-blue)"
    }
  }, "\xBFHablamos", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "transparent",
      WebkitTextStroke: "2px #0636A5"
    }
  }, "ahora?")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-tight)",
      color: "rgba(6,54,165,0.7)"
    }
  }, "Sin formularios complejos ni esperas. Eleg\xED el canal que mejor se adapte al ritmo de tu e-commerce."), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-8)",
      borderTop: "1px solid rgba(6,54,165,0.10)",
      display: "flex",
      gap: "var(--space-8)"
    }
  }, [["Oficina Central", "Friuli 1972, Mar del Plata"], ["Operación", "Lunes a Sábado"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subheading)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "rgba(6,54,165,0.4)"
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      color: "var(--brand-blue)"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, CHANNELS.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.t,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-7)",
      borderRadius: "var(--radius-3xl)",
      border: "1px solid rgba(6,54,165,0.05)",
      background: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(12px)",
      cursor: "pointer",
      transition: "all var(--dur-slow) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "scale(1.03)";
      e.currentTarget.style.background = "#fff";
      e.currentTarget.style.boxShadow = "var(--shadow-2xl)";
      e.currentTarget.style.borderColor = "var(--brand-yellow)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.background = "rgba(255,255,255,0.6)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "rgba(6,54,165,0.05)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 16,
      borderRadius: "var(--radius-2xl)",
      background: "rgba(6,54,165,0.05)",
      display: "inline-flex"
    }
  }, ICON(c.i, 24)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-xl)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--brand-blue)",
      lineHeight: 1,
      marginBottom: 8
    }
  }, c.t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "rgba(6,54,165,0.5)"
    }
  }, c.d))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(6,54,165,0.2)"
    }
  }, ICON("chevron-right", 20))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1152,
      margin: "var(--space-24) auto 0",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-5xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-tighter)"
    }
  }, "Ped\xED un plan a medida"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Contanos cu\xE1ntos env\xEDos hac\xE9s por semana y armamos una tarifa por volumen. Respondemos el mismo d\xEDa h\xE1bil."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/card_moto01.webp",
    alt: "",
    style: {
      width: "100%",
      height: 220,
      objectFit: "cover",
      borderRadius: "var(--radius-3xl)",
      boxShadow: "var(--shadow-xl)",
      marginTop: "var(--space-4)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      padding: "var(--space-8)",
      borderRadius: "var(--radius-3xl)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Nombre y empresa"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Mat\xEDas \xB7 Tienda MDQ"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Email"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "hola@tutienda.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Servicio de inter\xE9s"), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Eleg\xED un servicio",
    options: [{
      value: "exp",
      label: "Envíos Express"
    }, {
      value: "low",
      label: "Envíos LowCost"
    }, {
      value: "flex",
      label: "Envíos Flex (MeLi)"
    }, {
      value: "3pl",
      label: "E-Commerce & 3PL"
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Mensaje"), /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Hacemos ~40 env\xEDos por semana en zona centro."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quiero recibir novedades de cobertura",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    onClick: () => setSent(true)
  }, "Enviar consulta"), sent && /*#__PURE__*/React.createElement(Toast, {
    variant: "invert",
    title: "Consulta enviada",
    description: "Te respondemos hoy mismo por email.",
    onClose: () => setSent(false),
    style: {
      width: "100%"
    }
  }))));
}
window.ContactoScreen = ContactoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CotizarScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Label,
  StatBlock,
  Separator
} = window.EnviosDosruedasDesignSystem_a2df0d;
const ROUTES = [{
  id: "ruta1",
  origen: "Centro",
  destino: "Terminal Ferroautomotora",
  distancia: "3.7 km",
  tarifa: "$4.600",
  tipo: "Express"
}, {
  id: "ruta2",
  origen: "Plaza Mitre",
  destino: "Av. Constitución 5500",
  distancia: "5.8 km",
  tarifa: "$5.300",
  tipo: "LowCost"
}, {
  id: "ruta3",
  origen: "Puerto",
  destino: "Los Troncos",
  distancia: "4.2 km",
  tarifa: "$4.800",
  tipo: "Express"
}];
function CotizarScreen() {
  const [sel, setSel] = React.useState(ROUTES[0]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--brand-blue)",
      padding: "var(--space-16) var(--space-6)",
      borderTop: "1px solid var(--border-on-invert)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      width: "100%",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "glass",
    dot: true
  }, "Cotizador de Entregas al Instante"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-7xl)",
      fontStyle: "italic",
      lineHeight: .9,
      color: "#fff"
    }
  }, "Cotiz\xE1 tu env\xEDo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)"
    }
  }, "sin registro")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgba(255,255,255,0.6)"
    }
  }, "Eleg\xED una de nuestras rutas m\xE1s solicitadas para calcular la distancia y la tarifa final en el acto. R\xE1pido, transparente y sin sorpresas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, ROUTES.map(r => {
    const on = sel.id === r.id;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      onClick: () => setSel(r),
      style: {
        textAlign: "left",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-xl)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        border: "1px solid " + (on ? "var(--brand-yellow)" : "rgba(255,255,255,0.10)"),
        boxShadow: on ? "0 0 0 1px var(--brand-yellow)" : "none",
        transition: "all var(--dur) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-headline)",
        fontSize: "var(--text-xs)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-wider)",
        color: "#fff"
      }
    }, r.origen, " \u279C ", r.destino), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: 11,
        color: "rgba(255,255,255,0.4)"
      }
    }, "Servicio ", r.tipo, " optimizado de \xFAltima milla.")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "var(--brand-yellow)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-code)",
        fontSize: 11
      }
    }, r.distancia), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        opacity: on ? 1 : .4
      }
    }, "\u279C")));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      width: "100%",
      margin: "0 auto",
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-3xl)",
      border: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(20px)",
      padding: "var(--space-8)",
      boxShadow: "var(--shadow-2xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -96,
      right: -96,
      width: 192,
      height: 192,
      borderRadius: "50%",
      background: "rgba(255,236,1,0.10)",
      filter: "blur(60px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "var(--space-6)",
      paddingBottom: "var(--space-4)",
      borderBottom: "1px solid rgba(255,255,255,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-lg)",
      letterSpacing: "var(--tracking-wide)",
      color: "#fff"
    }
  }, "C\xE1lculo Autom\xE1tico"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "rgba(255,255,255,0.4)"
    }
  }, "Sistema Dosruedas Maps")), /*#__PURE__*/React.createElement("span", {
    style: {
      filter: "invert(1)",
      opacity: .8
    }
  }, ICON("map-pin", 24))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    eyebrow: true,
    onInvert: true
  }, "Origen"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-sm)",
      color: "#fff"
    }
  }, sel.origen)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    eyebrow: true,
    onInvert: true
  }, "Destino"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-sm)",
      color: "#fff"
    }
  }, sel.destino)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    eyebrow: true,
    onInvert: true
  }, "Distancia"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      color: "#fff"
    }
  }, sel.distancia)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    eyebrow: true,
    onInvert: true
  }, "Tipo de Env\xEDo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      color: "#fff",
      textTransform: "uppercase"
    }
  }, sel.tipo))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-6)",
      borderTop: "1px solid rgba(255,255,255,0.10)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    eyebrow: true,
    onInvert: true
  }, "Tarifa Final"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: 9,
      fontWeight: 300,
      color: "var(--brand-yellow)"
    }
  }, "Precios con IVA incluido")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-headline)",
      fontStyle: "italic",
      fontSize: "var(--text-4xl)",
      letterSpacing: "var(--tracking-tight)",
      color: "#fff"
    }
  }, sel.tarifa, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      color: "rgba(255,255,255,0.4)",
      marginLeft: 6
    }
  }, "ARS")))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      width: "100%",
      marginTop: "var(--space-6)",
      height: "var(--control-h-xl)",
      borderRadius: "var(--radius-2xl)",
      fontFamily: "var(--font-subheading)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      fontSize: "var(--text-lg)",
      boxShadow: "var(--shadow-accent)"
    }
  }, "Confirmar por WhatsApp \u279C"))));
}
window.CotizarScreen = CotizarScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CotizarScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Tabs,
  Accordion,
  Table,
  StatBlock
} = window.EnviosDosruedasDesignSystem_a2df0d;
const FEATURES = [{
  t: "Mensajería Express",
  d: "Servicio premium de entrega inmediata en el área metropolitana. Tus documentos y paquetes en minutos.",
  i: "bike",
  inv: true
}, {
  t: "Seguridad Garantizada",
  d: "Cada envío cuenta con póliza de cumplimiento y rastreo satelital activo durante todo el trayecto.",
  i: "shield-check",
  inv: false
}, {
  t: "Compromiso de Tiempo",
  d: "Si no llegamos a la hora acordada, el costo de tu envío corre por nuestra cuenta. Sin excusas.",
  i: "clock",
  inv: true
}, {
  t: "Cobertura Nacional",
  d: "Llegamos a cada rincón del país gracias a nuestra red de aliados estratégicos y flota propia.",
  i: "globe",
  inv: false
}];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-page)",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -400,
      right: -400,
      width: 800,
      height: 800,
      borderRadius: "50%",
      background: "var(--brand-yellow)",
      filter: "blur(120px)",
      opacity: .10,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-8xl)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--text-heading)"
    }
  }, "Tu Soluci\xF3n", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)",
      background: "var(--brand-blue)",
      padding: "0 10px",
      display: "inline-block",
      transform: "rotate(-1deg)"
    }
  }, "Confiable")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 600,
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)"
    }
  }, "Somos tu partner estrat\xE9gico en mensajer\xEDa, env\xEDos en el d\xEDa y delivery de \xFAltima milla. Soluciones \xE1giles, seguras y competitivas para potenciar tu marca."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    onClick: () => go("cotizar")
  }, "Cotizar Env\xEDo"), /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    variant: "outline",
    onClick: () => go("servicio")
  }, "Ver Tarifas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      opacity: .7,
      filter: "grayscale(1)"
    }
  }, [["package", "+1M Envíos"], ["map-pin", "Cobertura Total"], ["fast-forward", "Express 24h"]].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-sm)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)"
    }
  }, ICON(i, 20), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 520,
      borderRadius: "var(--radius-3xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-2xl)",
      transform: "rotate(2deg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/card_mapa.webp",
    alt: "Mapa de cobertura",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(6,54,165,0.10)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 32,
      left: 32,
      background: "var(--brand-yellow)",
      color: "var(--brand-blue)",
      padding: "var(--space-4) var(--space-6)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      borderLeft: "8px solid var(--brand-blue)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-headline)",
      fontSize: "var(--text-3xl)",
      lineHeight: 1,
      textTransform: "uppercase"
    }
  }, "Entregas en", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--brand-blue)",
      color: "#fff",
      padding: "0 4px"
    }
  }, "Menos de 60m")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-24) var(--space-6)",
      background: "var(--surface-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "grid",
      gap: "var(--space-4)",
      marginBottom: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-6xl)",
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--text-heading)"
    }
  }, "Nuestros ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline",
      textDecorationColor: "var(--brand-yellow)",
      textDecorationThickness: 6
    }
  }, "Servicios")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto",
      maxWidth: 700,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lg)",
      color: "var(--text-muted)"
    }
  }, "Dise\xF1amos soluciones log\xEDsticas que se adaptan a las necesidades de tu empresa o env\xEDos personales.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-8)"
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.t,
    elevation: "xl",
    style: {
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: "var(--space-8)",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-2xl)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: f.inv ? "var(--brand-blue)" : "var(--brand-yellow)",
      marginBottom: "var(--space-2)"
    }
  }, ICON(f.i, 28, f.inv)), /*#__PURE__*/React.createElement(CardTitle, {
    style: {
      fontSize: "var(--text-2xl)",
      color: "var(--text-heading)"
    }
  }, f.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)"
    }
  }, f.d))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-5xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-tighter)"
    }
  }, "Tarifas de referencia"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "exp",
      label: "Express",
      content: /*#__PURE__*/React.createElement(Table, {
        caption: "IVA incluido \xB7 Mar del Plata",
        columns: ["Zona", "Hasta 5 kg", "Hasta 10 kg"],
        rows: [["Centro", "$4.600", "$5.200"], ["Puerto", "$4.800", "$5.400"], ["Los Troncos", "$5.300", "$5.900"]]
      })
    }, {
      value: "low",
      label: "LowCost",
      content: /*#__PURE__*/React.createElement(Table, {
        caption: "Entrega en el d\xEDa por zonas",
        columns: ["Zona", "Hasta 5 kg", "Hasta 10 kg"],
        rows: [["Centro", "$3.900", "$4.400"], ["Puerto", "$4.100", "$4.600"], ["Los Troncos", "$4.500", "$5.000"]]
      })
    }, {
      value: "flex",
      label: "Flex",
      content: /*#__PURE__*/React.createElement(Table, {
        caption: "Socios MercadoLibre Flex",
        columns: ["Volumen diario", "Precio por paquete"],
        rows: [["1 – 20", "$3.400"], ["21 – 60", "$3.100"], ["60 +", "A convenir"]]
      })
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-5xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-tighter)"
    }
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "¿Cuánto tarda un envío Express?",
      content: "Hasta 2 horas desde la confirmación, dentro del ejido urbano de Mar del Plata."
    }, {
      title: "¿Trabajan con MercadoLibre Flex?",
      content: "Sí, somos socios Flex con retiros programados de lunes a sábado."
    }, {
      title: "¿Necesito contrato?",
      content: "No. Trabajás sin contrato ni mínimos mensuales; pagás por envío."
    }]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--brand-blue)",
      color: "#fff",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      width: "33%",
      background: "rgba(255,236,1,0.10)",
      transform: "skewX(-12deg) translateX(50%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 840,
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-7xl)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tighter)"
    }
  }, "\xBFListo para enviar", /*#__PURE__*/React.createElement("br", null), "con ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)"
    }
  }, "Los Mejores?")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-xl)",
      color: "rgba(255,255,255,0.8)"
    }
  }, "Empieza hoy mismo y descubre por qu\xE9 miles de empresas conf\xEDan en Envios Dosruedas para su log\xEDstica diaria."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "hero",
    variant: "secondary",
    onClick: () => go("cotizar")
  }, "Crear Cuenta \u2192"), /*#__PURE__*/React.createElement(Button, {
    size: "hero",
    variant: "ghost",
    style: {
      border: "2px solid rgba(255,255,255,0.6)",
      color: "#fff"
    },
    onClick: () => go("servicio")
  }, "Ver Tarifas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-12)",
      paddingTop: "var(--space-8)",
      borderTop: "1px solid var(--border-on-invert)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    onInvert: true,
    label: "Env\xEDos entregados",
    value: "+1M"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onInvert: true,
    label: "Tiempo promedio",
    value: "42",
    unit: "MIN"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onInvert: true,
    label: "Operaci\xF3n",
    value: "Lun \u2013 S\xE1b"
  }))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicioScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  CardContent,
  CardTitle,
  Table,
  Accordion,
  Alert,
  Progress,
  StatBlock,
  Separator
} = window.EnviosDosruedasDesignSystem_a2df0d;
const PLANS = [{
  t: "Express",
  d: "Entrega inmediata en hasta 2 horas dentro de Mar del Plata.",
  p: "$4.600",
  img: "fondo_express.webp",
  rec: false
}, {
  t: "LowCost",
  d: "Económico e inteligente: entrega en el día agrupada por zonas.",
  p: "$3.900",
  img: "fondo_lowcost.webp",
  rec: true
}, {
  t: "Flex (MeLi)",
  d: "Socios MercadoLibre Flex con retiro programado diario.",
  p: "$3.400",
  img: "fondo_flex.webp",
  rec: false
}];
function ServicioScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      minHeight: 420,
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--space-16) var(--space-6)",
      background: "var(--brand-blue)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hero_express.webp",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top,rgba(6,54,165,0.95),rgba(6,54,165,0.35))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      width: "100%",
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "glass",
    dot: true
  }, "Servicios \xB7 Mar del Plata"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-8xl)",
      lineHeight: .85,
      letterSpacing: "var(--tracking-tighter)",
      color: "#fff"
    }
  }, "Env\xEDos ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)"
    }
  }, "Express")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-xl)",
      color: "rgba(255,255,255,0.8)"
    }
  }, "Retiramos en minutos y entregamos en menos de dos horas. Rastreo activo, seguro de cumplimiento y coordinaci\xF3n por WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    variant: "secondary",
    onClick: () => go("cotizar")
  }, "Cotizar Ahora"), /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    variant: "ghost",
    style: {
      border: "2px solid rgba(255,255,255,0.6)",
      color: "#fff"
    },
    onClick: () => go("contacto")
  }, "Hablar con ventas")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-8)"
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    elevation: "2xl",
    accent: p.rec,
    style: {
      position: "relative"
    }
  }, p.rec && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--brand-yellow)",
      color: "var(--brand-blue)",
      textAlign: "center",
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-tight)",
      padding: "4px 0"
    }
  }, "Servicio Recomendado"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/" + p.img,
    alt: "",
    style: {
      width: "100%",
      height: 150,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: "var(--space-8)",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(CardTitle, {
    style: {
      color: "var(--text-heading)",
      fontSize: "var(--text-3xl)"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, p.d), /*#__PURE__*/React.createElement(StatBlock, {
    label: "Desde",
    value: p.p,
    unit: "ARS"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: p.rec ? "secondary" : "default",
    onClick: () => go("cotizar")
  }, "Elegir ", p.t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-5xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-tighter)"
    }
  }, "Seguimiento del env\xEDo"), /*#__PURE__*/React.createElement(Alert, {
    variant: "accent",
    title: "En camino",
    icon: ICON("bike", 20)
  }, "El cadete retir\xF3 el paquete a las 14:20 en Friuli 1972."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 62
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-subheading)",
      fontSize: "var(--text-xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Retirado"), /*#__PURE__*/React.createElement("span", null, "En tr\xE1nsito"), /*#__PURE__*/React.createElement("span", null, "Entregado"))), /*#__PURE__*/React.createElement(Table, {
    columns: ["Hora", "Evento", "Zona"],
    rows: [["14:20", "Retiro confirmado", "Centro"], ["14:38", "En tránsito", "Av. Colón"], ["—", "Entrega estimada 15:05", "Los Troncos"]]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-5xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-tighter)"
    }
  }, "Detalles del servicio"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "Cobertura",
      content: "Todo el ejido urbano de Mar del Plata; zonas periféricas con recargo por distancia."
    }, {
      title: "Seguro y responsabilidad",
      content: "Póliza de cumplimiento incluida y rastreo satelital activo durante el trayecto."
    }, {
      title: "Formas de pago",
      content: "Transferencia, efectivo o contra entrega. Sin contrato ni mínimos mensuales."
    }]
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/box_card.jpeg",
    alt: "",
    style: {
      width: "100%",
      height: 200,
      objectFit: "cover",
      borderRadius: "var(--radius-3xl)",
      boxShadow: "var(--shadow-xl)"
    }
  }))))));
}
window.ServicioScreen = ServicioScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicioScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
