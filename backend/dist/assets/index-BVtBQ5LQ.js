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
function Zu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var vd = { exports: {} },
  Ts = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rp = Symbol.for('react.transitional.element'),
  up = Symbol.for('react.fragment');
function bd(e, t, n) {
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
    { $$typeof: rp, type: e, key: a, ref: t !== void 0 ? t : null, props: n }
  );
}
Ts.Fragment = up;
Ts.jsx = bd;
Ts.jsxs = bd;
vd.exports = Ts;
var d = vd.exports,
  xd = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ju = Symbol.for('react.transitional.element'),
  op = Symbol.for('react.portal'),
  cp = Symbol.for('react.fragment'),
  fp = Symbol.for('react.strict_mode'),
  dp = Symbol.for('react.profiler'),
  hp = Symbol.for('react.consumer'),
  mp = Symbol.for('react.context'),
  gp = Symbol.for('react.forward_ref'),
  pp = Symbol.for('react.suspense'),
  yp = Symbol.for('react.memo'),
  Sd = Symbol.for('react.lazy'),
  oc = Symbol.iterator;
function vp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (oc && e[oc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ed = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wd = Object.assign,
  Nd = {};
function Ua(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nd),
    (this.updater = n || Ed);
}
Ua.prototype.isReactComponent = {};
Ua.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ua.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function jd() {}
jd.prototype = Ua.prototype;
function Fu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nd),
    (this.updater = n || Ed);
}
var Wu = (Fu.prototype = new jd());
Wu.constructor = Fu;
wd(Wu, Ua.prototype);
Wu.isPureReactComponent = !0;
var cc = Array.isArray,
  le = { H: null, A: null, T: null, S: null },
  Od = Object.prototype.hasOwnProperty;
function Pu(e, t, n, a, l, i) {
  return (
    (n = i.ref),
    { $$typeof: Ju, type: e, key: t, ref: n !== void 0 ? n : null, props: i }
  );
}
function bp(e, t) {
  return Pu(e.type, t, void 0, void 0, void 0, e.props);
}
function Iu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ju;
}
function xp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fc = /\/+/g;
function er(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? xp('' + e.key)
    : t.toString(36);
}
function dc() {}
function Sp(e) {
  switch (e.status) {
    case 'fulfilled':
      return e.value;
    case 'rejected':
      throw e.reason;
    default:
      switch (
        (typeof e.status == 'string'
          ? e.then(dc, dc)
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
function ea(e, t, n, a, l) {
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
          case Ju:
          case op:
            s = !0;
            break;
          case Sd:
            return (s = e._init), ea(s(e._payload), t, n, a, l);
        }
    }
  if (s)
    return (
      (l = l(e)),
      (s = a === '' ? '.' + er(e, 0) : a),
      cc(l)
        ? ((n = ''),
          s != null && (n = s.replace(fc, '$&/') + '/'),
          ea(l, t, n, '', function (o) {
            return o;
          }))
        : l != null &&
          (Iu(l) &&
            (l = bp(
              l,
              n +
                (l.key == null || (e && e.key === l.key)
                  ? ''
                  : ('' + l.key).replace(fc, '$&/') + '/') +
                s
            )),
          t.push(l)),
      1
    );
  s = 0;
  var r = a === '' ? '.' : a + ':';
  if (cc(e))
    for (var u = 0; u < e.length; u++)
      (a = e[u]), (i = r + er(a, u)), (s += ea(a, t, n, i, l));
  else if (((u = vp(e)), typeof u == 'function'))
    for (e = u.call(e), u = 0; !(a = e.next()).done; )
      (a = a.value), (i = r + er(a, u++)), (s += ea(a, t, n, i, l));
  else if (i === 'object') {
    if (typeof e.then == 'function') return ea(Sp(e), t, n, a, l);
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
function oi(e, t, n) {
  if (e == null) return e;
  var a = [],
    l = 0;
  return (
    ea(e, a, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    a
  );
}
function Ep(e) {
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
var hc =
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
function wp() {}
q.Children = {
  map: oi,
  forEach: function (e, t, n) {
    oi(
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
      oi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Iu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
q.Component = Ua;
q.Fragment = cp;
q.Profiler = dp;
q.PureComponent = Fu;
q.StrictMode = fp;
q.Suspense = pp;
q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = le;
q.act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
q.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'The argument must be a React element, but you passed ' + e + '.'
    );
  var a = wd({}, e.props),
    l = e.key,
    i = void 0;
  if (t != null)
    for (s in (t.ref !== void 0 && (i = void 0),
    t.key !== void 0 && (l = '' + t.key),
    t))
      !Od.call(t, s) ||
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
  return Pu(e.type, l, void 0, void 0, i, a);
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: mp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = e),
    (e.Consumer = { $$typeof: hp, _context: e }),
    e
  );
};
q.createElement = function (e, t, n) {
  var a,
    l = {},
    i = null;
  if (t != null)
    for (a in (t.key !== void 0 && (i = '' + t.key), t))
      Od.call(t, a) &&
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
  return Pu(e, i, void 0, void 0, null, l);
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: gp, render: e };
};
q.isValidElement = Iu;
q.lazy = function (e) {
  return { $$typeof: Sd, _payload: { _status: -1, _result: e }, _init: Ep };
};
q.memo = function (e, t) {
  return { $$typeof: yp, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = le.T,
    n = {};
  le.T = n;
  try {
    var a = e(),
      l = le.S;
    l !== null && l(n, a),
      typeof a == 'object' &&
        a !== null &&
        typeof a.then == 'function' &&
        a.then(wp, hc);
  } catch (i) {
    hc(i);
  } finally {
    le.T = t;
  }
};
q.unstable_useCacheRefresh = function () {
  return le.H.useCacheRefresh();
};
q.use = function (e) {
  return le.H.use(e);
};
q.useActionState = function (e, t, n) {
  return le.H.useActionState(e, t, n);
};
q.useCallback = function (e, t) {
  return le.H.useCallback(e, t);
};
q.useContext = function (e) {
  return le.H.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e, t) {
  return le.H.useDeferredValue(e, t);
};
q.useEffect = function (e, t) {
  return le.H.useEffect(e, t);
};
q.useId = function () {
  return le.H.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return le.H.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return le.H.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return le.H.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return le.H.useMemo(e, t);
};
q.useOptimistic = function (e, t) {
  return le.H.useOptimistic(e, t);
};
q.useReducer = function (e, t, n) {
  return le.H.useReducer(e, t, n);
};
q.useRef = function (e) {
  return le.H.useRef(e);
};
q.useState = function (e) {
  return le.H.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return le.H.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return le.H.useTransition();
};
q.version = '19.0.0';
xd.exports = q;
var E = xd.exports;
const Np = Zu(E);
var Td = { exports: {} },
  Rs = {},
  Rd = { exports: {} },
  Ad = {};
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
      var X = (U - 1) >>> 1,
        ee = A[X];
      if (0 < l(ee, z)) (A[X] = z), (A[U] = ee), (U = X);
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
      e: for (var X = 0, ee = A.length, bn = ee >>> 1; X < bn; ) {
        var xn = 2 * (X + 1) - 1,
          Is = A[xn],
          Sn = xn + 1,
          ui = A[Sn];
        if (0 > l(Is, U))
          Sn < ee && 0 > l(ui, Is)
            ? ((A[X] = ui), (A[Sn] = U), (X = Sn))
            : ((A[X] = Is), (A[xn] = U), (X = xn));
        else if (Sn < ee && 0 > l(ui, U)) (A[X] = ui), (A[Sn] = U), (X = Sn);
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
    p = !1,
    y = !1,
    x = !1,
    v = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null;
  function b(A) {
    for (var z = n(o); z !== null; ) {
      if (z.callback === null) a(o);
      else if (z.startTime <= A)
        a(o), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(o);
    }
  }
  function S(A) {
    if (((x = !1), b(A), !y))
      if (n(u) !== null) (y = !0), xe();
      else {
        var z = n(o);
        z !== null && ze(S, z.startTime - A);
      }
  }
  var w = !1,
    j = -1,
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
          (y = !1), x && ((x = !1), m(j), (j = -1)), (p = !0);
          var U = f;
          try {
            t: {
              for (
                b(A), h = n(u);
                h !== null && !(h.expirationTime > A && D());

              ) {
                var X = h.callback;
                if (typeof X == 'function') {
                  (h.callback = null), (f = h.priorityLevel);
                  var ee = X(h.expirationTime <= A);
                  if (((A = e.unstable_now()), typeof ee == 'function')) {
                    (h.callback = ee), b(A), (z = !0);
                    break t;
                  }
                  h === n(u) && a(u), b(A);
                } else a(u);
                h = n(u);
              }
              if (h !== null) z = !0;
              else {
                var bn = n(o);
                bn !== null && ze(S, bn.startTime - A), (z = !1);
              }
            }
            break e;
          } finally {
            (h = null), (f = U), (p = !1);
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
    var _ = new MessageChannel(),
      oe = _.port2;
    (_.port1.onmessage = C),
      (L = function () {
        oe.postMessage(null);
      });
  } else
    L = function () {
      v(C, 0);
    };
  function xe() {
    w || ((w = !0), L());
  }
  function ze(A, z) {
    j = v(function () {
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
      y || p || ((y = !0), xe());
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
      var X = e.unstable_now();
      switch (
        (typeof U == 'object' && U !== null
          ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? X + U : X))
          : (U = X),
        A)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = U + ee),
        (A = {
          id: c++,
          callback: z,
          priorityLevel: A,
          startTime: U,
          expirationTime: ee,
          sortIndex: -1,
        }),
        U > X
          ? ((A.sortIndex = U),
            t(o, A),
            n(u) === null &&
              A === n(o) &&
              (x ? (m(j), (j = -1)) : (x = !0), ze(S, U - X)))
          : ((A.sortIndex = ee), t(u, A), y || p || ((y = !0), xe())),
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
})(Ad);
Rd.exports = Ad;
var jp = Rd.exports,
  Cd = { exports: {} },
  De = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op = E;
function Dd(e) {
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
function Qt() {}
var Ae = {
    d: {
      f: Qt,
      r: function () {
        throw Error(Dd(522));
      },
      D: Qt,
      C: Qt,
      L: Qt,
      m: Qt,
      X: Qt,
      S: Qt,
      M: Qt,
    },
    p: 0,
    findDOMNode: null,
  },
  Tp = Symbol.for('react.portal');
function Rp(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tp,
    key: a == null ? null : '' + a,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
var cl = Op.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function As(e, t) {
  if (e === 'font') return '';
  if (typeof t == 'string') return t === 'use-credentials' ? t : '';
}
De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ae;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
    throw Error(Dd(299));
  return Rp(e, t, null, n);
};
De.flushSync = function (e) {
  var t = cl.T,
    n = Ae.p;
  try {
    if (((cl.T = null), (Ae.p = 2), e)) return e();
  } finally {
    (cl.T = t), (Ae.p = n), Ae.d.f();
  }
};
De.preconnect = function (e, t) {
  typeof e == 'string' &&
    (t
      ? ((t = t.crossOrigin),
        (t =
          typeof t == 'string' ? (t === 'use-credentials' ? t : '') : void 0))
      : (t = null),
    Ae.d.C(e, t));
};
De.prefetchDNS = function (e) {
  typeof e == 'string' && Ae.d.D(e);
};
De.preinit = function (e, t) {
  if (typeof e == 'string' && t && typeof t.as == 'string') {
    var n = t.as,
      a = As(n, t.crossOrigin),
      l = typeof t.integrity == 'string' ? t.integrity : void 0,
      i = typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0;
    n === 'style'
      ? Ae.d.S(e, typeof t.precedence == 'string' ? t.precedence : void 0, {
          crossOrigin: a,
          integrity: l,
          fetchPriority: i,
        })
      : n === 'script' &&
        Ae.d.X(e, {
          crossOrigin: a,
          integrity: l,
          fetchPriority: i,
          nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
        });
  }
};
De.preinitModule = function (e, t) {
  if (typeof e == 'string')
    if (typeof t == 'object' && t !== null) {
      if (t.as == null || t.as === 'script') {
        var n = As(t.as, t.crossOrigin);
        Ae.d.M(e, {
          crossOrigin: n,
          integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
          nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
        });
      }
    } else t == null && Ae.d.M(e);
};
De.preload = function (e, t) {
  if (
    typeof e == 'string' &&
    typeof t == 'object' &&
    t !== null &&
    typeof t.as == 'string'
  ) {
    var n = t.as,
      a = As(n, t.crossOrigin);
    Ae.d.L(e, n, {
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
De.preloadModule = function (e, t) {
  if (typeof e == 'string')
    if (t) {
      var n = As(t.as, t.crossOrigin);
      Ae.d.m(e, {
        as: typeof t.as == 'string' && t.as !== 'script' ? t.as : void 0,
        crossOrigin: n,
        integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
      });
    } else Ae.d.m(e);
};
De.requestFormReset = function (e) {
  Ae.d.r(e);
};
De.unstable_batchedUpdates = function (e, t) {
  return e(t);
};
De.useFormState = function (e, t, n) {
  return cl.H.useFormState(e, t, n);
};
De.useFormStatus = function () {
  return cl.H.useHostTransitionStatus();
};
De.version = '19.0.0';
function zd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd);
    } catch (e) {
      console.error(e);
    }
}
zd(), (Cd.exports = De);
var Ap = Cd.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ge = jp,
  Ud = E,
  Cp = Ap;
function O(e) {
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
function Ld(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
var Dp = Symbol.for('react.element'),
  ci = Symbol.for('react.transitional.element'),
  il = Symbol.for('react.portal'),
  la = Symbol.for('react.fragment'),
  Md = Symbol.for('react.strict_mode'),
  Gr = Symbol.for('react.profiler'),
  zp = Symbol.for('react.provider'),
  _d = Symbol.for('react.consumer'),
  zt = Symbol.for('react.context'),
  eo = Symbol.for('react.forward_ref'),
  Xr = Symbol.for('react.suspense'),
  Qr = Symbol.for('react.suspense_list'),
  to = Symbol.for('react.memo'),
  Jt = Symbol.for('react.lazy'),
  Hd = Symbol.for('react.offscreen'),
  Up = Symbol.for('react.memo_cache_sentinel'),
  mc = Symbol.iterator;
function Qa(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (mc && e[mc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Lp = Symbol.for('react.client.reference');
function Kr(e) {
  if (e == null) return null;
  if (typeof e == 'function')
    return e.$$typeof === Lp ? null : e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case la:
      return 'Fragment';
    case il:
      return 'Portal';
    case Gr:
      return 'Profiler';
    case Md:
      return 'StrictMode';
    case Xr:
      return 'Suspense';
    case Qr:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case zt:
        return (e.displayName || 'Context') + '.Provider';
      case _d:
        return (e._context.displayName || 'Context') + '.Consumer';
      case eo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case to:
        return (
          (t = e.displayName || null), t !== null ? t : Kr(e.type) || 'Memo'
        );
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return Kr(e(t));
        } catch {}
    }
  return null;
}
var B = Ud.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  I = Object.assign,
  tr,
  gc;
function sl(e) {
  if (tr === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      (tr = (t && t[1]) || ''),
        (gc =
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
    tr +
    e +
    gc
  );
}
var nr = !1;
function ar(e, t) {
  if (!e || nr) return '';
  nr = !0;
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
              } catch (p) {
                var f = p;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (p) {
                f = p;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (p) {
              f = p;
            }
            (h = e()) &&
              typeof h.catch == 'function' &&
              h.catch(function () {});
          }
        } catch (p) {
          if (p && f && typeof p.stack == 'string') return [p.stack, f.stack];
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
    (nr = !1), (Error.prepareStackTrace = n);
  }
  return (n = e ? e.displayName || e.name : '') ? sl(n) : '';
}
function Mp(e) {
  switch (e.tag) {
    case 26:
    case 27:
    case 5:
      return sl(e.type);
    case 16:
      return sl('Lazy');
    case 13:
      return sl('Suspense');
    case 19:
      return sl('SuspenseList');
    case 0:
    case 15:
      return (e = ar(e.type, !1)), e;
    case 11:
      return (e = ar(e.type.render, !1)), e;
    case 1:
      return (e = ar(e.type, !0)), e;
    default:
      return '';
  }
}
function pc(e) {
  try {
    var t = '';
    do (t += Mp(e)), (e = e.return);
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
function La(e) {
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
function Bd(e) {
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
function yc(e) {
  if (La(e) !== e) throw Error(O(188));
}
function _p(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = La(e)), t === null)) throw Error(O(188));
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
        if (i === n) return yc(l), e;
        if (i === a) return yc(l), t;
        i = i.sibling;
      }
      throw Error(O(188));
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
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== a) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function qd(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e;
  for (e = e.child; e !== null; ) {
    if (((t = qd(e)), t !== null)) return t;
    e = e.sibling;
  }
  return null;
}
var rl = Array.isArray,
  P = Cp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Dn = { pending: !1, data: null, method: null, action: null },
  Zr = [],
  ia = -1;
function xt(e) {
  return { current: e };
}
function be(e) {
  0 > ia || ((e.current = Zr[ia]), (Zr[ia] = null), ia--);
}
function te(e, t) {
  ia++, (Zr[ia] = e.current), (e.current = t);
}
var pt = xt(null),
  Tl = xt(null),
  an = xt(null),
  Qi = xt(null);
function Ki(e, t) {
  switch ((te(an, t), te(Tl, e), te(pt, null), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) && (t = t.namespaceURI) ? bf(t) : 0;
      break;
    default:
      if (
        ((e = e === 8 ? t.parentNode : t),
        (t = e.tagName),
        (e = e.namespaceURI))
      )
        (e = bf(e)), (t = Wm(e, t));
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
  be(pt), te(pt, t);
}
function Na() {
  be(pt), be(Tl), be(an);
}
function Jr(e) {
  e.memoizedState !== null && te(Qi, e);
  var t = pt.current,
    n = Wm(t, e.type);
  t !== n && (te(Tl, e), te(pt, n));
}
function Zi(e) {
  Tl.current === e && (be(pt), be(Tl)),
    Qi.current === e && (be(Qi), (Bl._currentValue = Dn));
}
var Fr = Object.prototype.hasOwnProperty,
  no = ge.unstable_scheduleCallback,
  lr = ge.unstable_cancelCallback,
  Hp = ge.unstable_shouldYield,
  Bp = ge.unstable_requestPaint,
  yt = ge.unstable_now,
  qp = ge.unstable_getCurrentPriorityLevel,
  kd = ge.unstable_ImmediatePriority,
  Yd = ge.unstable_UserBlockingPriority,
  Ji = ge.unstable_NormalPriority,
  kp = ge.unstable_LowPriority,
  Vd = ge.unstable_IdlePriority,
  Yp = ge.log,
  Vp = ge.unstable_setDisableYieldValue,
  Ql = null,
  Ye = null;
function $p(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == 'function')
    try {
      Ye.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
function tn(e) {
  if (
    (typeof Yp == 'function' && Vp(e),
    Ye && typeof Ye.setStrictMode == 'function')
  )
    try {
      Ye.setStrictMode(Ql, e);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Qp,
  Gp = Math.log,
  Xp = Math.LN2;
function Qp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gp(e) / Xp) | 0)) | 0;
}
var fi = 128,
  di = 4194304;
function Nn(e) {
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
function Cs(e, t) {
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
          ? (a = Nn(n))
          : ((i &= r),
            i !== 0
              ? (a = Nn(i))
              : e || ((s = r & ~s), s !== 0 && (a = Nn(s)))))
      : ((r = n & ~l),
        r !== 0
          ? (a = Nn(r))
          : i !== 0
            ? (a = Nn(i))
            : e || ((s = n & ~s), s !== 0 && (a = Nn(s)))),
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
function Kl(e, t) {
  return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
}
function Kp(e, t) {
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
function $d() {
  var e = fi;
  return (fi <<= 1), !(fi & 4194176) && (fi = 128), e;
}
function Gd() {
  var e = di;
  return (di <<= 1), !(di & 62914560) && (di = 4194304), e;
}
function ir(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zl(e, t) {
  (e.pendingLanes |= t),
    t !== 268435456 &&
      ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function Zp(e, t, n, a, l, i) {
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
    var c = 31 - Ve(n),
      h = 1 << c;
    (r[c] = 0), (u[c] = -1);
    var f = o[c];
    if (f !== null)
      for (o[c] = null, c = 0; c < f.length; c++) {
        var p = f[c];
        p !== null && (p.lane &= -536870913);
      }
    n &= ~h;
  }
  a !== 0 && Xd(e, a, 0),
    i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
}
function Xd(e, t, n) {
  (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
  var a = 31 - Ve(t);
  (e.entangledLanes |= t),
    (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 4194218));
}
function Qd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var a = 31 - Ve(n),
      l = 1 << a;
    (l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l);
  }
}
function Kd(e) {
  return (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2;
}
function Zd() {
  var e = P.p;
  return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : rg(e.type));
}
function Jp(e, t) {
  var n = P.p;
  try {
    return (P.p = e), t();
  } finally {
    P.p = n;
  }
}
var yn = Math.random().toString(36).slice(2),
  je = '__reactFiber$' + yn,
  _e = '__reactProps$' + yn,
  Ma = '__reactContainer$' + yn,
  Wr = '__reactEvents$' + yn,
  Fp = '__reactListeners$' + yn,
  Wp = '__reactHandles$' + yn,
  vc = '__reactResources$' + yn,
  Rl = '__reactMarker$' + yn;
function ao(e) {
  delete e[je], delete e[_e], delete e[Wr], delete e[Fp], delete e[Wp];
}
function Tn(e) {
  var t = e[je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ma] || n[je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sf(e); e !== null; ) {
          if ((n = e[je])) return n;
          e = Sf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _a(e) {
  if ((e = e[je] || e[Ma])) {
    var t = e.tag;
    if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
      return e;
  }
  return null;
}
function ul(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
  throw Error(O(33));
}
function pa(e) {
  var t = e[vc];
  return (
    t ||
      (t = e[vc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    t
  );
}
function ye(e) {
  e[Rl] = !0;
}
var Jd = new Set(),
  Fd = {};
function Gn(e, t) {
  ja(e, t), ja(e + 'Capture', t);
}
function ja(e, t) {
  for (Fd[e] = t, e = 0; e < t.length; e++) Jd.add(t[e]);
}
var qt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Pp = RegExp(
    '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
  ),
  bc = {},
  xc = {};
function Ip(e) {
  return Fr.call(xc, e)
    ? !0
    : Fr.call(bc, e)
      ? !1
      : Pp.test(e)
        ? (xc[e] = !0)
        : ((bc[e] = !0), !1);
}
function Ri(e, t, n) {
  if (Ip(t))
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
function hi(e, t, n) {
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
function Nt(e, t, n, a) {
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
function Je(e) {
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
function Wd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function e0(e) {
  var t = Wd(e) ? 'checked' : 'value',
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
function Fi(e) {
  e._valueTracker || (e._valueTracker = e0(e));
}
function Pd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    a = '';
  return (
    e && (a = Wd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = a),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
var t0 = /[\n"\\]/g;
function Pe(e) {
  return e.replace(t0, function (t) {
    return '\\' + t.charCodeAt(0).toString(16) + ' ';
  });
}
function Pr(e, t, n, a, l, i, s, r) {
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
          (e.value = '' + Je(t))
        : e.value !== '' + Je(t) && (e.value = '' + Je(t))
      : (s !== 'submit' && s !== 'reset') || e.removeAttribute('value'),
    t != null
      ? Ir(e, s, Je(t))
      : n != null
        ? Ir(e, s, Je(n))
        : a != null && e.removeAttribute('value'),
    l == null && i != null && (e.defaultChecked = !!i),
    l != null &&
      (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
    r != null &&
    typeof r != 'function' &&
    typeof r != 'symbol' &&
    typeof r != 'boolean'
      ? (e.name = '' + Je(r))
      : e.removeAttribute('name');
}
function Id(e, t, n, a, l, i, s, r) {
  if (
    (i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean' &&
      (e.type = i),
    t != null || n != null)
  ) {
    if (!((i !== 'submit' && i !== 'reset') || t != null)) return;
    (n = n != null ? '' + Je(n) : ''),
      (t = t != null ? '' + Je(t) : n),
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
function Ir(e, t, n) {
  (t === 'number' && Wi(e.ownerDocument) === e) ||
    e.defaultValue === '' + n ||
    (e.defaultValue = '' + n);
}
function ya(e, t, n, a) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && a && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Je(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), a && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function eh(e, t, n) {
  if (
    t != null &&
    ((t = '' + Je(t)), t !== e.value && (e.value = t), n == null)
  ) {
    e.defaultValue !== t && (e.defaultValue = t);
    return;
  }
  e.defaultValue = n != null ? '' + Je(n) : '';
}
function th(e, t, n, a) {
  if (t == null) {
    if (a != null) {
      if (n != null) throw Error(O(92));
      if (rl(a)) {
        if (1 < a.length) throw Error(O(93));
        a = a[0];
      }
      n = a;
    }
    n == null && (n = ''), (t = n);
  }
  (n = Je(t)),
    (e.defaultValue = n),
    (a = e.textContent),
    a === n && a !== '' && a !== null && (e.value = a);
}
function Oa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var n0 = new Set(
  'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
    ' '
  )
);
function Sc(e, t, n) {
  var a = t.indexOf('--') === 0;
  n == null || typeof n == 'boolean' || n === ''
    ? a
      ? e.setProperty(t, '')
      : t === 'float'
        ? (e.cssFloat = '')
        : (e[t] = '')
    : a
      ? e.setProperty(t, n)
      : typeof n != 'number' || n === 0 || n0.has(t)
        ? t === 'float'
          ? (e.cssFloat = n)
          : (e[t] = ('' + n).trim())
        : (e[t] = n + 'px');
}
function nh(e, t, n) {
  if (t != null && typeof t != 'object') throw Error(O(62));
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
      (a = t[l]), t.hasOwnProperty(l) && n[l] !== a && Sc(e, l, a);
  } else for (var i in t) t.hasOwnProperty(i) && Sc(e, i, t[i]);
}
function lo(e) {
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
var a0 = new Map([
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
  l0 =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Ai(e) {
  return l0.test('' + e)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : e;
}
var eu = null;
function io(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sa = null,
  va = null;
function Ec(e) {
  var t = _a(e);
  if (t && (e = t.stateNode)) {
    var n = e[_e] || null;
    e: switch (((e = t.stateNode), t.type)) {
      case 'input':
        if (
          (Pr(
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
              'input[name="' + Pe('' + t) + '"][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var a = n[t];
            if (a !== e && a.form === e.form) {
              var l = a[_e] || null;
              if (!l) throw Error(O(90));
              Pr(
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
          for (t = 0; t < n.length; t++) (a = n[t]), a.form === e.form && Pd(a);
        }
        break e;
      case 'textarea':
        eh(e, n.value, n.defaultValue);
        break e;
      case 'select':
        (t = n.value), t != null && ya(e, !!n.multiple, t, !1);
    }
  }
}
var sr = !1;
function ah(e, t, n) {
  if (sr) return e(t, n);
  sr = !0;
  try {
    var a = e(t);
    return a;
  } finally {
    if (
      ((sr = !1),
      (sa !== null || va !== null) &&
        (ks(), sa && ((t = sa), (e = va), (va = sa = null), Ec(t), e)))
    )
      for (t = 0; t < e.length; t++) Ec(e[t]);
  }
}
function Al(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = n[_e] || null;
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
  if (n && typeof n != 'function') throw Error(O(231, t, typeof n));
  return n;
}
var tu = !1;
if (qt)
  try {
    var Ka = {};
    Object.defineProperty(Ka, 'passive', {
      get: function () {
        tu = !0;
      },
    }),
      window.addEventListener('test', Ka, Ka),
      window.removeEventListener('test', Ka, Ka);
  } catch {
    tu = !1;
  }
var nn = null,
  so = null,
  Ci = null;
function lh() {
  if (Ci) return Ci;
  var e,
    t = so,
    n = t.length,
    a,
    l = 'value' in nn ? nn.value : nn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (a = 1; a <= s && t[n - a] === l[i - a]; a++);
  return (Ci = l.slice(e, 1 < a ? 1 - a : void 0));
}
function Di(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mi() {
  return !0;
}
function wc() {
  return !1;
}
function He(e) {
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
        ? mi
        : wc),
      (this.isPropagationStopped = wc),
      this
    );
  }
  return (
    I(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = mi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = mi));
      },
      persist: function () {},
      isPersistent: mi,
    }),
    t
  );
}
var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ds = He(Xn),
  Jl = I({}, Xn, { view: 0, detail: 0 }),
  i0 = He(Jl),
  rr,
  ur,
  Za,
  zs = I({}, Jl, {
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
    getModifierState: ro,
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
        : (e !== Za &&
            (Za && e.type === 'mousemove'
              ? ((rr = e.screenX - Za.screenX), (ur = e.screenY - Za.screenY))
              : (ur = rr = 0),
            (Za = e)),
          rr);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ur;
    },
  }),
  Nc = He(zs),
  s0 = I({}, zs, { dataTransfer: 0 }),
  r0 = He(s0),
  u0 = I({}, Jl, { relatedTarget: 0 }),
  or = He(u0),
  o0 = I({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c0 = He(o0),
  f0 = I({}, Xn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  d0 = He(f0),
  h0 = I({}, Xn, { data: 0 }),
  jc = He(h0),
  m0 = {
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
  g0 = {
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
  p0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function y0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = p0[e]) ? !!t[e] : !1;
}
function ro() {
  return y0;
}
var v0 = I({}, Jl, {
    key: function (e) {
      if (e.key) {
        var t = m0[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Di(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? g0[e.keyCode] || 'Unidentified'
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
    getModifierState: ro,
    charCode: function (e) {
      return e.type === 'keypress' ? Di(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Di(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  b0 = He(v0),
  x0 = I({}, zs, {
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
  Oc = He(x0),
  S0 = I({}, Jl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ro,
  }),
  E0 = He(S0),
  w0 = I({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  N0 = He(w0),
  j0 = I({}, zs, {
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
  O0 = He(j0),
  T0 = I({}, Xn, { newState: 0, oldState: 0 }),
  R0 = He(T0),
  A0 = [9, 13, 27, 32],
  uo = qt && 'CompositionEvent' in window,
  fl = null;
qt && 'documentMode' in document && (fl = document.documentMode);
var C0 = qt && 'TextEvent' in window && !fl,
  ih = qt && (!uo || (fl && 8 < fl && 11 >= fl)),
  Tc = ' ',
  Rc = !1;
function sh(e, t) {
  switch (e) {
    case 'keyup':
      return A0.indexOf(t.keyCode) !== -1;
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
function rh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ra = !1;
function D0(e, t) {
  switch (e) {
    case 'compositionend':
      return rh(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Rc = !0), Tc);
    case 'textInput':
      return (e = t.data), e === Tc && Rc ? null : e;
    default:
      return null;
  }
}
function z0(e, t) {
  if (ra)
    return e === 'compositionend' || (!uo && sh(e, t))
      ? ((e = lh()), (Ci = so = nn = null), (ra = !1), e)
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
      return ih && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var U0 = {
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
function Ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!U0[e.type] : t === 'textarea';
}
function uh(e, t, n, a) {
  sa ? (va ? va.push(a) : (va = [a])) : (sa = a),
    (t = hs(t, 'onChange')),
    0 < t.length &&
      ((n = new Ds('onChange', 'change', null, n, a)),
      e.push({ event: n, listeners: t }));
}
var dl = null,
  Cl = null;
function L0(e) {
  Zm(e, 0);
}
function Us(e) {
  var t = ul(e);
  if (Pd(t)) return e;
}
function Cc(e, t) {
  if (e === 'change') return t;
}
var oh = !1;
if (qt) {
  var cr;
  if (qt) {
    var fr = 'oninput' in document;
    if (!fr) {
      var Dc = document.createElement('div');
      Dc.setAttribute('oninput', 'return;'),
        (fr = typeof Dc.oninput == 'function');
    }
    cr = fr;
  } else cr = !1;
  oh = cr && (!document.documentMode || 9 < document.documentMode);
}
function zc() {
  dl && (dl.detachEvent('onpropertychange', ch), (Cl = dl = null));
}
function ch(e) {
  if (e.propertyName === 'value' && Us(Cl)) {
    var t = [];
    uh(t, Cl, e, io(e)), ah(L0, t);
  }
}
function M0(e, t, n) {
  e === 'focusin'
    ? (zc(), (dl = t), (Cl = n), dl.attachEvent('onpropertychange', ch))
    : e === 'focusout' && zc();
}
function _0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Us(Cl);
}
function H0(e, t) {
  if (e === 'click') return Us(t);
}
function B0(e, t) {
  if (e === 'input' || e === 'change') return Us(t);
}
function q0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == 'function' ? Object.is : q0;
function Dl(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var l = n[a];
    if (!Fr.call(t, l) || !Xe(e[l], t[l])) return !1;
  }
  return !0;
}
function Uc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lc(e, t) {
  var n = Uc(e);
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
    n = Uc(n);
  }
}
function fh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? fh(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function dh(e) {
  e =
    e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
      ? e.ownerDocument.defaultView
      : window;
  for (var t = Wi(e.document); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wi(e.document);
  }
  return t;
}
function oo(e) {
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
function k0(e, t) {
  var n = dh(t);
  t = e.focusedElem;
  var a = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    fh(t.ownerDocument.documentElement, t)
  ) {
    if (a !== null && oo(t)) {
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
          (l = Lc(t, i));
        var s = Lc(t, a);
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
var Y0 = qt && 'documentMode' in document && 11 >= document.documentMode,
  ua = null,
  nu = null,
  hl = null,
  au = !1;
function Mc(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  au ||
    ua == null ||
    ua !== Wi(a) ||
    ((a = ua),
    'selectionStart' in a && oo(a)
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
    (hl && Dl(hl, a)) ||
      ((hl = a),
      (a = hs(nu, 'onSelect')),
      0 < a.length &&
        ((t = new Ds('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: a }),
        (t.target = ua))));
}
function En(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var oa = {
    animationend: En('Animation', 'AnimationEnd'),
    animationiteration: En('Animation', 'AnimationIteration'),
    animationstart: En('Animation', 'AnimationStart'),
    transitionrun: En('Transition', 'TransitionRun'),
    transitionstart: En('Transition', 'TransitionStart'),
    transitioncancel: En('Transition', 'TransitionCancel'),
    transitionend: En('Transition', 'TransitionEnd'),
  },
  dr = {},
  hh = {};
qt &&
  ((hh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete oa.animationend.animation,
    delete oa.animationiteration.animation,
    delete oa.animationstart.animation),
  'TransitionEvent' in window || delete oa.transitionend.transition);
function Qn(e) {
  if (dr[e]) return dr[e];
  if (!oa[e]) return e;
  var t = oa[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hh) return (dr[e] = t[n]);
  return e;
}
var mh = Qn('animationend'),
  gh = Qn('animationiteration'),
  ph = Qn('animationstart'),
  V0 = Qn('transitionrun'),
  $0 = Qn('transitionstart'),
  G0 = Qn('transitioncancel'),
  yh = Qn('transitionend'),
  vh = new Map(),
  _c =
    'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
      ' '
    );
function ot(e, t) {
  vh.set(e, t), Gn(t, [e]);
}
var Ze = [],
  ca = 0,
  co = 0;
function Ls() {
  for (var e = ca, t = (co = ca = 0); t < e; ) {
    var n = Ze[t];
    Ze[t++] = null;
    var a = Ze[t];
    Ze[t++] = null;
    var l = Ze[t];
    Ze[t++] = null;
    var i = Ze[t];
    if (((Ze[t++] = null), a !== null && l !== null)) {
      var s = a.pending;
      s === null ? (l.next = l) : ((l.next = s.next), (s.next = l)),
        (a.pending = l);
    }
    i !== 0 && bh(n, l, i);
  }
}
function Ms(e, t, n, a) {
  (Ze[ca++] = e),
    (Ze[ca++] = t),
    (Ze[ca++] = n),
    (Ze[ca++] = a),
    (co |= a),
    (e.lanes |= a),
    (e = e.alternate),
    e !== null && (e.lanes |= a);
}
function fo(e, t, n, a) {
  return Ms(e, t, n, a), Pi(e);
}
function dn(e, t) {
  return Ms(e, null, null, t), Pi(e);
}
function bh(e, t, n) {
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
    (l = 31 - Ve(n)),
    (i = i.hiddenUpdates),
    (e = i[l]),
    e === null ? (i[l] = [t]) : e.push(t),
    (t.lane = n | 536870912));
}
function Pi(e) {
  if (50 < jl) throw ((jl = 0), (ju = null), Error(O(185)));
  for (var t = e.return; t !== null; ) (e = t), (t = e.return);
  return e.tag === 3 ? e.stateNode : null;
}
var fa = {},
  Hc = new WeakMap();
function Ie(e, t) {
  if (typeof e == 'object' && e !== null) {
    var n = Hc.get(e);
    return n !== void 0
      ? n
      : ((t = { value: e, source: t, stack: pc(t) }), Hc.set(e, t), t);
  }
  return { value: e, source: t, stack: pc(t) };
}
var da = [],
  ha = 0,
  Ii = null,
  es = 0,
  Fe = [],
  We = 0,
  zn = null,
  Ut = 1,
  Lt = '';
function jn(e, t) {
  (da[ha++] = es), (da[ha++] = Ii), (Ii = e), (es = t);
}
function xh(e, t, n) {
  (Fe[We++] = Ut), (Fe[We++] = Lt), (Fe[We++] = zn), (zn = e);
  var a = Ut;
  e = Lt;
  var l = 32 - Ve(a) - 1;
  (a &= ~(1 << l)), (n += 1);
  var i = 32 - Ve(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    (i = (a & ((1 << s) - 1)).toString(32)),
      (a >>= s),
      (l -= s),
      (Ut = (1 << (32 - Ve(t) + l)) | (n << l) | a),
      (Lt = i + e);
  } else (Ut = (1 << i) | (n << l) | a), (Lt = e);
}
function ho(e) {
  e.return !== null && (jn(e, 1), xh(e, 1, 0));
}
function mo(e) {
  for (; e === Ii; )
    (Ii = da[--ha]), (da[ha] = null), (es = da[--ha]), (da[ha] = null);
  for (; e === zn; )
    (zn = Fe[--We]),
      (Fe[We] = null),
      (Lt = Fe[--We]),
      (Fe[We] = null),
      (Ut = Fe[--We]),
      (Fe[We] = null);
}
var Re = null,
  Ee = null,
  G = !1,
  st = null,
  ht = !1,
  lu = Error(O(519));
function Bn(e) {
  var t = Error(O(418, ''));
  throw (zl(Ie(t, e)), lu);
}
function Bc(e) {
  var t = e.stateNode,
    n = e.type,
    a = e.memoizedProps;
  switch (((t[je] = e), (t[_e] = a), n)) {
    case 'dialog':
      V('cancel', t), V('close', t);
      break;
    case 'iframe':
    case 'object':
    case 'embed':
      V('load', t);
      break;
    case 'video':
    case 'audio':
      for (n = 0; n < Ml.length; n++) V(Ml[n], t);
      break;
    case 'source':
      V('error', t);
      break;
    case 'img':
    case 'image':
    case 'link':
      V('error', t), V('load', t);
      break;
    case 'details':
      V('toggle', t);
      break;
    case 'input':
      V('invalid', t),
        Id(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ),
        Fi(t);
      break;
    case 'select':
      V('invalid', t);
      break;
    case 'textarea':
      V('invalid', t), th(t, a.value, a.defaultValue, a.children), Fi(t);
  }
  (n = a.children),
    (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
    t.textContent === '' + n ||
    a.suppressHydrationWarning === !0 ||
    Fm(t.textContent, n)
      ? (a.popover != null && (V('beforetoggle', t), V('toggle', t)),
        a.onScroll != null && V('scroll', t),
        a.onScrollEnd != null && V('scrollend', t),
        a.onClick != null && (t.onclick = Vs),
        (t = !0))
      : (t = !1),
    t || Bn(e);
}
function qc(e) {
  for (Re = e.return; Re; )
    switch (Re.tag) {
      case 3:
      case 27:
        ht = !0;
        return;
      case 5:
      case 13:
        ht = !1;
        return;
      default:
        Re = Re.return;
    }
}
function Ja(e) {
  if (e !== Re) return !1;
  if (!G) return qc(e), (G = !0), !1;
  var t = !1,
    n;
  if (
    ((n = e.tag !== 3 && e.tag !== 27) &&
      ((n = e.tag === 5) &&
        ((n = e.type),
        (n = !(n !== 'form' && n !== 'button') || zu(e.type, e.memoizedProps))),
      (n = !n)),
    n && (t = !0),
    t && Ee && Bn(e),
    qc(e),
    e.tag === 13)
  ) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8)
          if (((n = e.data), n === '/$')) {
            if (t === 0) {
              Ee = rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Re ? rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Fl() {
  (Ee = Re = null), (G = !1);
}
function zl(e) {
  st === null ? (st = [e]) : st.push(e);
}
var ml = Error(O(460)),
  Sh = Error(O(474)),
  iu = { then: function () {} };
function kc(e) {
  return (e = e.status), e === 'fulfilled' || e === 'rejected';
}
function gi() {}
function Eh(e, t, n) {
  switch (
    ((n = e[n]),
    n === void 0 ? e.push(t) : n !== t && (t.then(gi, gi), (t = n)),
    t.status)
  ) {
    case 'fulfilled':
      return t.value;
    case 'rejected':
      throw ((e = t.reason), e === ml ? Error(O(483)) : e);
    default:
      if (typeof t.status == 'string') t.then(gi, gi);
      else {
        if (((e = W), e !== null && 100 < e.shellSuspendCounter))
          throw Error(O(482));
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
          throw ((e = t.reason), e === ml ? Error(O(483)) : e);
      }
      throw ((gl = t), ml);
  }
}
var gl = null;
function Yc() {
  if (gl === null) throw Error(O(459));
  var e = gl;
  return (gl = null), e;
}
var ba = null,
  Ul = 0;
function pi(e) {
  var t = Ul;
  return (Ul += 1), ba === null && (ba = []), Eh(ba, e, t);
}
function Fa(e, t) {
  (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
}
function yi(e, t) {
  throw t.$$typeof === Dp
    ? Error(O(525))
    : ((e = Object.prototype.toString.call(t)),
      Error(
        O(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ));
}
function Vc(e) {
  var t = e._init;
  return t(e._payload);
}
function wh(e) {
  function t(m, g) {
    if (e) {
      var b = m.deletions;
      b === null ? ((m.deletions = [g]), (m.flags |= 16)) : b.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), (g = g.sibling);
    return null;
  }
  function a(m) {
    for (var g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function l(m, g) {
    return (m = rn(m, g)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, g, b) {
    return (
      (m.index = b),
      e
        ? ((b = m.alternate),
          b !== null
            ? ((b = b.index), b < g ? ((m.flags |= 33554434), g) : b)
            : ((m.flags |= 33554434), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 33554434), m;
  }
  function r(m, g, b, S) {
    return g === null || g.tag !== 6
      ? ((g = Nr(b, m.mode, S)), (g.return = m), g)
      : ((g = l(g, b)), (g.return = m), g);
  }
  function u(m, g, b, S) {
    var w = b.type;
    return w === la
      ? c(m, g, b.props.children, S, b.key)
      : g !== null &&
          (g.elementType === w ||
            (typeof w == 'object' &&
              w !== null &&
              w.$$typeof === Jt &&
              Vc(w) === g.type))
        ? ((g = l(g, b.props)), Fa(g, b), (g.return = m), g)
        : ((g = _i(b.type, b.key, b.props, null, m.mode, S)),
          Fa(g, b),
          (g.return = m),
          g);
  }
  function o(m, g, b, S) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== b.containerInfo ||
      g.stateNode.implementation !== b.implementation
      ? ((g = jr(b, m.mode, S)), (g.return = m), g)
      : ((g = l(g, b.children || [])), (g.return = m), g);
  }
  function c(m, g, b, S, w) {
    return g === null || g.tag !== 7
      ? ((g = Ln(b, m.mode, S, w)), (g.return = m), g)
      : ((g = l(g, b)), (g.return = m), g);
  }
  function h(m, g, b) {
    if (
      (typeof g == 'string' && g !== '') ||
      typeof g == 'number' ||
      typeof g == 'bigint'
    )
      return (g = Nr('' + g, m.mode, b)), (g.return = m), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case ci:
          return (
            (b = _i(g.type, g.key, g.props, null, m.mode, b)),
            Fa(b, g),
            (b.return = m),
            b
          );
        case il:
          return (g = jr(g, m.mode, b)), (g.return = m), g;
        case Jt:
          var S = g._init;
          return (g = S(g._payload)), h(m, g, b);
      }
      if (rl(g) || Qa(g))
        return (g = Ln(g, m.mode, b, null)), (g.return = m), g;
      if (typeof g.then == 'function') return h(m, pi(g), b);
      if (g.$$typeof === zt) return h(m, vi(m, g), b);
      yi(m, g);
    }
    return null;
  }
  function f(m, g, b, S) {
    var w = g !== null ? g.key : null;
    if (
      (typeof b == 'string' && b !== '') ||
      typeof b == 'number' ||
      typeof b == 'bigint'
    )
      return w !== null ? null : r(m, g, '' + b, S);
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case ci:
          return b.key === w ? u(m, g, b, S) : null;
        case il:
          return b.key === w ? o(m, g, b, S) : null;
        case Jt:
          return (w = b._init), (b = w(b._payload)), f(m, g, b, S);
      }
      if (rl(b) || Qa(b)) return w !== null ? null : c(m, g, b, S, null);
      if (typeof b.then == 'function') return f(m, g, pi(b), S);
      if (b.$$typeof === zt) return f(m, g, vi(m, b), S);
      yi(m, b);
    }
    return null;
  }
  function p(m, g, b, S, w) {
    if (
      (typeof S == 'string' && S !== '') ||
      typeof S == 'number' ||
      typeof S == 'bigint'
    )
      return (m = m.get(b) || null), r(g, m, '' + S, w);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case ci:
          return (m = m.get(S.key === null ? b : S.key) || null), u(g, m, S, w);
        case il:
          return (m = m.get(S.key === null ? b : S.key) || null), o(g, m, S, w);
        case Jt:
          var j = S._init;
          return (S = j(S._payload)), p(m, g, b, S, w);
      }
      if (rl(S) || Qa(S)) return (m = m.get(b) || null), c(g, m, S, w, null);
      if (typeof S.then == 'function') return p(m, g, b, pi(S), w);
      if (S.$$typeof === zt) return p(m, g, b, vi(g, S), w);
      yi(g, S);
    }
    return null;
  }
  function y(m, g, b, S) {
    for (
      var w = null, j = null, T = g, R = (g = 0), D = null;
      T !== null && R < b.length;
      R++
    ) {
      T.index > R ? ((D = T), (T = null)) : (D = T.sibling);
      var C = f(m, T, b[R], S);
      if (C === null) {
        T === null && (T = D);
        break;
      }
      e && T && C.alternate === null && t(m, T),
        (g = i(C, g, R)),
        j === null ? (w = C) : (j.sibling = C),
        (j = C),
        (T = D);
    }
    if (R === b.length) return n(m, T), G && jn(m, R), w;
    if (T === null) {
      for (; R < b.length; R++)
        (T = h(m, b[R], S)),
          T !== null &&
            ((g = i(T, g, R)), j === null ? (w = T) : (j.sibling = T), (j = T));
      return G && jn(m, R), w;
    }
    for (T = a(T); R < b.length; R++)
      (D = p(T, m, R, b[R], S)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? R : D.key),
          (g = i(D, g, R)),
          j === null ? (w = D) : (j.sibling = D),
          (j = D));
    return (
      e &&
        T.forEach(function (L) {
          return t(m, L);
        }),
      G && jn(m, R),
      w
    );
  }
  function x(m, g, b, S) {
    if (b == null) throw Error(O(151));
    for (
      var w = null, j = null, T = g, R = (g = 0), D = null, C = b.next();
      T !== null && !C.done;
      R++, C = b.next()
    ) {
      T.index > R ? ((D = T), (T = null)) : (D = T.sibling);
      var L = f(m, T, C.value, S);
      if (L === null) {
        T === null && (T = D);
        break;
      }
      e && T && L.alternate === null && t(m, T),
        (g = i(L, g, R)),
        j === null ? (w = L) : (j.sibling = L),
        (j = L),
        (T = D);
    }
    if (C.done) return n(m, T), G && jn(m, R), w;
    if (T === null) {
      for (; !C.done; R++, C = b.next())
        (C = h(m, C.value, S)),
          C !== null &&
            ((g = i(C, g, R)), j === null ? (w = C) : (j.sibling = C), (j = C));
      return G && jn(m, R), w;
    }
    for (T = a(T); !C.done; R++, C = b.next())
      (C = p(T, m, R, C.value, S)),
        C !== null &&
          (e && C.alternate !== null && T.delete(C.key === null ? R : C.key),
          (g = i(C, g, R)),
          j === null ? (w = C) : (j.sibling = C),
          (j = C));
    return (
      e &&
        T.forEach(function (_) {
          return t(m, _);
        }),
      G && jn(m, R),
      w
    );
  }
  function v(m, g, b, S) {
    if (
      (typeof b == 'object' &&
        b !== null &&
        b.type === la &&
        b.key === null &&
        (b = b.props.children),
      typeof b == 'object' && b !== null)
    ) {
      switch (b.$$typeof) {
        case ci:
          e: {
            for (var w = b.key; g !== null; ) {
              if (g.key === w) {
                if (((w = b.type), w === la)) {
                  if (g.tag === 7) {
                    n(m, g.sibling),
                      (S = l(g, b.props.children)),
                      (S.return = m),
                      (m = S);
                    break e;
                  }
                } else if (
                  g.elementType === w ||
                  (typeof w == 'object' &&
                    w !== null &&
                    w.$$typeof === Jt &&
                    Vc(w) === g.type)
                ) {
                  n(m, g.sibling),
                    (S = l(g, b.props)),
                    Fa(S, b),
                    (S.return = m),
                    (m = S);
                  break e;
                }
                n(m, g);
                break;
              } else t(m, g);
              g = g.sibling;
            }
            b.type === la
              ? ((S = Ln(b.props.children, m.mode, S, b.key)),
                (S.return = m),
                (m = S))
              : ((S = _i(b.type, b.key, b.props, null, m.mode, S)),
                Fa(S, b),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case il:
          e: {
            for (w = b.key; g !== null; ) {
              if (g.key === w)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === b.containerInfo &&
                  g.stateNode.implementation === b.implementation
                ) {
                  n(m, g.sibling),
                    (S = l(g, b.children || [])),
                    (S.return = m),
                    (m = S);
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            (S = jr(b, m.mode, S)), (S.return = m), (m = S);
          }
          return s(m);
        case Jt:
          return (w = b._init), (b = w(b._payload)), v(m, g, b, S);
      }
      if (rl(b)) return y(m, g, b, S);
      if (Qa(b)) {
        if (((w = Qa(b)), typeof w != 'function')) throw Error(O(150));
        return (b = w.call(b)), x(m, g, b, S);
      }
      if (typeof b.then == 'function') return v(m, g, pi(b), S);
      if (b.$$typeof === zt) return v(m, g, vi(m, b), S);
      yi(m, b);
    }
    return (typeof b == 'string' && b !== '') ||
      typeof b == 'number' ||
      typeof b == 'bigint'
      ? ((b = '' + b),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (S = l(g, b)), (S.return = m), (m = S))
          : (n(m, g), (S = Nr(b, m.mode, S)), (S.return = m), (m = S)),
        s(m))
      : n(m, g);
  }
  return function (m, g, b, S) {
    try {
      Ul = 0;
      var w = v(m, g, b, S);
      return (ba = null), w;
    } catch (T) {
      if (T === ml) throw T;
      var j = et(29, T, null, m.mode);
      return (j.lanes = S), (j.return = m), j;
    } finally {
    }
  };
}
var qn = wh(!0),
  Nh = wh(!1),
  Ta = xt(null),
  ts = xt(0);
function $c(e, t) {
  (e = Vt), te(ts, e), te(Ta, t), (Vt = e | t.baseLanes);
}
function su() {
  te(ts, Vt), te(Ta, Ta.current);
}
function go() {
  (Vt = ts.current), be(Ta), be(ts);
}
var at = xt(null),
  vt = null;
function Wt(e) {
  var t = e.alternate;
  te(me, me.current & 1),
    te(at, e),
    vt === null &&
      (t === null || Ta.current !== null || t.memoizedState !== null) &&
      (vt = e);
}
function jh(e) {
  if (e.tag === 22) {
    if ((te(me, me.current), te(at, e), vt === null)) {
      var t = e.alternate;
      t !== null && t.memoizedState !== null && (vt = e);
    }
  } else Pt();
}
function Pt() {
  te(me, me.current), te(at, at.current);
}
function Mt(e) {
  be(at), vt === e && (vt = null), be(me);
}
var me = xt(0);
function ns(e) {
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
var X0 =
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
  Q0 = ge.unstable_scheduleCallback,
  K0 = ge.unstable_NormalPriority,
  he = {
    $$typeof: zt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function po() {
  return { controller: new X0(), data: new Map(), refCount: 0 };
}
function Wl(e) {
  e.refCount--,
    e.refCount === 0 &&
      Q0(K0, function () {
        e.controller.abort();
      });
}
var pl = null,
  ru = 0,
  Ra = 0,
  xa = null;
function Z0(e, t) {
  if (pl === null) {
    var n = (pl = []);
    (ru = 0),
      (Ra = qo()),
      (xa = {
        status: 'pending',
        value: void 0,
        then: function (a) {
          n.push(a);
        },
      });
  }
  return ru++, t.then(Gc, Gc), t;
}
function Gc() {
  if (--ru === 0 && pl !== null) {
    xa !== null && (xa.status = 'fulfilled');
    var e = pl;
    (pl = null), (Ra = 0), (xa = null);
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
}
function J0(e, t) {
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
var Xc = B.S;
B.S = function (e, t) {
  typeof t == 'object' && t !== null && typeof t.then == 'function' && Z0(e, t),
    Xc !== null && Xc(e, t);
};
var Un = xt(null);
function yo() {
  var e = Un.current;
  return e !== null ? e : W.pooledCache;
}
function zi(e, t) {
  t === null ? te(Un, Un.current) : te(Un, t.pool);
}
function Oh() {
  var e = yo();
  return e === null ? null : { parent: he._currentValue, pool: e };
}
var hn = 0,
  k = null,
  K = null,
  fe = null,
  as = !1,
  Sa = !1,
  kn = !1,
  ls = 0,
  Ll = 0,
  Ea = null,
  F0 = 0;
function ue() {
  throw Error(O(321));
}
function vo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function bo(e, t, n, a, l, i) {
  return (
    (hn = i),
    (k = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (B.H = e === null || e.memoizedState === null ? Kn : vn),
    (kn = !1),
    (i = n(a, l)),
    (kn = !1),
    Sa && (i = Rh(t, n, a, l)),
    Th(e),
    i
  );
}
function Th(e) {
  B.H = bt;
  var t = K !== null && K.next !== null;
  if (((hn = 0), (fe = K = k = null), (as = !1), (Ll = 0), (Ea = null), t))
    throw Error(O(300));
  e === null || ve || ((e = e.dependencies), e !== null && rs(e) && (ve = !0));
}
function Rh(e, t, n, a) {
  k = e;
  var l = 0;
  do {
    if ((Sa && (Ea = null), (Ll = 0), (Sa = !1), 25 <= l)) throw Error(O(301));
    if (((l += 1), (fe = K = null), e.updateQueue != null)) {
      var i = e.updateQueue;
      (i.lastEffect = null),
        (i.events = null),
        (i.stores = null),
        i.memoCache != null && (i.memoCache.index = 0);
    }
    (B.H = Zn), (i = t(n, a));
  } while (Sa);
  return i;
}
function W0() {
  var e = B.H,
    t = e.useState()[0];
  return (
    (t = typeof t.then == 'function' ? Pl(t) : t),
    (e = e.useState()[0]),
    (K !== null ? K.memoizedState : null) !== e && (k.flags |= 1024),
    t
  );
}
function xo() {
  var e = ls !== 0;
  return (ls = 0), e;
}
function So(e, t, n) {
  (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function Eo(e) {
  if (as) {
    for (e = e.memoizedState; e !== null; ) {
      var t = e.queue;
      t !== null && (t.pending = null), (e = e.next);
    }
    as = !1;
  }
  (hn = 0), (fe = K = k = null), (Sa = !1), (Ll = ls = 0), (Ea = null);
}
function Le() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (k.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function de() {
  if (K === null) {
    var e = k.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = fe === null ? k.memoizedState : fe.next;
  if (t !== null) (fe = t), (K = e);
  else {
    if (e === null) throw k.alternate === null ? Error(O(467)) : Error(O(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      fe === null ? (k.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
var _s;
_s = function () {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
};
function Pl(e) {
  var t = Ll;
  return (
    (Ll += 1),
    Ea === null && (Ea = []),
    (e = Eh(Ea, e, t)),
    (t = k),
    (fe === null ? t.memoizedState : fe.next) === null &&
      ((t = t.alternate),
      (B.H = t === null || t.memoizedState === null ? Kn : vn)),
    e
  );
}
function Hs(e) {
  if (e !== null && typeof e == 'object') {
    if (typeof e.then == 'function') return Pl(e);
    if (e.$$typeof === zt) return Oe(e);
  }
  throw Error(O(438, String(e)));
}
function wo(e) {
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
    n === null && ((n = _s()), (k.updateQueue = n)),
    (n.memoCache = t),
    (n = t.data[t.index]),
    n === void 0)
  )
    for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = Up;
  return t.index++, n;
}
function kt(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ui(e) {
  var t = de();
  return No(t, K, e);
}
function No(e, t, n) {
  var a = e.queue;
  if (a === null) throw Error(O(311));
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
      if (h !== o.lane ? ($ & h) === h : (hn & h) === h) {
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
            h === Ra && (c = !0);
        else if ((hn & f) === f) {
          (o = o.next), f === Ra && (c = !0);
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
            (gn |= f);
        (h = o.action),
          kn && n(i, h),
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
          (gn |= h);
      o = o.next;
    } while (o !== null && o !== t);
    if (
      (u === null ? (s = i) : (u.next = r),
      !Xe(i, e.memoizedState) && ((ve = !0), c && ((n = xa), n !== null)))
    )
      throw n;
    (e.memoizedState = i),
      (e.baseState = s),
      (e.baseQueue = u),
      (a.lastRenderedState = i);
  }
  return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
}
function hr(e) {
  var t = de(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== l);
    Xe(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, a];
}
function Ah(e, t, n) {
  var a = k,
    l = de(),
    i = G;
  if (i) {
    if (n === void 0) throw Error(O(407));
    n = n();
  } else n = t();
  var s = !Xe((K || l).memoizedState, n);
  if (
    (s && ((l.memoizedState = n), (ve = !0)),
    (l = l.queue),
    jo(zh.bind(null, a, l, e), [e]),
    l.getSnapshot !== t || s || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((a.flags |= 2048),
      Aa(9, Dh.bind(null, a, l, n, t), { destroy: void 0 }, null),
      W === null)
    )
      throw Error(O(349));
    i || hn & 60 || Ch(a, t, n);
  }
  return n;
}
function Ch(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = k.updateQueue),
    t === null
      ? ((t = _s()), (k.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dh(e, t, n, a) {
  (t.value = n), (t.getSnapshot = a), Uh(t) && Lh(e);
}
function zh(e, t, n) {
  return n(function () {
    Uh(t) && Lh(e);
  });
}
function Uh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function Lh(e) {
  var t = dn(e, 2);
  t !== null && Ce(t, e, 2);
}
function uu(e) {
  var t = Le();
  if (typeof e == 'function') {
    var n = e;
    if (((e = n()), kn)) {
      tn(!0);
      try {
        n();
      } finally {
        tn(!1);
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
function Mh(e, t, n, a) {
  return (e.baseState = n), No(e, K, typeof a == 'function' ? a : kt);
}
function P0(e, t, n, a, l) {
  if (qs(e)) throw Error(O(485));
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
    B.T !== null ? n(!0) : (i.isTransition = !1),
      a(i),
      (n = t.pending),
      n === null
        ? ((i.next = t.pending = i), _h(t, i))
        : ((i.next = n.next), (t.pending = n.next = i));
  }
}
function _h(e, t) {
  var n = t.action,
    a = t.payload,
    l = e.state;
  if (t.isTransition) {
    var i = B.T,
      s = {};
    B.T = s;
    try {
      var r = n(l, a),
        u = B.S;
      u !== null && u(s, r), Qc(e, t, r);
    } catch (o) {
      ou(e, t, o);
    } finally {
      B.T = i;
    }
  } else
    try {
      (i = n(l, a)), Qc(e, t, i);
    } catch (o) {
      ou(e, t, o);
    }
}
function Qc(e, t, n) {
  n !== null && typeof n == 'object' && typeof n.then == 'function'
    ? n.then(
        function (a) {
          Kc(e, t, a);
        },
        function (a) {
          return ou(e, t, a);
        }
      )
    : Kc(e, t, n);
}
function Kc(e, t, n) {
  (t.status = 'fulfilled'),
    (t.value = n),
    Hh(t),
    (e.state = n),
    (t = e.pending),
    t !== null &&
      ((n = t.next),
      n === t ? (e.pending = null) : ((n = n.next), (t.next = n), _h(e, n)));
}
function ou(e, t, n) {
  var a = e.pending;
  if (((e.pending = null), a !== null)) {
    a = a.next;
    do (t.status = 'rejected'), (t.reason = n), Hh(t), (t = t.next);
    while (t !== a);
  }
  e.action = null;
}
function Hh(e) {
  e = e.listeners;
  for (var t = 0; t < e.length; t++) (0, e[t])();
}
function Bh(e, t) {
  return t;
}
function qh(e, t) {
  if (G) {
    var n = W.formState;
    if (n !== null) {
      e: {
        var a = k;
        if (G) {
          if (Ee) {
            t: {
              for (var l = Ee, i = ht; l.nodeType !== 8; ) {
                if (!i) {
                  l = null;
                  break t;
                }
                if (((l = rt(l.nextSibling)), l === null)) {
                  l = null;
                  break t;
                }
              }
              (i = l.data), (l = i === 'F!' || i === 'F' ? l : null);
            }
            if (l) {
              (Ee = rt(l.nextSibling)), (a = l.data === 'F!');
              break e;
            }
          }
          Bn(a);
        }
        a = !1;
      }
      a && (t = n[0]);
    }
  }
  return (
    (n = Le()),
    (n.memoizedState = n.baseState = t),
    (a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bh,
      lastRenderedState: t,
    }),
    (n.queue = a),
    (n = nm.bind(null, k, a)),
    (a.dispatch = n),
    (a = uu(!1)),
    (i = Ao.bind(null, k, !1, a.queue)),
    (a = Le()),
    (l = { state: t, dispatch: null, action: e, pending: null }),
    (a.queue = l),
    (n = P0.bind(null, k, l, i, n)),
    (l.dispatch = n),
    (a.memoizedState = e),
    [t, n, !1]
  );
}
function kh(e) {
  var t = de();
  return Yh(t, K, e);
}
function Yh(e, t, n) {
  (t = No(e, t, Bh)[0]),
    (e = Ui(kt)[0]),
    (t =
      typeof t == 'object' && t !== null && typeof t.then == 'function'
        ? Pl(t)
        : t);
  var a = de(),
    l = a.queue,
    i = l.dispatch;
  return (
    n !== a.memoizedState &&
      ((k.flags |= 2048),
      Aa(9, I0.bind(null, l, n), { destroy: void 0 }, null)),
    [t, i, e]
  );
}
function I0(e, t) {
  e.action = t;
}
function Vh(e) {
  var t = de(),
    n = K;
  if (n !== null) return Yh(t, n, e);
  de(), (t = t.memoizedState), (n = de());
  var a = n.queue.dispatch;
  return (n.memoizedState = e), [t, a, !1];
}
function Aa(e, t, n, a) {
  return (
    (e = { tag: e, create: t, inst: n, deps: a, next: null }),
    (t = k.updateQueue),
    t === null && ((t = _s()), (k.updateQueue = t)),
    (n = t.lastEffect),
    n === null
      ? (t.lastEffect = e.next = e)
      : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
    e
  );
}
function $h() {
  return de().memoizedState;
}
function Li(e, t, n, a) {
  var l = Le();
  (k.flags |= e),
    (l.memoizedState = Aa(
      1 | t,
      n,
      { destroy: void 0 },
      a === void 0 ? null : a
    ));
}
function Bs(e, t, n, a) {
  var l = de();
  a = a === void 0 ? null : a;
  var i = l.memoizedState.inst;
  K !== null && a !== null && vo(a, K.memoizedState.deps)
    ? (l.memoizedState = Aa(t, n, i, a))
    : ((k.flags |= e), (l.memoizedState = Aa(1 | t, n, i, a)));
}
function Zc(e, t) {
  Li(8390656, 8, e, t);
}
function jo(e, t) {
  Bs(2048, 8, e, t);
}
function Gh(e, t) {
  return Bs(4, 2, e, t);
}
function Xh(e, t) {
  return Bs(4, 4, e, t);
}
function Qh(e, t) {
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
function Kh(e, t, n) {
  (n = n != null ? n.concat([e]) : null), Bs(4, 4, Qh.bind(null, t, e), n);
}
function Oo() {}
function Zh(e, t) {
  var n = de();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return t !== null && vo(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
}
function Jh(e, t) {
  var n = de();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  if (t !== null && vo(t, a[1])) return a[0];
  if (((a = e()), kn)) {
    tn(!0);
    try {
      e();
    } finally {
      tn(!1);
    }
  }
  return (n.memoizedState = [a, t]), a;
}
function To(e, t, n) {
  return n === void 0 || hn & 1073741824
    ? (e.memoizedState = t)
    : ((e.memoizedState = n), (e = Hm()), (k.lanes |= e), (gn |= e), n);
}
function Fh(e, t, n, a) {
  return Xe(n, t)
    ? n
    : Ta.current !== null
      ? ((e = To(e, n, a)), Xe(e, t) || (ve = !0), e)
      : hn & 42
        ? ((e = Hm()), (k.lanes |= e), (gn |= e), t)
        : ((ve = !0), (e.memoizedState = n));
}
function Wh(e, t, n, a, l) {
  var i = P.p;
  P.p = i !== 0 && 8 > i ? i : 8;
  var s = B.T,
    r = {};
  (B.T = r), Ao(e, !1, t, n);
  try {
    var u = l(),
      o = B.S;
    if (
      (o !== null && o(r, u),
      u !== null && typeof u == 'object' && typeof u.then == 'function')
    ) {
      var c = J0(u, a);
      yl(e, t, c, $e(e));
    } else yl(e, t, a, $e(e));
  } catch (h) {
    yl(e, t, { then: function () {}, status: 'rejected', reason: h }, $e());
  } finally {
    (P.p = i), (B.T = s);
  }
}
function ey() {}
function cu(e, t, n, a) {
  if (e.tag !== 5) throw Error(O(476));
  var l = Ph(e).queue;
  Wh(
    e,
    l,
    t,
    Dn,
    n === null
      ? ey
      : function () {
          return Ih(e), n(a);
        }
  );
}
function Ph(e) {
  var t = e.memoizedState;
  if (t !== null) return t;
  t = {
    memoizedState: Dn,
    baseState: Dn,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kt,
      lastRenderedState: Dn,
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
function Ih(e) {
  var t = Ph(e).next.queue;
  yl(e, t, {}, $e());
}
function Ro() {
  return Oe(Bl);
}
function em() {
  return de().memoizedState;
}
function tm() {
  return de().memoizedState;
}
function ty(e) {
  for (var t = e.return; t !== null; ) {
    switch (t.tag) {
      case 24:
      case 3:
        var n = $e();
        e = ln(n);
        var a = sn(t, e, n);
        a !== null && (Ce(a, t, n), bl(a, t, n)),
          (t = { cache: po() }),
          (e.payload = t);
        return;
    }
    t = t.return;
  }
}
function ny(e, t, n) {
  var a = $e();
  (n = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    qs(e)
      ? am(t, n)
      : ((n = fo(e, t, n, a)), n !== null && (Ce(n, e, a), lm(n, t, a)));
}
function nm(e, t, n) {
  var a = $e();
  yl(e, t, n, a);
}
function yl(e, t, n, a) {
  var l = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (qs(e)) am(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = r), Xe(r, s)))
          return Ms(e, t, l, 0), W === null && Ls(), !1;
      } catch {
      } finally {
      }
    if (((n = fo(e, t, l, a)), n !== null)) return Ce(n, e, a), lm(n, t, a), !0;
  }
  return !1;
}
function Ao(e, t, n, a) {
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
    if (t) throw Error(O(479));
  } else (t = fo(e, n, a, 2)), t !== null && Ce(t, e, 2);
}
function qs(e) {
  var t = e.alternate;
  return e === k || (t !== null && t === k);
}
function am(e, t) {
  Sa = as = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lm(e, t, n) {
  if (n & 4194176) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), Qd(e, n);
  }
}
var bt = {
  readContext: Oe,
  use: Hs,
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
bt.useCacheRefresh = ue;
bt.useMemoCache = ue;
bt.useHostTransitionStatus = ue;
bt.useFormState = ue;
bt.useActionState = ue;
bt.useOptimistic = ue;
var Kn = {
  readContext: Oe,
  use: Hs,
  useCallback: function (e, t) {
    return (Le().memoizedState = [e, t === void 0 ? null : t]), e;
  },
  useContext: Oe,
  useEffect: Zc,
  useImperativeHandle: function (e, t, n) {
    (n = n != null ? n.concat([e]) : null),
      Li(4194308, 4, Qh.bind(null, t, e), n);
  },
  useLayoutEffect: function (e, t) {
    return Li(4194308, 4, e, t);
  },
  useInsertionEffect: function (e, t) {
    Li(4, 2, e, t);
  },
  useMemo: function (e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var a = e();
    if (kn) {
      tn(!0);
      try {
        e();
      } finally {
        tn(!1);
      }
    }
    return (n.memoizedState = [a, t]), a;
  },
  useReducer: function (e, t, n) {
    var a = Le();
    if (n !== void 0) {
      var l = n(t);
      if (kn) {
        tn(!0);
        try {
          n(t);
        } finally {
          tn(!1);
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
      (e = e.dispatch = ny.bind(null, k, e)),
      [a.memoizedState, e]
    );
  },
  useRef: function (e) {
    var t = Le();
    return (e = { current: e }), (t.memoizedState = e);
  },
  useState: function (e) {
    e = uu(e);
    var t = e.queue,
      n = nm.bind(null, k, t);
    return (t.dispatch = n), [e.memoizedState, n];
  },
  useDebugValue: Oo,
  useDeferredValue: function (e, t) {
    var n = Le();
    return To(n, e, t);
  },
  useTransition: function () {
    var e = uu(!1);
    return (
      (e = Wh.bind(null, k, e.queue, !0, !1)), (Le().memoizedState = e), [!1, e]
    );
  },
  useSyncExternalStore: function (e, t, n) {
    var a = k,
      l = Le();
    if (G) {
      if (n === void 0) throw Error(O(407));
      n = n();
    } else {
      if (((n = t()), W === null)) throw Error(O(349));
      $ & 60 || Ch(a, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return (
      (l.queue = i),
      Zc(zh.bind(null, a, i, e), [e]),
      (a.flags |= 2048),
      Aa(9, Dh.bind(null, a, i, n, t), { destroy: void 0 }, null),
      n
    );
  },
  useId: function () {
    var e = Le(),
      t = W.identifierPrefix;
    if (G) {
      var n = Lt,
        a = Ut;
      (n = (a & ~(1 << (32 - Ve(a) - 1))).toString(32) + n),
        (t = ':' + t + 'R' + n),
        (n = ls++),
        0 < n && (t += 'H' + n.toString(32)),
        (t += ':');
    } else (n = F0++), (t = ':' + t + 'r' + n.toString(32) + ':');
    return (e.memoizedState = t);
  },
  useCacheRefresh: function () {
    return (Le().memoizedState = ty.bind(null, k));
  },
};
Kn.useMemoCache = wo;
Kn.useHostTransitionStatus = Ro;
Kn.useFormState = qh;
Kn.useActionState = qh;
Kn.useOptimistic = function (e) {
  var t = Le();
  t.memoizedState = t.baseState = e;
  var n = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: null,
    lastRenderedState: null,
  };
  return (t.queue = n), (t = Ao.bind(null, k, !0, n)), (n.dispatch = t), [e, t];
};
var vn = {
  readContext: Oe,
  use: Hs,
  useCallback: Zh,
  useContext: Oe,
  useEffect: jo,
  useImperativeHandle: Kh,
  useInsertionEffect: Gh,
  useLayoutEffect: Xh,
  useMemo: Jh,
  useReducer: Ui,
  useRef: $h,
  useState: function () {
    return Ui(kt);
  },
  useDebugValue: Oo,
  useDeferredValue: function (e, t) {
    var n = de();
    return Fh(n, K.memoizedState, e, t);
  },
  useTransition: function () {
    var e = Ui(kt)[0],
      t = de().memoizedState;
    return [typeof e == 'boolean' ? e : Pl(e), t];
  },
  useSyncExternalStore: Ah,
  useId: em,
};
vn.useCacheRefresh = tm;
vn.useMemoCache = wo;
vn.useHostTransitionStatus = Ro;
vn.useFormState = kh;
vn.useActionState = kh;
vn.useOptimistic = function (e, t) {
  var n = de();
  return Mh(n, K, e, t);
};
var Zn = {
  readContext: Oe,
  use: Hs,
  useCallback: Zh,
  useContext: Oe,
  useEffect: jo,
  useImperativeHandle: Kh,
  useInsertionEffect: Gh,
  useLayoutEffect: Xh,
  useMemo: Jh,
  useReducer: hr,
  useRef: $h,
  useState: function () {
    return hr(kt);
  },
  useDebugValue: Oo,
  useDeferredValue: function (e, t) {
    var n = de();
    return K === null ? To(n, e, t) : Fh(n, K.memoizedState, e, t);
  },
  useTransition: function () {
    var e = hr(kt)[0],
      t = de().memoizedState;
    return [typeof e == 'boolean' ? e : Pl(e), t];
  },
  useSyncExternalStore: Ah,
  useId: em,
};
Zn.useCacheRefresh = tm;
Zn.useMemoCache = wo;
Zn.useHostTransitionStatus = Ro;
Zn.useFormState = Vh;
Zn.useActionState = Vh;
Zn.useOptimistic = function (e, t) {
  var n = de();
  return K !== null
    ? Mh(n, K, e, t)
    : ((n.baseState = e), [e, n.queue.dispatch]);
};
function mr(e, t, n, a) {
  (t = e.memoizedState),
    (n = n(a, t)),
    (n = n == null ? t : I({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? La(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var a = $e(),
      l = ln(a);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = sn(e, l, a)),
      t !== null && (Ce(t, e, a), bl(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var a = $e(),
      l = ln(a);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = sn(e, l, a)),
      t !== null && (Ce(t, e, a), bl(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      a = ln(n);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = sn(e, a, n)),
      t !== null && (Ce(t, e, n), bl(t, e, n));
  },
};
function Jc(e, t, n, a, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(a, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Dl(n, a) || !Dl(l, i)
        : !0
  );
}
function Fc(e, t, n, a) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, a),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, a),
    t.state !== e && fu.enqueueReplaceState(t, t.state, null);
}
function Yn(e, t) {
  var n = t;
  if ('ref' in t) {
    n = {};
    for (var a in t) a !== 'ref' && (n[a] = t[a]);
  }
  if ((e = e.defaultProps)) {
    n === t && (n = I({}, n));
    for (var l in e) n[l] === void 0 && (n[l] = e[l]);
  }
  return n;
}
var is =
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
function im(e) {
  is(e);
}
function sm(e) {
  console.error(e);
}
function rm(e) {
  is(e);
}
function ss(e, t) {
  try {
    var n = e.onUncaughtError;
    n(t.value, { componentStack: t.stack });
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
function Wc(e, t, n) {
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
function du(e, t, n) {
  return (
    (n = ln(n)),
    (n.tag = 3),
    (n.payload = { element: null }),
    (n.callback = function () {
      ss(e, t);
    }),
    n
  );
}
function um(e) {
  return (e = ln(e)), (e.tag = 3), e;
}
function om(e, t, n, a) {
  var l = n.type.getDerivedStateFromError;
  if (typeof l == 'function') {
    var i = a.value;
    (e.payload = function () {
      return l(i);
    }),
      (e.callback = function () {
        Wc(t, n, a);
      });
  }
  var s = n.stateNode;
  s !== null &&
    typeof s.componentDidCatch == 'function' &&
    (e.callback = function () {
      Wc(t, n, a),
        typeof l != 'function' &&
          (un === null ? (un = new Set([this])) : un.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, { componentStack: r !== null ? r : '' });
    });
}
function ay(e, t, n, a, l) {
  if (
    ((n.flags |= 32768),
    a !== null && typeof a == 'object' && typeof a.then == 'function')
  ) {
    if (
      ((t = n.alternate),
      t !== null && Il(t, n, l, !0),
      (n = at.current),
      n !== null)
    ) {
      switch (n.tag) {
        case 13:
          return (
            vt === null ? Tu() : n.alternate === null && re === 0 && (re = 3),
            (n.flags &= -257),
            (n.flags |= 65536),
            (n.lanes = l),
            a === iu
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                Tr(e, a, l)),
            !1
          );
        case 22:
          return (
            (n.flags |= 65536),
            a === iu
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
                Tr(e, a, l)),
            !1
          );
      }
      throw Error(O(435, n.tag));
    }
    return Tr(e, a, l), Tu(), !1;
  }
  if (G)
    return (
      (t = at.current),
      t !== null
        ? (!(t.flags & 65536) && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = l),
          a !== lu && ((e = Error(O(422), { cause: a })), zl(Ie(e, n))))
        : (a !== lu && ((t = Error(O(423), { cause: a })), zl(Ie(t, n))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (l &= -l),
          (e.lanes |= l),
          (a = Ie(a, n)),
          (l = du(e.stateNode, a, l)),
          xr(e, l),
          re !== 4 && (re = 2)),
      !1
    );
  var i = Error(O(520), { cause: a });
  if (
    ((i = Ie(i, n)),
    wl === null ? (wl = [i]) : wl.push(i),
    re !== 4 && (re = 2),
    t === null)
  )
    return !0;
  (a = Ie(a, n)), (n = t);
  do {
    switch (n.tag) {
      case 3:
        return (
          (n.flags |= 65536),
          (e = l & -l),
          (n.lanes |= e),
          (e = du(n.stateNode, a, e)),
          xr(n, e),
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
                (un === null || !un.has(i)))))
        )
          return (
            (n.flags |= 65536),
            (l &= -l),
            (n.lanes |= l),
            (l = um(l)),
            om(l, e, n, a),
            xr(n, l),
            !1
          );
    }
    n = n.return;
  } while (n !== null);
  return !1;
}
var cm = Error(O(461)),
  ve = !1;
function Se(e, t, n, a) {
  t.child = e === null ? Nh(t, null, n, a) : qn(t, e.child, n, a);
}
function Pc(e, t, n, a, l) {
  n = n.render;
  var i = t.ref;
  if ('ref' in a) {
    var s = {};
    for (var r in a) r !== 'ref' && (s[r] = a[r]);
  } else s = a;
  return (
    Vn(t),
    (a = bo(e, t, n, s, i, l)),
    (r = xo()),
    e !== null && !ve
      ? (So(e, t, l), Yt(e, t, l))
      : (G && r && ho(t), (t.flags |= 1), Se(e, t, a, l), t.child)
  );
}
function Ic(e, t, n, a, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Lo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null
      ? ((t.tag = 15), (t.type = i), fm(e, t, i, a, l))
      : ((e = _i(n.type, null, a, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !Co(e, l))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dl), n(s, a) && e.ref === t.ref)
    )
      return Yt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = rn(i, a)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fm(e, t, n, a, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Dl(i, a) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = a = i), Co(e, l)))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), Yt(e, t, l);
  }
  return hu(e, t, n, a, l);
}
function dm(e, t, n) {
  var a = t.pendingProps,
    l = a.children,
    i = (t.stateNode._pendingVisibility & 2) !== 0,
    s = e !== null ? e.memoizedState : null;
  if ((vl(e, t), a.mode === 'hidden' || i)) {
    if (t.flags & 128) {
      if (((a = s !== null ? s.baseLanes | n : n), e !== null)) {
        for (l = t.child = e.child, i = 0; l !== null; )
          (i = i | l.lanes | l.childLanes), (l = l.sibling);
        t.childLanes = i & ~a;
      } else (t.childLanes = 0), (t.child = null);
      return ef(e, t, a, n);
    }
    if (n & 536870912)
      (t.memoizedState = { baseLanes: 0, cachePool: null }),
        e !== null && zi(t, s !== null ? s.cachePool : null),
        s !== null ? $c(t, s) : su(),
        jh(t);
    else
      return (
        (t.lanes = t.childLanes = 536870912),
        ef(e, t, s !== null ? s.baseLanes | n : n, n)
      );
  } else
    s !== null
      ? (zi(t, s.cachePool), $c(t, s), Pt(), (t.memoizedState = null))
      : (e !== null && zi(t, null), su(), Pt());
  return Se(e, t, l, n), t.child;
}
function ef(e, t, n, a) {
  var l = yo();
  return (
    (l = l === null ? null : { parent: he._currentValue, pool: l }),
    (t.memoizedState = { baseLanes: n, cachePool: l }),
    e !== null && zi(t, null),
    su(),
    jh(t),
    e !== null && Il(e, t, a, !0),
    null
  );
}
function vl(e, t) {
  var n = t.ref;
  if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
  else {
    if (typeof n != 'function' && typeof n != 'object') throw Error(O(284));
    (e === null || e.ref !== n) && (t.flags |= 2097664);
  }
}
function hu(e, t, n, a, l) {
  return (
    Vn(t),
    (n = bo(e, t, n, a, void 0, l)),
    (a = xo()),
    e !== null && !ve
      ? (So(e, t, l), Yt(e, t, l))
      : (G && a && ho(t), (t.flags |= 1), Se(e, t, n, l), t.child)
  );
}
function tf(e, t, n, a, l, i) {
  return (
    Vn(t),
    (t.updateQueue = null),
    (n = Rh(t, a, n, l)),
    Th(e),
    (a = xo()),
    e !== null && !ve
      ? (So(e, t, i), Yt(e, t, i))
      : (G && a && ho(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function nf(e, t, n, a, l) {
  if ((Vn(t), t.stateNode === null)) {
    var i = fa,
      s = n.contextType;
    typeof s == 'object' && s !== null && (i = Oe(s)),
      (i = new n(a, i)),
      (t.memoizedState =
        i.state !== null && i.state !== void 0 ? i.state : null),
      (i.updater = fu),
      (t.stateNode = i),
      (i._reactInternals = t),
      (i = t.stateNode),
      (i.props = a),
      (i.state = t.memoizedState),
      (i.refs = {}),
      Do(t),
      (s = n.contextType),
      (i.context = typeof s == 'object' && s !== null ? Oe(s) : fa),
      (i.state = t.memoizedState),
      (s = n.getDerivedStateFromProps),
      typeof s == 'function' && (mr(t, n, s, a), (i.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function' ||
        (typeof i.UNSAFE_componentWillMount != 'function' &&
          typeof i.componentWillMount != 'function') ||
        ((s = i.state),
        typeof i.componentWillMount == 'function' && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == 'function' &&
          i.UNSAFE_componentWillMount(),
        s !== i.state && fu.enqueueReplaceState(i, i.state, null),
        Sl(t, a, i, l),
        xl(),
        (i.state = t.memoizedState)),
      typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
      (a = !0);
  } else if (e === null) {
    i = t.stateNode;
    var r = t.memoizedProps,
      u = Yn(n, r);
    i.props = u;
    var o = i.context,
      c = n.contextType;
    (s = fa), typeof c == 'object' && c !== null && (s = Oe(c));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
      (r = t.pendingProps !== r),
      c ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((r || o !== s) && Fc(t, i, a, s)),
      (Ft = !1);
    var f = t.memoizedState;
    (i.state = f),
      Sl(t, a, i, l),
      xl(),
      (o = t.memoizedState),
      r || f !== o || Ft
        ? (typeof h == 'function' && (mr(t, n, h, a), (o = t.memoizedState)),
          (u = Ft || Jc(t, n, u, a, f, o, s))
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
      bu(e, t),
      (s = t.memoizedProps),
      (c = Yn(n, s)),
      (i.props = c),
      (h = t.pendingProps),
      (f = i.context),
      (o = n.contextType),
      (u = fa),
      typeof o == 'object' && o !== null && (u = Oe(o)),
      (r = n.getDerivedStateFromProps),
      (o =
        typeof r == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((s !== h || f !== u) && Fc(t, i, a, u)),
      (Ft = !1),
      (f = t.memoizedState),
      (i.state = f),
      Sl(t, a, i, l),
      xl();
    var p = t.memoizedState;
    s !== h ||
    f !== p ||
    Ft ||
    (e !== null && e.dependencies !== null && rs(e.dependencies))
      ? (typeof r == 'function' && (mr(t, n, r, a), (p = t.memoizedState)),
        (c =
          Ft ||
          Jc(t, n, c, a, f, p, u) ||
          (e !== null && e.dependencies !== null && rs(e.dependencies)))
          ? (o ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(a, p, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(a, p, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = a),
            (t.memoizedState = p)),
        (i.props = a),
        (i.state = p),
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
    vl(e, t),
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
          : Se(e, t, n, l),
        (t.memoizedState = i.state),
        (e = t.child))
      : (e = Yt(e, t, l)),
    e
  );
}
function af(e, t, n, a) {
  return Fl(), (t.flags |= 256), Se(e, t, n, a), t.child;
}
var gr = { dehydrated: null, treeContext: null, retryLane: 0 };
function pr(e) {
  return { baseLanes: e, cachePool: Oh() };
}
function yr(e, t, n) {
  return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= tt), e;
}
function hm(e, t, n) {
  var a = t.pendingProps,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s =
        e !== null && e.memoizedState === null ? !1 : (me.current & 2) !== 0),
    s && ((l = !0), (t.flags &= -129)),
    (s = (t.flags & 32) !== 0),
    (t.flags &= -33),
    e === null)
  ) {
    if (G) {
      if ((l ? Wt(t) : Pt(), G)) {
        var r = Ee,
          u;
        if ((u = r)) {
          e: {
            for (u = r, r = ht; u.nodeType !== 8; ) {
              if (!r) {
                r = null;
                break e;
              }
              if (((u = rt(u.nextSibling)), u === null)) {
                r = null;
                break e;
              }
            }
            r = u;
          }
          r !== null
            ? ((t.memoizedState = {
                dehydrated: r,
                treeContext: zn !== null ? { id: Ut, overflow: Lt } : null,
                retryLane: 536870912,
              }),
              (u = et(18, null, null, 0)),
              (u.stateNode = r),
              (u.return = t),
              (t.child = u),
              (Re = t),
              (Ee = null),
              (u = !0))
            : (u = !1);
        }
        u || Bn(t);
      }
      if (
        ((r = t.memoizedState), r !== null && ((r = r.dehydrated), r !== null))
      )
        return r.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
      Mt(t);
    }
    return (
      (r = a.children),
      (a = a.fallback),
      l
        ? (Pt(),
          (l = t.mode),
          (r = gu({ mode: 'hidden', children: r }, l)),
          (a = Ln(a, l, n, null)),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          (l = t.child),
          (l.memoizedState = pr(n)),
          (l.childLanes = yr(e, s, n)),
          (t.memoizedState = gr),
          a)
        : (Wt(t), mu(t, r))
    );
  }
  if (((u = e.memoizedState), u !== null && ((r = u.dehydrated), r !== null))) {
    if (i)
      t.flags & 256
        ? (Wt(t), (t.flags &= -257), (t = vr(e, t, n)))
        : t.memoizedState !== null
          ? (Pt(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Pt(),
            (l = a.fallback),
            (r = t.mode),
            (a = gu({ mode: 'visible', children: a.children }, r)),
            (l = Ln(l, r, n, null)),
            (l.flags |= 2),
            (a.return = t),
            (l.return = t),
            (a.sibling = l),
            (t.child = a),
            qn(t, e.child, null, n),
            (a = t.child),
            (a.memoizedState = pr(n)),
            (a.childLanes = yr(e, s, n)),
            (t.memoizedState = gr),
            (t = l));
    else if ((Wt(t), r.data === '$!')) {
      if (((s = r.nextSibling && r.nextSibling.dataset), s)) var o = s.dgst;
      (s = o),
        (a = Error(O(419))),
        (a.stack = ''),
        (a.digest = s),
        zl({ value: a, source: null, stack: null }),
        (t = vr(e, t, n));
    } else if (
      (ve || Il(e, t, n, !1), (s = (n & e.childLanes) !== 0), ve || s)
    ) {
      if (((s = W), s !== null)) {
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
          throw ((u.retryLane = a), dn(e, a), Ce(s, e, a), cm);
      }
      r.data === '$?' || Tu(), (t = vr(e, t, n));
    } else
      r.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = vy.bind(null, e)),
          (r._reactRetry = t),
          (t = null))
        : ((e = u.treeContext),
          (Ee = rt(r.nextSibling)),
          (Re = t),
          (G = !0),
          (st = null),
          (ht = !1),
          e !== null &&
            ((Fe[We++] = Ut),
            (Fe[We++] = Lt),
            (Fe[We++] = zn),
            (Ut = e.id),
            (Lt = e.overflow),
            (zn = t)),
          (t = mu(t, a.children)),
          (t.flags |= 4096));
    return t;
  }
  return l
    ? (Pt(),
      (l = a.fallback),
      (r = t.mode),
      (u = e.child),
      (o = u.sibling),
      (a = rn(u, { mode: 'hidden', children: a.children })),
      (a.subtreeFlags = u.subtreeFlags & 31457280),
      o !== null ? (l = rn(o, l)) : ((l = Ln(l, r, n, null)), (l.flags |= 2)),
      (l.return = t),
      (a.return = t),
      (a.sibling = l),
      (t.child = a),
      (a = l),
      (l = t.child),
      (r = e.child.memoizedState),
      r === null
        ? (r = pr(n))
        : ((u = r.cachePool),
          u !== null
            ? ((o = he._currentValue),
              (u = u.parent !== o ? { parent: o, pool: o } : u))
            : (u = Oh()),
          (r = { baseLanes: r.baseLanes | n, cachePool: u })),
      (l.memoizedState = r),
      (l.childLanes = yr(e, s, n)),
      (t.memoizedState = gr),
      a)
    : (Wt(t),
      (n = e.child),
      (e = n.sibling),
      (n = rn(n, { mode: 'visible', children: a.children })),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((s = t.deletions),
        s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n);
}
function mu(e, t) {
  return (
    (t = gu({ mode: 'visible', children: t }, e.mode)),
    (t.return = e),
    (e.child = t)
  );
}
function gu(e, t) {
  return Mm(e, t, 0, null);
}
function vr(e, t, n) {
  return (
    qn(t, e.child, null, n),
    (e = mu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lf(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), yu(e.return, t, n);
}
function br(e, t, n, a, l) {
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
function mm(e, t, n) {
  var a = t.pendingProps,
    l = a.revealOrder,
    i = a.tail;
  if ((Se(e, t, a.children, n), (a = me.current), a & 2))
    (a = (a & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lf(e, n, t);
        else if (e.tag === 19) lf(e, n, t);
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
  switch ((te(me, a), l)) {
    case 'forwards':
      for (n = t.child, l = null; n !== null; )
        (e = n.alternate),
          e !== null && ns(e) === null && (l = n),
          (n = n.sibling);
      (n = l),
        n === null
          ? ((l = t.child), (t.child = null))
          : ((l = n.sibling), (n.sibling = null)),
        br(t, !1, l, n, i);
      break;
    case 'backwards':
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (((e = l.alternate), e !== null && ns(e) === null)) {
          t.child = l;
          break;
        }
        (e = l.sibling), (l.sibling = n), (n = l), (l = e);
      }
      br(t, !0, n, null, i);
      break;
    case 'together':
      br(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(n & t.childLanes))
  )
    if (e !== null) {
      if ((Il(e, t, n, !1), (n & t.childLanes) === 0)) return null;
    } else return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Co(e, t) {
  return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && rs(e)));
}
function ly(e, t, n) {
  switch (t.tag) {
    case 3:
      Ki(t, t.stateNode.containerInfo), It(t, he, e.memoizedState.cache), Fl();
      break;
    case 27:
    case 5:
      Jr(t);
      break;
    case 4:
      Ki(t, t.stateNode.containerInfo);
      break;
    case 10:
      It(t, t.type, t.memoizedProps.value);
      break;
    case 13:
      var a = t.memoizedState;
      if (a !== null)
        return a.dehydrated !== null
          ? (Wt(t), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? hm(e, t, n)
            : (Wt(t), (e = Yt(e, t, n)), e !== null ? e.sibling : null);
      Wt(t);
      break;
    case 19:
      var l = (e.flags & 128) !== 0;
      if (
        ((a = (n & t.childLanes) !== 0),
        a || (Il(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
        l)
      ) {
        if (a) return mm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        te(me, me.current),
        a)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dm(e, t, n);
    case 24:
      It(t, he, e.memoizedState.cache);
  }
  return Yt(e, t, n);
}
function gm(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps) ve = !0;
    else {
      if (!Co(e, n) && !(t.flags & 128)) return (ve = !1), ly(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), G && t.flags & 1048576 && xh(t, es, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      e: {
        e = t.pendingProps;
        var a = t.elementType,
          l = a._init;
        if (((a = l(a._payload)), (t.type = a), typeof a == 'function'))
          Lo(a)
            ? ((e = Yn(a, e)), (t.tag = 1), (t = nf(null, t, a, e, n)))
            : ((t.tag = 0), (t = hu(null, t, a, e, n)));
        else {
          if (a != null) {
            if (((l = a.$$typeof), l === eo)) {
              (t.tag = 11), (t = Pc(null, t, a, e, n));
              break e;
            } else if (l === to) {
              (t.tag = 14), (t = Ic(null, t, a, e, n));
              break e;
            }
          }
          throw ((t = Kr(a) || a), Error(O(306, t, '')));
        }
      }
      return t;
    case 0:
      return hu(e, t, t.type, t.pendingProps, n);
    case 1:
      return (a = t.type), (l = Yn(a, t.pendingProps)), nf(e, t, a, l, n);
    case 3:
      e: {
        if ((Ki(t, t.stateNode.containerInfo), e === null)) throw Error(O(387));
        var i = t.pendingProps;
        (l = t.memoizedState), (a = l.element), bu(e, t), Sl(t, i, null, n);
        var s = t.memoizedState;
        if (
          ((i = s.cache),
          It(t, he, i),
          i !== l.cache && vu(t, [he], n, !0),
          xl(),
          (i = s.element),
          l.isDehydrated)
        )
          if (
            ((l = { element: i, isDehydrated: !1, cache: s.cache }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            t = af(e, t, i, n);
            break e;
          } else if (i !== a) {
            (a = Ie(Error(O(424)), t)), zl(a), (t = af(e, t, i, n));
            break e;
          } else
            for (
              Ee = rt(t.stateNode.containerInfo.firstChild),
                Re = t,
                G = !0,
                st = null,
                ht = !0,
                n = Nh(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fl(), i === a)) {
            t = Yt(e, t, n);
            break e;
          }
          Se(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 26:
      return (
        vl(e, t),
        e === null
          ? (n = wf(t.type, null, t.pendingProps, null))
            ? (t.memoizedState = n)
            : G ||
              ((n = t.type),
              (e = t.pendingProps),
              (a = ms(an.current).createElement(n)),
              (a[je] = t),
              (a[_e] = e),
              we(a, n, e),
              ye(a),
              (t.stateNode = a))
          : (t.memoizedState = wf(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState
            )),
        null
      );
    case 27:
      return (
        Jr(t),
        e === null &&
          G &&
          ((a = t.stateNode = Im(t.type, t.pendingProps, an.current)),
          (Re = t),
          (ht = !0),
          (Ee = rt(a.firstChild))),
        (a = t.pendingProps.children),
        e !== null || G ? Se(e, t, a, n) : (t.child = qn(t, null, a, n)),
        vl(e, t),
        t.child
      );
    case 5:
      return (
        e === null &&
          G &&
          ((l = a = Ee) &&
            ((a = Ly(a, t.type, t.pendingProps, ht)),
            a !== null
              ? ((t.stateNode = a),
                (Re = t),
                (Ee = rt(a.firstChild)),
                (ht = !1),
                (l = !0))
              : (l = !1)),
          l || Bn(t)),
        Jr(t),
        (l = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        zu(l, i) ? (a = null) : s !== null && zu(l, s) && (t.flags |= 32),
        t.memoizedState !== null &&
          ((l = bo(e, t, W0, null, null, n)), (Bl._currentValue = l)),
        vl(e, t),
        Se(e, t, a, n),
        t.child
      );
    case 6:
      return (
        e === null &&
          G &&
          ((e = n = Ee) &&
            ((n = My(n, t.pendingProps, ht)),
            n !== null
              ? ((t.stateNode = n), (Re = t), (Ee = null), (e = !0))
              : (e = !1)),
          e || Bn(t)),
        null
      );
    case 13:
      return hm(e, t, n);
    case 4:
      return (
        Ki(t, t.stateNode.containerInfo),
        (a = t.pendingProps),
        e === null ? (t.child = qn(t, null, a, n)) : Se(e, t, a, n),
        t.child
      );
    case 11:
      return Pc(e, t, t.type, t.pendingProps, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      return (
        (a = t.pendingProps),
        It(t, t.type, a.value),
        Se(e, t, a.children, n),
        t.child
      );
    case 9:
      return (
        (l = t.type._context),
        (a = t.pendingProps.children),
        Vn(t),
        (l = Oe(l)),
        (a = a(l)),
        (t.flags |= 1),
        Se(e, t, a, n),
        t.child
      );
    case 14:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 15:
      return fm(e, t, t.type, t.pendingProps, n);
    case 19:
      return mm(e, t, n);
    case 22:
      return dm(e, t, n);
    case 24:
      return (
        Vn(t),
        (a = Oe(he)),
        e === null
          ? ((l = yo()),
            l === null &&
              ((l = W),
              (i = po()),
              (l.pooledCache = i),
              i.refCount++,
              i !== null && (l.pooledCacheLanes |= n),
              (l = i)),
            (t.memoizedState = { parent: a, cache: l }),
            Do(t),
            It(t, he, l))
          : (e.lanes & n && (bu(e, t), Sl(t, null, null, n), xl()),
            (l = e.memoizedState),
            (i = t.memoizedState),
            l.parent !== a
              ? ((l = { parent: a, cache: a }),
                (t.memoizedState = l),
                t.lanes === 0 &&
                  (t.memoizedState = t.updateQueue.baseState = l),
                It(t, he, a))
              : ((a = i.cache),
                It(t, he, a),
                a !== l.cache && vu(t, [he], n, !0))),
        Se(e, t, t.pendingProps.children, n),
        t.child
      );
    case 29:
      throw t.pendingProps;
  }
  throw Error(O(156, t.tag));
}
var pu = xt(null),
  Jn = null,
  _t = null;
function It(e, t, n) {
  te(pu, t._currentValue), (t._currentValue = n);
}
function Ht(e) {
  (e._currentValue = pu.current), be(pu);
}
function yu(e, t, n) {
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
function vu(e, t, n, a) {
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
              yu(i.return, n, e),
              a || (s = null);
            break e;
          }
        i = r.next;
      }
    } else if (l.tag === 18) {
      if (((s = l.return), s === null)) throw Error(O(341));
      (s.lanes |= n),
        (i = s.alternate),
        i !== null && (i.lanes |= n),
        yu(s, n, e),
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
function Il(e, t, n, a) {
  e = null;
  for (var l = t, i = !1; l !== null; ) {
    if (!i) {
      if (l.flags & 524288) i = !0;
      else if (l.flags & 262144) break;
    }
    if (l.tag === 10) {
      var s = l.alternate;
      if (s === null) throw Error(O(387));
      if (((s = s.memoizedProps), s !== null)) {
        var r = l.type;
        Xe(l.pendingProps.value, s.value) ||
          (e !== null ? e.push(r) : (e = [r]));
      }
    } else if (l === Qi.current) {
      if (((s = l.alternate), s === null)) throw Error(O(387));
      s.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
        (e !== null ? e.push(Bl) : (e = [Bl]));
    }
    l = l.return;
  }
  e !== null && vu(t, e, n, a), (t.flags |= 262144);
}
function rs(e) {
  for (e = e.firstContext; e !== null; ) {
    if (!Xe(e.context._currentValue, e.memoizedValue)) return !0;
    e = e.next;
  }
  return !1;
}
function Vn(e) {
  (Jn = e),
    (_t = null),
    (e = e.dependencies),
    e !== null && (e.firstContext = null);
}
function Oe(e) {
  return pm(Jn, e);
}
function vi(e, t) {
  return Jn === null && Vn(e), pm(e, t);
}
function pm(e, t) {
  var n = t._currentValue;
  if (((t = { context: t, memoizedValue: n, next: null }), _t === null)) {
    if (e === null) throw Error(O(308));
    (_t = t),
      (e.dependencies = { lanes: 0, firstContext: t }),
      (e.flags |= 524288);
  } else _t = _t.next = t;
  return n;
}
var Ft = !1;
function Do(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function bu(e, t) {
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
function ln(e) {
  return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), ie & 2)) {
    var l = a.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (a.pending = t),
      (t = Pi(e)),
      bh(e, null, n),
      t
    );
  }
  return Ms(e, a, t, n), Pi(e);
}
function bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))
  ) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), Qd(e, n);
  }
}
function xr(e, t) {
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
var xu = !1;
function xl() {
  if (xu) {
    var e = xa;
    if (e !== null) throw e;
  }
}
function Sl(e, t, n, a) {
  xu = !1;
  var l = e.updateQueue;
  Ft = !1;
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
        p = f !== r.lane;
      if (p ? ($ & f) === f : (a & f) === f) {
        f !== 0 && f === Ra && (xu = !0),
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
          var v = n;
          switch (x.tag) {
            case 1:
              if (((y = x.payload), typeof y == 'function')) {
                h = y.call(v, h, f);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (f = typeof y == 'function' ? y.call(v, h, f) : y),
                f == null)
              )
                break e;
              h = I({}, h, f);
              break e;
            case 2:
              Ft = !0;
          }
        }
        (f = r.callback),
          f !== null &&
            ((e.flags |= 64),
            p && (e.flags |= 8192),
            (p = l.callbacks),
            p === null ? (l.callbacks = [f]) : p.push(f));
      } else
        (p = {
          lane: f,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }),
          c === null ? ((o = c = p), (u = h)) : (c = c.next = p),
          (s |= f);
      if (((r = r.next), r === null)) {
        if (((r = l.shared.pending), r === null)) break;
        (p = r),
          (r = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    c === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = o),
      (l.lastBaseUpdate = c),
      i === null && (l.shared.lanes = 0),
      (gn |= s),
      (e.lanes = s),
      (e.memoizedState = h);
  }
}
function ym(e, t) {
  if (typeof e != 'function') throw Error(O(191, e));
  e.call(t);
}
function vm(e, t) {
  var n = e.callbacks;
  if (n !== null)
    for (e.callbacks = null, e = 0; e < n.length; e++) ym(n[e], t);
}
function ei(e, t) {
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
    J(t, t.return, r);
  }
}
function mn(e, t, n) {
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
              J(l, u, o);
            }
          }
        }
        a = a.next;
      } while (a !== i);
    }
  } catch (o) {
    J(t, t.return, o);
  }
}
function bm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    var n = e.stateNode;
    try {
      vm(t, n);
    } catch (a) {
      J(e, e.return, a);
    }
  }
}
function xm(e, t, n) {
  (n.props = Yn(e.type, e.memoizedProps)), (n.state = e.memoizedState);
  try {
    n.componentWillUnmount();
  } catch (a) {
    J(e, t, a);
  }
}
function Rn(e, t) {
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
    J(e, t, i);
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
        J(e, t, l);
      } finally {
        (e.refCleanup = null),
          (e = e.alternate),
          e != null && (e.refCleanup = null);
      }
    else if (typeof n == 'function')
      try {
        n(null);
      } catch (l) {
        J(e, t, l);
      }
    else n.current = null;
}
function Sm(e) {
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
    J(e, e.return, l);
  }
}
function sf(e, t, n) {
  try {
    var a = e.stateNode;
    Ay(a, e.type, n, t), (a[_e] = t);
  } catch (l) {
    J(e, e.return, l);
  }
}
function Em(e) {
  return (
    e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
  );
}
function Sr(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Em(e.return)) return null;
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
function Su(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Vs));
  else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
    for (Su(e, t, n), e = e.sibling; e !== null; ) Su(e, t, n), (e = e.sibling);
}
function us(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
    for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), (e = e.sibling);
}
var Rt = !1,
  se = !1,
  Er = !1,
  rf = typeof WeakSet == 'function' ? WeakSet : Set,
  pe = null,
  uf = !1;
function iy(e, t) {
  if (((e = e.containerInfo), (Cu = vs), (e = dh(e)), oo(e))) {
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
              var p;
              h !== n || (l !== 0 && h.nodeType !== 3) || (r = s + l),
                h !== i || (a !== 0 && h.nodeType !== 3) || (u = s + a),
                h.nodeType === 3 && (s += h.nodeValue.length),
                (p = h.firstChild) !== null;

            )
              (f = h), (h = p);
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++o === l && (r = s),
                f === i && ++c === a && (u = s),
                (p = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = p;
          }
          n = r === -1 || u === -1 ? null : { start: r, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Du = { focusedElem: e, selectionRange: n }, vs = !1, pe = t;
    pe !== null;

  )
    if (((t = pe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (pe = e);
    else
      for (; pe !== null; ) {
        switch (((t = pe), (i = t.alternate), (e = t.flags), t.tag)) {
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
                var y = Yn(n.type, l, n.elementType === n.type);
                (e = a.getSnapshotBeforeUpdate(y, i)),
                  (a.__reactInternalSnapshotBeforeUpdate = e);
              } catch (x) {
                J(n, n.return, x);
              }
            }
            break;
          case 3:
            if (e & 1024) {
              if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9))
                Uu(e);
              else if (n === 1)
                switch (e.nodeName) {
                  case 'HEAD':
                  case 'HTML':
                  case 'BODY':
                    Uu(e);
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
            if (e & 1024) throw Error(O(163));
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (pe = e);
          break;
        }
        pe = t.return;
      }
  return (y = uf), (uf = !1), y;
}
function wm(e, t, n) {
  var a = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      Ot(e, n), a & 4 && ei(5, n);
      break;
    case 1:
      if ((Ot(e, n), a & 4))
        if (((e = n.stateNode), t === null))
          try {
            e.componentDidMount();
          } catch (r) {
            J(n, n.return, r);
          }
        else {
          var l = Yn(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (r) {
            J(n, n.return, r);
          }
        }
      a & 64 && bm(n), a & 512 && Rn(n, n.return);
      break;
    case 3:
      if ((Ot(e, n), a & 64 && ((a = n.updateQueue), a !== null))) {
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
          vm(a, e);
        } catch (r) {
          J(n, n.return, r);
        }
      }
      break;
    case 26:
      Ot(e, n), a & 512 && Rn(n, n.return);
      break;
    case 27:
    case 5:
      Ot(e, n), t === null && a & 4 && Sm(n), a & 512 && Rn(n, n.return);
      break;
    case 12:
      Ot(e, n);
      break;
    case 13:
      Ot(e, n), a & 4 && Om(e, n);
      break;
    case 22:
      if (((l = n.memoizedState !== null || Rt), !l)) {
        t = (t !== null && t.memoizedState !== null) || se;
        var i = Rt,
          s = se;
        (Rt = l),
          (se = t) && !s ? Zt(e, n, (n.subtreeFlags & 8772) !== 0) : Ot(e, n),
          (Rt = i),
          (se = s);
      }
      a & 512 &&
        (n.memoizedProps.mode === 'manual' ? Rn(n, n.return) : ke(n, n.return));
      break;
    default:
      Ot(e, n);
  }
}
function Nm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Nm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && ao(t)),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
var ce = null,
  Be = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) jm(e, t, n), (n = n.sibling);
}
function jm(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == 'function')
    try {
      Ye.onCommitFiberUnmount(Ql, n);
    } catch {}
  switch (n.tag) {
    case 26:
      se || ke(n, t),
        jt(e, t, n),
        n.memoizedState
          ? n.memoizedState.count--
          : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
      break;
    case 27:
      se || ke(n, t);
      var a = ce,
        l = Be;
      for (
        ce = n.stateNode, jt(e, t, n), n = n.stateNode, t = n.attributes;
        t.length;

      )
        n.removeAttributeNode(t[0]);
      ao(n), (ce = a), (Be = l);
      break;
    case 5:
      se || ke(n, t);
    case 6:
      l = ce;
      var i = Be;
      if (((ce = null), jt(e, t, n), (ce = l), (Be = i), ce !== null))
        if (Be)
          try {
            (e = ce),
              (a = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a);
          } catch (s) {
            J(n, t, s);
          }
        else
          try {
            ce.removeChild(n.stateNode);
          } catch (s) {
            J(n, t, s);
          }
      break;
    case 18:
      ce !== null &&
        (Be
          ? ((t = ce),
            (n = n.stateNode),
            t.nodeType === 8
              ? Lr(t.parentNode, n)
              : t.nodeType === 1 && Lr(t, n),
            Yl(t))
          : Lr(ce, n.stateNode));
      break;
    case 4:
      (a = ce),
        (l = Be),
        (ce = n.stateNode.containerInfo),
        (Be = !0),
        jt(e, t, n),
        (ce = a),
        (Be = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      se || mn(2, n, t), se || mn(4, n, t), jt(e, t, n);
      break;
    case 1:
      se ||
        (ke(n, t),
        (a = n.stateNode),
        typeof a.componentWillUnmount == 'function' && xm(n, t, a)),
        jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      se || ke(n, t),
        (se = (a = se) || n.memoizedState !== null),
        jt(e, t, n),
        (se = a);
      break;
    default:
      jt(e, t, n);
  }
}
function Om(e, t) {
  if (
    t.memoizedState === null &&
    ((e = t.alternate),
    e !== null &&
      ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
  )
    try {
      Yl(e);
    } catch (n) {
      J(t, t.return, n);
    }
}
function sy(e) {
  switch (e.tag) {
    case 13:
    case 19:
      var t = e.stateNode;
      return t === null && (t = e.stateNode = new rf()), t;
    case 22:
      return (
        (e = e.stateNode),
        (t = e._retryCache),
        t === null && (t = e._retryCache = new rf()),
        t
      );
    default:
      throw Error(O(435, e.tag));
  }
}
function wr(e, t) {
  var n = sy(e);
  t.forEach(function (a) {
    var l = by.bind(null, e, a);
    n.has(a) || (n.add(a), a.then(l, l));
  });
}
function Qe(e, t) {
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
            (ce = r.stateNode), (Be = !1);
            break e;
          case 3:
            (ce = r.stateNode.containerInfo), (Be = !0);
            break e;
          case 4:
            (ce = r.stateNode.containerInfo), (Be = !0);
            break e;
        }
        r = r.return;
      }
      if (ce === null) throw Error(O(160));
      jm(i, s, l),
        (ce = null),
        (Be = !1),
        (i = l.alternate),
        i !== null && (i.return = null),
        (l.return = null);
    }
  if (t.subtreeFlags & 13878)
    for (t = t.child; t !== null; ) Tm(t, e), (t = t.sibling);
}
var it = null;
function Tm(e, t) {
  var n = e.alternate,
    a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Qe(t, e),
        Ke(e),
        a & 4 && (mn(3, e, e.return), ei(3, e), mn(5, e, e.return));
      break;
    case 1:
      Qe(t, e),
        Ke(e),
        a & 512 && (se || n === null || ke(n, n.return)),
        a & 64 &&
          Rt &&
          ((e = e.updateQueue),
          e !== null &&
            ((a = e.callbacks),
            a !== null &&
              ((n = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
      break;
    case 26:
      var l = it;
      if (
        (Qe(t, e),
        Ke(e),
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
                        i[Rl] ||
                        i[je] ||
                        i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                        i.hasAttribute('itemprop')) &&
                        ((i = l.createElement(a)),
                        l.head.insertBefore(
                          i,
                          l.querySelector('head > title')
                        )),
                      we(i, a, n),
                      (i[je] = e),
                      ye(i),
                      (a = i);
                    break e;
                  case 'link':
                    var s = jf('link', 'href', l).get(a + (n.href || ''));
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
                      we(i, a, n),
                      l.head.appendChild(i);
                    break;
                  case 'meta':
                    if (
                      (s = jf('meta', 'content', l).get(a + (n.content || '')))
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
                      we(i, a, n),
                      l.head.appendChild(i);
                    break;
                  default:
                    throw Error(O(468, a));
                }
                (i[je] = e), ye(i), (a = i);
              }
              e.stateNode = a;
            } else Of(l, e.type, e.stateNode);
          else e.stateNode = Nf(l, a, e.memoizedProps);
        else
          i !== a
            ? (i === null
                ? n.stateNode !== null &&
                  ((n = n.stateNode), n.parentNode.removeChild(n))
                : i.count--,
              a === null
                ? Of(l, e.type, e.stateNode)
                : Nf(l, a, e.memoizedProps))
            : a === null &&
              e.stateNode !== null &&
              sf(e, e.memoizedProps, n.memoizedProps);
      }
      break;
    case 27:
      if (a & 4 && e.alternate === null) {
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          for (var u = l.firstChild; u; ) {
            var o = u.nextSibling,
              c = u.nodeName;
            u[Rl] ||
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
          we(l, h, i), (l[je] = e), (l[_e] = i);
        } catch (y) {
          J(e, e.return, y);
        }
      }
    case 5:
      if (
        (Qe(t, e),
        Ke(e),
        a & 512 && (se || n === null || ke(n, n.return)),
        e.flags & 32)
      ) {
        l = e.stateNode;
        try {
          Oa(l, '');
        } catch (y) {
          J(e, e.return, y);
        }
      }
      a & 4 &&
        e.stateNode != null &&
        ((l = e.memoizedProps), sf(e, l, n !== null ? n.memoizedProps : l)),
        a & 1024 && (Er = !0);
      break;
    case 6:
      if ((Qe(t, e), Ke(e), a & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (a = e.memoizedProps), (n = e.stateNode);
        try {
          n.nodeValue = a;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        ((Bi = null),
        (l = it),
        (it = gs(t.containerInfo)),
        Qe(t, e),
        (it = l),
        Ke(e),
        a & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yl(t.containerInfo);
        } catch (y) {
          J(e, e.return, y);
        }
      Er && ((Er = !1), Rm(e));
      break;
    case 4:
      (a = it), (it = gs(e.stateNode.containerInfo)), Qe(t, e), Ke(e), (it = a);
      break;
    case 12:
      Qe(t, e), Ke(e);
      break;
    case 13:
      Qe(t, e),
        Ke(e),
        e.child.flags & 8192 &&
          (e.memoizedState !== null) !=
            (n !== null && n.memoizedState !== null) &&
          (Ho = yt()),
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((e.updateQueue = null), wr(e, a)));
      break;
    case 22:
      if (
        (a & 512 && (se || n === null || ke(n, n.return)),
        (u = e.memoizedState !== null),
        (o = n !== null && n.memoizedState !== null),
        (c = Rt),
        (h = se),
        (Rt = c || u),
        (se = h || o),
        Qe(t, e),
        (se = h),
        (Rt = c),
        Ke(e),
        (t = e.stateNode),
        (t._current = e),
        (t._visibility &= -3),
        (t._visibility |= t._pendingVisibility & 2),
        a & 8192 &&
          ((t._visibility = u ? t._visibility & -2 : t._visibility | 1),
          u && ((t = Rt || se), n === null || o || t || ta(e)),
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
                  var p =
                    r != null && r.hasOwnProperty('display') ? r.display : null;
                  s.style.display =
                    p == null || typeof p == 'boolean' ? '' : ('' + p).trim();
                }
              } catch (y) {
                J(o, o.return, y);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              o = t;
              try {
                o.stateNode.nodeValue = u ? '' : o.memoizedProps;
              } catch (y) {
                J(o, o.return, y);
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
          n !== null && ((a.retryQueue = null), wr(e, n))));
      break;
    case 19:
      Qe(t, e),
        Ke(e),
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((e.updateQueue = null), wr(e, a)));
      break;
    case 21:
      break;
    default:
      Qe(t, e), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      if (e.tag !== 27) {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Em(n)) {
              var a = n;
              break e;
            }
            n = n.return;
          }
          throw Error(O(160));
        }
        switch (a.tag) {
          case 27:
            var l = a.stateNode,
              i = Sr(e);
            us(e, i, l);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (Oa(s, ''), (a.flags &= -33));
            var r = Sr(e);
            us(e, r, s);
            break;
          case 3:
          case 4:
            var u = a.stateNode.containerInfo,
              o = Sr(e);
            Su(e, o, u);
            break;
          default:
            throw Error(O(161));
        }
      }
    } catch (c) {
      J(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rm(e) {
  if (e.subtreeFlags & 1024)
    for (e = e.child; e !== null; ) {
      var t = e;
      Rm(t),
        t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
        (e = e.sibling);
    }
}
function Ot(e, t) {
  if (t.subtreeFlags & 8772)
    for (t = t.child; t !== null; ) wm(e, t.alternate, t), (t = t.sibling);
}
function ta(e) {
  for (e = e.child; e !== null; ) {
    var t = e;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mn(4, t, t.return), ta(t);
        break;
      case 1:
        ke(t, t.return);
        var n = t.stateNode;
        typeof n.componentWillUnmount == 'function' && xm(t, t.return, n),
          ta(t);
        break;
      case 26:
      case 27:
      case 5:
        ke(t, t.return), ta(t);
        break;
      case 22:
        ke(t, t.return), t.memoizedState === null && ta(t);
        break;
      default:
        ta(t);
    }
    e = e.sibling;
  }
}
function Zt(e, t, n) {
  for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
    var a = t.alternate,
      l = e,
      i = t,
      s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Zt(l, i, n), ei(4, i);
        break;
      case 1:
        if (
          (Zt(l, i, n),
          (a = i),
          (l = a.stateNode),
          typeof l.componentDidMount == 'function')
        )
          try {
            l.componentDidMount();
          } catch (o) {
            J(a, a.return, o);
          }
        if (((a = i), (l = a.updateQueue), l !== null)) {
          var r = a.stateNode;
          try {
            var u = l.shared.hiddenCallbacks;
            if (u !== null)
              for (l.shared.hiddenCallbacks = null, l = 0; l < u.length; l++)
                ym(u[l], r);
          } catch (o) {
            J(a, a.return, o);
          }
        }
        n && s & 64 && bm(i), Rn(i, i.return);
        break;
      case 26:
      case 27:
      case 5:
        Zt(l, i, n), n && a === null && s & 4 && Sm(i), Rn(i, i.return);
        break;
      case 12:
        Zt(l, i, n);
        break;
      case 13:
        Zt(l, i, n), n && s & 4 && Om(l, i);
        break;
      case 22:
        i.memoizedState === null && Zt(l, i, n), Rn(i, i.return);
        break;
      default:
        Zt(l, i, n);
    }
    t = t.sibling;
  }
}
function zo(e, t) {
  var n = null;
  e !== null &&
    e.memoizedState !== null &&
    e.memoizedState.cachePool !== null &&
    (n = e.memoizedState.cachePool.pool),
    (e = null),
    t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
    e !== n && (e != null && e.refCount++, n != null && Wl(n));
}
function Uo(e, t) {
  (e = null),
    t.alternate !== null && (e = t.alternate.memoizedState.cache),
    (t = t.memoizedState.cache),
    t !== e && (t.refCount++, e != null && Wl(e));
}
function Kt(e, t, n, a) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) Am(e, t, n, a), (t = t.sibling);
}
function Am(e, t, n, a) {
  var l = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      Kt(e, t, n, a), l & 2048 && ei(9, t);
      break;
    case 3:
      Kt(e, t, n, a),
        l & 2048 &&
          ((e = null),
          t.alternate !== null && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== e && (t.refCount++, e != null && Wl(e)));
      break;
    case 12:
      if (l & 2048) {
        Kt(e, t, n, a), (e = t.stateNode);
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
          J(t, t.return, u);
        }
      } else Kt(e, t, n, a);
      break;
    case 23:
      break;
    case 22:
      (i = t.stateNode),
        t.memoizedState !== null
          ? i._visibility & 4
            ? Kt(e, t, n, a)
            : El(e, t)
          : i._visibility & 4
            ? Kt(e, t, n, a)
            : ((i._visibility |= 4),
              na(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
        l & 2048 && zo(t.alternate, t);
      break;
    case 24:
      Kt(e, t, n, a), l & 2048 && Uo(t.alternate, t);
      break;
    default:
      Kt(e, t, n, a);
  }
}
function na(e, t, n, a, l) {
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
        na(i, s, r, u, l), ei(8, s);
        break;
      case 23:
        break;
      case 22:
        var c = s.stateNode;
        s.memoizedState !== null
          ? c._visibility & 4
            ? na(i, s, r, u, l)
            : El(i, s)
          : ((c._visibility |= 4), na(i, s, r, u, l)),
          l && o & 2048 && zo(s.alternate, s);
        break;
      case 24:
        na(i, s, r, u, l), l && o & 2048 && Uo(s.alternate, s);
        break;
      default:
        na(i, s, r, u, l);
    }
    t = t.sibling;
  }
}
function El(e, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) {
      var n = e,
        a = t,
        l = a.flags;
      switch (a.tag) {
        case 22:
          El(n, a), l & 2048 && zo(a.alternate, a);
          break;
        case 24:
          El(n, a), l & 2048 && Uo(a.alternate, a);
          break;
        default:
          El(n, a);
      }
      t = t.sibling;
    }
}
var ol = 8192;
function Fn(e) {
  if (e.subtreeFlags & ol)
    for (e = e.child; e !== null; ) Cm(e), (e = e.sibling);
}
function Cm(e) {
  switch (e.tag) {
    case 26:
      Fn(e),
        e.flags & ol &&
          e.memoizedState !== null &&
          Zy(it, e.memoizedState, e.memoizedProps);
      break;
    case 5:
      Fn(e);
      break;
    case 3:
    case 4:
      var t = it;
      (it = gs(e.stateNode.containerInfo)), Fn(e), (it = t);
      break;
    case 22:
      e.memoizedState === null &&
        ((t = e.alternate),
        t !== null && t.memoizedState !== null
          ? ((t = ol), (ol = 16777216), Fn(e), (ol = t))
          : Fn(e));
      break;
    default:
      Fn(e);
  }
}
function Dm(e) {
  var t = e.alternate;
  if (t !== null && ((e = t.child), e !== null)) {
    t.child = null;
    do (t = e.sibling), (e.sibling = null), (e = t);
    while (e !== null);
  }
}
function Wa(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (pe = a), Um(a, e);
      }
    Dm(e);
  }
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) zm(e), (e = e.sibling);
}
function zm(e) {
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      Wa(e), e.flags & 2048 && mn(9, e, e.return);
      break;
    case 3:
      Wa(e);
      break;
    case 12:
      Wa(e);
      break;
    case 22:
      var t = e.stateNode;
      e.memoizedState !== null &&
      t._visibility & 4 &&
      (e.return === null || e.return.tag !== 13)
        ? ((t._visibility &= -5), Mi(e))
        : Wa(e);
      break;
    default:
      Wa(e);
  }
}
function Mi(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (pe = a), Um(a, e);
      }
    Dm(e);
  }
  for (e = e.child; e !== null; ) {
    switch (((t = e), t.tag)) {
      case 0:
      case 11:
      case 15:
        mn(8, t, t.return), Mi(t);
        break;
      case 22:
        (n = t.stateNode), n._visibility & 4 && ((n._visibility &= -5), Mi(t));
        break;
      default:
        Mi(t);
    }
    e = e.sibling;
  }
}
function Um(e, t) {
  for (; pe !== null; ) {
    var n = pe;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        mn(8, n, t);
        break;
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var a = n.memoizedState.cachePool.pool;
          a != null && a.refCount++;
        }
        break;
      case 24:
        Wl(n.memoizedState.cache);
    }
    if (((a = n.child), a !== null)) (a.return = n), (pe = a);
    else
      e: for (n = e; pe !== null; ) {
        a = pe;
        var l = a.sibling,
          i = a.return;
        if ((Nm(a), a === n)) {
          pe = null;
          break e;
        }
        if (l !== null) {
          (l.return = i), (pe = l);
          break e;
        }
        pe = i;
      }
  }
}
function ry(e, t, n, a) {
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
function et(e, t, n, a) {
  return new ry(e, t, n, a);
}
function Lo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
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
function Lm(e, t) {
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
function _i(e, t, n, a, l, i) {
  var s = 0;
  if (((a = e), typeof e == 'function')) Lo(e) && (s = 1);
  else if (typeof e == 'string')
    s = Qy(e, n, pt.current)
      ? 26
      : e === 'html' || e === 'head' || e === 'body'
        ? 27
        : 5;
  else
    e: switch (e) {
      case la:
        return Ln(n.children, l, i, t);
      case Md:
        (s = 8), (l |= 24);
        break;
      case Gr:
        return (
          (e = et(12, n, t, l | 2)), (e.elementType = Gr), (e.lanes = i), e
        );
      case Xr:
        return (e = et(13, n, t, l)), (e.elementType = Xr), (e.lanes = i), e;
      case Qr:
        return (e = et(19, n, t, l)), (e.elementType = Qr), (e.lanes = i), e;
      case Hd:
        return Mm(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case zp:
            case zt:
              s = 10;
              break e;
            case _d:
              s = 9;
              break e;
            case eo:
              s = 11;
              break e;
            case to:
              s = 14;
              break e;
            case Jt:
              (s = 16), (a = null);
              break e;
          }
        (s = 29),
          (n = Error(O(130, e === null ? 'null' : typeof e, ''))),
          (a = null);
    }
  return (
    (t = et(s, n, t, l)), (t.elementType = e), (t.type = a), (t.lanes = i), t
  );
}
function Ln(e, t, n, a) {
  return (e = et(7, e, a, t)), (e.lanes = n), e;
}
function Mm(e, t, n, a) {
  (e = et(22, e, a, t)), (e.elementType = Hd), (e.lanes = n);
  var l = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null,
    _current: null,
    detach: function () {
      var i = l._current;
      if (i === null) throw Error(O(456));
      if (!(l._pendingVisibility & 2)) {
        var s = dn(i, 2);
        s !== null && ((l._pendingVisibility |= 2), Ce(s, i, 2));
      }
    },
    attach: function () {
      var i = l._current;
      if (i === null) throw Error(O(456));
      if (l._pendingVisibility & 2) {
        var s = dn(i, 2);
        s !== null && ((l._pendingVisibility &= -3), Ce(s, i, 2));
      }
    },
  };
  return (e.stateNode = l), e;
}
function Nr(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function jr(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tt(e) {
  e.flags |= 4;
}
function of(e, t) {
  if (t.type !== 'stylesheet' || t.state.loading & 4) e.flags &= -16777217;
  else if (((e.flags |= 16777216), !ng(t))) {
    if (
      ((t = at.current),
      t !== null &&
        (($ & 4194176) === $
          ? vt !== null
          : (($ & 62914560) !== $ && !($ & 536870912)) || t !== vt))
    )
      throw ((gl = iu), Sh);
    e.flags |= 8192;
  }
}
function bi(e, t) {
  t !== null && (e.flags |= 4),
    e.flags & 16384 &&
      ((t = e.tag !== 22 ? Gd() : 536870912), (e.lanes |= t), (Ca |= t));
}
function Pa(e, t) {
  if (!G)
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
function ae(e) {
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
function uy(e, t, n) {
  var a = t.pendingProps;
  switch ((mo(t), t.tag)) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ae(t), null;
    case 1:
      return ae(t), null;
    case 3:
      return (
        (n = t.stateNode),
        (a = null),
        e !== null && (a = e.memoizedState.cache),
        t.memoizedState.cache !== a && (t.flags |= 2048),
        Ht(he),
        Na(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ja(t)
            ? Tt(t)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (Ou(st), (st = null)))),
        ae(t),
        null
      );
    case 26:
      return (
        (n = t.memoizedState),
        e === null
          ? (Tt(t),
            n !== null ? (ae(t), of(t, n)) : (ae(t), (t.flags &= -16777217)))
          : n
            ? n !== e.memoizedState
              ? (Tt(t), ae(t), of(t, n))
              : (ae(t), (t.flags &= -16777217))
            : (e.memoizedProps !== a && Tt(t), ae(t), (t.flags &= -16777217)),
        null
      );
    case 27:
      Zi(t), (n = an.current);
      var l = t.type;
      if (e !== null && t.stateNode != null) e.memoizedProps !== a && Tt(t);
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(O(166));
          return ae(t), null;
        }
        (e = pt.current),
          Ja(t) ? Bc(t) : ((e = Im(l, a, n)), (t.stateNode = e), Tt(t));
      }
      return ae(t), null;
    case 5:
      if ((Zi(t), (n = t.type), e !== null && t.stateNode != null))
        e.memoizedProps !== a && Tt(t);
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(O(166));
          return ae(t), null;
        }
        if (((e = pt.current), Ja(t))) Bc(t);
        else {
          switch (((l = ms(an.current)), e)) {
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
          (e[je] = t), (e[_e] = a);
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
          e: switch ((we(e, n, a), n)) {
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
          e && Tt(t);
        }
      }
      return ae(t), (t.flags &= -16777217), null;
    case 6:
      if (e && t.stateNode != null) e.memoizedProps !== a && Tt(t);
      else {
        if (typeof a != 'string' && t.stateNode === null) throw Error(O(166));
        if (((e = an.current), Ja(t))) {
          if (
            ((e = t.stateNode),
            (n = t.memoizedProps),
            (a = null),
            (l = Re),
            l !== null)
          )
            switch (l.tag) {
              case 27:
              case 5:
                a = l.memoizedProps;
            }
          (e[je] = t),
            (e = !!(
              e.nodeValue === n ||
              (a !== null && a.suppressHydrationWarning === !0) ||
              Fm(e.nodeValue, n)
            )),
            e || Bn(t);
        } else (e = ms(e).createTextNode(a)), (e[je] = t), (t.stateNode = e);
      }
      return ae(t), null;
    case 13:
      if (
        ((a = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (((l = Ja(t)), a !== null && a.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(O(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(O(317));
            l[je] = t;
          } else
            Fl(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (l = !1);
        } else st !== null && (Ou(st), (st = null)), (l = !0);
        if (!l) return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
      }
      if ((Mt(t), t.flags & 128)) return (t.lanes = n), t;
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
        bi(t, t.updateQueue),
        ae(t),
        null
      );
    case 4:
      return Na(), e === null && ko(t.stateNode.containerInfo), ae(t), null;
    case 10:
      return Ht(t.type), ae(t), null;
    case 19:
      if ((be(me), (l = t.memoizedState), l === null)) return ae(t), null;
      if (((a = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (a) Pa(l, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ns(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pa(l, !1),
                    e = i.updateQueue,
                    t.updateQueue = e,
                    bi(t, e),
                    t.subtreeFlags = 0,
                    e = n,
                    n = t.child;
                  n !== null;

                )
                  Lm(n, e), (n = n.sibling);
                return te(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            yt() > os &&
            ((t.flags |= 128), (a = !0), Pa(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!a)
          if (((e = ns(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (e = e.updateQueue),
              (t.updateQueue = e),
              bi(t, e),
              Pa(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !i.alternate && !G)
            )
              return ae(t), null;
          } else
            2 * yt() - l.renderingStartTime > os &&
              n !== 536870912 &&
              ((t.flags |= 128), (a = !0), Pa(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = yt()),
          (t.sibling = null),
          (e = me.current),
          te(me, a ? (e & 1) | 2 : e & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        Mt(t),
        go(),
        (a = t.memoizedState !== null),
        e !== null
          ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
          : a && (t.flags |= 8192),
        a
          ? n & 536870912 &&
            !(t.flags & 128) &&
            (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        (n = t.updateQueue),
        n !== null && bi(t, n.retryQueue),
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
        e !== null && be(Un),
        null
      );
    case 24:
      return (
        (n = null),
        e !== null && (n = e.memoizedState.cache),
        t.memoizedState.cache !== n && (t.flags |= 2048),
        Ht(he),
        ae(t),
        null
      );
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function oy(e, t) {
  switch ((mo(t), t.tag)) {
    case 1:
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ht(he),
        Na(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 26:
    case 27:
    case 5:
      return Zi(t), null;
    case 13:
      if ((Mt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        Fl();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return be(me), null;
    case 4:
      return Na(), null;
    case 10:
      return Ht(t.type), null;
    case 22:
    case 23:
      return (
        Mt(t),
        go(),
        e !== null && be(Un),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 24:
      return Ht(he), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function _m(e, t) {
  switch ((mo(t), t.tag)) {
    case 3:
      Ht(he), Na();
      break;
    case 26:
    case 27:
    case 5:
      Zi(t);
      break;
    case 4:
      Na();
      break;
    case 13:
      Mt(t);
      break;
    case 19:
      be(me);
      break;
    case 10:
      Ht(t.type);
      break;
    case 22:
    case 23:
      Mt(t), go(), e !== null && be(Un);
      break;
    case 24:
      Ht(he);
  }
}
var cy = {
    getCacheForType: function (e) {
      var t = Oe(he),
        n = t.data.get(e);
      return n === void 0 && ((n = e()), t.data.set(e, n)), n;
    },
  },
  fy = typeof WeakMap == 'function' ? WeakMap : Map,
  ie = 0,
  W = null,
  Y = null,
  $ = 0,
  F = 0,
  qe = null,
  At = !1,
  Ha = !1,
  Mo = !1,
  Vt = 0,
  re = 0,
  gn = 0,
  Mn = 0,
  _o = 0,
  tt = 0,
  Ca = 0,
  wl = null,
  mt = null,
  Eu = !1,
  Ho = 0,
  os = 1 / 0,
  cs = null,
  un = null,
  xi = !1,
  On = null,
  Nl = 0,
  wu = 0,
  Nu = null,
  jl = 0,
  ju = null;
function $e() {
  if (ie & 2 && $ !== 0) return $ & -$;
  if (B.T !== null) {
    var e = Ra;
    return e !== 0 ? e : qo();
  }
  return Zd();
}
function Hm() {
  tt === 0 && (tt = !($ & 536870912) || G ? $d() : 536870912);
  var e = at.current;
  return e !== null && (e.flags |= 32), tt;
}
function Ce(e, t, n) {
  ((e === W && F === 2) || e.cancelPendingCommit !== null) &&
    (Da(e, 0), Ct(e, $, tt, !1)),
    Zl(e, n),
    (!(ie & 2) || e !== W) &&
      (e === W && (!(ie & 2) && (Mn |= n), re === 4 && Ct(e, $, tt, !1)),
      St(e));
}
function Bm(e, t, n) {
  if (ie & 6) throw Error(O(327));
  var a = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || Kl(e, t),
    l = a ? my(e, t) : Or(e, t, !0),
    i = a;
  do {
    if (l === 0) {
      Ha && !a && Ct(e, t, 0, !1);
      break;
    } else if (l === 6) Ct(e, t, 0, !At);
    else {
      if (((n = e.current.alternate), i && !dy(n))) {
        (l = Or(e, t, !1)), (i = !1);
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
            l = wl;
            var u = r.current.memoizedState.isDehydrated;
            if ((u && (Da(r, s).flags |= 256), (s = Or(r, s, !1)), s !== 2)) {
              if (Mo && !u) {
                (r.errorRecoveryDisabledLanes |= i), (Mn |= i), (l = 4);
                break e;
              }
              (i = mt), (mt = l), i !== null && Ou(i);
            }
            l = s;
          }
          if (((i = !1), l !== 2)) continue;
        }
      }
      if (l === 1) {
        Da(e, 0), Ct(e, t, 0, !0);
        break;
      }
      e: {
        switch (((a = e), l)) {
          case 0:
          case 1:
            throw Error(O(345));
          case 4:
            if ((t & 4194176) === t) {
              Ct(a, t, tt, !At);
              break e;
            }
            break;
          case 2:
            mt = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(O(329));
        }
        if (
          ((a.finishedWork = n),
          (a.finishedLanes = t),
          (t & 62914560) === t && ((i = Ho + 300 - yt()), 10 < i))
        ) {
          if ((Ct(a, t, tt, !At), Cs(a, 0) !== 0)) break e;
          a.timeoutHandle = Pm(
            cf.bind(null, a, n, mt, cs, Eu, t, tt, Mn, Ca, At, 2, -0, 0),
            i
          );
          break e;
        }
        cf(a, n, mt, cs, Eu, t, tt, Mn, Ca, At, 0, -0, 0);
      }
    }
    break;
  } while (!0);
  St(e);
}
function Ou(e) {
  mt === null ? (mt = e) : mt.push.apply(mt, e);
}
function cf(e, t, n, a, l, i, s, r, u, o, c, h, f) {
  var p = t.subtreeFlags;
  if (
    (p & 8192 || (p & 16785408) === 16785408) &&
    ((Hl = { stylesheets: null, count: 0, unsuspend: Ky }),
    Cm(t),
    (t = Jy()),
    t !== null)
  ) {
    (e.cancelPendingCommit = t(df.bind(null, e, n, a, l, s, r, u, 1, h, f))),
      Ct(e, i, s, !o);
    return;
  }
  df(e, n, a, l, s, r, u, c, h, f);
}
function dy(e) {
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
          if (!Xe(i(), l)) return !1;
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
function Ct(e, t, n, a) {
  (t &= ~_o),
    (t &= ~Mn),
    (e.suspendedLanes |= t),
    (e.pingedLanes &= ~t),
    a && (e.warmLanes |= t),
    (a = e.expirationTimes);
  for (var l = t; 0 < l; ) {
    var i = 31 - Ve(l),
      s = 1 << i;
    (a[i] = -1), (l &= ~s);
  }
  n !== 0 && Xd(e, n, t);
}
function ks() {
  return ie & 6 ? !0 : (ti(0), !1);
}
function Bo() {
  if (Y !== null) {
    if (F === 0) var e = Y.return;
    else (e = Y), (_t = Jn = null), Eo(e), (ba = null), (Ul = 0), (e = Y);
    for (; e !== null; ) _m(e.alternate, e), (e = e.return);
    Y = null;
  }
}
function Da(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  n !== -1 && ((e.timeoutHandle = -1), Dy(n)),
    (n = e.cancelPendingCommit),
    n !== null && ((e.cancelPendingCommit = null), n()),
    Bo(),
    (W = e),
    (Y = n = rn(e.current, null)),
    ($ = t),
    (F = 0),
    (qe = null),
    (At = !1),
    (Ha = Kl(e, t)),
    (Mo = !1),
    (Ca = tt = _o = Mn = gn = re = 0),
    (mt = wl = null),
    (Eu = !1),
    t & 8 && (t |= t & 32);
  var a = e.entangledLanes;
  if (a !== 0)
    for (e = e.entanglements, a &= t; 0 < a; ) {
      var l = 31 - Ve(a),
        i = 1 << l;
      (t |= e[l]), (a &= ~i);
    }
  return (Vt = t), Ls(), n;
}
function qm(e, t) {
  (k = null),
    (B.H = bt),
    t === ml
      ? ((t = Yc()), (F = 3))
      : t === Sh
        ? ((t = Yc()), (F = 4))
        : (F =
            t === cm
              ? 8
              : t !== null &&
                  typeof t == 'object' &&
                  typeof t.then == 'function'
                ? 6
                : 1),
    (qe = t),
    Y === null && ((re = 1), ss(e, Ie(t, e.current)));
}
function km() {
  var e = B.H;
  return (B.H = bt), e === null ? bt : e;
}
function Ym() {
  var e = B.A;
  return (B.A = cy), e;
}
function Tu() {
  (re = 4),
    At || (($ & 4194176) !== $ && at.current !== null) || (Ha = !0),
    (!(gn & 134217727) && !(Mn & 134217727)) || W === null || Ct(W, $, tt, !1);
}
function Or(e, t, n) {
  var a = ie;
  ie |= 2;
  var l = km(),
    i = Ym();
  (W !== e || $ !== t) && ((cs = null), Da(e, t)), (t = !1);
  var s = re;
  e: do
    try {
      if (F !== 0 && Y !== null) {
        var r = Y,
          u = qe;
        switch (F) {
          case 8:
            Bo(), (s = 6);
            break e;
          case 3:
          case 2:
          case 6:
            at.current === null && (t = !0);
            var o = F;
            if (((F = 0), (qe = null), ma(e, r, u, o), n && Ha)) {
              s = 0;
              break e;
            }
            break;
          default:
            (o = F), (F = 0), (qe = null), ma(e, r, u, o);
        }
      }
      hy(), (s = re);
      break;
    } catch (c) {
      qm(e, c);
    }
  while (!0);
  return (
    t && e.shellSuspendCounter++,
    (_t = Jn = null),
    (ie = a),
    (B.H = l),
    (B.A = i),
    Y === null && ((W = null), ($ = 0), Ls()),
    s
  );
}
function hy() {
  for (; Y !== null; ) Vm(Y);
}
function my(e, t) {
  var n = ie;
  ie |= 2;
  var a = km(),
    l = Ym();
  W !== e || $ !== t
    ? ((cs = null), (os = yt() + 500), Da(e, t))
    : (Ha = Kl(e, t));
  e: do
    try {
      if (F !== 0 && Y !== null) {
        t = Y;
        var i = qe;
        t: switch (F) {
          case 1:
            (F = 0), (qe = null), ma(e, t, i, 1);
            break;
          case 2:
            if (kc(i)) {
              (F = 0), (qe = null), ff(t);
              break;
            }
            (t = function () {
              F === 2 && W === e && (F = 7), St(e);
            }),
              i.then(t, t);
            break e;
          case 3:
            F = 7;
            break e;
          case 4:
            F = 5;
            break e;
          case 7:
            kc(i)
              ? ((F = 0), (qe = null), ff(t))
              : ((F = 0), (qe = null), ma(e, t, i, 7));
            break;
          case 5:
            var s = null;
            switch (Y.tag) {
              case 26:
                s = Y.memoizedState;
              case 5:
              case 27:
                var r = Y;
                if (!s || ng(s)) {
                  (F = 0), (qe = null);
                  var u = r.sibling;
                  if (u !== null) Y = u;
                  else {
                    var o = r.return;
                    o !== null ? ((Y = o), Ys(o)) : (Y = null);
                  }
                  break t;
                }
            }
            (F = 0), (qe = null), ma(e, t, i, 5);
            break;
          case 6:
            (F = 0), (qe = null), ma(e, t, i, 6);
            break;
          case 8:
            Bo(), (re = 6);
            break e;
          default:
            throw Error(O(462));
        }
      }
      gy();
      break;
    } catch (c) {
      qm(e, c);
    }
  while (!0);
  return (
    (_t = Jn = null),
    (B.H = a),
    (B.A = l),
    (ie = n),
    Y !== null ? 0 : ((W = null), ($ = 0), Ls(), re)
  );
}
function gy() {
  for (; Y !== null && !Hp(); ) Vm(Y);
}
function Vm(e) {
  var t = gm(e.alternate, e, Vt);
  (e.memoizedProps = e.pendingProps), t === null ? Ys(e) : (Y = t);
}
function ff(e) {
  var t = e,
    n = t.alternate;
  switch (t.tag) {
    case 15:
    case 0:
      t = tf(n, t, t.pendingProps, t.type, void 0, $);
      break;
    case 11:
      t = tf(n, t, t.pendingProps, t.type.render, t.ref, $);
      break;
    case 5:
      Eo(t);
    default:
      _m(n, t), (t = Y = Lm(t, Vt)), (t = gm(n, t, Vt));
  }
  (e.memoizedProps = e.pendingProps), t === null ? Ys(e) : (Y = t);
}
function ma(e, t, n, a) {
  (_t = Jn = null), Eo(t), (ba = null), (Ul = 0);
  var l = t.return;
  try {
    if (ay(e, l, t, n, $)) {
      (re = 1), ss(e, Ie(n, e.current)), (Y = null);
      return;
    }
  } catch (i) {
    if (l !== null) throw ((Y = l), i);
    (re = 1), ss(e, Ie(n, e.current)), (Y = null);
    return;
  }
  t.flags & 32768
    ? (G || a === 1
        ? (e = !0)
        : Ha || $ & 536870912
          ? (e = !1)
          : ((At = e = !0),
            (a === 2 || a === 3 || a === 6) &&
              ((a = at.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
      $m(t, e))
    : Ys(t);
}
function Ys(e) {
  var t = e;
  do {
    if (t.flags & 32768) {
      $m(t, At);
      return;
    }
    e = t.return;
    var n = uy(t.alternate, t, Vt);
    if (n !== null) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function $m(e, t) {
  do {
    var n = oy(e.alternate, e);
    if (n !== null) {
      (n.flags &= 32767), (Y = n);
      return;
    }
    if (
      ((n = e.return),
      n !== null &&
        ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
      !t && ((e = e.sibling), e !== null))
    ) {
      Y = e;
      return;
    }
    Y = e = n;
  } while (e !== null);
  (re = 6), (Y = null);
}
function df(e, t, n, a, l, i, s, r, u, o) {
  var c = B.T,
    h = P.p;
  try {
    (P.p = 2), (B.T = null), py(e, t, n, a, h, l, i, s, r, u, o);
  } finally {
    (B.T = c), (P.p = h);
  }
}
function py(e, t, n, a, l, i, s, r) {
  do wa();
  while (On !== null);
  if (ie & 6) throw Error(O(327));
  var u = e.finishedWork;
  if (((a = e.finishedLanes), u === null)) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), u === e.current))
    throw Error(O(177));
  (e.callbackNode = null),
    (e.callbackPriority = 0),
    (e.cancelPendingCommit = null);
  var o = u.lanes | u.childLanes;
  if (
    ((o |= co),
    Zp(e, a, o, i, s, r),
    e === W && ((Y = W = null), ($ = 0)),
    (!(u.subtreeFlags & 10256) && !(u.flags & 10256)) ||
      xi ||
      ((xi = !0),
      (wu = o),
      (Nu = n),
      xy(Ji, function () {
        return wa(), null;
      })),
    (n = (u.flags & 15990) !== 0),
    u.subtreeFlags & 15990 || n
      ? ((n = B.T),
        (B.T = null),
        (i = P.p),
        (P.p = 2),
        (s = ie),
        (ie |= 4),
        iy(e, u),
        Tm(u, e),
        k0(Du, e.containerInfo),
        (vs = !!Cu),
        (Du = Cu = null),
        (e.current = u),
        wm(e, u.alternate, u),
        Bp(),
        (ie = s),
        (P.p = i),
        (B.T = n))
      : (e.current = u),
    xi ? ((xi = !1), (On = e), (Nl = a)) : Gm(e, o),
    (o = e.pendingLanes),
    o === 0 && (un = null),
    $p(u.stateNode),
    St(e),
    t !== null)
  )
    for (l = e.onRecoverableError, u = 0; u < t.length; u++)
      (o = t[u]), l(o.value, { componentStack: o.stack });
  return (
    Nl & 3 && wa(),
    (o = e.pendingLanes),
    a & 4194218 && o & 42 ? (e === ju ? jl++ : ((jl = 0), (ju = e))) : (jl = 0),
    ti(0),
    null
  );
}
function Gm(e, t) {
  (e.pooledCacheLanes &= t) === 0 &&
    ((t = e.pooledCache), t != null && ((e.pooledCache = null), Wl(t)));
}
function wa() {
  if (On !== null) {
    var e = On,
      t = wu;
    wu = 0;
    var n = Kd(Nl),
      a = B.T,
      l = P.p;
    try {
      if (((P.p = 32 > n ? 32 : n), (B.T = null), On === null)) var i = !1;
      else {
        (n = Nu), (Nu = null);
        var s = On,
          r = Nl;
        if (((On = null), (Nl = 0), ie & 6)) throw Error(O(331));
        var u = ie;
        if (
          ((ie |= 4),
          zm(s.current),
          Am(s, s.current, r, n),
          (ie = u),
          ti(0, !1),
          Ye && typeof Ye.onPostCommitFiberRoot == 'function')
        )
          try {
            Ye.onPostCommitFiberRoot(Ql, s);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (P.p = l), (B.T = a), Gm(e, t);
    }
  }
  return !1;
}
function hf(e, t, n) {
  (t = Ie(n, t)),
    (t = du(e.stateNode, t, 2)),
    (e = sn(e, t, 2)),
    e !== null && (Zl(e, 2), St(e));
}
function J(e, t, n) {
  if (e.tag === 3) hf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof a.componentDidCatch == 'function' &&
            (un === null || !un.has(a)))
        ) {
          (e = Ie(n, e)),
            (n = um(2)),
            (a = sn(t, n, 2)),
            a !== null && (om(n, a, t, e), Zl(a, 2), St(a));
          break;
        }
      }
      t = t.return;
    }
}
function Tr(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new fy();
    var l = new Set();
    a.set(t, l);
  } else (l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l));
  l.has(n) || ((Mo = !0), l.add(n), (e = yy.bind(null, e, t, n)), t.then(e, e));
}
function yy(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t),
    (e.pingedLanes |= e.suspendedLanes & n),
    (e.warmLanes &= ~n),
    W === e &&
      ($ & n) === n &&
      (re === 4 || (re === 3 && ($ & 62914560) === $ && 300 > yt() - Ho)
        ? !(ie & 2) && Da(e, 0)
        : (_o |= n),
      Ca === $ && (Ca = 0)),
    St(e);
}
function Xm(e, t) {
  t === 0 && (t = Gd()), (e = dn(e, t)), e !== null && (Zl(e, t), St(e));
}
function vy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xm(e, n);
}
function by(e, t) {
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
      throw Error(O(314));
  }
  a !== null && a.delete(t), Xm(e, n);
}
function xy(e, t) {
  return no(e, t);
}
var fs = null,
  aa = null,
  Ru = !1,
  ds = !1,
  Rr = !1,
  _n = 0;
function St(e) {
  e !== aa &&
    e.next === null &&
    (aa === null ? (fs = aa = e) : (aa = aa.next = e)),
    (ds = !0),
    Ru || ((Ru = !0), Ey(Sy));
}
function ti(e, t) {
  if (!Rr && ds) {
    Rr = !0;
    do
      for (var n = !1, a = fs; a !== null; ) {
        if (e !== 0) {
          var l = a.pendingLanes;
          if (l === 0) var i = 0;
          else {
            var s = a.suspendedLanes,
              r = a.pingedLanes;
            (i = (1 << (31 - Ve(42 | e) + 1)) - 1),
              (i &= l & ~(s & ~r)),
              (i = i & 201326677 ? (i & 201326677) | 1 : i ? i | 2 : 0);
          }
          i !== 0 && ((n = !0), mf(a, i));
        } else
          (i = $),
            (i = Cs(a, a === W ? i : 0)),
            !(i & 3) || Kl(a, i) || ((n = !0), mf(a, i));
        a = a.next;
      }
    while (n);
    Rr = !1;
  }
}
function Sy() {
  ds = Ru = !1;
  var e = 0;
  _n !== 0 && (Cy() && (e = _n), (_n = 0));
  for (var t = yt(), n = null, a = fs; a !== null; ) {
    var l = a.next,
      i = Qm(a, t);
    i === 0
      ? ((a.next = null),
        n === null ? (fs = l) : (n.next = l),
        l === null && (aa = n))
      : ((n = a), (e !== 0 || i & 3) && (ds = !0)),
      (a = l);
  }
  ti(e);
}
function Qm(e, t) {
  for (
    var n = e.suspendedLanes,
      a = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes & -62914561;
    0 < i;

  ) {
    var s = 31 - Ve(i),
      r = 1 << s,
      u = l[s];
    u === -1
      ? (!(r & n) || r & a) && (l[s] = Kp(r, t))
      : u <= t && (e.expiredLanes |= r),
      (i &= ~r);
  }
  if (
    ((t = W),
    (n = $),
    (n = Cs(e, e === t ? n : 0)),
    (a = e.callbackNode),
    n === 0 || (e === t && F === 2) || e.cancelPendingCommit !== null)
  )
    return (
      a !== null && a !== null && lr(a),
      (e.callbackNode = null),
      (e.callbackPriority = 0)
    );
  if (!(n & 3) || Kl(e, n)) {
    if (((t = n & -n), t === e.callbackPriority)) return t;
    switch ((a !== null && lr(a), Kd(n))) {
      case 2:
      case 8:
        n = Yd;
        break;
      case 32:
        n = Ji;
        break;
      case 268435456:
        n = Vd;
        break;
      default:
        n = Ji;
    }
    return (
      (a = Km.bind(null, e)),
      (n = no(n, a)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    );
  }
  return (
    a !== null && a !== null && lr(a),
    (e.callbackPriority = 2),
    (e.callbackNode = null),
    2
  );
}
function Km(e, t) {
  var n = e.callbackNode;
  if (wa() && e.callbackNode !== n) return null;
  var a = $;
  return (
    (a = Cs(e, e === W ? a : 0)),
    a === 0
      ? null
      : (Bm(e, a, t),
        Qm(e, yt()),
        e.callbackNode != null && e.callbackNode === n
          ? Km.bind(null, e)
          : null)
  );
}
function mf(e, t) {
  if (wa()) return null;
  Bm(e, t, !0);
}
function Ey(e) {
  zy(function () {
    ie & 6 ? no(kd, e) : e();
  });
}
function qo() {
  return _n === 0 && (_n = $d()), _n;
}
function gf(e) {
  return e == null || typeof e == 'symbol' || typeof e == 'boolean'
    ? null
    : typeof e == 'function'
      ? e
      : Ai('' + e);
}
function pf(e, t) {
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
function wy(e, t, n, a, l) {
  if (t === 'submit' && n && n.stateNode === l) {
    var i = gf((l[_e] || null).action),
      s = a.submitter;
    s &&
      ((t = (t = s[_e] || null)
        ? gf(t.formAction)
        : s.getAttribute('formAction')),
      t !== null && ((i = t), (s = null)));
    var r = new Ds('action', 'action', null, a, l);
    e.push({
      event: r,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (a.defaultPrevented) {
              if (_n !== 0) {
                var u = s ? pf(l, s) : new FormData(l);
                cu(
                  n,
                  { pending: !0, data: u, method: l.method, action: i },
                  null,
                  u
                );
              }
            } else
              typeof i == 'function' &&
                (r.preventDefault(),
                (u = s ? pf(l, s) : new FormData(l)),
                cu(
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
for (var Ar = 0; Ar < _c.length; Ar++) {
  var Cr = _c[Ar],
    Ny = Cr.toLowerCase(),
    jy = Cr[0].toUpperCase() + Cr.slice(1);
  ot(Ny, 'on' + jy);
}
ot(mh, 'onAnimationEnd');
ot(gh, 'onAnimationIteration');
ot(ph, 'onAnimationStart');
ot('dblclick', 'onDoubleClick');
ot('focusin', 'onFocus');
ot('focusout', 'onBlur');
ot(V0, 'onTransitionRun');
ot($0, 'onTransitionStart');
ot(G0, 'onTransitionCancel');
ot(yh, 'onTransitionEnd');
ja('onMouseEnter', ['mouseout', 'mouseover']);
ja('onMouseLeave', ['mouseout', 'mouseover']);
ja('onPointerEnter', ['pointerout', 'pointerover']);
ja('onPointerLeave', ['pointerout', 'pointerover']);
Gn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Gn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Gn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Gn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Gn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Gn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ml =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Oy = new Set(
    'beforetoggle cancel close invalid load scroll scrollend toggle'
      .split(' ')
      .concat(Ml)
  );
function Zm(e, t) {
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
            is(c);
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
            is(c);
          }
          (l.currentTarget = null), (i = u);
        }
    }
  }
}
function V(e, t) {
  var n = t[Wr];
  n === void 0 && (n = t[Wr] = new Set());
  var a = e + '__bubble';
  n.has(a) || (Jm(t, e, 2, !1), n.add(a));
}
function Dr(e, t, n) {
  var a = 0;
  t && (a |= 4), Jm(n, e, a, t);
}
var Si = '_reactListening' + Math.random().toString(36).slice(2);
function ko(e) {
  if (!e[Si]) {
    (e[Si] = !0),
      Jd.forEach(function (n) {
        n !== 'selectionchange' && (Oy.has(n) || Dr(n, !1, e), Dr(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || ((t[Si] = !0), Dr('selectionchange', !1, t));
  }
}
function Jm(e, t, n, a) {
  switch (rg(t)) {
    case 2:
      var l = Py;
      break;
    case 8:
      l = Iy;
      break;
    default:
      l = Go;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !tu ||
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
function zr(e, t, n, a, l) {
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
          if (((s = Tn(r)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6 || u === 26 || u === 27)) {
            a = i = s;
            continue e;
          }
          r = r.parentNode;
        }
      }
      a = a.return;
    }
  ah(function () {
    var o = i,
      c = io(n),
      h = [];
    e: {
      var f = vh.get(e);
      if (f !== void 0) {
        var p = Ds,
          y = e;
        switch (e) {
          case 'keypress':
            if (Di(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            p = b0;
            break;
          case 'focusin':
            (y = 'focus'), (p = or);
            break;
          case 'focusout':
            (y = 'blur'), (p = or);
            break;
          case 'beforeblur':
          case 'afterblur':
            p = or;
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
            p = Nc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = r0;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = E0;
            break;
          case mh:
          case gh:
          case ph:
            p = c0;
            break;
          case yh:
            p = N0;
            break;
          case 'scroll':
          case 'scrollend':
            p = i0;
            break;
          case 'wheel':
            p = O0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            p = d0;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = Oc;
            break;
          case 'toggle':
          case 'beforetoggle':
            p = R0;
        }
        var x = (t & 4) !== 0,
          v = !x && (e === 'scroll' || e === 'scrollend'),
          m = x ? (f !== null ? f + 'Capture' : null) : f;
        x = [];
        for (var g = o, b; g !== null; ) {
          var S = g;
          if (
            ((b = S.stateNode),
            (S = S.tag),
            (S !== 5 && S !== 26 && S !== 27) ||
              b === null ||
              m === null ||
              ((S = Al(g, m)), S != null && x.push(_l(g, S, b))),
            v)
          )
            break;
          g = g.return;
        }
        0 < x.length &&
          ((f = new p(f, y, null, n, c)), h.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== eu &&
            (y = n.relatedTarget || n.fromElement) &&
            (Tn(y) || y[Ma]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          p
            ? ((y = n.relatedTarget || n.toElement),
              (p = o),
              (y = y ? Tn(y) : null),
              y !== null &&
                ((v = La(y)),
                (x = y.tag),
                y !== v || (x !== 5 && x !== 27 && x !== 6)) &&
                (y = null))
            : ((p = null), (y = o)),
          p !== y)
        ) {
          if (
            ((x = Nc),
            (S = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Oc),
              (S = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (g = 'pointer')),
            (v = p == null ? f : ul(p)),
            (b = y == null ? f : ul(y)),
            (f = new x(S, g + 'leave', p, n, c)),
            (f.target = v),
            (f.relatedTarget = b),
            (S = null),
            Tn(c) === o &&
              ((x = new x(m, g + 'enter', y, n, c)),
              (x.target = b),
              (x.relatedTarget = v),
              (S = x)),
            (v = S),
            p && y)
          )
            t: {
              for (x = p, m = y, g = 0, b = x; b; b = Wn(b)) g++;
              for (b = 0, S = m; S; S = Wn(S)) b++;
              for (; 0 < g - b; ) (x = Wn(x)), g--;
              for (; 0 < b - g; ) (m = Wn(m)), b--;
              for (; g--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = Wn(x)), (m = Wn(m));
              }
              x = null;
            }
          else x = null;
          p !== null && yf(h, f, p, x, !1),
            y !== null && v !== null && yf(h, v, y, x, !0);
        }
      }
      e: {
        if (
          ((f = o ? ul(o) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && f.type === 'file'))
        )
          var w = Cc;
        else if (Ac(f))
          if (oh) w = B0;
          else {
            w = _0;
            var j = M0;
          }
        else
          (p = f.nodeName),
            !p ||
            p.toLowerCase() !== 'input' ||
            (f.type !== 'checkbox' && f.type !== 'radio')
              ? o && lo(o.elementType) && (w = Cc)
              : (w = H0);
        if (w && (w = w(e, o))) {
          uh(h, w, n, c);
          break e;
        }
        j && j(e, f, o),
          e === 'focusout' &&
            o &&
            f.type === 'number' &&
            o.memoizedProps.value != null &&
            Ir(f, 'number', f.value);
      }
      switch (((j = o ? ul(o) : window), e)) {
        case 'focusin':
          (Ac(j) || j.contentEditable === 'true') &&
            ((ua = j), (nu = o), (hl = null));
          break;
        case 'focusout':
          hl = nu = ua = null;
          break;
        case 'mousedown':
          au = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (au = !1), Mc(h, n, c);
          break;
        case 'selectionchange':
          if (Y0) break;
        case 'keydown':
        case 'keyup':
          Mc(h, n, c);
      }
      var T;
      if (uo)
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
        ra
          ? sh(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (ih &&
          n.locale !== 'ko' &&
          (ra || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && ra && (T = lh())
            : ((nn = c),
              (so = 'value' in nn ? nn.value : nn.textContent),
              (ra = !0))),
        (j = hs(o, R)),
        0 < j.length &&
          ((R = new jc(R, e, null, n, c)),
          h.push({ event: R, listeners: j }),
          T ? (R.data = T) : ((T = rh(n)), T !== null && (R.data = T)))),
        (T = C0 ? D0(e, n) : z0(e, n)) &&
          ((R = hs(o, 'onBeforeInput')),
          0 < R.length &&
            ((j = new jc('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: j, listeners: R }),
            (j.data = T))),
        wy(h, e, o, n, c);
    }
    Zm(h, t);
  });
}
function _l(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hs(e, t) {
  for (var n = t + 'Capture', a = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l = l.tag),
      (l !== 5 && l !== 26 && l !== 27) ||
        i === null ||
        ((l = Al(e, n)),
        l != null && a.unshift(_l(e, l, i)),
        (l = Al(e, t)),
        l != null && a.push(_l(e, l, i))),
      (e = e.return);
  }
  return a;
}
function Wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5 && e.tag !== 27);
  return e || null;
}
function yf(e, t, n, a, l) {
  for (var i = t._reactName, s = []; n !== null && n !== a; ) {
    var r = n,
      u = r.alternate,
      o = r.stateNode;
    if (((r = r.tag), u !== null && u === a)) break;
    (r !== 5 && r !== 26 && r !== 27) ||
      o === null ||
      ((u = o),
      l
        ? ((o = Al(n, i)), o != null && s.unshift(_l(n, o, u)))
        : l || ((o = Al(n, i)), o != null && s.push(_l(n, o, u)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ty = /\r\n?/g,
  Ry = /\u0000|\uFFFD/g;
function vf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Ty,
      `
`
    )
    .replace(Ry, '');
}
function Fm(e, t) {
  return (t = vf(t)), vf(e) === t;
}
function Vs() {}
function Q(e, t, n, a, l, i) {
  switch (n) {
    case 'children':
      typeof a == 'string'
        ? t === 'body' || (t === 'textarea' && a === '') || Oa(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') &&
          t !== 'body' &&
          Oa(e, '' + a);
      break;
    case 'className':
      hi(e, 'class', a);
      break;
    case 'tabIndex':
      hi(e, 'tabindex', a);
      break;
    case 'dir':
    case 'role':
    case 'viewBox':
    case 'width':
    case 'height':
      hi(e, n, a);
      break;
    case 'style':
      nh(e, a, i);
      break;
    case 'data':
      if (t !== 'object') {
        hi(e, 'data', a);
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
      (a = Ai('' + a)), e.setAttribute(n, a);
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
            ? (t !== 'input' && Q(e, t, 'name', l.name, l, null),
              Q(e, t, 'formEncType', l.formEncType, l, null),
              Q(e, t, 'formMethod', l.formMethod, l, null),
              Q(e, t, 'formTarget', l.formTarget, l, null))
            : (Q(e, t, 'encType', l.encType, l, null),
              Q(e, t, 'method', l.method, l, null),
              Q(e, t, 'target', l.target, l, null)));
      if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
        e.removeAttribute(n);
        break;
      }
      (a = Ai('' + a)), e.setAttribute(n, a);
      break;
    case 'onClick':
      a != null && (e.onclick = Vs);
      break;
    case 'onScroll':
      a != null && V('scroll', e);
      break;
    case 'onScrollEnd':
      a != null && V('scrollend', e);
      break;
    case 'dangerouslySetInnerHTML':
      if (a != null) {
        if (typeof a != 'object' || !('__html' in a)) throw Error(O(61));
        if (((n = a.__html), n != null)) {
          if (l.children != null) throw Error(O(60));
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
      (n = Ai('' + a)),
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
      V('beforetoggle', e), V('toggle', e), Ri(e, 'popover', a);
      break;
    case 'xlinkActuate':
      Nt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
      break;
    case 'xlinkArcrole':
      Nt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
      break;
    case 'xlinkRole':
      Nt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
      break;
    case 'xlinkShow':
      Nt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
      break;
    case 'xlinkTitle':
      Nt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
      break;
    case 'xlinkType':
      Nt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
      break;
    case 'xmlBase':
      Nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
      break;
    case 'xmlLang':
      Nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
      break;
    case 'xmlSpace':
      Nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
      break;
    case 'is':
      Ri(e, 'is', a);
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      (!(2 < n.length) ||
        (n[0] !== 'o' && n[0] !== 'O') ||
        (n[1] !== 'n' && n[1] !== 'N')) &&
        ((n = a0.get(n) || n), Ri(e, n, a));
  }
}
function Au(e, t, n, a, l, i) {
  switch (n) {
    case 'style':
      nh(e, a, i);
      break;
    case 'dangerouslySetInnerHTML':
      if (a != null) {
        if (typeof a != 'object' || !('__html' in a)) throw Error(O(61));
        if (((n = a.__html), n != null)) {
          if (l.children != null) throw Error(O(60));
          e.innerHTML = n;
        }
      }
      break;
    case 'children':
      typeof a == 'string'
        ? Oa(e, a)
        : (typeof a == 'number' || typeof a == 'bigint') && Oa(e, '' + a);
      break;
    case 'onScroll':
      a != null && V('scroll', e);
      break;
    case 'onScrollEnd':
      a != null && V('scrollend', e);
      break;
    case 'onClick':
      a != null && (e.onclick = Vs);
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
      if (!Fd.hasOwnProperty(n))
        e: {
          if (
            n[0] === 'o' &&
            n[1] === 'n' &&
            ((l = n.endsWith('Capture')),
            (t = n.slice(2, l ? n.length - 7 : void 0)),
            (i = e[_e] || null),
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
          n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : Ri(e, n, a);
        }
  }
}
function we(e, t, n) {
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
      V('error', e), V('load', e);
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
                throw Error(O(137, t));
              default:
                Q(e, t, i, s, n, null);
            }
        }
      l && Q(e, t, 'srcSet', n.srcSet, n, null),
        a && Q(e, t, 'src', n.src, n, null);
      return;
    case 'input':
      V('invalid', e);
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
                if (c != null) throw Error(O(137, t));
                break;
              default:
                Q(e, t, a, c, n, null);
            }
        }
      Id(e, i, r, u, o, s, l, !1), Fi(e);
      return;
    case 'select':
      V('invalid', e), (a = s = i = null);
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
              Q(e, t, l, r, n, null);
          }
      (t = i),
        (n = s),
        (e.multiple = !!a),
        t != null ? ya(e, !!a, t, !1) : n != null && ya(e, !!a, n, !0);
      return;
    case 'textarea':
      V('invalid', e), (i = l = a = null);
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
              if (r != null) throw Error(O(91));
              break;
            default:
              Q(e, t, s, r, n, null);
          }
      th(e, a, l, i), Fi(e);
      return;
    case 'option':
      for (u in n)
        if (n.hasOwnProperty(u) && ((a = n[u]), a != null))
          switch (u) {
            case 'selected':
              e.selected = a && typeof a != 'function' && typeof a != 'symbol';
              break;
            default:
              Q(e, t, u, a, n, null);
          }
      return;
    case 'dialog':
      V('cancel', e), V('close', e);
      break;
    case 'iframe':
    case 'object':
      V('load', e);
      break;
    case 'video':
    case 'audio':
      for (a = 0; a < Ml.length; a++) V(Ml[a], e);
      break;
    case 'image':
      V('error', e), V('load', e);
      break;
    case 'details':
      V('toggle', e);
      break;
    case 'embed':
    case 'source':
    case 'link':
      V('error', e), V('load', e);
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
              throw Error(O(137, t));
            default:
              Q(e, t, o, a, n, null);
          }
      return;
    default:
      if (lo(t)) {
        for (c in n)
          n.hasOwnProperty(c) &&
            ((a = n[c]), a !== void 0 && Au(e, t, c, a, n, void 0));
        return;
      }
  }
  for (r in n)
    n.hasOwnProperty(r) && ((a = n[r]), a != null && Q(e, t, r, a, n, null));
}
function Ay(e, t, n, a) {
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
      for (p in n) {
        var h = n[p];
        if (n.hasOwnProperty(p) && h != null)
          switch (p) {
            case 'checked':
              break;
            case 'value':
              break;
            case 'defaultValue':
              u = h;
            default:
              a.hasOwnProperty(p) || Q(e, t, p, null, a, h);
          }
      }
      for (var f in a) {
        var p = a[f];
        if (((h = n[f]), a.hasOwnProperty(f) && (p != null || h != null)))
          switch (f) {
            case 'type':
              i = p;
              break;
            case 'name':
              l = p;
              break;
            case 'checked':
              o = p;
              break;
            case 'defaultChecked':
              c = p;
              break;
            case 'value':
              s = p;
              break;
            case 'defaultValue':
              r = p;
              break;
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (p != null) throw Error(O(137, t));
              break;
            default:
              p !== h && Q(e, t, f, p, a, h);
          }
      }
      Pr(e, s, r, u, o, c, i, l);
      return;
    case 'select':
      p = s = r = f = null;
      for (i in n)
        if (((u = n[i]), n.hasOwnProperty(i) && u != null))
          switch (i) {
            case 'value':
              break;
            case 'multiple':
              p = u;
            default:
              a.hasOwnProperty(i) || Q(e, t, i, null, a, u);
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
              i !== u && Q(e, t, l, i, a, u);
          }
      (t = r),
        (n = s),
        (a = p),
        f != null
          ? ya(e, !!n, f, !1)
          : !!a != !!n &&
            (t != null ? ya(e, !!n, t, !0) : ya(e, !!n, n ? [] : '', !1));
      return;
    case 'textarea':
      p = f = null;
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
              Q(e, t, r, null, a, l);
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
              p = l;
              break;
            case 'children':
              break;
            case 'dangerouslySetInnerHTML':
              if (l != null) throw Error(O(91));
              break;
            default:
              l !== i && Q(e, t, s, l, a, i);
          }
      eh(e, f, p);
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
              Q(e, t, y, null, a, f);
          }
      for (u in a)
        if (
          ((f = a[u]),
          (p = n[u]),
          a.hasOwnProperty(u) && f !== p && (f != null || p != null))
        )
          switch (u) {
            case 'selected':
              e.selected = f && typeof f != 'function' && typeof f != 'symbol';
              break;
            default:
              Q(e, t, u, f, a, p);
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
            Q(e, t, x, null, a, f);
      for (o in a)
        if (
          ((f = a[o]),
          (p = n[o]),
          a.hasOwnProperty(o) && f !== p && (f != null || p != null))
        )
          switch (o) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (f != null) throw Error(O(137, t));
              break;
            default:
              Q(e, t, o, f, a, p);
          }
      return;
    default:
      if (lo(t)) {
        for (var v in n)
          (f = n[v]),
            n.hasOwnProperty(v) &&
              f !== void 0 &&
              !a.hasOwnProperty(v) &&
              Au(e, t, v, void 0, a, f);
        for (c in a)
          (f = a[c]),
            (p = n[c]),
            !a.hasOwnProperty(c) ||
              f === p ||
              (f === void 0 && p === void 0) ||
              Au(e, t, c, f, a, p);
        return;
      }
  }
  for (var m in n)
    (f = n[m]),
      n.hasOwnProperty(m) &&
        f != null &&
        !a.hasOwnProperty(m) &&
        Q(e, t, m, null, a, f);
  for (h in a)
    (f = a[h]),
      (p = n[h]),
      !a.hasOwnProperty(h) ||
        f === p ||
        (f == null && p == null) ||
        Q(e, t, h, f, a, p);
}
var Cu = null,
  Du = null;
function ms(e) {
  return e.nodeType === 9 ? e : e.ownerDocument;
}
function bf(e) {
  switch (e) {
    case 'http://www.w3.org/2000/svg':
      return 1;
    case 'http://www.w3.org/1998/Math/MathML':
      return 2;
    default:
      return 0;
  }
}
function Wm(e, t) {
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
function zu(e, t) {
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
var Ur = null;
function Cy() {
  var e = window.event;
  return e && e.type === 'popstate'
    ? e === Ur
      ? !1
      : ((Ur = e), !0)
    : ((Ur = null), !1);
}
var Pm = typeof setTimeout == 'function' ? setTimeout : void 0,
  Dy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  xf = typeof Promise == 'function' ? Promise : void 0,
  zy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof xf < 'u'
        ? function (e) {
            return xf.resolve(null).then(e).catch(Uy);
          }
        : Pm;
function Uy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lr(e, t) {
  var n = t,
    a = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (a === 0) {
          e.removeChild(l), Yl(t);
          return;
        }
        a--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || a++;
    n = l;
  } while (n);
  Yl(t);
}
function Uu(e) {
  var t = e.firstChild;
  for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
    var n = t;
    switch (((t = t.nextSibling), n.nodeName)) {
      case 'HTML':
      case 'HEAD':
      case 'BODY':
        Uu(n), ao(n);
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
function Ly(e, t, n, a) {
  for (; e.nodeType === 1; ) {
    var l = n;
    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
      if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
    } else if (a) {
      if (!e[Rl])
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
    if (((e = rt(e.nextSibling)), e === null)) break;
  }
  return null;
}
function My(e, t, n) {
  if (t === '') return null;
  for (; e.nodeType !== 3; )
    if (
      ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
        !n) ||
      ((e = rt(e.nextSibling)), e === null)
    )
      return null;
  return e;
}
function rt(e) {
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
function Sf(e) {
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
function Im(e, t, n) {
  switch (((t = ms(n)), e)) {
    case 'html':
      if (((e = t.documentElement), !e)) throw Error(O(452));
      return e;
    case 'head':
      if (((e = t.head), !e)) throw Error(O(453));
      return e;
    case 'body':
      if (((e = t.body), !e)) throw Error(O(454));
      return e;
    default:
      throw Error(O(451));
  }
}
var lt = new Map(),
  Ef = new Set();
function gs(e) {
  return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
}
var $t = P.d;
P.d = { f: _y, r: Hy, D: By, C: qy, L: ky, m: Yy, X: $y, S: Vy, M: Gy };
function _y() {
  var e = $t.f(),
    t = ks();
  return e || t;
}
function Hy(e) {
  var t = _a(e);
  t !== null && t.tag === 5 && t.type === 'form' ? Ih(t) : $t.r(e);
}
var Ba = typeof document > 'u' ? null : document;
function eg(e, t, n) {
  var a = Ba;
  if (a && typeof t == 'string' && t) {
    var l = Pe(t);
    (l = 'link[rel="' + e + '"][href="' + l + '"]'),
      typeof n == 'string' && (l += '[crossorigin="' + n + '"]'),
      Ef.has(l) ||
        (Ef.add(l),
        (e = { rel: e, crossOrigin: n, href: t }),
        a.querySelector(l) === null &&
          ((t = a.createElement('link')),
          we(t, 'link', e),
          ye(t),
          a.head.appendChild(t)));
  }
}
function By(e) {
  $t.D(e), eg('dns-prefetch', e, null);
}
function qy(e, t) {
  $t.C(e, t), eg('preconnect', e, t);
}
function ky(e, t, n) {
  $t.L(e, t, n);
  var a = Ba;
  if (a && e && t) {
    var l = 'link[rel="preload"][as="' + Pe(t) + '"]';
    t === 'image' && n && n.imageSrcSet
      ? ((l += '[imagesrcset="' + Pe(n.imageSrcSet) + '"]'),
        typeof n.imageSizes == 'string' &&
          (l += '[imagesizes="' + Pe(n.imageSizes) + '"]'))
      : (l += '[href="' + Pe(e) + '"]');
    var i = l;
    switch (t) {
      case 'style':
        i = za(e);
        break;
      case 'script':
        i = qa(e);
    }
    lt.has(i) ||
      ((e = I(
        {
          rel: 'preload',
          href: t === 'image' && n && n.imageSrcSet ? void 0 : e,
          as: t,
        },
        n
      )),
      lt.set(i, e),
      a.querySelector(l) !== null ||
        (t === 'style' && a.querySelector(ni(i))) ||
        (t === 'script' && a.querySelector(ai(i))) ||
        ((t = a.createElement('link')),
        we(t, 'link', e),
        ye(t),
        a.head.appendChild(t)));
  }
}
function Yy(e, t) {
  $t.m(e, t);
  var n = Ba;
  if (n && e) {
    var a = t && typeof t.as == 'string' ? t.as : 'script',
      l = 'link[rel="modulepreload"][as="' + Pe(a) + '"][href="' + Pe(e) + '"]',
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
      !lt.has(i) &&
      ((e = I({ rel: 'modulepreload', href: e }, t)),
      lt.set(i, e),
      n.querySelector(l) === null)
    ) {
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          if (n.querySelector(ai(i))) return;
      }
      (a = n.createElement('link')),
        we(a, 'link', e),
        ye(a),
        n.head.appendChild(a);
    }
  }
}
function Vy(e, t, n) {
  $t.S(e, t, n);
  var a = Ba;
  if (a && e) {
    var l = pa(a).hoistableStyles,
      i = za(e);
    t = t || 'default';
    var s = l.get(i);
    if (!s) {
      var r = { loading: 0, preload: null };
      if ((s = a.querySelector(ni(i)))) r.loading = 5;
      else {
        (e = I({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
          (n = lt.get(i)) && Yo(e, n);
        var u = (s = a.createElement('link'));
        ye(u),
          we(u, 'link', e),
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
          Hi(s, t, a);
      }
      (s = { type: 'stylesheet', instance: s, count: 1, state: r }),
        l.set(i, s);
    }
  }
}
function $y(e, t) {
  $t.X(e, t);
  var n = Ba;
  if (n && e) {
    var a = pa(n).hoistableScripts,
      l = qa(e),
      i = a.get(l);
    i ||
      ((i = n.querySelector(ai(l))),
      i ||
        ((e = I({ src: e, async: !0 }, t)),
        (t = lt.get(l)) && Vo(e, t),
        (i = n.createElement('script')),
        ye(i),
        we(i, 'link', e),
        n.head.appendChild(i)),
      (i = { type: 'script', instance: i, count: 1, state: null }),
      a.set(l, i));
  }
}
function Gy(e, t) {
  $t.M(e, t);
  var n = Ba;
  if (n && e) {
    var a = pa(n).hoistableScripts,
      l = qa(e),
      i = a.get(l);
    i ||
      ((i = n.querySelector(ai(l))),
      i ||
        ((e = I({ src: e, async: !0, type: 'module' }, t)),
        (t = lt.get(l)) && Vo(e, t),
        (i = n.createElement('script')),
        ye(i),
        we(i, 'link', e),
        n.head.appendChild(i)),
      (i = { type: 'script', instance: i, count: 1, state: null }),
      a.set(l, i));
  }
}
function wf(e, t, n, a) {
  var l = (l = an.current) ? gs(l) : null;
  if (!l) throw Error(O(446));
  switch (e) {
    case 'meta':
    case 'title':
      return null;
    case 'style':
      return typeof n.precedence == 'string' && typeof n.href == 'string'
        ? ((t = za(n.href)),
          (n = pa(l).hoistableStyles),
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
        e = za(n.href);
        var i = pa(l).hoistableStyles,
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
            (i = l.querySelector(ni(e))) &&
              !i._p &&
              ((s.instance = i), (s.state.loading = 5)),
            lt.has(e) ||
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
              lt.set(e, n),
              i || Xy(l, e, n, s.state))),
          t && a === null)
        )
          throw Error(O(528, ''));
        return s;
      }
      if (t && a !== null) throw Error(O(529, ''));
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
            (n = pa(l).hoistableScripts),
            (a = n.get(t)),
            a ||
              ((a = { type: 'script', instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
      );
    default:
      throw Error(O(444, e));
  }
}
function za(e) {
  return 'href="' + Pe(e) + '"';
}
function ni(e) {
  return 'link[rel="stylesheet"][' + e + ']';
}
function tg(e) {
  return I({}, e, { 'data-precedence': e.precedence, precedence: null });
}
function Xy(e, t, n, a) {
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
      we(t, 'link', n),
      ye(t),
      e.head.appendChild(t));
}
function qa(e) {
  return '[src="' + Pe(e) + '"]';
}
function ai(e) {
  return 'script[async]' + e;
}
function Nf(e, t, n) {
  if ((t.count++, t.instance === null))
    switch (t.type) {
      case 'style':
        var a = e.querySelector('style[data-href~="' + Pe(n.href) + '"]');
        if (a) return (t.instance = a), ye(a), a;
        var l = I({}, n, {
          'data-href': n.href,
          'data-precedence': n.precedence,
          href: null,
          precedence: null,
        });
        return (
          (a = (e.ownerDocument || e).createElement('style')),
          ye(a),
          we(a, 'style', l),
          Hi(a, n.precedence, e),
          (t.instance = a)
        );
      case 'stylesheet':
        l = za(n.href);
        var i = e.querySelector(ni(l));
        if (i) return (t.state.loading |= 4), (t.instance = i), ye(i), i;
        (a = tg(n)),
          (l = lt.get(l)) && Yo(a, l),
          (i = (e.ownerDocument || e).createElement('link')),
          ye(i);
        var s = i;
        return (
          (s._p = new Promise(function (r, u) {
            (s.onload = r), (s.onerror = u);
          })),
          we(i, 'link', a),
          (t.state.loading |= 4),
          Hi(i, n.precedence, e),
          (t.instance = i)
        );
      case 'script':
        return (
          (i = qa(n.src)),
          (l = e.querySelector(ai(i)))
            ? ((t.instance = l), ye(l), l)
            : ((a = n),
              (l = lt.get(i)) && ((a = I({}, n)), Vo(a, l)),
              (e = e.ownerDocument || e),
              (l = e.createElement('script')),
              ye(l),
              we(l, 'link', a),
              e.head.appendChild(l),
              (t.instance = l))
        );
      case 'void':
        return null;
      default:
        throw Error(O(443, t.type));
    }
  else
    t.type === 'stylesheet' &&
      !(t.state.loading & 4) &&
      ((a = t.instance), (t.state.loading |= 4), Hi(a, n.precedence, e));
  return t.instance;
}
function Hi(e, t, n) {
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
function Yo(e, t) {
  e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.title == null && (e.title = t.title);
}
function Vo(e, t) {
  e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.integrity == null && (e.integrity = t.integrity);
}
var Bi = null;
function jf(e, t, n) {
  if (Bi === null) {
    var a = new Map(),
      l = (Bi = new Map());
    l.set(n, a);
  } else (l = Bi), (a = l.get(n)), a || ((a = new Map()), l.set(n, a));
  if (a.has(e)) return a;
  for (
    a.set(e, null), n = n.getElementsByTagName(e), l = 0;
    l < n.length;
    l++
  ) {
    var i = n[l];
    if (
      !(
        i[Rl] ||
        i[je] ||
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
function Of(e, t, n) {
  (e = e.ownerDocument || e),
    e.head.insertBefore(
      n,
      t === 'title' ? e.querySelector('head > title') : null
    );
}
function Qy(e, t, n) {
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
function ng(e) {
  return !(e.type === 'stylesheet' && !(e.state.loading & 3));
}
var Hl = null;
function Ky() {}
function Zy(e, t, n) {
  if (Hl === null) throw Error(O(475));
  var a = Hl;
  if (
    t.type === 'stylesheet' &&
    (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
    !(t.state.loading & 4)
  ) {
    if (t.instance === null) {
      var l = za(n.href),
        i = e.querySelector(ni(l));
      if (i) {
        (e = i._p),
          e !== null &&
            typeof e == 'object' &&
            typeof e.then == 'function' &&
            (a.count++, (a = ps.bind(a)), e.then(a, a)),
          (t.state.loading |= 4),
          (t.instance = i),
          ye(i);
        return;
      }
      (i = e.ownerDocument || e),
        (n = tg(n)),
        (l = lt.get(l)) && Yo(n, l),
        (i = i.createElement('link')),
        ye(i);
      var s = i;
      (s._p = new Promise(function (r, u) {
        (s.onload = r), (s.onerror = u);
      })),
        we(i, 'link', n),
        (t.instance = i);
    }
    a.stylesheets === null && (a.stylesheets = new Map()),
      a.stylesheets.set(t, e),
      (e = t.state.preload) &&
        !(t.state.loading & 3) &&
        (a.count++,
        (t = ps.bind(a)),
        e.addEventListener('load', t),
        e.addEventListener('error', t));
  }
}
function Jy() {
  if (Hl === null) throw Error(O(475));
  var e = Hl;
  return (
    e.stylesheets && e.count === 0 && Lu(e, e.stylesheets),
    0 < e.count
      ? function (t) {
          var n = setTimeout(function () {
            if ((e.stylesheets && Lu(e, e.stylesheets), e.unsuspend)) {
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
function ps() {
  if ((this.count--, this.count === 0)) {
    if (this.stylesheets) Lu(this, this.stylesheets);
    else if (this.unsuspend) {
      var e = this.unsuspend;
      (this.unsuspend = null), e();
    }
  }
}
var ys = null;
function Lu(e, t) {
  (e.stylesheets = null),
    e.unsuspend !== null &&
      (e.count++, (ys = new Map()), t.forEach(Fy, e), (ys = null), ps.call(e));
}
function Fy(e, t) {
  if (!(t.state.loading & 4)) {
    var n = ys.get(e);
    if (n) var a = n.get(null);
    else {
      (n = new Map()), ys.set(e, n);
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
      (a = ps.bind(this)),
      l.addEventListener('load', a),
      l.addEventListener('error', a),
      i
        ? i.parentNode.insertBefore(l, i.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e),
          e.insertBefore(l, e.firstChild)),
      (t.state.loading |= 4);
  }
}
var Bl = {
  $$typeof: zt,
  Provider: null,
  Consumer: null,
  _currentValue: Dn,
  _currentValue2: Dn,
  _threadCount: 0,
};
function Wy(e, t, n, a, l, i, s, r) {
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
    (this.expirationTimes = ir(-1)),
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
    (this.entanglements = ir(0)),
    (this.hiddenUpdates = ir(null)),
    (this.identifierPrefix = a),
    (this.onUncaughtError = l),
    (this.onCaughtError = i),
    (this.onRecoverableError = s),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = r),
    (this.incompleteTransitions = new Map());
}
function ag(e, t, n, a, l, i, s, r, u, o, c, h) {
  return (
    (e = new Wy(e, t, n, s, r, u, o, h)),
    (t = 1),
    i === !0 && (t |= 24),
    (i = et(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (t = po()),
    t.refCount++,
    (e.pooledCache = t),
    t.refCount++,
    (i.memoizedState = { element: a, isDehydrated: n, cache: t }),
    Do(i),
    e
  );
}
function lg(e) {
  return e ? ((e = fa), e) : fa;
}
function ig(e, t, n, a, l, i) {
  (l = lg(l)),
    a.context === null ? (a.context = l) : (a.pendingContext = l),
    (a = ln(t)),
    (a.payload = { element: n }),
    (i = i === void 0 ? null : i),
    i !== null && (a.callback = i),
    (n = sn(e, a, t)),
    n !== null && (Ce(n, e, t), bl(n, e, t));
}
function Tf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $o(e, t) {
  Tf(e, t), (e = e.alternate) && Tf(e, t);
}
function sg(e) {
  if (e.tag === 13) {
    var t = dn(e, 67108864);
    t !== null && Ce(t, e, 67108864), $o(e, 67108864);
  }
}
var vs = !0;
function Py(e, t, n, a) {
  var l = B.T;
  B.T = null;
  var i = P.p;
  try {
    (P.p = 2), Go(e, t, n, a);
  } finally {
    (P.p = i), (B.T = l);
  }
}
function Iy(e, t, n, a) {
  var l = B.T;
  B.T = null;
  var i = P.p;
  try {
    (P.p = 8), Go(e, t, n, a);
  } finally {
    (P.p = i), (B.T = l);
  }
}
function Go(e, t, n, a) {
  if (vs) {
    var l = Mu(a);
    if (l === null) zr(e, t, a, bs, n), Rf(e, a);
    else if (tv(l, e, t, n, a)) a.stopPropagation();
    else if ((Rf(e, a), t & 4 && -1 < ev.indexOf(e))) {
      for (; l !== null; ) {
        var i = _a(l);
        if (i !== null)
          switch (i.tag) {
            case 3:
              if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                var s = Nn(i.pendingLanes);
                if (s !== 0) {
                  var r = i;
                  for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                    var u = 1 << (31 - Ve(s));
                    (r.entanglements[1] |= u), (s &= ~u);
                  }
                  St(i), !(ie & 6) && ((os = yt() + 500), ti(0));
                }
              }
              break;
            case 13:
              (r = dn(i, 2)), r !== null && Ce(r, i, 2), ks(), $o(i, 2);
          }
        if (((i = Mu(a)), i === null && zr(e, t, a, bs, n), i === l)) break;
        l = i;
      }
      l !== null && a.stopPropagation();
    } else zr(e, t, a, null, n);
  }
}
function Mu(e) {
  return (e = io(e)), Xo(e);
}
var bs = null;
function Xo(e) {
  if (((bs = null), (e = Tn(e)), e !== null)) {
    var t = La(e);
    if (t === null) e = null;
    else {
      var n = t.tag;
      if (n === 13) {
        if (((e = Bd(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    }
  }
  return (bs = e), null;
}
function rg(e) {
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
      switch (qp()) {
        case kd:
          return 2;
        case Yd:
          return 8;
        case Ji:
        case kp:
          return 32;
        case Vd:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var _u = !1,
  on = null,
  cn = null,
  fn = null,
  ql = new Map(),
  kl = new Map(),
  en = [],
  ev =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
      ' '
    );
function Rf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      on = null;
      break;
    case 'dragenter':
    case 'dragleave':
      cn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      fn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ql.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      kl.delete(t.pointerId);
  }
}
function Ia(e, t, n, a, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: a,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = _a(t)), t !== null && sg(t)),
      e)
    : ((e.eventSystemFlags |= a),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function tv(e, t, n, a, l) {
  switch (t) {
    case 'focusin':
      return (on = Ia(on, e, t, n, a, l)), !0;
    case 'dragenter':
      return (cn = Ia(cn, e, t, n, a, l)), !0;
    case 'mouseover':
      return (fn = Ia(fn, e, t, n, a, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return ql.set(i, Ia(ql.get(i) || null, e, t, n, a, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), kl.set(i, Ia(kl.get(i) || null, e, t, n, a, l)), !0
      );
  }
  return !1;
}
function ug(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var n = La(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bd(n)), t !== null)) {
          (e.blockedOn = t),
            Jp(e.priority, function () {
              if (n.tag === 13) {
                var a = $e(),
                  l = dn(n, a);
                l !== null && Ce(l, n, a), $o(n, a);
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
    var n = Mu(e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      (eu = a), n.target.dispatchEvent(a), (eu = null);
    } else return (t = _a(n)), t !== null && sg(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Af(e, t, n) {
  qi(e) && n.delete(t);
}
function nv() {
  (_u = !1),
    on !== null && qi(on) && (on = null),
    cn !== null && qi(cn) && (cn = null),
    fn !== null && qi(fn) && (fn = null),
    ql.forEach(Af),
    kl.forEach(Af);
}
function Ei(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _u ||
      ((_u = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, nv)));
}
var wi = null;
function Cf(e) {
  wi !== e &&
    ((wi = e),
    ge.unstable_scheduleCallback(ge.unstable_NormalPriority, function () {
      wi === e && (wi = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t],
          a = e[t + 1],
          l = e[t + 2];
        if (typeof a != 'function') {
          if (Xo(a || n) === null) continue;
          break;
        }
        var i = _a(n);
        i !== null &&
          (e.splice(t, 3),
          (t -= 3),
          cu(i, { pending: !0, data: l, method: n.method, action: a }, a, l));
      }
    }));
}
function Yl(e) {
  function t(u) {
    return Ei(u, e);
  }
  on !== null && Ei(on, e),
    cn !== null && Ei(cn, e),
    fn !== null && Ei(fn, e),
    ql.forEach(t),
    kl.forEach(t);
  for (var n = 0; n < en.length; n++) {
    var a = en[n];
    a.blockedOn === e && (a.blockedOn = null);
  }
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); )
    ug(n), n.blockedOn === null && en.shift();
  if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
    for (a = 0; a < n.length; a += 3) {
      var l = n[a],
        i = n[a + 1],
        s = l[_e] || null;
      if (typeof i == 'function') s || Cf(n);
      else if (s) {
        var r = null;
        if (i && i.hasAttribute('formAction')) {
          if (((l = i), (s = i[_e] || null))) r = s.formAction;
          else if (Xo(l) !== null) continue;
        } else r = s.action;
        typeof r == 'function' ? (n[a + 1] = r) : (n.splice(a, 3), (a -= 3)),
          Cf(n);
      }
    }
}
function Qo(e) {
  this._internalRoot = e;
}
$s.prototype.render = Qo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  var n = t.current,
    a = $e();
  ig(n, a, e, t, null, null);
};
$s.prototype.unmount = Qo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    e.tag === 0 && wa(),
      ig(e.current, 2, null, e, null, null),
      ks(),
      (t[Ma] = null);
  }
};
function $s(e) {
  this._internalRoot = e;
}
$s.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    en.splice(n, 0, e), n === 0 && ug(e);
  }
};
var Df = Ud.version;
if (Df !== '19.0.0') throw Error(O(527, Df, '19.0.0'));
P.findDOMNode = function (e) {
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(O(188))
      : ((e = Object.keys(e).join(',')), Error(O(268, e)));
  return (
    (e = _p(t)),
    (e = e !== null ? qd(e) : null),
    (e = e === null ? null : e.stateNode),
    e
  );
};
var av = {
  bundleType: 0,
  version: '19.0.0',
  rendererPackageName: 'react-dom',
  currentDispatcherRef: B,
  findFiberByHostInstance: Tn,
  reconcilerVersion: '19.0.0',
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ni.isDisabled && Ni.supportsFiber)
    try {
      (Ql = Ni.inject(av)), (Ye = Ni);
    } catch {}
}
Rs.createRoot = function (e, t) {
  if (!Ld(e)) throw Error(O(299));
  var n = !1,
    a = '',
    l = im,
    i = sm,
    s = rm,
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
    (t = ag(e, 1, !1, null, null, n, a, l, i, s, r, null)),
    (e[Ma] = t.current),
    ko(e.nodeType === 8 ? e.parentNode : e),
    new Qo(t)
  );
};
Rs.hydrateRoot = function (e, t, n) {
  if (!Ld(e)) throw Error(O(299));
  var a = !1,
    l = '',
    i = im,
    s = sm,
    r = rm,
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
    (t = ag(e, 1, !0, t, n ?? null, a, l, i, s, r, u, o)),
    (t.context = lg(null)),
    (n = t.current),
    (a = $e()),
    (l = ln(a)),
    (l.callback = null),
    sn(n, l, a),
    (t.current.lanes = a),
    Zl(t, a),
    St(t),
    (e[Ma] = t.current),
    ko(e),
    new $s(t)
  );
};
Rs.version = '19.0.0';
function og() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(og);
    } catch (e) {
      console.error(e);
    }
}
og(), (Td.exports = Rs);
var lv = Td.exports;
const iv = Zu(lv);
var Ko = {};
Object.defineProperty(Ko, '__esModule', { value: !0 });
Ko.parse = dv;
Ko.serialize = hv;
const sv = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  rv = /^[\u0021-\u003A\u003C-\u007E]*$/,
  uv =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  ov = /^[\u0020-\u003A\u003D-\u007E]*$/,
  cv = Object.prototype.toString,
  fv = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function dv(e, t) {
  const n = new fv(),
    a = e.length;
  if (a < 2) return n;
  const l = (t == null ? void 0 : t.decode) || mv;
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
    const o = zf(e, i, s),
      c = Uf(e, s, o),
      h = e.slice(o, c);
    if (n[h] === void 0) {
      let f = zf(e, s + 1, u),
        p = Uf(e, u, f);
      const y = l(e.slice(f, p));
      n[h] = y;
    }
    i = u + 1;
  } while (i < a);
  return n;
}
function zf(e, t, n) {
  do {
    const a = e.charCodeAt(t);
    if (a !== 32 && a !== 9) return t;
  } while (++t < n);
  return n;
}
function Uf(e, t, n) {
  for (; t > n; ) {
    const a = e.charCodeAt(--t);
    if (a !== 32 && a !== 9) return t + 1;
  }
  return n;
}
function hv(e, t, n) {
  const a = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!sv.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const l = a(t);
  if (!rv.test(l)) throw new TypeError(`argument val is invalid: ${t}`);
  let i = e + '=' + l;
  if (!n) return i;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    i += '; Max-Age=' + n.maxAge;
  }
  if (n.domain) {
    if (!uv.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    i += '; Domain=' + n.domain;
  }
  if (n.path) {
    if (!ov.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    i += '; Path=' + n.path;
  }
  if (n.expires) {
    if (!gv(n.expires) || !Number.isFinite(n.expires.valueOf()))
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
function mv(e) {
  if (e.indexOf('%') === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function gv(e) {
  return cv.call(e) === '[object Date]';
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
 */ var Lf = 'popstate';
function pv(e = {}) {
  function t(a, l) {
    let { pathname: i, search: s, hash: r } = a.location;
    return Hu(
      '',
      { pathname: i, search: s, hash: r },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(a, l) {
    return typeof l == 'string' ? l : Vl(l);
  }
  return vv(t, n, null, e);
}
function ne(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ut(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function yv() {
  return Math.random().toString(36).substring(2, 10);
}
function Mf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Hu(e, t, n = null, a) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? ka(t) : t),
    state: n,
    key: (t && t.key) || a || yv(),
  };
}
function Vl({ pathname: e = '/', search: t = '', hash: n = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    n && n !== '#' && (e += n.charAt(0) === '#' ? n : '#' + n),
    e
  );
}
function ka(e) {
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
function vv(e, t, n, a = {}) {
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
    let v = c(),
      m = v == null ? null : v - o;
    (o = v), u && u({ action: r, location: x.location, delta: m });
  }
  function f(v, m) {
    r = 'PUSH';
    let g = Hu(x.location, v, m);
    o = c() + 1;
    let b = Mf(g, o),
      S = x.createHref(g);
    try {
      s.pushState(b, '', S);
    } catch (w) {
      if (w instanceof DOMException && w.name === 'DataCloneError') throw w;
      l.location.assign(S);
    }
    i && u && u({ action: r, location: x.location, delta: 1 });
  }
  function p(v, m) {
    r = 'REPLACE';
    let g = Hu(x.location, v, m);
    o = c();
    let b = Mf(g, o),
      S = x.createHref(g);
    s.replaceState(b, '', S),
      i && u && u({ action: r, location: x.location, delta: 0 });
  }
  function y(v) {
    let m = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      g = typeof v == 'string' ? v : Vl(v);
    return (
      (g = g.replace(/ $/, '%20')),
      ne(
        m,
        `No window.location.(origin|href) available to create URL for href: ${g}`
      ),
      new URL(g, m)
    );
  }
  let x = {
    get action() {
      return r;
    },
    get location() {
      return e(l, s);
    },
    listen(v) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Lf, h),
        (u = v),
        () => {
          l.removeEventListener(Lf, h), (u = null);
        }
      );
    },
    createHref(v) {
      return t(l, v);
    },
    createURL: y,
    encodeLocation(v) {
      let m = y(v);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: p,
    go(v) {
      return s.go(v);
    },
  };
  return x;
}
function cg(e, t, n = '/') {
  return bv(e, t, n, !1);
}
function bv(e, t, n, a) {
  let l = typeof t == 'string' ? ka(t) : t,
    i = pn(l.pathname || '/', n);
  if (i == null) return null;
  let s = fg(e);
  xv(s);
  let r = null;
  for (let u = 0; r == null && u < s.length; ++u) {
    let o = Dv(i);
    r = Av(s[u], o, a);
  }
  return r;
}
function fg(e, t = [], n = [], a = '') {
  let l = (i, s, r) => {
    let u = {
      relativePath: r === void 0 ? i.path || '' : r,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    u.relativePath.startsWith('/') &&
      (ne(
        u.relativePath.startsWith(a),
        `Absolute route path "${u.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (u.relativePath = u.relativePath.slice(a.length)));
    let o = Bt([a, u.relativePath]),
      c = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (ne(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${o}".`
      ),
      fg(i.children, t, c, o)),
      !(i.path == null && !i.index) &&
        t.push({ path: o, score: Tv(o, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var r;
      if (i.path === '' || !((r = i.path) != null && r.includes('?'))) l(i, s);
      else for (let u of dg(i.path)) l(i, s, u);
    }),
    t
  );
}
function dg(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...a] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (a.length === 0) return l ? [i, ''] : [i];
  let s = dg(a.join('/')),
    r = [];
  return (
    r.push(...s.map((u) => (u === '' ? i : [i, u].join('/')))),
    l && r.push(...s),
    r.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function xv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Rv(
          t.routesMeta.map((a) => a.childrenIndex),
          n.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
var Sv = /^:[\w-]+$/,
  Ev = 3,
  wv = 2,
  Nv = 1,
  jv = 10,
  Ov = -2,
  _f = (e) => e === '*';
function Tv(e, t) {
  let n = e.split('/'),
    a = n.length;
  return (
    n.some(_f) && (a += Ov),
    t && (a += wv),
    n
      .filter((l) => !_f(l))
      .reduce((l, i) => l + (Sv.test(i) ? Ev : i === '' ? Nv : jv), a)
  );
}
function Rv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, l) => a === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Av(e, t, n = !1) {
  let { routesMeta: a } = e,
    l = {},
    i = '/',
    s = [];
  for (let r = 0; r < a.length; ++r) {
    let u = a[r],
      o = r === a.length - 1,
      c = i === '/' ? t : t.slice(i.length) || '/',
      h = xs(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: o },
        c
      ),
      f = u.route;
    if (
      (!h &&
        o &&
        n &&
        !a[a.length - 1].route.index &&
        (h = xs(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !h)
    )
      return null;
    Object.assign(l, h.params),
      s.push({
        params: l,
        pathname: Bt([i, h.pathname]),
        pathnameBase: Mv(Bt([i, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== '/' && (i = Bt([i, h.pathnameBase]));
  }
  return s;
}
function xs(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, a] = Cv(e.path, e.caseSensitive, e.end),
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
      const p = r[f];
      return (
        h && !p ? (o[c] = void 0) : (o[c] = (p || '').replace(/%2F/g, '/')), o
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function Cv(e, t = !1, n = !0) {
  ut(
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
function Dv(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ut(
        !1,
        `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function pn(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    a = e.charAt(n);
  return a && a !== '/' ? null : e.slice(n) || '/';
}
function zv(e, t = '/') {
  let {
    pathname: n,
    search: a = '',
    hash: l = '',
  } = typeof e == 'string' ? ka(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Uv(n, t)) : t,
    search: _v(a),
    hash: Hv(l),
  };
}
function Uv(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Mr(e, t, n, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Lv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Zo(e) {
  let t = Lv(e);
  return t.map((n, a) => (a === t.length - 1 ? n.pathname : n.pathnameBase));
}
function Jo(e, t, n, a = !1) {
  let l;
  typeof e == 'string'
    ? (l = ka(e))
    : ((l = { ...e }),
      ne(
        !l.pathname || !l.pathname.includes('?'),
        Mr('?', 'pathname', 'search', l)
      ),
      ne(
        !l.pathname || !l.pathname.includes('#'),
        Mr('#', 'pathname', 'hash', l)
      ),
      ne(!l.search || !l.search.includes('#'), Mr('#', 'search', 'hash', l)));
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
  let u = zv(l, r),
    o = s && s !== '/' && s.endsWith('/'),
    c = (i || s === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (o || c) && (u.pathname += '/'), u;
}
var Bt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Mv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  _v = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Hv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Bv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var hg = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(hg);
var qv = ['GET', ...hg];
new Set(qv);
var Ya = E.createContext(null);
Ya.displayName = 'DataRouter';
var Gs = E.createContext(null);
Gs.displayName = 'DataRouterState';
var mg = E.createContext({ isTransitioning: !1 });
mg.displayName = 'ViewTransition';
var kv = E.createContext(new Map());
kv.displayName = 'Fetchers';
var Yv = E.createContext(null);
Yv.displayName = 'Await';
var ct = E.createContext(null);
ct.displayName = 'Navigation';
var li = E.createContext(null);
li.displayName = 'Location';
var Et = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Et.displayName = 'Route';
var Fo = E.createContext(null);
Fo.displayName = 'RouteError';
function Vv(e, { relative: t } = {}) {
  ne(
    Va(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: n, navigator: a } = E.useContext(ct),
    { hash: l, pathname: i, search: s } = ii(e, { relative: t }),
    r = i;
  return (
    n !== '/' && (r = i === '/' ? n : Bt([n, i])),
    a.createHref({ pathname: r, search: s, hash: l })
  );
}
function Va() {
  return E.useContext(li) != null;
}
function Gt() {
  return (
    ne(
      Va(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    E.useContext(li).location
  );
}
var gg =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function pg(e) {
  E.useContext(ct).static || E.useLayoutEffect(e);
}
function $a() {
  let { isDataRoute: e } = E.useContext(Et);
  return e ? tb() : $v();
}
function $v() {
  ne(
    Va(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = E.useContext(Ya),
    { basename: t, navigator: n } = E.useContext(ct),
    { matches: a } = E.useContext(Et),
    { pathname: l } = Gt(),
    i = JSON.stringify(Zo(a)),
    s = E.useRef(!1);
  return (
    pg(() => {
      s.current = !0;
    }),
    E.useCallback(
      (u, o = {}) => {
        if ((ut(s.current, gg), !s.current)) return;
        if (typeof u == 'number') {
          n.go(u);
          return;
        }
        let c = Jo(u, JSON.parse(i), l, o.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Bt([t, c.pathname])),
          (o.replace ? n.replace : n.push)(c, o.state, o);
      },
      [t, n, i, l, e]
    )
  );
}
E.createContext(null);
function ii(e, { relative: t } = {}) {
  let { matches: n } = E.useContext(Et),
    { pathname: a } = Gt(),
    l = JSON.stringify(Zo(n));
  return E.useMemo(() => Jo(e, JSON.parse(l), a, t === 'path'), [e, l, a, t]);
}
function Gv(e, t) {
  return yg(e, t);
}
function yg(e, t, n, a) {
  var m;
  ne(
    Va(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: l } = E.useContext(ct),
    { matches: i } = E.useContext(Et),
    s = i[i.length - 1],
    r = s ? s.params : {},
    u = s ? s.pathname : '/',
    o = s ? s.pathnameBase : '/',
    c = s && s.route;
  {
    let g = (c && c.path) || '';
    vg(
      u,
      !c || g.endsWith('*') || g.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g === '/' ? '*' : `${g}/*`}">.`
    );
  }
  let h = Gt(),
    f;
  if (t) {
    let g = typeof t == 'string' ? ka(t) : t;
    ne(
      o === '/' || ((m = g.pathname) == null ? void 0 : m.startsWith(o)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${o}" but pathname "${g.pathname}" was given in the \`location\` prop.`
    ),
      (f = g);
  } else f = h;
  let p = f.pathname || '/',
    y = p;
  if (o !== '/') {
    let g = o.replace(/^\//, '').split('/');
    y = '/' + p.replace(/^\//, '').split('/').slice(g.length).join('/');
  }
  let x = cg(e, { pathname: y });
  ut(
    c || x != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ),
    ut(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let v = Jv(
    x &&
      x.map((g) =>
        Object.assign({}, g, {
          params: Object.assign({}, r, g.params),
          pathname: Bt([
            o,
            l.encodeLocation
              ? l.encodeLocation(g.pathname).pathname
              : g.pathname,
          ]),
          pathnameBase:
            g.pathnameBase === '/'
              ? o
              : Bt([
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
  return t && v
    ? E.createElement(
        li.Provider,
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
        v
      )
    : v;
}
function Xv() {
  let e = eb(),
    t = Bv(e)
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
var Qv = E.createElement(Xv, null),
  Kv = class extends E.Component {
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
            Et.Provider,
            { value: this.props.routeContext },
            E.createElement(Fo.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Zv({ routeContext: e, match: t, children: n }) {
  let a = E.useContext(Ya);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = t.route.id),
    E.createElement(Et.Provider, { value: e }, n)
  );
}
function Jv(e, t = [], n = null, a = null) {
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
    ne(
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
      p = null,
      y = null;
    n &&
      ((h = i && o.route.id ? i[o.route.id] : void 0),
      (p = o.route.errorElement || Qv),
      s &&
        (r < 0 && c === 0
          ? (vg(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (f = !0),
            (y = null))
          : r === c &&
            ((f = !0), (y = o.route.hydrateFallbackElement || null))));
    let x = t.concat(l.slice(0, c + 1)),
      v = () => {
        let m;
        return (
          h
            ? (m = p)
            : f
              ? (m = y)
              : o.route.Component
                ? (m = E.createElement(o.route.Component, null))
                : o.route.element
                  ? (m = o.route.element)
                  : (m = u),
          E.createElement(Zv, {
            match: o,
            routeContext: { outlet: u, matches: x, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (o.route.ErrorBoundary || o.route.errorElement || c === 0)
      ? E.createElement(Kv, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: h,
          children: v(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : v();
  }, null);
}
function Wo(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fv(e) {
  let t = E.useContext(Ya);
  return ne(t, Wo(e)), t;
}
function Wv(e) {
  let t = E.useContext(Gs);
  return ne(t, Wo(e)), t;
}
function Pv(e) {
  let t = E.useContext(Et);
  return ne(t, Wo(e)), t;
}
function Po(e) {
  let t = Pv(e),
    n = t.matches[t.matches.length - 1];
  return (
    ne(
      n.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    n.route.id
  );
}
function Iv() {
  return Po('useRouteId');
}
function eb() {
  var a;
  let e = E.useContext(Fo),
    t = Wv('useRouteError'),
    n = Po('useRouteError');
  return e !== void 0 ? e : (a = t.errors) == null ? void 0 : a[n];
}
function tb() {
  let { router: e } = Fv('useNavigate'),
    t = Po('useNavigate'),
    n = E.useRef(!1);
  return (
    pg(() => {
      n.current = !0;
    }),
    E.useCallback(
      async (l, i = {}) => {
        ut(n.current, gg),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...i }));
      },
      [e, t]
    )
  );
}
var Hf = {};
function vg(e, t, n) {
  !t && !Hf[e] && ((Hf[e] = !0), ut(!1, n));
}
E.memo(nb);
function nb({ routes: e, future: t, state: n }) {
  return yg(e, void 0, n, t);
}
function ab({ to: e, replace: t, state: n, relative: a }) {
  ne(
    Va(),
    '<Navigate> may be used only in the context of a <Router> component.'
  );
  let { static: l } = E.useContext(ct);
  ut(
    !l,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: i } = E.useContext(Et),
    { pathname: s } = Gt(),
    r = $a(),
    u = Jo(e, Zo(i), s, a === 'path'),
    o = JSON.stringify(u);
  return (
    E.useEffect(() => {
      r(JSON.parse(o), { replace: t, state: n, relative: a });
    }, [r, o, a, t, n]),
    null
  );
}
function Ue(e) {
  ne(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function lb({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: a = 'POP',
  navigator: l,
  static: i = !1,
}) {
  ne(
    !Va(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let s = e.replace(/^\/*/, '/'),
    r = E.useMemo(
      () => ({ basename: s, navigator: l, static: i, future: {} }),
      [s, l, i]
    );
  typeof n == 'string' && (n = ka(n));
  let {
      pathname: u = '/',
      search: o = '',
      hash: c = '',
      state: h = null,
      key: f = 'default',
    } = n,
    p = E.useMemo(() => {
      let y = pn(u, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: o, hash: c, state: h, key: f },
            navigationType: a,
          };
    }, [s, u, o, c, h, f, a]);
  return (
    ut(
      p != null,
      `<Router basename="${s}"> is not able to match the URL "${u}${o}${c}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    p == null
      ? null
      : E.createElement(
          ct.Provider,
          { value: r },
          E.createElement(li.Provider, { children: t, value: p })
        )
  );
}
function ib({ children: e, location: t }) {
  return Gv(Bu(e), t);
}
function Bu(e, t = []) {
  let n = [];
  return (
    E.Children.forEach(e, (a, l) => {
      if (!E.isValidElement(a)) return;
      let i = [...t, l];
      if (a.type === E.Fragment) {
        n.push.apply(n, Bu(a.props.children, i));
        return;
      }
      ne(
        a.type === Ue,
        `[${typeof a.type == 'string' ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ne(
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
      a.props.children && (s.children = Bu(a.props.children, i)), n.push(s);
    }),
    n
  );
}
var ki = 'get',
  Yi = 'application/x-www-form-urlencoded';
function Xs(e) {
  return e != null && typeof e.tagName == 'string';
}
function sb(e) {
  return Xs(e) && e.tagName.toLowerCase() === 'button';
}
function rb(e) {
  return Xs(e) && e.tagName.toLowerCase() === 'form';
}
function ub(e) {
  return Xs(e) && e.tagName.toLowerCase() === 'input';
}
function ob(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function cb(e, t) {
  return e.button === 0 && (!t || t === '_self') && !ob(e);
}
var ji = null;
function fb() {
  if (ji === null)
    try {
      new FormData(document.createElement('form'), 0), (ji = !1);
    } catch {
      ji = !0;
    }
  return ji;
}
var db = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function _r(e) {
  return e != null && !db.has(e)
    ? (ut(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yi}"`
      ),
      null)
    : e;
}
function hb(e, t) {
  let n, a, l, i, s;
  if (rb(e)) {
    let r = e.getAttribute('action');
    (a = r ? pn(r, t) : null),
      (n = e.getAttribute('method') || ki),
      (l = _r(e.getAttribute('enctype')) || Yi),
      (i = new FormData(e));
  } else if (sb(e) || (ub(e) && (e.type === 'submit' || e.type === 'image'))) {
    let r = e.form;
    if (r == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute('formaction') || r.getAttribute('action');
    if (
      ((a = u ? pn(u, t) : null),
      (n = e.getAttribute('formmethod') || r.getAttribute('method') || ki),
      (l =
        _r(e.getAttribute('formenctype')) ||
        _r(r.getAttribute('enctype')) ||
        Yi),
      (i = new FormData(r, e)),
      !fb())
    ) {
      let { name: o, type: c, value: h } = e;
      if (c === 'image') {
        let f = o ? `${o}.` : '';
        i.append(`${f}x`, '0'), i.append(`${f}y`, '0');
      } else o && i.append(o, h);
    }
  } else {
    if (Xs(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = ki), (a = null), (l = Yi), (s = e);
  }
  return (
    i && l === 'text/plain' && ((s = i), (i = void 0)),
    { action: a, method: n.toLowerCase(), encType: l, formData: i, body: s }
  );
}
function Io(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
async function mb(e, t) {
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
function gb(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function pb(e, t, n) {
  let a = await Promise.all(
    e.map(async (l) => {
      let i = t.routes[l.route.id];
      if (i) {
        let s = await mb(i, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return xb(
    a
      .flat(1)
      .filter(gb)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' }
      )
  );
}
function Bf(e, t, n, a, l, i) {
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
function yb(e, t) {
  return vb(
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
function vb(e) {
  return [...new Set(e)];
}
function bb(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let a of n) t[a] = e[a];
  return t;
}
function xb(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((a, l) => {
      let i = JSON.stringify(bb(l));
      return n.has(i) || (n.add(i), a.push({ key: i, link: l })), a;
    }, [])
  );
}
function Sb(e) {
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
function Eb() {
  let e = E.useContext(Ya);
  return (
    Io(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function wb() {
  let e = E.useContext(Gs);
  return (
    Io(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var ec = E.createContext(void 0);
ec.displayName = 'FrameworkContext';
function bg() {
  let e = E.useContext(ec);
  return (
    Io(e, 'You must render this element inside a <HydratedRouter> element'), e
  );
}
function Nb(e, t) {
  let n = E.useContext(ec),
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
      let x = (m) => {
          m.forEach((g) => {
            s(g.isIntersecting);
          });
        },
        v = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        f.current && v.observe(f.current),
        () => {
          v.disconnect();
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
  let p = () => {
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
            onFocus: el(r, p),
            onBlur: el(u, y),
            onMouseEnter: el(o, p),
            onMouseLeave: el(c, y),
            onTouchStart: el(h, p),
          },
        ]
    : [!1, f, {}];
}
function el(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function jb({ page: e, ...t }) {
  let { router: n } = Eb(),
    a = E.useMemo(() => cg(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return a
    ? E.createElement(Tb, { page: e, matches: a, ...t })
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function Ob(e) {
  let { manifest: t, routeModules: n } = bg(),
    [a, l] = E.useState([]);
  return (
    E.useEffect(() => {
      let i = !1;
      return (
        pb(e, t, n).then((s) => {
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
function Tb({ page: e, matches: t, ...n }) {
  let a = Gt(),
    { manifest: l, routeModules: i } = bg(),
    { loaderData: s, matches: r } = wb(),
    u = E.useMemo(() => Bf(e, t, r, l, a, 'data'), [e, t, r, l, a]),
    o = E.useMemo(() => Bf(e, t, r, l, a, 'assets'), [e, t, r, l, a]),
    c = E.useMemo(() => {
      if (e === a.pathname + a.search + a.hash) return [];
      let p = new Set(),
        y = !1;
      if (
        (t.forEach((v) => {
          var g;
          let m = l.routes[v.route.id];
          !m ||
            !m.hasLoader ||
            ((!u.some((b) => b.route.id === v.route.id) &&
              v.route.id in s &&
              (g = i[v.route.id]) != null &&
              g.shouldRevalidate) ||
            m.hasClientLoader
              ? (y = !0)
              : p.add(v.route.id));
        }),
        p.size === 0)
      )
        return [];
      let x = Sb(e);
      return (
        y &&
          p.size > 0 &&
          x.searchParams.set(
            '_routes',
            t
              .filter((v) => p.has(v.route.id))
              .map((v) => v.route.id)
              .join(',')
          ),
        [x.pathname + x.search]
      );
    }, [s, a, l, u, t, e, i]),
    h = E.useMemo(() => yb(o, l), [o, l]),
    f = Ob(o);
  return E.createElement(
    E.Fragment,
    null,
    c.map((p) =>
      E.createElement('link', {
        key: p,
        rel: 'prefetch',
        as: 'fetch',
        href: p,
        ...n,
      })
    ),
    h.map((p) =>
      E.createElement('link', { key: p, rel: 'modulepreload', href: p, ...n })
    ),
    f.map(({ key: p, link: y }) => E.createElement('link', { key: p, ...y }))
  );
}
function Rb(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var xg =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  xg && (window.__reactRouterVersion = '7.0.2');
} catch {}
function Ab({ basename: e, children: t, window: n }) {
  let a = E.useRef();
  a.current == null && (a.current = pv({ window: n, v5Compat: !0 }));
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
    E.createElement(lb, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: l,
    })
  );
}
var Sg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  tc = E.forwardRef(function (
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
    p
  ) {
    let { basename: y } = E.useContext(ct),
      x = typeof o == 'string' && Sg.test(o),
      v,
      m = !1;
    if (typeof o == 'string' && x && ((v = o), xg))
      try {
        let D = new URL(window.location.href),
          C = o.startsWith('//') ? new URL(D.protocol + o) : new URL(o),
          L = pn(C.pathname, y);
        C.origin === D.origin && L != null
          ? (o = L + C.search + C.hash)
          : (m = !0);
      } catch {
        ut(
          !1,
          `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let g = Vv(o, { relative: l }),
      [b, S, w] = Nb(a, f),
      j = Ub(o, {
        replace: s,
        state: r,
        target: u,
        preventScrollReset: c,
        relative: l,
        viewTransition: h,
      });
    function T(D) {
      t && t(D), D.defaultPrevented || j(D);
    }
    let R = E.createElement('a', {
      ...f,
      ...w,
      href: v || g,
      onClick: m || i ? t : T,
      ref: Rb(p, S),
      target: u,
      'data-discover': !x && n === 'render' ? 'true' : void 0,
    });
    return b && !x
      ? E.createElement(E.Fragment, null, R, E.createElement(jb, { page: g }))
      : R;
  });
tc.displayName = 'Link';
var Cb = E.forwardRef(function (
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
  let h = ii(s, { relative: o.relative }),
    f = Gt(),
    p = E.useContext(Gs),
    { navigator: y, basename: x } = E.useContext(ct),
    v = p != null && Bb(h) && r === !0,
    m = y.encodeLocation ? y.encodeLocation(h).pathname : h.pathname,
    g = f.pathname,
    b =
      p && p.navigation && p.navigation.location
        ? p.navigation.location.pathname
        : null;
  n ||
    ((g = g.toLowerCase()),
    (b = b ? b.toLowerCase() : null),
    (m = m.toLowerCase())),
    b && x && (b = pn(b, x) || b);
  const S = m !== '/' && m.endsWith('/') ? m.length - 1 : m.length;
  let w = g === m || (!l && g.startsWith(m) && g.charAt(S) === '/'),
    j =
      b != null &&
      (b === m || (!l && b.startsWith(m) && b.charAt(m.length) === '/')),
    T = { isActive: w, isPending: j, isTransitioning: v },
    R = w ? t : void 0,
    D;
  typeof a == 'function'
    ? (D = a(T))
    : (D = [
        a,
        w ? 'active' : null,
        j ? 'pending' : null,
        v ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let C = typeof i == 'function' ? i(T) : i;
  return E.createElement(
    tc,
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
Cb.displayName = 'NavLink';
var Db = E.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: n,
      reloadDocument: a,
      replace: l,
      state: i,
      method: s = ki,
      action: r,
      onSubmit: u,
      relative: o,
      preventScrollReset: c,
      viewTransition: h,
      ...f
    },
    p
  ) => {
    let y = _b(),
      x = Hb(r, { relative: o }),
      v = s.toLowerCase() === 'get' ? 'get' : 'post',
      m = typeof r == 'string' && Sg.test(r),
      g = (b) => {
        if ((u && u(b), b.defaultPrevented)) return;
        b.preventDefault();
        let S = b.nativeEvent.submitter,
          w = (S == null ? void 0 : S.getAttribute('formmethod')) || s;
        y(S || b.currentTarget, {
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
      ref: p,
      method: v,
      action: x,
      onSubmit: a ? u : g,
      ...f,
      'data-discover': !m && e === 'render' ? 'true' : void 0,
    });
  }
);
Db.displayName = 'Form';
function zb(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Eg(e) {
  let t = E.useContext(Ya);
  return ne(t, zb(e)), t;
}
function Ub(
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
  let r = $a(),
    u = Gt(),
    o = ii(e, { relative: i });
  return E.useCallback(
    (c) => {
      if (cb(c, t)) {
        c.preventDefault();
        let h = n !== void 0 ? n : Vl(u) === Vl(o);
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
var Lb = 0,
  Mb = () => `__${String(++Lb)}__`;
function _b() {
  let { router: e } = Eg('useSubmit'),
    { basename: t } = E.useContext(ct),
    n = Iv();
  return E.useCallback(
    async (a, l = {}) => {
      let { action: i, method: s, encType: r, formData: u, body: o } = hb(a, t);
      if (l.navigate === !1) {
        let c = l.fetcherKey || Mb();
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
function Hb(e, { relative: t } = {}) {
  let { basename: n } = E.useContext(ct),
    a = E.useContext(Et);
  ne(a, 'useFormAction must be used inside a RouteContext');
  let [l] = a.matches.slice(-1),
    i = { ...ii(e || '.', { relative: t }) },
    s = Gt();
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
    n !== '/' && (i.pathname = i.pathname === '/' ? n : Bt([n, i.pathname])),
    Vl(i)
  );
}
function Bb(e, t = {}) {
  let n = E.useContext(mg);
  ne(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = Eg('useViewTransitionState'),
    l = ii(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = pn(n.currentLocation.pathname, a) || n.currentLocation.pathname,
    s = pn(n.nextLocation.pathname, a) || n.nextLocation.pathname;
  return xs(l.pathname, s) != null || xs(l.pathname, i) != null;
}
new TextEncoder();
const nc = E.createContext(),
  qb = ({ children: e }) => {
    const [t, n] = E.useState('en');
    return d.jsx(nc.Provider, {
      value: { locale: t, setLocale: n },
      children: e,
    });
  },
  wg = E.createContext(),
  kb = ({ children: e }) => {
    const [t, n] = E.useState(() => {
      const a = localStorage.getItem('user');
      return a ? JSON.parse(a) : null;
    });
    return (
      E.useEffect(() => {
        t
          ? localStorage.setItem('user', JSON.stringify(t))
          : localStorage.removeItem('user');
      }, [t]),
      d.jsx(wg.Provider, { value: { user: t, setUser: n }, children: e })
    );
  },
  ac = () => E.useContext(wg),
  M = (e) => typeof e == 'string',
  tl = () => {
    let e, t;
    const n = new Promise((a, l) => {
      (e = a), (t = l);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  qf = (e) => (e == null ? '' : '' + e),
  Yb = (e, t, n) => {
    e.forEach((a) => {
      t[a] && (n[a] = t[a]);
    });
  },
  Vb = /###/g,
  kf = (e) => (e && e.indexOf('###') > -1 ? e.replace(Vb, '.') : e),
  Yf = (e) => !e || M(e),
  Ol = (e, t, n) => {
    const a = M(t) ? t.split('.') : t;
    let l = 0;
    for (; l < a.length - 1; ) {
      if (Yf(e)) return {};
      const i = kf(a[l]);
      !e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++l;
    }
    return Yf(e) ? {} : { obj: e, k: kf(a[l]) };
  },
  Vf = (e, t, n) => {
    const { obj: a, k: l } = Ol(e, t, Object);
    if (a !== void 0 || t.length === 1) {
      a[l] = n;
      return;
    }
    let i = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      r = Ol(e, s, Object);
    for (; r.obj === void 0 && s.length; )
      (i = `${s[s.length - 1]}.${i}`),
        (s = s.slice(0, s.length - 1)),
        (r = Ol(e, s, Object)),
        r != null &&
          r.obj &&
          typeof r.obj[`${r.k}.${i}`] < 'u' &&
          (r.obj = void 0);
    r.obj[`${r.k}.${i}`] = n;
  },
  $b = (e, t, n, a) => {
    const { obj: l, k: i } = Ol(e, t, Object);
    (l[i] = l[i] || []), l[i].push(n);
  },
  Ss = (e, t) => {
    const { obj: n, k: a } = Ol(e, t);
    if (n && Object.prototype.hasOwnProperty.call(n, a)) return n[a];
  },
  Gb = (e, t, n) => {
    const a = Ss(e, n);
    return a !== void 0 ? a : Ss(t, n);
  },
  Ng = (e, t, n) => {
    for (const a in t)
      a !== '__proto__' &&
        a !== 'constructor' &&
        (a in e
          ? M(e[a]) ||
            e[a] instanceof String ||
            M(t[a]) ||
            t[a] instanceof String
            ? n && (e[a] = t[a])
            : Ng(e[a], t[a], n)
          : (e[a] = t[a]));
    return e;
  },
  Pn = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var Xb = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const Qb = (e) => (M(e) ? e.replace(/[&<>"'\/]/g, (t) => Xb[t]) : e);
class Kb {
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
const Zb = [' ', ',', '?', '!', ';'],
  Jb = new Kb(20),
  Fb = (e, t, n) => {
    (t = t || ''), (n = n || '');
    const a = Zb.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (a.length === 0) return !0;
    const l = Jb.getRegExp(
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
  Es = (e) => (e == null ? void 0 : e.replace('_', '-')),
  Wb = {
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
class ws {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || Wb),
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
    return new ws(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new ws(this.logger, t)
    );
  }
}
var gt = new ws();
class Qs {
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
class $f extends Qs {
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
    const u = Ss(this.data, r);
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
      Vf(this.data, r, l),
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
    let u = Ss(this.data, r) || {};
    s.skipCopy || (a = JSON.parse(JSON.stringify(a))),
      l ? Ng(u, a, i) : (u = { ...u, ...a }),
      Vf(this.data, r, u),
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
var jg = {
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
const Gf = {};
class Ns extends Qs {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      Yb(
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
      (this.logger = gt.create('translator'));
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
        !Fb(t, a, l);
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
    const p = (h == null ? void 0 : h.usedKey) || s,
      y = (h == null ? void 0 : h.exactUsedKey) || s,
      x = Object.prototype.toString.apply(f),
      v = ['[object Number]', '[object Function]', '[object RegExp]'],
      m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      g = !this.i18nFormat || this.i18nFormat.handleAsObject,
      b = !M(f) && typeof f != 'boolean' && typeof f != 'number';
    if (g && f && b && v.indexOf(x) < 0 && !(M(m) && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          );
        const S = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(p, f, { ...n, ns: r })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return l
          ? ((h.res = S), (h.usedParams = this.getUsedParamsDetails(n)), h)
          : S;
      }
      if (i) {
        const S = Array.isArray(f),
          w = S ? [] : {},
          j = S ? y : p;
        for (const T in f)
          if (Object.prototype.hasOwnProperty.call(f, T)) {
            const R = `${j}${i}${T}`;
            (w[T] = this.translate(R, { ...n, joinArrays: !1, ns: r })),
              w[T] === R && (w[T] = f[T]);
          }
        f = w;
      }
    } else if (g && M(m) && Array.isArray(f))
      (f = f.join(m)), f && (f = this.extendTranslation(f, t, n, a));
    else {
      let S = !1,
        w = !1;
      const j = n.count !== void 0 && !M(n.count),
        T = Ns.hasDefaultValue(n),
        R = j ? this.pluralResolver.getSuffix(o, n.count, n) : '',
        D =
          n.ordinal && j
            ? this.pluralResolver.getSuffix(o, n.count, { ordinal: !1 })
            : '',
        C = j && !n.ordinal && n.count === 0,
        L =
          (C && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${R}`] ||
          n[`defaultValue${D}`] ||
          n.defaultValue;
      !this.isValidLookup(f) && T && ((S = !0), (f = L)),
        this.isValidLookup(f) || ((w = !0), (f = s));
      const oe =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          w
            ? void 0
            : f,
        xe = T && L !== f && this.options.updateMissing;
      if (w || S || xe) {
        if (
          (this.logger.log(
            xe ? 'updateKey' : 'missingKey',
            o,
            u,
            s,
            xe ? L : f
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
        let ze = [];
        const A = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && A && A[0])
          for (let U = 0; U < A.length; U++) ze.push(A[U]);
        else
          this.options.saveMissingTo === 'all'
            ? (ze = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : ze.push(n.lng || this.language);
        const z = (U, X, ee) => {
          var xn;
          const bn = T && ee !== f ? ee : oe;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(U, u, X, bn, xe, n)
            : (xn = this.backendConnector) != null &&
              xn.saveMissing &&
              this.backendConnector.saveMissing(U, u, X, bn, xe, n),
            this.emit('missingKey', U, u, X, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && j
            ? ze.forEach((U) => {
                const X = this.pluralResolver.getSuffixes(U, n);
                C &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  X.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  X.push(`${this.options.pluralSeparator}zero`),
                  X.forEach((ee) => {
                    z([U], s + ee, n[`defaultValue${ee}`] || L);
                  });
              })
            : z(ze, s, L));
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
      let p = a.replace && !M(a.replace) ? a.replace : a;
      if (
        (this.options.interpolation.defaultVariables &&
          (p = { ...this.options.interpolation.defaultVariables, ...p }),
        (t = this.interpolator.interpolate(
          t,
          p,
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
                var y = arguments.length, x = new Array(y), v = 0;
                v < y;
                v++
              )
                x[v] = arguments[v];
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
        (t = jg.handle(
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
          p = f && !n.ordinal && n.count === 0,
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
        h.forEach((v) => {
          var m, g;
          this.isValidLookup(a) ||
            ((r = v),
            !Gf[`${x[0]}-${v}`] &&
              (m = this.utils) != null &&
              m.hasLoadedNamespace &&
              !((g = this.utils) != null && g.hasLoadedNamespace(r)) &&
              ((Gf[`${x[0]}-${v}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${x.join(', ')}" won't get resolved as namespace "${r}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            x.forEach((b) => {
              var j;
              if (this.isValidLookup(a)) return;
              s = b;
              const S = [c];
              if ((j = this.i18nFormat) != null && j.addLookupKeys)
                this.i18nFormat.addLookupKeys(S, c, b, v, n);
              else {
                let T;
                f && (T = this.pluralResolver.getSuffix(b, n.count, n));
                const R = `${this.options.pluralSeparator}zero`,
                  D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (S.push(c + T),
                    n.ordinal &&
                      T.indexOf(D) === 0 &&
                      S.push(c + T.replace(D, this.options.pluralSeparator)),
                    p && S.push(c + R)),
                  y)
                ) {
                  const C = `${c}${this.options.contextSeparator}${n.context}`;
                  S.push(C),
                    f &&
                      (S.push(C + T),
                      n.ordinal &&
                        T.indexOf(D) === 0 &&
                        S.push(C + T.replace(D, this.options.pluralSeparator)),
                      p && S.push(C + R));
                }
              }
              let w;
              for (; (w = S.pop()); )
                this.isValidLookup(a) ||
                  ((i = w), (a = this.getResource(b, v, w, n)));
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
class Xf {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = gt.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = Es(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = Es(t)), !t || t.indexOf('-') < 0)) return t;
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
const Qf = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Kf = {
    select: (e) => (e === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class Pb {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = gt.create('pluralResolver')),
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
    const a = Es(t === 'dev' ? 'en' : t),
      l = n.ordinal ? 'ordinal' : 'cardinal',
      i = JSON.stringify({ cleanedCode: a, type: l });
    if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
    let s;
    try {
      s = new Intl.PluralRules(a, { type: l });
    } catch {
      if (!Intl)
        return (
          this.logger.error('No Intl support, please use an Intl polyfill!'), Kf
        );
      if (!t.match(/-|_/)) return Kf;
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
            .pluralCategories.sort((l, i) => Qf[l] - Qf[i])
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
const Zf = function (e, t, n) {
    let a =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = Gb(e, t, n);
    return (
      !i && l && M(n) && ((i = qu(e, n, a)), i === void 0 && (i = qu(t, n, a))),
      i
    );
  },
  Hr = (e) => e.replace(/\$/g, '$$$$');
class Ib {
  constructor() {
    var n;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = gt.create('interpolator')),
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
      nestingPrefixEscaped: p,
      nestingSuffix: y,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: v,
      maxReplaces: m,
      alwaysFormat: g,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : Qb),
      (this.escapeValue = a !== void 0 ? a : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = i ? Pn(i) : s || '{{'),
      (this.suffix = r ? Pn(r) : u || '}}'),
      (this.formatSeparator = o || ','),
      (this.unescapePrefix = c ? '' : h || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = f ? Pn(f) : p || Pn('$t(')),
      (this.nestingSuffix = y ? Pn(y) : x || Pn(')')),
      (this.nestingOptionsSeparator = v || ','),
      (this.maxReplaces = m || 1e3),
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
    var p;
    let i, s, r;
    const u =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      o = (y) => {
        if (y.indexOf(this.formatSeparator) < 0) {
          const g = Zf(
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
          v = x.shift().trim(),
          m = x.join(this.formatSeparator).trim();
        return this.format(
          Zf(
            n,
            u,
            v,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          m,
          a,
          { ...l, ...n, interpolationkey: v }
        );
      };
    this.resetRegExp();
    const c =
        (l == null ? void 0 : l.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      h =
        ((p = l == null ? void 0 : l.interpolation) == null
          ? void 0
          : p.skipOnVariables) !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (y) => Hr(y) },
        {
          regex: this.regexp,
          safeValue: (y) => (this.escapeValue ? Hr(this.escape(y)) : Hr(y)),
        },
      ].forEach((y) => {
        for (r = 0; (i = y.regex.exec(t)); ) {
          const x = i[1].trim();
          if (((s = o(x)), s === void 0))
            if (typeof c == 'function') {
              const m = c(t, i, l);
              s = M(m) ? m : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, x)) s = '';
            else if (h) {
              s = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${x} for interpolating ${t}`
              ),
                (s = '');
          else !M(s) && !this.useRawValueToEscape && (s = qf(s));
          const v = y.safeValue(s);
          if (
            ((t = t.replace(i[0], v)),
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
      const p = f.match(/'/g),
        y = f.match(/"/g);
      ((((p == null ? void 0 : p.length) ?? 0) % 2 === 0 && !y) ||
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
      M(i) || (i = qf(i)),
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
const ex = (e) => {
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
  In = (e) => {
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
      return r || ((r = e(Es(a), l)), (t[s] = r)), r(n);
    };
  };
class tx {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = gt.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: In((n, a) => {
          const l = new Intl.NumberFormat(n, { ...a });
          return (i) => l.format(i);
        }),
        currency: In((n, a) => {
          const l = new Intl.NumberFormat(n, { ...a, style: 'currency' });
          return (i) => l.format(i);
        }),
        datetime: In((n, a) => {
          const l = new Intl.DateTimeFormat(n, { ...a });
          return (i) => l.format(i);
        }),
        relativetime: In((n, a) => {
          const l = new Intl.RelativeTimeFormat(n, { ...a });
          return (i) => l.format(i, a.range || 'day');
        }),
        list: In((n, a) => {
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
    this.formats[t.toLowerCase().trim()] = In(n);
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
      const { formatName: o, formatOptions: c } = ex(u);
      if (this.formats[o]) {
        let f = r;
        try {
          const p =
              ((h = l == null ? void 0 : l.formatParams) == null
                ? void 0
                : h[l.interpolationkey]) || {},
            y = p.locale || p.lng || l.locale || l.lng || a;
          f = this.formats[o](r, y, { ...c, ...l, ...p });
        } catch (p) {
          this.logger.warn(p);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${o}`);
      return r;
    }, t);
  }
}
const nx = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class ax extends Qs {
  constructor(t, n, a) {
    var i, s;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = a),
      (this.languageUtils = a.languageUtils),
      (this.options = l),
      (this.logger = gt.create('backendConnector')),
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
      $b(u.loaded, [i], s),
        nx(u, t),
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
        const p = { ...s, isUpdate: i },
          y = this.backend.create.bind(this.backend);
        if (y.length < 6)
          try {
            let x;
            y.length === 5 ? (x = y(t, n, a, l, p)) : (x = y(t, n, a, l)),
              x && typeof x.then == 'function'
                ? x.then((v) => r(null, v)).catch(r)
                : r(null, x);
          } catch (x) {
            r(x);
          }
        else y(t, n, a, l, r, p);
      }
      !t || !t[0] || this.store.addResource(t[0], n, a, l);
    }
  }
}
const Jf = () => ({
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
  Ff = (e) => {
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
  Oi = () => {},
  lx = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == 'function' && (e[n] = e[n].bind(e));
    });
  };
class $l extends Qs {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Ff(t)),
      (this.services = {}),
      (this.logger = gt),
      (this.modules = { external: [] }),
      lx(this),
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
    const l = Jf();
    (this.options = { ...l, ...this.options, ...Ff(n) }),
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
        ? gt.init(i(this.modules.logger), this.options)
        : gt.init(null, this.options);
      let c;
      this.modules.formatter ? (c = this.modules.formatter) : (c = tx);
      const h = new Xf(this.options);
      this.store = new $f(this.options.resources, this.options);
      const f = this.services;
      (f.logger = gt),
        (f.resourceStore = this.store),
        (f.languageUtils = h),
        (f.pluralResolver = new Pb(h, {
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
        (f.interpolator = new Ib(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new ax(
          i(this.modules.backend),
          f.resourceStore,
          f,
          this.options
        )),
        f.backendConnector.on('*', function (p) {
          for (
            var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), v = 1;
            v < y;
            v++
          )
            x[v - 1] = arguments[v];
          t.emit(p, ...x);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = i(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = i(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Ns(this.services, this.options)),
        this.translator.on('*', function (p) {
          for (
            var y = arguments.length, x = new Array(y > 1 ? y - 1 : 0), v = 1;
            v < y;
            v++
          )
            x[v - 1] = arguments[v];
          t.emit(p, ...x);
        }),
        this.modules.external.forEach((p) => {
          p.init && p.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      a || (a = Oi),
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
    const u = tl(),
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
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oi;
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
    const l = tl();
    return (
      typeof t == 'function' && ((a = t), (t = void 0)),
      typeof n == 'function' && ((a = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      a || (a = Oi),
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
      t.type === 'postProcessor' && jg.addPostProcessor(t),
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
    const l = tl();
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
      let p;
      return (
        u.keyPrefix && Array.isArray(s)
          ? (p = s.map((y) => `${u.keyPrefix}${f}${y}`))
          : (p = u.keyPrefix ? `${u.keyPrefix}${f}${s}` : s),
        l.t(p, u)
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
    const a = tl();
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
    const a = tl();
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
        new Xf(Jf());
    return n.indexOf(a.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new $l(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oi;
    const a = t.forkResourceStore;
    a && delete t.forkResourceStore;
    const l = { ...this.options, ...t, isClone: !0 },
      i = new $l(l);
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
      (i.store = new $f(r, l)), (i.services.resourceStore = i.store);
    }
    return (
      (i.translator = new Ns(i.services, l)),
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
const Te = $l.createInstance();
Te.createInstance = $l.createInstance;
Te.createInstance;
Te.dir;
Te.init;
Te.loadResources;
Te.reloadResources;
Te.use;
Te.changeLanguage;
Te.getFixedT;
Te.t;
Te.exists;
Te.setDefaultNamespace;
Te.hasLoadedNamespace;
Te.loadNamespaces;
Te.loadLanguages;
var ix = {
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
const sx = Zu(ix);
var rx = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Wf(e) {
  var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]),
    (sx[n[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0),
    t.name.startsWith('!--'))
  ) {
    var a = e.indexOf('-->');
    return { type: 'comment', comment: a !== -1 ? e.slice(4, a) : '' };
  }
  for (var l = new RegExp(rx), i = null; (i = l.exec(e)) !== null; )
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
var ux = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  ox = /^\s*$/,
  cx = Object.create(null);
function Og(e, t) {
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
        t.voidElement ? e : e + t.children.reduce(Og, '') + '</' + t.name + '>'
      );
    case 'comment':
      return e + '<!--' + t.comment + '-->';
  }
}
var fx = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = cx);
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
      e.replace(ux, function (u, o) {
        if (s) {
          if (u !== '</' + n.name + '>') return;
          s = !1;
        }
        var c,
          h = u.charAt(1) !== '/',
          f = u.startsWith('<!--'),
          p = o + u.length,
          y = e.charAt(p);
        if (f) {
          var x = Wf(u);
          return i < 0 ? (a.push(x), a) : ((c = l[i]).children.push(x), a);
        }
        if (
          (h &&
            (i++,
            (n = Wf(u)).type === 'tag' &&
              t.components[n.name] &&
              ((n.type = 'component'), (s = !0)),
            n.voidElement ||
              s ||
              !y ||
              y === '<' ||
              n.children.push({
                type: 'text',
                content: e.slice(p, e.indexOf('<', p)),
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
          var v = e.indexOf('<', p),
            m = e.slice(p, v === -1 ? void 0 : v);
          ox.test(m) && (m = ' '),
            ((v > -1 && i + c.length >= 0) || m !== ' ') &&
              c.push({ type: 'text', content: m });
        }
      }),
      a
    );
  },
  stringify: function (e) {
    return e.reduce(function (t, n) {
      return t + Og('', n);
    }, '');
  },
};
const Vi = (...e) => {
    console != null &&
      console.warn &&
      (nt(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  Pf = {},
  Gl = (...e) => {
    (nt(e[0]) && Pf[e[0]]) || (nt(e[0]) && (Pf[e[0]] = new Date()), Vi(...e));
  },
  Tg = (e, t) => () => {
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
  ku = (e, t, n) => {
    e.loadNamespaces(t, Tg(e, n));
  },
  If = (e, t, n, a) => {
    if (
      (nt(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return ku(e, n, a);
    n.forEach((l) => {
      e.options.ns.indexOf(l) < 0 && e.options.ns.push(l);
    }),
      e.loadLanguages(t, Tg(e, a));
  },
  dx = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (Gl('i18n.languages were undefined or empty', t.languages), !0)
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
  nt = (e) => typeof e == 'string',
  An = (e) => typeof e == 'object' && e !== null,
  hx =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  mx = {
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
  gx = (e) => mx[e],
  px = (e) => e.replace(hx, gx);
let Yu = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: px,
};
const yx = (e = {}) => {
    Yu = { ...Yu, ...e };
  },
  Rg = () => Yu;
let Ag;
const vx = (e) => {
    Ag = e;
  },
  lc = () => Ag,
  Br = (e, t) => {
    var a;
    if (!e) return !1;
    const n = ((a = e.props) == null ? void 0 : a.children) ?? e.children;
    return t ? n.length > 0 : !!n;
  },
  qr = (e) => {
    var n, a;
    if (!e) return [];
    const t = ((n = e.props) == null ? void 0 : n.children) ?? e.children;
    return (a = e.props) != null && a.i18nIsDynamicList ? ga(t) : t;
  },
  bx = (e) => Array.isArray(e) && e.every(E.isValidElement),
  ga = (e) => (Array.isArray(e) ? e : [e]),
  xx = (e, t) => {
    const n = { ...t };
    return (n.props = Object.assign(e.props, t.props)), n;
  },
  Cg = (e, t) => {
    if (!e) return '';
    let n = '';
    const a = ga(e),
      l =
        t != null && t.transSupportBasicHtmlNodes
          ? (t.transKeepBasicHtmlNodesFor ?? [])
          : [];
    return (
      a.forEach((i, s) => {
        if (nt(i)) n += `${i}`;
        else if (E.isValidElement(i)) {
          const { props: r, type: u } = i,
            o = Object.keys(r).length,
            c = l.indexOf(u) > -1,
            h = r.children;
          if (!h && c && !o) n += `<${u}/>`;
          else if ((!h && (!c || o)) || r.i18nIsDynamicList)
            n += `<${s}></${s}>`;
          else if (c && o === 1 && nt(h)) n += `<${u}>${h}</${u}>`;
          else {
            const f = Cg(h, t);
            n += `<${s}>${f}</${s}>`;
          }
        } else if (i === null)
          Vi(
            'Trans: the passed in value is invalid - seems you passed in a null child.'
          );
        else if (An(i)) {
          const { format: r, ...u } = i,
            o = Object.keys(u);
          if (o.length === 1) {
            const c = r ? `${o[0]}, ${r}` : o[0];
            n += `{{${c}}}`;
          } else
            Vi(
              'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
              i
            );
        } else
          Vi(
            'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
            i
          );
      }),
      n
    );
  },
  Sx = (e, t, n, a, l, i) => {
    if (t === '') return [];
    const s = a.transKeepBasicHtmlNodesFor || [],
      r = t && new RegExp(s.map((v) => `<${v}`).join('|')).test(t);
    if (!e && !r && !i) return [t];
    const u = {},
      o = (v) => {
        ga(v).forEach((g) => {
          nt(g) ||
            (Br(g)
              ? o(qr(g))
              : An(g) && !E.isValidElement(g) && Object.assign(u, g));
        });
      };
    o(e);
    const c = fx.parse(`<0>${t}</0>`),
      h = { ...u, ...l },
      f = (v, m, g) => {
        var w;
        const b = qr(v),
          S = y(b, m.children, g);
        return (bx(b) && S.length === 0) ||
          ((w = v.props) != null && w.i18nIsDynamicList)
          ? b
          : S;
      },
      p = (v, m, g, b, S) => {
        v.dummy
          ? ((v.children = m),
            g.push(E.cloneElement(v, { key: b }, S ? void 0 : m)))
          : g.push(
              ...E.Children.map([v], (w) => {
                const j = { ...w.props };
                return (
                  delete j.i18nIsDynamicList,
                  E.createElement(
                    w.type,
                    { ...j, key: b, ref: w.ref },
                    S ? null : m
                  )
                );
              })
            );
      },
      y = (v, m, g) => {
        const b = ga(v);
        return ga(m).reduce((w, j, T) => {
          var D, C;
          const R =
            ((C = (D = j.children) == null ? void 0 : D[0]) == null
              ? void 0
              : C.content) &&
            n.services.interpolator.interpolate(
              j.children[0].content,
              h,
              n.language
            );
          if (j.type === 'tag') {
            let L = b[parseInt(j.name, 10)];
            g.length === 1 && !L && (L = g[0][j.name]), L || (L = {});
            const _ =
                Object.keys(j.attrs).length !== 0
                  ? xx({ props: j.attrs }, L)
                  : L,
              oe = E.isValidElement(_),
              xe = oe && Br(j, !0) && !j.voidElement,
              ze = r && An(_) && _.dummy && !oe,
              A = An(e) && Object.hasOwnProperty.call(e, j.name);
            if (nt(_)) {
              const z = n.services.interpolator.interpolate(_, h, n.language);
              w.push(z);
            } else if (Br(_) || xe) {
              const z = f(_, j, g);
              p(_, z, w, T);
            } else if (ze) {
              const z = y(b, j.children, g);
              p(_, z, w, T);
            } else if (Number.isNaN(parseFloat(j.name)))
              if (A) {
                const z = f(_, j, g);
                p(_, z, w, T, j.voidElement);
              } else if (a.transSupportBasicHtmlNodes && s.indexOf(j.name) > -1)
                if (j.voidElement)
                  w.push(E.createElement(j.name, { key: `${j.name}-${T}` }));
                else {
                  const z = y(b, j.children, g);
                  w.push(E.createElement(j.name, { key: `${j.name}-${T}` }, z));
                }
              else if (j.voidElement) w.push(`<${j.name} />`);
              else {
                const z = y(b, j.children, g);
                w.push(`<${j.name}>${z}</${j.name}>`);
              }
            else if (An(_) && !oe) {
              const z = j.children[0] ? R : null;
              z && w.push(z);
            } else p(_, R, w, T, j.children.length !== 1 || !R);
          } else if (j.type === 'text') {
            const L = a.transWrapTextNodes,
              _ = i
                ? a.unescape(
                    n.services.interpolator.interpolate(
                      j.content,
                      h,
                      n.language
                    )
                  )
                : n.services.interpolator.interpolate(j.content, h, n.language);
            L
              ? w.push(E.createElement(L, { key: `${j.name}-${T}` }, _))
              : w.push(_);
          }
          return w;
        }, []);
      },
      x = y([{ dummy: !0, children: e || [] }], c, ga(e || []));
    return qr(x[0]);
  },
  Dg = (e, t, n) => {
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
  Ex = (e, t) => e.map((n, a) => Dg(n, a, t)),
  wx = (e, t) => {
    const n = {};
    return (
      Object.keys(e).forEach((a) => {
        Object.assign(n, { [a]: Dg(e[a], a, t) });
      }),
      n
    );
  },
  Nx = (e, t) =>
    e
      ? Array.isArray(e)
        ? Ex(e, t)
        : An(e)
          ? wx(e, t)
          : (Gl('<Trans /> component prop expects an object or an array'), null)
      : null;
function jx({
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
  ...p
}) {
  var _, oe, xe, ze, A, z;
  const y = c || lc();
  if (!y)
    return (
      Gl(
        'You will need to pass in an i18next instance by using i18nextReactModule'
      ),
      e
    );
  const x = h || y.t.bind(y) || ((U) => U),
    v = { ...Rg(), ...((_ = y.options) == null ? void 0 : _.react) };
  let m = o || x.ns || ((oe = y.options) == null ? void 0 : oe.defaultNS);
  m = nt(m) ? [m] : m || ['translation'];
  const g = Cg(e, v),
    b = r || g || v.transEmptyNodeValue || a,
    { hashTransKey: S } = v,
    w = a || (S ? S(g || b) : g || b);
  (ze = (xe = y.options) == null ? void 0 : xe.interpolation) != null &&
    ze.defaultVariables &&
    (s =
      s && Object.keys(s).length > 0
        ? { ...s, ...y.options.interpolation.defaultVariables }
        : { ...y.options.interpolation.defaultVariables });
  const j =
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
      ...j,
      defaultValue: b,
      ns: m,
    },
    R = w ? x(w, T) : b,
    D = Nx(u, R),
    C = Sx(D || e, R, y, v, T, f),
    L = n ?? v.defaultTransParent;
  return L ? E.createElement(L, p, C) : C;
}
const Ox = {
    type: '3rdParty',
    init(e) {
      yx(e.options.react), vx(e);
    },
  },
  zg = E.createContext();
class Tx {
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
function Dt({
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
  ...p
}) {
  var g;
  const { i18n: y, defaultNS: x } = E.useContext(zg) || {},
    v = c || y || lc(),
    m = h || (v == null ? void 0 : v.t.bind(v));
  return jx({
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
      (m == null ? void 0 : m.ns) ||
      x ||
      ((g = v == null ? void 0 : v.options) == null ? void 0 : g.defaultNS),
    i18n: v,
    t: h,
    shouldUnescape: f,
    ...p,
  });
}
const Rx = (e, t) => {
    const n = E.useRef();
    return (
      E.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  Ug = (e, t, n, a) => e.getFixedT(t, n, a),
  Ax = (e, t, n, a) => E.useCallback(Ug(e, t, n, a), [e, t, n, a]),
  wt = (e, t = {}) => {
    var S, w, j, T;
    const { i18n: n } = t,
      { i18n: a, defaultNS: l } = E.useContext(zg) || {},
      i = n || a || lc();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new Tx()), !i)) {
      Gl(
        'You will need to pass in an i18next instance by using initReactI18next'
      );
      const R = (C, L) =>
          nt(L)
            ? L
            : An(L) && nt(L.defaultValue)
              ? L.defaultValue
              : Array.isArray(C)
                ? C[C.length - 1]
                : C,
        D = [R, {}, !1];
      return (D.t = R), (D.i18n = {}), (D.ready = !1), D;
    }
    (S = i.options.react) != null &&
      S.wait &&
      Gl(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    const s = { ...Rg(), ...i.options.react, ...t },
      { useSuspense: r, keyPrefix: u } = s;
    let o = l || ((w = i.options) == null ? void 0 : w.defaultNS);
    (o = nt(o) ? [o] : o || ['translation']),
      (T = (j = i.reportNamespaces).addUsedNamespaces) == null || T.call(j, o);
    const c =
        (i.isInitialized || i.initializedStoreOnce) &&
        o.every((R) => dx(R, i, s)),
      h = Ax(i, t.lng || null, s.nsMode === 'fallback' ? o : o[0], u),
      f = () => h,
      p = () => Ug(i, t.lng || null, s.nsMode === 'fallback' ? o : o[0], u),
      [y, x] = E.useState(f);
    let v = o.join();
    t.lng && (v = `${t.lng}${v}`);
    const m = Rx(v),
      g = E.useRef(!0);
    E.useEffect(() => {
      const { bindI18n: R, bindI18nStore: D } = s;
      (g.current = !0),
        !c &&
          !r &&
          (t.lng
            ? If(i, t.lng, o, () => {
                g.current && x(p);
              })
            : ku(i, o, () => {
                g.current && x(p);
              })),
        c && m && m !== v && g.current && x(p);
      const C = () => {
        g.current && x(p);
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
    }, [i, v]),
      E.useEffect(() => {
        g.current && c && x(f);
      }, [i, u, c]);
    const b = [y, i, c];
    if (((b.t = y), (b.i18n = i), (b.ready = c), c || (!c && !r))) return b;
    throw new Promise((R) => {
      t.lng ? If(i, t.lng, o, () => R()) : ku(i, o, () => R());
    });
  },
  { slice: Cx, forEach: Dx } = [];
function zx(e) {
  return (
    Dx.call(Cx.call(arguments, 1), (t) => {
      if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
const ed = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Ux = function (e, t) {
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
      if (!ed.test(a.domain)) throw new TypeError('option domain is invalid');
      i += `; Domain=${a.domain}`;
    }
    if (a.path) {
      if (!ed.test(a.path)) throw new TypeError('option path is invalid');
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
  td = {
    create(e, t, n, a) {
      let l =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      n &&
        ((l.expires = new Date()),
        l.expires.setTime(l.expires.getTime() + n * 60 * 1e3)),
        a && (l.domain = a),
        (document.cookie = Ux(e, encodeURIComponent(t), l));
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
var Lx = {
    name: 'cookie',
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < 'u') return td.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: a,
        cookieDomain: l,
        cookieOptions: i,
      } = t;
      n && typeof document < 'u' && td.create(n, e, a, l, i);
    },
  },
  Mx = {
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
let nl = null;
const nd = () => {
  if (nl !== null) return nl;
  try {
    nl = window !== 'undefined' && window.localStorage !== null;
    const e = 'i18next.translate.boo';
    window.localStorage.setItem(e, 'foo'), window.localStorage.removeItem(e);
  } catch {
    nl = !1;
  }
  return nl;
};
var _x = {
  name: 'localStorage',
  lookup(e) {
    let { lookupLocalStorage: t } = e;
    if (t && nd()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: n } = t;
    n && nd() && window.localStorage.setItem(n, e);
  },
};
let al = null;
const ad = () => {
  if (al !== null) return al;
  try {
    al = window !== 'undefined' && window.sessionStorage !== null;
    const e = 'i18next.translate.boo';
    window.sessionStorage.setItem(e, 'foo'),
      window.sessionStorage.removeItem(e);
  } catch {
    al = !1;
  }
  return al;
};
var Hx = {
    name: 'sessionStorage',
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && ad()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t;
      n && ad() && window.sessionStorage.setItem(n, e);
    },
  },
  Bx = {
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
  qx = {
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
  kx = {
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
  Yx = {
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
let Lg = !1;
try {
  document.cookie, (Lg = !0);
} catch {}
const Mg = [
  'querystring',
  'cookie',
  'localStorage',
  'sessionStorage',
  'navigator',
  'htmlTag',
];
Lg || Mg.splice(1, 1);
const Vx = () => ({
  order: Mg,
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  convertDetectedLanguage: (e) => e,
});
class _g {
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
      (this.options = zx(n, this.options || {}, Vx())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (l) => l.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = a),
      this.addDetector(Lx),
      this.addDetector(Mx),
      this.addDetector(_x),
      this.addDetector(Hx),
      this.addDetector(Bx),
      this.addDetector(qx),
      this.addDetector(kx),
      this.addDetector(Yx);
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
_g.type = 'languageDetector';
const $x = {
  en: {
    translation: {
      navbar: {
        plans: 'Performance Plans',
        actorsintroduction: 'Actors Introduction',
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
        actorsmanagement: 'Actors Management',
      },
      actors: { note: '*Sorted alphabetically by name' },
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
        actorsintroduction: '演员介绍',
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
        actorsmanagement: '演员管理',
      },
      actors: { note: '*按照名字首字母顺序排列' },
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
Te.use(_g)
  .use(Ox)
  .init({
    resources: $x,
    fallbackLng: 'en',
    interpolation: { escapeValue: !1 },
  });
const Gx = [
    { key: 'plans', href: '/plans' },
    { key: 'actorsintroduction', href: '/actorsintroduction' },
    { key: 'memberships', href: '/memberships' },
    { key: 'about', href: '/contact' },
  ],
  Xx = [
    { key: 'talkshow', href: '/talkshow' },
    { key: 'guidelines', href: '/guidelines' },
    { key: 'rental', href: '/rental' },
    { key: 'recruitment', href: '/recruitment' },
    { key: 'actorsmanagement', href: '/actorsmanagement' },
  ];
function Xt() {
  const e = Gt(),
    t = $a(),
    { t: n, i18n: a } = wt(),
    [l, i] = E.useState(!1),
    s = E.useRef(null),
    { locale: r, setLocale: u } = E.useContext(nc),
    { user: o, setUser: c } = ac(),
    [h, f] = E.useState(!!o);
  E.useEffect(() => {
    f(!!o);
  }, [o]);
  const p = () => {
      c(null),
        localStorage.removeItem('user'),
        localStorage.removeItem('token'),
        f(!1),
        t('/login');
    },
    y = () => {
      clearTimeout(s.current), i(!0);
    },
    x = () => {
      s.current = setTimeout(() => {
        i(!1);
      }, 300);
    },
    v = () => {
      const m = a.language === 'en' ? 'zh' : 'en';
      a.changeLanguage(m), u(m);
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
              Gx.map((m) =>
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
                onMouseEnter: y,
                onMouseLeave: x,
                children: [
                  d.jsx('button', {
                    className:
                      'text-lg font-bold text-black hover:text-orange-200',
                    children: n('navbar.more'),
                  }),
                  l &&
                    d.jsx('div', {
                      className:
                        'absolute left-0 mt-2 w-24 bg-orange-500 rounded-lg shadow-lg z-20',
                      children: Xx.map((m) =>
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
              h
                ? d.jsxs('button', {
                    onClick: p,
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
                onClick: v,
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
                    children: r === 'en' ? '中文' : 'English',
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
function Qx() {
  const { t: e } = wt();
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
const Ti = [
  { id: 1, image: '/images/contactus/apan.jpg' },
  { id: 2, image: '/images/contactus/chenxiaojing.jpg' },
  { id: 3, image: '/images/contactus/lianghaiyuan.jpg' },
  { id: 4, image: '/images/contactus/niandudakaxiu.jpg' },
  { id: 5, image: '/images/contactus/zhaijianing.jpg' },
  { id: 6, image: '/images/contactus/zhanghaozhe.jpg' },
  { id: 7, image: '/images/contactus/heideng.jpg' },
];
function Kx() {
  const { t: e } = wt(),
    [t, n] = E.useState(0),
    a = () => {
      t < Ti.length - 3 && n((s) => s + 1);
    },
    l = () => {
      t > 0 && n((s) => s - 1);
    },
    i = Ti.slice(t, t + 3);
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
            disabled: t >= Ti.length - 3,
            className: `absolute right-0 p-3 rounded-full text-white transition-transform transform hover:scale-110 z-10 ${t >= Ti.length - 3 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-orange-600'}`,
            children: '›',
          }),
        ],
      }),
    ],
  });
}
function Zx() {
  const { t: e } = wt();
  return d.jsx('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover bg-center min-h-screen items-center p-5",
    children: d.jsxs('div', {
      className: 'pt-0 px-8 pb-8',
      children: [
        d.jsx('div', {
          className: '-mt-5 top-0 left-0 right-0 z-50',
          children: d.jsx(Xt, {}),
        }),
        d.jsx('div', { className: '-mt-2', children: d.jsx(Kx, {}) }),
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
        d.jsx('div', { className: '-mt-40', children: d.jsx(Qx, {}) }),
      ],
    }),
  });
}
function Hg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Jx } = Object.prototype,
  { getPrototypeOf: ic } = Object,
  Ks = ((e) => (t) => {
    const n = Jx.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ft = (e) => ((e = e.toLowerCase()), (t) => Ks(t) === e),
  Zs = (e) => (t) => typeof t === e,
  { isArray: Ga } = Array,
  Xl = Zs('undefined');
function Fx(e) {
  return (
    e !== null &&
    !Xl(e) &&
    e.constructor !== null &&
    !Xl(e.constructor) &&
    Ge(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Bg = ft('ArrayBuffer');
function Wx(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Bg(e.buffer)),
    t
  );
}
const Px = Zs('string'),
  Ge = Zs('function'),
  qg = Zs('number'),
  Js = (e) => e !== null && typeof e == 'object',
  Ix = (e) => e === !0 || e === !1,
  $i = (e) => {
    if (Ks(e) !== 'object') return !1;
    const t = ic(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  e1 = ft('Date'),
  t1 = ft('File'),
  n1 = ft('Blob'),
  a1 = ft('FileList'),
  l1 = (e) => Js(e) && Ge(e.pipe),
  i1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ge(e.append) &&
          ((t = Ks(e)) === 'formdata' ||
            (t === 'object' &&
              Ge(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  s1 = ft('URLSearchParams'),
  [r1, u1, o1, c1] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    ft
  ),
  f1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function si(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let a, l;
  if ((typeof e != 'object' && (e = [e]), Ga(e)))
    for (a = 0, l = e.length; a < l; a++) t.call(null, e[a], a, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let r;
    for (a = 0; a < s; a++) (r = i[a]), t.call(null, e[r], r, e);
  }
}
function kg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let a = n.length,
    l;
  for (; a-- > 0; ) if (((l = n[a]), t === l.toLowerCase())) return l;
  return null;
}
const Cn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Yg = (e) => !Xl(e) && e !== Cn;
function Vu() {
  const { caseless: e } = (Yg(this) && this) || {},
    t = {},
    n = (a, l) => {
      const i = (e && kg(t, l)) || l;
      $i(t[i]) && $i(a)
        ? (t[i] = Vu(t[i], a))
        : $i(a)
          ? (t[i] = Vu({}, a))
          : Ga(a)
            ? (t[i] = a.slice())
            : (t[i] = a);
    };
  for (let a = 0, l = arguments.length; a < l; a++)
    arguments[a] && si(arguments[a], n);
  return t;
}
const d1 = (e, t, n, { allOwnKeys: a } = {}) => (
    si(
      t,
      (l, i) => {
        n && Ge(l) ? (e[i] = Hg(l, n)) : (e[i] = l);
      },
      { allOwnKeys: a }
    ),
    e
  ),
  h1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  m1 = (e, t, n, a) => {
    (e.prototype = Object.create(t.prototype, a)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  g1 = (e, t, n, a) => {
    let l, i, s;
    const r = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), i = l.length; i-- > 0; )
        (s = l[i]), (!a || a(s, e, t)) && !r[s] && ((t[s] = e[s]), (r[s] = !0));
      e = n !== !1 && ic(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  p1 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const a = e.indexOf(t, n);
    return a !== -1 && a === n;
  },
  y1 = (e) => {
    if (!e) return null;
    if (Ga(e)) return e;
    let t = e.length;
    if (!qg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  v1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && ic(Uint8Array)),
  b1 = (e, t) => {
    const a = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = a.next()) && !l.done; ) {
      const i = l.value;
      t.call(e, i[0], i[1]);
    }
  },
  x1 = (e, t) => {
    let n;
    const a = [];
    for (; (n = e.exec(t)) !== null; ) a.push(n);
    return a;
  },
  S1 = ft('HTMLFormElement'),
  E1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, a, l) {
      return a.toUpperCase() + l;
    }),
  ld = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  w1 = ft('RegExp'),
  Vg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      a = {};
    si(n, (l, i) => {
      let s;
      (s = t(l, i, e)) !== !1 && (a[i] = s || l);
    }),
      Object.defineProperties(e, a);
  },
  N1 = (e) => {
    Vg(e, (t, n) => {
      if (Ge(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const a = e[n];
      if (Ge(a)) {
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
  j1 = (e, t) => {
    const n = {},
      a = (l) => {
        l.forEach((i) => {
          n[i] = !0;
        });
      };
    return Ga(e) ? a(e) : a(String(e).split(t)), n;
  },
  O1 = () => {},
  T1 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  kr = 'abcdefghijklmnopqrstuvwxyz',
  id = '0123456789',
  $g = { DIGIT: id, ALPHA: kr, ALPHA_DIGIT: kr + kr.toUpperCase() + id },
  R1 = (e = 16, t = $g.ALPHA_DIGIT) => {
    let n = '';
    const { length: a } = t;
    for (; e--; ) n += t[(Math.random() * a) | 0];
    return n;
  };
function A1(e) {
  return !!(
    e &&
    Ge(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const C1 = (e) => {
    const t = new Array(10),
      n = (a, l) => {
        if (Js(a)) {
          if (t.indexOf(a) >= 0) return;
          if (!('toJSON' in a)) {
            t[l] = a;
            const i = Ga(a) ? [] : {};
            return (
              si(a, (s, r) => {
                const u = n(s, l + 1);
                !Xl(u) && (i[r] = u);
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
  D1 = ft('AsyncFunction'),
  z1 = (e) => e && (Js(e) || Ge(e)) && Ge(e.then) && Ge(e.catch),
  Gg = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, a) => (
            Cn.addEventListener(
              'message',
              ({ source: l, data: i }) => {
                l === Cn && i === n && a.length && a.shift()();
              },
              !1
            ),
            (l) => {
              a.push(l), Cn.postMessage(n, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    Ge(Cn.postMessage)
  ),
  U1 =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Cn)
      : (typeof process < 'u' && process.nextTick) || Gg,
  N = {
    isArray: Ga,
    isArrayBuffer: Bg,
    isBuffer: Fx,
    isFormData: i1,
    isArrayBufferView: Wx,
    isString: Px,
    isNumber: qg,
    isBoolean: Ix,
    isObject: Js,
    isPlainObject: $i,
    isReadableStream: r1,
    isRequest: u1,
    isResponse: o1,
    isHeaders: c1,
    isUndefined: Xl,
    isDate: e1,
    isFile: t1,
    isBlob: n1,
    isRegExp: w1,
    isFunction: Ge,
    isStream: l1,
    isURLSearchParams: s1,
    isTypedArray: v1,
    isFileList: a1,
    forEach: si,
    merge: Vu,
    extend: d1,
    trim: f1,
    stripBOM: h1,
    inherits: m1,
    toFlatObject: g1,
    kindOf: Ks,
    kindOfTest: ft,
    endsWith: p1,
    toArray: y1,
    forEachEntry: b1,
    matchAll: x1,
    isHTMLForm: S1,
    hasOwnProperty: ld,
    hasOwnProp: ld,
    reduceDescriptors: Vg,
    freezeMethods: N1,
    toObjectSet: j1,
    toCamelCase: E1,
    noop: O1,
    toFiniteNumber: T1,
    findKey: kg,
    global: Cn,
    isContextDefined: Yg,
    ALPHABET: $g,
    generateString: R1,
    isSpecCompliantForm: A1,
    toJSONObject: C1,
    isAsyncFn: D1,
    isThenable: z1,
    setImmediate: Gg,
    asap: U1,
  };
function H(e, t, n, a, l) {
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
N.inherits(H, Error, {
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
const Xg = H.prototype,
  Qg = {};
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
  Qg[e] = { value: e };
});
Object.defineProperties(H, Qg);
Object.defineProperty(Xg, 'isAxiosError', { value: !0 });
H.from = (e, t, n, a, l, i) => {
  const s = Object.create(Xg);
  return (
    N.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (r) => r !== 'isAxiosError'
    ),
    H.call(s, e.message, t, n, a, l),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const L1 = null;
function $u(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function Kg(e) {
  return N.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function sd(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, i) {
          return (l = Kg(l)), !n && i ? '[' + l + ']' : l;
        })
        .join(n ? '.' : '')
    : t;
}
function M1(e) {
  return N.isArray(e) && !e.some($u);
}
const _1 = N.toFlatObject(N, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Fs(e, t, n) {
  if (!N.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = N.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, v) {
        return !N.isUndefined(v[x]);
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
      throw new H('Blob is not supported. Use a Buffer instead.');
    return N.isArrayBuffer(y) || N.isTypedArray(y)
      ? u && typeof Blob == 'function'
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, x, v) {
    let m = y;
    if (y && !v && typeof y == 'object') {
      if (N.endsWith(x, '{}'))
        (x = a ? x : x.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (N.isArray(y) && M1(y)) ||
        ((N.isFileList(y) || N.endsWith(x, '[]')) && (m = N.toArray(y)))
      )
        return (
          (x = Kg(x)),
          m.forEach(function (b, S) {
            !(N.isUndefined(b) || b === null) &&
              t.append(
                s === !0 ? sd([x], S, i) : s === null ? x : x + '[]',
                o(b)
              );
          }),
          !1
        );
    }
    return $u(y) ? !0 : (t.append(sd(v, x, i), o(y)), !1);
  }
  const h = [],
    f = Object.assign(_1, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: $u,
    });
  function p(y, x) {
    if (!N.isUndefined(y)) {
      if (h.indexOf(y) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      h.push(y),
        N.forEach(y, function (m, g) {
          (!(N.isUndefined(m) || m === null) &&
            l.call(t, m, N.isString(g) ? g.trim() : g, x, f)) === !0 &&
            p(m, x ? x.concat(g) : [g]);
        }),
        h.pop();
    }
  }
  if (!N.isObject(e)) throw new TypeError('data must be an object');
  return p(e), t;
}
function rd(e) {
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
function sc(e, t) {
  (this._pairs = []), e && Fs(e, this, t);
}
const Zg = sc.prototype;
Zg.append = function (t, n) {
  this._pairs.push([t, n]);
};
Zg.toString = function (t) {
  const n = t
    ? function (a) {
        return t.call(this, a, rd);
      }
    : rd;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + '=' + n(l[1]);
    }, '')
    .join('&');
};
function H1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Jg(e, t, n) {
  if (!t) return e;
  const a = (n && n.encode) || H1;
  N.isFunction(n) && (n = { serialize: n });
  const l = n && n.serialize;
  let i;
  if (
    (l
      ? (i = l(t, n))
      : (i = N.isURLSearchParams(t) ? t.toString() : new sc(t, n).toString(a)),
    i)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class ud {
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
const Fg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  B1 = typeof URLSearchParams < 'u' ? URLSearchParams : sc,
  q1 = typeof FormData < 'u' ? FormData : null,
  k1 = typeof Blob < 'u' ? Blob : null,
  Y1 = {
    isBrowser: !0,
    classes: { URLSearchParams: B1, FormData: q1, Blob: k1 },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  rc = typeof window < 'u' && typeof document < 'u',
  Gu = (typeof navigator == 'object' && navigator) || void 0,
  V1 =
    rc &&
    (!Gu || ['ReactNative', 'NativeScript', 'NS'].indexOf(Gu.product) < 0),
  $1 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  G1 = (rc && window.location.href) || 'http://localhost',
  X1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: rc,
        hasStandardBrowserEnv: V1,
        hasStandardBrowserWebWorkerEnv: $1,
        navigator: Gu,
        origin: G1,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ne = { ...X1, ...Y1 };
function Q1(e, t) {
  return Fs(
    e,
    new Ne.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, a, l, i) {
          return Ne.isNode && N.isBuffer(n)
            ? (this.append(a, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function K1(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  );
}
function Z1(e) {
  const t = {},
    n = Object.keys(e);
  let a;
  const l = n.length;
  let i;
  for (a = 0; a < l; a++) (i = n[a]), (t[i] = e[i]);
  return t;
}
function Wg(e) {
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
          t(n, a, l[s], i) && N.isArray(l[s]) && (l[s] = Z1(l[s])),
          !r)
    );
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const n = {};
    return (
      N.forEachEntry(e, (a, l) => {
        t(K1(a), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function J1(e, t, n) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (a) {
      if (a.name !== 'SyntaxError') throw a;
    }
  return (0, JSON.stringify)(e);
}
const ri = {
  transitional: Fg,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const a = n.getContentType() || '',
        l = a.indexOf('application/json') > -1,
        i = N.isObject(t);
      if ((i && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t)))
        return l ? JSON.stringify(Wg(t)) : t;
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
          return Q1(t, this.formSerializer).toString();
        if ((r = N.isFileList(t)) || a.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return Fs(
            r ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || l ? (n.setContentType('application/json', !1), J1(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ri.transitional,
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
              ? H.from(r, H.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: Ne.classes.FormData, Blob: Ne.classes.Blob },
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
  ri.headers[e] = {};
});
const F1 = N.toObjectSet([
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
  W1 = (e) => {
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
              !(!n || (t[n] && F1[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(a)
                    : (t[n] = [a])
                  : (t[n] = t[n] ? t[n] + ', ' + a : a));
          }),
      t
    );
  },
  od = Symbol('internals');
function ll(e) {
  return e && String(e).trim().toLowerCase();
}
function Gi(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(Gi) : String(e);
}
function P1(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; (a = n.exec(e)); ) t[a[1]] = a[2];
  return t;
}
const I1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Yr(e, t, n, a, l) {
  if (N.isFunction(a)) return a.call(this, t, n);
  if ((l && (t = n), !!N.isString(t))) {
    if (N.isString(a)) return t.indexOf(a) !== -1;
    if (N.isRegExp(a)) return a.test(t);
  }
}
function eS(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, a) => n.toUpperCase() + a);
}
function tS(e, t) {
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
class Me {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, a) {
    const l = this;
    function i(r, u, o) {
      const c = ll(u);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = N.findKey(l, c);
      (!h || l[h] === void 0 || o === !0 || (o === void 0 && l[h] !== !1)) &&
        (l[h || u] = Gi(r));
    }
    const s = (r, u) => N.forEach(r, (o, c) => i(o, c, u));
    if (N.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (N.isString(t) && (t = t.trim()) && !I1(t)) s(W1(t), n);
    else if (N.isHeaders(t)) for (const [r, u] of t.entries()) i(u, r, a);
    else t != null && i(n, t, a);
    return this;
  }
  get(t, n) {
    if (((t = ll(t)), t)) {
      const a = N.findKey(this, t);
      if (a) {
        const l = this[a];
        if (!n) return l;
        if (n === !0) return P1(l);
        if (N.isFunction(n)) return n.call(this, l, a);
        if (N.isRegExp(n)) return n.exec(l);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = ll(t)), t)) {
      const a = N.findKey(this, t);
      return !!(a && this[a] !== void 0 && (!n || Yr(this, this[a], a, n)));
    }
    return !1;
  }
  delete(t, n) {
    const a = this;
    let l = !1;
    function i(s) {
      if (((s = ll(s)), s)) {
        const r = N.findKey(a, s);
        r && (!n || Yr(a, a[r], r, n)) && (delete a[r], (l = !0));
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
      (!t || Yr(this, this[i], i, t, !0)) && (delete this[i], (l = !0));
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
          (n[s] = Gi(l)), delete n[i];
          return;
        }
        const r = t ? eS(i) : String(i).trim();
        r !== i && delete n[i], (n[r] = Gi(l)), (a[r] = !0);
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
    const a = (this[od] = this[od] = { accessors: {} }).accessors,
      l = this.prototype;
    function i(s) {
      const r = ll(s);
      a[r] || (tS(l, s), (a[r] = !0));
    }
    return N.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Me.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
N.reduceDescriptors(Me.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(a) {
      this[n] = a;
    },
  };
});
N.freezeMethods(Me);
function Vr(e, t) {
  const n = this || ri,
    a = t || n,
    l = Me.from(a.headers);
  let i = a.data;
  return (
    N.forEach(e, function (r) {
      i = r.call(n, i, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    i
  );
}
function Pg(e) {
  return !!(e && e.__CANCEL__);
}
function Xa(e, t, n) {
  H.call(this, e ?? 'canceled', H.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
N.inherits(Xa, H, { __CANCEL__: !0 });
function Ig(e, t, n) {
  const a = n.config.validateStatus;
  !n.status || !a || a(n.status)
    ? e(n)
    : t(
        new H(
          'Request failed with status code ' + n.status,
          [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function nS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function aS(e, t) {
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
      const p = c && o - c;
      return p ? Math.round((f * 1e3) / p) : void 0;
    }
  );
}
function lS(e, t) {
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
const js = (e, t, n = 3) => {
    let a = 0;
    const l = aS(50, 250);
    return lS((i) => {
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
  cd = (e, t) => {
    const n = e != null;
    return [(a) => t[0]({ lengthComputable: n, total: e, loaded: a }), t[1]];
  },
  fd =
    (e) =>
    (...t) =>
      N.asap(() => e(...t)),
  iS = Ne.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Ne.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Ne.origin),
        Ne.navigator && /(msie|trident)/i.test(Ne.navigator.userAgent)
      )
    : () => !0,
  sS = Ne.hasStandardBrowserEnv
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
function rS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uS(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function ep(e, t) {
  return e && !rS(t) ? uS(e, t) : t;
}
const dd = (e) => (e instanceof Me ? { ...e } : e);
function $n(e, t) {
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
    headers: (o, c, h) => l(dd(o), dd(c), h, !0),
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
const tp = (e) => {
    const t = $n({}, e);
    let {
      data: n,
      withXSRFToken: a,
      xsrfHeaderName: l,
      xsrfCookieName: i,
      headers: s,
      auth: r,
    } = t;
    (t.headers = s = Me.from(s)),
      (t.url = Jg(ep(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
      if (Ne.hasStandardBrowserEnv || Ne.hasStandardBrowserWebWorkerEnv)
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
      Ne.hasStandardBrowserEnv &&
      (a && N.isFunction(a) && (a = a(t)), a || (a !== !1 && iS(t.url)))
    ) {
      const o = l && i && sS.read(i);
      o && s.set(l, o);
    }
    return t;
  },
  oS = typeof XMLHttpRequest < 'u',
  cS =
    oS &&
    function (e) {
      return new Promise(function (n, a) {
        const l = tp(e);
        let i = l.data;
        const s = Me.from(l.headers).normalize();
        let { responseType: r, onUploadProgress: u, onDownloadProgress: o } = l,
          c,
          h,
          f,
          p,
          y;
        function x() {
          p && p(),
            y && y(),
            l.cancelToken && l.cancelToken.unsubscribe(c),
            l.signal && l.signal.removeEventListener('abort', c);
        }
        let v = new XMLHttpRequest();
        v.open(l.method.toUpperCase(), l.url, !0), (v.timeout = l.timeout);
        function m() {
          if (!v) return;
          const b = Me.from(
              'getAllResponseHeaders' in v && v.getAllResponseHeaders()
            ),
            w = {
              data:
                !r || r === 'text' || r === 'json'
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: b,
              config: e,
              request: v,
            };
          Ig(
            function (T) {
              n(T), x();
            },
            function (T) {
              a(T), x();
            },
            w
          ),
            (v = null);
        }
        'onloadend' in v
          ? (v.onloadend = m)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.indexOf('file:') === 0)) ||
                setTimeout(m);
            }),
          (v.onabort = function () {
            v &&
              (a(new H('Request aborted', H.ECONNABORTED, e, v)), (v = null));
          }),
          (v.onerror = function () {
            a(new H('Network Error', H.ERR_NETWORK, e, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let S = l.timeout
              ? 'timeout of ' + l.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const w = l.transitional || Fg;
            l.timeoutErrorMessage && (S = l.timeoutErrorMessage),
              a(
                new H(
                  S,
                  w.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
                  e,
                  v
                )
              ),
              (v = null);
          }),
          i === void 0 && s.setContentType(null),
          'setRequestHeader' in v &&
            N.forEach(s.toJSON(), function (S, w) {
              v.setRequestHeader(w, S);
            }),
          N.isUndefined(l.withCredentials) ||
            (v.withCredentials = !!l.withCredentials),
          r && r !== 'json' && (v.responseType = l.responseType),
          o && (([f, y] = js(o, !0)), v.addEventListener('progress', f)),
          u &&
            v.upload &&
            (([h, p] = js(u)),
            v.upload.addEventListener('progress', h),
            v.upload.addEventListener('loadend', p)),
          (l.cancelToken || l.signal) &&
            ((c = (b) => {
              v &&
                (a(!b || b.type ? new Xa(null, e, v) : b),
                v.abort(),
                (v = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(c),
            l.signal &&
              (l.signal.aborted ? c() : l.signal.addEventListener('abort', c)));
        const g = nS(l.url);
        if (g && Ne.protocols.indexOf(g) === -1) {
          a(new H('Unsupported protocol ' + g + ':', H.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(i || null);
      });
    },
  fS = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let a = new AbortController(),
        l;
      const i = function (o) {
        if (!l) {
          (l = !0), r();
          const c = o instanceof Error ? o : this.reason;
          a.abort(
            c instanceof H ? c : new Xa(c instanceof Error ? c.message : c)
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), i(new H(`timeout ${t} of ms exceeded`, H.ETIMEDOUT));
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
  dS = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let a = 0,
      l;
    for (; a < n; ) (l = a + t), yield e.slice(a, l), (a = l);
  },
  hS = async function* (e, t) {
    for await (const n of mS(e)) yield* dS(n, t);
  },
  mS = async function* (e) {
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
  hd = (e, t, n, a) => {
    const l = hS(e, t);
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
  Ws =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  np = Ws && typeof ReadableStream == 'function',
  gS =
    Ws &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ap = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  pS =
    np &&
    ap(() => {
      let e = !1;
      const t = new Request(Ne.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  md = 64 * 1024,
  Xu = np && ap(() => N.isReadableStream(new Response('').body)),
  Os = { stream: Xu && ((e) => e.body) };
Ws &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Os[t] &&
        (Os[t] = N.isFunction(e[t])
          ? (n) => n[t]()
          : (n, a) => {
              throw new H(
                `Response type '${t}' is not supported`,
                H.ERR_NOT_SUPPORT,
                a
              );
            });
    });
  })(new Response());
const yS = async (e) => {
    if (e == null) return 0;
    if (N.isBlob(e)) return e.size;
    if (N.isSpecCompliantForm(e))
      return (
        await new Request(Ne.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (N.isArrayBufferView(e) || N.isArrayBuffer(e)) return e.byteLength;
    if ((N.isURLSearchParams(e) && (e = e + ''), N.isString(e)))
      return (await gS(e)).byteLength;
  },
  vS = async (e, t) => {
    const n = N.toFiniteNumber(e.getContentLength());
    return n ?? yS(t);
  },
  bS =
    Ws &&
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
      } = tp(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let p = fS([l, i && i.toAbortSignal()], s),
        y;
      const x =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let v;
      try {
        if (
          u &&
          pS &&
          n !== 'get' &&
          n !== 'head' &&
          (v = await vS(c, a)) !== 0
        ) {
          let w = new Request(t, { method: 'POST', body: a, duplex: 'half' }),
            j;
          if (
            (N.isFormData(a) &&
              (j = w.headers.get('content-type')) &&
              c.setContentType(j),
            w.body)
          ) {
            const [T, R] = cd(v, js(fd(u)));
            a = hd(w.body, md, T, R);
          }
        }
        N.isString(h) || (h = h ? 'include' : 'omit');
        const m = 'credentials' in Request.prototype;
        y = new Request(t, {
          ...f,
          signal: p,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: a,
          duplex: 'half',
          credentials: m ? h : void 0,
        });
        let g = await fetch(y);
        const b = Xu && (o === 'stream' || o === 'response');
        if (Xu && (r || (b && x))) {
          const w = {};
          ['status', 'statusText', 'headers'].forEach((D) => {
            w[D] = g[D];
          });
          const j = N.toFiniteNumber(g.headers.get('content-length')),
            [T, R] = (r && cd(j, js(fd(r), !0))) || [];
          g = new Response(
            hd(g.body, md, T, () => {
              R && R(), x && x();
            }),
            w
          );
        }
        o = o || 'text';
        let S = await Os[N.findKey(Os, o) || 'text'](g, e);
        return (
          !b && x && x(),
          await new Promise((w, j) => {
            Ig(w, j, {
              data: S,
              headers: Me.from(g.headers),
              status: g.status,
              statusText: g.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (m) {
        throw (
          (x && x(),
          m && m.name === 'TypeError' && /fetch/i.test(m.message)
            ? Object.assign(new H('Network Error', H.ERR_NETWORK, e, y), {
                cause: m.cause || m,
              })
            : H.from(m, m && m.code, e, y))
        );
      }
    }),
  Qu = { http: L1, xhr: cS, fetch: bS };
N.forEach(Qu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const gd = (e) => `- ${e}`,
  xS = (e) => N.isFunction(e) || e === null || e === !1,
  lp = {
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
          !xS(n) && ((a = Qu[(s = String(n)).toLowerCase()]), a === void 0))
        )
          throw new H(`Unknown adapter '${s}'`);
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
              i.map(gd).join(`
`)
            : ' ' + gd(i[0])
          : 'as no adapter specified';
        throw new H(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT'
        );
      }
      return a;
    },
    adapters: Qu,
  };
function $r(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Xa(null, e);
}
function pd(e) {
  return (
    $r(e),
    (e.headers = Me.from(e.headers)),
    (e.data = Vr.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    lp
      .getAdapter(e.adapter || ri.adapter)(e)
      .then(
        function (a) {
          return (
            $r(e),
            (a.data = Vr.call(e, e.transformResponse, a)),
            (a.headers = Me.from(a.headers)),
            a
          );
        },
        function (a) {
          return (
            Pg(a) ||
              ($r(e),
              a &&
                a.response &&
                ((a.response.data = Vr.call(
                  e,
                  e.transformResponse,
                  a.response
                )),
                (a.response.headers = Me.from(a.response.headers)))),
            Promise.reject(a)
          );
        }
      )
  );
}
const ip = '1.7.9',
  Ps = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Ps[e] = function (a) {
      return typeof a === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const yd = {};
Ps.transitional = function (t, n, a) {
  function l(i, s) {
    return (
      '[Axios v' +
      ip +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (a ? '. ' + a : '')
    );
  }
  return (i, s, r) => {
    if (t === !1)
      throw new H(
        l(s, ' has been removed' + (n ? ' in ' + n : '')),
        H.ERR_DEPRECATED
      );
    return (
      n &&
        !yd[s] &&
        ((yd[s] = !0),
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
Ps.spelling = function (t) {
  return (n, a) => (console.warn(`${a} is likely a misspelling of ${t}`), !0);
};
function SS(e, t, n) {
  if (typeof e != 'object')
    throw new H('options must be an object', H.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(e);
  let l = a.length;
  for (; l-- > 0; ) {
    const i = a[l],
      s = t[i];
    if (s) {
      const r = e[i],
        u = r === void 0 || s(r, i, e);
      if (u !== !0)
        throw new H('option ' + i + ' must be ' + u, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new H('Unknown option ' + i, H.ERR_BAD_OPTION);
  }
}
const Xi = { assertOptions: SS, validators: Ps },
  dt = Xi.validators;
class Hn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ud(), response: new ud() });
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
      (n = $n(this.defaults, n));
    const { transitional: a, paramsSerializer: l, headers: i } = n;
    a !== void 0 &&
      Xi.assertOptions(
        a,
        {
          silentJSONParsing: dt.transitional(dt.boolean),
          forcedJSONParsing: dt.transitional(dt.boolean),
          clarifyTimeoutError: dt.transitional(dt.boolean),
        },
        !1
      ),
      l != null &&
        (N.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Xi.assertOptions(
              l,
              { encode: dt.function, serialize: dt.function },
              !0
            )),
      Xi.assertOptions(
        n,
        {
          baseUrl: dt.spelling('baseURL'),
          withXsrfToken: dt.spelling('withXSRFToken'),
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
      (n.headers = Me.concat(s, i));
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
      const y = [pd.bind(this), void 0];
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
    let p = n;
    for (h = 0; h < f; ) {
      const y = r[h++],
        x = r[h++];
      try {
        p = y(p);
      } catch (v) {
        x.call(this, v);
        break;
      }
    }
    try {
      c = pd.call(this, p);
    } catch (y) {
      return Promise.reject(y);
    }
    for (h = 0, f = o.length; h < f; ) c = c.then(o[h++], o[h++]);
    return c;
  }
  getUri(t) {
    t = $n(this.defaults, t);
    const n = ep(t.baseURL, t.url);
    return Jg(n, t.params, t.paramsSerializer);
  }
}
N.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Hn.prototype[t] = function (n, a) {
    return this.request(
      $n(a || {}, { method: t, url: n, data: (a || {}).data })
    );
  };
});
N.forEach(['post', 'put', 'patch'], function (t) {
  function n(a) {
    return function (i, s, r) {
      return this.request(
        $n(r || {}, {
          method: t,
          headers: a ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (Hn.prototype[t] = n()), (Hn.prototype[t + 'Form'] = n(!0));
});
class uc {
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
        a.reason || ((a.reason = new Xa(i, s, r)), n(a.reason));
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
      token: new uc(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
function ES(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function wS(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const Ku = {
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
Object.entries(Ku).forEach(([e, t]) => {
  Ku[t] = e;
});
function sp(e) {
  const t = new Hn(e),
    n = Hg(Hn.prototype.request, t);
  return (
    N.extend(n, Hn.prototype, t, { allOwnKeys: !0 }),
    N.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return sp($n(e, l));
    }),
    n
  );
}
const Z = sp(ri);
Z.Axios = Hn;
Z.CanceledError = Xa;
Z.CancelToken = uc;
Z.isCancel = Pg;
Z.VERSION = ip;
Z.toFormData = Fs;
Z.AxiosError = H;
Z.Cancel = Z.CanceledError;
Z.all = function (t) {
  return Promise.all(t);
};
Z.spread = ES;
Z.isAxiosError = wS;
Z.mergeConfig = $n;
Z.AxiosHeaders = Me;
Z.formToJSON = (e) => Wg(N.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = lp.getAdapter;
Z.HttpStatusCode = Ku;
Z.default = Z;
function NS() {
  const { t: e } = wt(),
    { locale: t } = E.useContext(nc),
    [n, a] = E.useState([]),
    [l, i] = E.useState(!1);
  E.useEffect(() => {
    s();
  }, [t]);
  const s = async () => {
      i(!0);
      try {
        const u = await Z.get('http://localhost:3000/actors', {
          params: { locale: t },
        });
        console.log('Fetched actors:', u.data), a(u.data);
      } catch (u) {
        console.error('Error fetching actors:', u);
      } finally {
        i(!1);
      }
    },
    r = (u) =>
      Array.isArray(u.ActorDetails)
        ? u.ActorDetails.find((o) => {
            var c;
            return ((c = o.Locale) == null ? void 0 : c.locale_code) === t;
          })
        : null;
  return d.jsx('div', {
    children: l
      ? d.jsx('div', {
          className: 'text-center text-gray-500',
          children: 'Loading...',
        })
      : d.jsxs('div', {
          className: 'relative grid grid-cols-1 lg:grid-cols-2 gap-10',
          children: [
            n.map((u) => {
              const o = r(u);
              return o
                ? d.jsxs(
                    'div',
                    {
                      className:
                        'p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center',
                      children: [
                        d.jsx('img', {
                          src: o.image,
                          alt: o.title,
                          className: 'w-52 h-80 object-cover rounded-lg',
                        }),
                        d.jsxs('div', {
                          className:
                            'sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left',
                          children: [
                            d.jsx('h2', {
                              className:
                                'text-orange-500 text-3xl font-black mb-4',
                              children: o.title,
                            }),
                            d.jsx('h3', {
                              className:
                                'text-black text-lg font-semibold mb-4',
                              children: o.subtitle,
                            }),
                            d.jsx('p', {
                              className:
                                'text-black text-base font-sansregular',
                              children: o.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    u.actor_id
                  )
                : null;
            }),
            d.jsx('p', {
              className: 'mt-5 pt-5 text-left text-xs font-bold text-gray-800',
              children: e('actors.note'),
            }),
          ],
        }),
  });
}
function jS() {
  return d.jsx('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: d.jsxs('div', {
      className: 'pt-0 px-4 pb-8',
      children: [
        d.jsx('div', {
          className: '-mt-5 top-0 left-0 right-0 z-50',
          children: d.jsx(Xt, {}),
        }),
        d.jsx('div', {
          className: 'p-8 px-[100px] pb-[90px]',
          children: d.jsx(NS, {}),
        }),
      ],
    }),
  });
}
function OS() {
  const { t: e } = wt();
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
function TS() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: [
      d.jsx('div', {
        className: '-mt-5 top-0 left-0 right-0 z-50',
        children: d.jsx(Xt, {}),
      }),
      d.jsx('div', {
        className: 'flex flex-col items-center w-full max-w-4xl mx-auto',
        children: d.jsx('div', { className: '-mt-8', children: d.jsx(OS, {}) }),
      }),
    ],
  });
}
function RS() {
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
        d.jsx(tc, {
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
const wn = [
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
function AS() {
  const [e, t] = E.useState(0);
  E.useEffect(() => {
    const l = setInterval(() => {
      n();
    }, 1e4);
    return () => clearInterval(l);
  }, [e]);
  const n = () => {
      t((l) => (l + 1) % wn.length);
    },
    a = () => {
      t((l) => (l === 0 ? wn.length - 1 : l - 1));
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
                width: `${wn.length * 100}%`,
              },
              children: wn.map((l, i) =>
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
              children: wn.map((l, i) =>
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
                children: wn[e].title,
              }),
              d.jsx('p', {
                className:
                  'text-xl text-gray-800 leading-relaxed drop-shadow-lg',
                children: wn[e].description,
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function CS() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen flex items-center justify-center",
    children: [
      d.jsx('div', {
        className: 'fixed top-0 left-0 right-0 z-50',
        children: d.jsx(Xt, {}),
      }),
      d.jsx('div', {
        className: 'flex flex-col pt-15',
        children: d.jsx('div', {
          className:
            'flex justify-between items-start mx-auto max-w-6xl w-full',
          children: d.jsx('div', {
            className: 'w-2/3',
            children: d.jsx(AS, {}),
          }),
        }),
      }),
    ],
  });
}
const DS = [
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
function zS() {
  const e = new Date(),
    [t, n] = E.useState(e.getMonth()),
    [a, l] = E.useState(e.getFullYear()),
    [i, s] = E.useState([]);
  E.useEffect(() => {
    (async () => {
      try {
        console.log(`Fetching events for year: ${a}, month: ${t + 1}`);
        const y = await Z.get(`http://localhost:3000/events/${a}/${t + 1}`);
        console.log('Fetched events:', y.data);
        const x = y.data.map((v) =>
          new Date(v.EventTimestamp.event_date).getDate()
        );
        console.log('Extracted event dates:', x), s(x);
      } catch (y) {
        console.error('Error fetching events:', y);
      }
    })();
  }, [t, a]);
  const r = () => {
      t === 0 ? (n(11), l((p) => p - 1)) : n((p) => p - 1);
    },
    u = () => {
      t === 11 ? (n(0), l((p) => p + 1)) : n((p) => p + 1);
    },
    o = new Date(a, t + 1, 0).getDate(),
    c = new Date(a, t, 1).getDay(),
    h = [];
  for (let p = 0; p < c; p++) h.push(null);
  for (let p = 1; p <= o; p++) h.push(p);
  const f = (p) =>
    p && e.getDate() === p && e.getMonth() === t && e.getFullYear() === a;
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
            children: [DS[t], ' ', a],
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
        children: h.map((p, y) =>
          d.jsxs(
            'div',
            {
              className: `flex flex-col items-center justify-center rounded-lg text-lg font-medium ${f(p) ? 'bg-orange-500 text-white font-bold' : 'text-black'} ${i.includes(p) ? 'border-4 border-orange-400' : ''}`,
              children: [
                d.jsx('span', { children: p || '' }),
                d.jsx('span', {
                  className: `text-base mt-1 ${i.includes(p) ? 'bg-orange-400 px-1 py-0.5 rounded-sm text-white' : 'text-gray-900'}`,
                  children: i.includes(p) ? 'Event' : '',
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
function US() {
  var u, o, c, h, f, p, y, x, v, m, g, b, S, w, j, T, R, D, C, L;
  const e = $a(),
    [t, n] = E.useState([]),
    [a, l] = E.useState(0);
  E.useEffect(() => {
    (async () => {
      try {
        const oe = await Z.get('http://localhost:3000/events');
        n(oe.data);
      } catch (oe) {
        console.error('Error fetching events:', oe);
      }
    })();
  }, []);
  const i = (_) => {
      if (_ && (_.startsWith('http') || _.startsWith('www'))) {
        const oe = _.startsWith('www') ? `https://${_}` : _;
        console.log('Navigating to external link:', oe),
          (window.location.href = oe);
      } else
        _
          ? (console.log('Navigating to internal link:', _), e(_))
          : console.warn('No link provided for navigation.');
    },
    s = () => {
      l((_) => (_ + 1) % t.length);
    },
    r = () => {
      l((_) => (_ - 1 + t.length) % t.length);
    };
  return d.jsx('div', {
    className: 'w-full max-w-4xl mx-auto px-4',
    children: d.jsxs('div', {
      className: 'flex items-center justify-between space-x-4',
      children: [
        d.jsx('button', {
          onClick: r,
          className:
            'p-3 bg-orange-500 rounded-full hover:bg-white transition-colors duration-300',
          'aria-label': 'Previous Slide',
          children: '‹',
        }),
        t.length > 0 &&
          d.jsxs('div', {
            className:
              'w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row',
            children: [
              d.jsx('div', {
                className:
                  'relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0',
                children: d.jsx('img', {
                  src:
                    ((c =
                      (o = (u = t[a]) == null ? void 0 : u.EventDetails) == null
                        ? void 0
                        : o[0]) == null
                      ? void 0
                      : c.image) || '/images/Avatar.jpg',
                  alt: ((h = t[a]) == null ? void 0 : h.title) || 'Event',
                  className:
                    'w-full h-full object-cover rounded-t-xl md:rounded-l-xl',
                }),
              }),
              d.jsxs('div', {
                className: 'p-6 flex flex-col justify-between md:w-1/2',
                children: [
                  d.jsxs('div', {
                    className: 'text-center md:text-left',
                    children: [
                      d.jsx('h2', {
                        className: 'text-2xl font-bold text-black',
                        children:
                          ((f = t[a]) == null ? void 0 : f.title) ||
                          'Untitled Event',
                      }),
                      d.jsx('p', {
                        className: 'text-lg text-gray-600 my-4',
                        children:
                          ((x =
                            (y =
                              (p = t[a]) == null ? void 0 : p.EventDetails) ==
                            null
                              ? void 0
                              : y[0]) == null
                            ? void 0
                            : x.description) || 'Description not available',
                      }),
                      d.jsx('p', {
                        className: 'text-sm text-gray-500',
                        children: `Date: ${((m = (v = t[a]) == null ? void 0 : v.EventTimestamp) == null ? void 0 : m.event_date) || 'TBA'}`,
                      }),
                      d.jsx('p', {
                        className: 'text-sm text-gray-500',
                        children: `Time: ${((b = (g = t[a]) == null ? void 0 : g.EventTimestamp) == null ? void 0 : b.start_time) || 'TBA'} - ${((w = (S = t[a]) == null ? void 0 : S.EventTimestamp) == null ? void 0 : w.end_time) || 'TBA'}`,
                      }),
                      d.jsx('p', {
                        className: 'text-gray-700',
                        children: `Location: ${((R = (T = (j = t[a]) == null ? void 0 : j.EventDetails) == null ? void 0 : T[0]) == null ? void 0 : R.location) || 'TBA'}`,
                      }),
                      d.jsx('p', {
                        className:
                          'text-orange-500 text-2xl font-semibold my-2',
                        children:
                          ((L =
                            (C =
                              (D = t[a]) == null ? void 0 : D.EventDetails) ==
                            null
                              ? void 0
                              : C[0]) == null
                            ? void 0
                            : L.price) || 'TBA',
                      }),
                    ],
                  }),
                  d.jsx('div', {
                    className: 'mt-4',
                    children: d.jsx('button', {
                      onClick: () => {
                        var _, oe, xe;
                        return i(
                          (xe =
                            (oe =
                              (_ = t[a]) == null ? void 0 : _.EventDetails) ==
                            null
                              ? void 0
                              : oe[0]) == null
                            ? void 0
                            : xe.link
                        );
                      },
                      className:
                        'w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors',
                      children: 'Buy tickets',
                    }),
                  }),
                ],
              }),
            ],
          }),
        d.jsx('button', {
          onClick: s,
          className:
            'p-3 bg-orange-500 rounded-full hover:bg-white transition-colors duration-300',
          'aria-label': 'Next Slide',
          children: '›',
        }),
      ],
    }),
  });
}
function LS() {
  return d.jsxs('div', {
    className: "bg-[url('/images/startbackground.jpg')] min-h-screen",
    children: [
      d.jsx('div', {
        className: 'fixed top-0 left-0 right-0 z-50',
        children: d.jsx(Xt, {}),
      }),
      d.jsxs('div', {
        className: 'min-h-screen flex flex-col lg:flex-row',
        children: [
          d.jsx('div', {
            className: 'flex-1 p-4 flex items-center justify-center',
            children: d.jsx(zS, {}),
          }),
          d.jsx('div', {
            className: 'flex-1 p-4 flex items-center justify-center',
            children: d.jsx(US, {}),
          }),
        ],
      }),
    ],
  });
}
function MS() {
  const [e, t] = E.useState(''),
    [n, a] = E.useState(''),
    [l, i] = E.useState(!1),
    [s, r] = E.useState(''),
    { setUser: u } = ac(),
    o = $a();
  E.useEffect(() => {
    const h = localStorage.getItem('rememberUsernameOrEmail'),
      f = localStorage.getItem('rememberPassword');
    h && f && (t(h), a(f), i(!0));
  }, []);
  const c = async (h) => {
    var f, p;
    h.preventDefault();
    try {
      const y = await Z.post('http://localhost:3000/auth/login', {
          identifier: e,
          password: n,
        }),
        { user: x, token: v } = y.data;
      u(x),
        console.log('Login Response:', y.data),
        l
          ? (localStorage.setItem('rememberUsernameOrEmail', e),
            localStorage.setItem('rememberPassword', n))
          : (localStorage.removeItem('rememberUsernameOrEmail'),
            localStorage.removeItem('rememberPassword')),
        localStorage.setItem('token', v),
        o('/homepage');
    } catch (y) {
      r(
        ((p = (f = y.response) == null ? void 0 : f.data) == null
          ? void 0
          : p.message) || 'Login failed'
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
              onSubmit: c,
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
                      onChange: (h) => t(h.target.value),
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
                      onChange: (h) => a(h.target.value),
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
                      onChange: (h) => i(h.target.checked),
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
function _S() {
  const [e, t] = E.useState(''),
    [n, a] = E.useState(''),
    [l, i] = E.useState(''),
    [s, r] = E.useState(''),
    [u, o] = E.useState(''),
    c = $a(),
    h = async (f) => {
      var p, y;
      if ((f.preventDefault(), l !== s)) {
        o('Passwords do not match');
        return;
      }
      try {
        await Z.post('http://localhost:3000/auth/register', {
          username: e,
          email: n,
          password: l,
        }),
          alert('Registration successful!'),
          c('/login');
      } catch (x) {
        o(
          ((y = (p = x.response) == null ? void 0 : p.data) == null
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
function HS() {
  const { t: e } = wt();
  return d.jsxs('div', {
    id: 'root',
    children: [
      d.jsxs('div', {
        className:
          'bg-transparent p-7 font-sans flex flex-col lg:flex-row items-center lg:justify-between lg:gap-x-60 shadow-2xl',
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
function BS() {
  return d.jsxs('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: [
      d.jsx('div', {
        className: '-mt-5 top-0 left-0 right-0 z-50',
        children: d.jsx(Xt, {}),
      }),
      d.jsx('div', {
        className: 'flex flex-col items-center w-full max-w-4xl mx-auto',
        children: d.jsx('div', { className: 'mt-4', children: d.jsx(HS, {}) }),
      }),
    ],
  });
}
function qS() {
  const { t: e } = wt(),
    t = e('performanceNotice.rules', { returnObjects: !0 }),
    n = e('performanceNotice.remarks', { returnObjects: !0 });
  return d.jsx('div', {
    className: 'py-10 px-4',
    children: d.jsxs('div', {
      className: 'max-w-5xl mx-auto rounded-lg p-6 shadow-2xl',
      children: [
        d.jsx('h1', {
          className: 'text-center text-4xl font-extrabold mb-6 text-gray-900',
          children: e('performanceNotice.title'),
        }),
        d.jsx('p', {
          className: 'text-center text-lg font-medium mb-8 text-gray-700',
          children: e('performanceNotice.subtitle'),
        }),
        d.jsx('div', {
          className:
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10',
          children: t.map((a, l) =>
            d.jsxs(
              'div',
              {
                className: 'flex flex-col items-center text-center space-y-4',
                children: [
                  d.jsx('img', {
                    src: a.image,
                    alt: a.alt,
                    className:
                      'w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full object-cover shadow',
                  }),
                  d.jsx('p', {
                    className: 'font-medium text-gray-800 text-lg',
                    children: d.jsx(Dt, {
                      components: {
                        span: d.jsx('span', {
                          className: 'text-red-500 font-semibold',
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
          className: 'space-y-6',
          children: n.map((a, l) =>
            d.jsx(
              'p',
              {
                className: 'text-center text-gray-800 text-lg font-semibold',
                children: d.jsx(Dt, {
                  components: {
                    span: d.jsx('span', {
                      className: 'text-red-500 font-semibold',
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
function kS() {
  return d.jsx('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen items-center p-5",
    children: d.jsxs('div', {
      className: 'pt-0 px-96',
      children: [
        d.jsx('div', {
          className: 'fixed top-0 left-0 right-0 z-50',
          children: d.jsx(Xt, {}),
        }),
        d.jsx('div', { className: 'mt-20', children: d.jsx(qS, {}) }),
      ],
    }),
  });
}
function YS() {
  const { t: e } = wt(),
    t = e('rentalDetail.details', { returnObjects: !0 }),
    n = e('rentalDetail.whyUs', { returnObjects: !0 });
  return d.jsx('div', {
    className: 'py-10 px-6',
    children: d.jsxs('div', {
      className: 'max-w-6xl mx-auto rounded-lg p-8 shadow-2xl',
      children: [
        d.jsx('div', {
          className: 'text-center text-3xl font-extrabold mb-10 text-gray-900',
          children: e('rentalDetail.title'),
        }),
        d.jsxs('div', {
          className: 'grid grid-cols-1 lg:grid-cols-2 gap-12',
          children: [
            d.jsxs('div', {
              className: 'space-y-6',
              children: [
                d.jsx('div', {
                  className: 'text-2xl font-semibold text-gray-800',
                  children: e('rentalDetail.address.title'),
                }),
                d.jsx('div', {
                  className: 'text-lg font-bold text-orange-600',
                  children: e('rentalDetail.address.name'),
                }),
                d.jsx('div', {
                  className: 'text-lg text-gray-700',
                  children: e('rentalDetail.address.location'),
                }),
                d.jsx('img', {
                  src: '/images/address.jpg',
                  alt: 'Address',
                  className: 'w-full h-80 object-cover rounded-2xl shadow-md',
                }),
              ],
            }),
            d.jsxs('div', {
              className: 'space-y-6 text-lg text-gray-800',
              children: [
                d.jsx('div', {
                  children: d.jsx(Dt, {
                    components: {
                      span: d.jsx('span', {
                        className: 'font-bold text-red-500',
                      }),
                    },
                    children: t,
                  }),
                }),
                d.jsx('div', {
                  className: 'text-xl font-bold text-gray-900',
                  children: e('rentalDetail.whyUsTitle'),
                }),
                d.jsx('div', {
                  children: d.jsx(Dt, {
                    components: {
                      span: d.jsx('span', {
                        className: 'font-semibold text-red-500',
                      }),
                    },
                    children: n,
                  }),
                }),
                d.jsx('div', {
                  className: 'text-xl font-bold text-gray-900',
                  children: e('rentalDetail.contact.title'),
                }),
                d.jsx('div', {
                  className: 'font-semibold',
                  children: e('rentalDetail.contact.info'),
                }),
                d.jsx('div', {
                  className: 'font-semibold text-gray-700',
                  children: '📧 am2pmnz@gmail.com',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function VS() {
  return d.jsx('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen  items-center p-5",
    children: d.jsxs('div', {
      className: 'pt-0 px-96',
      children: [
        d.jsx('div', {
          className: 'fixed top-0 left-0 right-0 z-50',
          children: d.jsx(Xt, {}),
        }),
        d.jsx('div', { className: 'mt-20', children: d.jsx(YS, {}) }),
      ],
    }),
  });
}
function $S() {
  const { t: e } = wt();
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
              children: d.jsx(Dt, {
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
                children: d.jsx(Dt, {
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
                children: d.jsx(Dt, {
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
                children: d.jsx(Dt, {
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
                children: d.jsx(Dt, {
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
function GS() {
  return d.jsx('div', {
    className:
      "bg-[url('/images/background_2.jpg')] bg-cover min-h-screen  items-center p-5",
    children: d.jsxs('div', {
      className: 'pt-0 px-96',
      children: [
        d.jsx('div', {
          className: 'fixed top-0 left-0 right-0 z-50',
          children: d.jsx(Xt, {}),
        }),
        d.jsx('div', { className: 'mt-20', children: d.jsx($S, {}) }),
      ],
    }),
  });
}
const XS = () => {
  const { user: e } = ac();
  if ((console.log('User in Management:', e), !e || e.role !== 'admin'))
    return d.jsx(ab, { to: '/homepage', replace: !0 });
  const [t, n] = E.useState([]),
    [a, l] = E.useState('en'),
    [i, s] = E.useState({
      title: '',
      subtitle: '',
      description: '',
      locale: '',
      image: '',
    }),
    [r, u] = E.useState(null);
  E.useEffect(() => {
    o();
  }, [a]);
  const o = async () => {
      try {
        const v = await Z.get('http://localhost:3000/actors', {
          params: { locale: a },
        });
        console.log('Fetched actors:', v.data), n(v.data);
      } catch (v) {
        console.error('Error fetching actors:', v);
      }
    },
    c = (v) =>
      Array.isArray(v.ActorDetails)
        ? v.ActorDetails.find((m) => {
            var g;
            return ((g = m.Locale) == null ? void 0 : g.locale_code) === a;
          })
        : null,
    h = async () => {
      try {
        const v = {
          details: [
            {
              title: i.title,
              subtitle: i.subtitle,
              description: i.description,
              locale_code: i.locale,
              image: i.image,
            },
          ],
        };
        await Z.post('http://localhost:3000/actors', v), o(), y();
      } catch (v) {
        console.error('Error adding actor:', v);
      }
    },
    f = async () => {
      var v;
      if (!r) {
        console.error('No actor selected for updating.');
        return;
      }
      try {
        const m = {
          name: r.name,
          details: [
            {
              title: i.title,
              subtitle: i.subtitle,
              description: i.description,
              image: i.image,
              locale_code: i.locale,
            },
          ],
        };
        console.log('Sending update request with data:', m);
        const g = await Z.put(`http://localhost:3000/actors/${r.actor_id}`, m);
        console.log('Update response:', g.data), o(), y();
      } catch (m) {
        console.error(
          'Error updating actor:',
          ((v = m.response) == null ? void 0 : v.data) || m
        );
      }
    },
    p = (v) => {
      var g;
      const m = c(v);
      m &&
        (s({
          title: m.title || '',
          subtitle: m.subtitle || '',
          description: m.description || '',
          image: m.image || '',
          locale: ((g = m.Locale) == null ? void 0 : g.locale_code) || a,
        }),
        u(v));
    },
    y = () => {
      s({ title: '', subtitle: '', description: '', image: '', locale: '' }),
        u(null);
    },
    x = async (v) => {
      try {
        await Z.delete(`http://localhost:3000/actors/${v}`), o();
      } catch (m) {
        console.error('Error deleting actor:', m);
      }
    };
  return d.jsxs('div', {
    className: 'max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md',
    children: [
      d.jsx('h1', {
        className: 'text-2xl font-bold text-center text-orange-600 mb-6',
        children: 'Actors Management',
      }),
      d.jsxs('div', {
        className: 'mb-4 text-center',
        children: [
          d.jsx('button', {
            className: `px-4 py-2 rounded-lg ${a === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`,
            onClick: () => l('en'),
            children: 'English',
          }),
          d.jsx('button', {
            className: `px-4 py-2 rounded-lg ml-2 ${a === 'zh' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`,
            onClick: () => l('zh'),
            children: '中文',
          }),
        ],
      }),
      d.jsxs('div', {
        className: 'space-y-4 mb-6',
        children: [
          d.jsx('input', {
            className:
              'w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200',
            placeholder: 'Title',
            value: i.title,
            onChange: (v) => s({ ...i, title: v.target.value }),
          }),
          d.jsx('input', {
            className:
              'w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200',
            placeholder: 'Subtitle',
            value: i.subtitle,
            onChange: (v) => s({ ...i, subtitle: v.target.value }),
          }),
          d.jsx('textarea', {
            className:
              'w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200',
            placeholder: 'Description',
            value: i.description,
            onChange: (v) => s({ ...i, description: v.target.value }),
          }),
          d.jsx('input', {
            className:
              'w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200',
            placeholder: 'Image URL',
            value: i.image,
            onChange: (v) => s({ ...i, image: v.target.value }),
          }),
          d.jsx('input', {
            className:
              'w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200',
            placeholder: 'Locale',
            value: i.locale,
            onChange: (v) => s({ ...i, locale: v.target.value }),
          }),
          d.jsx('button', {
            className: `w-full p-2 rounded-lg text-white ${r ? 'bg-orange-500 hover:bg-orange-600' : 'bg-teal-500 hover:bg-teal-600'}`,
            onClick: r ? f : h,
            children: r ? 'Update Actor' : 'Add Actor',
          }),
        ],
      }),
      d.jsxs('table', {
        className:
          'w-full table-auto bg-white border border-gray-300 rounded-lg shadow',
        children: [
          d.jsx('thead', {
            className: 'bg-orange-500 text-white',
            children: d.jsxs('tr', {
              children: [
                d.jsx('th', { className: 'p-2 text-left', children: 'Title' }),
                d.jsx('th', {
                  className: 'p-2 text-left',
                  children: 'Subtitle',
                }),
                d.jsx('th', {
                  className: 'p-2 text-left',
                  children: 'Description',
                }),
                d.jsx('th', { className: 'p-2 text-left', children: 'Image' }),
                d.jsx('th', {
                  className: 'p-2 text-left',
                  children: 'Actions',
                }),
              ],
            }),
          }),
          d.jsx('tbody', {
            children: t.map((v) => {
              const m = c(v);
              return m
                ? d.jsxs(
                    'tr',
                    {
                      className: 'border-t',
                      children: [
                        d.jsx('td', { className: 'p-2', children: m.title }),
                        d.jsx('td', { className: 'p-2', children: m.subtitle }),
                        d.jsx('td', {
                          className: 'p-2',
                          children: m.description,
                        }),
                        d.jsx('td', {
                          className: 'p-2',
                          children: d.jsx('img', {
                            src: m.image,
                            alt: m.title,
                            className:
                              'h-20 w-20 object-cover rounded-lg shadow',
                          }),
                        }),
                        d.jsx('td', {
                          className: 'p-2',
                          children: d.jsxs('div', {
                            className: 'flex space-x-2',
                            children: [
                              d.jsx('button', {
                                className:
                                  'p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600',
                                onClick: () => p(v),
                                children: 'Edit',
                              }),
                              d.jsx('button', {
                                className:
                                  'p-2 bg-red-500 text-white rounded-lg hover:bg-red-600',
                                onClick: () => x(v.actor_id),
                                children: 'Delete',
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    v.actor_id
                  )
                : null;
            }),
          }),
        ],
      }),
    ],
  });
};
iv.createRoot(document.getElementById('root')).render(
  d.jsx(Np.StrictMode, {
    children: d.jsx(qb, {
      children: d.jsx(kb, {
        children: d.jsx(Ab, {
          children: d.jsxs(ib, {
            children: [
              d.jsx(Ue, { path: '/', element: d.jsx(RS, {}) }),
              d.jsx(Ue, { path: '/login', element: d.jsx(MS, {}) }),
              d.jsx(Ue, { path: '/register', element: d.jsx(_S, {}) }),
              d.jsx(Ue, { path: '/homepage', element: d.jsx(CS, {}) }),
              d.jsx(Ue, { path: '/plans', element: d.jsx(LS, {}) }),
              d.jsx(Ue, {
                path: '/actorsintroduction',
                element: d.jsx(jS, {}),
              }),
              d.jsx(Ue, { path: '/memberships', element: d.jsx(TS, {}) }),
              d.jsx(Ue, { path: '/contact', element: d.jsx(Zx, {}) }),
              d.jsx(Ue, { path: '/talkshow', element: d.jsx(BS, {}) }),
              d.jsx(Ue, { path: '/guidelines', element: d.jsx(kS, {}) }),
              d.jsx(Ue, { path: '/rental', element: d.jsx(VS, {}) }),
              d.jsx(Ue, { path: '/recruitment', element: d.jsx(GS, {}) }),
              d.jsx(Ue, { path: '/actorsmanagement', element: d.jsx(XS, {}) }),
            ],
          }),
        }),
      }),
    }),
  })
);
