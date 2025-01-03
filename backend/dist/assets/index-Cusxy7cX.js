(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function a(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Ju(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var gd = { exports: {} },
  Rs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = Symbol.for('react.transitional.element'),
  sp = Symbol.for('react.fragment');
function pd(e, t, n) {
  var a = null;
  if (
    (n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    'key' in t)
  ) {
    n = {};
    for (var l in t) l !== 'key' && (n[l] = t[l]);
  } else n = t;
  return (
    (t = n.ref),
    { $$typeof: ip, type: e, key: a, ref: t !== void 0 ? t : null, props: n }
  );
}
Rs.Fragment = sp;
Rs.jsx = pd;
Rs.jsxs = pd;
gd.exports = Rs;
var d = gd.exports,
  yd = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fu = Symbol.for('react.transitional.element'),
  rp = Symbol.for('react.portal'),
  up = Symbol.for('react.fragment'),
  op = Symbol.for('react.strict_mode'),
  cp = Symbol.for('react.profiler'),
  fp = Symbol.for('react.consumer'),
  dp = Symbol.for('react.context'),
  hp = Symbol.for('react.forward_ref'),
  mp = Symbol.for('react.suspense'),
  gp = Symbol.for('react.memo'),
  vd = Symbol.for('react.lazy'),
  sc = Symbol.iterator;
function pp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (sc && e[sc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var bd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xd = Object.assign,
  Sd = {};
function La(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sd),
    (this.updater = n || bd);
}
La.prototype.isReactComponent = {};
La.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
La.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ed() {}
Ed.prototype = La.prototype;
function Wu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sd),
    (this.updater = n || bd);
}
var Pu = (Wu.prototype = new Ed());
Pu.constructor = Wu;
xd(Pu, La.prototype);
Pu.isPureReactComponent = !0;
var rc = Array.isArray,
  ne = { H: null, A: null, T: null, S: null },
  wd = Object.prototype.hasOwnProperty;
function Iu(e, t, n, a, l, i) {
  return (
    (n = i.ref),
    { $$typeof: Fu, type: e, key: t, ref: n !== void 0 ? n : null, props: i }
  );
}
function yp(e, t) {
  return Iu(e.type, t, void 0, void 0, void 0, e.props);
}
function eo(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Fu;
}
function vp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var uc = /\/+/g;
function tr(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? vp('' + e.key)
    : t.toString(36);
}
function oc() {}
function bp(e) {
  switch (e.status) {
    case 'fulfilled':
      return e.value;
    case 'rejected':
      throw e.reason;
    default:
      switch (
        (typeof e.status == 'string'
          ? e.then(oc, oc)
          : ((e.status = 'pending'),
            e.then(
              function (t) {
                e.status === 'pending' &&
                  ((e.status = 'fulfilled'), (e.value = t));
              },
              function (t) {
                e.status === 'pending' &&
                  ((e.status = 'rejected'), (e.reason = t));
              }
            )),
        e.status)
      ) {
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw e.reason;
      }
  }
  throw e;
}
function ta(e, t, n, a, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'bigint':
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Fu:
          case rp:
            s = !0;
            break;
          case vd:
            return (s = e._init), ta(s(e._payload), t, n, a, l);
        }
    }
  if (s)
    return (
      (l = l(e)),
      (s = a === '' ? '.' + tr(e, 0) : a),
      rc(l)
        ? ((n = ''),
          s != null && (n = s.replace(uc, '$&/') + '/'),
          ta(l, t, n, '', function (o) {
            return o;
          }))
        : l != null &&
          (eo(l) &&
            (l = yp(
              l,
              n +
                (l.key == null || (e && e.key === l.key)
                  ? ''
                  : ('' + l.key).replace(uc, '$&/') + '/') +
                s
            )),
          t.push(l)),
      1
    );
  s = 0;
  var r = a === '' ? '.' : a + ':';
  if (rc(e))
    for (var u = 0; u < e.length; u++)
      (a = e[u]), (i = r + tr(a, u)), (s += ta(a, t, n, i, l));
  else if (((u = pp(e)), typeof u == 'function'))
    for (e = u.call(e), u = 0; !(a = e.next()).done; )
      (a = a.value), (i = r + tr(a, u++)), (s += ta(a, t, n, i, l));
  else if (i === 'object') {
    if (typeof e.then == 'function') return ta(bp(e), t, n, a, l);
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  }
  return s;
}
function ci(e, t, n) {
  if (e == null) return e;
  var a = [],
    l = 0;
  return (
    ta(e, a, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    a
  );
}
function xp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var cc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        if (
          typeof window == 'object' &&
          typeof window.ErrorEvent == 'function'
        ) {
          var t = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == 'object' && e !== null && typeof e.message == 'string'
                ? String(e.message)
                : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          typeof process == 'object' &&
          typeof process.emit == 'function'
        ) {
          process.emit('uncaughtException', e);
          return;
        }
        console.error(e);
      };
function Sp() {}
B.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!eo(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
B.Component = La;
B.Fragment = up;
B.Profiler = cp;
B.PureComponent = Wu;
B.StrictMode = op;
B.Suspense = mp;
B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne;
B.act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
B.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'The argument must be a React element, but you passed ' + e + '.'
    );
  var a = xd({}, e.props),
    l = e.key,
    i = void 0;
  if (t != null)
    for (s in (t.ref !== void 0 && (i = void 0),
    t.key !== void 0 && (l = '' + t.key),
    t))
      !wd.call(t, s) ||
        s === 'key' ||
        s === '__self' ||
        s === '__source' ||
        (s === 'ref' && t.ref === void 0) ||
        (a[s] = t[s]);
  var s = arguments.length - 2;
  if (s === 1) a.children = n;
  else if (1 < s) {
    for (var r = Array(s), u = 0; u < s; u++) r[u] = arguments[u + 2];
    a.children = r;
  }
  return Iu(e.type, l, void 0, void 0, i, a);
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: dp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = e),
    (e.Consumer = { $$typeof: fp, _context: e }),
    e
  );
};
B.createElement = function (e, t, n) {
  var a,
    l = {},
    i = null;
  if (t != null)
    for (a in (t.key !== void 0 && (i = '' + t.key), t))
      wd.call(t, a) &&
        a !== 'key' &&
        a !== '__self' &&
        a !== '__source' &&
        (l[a] = t[a]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var r = Array(s), u = 0; u < s; u++) r[u] = arguments[u + 2];
    l.children = r;
  }
  if (e && e.defaultProps)
    for (a in ((s = e.defaultProps), s)) l[a] === void 0 && (l[a] = s[a]);
  return Iu(e, i, void 0, void 0, null, l);
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: hp, render: e };
};
B.isValidElement = eo;
B.lazy = function (e) {
  return { $$typeof: vd, _payload: { _status: -1, _result: e }, _init: xp };
};
B.memo = function (e, t) {
  return { $$typeof: gp, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ne.T,
    n = {};
  ne.T = n;
  try {
    var a = e(),
      l = ne.S;
    l !== null && l(n, a),
      typeof a == 'object' &&
        a !== null &&
        typeof a.then == 'function' &&
        a.then(Sp, cc);
  } catch (i) {
    cc(i);
  } finally {
    ne.T = t;
  }
};
B.unstable_useCacheRefresh = function () {
  return ne.H.useCacheRefresh();
};
B.use = function (e) {
  return ne.H.use(e);
};
B.useActionState = function (e, t, n) {
  return ne.H.useActionState(e, t, n);
};
B.useCallback = function (e, t) {
  return ne.H.useCallback(e, t);
};
B.useContext = function (e) {
  return ne.H.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e, t) {
  return ne.H.useDeferredValue(e, t);
};
B.useEffect = function (e, t) {
  return ne.H.useEffect(e, t);
};
B.useId = function () {
  return ne.H.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return ne.H.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return ne.H.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return ne.H.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return ne.H.useMemo(e, t);
};
B.useOptimistic = function (e, t) {
  return ne.H.useOptimistic(e, t);
};
B.useReducer = function (e, t, n) {
  return ne.H.useReducer(e, t, n);
};
B.useRef = function (e) {
  return ne.H.useRef(e);
};
B.useState = function (e) {
  return ne.H.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return ne.H.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return ne.H.useTransition();
};
B.version = '19.0.0';
yd.exports = B;
var E = yd.exports;
const Ep = Ju(E);
var Nd = { exports: {} },
  As = {},
  jd = { exports: {} },
  Od = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, z) {
    var U = A.length;
    A.push(z);
    e: for (; 0 < U; ) {
      var G = (U - 1) >>> 1,
        I = A[G];
      if (0 < l(I, z)) (A[G] = z), (A[U] = I), (U = G);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function a(A) {
    if (A.length === 0) return null;
    var z = A[0],
      U = A.pop();
    if (U !== z) {
      A[0] = U;
      e: for (var G = 0, I = A.length, xn = I >>> 1; G < xn; ) {
        var Sn = 2 * (G + 1) - 1,
          er = A[Sn],
          En = Sn + 1,
          oi = A[En];
        if (0 > l(er, U))
          En < I && 0 > l(oi, er)
            ? ((A[G] = oi), (A[En] = U), (G = En))
            : ((A[G] = er), (A[Sn] = U), (G = Sn));
        else if (En < I && 0 > l(oi, U)) (A[G] = oi), (A[En] = U), (G = En);
        else break e;
      }
    }
    return z;
  }
  function l(A, z) {
    var U = A.sortIndex - z.sortIndex;
    return U !== 0 ? U : A.id - z.id;
  }
  if (
    ((e.unstable_now = void 0),
    typeof performance == 'object' && typeof performance.now == 'function')
  ) {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      r = s.now();
    e.unstable_now = function () {
      return s.now() - r;
    };
  }
  var u = [],
    o = [],
    c = 1,
    h = null,
    f = 3,
    m = !1,
    y = !1,
    x = !1,
    b = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null;
  function v(A) {
    for (var z = n(o); z !== null; ) {
      if (z.callback === null) a(o);
      else if (z.startTime <= A)
        a(o), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(o);
    }
  }
  function S(A) {
    if (((x = !1), v(A), !y))
      if (n(u) !== null) (y = !0), Ce();
      else {
        var z = n(o);
        z !== null && De(S, z.startTime - A);
      }
  }
  var w = !1,
    O = -1,
    T = 5,
    R = -1;
  function D() {
    return !(e.unstable_now() - R < T);
  }
  function C() {
    if (w) {
      var A = e.unstable_now();
      R = A;
      var z = !0;
      try {
        e: {
          (y = !1), x && ((x = !1), p(O), (O = -1)), (m = !0);
          var U = f;
          try {
            t: {
              for (
                v(A), h = n(u);
                h !== null && !(h.expirationTime > A && D());

              ) {
                var G = h.callback;
                if (typeof G == 'function') {
                  (h.callback = null), (f = h.priorityLevel);
                  var I = G(h.expirationTime <= A);
                  if (((A = e.unstable_now()), typeof I == 'function')) {
                    (h.callback = I), v(A), (z = !0);
                    break t;
                  }
                  h === n(u) && a(u), v(A);
                } else a(u);
                h = n(u);
              }
              if (h !== null) z = !0;
              else {
                var xn = n(o);
                xn !== null && De(S, xn.startTime - A), (z = !1);
              }
            }
            break e;
          } finally {
            (h = null), (f = U), (m = !1);
          }
          z = void 0;
        }
      } finally {
        z ? L() : (w = !1);
      }
    }
  }
  var L;
  if (typeof g == 'function')
    L = function () {
      g(C);
    };
  else if (typeof MessageChannel < 'u') {
    var F = new MessageChannel(),
      ot = F.port2;
    (F.port1.onmessage = C),
      (L = function () {
        ot.postMessage(null);
      });
  } else
    L = function () {
      b(C, 0);
    };
  function Ce() {
    w || ((w = !0), L());
  }
  function De(A, z) {
    O = b(function () {
      A(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Ce());
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (A) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = f;
      }
      var U = f;
      f = z;
      try {
        return A();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, z) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var U = f;
      f = A;
      try {
        return z();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (A, z, U) {
      var G = e.unstable_now();
      switch (
        (typeof U == 'object' && U !== null
          ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? G + U : G))
          : (U = G),
        A)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = U + I),
        (A = {
          id: c++,
          callback: z,
          priorityLevel: A,
          startTime: U,
          expirationTime: I,
          sortIndex: -1,
        }),
        U > G
          ? ((A.sortIndex = U),
            t(o, A),
            n(u) === null &&
              A === n(o) &&
              (x ? (p(O), (O = -1)) : (x = !0), De(S, U - G)))
          : ((A.sortIndex = I), t(u, A), y || m || ((y = !0), Ce())),
        A
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (A) {
      var z = f;
      return function () {
        var U = f;
        f = z;
        try {
          return A.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(Od);
jd.exports = Od;
var wp = jd.exports,
  Td = { exports: {} },
  Ae = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Np = E;
function Rd(e) {
  var t = 'https://react.dev/errors/' + e;
  if (1 < arguments.length) {
    t += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      t += '&args[]=' + encodeURIComponent(arguments[n]);
  }
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function Xt() {}
var Te = {
    d: {
      f: Xt,
      r: function () {
        throw Error(Rd(522));
      },
      D: Xt,
      C: Xt,
      L: Xt,
      m: Xt,
      X: Xt,
      S: Xt,
      M: Xt,
    },
    p: 0,
    findDOMNode: null,
  },
  jp = Symbol.for('react.portal');
function Op(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jp,
    key: a == null ? null : '' + a,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
var ol = Np.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function Cs(e, t) {
  if (e === 'font') return '';
  if (typeof t == 'string') return t === 'use-credentials' ? t : '';
}
Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Te;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
    throw Error(Rd(299));
  return Op(e, t, null, n);
};
Ae.flushSync = function (e) {
  var t = ol.T,
    n = Te.p;
  try {
    if (((ol.T = null), (Te.p = 2), e)) return e();
  } finally {
    (ol.T = t), (Te.p = n), Te.d.f();
  }
};
Ae.preconnect = function (e, t) {
  typeof e == 'string' &&
    (t
      ? ((t = t.crossOrigin),
        (t =
          typeof t == 'string' ? (t === 'use-credentials' ? t : '') : void 0))
      : (t = null),
    Te.d.C(e, t));
};
Ae.prefetchDNS = function (e) {
  typeof e == 'string' && Te.d.D(e);
};
Ae.preinit = function (e, t) {
  if (typeof e == 'string' && t && typeof t.as == 'string') {
    var n = t.as,
      a = Cs(n, t.crossOrigin),
      l = typeof t.integrity == 'string' ? t.integrity : void 0,
      i = typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0;
    n === 'style'
      ? Te.d.S(e, typeof t.precedence == 'string' ? t.precedence : void 0, {
          crossOrigin: a,
          integrity: l,
          fetchPriority: i,
        })
      : n === 'script' &&
        Te.d.X(e, {
          crossOrigin: a,
          integrity: l,
          fetchPriority: i,
          nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
        });
  }
};
Ae.preinitModule = function (e, t) {
  if (typeof e == 'string')
    if (typeof t == 'object' && t !== null) {
      if (t.as == null || t.as === 'script') {
        var n = Cs(t.as, t.crossOrigin);
        Te.d.M(e, {
          crossOrigin: n,
          integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
          nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
        });
      }
    } else t == null && Te.d.M(e);
};
Ae.preload = function (e, t) {
  if (
    typeof e == 'string' &&
    typeof t == 'object' &&
    t !== null &&
    typeof t.as == 'string'
  ) {
    var n = t.as,
      a = Cs(n, t.crossOrigin);
    Te.d.L(e, n, {
      crossOrigin: a,
      integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
      nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
      type: typeof t.type == 'string' ? t.type : void 0,
      fetchPriority:
        typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0,
      referrerPolicy:
        typeof t.referrerPolicy == 'string' ? t.referrerPolicy : void 0,
      imageSrcSet: typeof t.imageSrcSet == 'string' ? t.imageSrcSet : void 0,
      imageSizes: typeof t.imageSizes == 'string' ? t.imageSizes : void 0,
      media: typeof t.media == 'string' ? t.media : void 0,
    });
  }
};
Ae.preloadModule = function (e, t) {
  if (typeof e == 'string')
    if (t) {
      var n = Cs(t.as, t.crossOrigin);
      Te.d.m(e, {
        as: typeof t.as == 'string' && t.as !== 'script' ? t.as : void 0,
        crossOrigin: n,
        integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
      });
    } else Te.d.m(e);
};
Ae.requestFormReset = function (e) {
  Te.d.r(e);
};
Ae.unstable_batchedUpdates = function (e, t) {
  return e(t);
};
Ae.useFormState = function (e, t, n) {
  return ol.H.useFormState(e, t, n);
};
Ae.useFormStatus = function () {
  return ol.H.useHostTransitionStatus();
};
Ae.version = '19.0.0';
function Ad() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ad);
    } catch (e) {
      console.error(e);
    }
}
Ad(), (Td.exports = Ae);
var Tp = Td.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var me = wp,
  Cd = E,
  Rp = Tp;
function j(e) {
  var t = 'https://react.dev/errors/' + e;
  if (1 < arguments.length) {
    t += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      t += '&args[]=' + encodeURIComponent(arguments[n]);
  }
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function Dd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
var Ap = Symbol.for('react.element'),
  fi = Symbol.for('react.transitional.element'),
  ll = Symbol.for('react.portal'),
  ia = Symbol.for('react.fragment'),
  zd = Symbol.for('react.strict_mode'),
  Xr = Symbol.for('react.profiler'),
  Cp = Symbol.for('react.provider'),
  Ud = Symbol.for('react.consumer'),
  Dt = Symbol.for('react.context'),
  to = Symbol.for('react.forward_ref'),
  Qr = Symbol.for('react.suspense'),
  Kr = Symbol.for('react.suspense_list'),
  no = Symbol.for('react.memo'),
  Zt = Symbol.for('react.lazy'),
  Ld = Symbol.for('react.offscreen'),
  Dp = Symbol.for('react.memo_cache_sentinel'),
  fc = Symbol.iterator;
function Xa(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (fc && e[fc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var zp = Symbol.for('react.client.reference');
function Zr(e) {
  if (e == null) return null;
  if (typeof e == 'function')
    return e.$$typeof === zp ? null : e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ia:
      return 'Fragment';
    case ll:
      return 'Portal';
    case Xr:
      return 'Profiler';
    case zd:
      return 'StrictMode';
    case Qr:
      return 'Suspense';
    case Kr:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Dt:
        return (e.displayName || 'Context') + '.Provider';
      case Ud:
        return (e._context.displayName || 'Context') + '.Consumer';
      case to:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case no:
        return (
          (t = e.displayName || null), t !== null ? t : Zr(e.type) || 'Memo'
        );
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return Zr(e(t));
        } catch {}
    }
  return null;
}
var H = Cd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  P = Object.assign,
  nr,
  dc;
function il(e) {
  if (nr === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      (nr = (t && t[1]) || ''),
        (dc =
          -1 <
          n.stack.indexOf(`
    at`)
            ? ' (<anonymous>)'
            : -1 < n.stack.indexOf('@')
              ? '@unknown:0:0'
              : '');
    }
  return (
    `
` +
    nr +
    e +
    dc
  );
}
var ar = !1;
function lr(e, t) {
  if (!e || ar) return '';
  ar = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var a = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var h = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(h.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == 'object' && Reflect.construct)
            ) {
              try {
                Reflect.construct(h, []);
              } catch (m) {
                var f = m;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (m) {
                f = m;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (m) {
              f = m;
            }
            (h = e()) &&
              typeof h.catch == 'function' &&
              h.catch(function () {});
          }
        } catch (m) {
          if (m && f && typeof m.stack == 'string') return [m.stack, f.stack];
        }
        return [null, null];
      },
    };
    a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
    var l = Object.getOwnPropertyDescriptor(
      a.DetermineComponentFrameRoot,
      'name'
    );
    l &&
      l.configurable &&
      Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
        value: 'DetermineComponentFrameRoot',
      });
    var i = a.DetermineComponentFrameRoot(),
      s = i[0],
      r = i[1];
    if (s && r) {
      var u = s.split(`
`),
        o = r.split(`
`);
      for (
        l = a = 0;
        a < u.length && !u[a].includes('DetermineComponentFrameRoot');

      )
        a++;
      for (; l < o.length && !o[l].includes('DetermineComponentFrameRoot'); )
        l++;
      if (a === u.length || l === o.length)
        for (
          a = u.length - 1, l = o.length - 1;
          1 <= a && 0 <= l && u[a] !== o[l];

        )
          l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (u[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || u[a] !== o[l])) {
                var c =
                  `
` + u[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    c.includes('<anonymous>') &&
                    (c = c.replace('<anonymous>', e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (ar = !1), (Error.prepareStackTrace = n);
  }
  return (n = e ? e.displayName || e.name : '') ? il(n) : '';
}
function Up(e) {
  switch (e.tag) {
    case 26:
    case 27:
    case 5:
      return il(e.type);
    case 16:
      return il('Lazy');
    case 13:
      return il('Suspense');
    case 19:
      return il('SuspenseList');
    case 0:
    case 15:
      return (e = lr(e.type, !1)), e;
    case 11:
      return (e = lr(e.type.render, !1)), e;
    case 1:
      return (e = lr(e.type, !0)), e;
    default:
      return '';
  }
}
function hc(e) {
  try {
    var t = '';
    do (t += Up(e)), (e = e.return);
    while (e);
    return t;
  } catch (n) {
    return (
      `
Error generating stack: ` +
      n.message +
      `
` +
      n.stack
    );
  }
}
function Ma(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Md(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mc(e) {
  if (Ma(e) !== e) throw Error(j(188));
}
function Lp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ma(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, a = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((a = l.return), a !== null)) {
        n = a;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return mc(l), e;
        if (i === a) return mc(l), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== a.return) (n = l), (a = i);
    else {
      for (var s = !1, r = l.child; r; ) {
        if (r === n) {
          (s = !0), (n = l), (a = i);
          break;
        }
        if (r === a) {
          (s = !0), (a = l), (n = i);
          break;
        }
        r = r.sibling;
      }
      if (!s) {
        for (r = i.child; r; ) {
          if (r === n) {
            (s = !0), (n = i), (a = l);
            break;
          }
          if (r === a) {
            (s = !0), (a = i), (n = l);
            break;
          }
          r = r.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== a) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function _d(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e;
  for (e = e.child; e !== null; ) {
    if (((t = _d(e)), t !== null)) return t;
    e = e.sibling;
  }
  return null;
}
var sl = Array.isArray,
  W = Rp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  zn = { pending: !1, data: null, method: null, action: null },
  Jr = [],
  sa = -1;
function bt(e) {
  return { current: e };
}
function ve(e) {
  0 > sa || ((e.current = Jr[sa]), (Jr[sa] = null), sa--);
}
function ee(e, t) {
  sa++, (Jr[sa] = e.current), (e.current = t);
}
var mt = bt(null),
  Ol = bt(null),
  nn = bt(null),
  Ki = bt(null);
function Zi(e, t) {
  switch ((ee(nn, t), ee(Ol, e), ee(mt, null), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) && (t = t.namespaceURI) ? pf(t) : 0;
      break;
    default:
      if (
        ((e = e === 8 ? t.parentNode : t),
        (t = e.tagName),
        (e = e.namespaceURI))
      )
        (e = pf(e)), (t = Zm(e, t));
      else
        switch (t) {
          case 'svg':
            t = 1;
            break;
          case 'math':
            t = 2;
            break;
          default:
            t = 0;
        }
  }
  ve(mt), ee(mt, t);
}
function ja() {
  ve(mt), ve(Ol), ve(nn);
}
function Fr(e) {
  e.memoizedState !== null && ee(Ki, e);
  var t = mt.current,
    n = Zm(t, e.type);
  t !== n && (ee(Ol, e), ee(mt, n));
}
function Ji(e) {
  Ol.current === e && (ve(mt), ve(Ol)),
    Ki.current === e && (ve(Ki), (Hl._currentValue = zn));
}
var Wr = Object.prototype.hasOwnProperty,
  ao = me.unstable_scheduleCallback,
  ir = me.unstable_cancelCallback,
  Mp = me.unstable_shouldYield,
  _p = me.unstable_requestPaint,
  gt = me.unstable_now,
  Hp = me.unstable_getCurrentPriorityLevel,
  Hd = me.unstable_ImmediatePriority,
  Bd = me.unstable_UserBlockingPriority,
  Fi = me.unstable_NormalPriority,
  Bp = me.unstable_LowPriority,
  kd = me.unstable_IdlePriority,
  kp = me.log,
  qp = me.unstable_setDisableYieldValue,
  Xl = null,
  qe = null;
function Yp(e) {
  if (qe && typeof qe.onCommitFiberRoot == 'function')
    try {
      qe.onCommitFiberRoot(Xl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
function en(e) {
  if (
    (typeof kp == 'function' && qp(e),
    qe && typeof qe.setStrictMode == 'function')
  )
    try {
      qe.setStrictMode(Xl, e);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Gp,
  Vp = Math.log,
  $p = Math.LN2;
function Gp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vp(e) / $p) | 0)) | 0;
}
var di = 128,
  hi = 4194304;
function jn(e) {
  var t = e & 42;
  if (t !== 0) return t;
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194176;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return e & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return e;
  }
}
function Ds(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var a = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    s = e.warmLanes;
  e = e.finishedLanes !== 0;
  var r = n & 134217727;
  return (
    r !== 0
      ? ((n = r & ~l),
        n !== 0
          ? (a = jn(n))
          : ((i &= r),
            i !== 0
              ? (a = jn(i))
              : e || ((s = r & ~s), s !== 0 && (a = jn(s)))))
      : ((r = n & ~l),
        r !== 0
          ? (a = jn(r))
          : i !== 0
            ? (a = jn(i))
            : e || ((s = n & ~s), s !== 0 && (a = jn(s)))),
    a === 0
      ? 0
      : t !== 0 &&
          t !== a &&
          !(t & l) &&
          ((l = a & -a),
          (s = t & -t),
          l >= s || (l === 32 && (s & 4194176) !== 0))
        ? t
        : a
  );
}
function Ql(e, t) {
  return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
}
function Xp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
    case 8:
      return t + 250;
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qd() {
  var e = di;
  return (di <<= 1), !(di & 4194176) && (di = 128), e;
}
function Yd() {
  var e = hi;
  return (hi <<= 1), !(hi & 62914560) && (hi = 4194304), e;
}
function sr(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kl(e, t) {
  (e.pendingLanes |= t),
    t !== 268435456 &&
      ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function Qp(e, t, n, a, l, i) {
  var s = e.pendingLanes;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.warmLanes = 0),
    (e.expiredLanes &= n),
    (e.entangledLanes &= n),
    (e.errorRecoveryDisabledLanes &= n),
    (e.shellSuspendCounter = 0);
  var r = e.entanglements,
    u = e.expirationTimes,
    o = e.hiddenUpdates;
  for (n = s & ~n; 0 < n; ) {
    var c = 31 - Ye(n),
      h = 1 << c;
    (r[c] = 0), (u[c] = -1);
    var f = o[c];
    if (f !== null)
      for (o[c] = null, c = 0; c < f.length; c++) {
        var m = f[c];
        m !== null && (m.lane &= -536870913);
      }
    n &= ~h;
  }
  a !== 0 && Vd(e, a, 0),
    i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
}
function Vd(e, t, n) {
  (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
  var a = 31 - Ye(t);
  (e.entangledLanes |= t),
    (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 4194218));
}
function $d(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var a = 31 - Ye(n),
      l = 1 << a;
    (l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l);
  }
}
function Gd(e) {
  return (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2;
}
function Xd() {
  var e = W.p;
  return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : lg(e.type));
}
function Kp(e, t) {
  var n = W.p;
  try {
    return (W.p = e), t();
  } finally {
    W.p = n;
  }
}
var pn = Math.random().toString(36).slice(2),
  we = '__reactFiber$' + pn,
  Le = '__reactProps$' + pn,
  _a = '__reactContainer$' + pn,
  Pr = '__reactEvents$' + pn,
  Zp = '__reactListeners$' + pn,
  Jp = '__reactHandles$' + pn,
  gc = '__reactResources$' + pn,
  Tl = '__reactMarker$' + pn;
function lo(e) {
  delete e[we], delete e[Le], delete e[Pr], delete e[Zp], delete e[Jp];
}
function Rn(e) {
  var t = e[we];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_a] || n[we])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vf(e); e !== null; ) {
          if ((n = e[we])) return n;
          e = vf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ha(e) {
  if ((e = e[we] || e[_a])) {
    var t = e.tag;
    if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
      return e;
  }
  return null;
}
function rl(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
  throw Error(j(33));
}
function ya(e) {
  var t = e[gc];
  return (
    t ||
      (t = e[gc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    t
  );
}
function pe(e) {
  e[Tl] = !0;
}
var Qd = new Set(),
  Kd = {};
function Xn(e, t) {
  Oa(e, t), Oa(e + 'Capture', t);
}
function Oa(e, t) {
  for (Kd[e] = t, e = 0; e < t.length; e++) Qd.add(t[e]);
}
var Bt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Fp = RegExp(
    '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
  ),
  pc = {},
  yc = {};
function Wp(e) {
  return Wr.call(yc, e)
    ? !0
    : Wr.call(pc, e)
      ? !1
      : Fp.test(e)
        ? (yc[e] = !0)
        : ((pc[e] = !0), !1);
}
function Ai(e, t, n) {
  if (Wp(t))
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
          e.removeAttribute(t);
          return;
        case 'boolean':
          var a = t.toLowerCase().slice(0, 5);
          if (a !== 'data-' && a !== 'aria-') {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, '' + n);
    }
}
function mi(e, t, n) {
  if (n === null) e.removeAttribute(t);
  else {
    switch (typeof n) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        e.removeAttribute(t);
        return;
    }
    e.setAttribute(t, '' + n);
  }
}
function wt(e, t, n, a) {
  if (a === null) e.removeAttribute(n);
  else {
    switch (typeof a) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        e.removeAttribute(n);
        return;
    }
    e.setAttributeNS(t, n, '' + a);
  }
}
function Ze(e) {
  switch (typeof e) {
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Zd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Pp(e) {
  var t = Zd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (s) {
          (a = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return a;
        },
        setValue: function (s) {
          a = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Wi(e) {
  e._valueTracker || (e._valueTracker = Pp(e));
}
function Jd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    a = '';
  return (
    e && (a = Zd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = a),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Pi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
var Ip = /[\n"\\]/g;
function We(e) {
  return e.replace(Ip, function (t) {
    return '\\' + t.charCodeAt(0).toString(16) + ' ';
  });
}
function Ir(e, t, n, a, l, i, s, r) {
  (e.name = ''),
    s != null &&
    typeof s != 'function' &&
    typeof s != 'symbol' &&
    typeof s != 'boolean'
      ? (e.type = s)
      : e.removeAttribute('type'),
    t != null
      ? s === 'number'
        ? ((t === 0 && e.value === '') || e.value != t) &&
          (e.value = '' + Ze(t))
        : e.value !== '' + Ze(t) && (e.value = '' + Ze(t))
      : (s !== 'submit' && s !== 'reset') || e.removeAttribute('value'),
    t != null
      ? eu(e, s, Ze(t))
      : n != null
        ? eu(e, s, Ze(n))
        : a != null && e.removeAttribute('value'),
    l == null && i != null && (e.defaultChecked = !!i),
    l != null &&
      (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
    r != null &&
    typeof r != 'function' &&
    typeof r != 'symbol' &&
    typeof r != 'boolean'
      ? (e.name = '' + Ze(r))
      : e.removeAttribute('name');
}
function Fd(e, t, n, a, l, i, s, r) {
  if (
    (i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean' &&
      (e.type = i),
    t != null || n != null)
  ) {
    if (!((i !== 'submit' && i !== 'reset') || t != null)) return;
    (n = n != null ? '' + Ze(n) : ''),
      (t = t != null ? '' + Ze(t) : n),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (a = a ?? l),
    (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
    (e.checked = r ? e.checked : !!a),
    (e.defaultChecked = !!a),
    s != null &&
      typeof s != 'function' &&
      typeof s != 'symbol' &&
      typeof s != 'boolean' &&
      (e.name = s);
}
function eu(e, t, n) {
  (t === 'number' && Pi(e.ownerDocument) === e) ||
    e.defaultValue === '' + n ||
    (e.defaultValue = '' + n);
}
function va(e, t, n, a) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && a && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Ze(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), a && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wd(e, t, n) {
  if (
    t != null &&
    ((t = '' + Ze(t)), t !== e.value && (e.value = t), n == null)
  ) {
    e.defaultValue !== t && (e.defaultValue = t);
    return;
  }
  e.defaultValue = n != null ? '' + Ze(n) : '';
}
function Pd(e, t, n, a) {
  if (t == null) {
    if (a != null) {
      if (n != null) throw Error(j(92));
      if (sl(a)) {
        if (1 < a.length) throw Error(j(93));
        a = a[0];
      }
      n = a;
    }
    n == null && (n = ''), (t = n);
  }
  (n = Ze(t)),
    (e.defaultValue = n),
    (a = e.textContent),
    a === n && a !== '' && a !== null && (e.value = a);
}
function Ta(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var e0 = new Set(
  'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
    ' '
  )
);
function vc(e, t, n) {
  var a = t.indexOf('--') === 0;
  n == null || typeof n == 'boolean' || n === ''
    ? a
      ? e.setProperty(t, '')
      : t === 'float'
        ? (e.cssFloat = '')
        : (e[t] = '')
    : a
      ? e.setProperty(t, n)
      : typeof n != 'number' || n === 0 || e0.has(t)
        ? t === 'float'
          ? (e.cssFloat = n)
          : (e[t] = ('' + n).trim())
        : (e[t] = n + 'px');
}
function Id(e, t, n) {
  if (t != null && typeof t != 'object') throw Error(j(62));
  if (((e = e.style), n != null)) {
    for (var a in n)
      !n.hasOwnProperty(a) ||
        (t != null && t.hasOwnProperty(a)) ||
        (a.indexOf('--') === 0
          ? e.setProperty(a, '')
          : a === 'float'
            ? (e.cssFloat = '')
            : (e[a] = ''));
    for (var l in t)
      (a = t[l]), t.hasOwnProperty(l) && n[l] !== a && vc(e, l, a);
  } else for (var i in t) t.hasOwnProperty(i) && vc(e, i, t[i]);
}
function io(e) {
  if (e.indexOf('-') === -1) return !1;
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var t0 = new Map([
    ['acceptCharset', 'accept-charset'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
    ['crossOrigin', 'crossorigin'],
    ['accentHeight', 'accent-height'],
    ['alignmentBaseline', 'alignment-baseline'],
    ['arabicForm', 'arabic-form'],
    ['baselineShift', 'baseline-shift'],
    ['capHeight', 'cap-height'],
    ['clipPath', 'clip-path'],
    ['clipRule', 'clip-rule'],
    ['colorInterpolation', 'color-interpolation'],
    ['colorInterpolationFilters', 'color-interpolation-filters'],
    ['colorProfile', 'color-profile'],
    ['colorRendering', 'color-rendering'],
    ['dominantBaseline', 'dominant-baseline'],
    ['enableBackground', 'enable-background'],
    ['fillOpacity', 'fill-opacity'],
    ['fillRule', 'fill-rule'],
    ['floodColor', 'flood-color'],
    ['floodOpacity', 'flood-opacity'],
    ['fontFamily', 'font-family'],
    ['fontSize', 'font-size'],
    ['fontSizeAdjust', 'font-size-adjust'],
    ['fontStretch', 'font-stretch'],
    ['fontStyle', 'font-style'],
    ['fontVariant', 'font-variant'],
    ['fontWeight', 'font-weight'],
    ['glyphName', 'glyph-name'],
    ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
    ['glyphOrientationVertical', 'glyph-orientation-vertical'],
    ['horizAdvX', 'horiz-adv-x'],
    ['horizOriginX', 'horiz-origin-x'],
    ['imageRendering', 'image-rendering'],
    ['letterSpacing', 'letter-spacing'],
    ['lightingColor', 'lighting-color'],
    ['markerEnd', 'marker-end'],
    ['markerMid', 'marker-mid'],
    ['markerStart', 'marker-start'],
    ['overlinePosition', 'overline-position'],
    ['overlineThickness', 'overline-thickness'],
    ['paintOrder', 'paint-order'],
    ['panose-1', 'panose-1'],
    ['pointerEvents', 'pointer-events'],
    ['renderingIntent', 'rendering-intent'],
    ['shapeRendering', 'shape-rendering'],
    ['stopColor', 'stop-color'],
    ['stopOpacity', 'stop-opacity'],
    ['strikethroughPosition', 'strikethrough-position'],
    ['strikethroughThickness', 'strikethrough-thickness'],
    ['strokeDasharray', 'stroke-dasharray'],
    ['strokeDashoffset', 'stroke-dashoffset'],
    ['strokeLinecap', 'stroke-linecap'],
    ['strokeLinejoin', 'stroke-linejoin'],
    ['strokeMiterlimit', 'stroke-miterlimit'],
    ['strokeOpacity', 'stroke-opacity'],
    ['strokeWidth', 'stroke-width'],
    ['textAnchor', 'text-anchor'],
    ['textDecoration', 'text-decoration'],
    ['textRendering', 'text-rendering'],
    ['transformOrigin', 'transform-origin'],
    ['underlinePosition', 'underline-position'],
    ['underlineThickness', 'underline-thickness'],
    ['unicodeBidi', 'unicode-bidi'],
    ['unicodeRange', 'unicode-range'],
    ['unitsPerEm', 'units-per-em'],
    ['vAlphabetic', 'v-alphabetic'],
    ['vHanging', 'v-hanging'],
    ['vIdeographic', 'v-ideographic'],
    ['vMathematical', 'v-mathematical'],
    ['vectorEffect', 'vector-effect'],
    ['vertAdvY', 'vert-adv-y'],
    ['vertOriginX', 'vert-origin-x'],
    ['vertOriginY', 'vert-origin-y'],
    ['wordSpacing', 'word-spacing'],
    ['writingMode', 'writing-mode'],
    ['xmlnsXlink', 'xmlns:xlink'],
    ['xHeight', 'x-height'],
  ]),
  n0 =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Ci(e) {
  return n0.test('' + e)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : e;
}
var tu = null;
function so(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ra = null,
  ba = null;
function bc(e) {
  var t = Ha(e);
  if (t && (e = t.stateNode)) {
    var n = e[Le] || null;
    e: switch (((e = t.stateNode), t.type)) {
      case 'input':
        if (
          (Ir(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ),
          (t = n.name),
          n.type === 'radio' && t != null)
        ) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              'input[name="' + We('' + t) + '"][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var a = n[t];
            if (a !== e && a.form === e.form) {
              var l = a[Le] || null;
              if (!l) throw Error(j(90));
              Ir(
                a,
                l.value,
                l.defaultValue,
                l.defaultValue,
                l.checked,
                l.defaultChecked,
                l.type,
                l.name
              );
            }
          }
          for (t = 0; t < n.length; t++) (a = n[t]), a.form === e.form && Jd(a);
        }
        break e;
      case 'textarea':
        Wd(e, n.value, n.defaultValue);
        break e;
      case 'select':
        (t = n.value), t != null && va(e, !!n.multiple, t, !1);
    }
  }
}
var rr = !1;
function eh(e, t, n) {
  if (rr) return e(t, n);
  rr = !0;
  try {
    var a = e(t);
    return a;
  } finally {
    if (
      ((rr = !1),
      (ra !== null || ba !== null) &&
        (Ys(), ra && ((t = ra), (e = ba), (ba = ra = null), bc(t), e)))
    )
      for (t = 0; t < e.length; t++) bc(e[t]);
  }
}
function Rl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = n[Le] || null;
  if (a === null) return null;
  n = a[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (a = !a.disabled) ||
        ((e = e.type),
        (a = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !a);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var nu = !1;
if (Bt)
  try {
    var Qa = {};
    Object.defineProperty(Qa, 'passive', {
      get: function () {
        nu = !0;
      },
    }),
      window.addEventListener('test', Qa, Qa),
      window.removeEventListener('test', Qa, Qa);
  } catch {
    nu = !1;
  }
var tn = null,
  ro = null,
  Di = null;
function th() {
  if (Di) return Di;
  var e,
    t = ro,
    n = t.length,
    a,
    l = 'value' in tn ? tn.value : tn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (a = 1; a <= s && t[n - a] === l[i - a]; a++);
  return (Di = l.slice(e, 1 < a ? 1 - a : void 0));
}
function zi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gi() {
  return !0;
}
function xc() {
  return !1;
}
function Me(e) {
  function t(n, a, l, i, s) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = a),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var r in e)
      e.hasOwnProperty(r) && ((n = e[r]), (this[r] = n ? n(i) : i[r]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? gi
        : xc),
      (this.isPropagationStopped = xc),
      this
    );
  }
  return (
    P(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = gi));
      },
      persist: function () {},
      isPersistent: gi,
    }),
    t
  );
}
var Qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zs = Me(Qn),
  Zl = P({}, Qn, { view: 0, detail: 0 }),
  a0 = Me(Zl),
  ur,
  or,
  Ka,
  Us = P({}, Zl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ka &&
            (Ka && e.type === 'mousemove'
              ? ((ur = e.screenX - Ka.screenX), (or = e.screenY - Ka.screenY))
              : (or = ur = 0),
            (Ka = e)),
          ur);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : or;
    },
  }),
  Sc = Me(Us),
  l0 = P({}, Us, { dataTransfer: 0 }),
  i0 = Me(l0),
  s0 = P({}, Zl, { relatedTarget: 0 }),
  cr = Me(s0),
  r0 = P({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  u0 = Me(r0),
  o0 = P({}, Qn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  c0 = Me(o0),
  f0 = P({}, Qn, { data: 0 }),
  Ec = Me(f0),
  d0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  h0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  m0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function g0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = m0[e]) ? !!t[e] : !1;
}
function uo() {
  return g0;
}
var p0 = P({}, Zl, {
    key: function (e) {
      if (e.key) {
        var t = d0[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = zi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? h0[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uo,
    charCode: function (e) {
      return e.type === 'keypress' ? zi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? zi(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  y0 = Me(p0),
  v0 = P({}, Us, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wc = Me(v0),
  b0 = P({}, Zl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uo,
  }),
  x0 = Me(b0),
  S0 = P({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  E0 = Me(S0),
  w0 = P({}, Us, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  N0 = Me(w0),
  j0 = P({}, Qn, { newState: 0, oldState: 0 }),
  O0 = Me(j0),
  T0 = [9, 13, 27, 32],
  oo = Bt && 'CompositionEvent' in window,
  cl = null;
Bt && 'documentMode' in document && (cl = document.documentMode);
var R0 = Bt && 'TextEvent' in window && !cl,
  nh = Bt && (!oo || (cl && 8 < cl && 11 >= cl)),
  Nc = ' ',
  jc = !1;
function ah(e, t) {
  switch (e) {
    case 'keyup':
      return T0.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function lh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ua = !1;
function A0(e, t) {
  switch (e) {
    case 'compositionend':
      return lh(t);
    case 'keypress':
      return t.which !== 32 ? null : ((jc = !0), Nc);
    case 'textInput':
      return (e = t.data), e === Nc && jc ? null : e;
    default:
      return null;
  }
}
function C0(e, t) {
  if (ua)
    return e === 'compositionend' || (!oo && ah(e, t))
      ? ((e = th()), (Di = ro = tn = null), (ua = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return nh && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var D0 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Oc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!D0[e.type] : t === 'textarea';
}
function ih(e, t, n, a) {
  ra ? (ba ? ba.push(a) : (ba = [a])) : (ra = a),
    (t = ms(t, 'onChange')),
    0 < t.length &&
      ((n = new zs('onChange', 'change', null, n, a)),
      e.push({ event: n, listeners: t }));
}
var fl = null,
  Al = null;
function z0(e) {
  Xm(e, 0);
}
function Ls(e) {
  var t = rl(e);
  if (Jd(t)) return e;
}
function Tc(e, t) {
  if (e === 'change') return t;
}
var sh = !1;
if (Bt) {
  var fr;
  if (Bt) {
    var dr = 'oninput' in document;
    if (!dr) {
      var Rc = document.createElement('div');
      Rc.setAttribute('oninput', 'return;'),
        (dr = typeof Rc.oninput == 'function');
    }
    fr = dr;
  } else fr = !1;
  sh = fr && (!document.documentMode || 9 < document.documentMode);
}
function Ac() {
  fl && (fl.detachEvent('onpropertychange', rh), (Al = fl = null));
}
function rh(e) {
  if (e.propertyName === 'value' && Ls(Al)) {
    var t = [];
    ih(t, Al, e, so(e)), eh(z0, t);
  }
}
function U0(e, t, n) {
  e === 'focusin'
    ? (Ac(), (fl = t), (Al = n), fl.attachEvent('onpropertychange', rh))
    : e === 'focusout' && Ac();
}
function L0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ls(Al);
}
function M0(e, t) {
  if (e === 'click') return Ls(t);
}
function _0(e, t) {
  if (e === 'input' || e === 'change') return Ls(t);
}
function H0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == 'function' ? Object.is : H0;
function Cl(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var l = n[a];
    if (!Wr.call(t, l) || !Ge(e[l], t[l])) return !1;
  }
  return !0;
}
function Cc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dc(e, t) {
  var n = Cc(e);
  e = 0;
  for (var a; n; ) {
    if (n.nodeType === 3) {
      if (((a = e + n.textContent.length), e <= t && a >= t))
        return { node: n, offset: t - e };
      e = a;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cc(n);
  }
}
function uh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? uh(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function oh(e) {
  e =
    e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
      ? e.ownerDocument.defaultView
      : window;
  for (var t = Pi(e.document); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Pi(e.document);
  }
  return t;
}
function co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function B0(e, t) {
  var n = oh(t);
  t = e.focusedElem;
  var a = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    uh(t.ownerDocument.documentElement, t)
  ) {
    if (a !== null && co(t)) {
      if (
        ((e = a.start),
        (n = a.end),
        n === void 0 && (n = e),
        'selectionStart' in t)
      )
        (t.selectionStart = e), (t.selectionEnd = Math.min(n, t.value.length));
      else if (
        ((n = ((e = t.ownerDocument || document) && e.defaultView) || window),
        n.getSelection)
      ) {
        n = n.getSelection();
        var l = t.textContent.length,
          i = Math.min(a.start, l);
        (a = a.end === void 0 ? i : Math.min(a.end, l)),
          !n.extend && i > a && ((l = a), (a = i), (i = l)),
          (l = Dc(t, i));
        var s = Dc(t, a);
        l &&
          s &&
          (n.rangeCount !== 1 ||
            n.anchorNode !== l.node ||
            n.anchorOffset !== l.offset ||
            n.focusNode !== s.node ||
            n.focusOffset !== s.offset) &&
          ((e = e.createRange()),
          e.setStart(l.node, l.offset),
          n.removeAllRanges(),
          i > a
            ? (n.addRange(e), n.extend(s.node, s.offset))
            : (e.setEnd(s.node, s.offset), n.addRange(e)));
      }
    }
    for (e = [], n = t; (n = n.parentNode); )
      n.nodeType === 1 &&
        e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
    for (typeof t.focus == 'function' && t.focus(), t = 0; t < e.length; t++)
      (n = e[t]),
        (n.element.scrollLeft = n.left),
        (n.element.scrollTop = n.top);
  }
}
var k0 = Bt && 'documentMode' in document && 11 >= document.documentMode,
  oa = null,
  au = null,
  dl = null,
  lu = !1;
function zc(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lu ||
    oa == null ||
    oa !== Pi(a) ||
    ((a = oa),
    'selectionStart' in a && co(a)
      ? (a = { start: a.selectionStart, end: a.selectionEnd })
      : ((a = (
          (a.ownerDocument && a.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset,
        })),
    (dl && Cl(dl, a)) ||
      ((dl = a),
      (a = ms(au, 'onSelect')),
      0 < a.length &&
        ((t = new zs('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: a }),
        (t.target = oa))));
}
function wn(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var ca = {
    animationend: wn('Animation', 'AnimationEnd'),
    animationiteration: wn('Animation', 'AnimationIteration'),
    animationstart: wn('Animation', 'AnimationStart'),
    transitionrun: wn('Transition', 'TransitionRun'),
    transitionstart: wn('Transition', 'TransitionStart'),
    transitioncancel: wn('Transition', 'TransitionCancel'),
    transitionend: wn('Transition', 'TransitionEnd'),
  },
  hr = {},
  ch = {};
Bt &&
  ((ch = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ca.animationend.animation,
    delete ca.animationiteration.animation,
    delete ca.animationstart.animation),
  'TransitionEvent' in window || delete ca.transitionend.transition);
function Kn(e) {
  if (hr[e]) return hr[e];
  if (!ca[e]) return e;
  var t = ca[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ch) return (hr[e] = t[n]);
  return e;
}
var fh = Kn('animationend'),
  dh = Kn('animationiteration'),
  hh = Kn('animationstart'),
  q0 = Kn('transitionrun'),
  Y0 = Kn('transitionstart'),
  V0 = Kn('transitioncancel'),
  mh = Kn('transitionend'),
  gh = new Map(),
  Uc =
    'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
      ' '
    );
function rt(e, t) {
  gh.set(e, t), Xn(t, [e]);
}
var Ke = [],
  fa = 0,
  fo = 0;
function Ms() {
  for (var e = fa, t = (fo = fa = 0); t < e; ) {
    var n = Ke[t];
    Ke[t++] = null;
    var a = Ke[t];
    Ke[t++] = null;
    var l = Ke[t];
    Ke[t++] = null;
    var i = Ke[t];
    if (((Ke[t++] = null), a !== null && l !== null)) {
      var s = a.pending;
      s === null ? (l.next = l) : ((l.next = s.next), (s.next = l)),
        (a.pending = l);
    }
    i !== 0 && ph(n, l, i);
  }
}
function _s(e, t, n, a) {
  (Ke[fa++] = e),
    (Ke[fa++] = t),
    (Ke[fa++] = n),
    (Ke[fa++] = a),
    (fo |= a),
    (e.lanes |= a),
    (e = e.alternate),
    e !== null && (e.lanes |= a);
}
function ho(e, t, n, a) {
  return _s(e, t, n, a), Ii(e);
}
function fn(e, t) {
  return _s(e, null, null, t), Ii(e);
}
function ph(e, t, n) {
  e.lanes |= n;
  var a = e.alternate;
  a !== null && (a.lanes |= n);
  for (var l = !1, i = e.return; i !== null; )
    (i.childLanes |= n),
      (a = i.alternate),
      a !== null && (a.childLanes |= n),
      i.tag === 22 &&
        ((e = i.stateNode), e === null || e._visibility & 1 || (l = !0)),
      (e = i),
      (i = i.return);
  l &&
    t !== null &&
    e.tag === 3 &&
    ((i = e.stateNode),
    (l = 31 - Ye(n)),
    (i = i.hiddenUpdates),
    (e = i[l]),
    e === null ? (i[l] = [t]) : e.push(t),
    (t.lane = n | 536870912));
}
function Ii(e) {
  if (50 < Nl) throw ((Nl = 0), (Ou = null), Error(j(185)));
  for (var t = e.return; t !== null; ) (e = t), (t = e.return);
  return e.tag === 3 ? e.stateNode : null;
}
var da = {},
  Lc = new WeakMap();
function Pe(e, t) {
  if (typeof e == 'object' && e !== null) {
    var n = Lc.get(e);
    return n !== void 0
      ? n
      : ((t = { value: e, source: t, stack: hc(t) }), Lc.set(e, t), t);
  }
  return { value: e, source: t, stack: hc(t) };
}
var ha = [],
  ma = 0,
  es = null,
  ts = 0,
  Je = [],
  Fe = 0,
  Un = null,
  zt = 1,
  Ut = '';
function On(e, t) {
  (ha[ma++] = ts), (ha[ma++] = es), (es = e), (ts = t);
}
function yh(e, t, n) {
  (Je[Fe++] = zt), (Je[Fe++] = Ut), (Je[Fe++] = Un), (Un = e);
  var a = zt;
  e = Ut;
  var l = 32 - Ye(a) - 1;
  (a &= ~(1 << l)), (n += 1);
  var i = 32 - Ye(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    (i = (a & ((1 << s) - 1)).toString(32)),
      (a >>= s),
      (l -= s),
      (zt = (1 << (32 - Ye(t) + l)) | (n << l) | a),
      (Ut = i + e);
  } else (zt = (1 << i) | (n << l) | a), (Ut = e);
}
function mo(e) {
  e.return !== null && (On(e, 1), yh(e, 1, 0));
}
function go(e) {
  for (; e === es; )
    (es = ha[--ma]), (ha[ma] = null), (ts = ha[--ma]), (ha[ma] = null);
  for (; e === Un; )
    (Un = Je[--Fe]),
      (Je[Fe] = null),
      (Ut = Je[--Fe]),
      (Je[Fe] = null),
      (zt = Je[--Fe]),
      (Je[Fe] = null);
}
var Oe = null,
  xe = null,
  $ = !1,
  it = null,
  ft = !1,
  iu = Error(j(519));
function kn(e) {
  var t = Error(j(418, ''));
  throw (Dl(Pe(t, e)), iu);
}
function Mc(e) {
  var t = e.stateNode,
    n = e.type,
    a = e.memoizedProps;
  switch (((t[we] = e), (t[Le] = a), n)) {
    case 'dialog':
      Y('cancel', t), Y('close', t);
      break;
    case 'iframe':
    case 'object':
    case 'embed':
      Y('load', t);
      break;
    case 'video':
    case 'audio':
      for (n = 0; n < Ll.length; n++) Y(Ll[n], t);
      break;
    case 'source':
      Y('error', t);
      break;
    case 'img':
    case 'image':
    case 'link':
      Y('error', t), Y('load', t);
      break;
    case 'details':
      Y('toggle', t);
      break;
    case 'input':
      Y('invalid', t),
        Fd(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ),
        Wi(t);
      break;
    case 'select':
      Y('invalid', t);
      break;
    case 'textarea':
      Y('invalid', t), Pd(t, a.value, a.defaultValue, a.children), Wi(t);
  }
  (n = a.children),
    (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
    t.textContent === '' + n ||
    a.suppressHydrationWarning === !0 ||
    Km(t.textContent, n)
      ? (a.popover != null && (Y('beforetoggle', t), Y('toggle', t)),
        a.onScroll != null && Y('scroll', t),
        a.onScrollEnd != null && Y('scrollend', t),
        a.onClick != null && (t.onclick = $s),
        (t = !0))
      : (t = !1),
    t || kn(e);
}
function _c(e) {
  for (Oe = e.return; Oe; )
    switch (Oe.tag) {
      case 3:
      case 27:
        ft = !0;
        return;
      case 5:
      case 13:
        ft = !1;
        return;
      default:
        Oe = Oe.return;
    }
}
function Za(e) {
  if (e !== Oe) return !1;
  if (!$) return _c(e), ($ = !0), !1;
  var t = !1,
    n;
  if (
    ((n = e.tag !== 3 && e.tag !== 27) &&
      ((n = e.tag === 5) &&
        ((n = e.type),
        (n = !(n !== 'form' && n !== 'button') || Uu(e.type, e.memoizedProps))),
      (n = !n)),
    n && (t = !0),
    t && xe && kn(e),
    _c(e),
    e.tag === 13)
  ) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8)
          if (((n = e.data), n === '/$')) {
            if (t === 0) {
              xe = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Oe ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Jl() {
  (xe = Oe = null), ($ = !1);
}
function Dl(e) {
  it === null ? (it = [e]) : it.push(e);
}
var hl = Error(j(460)),
  vh = Error(j(474)),
  su = { then: function () {} };
function Hc(e) {
  return (e = e.status), e === 'fulfilled' || e === 'rejected';
}
function pi() {}
function bh(e, t, n) {
  switch (
    ((n = e[n]),
    n === void 0 ? e.push(t) : n !== t && (t.then(pi, pi), (t = n)),
    t.status)
  ) {
    case 'fulfilled':
      return t.value;
    case 'rejected':
      throw ((e = t.reason), e === hl ? Error(j(483)) : e);
    default:
      if (typeof t.status == 'string') t.then(pi, pi);
      else {
        if (((e = J), e !== null && 100 < e.shellSuspendCounter))
          throw Error(j(482));
        (e = t),
          (e.status = 'pending'),
          e.then(
            function (a) {
              if (t.status === 'pending') {
                var l = t;
                (l.status = 'fulfilled'), (l.value = a);
              }
            },
            function (a) {
              if (t.status === 'pending') {
                var l = t;
                (l.status = 'rejected'), (l.reason = a);
              }
            }
          );
      }
      switch (t.status) {
        case 'fulfilled':
          return t.value;
        case 'rejected':
          throw ((e = t.reason), e === hl ? Error(j(483)) : e);
      }
      throw ((ml = t), hl);
  }
}
var ml = null;
function Bc() {
  if (ml === null) throw Error(j(459));
  var e = ml;
  return (ml = null), e;
}
var xa = null,
  zl = 0;
function yi(e) {
  var t = zl;
  return (zl += 1), xa === null && (xa = []), bh(xa, e, t);
}
function Ja(e, t) {
  (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
}
function vi(e, t) {
  throw t.$$typeof === Ap
    ? Error(j(525))
    : ((e = Object.prototype.toString.call(t)),
      Error(
        j(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ));
}
function kc(e) {
  var t = e._init;
  return t(e._payload);
}
function xh(e) {
  function t(p, g) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [g]), (p.flags |= 16)) : v.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function a(p) {
    for (var g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function l(p, g) {
    return (p = sn(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, g, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < g ? ((p.flags |= 33554434), g) : v)
            : ((p.flags |= 33554434), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 33554434), p;
  }
  function r(p, g, v, S) {
    return g === null || g.tag !== 6
      ? ((g = jr(v, p.mode, S)), (g.return = p), g)
      : ((g = l(g, v)), (g.return = p), g);
  }
  function u(p, g, v, S) {
    var w = v.type;
    return w === ia
      ? c(p, g, v.props.children, S, v.key)
      : g !== null &&
          (g.elementType === w ||
            (typeof w == 'object' &&
              w !== null &&
              w.$$typeof === Zt &&
              kc(w) === g.type))
        ? ((g = l(g, v.props)), Ja(g, v), (g.return = p), g)
        : ((g = Hi(v.type, v.key, v.props, null, p.mode, S)),
          Ja(g, v),
          (g.return = p),
          g);
  }
  function o(p, g, v, S) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== v.containerInfo ||
      g.stateNode.implementation !== v.implementation
      ? ((g = Or(v, p.mode, S)), (g.return = p), g)
      : ((g = l(g, v.children || [])), (g.return = p), g);
  }
  function c(p, g, v, S, w) {
    return g === null || g.tag !== 7
      ? ((g = Mn(v, p.mode, S, w)), (g.return = p), g)
      : ((g = l(g, v)), (g.return = p), g);
  }
  function h(p, g, v) {
    if (
      (typeof g == 'string' && g !== '') ||
      typeof g == 'number' ||
      typeof g == 'bigint'
    )
      return (g = jr('' + g, p.mode, v)), (g.return = p), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case fi:
          return (
            (v = Hi(g.type, g.key, g.props, null, p.mode, v)),
            Ja(v, g),
            (v.return = p),
            v
          );
        case ll:
          return (g = Or(g, p.mode, v)), (g.return = p), g;
        case Zt:
          var S = g._init;
          return (g = S(g._payload)), h(p, g, v);
      }
      if (sl(g) || Xa(g))
        return (g = Mn(g, p.mode, v, null)), (g.return = p), g;
      if (typeof g.then == 'function') return h(p, yi(g), v);
      if (g.$$typeof === Dt) return h(p, bi(p, g), v);
      vi(p, g);
    }
    return null;
  }
  function f(p, g, v, S) {
    var w = g !== null ? g.key : null;
    if (
      (typeof v == 'string' && v !== '') ||
      typeof v == 'number' ||
      typeof v == 'bigint'
    )
      return w !== null ? null : r(p, g, '' + v, S);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case fi:
          return v.key === w ? u(p, g, v, S) : null;
        case ll:
          return v.key === w ? o(p, g, v, S) : null;
        case Zt:
          return (w = v._init), (v = w(v._payload)), f(p, g, v, S);
      }
      if (sl(v) || Xa(v)) return w !== null ? null : c(p, g, v, S, null);
      if (typeof v.then == 'function') return f(p, g, yi(v), S);
      if (v.$$typeof === Dt) return f(p, g, bi(p, v), S);
      vi(p, v);
    }
    return null;
  }
  function m(p, g, v, S, w) {
    if (
      (typeof S == 'string' && S !== '') ||
      typeof S == 'number' ||
      typeof S == 'bigint'
    )
      return (p = p.get(v) || null), r(g, p, '' + S, w);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case fi:
          return (p = p.get(S.key === null ? v : S.key) || null), u(g, p, S, w);
        case ll:
          return (p = p.get(S.key === null ? v : S.key) || null), o(g, p, S, w);
        case Zt:
          var O = S._init;
          return (S = O(S._payload)), m(p, g, v, S, w);
      }
      if (sl(S) || Xa(S)) return (p = p.get(v) || null), c(g, p, S, w, null);
      if (typeof S.then == 'function') return m(p, g, v, yi(S), w);
      if (S.$$typeof === Dt) return m(p, g, v, bi(g, S), w);
      vi(g, S);
    }
    return null;
  }
  function y(p, g, v, S) {
    for (
      var w = null, O = null, T = g, R = (g = 0), D = null;
      T !== null && R < v.length;
      R++
    ) {
      T.index > R ? ((D = T), (T = null)) : (D = T.sibling);
      var C = f(p, T, v[R], S);
      if (C === null) {
        T === null && (T = D);
        break;
      }
      e && T && C.alternate === null && t(p, T),
        (g = i(C, g, R)),
        O === null ? (w = C) : (O.sibling = C),
        (O = C),
        (T = D);
    }
    if (R === v.length) return n(p, T), $ && On(p, R), w;
    if (T === null) {
      for (; R < v.length; R++)
        (T = h(p, v[R], S)),
          T !== null &&
            ((g = i(T, g, R)), O === null ? (w = T) : (O.sibling = T), (O = T));
      return $ && On(p, R), w;
    }
    for (T = a(T); R < v.length; R++)
      (D = m(T, p, R, v[R], S)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? R : D.key),
          (g = i(D, g, R)),
          O === null ? (w = D) : (O.sibling = D),
          (O = D));
    return (
      e &&
        T.forEach(function (L) {
          return t(p, L);
        }),
      $ && On(p, R),
      w
    );
  }
  function x(p, g, v, S) {
    if (v == null) throw Error(j(151));
    for (
      var w = null, O = null, T = g, R = (g = 0), D = null, C = v.next();
      T !== null && !C.done;
      R++, C = v.next()
    ) {
      T.index > R ? ((D = T), (T = null)) : (D = T.sibling);
      var L = f(p, T, C.value, S);
      if (L === null) {
        T === null && (T = D);
        break;
      }
      e && T && L.alternate === null && t(p, T),
        (g = i(L, g, R)),
        O === null ? (w = L) : (O.sibling = L),
        (O = L),
        (T = D);
    }
    if (C.done) return n(p, T), $ && On(p, R), w;
    if (T === null) {
      for (; !C.done; R++, C = v.next())
        (C = h(p, C.value, S)),
          C !== null &&
            ((g = i(C, g, R)), O === null ? (w = C) : (O.sibling = C), (O = C));
      return $ && On(p, R), w;
    }
    for (T = a(T); !C.done; R++, C = v.next())
      (C = m(T, p, R, C.value, S)),
        C !== null &&
          (e && C.alternate !== null && T.delete(C.key === null ? R : C.key),
          (g = i(C, g, R)),
          O === null ? (w = C) : (O.sibling = C),
          (O = C));
    return (
      e &&
        T.forEach(function (F) {
          return t(p, F);
        }),
      $ && On(p, R),
      w
    );
  }
  function b(p, g, v, S) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === ia &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case fi:
          e: {
            for (var w = v.key; g !== null; ) {
              if (g.key === w) {
                if (((w = v.type), w === ia)) {
                  if (g.tag === 7) {
                    n(p, g.sibling),
                      (S = l(g, v.props.children)),
                      (S.return = p),
                      (p = S);
                    break e;
                  }
                } else if (
                  g.elementType === w ||
                  (typeof w == 'object' &&
                    w !== null &&
                    w.$$typeof === Zt &&
                    kc(w) === g.type)
                ) {
                  n(p, g.sibling),
                    (S = l(g, v.props)),
                    Ja(S, v),
                    (S.return = p),
                    (p = S);
                  break e;
                }
                n(p, g);
                break;
              } else t(p, g);
              g = g.sibling;
            }
            v.type === ia
              ? ((S = Mn(v.props.children, p.mode, S, v.key)),
                (S.return = p),
                (p = S))
              : ((S = Hi(v.type, v.key, v.props, null, p.mode, S)),
                Ja(S, v),
                (S.return = p),
                (p = S));
          }
          return s(p);
        case ll:
          e: {
            for (w = v.key; g !== null; ) {
              if (g.key === w)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === v.containerInfo &&
                  g.stateNode.implementation === v.implementation
                ) {
                  n(p, g.sibling),
                    (S = l(g, v.children || [])),
                    (S.return = p),
                    (p = S);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (S = Or(v, p.mode, S)), (S.return = p), (p = S);
          }
          return s(p);
        case Zt:
          return (w = v._init), (v = w(v._payload)), b(p, g, v, S);
      }
      if (sl(v)) return y(p, g, v, S);
      if (Xa(v)) {
        if (((w = Xa(v)), typeof w != 'function')) throw Error(j(150));
        return (v = w.call(v)), x(p, g, v, S);
      }
      if (typeof v.then == 'function') return b(p, g, yi(v), S);
      if (v.$$typeof === Dt) return b(p, g, bi(p, v), S);
      vi(p, v);
    }
    return (typeof v == 'string' && v !== '') ||
      typeof v == 'number' ||
      typeof v == 'bigint'
      ? ((v = '' + v),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (S = l(g, v)), (S.return = p), (p = S))
          : (n(p, g), (S = jr(v, p.mode, S)), (S.return = p), (p = S)),
        s(p))
      : n(p, g);
  }
  return function (p, g, v, S) {
    try {
      zl = 0;
      var w = b(p, g, v, S);
      return (xa = null), w;
    } catch (T) {
      if (T === hl) throw T;
      var O = Ie(29, T, null, p.mode);
      return (O.lanes = S), (O.return = p), O;
    } finally {
    }
  };
}
var qn = xh(!0),
  Sh = xh(!1),
  Ra = bt(null),
  ns = bt(0);
function qc(e, t) {
  (e = Yt), ee(ns, e), ee(Ra, t), (Yt = e | t.baseLanes);
}
function ru() {
  ee(ns, Yt), ee(Ra, Ra.current);
}
function po() {
  (Yt = ns.current), ve(Ra), ve(ns);
}
var nt = bt(null),
  pt = null;
function Ft(e) {
  var t = e.alternate;
  ee(he, he.current & 1),
    ee(nt, e),
    pt === null &&
      (t === null || Ra.current !== null || t.memoizedState !== null) &&
      (pt = e);
}
function Eh(e) {
  if (e.tag === 22) {
    if ((ee(he, he.current), ee(nt, e), pt === null)) {
      var t = e.alternate;
      t !== null && t.memoizedState !== null && (pt = e);
    }
  } else Wt();
}
function Wt() {
  ee(he, he.current), ee(nt, nt.current);
}
function Lt(e) {
  ve(nt), pt === e && (pt = null), ve(he);
}
var he = bt(0);
function as(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $0 =
    typeof AbortController < 'u'
      ? AbortController
      : function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (n, a) {
                e.push(a);
              },
            });
          this.abort = function () {
            (t.aborted = !0),
              e.forEach(function (n) {
                return n();
              });
          };
        },
  G0 = me.unstable_scheduleCallback,
  X0 = me.unstable_NormalPriority,
  de = {
    $$typeof: Dt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function yo() {
  return { controller: new $0(), data: new Map(), refCount: 0 };
}
function Fl(e) {
  e.refCount--,
    e.refCount === 0 &&
      G0(X0, function () {
        e.controller.abort();
      });
}
var gl = null,
  uu = 0,
  Aa = 0,
  Sa = null;
function Q0(e, t) {
  if (gl === null) {
    var n = (gl = []);
    (uu = 0),
      (Aa = qo()),
      (Sa = {
        status: 'pending',
        value: void 0,
        then: function (a) {
          n.push(a);
        },
      });
  }
  return uu++, t.then(Yc, Yc), t;
}
function Yc() {
  if (--uu === 0 && gl !== null) {
    Sa !== null && (Sa.status = 'fulfilled');
    var e = gl;
    (gl = null), (Aa = 0), (Sa = null);
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
}
function K0(e, t) {
  var n = [],
    a = {
      status: 'pending',
      value: null,
      reason: null,
      then: function (l) {
        n.push(l);
      },
    };
  return (
    e.then(
      function () {
        (a.status = 'fulfilled'), (a.value = t);
        for (var l = 0; l < n.length; l++) (0, n[l])(t);
      },
      function (l) {
        for (a.status = 'rejected', a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }
    ),
    a
  );
}
var Vc = H.S;
H.S = function (e, t) {
  typeof t == 'object' && t !== null && typeof t.then == 'function' && Q0(e, t),
    Vc !== null && Vc(e, t);
};
var Ln = bt(null);
function vo() {
  var e = Ln.current;
  return e !== null ? e : J.pooledCache;
}
function Ui(e, t) {
  t === null ? ee(Ln, Ln.current) : ee(Ln, t.pool);
}
function wh() {
  var e = vo();
  return e === null ? null : { parent: de._currentValue, pool: e };
}
var dn = 0,
  k = null,
  Q = null,
  ce = null,
  ls = !1,
  Ea = !1,
  Yn = !1,
  is = 0,
  Ul = 0,
  wa = null,
  Z0 = 0;
function ue() {
  throw Error(j(321));
}
function bo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function xo(e, t, n, a, l, i) {
  return (
    (dn = i),
    (k = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (H.H = e === null || e.memoizedState === null ? Zn : yn),
    (Yn = !1),
    (i = n(a, l)),
    (Yn = !1),
    Ea && (i = jh(t, n, a, l)),
    Nh(e),
    i
  );
}
function Nh(e) {
  H.H = yt;
  var t = Q !== null && Q.next !== null;
  if (((dn = 0), (ce = Q = k = null), (ls = !1), (Ul = 0), (wa = null), t))
    throw Error(j(300));
  e === null || ye || ((e = e.dependencies), e !== null && us(e) && (ye = !0));
}
function jh(e, t, n, a) {
  k = e;
  var l = 0;
  do {
    if ((Ea && (wa = null), (Ul = 0), (Ea = !1), 25 <= l)) throw Error(j(301));
    if (((l += 1), (ce = Q = null), e.updateQueue != null)) {
      var i = e.updateQueue;
      (i.lastEffect = null),
        (i.events = null),
        (i.stores = null),
        i.memoCache != null && (i.memoCache.index = 0);
    }
    (H.H = Jn), (i = t(n, a));
  } while (Ea);
  return i;
}
function J0() {
  var e = H.H,
    t = e.useState()[0];
  return (
    (t = typeof t.then == 'function' ? Wl(t) : t),
    (e = e.useState()[0]),
    (Q !== null ? Q.memoizedState : null) !== e && (k.flags |= 1024),
    t
  );
}
function So() {
  var e = is !== 0;
  return (is = 0), e;
}
function Eo(e, t, n) {
  (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function wo(e) {
  if (ls) {
    for (e = e.memoizedState; e !== null; ) {
      var t = e.queue;
      t !== null && (t.pending = null), (e = e.next);
    }
    ls = !1;
  }
  (dn = 0), (ce = Q = k = null), (Ea = !1), (Ul = is = 0), (wa = null);
}
function ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (k.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function fe() {
  if (Q === null) {
    var e = k.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Q.next;
  var t = ce === null ? k.memoizedState : ce.next;
  if (t !== null) (ce = t), (Q = e);
  else {
    if (e === null) throw k.alternate === null ? Error(j(467)) : Error(j(310));
    (Q = e),
      (e = {
        memoizedState: Q.memoizedState,
        baseState: Q.baseState,
        baseQueue: Q.baseQueue,
        queue: Q.queue,
        next: null,
      }),
      ce === null ? (k.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
var Hs;
Hs = function () {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
};
function Wl(e) {
  var t = Ul;
  return (
    (Ul += 1),
    wa === null && (wa = []),
    (e = bh(wa, e, t)),
    (t = k),
    (ce === null ? t.memoizedState : ce.next) === null &&
      ((t = t.alternate),
      (H.H = t === null || t.memoizedState === null ? Zn : yn)),
    e
  );
}
function Bs(e) {
  if (e !== null && typeof e == 'object') {
    if (typeof e.then == 'function') return Wl(e);
    if (e.$$typeof === Dt) return Ne(e);
  }
  throw Error(j(438, String(e)));
}
function No(e) {
  var t = null,
    n = k.updateQueue;
  if ((n !== null && (t = n.memoCache), t == null)) {
    var a = k.alternate;
    a !== null &&
      ((a = a.updateQueue),
      a !== null &&
        ((a = a.memoCache),
        a != null &&
          (t = {
            data: a.data.map(function (l) {
              return l.slice();
            }),
            index: 0,
          })));
  }
  if (
    (t == null && (t = { data: [], index: 0 }),
    n === null && ((n = Hs()), (k.updateQueue = n)),
    (n.memoCache = t),
    (n = t.data[t.index]),
    n === void 0)
  )
    for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = Dp;
  return t.index++, n;
}
function kt(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Li(e) {
  var t = fe();
  return jo(t, Q, e);
}
function jo(e, t, n) {
  var a = e.queue;
  if (a === null) throw Error(j(311));
  a.lastRenderedReducer = n;
  var l = e.baseQueue,
    i = a.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      (l.next = i.next), (i.next = s);
    }
    (t.baseQueue = l = i), (a.pending = null);
  }
  if (((i = e.baseState), l === null)) e.memoizedState = i;
  else {
    t = l.next;
    var r = (s = null),
      u = null,
      o = t,
      c = !1;
    do {
      var h = o.lane & -536870913;
      if (h !== o.lane ? (V & h) === h : (dn & h) === h) {
        var f = o.revertLane;
        if (f === 0)
          u !== null &&
            (u = u.next =
              {
                lane: 0,
                revertLane: 0,
                action: o.action,
                hasEagerState: o.hasEagerState,
                eagerState: o.eagerState,
                next: null,
              }),
            h === Aa && (c = !0);
        else if ((dn & f) === f) {
          (o = o.next), f === Aa && (c = !0);
          continue;
        } else
          (h = {
            lane: 0,
            revertLane: o.revertLane,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null,
          }),
            u === null ? ((r = u = h), (s = i)) : (u = u.next = h),
            (k.lanes |= f),
            (mn |= f);
        (h = o.action),
          Yn && n(i, h),
          (i = o.hasEagerState ? o.eagerState : n(i, h));
      } else
        (f = {
          lane: h,
          revertLane: o.revertLane,
          action: o.action,
          hasEagerState: o.hasEagerState,
          eagerState: o.eagerState,
          next: null,
        }),
          u === null ? ((r = u = f), (s = i)) : (u = u.next = f),
          (k.lanes |= h),
          (mn |= h);
      o = o.next;
    } while (o !== null && o !== t);
    if (
      (u === null ? (s = i) : (u.next = r),
      !Ge(i, e.memoizedState) && ((ye = !0), c && ((n = Sa), n !== null)))
    )
      throw n;
    (e.memoizedState = i),
      (e.baseState = s),
      (e.baseQueue = u),
      (a.lastRenderedState = i);
  }
  return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
}
function mr(e) {
  var t = fe(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== l);
    Ge(i, t.memoizedState) || (ye = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, a];
}
function Oh(e, t, n) {
  var a = k,
    l = fe(),
    i = $;
  if (i) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else n = t();
  var s = !Ge((Q || l).memoizedState, n);
  if (
    (s && ((l.memoizedState = n), (ye = !0)),
    (l = l.queue),
    Oo(Ah.bind(null, a, l, e), [e]),
    l.getSnapshot !== t || s || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((a.flags |= 2048),
      Ca(9, Rh.bind(null, a, l, n, t), { destroy: void 0 }, null),
      J === null)
    )
      throw Error(j(349));
    i || dn & 60 || Th(a, t, n);
  }
  return n;
}
function Th(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = k.updateQueue),
    t === null
      ? ((t = Hs()), (k.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rh(e, t, n, a) {
  (t.value = n), (t.getSnapshot = a), Ch(t) && Dh(e);
}
function Ah(e, t, n) {
  return n(function () {
    Ch(t) && Dh(e);
  });
}
function Ch(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function Dh(e) {
  var t = fn(e, 2);
  t !== null && Re(t, e, 2);
}
function ou(e) {
  var t = ze();
  if (typeof e == 'function') {
    var n = e;
    if (((e = n()), Yn)) {
      en(!0);
      try {
        n();
      } finally {
        en(!1);
      }
    }
  }
  return (
    (t.memoizedState = t.baseState = e),
    (t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kt,
      lastRenderedState: e,
    }),
    t
  );
}
function zh(e, t, n, a) {
  return (e.baseState = n), jo(e, Q, typeof a == 'function' ? a : kt);
}
function F0(e, t, n, a, l) {
  if (qs(e)) throw Error(j(485));
  if (((e = t.action), e !== null)) {
    var i = {
      payload: l,
      action: e,
      next: null,
      isTransition: !0,
      status: 'pending',
      value: null,
      reason: null,
      listeners: [],
      then: function (s) {
        i.listeners.push(s);
      },
    };
    H.T !== null ? n(!0) : (i.isTransition = !1),
      a(i),
      (n = t.pending),
      n === null
        ? ((i.next = t.pending = i), Uh(t, i))
        : ((i.next = n.next), (t.pending = n.next = i));
  }
}
function Uh(e, t) {
  var n = t.action,
    a = t.payload,
    l = e.state;
  if (t.isTransition) {
    var i = H.T,
      s = {};
    H.T = s;
    try {
      var r = n(l, a),
        u = H.S;
      u !== null && u(s, r), $c(e, t, r);
    } catch (o) {
      cu(e, t, o);
    } finally {
      H.T = i;
    }
  } else
    try {
      (i = n(l, a)), $c(e, t, i);
    } catch (o) {
      cu(e, t, o);
    }
}
function $c(e, t, n) {
  n !== null && typeof n == 'object' && typeof n.then == 'function'
    ? n.then(
        function (a) {
          Gc(e, t, a);
        },
        function (a) {
          return cu(e, t, a);
        }
      )
    : Gc(e, t, n);
}
function Gc(e, t, n) {
  (t.status = 'fulfilled'),
    (t.value = n),
    Lh(t),
    (e.state = n),
    (t = e.pending),
    t !== null &&
      ((n = t.next),
      n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Uh(e, n)));
}
function cu(e, t, n) {
  var a = e.pending;
  if (((e.pending = null), a !== null)) {
    a = a.next;
    do (t.status = 'rejected'), (t.reason = n), Lh(t), (t = t.next);
    while (t !== a);
  }
  e.action = null;
}
function Lh(e) {
  e = e.listeners;
  for (var t = 0; t < e.length; t++) (0, e[t])();
}
function Mh(e, t) {
  return t;
}
function _h(e, t) {
  if ($) {
    var n = J.formState;
    if (n !== null) {
      e: {
        var a = k;
        if ($) {
          if (xe) {
            t: {
              for (var l = xe, i = ft; l.nodeType !== 8; ) {
                if (!i) {
                  l = null;
                  break t;
                }
                if (((l = st(l.nextSibling)), l === null)) {
                  l = null;
                  break t;
                }
              }
              (i = l.data), (l = i === 'F!' || i === 'F' ? l : null);
            }
            if (l) {
              (xe = st(l.nextSibling)), (a = l.data === 'F!');
              break e;
            }
          }
          kn(a);
        }
        a = !1;
      }
      a && (t = n[0]);
    }
  }
  return (
    (n = ze()),
    (n.memoizedState = n.baseState = t),
    (a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mh,
      lastRenderedState: t,
    }),
    (n.queue = a),
    (n = Ih.bind(null, k, a)),
    (a.dispatch = n),
    (a = ou(!1)),
    (i = Co.bind(null, k, !1, a.queue)),
    (a = ze()),
    (l = { state: t, dispatch: null, action: e, pending: null }),
    (a.queue = l),
    (n = F0.bind(null, k, l, i, n)),
    (l.dispatch = n),
    (a.memoizedState = e),
    [t, n, !1]
  );
}
function Hh(e) {
  var t = fe();
  return Bh(t, Q, e);
}
function Bh(e, t, n) {
  (t = jo(e, t, Mh)[0]),
    (e = Li(kt)[0]),
    (t =
      typeof t == 'object' && t !== null && typeof t.then == 'function'
        ? Wl(t)
        : t);
  var a = fe(),
    l = a.queue,
    i = l.dispatch;
  return (
    n !== a.memoizedState &&
      ((k.flags |= 2048),
      Ca(9, W0.bind(null, l, n), { destroy: void 0 }, null)),
    [t, i, e]
  );
}
function W0(e, t) {
  e.action = t;
}
function kh(e) {
  var t = fe(),
    n = Q;
  if (n !== null) return Bh(t, n, e);
  fe(), (t = t.memoizedState), (n = fe());
  var a = n.queue.dispatch;
  return (n.memoizedState = e), [t, a, !1];
}
function Ca(e, t, n, a) {
  return (
    (e = { tag: e, create: t, inst: n, deps: a, next: null }),
    (t = k.updateQueue),
    t === null && ((t = Hs()), (k.updateQueue = t)),
    (n = t.lastEffect),
    n === null
      ? (t.lastEffect = e.next = e)
      : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
    e
  );
}
function qh() {
  return fe().memoizedState;
}
function Mi(e, t, n, a) {
  var l = ze();
  (k.flags |= e),
    (l.memoizedState = Ca(
      1 | t,
      n,
      { destroy: void 0 },
      a === void 0 ? null : a
    ));
}
function ks(e, t, n, a) {
  var l = fe();
  a = a === void 0 ? null : a;
  var i = l.memoizedState.inst;
  Q !== null && a !== null && bo(a, Q.memoizedState.deps)
    ? (l.memoizedState = Ca(t, n, i, a))
    : ((k.flags |= e), (l.memoizedState = Ca(1 | t, n, i, a)));
}
function Xc(e, t) {
  Mi(8390656, 8, e, t);
}
function Oo(e, t) {
  ks(2048, 8, e, t);
}
function Yh(e, t) {
  return ks(4, 2, e, t);
}
function Vh(e, t) {
  return ks(4, 4, e, t);
}
function $h(e, t) {
  if (typeof t == 'function') {
    e = e();
    var n = t(e);
    return function () {
      typeof n == 'function' ? n() : t(null);
    };
  }
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gh(e, t, n) {
  (n = n != null ? n.concat([e]) : null), ks(4, 4, $h.bind(null, t, e), n);
}
function To() {}
function Xh(e, t) {
  var n = fe();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return t !== null && bo(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
}
function Qh(e, t) {
  var n = fe();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  if (t !== null && bo(t, a[1])) return a[0];
  if (((a = e()), Yn)) {
    en(!0);
    try {
      e();
    } finally {
      en(!1);
    }
  }
  return (n.memoizedState = [a, t]), a;
}
function Ro(e, t, n) {
  return n === void 0 || dn & 1073741824
    ? (e.memoizedState = t)
    : ((e.memoizedState = n), (e = Lm()), (k.lanes |= e), (mn |= e), n);
}
function Kh(e, t, n, a) {
  return Ge(n, t)
    ? n
    : Ra.current !== null
      ? ((e = Ro(e, n, a)), Ge(e, t) || (ye = !0), e)
      : dn & 42
        ? ((e = Lm()), (k.lanes |= e), (mn |= e), t)
        : ((ye = !0), (e.memoizedState = n));
}
function Zh(e, t, n, a, l) {
  var i = W.p;
  W.p = i !== 0 && 8 > i ? i : 8;
  var s = H.T,
    r = {};
  (H.T = r), Co(e, !1, t, n);
  try {
    var u = l(),
      o = H.S;
    if (
      (o !== null && o(r, u),
      u !== null && typeof u == 'object' && typeof u.then == 'function')
    ) {
      var c = K0(u, a);
      pl(e, t, c, Ve(e));
    } else pl(e, t, a, Ve(e));
  } catch (h) {
    pl(e, t, { then: function () {}, status: 'rejected', reason: h }, Ve());
  } finally {
    (W.p = i), (H.T = s);
  }
}
function P0() {}
function fu(e, t, n, a) {
  if (e.tag !== 5) throw Error(j(476));
  var l = Jh(e).queue;
  Zh(
    e,
    l,
    t,
    zn,
    n === null
      ? P0
      : function () {
          return Fh(e), n(a);
        }
  );
}
function Jh(e) {
  var t = e.memoizedState;
  if (t !== null) return t;
  t = {
    memoizedState: zn,
    baseState: zn,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kt,
      lastRenderedState: zn,
    },
    next: null,
  };
  var n = {};
  return (
    (t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kt,
        lastRenderedState: n,
      },
      next: null,
    }),
    (e.memoizedState = t),
    (e = e.alternate),
    e !== null && (e.memoizedState = t),
    t
  );
}
function Fh(e) {
  var t = Jh(e).next.queue;
  pl(e, t, {}, Ve());
}
function Ao() {
  return Ne(Hl);
}
function Wh() {
  return fe().memoizedState;
}
function Ph() {
  return fe().memoizedState;
}
function I0(e) {
  for (var t = e.return; t !== null; ) {
    switch (t.tag) {
      case 24:
      case 3:
        var n = Ve();
        e = an(n);
        var a = ln(t, e, n);
        a !== null && (Re(a, t, n), vl(a, t, n)),
          (t = { cache: yo() }),
          (e.payload = t);
        return;
    }
    t = t.return;
  }
}
function ey(e, t, n) {
  var a = Ve();
  (n = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    qs(e)
      ? em(t, n)
      : ((n = ho(e, t, n, a)), n !== null && (Re(n, e, a), tm(n, t, a)));
}
function Ih(e, t, n) {
  var a = Ve();
  pl(e, t, n, a);
}
function pl(e, t, n, a) {
  var l = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (qs(e)) em(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          r = i(s, n);
        if (((l.hasEagerState = !0), (l.eagerState = r), Ge(r, s)))
          return _s(e, t, l, 0), J === null && Ms(), !1;
      } catch {
      } finally {
      }
    if (((n = ho(e, t, l, a)), n !== null)) return Re(n, e, a), tm(n, t, a), !0;
  }
  return !1;
}
function Co(e, t, n, a) {
  if (
    ((a = {
      lane: 2,
      revertLane: qo(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qs(e))
  ) {
    if (t) throw Error(j(479));
  } else (t = ho(e, n, a, 2)), t !== null && Re(t, e, 2);
}
function qs(e) {
  var t = e.alternate;
  return e === k || (t !== null && t === k);
}
function em(e, t) {
  Ea = ls = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tm(e, t, n) {
  if (n & 4194176) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), $d(e, n);
  }
}
var yt = {
  readContext: Ne,
  use: Bs,
  useCallback: ue,
  useContext: ue,
  useEffect: ue,
  useImperativeHandle: ue,
  useLayoutEffect: ue,
  useInsertionEffect: ue,
  useMemo: ue,
  useReducer: ue,
  useRef: ue,
  useState: ue,
  useDebugValue: ue,
  useDeferredValue: ue,
  useTransition: ue,
  useSyncExternalStore: ue,
  useId: ue,
};
yt.useCacheRefresh = ue;
yt.useMemoCache = ue;
yt.useHostTransitionStatus = ue;
yt.useFormState = ue;
yt.useActionState = ue;
yt.useOptimistic = ue;
var Zn = {
  readContext: Ne,
  use: Bs,
  useCallback: function (e, t) {
    return (ze().memoizedState = [e, t === void 0 ? null : t]), e;
  },
  useContext: Ne,
  useEffect: Xc,
  useImperativeHandle: function (e, t, n) {
    (n = n != null ? n.concat([e]) : null),
      Mi(4194308, 4, $h.bind(null, t, e), n);
  },
  useLayoutEffect: function (e, t) {
    return Mi(4194308, 4, e, t);
  },
  useInsertionEffect: function (e, t) {
    Mi(4, 2, e, t);
  },
  useMemo: function (e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var a = e();
    if (Yn) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return (n.memoizedState = [a, t]), a;
  },
  useReducer: function (e, t, n) {
    var a = ze();
    if (n !== void 0) {
      var l = n(t);
      if (Yn) {
        en(!0);
        try {
          n(t);
        } finally {
          en(!1);
        }
      }
    } else l = t;
    return (
      (a.memoizedState = a.baseState = l),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l,
      }),
      (a.queue = e),
      (e = e.dispatch = ey.bind(null, k, e)),
      [a.memoizedState, e]
    );
  },
  useRef: function (e) {
    var t = ze();
    return (e = { current: e }), (t.memoizedState = e);
  },
  useState: function (e) {
    e = ou(e);
    var t = e.queue,
      n = Ih.bind(null, k, t);
    return (t.dispatch = n), [e.memoizedState, n];
  },
  useDebugValue: To,
  useDeferredValue: function (e, t) {
    var n = ze();
    return Ro(n, e, t);
  },
  useTransition: function () {
    var e = ou(!1);
    return (
      (e = Zh.bind(null, k, e.queue, !0, !1)), (ze().memoizedState = e), [!1, e]
    );
  },
  useSyncExternalStore: function (e, t, n) {
    var a = k,
      l = ze();
    if ($) {
      if (n === void 0) throw Error(j(407));
      n = n();
    } else {
      if (((n = t()), J === null)) throw Error(j(349));
      V & 60 || Th(a, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return (
      (l.queue = i),
      Xc(Ah.bind(null, a, i, e), [e]),
      (a.flags |= 2048),
      Ca(9, Rh.bind(null, a, i, n, t), { destroy: void 0 }, null),
      n
    );
  },
  useId: function () {
    var e = ze(),
      t = J.identifierPrefix;
    if ($) {
      var n = Ut,
        a = zt;
      (n = (a & ~(1 << (32 - Ye(a) - 1))).toString(32) + n),
        (t = ':' + t + 'R' + n),
        (n = is++),
        0 < n && (t += 'H' + n.toString(32)),
        (t += ':');
    } else (n = Z0++), (t = ':' + t + 'r' + n.toString(32) + ':');
    return (e.memoizedState = t);
  },
  useCacheRefresh: function () {
    return (ze().memoizedState = I0.bind(null, k));
  },
};
Zn.useMemoCache = No;
Zn.useHostTransitionStatus = Ao;
Zn.useFormState = _h;
Zn.useActionState = _h;
Zn.useOptimistic = function (e) {
  var t = ze();
  t.memoizedState = t.baseState = e;
  var n = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: null,
    lastRenderedState: null,
  };
  return (t.queue = n), (t = Co.bind(null, k, !0, n)), (n.dispatch = t), [e, t];
};
var yn = {
  readContext: Ne,
  use: Bs,
  useCallback: Xh,
  useContext: Ne,
  useEffect: Oo,
  useImperativeHandle: Gh,
  useInsertionEffect: Yh,
  useLayoutEffect: Vh,
  useMemo: Qh,
  useReducer: Li,
  useRef: qh,
  useState: function () {
    return Li(kt);
  },
  useDebugValue: To,
  useDeferredValue: function (e, t) {
    var n = fe();
    return Kh(n, Q.memoizedState, e, t);
  },
  useTransition: function () {
    var e = Li(kt)[0],
      t = fe().memoizedState;
    return [typeof e == 'boolean' ? e : Wl(e), t];
  },
  useSyncExternalStore: Oh,
  useId: Wh,
};
yn.useCacheRefresh = Ph;
yn.useMemoCache = No;
yn.useHostTransitionStatus = Ao;
yn.useFormState = Hh;
yn.useActionState = Hh;
yn.useOptimistic = function (e, t) {
  var n = fe();
  return zh(n, Q, e, t);
};
var Jn = {
  readContext: Ne,
  use: Bs,
  useCallback: Xh,
  useContext: Ne,
  useEffect: Oo,
  useImperativeHandle: Gh,
  useInsertionEffect: Yh,
  useLayoutEffect: Vh,
  useMemo: Qh,
  useReducer: mr,
  useRef: qh,
  useState: function () {
    return mr(kt);
  },
  useDebugValue: To,
  useDeferredValue: function (e, t) {
    var n = fe();
    return Q === null ? Ro(n, e, t) : Kh(n, Q.memoizedState, e, t);
  },
  useTransition: function () {
    var e = mr(kt)[0],
      t = fe().memoizedState;
    return [typeof e == 'boolean' ? e : Wl(e), t];
  },
  useSyncExternalStore: Oh,
  useId: Wh,
};
Jn.useCacheRefresh = Ph;
Jn.useMemoCache = No;
Jn.useHostTransitionStatus = Ao;
Jn.useFormState = kh;
Jn.useActionState = kh;
Jn.useOptimistic = function (e, t) {
  var n = fe();
  return Q !== null
    ? zh(n, Q, e, t)
    : ((n.baseState = e), [e, n.queue.dispatch]);
};
function gr(e, t, n, a) {
  (t = e.memoizedState),
    (n = n(a, t)),
    (n = n == null ? t : P({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var du = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ma(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var a = Ve(),
      l = an(a);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = ln(e, l, a)),
      t !== null && (Re(t, e, a), vl(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var a = Ve(),
      l = an(a);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = ln(e, l, a)),
      t !== null && (Re(t, e, a), vl(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      a = an(n);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = ln(e, a, n)),
      t !== null && (Re(t, e, n), vl(t, e, n));
  },
};
function Qc(e, t, n, a, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(a, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Cl(n, a) || !Cl(l, i)
        : !0
  );
}
function Kc(e, t, n, a) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, a),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, a),
    t.state !== e && du.enqueueReplaceState(t, t.state, null);
}
function Vn(e, t) {
  var n = t;
  if ('ref' in t) {
    n = {};
    for (var a in t) a !== 'ref' && (n[a] = t[a]);
  }
  if ((e = e.defaultProps)) {
    n === t && (n = P({}, n));
    for (var l in e) n[l] === void 0 && (n[l] = e[l]);
  }
  return n;
}
var ss =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        if (
          typeof window == 'object' &&
          typeof window.ErrorEvent == 'function'
        ) {
          var t = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == 'object' && e !== null && typeof e.message == 'string'
                ? String(e.message)
                : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          typeof process == 'object' &&
          typeof process.emit == 'function'
        ) {
          process.emit('uncaughtException', e);
          return;
        }
        console.error(e);
      };
function nm(e) {
  ss(e);
}
function am(e) {
  console.error(e);
}
function lm(e) {
  ss(e);
}
function rs(e, t) {
  try {
    var n = e.onUncaughtError;
    n(t.value, { componentStack: t.stack });
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
function Zc(e, t, n) {
  try {
    var a = e.onCaughtError;
    a(n.value, {
      componentStack: n.stack,
      errorBoundary: t.tag === 1 ? t.stateNode : null,
    });
  } catch (l) {
    setTimeout(function () {
      throw l;
    });
  }
}
function hu(e, t, n) {
  return (
    (n = an(n)),
    (n.tag = 3),
    (n.payload = { element: null }),
    (n.callback = function () {
      rs(e, t);
    }),
    n
  );
}
function im(e) {
  return (e = an(e)), (e.tag = 3), e;
}
function sm(e, t, n, a) {
  var l = n.type.getDerivedStateFromError;
  if (typeof l == 'function') {
    var i = a.value;
    (e.payload = function () {
      return l(i);
    }),
      (e.callback = function () {
        Zc(t, n, a);
      });
  }
  var s = n.stateNode;
  s !== null &&
    typeof s.componentDidCatch == 'function' &&
    (e.callback = function () {
      Zc(t, n, a),
        typeof l != 'function' &&
          (rn === null ? (rn = new Set([this])) : rn.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, { componentStack: r !== null ? r : '' });
    });
}
function ty(e, t, n, a, l) {
  if (
    ((n.flags |= 32768),
    a !== null && typeof a == 'object' && typeof a.then == 'function')
  ) {
    if (
      ((t = n.alternate),
      t !== null && Pl(t, n, l, !0),
      (n = nt.current),
      n !== null)
    ) {
      switch (n.tag) {
        case 13:
          return (
            pt === null ? Ru() : n.alternate === null && re === 0 && (re = 3),
            (n.flags &= -257),
            (n.flags |= 65536),
            (n.lanes = l),
            a === su
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                Rr(e, a, l)),
            !1
          );
        case 22:
          return (
            (n.flags |= 65536),
            a === su
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null
                  ? ((t = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([a]),
                    }),
                    (n.updateQueue = t))
                  : ((n = t.retryQueue),
                    n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                Rr(e, a, l)),
            !1
          );
      }
      throw Error(j(435, n.tag));
    }
    return Rr(e, a, l), Ru(), !1;
  }
  if ($)
    return (
      (t = nt.current),
      t !== null
        ? (!(t.flags & 65536) && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = l),
          a !== iu && ((e = Error(j(422), { cause: a })), Dl(Pe(e, n))))
        : (a !== iu && ((t = Error(j(423), { cause: a })), Dl(Pe(t, n))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (l &= -l),
          (e.lanes |= l),
          (a = Pe(a, n)),
          (l = hu(e.stateNode, a, l)),
          Sr(e, l),
          re !== 4 && (re = 2)),
      !1
    );
  var i = Error(j(520), { cause: a });
  if (
    ((i = Pe(i, n)),
    El === null ? (El = [i]) : El.push(i),
    re !== 4 && (re = 2),
    t === null)
  )
    return !0;
  (a = Pe(a, n)), (n = t);
  do {
    switch (n.tag) {
      case 3:
        return (
          (n.flags |= 65536),
          (e = l & -l),
          (n.lanes |= e),
          (e = hu(n.stateNode, a, e)),
          Sr(n, e),
          !1
        );
      case 1:
        if (
          ((t = n.type),
          (i = n.stateNode),
          (n.flags & 128) === 0 &&
            (typeof t.getDerivedStateFromError == 'function' ||
              (i !== null &&
                typeof i.componentDidCatch == 'function' &&
                (rn === null || !rn.has(i)))))
        )
          return (
            (n.flags |= 65536),
            (l &= -l),
            (n.lanes |= l),
            (l = im(l)),
            sm(l, e, n, a),
            Sr(n, l),
            !1
          );
    }
    n = n.return;
  } while (n !== null);
  return !1;
}
var rm = Error(j(461)),
  ye = !1;
function be(e, t, n, a) {
  t.child = e === null ? Sh(t, null, n, a) : qn(t, e.child, n, a);
}
function Jc(e, t, n, a, l) {
  n = n.render;
  var i = t.ref;
  if ('ref' in a) {
    var s = {};
    for (var r in a) r !== 'ref' && (s[r] = a[r]);
  } else s = a;
  return (
    $n(t),
    (a = xo(e, t, n, s, i, l)),
    (r = So()),
    e !== null && !ye
      ? (Eo(e, t, l), qt(e, t, l))
      : ($ && r && mo(t), (t.flags |= 1), be(e, t, a, l), t.child)
  );
}
function Fc(e, t, n, a, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Mo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null
      ? ((t.tag = 15), (t.type = i), um(e, t, i, a, l))
      : ((e = Hi(n.type, null, a, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !Do(e, l))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Cl), n(s, a) && e.ref === t.ref)
    )
      return qt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = sn(i, a)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function um(e, t, n, a, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Cl(i, a) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = a = i), Do(e, l)))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), qt(e, t, l);
  }
  return mu(e, t, n, a, l);
}
function om(e, t, n) {
  var a = t.pendingProps,
    l = a.children,
    i = (t.stateNode._pendingVisibility & 2) !== 0,
    s = e !== null ? e.memoizedState : null;
  if ((yl(e, t), a.mode === 'hidden' || i)) {
    if (t.flags & 128) {
      if (((a = s !== null ? s.baseLanes | n : n), e !== null)) {
        for (l = t.child = e.child, i = 0; l !== null; )
          (i = i | l.lanes | l.childLanes), (l = l.sibling);
        t.childLanes = i & ~a;
      } else (t.childLanes = 0), (t.child = null);
      return Wc(e, t, a, n);
    }
    if (n & 536870912)
      (t.memoizedState = { baseLanes: 0, cachePool: null }),
        e !== null && Ui(t, s !== null ? s.cachePool : null),
        s !== null ? qc(t, s) : ru(),
        Eh(t);
    else
      return (
        (t.lanes = t.childLanes = 536870912),
        Wc(e, t, s !== null ? s.baseLanes | n : n, n)
      );
  } else
    s !== null
      ? (Ui(t, s.cachePool), qc(t, s), Wt(), (t.memoizedState = null))
      : (e !== null && Ui(t, null), ru(), Wt());
  return be(e, t, l, n), t.child;
}
function Wc(e, t, n, a) {
  var l = vo();
  return (
    (l = l === null ? null : { parent: de._currentValue, pool: l }),
    (t.memoizedState = { baseLanes: n, cachePool: l }),
    e !== null && Ui(t, null),
    ru(),
    Eh(t),
    e !== null && Pl(e, t, a, !0),
    null
  );
}
function yl(e, t) {
  var n = t.ref;
  if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
  else {
    if (typeof n != 'function' && typeof n != 'object') throw Error(j(284));
    (e === null || e.ref !== n) && (t.flags |= 2097664);
  }
}
function mu(e, t, n, a, l) {
  return (
    $n(t),
    (n = xo(e, t, n, a, void 0, l)),
    (a = So()),
    e !== null && !ye
      ? (Eo(e, t, l), qt(e, t, l))
      : ($ && a && mo(t), (t.flags |= 1), be(e, t, n, l), t.child)
  );
}
function Pc(e, t, n, a, l, i) {
  return (
    $n(t),
    (t.updateQueue = null),
    (n = jh(t, a, n, l)),
    Nh(e),
    (a = So()),
    e !== null && !ye
      ? (Eo(e, t, i), qt(e, t, i))
      : ($ && a && mo(t), (t.flags |= 1), be(e, t, n, i), t.child)
  );
}
function Ic(e, t, n, a, l) {
  if (($n(t), t.stateNode === null)) {
    var i = da,
      s = n.contextType;
    typeof s == 'object' && s !== null && (i = Ne(s)),
      (i = new n(a, i)),
      (t.memoizedState =
        i.state !== null && i.state !== void 0 ? i.state : null),
      (i.updater = du),
      (t.stateNode = i),
      (i._reactInternals = t),
      (i = t.stateNode),
      (i.props = a),
      (i.state = t.memoizedState),
      (i.refs = {}),
      zo(t),
      (s = n.contextType),
      (i.context = typeof s == 'object' && s !== null ? Ne(s) : da),
      (i.state = t.memoizedState),
      (s = n.getDerivedStateFromProps),
      typeof s == 'function' && (gr(t, n, s, a), (i.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function' ||
        (typeof i.UNSAFE_componentWillMount != 'function' &&
          typeof i.componentWillMount != 'function') ||
        ((s = i.state),
        typeof i.componentWillMount == 'function' && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == 'function' &&
          i.UNSAFE_componentWillMount(),
        s !== i.state && du.enqueueReplaceState(i, i.state, null),
        xl(t, a, i, l),
        bl(),
        (i.state = t.memoizedState)),
      typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
      (a = !0);
  } else if (e === null) {
    i = t.stateNode;
    var r = t.memoizedProps,
      u = Vn(n, r);
    i.props = u;
    var o = i.context,
      c = n.contextType;
    (s = da), typeof c == 'object' && c !== null && (s = Ne(c));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
      (r = t.pendingProps !== r),
      c ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((r || o !== s) && Kc(t, i, a, s)),
      (Jt = !1);
    var f = t.memoizedState;
    (i.state = f),
      xl(t, a, i, l),
      bl(),
      (o = t.memoizedState),
      r || f !== o || Jt
        ? (typeof h == 'function' && (gr(t, n, h, a), (o = t.memoizedState)),
          (u = Jt || Qc(t, n, u, a, f, o, s))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = a),
              (t.memoizedState = o)),
          (i.props = a),
          (i.state = o),
          (i.context = s),
          (a = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (a = !1));
  } else {
    (i = t.stateNode),
      xu(e, t),
      (s = t.memoizedProps),
      (c = Vn(n, s)),
      (i.props = c),
      (h = t.pendingProps),
      (f = i.context),
      (o = n.contextType),
      (u = da),
      typeof o == 'object' && o !== null && (u = Ne(o)),
      (r = n.getDerivedStateFromProps),
      (o =
        typeof r == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((s !== h || f !== u) && Kc(t, i, a, u)),
      (Jt = !1),
      (f = t.memoizedState),
      (i.state = f),
      xl(t, a, i, l),
      bl();
    var m = t.memoizedState;
    s !== h ||
    f !== m ||
    Jt ||
    (e !== null && e.dependencies !== null && us(e.dependencies))
      ? (typeof r == 'function' && (gr(t, n, r, a), (m = t.memoizedState)),
        (c =
          Jt ||
          Qc(t, n, c, a, f, m, u) ||
          (e !== null && e.dependencies !== null && us(e.dependencies)))
          ? (o ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(a, m, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(a, m, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = a),
            (t.memoizedState = m)),
        (i.props = a),
        (i.state = m),
        (i.context = u),
        (a = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (a = !1));
  }
  return (
    (i = a),
    yl(e, t),
    (a = (t.flags & 128) !== 0),
    i || a
      ? ((i = t.stateNode),
        (n =
          a && typeof n.getDerivedStateFromError != 'function'
            ? null
            : i.render()),
        (t.flags |= 1),
        e !== null && a
          ? ((t.child = qn(t, e.child, null, l)), (t.child = qn(t, null, n, l)))
          : be(e, t, n, l),
        (t.memoizedState = i.state),
        (e = t.child))
      : (e = qt(e, t, l)),
    e
  );
}
function ef(e, t, n, a) {
  return Jl(), (t.flags |= 256), be(e, t, n, a), t.child;
}
var pr = { dehydrated: null, treeContext: null, retryLane: 0 };
function yr(e) {
  return { baseLanes: e, cachePool: wh() };
}
function vr(e, t, n) {
  return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= et), e;
}
function cm(e, t, n) {
  var a = t.pendingProps,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s =
        e !== null && e.memoizedState === null ? !1 : (he.current & 2) !== 0),
    s && ((l = !0), (t.flags &= -129)),
    (s = (t.flags & 32) !== 0),
    (t.flags &= -33),
    e === null)
  ) {
    if ($) {
      if ((l ? Ft(t) : Wt(), $)) {
        var r = xe,
          u;
        if ((u = r)) {
          e: {
            for (u = r, r = ft; u.nodeType !== 8; ) {
              if (!r) {
                r = null;
                break e;
              }
              if (((u = st(u.nextSibling)), u === null)) {
                r = null;
                break e;
              }
            }
            r = u;
          }
          r !== null
            ? ((t.memoizedState = {
                dehydrated: r,
                treeContext: Un !== null ? { id: zt, overflow: Ut } : null,
                retryLane: 536870912,
              }),
              (u = Ie(18, null, null, 0)),
              (u.stateNode = r),
              (u.return = t),
              (t.child = u),
              (Oe = t),
              (xe = null),
              (u = !0))
            : (u = !1);
        }
        u || kn(t);
      }
      if (
        ((r = t.memoizedState), r !== null && ((r = r.dehydrated), r !== null))
      )
        return r.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
      Lt(t);
    }
    return (
      (r = a.children),
      (a = a.fallback),
      l
        ? (Wt(),
          (l = t.mode),
          (r = pu({ mode: 'hidden', children: r }, l)),
          (a = Mn(a, l, n, null)),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          (l = t.child),
          (l.memoizedState = yr(n)),
          (l.childLanes = vr(e, s, n)),
          (t.memoizedState = pr),
          a)
        : (Ft(t), gu(t, r))
    );
  }
  if (((u = e.memoizedState), u !== null && ((r = u.dehydrated), r !== null))) {
    if (i)
      t.flags & 256
        ? (Ft(t), (t.flags &= -257), (t = br(e, t, n)))
        : t.memoizedState !== null
          ? (Wt(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Wt(),
            (l = a.fallback),
            (r = t.mode),
            (a = pu({ mode: 'visible', children: a.children }, r)),
            (l = Mn(l, r, n, null)),
            (l.flags |= 2),
            (a.return = t),
            (l.return = t),
            (a.sibling = l),
            (t.child = a),
            qn(t, e.child, null, n),
            (a = t.child),
            (a.memoizedState = yr(n)),
            (a.childLanes = vr(e, s, n)),
            (t.memoizedState = pr),
            (t = l));
    else if ((Ft(t), r.data === '$!')) {
      if (((s = r.nextSibling && r.nextSibling.dataset), s)) var o = s.dgst;
      (s = o),
        (a = Error(j(419))),
        (a.stack = ''),
        (a.digest = s),
        Dl({ value: a, source: null, stack: null }),
        (t = br(e, t, n));
    } else if (
      (ye || Pl(e, t, n, !1), (s = (n & e.childLanes) !== 0), ye || s)
    ) {
      if (((s = J), s !== null)) {
        if (((a = n & -n), a & 42)) a = 1;
        else
          switch (a) {
            case 2:
              a = 1;
              break;
            case 8:
              a = 4;
              break;
            case 32:
              a = 16;
              break;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              a = 64;
              break;
            case 268435456:
              a = 134217728;
              break;
            default:
              a = 0;
          }
        if (
          ((a = a & (s.suspendedLanes | n) ? 0 : a),
          a !== 0 && a !== u.retryLane)
        )
          throw ((u.retryLane = a), fn(e, a), Re(s, e, a), rm);
      }
      r.data === '$?' || Ru(), (t = br(e, t, n));
    } else
      r.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = py.bind(null, e)),
          (r._reactRetry = t),
          (t = null))
        : ((e = u.treeContext),
          (xe = st(r.nextSibling)),
          (Oe = t),
          ($ = !0),
          (it = null),
          (ft = !1),
          e !== null &&
            ((Je[Fe++] = zt),
            (Je[Fe++] = Ut),
            (Je[Fe++] = Un),
            (zt = e.id),
            (Ut = e.overflow),
            (Un = t)),
          (t = gu(t, a.children)),
          (t.flags |= 4096));
    return t;
  }
  return l
    ? (Wt(),
      (l = a.fallback),
      (r = t.mode),
      (u = e.child),
      (o = u.sibling),
      (a = sn(u, { mode: 'hidden', children: a.children })),
      (a.subtreeFlags = u.subtreeFlags & 31457280),
      o !== null ? (l = sn(o, l)) : ((l = Mn(l, r, n, null)), (l.flags |= 2)),
      (l.return = t),
      (a.return = t),
      (a.sibling = l),
      (t.child = a),
      (a = l),
      (l = t.child),
      (r = e.child.memoizedState),
      r === null
        ? (r = yr(n))
        : ((u = r.cachePool),
          u !== null
            ? ((o = de._currentValue),
              (u = u.parent !== o ? { parent: o, pool: o } : u))
            : (u = wh()),
          (r = { baseLanes: r.baseLanes | n, cachePool: u })),
      (l.memoizedState = r),
      (l.childLanes = vr(e, s, n)),
      (t.memoizedState = pr),
      a)
    : (Ft(t),
      (n = e.child),
      (e = n.sibling),
      (n = sn(n, { mode: 'visible', children: a.children })),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((s = t.deletions),
        s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n);
}
function gu(e, t) {
  return (
    (t = pu({ mode: 'visible', children: t }, e.mode)),
    (t.return = e),
    (e.child = t)
  );
}
function pu(e, t) {
  return zm(e, t, 0, null);
}
function br(e, t, n) {
  return (
    qn(t, e.child, null, n),
    (e = gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tf(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), vu(e.return, t, n);
}
function xr(e, t, n, a, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = a),
      (i.tail = n),
      (i.tailMode = l));
}
function fm(e, t, n) {
  var a = t.pendingProps,
    l = a.revealOrder,
    i = a.tail;
  if ((be(e, t, a.children, n), (a = he.current), a & 2))
    (a = (a & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tf(e, n, t);
        else if (e.tag === 19) tf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    a &= 1;
  }
  switch ((ee(he, a), l)) {
    case 'forwards':
      for (n = t.child, l = null; n !== null; )
        (e = n.alternate),
          e !== null && as(e) === null && (l = n),
          (n = n.sibling);
      (n = l),
        n === null
          ? ((l = t.child), (t.child = null))
          : ((l = n.sibling), (n.sibling = null)),
        xr(t, !1, l, n, i);
      break;
    case 'backwards':
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (((e = l.alternate), e !== null && as(e) === null)) {
          t.child = l;
          break;
        }
        (e = l.sibling), (l.sibling = n), (n = l), (l = e);
      }
      xr(t, !0, n, null, i);
      break;
    case 'together':
      xr(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    if (e !== null) {
      if ((Pl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
    } else return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Do(e, t) {
  return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && us(e)));
}
function ny(e, t, n) {
  switch (t.tag) {
    case 3:
      Zi(t, t.stateNode.containerInfo), Pt(t, de, e.memoizedState.cache), Jl();
      break;
    case 27:
    case 5:
      Fr(t);
      break;
    case 4:
      Zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      Pt(t, t.type, t.memoizedProps.value);
      break;
    case 13:
      var a = t.memoizedState;
      if (a !== null)
        return a.dehydrated !== null
          ? (Ft(t), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cm(e, t, n)
            : (Ft(t), (e = qt(e, t, n)), e !== null ? e.sibling : null);
      Ft(t);
      break;
    case 19:
      var l = (e.flags & 128) !== 0;
      if (
        ((a = (n & t.childLanes) !== 0),
        a || (Pl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
        l)
      ) {
        if (a) return fm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(he, he.current),
        a)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), om(e, t, n);
    case 24:
      Pt(t, de, e.memoizedState.cache);
  }
  return qt(e, t, n);
}
function dm(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps) ye = !0;
    else {
      if (!Do(e, n) && !(t.flags & 128)) return (ye = !1), ny(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), $ && t.flags & 1048576 && yh(t, ts, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      e: {
        e = t.pendingProps;
        var a = t.elementType,
          l = a._init;
        if (((a = l(a._payload)), (t.type = a), typeof a == 'function'))
          Mo(a)
            ? ((e = Vn(a, e)), (t.tag = 1), (t = Ic(null, t, a, e, n)))
            : ((t.tag = 0), (t = mu(null, t, a, e, n)));
        else {
          if (a != null) {
            if (((l = a.$$typeof), l === to)) {
              (t.tag = 11), (t = Jc(null, t, a, e, n));
              break e;
            } else if (l === no) {
              (t.tag = 14), (t = Fc(null, t, a, e, n));
              break e;
            }
          }
          throw ((t = Zr(a) || a), Error(j(306, t, '')));
        }
      }
      return t;
    case 0:
      return mu(e, t, t.type, t.pendingProps, n);
    case 1:
      return (a = t.type), (l = Vn(a, t.pendingProps)), Ic(e, t, a, l, n);
    case 3:
      e: {
        if ((Zi(t, t.stateNode.containerInfo), e === null)) throw Error(j(387));
        var i = t.pendingProps;
        (l = t.memoizedState), (a = l.element), xu(e, t), xl(t, i, null, n);
        var s = t.memoizedState;
        if (
          ((i = s.cache),
          Pt(t, de, i),
          i !== l.cache && bu(t, [de], n, !0),
          bl(),
          (i = s.element),
          l.isDehydrated)
        )
          if (
            ((l = { element: i, isDehydrated: !1, cache: s.cache }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            t = ef(e, t, i, n);
            break e;
          } else if (i !== a) {
            (a = Pe(Error(j(424)), t)), Dl(a), (t = ef(e, t, i, n));
            break e;
          } else
            for (
              xe = st(t.stateNode.containerInfo.firstChild),
                Oe = t,
                $ = !0,
                it = null,
                ft = !0,
                n = Sh(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jl(), i === a)) {
            t = qt(e, t, n);
            break e;
          }
          be(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 26:
      return (
        yl(e, t),
        e === null
          ? (n = xf(t.type, null, t.pendingProps, null))
            ? (t.memoizedState = n)
            : $ ||
              ((n = t.type),
              (e = t.pendingProps),
              (a = gs(nn.current).createElement(n)),
              (a[we] = t),
              (a[Le] = e),
              Se(a, n, e),
              pe(a),
              (t.stateNode = a))
          : (t.memoizedState = xf(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState
            )),
        null
      );
    case 27:
      return (
        Fr(t),
        e === null &&
          $ &&
          ((a = t.stateNode = Fm(t.type, t.pendingProps, nn.current)),
          (Oe = t),
          (ft = !0),
          (xe = st(a.firstChild))),
        (a = t.pendingProps.children),
        e !== null || $ ? be(e, t, a, n) : (t.child = qn(t, null, a, n)),
        yl(e, t),
        t.child
      );
    case 5:
      return (
        e === null &&
          $ &&
          ((l = a = xe) &&
            ((a = zy(a, t.type, t.pendingProps, ft)),
            a !== null
              ? ((t.stateNode = a),
                (Oe = t),
                (xe = st(a.firstChild)),
                (ft = !1),
                (l = !0))
              : (l = !1)),
          l || kn(t)),
        Fr(t),
        (l = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Uu(l, i) ? (a = null) : s !== null && Uu(l, s) && (t.flags |= 32),
        t.memoizedState !== null &&
          ((l = xo(e, t, J0, null, null, n)), (Hl._currentValue = l)),
        yl(e, t),
        be(e, t, a, n),
        t.child
      );
    case 6:
      return (
        e === null &&
          $ &&
          ((e = n = xe) &&
            ((n = Uy(n, t.pendingProps, ft)),
            n !== null
              ? ((t.stateNode = n), (Oe = t), (xe = null), (e = !0))
              : (e = !1)),
          e || kn(t)),
        null
      );
    case 13:
      return cm(e, t, n);
    case 4:
      return (
        Zi(t, t.stateNode.containerInfo),
        (a = t.pendingProps),
        e === null ? (t.child = qn(t, null, a, n)) : be(e, t, a, n),
        t.child
      );
    case 11:
      return Jc(e, t, t.type, t.pendingProps, n);
    case 7:
      return be(e, t, t.pendingProps, n), t.child;
    case 8:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      return (
        (a = t.pendingProps),
        Pt(t, t.type, a.value),
        be(e, t, a.children, n),
        t.child
      );
    case 9:
      return (
        (l = t.type._context),
        (a = t.pendingProps.children),
        $n(t),
        (l = Ne(l)),
        (a = a(l)),
        (t.flags |= 1),
        be(e, t, a, n),
        t.child
      );
    case 14:
      return Fc(e, t, t.type, t.pendingProps, n);
    case 15:
      return um(e, t, t.type, t.pendingProps, n);
    case 19:
      return fm(e, t, n);
    case 22:
      return om(e, t, n);
    case 24:
      return (
        $n(t),
        (a = Ne(de)),
        e === null
          ? ((l = vo()),
            l === null &&
              ((l = J),
              (i = yo()),
              (l.pooledCache = i),
              i.refCount++,
              i !== null && (l.pooledCacheLanes |= n),
              (l = i)),
            (t.memoizedState = { parent: a, cache: l }),
            zo(t),
            Pt(t, de, l))
          : (e.lanes & n && (xu(e, t), xl(t, null, null, n), bl()),
            (l = e.memoizedState),
            (i = t.memoizedState),
            l.parent !== a
              ? ((l = { parent: a, cache: a }),
                (t.memoizedState = l),
                t.lanes === 0 &&
                  (t.memoizedState = t.updateQueue.baseState = l),
                Pt(t, de, a))
              : ((a = i.cache),
                Pt(t, de, a),
                a !== l.cache && bu(t, [de], n, !0))),
        be(e, t, t.pendingProps.children, n),
        t.child
      );
    case 29:
      throw t.pendingProps;
  }
  throw Error(j(156, t.tag));
}
var yu = bt(null),
  Fn = null,
  Mt = null;
function Pt(e, t, n) {
  ee(yu, t._currentValue), (t._currentValue = n);
}
function _t(e) {
  (e._currentValue = yu.current), ve(yu);
}
function vu(e, t, n) {
  for (; e !== null; ) {
    var a = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
        : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bu(e, t, n, a) {
  var l = e.child;
  for (l !== null && (l.return = e); l !== null; ) {
    var i = l.dependencies;
    if (i !== null) {
      var s = l.child;
      i = i.firstContext;
      e: for (; i !== null; ) {
        var r = i;
        i = l;
        for (var u = 0; u < t.length; u++)
          if (r.context === t[u]) {
            (i.lanes |= n),
              (r = i.alternate),
              r !== null && (r.lanes |= n),
              vu(i.return, n, e),
              a || (s = null);
            break e;
          }
        i = r.next;
      }
    } else if (l.tag === 18) {
      if (((s = l.return), s === null)) throw Error(j(341));
      (s.lanes |= n),
        (i = s.alternate),
        i !== null && (i.lanes |= n),
        vu(s, n, e),
        (s = null);
    } else s = l.child;
    if (s !== null) s.return = l;
    else
      for (s = l; s !== null; ) {
        if (s === e) {
          s = null;
          break;
        }
        if (((l = s.sibling), l !== null)) {
          (l.return = s.return), (s = l);
          break;
        }
        s = s.return;
      }
    l = s;
  }
}
function Pl(e, t, n, a) {
  e = null;
  for (var l = t, i = !1; l !== null; ) {
    if (!i) {
      if (l.flags & 524288) i = !0;
      else if (l.flags & 262144) break;
    }
    if (l.tag === 10) {
      var s = l.alternate;
      if (s === null) throw Error(j(387));
      if (((s = s.memoizedProps), s !== null)) {
        var r = l.type;
        Ge(l.pendingProps.value, s.value) ||
          (e !== null ? e.push(r) : (e = [r]));
      }
    } else if (l === Ki.current) {
      if (((s = l.alternate), s === null)) throw Error(j(387));
      s.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
        (e !== null ? e.push(Hl) : (e = [Hl]));
    }
    l = l.return;
  }
  e !== null && bu(t, e, n, a), (t.flags |= 262144);
}
function us(e) {
  for (e = e.firstContext; e !== null; ) {
    if (!Ge(e.context._currentValue, e.memoizedValue)) return !0;
    e = e.next;
  }
  return !1;
}
function $n(e) {
  (Fn = e),
    (Mt = null),
    (e = e.dependencies),
    e !== null && (e.firstContext = null);
}
function Ne(e) {
  return hm(Fn, e);
}
function bi(e, t) {
  return Fn === null && $n(e), hm(e, t);
}
function hm(e, t) {
  var n = t._currentValue;
  if (((t = { context: t, memoizedValue: n, next: null }), Mt === null)) {
    if (e === null) throw Error(j(308));
    (Mt = t),
      (e.dependencies = { lanes: 0, firstContext: t }),
      (e.flags |= 524288);
  } else Mt = Mt.next = t;
  return n;
}
var Jt = !1;
function zo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function xu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null,
      });
}
function an(e) {
  return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), ae & 2)) {
    var l = a.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (a.pending = t),
      (t = Ii(e)),
      ph(e, null, n),
      t
    );
  }
  return _s(e, a, t, n), Ii(e);
}
function vl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))
  ) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), $d(e, n);
  }
}
function Sr(e, t) {
  var n = e.updateQueue,
    a = e.alternate;
  if (a !== null && ((a = a.updateQueue), n === a)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: null,
          next: null,
        };
        i === null ? (l = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: a.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: a.shared,
      callbacks: a.callbacks,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
var Su = !1;
function bl() {
  if (Su) {
    var e = Sa;
    if (e !== null) throw e;
  }
}
function xl(e, t, n, a) {
  Su = !1;
  var l = e.updateQueue;
  Jt = !1;
  var i = l.firstBaseUpdate,
    s = l.lastBaseUpdate,
    r = l.shared.pending;
  if (r !== null) {
    l.shared.pending = null;
    var u = r,
      o = u.next;
    (u.next = null), s === null ? (i = o) : (s.next = o), (s = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (r = c.lastBaseUpdate),
      r !== s &&
        (r === null ? (c.firstBaseUpdate = o) : (r.next = o),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var h = l.baseState;
    (s = 0), (c = o = u = null), (r = i);
    do {
      var f = r.lane & -536870913,
        m = f !== r.lane;
      if (m ? (V & f) === f : (a & f) === f) {
        f !== 0 && f === Aa && (Su = !0),
          c !== null &&
            (c = c.next =
              {
                lane: 0,
                tag: r.tag,
                payload: r.payload,
                callback: null,
                next: null,
              });
        e: {
          var y = e,
            x = r;
          f = t;
          var b = n;
          switch (x.tag) {
            case 1:
              if (((y = x.payload), typeof y == 'function')) {
                h = y.call(b, h, f);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (f = typeof y == 'function' ? y.call(b, h, f) : y),
                f == null)
              )
                break e;
              h = P({}, h, f);
              break e;
            case 2:
              Jt = !0;
          }
        }
        (f = r.callback),
          f !== null &&
            ((e.flags |= 64),
            m && (e.flags |= 8192),
            (m = l.callbacks),
            m === null ? (l.callbacks = [f]) : m.push(f));
      } else
        (m = {
          lane: f,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }),
          c === null ? ((o = c = m), (u = h)) : (c = c.next = m),
          (s |= f);
      if (((r = r.next), r === null)) {
        if (((r = l.shared.pending), r === null)) break;
        (m = r),
          (r = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    c === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = o),
      (l.lastBaseUpdate = c),
      i === null && (l.shared.lanes = 0),
      (mn |= s),
      (e.lanes = s),
      (e.memoizedState = h);
  }
}
function mm(e, t) {
  if (typeof e != 'function') throw Error(j(191, e));
  e.call(t);
}
function gm(e, t) {
  var n = e.callbacks;
  if (n !== null)
    for (e.callbacks = null, e = 0; e < n.length; e++) mm(n[e], t);
}
function Il(e, t) {
  try {
    var n = t.updateQueue,
      a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var l = a.next;
      n = l;
      do {
        if ((n.tag & e) === e) {
          a = void 0;
          var i = n.create,
            s = n.inst;
          (a = i()), (s.destroy = a);
        }
        n = n.next;
      } while (n !== l);
    }
  } catch (r) {
    K(t, t.return, r);
  }
}
function hn(e, t, n) {
  try {
    var a = t.updateQueue,
      l = a !== null ? a.lastEffect : null;
    if (l !== null) {
      var i = l.next;
      a = i;
      do {
        if ((a.tag & e) === e) {
          var s = a.inst,
            r = s.destroy;
          if (r !== void 0) {
            (s.destroy = void 0), (l = t);
            var u = n;
            try {
              r();
            } catch (o) {
              K(l, u, o);
            }
          }
        }
        a = a.next;
      } while (a !== i);
    }
  } catch (o) {
    K(t, t.return, o);
  }
}
function pm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    var n = e.stateNode;
    try {
      gm(t, n);
    } catch (a) {
      K(e, e.return, a);
    }
  }
}
function ym(e, t, n) {
  (n.props = Vn(e.type, e.memoizedProps)), (n.state = e.memoizedState);
  try {
    n.componentWillUnmount();
  } catch (a) {
    K(e, t, a);
  }
}
function An(e, t) {
  try {
    var n = e.ref;
    if (n !== null) {
      var a = e.stateNode;
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          var l = a;
          break;
        default:
          l = a;
      }
      typeof n == 'function' ? (e.refCleanup = n(l)) : (n.current = l);
    }
  } catch (i) {
    K(e, t, i);
  }
}
function ke(e, t) {
  var n = e.ref,
    a = e.refCleanup;
  if (n !== null)
    if (typeof a == 'function')
      try {
        a();
      } catch (l) {
        K(e, t, l);
      } finally {
        (e.refCleanup = null),
          (e = e.alternate),
          e != null && (e.refCleanup = null);
      }
    else if (typeof n == 'function')
      try {
        n(null);
      } catch (l) {
        K(e, t, l);
      }
    else n.current = null;
}
function vm(e) {
  var t = e.type,
    n = e.memoizedProps,
    a = e.stateNode;
  try {
    e: switch (t) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        n.autoFocus && a.focus();
        break e;
      case 'img':
        n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
    }
  } catch (l) {
    K(e, e.return, l);
  }
}
function nf(e, t, n) {
  try {
    var a = e.stateNode;
    Ty(a, e.type, n, t), (a[Le] = t);
  } catch (l) {
    K(e, e.return, l);
  }
}
function bm(e) {
  return (
    e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
  );
}
function Er(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Eu(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $s));
  else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
    for (Eu(e, t, n), e = e.sibling; e !== null; ) Eu(e, t, n), (e = e.sibling);
}
function os(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
    for (os(e, t, n), e = e.sibling; e !== null; ) os(e, t, n), (e = e.sibling);
}
var Tt = !1,
  se = !1,
  wr = !1,
  af = typeof WeakSet == 'function' ? WeakSet : Set,
  ge = null,
  lf = !1;
function ay(e, t) {
  if (((e = e.containerInfo), (Du = bs), (e = oh(e)), co(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var l = a.anchorOffset,
            i = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            r = -1,
            u = -1,
            o = 0,
            c = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              h !== n || (l !== 0 && h.nodeType !== 3) || (r = s + l),
                h !== i || (a !== 0 && h.nodeType !== 3) || (u = s + a),
                h.nodeType === 3 && (s += h.nodeValue.length),
                (m = h.firstChild) !== null;

            )
              (f = h), (h = m);
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++o === l && (r = s),
                f === i && ++c === a && (u = s),
                (m = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = m;
          }
          n = r === -1 || u === -1 ? null : { start: r, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    zu = { focusedElem: e, selectionRange: n }, bs = !1, ge = t;
    ge !== null;

  )
    if (((t = ge), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ge = e);
    else
      for (; ge !== null; ) {
        switch (((t = ge), (i = t.alternate), (e = t.flags), t.tag)) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (e & 1024 && i !== null) {
              (e = void 0),
                (n = t),
                (l = i.memoizedProps),
                (i = i.memoizedState),
                (a = n.stateNode);
              try {
                var y = Vn(n.type, l, n.elementType === n.type);
                (e = a.getSnapshotBeforeUpdate(y, i)),
                  (a.__reactInternalSnapshotBeforeUpdate = e);
              } catch (x) {
                K(n, n.return, x);
              }
            }
            break;
          case 3:
            if (e & 1024) {
              if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9))
                Lu(e);
              else if (n === 1)
                switch (e.nodeName) {
                  case 'HEAD':
                  case 'HTML':
                  case 'BODY':
                    Lu(e);
                    break;
                  default:
                    e.textContent = '';
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (e & 1024) throw Error(j(163));
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ge = e);
          break;
        }
        ge = t.return;
      }
  return (y = lf), (lf = !1), y;
}
function xm(e, t, n) {
  var a = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      jt(e, n), a & 4 && Il(5, n);
      break;
    case 1:
      if ((jt(e, n), a & 4))
        if (((e = n.stateNode), t === null))
          try {
            e.componentDidMount();
          } catch (r) {
            K(n, n.return, r);
          }
        else {
          var l = Vn(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (r) {
            K(n, n.return, r);
          }
        }
      a & 64 && pm(n), a & 512 && An(n, n.return);
      break;
    case 3:
      if ((jt(e, n), a & 64 && ((a = n.updateQueue), a !== null))) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 27:
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        try {
          gm(a, e);
        } catch (r) {
          K(n, n.return, r);
        }
      }
      break;
    case 26:
      jt(e, n), a & 512 && An(n, n.return);
      break;
    case 27:
    case 5:
      jt(e, n), t === null && a & 4 && vm(n), a & 512 && An(n, n.return);
      break;
    case 12:
      jt(e, n);
      break;
    case 13:
      jt(e, n), a & 4 && wm(e, n);
      break;
    case 22:
      if (((l = n.memoizedState !== null || Tt), !l)) {
        t = (t !== null && t.memoizedState !== null) || se;
        var i = Tt,
          s = se;
        (Tt = l),
          (se = t) && !s ? Kt(e, n, (n.subtreeFlags & 8772) !== 0) : jt(e, n),
          (Tt = i),
          (se = s);
      }
      a & 512 &&
        (n.memoizedProps.mode === 'manual' ? An(n, n.return) : ke(n, n.return));
      break;
    default:
      jt(e, n);
  }
}
function Sm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && lo(t)),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
var oe = null,
  He = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) Em(e, t, n), (n = n.sibling);
}
function Em(e, t, n) {
  if (qe && typeof qe.onCommitFiberUnmount == 'function')
    try {
      qe.onCommitFiberUnmount(Xl, n);
    } catch {}
  switch (n.tag) {
    case 26:
      se || ke(n, t),
        Nt(e, t, n),
        n.memoizedState
          ? n.memoizedState.count--
          : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
      break;
    case 27:
      se || ke(n, t);
      var a = oe,
        l = He;
      for (
        oe = n.stateNode, Nt(e, t, n), n = n.stateNode, t = n.attributes;
        t.length;

      )
        n.removeAttributeNode(t[0]);
      lo(n), (oe = a), (He = l);
      break;
    case 5:
      se || ke(n, t);
    case 6:
      l = oe;
      var i = He;
      if (((oe = null), Nt(e, t, n), (oe = l), (He = i), oe !== null))
        if (He)
          try {
            (e = oe),
              (a = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a);
          } catch (s) {
            K(n, t, s);
          }
        else
          try {
            oe.removeChild(n.stateNode);
          } catch (s) {
            K(n, t, s);
          }
      break;
    case 18:
      oe !== null &&
        (He
          ? ((t = oe),
            (n = n.stateNode),
            t.nodeType === 8
              ? Mr(t.parentNode, n)
              : t.nodeType === 1 && Mr(t, n),
            ql(t))
          : Mr(oe, n.stateNode));
      break;
    case 4:
      (a = oe),
        (l = He),
        (oe = n.stateNode.containerInfo),
        (He = !0),
        Nt(e, t, n),
        (oe = a),
        (He = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      se || hn(2, n, t), se || hn(4, n, t), Nt(e, t, n);
      break;
    case 1:
      se ||
        (ke(n, t),
        (a = n.stateNode),
        typeof a.componentWillUnmount == 'function' && ym(n, t, a)),
        Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      se || ke(n, t),
        (se = (a = se) || n.memoizedState !== null),
        Nt(e, t, n),
        (se = a);
      break;
    default:
      Nt(e, t, n);
  }
}
function wm(e, t) {
  if (
    t.memoizedState === null &&
    ((e = t.alternate),
    e !== null &&
      ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
  )
    try {
      ql(e);
    } catch (n) {
      K(t, t.return, n);
    }
}
function ly(e) {
  switch (e.tag) {
    case 13:
    case 19:
      var t = e.stateNode;
      return t === null && (t = e.stateNode = new af()), t;
    case 22:
      return (
        (e = e.stateNode),
        (t = e._retryCache),
        t === null && (t = e._retryCache = new af()),
        t
      );
    default:
      throw Error(j(435, e.tag));
  }
}
function Nr(e, t) {
  var n = ly(e);
  t.forEach(function (a) {
    var l = yy.bind(null, e, a);
    n.has(a) || (n.add(a), a.then(l, l));
  });
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var l = n[a],
        i = e,
        s = t,
        r = s;
      e: for (; r !== null; ) {
        switch (r.tag) {
          case 27:
          case 5:
            (oe = r.stateNode), (He = !1);
            break e;
          case 3:
            (oe = r.stateNode.containerInfo), (He = !0);
            break e;
          case 4:
            (oe = r.stateNode.containerInfo), (He = !0);
            break e;
        }
        r = r.return;
      }
      if (oe === null) throw Error(j(160));
      Em(i, s, l),
        (oe = null),
        (He = !1),
        (i = l.alternate),
        i !== null && (i.return = null),
        (l.return = null);
    }
  if (t.subtreeFlags & 13878)
    for (t = t.child; t !== null; ) Nm(t, e), (t = t.sibling);
}
var lt = null;
function Nm(e, t) {
  var n = e.alternate,
    a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Xe(t, e),
        Qe(e),
        a & 4 && (hn(3, e, e.return), Il(3, e), hn(5, e, e.return));
      break;
    case 1:
      Xe(t, e),
        Qe(e),
        a & 512 && (se || n === null || ke(n, n.return)),
        a & 64 &&
          Tt &&
          ((e = e.updateQueue),
          e !== null &&
            ((a = e.callbacks),
            a !== null &&
              ((n = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
      break;
    case 26:
      var l = lt;
      if (
        (Xe(t, e),
        Qe(e),
        a & 512 && (se || n === null || ke(n, n.return)),
        a & 4)
      ) {
        var i = n !== null ? n.memoizedState : null;
        if (((a = e.memoizedState), n === null))
          if (a === null)
            if (e.stateNode === null) {
              e: {
                (a = e.type), (n = e.memoizedProps), (l = l.ownerDocument || l);
                t: switch (a) {
                  case 'title':
                    (i = l.getElementsByTagName('title')[0]),
                      (!i ||
                        i[Tl] ||
                        i[we] ||
                        i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                        i.hasAttribute('itemprop')) &&
                        ((i = l.createElement(a)),
                        l.head.insertBefore(
                          i,
                          l.querySelector('head > title')
                        )),
                      Se(i, a, n),
                      (i[we] = e),
                      pe(i),
                      (a = i);
                    break e;
                  case 'link':
                    var s = Ef('link', 'href', l).get(a + (n.href || ''));
                    if (s) {
                      for (var r = 0; r < s.length; r++)
                        if (
                          ((i = s[r]),
                          i.getAttribute('href') ===
                            (n.href == null ? null : n.href) &&
                            i.getAttribute('rel') ===
                              (n.rel == null ? null : n.rel) &&
                            i.getAttribute('title') ===
                              (n.title == null ? null : n.title) &&
                            i.getAttribute('crossorigin') ===
                              (n.crossOrigin == null ? null : n.crossOrigin))
                        ) {
                          s.splice(r, 1);
                          break t;
                        }
                    }
                    (i = l.createElement(a)),
                      Se(i, a, n),
                      l.head.appendChild(i);
                    break;
                  case 'meta':
                    if (
                      (s = Ef('meta', 'content', l).get(a + (n.content || '')))
                    ) {
                      for (r = 0; r < s.length; r++)
                        if (
                          ((i = s[r]),
                          i.getAttribute('content') ===
                            (n.content == null ? null : '' + n.content) &&
                            i.getAttribute('name') ===
                              (n.name == null ? null : n.name) &&
                            i.getAttribute('property') ===
                              (n.property == null ? null : n.property) &&
                            i.getAttribute('http-equiv') ===
                              (n.httpEquiv == null ? null : n.httpEquiv) &&
                            i.getAttribute('charset') ===
                              (n.charSet == null ? null : n.charSet))
                        ) {
                          s.splice(r, 1);
                          break t;
                        }
                    }
                    (i = l.createElement(a)),
                      Se(i, a, n),
                      l.head.appendChild(i);
                    break;
                  default:
                    throw Error(j(468, a));
                }
                (i[we] = e), pe(i), (a = i);
              }
              e.stateNode = a;
            } else wf(l, e.type, e.stateNode);
          else e.stateNode = Sf(l, a, e.memoizedProps);
        else
          i !== a
            ? (i === null
                ? n.stateNode !== null &&
                  ((n = n.stateNode), n.parentNode.removeChild(n))
                : i.count--,
              a === null
                ? wf(l, e.type, e.stateNode)
                : Sf(l, a, e.memoizedProps))
            : a === null &&
              e.stateNode !== null &&
              nf(e, e.memoizedProps, n.memoizedProps);
      }
      break;
    case 27:
      if (a & 4 && e.alternate === null) {
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          for (var u = l.firstChild; u; ) {
            var o = u.nextSibling,
              c = u.nodeName;
            u[Tl] ||
              c === 'HEAD' ||
              c === 'BODY' ||
              c === 'SCRIPT' ||
              c === 'STYLE' ||
              (c === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = o);
          }
          for (var h = e.type, f = l.attributes; f.length; )
            l.removeAttributeNode(f[0]);
          Se(l, h, i), (l[we] = e), (l[Le] = i);
        } catch (y) {
          K(e, e.return, y);
        }
      }
    case 5:
      if (
        (Xe(t, e),
        Qe(e),
        a & 512 && (se || n === null || ke(n, n.return)),
        e.flags & 32)
      ) {
        l = e.stateNode;
        try {
          Ta(l, '');
        } catch (y) {
          K(e, e.return, y);
        }
      }
      a & 4 &&
        e.stateNode != null &&
        ((l = e.memoizedProps), nf(e, l, n !== null ? n.memoizedProps : l)),
        a & 1024 && (wr = !0);
      break;
    case 6:
      if ((Xe(t, e), Qe(e), a & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (a = e.memoizedProps), (n = e.stateNode);
        try {
          n.nodeValue = a;
        } catch (y) {
          K(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        ((ki = null),
        (l = lt),
        (lt = ps(t.containerInfo)),
        Xe(t, e),
        (lt = l),
        Qe(e),
        a & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ql(t.containerInfo);
        } catch (y) {
          K(e, e.return, y);
        }
      wr && ((wr = !1), jm(e));
      break;
    case 4:
      (a = lt), (lt = ps(e.stateNode.containerInfo)), Xe(t, e), Qe(e), (lt = a);
      break;
    case 12:
      Xe(t, e), Qe(e);
      break;
    case 13:
      Xe(t, e),
        Qe(e),
        e.child.flags & 8192 &&
          (e.memoizedState !== null) !=
            (n !== null && n.memoizedState !== null) &&
          (Bo = gt()),
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((e.updateQueue = null), Nr(e, a)));
      break;
    case 22:
      if (
        (a & 512 && (se || n === null || ke(n, n.return)),
        (u = e.memoizedState !== null),
        (o = n !== null && n.memoizedState !== null),
        (c = Tt),
        (h = se),
        (Tt = c || u),
        (se = h || o),
        Xe(t, e),
        (se = h),
        (Tt = c),
        Qe(e),
        (t = e.stateNode),
        (t._current = e),
        (t._visibility &= -3),
        (t._visibility |= t._pendingVisibility & 2),
        a & 8192 &&
          ((t._visibility = u ? t._visibility & -2 : t._visibility | 1),
          u && ((t = Tt || se), n === null || o || t || na(e)),
          e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
      )
        e: for (n = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
            if (n === null) {
              o = n = t;
              try {
                if (((l = o.stateNode), u))
                  (i = l.style),
                    typeof i.setProperty == 'function'
                      ? i.setProperty('display', 'none', 'important')
                      : (i.display = 'none');
                else {
                  (s = o.stateNode), (r = o.memoizedProps.style);
                  var m =
                    r != null && r.hasOwnProperty('display') ? r.display : null;
                  s.style.display =
                    m == null || typeof m == 'boolean' ? '' : ('' + m).trim();
                }
              } catch (y) {
                K(o, o.return, y);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              o = t;
              try {
                o.stateNode.nodeValue = u ? '' : o.memoizedProps;
              } catch (y) {
                K(o, o.return, y);
              }
            }
          } else if (
            ((t.tag !== 22 && t.tag !== 23) ||
              t.memoizedState === null ||
              t === e) &&
            t.child !== null
          ) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            n === t && (n = null), (t = t.return);
          }
          n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
        }
      a & 4 &&
        ((a = e.updateQueue),
        a !== null &&
          ((n = a.retryQueue),
          n !== null && ((a.retryQueue = null), Nr(e, n))));
      break;
    case 19:
      Xe(t, e),
        Qe(e),
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((e.updateQueue = null), Nr(e, a)));
      break;
    case 21:
      break;
    default:
      Xe(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      if (e.tag !== 27) {
        e: {
          for (var n = e.return; n !== null; ) {
            if (bm(n)) {
              var a = n;
              break e;
            }
            n = n.return;
          }
          throw Error(j(160));
        }
        switch (a.tag) {
          case 27:
            var l = a.stateNode,
              i = Er(e);
            os(e, i, l);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (Ta(s, ''), (a.flags &= -33));
            var r = Er(e);
            os(e, r, s);
            break;
          case 3:
          case 4:
            var u = a.stateNode.containerInfo,
              o = Er(e);
            Eu(e, o, u);
            break;
          default:
            throw Error(j(161));
        }
      }
    } catch (c) {
      K(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jm(e) {
  if (e.subtreeFlags & 1024)
    for (e = e.child; e !== null; ) {
      var t = e;
      jm(t),
        t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
        (e = e.sibling);
    }
}
function jt(e, t) {
  if (t.subtreeFlags & 8772)
    for (t = t.child; t !== null; ) xm(e, t.alternate, t), (t = t.sibling);
}
function na(e) {
  for (e = e.child; e !== null; ) {
    var t = e;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        hn(4, t, t.return), na(t);
        break;
      case 1:
        ke(t, t.return);
        var n = t.stateNode;
        typeof n.componentWillUnmount == 'function' && ym(t, t.return, n),
          na(t);
        break;
      case 26:
      case 27:
      case 5:
        ke(t, t.return), na(t);
        break;
      case 22:
        ke(t, t.return), t.memoizedState === null && na(t);
        break;
      default:
        na(t);
    }
    e = e.sibling;
  }
}
function Kt(e, t, n) {
  for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
    var a = t.alternate,
      l = e,
      i = t,
      s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Kt(l, i, n), Il(4, i);
        break;
      case 1:
        if (
          (Kt(l, i, n),
          (a = i),
          (l = a.stateNode),
          typeof l.componentDidMount == 'function')
        )
          try {
            l.componentDidMount();
          } catch (o) {
            K(a, a.return, o);
          }
        if (((a = i), (l = a.updateQueue), l !== null)) {
          var r = a.stateNode;
          try {
            var u = l.shared.hiddenCallbacks;
            if (u !== null)
              for (l.shared.hiddenCallbacks = null, l = 0; l < u.length; l++)
                mm(u[l], r);
          } catch (o) {
            K(a, a.return, o);
          }
        }
        n && s & 64 && pm(i), An(i, i.return);
        break;
      case 26:
      case 27:
      case 5:
        Kt(l, i, n), n && a === null && s & 4 && vm(i), An(i, i.return);
        break;
      case 12:
        Kt(l, i, n);
        break;
      case 13:
        Kt(l, i, n), n && s & 4 && wm(l, i);
        break;
      case 22:
        i.memoizedState === null && Kt(l, i, n), An(i, i.return);
        break;
      default:
        Kt(l, i, n);
    }
    t = t.sibling;
  }
}
function Uo(e, t) {
  var n = null;
  e !== null &&
    e.memoizedState !== null &&
    e.memoizedState.cachePool !== null &&
    (n = e.memoizedState.cachePool.pool),
    (e = null),
    t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
    e !== n && (e != null && e.refCount++, n != null && Fl(n));
}
function Lo(e, t) {
  (e = null),
    t.alternate !== null && (e = t.alternate.memoizedState.cache),
    (t = t.memoizedState.cache),
    t !== e && (t.refCount++, e != null && Fl(e));
}
function Qt(e, t, n, a) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) Om(e, t, n, a), (t = t.sibling);
}
function Om(e, t, n, a) {
  var l = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      Qt(e, t, n, a), l & 2048 && Il(9, t);
      break;
    case 3:
      Qt(e, t, n, a),
        l & 2048 &&
          ((e = null),
          t.alternate !== null && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== e && (t.refCount++, e != null && Fl(e)));
      break;
    case 12:
      if (l & 2048) {
        Qt(e, t, n, a), (e = t.stateNode);
        try {
          var i = t.memoizedProps,
            s = i.id,
            r = i.onPostCommit;
          typeof r == 'function' &&
            r(
              s,
              t.alternate === null ? 'mount' : 'update',
              e.passiveEffectDuration,
              -0
            );
        } catch (u) {
          K(t, t.return, u);
        }
      } else Qt(e, t, n, a);
      break;
    case 23:
      break;
    case 22:
      (i = t.stateNode),
        t.memoizedState !== null
          ? i._visibility & 4
            ? Qt(e, t, n, a)
            : Sl(e, t)
          : i._visibility & 4
            ? Qt(e, t, n, a)
            : ((i._visibility |= 4),
              aa(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
        l & 2048 && Uo(t.alternate, t);
      break;
    case 24:
      Qt(e, t, n, a), l & 2048 && Lo(t.alternate, t);
      break;
    default:
      Qt(e, t, n, a);
  }
}
function aa(e, t, n, a, l) {
  for (l = l && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
    var i = e,
      s = t,
      r = n,
      u = a,
      o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        aa(i, s, r, u, l), Il(8, s);
        break;
      case 23:
        break;
      case 22:
        var c = s.stateNode;
        s.memoizedState !== null
          ? c._visibility & 4
            ? aa(i, s, r, u, l)
            : Sl(i, s)
          : ((c._visibility |= 4), aa(i, s, r, u, l)),
          l && o & 2048 && Uo(s.alternate, s);
        break;
      case 24:
        aa(i, s, r, u, l), l && o & 2048 && Lo(s.alternate, s);
        break;
      default:
        aa(i, s, r, u, l);
    }
    t = t.sibling;
  }
}
function Sl(e, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) {
      var n = e,
        a = t,
        l = a.flags;
      switch (a.tag) {
        case 22:
          Sl(n, a), l & 2048 && Uo(a.alternate, a);
          break;
        case 24:
          Sl(n, a), l & 2048 && Lo(a.alternate, a);
          break;
        default:
          Sl(n, a);
      }
      t = t.sibling;
    }
}
var ul = 8192;
function Wn(e) {
  if (e.subtreeFlags & ul)
    for (e = e.child; e !== null; ) Tm(e), (e = e.sibling);
}
function Tm(e) {
  switch (e.tag) {
    case 26:
      Wn(e),
        e.flags & ul &&
          e.memoizedState !== null &&
          Qy(lt, e.memoizedState, e.memoizedProps);
      break;
    case 5:
      Wn(e);
      break;
    case 3:
    case 4:
      var t = lt;
      (lt = ps(e.stateNode.containerInfo)), Wn(e), (lt = t);
      break;
    case 22:
      e.memoizedState === null &&
        ((t = e.alternate),
        t !== null && t.memoizedState !== null
          ? ((t = ul), (ul = 16777216), Wn(e), (ul = t))
          : Wn(e));
      break;
    default:
      Wn(e);
  }
}
function Rm(e) {
  var t = e.alternate;
  if (t !== null && ((e = t.child), e !== null)) {
    t.child = null;
    do (t = e.sibling), (e.sibling = null), (e = t);
    while (e !== null);
  }
}
function Fa(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (ge = a), Cm(a, e);
      }
    Rm(e);
  }
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) Am(e), (e = e.sibling);
}
function Am(e) {
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      Fa(e), e.flags & 2048 && hn(9, e, e.return);
      break;
    case 3:
      Fa(e);
      break;
    case 12:
      Fa(e);
      break;
    case 22:
      var t = e.stateNode;
      e.memoizedState !== null &&
      t._visibility & 4 &&
      (e.return === null || e.return.tag !== 13)
        ? ((t._visibility &= -5), _i(e))
        : Fa(e);
      break;
    default:
      Fa(e);
  }
}
function _i(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (ge = a), Cm(a, e);
      }
    Rm(e);
  }
  for (e = e.child; e !== null; ) {
    switch (((t = e), t.tag)) {
      case 0:
      case 11:
      case 15:
        hn(8, t, t.return), _i(t);
        break;
      case 22:
        (n = t.stateNode), n._visibility & 4 && ((n._visibility &= -5), _i(t));
        break;
      default:
        _i(t);
    }
    e = e.sibling;
  }
}
function Cm(e, t) {
  for (; ge !== null; ) {
    var n = ge;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(8, n, t);
        break;
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var a = n.memoizedState.cachePool.pool;
          a != null && a.refCount++;
        }
        break;
      case 24:
        Fl(n.memoizedState.cache);
    }
    if (((a = n.child), a !== null)) (a.return = n), (ge = a);
    else
      e: for (n = e; ge !== null; ) {
        a = ge;
        var l = a.sibling,
          i = a.return;
        if ((Sm(a), a === n)) {
          ge = null;
          break e;
        }
        if (l !== null) {
          (l.return = i), (ge = l);
          break e;
        }
        ge = i;
      }
  }
}
function iy(e, t, n, a) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.refCleanup = this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = a),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, a) {
  return new iy(e, t, n, a);
}
function Mo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 31457280),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    (n.refCleanup = e.refCleanup),
    n
  );
}
function Dm(e, t) {
  e.flags &= 31457282;
  var n = e.alternate;
  return (
    n === null
      ? ((e.childLanes = 0),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = n.childLanes),
        (e.lanes = n.lanes),
        (e.child = n.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = n.memoizedProps),
        (e.memoizedState = n.memoizedState),
        (e.updateQueue = n.updateQueue),
        (e.type = n.type),
        (t = n.dependencies),
        (e.dependencies =
          t === null
            ? null
            : { lanes: t.lanes, firstContext: t.firstContext })),
    e
  );
}
function Hi(e, t, n, a, l, i) {
  var s = 0;
  if (((a = e), typeof e == 'function')) Mo(e) && (s = 1);
  else if (typeof e == 'string')
    s = Gy(e, n, mt.current)
      ? 26
      : e === 'html' || e === 'head' || e === 'body'
        ? 27
        : 5;
  else
    e: switch (e) {
      case ia:
        return Mn(n.children, l, i, t);
      case zd:
        (s = 8), (l |= 24);
        break;
      case Xr:
        return (
          (e = Ie(12, n, t, l | 2)), (e.elementType = Xr), (e.lanes = i), e
        );
      case Qr:
        return (e = Ie(13, n, t, l)), (e.elementType = Qr), (e.lanes = i), e;
      case Kr:
        return (e = Ie(19, n, t, l)), (e.elementType = Kr), (e.lanes = i), e;
      case Ld:
        return zm(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Cp:
            case Dt:
              s = 10;
              break e;
            case Ud:
              s = 9;
              break e;
            case to:
              s = 11;
              break e;
            case no:
              s = 14;
              break e;
            case Zt:
              (s = 16), (a = null);
              break e;
          }
        (s = 29),
          (n = Error(j(130, e === null ? 'null' : typeof e, ''))),
          (a = null);
    }
  return (
    (t = Ie(s, n, t, l)), (t.elementType = e), (t.type = a), (t.lanes = i), t
  );
}
function Mn(e, t, n, a) {
  return (e = Ie(7, e, a, t)), (e.lanes = n), e;
}
function zm(e, t, n, a) {
  (e = Ie(22, e, a, t)), (e.elementType = Ld), (e.lanes = n);
  var l = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null,
    _current: null,
    detach: function () {
      var i = l._current;
      if (i === null) throw Error(j(456));
      if (!(l._pendingVisibility & 2)) {
        var s = fn(i, 2);
        s !== null && ((l._pendingVisibility |= 2), Re(s, i, 2));
      }
    },
    attach: function () {
      var i = l._current;
      if (i === null) throw Error(j(456));
      if (l._pendingVisibility & 2) {
        var s = fn(i, 2);
        s !== null && ((l._pendingVisibility &= -3), Re(s, i, 2));
      }
    },
  };
  return (e.stateNode = l), e;
}
function jr(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function Or(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ot(e) {
  e.flags |= 4;
}
function sf(e, t) {
  if (t.type !== 'stylesheet' || t.state.loading & 4) e.flags &= -16777217;
  else if (((e.flags |= 16777216), !Im(t))) {
    if (
      ((t = nt.current),
      t !== null &&
        ((V & 4194176) === V
          ? pt !== null
          : ((V & 62914560) !== V && !(V & 536870912)) || t !== pt))
    )
      throw ((ml = su), vh);
    e.flags |= 8192;
  }
}
function xi(e, t) {
  t !== null && (e.flags |= 4),
    e.flags & 16384 &&
      ((t = e.tag !== 22 ? Yd() : 536870912), (e.lanes |= t), (Da |= t));
}
function Wa(e, t) {
  if (!$)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var a = null; n !== null; )
          n.alternate !== null && (a = n), (n = n.sibling);
        a === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (a.sibling = null);
    }
}
function te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    a = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (a |= l.subtreeFlags & 31457280),
        (a |= l.flags & 31457280),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (a |= l.subtreeFlags),
        (a |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= a), (e.childLanes = n), t;
}
function sy(e, t, n) {
  var a = t.pendingProps;
  switch ((go(t), t.tag)) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(t), null;
    case 1:
      return te(t), null;
    case 3:
      return (
        (n = t.stateNode),
        (a = null),
        e !== null && (a = e.memoizedState.cache),
        t.memoizedState.cache !== a && (t.flags |= 2048),
        _t(de),
        ja(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Za(t)
            ? Ot(t)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), it !== null && (Tu(it), (it = null)))),
        te(t),
        null
      );
    case 26:
      return (
        (n = t.memoizedState),
        e === null
          ? (Ot(t),
            n !== null ? (te(t), sf(t, n)) : (te(t), (t.flags &= -16777217)))
          : n
            ? n !== e.memoizedState
              ? (Ot(t), te(t), sf(t, n))
              : (te(t), (t.flags &= -16777217))
            : (e.memoizedProps !== a && Ot(t), te(t), (t.flags &= -16777217)),
        null
      );
    case 27:
      Ji(t), (n = nn.current);
      var l = t.type;
      if (e !== null && t.stateNode != null) e.memoizedProps !== a && Ot(t);
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(j(166));
          return te(t), null;
        }
        (e = mt.current),
          Za(t) ? Mc(t) : ((e = Fm(l, a, n)), (t.stateNode = e), Ot(t));
      }
      return te(t), null;
    case 5:
      if ((Ji(t), (n = t.type), e !== null && t.stateNode != null))
        e.memoizedProps !== a && Ot(t);
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(j(166));
          return te(t), null;
        }
        if (((e = mt.current), Za(t))) Mc(t);
        else {
          switch (((l = gs(nn.current)), e)) {
            case 1:
              e = l.createElementNS('http://www.w3.org/2000/svg', n);
              break;
            case 2:
              e = l.createElementNS('http://www.w3.org/1998/Math/MathML', n);
              break;
            default:
              switch (n) {
                case 'svg':
                  e = l.createElementNS('http://www.w3.org/2000/svg', n);
                  break;
                case 'math':
                  e = l.createElementNS(
                    'http://www.w3.org/1998/Math/MathML',
                    n
                  );
                  break;
                case 'script':
                  (e = l.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild));
                  break;
                case 'select':
                  (e =
                    typeof a.is == 'string'
                      ? l.createElement('select', { is: a.is })
                      : l.createElement('select')),
                    a.multiple
                      ? (e.multiple = !0)
                      : a.size && (e.size = a.size);
                  break;
                default:
                  e =
                    typeof a.is == 'string'
                      ? l.createElement(n, { is: a.is })
                      : l.createElement(n);
              }
          }
          (e[we] = t), (e[Le] = a);
          e: for (l = t.child; l !== null; ) {
            if (l.tag === 5 || l.tag === 6) e.appendChild(l.stateNode);
            else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break e;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break e;
              l = l.return;
            }
            (l.sibling.return = l.return), (l = l.sibling);
          }
          t.stateNode = e;
          e: switch ((Se(e, n, a), n)) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              e = !!a.autoFocus;
              break e;
            case 'img':
              e = !0;
              break e;
            default:
              e = !1;
          }
          e && Ot(t);
        }
      }
      return te(t), (t.flags &= -16777217), null;
    case 6:
      if (e && t.stateNode != null) e.memoizedProps !== a && Ot(t);
      else {
        if (typeof a != 'string' && t.stateNode === null) throw Error(j(166));
        if (((e = nn.current), Za(t))) {
          if (
            ((e = t.stateNode),
            (n = t.memoizedProps),
            (a = null),
            (l = Oe),
            l !== null)
          )
            switch (l.tag) {
              case 27:
              case 5:
                a = l.memoizedProps;
            }
          (e[we] = t),
            (e = !!(
              e.nodeValue === n ||
              (a !== null && a.suppressHydrationWarning === !0) ||
              Km(e.nodeValue, n)
            )),
            e || kn(t);
        } else (e = gs(e).createTextNode(a)), (e[we] = t), (t.stateNode = e);
      }
      return te(t), null;
    case 13:
      if (
        ((a = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (((l = Za(t)), a !== null && a.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(j(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(j(317));
            l[we] = t;
          } else
            Jl(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          te(t), (l = !1);
        } else it !== null && (Tu(it), (it = null)), (l = !0);
        if (!l) return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
      }
      if ((Lt(t), t.flags & 128)) return (t.lanes = n), t;
      if (((n = a !== null), (e = e !== null && e.memoizedState !== null), n)) {
        (a = t.child),
          (l = null),
          a.alternate !== null &&
            a.alternate.memoizedState !== null &&
            a.alternate.memoizedState.cachePool !== null &&
            (l = a.alternate.memoizedState.cachePool.pool);
        var i = null;
        a.memoizedState !== null &&
          a.memoizedState.cachePool !== null &&
          (i = a.memoizedState.cachePool.pool),
          i !== l && (a.flags |= 2048);
      }
      return (
        n !== e && n && (t.child.flags |= 8192),
        xi(t, t.updateQueue),
        te(t),
        null
      );
    case 4:
      return ja(), e === null && Yo(t.stateNode.containerInfo), te(t), null;
    case 10:
      return _t(t.type), te(t), null;
    case 19:
      if ((ve(he), (l = t.memoizedState), l === null)) return te(t), null;
      if (((a = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (a) Wa(l, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = as(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Wa(l, !1),
                    e = i.updateQueue,
                    t.updateQueue = e,
                    xi(t, e),
                    t.subtreeFlags = 0,
                    e = n,
                    n = t.child;
                  n !== null;

                )
                  Dm(n, e), (n = n.sibling);
                return ee(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            gt() > cs &&
            ((t.flags |= 128), (a = !0), Wa(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!a)
          if (((e = as(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (e = e.updateQueue),
              (t.updateQueue = e),
              xi(t, e),
              Wa(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !i.alternate && !$)
            )
              return te(t), null;
          } else
            2 * gt() - l.renderingStartTime > cs &&
              n !== 536870912 &&
              ((t.flags |= 128), (a = !0), Wa(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((e = l.last),
            e !== null ? (e.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = gt()),
          (t.sibling = null),
          (e = he.current),
          ee(he, a ? (e & 1) | 2 : e & 1),
          t)
        : (te(t), null);
    case 22:
    case 23:
      return (
        Lt(t),
        po(),
        (a = t.memoizedState !== null),
        e !== null
          ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
          : a && (t.flags |= 8192),
        a
          ? n & 536870912 &&
            !(t.flags & 128) &&
            (te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : te(t),
        (n = t.updateQueue),
        n !== null && xi(t, n.retryQueue),
        (n = null),
        e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (n = e.memoizedState.cachePool.pool),
        (a = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (a = t.memoizedState.cachePool.pool),
        a !== n && (t.flags |= 2048),
        e !== null && ve(Ln),
        null
      );
    case 24:
      return (
        (n = null),
        e !== null && (n = e.memoizedState.cache),
        t.memoizedState.cache !== n && (t.flags |= 2048),
        _t(de),
        te(t),
        null
      );
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function ry(e, t) {
  switch ((go(t), t.tag)) {
    case 1:
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _t(de),
        ja(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 26:
    case 27:
    case 5:
      return Ji(t), null;
    case 13:
      if ((Lt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        Jl();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ve(he), null;
    case 4:
      return ja(), null;
    case 10:
      return _t(t.type), null;
    case 22:
    case 23:
      return (
        Lt(t),
        po(),
        e !== null && ve(Ln),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 24:
      return _t(de), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function Um(e, t) {
  switch ((go(t), t.tag)) {
    case 3:
      _t(de), ja();
      break;
    case 26:
    case 27:
    case 5:
      Ji(t);
      break;
    case 4:
      ja();
      break;
    case 13:
      Lt(t);
      break;
    case 19:
      ve(he);
      break;
    case 10:
      _t(t.type);
      break;
    case 22:
    case 23:
      Lt(t), po(), e !== null && ve(Ln);
      break;
    case 24:
      _t(de);
  }
}
var uy = {
    getCacheForType: function (e) {
      var t = Ne(de),
        n = t.data.get(e);
      return n === void 0 && ((n = e()), t.data.set(e, n)), n;
    },
  },
  oy = typeof WeakMap == 'function' ? WeakMap : Map,
  ae = 0,
  J = null,
  q = null,
  V = 0,
  Z = 0,
  Be = null,
  Rt = !1,
  Ba = !1,
  _o = !1,
  Yt = 0,
  re = 0,
  mn = 0,
  _n = 0,
  Ho = 0,
  et = 0,
  Da = 0,
  El = null,
  dt = null,
  wu = !1,
  Bo = 0,
  cs = 1 / 0,
  fs = null,
  rn = null,
  Si = !1,
  Tn = null,
  wl = 0,
  Nu = 0,
  ju = null,
  Nl = 0,
  Ou = null;
function Ve() {
  if (ae & 2 && V !== 0) return V & -V;
  if (H.T !== null) {
    var e = Aa;
    return e !== 0 ? e : qo();
  }
  return Xd();
}
function Lm() {
  et === 0 && (et = !(V & 536870912) || $ ? qd() : 536870912);
  var e = nt.current;
  return e !== null && (e.flags |= 32), et;
}
function Re(e, t, n) {
  ((e === J && Z === 2) || e.cancelPendingCommit !== null) &&
    (za(e, 0), At(e, V, et, !1)),
    Kl(e, n),
    (!(ae & 2) || e !== J) &&
      (e === J && (!(ae & 2) && (_n |= n), re === 4 && At(e, V, et, !1)),
      xt(e));
}
function Mm(e, t, n) {
  if (ae & 6) throw Error(j(327));
  var a = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || Ql(e, t),
    l = a ? dy(e, t) : Tr(e, t, !0),
    i = a;
  do {
    if (l === 0) {
      Ba && !a && At(e, t, 0, !1);
      break;
    } else if (l === 6) At(e, t, 0, !Rt);
    else {
      if (((n = e.current.alternate), i && !cy(n))) {
        (l = Tr(e, t, !1)), (i = !1);
        continue;
      }
      if (l === 2) {
        if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
        else
          (s = e.pendingLanes & -536870913),
            (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
        if (s !== 0) {
          t = s;
          e: {
            var r = e;
            l = El;
            var u = r.current.memoizedState.isDehydrated;
            if ((u && (za(r, s).flags |= 256), (s = Tr(r, s, !1)), s !== 2)) {
              if (_o && !u) {
                (r.errorRecoveryDisabledLanes |= i), (_n |= i), (l = 4);
                break e;
              }
              (i = dt), (dt = l), i !== null && Tu(i);
            }
            l = s;
          }
          if (((i = !1), l !== 2)) continue;
        }
      }
      if (l === 1) {
        za(e, 0), At(e, t, 0, !0);
        break;
      }
      e: {
        switch (((a = e), l)) {
          case 0:
          case 1:
            throw Error(j(345));
          case 4:
            if ((t & 4194176) === t) {
              At(a, t, et, !Rt);
              break e;
            }
            break;
          case 2:
            dt = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(j(329));
        }
        if (
          ((a.finishedWork = n),
          (a.finishedLanes = t),
          (t & 62914560) === t && ((i = Bo + 300 - gt()), 10 < i))
        ) {
          if ((At(a, t, et, !Rt), Ds(a, 0) !== 0)) break e;
          a.timeoutHandle = Jm(
            rf.bind(null, a, n, dt, fs, wu, t, et, _n, Da, Rt, 2, -0, 0),
            i
          );
          break e;
        }
        rf(a, n, dt, fs, wu, t, et, _n, Da, Rt, 0, -0, 0);
      }
    }
    break;
  } while (!0);
  xt(e);
}
function Tu(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function rf(e, t, n, a, l, i, s, r, u, o, c, h, f) {
  var m = t.subtreeFlags;
  if (
    (m & 8192 || (m & 16785408) === 16785408) &&
    ((_l = { stylesheets: null, count: 0, unsuspend: Xy }),
    Tm(t),
    (t = Ky()),
    t !== null)
  ) {
    (e.cancelPendingCommit = t(of.bind(null, e, n, a, l, s, r, u, 1, h, f))),
      At(e, i, s, !o);
    return;
  }
  of(e, n, a, l, s, r, u, c, h, f);
}
function cy(e) {
  for (var t = e; ; ) {
    var n = t.tag;
    if (
      (n === 0 || n === 11 || n === 15) &&
      t.flags & 16384 &&
      ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
    )
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ge(i(), l)) return !1;
        } catch {
          return !1;
        }
      }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function At(e, t, n, a) {
  (t &= ~Ho),
    (t &= ~_n),
    (e.suspendedLanes |= t),
    (e.pingedLanes &= ~t),
    a && (e.warmLanes |= t),
    (a = e.expirationTimes);
  for (var l = t; 0 < l; ) {
    var i = 31 - Ye(l),
      s = 1 << i;
    (a[i] = -1), (l &= ~s);
  }
  n !== 0 && Vd(e, n, t);
}
function Ys() {
  return ae & 6 ? !0 : (ei(0), !1);
}
function ko() {
  if (q !== null) {
    if (Z === 0) var e = q.return;
    else (e = q), (Mt = Fn = null), wo(e), (xa = null), (zl = 0), (e = q);
    for (; e !== null; ) Um(e.alternate, e), (e = e.return);
    q = null;
  }
}
function za(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  n !== -1 && ((e.timeoutHandle = -1), Ay(n)),
    (n = e.cancelPendingCommit),
    n !== null && ((e.cancelPendingCommit = null), n()),
    ko(),
    (J = e),
    (q = n = sn(e.current, null)),
    (V = t),
    (Z = 0),
    (Be = null),
    (Rt = !1),
    (Ba = Ql(e, t)),
    (_o = !1),
    (Da = et = Ho = _n = mn = re = 0),
    (dt = El = null),
    (wu = !1),
    t & 8 && (t |= t & 32);
  var a = e.entangledLanes;
  if (a !== 0)
    for (e = e.entanglements, a &= t; 0 < a; ) {
      var l = 31 - Ye(a),
        i = 1 << l;
      (t |= e[l]), (a &= ~i);
    }
  return (Yt = t), Ms(), n;
}
function _m(e, t) {
  (k = null),
    (H.H = yt),
    t === hl
      ? ((t = Bc()), (Z = 3))
      : t === vh
        ? ((t = Bc()), (Z = 4))
        : (Z =
            t === rm
              ? 8
              : t !== null &&
                  typeof t == 'object' &&
                  typeof t.then == 'function'
                ? 6
                : 1),
    (Be = t),
    q === null && ((re = 1), rs(e, Pe(t, e.current)));
}
function Hm() {
  var e = H.H;
  return (H.H = yt), e === null ? yt : e;
}
function Bm() {
  var e = H.A;
  return (H.A = uy), e;
}
function Ru() {
  (re = 4),
    Rt || ((V & 4194176) !== V && nt.current !== null) || (Ba = !0),
    (!(mn & 134217727) && !(_n & 134217727)) || J === null || At(J, V, et, !1);
}
function Tr(e, t, n) {
  var a = ae;
  ae |= 2;
  var l = Hm(),
    i = Bm();
  (J !== e || V !== t) && ((fs = null), za(e, t)), (t = !1);
  var s = re;
  e: do
    try {
      if (Z !== 0 && q !== null) {
        var r = q,
          u = Be;
        switch (Z) {
          case 8:
            ko(), (s = 6);
            break e;
          case 3:
          case 2:
          case 6:
            nt.current === null && (t = !0);
            var o = Z;
            if (((Z = 0), (Be = null), ga(e, r, u, o), n && Ba)) {
              s = 0;
              break e;
            }
            break;
          default:
            (o = Z), (Z = 0), (Be = null), ga(e, r, u, o);
        }
      }
      fy(), (s = re);
      break;
    } catch (c) {
      _m(e, c);
    }
  while (!0);
  return (
    t && e.shellSuspendCounter++,
    (Mt = Fn = null),
    (ae = a),
    (H.H = l),
    (H.A = i),
    q === null && ((J = null), (V = 0), Ms()),
    s
  );
}
function fy() {
  for (; q !== null; ) km(q);
}
function dy(e, t) {
  var n = ae;
  ae |= 2;
  var a = Hm(),
    l = Bm();
  J !== e || V !== t
    ? ((fs = null), (cs = gt() + 500), za(e, t))
    : (Ba = Ql(e, t));
  e: do
    try {
      if (Z !== 0 && q !== null) {
        t = q;
        var i = Be;
        t: switch (Z) {
          case 1:
            (Z = 0), (Be = null), ga(e, t, i, 1);
            break;
          case 2:
            if (Hc(i)) {
              (Z = 0), (Be = null), uf(t);
              break;
            }
            (t = function () {
              Z === 2 && J === e && (Z = 7), xt(e);
            }),
              i.then(t, t);
            break e;
          case 3:
            Z = 7;
            break e;
          case 4:
            Z = 5;
            break e;
          case 7:
            Hc(i)
              ? ((Z = 0), (Be = null), uf(t))
              : ((Z = 0), (Be = null), ga(e, t, i, 7));
            break;
          case 5:
            var s = null;
            switch (q.tag) {
              case 26:
                s = q.memoizedState;
              case 5:
              case 27:
                var r = q;
                if (!s || Im(s)) {
                  (Z = 0), (Be = null);
                  var u = r.sibling;
                  if (u !== null) q = u;
                  else {
                    var o = r.return;
                    o !== null ? ((q = o), Vs(o)) : (q = null);
                  }
                  break t;
                }
            }
            (Z = 0), (Be = null), ga(e, t, i, 5);
            break;
          case 6:
            (Z = 0), (Be = null), ga(e, t, i, 6);
            break;
          case 8:
            ko(), (re = 6);
            break e;
          default:
            throw Error(j(462));
        }
      }
      hy();
      break;
    } catch (c) {
      _m(e, c);
    }
  while (!0);
  return (
    (Mt = Fn = null),
    (H.H = a),
    (H.A = l),
    (ae = n),
    q !== null ? 0 : ((J = null), (V = 0), Ms(), re)
  );
}
function hy() {
  for (; q !== null && !Mp(); ) km(q);
}
function km(e) {
  var t = dm(e.alternate, e, Yt);
  (e.memoizedProps = e.pendingProps), t === null ? Vs(e) : (q = t);
}
function uf(e) {
  var t = e,
    n = t.alternate;
  switch (t.tag) {
    case 15:
    case 0:
      t = Pc(n, t, t.pendingProps, t.type, void 0, V);
      break;
    case 11:
      t = Pc(n, t, t.pendingProps, t.type.render, t.ref, V);
      break;
    case 5:
      wo(t);
    default:
      Um(n, t), (t = q = Dm(t, Yt)), (t = dm(n, t, Yt));
  }
  (e.memoizedProps = e.pendingProps), t === null ? Vs(e) : (q = t);
}
function ga(e, t, n, a) {
  (Mt = Fn = null), wo(t), (xa = null), (zl = 0);
  var l = t.return;
  try {
    if (ty(e, l, t, n, V)) {
      (re = 1), rs(e, Pe(n, e.current)), (q = null);
      return;
    }
  } catch (i) {
    if (l !== null) throw ((q = l), i);
    (re = 1), rs(e, Pe(n, e.current)), (q = null);
    return;
  }
  t.flags & 32768
    ? ($ || a === 1
        ? (e = !0)
        : Ba || V & 536870912
          ? (e = !1)
          : ((Rt = e = !0),
            (a === 2 || a === 3 || a === 6) &&
              ((a = nt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
      qm(t, e))
    : Vs(t);
}
function Vs(e) {
  var t = e;
  do {
    if (t.flags & 32768) {
      qm(t, Rt);
      return;
    }
    e = t.return;
    var n = sy(t.alternate, t, Yt);
    if (n !== null) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function qm(e, t) {
  do {
    var n = ry(e.alternate, e);
    if (n !== null) {
      (n.flags &= 32767), (q = n);
      return;
    }
    if (
      ((n = e.return),
      n !== null &&
        ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
      !t && ((e = e.sibling), e !== null))
    ) {
      q = e;
      return;
    }
    q = e = n;
  } while (e !== null);
  (re = 6), (q = null);
}
function of(e, t, n, a, l, i, s, r, u, o) {
  var c = H.T,
    h = W.p;
  try {
    (W.p = 2), (H.T = null), my(e, t, n, a, h, l, i, s, r, u, o);
  } finally {
    (H.T = c), (W.p = h);
  }
}
function my(e, t, n, a, l, i, s, r) {
  do Na();
  while (Tn !== null);
  if (ae & 6) throw Error(j(327));
  var u = e.finishedWork;
  if (((a = e.finishedLanes), u === null)) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), u === e.current))
    throw Error(j(177));
  (e.callbackNode = null),
    (e.callbackPriority = 0),
    (e.cancelPendingCommit = null);
  var o = u.lanes | u.childLanes;
  if (
    ((o |= fo),
    Qp(e, a, o, i, s, r),
    e === J && ((q = J = null), (V = 0)),
    (!(u.subtreeFlags & 10256) && !(u.flags & 10256)) ||
      Si ||
      ((Si = !0),
      (Nu = o),
      (ju = n),
      vy(Fi, function () {
        return Na(), null;
      })),
    (n = (u.flags & 15990) !== 0),
    u.subtreeFlags & 15990 || n
      ? ((n = H.T),
        (H.T = null),
        (i = W.p),
        (W.p = 2),
        (s = ae),
        (ae |= 4),
        ay(e, u),
        Nm(u, e),
        B0(zu, e.containerInfo),
        (bs = !!Du),
        (zu = Du = null),
        (e.current = u),
        xm(e, u.alternate, u),
        _p(),
        (ae = s),
        (W.p = i),
        (H.T = n))
      : (e.current = u),
    Si ? ((Si = !1), (Tn = e), (wl = a)) : Ym(e, o),
    (o = e.pendingLanes),
    o === 0 && (rn = null),
    Yp(u.stateNode),
    xt(e),
    t !== null)
  )
    for (l = e.onRecoverableError, u = 0; u < t.length; u++)
      (o = t[u]), l(o.value, { componentStack: o.stack });
  return (
    wl & 3 && Na(),
    (o = e.pendingLanes),
    a & 4194218 && o & 42 ? (e === Ou ? Nl++ : ((Nl = 0), (Ou = e))) : (Nl = 0),
    ei(0),
    null
  );
}
function Ym(e, t) {
  (e.pooledCacheLanes &= t) === 0 &&
    ((t = e.pooledCache), t != null && ((e.pooledCache = null), Fl(t)));
}
function Na() {
  if (Tn !== null) {
    var e = Tn,
      t = Nu;
    Nu = 0;
    var n = Gd(wl),
      a = H.T,
      l = W.p;
    try {
      if (((W.p = 32 > n ? 32 : n), (H.T = null), Tn === null)) var i = !1;
      else {
        (n = ju), (ju = null);
        var s = Tn,
          r = wl;
        if (((Tn = null), (wl = 0), ae & 6)) throw Error(j(331));
        var u = ae;
        if (
          ((ae |= 4),
          Am(s.current),
          Om(s, s.current, r, n),
          (ae = u),
          ei(0, !1),
          qe && typeof qe.onPostCommitFiberRoot == 'function')
        )
          try {
            qe.onPostCommitFiberRoot(Xl, s);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (W.p = l), (H.T = a), Ym(e, t);
    }
  }
  return !1;
}
function cf(e, t, n) {
  (t = Pe(n, t)),
    (t = hu(e.stateNode, t, 2)),
    (e = ln(e, t, 2)),
    e !== null && (Kl(e, 2), xt(e));
}
function K(e, t, n) {
  if (e.tag === 3) cf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof a.componentDidCatch == 'function' &&
            (rn === null || !rn.has(a)))
        ) {
          (e = Pe(n, e)),
            (n = im(2)),
            (a = ln(t, n, 2)),
            a !== null && (sm(n, a, t, e), Kl(a, 2), xt(a));
          break;
        }
      }
      t = t.return;
    }
}
function Rr(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new oy();
    var l = new Set();
    a.set(t, l);
  } else (l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l));
  l.has(n) || ((_o = !0), l.add(n), (e = gy.bind(null, e, t, n)), t.then(e, e));
}
function gy(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t),
    (e.pingedLanes |= e.suspendedLanes & n),
    (e.warmLanes &= ~n),
    J === e &&
      (V & n) === n &&
      (re === 4 || (re === 3 && (V & 62914560) === V && 300 > gt() - Bo)
        ? !(ae & 2) && za(e, 0)
        : (Ho |= n),
      Da === V && (Da = 0)),
    xt(e);
}
function Vm(e, t) {
  t === 0 && (t = Yd()), (e = fn(e, t)), e !== null && (Kl(e, t), xt(e));
}
function py(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vm(e, n);
}
function yy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var a = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      a = e.stateNode;
      break;
    case 22:
      a = e.stateNode._retryCache;
      break;
    default:
      throw Error(j(314));
  }
  a !== null && a.delete(t), Vm(e, n);
}
function vy(e, t) {
  return ao(e, t);
}
var ds = null,
  la = null,
  Au = !1,
  hs = !1,
  Ar = !1,
  Hn = 0;
function xt(e) {
  e !== la &&
    e.next === null &&
    (la === null ? (ds = la = e) : (la = la.next = e)),
    (hs = !0),
    Au || ((Au = !0), xy(by));
}
function ei(e, t) {
  if (!Ar && hs) {
    Ar = !0;
    do
      for (var n = !1, a = ds; a !== null; ) {
        if (e !== 0) {
          var l = a.pendingLanes;
          if (l === 0) var i = 0;
          else {
            var s = a.suspendedLanes,
              r = a.pingedLanes;
            (i = (1 << (31 - Ye(42 | e) + 1)) - 1),
              (i &= l & ~(s & ~r)),
              (i = i & 201326677 ? (i & 201326677) | 1 : i ? i | 2 : 0);
          }
          i !== 0 && ((n = !0), ff(a, i));
        } else
          (i = V),
            (i = Ds(a, a === J ? i : 0)),
            !(i & 3) || Ql(a, i) || ((n = !0), ff(a, i));
        a = a.next;
      }
    while (n);
    Ar = !1;
  }
}
function by() {
  hs = Au = !1;
  var e = 0;
  Hn !== 0 && (Ry() && (e = Hn), (Hn = 0));
  for (var t = gt(), n = null, a = ds; a !== null; ) {
    var l = a.next,
      i = $m(a, t);
    i === 0
      ? ((a.next = null),
        n === null ? (ds = l) : (n.next = l),
        l === null && (la = n))
      : ((n = a), (e !== 0 || i & 3) && (hs = !0)),
      (a = l);
  }
  ei(e);
}
function $m(e, t) {
  for (
    var n = e.suspendedLanes,
      a = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes & -62914561;
    0 < i;

  ) {
    var s = 31 - Ye(i),
      r = 1 << s,
      u = l[s];
    u === -1
      ? (!(r & n) || r & a) && (l[s] = Xp(r, t))
      : u <= t && (e.expiredLanes |= r),
      (i &= ~r);
  }
  if (
    ((t = J),
    (n = V),
    (n = Ds(e, e === t ? n : 0)),
    (a = e.callbackNode),
    n === 0 || (e === t && Z === 2) || e.cancelPendingCommit !== null)
  )
    return (
      a !== null && a !== null && ir(a),
      (e.callbackNode = null),
      (e.callbackPriority = 0)
    );
  if (!(n & 3) || Ql(e, n)) {
    if (((t = n & -n), t === e.callbackPriority)) return t;
    switch ((a !== null && ir(a), Gd(n))) {
      case 2:
      case 8:
        n = Bd;
        break;
      case 32:
        n = Fi;
        break;
      case 268435456:
        n = kd;
        break;
      default:
        n = Fi;
    }
    return (
      (a = Gm.bind(null, e)),
      (n = ao(n, a)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    );
  }
  return (
    a !== null && a !== null && ir(a),
    (e.callbackPriority = 2),
    (e.callbackNode = null),
    2
  );
}
function Gm(e, t) {
  var n = e.callbackNode;
  if (Na() && e.callbackNode !== n) return null;
  var a = V;
  return (
    (a = Ds(e, e === J ? a : 0)),
    a === 0
      ? null
      : (Mm(e, a, t),
        $m(e, gt()),
        e.callbackNode != null && e.callbackNode === n
          ? Gm.bind(null, e)
          : null)
  );
}
function ff(e, t) {
  if (Na()) return null;
  Mm(e, t, !0);
}
function xy(e) {
  Cy(function () {
    ae & 6 ? ao(Hd, e) : e();
  });
}
function qo() {
  return Hn === 0 && (Hn = qd()), Hn;
}
function df(e) {
  return e == null || typeof e == 'symbol' || typeof e == 'boolean'
    ? null
    : typeof e == 'function'
      ? e
      : Ci('' + e);
}
function hf(e, t) {
  var n = t.ownerDocument.createElement('input');
  return (
    (n.name = t.name),
    (n.value = t.value),
    e.id && n.setAttribute('form', e.id),
    t.parentNode.insertBefore(n, t),
    (e = new FormData(e)),
    n.parentNode.removeChild(n),
    e
  );
}
function Sy(e, t, n, a, l) {
  if (t === 'submit' && n && n.stateNode === l) {
    var i = df((l[Le] || null).action),
      s = a.submitter;
    s &&
      ((t = (t = s[Le] || null)
        ? df(t.formAction)
        : s.getAttribute('formAction')),
      t !== null && ((i = t), (s = null)));
    var r = new zs('action', 'action', null, a, l);
    e.push({
      event: r,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (a.defaultPrevented) {
              if (Hn !== 0) {
                var u = s ? hf(l, s) : new FormData(l);
                fu(
                  n,
                  { pending: !0, data: u, method: l.method, action: i },
                  null,
                  u
                );
              }
            } else
              typeof i == 'function' &&
                (r.preventDefault(),
                (u = s ? hf(l, s) : new FormData(l)),
                fu(
                  n,
                  { pending: !0, data: u, method: l.method, action: i },
                  i,
                  u
                ));
          },
          currentTarget: l,
        },
      ],
    });
  }
}
for (var Cr = 0; Cr < Uc.length; Cr++) {
  var Dr = Uc[Cr],
    Ey = Dr.toLowerCase(),
    wy = Dr[0].toUpperCase() + Dr.slice(1);
  rt(Ey, 'on' + wy);
}
rt(fh, 'onAnimationEnd');
rt(dh, 'onAnimationIteration');
rt(hh, 'onAnimationStart');
rt('dblclick', 'onDoubleClick');
rt('focusin', 'onFocus');
rt('focusout', 'onBlur');
rt(q0, 'onTransitionRun');
rt(Y0, 'onTransitionStart');
rt(V0, 'onTransitionCancel');
rt(mh, 'onTransitionEnd');
Oa('onMouseEnter', ['mouseout', 'mouseover']);
Oa('onMouseLeave', ['mouseout', 'mouseover']);
Oa('onPointerEnter', ['pointerout', 'pointerover']);
Oa('onPointerLeave', ['pointerout', 'pointerover']);
Xn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Xn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Xn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Xn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Xn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Xn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ll =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Ny = new Set(
    'beforetoggle cancel close invalid load scroll scrollend toggle'
      .split(' ')
      .concat(Ll)
  );
function Xm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var a = e[n],
      l = a.event;
    a = a.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = a.length - 1; 0 <= s; s--) {
          var r = a[s],
            u = r.instance,
            o = r.currentTarget;
          if (((r = r.listener), u !== i && l.isPropagationStopped())) break e;
          (i = r), (l.currentTarget = o);
          try {
            i(l);
          } catch (c) {
            ss(c);
          }
          (l.currentTarget = null), (i = u);
        }
      else
        for (s = 0; s < a.length; s++) {
          if (
            ((r = a[s]),
            (u = r.instance),
            (o = r.currentTarget),
            (r = r.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          (i = r), (l.currentTarget = o);
          try {
            i(l);
          } catch (c) {
            ss(c);
          }
          (l.currentTarget = null), (i = u);
        }
    }
  }
}
function Y(e, t) {
  var n = t[Pr];
  n === void 0 && (n = t[Pr] = new Set());
  var a = e + '__bubble';
  n.has(a) || (Qm(t, e, 2, !1), n.add(a));
}
function zr(e, t, n) {
  var a = 0;
  t && (a |= 4), Qm(n, e, a, t);
}
var Ei = '_reactListening' + Math.random().toString(36).slice(2);
function Yo(e) {
  if (!e[Ei]) {
    (e[Ei] = !0),
      Qd.forEach(function (n) {
        n !== 'selectionchange' && (Ny.has(n) || zr(n, !1, e), zr(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ei] || ((t[Ei] = !0), zr('selectionchange', !1, t));
  }
}
function Qm(e, t, n, a) {
  switch (lg(t)) {
    case 2:
      var l = Fy;
      break;
    case 8:
      l = Wy;
      break;
    default:
      l = Xo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !nu ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    a
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Ur(e, t, n, a, l) {
  var i = a;
  if (!(t & 1) && !(t & 2) && a !== null)
    e: for (;;) {
      if (a === null) return;
      var s = a.tag;
      if (s === 3 || s === 4) {
        var r = a.stateNode.containerInfo;
        if (r === l || (r.nodeType === 8 && r.parentNode === l)) break;
        if (s === 4)
          for (s = a.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            s = s.return;
          }
        for (; r !== null; ) {
          if (((s = Rn(r)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6 || u === 26 || u === 27)) {
            a = i = s;
            continue e;
          }
          r = r.parentNode;
        }
      }
      a = a.return;
    }
  eh(function () {
    var o = i,
      c = so(n),
      h = [];
    e: {
      var f = gh.get(e);
      if (f !== void 0) {
        var m = zs,
          y = e;
        switch (e) {
          case 'keypress':
            if (zi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = y0;
            break;
          case 'focusin':
            (y = 'focus'), (m = cr);
            break;
          case 'focusout':
            (y = 'blur'), (m = cr);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = cr;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Sc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = i0;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = x0;
            break;
          case fh:
          case dh:
          case hh:
            m = u0;
            break;
          case mh:
            m = E0;
            break;
          case 'scroll':
          case 'scrollend':
            m = a0;
            break;
          case 'wheel':
            m = N0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = c0;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = wc;
            break;
          case 'toggle':
          case 'beforetoggle':
            m = O0;
        }
        var x = (t & 4) !== 0,
          b = !x && (e === 'scroll' || e === 'scrollend'),
          p = x ? (f !== null ? f + 'Capture' : null) : f;
        x = [];
        for (var g = o, v; g !== null; ) {
          var S = g;
          if (
            ((v = S.stateNode),
            (S = S.tag),
            (S !== 5 && S !== 26 && S !== 27) ||
              v === null ||
              p === null ||
              ((S = Rl(g, p)), S != null && x.push(Ml(g, S, v))),
            b)
          )
            break;
          g = g.return;
        }
        0 < x.length &&
          ((f = new m(f, y, null, n, c)), h.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== tu &&
            (y = n.relatedTarget || n.fromElement) &&
            (Rn(y) || y[_a]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = o),
              (y = y ? Rn(y) : null),
              y !== null &&
                ((b = Ma(y)),
                (x = y.tag),
                y !== b || (x !== 5 && x !== 27 && x !== 6)) &&
                (y = null))
            : ((m = null), (y = o)),
          m !== y)
        ) {
          if (
            ((x = Sc),
            (S = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = wc),
              (S = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (g = 'pointer')),
            (b = m == null ? f : rl(m)),
            (v = y == null ? f : rl(y)),
            (f = new x(S, g + 'leave', m, n, c)),
            (f.target = b),
            (f.relatedTarget = v),
            (S = null),
            Rn(c) === o &&
              ((x = new x(p, g + 'enter', y, n, c)),
              (x.target = v),
              (x.relatedTarget = b),
              (S = x)),
            (b = S),
            m && y)
          )
            t: {
              for (x = m, p = y, g = 0, v = x; v; v = Pn(v)) g++;
              for (v = 0, S = p; S; S = Pn(S)) v++;
              for (; 0 < g - v; ) (x = Pn(x)), g--;
              for (; 0 < v - g; ) (p = Pn(p)), v--;
              for (; g--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = Pn(x)), (p = Pn(p));
              }
              x = null;
            }
          else x = null;
          m !== null && mf(h, f, m, x, !1),
            y !== null && b !== null && mf(h, b, y, x, !0);
        }
      }
      e: {
        if (
          ((f = o ? rl(o) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var w = Tc;
        else if (Oc(f))
          if (sh) w = _0;
          else {
            w = L0;
            var O = U0;
          }
        else
          (m = f.nodeName),
            !m ||
            m.toLowerCase() !== 'input' ||
            (f.type !== 'checkbox' && f.type !== 'radio')
              ? o && io(o.elementType) && (w = Tc)
              : (w = M0);
        if (w && (w = w(e, o))) {
          ih(h, w, n, c);
          break e;
        }
        O && O(e, f, o),
          e === 'focusout' &&
            o &&
            f.type === 'number' &&
            o.memoizedProps.value != null &&
            eu(f, 'number', f.value);
      }
      switch (((O = o ? rl(o) : window), e)) {
        case 'focusin':
          (Oc(O) || O.contentEditable === 'true') &&
            ((oa = O), (au = o), (dl = null));
          break;
        case 'focusout':
          dl = au = oa = null;
          break;
        case 'mousedown':
          lu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (lu = !1), zc(h, n, c);
          break;
        case 'selectionchange':
          if (k0) break;
        case 'keydown':
        case 'keyup':
          zc(h, n, c);
      }
      var T;
      if (oo)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        ua
          ? ah(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (nh &&
          n.locale !== 'ko' &&
          (ua || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && ua && (T = th())
            : ((tn = c),
              (ro = 'value' in tn ? tn.value : tn.textContent),
              (ua = !0))),
        (O = ms(o, R)),
        0 < O.length &&
          ((R = new Ec(R, e, null, n, c)),
          h.push({ event: R, listeners: O }),
          T ? (R.data = T) : ((T = lh(n)), T !== null && (R.data = T)))),
        (T = R0 ? A0(e, n) : C0(e, n)) &&
          ((R = ms(o, 'onBeforeInput')),
          0 < R.length &&
            ((O = new Ec('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: O, listeners: R }),
            (O.data = T))),
        Sy(h, e, o, n, c);
    }
    Xm(h, t);
  });
}
function Ml(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ms(e, t) {
  for (var n = t + 'Capture', a = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l = l.tag),
      (l !== 5 && l !== 26 && l !== 27) ||
        i === null ||
        ((l = Rl(e, n)),
        l != null && a.unshift(Ml(e, l, i)),
        (l = Rl(e, t)),
        l != null && a.push(Ml(e, l, i))),
      (e = e.return);
  }
  return a;
}
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5 && e.tag !== 27);
  return e || null;
}
function mf(e, t, n, a, l) {
  for (var i = t._reactName, s = []; n !== null && n !== a; ) {
    var r = n,
      u = r.alternate,
      o = r.stateNode;
    if (((r = r.tag), u !== null && u === a)) break;
    (r !== 5 && r !== 26 && r !== 27) ||
      o === null ||
      ((u = o),
      l
        ? ((o = Rl(n, i)), o != null && s.unshift(Ml(n, o, u)))
        : l || ((o = Rl(n, i)), o != null && s.push(Ml(n, o, u)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var jy = /\r\n?/g,
  Oy = /\u0000|\uFFFD/g;
function gf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      jy,
      `
`
    )
    .replace(Oy, '');
}
function Km(e, t) {
  return (t = gf(t)), gf(e) === t;
}
function $s() {}
function X(e, t, n, a, l, i) {
  switch (n) {
    case 'children':
      typeof a == 'string'
        ? t === 'body' || (t === 'textarea' && a === '') || Ta(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') &&
          t !== 'body' &&
          Ta(e, '' + a);
      break;
    case 'className':
      mi(e, 'class', a);
      break;
    case 'tabIndex':
      mi(e, 'tabindex', a);
      break;
    case 'dir':
    case 'role':
    case 'viewBox':
    case 'width':
    case 'height':
      mi(e, n, a);
      break;
    case 'style':
      Id(e, a, i);
      break;
    case 'data':
      if (t !== 'object') {
        mi(e, 'data', a);
        break;
      }
    case 'src':
    case 'href':
      if (a === '' && (t !== 'a' || n !== 'href')) {
        e.removeAttribute(n);
        break;
      }
      if (
        a == null ||
        typeof a == 'function' ||
        typeof a == 'symbol' ||
        typeof a == 'boolean'
      ) {
        e.removeAttribute(n);
        break;
      }
      (a = Ci('' + a)), e.setAttribute(n, a);
      break;
    case 'action':
    case 'formAction':
      if (typeof a == 'function') {
        e.setAttribute(
          n,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof i == 'function' &&
          (n === 'formAction'
            ? (t !== 'input' && X(e, t, 'name', l.name, l, null),
              X(e, t, 'formEncType', l.formEncType, l, null),
              X(e, t, 'formMethod', l.formMethod, l, null),
              X(e, t, 'formTarget', l.formTarget, l, null))
            : (X(e, t, 'encType', l.encType, l, null),
              X(e, t, 'method', l.method, l, null),
              X(e, t, 'target', l.target, l, null)));
      if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
        e.removeAttribute(n);
        break;
      }
      (a = Ci('' + a)), e.setAttribute(n, a);
      break;
    case 'onClick':
      a != null && (e.onclick = $s);
      break;
    case 'onScroll':
      a != null && Y('scroll', e);
      break;
    case 'onScrollEnd':
      a != null && Y('scrollend', e);
      break;
    case 'dangerouslySetInnerHTML':
      if (a != null) {
        if (typeof a != 'object' || !('__html' in a)) throw Error(j(61));
        if (((n = a.__html), n != null)) {
          if (l.children != null) throw Error(j(60));
          e.innerHTML = n;
        }
      }
      break;
    case 'multiple':
      e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
      break;
    case 'muted':
      e.muted = a && typeof a != 'function' && typeof a != 'symbol';
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'defaultValue':
    case 'defaultChecked':
    case 'innerHTML':
    case 'ref':
      break;
    case 'autoFocus':
      break;
    case 'xlinkHref':
      if (
        a == null ||
        typeof a == 'function' ||
        typeof a == 'boolean' ||
        typeof a == 'symbol'
      ) {
        e.removeAttribute('xlink:href');
        break;
      }
      (n = Ci('' + a)),
        e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
      break;
    case 'contentEditable':
    case 'spellCheck':
    case 'draggable':
    case 'value':
    case 'autoReverse':
    case 'externalResourcesRequired':
    case 'focusable':
    case 'preserveAlpha':
      a != null && typeof a != 'function' && typeof a != 'symbol'
        ? e.setAttribute(n, '' + a)
        : e.removeAttribute(n);
      break;
    case 'inert':
    case 'allowFullScreen':
    case 'async':
    case 'autoPlay':
    case 'controls':
    case 'default':
    case 'defer':
    case 'disabled':
    case 'disablePictureInPicture':
    case 'disableRemotePlayback':
    case 'formNoValidate':
    case 'hidden':
    case 'loop':
    case 'noModule':
    case 'noValidate':
    case 'open':
    case 'playsInline':
    case 'readOnly':
    case 'required':
    case 'reversed':
    case 'scoped':
    case 'seamless':
    case 'itemScope':
      a && typeof a != 'function' && typeof a != 'symbol'
        ? e.setAttribute(n, '')
        : e.removeAttribute(n);
      break;
    case 'capture':
    case 'download':
      a === !0
        ? e.setAttribute(n, '')
        : a !== !1 &&
            a != null &&
            typeof a != 'function' &&
            typeof a != 'symbol'
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
      break;
    case 'cols':
    case 'rows':
    case 'size':
    case 'span':
      a != null &&
      typeof a != 'function' &&
      typeof a != 'symbol' &&
      !isNaN(a) &&
      1 <= a
        ? e.setAttribute(n, a)
        : e.removeAttribute(n);
      break;
    case 'rowSpan':
    case 'start':
      a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
        ? e.removeAttribute(n)
        : e.setAttribute(n, a);
      break;
    case 'popover':
      Y('beforetoggle', e), Y('toggle', e), Ai(e, 'popover', a);
      break;
    case 'xlinkActuate':
      wt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
      break;
    case 'xlinkArcrole':
      wt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
      break;
    case 'xlinkRole':
      wt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
      break;
    case 'xlinkShow':
      wt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
      break;
    case 'xlinkTitle':
      wt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
      break;
    case 'xlinkType':
      wt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
      break;
    case 'xmlBase':
      wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
      break;
    case 'xmlLang':
      wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
      break;
    case 'xmlSpace':
      wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
      break;
    case 'is':
      Ai(e, 'is', a);
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      (!(2 < n.length) ||
        (n[0] !== 'o' && n[0] !== 'O') ||
        (n[1] !== 'n' && n[1] !== 'N')) &&
        ((n = t0.get(n) || n), Ai(e, n, a));
  }
}
function Cu(e, t, n, a, l, i) {
  switch (n) {
    case 'style':
      Id(e, a, i);
      break;
    case 'dangerouslySetInnerHTML':
      if (a != null) {
        if (typeof a != 'object' || !('__html' in a)) throw Error(j(61));
        if (((n = a.__html), n != null)) {
          if (l.children != null) throw Error(j(60));
          e.innerHTML = n;
        }
      }
      break;
    case 'children':
      typeof a == 'string'
        ? Ta(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') && Ta(e, '' + a);
      break;
    case 'onScroll':
      a != null && Y('scroll', e);
      break;
    case 'onScrollEnd':
      a != null && Y('scrollend', e);
      break;
    case 'onClick':
      a != null && (e.onclick = $s);
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'innerHTML':
    case 'ref':
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      if (!Kd.hasOwnProperty(n))
        e: {
          if (
            n[0] === 'o' &&
            n[1] === 'n' &&
            ((l = n.endsWith('Capture')),
            (t = n.slice(2, l ? n.length - 7 : void 0)),
            (i = e[Le] || null),
            (i = i != null ? i[n] : null),
            typeof i == 'function' && e.removeEventListener(t, i, l),
            typeof a == 'function')
          ) {
            typeof i != 'function' &&
              i !== null &&
              (n in e
                ? (e[n] = null)
                : e.hasAttribute(n) && e.removeAttribute(n)),
              e.addEventListener(t, a, l);
            break e;
          }
          n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : Ai(e, n, a);
        }
  }
}
function Se(e, t, n) {
  switch (t) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'img':
      Y('error', e), Y('load', e);
      var a = !1,
        l = !1,
        i;
      for (i in n)
        if (n.hasOwnProperty(i)) {
          var s = n[i];
          if (s != null)
            switch (i) {
              case 'src':
                a = !0;
                break;
              case 'srcSet':
                l = !0;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(j(137, t));
              default:
                X(e, t, i, s, n, null);
            }
        }
      l && X(e, t, 'srcSet', n.srcSet, n, null),
        a && X(e, t, 'src', n.src, n, null);
      return;
    case 'input':
      Y('invalid', e);
      var r = (i = s = l = null),
        u = null,
        o = null;
      for (a in n)
        if (n.hasOwnProperty(a)) {
          var c = n[a];
          if (c != null)
            switch (a) {
              case 'name':
                l = c;
                break;
              case 'type':
                s = c;
                break;
              case 'checked':
                u = c;
                break;
              case 'defaultChecked':
                o = c;
                break;
              case 'value':
                i = c;
                break;
              case 'defaultValue':
                r = c;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(j(137, t));
                break;
              default:
                X(e, t, a, c, n, null);
            }
        }
      Fd(e, i, r, u, o, s, l, !1), Wi(e);
      return;
    case 'select':
      Y('invalid', e), (a = s = i = null);
      for (l in n)
        if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
          switch (l) {
            case 'value':
              i = r;
              break;
            case 'defaultValue':
              s = r;
              break;
            case 'multiple':
              a = r;
            default:
              X(e, t, l, r, n, null);
          }
      (t = i),
        (n = s),
        (e.multiple = !!a),
        t != null ? va(e, !!a, t, !1) : n != null && va(e, !!a, n, !0);
      return;
    case 'textarea':
      Y('invalid', e), (i = l = a = null);
      for (s in n)
        if (n.hasOwnProperty(s) && ((r = n[s]), r != null))
          switch (s) {
            case 'value':
              a = r;
              break;
            case 'defaultValue':
              l = r;
              break;
            case 'children':
              i = r;
              break;
            case 'dangerouslySetInnerHTML':
              if (r != null) throw Error(j(91));
              break;
            default:
              X(e, t, s, r, n, null);
          }
      Pd(e, a, l, i), Wi(e);
      return;
    case 'option':
      for (u in n)
        if (n.hasOwnProperty(u) && ((a = n[u]), a != null))
          switch (u) {
            case 'selected':
              e.selected = a && typeof a != 'function' && typeof a != 'symbol';
              break;
            default:
              X(e, t, u, a, n, null);
          }
      return;
    case 'dialog':
      Y('cancel', e), Y('close', e);
      break;
    case 'iframe':
    case 'object':
      Y('load', e);
      break;
    case 'video':
    case 'audio':
      for (a = 0; a < Ll.length; a++) Y(Ll[a], e);
      break;
    case 'image':
      Y('error', e), Y('load', e);
      break;
    case 'details':
      Y('toggle', e);
      break;
    case 'embed':
    case 'source':
    case 'link':
      Y('error', e), Y('load', e);
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (o in n)
        if (n.hasOwnProperty(o) && ((a = n[o]), a != null))
          switch (o) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              throw Error(j(137, t));
            default:
              X(e, t, o, a, n, null);
          }
      return;
    default:
      if (io(t)) {
        for (c in n)
          n.hasOwnProperty(c) &&
            ((a = n[c]), a !== void 0 && Cu(e, t, c, a, n, void 0));
        return;
      }
  }
  for (r in n)
    n.hasOwnProperty(r) && ((a = n[r]), a != null && X(e, t, r, a, n, null));
}
function Ty(e, t, n, a) {
  switch (t) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'input':
      var l = null,
        i = null,
        s = null,
        r = null,
        u = null,
        o = null,
        c = null;
      for (m in n) {
        var h = n[m];
        if (n.hasOwnProperty(m) && h != null)
          switch (m) {
            case 'checked':
              break;
            case 'value':
              break;
            case 'defaultValue':
              u = h;
            default:
              a.hasOwnProperty(m) || X(e, t, m, null, a, h);
          }
      }
      for (var f in a) {
        var m = a[f];
        if (((h = n[f]), a.hasOwnProperty(f) && (m != null || h != null)))
          switch (f) {
            case 'type':
              i = m;
              break;
            case 'name':
              l = m;
              break;
            case 'checked':
              o = m;
              break;
            case 'defaultChecked':
              c = m;
              break;
            case 'value':
              s = m;
              break;
            case 'defaultValue':
              r = m;
              break;
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (m != null) throw Error(j(137, t));
              break;
            default:
              m !== h && X(e, t, f, m, a, h);
          }
      }
      Ir(e, s, r, u, o, c, i, l);
      return;
    case 'select':
      m = s = r = f = null;
      for (i in n)
        if (((u = n[i]), n.hasOwnProperty(i) && u != null))
          switch (i) {
            case 'value':
              break;
            case 'multiple':
              m = u;
            default:
              a.hasOwnProperty(i) || X(e, t, i, null, a, u);
          }
      for (l in a)
        if (
          ((i = a[l]),
          (u = n[l]),
          a.hasOwnProperty(l) && (i != null || u != null))
        )
          switch (l) {
            case 'value':
              f = i;
              break;
            case 'defaultValue':
              r = i;
              break;
            case 'multiple':
              s = i;
            default:
              i !== u && X(e, t, l, i, a, u);
          }
      (t = r),
        (n = s),
        (a = m),
        f != null
          ? va(e, !!n, f, !1)
          : !!a != !!n &&
            (t != null ? va(e, !!n, t, !0) : va(e, !!n, n ? [] : '', !1));
      return;
    case 'textarea':
      m = f = null;
      for (r in n)
        if (
          ((l = n[r]), n.hasOwnProperty(r) && l != null && !a.hasOwnProperty(r))
        )
          switch (r) {
            case 'value':
              break;
            case 'children':
              break;
            default:
              X(e, t, r, null, a, l);
          }
      for (s in a)
        if (
          ((l = a[s]),
          (i = n[s]),
          a.hasOwnProperty(s) && (l != null || i != null))
        )
          switch (s) {
            case 'value':
              f = l;
              break;
            case 'defaultValue':
              m = l;
              break;
            case 'children':
              break;
            case 'dangerouslySetInnerHTML':
              if (l != null) throw Error(j(91));
              break;
            default:
              l !== i && X(e, t, s, l, a, i);
          }
      Wd(e, f, m);
      return;
    case 'option':
      for (var y in n)
        if (
          ((f = n[y]), n.hasOwnProperty(y) && f != null && !a.hasOwnProperty(y))
        )
          switch (y) {
            case 'selected':
              e.selected = !1;
              break;
            default:
              X(e, t, y, null, a, f);
          }
      for (u in a)
        if (
          ((f = a[u]),
          (m = n[u]),
          a.hasOwnProperty(u) && f !== m && (f != null || m != null))
        )
          switch (u) {
            case 'selected':
              e.selected = f && typeof f != 'function' && typeof f != 'symbol';
              break;
            default:
              X(e, t, u, f, a, m);
          }
      return;
    case 'img':
    case 'link':
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (var x in n)
        (f = n[x]),
          n.hasOwnProperty(x) &&
            f != null &&
            !a.hasOwnProperty(x) &&
            X(e, t, x, null, a, f);
      for (o in a)
        if (
          ((f = a[o]),
          (m = n[o]),
          a.hasOwnProperty(o) && f !== m && (f != null || m != null))
        )
          switch (o) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (f != null) throw Error(j(137, t));
              break;
            default:
              X(e, t, o, f, a, m);
          }
      return;
    default:
      if (io(t)) {
        for (var b in n)
          (f = n[b]),
            n.hasOwnProperty(b) &&
              f !== void 0 &&
              !a.hasOwnProperty(b) &&
              Cu(e, t, b, void 0, a, f);
        for (c in a)
          (f = a[c]),
            (m = n[c]),
            !a.hasOwnProperty(c) ||
              f === m ||
              (f === void 0 && m === void 0) ||
              Cu(e, t, c, f, a, m);
        return;
      }
  }
  for (var p in n)
    (f = n[p]),
      n.hasOwnProperty(p) &&
        f != null &&
        !a.hasOwnProperty(p) &&
        X(e, t, p, null, a, f);
  for (h in a)
    (f = a[h]),
      (m = n[h]),
      !a.hasOwnProperty(h) ||
        f === m ||
        (f == null && m == null) ||
        X(e, t, h, f, a, m);
}
var Du = null,
  zu = null;
function gs(e) {
  return e.nodeType === 9 ? e : e.ownerDocument;
}
function pf(e) {
  switch (e) {
    case 'http://www.w3.org/2000/svg':
      return 1;
    case 'http://www.w3.org/1998/Math/MathML':
      return 2;
    default:
      return 0;
  }
}
function Zm(e, t) {
  if (e === 0)
    switch (t) {
      case 'svg':
        return 1;
      case 'math':
        return 2;
      default:
        return 0;
    }
  return e === 1 && t === 'foreignObject' ? 0 : e;
}
function Uu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    typeof t.children == 'bigint' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Lr = null;
function Ry() {
  var e = window.event;
  return e && e.type === 'popstate'
    ? e === Lr
      ? !1
      : ((Lr = e), !0)
    : ((Lr = null), !1);
}
var Jm = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ay = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  yf = typeof Promise == 'function' ? Promise : void 0,
  Cy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof yf < 'u'
        ? function (e) {
            return yf.resolve(null).then(e).catch(Dy);
          }
        : Jm;
function Dy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Mr(e, t) {
  var n = t,
    a = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (a === 0) {
          e.removeChild(l), ql(t);
          return;
        }
        a--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || a++;
    n = l;
  } while (n);
  ql(t);
}
function Lu(e) {
  var t = e.firstChild;
  for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
    var n = t;
    switch (((t = t.nextSibling), n.nodeName)) {
      case 'HTML':
      case 'HEAD':
      case 'BODY':
        Lu(n), lo(n);
        continue;
      case 'SCRIPT':
      case 'STYLE':
        continue;
      case 'LINK':
        if (n.rel.toLowerCase() === 'stylesheet') continue;
    }
    e.removeChild(n);
  }
}
function zy(e, t, n, a) {
  for (; e.nodeType === 1; ) {
    var l = n;
    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
      if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
    } else if (a) {
      if (!e[Tl])
        switch (t) {
          case 'meta':
            if (!e.hasAttribute('itemprop')) break;
            return e;
          case 'link':
            if (
              ((i = e.getAttribute('rel')),
              i === 'stylesheet' && e.hasAttribute('data-precedence'))
            )
              break;
            if (
              i !== l.rel ||
              e.getAttribute('href') !== (l.href == null ? null : l.href) ||
              e.getAttribute('crossorigin') !==
                (l.crossOrigin == null ? null : l.crossOrigin) ||
              e.getAttribute('title') !== (l.title == null ? null : l.title)
            )
              break;
            return e;
          case 'style':
            if (e.hasAttribute('data-precedence')) break;
            return e;
          case 'script':
            if (
              ((i = e.getAttribute('src')),
              (i !== (l.src == null ? null : l.src) ||
                e.getAttribute('type') !== (l.type == null ? null : l.type) ||
                e.getAttribute('crossorigin') !==
                  (l.crossOrigin == null ? null : l.crossOrigin)) &&
                i &&
                e.hasAttribute('async') &&
                !e.hasAttribute('itemprop'))
            )
              break;
            return e;
          default:
            return e;
        }
    } else if (t === 'input' && e.type === 'hidden') {
      var i = l.name == null ? null : '' + l.name;
      if (l.type === 'hidden' && e.getAttribute('name') === i) return e;
    } else return e;
    if (((e = st(e.nextSibling)), e === null)) break;
  }
  return null;
}
function Uy(e, t, n) {
  if (t === '') return null;
  for (; e.nodeType !== 3; )
    if (
      ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
        !n) ||
      ((e = st(e.nextSibling)), e === null)
    )
      return null;
  return e;
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (
        ((t = e.data),
        t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
      )
        break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function vf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
function Fm(e, t, n) {
  switch (((t = gs(n)), e)) {
    case 'html':
      if (((e = t.documentElement), !e)) throw Error(j(452));
      return e;
    case 'head':
      if (((e = t.head), !e)) throw Error(j(453));
      return e;
    case 'body':
      if (((e = t.body), !e)) throw Error(j(454));
      return e;
    default:
      throw Error(j(451));
  }
}
var at = new Map(),
  bf = new Set();
function ps(e) {
  return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
}
var Vt = W.d;
W.d = { f: Ly, r: My, D: _y, C: Hy, L: By, m: ky, X: Yy, S: qy, M: Vy };
function Ly() {
  var e = Vt.f(),
    t = Ys();
  return e || t;
}
function My(e) {
  var t = Ha(e);
  t !== null && t.tag === 5 && t.type === 'form' ? Fh(t) : Vt.r(e);
}
var ka = typeof document > 'u' ? null : document;
function Wm(e, t, n) {
  var a = ka;
  if (a && typeof t == 'string' && t) {
    var l = We(t);
    (l = 'link[rel="' + e + '"][href="' + l + '"]'),
      typeof n == 'string' && (l += '[crossorigin="' + n + '"]'),
      bf.has(l) ||
        (bf.add(l),
        (e = { rel: e, crossOrigin: n, href: t }),
        a.querySelector(l) === null &&
          ((t = a.createElement('link')),
          Se(t, 'link', e),
          pe(t),
          a.head.appendChild(t)));
  }
}
function _y(e) {
  Vt.D(e), Wm('dns-prefetch', e, null);
}
function Hy(e, t) {
  Vt.C(e, t), Wm('preconnect', e, t);
}
function By(e, t, n) {
  Vt.L(e, t, n);
  var a = ka;
  if (a && e && t) {
    var l = 'link[rel="preload"][as="' + We(t) + '"]';
    t === 'image' && n && n.imageSrcSet
      ? ((l += '[imagesrcset="' + We(n.imageSrcSet) + '"]'),
        typeof n.imageSizes == 'string' &&
          (l += '[imagesizes="' + We(n.imageSizes) + '"]'))
      : (l += '[href="' + We(e) + '"]');
    var i = l;
    switch (t) {
      case 'style':
        i = Ua(e);
        break;
      case 'script':
        i = qa(e);
    }
    at.has(i) ||
      ((e = P(
        {
          rel: 'preload',
          href: t === 'image' && n && n.imageSrcSet ? void 0 : e,
          as: t,
        },
        n
      )),
      at.set(i, e),
      a.querySelector(l) !== null ||
        (t === 'style' && a.querySelector(ti(i))) ||
        (t === 'script' && a.querySelector(ni(i))) ||
        ((t = a.createElement('link')),
        Se(t, 'link', e),
        pe(t),
        a.head.appendChild(t)));
  }
}
function ky(e, t) {
  Vt.m(e, t);
  var n = ka;
  if (n && e) {
    var a = t && typeof t.as == 'string' ? t.as : 'script',
      l = 'link[rel="modulepreload"][as="' + We(a) + '"][href="' + We(e) + '"]',
      i = l;
    switch (a) {
      case 'audioworklet':
      case 'paintworklet':
      case 'serviceworker':
      case 'sharedworker':
      case 'worker':
      case 'script':
        i = qa(e);
    }
    if (
      !at.has(i) &&
      ((e = P({ rel: 'modulepreload', href: e }, t)),
      at.set(i, e),
      n.querySelector(l) === null)
    ) {
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          if (n.querySelector(ni(i))) return;
      }
      (a = n.createElement('link')),
        Se(a, 'link', e),
        pe(a),
        n.head.appendChild(a);
    }
  }
}
function qy(e, t, n) {
  Vt.S(e, t, n);
  var a = ka;
  if (a && e) {
    var l = ya(a).hoistableStyles,
      i = Ua(e);
    t = t || 'default';
    var s = l.get(i);
    if (!s) {
      var r = { loading: 0, preload: null };
      if ((s = a.querySelector(ti(i)))) r.loading = 5;
      else {
        (e = P({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
          (n = at.get(i)) && Vo(e, n);
        var u = (s = a.createElement('link'));
        pe(u),
          Se(u, 'link', e),
          (u._p = new Promise(function (o, c) {
            (u.onload = o), (u.onerror = c);
          })),
          u.addEventListener('load', function () {
            r.loading |= 1;
          }),
          u.addEventListener('error', function () {
            r.loading |= 2;
          }),
          (r.loading |= 4),
          Bi(s, t, a);
      }
      (s = { type: 'stylesheet', instance: s, count: 1, state: r }),
        l.set(i, s);
    }
  }
}
function Yy(e, t) {
  Vt.X(e, t);
  var n = ka;
  if (n && e) {
    var a = ya(n).hoistableScripts,
      l = qa(e),
      i = a.get(l);
    i ||
      ((i = n.querySelector(ni(l))),
      i ||
        ((e = P({ src: e, async: !0 }, t)),
        (t = at.get(l)) && $o(e, t),
        (i = n.createElement('script')),
        pe(i),
        Se(i, 'link', e),
        n.head.appendChild(i)),
      (i = { type: 'script', instance: i, count: 1, state: null }),
      a.set(l, i));
  }
}
function Vy(e, t) {
  Vt.M(e, t);
  var n = ka;
  if (n && e) {
    var a = ya(n).hoistableScripts,
      l = qa(e),
      i = a.get(l);
    i ||
      ((i = n.querySelector(ni(l))),
      i ||
        ((e = P({ src: e, async: !0, type: 'module' }, t)),
        (t = at.get(l)) && $o(e, t),
        (i = n.createElement('script')),
        pe(i),
        Se(i, 'link', e),
        n.head.appendChild(i)),
      (i = { type: 'script', instance: i, count: 1, state: null }),
      a.set(l, i));
  }
}
function xf(e, t, n, a) {
  var l = (l = nn.current) ? ps(l) : null;
  if (!l) throw Error(j(446));
  switch (e) {
    case 'meta':
    case 'title':
      return null;
    case 'style':
      return typeof n.precedence == 'string' && typeof n.href == 'string'
        ? ((t = Ua(n.href)),
          (n = ya(l).hoistableStyles),
          (a = n.get(t)),
          a ||
            ((a = { type: 'style', instance: null, count: 0, state: null }),
            n.set(t, a)),
          a)
        : { type: 'void', instance: null, count: 0, state: null };
    case 'link':
      if (
        n.rel === 'stylesheet' &&
        typeof n.href == 'string' &&
        typeof n.precedence == 'string'
      ) {
        e = Ua(n.href);
        var i = ya(l).hoistableStyles,
          s = i.get(e);
        if (
          (s ||
            ((l = l.ownerDocument || l),
            (s = {
              type: 'stylesheet',
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            i.set(e, s),
            (i = l.querySelector(ti(e))) &&
              !i._p &&
              ((s.instance = i), (s.state.loading = 5)),
            at.has(e) ||
              ((n = {
                rel: 'preload',
                as: 'style',
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy,
              }),
              at.set(e, n),
              i || $y(l, e, n, s.state))),
          t && a === null)
        )
          throw Error(j(528, ''));
        return s;
      }
      if (t && a !== null) throw Error(j(529, ''));
      return null;
    case 'script':
      return (
        (t = n.async),
        (n = n.src),
        typeof n == 'string' &&
        t &&
        typeof t != 'function' &&
        typeof t != 'symbol'
          ? ((t = qa(n)),
            (n = ya(l).hoistableScripts),
            (a = n.get(t)),
            a ||
              ((a = { type: 'script', instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
      );
    default:
      throw Error(j(444, e));
  }
}
function Ua(e) {
  return 'href="' + We(e) + '"';
}
function ti(e) {
  return 'link[rel="stylesheet"][' + e + ']';
}
function Pm(e) {
  return P({}, e, { 'data-precedence': e.precedence, precedence: null });
}
function $y(e, t, n, a) {
  e.querySelector('link[rel="preload"][as="style"][' + t + ']')
    ? (a.loading = 1)
    : ((t = e.createElement('link')),
      (a.preload = t),
      t.addEventListener('load', function () {
        return (a.loading |= 1);
      }),
      t.addEventListener('error', function () {
        return (a.loading |= 2);
      }),
      Se(t, 'link', n),
      pe(t),
      e.head.appendChild(t));
}
function qa(e) {
  return '[src="' + We(e) + '"]';
}
function ni(e) {
  return 'script[async]' + e;
}
function Sf(e, t, n) {
  if ((t.count++, t.instance === null))
    switch (t.type) {
      case 'style':
        var a = e.querySelector('style[data-href~="' + We(n.href) + '"]');
        if (a) return (t.instance = a), pe(a), a;
        var l = P({}, n, {
          'data-href': n.href,
          'data-precedence': n.precedence,
          href: null,
          precedence: null,
        });
        return (
          (a = (e.ownerDocument || e).createElement('style')),
          pe(a),
          Se(a, 'style', l),
          Bi(a, n.precedence, e),
          (t.instance = a)
        );
      case 'stylesheet':
        l = Ua(n.href);
        var i = e.querySelector(ti(l));
        if (i) return (t.state.loading |= 4), (t.instance = i), pe(i), i;
        (a = Pm(n)),
          (l = at.get(l)) && Vo(a, l),
          (i = (e.ownerDocument || e).createElement('link')),
          pe(i);
        var s = i;
        return (
          (s._p = new Promise(function (r, u) {
            (s.onload = r), (s.onerror = u);
          })),
          Se(i, 'link', a),
          (t.state.loading |= 4),
          Bi(i, n.precedence, e),
          (t.instance = i)
        );
      case 'script':
        return (
          (i = qa(n.src)),
          (l = e.querySelector(ni(i)))
            ? ((t.instance = l), pe(l), l)
            : ((a = n),
              (l = at.get(i)) && ((a = P({}, n)), $o(a, l)),
              (e = e.ownerDocument || e),
              (l = e.createElement('script')),
              pe(l),
              Se(l, 'link', a),
              e.head.appendChild(l),
              (t.instance = l))
        );
      case 'void':
        return null;
      default:
        throw Error(j(443, t.type));
    }
  else
    t.type === 'stylesheet' &&
      !(t.state.loading & 4) &&
      ((a = t.instance), (t.state.loading |= 4), Bi(a, n.precedence, e));
  return t.instance;
}
function Bi(e, t, n) {
  for (
    var a = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      l = a.length ? a[a.length - 1] : null,
      i = l,
      s = 0;
    s < a.length;
    s++
  ) {
    var r = a[s];
    if (r.dataset.precedence === t) i = r;
    else if (i !== l) break;
  }
  i
    ? i.parentNode.insertBefore(e, i.nextSibling)
    : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
}
function Vo(e, t) {
  e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.title == null && (e.title = t.title);
}
function $o(e, t) {
  e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.integrity == null && (e.integrity = t.integrity);
}
var ki = null;
function Ef(e, t, n) {
  if (ki === null) {
    var a = new Map(),
      l = (ki = new Map());
    l.set(n, a);
  } else (l = ki), (a = l.get(n)), a || ((a = new Map()), l.set(n, a));
  if (a.has(e)) return a;
  for (
    a.set(e, null), n = n.getElementsByTagName(e), l = 0;
    l < n.length;
    l++
  ) {
    var i = n[l];
    if (
      !(
        i[Tl] ||
        i[we] ||
        (e === 'link' && i.getAttribute('rel') === 'stylesheet')
      ) &&
      i.namespaceURI !== 'http://www.w3.org/2000/svg'
    ) {
      var s = i.getAttribute(t) || '';
      s = e + s;
      var r = a.get(s);
      r ? r.push(i) : a.set(s, [i]);
    }
  }
  return a;
}
function wf(e, t, n) {
  (e = e.ownerDocument || e),
    e.head.insertBefore(
      n,
      t === 'title' ? e.querySelector('head > title') : null
    );
}
function Gy(e, t, n) {
  if (n === 1 || t.itemProp != null) return !1;
  switch (e) {
    case 'meta':
    case 'title':
      return !0;
    case 'style':
      if (
        typeof t.precedence != 'string' ||
        typeof t.href != 'string' ||
        t.href === ''
      )
        break;
      return !0;
    case 'link':
      if (
        typeof t.rel != 'string' ||
        typeof t.href != 'string' ||
        t.href === '' ||
        t.onLoad ||
        t.onError
      )
        break;
      switch (t.rel) {
        case 'stylesheet':
          return (e = t.disabled), typeof t.precedence == 'string' && e == null;
        default:
          return !0;
      }
    case 'script':
      if (
        t.async &&
        typeof t.async != 'function' &&
        typeof t.async != 'symbol' &&
        !t.onLoad &&
        !t.onError &&
        t.src &&
        typeof t.src == 'string'
      )
        return !0;
  }
  return !1;
}
function Im(e) {
  return !(e.type === 'stylesheet' && !(e.state.loading & 3));
}
var _l = null;
function Xy() {}
function Qy(e, t, n) {
  if (_l === null) throw Error(j(475));
  var a = _l;
  if (
    t.type === 'stylesheet' &&
    (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
    !(t.state.loading & 4)
  ) {
    if (t.instance === null) {
      var l = Ua(n.href),
        i = e.querySelector(ti(l));
      if (i) {
        (e = i._p),
          e !== null &&
            typeof e == 'object' &&
            typeof e.then == 'function' &&
            (a.count++, (a = ys.bind(a)), e.then(a, a)),
          (t.state.loading |= 4),
          (t.instance = i),
          pe(i);
        return;
      }
      (i = e.ownerDocument || e),
        (n = Pm(n)),
        (l = at.get(l)) && Vo(n, l),
        (i = i.createElement('link')),
        pe(i);
      var s = i;
      (s._p = new Promise(function (r, u) {
        (s.onload = r), (s.onerror = u);
      })),
        Se(i, 'link', n),
        (t.instance = i);
    }
    a.stylesheets === null && (a.stylesheets = new Map()),
      a.stylesheets.set(t, e),
      (e = t.state.preload) &&
        !(t.state.loading & 3) &&
        (a.count++,
        (t = ys.bind(a)),
        e.addEventListener('load', t),
        e.addEventListener('error', t));
  }
}
function Ky() {
  if (_l === null) throw Error(j(475));
  var e = _l;
  return (
    e.stylesheets && e.count === 0 && Mu(e, e.stylesheets),
    0 < e.count
      ? function (t) {
          var n = setTimeout(function () {
            if ((e.stylesheets && Mu(e, e.stylesheets), e.unsuspend)) {
              var a = e.unsuspend;
              (e.unsuspend = null), a();
            }
          }, 6e4);
          return (
            (e.unsuspend = t),
            function () {
              (e.unsuspend = null), clearTimeout(n);
            }
          );
        }
      : null
  );
}
function ys() {
  if ((this.count--, this.count === 0)) {
    if (this.stylesheets) Mu(this, this.stylesheets);
    else if (this.unsuspend) {
      var e = this.unsuspend;
      (this.unsuspend = null), e();
    }
  }
}
var vs = null;
function Mu(e, t) {
  (e.stylesheets = null),
    e.unsuspend !== null &&
      (e.count++, (vs = new Map()), t.forEach(Zy, e), (vs = null), ys.call(e));
}
function Zy(e, t) {
  if (!(t.state.loading & 4)) {
    var n = vs.get(e);
    if (n) var a = n.get(null);
    else {
      (n = new Map()), vs.set(e, n);
      for (
        var l = e.querySelectorAll(
            'link[data-precedence],style[data-precedence]'
          ),
          i = 0;
        i < l.length;
        i++
      ) {
        var s = l[i];
        (s.nodeName === 'LINK' || s.getAttribute('media') !== 'not all') &&
          (n.set(s.dataset.precedence, s), (a = s));
      }
      a && n.set(null, a);
    }
    (l = t.instance),
      (s = l.getAttribute('data-precedence')),
      (i = n.get(s) || a),
      i === a && n.set(null, l),
      n.set(s, l),
      this.count++,
      (a = ys.bind(this)),
      l.addEventListener('load', a),
      l.addEventListener('error', a),
      i
        ? i.parentNode.insertBefore(l, i.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e),
          e.insertBefore(l, e.firstChild)),
      (t.state.loading |= 4);
  }
}
var Hl = {
  $$typeof: Dt,
  Provider: null,
  Consumer: null,
  _currentValue: zn,
  _currentValue2: zn,
  _threadCount: 0,
};
function Jy(e, t, n, a, l, i, s, r) {
  (this.tag = 1),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = sr(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.finishedLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = sr(0)),
    (this.hiddenUpdates = sr(null)),
    (this.identifierPrefix = a),
    (this.onUncaughtError = l),
    (this.onCaughtError = i),
    (this.onRecoverableError = s),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = r),
    (this.incompleteTransitions = new Map());
}
function eg(e, t, n, a, l, i, s, r, u, o, c, h) {
  return (
    (e = new Jy(e, t, n, s, r, u, o, h)),
    (t = 1),
    i === !0 && (t |= 24),
    (i = Ie(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (t = yo()),
    t.refCount++,
    (e.pooledCache = t),
    t.refCount++,
    (i.memoizedState = { element: a, isDehydrated: n, cache: t }),
    zo(i),
    e
  );
}
function tg(e) {
  return e ? ((e = da), e) : da;
}
function ng(e, t, n, a, l, i) {
  (l = tg(l)),
    a.context === null ? (a.context = l) : (a.pendingContext = l),
    (a = an(t)),
    (a.payload = { element: n }),
    (i = i === void 0 ? null : i),
    i !== null && (a.callback = i),
    (n = ln(e, a, t)),
    n !== null && (Re(n, e, t), vl(n, e, t));
}
function Nf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Go(e, t) {
  Nf(e, t), (e = e.alternate) && Nf(e, t);
}
function ag(e) {
  if (e.tag === 13) {
    var t = fn(e, 67108864);
    t !== null && Re(t, e, 67108864), Go(e, 67108864);
  }
}
var bs = !0;
function Fy(e, t, n, a) {
  var l = H.T;
  H.T = null;
  var i = W.p;
  try {
    (W.p = 2), Xo(e, t, n, a);
  } finally {
    (W.p = i), (H.T = l);
  }
}
function Wy(e, t, n, a) {
  var l = H.T;
  H.T = null;
  var i = W.p;
  try {
    (W.p = 8), Xo(e, t, n, a);
  } finally {
    (W.p = i), (H.T = l);
  }
}
function Xo(e, t, n, a) {
  if (bs) {
    var l = _u(a);
    if (l === null) Ur(e, t, a, xs, n), jf(e, a);
    else if (Iy(l, e, t, n, a)) a.stopPropagation();
    else if ((jf(e, a), t & 4 && -1 < Py.indexOf(e))) {
      for (; l !== null; ) {
        var i = Ha(l);
        if (i !== null)
          switch (i.tag) {
            case 3:
              if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                var s = jn(i.pendingLanes);
                if (s !== 0) {
                  var r = i;
                  for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                    var u = 1 << (31 - Ye(s));
                    (r.entanglements[1] |= u), (s &= ~u);
                  }
                  xt(i), !(ae & 6) && ((cs = gt() + 500), ei(0));
                }
              }
              break;
            case 13:
              (r = fn(i, 2)), r !== null && Re(r, i, 2), Ys(), Go(i, 2);
          }
        if (((i = _u(a)), i === null && Ur(e, t, a, xs, n), i === l)) break;
        l = i;
      }
      l !== null && a.stopPropagation();
    } else Ur(e, t, a, null, n);
  }
}
function _u(e) {
  return (e = so(e)), Qo(e);
}
var xs = null;
function Qo(e) {
  if (((xs = null), (e = Rn(e)), e !== null)) {
    var t = Ma(e);
    if (t === null) e = null;
    else {
      var n = t.tag;
      if (n === 13) {
        if (((e = Md(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    }
  }
  return (xs = e), null;
}
function lg(e) {
  switch (e) {
    case 'beforetoggle':
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'toggle':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 2;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 8;
    case 'message':
      switch (Hp()) {
        case Hd:
          return 2;
        case Bd:
          return 8;
        case Fi:
        case Bp:
          return 32;
        case kd:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var Hu = !1,
  un = null,
  on = null,
  cn = null,
  Bl = new Map(),
  kl = new Map(),
  It = [],
  Py =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
      ' '
    );
function jf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      un = null;
      break;
    case 'dragenter':
    case 'dragleave':
      on = null;
      break;
    case 'mouseover':
    case 'mouseout':
      cn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Bl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      kl.delete(t.pointerId);
  }
}
function Pa(e, t, n, a, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: a,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Ha(t)), t !== null && ag(t)),
      e)
    : ((e.eventSystemFlags |= a),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Iy(e, t, n, a, l) {
  switch (t) {
    case 'focusin':
      return (un = Pa(un, e, t, n, a, l)), !0;
    case 'dragenter':
      return (on = Pa(on, e, t, n, a, l)), !0;
    case 'mouseover':
      return (cn = Pa(cn, e, t, n, a, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return Bl.set(i, Pa(Bl.get(i) || null, e, t, n, a, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), kl.set(i, Pa(kl.get(i) || null, e, t, n, a, l)), !0
      );
  }
  return !1;
}
function ig(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = Ma(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Md(n)), t !== null)) {
          (e.blockedOn = t),
            Kp(e.priority, function () {
              if (n.tag === 13) {
                var a = Ve(),
                  l = fn(n, a);
                l !== null && Re(l, n, a), Go(n, a);
              }
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function qi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _u(e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      (tu = a), n.target.dispatchEvent(a), (tu = null);
    } else return (t = Ha(n)), t !== null && ag(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Of(e, t, n) {
  qi(e) && n.delete(t);
}
function ev() {
  (Hu = !1),
    un !== null && qi(un) && (un = null),
    on !== null && qi(on) && (on = null),
    cn !== null && qi(cn) && (cn = null),
    Bl.forEach(Of),
    kl.forEach(Of);
}
function wi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Hu ||
      ((Hu = !0),
      me.unstable_scheduleCallback(me.unstable_NormalPriority, ev)));
}
var Ni = null;
function Tf(e) {
  Ni !== e &&
    ((Ni = e),
    me.unstable_scheduleCallback(me.unstable_NormalPriority, function () {
      Ni === e && (Ni = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t],
          a = e[t + 1],
          l = e[t + 2];
        if (typeof a != 'function') {
          if (Qo(a || n) === null) continue;
          break;
        }
        var i = Ha(n);
        i !== null &&
          (e.splice(t, 3),
          (t -= 3),
          fu(i, { pending: !0, data: l, method: n.method, action: a }, a, l));
      }
    }));
}
function ql(e) {
  function t(u) {
    return wi(u, e);
  }
  un !== null && wi(un, e),
    on !== null && wi(on, e),
    cn !== null && wi(cn, e),
    Bl.forEach(t),
    kl.forEach(t);
  for (var n = 0; n < It.length; n++) {
    var a = It[n];
    a.blockedOn === e && (a.blockedOn = null);
  }
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    ig(n), n.blockedOn === null && It.shift();
  if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
    for (a = 0; a < n.length; a += 3) {
      var l = n[a],
        i = n[a + 1],
        s = l[Le] || null;
      if (typeof i == 'function') s || Tf(n);
      else if (s) {
        var r = null;
        if (i && i.hasAttribute('formAction')) {
          if (((l = i), (s = i[Le] || null))) r = s.formAction;
          else if (Qo(l) !== null) continue;
        } else r = s.action;
        typeof r == 'function' ? (n[a + 1] = r) : (n.splice(a, 3), (a -= 3)),
          Tf(n);
      }
    }
}
function Ko(e) {
  this._internalRoot = e;
}
Gs.prototype.render = Ko.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  var n = t.current,
    a = Ve();
  ng(n, a, e, t, null, null);
};
Gs.prototype.unmount = Ko.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    e.tag === 0 && Na(),
      ng(e.current, 2, null, e, null, null),
      Ys(),
      (t[_a] = null);
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    It.splice(n, 0, e), n === 0 && ig(e);
  }
};
var Rf = Cd.version;
if (Rf !== '19.0.0') throw Error(j(527, Rf, '19.0.0'));
W.findDOMNode = function (e) {
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (
    (e = Lp(t)),
    (e = e !== null ? _d(e) : null),
    (e = e === null ? null : e.stateNode),
    e
  );
};
var tv = {
  bundleType: 0,
  version: '19.0.0',
  rendererPackageName: 'react-dom',
  currentDispatcherRef: H,
  findFiberByHostInstance: Rn,
  reconcilerVersion: '19.0.0',
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ji.isDisabled && ji.supportsFiber)
    try {
      (Xl = ji.inject(tv)), (qe = ji);
    } catch {}
}
As.createRoot = function (e, t) {
  if (!Dd(e)) throw Error(j(299));
  var n = !1,
    a = '',
    l = nm,
    i = am,
    s = lm,
    r = null;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
      t.onCaughtError !== void 0 && (i = t.onCaughtError),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
      t.unstable_transitionCallbacks !== void 0 &&
        (r = t.unstable_transitionCallbacks)),
    (t = eg(e, 1, !1, null, null, n, a, l, i, s, r, null)),
    (e[_a] = t.current),
    Yo(e.nodeType === 8 ? e.parentNode : e),
    new Ko(t)
  );
};
As.hydrateRoot = function (e, t, n) {
  if (!Dd(e)) throw Error(j(299));
  var a = !1,
    l = '',
    i = nm,
    s = am,
    r = lm,
    u = null,
    o = null;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onUncaughtError !== void 0 && (i = n.onUncaughtError),
      n.onCaughtError !== void 0 && (s = n.onCaughtError),
      n.onRecoverableError !== void 0 && (r = n.onRecoverableError),
      n.unstable_transitionCallbacks !== void 0 &&
        (u = n.unstable_transitionCallbacks),
      n.formState !== void 0 && (o = n.formState)),
    (t = eg(e, 1, !0, t, n ?? null, a, l, i, s, r, u, o)),
    (t.context = tg(null)),
    (n = t.current),
    (a = Ve()),
    (l = an(a)),
    (l.callback = null),
    ln(n, l, a),
    (t.current.lanes = a),
    Kl(t, a),
    xt(t),
    (e[_a] = t.current),
    Yo(e),
    new Gs(t)
  );
};
As.version = '19.0.0';
function sg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sg);
    } catch (e) {
      console.error(e);
    }
}
sg(), (Nd.exports = As);
var nv = Nd.exports;
const av = Ju(nv);
var Zo = {};
Object.defineProperty(Zo, '__esModule', { value: !0 });
Zo.parse = cv;
Zo.serialize = fv;
const lv = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  iv = /^[\u0021-\u003A\u003C-\u007E]*$/,
  sv =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  rv = /^[\u0020-\u003A\u003D-\u007E]*$/,
  uv = Object.prototype.toString,
  ov = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function cv(e, t) {
  const n = new ov(),
    a = e.length;
  if (a < 2) return n;
  const l = (t == null ? void 0 : t.decode) || dv;
  let i = 0;
  do {
    const s = e.indexOf('=', i);
    if (s === -1) break;
    const r = e.indexOf(';', i),
      u = r === -1 ? a : r;
    if (s > u) {
      i = e.lastIndexOf(';', s - 1) + 1;
      continue;
    }
    const o = Af(e, i, s),
      c = Cf(e, s, o),
      h = e.slice(o, c);
    if (n[h] === void 0) {
      let f = Af(e, s + 1, u),
        m = Cf(e, u, f);
      const y = l(e.slice(f, m));
      n[h] = y;
    }
    i = u + 1;
  } while (i < a);
  return n;
}
function Af(e, t, n) {
  do {
    const a = e.charCodeAt(t);
    if (a !== 32 && a !== 9) return t;
  } while (++t < n);
  return n;
}
function Cf(e, t, n) {
  for (; t > n; ) {
    const a = e.charCodeAt(--t);
    if (a !== 32 && a !== 9) return t + 1;
  }
  return n;
}
function fv(e, t, n) {
  const a = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!lv.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const l = a(t);
  if (!iv.test(l)) throw new TypeError(`argument val is invalid: ${t}`);
  let i = e + '=' + l;
  if (!n) return i;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    i += '; Max-Age=' + n.maxAge;
  }
  if (n.domain) {
    if (!sv.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    i += '; Domain=' + n.domain;
  }
  if (n.path) {
    if (!rv.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    i += '; Path=' + n.path;
  }
  if (n.expires) {
    if (!hv(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    i += '; Expires=' + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (i += '; HttpOnly'),
    n.secure && (i += '; Secure'),
    n.partitioned && (i += '; Partitioned'),
    n.priority)
  )
    switch (typeof n.priority == 'string' ? n.priority.toLowerCase() : void 0) {
      case 'low':
        i += '; Priority=Low';
        break;
      case 'medium':
        i += '; Priority=Medium';
        break;
      case 'high':
        i += '; Priority=High';
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == 'string' ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case 'strict':
        i += '; SameSite=Strict';
        break;
      case 'lax':
        i += '; SameSite=Lax';
        break;
      case 'none':
        i += '; SameSite=None';
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return i;
}
function dv(e) {
  if (e.indexOf('%') === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function hv(e) {
  return uv.call(e) === '[object Date]';
}
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Df = 'popstate';
function mv(e = {}) {
  function t(a, l) {
    let { pathname: i, search: s, hash: r } = a.location;
    return Bu(
      '',
      { pathname: i, search: s, hash: r },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(a, l) {
    return typeof l == 'string' ? l : Yl(l);
  }
  return pv(t, n, null, e);
}
function le(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function vt(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function gv() {
  return Math.random().toString(36).substring(2, 10);
}
function zf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Bu(e, t, n = null, a) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? Ya(t) : t),
    state: n,
    key: (t && t.key) || a || gv(),
  };
}
function Yl({ pathname: e = '/', search: t = '', hash: n = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    n && n !== '#' && (e += n.charAt(0) === '#' ? n : '#' + n),
    e
  );
}
function Ya(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let a = e.indexOf('?');
    a >= 0 && ((t.search = e.substring(a)), (e = e.substring(0, a))),
      e && (t.pathname = e);
  }
  return t;
}
function pv(e, t, n, a = {}) {
  let { window: l = document.defaultView, v5Compat: i = !1 } = a,
    s = l.history,
    r = 'POP',
    u = null,
    o = c();
  o == null && ((o = 0), s.replaceState({ ...s.state, idx: o }, ''));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function h() {
    r = 'POP';
    let b = c(),
      p = b == null ? null : b - o;
    (o = b), u && u({ action: r, location: x.location, delta: p });
  }
  function f(b, p) {
    r = 'PUSH';
    let g = Bu(x.location, b, p);
    o = c() + 1;
    let v = zf(g, o),
      S = x.createHref(g);
    try {
      s.pushState(v, '', S);
    } catch (w) {
      if (w instanceof DOMException && w.name === 'DataCloneError') throw w;
      l.location.assign(S);
    }
    i && u && u({ action: r, location: x.location, delta: 1 });
  }
  function m(b, p) {
    r = 'REPLACE';
    let g = Bu(x.location, b, p);
    o = c();
    let v = zf(g, o),
      S = x.createHref(g);
    s.replaceState(v, '', S),
      i && u && u({ action: r, location: x.location, delta: 0 });
  }
  function y(b) {
    let p = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      g = typeof b == 'string' ? b : Yl(b);
    return (
      (g = g.replace(/ $/, '%20')),
      le(
        p,
        `No window.location.(origin|href) available to create URL for href: ${g}`
      ),
      new URL(g, p)
    );
  }
  let x = {
    get action() {
      return r;
    },
    get location() {
      return e(l, s);
    },
    listen(b) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Df, h),
        (u = b),
        () => {
          l.removeEventListener(Df, h), (u = null);
        }
      );
    },
    createHref(b) {
      return t(l, b);
    },
    createURL: y,
    encodeLocation(b) {
      let p = y(b);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: m,
    go(b) {
      return s.go(b);
    },
  };
  return x;
}
function rg(e, t, n = '/') {
  return yv(e, t, n, !1);
}
function yv(e, t, n, a) {
  let l = typeof t == 'string' ? Ya(t) : t,
    i = gn(l.pathname || '/', n);
  if (i == null) return null;
  let s = ug(e);
  vv(s);
  let r = null;
  for (let u = 0; r == null && u < s.length; ++u) {
    let o = Av(i);
    r = Tv(s[u], o, a);
  }
  return r;
}
function ug(e, t = [], n = [], a = '') {
  let l = (i, s, r) => {
    let u = {
      relativePath: r === void 0 ? i.path || '' : r,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    u.relativePath.startsWith('/') &&
      (le(
        u.relativePath.startsWith(a),
        `Absolute route path "${u.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (u.relativePath = u.relativePath.slice(a.length)));
    let o = Ht([a, u.relativePath]),
      c = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (le(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${o}".`
      ),
      ug(i.children, t, c, o)),
      !(i.path == null && !i.index) &&
        t.push({ path: o, score: jv(o, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var r;
      if (i.path === '' || !((r = i.path) != null && r.includes('?'))) l(i, s);
      else for (let u of og(i.path)) l(i, s, u);
    }),
    t
  );
}
function og(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...a] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (a.length === 0) return l ? [i, ''] : [i];
  let s = og(a.join('/')),
    r = [];
  return (
    r.push(...s.map((u) => (u === '' ? i : [i, u].join('/')))),
    l && r.push(...s),
    r.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function vv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ov(
          t.routesMeta.map((a) => a.childrenIndex),
          n.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
var bv = /^:[\w-]+$/,
  xv = 3,
  Sv = 2,
  Ev = 1,
  wv = 10,
  Nv = -2,
  Uf = (e) => e === '*';
function jv(e, t) {
  let n = e.split('/'),
    a = n.length;
  return (
    n.some(Uf) && (a += Nv),
    t && (a += Sv),
    n
      .filter((l) => !Uf(l))
      .reduce((l, i) => l + (bv.test(i) ? xv : i === '' ? Ev : wv), a)
  );
}
function Ov(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, l) => a === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Tv(e, t, n = !1) {
  let { routesMeta: a } = e,
    l = {},
    i = '/',
    s = [];
  for (let r = 0; r < a.length; ++r) {
    let u = a[r],
      o = r === a.length - 1,
      c = i === '/' ? t : t.slice(i.length) || '/',
      h = Ss(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: o },
        c
      ),
      f = u.route;
    if (
      (!h &&
        o &&
        n &&
        !a[a.length - 1].route.index &&
        (h = Ss(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !h)
    )
      return null;
    Object.assign(l, h.params),
      s.push({
        params: l,
        pathname: Ht([i, h.pathname]),
        pathnameBase: Uv(Ht([i, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== '/' && (i = Ht([i, h.pathnameBase]));
  }
  return s;
}
function Ss(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, a] = Rv(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    s = i.replace(/(.)\/+$/, '$1'),
    r = l.slice(1);
  return {
    params: a.reduce((o, { paramName: c, isOptional: h }, f) => {
      if (c === '*') {
        let y = r[f] || '';
        s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const m = r[f];
      return (
        h && !m ? (o[c] = void 0) : (o[c] = (m || '').replace(/%2F/g, '/')), o
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function Rv(e, t = !1, n = !0) {
  vt(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
  );
  let a = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, r, u) => (
            a.push({ paramName: r, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (a.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), a]
  );
}
function Av(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      vt(
        !1,
        `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function gn(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    a = e.charAt(n);
  return a && a !== '/' ? null : e.slice(n) || '/';
}
function Cv(e, t = '/') {
  let {
    pathname: n,
    search: a = '',
    hash: l = '',
  } = typeof e == 'string' ? Ya(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Dv(n, t)) : t,
    search: Lv(a),
    hash: Mv(l),
  };
}
function Dv(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function _r(e, t, n, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function zv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function cg(e) {
  let t = zv(e);
  return t.map((n, a) => (a === t.length - 1 ? n.pathname : n.pathnameBase));
}
function fg(e, t, n, a = !1) {
  let l;
  typeof e == 'string'
    ? (l = Ya(e))
    : ((l = { ...e }),
      le(
        !l.pathname || !l.pathname.includes('?'),
        _r('?', 'pathname', 'search', l)
      ),
      le(
        !l.pathname || !l.pathname.includes('#'),
        _r('#', 'pathname', 'hash', l)
      ),
      le(!l.search || !l.search.includes('#'), _r('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    s = i ? '/' : l.pathname,
    r;
  if (s == null) r = n;
  else {
    let h = t.length - 1;
    if (!a && s.startsWith('..')) {
      let f = s.split('/');
      for (; f[0] === '..'; ) f.shift(), (h -= 1);
      l.pathname = f.join('/');
    }
    r = h >= 0 ? t[h] : '/';
  }
  let u = Cv(l, r),
    o = s && s !== '/' && s.endsWith('/'),
    c = (i || s === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (o || c) && (u.pathname += '/'), u;
}
var Ht = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Uv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Lv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Mv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function _v(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var dg = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(dg);
var Hv = ['GET', ...dg];
new Set(Hv);
var Va = E.createContext(null);
Va.displayName = 'DataRouter';
var Xs = E.createContext(null);
Xs.displayName = 'DataRouterState';
var hg = E.createContext({ isTransitioning: !1 });
hg.displayName = 'ViewTransition';
var Bv = E.createContext(new Map());
Bv.displayName = 'Fetchers';
var kv = E.createContext(null);
kv.displayName = 'Await';
var St = E.createContext(null);
St.displayName = 'Navigation';
var ai = E.createContext(null);
ai.displayName = 'Location';
var $t = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
$t.displayName = 'Route';
var Jo = E.createContext(null);
Jo.displayName = 'RouteError';
function qv(e, { relative: t } = {}) {
  le(
    li(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: n, navigator: a } = E.useContext(St),
    { hash: l, pathname: i, search: s } = si(e, { relative: t }),
    r = i;
  return (
    n !== '/' && (r = i === '/' ? n : Ht([n, i])),
    a.createHref({ pathname: r, search: s, hash: l })
  );
}
function li() {
  return E.useContext(ai) != null;
}
function vn() {
  return (
    le(
      li(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    E.useContext(ai).location
  );
}
var mg =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function gg(e) {
  E.useContext(St).static || E.useLayoutEffect(e);
}
function ii() {
  let { isDataRoute: e } = E.useContext($t);
  return e ? Iv() : Yv();
}
function Yv() {
  le(
    li(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = E.useContext(Va),
    { basename: t, navigator: n } = E.useContext(St),
    { matches: a } = E.useContext($t),
    { pathname: l } = vn(),
    i = JSON.stringify(cg(a)),
    s = E.useRef(!1);
  return (
    gg(() => {
      s.current = !0;
    }),
    E.useCallback(
      (u, o = {}) => {
        if ((vt(s.current, mg), !s.current)) return;
        if (typeof u == 'number') {
          n.go(u);
          return;
        }
        let c = fg(u, JSON.parse(i), l, o.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Ht([t, c.pathname])),
          (o.replace ? n.replace : n.push)(c, o.state, o);
      },
      [t, n, i, l, e]
    )
  );
}
E.createContext(null);
function si(e, { relative: t } = {}) {
  let { matches: n } = E.useContext($t),
    { pathname: a } = vn(),
    l = JSON.stringify(cg(n));
  return E.useMemo(() => fg(e, JSON.parse(l), a, t === 'path'), [e, l, a, t]);
}
function Vv(e, t) {
  return pg(e, t);
}
function pg(e, t, n, a) {
  var p;
  le(
    li(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: l } = E.useContext(St),
    { matches: i } = E.useContext($t),
    s = i[i.length - 1],
    r = s ? s.params : {},
    u = s ? s.pathname : '/',
    o = s ? s.pathnameBase : '/',
    c = s && s.route;
  {
    let g = (c && c.path) || '';
    yg(
      u,
      !c || g.endsWith('*') || g.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g === '/' ? '*' : `${g}/*`}">.`
    );
  }
  let h = vn(),
    f;
  if (t) {
    let g = typeof t == 'string' ? Ya(t) : t;
    le(
      o === '/' || ((p = g.pathname) == null ? void 0 : p.startsWith(o)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${o}" but pathname "${g.pathname}" was given in the \`location\` prop.`
    ),
      (f = g);
  } else f = h;
  let m = f.pathname || '/',
    y = m;
  if (o !== '/') {
    let g = o.replace(/^\//, '').split('/');
    y = '/' + m.replace(/^\//, '').split('/').slice(g.length).join('/');
  }
  let x = rg(e, { pathname: y });
  vt(
    c || x != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ),
    vt(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let b = Kv(
    x &&
      x.map((g) =>
        Object.assign({}, g, {
          params: Object.assign({}, r, g.params),
          pathname: Ht([
            o,
            l.encodeLocation
              ? l.encodeLocation(g.pathname).pathname
              : g.pathname,
          ]),
          pathnameBase:
            g.pathnameBase === '/'
              ? o
              : Ht([
                  o,
                  l.encodeLocation
                    ? l.encodeLocation(g.pathnameBase).pathname
                    : g.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    a
  );
  return t && b
    ? E.createElement(
        ai.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...f,
            },
            navigationType: 'POP',
          },
        },
        b
      )
    : b;
}
function $v() {
  let e = Pv(),
    t = _v(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    a = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: a },
    i = { padding: '2px 4px', backgroundColor: a },
    s = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (s = E.createElement(
      E.Fragment,
      null,
      E.createElement('p', null, '💿 Hey developer 👋'),
      E.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        E.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        E.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement('h2', null, 'Unexpected Application Error!'),
      E.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? E.createElement('pre', { style: l }, n) : null,
      s
    )
  );
}
var Gv = E.createElement($v, null),
  Xv = class extends E.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        'React Router caught the following error during render',
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            $t.Provider,
            { value: this.props.routeContext },
            E.createElement(Jo.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Qv({ routeContext: e, match: t, children: n }) {
  let a = E.useContext(Va);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = t.route.id),
    E.createElement($t.Provider, { value: e }, n)
  );
}
function Kv(e, t = [], n = null, a = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let l = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let u = l.findIndex(
      (o) => o.route.id && (i == null ? void 0 : i[o.route.id]) !== void 0
    );
    le(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (l = l.slice(0, Math.min(l.length, u + 1)));
  }
  let s = !1,
    r = -1;
  if (n)
    for (let u = 0; u < l.length; u++) {
      let o = l[u];
      if (
        ((o.route.HydrateFallback || o.route.hydrateFallbackElement) && (r = u),
        o.route.id)
      ) {
        let { loaderData: c, errors: h } = n,
          f =
            o.route.loader &&
            !c.hasOwnProperty(o.route.id) &&
            (!h || h[o.route.id] === void 0);
        if (o.route.lazy || f) {
          (s = !0), r >= 0 ? (l = l.slice(0, r + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((u, o, c) => {
    let h,
      f = !1,
      m = null,
      y = null;
    n &&
      ((h = i && o.route.id ? i[o.route.id] : void 0),
      (m = o.route.errorElement || Gv),
      s &&
        (r < 0 && c === 0
          ? (yg(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (f = !0),
            (y = null))
          : r === c &&
            ((f = !0), (y = o.route.hydrateFallbackElement || null))));
    let x = t.concat(l.slice(0, c + 1)),
      b = () => {
        let p;
        return (
          h
            ? (p = m)
            : f
              ? (p = y)
              : o.route.Component
                ? (p = E.createElement(o.route.Component, null))
                : o.route.element
                  ? (p = o.route.element)
                  : (p = u),
          E.createElement(Qv, {
            match: o,
            routeContext: { outlet: u, matches: x, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (o.route.ErrorBoundary || o.route.errorElement || c === 0)
      ? E.createElement(Xv, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: h,
          children: b(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : b();
  }, null);
}
function Fo(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Zv(e) {
  let t = E.useContext(Va);
  return le(t, Fo(e)), t;
}
function Jv(e) {
  let t = E.useContext(Xs);
  return le(t, Fo(e)), t;
}
function Fv(e) {
  let t = E.useContext($t);
  return le(t, Fo(e)), t;
}
function Wo(e) {
  let t = Fv(e),
    n = t.matches[t.matches.length - 1];
  return (
    le(
      n.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    n.route.id
  );
}
function Wv() {
  return Wo('useRouteId');
}
function Pv() {
  var a;
  let e = E.useContext(Jo),
    t = Jv('useRouteError'),
    n = Wo('useRouteError');
  return e !== void 0 ? e : (a = t.errors) == null ? void 0 : a[n];
}
function Iv() {
  let { router: e } = Zv('useNavigate'),
    t = Wo('useNavigate'),
    n = E.useRef(!1);
  return (
    gg(() => {
      n.current = !0;
    }),
    E.useCallback(
      async (l, i = {}) => {
        vt(n.current, mg),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...i }));
      },
      [e, t]
    )
  );
}
var Lf = {};
function yg(e, t, n) {
  !t && !Lf[e] && ((Lf[e] = !0), vt(!1, n));
}
E.memo(eb);
function eb({ routes: e, future: t, state: n }) {
  return pg(e, void 0, n, t);
}
function _e(e) {
  le(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function tb({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: a = 'POP',
  navigator: l,
  static: i = !1,
}) {
  le(
    !li(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let s = e.replace(/^\/*/, '/'),
    r = E.useMemo(
      () => ({ basename: s, navigator: l, static: i, future: {} }),
      [s, l, i]
    );
  typeof n == 'string' && (n = Ya(n));
  let {
      pathname: u = '/',
      search: o = '',
      hash: c = '',
      state: h = null,
      key: f = 'default',
    } = n,
    m = E.useMemo(() => {
      let y = gn(u, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: o, hash: c, state: h, key: f },
            navigationType: a,
          };
    }, [s, u, o, c, h, f, a]);
  return (
    vt(
      m != null,
      `<Router basename="${s}"> is not able to match the URL "${u}${o}${c}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    m == null
      ? null
      : E.createElement(
          St.Provider,
          { value: r },
          E.createElement(ai.Provider, { children: t, value: m })
        )
  );
}
function nb({ children: e, location: t }) {
  return Vv(ku(e), t);
}
function ku(e, t = []) {
  let n = [];
  return (
    E.Children.forEach(e, (a, l) => {
      if (!E.isValidElement(a)) return;
      let i = [...t, l];
      if (a.type === E.Fragment) {
        n.push.apply(n, ku(a.props.children, i));
        return;
      }
      le(
        a.type === _e,
        `[${typeof a.type == 'string' ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        le(
          !a.props.index || !a.props.children,
          'An index route cannot have child routes.'
        );
      let s = {
        id: a.props.id || i.join('-'),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        hydrateFallbackElement: a.props.hydrateFallbackElement,
        HydrateFallback: a.props.HydrateFallback,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.hasErrorBoundary === !0 ||
          a.props.ErrorBoundary != null ||
          a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      a.props.children && (s.children = ku(a.props.children, i)), n.push(s);
    }),
    n
  );
}
var Yi = 'get',
  Vi = 'application/x-www-form-urlencoded';
function Qs(e) {
  return e != null && typeof e.tagName == 'string';
}
function ab(e) {
  return Qs(e) && e.tagName.toLowerCase() === 'button';
}
function lb(e) {
  return Qs(e) && e.tagName.toLowerCase() === 'form';
}
function ib(e) {
  return Qs(e) && e.tagName.toLowerCase() === 'input';
}
function sb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rb(e, t) {
  return e.button === 0 && (!t || t === '_self') && !sb(e);
}
var Oi = null;
function ub() {
  if (Oi === null)
    try {
      new FormData(document.createElement('form'), 0), (Oi = !1);
    } catch {
      Oi = !0;
    }
  return Oi;
}
var ob = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Hr(e) {
  return e != null && !ob.has(e)
    ? (vt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vi}"`
      ),
      null)
    : e;
}
function cb(e, t) {
  let n, a, l, i, s;
  if (lb(e)) {
    let r = e.getAttribute('action');
    (a = r ? gn(r, t) : null),
      (n = e.getAttribute('method') || Yi),
      (l = Hr(e.getAttribute('enctype')) || Vi),
      (i = new FormData(e));
  } else if (ab(e) || (ib(e) && (e.type === 'submit' || e.type === 'image'))) {
    let r = e.form;
    if (r == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute('formaction') || r.getAttribute('action');
    if (
      ((a = u ? gn(u, t) : null),
      (n = e.getAttribute('formmethod') || r.getAttribute('method') || Yi),
      (l =
        Hr(e.getAttribute('formenctype')) ||
        Hr(r.getAttribute('enctype')) ||
        Vi),
      (i = new FormData(r, e)),
      !ub())
    ) {
      let { name: o, type: c, value: h } = e;
      if (c === 'image') {
        let f = o ? `${o}.` : '';
        i.append(`${f}x`, '0'), i.append(`${f}y`, '0');
      } else o && i.append(o, h);
    }
  } else {
    if (Qs(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = Yi), (a = null), (l = Vi), (s = e);
  }
  return (
    i && l === 'text/plain' && ((s = i), (i = void 0)),
    { action: a, method: n.toLowerCase(), encType: l, formData: i, body: s }
  );
}
function Po(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
async function fb(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function db(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function hb(e, t, n) {
  let a = await Promise.all(
    e.map(async (l) => {
      let i = t.routes[l.route.id];
      if (i) {
        let s = await fb(i, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return yb(
    a
      .flat(1)
      .filter(db)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' }
      )
  );
}
function Mf(e, t, n, a, l, i) {
  let s = (u, o) => (n[o] ? u.route.id !== n[o].route.id : !0),
    r = (u, o) => {
      var c;
      return (
        n[o].pathname !== u.pathname ||
        (((c = n[o].route.path) == null ? void 0 : c.endsWith('*')) &&
          n[o].params['*'] !== u.params['*'])
      );
    };
  return i === 'assets'
    ? t.filter((u, o) => s(u, o) || r(u, o))
    : i === 'data'
      ? t.filter((u, o) => {
          var h;
          let c = a.routes[u.route.id];
          if (!c || !c.hasLoader) return !1;
          if (s(u, o) || r(u, o)) return !0;
          if (u.route.shouldRevalidate) {
            let f = u.route.shouldRevalidate({
              currentUrl: new URL(
                l.pathname + l.search + l.hash,
                window.origin
              ),
              currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: u.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof f == 'boolean') return f;
          }
          return !0;
        })
      : [];
}
function mb(e, t) {
  return gb(
    e
      .map((n) => {
        let a = t.routes[n.route.id];
        if (!a) return [];
        let l = [a.module];
        return a.imports && (l = l.concat(a.imports)), l;
      })
      .flat(1)
  );
}
function gb(e) {
  return [...new Set(e)];
}
function pb(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let a of n) t[a] = e[a];
  return t;
}
function yb(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((a, l) => {
      let i = JSON.stringify(pb(l));
      return n.has(i) || (n.add(i), a.push({ key: i, link: l })), a;
    }, [])
  );
}
function vb(e) {
  let t =
    typeof e == 'string'
      ? new URL(
          e,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : e;
  return (
    t.pathname === '/'
      ? (t.pathname = '_root.data')
      : (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`),
    t
  );
}
function bb() {
  let e = E.useContext(Va);
  return (
    Po(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function xb() {
  let e = E.useContext(Xs);
  return (
    Po(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var Io = E.createContext(void 0);
Io.displayName = 'FrameworkContext';
function vg() {
  let e = E.useContext(Io);
  return (
    Po(e, 'You must render this element inside a <HydratedRouter> element'), e
  );
}
function Sb(e, t) {
  let n = E.useContext(Io),
    [a, l] = E.useState(!1),
    [i, s] = E.useState(!1),
    {
      onFocus: r,
      onBlur: u,
      onMouseEnter: o,
      onMouseLeave: c,
      onTouchStart: h,
    } = t,
    f = E.useRef(null);
  E.useEffect(() => {
    if ((e === 'render' && s(!0), e === 'viewport')) {
      let x = (p) => {
          p.forEach((g) => {
            s(g.isIntersecting);
          });
        },
        b = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        f.current && b.observe(f.current),
        () => {
          b.disconnect();
        }
      );
    }
  }, [e]),
    E.useEffect(() => {
      if (a) {
        let x = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [a]);
  let m = () => {
      l(!0);
    },
    y = () => {
      l(!1), s(!1);
    };
  return n
    ? e !== 'intent'
      ? [i, f, {}]
      : [
          i,
          f,
          {
            onFocus: Ia(r, m),
            onBlur: Ia(u, y),
            onMouseEnter: Ia(o, m),
            onMouseLeave: Ia(c, y),
            onTouchStart: Ia(h, m),
          },
        ]
    : [!1, f, {}];
}
function Ia(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Eb({ page: e, ...t }) {
  let { router: n } = bb(),
    a = E.useMemo(() => rg(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return a
    ? E.createElement(Nb, { page: e, matches: a, ...t })
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function wb(e) {
  let { manifest: t, routeModules: n } = vg(),
    [a, l] = E.useState([]);
  return (
    E.useEffect(() => {
      let i = !1;
      return (
        hb(e, t, n).then((s) => {
          i || l(s);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, n]),
    a
  );
}
function Nb({ page: e, matches: t, ...n }) {
  let a = vn(),
    { manifest: l, routeModules: i } = vg(),
    { loaderData: s, matches: r } = xb(),
    u = E.useMemo(() => Mf(e, t, r, l, a, 'data'), [e, t, r, l, a]),
    o = E.useMemo(() => Mf(e, t, r, l, a, 'assets'), [e, t, r, l, a]),
    c = E.useMemo(() => {
      if (e === a.pathname + a.search + a.hash) return [];
      let m = new Set(),
        y = !1;
      if (
        (t.forEach((b) => {
          var g;
          let p = l.routes[b.route.id];
          !p ||
            !p.hasLoader ||
            ((!u.some((v) => v.route.id === b.route.id) &&
              b.route.id in s &&
              (g = i[b.route.id]) != null &&
              g.shouldRevalidate) ||
            p.hasClientLoader
              ? (y = !0)
              : m.add(b.route.id));
        }),
        m.size === 0)
      )
        return [];
      let x = vb(e);
      return (
        y &&
          m.size > 0 &&
          x.searchParams.set(
            '_routes',
            t
              .filter((b) => m.has(b.route.id))
              .map((b) => b.route.id)
              .join(',')
          ),
        [x.pathname + x.search]
      );
    }, [s, a, l, u, t, e, i]),
    h = E.useMemo(() => mb(o, l), [o, l]),
    f = wb(o);
  return E.createElement(
    E.Fragment,
    null,
    c.map((m) =>
      E.createElement('link', {
        key: m,
        rel: 'prefetch',
        as: 'fetch',
        href: m,
        ...n,
      })
    ),
    h.map((m) =>
      E.createElement('link', { key: m, rel: 'modulepreload', href: m, ...n })
    ),
    f.map(({ key: m, link: y }) => E.createElement('link', { key: m, ...y }))
  );
}
function jb(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var bg =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  bg && (window.__reactRouterVersion = '7.0.2');
} catch {}
function Ob({ basename: e, children: t, window: n }) {
  let a = E.useRef();
  a.current == null && (a.current = mv({ window: n, v5Compat: !0 }));
  let l = a.current,
    [i, s] = E.useState({ action: l.action, location: l.location }),
    r = E.useCallback(
      (u) => {
        E.startTransition(() => s(u));
      },
      [s]
    );
  return (
    E.useLayoutEffect(() => l.listen(r), [l, r]),
    E.createElement(tb, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: l,
    })
  );
}
var xg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ec = E.forwardRef(function (
    {
      onClick: t,
      discover: n = 'render',
      prefetch: a = 'none',
      relative: l,
      reloadDocument: i,
      replace: s,
      state: r,
      target: u,
      to: o,
      preventScrollReset: c,
      viewTransition: h,
      ...f
    },
    m
  ) {
    let { basename: y } = E.useContext(St),
      x = typeof o == 'string' && xg.test(o),
      b,
      p = !1;
    if (typeof o == 'string' && x && ((b = o), bg))
      try {
        let D = new URL(window.location.href),
          C = o.startsWith('//') ? new URL(D.protocol + o) : new URL(o),
          L = gn(C.pathname, y);
        C.origin === D.origin && L != null
          ? (o = L + C.search + C.hash)
          : (p = !0);
      } catch {
        vt(
          !1,
          `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let g = qv(o, { relative: l }),
      [v, S, w] = Sb(a, f),
      O = Cb(o, {
        replace: s,
        state: r,
        target: u,
        preventScrollReset: c,
        relative: l,
        viewTransition: h,
      });
    function T(D) {
      t && t(D), D.defaultPrevented || O(D);
    }
    let R = E.createElement('a', {
      ...f,
      ...w,
      href: b || g,
      onClick: p || i ? t : T,
      ref: jb(m, S),
      target: u,
      'data-discover': !x && n === 'render' ? 'true' : void 0,
    });
    return v && !x
      ? E.createElement(E.Fragment, null, R, E.createElement(Eb, { page: g }))
      : R;
  });
ec.displayName = 'Link';
var Tb = E.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: n = !1,
    className: a = '',
    end: l = !1,
    style: i,
    to: s,
    viewTransition: r,
    children: u,
    ...o
  },
  c
) {
  let h = si(s, { relative: o.relative }),
    f = vn(),
    m = E.useContext(Xs),
    { navigator: y, basename: x } = E.useContext(St),
    b = m != null && Mb(h) && r === !0,
    p = y.encodeLocation ? y.encodeLocation(h).pathname : h.pathname,
    g = f.pathname,
    v =
      m && m.navigation && m.navigation.location
        ? m.navigation.location.pathname
        : null;
  n ||
    ((g = g.toLowerCase()),
    (v = v ? v.toLowerCase() : null),
    (p = p.toLowerCase())),
    v && x && (v = gn(v, x) || v);
  const S = p !== '/' && p.endsWith('/') ? p.length - 1 : p.length;
  let w = g === p || (!l && g.startsWith(p) && g.charAt(S) === '/'),
    O =
      v != null &&
      (v === p || (!l && v.startsWith(p) && v.charAt(p.length) === '/')),
    T = { isActive: w, isPending: O, isTransitioning: b },
    R = w ? t : void 0,
    D;
  typeof a == 'function'
    ? (D = a(T))
    : (D = [
        a,
        w ? 'active' : null,
        O ? 'pending' : null,
        b ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let C = typeof i == 'function' ? i(T) : i;
  return E.createElement(
    ec,
    {
      ...o,
      'aria-current': R,
      className: D,
      ref: c,
      style: C,
      to: s,
      viewTransition: r,
    },
    typeof u == 'function' ? u(T) : u
  );
});
Tb.displayName = 'NavLink';
var Rb = E.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: n,
      reloadDocument: a,
      replace: l,
      state: i,
      method: s = Yi,
      action: r,
      onSubmit: u,
      relative: o,
      preventScrollReset: c,
      viewTransition: h,
      ...f
    },
    m
  ) => {
    let y = Ub(),
      x = Lb(r, { relative: o }),
      b = s.toLowerCase() === 'get' ? 'get' : 'post',
      p = typeof r == 'string' && xg.test(r),
      g = (v) => {
        if ((u && u(v), v.defaultPrevented)) return;
        v.preventDefault();
        let S = v.nativeEvent.submitter,
          w = (S == null ? void 0 : S.getAttribute('formmethod')) || s;
        y(S || v.currentTarget, {
          fetcherKey: t,
          method: w,
          navigate: n,
          replace: l,
          state: i,
          relative: o,
          preventScrollReset: c,
          viewTransition: h,
        });
      };
    return E.createElement('form', {
      ref: m,
      method: b,
      action: x,
      onSubmit: a ? u : g,
      ...f,
      'data-discover': !p && e === 'render' ? 'true' : void 0,
    });
  }
);
Rb.displayName = 'Form';
function Ab(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Sg(e) {
  let t = E.useContext(Va);
  return le(t, Ab(e)), t;
}
function Cb(
  e,
  {
    target: t,
    replace: n,
    state: a,
    preventScrollReset: l,
    relative: i,
    viewTransition: s,
  } = {}
) {
  let r = ii(),
    u = vn(),
    o = si(e, { relative: i });
  return E.useCallback(
    (c) => {
      if (rb(c, t)) {
        c.preventDefault();
        let h = n !== void 0 ? n : Yl(u) === Yl(o);
        r(e, {
          replace: h,
          state: a,
          preventScrollReset: l,
          relative: i,
          viewTransition: s,
        });
      }
    },
    [u, r, o, n, a, t, e, l, i, s]
  );
}
var Db = 0,
  zb = () => `__${String(++Db)}__`;
function Ub() {
  let { router: e } = Sg('useSubmit'),
    { basename: t } = E.useContext(St),
    n = Wv();
  return E.useCallback(
    async (a, l = {}) => {
      let { action: i, method: s, encType: r, formData: u, body: o } = cb(a, t);
      if (l.navigate === !1) {
        let c = l.fetcherKey || zb();
        await e.fetch(c, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: o,
          formMethod: l.method || s,
          formEncType: l.encType || r,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: o,
          formMethod: l.method || s,
          formEncType: l.encType || r,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, t, n]
  );
}
function Lb(e, { relative: t } = {}) {
  let { basename: n } = E.useContext(St),
    a = E.useContext($t);
  le(a, 'useFormAction must be used inside a RouteContext');
  let [l] = a.matches.slice(-1),
    i = { ...si(e || '.', { relative: t }) },
    s = vn();
  if (e == null) {
    i.search = s.search;
    let r = new URLSearchParams(i.search),
      u = r.getAll('index');
    if (u.some((c) => c === '')) {
      r.delete('index'),
        u.filter((h) => h).forEach((h) => r.append('index', h));
      let c = r.toString();
      i.search = c ? `?${c}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      l.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    n !== '/' && (i.pathname = i.pathname === '/' ? n : Ht([n, i.pathname])),
    Yl(i)
  );
}
function Mb(e, t = {}) {
  let n = E.useContext(hg);
  le(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = Sg('useViewTransitionState'),
    l = si(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = gn(n.currentLocation.pathname, a) || n.currentLocation.pathname,
    s = gn(n.nextLocation.pathname, a) || n.nextLocation.pathname;
  return Ss(l.pathname, s) != null || Ss(l.pathname, i) != null;
}
new TextEncoder();
const M = (e) => typeof e == 'string',
  el = () => {
    let e, t;
    const n = new Promise((a, l) => {
      (e = a), (t = l);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  _f = (e) => (e == null ? '' : '' + e),
  _b = (e, t, n) => {
    e.forEach((a) => {
      t[a] && (n[a] = t[a]);
    });
  },
  Hb = /###/g,
  Hf = (e) => (e && e.indexOf('###') > -1 ? e.replace(Hb, '.') : e),
  Bf = (e) => !e || M(e),
  jl = (e, t, n) => {
    const a = M(t) ? t.split('.') : t;
    let l = 0;
    for (; l < a.length - 1; ) {
      if (Bf(e)) return {};
      const i = Hf(a[l]);
      !e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++l;
    }
    return Bf(e) ? {} : { obj: e, k: Hf(a[l]) };
  },
  kf = (e, t, n) => {
    const { obj: a, k: l } = jl(e, t, Object);
    if (a !== void 0 || t.length === 1) {
      a[l] = n;
      return;
    }
    let i = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      r = jl(e, s, Object);
    for (; r.obj === void 0 && s.length; )
      (i = `${s[s.length - 1]}.${i}`),
        (s = s.slice(0, s.length - 1)),
        (r = jl(e, s, Object)),
        r != null &&
          r.obj &&
          typeof r.obj[`${r.k}.${i}`] < 'u' &&
          (r.obj = void 0);
    r.obj[`${r.k}.${i}`] = n;
  },
  Bb = (e, t, n, a) => {
    const { obj: l, k: i } = jl(e, t, Object);
    (l[i] = l[i] || []), l[i].push(n);
  },
  Es = (e, t) => {
    const { obj: n, k: a } = jl(e, t);
    if (n && Object.prototype.hasOwnProperty.call(n, a)) return n[a];
  },
  kb = (e, t, n) => {
    const a = Es(e, n);
    return a !== void 0 ? a : Es(t, n);
  },
  Eg = (e, t, n) => {
    for (const a in t)
      a !== '__proto__' &&
        a !== 'constructor' &&
        (a in e
          ? M(e[a]) ||
            e[a] instanceof String ||
            M(t[a]) ||
            t[a] instanceof String
            ? n && (e[a] = t[a])
            : Eg(e[a], t[a], n)
          : (e[a] = t[a]));
    return e;
  },
  In = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var qb = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const Yb = (e) => (M(e) ? e.replace(/[&<>"'\/]/g, (t) => qb[t]) : e);
class Vb {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const a = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, a),
      this.regExpQueue.push(t),
      a
    );
  }
}
const $b = [' ', ',', '?', '!', ';'],
  Gb = new Vb(20),
  Xb = (e, t, n) => {
    (t = t || ''), (n = n || '');
    const a = $b.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (a.length === 0) return !0;
    const l = Gb.getRegExp(
      `(${a.map((s) => (s === '?' ? '\\?' : s)).join('|')})`
    );
    let i = !l.test(e);
    if (!i) {
      const s = e.indexOf(n);
      s > 0 && !l.test(e.substring(0, s)) && (i = !0);
    }
    return i;
  },
  qu = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!e) return;
    if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
    const a = t.split(n);
    let l = e;
    for (let i = 0; i < a.length; ) {
      if (!l || typeof l != 'object') return;
      let s,
        r = '';
      for (let u = i; u < a.length; ++u)
        if ((u !== i && (r += n), (r += a[u]), (s = l[r]), s !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof s) > -1 &&
            u < a.length - 1
          )
            continue;
          i += u - i + 1;
          break;
        }
      l = s;
    }
    return l;
  },
  ws = (e) => (e == null ? void 0 : e.replace('_', '-')),
  Qb = {
    type: 'logger',
    log(e) {
      this.output('log', e);
    },
    warn(e) {
      this.output('warn', e);
    },
    error(e) {
      this.output('error', e);
    },
    output(e, t) {
      var n, a;
      (a =
        (n = console == null ? void 0 : console[e]) == null
          ? void 0
          : n.apply) == null || a.call(n, console, t);
    },
  };
class Ns {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || Qb),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return this.forward(n, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return this.forward(n, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return this.forward(n, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, n, a, l) {
    return l && !this.debug
      ? null
      : (M(t[0]) && (t[0] = `${a}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Ns(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Ns(this.logger, t)
    );
  }
}
var ht = new Ns();
class Ks {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(' ').forEach((a) => {
        this.observers[a] || (this.observers[a] = new Map());
        const l = this.observers[a].get(n) || 0;
        this.observers[a].set(n, l + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), l = 1;
      l < n;
      l++
    )
      a[l - 1] = arguments[l];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((s) => {
        let [r, u] = s;
        for (let o = 0; o < u; o++) r(...a);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((s) => {
          let [r, u] = s;
          for (let o = 0; o < u; o++) r.apply(r, [t, ...a]);
        });
  }
}
class qf extends Ks {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, a) {
    var o, c;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i =
        l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      s =
        l.ignoreJSONStructure !== void 0
          ? l.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let r;
    t.indexOf('.') > -1
      ? (r = t.split('.'))
      : ((r = [t, n]),
        a &&
          (Array.isArray(a)
            ? r.push(...a)
            : M(a) && i
              ? r.push(...a.split(i))
              : r.push(a)));
    const u = Es(this.data, r);
    return (
      !u &&
        !n &&
        !a &&
        t.indexOf('.') > -1 &&
        ((t = r[0]), (n = r[1]), (a = r.slice(2).join('.'))),
      u || !s || !M(a)
        ? u
        : qu(
            (c = (o = this.data) == null ? void 0 : o[t]) == null
              ? void 0
              : c[n],
            a,
            i
          )
    );
  }
  addResource(t, n, a, l) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let r = [t, n];
    a && (r = r.concat(s ? a.split(s) : a)),
      t.indexOf('.') > -1 && ((r = t.split('.')), (l = n), (n = r[1])),
      this.addNamespaces(n),
      kf(this.data, r, l),
      i.silent || this.emit('added', t, n, a, l);
  }
  addResources(t, n, a) {
    let l =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const i in a)
      (M(a[i]) || Array.isArray(a[i])) &&
        this.addResource(t, n, i, a[i], { silent: !0 });
    l.silent || this.emit('added', t, n, a);
  }
  addResourceBundle(t, n, a, l, i) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      r = [t, n];
    t.indexOf('.') > -1 && ((r = t.split('.')), (l = a), (a = n), (n = r[1])),
      this.addNamespaces(n);
    let u = Es(this.data, r) || {};
    s.skipCopy || (a = JSON.parse(JSON.stringify(a))),
      l ? Eg(u, a, i) : (u = { ...u, ...a }),
      kf(this.data, r, u),
      s.silent || this.emit('added', t, n, a);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (l) => n[l] && Object.keys(n[l]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var wg = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, a, l) {
    return (
      e.forEach((i) => {
        var s;
        t =
          ((s = this.processors[i]) == null ? void 0 : s.process(t, n, a, l)) ??
          t;
      }),
      t
    );
  },
};
const Yf = {};
class js extends Ks {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      _b(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = ht.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const a = this.resolve(t, n);
    return (a == null ? void 0 : a.res) !== void 0;
  }
  extractFromKey(t, n) {
    let a = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ':');
    const l =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const s = a && t.indexOf(a) > -1,
      r =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !Xb(t, a, l);
    if (s && !r) {
      const u = t.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0) return { key: t, namespaces: M(i) ? [i] : i };
      const o = t.split(a);
      (a !== l || (a === l && this.options.ns.indexOf(o[0]) > -1)) &&
        (i = o.shift()),
        (t = o.join(l));
    }
    return { key: t, namespaces: M(i) ? [i] : i };
  }
  translate(t, n, a) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const l =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      i =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: r } = this.extractFromKey(t[t.length - 1], n),
      u = r[r.length - 1],
      o = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((o == null ? void 0 : o.toLowerCase()) === 'cimode') {
      if (c) {
        const S = n.nsSeparator || this.options.nsSeparator;
        return l
          ? {
              res: `${u}${S}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: o,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${u}${S}${s}`;
      }
      return l
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: o,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const h = this.resolve(t, n);
    let f = h == null ? void 0 : h.res;
    const m = (h == null ? void 0 : h.usedKey) || s,
      y = (h == null ? void 0 : h.exactUsedKey) || s,
      x = Object.prototype.toString.apply(f),
      b = ['[object Number]', '[object Function]', '[object RegExp]'],
      p = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      g = !this.i18nFormat || this.i18nFormat.handleAsObject,
      v = !M(f) && typeof f != 'boolean' && typeof f != 'number';
    if (g && f && v && b.indexOf(x) < 0 && !(M(p) && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          );
        const S = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(m, f, { ...n, ns: r })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return l
          ? ((h.res = S), (h.usedParams = this.getUsedParamsDetails(n)), h)
          : S;
      }
      if (i) {
        const S = Array.isArray(f),
          w = S ? [] : {},
          O = S ? y : m;
        for (const T in f)
          if (Object.prototype.hasOwnProperty.call(f, T)) {
            const R = `${O}${i}${T}`;
            (w[T] = this.translate(R, { ...n, joinArrays: !1, ns: r })),
              w[T] === R && (w[T] = f[T]);
          }
        f = w;
      }
    } else if (g && M(p) && Array.isArray(f))
      (f = f.join(p)), f && (f = this.extendTranslation(f, t, n, a));
    else {
      let S = !1,
        w = !1;
      const O = n.count !== void 0 && !M(n.count),
        T = js.hasDefaultValue(n),
        R = O ? this.pluralResolver.getSuffix(o, n.count, n) : '',
        D =
          n.ordinal && O
            ? this.pluralResolver.getSuffix(o, n.count, { ordinal: !1 })
            : '',
        C = O && !n.ordinal && n.count === 0,
        L =
          (C && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${R}`] ||
          n[`defaultValue${D}`] ||
          n.defaultValue;
      !this.isValidLookup(f) && T && ((S = !0), (f = L)),
        this.isValidLookup(f) || ((w = !0), (f = s));
      const ot =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          w
            ? void 0
            : f,
        Ce = T && L !== f && this.options.updateMissing;
      if (w || S || Ce) {
        if (
          (this.logger.log(
            Ce ? 'updateKey' : 'missingKey',
            o,
            u,
            s,
            Ce ? L : f
          ),
          i)
        ) {
          const U = this.resolve(s, { ...n, keySeparator: !1 });
          U &&
            U.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let De = [];
        const A = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && A && A[0])
          for (let U = 0; U < A.length; U++) De.push(A[U]);
        else
          this.options.saveMissingTo === 'all'
            ? (De = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : De.push(n.lng || this.language);
        const z = (U, G, I) => {
          var Sn;
          const xn = T && I !== f ? I : ot;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(U, u, G, xn, Ce, n)
            : (Sn = this.backendConnector) != null &&
              Sn.saveMissing &&
              this.backendConnector.saveMissing(U, u, G, xn, Ce, n),
            this.emit('missingKey', U, u, G, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && O
            ? De.forEach((U) => {
                const G = this.pluralResolver.getSuffixes(U, n);
                C &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  G.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  G.push(`${this.options.pluralSeparator}zero`),
                  G.forEach((I) => {
                    z([U], s + I, n[`defaultValue${I}`] || L);
                  });
              })
            : z(De, s, L));
      }
      (f = this.extendTranslation(f, t, n, h, a)),
        w &&
          f === s &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${u}:${s}`),
        (w || S) &&
          this.options.parseMissingKeyHandler &&
          (f = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s,
            S ? f : void 0
          ));
    }
    return l
      ? ((h.res = f), (h.usedParams = this.getUsedParamsDetails(n)), h)
      : f;
  }
  extendTranslation(t, n, a, l, i) {
    var o, c;
    var s = this;
    if ((o = this.i18nFormat) != null && o.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...a },
        a.lng || this.language || l.usedLng,
        l.usedNS,
        l.usedKey,
        { resolved: l }
      );
    else if (!a.skipInterpolation) {
      a.interpolation &&
        this.interpolator.init({
          ...a,
          interpolation: { ...this.options.interpolation, ...a.interpolation },
        });
      const h =
        M(t) &&
        (((c = a == null ? void 0 : a.interpolation) == null
          ? void 0
          : c.skipOnVariables) !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let f;
      if (h) {
        const y = t.match(this.interpolator.nestingRegexp);
        f = y && y.length;
      }
      let m = a.replace && !M(a.replace) ? a.replace : a;
      if (
        (this.options.interpolation.defaultVariables &&
          (m = { ...this.options.interpolation.defaultVariables, ...m }),
        (t = this.interpolator.interpolate(
          t,
          m,
          a.lng || this.language || l.usedLng,
          a
        )),
        h)
      ) {
        const y = t.match(this.interpolator.nestingRegexp),
          x = y && y.length;
        f < x && (a.nest = !1);
      }
      !a.lng && l && l.res && (a.lng = this.language || l.usedLng),
        a.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var y = arguments.length, x = new Array(y), b = 0;
                b < y;
                b++
              )
                x[b] = arguments[b];
              return (i == null ? void 0 : i[0]) === x[0] && !a.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${x[0]} in key: ${n[0]}`
                  ),
                  null)
                : s.translate(...x, n);
            },
            a
          )),
        a.interpolation && this.interpolator.reset();
    }
    const r = a.postProcess || this.options.postProcess,
      u = M(r) ? [r] : r;
    return (
      t != null &&
        u != null &&
        u.length &&
        a.applyPostProcessor !== !1 &&
        (t = wg.handle(
          u,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...l,
                  usedParams: this.getUsedParamsDetails(a),
                },
                ...a,
              }
            : a,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a,
      l,
      i,
      s,
      r;
    return (
      M(t) && (t = [t]),
      t.forEach((u) => {
        if (this.isValidLookup(a)) return;
        const o = this.extractFromKey(u, n),
          c = o.key;
        l = c;
        let h = o.namespaces;
        this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && !M(n.count),
          m = f && !n.ordinal && n.count === 0,
          y =
            n.context !== void 0 &&
            (M(n.context) || typeof n.context == 'number') &&
            n.context !== '',
          x = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        h.forEach((b) => {
          var p, g;
          this.isValidLookup(a) ||
            ((r = b),
            !Yf[`${x[0]}-${b}`] &&
              (p = this.utils) != null &&
              p.hasLoadedNamespace &&
              !((g = this.utils) != null && g.hasLoadedNamespace(r)) &&
              ((Yf[`${x[0]}-${b}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${x.join(', ')}" won't get resolved as namespace "${r}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            x.forEach((v) => {
              var O;
              if (this.isValidLookup(a)) return;
              s = v;
              const S = [c];
              if ((O = this.i18nFormat) != null && O.addLookupKeys)
                this.i18nFormat.addLookupKeys(S, c, v, b, n);
              else {
                let T;
                f && (T = this.pluralResolver.getSuffix(v, n.count, n));
                const R = `${this.options.pluralSeparator}zero`,
                  D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (S.push(c + T),
                    n.ordinal &&
                      T.indexOf(D) === 0 &&
                      S.push(c + T.replace(D, this.options.pluralSeparator)),
                    m && S.push(c + R)),
                  y)
                ) {
                  const C = `${c}${this.options.contextSeparator}${n.context}`;
                  S.push(C),
                    f &&
                      (S.push(C + T),
                      n.ordinal &&
                        T.indexOf(D) === 0 &&
                        S.push(C + T.replace(D, this.options.pluralSeparator)),
                      m && S.push(C + R));
                }
              }
              let w;
              for (; (w = S.pop()); )
                this.isValidLookup(a) ||
                  ((i = w), (a = this.getResource(v, b, w, n)));
            }));
        });
      }),
      { res: a, usedKey: l, exactUsedKey: i, usedLng: s, usedNS: r }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    );
  }
  getResource(t, n, a) {
    var i;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (i = this.i18nFormat) != null && i.getResource
      ? this.i18nFormat.getResource(t, n, a, l)
      : this.resourceStore.getResource(t, n, a, l);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      a = t.replace && !M(t.replace);
    let l = a ? t.replace : t;
    if (
      (a && typeof t.count < 'u' && (l.count = t.count),
      this.options.interpolation.defaultVariables &&
        (l = { ...this.options.interpolation.defaultVariables, ...l }),
      !a)
    ) {
      l = { ...l };
      for (const i of n) delete l[i];
    }
    return l;
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue';
    for (const a in t)
      if (
        Object.prototype.hasOwnProperty.call(t, a) &&
        n === a.substring(0, n.length) &&
        t[a] !== void 0
      )
        return !0;
    return !1;
  }
}
class Vf {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = ht.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = ws(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = ws(t)), !t || t.indexOf('-') < 0)) return t;
    const n = t.split('-');
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (M(t) && t.indexOf('-') > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {}
      return (
        n && this.options.lowerCaseLng && (n = n.toLowerCase()),
        n || (this.options.lowerCaseLng ? t.toLowerCase() : t)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((a) => {
        if (n) return;
        const l = this.formatLanguageCode(a);
        (!this.options.supportedLngs || this.isSupportedCode(l)) && (n = l);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((a) => {
          if (n) return;
          const l = this.getLanguagePartFromCode(a);
          if (this.isSupportedCode(l)) return (n = l);
          n = this.options.supportedLngs.find((i) => {
            if (i === l) return i;
            if (
              !(i.indexOf('-') < 0 && l.indexOf('-') < 0) &&
              ((i.indexOf('-') > 0 &&
                l.indexOf('-') < 0 &&
                i.substring(0, i.indexOf('-')) === l) ||
                (i.indexOf(l) === 0 && l.length > 1))
            )
              return i;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == 'function' && (t = t(n)),
      M(t) && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let a = t[n];
    return (
      a || (a = t[this.getScriptPartFromCode(n)]),
      a || (a = t[this.formatLanguageCode(n)]),
      a || (a = t[this.getLanguagePartFromCode(n)]),
      a || (a = t.default),
      a || []
    );
  }
  toResolveHierarchy(t, n) {
    const a = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      l = [],
      i = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? l.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`
              ));
      };
    return (
      M(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            i(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            i(this.getLanguagePartFromCode(t)))
        : M(t) && i(this.formatLanguageCode(t)),
      a.forEach((s) => {
        l.indexOf(s) < 0 && i(this.formatLanguageCode(s));
      }),
      l
    );
  }
}
const $f = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Gf = {
    select: (e) => (e === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class Kb {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = ht.create('pluralResolver')),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = ws(t === 'dev' ? 'en' : t),
      l = n.ordinal ? 'ordinal' : 'cardinal',
      i = JSON.stringify({ cleanedCode: a, type: l });
    if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
    let s;
    try {
      s = new Intl.PluralRules(a, { type: l });
    } catch {
      if (!Intl)
        return (
          this.logger.error('No Intl support, please use an Intl polyfill!'), Gf
        );
      if (!t.match(/-|_/)) return Gf;
      const u = this.languageUtils.getLanguagePartFromCode(t);
      s = this.getRule(u, n);
    }
    return (this.pluralRulesCache[i] = s), s;
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = this.getRule(t, n);
    return (
      a || (a = this.getRule('dev', n)),
      (a == null ? void 0 : a.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(t, n) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, a).map((l) => `${n}${l}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = this.getRule(t, n);
    return (
      a || (a = this.getRule('dev', n)),
      a
        ? a
            .resolvedOptions()
            .pluralCategories.sort((l, i) => $f[l] - $f[i])
            .map(
              (l) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${l}`
            )
        : []
    );
  }
  getSuffix(t, n) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(t, a);
    return l
      ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ''}${l.select(n)}`
      : (this.logger.warn(`no plural rule found for: ${t}`),
        this.getSuffix('dev', n, a));
  }
}
const Xf = function (e, t, n) {
    let a =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = kb(e, t, n);
    return (
      !i && l && M(n) && ((i = qu(e, n, a)), i === void 0 && (i = qu(t, n, a))),
      i
    );
  },
  Br = (e) => e.replace(/\$/g, '$$$$');
class Zb {
  constructor() {
    var n;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = ht.create('interpolator')),
      (this.options = t),
      (this.format =
        ((n = t == null ? void 0 : t.interpolation) == null
          ? void 0
          : n.format) || ((a) => a)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: a,
      useRawValueToEscape: l,
      prefix: i,
      prefixEscaped: s,
      suffix: r,
      suffixEscaped: u,
      formatSeparator: o,
      unescapeSuffix: c,
      unescapePrefix: h,
      nestingPrefix: f,
      nestingPrefixEscaped: m,
      nestingSuffix: y,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: b,
      maxReplaces: p,
      alwaysFormat: g,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : Yb),
      (this.escapeValue = a !== void 0 ? a : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = i ? In(i) : s || '{{'),
      (this.suffix = r ? In(r) : u || '}}'),
      (this.formatSeparator = o || ','),
      (this.unescapePrefix = c ? '' : h || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = f ? In(f) : m || In('$t(')),
      (this.nestingSuffix = y ? In(y) : x || In(')')),
      (this.nestingOptionsSeparator = b || ','),
      (this.maxReplaces = p || 1e3),
      (this.alwaysFormat = g !== void 0 ? g : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, a) =>
      (n == null ? void 0 : n.source) === a
        ? ((n.lastIndex = 0), n)
        : new RegExp(a, 'g');
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, a, l) {
    var m;
    let i, s, r;
    const u =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      o = (y) => {
        if (y.indexOf(this.formatSeparator) < 0) {
          const g = Xf(
            n,
            u,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(g, void 0, a, { ...l, ...n, interpolationkey: y })
            : g;
        }
        const x = y.split(this.formatSeparator),
          b = x.shift().trim(),
          p = x.join(this.formatSeparator).trim();
        return this.format(
          Xf(
            n,
            u,
            b,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          p,
          a,
          { ...l, ...n, interpolationkey: b }
        );
      };
    this.resetRegExp();
    const c =
        (l == null ? void 0 : l.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      h =
        ((m = l == null ? void 0 : l.interpolation) == null
          ? void 0
          : m.skipOnVariables) !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (y) => Br(y) },
        {
          regex: this.regexp,
          safeValue: (y) => (this.escapeValue ? Br(this.escape(y)) : Br(y)),
        },
      ].forEach((y) => {
        for (r = 0; (i = y.regex.exec(t)); ) {
          const x = i[1].trim();
          if (((s = o(x)), s === void 0))
            if (typeof c == 'function') {
              const p = c(t, i, l);
              s = M(p) ? p : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, x)) s = '';
            else if (h) {
              s = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${x} for interpolating ${t}`
              ),
                (s = '');
          else !M(s) && !this.useRawValueToEscape && (s = _f(s));
          const b = y.safeValue(s);
          if (
            ((t = t.replace(i[0], b)),
            h
              ? ((y.regex.lastIndex += s.length),
                (y.regex.lastIndex -= i[0].length))
              : (y.regex.lastIndex = 0),
            r++,
            r >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l,
      i,
      s;
    const r = (u, o) => {
      const c = this.nestingOptionsSeparator;
      if (u.indexOf(c) < 0) return u;
      const h = u.split(new RegExp(`${c}[ ]*{`));
      let f = `{${h[1]}`;
      (u = h[0]), (f = this.interpolate(f, s));
      const m = f.match(/'/g),
        y = f.match(/"/g);
      ((((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !y) ||
        y.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        (s = JSON.parse(f)), o && (s = { ...o, ...s });
      } catch (x) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${u}`,
            x
          ),
          `${u}${c}${f}`
        );
      }
      return (
        s.defaultValue &&
          s.defaultValue.indexOf(this.prefix) > -1 &&
          delete s.defaultValue,
        u
      );
    };
    for (; (l = this.nestingRegexp.exec(t)); ) {
      let u = [];
      (s = { ...a }),
        (s = s.replace && !M(s.replace) ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let o = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const c = l[1].split(this.formatSeparator).map((h) => h.trim());
        (l[1] = c.shift()), (u = c), (o = !0);
      }
      if (((i = n(r.call(this, l[1].trim(), s), s)), i && l[0] === t && !M(i)))
        return i;
      M(i) || (i = _f(i)),
        i ||
          (this.logger.warn(`missed to resolve ${l[1]} for nesting ${t}`),
          (i = '')),
        o &&
          (i = u.reduce(
            (c, h) =>
              this.format(c, h, a.lng, { ...a, interpolationkey: l[1].trim() }),
            i.trim()
          )),
        (t = t.replace(l[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const Jb = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf('(') > -1) {
      const a = e.split('(');
      t = a[0].toLowerCase().trim();
      const l = a[1].substring(0, a[1].length - 1);
      t === 'currency' && l.indexOf(':') < 0
        ? n.currency || (n.currency = l.trim())
        : t === 'relativetime' && l.indexOf(':') < 0
          ? n.range || (n.range = l.trim())
          : l.split(';').forEach((s) => {
              if (s) {
                const [r, ...u] = s.split(':'),
                  o = u
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  c = r.trim();
                n[c] || (n[c] = o),
                  o === 'false' && (n[c] = !1),
                  o === 'true' && (n[c] = !0),
                  isNaN(o) || (n[c] = parseInt(o, 10));
              }
            });
    }
    return { formatName: t, formatOptions: n };
  },
  ea = (e) => {
    const t = {};
    return (n, a, l) => {
      let i = l;
      l &&
        l.interpolationkey &&
        l.formatParams &&
        l.formatParams[l.interpolationkey] &&
        l[l.interpolationkey] &&
        (i = { ...i, [l.interpolationkey]: void 0 });
      const s = a + JSON.stringify(i);
      let r = t[s];
      return r || ((r = e(ws(a), l)), (t[s] = r)), r(n);
    };
  };
class Fb {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = ht.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: ea((n, a) => {
          const l = new Intl.NumberFormat(n, { ...a });
          return (i) => l.format(i);
        }),
        currency: ea((n, a) => {
          const l = new Intl.NumberFormat(n, { ...a, style: 'currency' });
          return (i) => l.format(i);
        }),
        datetime: ea((n, a) => {
          const l = new Intl.DateTimeFormat(n, { ...a });
          return (i) => l.format(i);
        }),
        relativetime: ea((n, a) => {
          const l = new Intl.RelativeTimeFormat(n, { ...a });
          return (i) => l.format(i, a.range || 'day');
        }),
        list: ea((n, a) => {
          const l = new Intl.ListFormat(n, { ...a });
          return (i) => l.format(i);
        }),
      }),
      this.init(t);
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ',';
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = ea(n);
  }
  format(t, n, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (
      i.length > 1 &&
      i[0].indexOf('(') > 1 &&
      i[0].indexOf(')') < 0 &&
      i.find((r) => r.indexOf(')') > -1)
    ) {
      const r = i.findIndex((u) => u.indexOf(')') > -1);
      i[0] = [i[0], ...i.splice(1, r)].join(this.formatSeparator);
    }
    return i.reduce((r, u) => {
      var h;
      const { formatName: o, formatOptions: c } = Jb(u);
      if (this.formats[o]) {
        let f = r;
        try {
          const m =
              ((h = l == null ? void 0 : l.formatParams) == null
                ? void 0
                : h[l.interpolationkey]) || {},
            y = m.locale || m.lng || l.locale || l.lng || a;
          f = this.formats[o](r, y, { ...c, ...l, ...m });
        } catch (m) {
          this.logger.warn(m);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${o}`);
      return r;
    }, t);
  }
}
const Wb = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Pb extends Ks {
  constructor(t, n, a) {
    var i, s;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = a),
      (this.languageUtils = a.languageUtils),
      (this.options = l),
      (this.logger = ht.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = l.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5),
      (this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (s = (i = this.backend) == null ? void 0 : i.init) == null ||
        s.call(i, a, l.backend, l);
  }
  queueLoad(t, n, a, l) {
    const i = {},
      s = {},
      r = {},
      u = {};
    return (
      t.forEach((o) => {
        let c = !0;
        n.forEach((h) => {
          const f = `${o}|${h}`;
          !a.reload && this.store.hasResourceBundle(o, h)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? s[f] === void 0 && (s[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  s[f] === void 0 && (s[f] = !0),
                  i[f] === void 0 && (i[f] = !0),
                  u[h] === void 0 && (u[h] = !0)));
        }),
          c || (r[o] = !0);
      }),
      (Object.keys(i).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: l,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(r),
        toLoadNamespaces: Object.keys(u),
      }
    );
  }
  loaded(t, n, a) {
    const l = t.split('|'),
      i = l[0],
      s = l[1];
    n && this.emit('failedLoading', i, s, n),
      !n &&
        a &&
        this.store.addResourceBundle(i, s, a, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && a && (this.state[t] = 0);
    const r = {};
    this.queue.forEach((u) => {
      Bb(u.loaded, [i], s),
        Wb(u, t),
        n && u.errors.push(n),
        u.pendingCount === 0 &&
          !u.done &&
          (Object.keys(u.loaded).forEach((o) => {
            r[o] || (r[o] = {});
            const c = u.loaded[o];
            c.length &&
              c.forEach((h) => {
                r[o][h] === void 0 && (r[o][h] = !0);
              });
          }),
          (u.done = !0),
          u.errors.length ? u.callback(u.errors) : u.callback());
    }),
      this.emit('loaded', r),
      (this.queue = this.queue.filter((u) => !u.done));
  }
  read(t, n, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: a,
        tried: l,
        wait: i,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const r = (o, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const h = this.waitingReads.shift();
          this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
        }
        if (o && c && l < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, a, l + 1, i * 2, s);
          }, i);
          return;
        }
        s(o, c);
      },
      u = this.backend[a].bind(this.backend);
    if (u.length === 2) {
      try {
        const o = u(t, n);
        o && typeof o.then == 'function'
          ? o.then((c) => r(null, c)).catch(r)
          : r(null, o);
      } catch (o) {
        r(o);
      }
      return;
    }
    return u(t, n, r);
  }
  prepareLoading(t, n) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        l && l()
      );
    M(t) && (t = this.languageUtils.toResolveHierarchy(t)), M(n) && (n = [n]);
    const i = this.queueLoad(t, n, a, l);
    if (!i.toLoad.length) return i.pending.length || l(), null;
    i.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, a) {
    this.prepareLoading(t, n, {}, a);
  }
  reload(t, n, a) {
    this.prepareLoading(t, n, { reload: !0 }, a);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const a = t.split('|'),
      l = a[0],
      i = a[1];
    this.read(l, i, 'read', void 0, void 0, (s, r) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${l} failed`,
          s
        ),
        !s &&
          r &&
          this.logger.log(`${n}loaded namespace ${i} for language ${l}`, r),
        this.loaded(t, s, r);
    });
  }
  saveMissing(t, n, a, l, i) {
    var u, o, c, h, f;
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      r =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      (o = (u = this.services) == null ? void 0 : u.utils) != null &&
      o.hasLoadedNamespace &&
      !(
        (h = (c = this.services) == null ? void 0 : c.utils) != null &&
        h.hasLoadedNamespace(n)
      )
    ) {
      this.logger.warn(
        `did not save key "${a}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(a == null || a === '')) {
      if ((f = this.backend) != null && f.create) {
        const m = { ...s, isUpdate: i },
          y = this.backend.create.bind(this.backend);
        if (y.length < 6)
          try {
            let x;
            y.length === 5 ? (x = y(t, n, a, l, m)) : (x = y(t, n, a, l)),
              x && typeof x.then == 'function'
                ? x.then((b) => r(null, b)).catch(r)
                : r(null, x);
          } catch (x) {
            r(x);
          }
        else y(t, n, a, l, r, m);
      }
      !t || !t[0] || this.store.addResource(t[0], n, a, l);
    }
  }
}
const Qf = () => ({
    debug: !1,
    initAsync: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == 'object' && (t = e[1]),
        M(e[1]) && (t.defaultValue = e[1]),
        M(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == 'object' || typeof e[3] == 'object')
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((a) => {
          t[a] = n[a];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  Kf = (e) => {
    var t, n;
    return (
      M(e.ns) && (e.ns = [e.ns]),
      M(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
      M(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
      ((n = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null
        ? void 0
        : n.call(t, 'cimode')) < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
      typeof e.initImmediate == 'boolean' && (e.initAsync = e.initImmediate),
      e
    );
  },
  Ti = () => {},
  Ib = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == 'function' && (e[n] = e[n].bind(e));
    });
  };
class Vl extends Ks {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Kf(t)),
      (this.services = {}),
      (this.logger = ht),
      (this.modules = { external: [] }),
      Ib(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initAsync) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == 'function' && ((a = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (M(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const l = Qf();
    (this.options = { ...l, ...this.options, ...Kf(n) }),
      (this.options.interpolation = {
        ...l.interpolation,
        ...this.options.interpolation,
      }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (c) => (c ? (typeof c == 'function' ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? ht.init(i(this.modules.logger), this.options)
        : ht.init(null, this.options);
      let c;
      this.modules.formatter ? (c = this.modules.formatter) : (c = Fb);
      const h = new Vf(this.options);
      this.store = new qf(this.options.resources, this.options);
      const f = this.services;
      (f.logger = ht),
        (f.resourceStore = this.store),
        (f.languageUtils = h),
        (f.pluralResolver = new Kb(h, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === l.interpolation.format) &&
          ((f.formatter = i(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter
          ))),
        (f.interpolator = new Zb(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new Pb(
          i(this.modules.backend),
          f.resourceStore,
          f,
          this.options
        )),
        f.backendConnector.on('*', function (m) {
          for (
            var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), b = 1;
            b < y;
            b++
          )
            x[b - 1] = arguments[b];
          t.emit(m, ...x);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = i(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = i(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new js(this.services, this.options)),
        this.translator.on('*', function (m) {
          for (
            var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), b = 1;
            b < y;
            b++
          )
            x[b - 1] = arguments[b];
          t.emit(m, ...x);
        }),
        this.modules.external.forEach((m) => {
          m.init && m.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      a || (a = Ti),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const u = el(),
      o = () => {
        const c = (h, f) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            u.resolve(f),
            a(h, f);
        };
        if (this.languages && !this.isInitialized)
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? o()
        : setTimeout(o, 0),
      u
    );
  }
  loadResources(t) {
    var i, s;
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti;
    const l = M(t) ? t : this.language;
    if (
      (typeof t == 'function' && (a = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (l == null ? void 0 : l.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return a();
      const r = [],
        u = (o) => {
          if (!o || o === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(o).forEach((h) => {
            h !== 'cimode' && r.indexOf(h) < 0 && r.push(h);
          });
        };
      l
        ? u(l)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((c) => u(c)),
        (s = (i = this.options.preload) == null ? void 0 : i.forEach) == null ||
          s.call(i, (o) => u(o)),
        this.services.backendConnector.load(r, this.options.ns, (o) => {
          !o &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            a(o);
        });
    } else a(null);
  }
  reloadResources(t, n, a) {
    const l = el();
    return (
      typeof t == 'function' && ((a = t), (t = void 0)),
      typeof n == 'function' && ((a = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      a || (a = Ti),
      this.services.backendConnector.reload(t, n, (i) => {
        l.resolve(), a(i);
      }),
      l
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && wg.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const a = this.languages[n];
        if (
          !(['cimode', 'dev'].indexOf(a) > -1) &&
          this.store.hasLanguageSomeTranslations(a)
        ) {
          this.resolvedLanguage = a;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var a = this;
    this.isLanguageChangingTo = t;
    const l = el();
    this.emit('languageChanging', t);
    const i = (u) => {
        (this.language = u),
          (this.languages = this.services.languageUtils.toResolveHierarchy(u)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(u);
      },
      s = (u, o) => {
        o
          ? (i(o),
            this.translator.changeLanguage(o),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', o),
            this.logger.log('languageChanged', o))
          : (this.isLanguageChangingTo = void 0),
          l.resolve(function () {
            return a.t(...arguments);
          }),
          n &&
            n(u, function () {
              return a.t(...arguments);
            });
      },
      r = (u) => {
        var c, h;
        !t && !u && this.services.languageDetector && (u = []);
        const o = M(u)
          ? u
          : this.services.languageUtils.getBestMatchFromCodes(u);
        o &&
          (this.language || i(o),
          this.translator.language || this.translator.changeLanguage(o),
          (h =
            (c = this.services.languageDetector) == null
              ? void 0
              : c.cacheUserLanguage) == null || h.call(c, o)),
          this.loadResources(o, (f) => {
            s(f, o);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? r(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(r)
            : this.services.languageDetector.detect(r)
          : r(t),
      l
    );
  }
  getFixedT(t, n, a) {
    var l = this;
    const i = function (s, r) {
      let u;
      if (typeof r != 'object') {
        for (
          var o = arguments.length, c = new Array(o > 2 ? o - 2 : 0), h = 2;
          h < o;
          h++
        )
          c[h - 2] = arguments[h];
        u = l.options.overloadTranslationOptionHandler([s, r].concat(c));
      } else u = { ...r };
      (u.lng = u.lng || i.lng),
        (u.lngs = u.lngs || i.lngs),
        (u.ns = u.ns || i.ns),
        u.keyPrefix !== '' && (u.keyPrefix = u.keyPrefix || a || i.keyPrefix);
      const f = l.options.keySeparator || '.';
      let m;
      return (
        u.keyPrefix && Array.isArray(s)
          ? (m = s.map((y) => `${u.keyPrefix}${f}${y}`))
          : (m = u.keyPrefix ? `${u.keyPrefix}${f}${s}` : s),
        l.t(m, u)
      );
    };
    return M(t) ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = a), i;
  }
  t() {
    var l;
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return (l = this.translator) == null ? void 0 : l.translate(...n);
  }
  exists() {
    var l;
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return (l = this.translator) == null ? void 0 : l.exists(...n);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      );
    const a = n.lng || this.resolvedLanguage || this.languages[0],
      l = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (a.toLowerCase() === 'cimode') return !0;
    const s = (r, u) => {
      const o = this.services.backendConnector.state[`${r}|${u}`];
      return o === -1 || o === 0 || o === 2;
    };
    if (n.precheck) {
      const r = n.precheck(this, s);
      if (r !== void 0) return r;
    }
    return !!(
      this.hasResourceBundle(a, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(a, t) && (!l || s(i, t)))
    );
  }
  loadNamespaces(t, n) {
    const a = el();
    return this.options.ns
      ? (M(t) && (t = [t]),
        t.forEach((l) => {
          this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
        }),
        this.loadResources((l) => {
          a.resolve(), n && n(l);
        }),
        a)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const a = el();
    M(t) && (t = [t]);
    const l = this.options.preload || [],
      i = t.filter(
        (s) =>
          l.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s)
      );
    return i.length
      ? ((this.options.preload = l.concat(i)),
        this.loadResources((s) => {
          a.resolve(), n && n(s);
        }),
        a)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    var l, i;
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (((l = this.languages) == null ? void 0 : l.length) > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl';
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      a =
        ((i = this.services) == null ? void 0 : i.languageUtils) ||
        new Vf(Qf());
    return n.indexOf(a.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Vl(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti;
    const a = t.forkResourceStore;
    a && delete t.forkResourceStore;
    const l = { ...this.options, ...t, isClone: !0 },
      i = new Vl(l);
    if (
      ((t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ['store', 'services', 'language'].forEach((r) => {
        i[r] = this[r];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      a)
    ) {
      const r = Object.keys(this.store.data).reduce(
        (u, o) => (
          (u[o] = { ...this.store.data[o] }),
          Object.keys(u[o]).reduce((c, h) => ((c[h] = { ...u[o][h] }), c), {})
        ),
        {}
      );
      (i.store = new qf(r, l)), (i.services.resourceStore = i.store);
    }
    return (
      (i.translator = new js(i.services, l)),
      i.translator.on('*', function (r) {
        for (
          var u = arguments.length, o = new Array(u > 1 ? u - 1 : 0), c = 1;
          c < u;
          c++
        )
          o[c - 1] = arguments[c];
        i.emit(r, ...o);
      }),
      i.init(l, n),
      (i.translator.options = l),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const je = Vl.createInstance();
je.createInstance = Vl.createInstance;
je.createInstance;
je.dir;
je.init;
je.loadResources;
je.reloadResources;
je.use;
je.changeLanguage;
je.getFixedT;
je.t;
je.exists;
je.setDefaultNamespace;
je.hasLoadedNamespace;
je.loadNamespaces;
je.loadLanguages;
var e1 = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
};
const t1 = Ju(e1);
var n1 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Zf(e) {
  var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]),
    (t1[n[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0),
    t.name.startsWith('!--'))
  ) {
    var a = e.indexOf('-->');
    return { type: 'comment', comment: a !== -1 ? e.slice(4, a) : '' };
  }
  for (var l = new RegExp(n1), i = null; (i = l.exec(e)) !== null; )
    if (i[0].trim())
      if (i[1]) {
        var s = i[1].trim(),
          r = [s, ''];
        s.indexOf('=') > -1 && (r = s.split('=')),
          (t.attrs[r[0]] = r[1]),
          l.lastIndex--;
      } else
        i[2] && (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
  return t;
}
var a1 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  l1 = /^\s*$/,
  i1 = Object.create(null);
function Ng(e, t) {
  switch (t.type) {
    case 'text':
      return e + t.content;
    case 'tag':
      return (
        (e +=
          '<' +
          t.name +
          (t.attrs
            ? (function (n) {
                var a = [];
                for (var l in n) a.push(l + '="' + n[l] + '"');
                return a.length ? ' ' + a.join(' ') : '';
              })(t.attrs)
            : '') +
          (t.voidElement ? '/>' : '>')),
        t.voidElement ? e : e + t.children.reduce(Ng, '') + '</' + t.name + '>'
      );
    case 'comment':
      return e + '<!--' + t.comment + '-->';
  }
}
var s1 = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = i1);
    var n,
      a = [],
      l = [],
      i = -1,
      s = !1;
    if (e.indexOf('<') !== 0) {
      var r = e.indexOf('<');
      a.push({ type: 'text', content: r === -1 ? e : e.substring(0, r) });
    }
    return (
      e.replace(a1, function (u, o) {
        if (s) {
          if (u !== '</' + n.name + '>') return;
          s = !1;
        }
        var c,
          h = u.charAt(1) !== '/',
          f = u.startsWith('<!--'),
          m = o + u.length,
          y = e.charAt(m);
        if (f) {
          var x = Zf(u);
          return i < 0 ? (a.push(x), a) : ((c = l[i]).children.push(x), a);
        }
        if (
          (h &&
            (i++,
            (n = Zf(u)).type === 'tag' &&
              t.components[n.name] &&
              ((n.type = 'component'), (s = !0)),
            n.voidElement ||
              s ||
              !y ||
              y === '<' ||
              n.children.push({
                type: 'text',
                content: e.slice(m, e.indexOf('<', m)),
              }),
            i === 0 && a.push(n),
            (c = l[i - 1]) && c.children.push(n),
            (l[i] = n)),
          (!h || n.voidElement) &&
            (i > -1 &&
              (n.voidElement || n.name === u.slice(2, -1)) &&
              (i--, (n = i === -1 ? a : l[i])),
            !s && y !== '<' && y))
        ) {
          c = i === -1 ? a : l[i].children;
          var b = e.indexOf('<', m),
            p = e.slice(m, b === -1 ? void 0 : b);
          l1.test(p) && (p = ' '),
            ((b > -1 && i + c.length >= 0) || p !== ' ') &&
              c.push({ type: 'text', content: p });
        }
      }),
      a
    );
  },
  stringify: function (e) {
    return e.reduce(function (t, n) {
      return t + Ng('', n);
    }, '');
  },
};
const $i = (...e) => {
    console != null &&
      console.warn &&
      (tt(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  Jf = {},
  $l = (...e) => {
    (tt(e[0]) && Jf[e[0]]) || (tt(e[0]) && (Jf[e[0]] = new Date()), $i(...e));
  },
  jg = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off('initialized', n);
        }, 0),
          t();
      };
      e.on('initialized', n);
    }
  },
  Yu = (e, t, n) => {
    e.loadNamespaces(t, jg(e, n));
  },
  Ff = (e, t, n, a) => {
    if (
      (tt(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return Yu(e, n, a);
    n.forEach((l) => {
      e.options.ns.indexOf(l) < 0 && e.options.ns.push(l);
    }),
      e.loadLanguages(t, jg(e, a));
  },
  r1 = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? ($l('i18n.languages were undefined or empty', t.languages), !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (a, l) => {
            var i;
            if (
              ((i = n.bindI18n) == null
                ? void 0
                : i.indexOf('languageChanging')) > -1 &&
              a.services.backendConnector.backend &&
              a.isLanguageChangingTo &&
              !l(a.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  tt = (e) => typeof e == 'string',
  Cn = (e) => typeof e == 'object' && e !== null,
  u1 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  o1 = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  c1 = (e) => o1[e],
  f1 = (e) => e.replace(u1, c1);
let Vu = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: f1,
};
const d1 = (e = {}) => {
    Vu = { ...Vu, ...e };
  },
  Og = () => Vu;
let Tg;
const h1 = (e) => {
    Tg = e;
  },
  tc = () => Tg,
  kr = (e, t) => {
    var a;
    if (!e) return !1;
    const n = ((a = e.props) == null ? void 0 : a.children) ?? e.children;
    return t ? n.length > 0 : !!n;
  },
  qr = (e) => {
    var n, a;
    if (!e) return [];
    const t = ((n = e.props) == null ? void 0 : n.children) ?? e.children;
    return (a = e.props) != null && a.i18nIsDynamicList ? pa(t) : t;
  },
  m1 = (e) => Array.isArray(e) && e.every(E.isValidElement),
  pa = (e) => (Array.isArray(e) ? e : [e]),
  g1 = (e, t) => {
    const n = { ...t };
    return (n.props = Object.assign(e.props, t.props)), n;
  },
  Rg = (e, t) => {
    if (!e) return '';
    let n = '';
    const a = pa(e),
      l =
        t != null && t.transSupportBasicHtmlNodes
          ? (t.transKeepBasicHtmlNodesFor ?? [])
          : [];
    return (
      a.forEach((i, s) => {
        if (tt(i)) n += `${i}`;
        else if (E.isValidElement(i)) {
          const { props: r, type: u } = i,
            o = Object.keys(r).length,
            c = l.indexOf(u) > -1,
            h = r.children;
          if (!h && c && !o) n += `<${u}/>`;
          else if ((!h && (!c || o)) || r.i18nIsDynamicList)
            n += `<${s}></${s}>`;
          else if (c && o === 1 && tt(h)) n += `<${u}>${h}</${u}>`;
          else {
            const f = Rg(h, t);
            n += `<${s}>${f}</${s}>`;
          }
        } else if (i === null)
          $i(
            'Trans: the passed in value is invalid - seems you passed in a null child.'
          );
        else if (Cn(i)) {
          const { format: r, ...u } = i,
            o = Object.keys(u);
          if (o.length === 1) {
            const c = r ? `${o[0]}, ${r}` : o[0];
            n += `{{${c}}}`;
          } else
            $i(
              'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
              i
            );
        } else
          $i(
            'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
            i
          );
      }),
      n
    );
  },
  p1 = (e, t, n, a, l, i) => {
    if (t === '') return [];
    const s = a.transKeepBasicHtmlNodesFor || [],
      r = t && new RegExp(s.map((b) => `<${b}`).join('|')).test(t);
    if (!e && !r && !i) return [t];
    const u = {},
      o = (b) => {
        pa(b).forEach((g) => {
          tt(g) ||
            (kr(g)
              ? o(qr(g))
              : Cn(g) && !E.isValidElement(g) && Object.assign(u, g));
        });
      };
    o(e);
    const c = s1.parse(`<0>${t}</0>`),
      h = { ...u, ...l },
      f = (b, p, g) => {
        var w;
        const v = qr(b),
          S = y(v, p.children, g);
        return (m1(v) && S.length === 0) ||
          ((w = b.props) != null && w.i18nIsDynamicList)
          ? v
          : S;
      },
      m = (b, p, g, v, S) => {
        b.dummy
          ? ((b.children = p),
            g.push(E.cloneElement(b, { key: v }, S ? void 0 : p)))
          : g.push(
              ...E.Children.map([b], (w) => {
                const O = { ...w.props };
                return (
                  delete O.i18nIsDynamicList,
                  E.createElement(
                    w.type,
                    { ...O, key: v, ref: w.ref },
                    S ? null : p
                  )
                );
              })
            );
      },
      y = (b, p, g) => {
        const v = pa(b);
        return pa(p).reduce((w, O, T) => {
          var D, C;
          const R =
            ((C = (D = O.children) == null ? void 0 : D[0]) == null
              ? void 0
              : C.content) &&
            n.services.interpolator.interpolate(
              O.children[0].content,
              h,
              n.language
            );
          if (O.type === 'tag') {
            let L = v[parseInt(O.name, 10)];
            g.length === 1 && !L && (L = g[0][O.name]), L || (L = {});
            const F =
                Object.keys(O.attrs).length !== 0
                  ? g1({ props: O.attrs }, L)
                  : L,
              ot = E.isValidElement(F),
              Ce = ot && kr(O, !0) && !O.voidElement,
              De = r && Cn(F) && F.dummy && !ot,
              A = Cn(e) && Object.hasOwnProperty.call(e, O.name);
            if (tt(F)) {
              const z = n.services.interpolator.interpolate(F, h, n.language);
              w.push(z);
            } else if (kr(F) || Ce) {
              const z = f(F, O, g);
              m(F, z, w, T);
            } else if (De) {
              const z = y(v, O.children, g);
              m(F, z, w, T);
            } else if (Number.isNaN(parseFloat(O.name)))
              if (A) {
                const z = f(F, O, g);
                m(F, z, w, T, O.voidElement);
              } else if (a.transSupportBasicHtmlNodes && s.indexOf(O.name) > -1)
                if (O.voidElement)
                  w.push(E.createElement(O.name, { key: `${O.name}-${T}` }));
                else {
                  const z = y(v, O.children, g);
                  w.push(E.createElement(O.name, { key: `${O.name}-${T}` }, z));
                }
              else if (O.voidElement) w.push(`<${O.name} />`);
              else {
                const z = y(v, O.children, g);
                w.push(`<${O.name}>${z}</${O.name}>`);
              }
            else if (Cn(F) && !ot) {
              const z = O.children[0] ? R : null;
              z && w.push(z);
            } else m(F, R, w, T, O.children.length !== 1 || !R);
          } else if (O.type === 'text') {
            const L = a.transWrapTextNodes,
              F = i
                ? a.unescape(
                    n.services.interpolator.interpolate(
                      O.content,
                      h,
                      n.language
                    )
                  )
                : n.services.interpolator.interpolate(O.content, h, n.language);
            L
              ? w.push(E.createElement(L, { key: `${O.name}-${T}` }, F))
              : w.push(F);
          }
          return w;
        }, []);
      },
      x = y([{ dummy: !0, children: e || [] }], c, pa(e || []));
    return qr(x[0]);
  },
  Ag = (e, t, n) => {
    const a = e.key || t,
      l = E.cloneElement(e, { key: a });
    if (
      !l.props ||
      !l.props.children ||
      (n.indexOf(`${t}/>`) < 0 && n.indexOf(`${t} />`) < 0)
    )
      return l;
    function i() {
      return E.createElement(E.Fragment, null, l);
    }
    return E.createElement(i);
  },
  y1 = (e, t) => e.map((n, a) => Ag(n, a, t)),
  v1 = (e, t) => {
    const n = {};
    return (
      Object.keys(e).forEach((a) => {
        Object.assign(n, { [a]: Ag(e[a], a, t) });
      }),
      n
    );
  },
  b1 = (e, t) =>
    e
      ? Array.isArray(e)
        ? y1(e, t)
        : Cn(e)
          ? v1(e, t)
          : ($l('<Trans /> component prop expects an object or an array'), null)
      : null;
function x1({
  children: e,
  count: t,
  parent: n,
  i18nKey: a,
  context: l,
  tOptions: i = {},
  values: s,
  defaults: r,
  components: u,
  ns: o,
  i18n: c,
  t: h,
  shouldUnescape: f,
  ...m
}) {
  var F, ot, Ce, De, A, z;
  const y = c || tc();
  if (!y)
    return (
      $l(
        'You will need to pass in an i18next instance by using i18nextReactModule'
      ),
      e
    );
  const x = h || y.t.bind(y) || ((U) => U),
    b = { ...Og(), ...((F = y.options) == null ? void 0 : F.react) };
  let p = o || x.ns || ((ot = y.options) == null ? void 0 : ot.defaultNS);
  p = tt(p) ? [p] : p || ['translation'];
  const g = Rg(e, b),
    v = r || g || b.transEmptyNodeValue || a,
    { hashTransKey: S } = b,
    w = a || (S ? S(g || v) : g || v);
  (De = (Ce = y.options) == null ? void 0 : Ce.interpolation) != null &&
    De.defaultVariables &&
    (s =
      s && Object.keys(s).length > 0
        ? { ...s, ...y.options.interpolation.defaultVariables }
        : { ...y.options.interpolation.defaultVariables });
  const O =
      s ||
      (t !== void 0 &&
        !(
          (z = (A = y.options) == null ? void 0 : A.interpolation) != null &&
          z.alwaysFormat
        )) ||
      !e
        ? i.interpolation
        : {
            interpolation: { ...i.interpolation, prefix: '#$?', suffix: '?$#' },
          },
    T = {
      ...i,
      context: l || i.context,
      count: t,
      ...s,
      ...O,
      defaultValue: v,
      ns: p,
    },
    R = w ? x(w, T) : v,
    D = b1(u, R),
    C = p1(D || e, R, y, b, T, f),
    L = n ?? b.defaultTransParent;
  return L ? E.createElement(L, m, C) : C;
}
const S1 = {
    type: '3rdParty',
    init(e) {
      d1(e.options.react), h1(e);
    },
  },
  Cg = E.createContext();
class E1 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function Ct({
  children: e,
  count: t,
  parent: n,
  i18nKey: a,
  context: l,
  tOptions: i = {},
  values: s,
  defaults: r,
  components: u,
  ns: o,
  i18n: c,
  t: h,
  shouldUnescape: f,
  ...m
}) {
  var g;
  const { i18n: y, defaultNS: x } = E.useContext(Cg) || {},
    b = c || y || tc(),
    p = h || (b == null ? void 0 : b.t.bind(b));
  return x1({
    children: e,
    count: t,
    parent: n,
    i18nKey: a,
    context: l,
    tOptions: i,
    values: s,
    defaults: r,
    components: u,
    ns:
      o ||
      (p == null ? void 0 : p.ns) ||
      x ||
      ((g = b == null ? void 0 : b.options) == null ? void 0 : g.defaultNS),
    i18n: b,
    t: h,
    shouldUnescape: f,
    ...m,
  });
}
const w1 = (e, t) => {
    const n = E.useRef();
    return (
      E.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  Dg = (e, t, n, a) => e.getFixedT(t, n, a),
  N1 = (e, t, n, a) => E.useCallback(Dg(e, t, n, a), [e, t, n, a]),
  Et = (e, t = {}) => {
    var S, w, O, T;
    const { i18n: n } = t,
      { i18n: a, defaultNS: l } = E.useContext(Cg) || {},
      i = n || a || tc();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new E1()), !i)) {
      $l(
        'You will need to pass in an i18next instance by using initReactI18next'
      );
      const R = (C, L) =>
          tt(L)
            ? L
            : Cn(L) && tt(L.defaultValue)
              ? L.defaultValue
              : Array.isArray(C)
                ? C[C.length - 1]
                : C,
        D = [R, {}, !1];
      return (D.t = R), (D.i18n = {}), (D.ready = !1), D;
    }
    (S = i.options.react) != null &&
      S.wait &&
      $l(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    const s = { ...Og(), ...i.options.react, ...t },
      { useSuspense: r, keyPrefix: u } = s;
    let o = l || ((w = i.options) == null ? void 0 : w.defaultNS);
    (o = tt(o) ? [o] : o || ['translation']),
      (T = (O = i.reportNamespaces).addUsedNamespaces) == null || T.call(O, o);
    const c =
        (i.isInitialized || i.initializedStoreOnce) &&
        o.every((R) => r1(R, i, s)),
      h = N1(i, t.lng || null, s.nsMode === 'fallback' ? o : o[0], u),
      f = () => h,
      m = () => Dg(i, t.lng || null, s.nsMode === 'fallback' ? o : o[0], u),
      [y, x] = E.useState(f);
    let b = o.join();
    t.lng && (b = `${t.lng}${b}`);
    const p = w1(b),
      g = E.useRef(!0);
    E.useEffect(() => {
      const { bindI18n: R, bindI18nStore: D } = s;
      (g.current = !0),
        !c &&
          !r &&
          (t.lng
            ? Ff(i, t.lng, o, () => {
                g.current && x(m);
              })
            : Yu(i, o, () => {
                g.current && x(m);
              })),
        c && p && p !== b && g.current && x(m);
      const C = () => {
        g.current && x(m);
      };
      return (
        R && (i == null || i.on(R, C)),
        D && (i == null || i.store.on(D, C)),
        () => {
          (g.current = !1),
            i && (R == null || R.split(' ').forEach((L) => i.off(L, C))),
            D && i && D.split(' ').forEach((L) => i.store.off(L, C));
        }
      );
    }, [i, b]),
      E.useEffect(() => {
        g.current && c && x(f);
      }, [i, u, c]);
    const v = [y, i, c];
    if (((v.t = y), (v.i18n = i), (v.ready = c), c || (!c && !r))) return v;
    throw new Promise((R) => {
      t.lng ? Ff(i, t.lng, o, () => R()) : Yu(i, o, () => R());
    });
  },
  { slice: j1, forEach: O1 } = [];
function T1(e) {
  return (
    O1.call(j1.call(arguments, 1), (t) => {
      if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
const Wf = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  R1 = function (e, t) {
    const a =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: '/' },
      l = encodeURIComponent(t);
    let i = `${e}=${l}`;
    if (a.maxAge > 0) {
      const s = a.maxAge - 0;
      if (Number.isNaN(s)) throw new Error('maxAge should be a Number');
      i += `; Max-Age=${Math.floor(s)}`;
    }
    if (a.domain) {
      if (!Wf.test(a.domain)) throw new TypeError('option domain is invalid');
      i += `; Domain=${a.domain}`;
    }
    if (a.path) {
      if (!Wf.test(a.path)) throw new TypeError('option path is invalid');
      i += `; Path=${a.path}`;
    }
    if (a.expires) {
      if (typeof a.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid');
      i += `; Expires=${a.expires.toUTCString()}`;
    }
    if (
      (a.httpOnly && (i += '; HttpOnly'),
      a.secure && (i += '; Secure'),
      a.sameSite)
    )
      switch (
        typeof a.sameSite == 'string' ? a.sameSite.toLowerCase() : a.sameSite
      ) {
        case !0:
          i += '; SameSite=Strict';
          break;
        case 'lax':
          i += '; SameSite=Lax';
          break;
        case 'strict':
          i += '; SameSite=Strict';
          break;
        case 'none':
          i += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    return i;
  },
  Pf = {
    create(e, t, n, a) {
      let l =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      n &&
        ((l.expires = new Date()),
        l.expires.setTime(l.expires.getTime() + n * 60 * 1e3)),
        a && (l.domain = a),
        (document.cookie = R1(e, encodeURIComponent(t), l));
    },
    read(e) {
      const t = `${e}=`,
        n = document.cookie.split(';');
      for (let a = 0; a < n.length; a++) {
        let l = n[a];
        for (; l.charAt(0) === ' '; ) l = l.substring(1, l.length);
        if (l.indexOf(t) === 0) return l.substring(t.length, l.length);
      }
      return null;
    },
    remove(e) {
      this.create(e, '', -1);
    },
  };
var A1 = {
    name: 'cookie',
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < 'u') return Pf.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: a,
        cookieDomain: l,
        cookieOptions: i,
      } = t;
      n && typeof document < 'u' && Pf.create(n, e, a, l, i);
    },
  },
  C1 = {
    name: 'querystring',
    lookup(e) {
      var a;
      let { lookupQuerystring: t } = e,
        n;
      if (typeof window < 'u') {
        let { search: l } = window.location;
        !window.location.search &&
          ((a = window.location.hash) == null ? void 0 : a.indexOf('?')) > -1 &&
          (l = window.location.hash.substring(
            window.location.hash.indexOf('?')
          ));
        const s = l.substring(1).split('&');
        for (let r = 0; r < s.length; r++) {
          const u = s[r].indexOf('=');
          u > 0 && s[r].substring(0, u) === t && (n = s[r].substring(u + 1));
        }
      }
      return n;
    },
  };
let tl = null;
const If = () => {
  if (tl !== null) return tl;
  try {
    tl = window !== 'undefined' && window.localStorage !== null;
    const e = 'i18next.translate.boo';
    window.localStorage.setItem(e, 'foo'), window.localStorage.removeItem(e);
  } catch {
    tl = !1;
  }
  return tl;
};
var D1 = {
  name: 'localStorage',
  lookup(e) {
    let { lookupLocalStorage: t } = e;
    if (t && If()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: n } = t;
    n && If() && window.localStorage.setItem(n, e);
  },
};
let nl = null;
const ed = () => {
  if (nl !== null) return nl;
  try {
    nl = window !== 'undefined' && window.sessionStorage !== null;
    const e = 'i18next.translate.boo';
    window.sessionStorage.setItem(e, 'foo'),
      window.sessionStorage.removeItem(e);
  } catch {
    nl = !1;
  }
  return nl;
};
var z1 = {
    name: 'sessionStorage',
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && ed()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t;
      n && ed() && window.sessionStorage.setItem(n, e);
    },
  },
  U1 = {
    name: 'navigator',
    lookup(e) {
      const t = [];
      if (typeof navigator < 'u') {
        const { languages: n, userLanguage: a, language: l } = navigator;
        if (n) for (let i = 0; i < n.length; i++) t.push(n[i]);
        a && t.push(a), l && t.push(l);
      }
      return t.length > 0 ? t : void 0;
    },
  },
  L1 = {
    name: 'htmlTag',
    lookup(e) {
      let { htmlTag: t } = e,
        n;
      const a = t || (typeof document < 'u' ? document.documentElement : null);
      return (
        a &&
          typeof a.getAttribute == 'function' &&
          (n = a.getAttribute('lang')),
        n
      );
    },
  },
  M1 = {
    name: 'path',
    lookup(e) {
      var l;
      let { lookupFromPathIndex: t } = e;
      if (typeof window > 'u') return;
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(n)
        ? (l = n[typeof t == 'number' ? t : 0]) == null
          ? void 0
          : l.replace('/', '')
        : void 0;
    },
  },
  _1 = {
    name: 'subdomain',
    lookup(e) {
      var l, i;
      let { lookupFromSubdomainIndex: t } = e;
      const n = typeof t == 'number' ? t + 1 : 1,
        a =
          typeof window < 'u' &&
          ((i = (l = window.location) == null ? void 0 : l.hostname) == null
            ? void 0
            : i.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
              ));
      if (a) return a[n];
    },
  };
let zg = !1;
try {
  document.cookie, (zg = !0);
} catch {}
const Ug = [
  'querystring',
  'cookie',
  'localStorage',
  'sessionStorage',
  'navigator',
  'htmlTag',
];
zg || Ug.splice(1, 1);
const H1 = () => ({
  order: Ug,
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  convertDetectedLanguage: (e) => e,
});
class Lg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = 'languageDetector'), (this.detectors = {}), this.init(t, n);
  }
  init() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = t),
      (this.options = T1(n, this.options || {}, H1())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (l) => l.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = a),
      this.addDetector(A1),
      this.addDetector(C1),
      this.addDetector(D1),
      this.addDetector(z1),
      this.addDetector(U1),
      this.addDetector(L1),
      this.addDetector(M1),
      this.addDetector(_1);
  }
  addDetector(t) {
    return (this.detectors[t.name] = t), this;
  }
  detect() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      n = [];
    return (
      t.forEach((a) => {
        if (this.detectors[a]) {
          let l = this.detectors[a].lookup(this.options);
          l && typeof l == 'string' && (l = [l]), l && (n = n.concat(l));
        }
      }),
      (n = n.map((a) => this.options.convertDetectedLanguage(a))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? n
        : n.length > 0
          ? n[0]
          : null
    );
  }
  cacheUserLanguage(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    n &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(t) > -1) ||
        n.forEach((a) => {
          this.detectors[a] &&
            this.detectors[a].cacheUserLanguage(t, this.options);
        }));
  }
}
Lg.type = 'languageDetector';
const B1 = {
  en: {
    translation: {
      navbar: {
        plans: 'Performance Plans',
        actors: 'Actors Introduction',
        memberships: 'Memberships Program',
        about: 'About Us',
        more: 'More',
        login: 'Login',
        logout: 'Logout',
      },
      dropdown: {
        talkshow: 'Talk Show',
        guidelines: 'Guidelines',
        rental: 'Venue Rental',
        recruitment: 'Recruitment',
      },
      actors: {
        note: '*Sorted alphabetically by name',
        annie: {
          title: 'Annie',
          subtitle: 'Stand-up Comedian',
          description:
            'Top Ten contestant in the Raw New Zealand Stand-up Competition 2023, New Zealand Comedy Association Newcomer of the Year 2023, Best Joke of the Year 2024, Comedy League Rising Star of the Year 2024. She has a unique perspective and a powerful narrative, especially on workplace and immigration topics. More than 100 performances, bilingual Chinese and English, easy to switch.',
        },
        bazi: {
          title: 'Ba Zi',
          subtitle: 'Stand-up Rising Star / Life Observer',
          description:
            "Behind the bitter tongue there is a colder soul. Good at tricky straight to, determined to do the mouth of the cow. He has experience in stand-up shows from scratch, has experience in performing in various venues, and believes that hard work pays for sweat and hard work pays for bread. Underneath the bear's appearance is a will like steel.",
        },
        charlotte: {
          title: 'Charlotte',
          subtitle: 'Code Enthusiast and Comedian',
          description:
            'There are many ugly words, said the self-proclaimed Cassimo. After watching the performance of teacher Ba Zi, I was inspired to go to the road of talk show from now on. Love every lovely person, create every outrageous thing.',
        },
        laohu: {
          title: 'Tiger',
          subtitle: 'Stand-up Rising Star',
          description:
            "Use humor and exaggeration to express daily trivia. Born in Auckland, grew up in China, the most abc Chinese, the most Chinese abc. Influenced by Kevin Hart's ridiculous and funny acting style, he began to write stand-up jokes. Let yourself go on stage, give the audience the most powerful jokes. The laughter of the audience is the greatest recognition and the fountain of motivation. Look forward to bringing Tiger humor to the world.",
        },
        qixue: {
          title: 'Qi Xue',
          subtitle: 'Stand-up Rising Star',
          description:
            'A natural comedian, with a humorous way to interpret the family, life, the workplace of ironic stories. In her stories, each character is a real and unique soul, a soul that expresses its life as vividly as she wants it to. Her unique and distinctive personality tries to break the social constraints on gender, occupation and self.',
        },
        summer: {
          title: 'Summer',
          subtitle: 'Stand-up Comedian',
          description:
            "Judges' Recommendation Award (3rd place) & Finalists - 2022 Raw Comedy Quest, Nominated - Best Newcomer - 2022 New Zealand Comedy Society Award, Nominated - Best Joke - 2023 New Zealand Comedy Society Award. I won a pizza at my first open Mic, and I had the illusion that a talk show could be a meal. After that, it was a slippery slope to sharing every detail on talk shows.",
        },
        vincent: {
          title: 'Vincent',
          subtitle: 'A forensic accounting expert who tells jokes',
          description:
            'From the love of making funny teachers, to the work of good financial reports into a joke. Cultural differences and workplace anecdotes are a source of inspiration. Inspired by George Carlin, he has a passion for talk shows. Join the You Show club and start your career on stage. The interaction between accounting women and straight men is presented in humorous jokes, which are deeply loved by the audience.',
        },
        wanning: {
          title: 'Wan Ning',
          subtitle: 'A therapist/dance therapist who makes people laugh',
          description:
            "Dance with the body and the mind, and talk with the audience with the stage. Delicate movements and vivid performances give life to ideas, use body language and humor to break the emotional barrier, and make ideas more warm and tense. Show the absurdity of life with vitality, convey emotional depth with performance, narrow the distance with the audience in laughter, and make talk show an art of 'seeing' views.",
        },
      },
      memberships: {
        note1: '*For details, please consult in-store staff.',
        note2:
          '**The final interpretation of the membership program is reserved by You Show Studio Limited.',
      },
      wonderful_review: {
        title: 'Wonderful Review',
        slides: {
          1: {
            title: 'A-Pan',
            subtitle: 'Stand-up Comedy Special',
            description: '"Be Proud of Yourself"',
          },
          2: {
            title: 'Chen Xiaojing',
            subtitle: 'Comedy Special',
            description: '"Daughter of the Market"',
          },
          3: {
            title: 'Liang Haiyuan',
            subtitle: 'Comedy Special',
            description: '"The Man in the Corner 2"',
          },
          4: {
            title: 'You Show All-Star Lineup',
            subtitle: 'Annual Comedy Show',
            description: 'Liu Renchen, Yu Xiangyu, Lao Wang, Caicai, Echo',
          },
          5: {
            title: 'Zhai Jianing',
            subtitle: 'Stand-up Comedy Featured Show',
            description: '"Not Obedient and Resentful"',
          },
          6: {
            title: 'Zhang Haozhe',
            subtitle: 'Stand-up Comedy Special',
            description: '"The Wandering Plan"',
          },
          7: {
            title: 'Hei Deng',
            subtitle: 'Stand-up Comedy Special',
            description: '"Unseen"',
          },
        },
      },
      contact_us: {
        customer_service: 'Customer Service',
        wechat: 'WeChat / Public Account:',
        email: 'Email:',
      },
      about_us: {
        description1:
          "is New Zealand's first Chinese stand-up comedy club, established in 2022. Despite being a young organization, we have successfully hosted over 50 performances of various scales. In addition to Chinese shows, we also operate English stand-up comedy, supporting a wide Asian actor and audience base. We have rapidly established a unique brand image and extensive reputation in New Zealand's comedy scene.",
        description2:
          "Our director is a board member of the New Zealand Comedy Association, with extensive industry experience and connections. This not only ensures the quality of our programs but also enables us to have significant influence and a prominent position in New Zealand's comedy industry.",
      },
      introduction: {
        title1: 'How are jokes born?',
        description1:
          'Many people may misunderstand and think that stand-up comedians should frequently update their jokes. In fact, joke creation requires repeated polishing and testing.',
        subtitle1:
          'Here is the process of creating a complete commercial performance joke:',
        steps: [
          'The comedian extracts material from daily life and writes the initial joke content.',
          "The new joke is performed at open mic sessions to evaluate its effect through the audience's reaction.",
          'Keep the parts with good audience reactions, remove or modify less exciting content, and test again at open mic.',
          'After multiple tests and adjustments, a mature joke is ready for commercial performances.',
        ],
        description2:
          'Stand-up comedy demands originality, making content creation the biggest challenge for comedians. The birth of a great joke may require months of effort and numerous open mic sessions, but this persistence leads to the laughter-inducing comedy content you enjoy.',
        title2: 'About Stand-up Comedy',
        description3:
          'Stand-up comedy is an art form where individuals express personal observations and viewpoints humorously. It primarily features solo performances with minimal stage equipment (such as a microphone and lighting). Performers convey their deep thoughts on life, society, and personal experiences in a witty manner, evoking audience resonance and laughter.',
        subtitle2: 'Forms of Stand-up Comedy',
        description4:
          'Based on the scale and nature of the performance, stand-up comedy is usually divided into the following forms:',
        formats: [
          {
            title: '1. Open Mic',
            description:
              'Open mic is where comedians practice and test new jokes. Experienced comedians experiment with and refine their new jokes, while newcomers also take the stage. It’s a kind of “blind box” performance.',
          },
          {
            title: '2. Commercial Shows',
            description:
              'Commercial shows involve multiple comedians performing for about 10-15 minutes each. These performances offer a variety of styles, allowing the audience to experience different comedic approaches in one session.',
          },
          {
            title: '3. Specials/Headliner Shows',
            description:
              'A special is a solo performance by one comedian, typically lasting around 60 minutes and centered on a core theme. A headliner show is a shorter performance (about 45 minutes) but equally requires thorough preparation and creativity.',
          },
        ],
      },
      performanceNotice: {
        title: 'Performance Notice',
        subtitle:
          'To ensure an enjoyable experience for everyone, please pay attention to the following:',
        rules: [
          {
            image: '/images/tomato_wine.png',
            alt: 'Bar Icon',
            text: 'The bar will be open <span>30 minutes</span> before the performance and during intermission. <span>The bar will be closed</span> during the performance to avoid disrupting the experience.',
          },
          {
            image: '/images/tomato_accompany.png',
            alt: 'Accompany Icon',
            text: 'Some performances are recommended for audiences <span>aged 16 and above.</span> Minors must be accompanied by parents or guardians.',
          },
          {
            image: '/images/tomato_no_recording.png',
            alt: 'No Recording Icon',
            text: '<span>No recording, video or live broadcast is allowed</span> during the performance, but you are welcome to take photos. Please <span>turn off the flash</span> to avoid disturbing others.',
          },
          {
            image: '/images/tomato_mute.png',
            alt: 'Mute Icon',
            text: 'To avoid interfering with the performance, please turn your phone to <span>mute</span> or <span>vibrate</span> mode.',
          },
        ],
        remarks: [
          'Performance tickets are <span>non-refundable</span> and non-reschedulable after purchase.',
          'Admission starts <span>30 minutes</span> before the performance. Please arrive on time and take your assigned seats.',
          '<span>Special shows</span> do not have intermissions. For <span>open mic</span> performances, there will be a <span>10-minute</span> break.',
          'Please <span>respect</span> the performers and avoid interruptions. Relax and enjoy the show!',
        ],
      },
      rentalDetail: {
        title: 'Venue Rental',
        address: {
          title: 'Address',
          name: 'Am2Pm',
          location: '7 Corinthian Drive, Albany, Auckland 0632',
        },
        details:
          'Our venue is also perfect for various indoor activities such as birthday parties, corporate events, holiday parties, and private gatherings. We provide <span>flexible and diverse</span> spatial arrangements and professional on-site support, making us your ideal event venue choice.',
        whyUsTitle: 'Why Choose Us?',
        whyUs:
          'We can flexibly adjust seating, lighting, and stage settings according to event needs. With high-quality sound and lighting systems and a well-stocked bar, we provide <span>comprehensive support</span> for your event. Located in the "North Shore Chinese Universe Center," our venue offers <span>convenient transportation</span>, ample parking, and complete surrounding facilities. Our team assists you in arranging event details, allowing you to be worry-free.',
        contact: {
          title: 'Contact Us',
          info: 'To learn more about the venue or to make a reservation, please contact:',
        },
      },
      recruitment: {
        title: 'Recruitment',
        introduction:
          'Are you passionate about stand-up comedy?<br />Do you dream of standing on stage, using your humor to connect with audiences and spread joy?<br />Now, <span>Youshow</span> Comedy Club opens its doors to dreamers like you. The next "King of Stand-Up Comedy" could be you!',
        whatWeNeed: {
          title: 'What Are We Looking For?',
          description:
            'Observant and thoughtful about life, loves sharing stories and perspectives;<br />Not afraid of trying new things, willing to face stage challenges;<br />No experience needed, just a love for comedy and the courage to take the first step.',
        },
        growth: {
          title: 'How Do Newcomers Grow?',
          description:
            'Open mic – the starting point for every stand-up comedian.<br />Whether you are trying for the first time or refining new material, open mics provide valuable practical opportunities.<br />We have a group of like-minded peers to share experiences and encourage growth together.<br />Regular script reading sessions and workshops with industry experts to hone your skills.',
        },
        benefits: {
          title: 'What Will You Gain by Joining Us?',
          description:
            'A stage to showcase yourself;<br />A group of humorous and interesting friends;<br />The sense of achievement in turning ideas into laughter;<br />Even opportunities to perform commercially and become a professional comedian!',
        },
        howToJoin: {
          title: 'How to Join Us?',
          contact: 'Contact us: <a>youshow.nz@gmail.com</a>',
          info: 'We regularly host newcomer orientation sessions and open mics. Everyone passionate about comedy is welcome to join!',
        },
        footer:
          'Youshow Comedy Club looks forward to turning life’s moments into stage laughter with you!',
      },
    },
  },
  zh: {
    translation: {
      navbar: {
        plans: '演出计划',
        actors: '演员介绍',
        memberships: '会员计划',
        about: '关于我们',
        more: '更多',
        login: '登录',
        logout: '退出',
      },
      dropdown: {
        talkshow: '脱口秀',
        guidelines: '观演须知',
        rental: '场地租赁',
        recruitment: '新人招募',
      },
      actors: {
        note: '*按照名字首字母顺序排列',
        annie: {
          title: 'Annie',
          subtitle: '脱口秀演员',
          description:
            '2023 年新西兰 Raw 单口喜剧大赛十强选手，2023 新西兰喜剧协会年度最佳新人提名，2024 年度最佳笑话提名，2024 喜剧联盟年度新星奖。视角独特，梗新颖有力，尤为擅长职场和移民话题。演出场次超过百场，中英文双语，切换自如。',
        },
        bazi: {
          title: '巴子老师',
          subtitle: '脱口秀新星/生活小观察家',
          description:
            '毒舌的背后却有一副更冷漠的灵魂。善于刁钻直给，立志做牛马的嘴替。从无到有的脱口秀经验，拥有各种不同场地的演出经验，坚信努力能换来汗水，勤奋换来大饼，熊的外表下是钢铁一般的意志。',
        },
        charlotte: {
          title: 'Charlotte',
          subtitle: '热爱玩弄语言的代码民工',
          description:
            '人丑话又多，自称卡西莫说。之前看了巴子老师的演出，受了启发从此走向了脱口秀这条路。爱每一个可爱的人，创飞每个离谱的事。',
        },
        laohu: {
          title: '老虎',
          subtitle: '脱口秀新星',
          description:
            '用幽默与夸张的语言来表达日常琐事。出生在奥克兰，在中国长大，最 abc 的中国人，最中国人的 abc。受 Kevin Hart 无厘头又好笑的表演风格影响，开始写脱口秀段子。舞台上放飞自我，给观众们带来最劲爆的段子。观众的笑声是最大的认可，也是动力之泉。期待“虎式幽默”带到全球各地。',
        },
        qixue: {
          title: '齐雪',
          subtitle: '脱口秀新星',
          description:
            '天生的段子手，以诙谐幽默的方式演绎家庭，生活，职场发生的啼笑皆非的故事。在她的故事里，每一个角色都是真实且独一无二的灵魂，正如她自己所期待的那样，鲜活的表达自己生命的灵魂。她独特鲜明的个性尝试打破社会对性别，职业，自我的束缚。',
        },
        summer: {
          title: 'Summer',
          subtitle: '脱口秀演员',
          description:
            '评委推荐奖”（第三名）& 决赛选手 - 2022 Raw Comedy Quest, 提名 - 最佳新人 - 2022 新西兰喜剧协会奖, 提名 - 最佳笑话 - 2023 新西兰喜剧协会奖。 第一次参加开放麦就赢得了一份披萨，产生了脱口秀可以当饭吃的幻觉。之后，就走上了在脱口秀上事无巨细分享鸡毛蒜皮的不归路。',
        },
        vincent: {
          title: 'Vincent',
          subtitle: '讲笑话的法务会计专家',
          description:
            '从爱给老师捧哏开始，到工作中善于将财务报告转化为笑点。文化差异和职场趣事，是创作的灵感源泉。受 George Carlin 启发，对脱口秀充满热情。加入 You Show 俱乐部，开启舞台生涯，将会计职场女性与直男的互动冲突，以诙谐段子呈现，深受观众喜爱。',
        },
        wanning: {
          title: '婉宁',
          subtitle: '会逗大家笑的心理咨询师/舞动治疗师',
          description:
            '用肢体与心灵共舞，用舞台与观众对话。通过细腻动作和生动表演赋予观点生命力，用身体语言和幽默打破情感隔阂，让观点更具温度与张力。以活力展现生活荒诞，用表演传递情感深意，在笑声中拉近与观众的距离，让脱口秀成为“看见”观点的艺术。',
        },
      },
      memberships: {
        note1: '*详情请咨询店内工作人员',
        note2: '**会员计划最终解释权由 You Show Studio Limited 所有',
      },
      wonderful_review: {
        title: '精彩回顾',
        slides: {
          1: {
            title: 'A-Pan',
            subtitle: '单口喜剧个人专场',
            description: '《望子成风》',
          },
          2: {
            title: '陈晓靖',
            subtitle: '脱口秀专场',
            description: '《菜市场的女儿》',
          },
          3: {
            title: '梁海源',
            subtitle: '脱口秀专场',
            description: '《坐在角落的人2》',
          },
          4: {
            title: 'You Show 首场全明星阵容',
            subtitle: '年度大咖秀',
            description: '刘仁铖,于祥宇,大老王,菜菜,Echo',
          },
          5: {
            title: '翟佳宁',
            subtitle: '单口喜剧主打秀',
            description: '《不服不忿》',
          },
          6: {
            title: '张灏喆',
            subtitle: '单口喜剧专场',
            description: '《流浪计划》',
          },
          7: {
            title: '黑灯',
            subtitle: '单口喜剧专场',
            description: '《君不见》',
          },
        },
      },
      contact_us: {
        customer_service: '在线客服',
        wechat: '微信/公众号:',
        email: '邮箱:',
      },
      about_us: {
        description1:
          '是新西兰首家运营中文脱口秀项目的华人脱口秀俱乐部，成立于 2022 年。尽管成立时间不长，但我们已经成功举办了超过 50 场大大小小的演出。除中文节目之外，我们还运营英文脱口秀，以支持广泛的亚裔演员及观众群体，并迅速在新西兰的喜剧界树立了独特的品牌形象和广泛的知名度。',
        description2:
          '我们的主理人是新西兰喜剧协会的董事之一，具备丰富的行业经验和广泛的人脉资源。这不仅为我们的节目质量提供了保障，也使我们能够在新西兰的喜剧行业中拥有重要的地位和影响力。',
      },
      introduction: {
        title1: '段子是如何诞生的？',
        description1:
          '很多人可能会误解，认为脱口秀演员应该经常更新段子。但实际上，段子创作需要经过反复打磨和测试。',
        subtitle1: '以下是一个完整商演段子的诞生过程：',
        steps: [
          '演员从日常生活中提取素材，写下初步的段子内容。',
          '将新段子拿到开放麦场合演出，通过观众的现场反应评估效果。',
          '保留观众反应良好的部分，删减或修改不够精彩的内容，再次在开放麦中测试。',
          '经过多次测试和调整，最终打磨出一个成熟的段子，可以用于商业演出。',
        ],
        description2:
          '脱口秀是一门要求原创的艺术，因此对于演员来说，内容创作是最大的难关。一个优秀段子的诞生可能需要演员投入数月时间，经历十几场开放麦来反复改进，但正是这种坚持，造就了让你捧腹大笑的喜剧内容。',
        title2: '关于脱口秀',
        description3:
          '脱口秀,原名单口喜剧(stand-up comedy),是一种通过幽默语言表达个人观察和观点的艺术形式,通常以单人表演为主,借助简约的舞台设备（如麦克风和灯光）进行呈现。表演者通过对生活、社会及个人经历的深刻思考,用风趣的语言将其表达出来,引发观众共鸣和笑声。',
        subtitle2: '脱口秀的演出形式',
        description4:
          '根据表演规模和性质的不同，脱口秀通常分为以下三种演出形式：',
        formats: [
          {
            title: '1. 开放麦(Open Mic)',
            description:
              '开放麦是脱口秀演员练习和试验新段子的地方。老演员会在开放麦试验和打磨新段子，同时也会有新演员的登台。可以说，开放麦是某种意义上的“盲盒”演出。',
          },
          {
            title: '2. 商演拼盘(Commercial Shows)',
            description:
              '商演拼盘是由多位脱口秀演员联合演出的形式,每位演员表演10～15分钟左右。拼盘演出风格多样,可以让观众一次性体验不同演员的喜剧风格。',
          },
          {
            title: '3. 专场/主打秀',
            description:
              '专场是一位演员独立完成的个人演出,通常时长为60分钟左右,内容围绕一个核心主题展开。主打秀则是更短时长的表演,约45分钟左右,但同样需要经过充分的创作与打磨。这种形式要求演员具备深厚的创作能力和舞台表现力。',
          },
        ],
      },
      performanceNotice: {
        title: '观演须知',
        subtitle:
          '为了确保每位观众和演员都能享受一场愉快的脱口秀体验，请注意以下事项：',
        rules: [
          {
            image: '/images/tomato_wine.png',
            alt: '酒水图标',
            text: '吧台将在演出前<span>30分钟</span>以及中场休息时提供酒水售卖服务，演出期间将<span>关闭吧台</span>以免影响观演体验。',
          },
          {
            image: '/images/tomato_accompany.png',
            alt: '陪同图标',
            text: '部分演出建议<span>16岁</span>以上观众观看，未成年人需家长陪同。',
          },
          {
            image: '/images/tomato_no_recording.png',
            alt: '禁止录像图标',
            text: '演出期间<span>禁止</span>录音、录像或现场直播， 但欢迎拍照留念，请<span>关闭闪光灯</span>以免影响他人。',
          },
          {
            image: '/images/tomato_mute.png',
            alt: '静音图标',
            text: '为了避免干扰表演，请将手机调至<span>静音</span>或<span>振动</span>模式。',
          },
        ],
        remarks: [
          '演出票非普通商品，购票后<span>不支持</span>退款，改期，敬请谅解。',
          '演出开场前<span>半小时</span>开始检票，请提前到场，按座位号入座。',
          '<span>专场</span>演出<span>不设</span>中场休息，<span>开放麦</span>演出期间有<span>十分钟</span>的中场休息。',
          '请<span>尊重</span>演员的表演，不随意打断，放松心情，尽情享受快乐。',
        ],
      },
      rentalDetail: {
        title: '场地租赁',
        address: {
          title: '地址',
          name: 'Am2Pm',
          location: '7 Corinthian Drive, Albany, Auckland 0632',
        },
        details:
          '我们俱乐部同样也适合举办各种类型的室内活动，例如生日派对，公司活动，节日派对，私人聚会等。 我们提供<span>灵活多样</span>的空间布置和专业的现场支持，是您理想的活动场地选择。',
        whyUsTitle: '为什么选择我们？',
        whyUs:
          '我们可以根据活动需求灵活调整座位、灯光和舞台设置。高品质音响、灯光系统等专业设备、酒水吧<span>一应俱全</span>，为您的活动提供保障。 场地位于“北岸华人宇宙中心”，<span>交通便捷</span>，停车位充足，周边配套设施完善。我们团队会协助您安排活动细节，让您全程无忧。',
        contact: {
          title: '联系我们',
          info: '想了解更多场地信息或预订，请联系：',
        },
      },
      recruitment: {
        title: '新人招募',
        introduction:
          '你是否对脱口秀充满热情<br />你是否也曾想站在舞台上，用自己的语言和幽默感染观众、传递快乐？<br />现在，<span>Youshow</span> 脱口秀俱乐部为每一位有梦想的你敞开大门，下一个“脱口秀大王”就是你！',
        whatWeNeed: {
          title: '我们需要怎样的你?',
          description:
            '对生活充满观察和思考，喜欢分享自己的故事和观点；<br />不怕尝试新事物，愿意面对舞台挑战；<br />无需经验，只需热爱脱口秀，敢于迈出第一步。',
        },
        growth: {
          title: '新人如何成长?',
          description:
            '开放麦——这是每位脱口秀新演员的起点。<br />无论你是初次尝试还是锻炼新段子，开放麦为你提供了宝贵的实战机会。<br />我们有一群志同道合的伙伴，与你分享经验、互相鼓励，一起成长。<br />定期组织读稿会，联合国内大咖进行表演技巧的培训，帮助你不断提升。',
        },
        benefits: {
          title: '加入我们，你能收获什么？',
          description:
            '一个展示自我的舞台；<br />一群幽默且有趣的朋友；<br />将你的想法化为笑声的成就感；<br />甚至还有机会参与商演，成为一名真正的脱口秀演员！',
        },
        howToJoin: {
          title: '如何加入我们？',
          contact: '联系我们: <a>youshow.nz@gmail.com</a>',
          info: '定期举办新人说明会和开放麦，欢迎每一位热爱喜剧的朋友报名！',
        },
        footer:
          'Youshow 脱口秀俱乐部期待与你一起，把生活中的点滴变成舞台上的笑声！',
      },
    },
  },
};
je.use(Lg)
  .use(S1)
  .init({
    resources: B1,
    fallbackLng: 'en',
    interpolation: { escapeValue: !1 },
  });
const k1 = [
    { key: 'plans', href: '/plans' },
    { key: 'actors', href: '/actors' },
    { key: 'memberships', href: '/memberships' },
    { key: 'about', href: '/contact' },
  ],
  q1 = [
    { key: 'talkshow', href: '/talkshow' },
    { key: 'guidelines', href: '/guidelines' },
    { key: 'rental', href: '/rental' },
    { key: 'recruitment', href: '/recruitment' },
  ];
function Gt() {
  const e = vn(),
    t = ii(),
    { t: n, i18n: a } = Et(),
    [l, i] = E.useState(!1),
    [s, r] = E.useState(!1),
    u = E.useRef(null);
  E.useEffect(() => {
    const m = localStorage.getItem('token');
    i(!!m);
  }, []);
  const o = () => {
      localStorage.removeItem('token'), i(!1), t('/login');
    },
    c = () => {
      clearTimeout(u.current), r(!0);
    },
    h = () => {
      u.current = setTimeout(() => {
        r(!1);
      }, 300);
    },
    f = () => {
      const m = a.language === 'en' ? 'zh' : 'en';
      a.changeLanguage(m);
    };
  return d.jsxs('header', {
    className: 'bg-orange-500 rounded-full shadow-lg max-w-6xl my-2 mx-auto',
    children: [
      d.jsxs('nav', {
        'aria-label': 'Global',
        className: 'flex px-6',
        children: [
          d.jsx('div', {
            className: 'flex flex-1',
            children: d.jsx('a', {
              href: '/',
              className: '-m-2.5 p-0.5',
              children: d.jsx('img', {
                alt: 'Avatar',
                src: '/images/Avatar.jpg',
                style: {
                  height: '80px',
                  width: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                },
              }),
            }),
          }),
          d.jsxs('div', {
            className: 'flex gap-x-8 items-center',
            children: [
              k1.map((m) =>
                d.jsx(
                  'a',
                  {
                    href: m.href,
                    className: `text-lg font-bold ${e.pathname === m.href ? 'text-orange-200 underline' : 'text-black hover:text-orange-200'}`,
                    children: n(`navbar.${m.key}`),
                  },
                  m.key
                )
              ),
              d.jsxs('div', {
                className: 'relative',
                onMouseEnter: c,
                onMouseLeave: h,
                children: [
                  d.jsx('button', {
                    className:
                      'text-lg font-bold text-black hover:text-orange-200',
                    children: n('navbar.more'),
                  }),
                  s &&
                    d.jsx('div', {
                      className:
                        'absolute left-0 mt-2 w-24 bg-orange-500 rounded-lg shadow-lg z-20',
                      children: q1.map((m) =>
                        d.jsx(
                          'a',
                          {
                            href: m.href,
                            className:
                              'block px-1 py-2 text-black text-sm font-semibold hover:text-orange-200 rounded',
                            children: n(`dropdown.${m.key}`),
                          },
                          m.key
                        )
                      ),
                    }),
                ],
              }),
            ],
          }),
          d.jsxs('div', {
            className: 'flex flex-1 justify-end gap-x-2',
            children: [
              l
                ? d.jsxs('button', {
                    onClick: o,
                    className:
                      'text-xs font-bold text-black hover:text-orange-200',
                    children: [
                      n('navbar.logout'),
                      ' ',
                      d.jsx('span', { 'aria-hidden': 'true', children: '→' }),
                    ],
                  })
                : d.jsxs('a', {
                    href: '/login',
                    className:
                      'text-xs font-bold text-black hover:text-orange-200',
                    children: [
                      n('navbar.login'),
                      ' ',
                      d.jsx('span', { 'aria-hidden': 'true', children: '→' }),
                    ],
                  }),
              d.jsxs('button', {
                type: 'button',
                onClick: f,
                className:
                  'text-black hover:text-gray-700 flex items-center gap-1',
                'aria-label': 'Translate',
                children: [
                  d.jsx('img', {
                    src: '/images/translate-icon.svg',
                    alt: 'Translate',
                    className: 'h-6 w-6',
                  }),
                  d.jsx('span', {
                    className: 'text-sm font-semibold',
                    children: a.language === 'en' ? '中文' : 'English',
                  }),
                ],
              }),
              d.jsx('button', {
                type: 'button',
                className: 'text-black hover:text-gray-700',
                'aria-label': 'Share',
                onClick: () => {
                  navigator.share
                    ? navigator
                        .share({
                          title: document.title,
                          text: 'New Zealand`s First Chinese Stand-Up Comedy Club!',
                          url: window.location.href,
                        })
                        .then(() => console.log('Page shared successfully'))
                        .catch((m) => console.error('Error sharing:', m))
                    : alert(
                        'Sharing is not supported on this browser. Please copy the URL manually.'
                      );
                },
                children: d.jsx('img', {
                  src: '/images/share-icon.svg',
                  alt: 'Share',
                  className: 'h-6 w-6',
                }),
              }),
            ],
          }),
        ],
      }),
      d.jsx('script', {
        src: 'https://static.elfsight.com/platform/platform.js',
        async: !0,
      }),
      d.jsx('div', {
        class: 'elfsight-app-e4c2828d-37b3-45fa-b37a-114698f8cc79',
        'data-elfsight-app-lazy': !0,
      }),
    ],
  });
}
function Y1() {
  const { t: e } = Et();
  return d.jsxs('div', {
    className:
      'flex items-center justify-between p-5 w-full bg-orange-500 rounded-2xl max-w-7xl mx-auto',
    children: [
      d.jsx('div', {
        className: 'flex-shrink-0 mr-44',
        children: d.jsx('img', {
          src: '/images/Avatar.jpg',
          alt: 'YouShow Logo',
          className: 'w-[400px] h-[200px] object-cover ml-40',
        }),
      }),
      d.jsxs('div', {
        className:
          'flex flex-col flex-1 ml-10 my-1 text-lg font-bold leading-relaxed',
        children: [
          d.jsx('p', {
            className: 'mb-2',
            children: e('contact_us.customer_service'),
          }),
          d.jsxs('p', {
            className: 'mb-2',
            children: [
              e('contact_us.wechat'),
              ' ',
              d.jsx('span', {
                className: 'text-black font-extrabold',
                children: 'youshow-nz',
              }),
            ],
          }),
          d.jsxs('p', {
            children: [
              e('contact_us.email'),
              ' ',
              d.jsx('span', {
                className: 'text-black font-extrabold',
                children: 'youshow.nz@gmail.com',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ri = [
  { id: 1, image: '/images/contactus/apan.jpg' },
  { id: 2, image: '/images/contactus/chenxiaojing.jpg' },
  { id: 3, image: '/images/contactus/lianghaiyuan.jpg' },
  { id: 4, image: '/images/contactus/niandudakaxiu.jpg' },
  { id: 5, image: '/images/contactus/zhaijianing.jpg' },
  { id: 6, image: '/images/contactus/zhanghaozhe.jpg' },
  { id: 7, image: '/images/contactus/heideng.jpg' },
];
function V1() {
  const { t: e } = Et(),
    [t, n] = E.useState(0),
    a = () => {
      t < Ri.length - 3 && n((s) => s + 1);
    },
    l = () => {
      t > 0 && n((s) => s - 1);
    },
    i = Ri.slice(t, t + 3);
  return d.jsxs('div', {
    className: 'flex flex-col justify-center items-center',
    children: [
      d.jsx('h1', {
        className: 'text-4xl font-black text-black mb-10 mt-8',
        children: e('wonderful_review.title'),
      }),
      d.jsxs('div', {
        className:
          'relative w-full max-w-6xl flex items-center justify-between',
        children: [
          d.jsx('button', {
            onClick: l,
            disabled: t === 0,
            className: `absolute left-0 p-3 rounded-full text-white transition-transform transform hover:scale-110 z-10 ${t === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-orange-600'}`,
            children: '‹',
          }),
          d.jsx('div', {
            className: 'flex gap-4 justify-center -mt-6',
            children: i.map((s) =>
              d.jsxs(
                'div',
                {
                  className:
                    'flex-shrink-0 w-1/3 bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500',
                  children: [
                    d.jsx('img', {
                      src: s.image,
                      alt: e(`wonderful_review.slides.${s.id}.title`),
                      className: 'w-full h-[500px] object-cover rounded-t-2xl ',
                    }),
                    d.jsxs('div', {
                      className: 'p-4 text-center',
                      children: [
                        d.jsx('h3', {
                          className: 'text-xl font-bold text-black',
                          children: e(`wonderful_review.slides.${s.id}.title`),
                        }),
                        d.jsx('p', {
                          className:
                            'text-orange-500 text-md font-semibold mt-2',
                          children: e(
                            `wonderful_review.slides.${s.id}.subtitle`
                          ),
                        }),
                        d.jsx('p', {
                          className:
                            'text-gray-600 text-sm mt-2 whitespace-pre-line',
                          children: e(
                            `wonderful_review.slides.${s.id}.description`
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                s.id
              )
            ),
          }),
          d.jsx('button', {
            onClick: a,
            disabled: t >= Ri.length - 3,
            className: `absolute right-0 p-3 rounded-full text-white transition-transform transform hover:scale-110 z-10 ${t >= Ri.length - 3 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-orange-600'}`,
            children: '›',
          }),
        ],
      }),
    ],
  });
}
function $1() {
  const { t: e } = Et();
  return d.jsx('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover bg-center min-h-screen items-center p-5",
    children: d.jsxs('div', {
      className: 'pt-0 px-8 pb-8',
      children: [
        d.jsx('div', {
          className: '-mt-5 top-0 left-0 right-0 z-50',
          children: d.jsx(Gt, {}),
        }),
        d.jsx('div', { className: '-mt-2', children: d.jsx(V1, {}) }),
        d.jsx('div', {
          className: 'my-8',
          children: d.jsx('div', {
            className:
              'w-full h-1 bg-gradient-to-r from-transparent via-[rgb(250,127,42)] to-transparent',
          }),
        }),
        d.jsx('div', {
          className: 'flex justify-center mb-8 mt-12',
          children: d.jsxs('div', {
            className: 'relative w-[400px] h-[300px]',
            children: [
              d.jsx('div', {
                className:
                  'absolute w-full h-full bg-orange-400 border-4 border-black rounded-2xl left-4 top-2',
              }),
              d.jsx('div', {
                className:
                  'absolute w-full h-full bg-cover bg-center rounded-2xl',
                style: { backgroundImage: 'url("/images/aboutus.jpg")' },
              }),
            ],
          }),
        }),
        d.jsxs('div', {
          className:
            'text-center max-w-4xl mx-auto -mt-2 text-lg leading-relaxed font-extrabold text-black',
          children: [
            d.jsxs('p', {
              className: 'text-xl mb-6',
              children: [
                d.jsx('span', {
                  className: 'font-black text-2xl text-black',
                  children: 'You Show Studio',
                }),
                ' ',
                e('about_us.description1'),
              ],
            }),
            d.jsx('p', {
              className: 'text-xl',
              children: e('about_us.description2'),
            }),
          ],
        }),
        d.jsx('div', {
          className: 'mt-12 my-48',
          children: d.jsx('div', {
            className:
              'w-full h-1 bg-gradient-to-r from-transparent via-[rgb(250,127,42)] to-transparent',
          }),
        }),
        d.jsx('div', { className: '-mt-40', children: d.jsx(Y1, {}) }),
      ],
    }),
  });
}
function bn() {
  return d.jsx('div', {
    className: 'fixed bottom-10 right-10',
    children: d.jsxs('div', {
      className: 'relative',
      children: [
        d.jsx('input', {
          type: 'text',
          placeholder: 'Search',
          className:
            'border-2 border-gray-300 rounded-full py-1 pl-5 pr-12 text-black font-semibold text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200',
        }),
        d.jsx('svg', {
          className:
            'absolute right-3 top-1/2 transform -translate-y-1/2 text-black',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
          width: '18',
          height: '18',
          children: d.jsx('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '2',
            d: 'M11 19c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm4.293-2.707L20 20.5',
          }),
        }),
      ],
    }),
  });
}
const G1 = '' + new URL('../images/actors/Annie.jpg', import.meta.url).href,
  X1 = '' + new URL('../images/actors/Bazi.jpg', import.meta.url).href,
  Q1 = '' + new URL('../images/actors/Charlotte.jpg', import.meta.url).href,
  K1 = '' + new URL('../images/actors/Laohu.jpg', import.meta.url).href,
  Z1 = '' + new URL('../images/actors/Qixue.jpg', import.meta.url).href,
  J1 = '' + new URL('../images/actors/Summer.jpg', import.meta.url).href,
  F1 = '' + new URL('../images/actors/Vincent.jpg', import.meta.url).href,
  W1 = '' + new URL('../images/actors/Wanning.jpg', import.meta.url).href,
  P1 = [
    { id: 'annie', image: G1 },
    { id: 'bazi', image: X1 },
    { id: 'charlotte', image: Q1 },
    { id: 'laohu', image: K1 },
    { id: 'qixue', image: Z1 },
    { id: 'summer', image: J1 },
    { id: 'vincent', image: F1 },
    { id: 'wanning', image: W1 },
  ];
function I1() {
  const { t: e } = Et();
  return d.jsxs('div', {
    className: 'relative grid grid-cols-1 lg:grid-cols-2 gap-10',
    children: [
      P1.map((t) =>
        d.jsxs(
          'div',
          {
            className:
              'p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center',
            children: [
              d.jsx('img', {
                src: t.image,
                alt: e(`actors.${t.id}.title`),
                className: 'w-52 h-80 object-cover rounded-lg',
              }),
              d.jsxs('div', {
                className: 'sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left',
                children: [
                  d.jsx('h2', {
                    className: 'text-orange-500 text-3xl font-black mb-4',
                    children: e(`actors.${t.id}.title`),
                  }),
                  d.jsx('h3', {
                    className: 'text-black text-lg font-semibold mb-4',
                    children: e(`actors.${t.id}.subtitle`),
                  }),
                  d.jsx('p', {
                    className: 'text-black text-base font-sansregular',
                    children: e(`actors.${t.id}.description`),
                  }),
                ],
              }),
            ],
          },
          t.id
        )
      ),
      d.jsx('p', {
        className: 'mt-5 pt-5 text-left text-xs font-bold text-gray-800',
        children: e('actors.note'),
      }),
    ],
  });
}
function ex() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: [
      d.jsxs('div', {
        className: 'pt-0 px-4 pb-8',
        children: [
          d.jsx('div', {
            className: '-mt-5 top-0 left-0 right-0 z-50',
            children: d.jsx(Gt, {}),
          }),
          d.jsx('div', {
            className: 'p-8 px-[100px] pb-[90px]',
            children: d.jsx(I1, {}),
          }),
        ],
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
function tx() {
  const { t: e } = Et();
  return d.jsx('div', {
    className: 'flex flex-col items-center p-16 space-y-12',
    children: d.jsxs('div', {
      className: 'space-y-8',
      children: [
        d.jsx('div', {
          className: 'p-6 rounded-lg bg-cover bg-center',
          style: {
            backgroundImage: "url('/images/199.jpg')",
            width: '650px',
            height: '300px',
          },
        }),
        d.jsx('div', {
          className: 'p-6 rounded-lg bg-cover bg-center',
          style: {
            backgroundImage: "url('/images/666.jpg')",
            width: '650px',
            height: '300px',
          },
        }),
        d.jsx('div', {
          className: 'p-6 rounded-lg bg-cover bg-center',
          style: {
            backgroundImage: "url('/images/999.jpg')",
            width: '650px',
            height: '300px',
          },
        }),
        d.jsxs('div', {
          className:
            'text-base text-gray-800 text-left space-y-2 w-full max-w-md font-bold',
          children: [
            d.jsx('p', { children: e('memberships.note1') }),
            d.jsx('p', { children: e('memberships.note2') }),
          ],
        }),
      ],
    }),
  });
}
function nx() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: [
      d.jsx('div', {
        className: '-mt-5 top-0 left-0 right-0 z-50',
        children: d.jsx(Gt, {}),
      }),
      d.jsx('div', {
        className: 'flex flex-col items-center w-full max-w-4xl mx-auto',
        children: d.jsx('div', { className: '-mt-8', children: d.jsx(tx, {}) }),
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
function ax() {
  return d.jsx('div', {
    className:
      "relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center bg-[url('/images/startbackground.jpg')]",
    children: d.jsxs('div', {
      className: 'flex flex-col items-center',
      children: [
        d.jsx('img', {
          src: '/images/youshow.png',
          alt: 'YOU SHOW',
          className:
            'transition-transform duration-300 hover:scale-110 mx-auto',
          style: { width: '600px' },
        }),
        d.jsx(ec, {
          to: '/login',
          children: d.jsx('button', {
            className:
              'mt-32 bg-orange-500 hover:bg-orange-600 rounded-[39px] px-20 py-4 text-black font-bold text-3xl flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105',
            children: 'GET START',
          }),
        }),
      ],
    }),
  });
}
const Nn = [
  {
    image: '/images/slides1.jpg',
    title: 'The biggest show of the year',
    description: 'YOU SHOW All Stars The biggest show of the year',
  },
  {
    image: '/images/slides2.jpg',
    title: 'Exclusive Experiences',
    description:
      'Experience the thrill of live shows with exclusive VIP access, backstage tours, and meet-and-greet opportunities with your favorite performers.',
  },
  {
    image: '/images/slides3.jpg',
    title: 'Unforgettable Memories',
    description:
      'Capture unforgettable moments and create lifelong memories as you witness performances that inspire and entertain.',
  },
];
function lx() {
  const [e, t] = E.useState(0);
  E.useEffect(() => {
    const l = setInterval(() => {
      n();
    }, 1e4);
    return () => clearInterval(l);
  }, [e]);
  const n = () => {
      t((l) => (l + 1) % Nn.length);
    },
    a = () => {
      t((l) => (l === 0 ? Nn.length - 1 : l - 1));
    };
  return d.jsx('div', {
    className: 'flex flex-col pt-24',
    children: d.jsxs('div', {
      className:
        'flex justify-between items-start mx-auto w-[1300px] h-[600px] gap-12',
      children: [
        d.jsxs('div', {
          className:
            'relative w-[800px] h-[600px] overflow-hidden rounded-xl shadow-lg',
          children: [
            d.jsx('div', {
              className: 'flex transition-transform duration-500',
              style: {
                transform: `translateX(-${e * 100}%)`,
                width: `${Nn.length * 100}%`,
              },
              children: Nn.map((l, i) =>
                d.jsx(
                  'div',
                  {
                    className: 'w-full h-full flex-shrink-0',
                    children: d.jsx('img', {
                      src: l.image,
                      alt: `Slide ${i + 1}`,
                      className: 'w-[35%] h-full object-cover rounded-lg',
                    }),
                  },
                  i
                )
              ),
            }),
            d.jsx('button', {
              onClick: a,
              className:
                'absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20',
              children: '‹',
            }),
            d.jsx('button', {
              onClick: n,
              className:
                'absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20',
              children: '›',
            }),
            d.jsx('div', {
              className:
                'absolute bottom-4 w-full flex justify-center space-x-2 z-20',
              children: Nn.map((l, i) =>
                d.jsx(
                  'button',
                  {
                    onClick: () => t(i),
                    className: `w-3 h-3 rounded-full ${i === e ? 'bg-orange-500' : 'bg-gray-300'}`,
                  },
                  i
                )
              ),
            }),
          ],
        }),
        d.jsx('div', {
          className: 'w-1/3 pl-18 relative',
          children: d.jsxs('div', {
            className: 'relative z-10',
            children: [
              d.jsx('h2', {
                className:
                  'text-6xl font-bold text-orange-500 mb-4 drop-shadow-lg mt-40',
                children: Nn[e].title,
              }),
              d.jsx('p', {
                className:
                  'text-xl text-gray-800 leading-relaxed drop-shadow-lg',
                children: Nn[e].description,
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function ix() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen flex items-center justify-center",
    children: [
      d.jsx('div', {
        className: 'fixed top-0 left-0 right-0 z-50',
        children: d.jsx(Gt, {}),
      }),
      d.jsx('div', {
        className: 'flex flex-col pt-15',
        children: d.jsx('div', {
          className:
            'flex justify-between items-start mx-auto max-w-6xl w-full',
          children: d.jsx('div', {
            className: 'w-2/3',
            children: d.jsx(lx, {}),
          }),
        }),
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
function Mg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: sx } = Object.prototype,
  { getPrototypeOf: nc } = Object,
  Zs = ((e) => (t) => {
    const n = sx.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ut = (e) => ((e = e.toLowerCase()), (t) => Zs(t) === e),
  Js = (e) => (t) => typeof t === e,
  { isArray: $a } = Array,
  Gl = Js('undefined');
function rx(e) {
  return (
    e !== null &&
    !Gl(e) &&
    e.constructor !== null &&
    !Gl(e.constructor) &&
    $e(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _g = ut('ArrayBuffer');
function ux(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _g(e.buffer)),
    t
  );
}
const ox = Js('string'),
  $e = Js('function'),
  Hg = Js('number'),
  Fs = (e) => e !== null && typeof e == 'object',
  cx = (e) => e === !0 || e === !1,
  Gi = (e) => {
    if (Zs(e) !== 'object') return !1;
    const t = nc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  fx = ut('Date'),
  dx = ut('File'),
  hx = ut('Blob'),
  mx = ut('FileList'),
  gx = (e) => Fs(e) && $e(e.pipe),
  px = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        ($e(e.append) &&
          ((t = Zs(e)) === 'formdata' ||
            (t === 'object' &&
              $e(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  yx = ut('URLSearchParams'),
  [vx, bx, xx, Sx] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    ut
  ),
  Ex = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ri(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let a, l;
  if ((typeof e != 'object' && (e = [e]), $a(e)))
    for (a = 0, l = e.length; a < l; a++) t.call(null, e[a], a, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let r;
    for (a = 0; a < s; a++) (r = i[a]), t.call(null, e[r], r, e);
  }
}
function Bg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let a = n.length,
    l;
  for (; a-- > 0; ) if (((l = n[a]), t === l.toLowerCase())) return l;
  return null;
}
const Dn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  kg = (e) => !Gl(e) && e !== Dn;
function $u() {
  const { caseless: e } = (kg(this) && this) || {},
    t = {},
    n = (a, l) => {
      const i = (e && Bg(t, l)) || l;
      Gi(t[i]) && Gi(a)
        ? (t[i] = $u(t[i], a))
        : Gi(a)
          ? (t[i] = $u({}, a))
          : $a(a)
            ? (t[i] = a.slice())
            : (t[i] = a);
    };
  for (let a = 0, l = arguments.length; a < l; a++)
    arguments[a] && ri(arguments[a], n);
  return t;
}
const wx = (e, t, n, { allOwnKeys: a } = {}) => (
    ri(
      t,
      (l, i) => {
        n && $e(l) ? (e[i] = Mg(l, n)) : (e[i] = l);
      },
      { allOwnKeys: a }
    ),
    e
  ),
  Nx = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  jx = (e, t, n, a) => {
    (e.prototype = Object.create(t.prototype, a)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Ox = (e, t, n, a) => {
    let l, i, s;
    const r = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), i = l.length; i-- > 0; )
        (s = l[i]), (!a || a(s, e, t)) && !r[s] && ((t[s] = e[s]), (r[s] = !0));
      e = n !== !1 && nc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Tx = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const a = e.indexOf(t, n);
    return a !== -1 && a === n;
  },
  Rx = (e) => {
    if (!e) return null;
    if ($a(e)) return e;
    let t = e.length;
    if (!Hg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ax = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && nc(Uint8Array)),
  Cx = (e, t) => {
    const a = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = a.next()) && !l.done; ) {
      const i = l.value;
      t.call(e, i[0], i[1]);
    }
  },
  Dx = (e, t) => {
    let n;
    const a = [];
    for (; (n = e.exec(t)) !== null; ) a.push(n);
    return a;
  },
  zx = ut('HTMLFormElement'),
  Ux = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, a, l) {
      return a.toUpperCase() + l;
    }),
  td = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Lx = ut('RegExp'),
  qg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      a = {};
    ri(n, (l, i) => {
      let s;
      (s = t(l, i, e)) !== !1 && (a[i] = s || l);
    }),
      Object.defineProperties(e, a);
  },
  Mx = (e) => {
    qg(e, (t, n) => {
      if ($e(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const a = e[n];
      if ($e(a)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  _x = (e, t) => {
    const n = {},
      a = (l) => {
        l.forEach((i) => {
          n[i] = !0;
        });
      };
    return $a(e) ? a(e) : a(String(e).split(t)), n;
  },
  Hx = () => {},
  Bx = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Yr = 'abcdefghijklmnopqrstuvwxyz',
  nd = '0123456789',
  Yg = { DIGIT: nd, ALPHA: Yr, ALPHA_DIGIT: Yr + Yr.toUpperCase() + nd },
  kx = (e = 16, t = Yg.ALPHA_DIGIT) => {
    let n = '';
    const { length: a } = t;
    for (; e--; ) n += t[(Math.random() * a) | 0];
    return n;
  };
function qx(e) {
  return !!(
    e &&
    $e(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const Yx = (e) => {
    const t = new Array(10),
      n = (a, l) => {
        if (Fs(a)) {
          if (t.indexOf(a) >= 0) return;
          if (!('toJSON' in a)) {
            t[l] = a;
            const i = $a(a) ? [] : {};
            return (
              ri(a, (s, r) => {
                const u = n(s, l + 1);
                !Gl(u) && (i[r] = u);
              }),
              (t[l] = void 0),
              i
            );
          }
        }
        return a;
      };
    return n(e, 0);
  },
  Vx = ut('AsyncFunction'),
  $x = (e) => e && (Fs(e) || $e(e)) && $e(e.then) && $e(e.catch),
  Vg = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, a) => (
            Dn.addEventListener(
              'message',
              ({ source: l, data: i }) => {
                l === Dn && i === n && a.length && a.shift()();
              },
              !1
            ),
            (l) => {
              a.push(l), Dn.postMessage(n, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    $e(Dn.postMessage)
  ),
  Gx =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Dn)
      : (typeof process < 'u' && process.nextTick) || Vg,
  N = {
    isArray: $a,
    isArrayBuffer: _g,
    isBuffer: rx,
    isFormData: px,
    isArrayBufferView: ux,
    isString: ox,
    isNumber: Hg,
    isBoolean: cx,
    isObject: Fs,
    isPlainObject: Gi,
    isReadableStream: vx,
    isRequest: bx,
    isResponse: xx,
    isHeaders: Sx,
    isUndefined: Gl,
    isDate: fx,
    isFile: dx,
    isBlob: hx,
    isRegExp: Lx,
    isFunction: $e,
    isStream: gx,
    isURLSearchParams: yx,
    isTypedArray: Ax,
    isFileList: mx,
    forEach: ri,
    merge: $u,
    extend: wx,
    trim: Ex,
    stripBOM: Nx,
    inherits: jx,
    toFlatObject: Ox,
    kindOf: Zs,
    kindOfTest: ut,
    endsWith: Tx,
    toArray: Rx,
    forEachEntry: Cx,
    matchAll: Dx,
    isHTMLForm: zx,
    hasOwnProperty: td,
    hasOwnProp: td,
    reduceDescriptors: qg,
    freezeMethods: Mx,
    toObjectSet: _x,
    toCamelCase: Ux,
    noop: Hx,
    toFiniteNumber: Bx,
    findKey: Bg,
    global: Dn,
    isContextDefined: kg,
    ALPHABET: Yg,
    generateString: kx,
    isSpecCompliantForm: qx,
    toJSONObject: Yx,
    isAsyncFn: Vx,
    isThenable: $x,
    setImmediate: Vg,
    asap: Gx,
  };
function _(e, t, n, a, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    a && (this.request = a),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
N.inherits(_, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const $g = _.prototype,
  Gg = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Gg[e] = { value: e };
});
Object.defineProperties(_, Gg);
Object.defineProperty($g, 'isAxiosError', { value: !0 });
_.from = (e, t, n, a, l, i) => {
  const s = Object.create($g);
  return (
    N.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (r) => r !== 'isAxiosError'
    ),
    _.call(s, e.message, t, n, a, l),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const Xx = null;
function Gu(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function Xg(e) {
  return N.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ad(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, i) {
          return (l = Xg(l)), !n && i ? '[' + l + ']' : l;
        })
        .join(n ? '.' : '')
    : t;
}
function Qx(e) {
  return N.isArray(e) && !e.some(Gu);
}
const Kx = N.toFlatObject(N, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ws(e, t, n) {
  if (!N.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = N.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, b) {
        return !N.isUndefined(b[x]);
      }
    ));
  const a = n.metaTokens,
    l = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && N.isSpecCompliantForm(t);
  if (!N.isFunction(l)) throw new TypeError('visitor must be a function');
  function o(y) {
    if (y === null) return '';
    if (N.isDate(y)) return y.toISOString();
    if (!u && N.isBlob(y))
      throw new _('Blob is not supported. Use a Buffer instead.');
    return N.isArrayBuffer(y) || N.isTypedArray(y)
      ? u && typeof Blob == 'function'
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, x, b) {
    let p = y;
    if (y && !b && typeof y == 'object') {
      if (N.endsWith(x, '{}'))
        (x = a ? x : x.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (N.isArray(y) && Qx(y)) ||
        ((N.isFileList(y) || N.endsWith(x, '[]')) && (p = N.toArray(y)))
      )
        return (
          (x = Xg(x)),
          p.forEach(function (v, S) {
            !(N.isUndefined(v) || v === null) &&
              t.append(
                s === !0 ? ad([x], S, i) : s === null ? x : x + '[]',
                o(v)
              );
          }),
          !1
        );
    }
    return Gu(y) ? !0 : (t.append(ad(b, x, i), o(y)), !1);
  }
  const h = [],
    f = Object.assign(Kx, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: Gu,
    });
  function m(y, x) {
    if (!N.isUndefined(y)) {
      if (h.indexOf(y) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      h.push(y),
        N.forEach(y, function (p, g) {
          (!(N.isUndefined(p) || p === null) &&
            l.call(t, p, N.isString(g) ? g.trim() : g, x, f)) === !0 &&
            m(p, x ? x.concat(g) : [g]);
        }),
        h.pop();
    }
  }
  if (!N.isObject(e)) throw new TypeError('data must be an object');
  return m(e), t;
}
function ld(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (a) {
    return t[a];
  });
}
function ac(e, t) {
  (this._pairs = []), e && Ws(e, this, t);
}
const Qg = ac.prototype;
Qg.append = function (t, n) {
  this._pairs.push([t, n]);
};
Qg.toString = function (t) {
  const n = t
    ? function (a) {
        return t.call(this, a, ld);
      }
    : ld;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + '=' + n(l[1]);
    }, '')
    .join('&');
};
function Zx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Kg(e, t, n) {
  if (!t) return e;
  const a = (n && n.encode) || Zx;
  N.isFunction(n) && (n = { serialize: n });
  const l = n && n.serialize;
  let i;
  if (
    (l
      ? (i = l(t, n))
      : (i = N.isURLSearchParams(t) ? t.toString() : new ac(t, n).toString(a)),
    i)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class id {
  constructor() {
    this.handlers = [];
  }
  use(t, n, a) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: a ? a.synchronous : !1,
        runWhen: a ? a.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    N.forEach(this.handlers, function (a) {
      a !== null && t(a);
    });
  }
}
const Zg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Jx = typeof URLSearchParams < 'u' ? URLSearchParams : ac,
  Fx = typeof FormData < 'u' ? FormData : null,
  Wx = typeof Blob < 'u' ? Blob : null,
  Px = {
    isBrowser: !0,
    classes: { URLSearchParams: Jx, FormData: Fx, Blob: Wx },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  lc = typeof window < 'u' && typeof document < 'u',
  Xu = (typeof navigator == 'object' && navigator) || void 0,
  Ix =
    lc &&
    (!Xu || ['ReactNative', 'NativeScript', 'NS'].indexOf(Xu.product) < 0),
  eS =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  tS = (lc && window.location.href) || 'http://localhost',
  nS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: lc,
        hasStandardBrowserEnv: Ix,
        hasStandardBrowserWebWorkerEnv: eS,
        navigator: Xu,
        origin: tS,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ee = { ...nS, ...Px };
function aS(e, t) {
  return Ws(
    e,
    new Ee.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, a, l, i) {
          return Ee.isNode && N.isBuffer(n)
            ? (this.append(a, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function lS(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  );
}
function iS(e) {
  const t = {},
    n = Object.keys(e);
  let a;
  const l = n.length;
  let i;
  for (a = 0; a < l; a++) (i = n[a]), (t[i] = e[i]);
  return t;
}
function Jg(e) {
  function t(n, a, l, i) {
    let s = n[i++];
    if (s === '__proto__') return !0;
    const r = Number.isFinite(+s),
      u = i >= n.length;
    return (
      (s = !s && N.isArray(l) ? l.length : s),
      u
        ? (N.hasOwnProp(l, s) ? (l[s] = [l[s], a]) : (l[s] = a), !r)
        : ((!l[s] || !N.isObject(l[s])) && (l[s] = []),
          t(n, a, l[s], i) && N.isArray(l[s]) && (l[s] = iS(l[s])),
          !r)
    );
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const n = {};
    return (
      N.forEachEntry(e, (a, l) => {
        t(lS(a), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function sS(e, t, n) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (a) {
      if (a.name !== 'SyntaxError') throw a;
    }
  return (0, JSON.stringify)(e);
}
const ui = {
  transitional: Zg,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const a = n.getContentType() || '',
        l = a.indexOf('application/json') > -1,
        i = N.isObject(t);
      if ((i && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t)))
        return l ? JSON.stringify(Jg(t)) : t;
      if (
        N.isArrayBuffer(t) ||
        N.isBuffer(t) ||
        N.isStream(t) ||
        N.isFile(t) ||
        N.isBlob(t) ||
        N.isReadableStream(t)
      )
        return t;
      if (N.isArrayBufferView(t)) return t.buffer;
      if (N.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let r;
      if (i) {
        if (a.indexOf('application/x-www-form-urlencoded') > -1)
          return aS(t, this.formSerializer).toString();
        if ((r = N.isFileList(t)) || a.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return Ws(
            r ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || l ? (n.setContentType('application/json', !1), sS(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ui.transitional,
        a = n && n.forcedJSONParsing,
        l = this.responseType === 'json';
      if (N.isResponse(t) || N.isReadableStream(t)) return t;
      if (t && N.isString(t) && ((a && !this.responseType) || l)) {
        const s = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (r) {
          if (s)
            throw r.name === 'SyntaxError'
              ? _.from(r, _.ERR_BAD_RESPONSE, this, null, this.response)
              : r;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ee.classes.FormData, Blob: Ee.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
N.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ui.headers[e] = {};
});
const rS = N.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  uS = (e) => {
    const t = {};
    let n, a, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (l = s.indexOf(':')),
              (n = s.substring(0, l).trim().toLowerCase()),
              (a = s.substring(l + 1).trim()),
              !(!n || (t[n] && rS[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(a)
                    : (t[n] = [a])
                  : (t[n] = t[n] ? t[n] + ', ' + a : a));
          }),
      t
    );
  },
  sd = Symbol('internals');
function al(e) {
  return e && String(e).trim().toLowerCase();
}
function Xi(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(Xi) : String(e);
}
function oS(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; (a = n.exec(e)); ) t[a[1]] = a[2];
  return t;
}
const cS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Vr(e, t, n, a, l) {
  if (N.isFunction(a)) return a.call(this, t, n);
  if ((l && (t = n), !!N.isString(t))) {
    if (N.isString(a)) return t.indexOf(a) !== -1;
    if (N.isRegExp(a)) return a.test(t);
  }
}
function fS(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, a) => n.toUpperCase() + a);
}
function dS(e, t) {
  const n = N.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((a) => {
    Object.defineProperty(e, a + n, {
      value: function (l, i, s) {
        return this[a].call(this, t, l, i, s);
      },
      configurable: !0,
    });
  });
}
class Ue {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, a) {
    const l = this;
    function i(r, u, o) {
      const c = al(u);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = N.findKey(l, c);
      (!h || l[h] === void 0 || o === !0 || (o === void 0 && l[h] !== !1)) &&
        (l[h || u] = Xi(r));
    }
    const s = (r, u) => N.forEach(r, (o, c) => i(o, c, u));
    if (N.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (N.isString(t) && (t = t.trim()) && !cS(t)) s(uS(t), n);
    else if (N.isHeaders(t)) for (const [r, u] of t.entries()) i(u, r, a);
    else t != null && i(n, t, a);
    return this;
  }
  get(t, n) {
    if (((t = al(t)), t)) {
      const a = N.findKey(this, t);
      if (a) {
        const l = this[a];
        if (!n) return l;
        if (n === !0) return oS(l);
        if (N.isFunction(n)) return n.call(this, l, a);
        if (N.isRegExp(n)) return n.exec(l);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = al(t)), t)) {
      const a = N.findKey(this, t);
      return !!(a && this[a] !== void 0 && (!n || Vr(this, this[a], a, n)));
    }
    return !1;
  }
  delete(t, n) {
    const a = this;
    let l = !1;
    function i(s) {
      if (((s = al(s)), s)) {
        const r = N.findKey(a, s);
        r && (!n || Vr(a, a[r], r, n)) && (delete a[r], (l = !0));
      }
    }
    return N.isArray(t) ? t.forEach(i) : i(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let a = n.length,
      l = !1;
    for (; a--; ) {
      const i = n[a];
      (!t || Vr(this, this[i], i, t, !0)) && (delete this[i], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      a = {};
    return (
      N.forEach(this, (l, i) => {
        const s = N.findKey(a, i);
        if (s) {
          (n[s] = Xi(l)), delete n[i];
          return;
        }
        const r = t ? fS(i) : String(i).trim();
        r !== i && delete n[i], (n[r] = Xi(l)), (a[r] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      N.forEach(this, (a, l) => {
        a != null && a !== !1 && (n[l] = t && N.isArray(a) ? a.join(', ') : a);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const a = new this(t);
    return n.forEach((l) => a.set(l)), a;
  }
  static accessor(t) {
    const a = (this[sd] = this[sd] = { accessors: {} }).accessors,
      l = this.prototype;
    function i(s) {
      const r = al(s);
      a[r] || (dS(l, s), (a[r] = !0));
    }
    return N.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ue.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
N.reduceDescriptors(Ue.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(a) {
      this[n] = a;
    },
  };
});
N.freezeMethods(Ue);
function $r(e, t) {
  const n = this || ui,
    a = t || n,
    l = Ue.from(a.headers);
  let i = a.data;
  return (
    N.forEach(e, function (r) {
      i = r.call(n, i, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    i
  );
}
function Fg(e) {
  return !!(e && e.__CANCEL__);
}
function Ga(e, t, n) {
  _.call(this, e ?? 'canceled', _.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
N.inherits(Ga, _, { __CANCEL__: !0 });
function Wg(e, t, n) {
  const a = n.config.validateStatus;
  !n.status || !a || a(n.status)
    ? e(n)
    : t(
        new _(
          'Request failed with status code ' + n.status,
          [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function hS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function mS(e, t) {
  e = e || 10;
  const n = new Array(e),
    a = new Array(e);
  let l = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const o = Date.now(),
        c = a[i];
      s || (s = o), (n[l] = u), (a[l] = o);
      let h = i,
        f = 0;
      for (; h !== l; ) (f += n[h++]), (h = h % e);
      if (((l = (l + 1) % e), l === i && (i = (i + 1) % e), o - s < t)) return;
      const m = c && o - c;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function gS(e, t) {
  let n = 0,
    a = 1e3 / t,
    l,
    i;
  const s = (o, c = Date.now()) => {
    (n = c), (l = null), i && (clearTimeout(i), (i = null)), e.apply(null, o);
  };
  return [
    (...o) => {
      const c = Date.now(),
        h = c - n;
      h >= a
        ? s(o, c)
        : ((l = o),
          i ||
            (i = setTimeout(() => {
              (i = null), s(l);
            }, a - h)));
    },
    () => l && s(l),
  ];
}
const Os = (e, t, n = 3) => {
    let a = 0;
    const l = mS(50, 250);
    return gS((i) => {
      const s = i.loaded,
        r = i.lengthComputable ? i.total : void 0,
        u = s - a,
        o = l(u),
        c = s <= r;
      a = s;
      const h = {
        loaded: s,
        total: r,
        progress: r ? s / r : void 0,
        bytes: u,
        rate: o || void 0,
        estimated: o && r && c ? (r - s) / o : void 0,
        event: i,
        lengthComputable: r != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(h);
    }, n);
  },
  rd = (e, t) => {
    const n = e != null;
    return [(a) => t[0]({ lengthComputable: n, total: e, loaded: a }), t[1]];
  },
  ud =
    (e) =>
    (...t) =>
      N.asap(() => e(...t)),
  pS = Ee.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Ee.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Ee.origin),
        Ee.navigator && /(msie|trident)/i.test(Ee.navigator.userAgent)
      )
    : () => !0,
  yS = Ee.hasStandardBrowserEnv
    ? {
        write(e, t, n, a, l, i) {
          const s = [e + '=' + encodeURIComponent(t)];
          N.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
            N.isString(a) && s.push('path=' + a),
            N.isString(l) && s.push('domain=' + l),
            i === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function vS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function bS(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Pg(e, t) {
  return e && !vS(t) ? bS(e, t) : t;
}
const od = (e) => (e instanceof Ue ? { ...e } : e);
function Gn(e, t) {
  t = t || {};
  const n = {};
  function a(o, c, h, f) {
    return N.isPlainObject(o) && N.isPlainObject(c)
      ? N.merge.call({ caseless: f }, o, c)
      : N.isPlainObject(c)
        ? N.merge({}, c)
        : N.isArray(c)
          ? c.slice()
          : c;
  }
  function l(o, c, h, f) {
    if (N.isUndefined(c)) {
      if (!N.isUndefined(o)) return a(void 0, o, h, f);
    } else return a(o, c, h, f);
  }
  function i(o, c) {
    if (!N.isUndefined(c)) return a(void 0, c);
  }
  function s(o, c) {
    if (N.isUndefined(c)) {
      if (!N.isUndefined(o)) return a(void 0, o);
    } else return a(void 0, c);
  }
  function r(o, c, h) {
    if (h in t) return a(o, c);
    if (h in e) return a(void 0, o);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: r,
    headers: (o, c, h) => l(od(o), od(c), h, !0),
  };
  return (
    N.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const h = u[c] || l,
        f = h(e[c], t[c], c);
      (N.isUndefined(f) && h !== r) || (n[c] = f);
    }),
    n
  );
}
const Ig = (e) => {
    const t = Gn({}, e);
    let {
      data: n,
      withXSRFToken: a,
      xsrfHeaderName: l,
      xsrfCookieName: i,
      headers: s,
      auth: r,
    } = t;
    (t.headers = s = Ue.from(s)),
      (t.url = Kg(Pg(t.baseURL, t.url), e.params, e.paramsSerializer)),
      r &&
        s.set(
          'Authorization',
          'Basic ' +
            btoa(
              (r.username || '') +
                ':' +
                (r.password ? unescape(encodeURIComponent(r.password)) : '')
            )
        );
    let u;
    if (N.isFormData(n)) {
      if (Ee.hasStandardBrowserEnv || Ee.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((u = s.getContentType()) !== !1) {
        const [o, ...c] = u
          ? u
              .split(';')
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        s.setContentType([o || 'multipart/form-data', ...c].join('; '));
      }
    }
    if (
      Ee.hasStandardBrowserEnv &&
      (a && N.isFunction(a) && (a = a(t)), a || (a !== !1 && pS(t.url)))
    ) {
      const o = l && i && yS.read(i);
      o && s.set(l, o);
    }
    return t;
  },
  xS = typeof XMLHttpRequest < 'u',
  SS =
    xS &&
    function (e) {
      return new Promise(function (n, a) {
        const l = Ig(e);
        let i = l.data;
        const s = Ue.from(l.headers).normalize();
        let { responseType: r, onUploadProgress: u, onDownloadProgress: o } = l,
          c,
          h,
          f,
          m,
          y;
        function x() {
          m && m(),
            y && y(),
            l.cancelToken && l.cancelToken.unsubscribe(c),
            l.signal && l.signal.removeEventListener('abort', c);
        }
        let b = new XMLHttpRequest();
        b.open(l.method.toUpperCase(), l.url, !0), (b.timeout = l.timeout);
        function p() {
          if (!b) return;
          const v = Ue.from(
              'getAllResponseHeaders' in b && b.getAllResponseHeaders()
            ),
            w = {
              data:
                !r || r === 'text' || r === 'json'
                  ? b.responseText
                  : b.response,
              status: b.status,
              statusText: b.statusText,
              headers: v,
              config: e,
              request: b,
            };
          Wg(
            function (T) {
              n(T), x();
            },
            function (T) {
              a(T), x();
            },
            w
          ),
            (b = null);
        }
        'onloadend' in b
          ? (b.onloadend = p)
          : (b.onreadystatechange = function () {
              !b ||
                b.readyState !== 4 ||
                (b.status === 0 &&
                  !(b.responseURL && b.responseURL.indexOf('file:') === 0)) ||
                setTimeout(p);
            }),
          (b.onabort = function () {
            b &&
              (a(new _('Request aborted', _.ECONNABORTED, e, b)), (b = null));
          }),
          (b.onerror = function () {
            a(new _('Network Error', _.ERR_NETWORK, e, b)), (b = null);
          }),
          (b.ontimeout = function () {
            let S = l.timeout
              ? 'timeout of ' + l.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const w = l.transitional || Zg;
            l.timeoutErrorMessage && (S = l.timeoutErrorMessage),
              a(
                new _(
                  S,
                  w.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
                  e,
                  b
                )
              ),
              (b = null);
          }),
          i === void 0 && s.setContentType(null),
          'setRequestHeader' in b &&
            N.forEach(s.toJSON(), function (S, w) {
              b.setRequestHeader(w, S);
            }),
          N.isUndefined(l.withCredentials) ||
            (b.withCredentials = !!l.withCredentials),
          r && r !== 'json' && (b.responseType = l.responseType),
          o && (([f, y] = Os(o, !0)), b.addEventListener('progress', f)),
          u &&
            b.upload &&
            (([h, m] = Os(u)),
            b.upload.addEventListener('progress', h),
            b.upload.addEventListener('loadend', m)),
          (l.cancelToken || l.signal) &&
            ((c = (v) => {
              b &&
                (a(!v || v.type ? new Ga(null, e, b) : v),
                b.abort(),
                (b = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(c),
            l.signal &&
              (l.signal.aborted ? c() : l.signal.addEventListener('abort', c)));
        const g = hS(l.url);
        if (g && Ee.protocols.indexOf(g) === -1) {
          a(new _('Unsupported protocol ' + g + ':', _.ERR_BAD_REQUEST, e));
          return;
        }
        b.send(i || null);
      });
    },
  ES = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let a = new AbortController(),
        l;
      const i = function (o) {
        if (!l) {
          (l = !0), r();
          const c = o instanceof Error ? o : this.reason;
          a.abort(
            c instanceof _ ? c : new Ga(c instanceof Error ? c.message : c)
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), i(new _(`timeout ${t} of ms exceeded`, _.ETIMEDOUT));
        }, t);
      const r = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((o) => {
            o.unsubscribe
              ? o.unsubscribe(i)
              : o.removeEventListener('abort', i);
          }),
          (e = null));
      };
      e.forEach((o) => o.addEventListener('abort', i));
      const { signal: u } = a;
      return (u.unsubscribe = () => N.asap(r)), u;
    }
  },
  wS = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let a = 0,
      l;
    for (; a < n; ) (l = a + t), yield e.slice(a, l), (a = l);
  },
  NS = async function* (e, t) {
    for await (const n of jS(e)) yield* wS(n, t);
  },
  jS = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: a } = await t.read();
        if (n) break;
        yield a;
      }
    } finally {
      await t.cancel();
    }
  },
  cd = (e, t, n, a) => {
    const l = NS(e, t);
    let i = 0,
      s,
      r = (u) => {
        s || ((s = !0), a && a(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: o, value: c } = await l.next();
            if (o) {
              r(), u.close();
              return;
            }
            let h = c.byteLength;
            if (n) {
              let f = (i += h);
              n(f);
            }
            u.enqueue(new Uint8Array(c));
          } catch (o) {
            throw (r(o), o);
          }
        },
        cancel(u) {
          return r(u), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ps =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  ep = Ps && typeof ReadableStream == 'function',
  OS =
    Ps &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  tp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  TS =
    ep &&
    tp(() => {
      let e = !1;
      const t = new Request(Ee.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  fd = 64 * 1024,
  Qu = ep && tp(() => N.isReadableStream(new Response('').body)),
  Ts = { stream: Qu && ((e) => e.body) };
Ps &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Ts[t] &&
        (Ts[t] = N.isFunction(e[t])
          ? (n) => n[t]()
          : (n, a) => {
              throw new _(
                `Response type '${t}' is not supported`,
                _.ERR_NOT_SUPPORT,
                a
              );
            });
    });
  })(new Response());
const RS = async (e) => {
    if (e == null) return 0;
    if (N.isBlob(e)) return e.size;
    if (N.isSpecCompliantForm(e))
      return (
        await new Request(Ee.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (N.isArrayBufferView(e) || N.isArrayBuffer(e)) return e.byteLength;
    if ((N.isURLSearchParams(e) && (e = e + ''), N.isString(e)))
      return (await OS(e)).byteLength;
  },
  AS = async (e, t) => {
    const n = N.toFiniteNumber(e.getContentLength());
    return n ?? RS(t);
  },
  CS =
    Ps &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: a,
        signal: l,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: r,
        onUploadProgress: u,
        responseType: o,
        headers: c,
        withCredentials: h = 'same-origin',
        fetchOptions: f,
      } = Ig(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let m = ES([l, i && i.toAbortSignal()], s),
        y;
      const x =
        m &&
        m.unsubscribe &&
        (() => {
          m.unsubscribe();
        });
      let b;
      try {
        if (
          u &&
          TS &&
          n !== 'get' &&
          n !== 'head' &&
          (b = await AS(c, a)) !== 0
        ) {
          let w = new Request(t, { method: 'POST', body: a, duplex: 'half' }),
            O;
          if (
            (N.isFormData(a) &&
              (O = w.headers.get('content-type')) &&
              c.setContentType(O),
            w.body)
          ) {
            const [T, R] = rd(b, Os(ud(u)));
            a = cd(w.body, fd, T, R);
          }
        }
        N.isString(h) || (h = h ? 'include' : 'omit');
        const p = 'credentials' in Request.prototype;
        y = new Request(t, {
          ...f,
          signal: m,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: a,
          duplex: 'half',
          credentials: p ? h : void 0,
        });
        let g = await fetch(y);
        const v = Qu && (o === 'stream' || o === 'response');
        if (Qu && (r || (v && x))) {
          const w = {};
          ['status', 'statusText', 'headers'].forEach((D) => {
            w[D] = g[D];
          });
          const O = N.toFiniteNumber(g.headers.get('content-length')),
            [T, R] = (r && rd(O, Os(ud(r), !0))) || [];
          g = new Response(
            cd(g.body, fd, T, () => {
              R && R(), x && x();
            }),
            w
          );
        }
        o = o || 'text';
        let S = await Ts[N.findKey(Ts, o) || 'text'](g, e);
        return (
          !v && x && x(),
          await new Promise((w, O) => {
            Wg(w, O, {
              data: S,
              headers: Ue.from(g.headers),
              status: g.status,
              statusText: g.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (p) {
        throw (
          (x && x(),
          p && p.name === 'TypeError' && /fetch/i.test(p.message)
            ? Object.assign(new _('Network Error', _.ERR_NETWORK, e, y), {
                cause: p.cause || p,
              })
            : _.from(p, p && p.code, e, y))
        );
      }
    }),
  Ku = { http: Xx, xhr: SS, fetch: CS };
N.forEach(Ku, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const dd = (e) => `- ${e}`,
  DS = (e) => N.isFunction(e) || e === null || e === !1,
  np = {
    getAdapter: (e) => {
      e = N.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, a;
      const l = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((a = n),
          !DS(n) && ((a = Ku[(s = String(n)).toLowerCase()]), a === void 0))
        )
          throw new _(`Unknown adapter '${s}'`);
        if (a) break;
        l[s || '#' + i] = a;
      }
      if (!a) {
        const i = Object.entries(l).map(
          ([r, u]) =>
            `adapter ${r} ` +
            (u === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(dd).join(`
`)
            : ' ' + dd(i[0])
          : 'as no adapter specified';
        throw new _(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT'
        );
      }
      return a;
    },
    adapters: Ku,
  };
function Gr(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ga(null, e);
}
function hd(e) {
  return (
    Gr(e),
    (e.headers = Ue.from(e.headers)),
    (e.data = $r.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    np
      .getAdapter(e.adapter || ui.adapter)(e)
      .then(
        function (a) {
          return (
            Gr(e),
            (a.data = $r.call(e, e.transformResponse, a)),
            (a.headers = Ue.from(a.headers)),
            a
          );
        },
        function (a) {
          return (
            Fg(a) ||
              (Gr(e),
              a &&
                a.response &&
                ((a.response.data = $r.call(
                  e,
                  e.transformResponse,
                  a.response
                )),
                (a.response.headers = Ue.from(a.response.headers)))),
            Promise.reject(a)
          );
        }
      )
  );
}
const ap = '1.7.9',
  Is = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Is[e] = function (a) {
      return typeof a === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const md = {};
Is.transitional = function (t, n, a) {
  function l(i, s) {
    return (
      '[Axios v' +
      ap +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (a ? '. ' + a : '')
    );
  }
  return (i, s, r) => {
    if (t === !1)
      throw new _(
        l(s, ' has been removed' + (n ? ' in ' + n : '')),
        _.ERR_DEPRECATED
      );
    return (
      n &&
        !md[s] &&
        ((md[s] = !0),
        console.warn(
          l(
            s,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, s, r) : !0
    );
  };
};
Is.spelling = function (t) {
  return (n, a) => (console.warn(`${a} is likely a misspelling of ${t}`), !0);
};
function zS(e, t, n) {
  if (typeof e != 'object')
    throw new _('options must be an object', _.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(e);
  let l = a.length;
  for (; l-- > 0; ) {
    const i = a[l],
      s = t[i];
    if (s) {
      const r = e[i],
        u = r === void 0 || s(r, i, e);
      if (u !== !0)
        throw new _('option ' + i + ' must be ' + u, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new _('Unknown option ' + i, _.ERR_BAD_OPTION);
  }
}
const Qi = { assertOptions: zS, validators: Is },
  ct = Qi.validators;
class Bn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new id(), response: new id() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (a) {
      if (a instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const i = l.stack ? l.stack.replace(/^.+\n/, '') : '';
        try {
          a.stack
            ? i &&
              !String(a.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
              (a.stack +=
                `
` + i)
            : (a.stack = i);
        } catch {}
      }
      throw a;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Gn(this.defaults, n));
    const { transitional: a, paramsSerializer: l, headers: i } = n;
    a !== void 0 &&
      Qi.assertOptions(
        a,
        {
          silentJSONParsing: ct.transitional(ct.boolean),
          forcedJSONParsing: ct.transitional(ct.boolean),
          clarifyTimeoutError: ct.transitional(ct.boolean),
        },
        !1
      ),
      l != null &&
        (N.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Qi.assertOptions(
              l,
              { encode: ct.function, serialize: ct.function },
              !0
            )),
      Qi.assertOptions(
        n,
        {
          baseUrl: ct.spelling('baseURL'),
          withXsrfToken: ct.spelling('withXSRFToken'),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let s = i && N.merge(i.common, i[n.method]);
    i &&
      N.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (y) => {
          delete i[y];
        }
      ),
      (n.headers = Ue.concat(s, i));
    const r = [];
    let u = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == 'function' && x.runWhen(n) === !1) ||
        ((u = u && x.synchronous), r.unshift(x.fulfilled, x.rejected));
    });
    const o = [];
    this.interceptors.response.forEach(function (x) {
      o.push(x.fulfilled, x.rejected);
    });
    let c,
      h = 0,
      f;
    if (!u) {
      const y = [hd.bind(this), void 0];
      for (
        y.unshift.apply(y, r),
          y.push.apply(y, o),
          f = y.length,
          c = Promise.resolve(n);
        h < f;

      )
        c = c.then(y[h++], y[h++]);
      return c;
    }
    f = r.length;
    let m = n;
    for (h = 0; h < f; ) {
      const y = r[h++],
        x = r[h++];
      try {
        m = y(m);
      } catch (b) {
        x.call(this, b);
        break;
      }
    }
    try {
      c = hd.call(this, m);
    } catch (y) {
      return Promise.reject(y);
    }
    for (h = 0, f = o.length; h < f; ) c = c.then(o[h++], o[h++]);
    return c;
  }
  getUri(t) {
    t = Gn(this.defaults, t);
    const n = Pg(t.baseURL, t.url);
    return Kg(n, t.params, t.paramsSerializer);
  }
}
N.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Bn.prototype[t] = function (n, a) {
    return this.request(
      Gn(a || {}, { method: t, url: n, data: (a || {}).data })
    );
  };
});
N.forEach(['post', 'put', 'patch'], function (t) {
  function n(a) {
    return function (i, s, r) {
      return this.request(
        Gn(r || {}, {
          method: t,
          headers: a ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (Bn.prototype[t] = n()), (Bn.prototype[t + 'Form'] = n(!0));
});
class ic {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const a = this;
    this.promise.then((l) => {
      if (!a._listeners) return;
      let i = a._listeners.length;
      for (; i-- > 0; ) a._listeners[i](l);
      a._listeners = null;
    }),
      (this.promise.then = (l) => {
        let i;
        const s = new Promise((r) => {
          a.subscribe(r), (i = r);
        }).then(l);
        return (
          (s.cancel = function () {
            a.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, r) {
        a.reason || ((a.reason = new Ga(i, s, r)), n(a.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (a) => {
        t.abort(a);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new ic(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
function US(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function LS(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const Zu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Zu).forEach(([e, t]) => {
  Zu[t] = e;
});
function lp(e) {
  const t = new Bn(e),
    n = Mg(Bn.prototype.request, t);
  return (
    N.extend(n, Bn.prototype, t, { allOwnKeys: !0 }),
    N.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return lp(Gn(e, l));
    }),
    n
  );
}
const ie = lp(ui);
ie.Axios = Bn;
ie.CanceledError = Ga;
ie.CancelToken = ic;
ie.isCancel = Fg;
ie.VERSION = ap;
ie.toFormData = Ws;
ie.AxiosError = _;
ie.Cancel = ie.CanceledError;
ie.all = function (t) {
  return Promise.all(t);
};
ie.spread = US;
ie.isAxiosError = LS;
ie.mergeConfig = Gn;
ie.AxiosHeaders = Ue;
ie.formToJSON = (e) => Jg(N.isHTMLForm(e) ? new FormData(e) : e);
ie.getAdapter = np.getAdapter;
ie.HttpStatusCode = Zu;
ie.default = ie;
const MS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
function _S() {
  const e = new Date(),
    [t, n] = E.useState(e.getMonth()),
    [a, l] = E.useState(e.getFullYear()),
    [i, s] = E.useState([]);
  E.useEffect(() => {
    (async () => {
      try {
        const x = (
          await ie.get(`https://youshow.onrender.com/events/${a}/${t + 1}`)
        ).data.map((b) => new Date(b.date).getDate());
        s(x);
      } catch (y) {
        console.error('Error fetching events:', y);
      }
    })();
  }, [t, a]);
  const r = () => {
      t === 0 ? (n(11), l((m) => m - 1)) : n((m) => m - 1);
    },
    u = () => {
      t === 11 ? (n(0), l((m) => m + 1)) : n((m) => m + 1);
    },
    o = new Date(a, t + 1, 0).getDate(),
    c = new Date(a, t, 1).getDay(),
    h = [];
  for (let m = 0; m < c; m++) h.push(null);
  for (let m = 1; m <= o; m++) h.push(m);
  const f = (m) =>
    m && e.getDate() === m && e.getMonth() === t && e.getFullYear() === a;
  return d.jsxs('div', {
    className: 'max-w-2xl mx-auto p-8',
    children: [
      d.jsx('div', {
        className: '-mb-4',
        children: d.jsx('img', {
          src: '/images/showcase calendar.png',
          style: { height: '100px', width: '200px' },
          alt: 'Calendar Header',
        }),
      }),
      d.jsxs('div', {
        className: 'flex items-center justify-between mb-4',
        children: [
          d.jsx('button', {
            onClick: r,
            className: 'p-3 bg-orange-500 rounded-full hover:bg-white',
            children: '‹',
          }),
          d.jsxs('h2', {
            className:
              'text-5xl font-semibold text-orange-700 text-center mx-4 flex-1',
            children: [MS[t], ' ', a],
          }),
          d.jsx('button', {
            onClick: u,
            className: 'p-3 bg-orange-500 rounded-full hover:bg-white',
            children: '›',
          }),
        ],
      }),
      d.jsxs('div', {
        className:
          'grid grid-cols-7 text-center font-bold text-xl text-black mb-4',
        children: [
          d.jsx('div', { children: 'Sun' }),
          d.jsx('div', { children: 'Mon' }),
          d.jsx('div', { children: 'Tue' }),
          d.jsx('div', { children: 'Wed' }),
          d.jsx('div', { children: 'Thu' }),
          d.jsx('div', { children: 'Fri' }),
          d.jsx('div', { children: 'Sat' }),
        ],
      }),
      d.jsx('div', {
        className: 'grid grid-cols-7 gap-4',
        children: h.map((m, y) =>
          d.jsxs(
            'div',
            {
              className: `flex flex-col items-center justify-center rounded-lg text-lg font-medium ${f(m) ? 'bg-orange-500 text-white font-bold' : 'text-black'} ${i.includes(m) ? 'border-4 border-orange-400' : ''}`,
              children: [
                d.jsx('span', { children: m || '' }),
                d.jsx('span', {
                  className: `text-base mt-1 ${i.includes(m) ? 'bg-orange-400 px-1 py-0.5 rounded-sm text-white' : 'text-gray-900'}`,
                  children: i.includes(m) ? 'Event' : 'Break',
                }),
              ],
            },
            y
          )
        ),
      }),
    ],
  });
}
function HS() {
  var u, o, c, h, f;
  const e = ii(),
    [t, n] = E.useState([]),
    [a, l] = E.useState(0);
  E.useEffect(() => {
    (async () => {
      try {
        const y = await ie.get('https://youshow.onrender.com/events');
        n(y.data);
      } catch (y) {
        console.error('Error fetching events:', y);
      }
    })();
  }, []);
  const i = (m) => {
      if (m.startsWith('http') || m.startsWith('www')) {
        const y = m.startsWith('www') ? `https://${m}` : m;
        window.location.href = y;
      } else e(m);
    },
    s = () => {
      l((m) => (m + 1) % t.length);
    },
    r = () => {
      l((m) => (m - 1 + t.length) % t.length);
    };
  return d.jsx('div', {
    className: 'w-full',
    children: d.jsxs('div', {
      className: 'flex items-center mb-4',
      children: [
        d.jsx('button', {
          onClick: r,
          className: 'p-3 bg-orange-500 rounded-full hover:bg-white',
          children: '‹',
        }),
        t.length > 0 &&
          d.jsxs('div', {
            className:
              'w-full max-w-lg h-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col',
            children: [
              d.jsx('div', {
                className: 'relative w-full h-96',
                children: d.jsx('img', {
                  src:
                    ((u = t[a]) == null ? void 0 : u.image) ||
                    '/images/Avatar.jpg',
                  alt: (o = t[a]) == null ? void 0 : o.title,
                  className: 'w-full h-full object-cover rounded-t-xl',
                }),
              }),
              d.jsxs('div', {
                className: 'p-6 text-center',
                children: [
                  d.jsx('h2', {
                    className: 'text-3xl font-bold text-black',
                    children: (c = t[a]) == null ? void 0 : c.title,
                  }),
                  d.jsx('p', {
                    className: 'text-lg text-gray-600 my-4',
                    children: (h = t[a]) == null ? void 0 : h.description,
                  }),
                  d.jsx('p', {
                    className: 'text-orange-500 text-2xl font-semibold',
                    children: (f = t[a]) == null ? void 0 : f.price,
                  }),
                ],
              }),
              d.jsx('div', {
                className: 'p-6',
                children: d.jsx('button', {
                  onClick: () => {
                    var m;
                    return i((m = t[a]) == null ? void 0 : m.link);
                  },
                  className:
                    'w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors',
                  children: 'Buy tickets',
                }),
              }),
            ],
          }),
        d.jsx('button', {
          onClick: s,
          className: 'p-3 bg-orange-500 rounded-full hover:bg-white',
          children: '›',
        }),
      ],
    }),
  });
}
function BS() {
  return d.jsxs('div', {
    className: "bg-[url('/images/startbackground.jpg')] min-h-screen ",
    children: [
      d.jsx('div', {
        className: 'fixed top-0 left-0 right-0 z-50',
        children: d.jsx(Gt, {}),
      }),
      d.jsxs('div', {
        className: 'min-h-screen flex',
        children: [
          d.jsx('div', {
            className: 'flex-grow flex items-center',
            children: d.jsx(_S, {}),
          }),
          d.jsx('div', {
            className: 'flex-grow flex items-center',
            children: d.jsx(HS, {}),
          }),
        ],
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
function kS() {
  const [e, t] = E.useState(''),
    [n, a] = E.useState(''),
    [l, i] = E.useState(!1),
    [s, r] = E.useState(''),
    u = ii();
  E.useEffect(() => {
    const c = localStorage.getItem('rememberUsernameOrEmail'),
      h = localStorage.getItem('rememberPassword');
    c && h && (t(c), a(h), i(!0));
  }, []);
  const o = async (c) => {
    var h, f;
    c.preventDefault();
    try {
      const m = await ie.post('https://youshow.onrender.com/auth/login', {
        identifier: e,
        password: n,
      });
      l
        ? (localStorage.setItem('rememberUsernameOrEmail', e),
          localStorage.setItem('rememberPassword', n))
        : (localStorage.removeItem('rememberUsernameOrEmail'),
          localStorage.removeItem('rememberPassword')),
        localStorage.setItem('token', m.data.token),
        u('/homepage');
    } catch (m) {
      r(
        ((f = (h = m.response) == null ? void 0 : h.data) == null
          ? void 0
          : f.message) || 'Login failed'
      );
    }
  };
  return d.jsx('div', {
    className:
      "flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/images/startbackground.jpg')]",
    children: d.jsxs('div', {
      className:
        'bg-orange-100 shadow-md rounded-lg flex overflow-hidden w-[900px]',
      children: [
        d.jsx('div', {
          className: 'flex-1 flex items-center justify-center',
          children: d.jsx('img', {
            src: '/images/Avatar.jpg',
            alt: 'Login Illustration',
            className: 'w-[300px] h-[300px] object-contain',
          }),
        }),
        d.jsxs('div', {
          className: 'flex-1 p-8',
          children: [
            d.jsx('h2', {
              className: 'text-3xl font-bold mb-6 text-gray-800',
              children: 'Sign in',
            }),
            d.jsxs('form', {
              onSubmit: o,
              className: 'space-y-4',
              children: [
                d.jsxs('div', {
                  children: [
                    d.jsx('label', {
                      className: 'block text-sm font-medium text-gray-600',
                      children: 'Username or Email',
                    }),
                    d.jsx('input', {
                      type: 'text',
                      value: e,
                      onChange: (c) => t(c.target.value),
                      required: !0,
                      className: 'w-full border border-gray-300 rounded-md p-2',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  children: [
                    d.jsx('label', {
                      className: 'block text-sm font-medium text-gray-600',
                      children: 'Password',
                    }),
                    d.jsx('input', {
                      type: 'password',
                      value: n,
                      onChange: (c) => a(c.target.value),
                      required: !0,
                      className: 'w-full border border-gray-300 rounded-md p-2',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    d.jsx('input', {
                      type: 'checkbox',
                      checked: l,
                      onChange: (c) => i(c.target.checked),
                      id: 'rememberMe',
                      className: 'mr-2',
                    }),
                    d.jsx('label', {
                      htmlFor: 'rememberMe',
                      className: 'text-sm text-gray-600',
                      children: 'Remember me',
                    }),
                  ],
                }),
                s &&
                  d.jsx('p', {
                    className: 'text-red-500 text-sm',
                    children: s,
                  }),
                d.jsx('button', {
                  type: 'submit',
                  className:
                    'w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600',
                  children: 'Log in',
                }),
              ],
            }),
            d.jsx('div', {
              className: 'flex justify-between items-center mt-4',
              children: d.jsx('a', {
                href: '/register',
                className: 'text-sm text-blue-500 hover:underline',
                children: 'Create an account',
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function qS() {
  const [e, t] = E.useState(''),
    [n, a] = E.useState(''),
    [l, i] = E.useState(''),
    [s, r] = E.useState(''),
    [u, o] = E.useState(''),
    c = ii(),
    h = async (f) => {
      var m, y;
      if ((f.preventDefault(), l !== s)) {
        o('Passwords do not match');
        return;
      }
      try {
        await ie.post('https://youshow.onrender.com/auth/register', {
          username: e,
          email: n,
          password: l,
        }),
          alert('Registration successful!'),
          c('/login');
      } catch (x) {
        o(
          ((y = (m = x.response) == null ? void 0 : m.data) == null
            ? void 0
            : y.message) || 'Registration failed'
        );
      }
    };
  return d.jsx('div', {
    className:
      "flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/images/startbackground.jpg')]",
    children: d.jsxs('div', {
      className:
        'bg-orange-100 shadow-md rounded-lg flex overflow-hidden w-[900px]',
      children: [
        d.jsxs('div', {
          className: 'flex-1 p-8',
          children: [
            d.jsx('h2', {
              className: 'text-3xl font-bold mb-6 text-gray-800',
              children: 'Sign up',
            }),
            d.jsxs('form', {
              onSubmit: h,
              className: 'space-y-4',
              children: [
                d.jsxs('div', {
                  children: [
                    d.jsx('label', {
                      className: 'block text-sm font-medium text-gray-600',
                      children: 'Username',
                    }),
                    d.jsx('input', {
                      type: 'text',
                      value: e,
                      onChange: (f) => t(f.target.value),
                      required: !0,
                      className: 'w-full border border-gray-300 rounded-md p-2',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  children: [
                    d.jsx('label', {
                      className: 'block text-sm font-medium text-gray-600',
                      children: 'Email',
                    }),
                    d.jsx('input', {
                      type: 'email',
                      value: n,
                      onChange: (f) => a(f.target.value),
                      required: !0,
                      className: 'w-full border border-gray-300 rounded-md p-2',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  children: [
                    d.jsx('label', {
                      className: 'block text-sm font-medium text-gray-600',
                      children: 'Password',
                    }),
                    d.jsx('input', {
                      type: 'password',
                      value: l,
                      onChange: (f) => i(f.target.value),
                      required: !0,
                      className: 'w-full border border-gray-300 rounded-md p-2',
                    }),
                  ],
                }),
                d.jsxs('div', {
                  children: [
                    d.jsx('label', {
                      className: 'block text-sm font-medium text-gray-600',
                      children: 'Repeat Password',
                    }),
                    d.jsx('input', {
                      type: 'password',
                      value: s,
                      onChange: (f) => r(f.target.value),
                      required: !0,
                      className: 'w-full border border-gray-300 rounded-md p-2',
                    }),
                  ],
                }),
                u &&
                  d.jsx('p', {
                    className: 'text-red-500 text-sm',
                    children: u,
                  }),
                d.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    d.jsx('input', {
                      type: 'checkbox',
                      required: !0,
                      className: 'mr-2',
                    }),
                    d.jsxs('label', {
                      className: 'text-sm text-gray-600',
                      children: [
                        'I agree to all statements in',
                        ' ',
                        d.jsx('a', {
                          href: '/terms',
                          className: 'text-blue-500 hover:underline',
                          children: 'Terms of Service',
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx('button', {
                  type: 'submit',
                  className:
                    'w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600',
                  children: 'Register',
                }),
              ],
            }),
            d.jsx('div', {
              className: 'flex justify-center items-center mt-4',
              children: d.jsx('a', {
                href: '/login',
                className: 'text-sm text-blue-500 hover:underline',
                children: 'I am already a member',
              }),
            }),
          ],
        }),
        d.jsx('div', {
          className: 'flex-1 flex items-center justify-center',
          children: d.jsx('img', {
            src: '/images/Avatar.jpg',
            alt: 'Register Illustration',
            className: 'w-[300px] h-[300px] object-contain',
          }),
        }),
      ],
    }),
  });
}
function YS() {
  const { t: e } = Et();
  return d.jsxs('div', {
    id: 'root',
    children: [
      d.jsxs('div', {
        className:
          'bg-transparent p-7 font-sans flex flex-col lg:flex-row items-center lg:justify-between lg:gap-x-60',
        children: [
          d.jsxs('div', {
            className: 'lg:w-2/5 space-y-4 flex flex-col items-center my-5',
            children: [
              d.jsx('div', {
                children: d.jsx('img', {
                  src: '/images/about_standup_comedy_1.jpg',
                  alt: 'Top image',
                  className: 'w-[300px] h-[300px] object-cover rounded-[35px]',
                }),
              }),
              d.jsxs('div', {
                className: 'w-[300px] text-left',
                children: [
                  d.jsx('h2', {
                    className: 'text-xl font-bold mb-4',
                    children: e('introduction.title1'),
                  }),
                  d.jsx('p', {
                    className: 'leading-relaxed',
                    children: e('introduction.description1'),
                  }),
                  d.jsx('p', {
                    className: 'mt-4 leading-relaxed',
                    children: d.jsx('strong', {
                      children: e('introduction.subtitle1'),
                    }),
                  }),
                  d.jsx('ul', {
                    className: 'list-disc ml-6 mt-2 space-y-2',
                    children: e('introduction.steps', {
                      returnObjects: !0,
                    }).map((t, n) => d.jsx('li', { children: t }, n)),
                  }),
                  d.jsx('p', {
                    className: 'mt-4 leading-relaxed',
                    children: e('introduction.description2'),
                  }),
                ],
              }),
              d.jsx('div', {
                children: d.jsx('img', {
                  src: '/images/about_standup_comedy_3.jpg',
                  alt: 'Bottom image',
                  className: 'w-[300px] h-[200px] object-cover rounded-[35px]',
                }),
              }),
            ],
          }),
          d.jsxs('div', {
            className: 'lg:w-2/5 space-y-4 flex flex-col items-center my-5',
            children: [
              d.jsxs('div', {
                className: 'w-[300px]',
                children: [
                  d.jsx('h2', {
                    className: 'text-2xl font-bold mb-4',
                    children: e('introduction.title2'),
                  }),
                  d.jsx('p', {
                    className: 'leading-relaxed',
                    children: e('introduction.description3'),
                  }),
                ],
              }),
              d.jsx('div', {
                children: d.jsx('img', {
                  src: '/images/about_standup_comedy_2.jpg',
                  alt: 'Side image',
                  className: 'w-[300px] h-[200px] object-cover rounded-[35px]',
                }),
              }),
              d.jsxs('div', {
                className: 'w-[300px]',
                children: [
                  d.jsx('h2', {
                    className: 'text-xl font-semibold mb-4',
                    children: e('introduction.subtitle2'),
                  }),
                  d.jsx('p', {
                    className: 'leading-relaxed',
                    children: e('introduction.description4'),
                  }),
                  d.jsx('ul', {
                    className: 'list-none ml-0 mt-4 space-y-4',
                    children: e('introduction.formats', {
                      returnObjects: !0,
                    }).map((t, n) =>
                      d.jsxs(
                        'li',
                        {
                          children: [
                            d.jsx('p', {
                              className: 'font-semibold',
                              children: t.title,
                            }),
                            d.jsx('p', {
                              className: 'leading-relaxed',
                              children: t.description,
                            }),
                          ],
                        },
                        n
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      d.jsx('footer', { className: 'h-14' }),
    ],
  });
}
function VS() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: [
      d.jsx('div', {
        className: '-mt-5 top-0 left-0 right-0 z-50',
        children: d.jsx(Gt, {}),
      }),
      d.jsx('div', {
        className: 'flex flex-col items-center w-full max-w-4xl mx-auto',
        children: d.jsx('div', { className: 'mt-4', children: d.jsx(YS, {}) }),
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
function $S() {
  const { t: e } = Et(),
    t = e('performanceNotice.rules', { returnObjects: !0 }),
    n = e('performanceNotice.remarks', { returnObjects: !0 });
  return d.jsx('div', {
    className: 'p-6',
    children: d.jsxs('div', {
      className: 'max-w-6xl mx-auto rounded-lg p-8',
      children: [
        d.jsx('h1', {
          className: 'text-center text-2xl font-bold mb-4 text-black',
          children: e('performanceNotice.title'),
        }),
        d.jsx('p', {
          className: 'text-center text-lg font-bold mb-6 text-black',
          children: e('performanceNotice.subtitle'),
        }),
        d.jsx('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6',
          children: t.map((a, l) =>
            d.jsxs(
              'div',
              {
                className:
                  'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4',
                children: [
                  d.jsx('img', {
                    src: a.image,
                    alt: a.alt,
                    className: 'w-32 h-32 md:w-48 md:h-48',
                  }),
                  d.jsx('p', {
                    className:
                      'font-bold text-black text-lg text-center md:text-left',
                    children: d.jsx(Ct, {
                      components: {
                        span: d.jsx('span', {
                          className: 'text-red-500 font-bold',
                        }),
                      },
                      children: a.text,
                    }),
                  }),
                ],
              },
              l
            )
          ),
        }),
        d.jsx('div', {
          className: 'text-center space-y-4',
          children: n.map((a, l) =>
            d.jsx(
              'p',
              {
                className: 'text-black text-lg font-bold',
                children: d.jsx(Ct, {
                  components: {
                    span: d.jsx('span', {
                      className: 'text-red-500 font-bold',
                    }),
                  },
                  children: a,
                }),
              },
              l
            )
          ),
        }),
      ],
    }),
  });
}
function GS() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: [
      d.jsxs('div', {
        className: 'pt-0 px-96',
        children: [
          d.jsx('div', {
            className: 'fixed top-0 left-0 right-0 z-50',
            children: d.jsx(Gt, {}),
          }),
          d.jsx('div', { className: 'mt-20', children: d.jsx($S, {}) }),
        ],
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
function XS() {
  const { t: e } = Et(),
    t = e('rentalDetail.details', { returnObjects: !0 }),
    n = e('rentalDetail.whyUs', { returnObjects: !0 });
  return d.jsxs('div', {
    className: 'font-sans text-black p-6',
    children: [
      d.jsx('div', {
        className: 'text-center font-bold text-2xl mb-8',
        children: e('rentalDetail.title'),
      }),
      d.jsxs('div', {
        className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
        children: [
          d.jsxs('div', {
            className: 'space-y-4',
            children: [
              d.jsx('div', {
                className: 'text-xl font-semibold',
                children: e('rentalDetail.address.title'),
              }),
              d.jsx('div', {
                className: 'font-bold text-lg',
                children: e('rentalDetail.address.name'),
              }),
              d.jsx('div', {
                className: 'text-lg',
                children: e('rentalDetail.address.location'),
              }),
              d.jsx('img', {
                src: '/images/address.jpg',
                alt: 'Address',
                className: 'w-full md:w-100 h-80 rounded-[40px] shadow-lg',
              }),
            ],
          }),
          d.jsxs('div', {
            className: 'space-y-4 text-lg',
            children: [
              d.jsx('p', {
                children: d.jsx(Ct, {
                  components: {
                    span: d.jsx('span', {
                      className: 'font-bold text-red-500',
                    }),
                  },
                  children: t,
                }),
              }),
              d.jsx('div', {
                className: 'text-base font-bold',
                children: e('rentalDetail.whyUsTitle'),
              }),
              d.jsx('p', {
                children: d.jsx(Ct, {
                  components: {
                    span: d.jsx('span', {
                      className: 'font-semibold text-red-500',
                    }),
                  },
                  children: n,
                }),
              }),
              d.jsx('div', {
                className: 'text-base font-bold',
                children: e('rentalDetail.contact.title'),
              }),
              d.jsx('p', {
                className: 'font-semibold',
                children: e('rentalDetail.contact.info'),
              }),
              d.jsx('p', {
                className: 'font-semibold',
                children: '📧 am2pmnz@gmail.com',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function QS() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen  items-center p-5",
    children: [
      d.jsxs('div', {
        className: 'pt-0 px-96',
        children: [
          d.jsx('div', {
            className: 'fixed top-0 left-0 right-0 z-50',
            children: d.jsx(Gt, {}),
          }),
          d.jsx('div', { className: 'mt-20', children: d.jsx(XS, {}) }),
        ],
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
function KS() {
  const { t: e } = Et();
  return d.jsxs('div', {
    className: 'font-sans text-black p-6 flex flex-col items-center',
    children: [
      d.jsx('div', {
        className: 'text-center font-bold text-2xl mb-8',
        children: e('recruitment.title'),
      }),
      d.jsxs('div', {
        className: 'space-y-8 text-center w-4/5 text-xl',
        children: [
          d.jsx('section', {
            children: d.jsx('p', {
              children: d.jsx(Ct, {
                components: {
                  br: d.jsx('br', {}),
                  span: d.jsx('span', { className: 'text-red-500 font-bold' }),
                },
                children: e('recruitment.introduction'),
              }),
            }),
          }),
          d.jsxs('section', {
            children: [
              d.jsx('div', {
                className: 'font-bold',
                children: e('recruitment.whatWeNeed.title'),
              }),
              d.jsx('p', {
                children: d.jsx(Ct, {
                  components: { br: d.jsx('br', {}) },
                  children: e('recruitment.whatWeNeed.description'),
                }),
              }),
            ],
          }),
          d.jsxs('section', {
            children: [
              d.jsx('div', {
                className: 'font-bold',
                children: e('recruitment.growth.title'),
              }),
              d.jsx('p', {
                children: d.jsx(Ct, {
                  components: { br: d.jsx('br', {}) },
                  children: e('recruitment.growth.description'),
                }),
              }),
            ],
          }),
          d.jsxs('section', {
            children: [
              d.jsx('div', {
                className: 'font-bold',
                children: e('recruitment.benefits.title'),
              }),
              d.jsx('p', {
                children: d.jsx(Ct, {
                  components: { br: d.jsx('br', {}) },
                  children: e('recruitment.benefits.description'),
                }),
              }),
            ],
          }),
          d.jsxs('section', {
            children: [
              d.jsx('div', {
                className: 'font-bold',
                children: e('recruitment.howToJoin.title'),
              }),
              d.jsx('p', {
                children: d.jsx(Ct, {
                  components: {
                    a: d.jsx('a', {
                      href: 'mailto:youshow.nz@gmail.com',
                      className: 'text-blue-500 underline',
                    }),
                  },
                  children: e('recruitment.howToJoin.contact'),
                }),
              }),
              d.jsx('p', { children: e('recruitment.howToJoin.info') }),
            ],
          }),
        ],
      }),
      d.jsx('div', {
        className: 'text-center mt-8 font-bold text-xl',
        children: e('recruitment.footer'),
      }),
    ],
  });
}
function ZS() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen  items-center p-5",
    children: [
      d.jsxs('div', {
        className: 'pt-0 px-96',
        children: [
          d.jsx('div', {
            className: 'fixed top-0 left-0 right-0 z-50',
            children: d.jsx(Gt, {}),
          }),
          d.jsx('div', { className: 'mt-20', children: d.jsx(KS, {}) }),
        ],
      }),
      d.jsx('div', {
        className: 'fixed bottom-10 right-10',
        children: d.jsx(bn, {}),
      }),
    ],
  });
}
av.createRoot(document.getElementById('root')).render(
  d.jsx(Ep.StrictMode, {
    children: d.jsx(Ob, {
      children: d.jsxs(nb, {
        children: [
          d.jsx(_e, { path: '/', element: d.jsx(ax, {}) }),
          d.jsx(_e, { path: '/login', element: d.jsx(kS, {}) }),
          d.jsx(_e, { path: '/register', element: d.jsx(qS, {}) }),
          d.jsx(_e, { path: '/homepage', element: d.jsx(ix, {}) }),
          d.jsx(_e, { path: '/plans', element: d.jsx(BS, {}) }),
          d.jsx(_e, { path: '/actors', element: d.jsx(ex, {}) }),
          d.jsx(_e, { path: '/memberships', element: d.jsx(nx, {}) }),
          d.jsx(_e, { path: '/contact', element: d.jsx($1, {}) }),
          d.jsx(_e, { path: '/talkshow', element: d.jsx(VS, {}) }),
          d.jsx(_e, { path: '/guidelines', element: d.jsx(GS, {}) }),
          d.jsx(_e, { path: '/rental', element: d.jsx(QS, {}) }),
          d.jsx(_e, { path: '/recruitment', element: d.jsx(ZS, {}) }),
        ],
      }),
    }),
  })
);
