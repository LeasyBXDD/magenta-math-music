function sprintf() {
    var e = /%%|%(\d+\$)?([\-+\'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
        r = arguments,
        t = 0,
        n = r[t++],
        a = function (e, r, t, n) {
            t || (t = " ");
            var a = e.length >= r ? "" : new Array(1 + r - e.length >>> 0).join(t);
            return n ? e + a : a + e
        },
        i = function (e, r, t, n, i, c) {
            var s = n - e.length;
            return s > 0 && (e = t || !i ? a(e, n, c, t) : e.slice(0, r.length) + a("", s, "0", !0) + e.slice(r.length)), e
        },
        c = function (e, r, t, n, c, s, o) {
            var u = e >>> 0;
            return t = t && u && { 2: "0b", 8: "0", 16: "0x" }[r] || "", e = t + a(u.toString(r), s || 0, "0", !1), i(e, t, n, c, o)
        },
        s = function (e, r, t, n, a, c) {
            return null !== n && void 0 !== n && (e = e.slice(0, n)), i(e, "", r, t, a, c)
        },
        o = function (e, n, o, u, f, h) {
            var l, d, g, p, b;
            if ("%%" === e)
                return "%";
            var v, x = !1, w = "", m = !1, E = !1, F = " ", k = o.length;
            for (v = 0; o && k > v; v++)
                switch (o.charAt(v)) {
                    case " ": w = " ";
                        break;
                    case "+": w = "+";
                        break;
                    case "-": x = !0;
                        break;
                    case "'": F = o.charAt(v + 1);
                        break;
                    case "0": m = !0, F = "0";
                        break;
                    case "#": E = !0
                }
            if (u = u ? "*" === u ? +r[t++] : "*" === u.charAt(0) ? +r[u.slice(1, -1)] : +u : 0, 0 > u && (u = -u, x = !0), !isFinite(u))
                throw new Error("sprintf: (minimum-)width must be finite");
            switch (f = f ? "*" === f ? +r[t++] : "*" === f.charAt(0) ? +r[f.slice(1, -1)] : +f : "fFeE".indexOf(h) > -1 ? 6 : "d" === h ? 0 : void 0, b = n ? r[n.slice(0, -1)] : r[t++], h) {
                case "s":
                    return s(String(b), x, u, f, m, F);
                case "c":
                    return s(String.fromCharCode(+b), x, u, f, m);
                case "b":
                    return c(b, 2, E, x, u, f, m);
                case "o":
                    return c(b, 8, E, x, u, f, m);
                case "x":
                    return c(b, 16, E, x, u, f, m);
                case "X":
                    return c(b, 16, E, x, u, f, m).toUpperCase();
                case "u":
                    return c(b, 10, E, x, u, f, m);
                case "i":
                case "d":
                    return l = +b || 0, l = Math.round(l - l % 1), d = 0 > l ? "-" : w, b = d + a(String(Math.abs(l)), f, "0", !1), i(b, d, x, u, m);
                case "e":
                case "E":
                case "f":
                case "F":
                case "g":
                case "G":
                    return l = +b, d = 0 > l ? "-" : w, g = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(h.toLowerCase())], p = ["toString", "toUpperCase"]["eEfFgG".indexOf(h) % 2], b = d + Math.abs(l)[g](f), i(b, d, x, u, m)[p]();
                default:
                    return e
            }
        }; 
        return n.replace(e, o)
}
function printf(e, r) {
    var t = this.sprintf.apply(this, [e].concat(r));
    console.log(t)
}
