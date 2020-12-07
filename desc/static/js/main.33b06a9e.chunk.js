;(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [3],
  {
    19: function (n, e, t) {
      'use strict'
      t.d(e, 'b', function () {
        return i
      }),
        t.d(e, 'a', function () {
          return o
        }),
        t.d(e, 'c', function () {
          return a
        })
      var r = t(37),
        a =
          (t(47),
          t(49),
          r.a.initializeApp({
            apiKey: 'AIzaSyAABosRQdWuCOmy4ylwUjdi3Rlz3ngRcfM',
            authDomain: 'ahmedeldessouki-a7488.firebaseapp.com',
            databaseURL: 'https://ahmedeldessouki-a7488.firebaseio.com',
            projectId: 'ahmedeldessouki-a7488',
            storageBucket: 'gs://ahmedeldessouki-a7488.appspot.com',
            storage: 'gs://ahmedeldessouki-a7488.appspot.com',
            messagingSenderId: '928636667018',
          })),
        i = a.firestore(),
        o = a.auth()
    },
    23: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return f
      }),
        t.d(e, 'b', function () {
          return p
        })
      var r = t(13),
        a = t(7),
        i = t(1),
        o = t.n(i),
        c = t(39),
        s = t(17),
        u = t(19),
        d = t(32),
        l = o.a.createContext()
      function f(n) {
        var e = n.children,
          t = n.auth,
          i = Object(d.c)('yy', null),
          f = Object(r.a)(i, 2),
          p = f[0],
          b = f[1],
          g = o.a.useState(null),
          h = Object(r.a)(g, 2),
          m = h[0],
          x = h[1]
        o.a.useEffect(
          function () {
            u.c.auth().onAuthStateChanged(function (n) {
              n && n.id !== p && b(n.uid)
            })
          },
          [p, b],
        )
        var j = {
          useSignIn: function () {
            var n = o.a.useState(''),
              e = Object(r.a)(n, 2),
              a = e[0],
              i = e[1]
            return [
              a,
              o.a.useCallback(function (n) {
                return (
                  t.signInWithEmailAndPassword(n.email, n.password).then(
                    function (n) {
                      s.b.success('LogIn Successful'), b(n.user)
                    },
                    function (n) {
                      s.b.error('SignIn Failed "'.concat(n.message, '"')),
                        i(n.message)
                    },
                  ),
                  {error: undefined}
                )
              }, []),
            ]
          },
          signOut: function () {
            t.signOut(),
              b(null),
              s.b.success('See You Soon'),
              Object(c.a)({to: '/'})
          },
          useSignUp: function () {
            var n = o.a.useState(''),
              e = Object(r.a)(n, 2),
              a = e[0],
              i = e[1]
            return [
              a,
              o.a.useCallback(function (n) {
                return t
                  .createUserWithEmailAndPassword(n.email, n.password)
                  .then(
                    function (e) {
                      u.b
                        .collection('users')
                        .doc(e.user.uid)
                        .set({
                          hstName: n.firstName,
                          lastName: n.lastName,
                          initials: n.firstName[0] + n.lastName[0],
                        }),
                        b(n.uid),
                        s.b.success(
                          'Welcome "'.concat(n.email, '" to The Club'),
                        )
                    },
                    function (n) {
                      i(n.message),
                        s.b.error('SignUp Failed "'.concat(n.message, '"'))
                    },
                  )
              }, []),
            ]
          },
          authData: p,
          setAuthData: b,
          project: m,
          setProject: x,
        }
        return Object(a.jsx)(l.Provider, {value: j, children: e})
      }
      function p() {
        var n = o.a.useContext(l)
        if (!n)
          throw new Error('"useAuth" should be used inside "AuthProvider"')
        return n
      }
      l.displayName = 'AuthContext'
    },
    31: function (n, e, t) {
      'use strict'
      t.d(e, 'c', function () {
        return d
      }),
        t.d(e, 'b', function () {
          return c
        }),
        t.d(e, 'f', function () {
          return o
        }),
        t.d(e, 'l', function () {
          return s
        }),
        t.d(e, 'm', function () {
          return w
        }),
        t.d(e, 'i', function () {
          return v
        }),
        t.d(e, 'a', function () {
          return k
        }),
        t.d(e, 'k', function () {
          return z
        }),
        t.d(e, 'g', function () {
          return O
        }),
        t.d(e, 'h', function () {
          return y
        }),
        t.d(e, 'e', function () {
          return B
        }),
        t.d(e, 'j', function () {
          return S
        }),
        t.d(e, 'd', function () {
          return L
        })
      var r = t(6),
        a = t(5),
        i = ['xs', 's', 'phoneLarge', 'desktop'],
        o = [320, 480, 900, 1220].reduce(function (n, e, t) {
          return (
            (n[i[t]] = '@media screen and (max-width: '.concat(e, 'px)')), n
          )
        }, {}),
        c = {
          whiteFaded: 'rgba(255, 255, 255, 0.7)',
          aliceLightBlue: '#E9F1F7',
          lightBlue: '#a5e6ec',
          kindaBlue: '#337ab7',
          kindaDarkBlue: '#23527c',
          independenceBlue: '#3A405A',
          darkBlue: '#282c34',
          red: 'tomato',
          burgundyRed: '#890620',
          lightGreen: '#1BBC9B',
          gatsbyPurple: '#663399',
        },
        s = {
          thin: '100',
          light: '300',
          regular: '400',
          medium: '500',
          bold: '700',
          black: '900',
        }
      function u() {
        var n = Object(r.a)([
          '\n  /*\n* Browsers CSS Reset\n*/\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n  }\n\n  /*\n   * Global Typography & Normalization\n   */\n\n  html {\n    box-sizing: border-box;\n    overflow-y: scroll;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    font-size: 100%;\n    scrollbar-color: ',
          ' ',
          ';\n    ',
          " {\n      font-size: 112.5%;\n    }\n  }\n\n  body {\n    margin: 0;\n    font-family: serif;\n    line-height: 1.45;\n    word-wrap: break-word;\n    font-kerning: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n    text-rendering: optimizeLegibility;\n    font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n    color: ",
          ';\n    background: ',
          ';\n    scrollbar-width: thin;\n  }\n\n  footer,\n  header,\n  main,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n\n  img {\n    padding: 0;\n    margin: 1.45rem 0 1.45rem;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    padding: 0;\n    margin: 0 0 1.45rem;\n    font-family: serif;\n    font-weight: 500;\n    line-height: 1.1;\n  }\n\n  h1 {\n    font-size: 2.25rem;\n    font-weight: ',
          ';\n    color: ',
          ';\n  }\n\n  h2 {\n    font-size: 1.62671rem;\n  }\n\n  h3 {\n    font-size: 1.38316rem;\n  }\n\n  h4 {\n    font-size: 1rem;\n  }\n\n  h5 {\n    font-size: 0.85028rem;\n  }\n\n  h6 {\n    font-size: 0.78405rem;\n  }\n\n  p {\n    margin-bottom: 27px;\n    font-family: sans;\n    font-size: 16px;\n    letter-spacing: 0.2;\n    line-height: 1.7;\n\n    ',
          ' {\n      margin-bottom: 30px;\n    }\n  }\n\n  p *:last-child {\n    margin-bottom: 0;\n  }\n\n  a {\n    text-decoration: none;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n    color: inherit;\n    transition: 0.3s ease all;\n\n    &:hover,\n    &:focus {\n      outline-width: 0;\n      color: ',
          ';\n    }\n  }\n\n  b,\n  strong {\n    font-weight: 600;\n  }\n\n  ol li,\n  ul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  /*\n   * Global Form Styles\n   */\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    margin: 0;\n    font: inherit;\n  }\n\n  optgroup {\n    font-weight: 600;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  fieldset {\n    border: 1px solid silver;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  button:disabled {\n    opacity: 0.2;\n  }\n',
        ])
        return (
          (u = function () {
            return n
          }),
          n
        )
      }
      var d = Object(a.b)(
        u(),
        c.independenceBlue,
        c.darkBlue,
        o.s,
        c.aliceLightBlue,
        c.independenceBlue,
        s.black,
        c.aliceLightBlue,
        o.phoneLarge,
        c.whiteFaded,
      )
      function l() {
        var n = Object(r.a)([
          '\n  font-size: 200%;\n  font-family: serif;\n  font-weight: ',
          ';\n  padding-left: 25px;\n  padding-top: 25px;\n  ',
          ' {\n    padding-left: 15px;\n    padding-top: 15px;\n  }\n',
        ])
        return (
          (l = function () {
            return n
          }),
          n
        )
      }
      function f() {
        var n = Object(r.a)([
          '\n  outline: none;\n  width: inherit;\n  height: calc(100% - 14px);\n  padding: 8px;\n  padding-bottom: 0;\n  color: ',
          ';\n  border: 5px solid ',
          ';\n  border-radius: 7%;\n  background-color: transparent;\n  margin-left: 10px;\n  letter-spacing: 1.2px;\n\n  ',
          ' {\n    margin-left: 0;\n    height: 188px;\n  }\n  ',
          ' {\n    height: 124px;\n  }\n',
        ])
        return (
          (f = function () {
            return n
          }),
          n
        )
      }
      function p() {
        var n = Object(r.a)([
          '\n  display: block;\n  width: calc(550px - 50px);\n  padding: 2px;\n  margin-right: 19px;\n  font-size: 1.4rem;\n\n  ',
          ' {\n    width: 500px;\n    font-size: 2rem;\n  }\n  ',
          ' {\n    width: calc(407px - 30px);\n    font-size: 1.345rem;\n  }\n  ',
          ' {\n    width: 356px;\n  }\n',
        ])
        return (
          (p = function () {
            return n
          }),
          n
        )
      }
      function b() {
        var n = Object(r.a)([
          '\n  color: ',
          ';\n  padding-left: 16px;\n  padding-bottom: 2px;\n',
        ])
        return (
          (b = function () {
            return n
          }),
          n
        )
      }
      function g() {
        var n = Object(r.a)([
          '\n  outline: none;\n  padding: 8px;\n  width: 100%;\n  height: 30px;\n  background-color: transparent;\n  color: ',
          ';\n  border: 4.5px solid ',
          ';\n  border-radius: 7%;\n  letter-spacing: 2.2px;\n\n  ',
          ' {\n    height: 50px;\n  }\n  ',
          ' {\n    height: 30px;\n  }\n',
        ])
        return (
          (g = function () {
            return n
          }),
          n
        )
      }
      function h() {
        var n = Object(r.a)([
          '\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  margin: 0 0 20px;\n  background-color: ',
          ';\n  width: 550px;\n  padding: 20px;\n  border: 5px solid ',
          ';\n  border-radius: 20px;\n  ',
          ' {\n    width: 530px;\n  }\n  ',
          ' {\n    width: 407px;\n  }\n  ',
          ' {\n    transform: scale(0.7);\n  }\n',
        ])
        return (
          (h = function () {
            return n
          }),
          n
        )
      }
      function m() {
        var n = Object(r.a)([
          '\n  outline: none;\n  place-self: center;\n  background-color: ',
          ';\n  color: ',
          ';\n  font-family: serif;\n  font-weight: ',
          ';\n  font-size: 174%;\n  width: 300px;\n  margin: 10px 50px;\n  height: 50px;\n  border-radius: 14%;\n  border: 0px;\n  transition: background-color, color 0.4s steps;\n  :hover,\n  :focus {\n    color: ',
          ';\n    background-color: ',
          ';\n  }\n  ',
          ' {\n    transform: scale(0.9);\n  }\n  ',
          ' {\n    transform: scale(0.7);\n  }\n',
        ])
        return (
          (m = function () {
            return n
          }),
          n
        )
      }
      function x() {
        var n = Object(r.a)([
          '\n  @keyframes spinner {\n    0% {\n      transform: translate3d(-50%, -50%, 0) rotate(0deg);\n    }\n    100% {\n      transform: translate3d(-50%, -50%, 0) rotate(360deg);\n    }\n  }\n  animation: 1.5s linear infinite spinner;\n  animation-play-state: inherit;\n  border: double 10px ',
          ';\n  border-bottom-color: ',
          ";\n  border-radius: 50%;\n  content: '';\n  height: 40px;\n  width: 40px;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  will-change: transform;\n",
        ])
        return (
          (x = function () {
            return n
          }),
          n
        )
      }
      function j() {
        var n = Object(r.a)([
          '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  place-content: center;\n  min-height: 267px;\n  margin: 1% auto;\n  padding: 50px 100px;\n  ',
          ' {\n    flex-direction: column;\n    flex-wrap: nowrap;\n    place-items: center;\n  }\n  ',
          ' {\n    padding: 1% 0;\n    margin: 0;\n  }\n',
        ])
        return (
          (j = function () {
            return n
          }),
          n
        )
      }
      var w = Object(a.b)(j(), o.desktop, o.s),
        v = Object(a.b)(x(), c.aliceLightBlue, c.kindaBlue),
        k = Object(a.b)(
          m(),
          c.whiteFaded,
          c.independenceBlue,
          s.black,
          c.whiteFaded,
          c.darkBlue,
          o.phoneLarge,
          o.s,
        ),
        O = Object(a.b)(
          h(),
          c.independenceBlue,
          c.darkBlue,
          o.desktop,
          o.phoneLarge,
          o.s,
        ),
        y = Object(a.b)(
          g(),
          c.aliceLightBlue,
          c.aliceLightBlue,
          o.desktop,
          o.phoneLarge,
        ),
        z = Object(a.b)(b(), c.red),
        B = Object(a.b)(p(), o.desktop, o.phoneLarge, o.s),
        S = Object(a.b)(
          f(),
          c.aliceLightBlue,
          c.whiteFaded,
          o.desktop,
          o.phoneLarge,
        ),
        L = Object(a.b)(l(), s.black, o.s)
    },
    32: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return p
      }),
        t.d(e, 'c', function () {
          return b
        }),
        t.d(e, 'b', function () {
          return h
        })
      var r = t(13),
        a = t(18),
        i = t(6),
        o = t(25),
        c = t(1),
        s = t.n(c),
        u = t(5),
        d = t(31)
      function l() {
        var n = Object(i.a)([
          "\n          whitespace: 'break-spaces';\n          margin: '0';\n          margin-bottom: -5;\n        ",
        ])
        return (
          (l = function () {
            return n
          }),
          n
        )
      }
      function f() {
        var n = Object(i.a)(['\n        color: ', ';\n      '])
        return (
          (f = function () {
            return n
          }),
          n
        )
      }
      function p(n) {
        var e = n.error,
          t = Object(o.a)(n, ['error'])
        return Object(u.c)(
          'div',
          Object(a.a)(
            {role: 'alert', css: Object(u.b)(f(), d.b.burgundyRed)},
            t,
          ),
          Object(u.c)('span', null, 'There was an error: '),
          Object(u.c)('pre', {css: Object(u.b)(l())}, e.message),
        )
      }
      function b(n, e) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = t.serialize,
          i = void 0 === a ? JSON.stringify : a,
          o = t.deserialize,
          c = void 0 === o ? JSON.parse : o,
          u = s.a.useState(function () {
            var t = window.localStorage.getItem(n)
            return t ? c(t) : 'function' === typeof e ? e() : e
          }),
          d = Object(r.a)(u, 2),
          l = d[0],
          f = d[1],
          p = s.a.useRef(n)
        return (
          s.a.useEffect(
            function () {
              var e = p.current
              e !== n && window.localStorage.removeItem(e),
                (p.current = n),
                window.localStorage.setItem(n, i(l))
            },
            [n, l, i],
          ),
          [l, f]
        )
      }
      function g(n, e) {
        switch (e.type) {
          case 'idle':
            return {status: 'idle'}
          case 'pending':
            return {status: 'pending'}
          case 'resolved':
            return {status: 'resolved'}
          case 'rejected':
            return {status: 'rejected'}
          default:
            throw new Error('Unhandled action type: '.concat(e.type))
        }
      }
      function h(n) {
        var e = s.a.useReducer(g, Object(a.a)({status: 'idle'}, n)),
          t = Object(r.a)(e, 2)
        return {
          status: t[0].status,
          dispatch: (function (n) {
            var e = s.a.useRef(!1)
            return (
              s.a.useLayoutEffect(function () {
                return (
                  (e.current = !0),
                  function () {
                    return (e.current = !1)
                  }
                )
              }, []),
              s.a.useCallback(
                function () {
                  return e.current ? n.apply(void 0, arguments) : void 0
                },
                [n],
              )
            )
          })(t[1]),
        }
      }
    },
    57: function (n, e, t) {
      'use strict'
      t.r(e)
      var r = t(7),
        a = t(1),
        i = t(11),
        o = t.n(i),
        c = t(36),
        s = t(38),
        u = t(27),
        d = t(23),
        l =
          (t(56),
          a.lazy(function () {
            return Promise.all([t.e(0), t.e(1), t.e(2), t.e(6)]).then(
              t.bind(null, 292),
            )
          })),
        f = a.lazy(function () {
          return Promise.all([t.e(2), t.e(7)]).then(t.bind(null, 293))
        })
      var p = function () {
          var n = Object(d.b)().authData
          return Object(r.jsx)(a.Suspense, {
            fallback: 'loading...',
            children: n ? Object(r.jsx)(l, {}) : Object(r.jsx)(f, {}),
          })
        },
        b = t(18),
        g = t(25),
        h = t(33),
        m = []
      function x(n) {
        var e = n.metadata,
          t = n.phases,
          i = Object(g.a)(n, ['metadata', 'phases'])
        return Object(r.jsx)(
          a.Profiler,
          Object(b.a)(
            {
              onRender: function (n, r, a, i, o, c, s) {
                ;(t && !t.includes(r)) ||
                  m.push({
                    metadata: e,
                    id: n,
                    phase: r,
                    actualDuration: a,
                    baseDuration: i,
                    startTime: o,
                    commitTime: c,
                    interactions: s,
                  })
              },
            },
            i,
          ),
        )
      }
      setInterval(function () {
        if (!m.length) return Promise.resolve({success: !0})
        var n = Object(h.a)(m)
        return (m = []), console.log(n)
      }, 5e3)
      var j = t(19),
        w = new u.a()
      Object(c.unstable_trace)(
        'initial render',
        performance.now(),
        function () {
          return o.a.render(
            Object(r.jsxs)(u.b, {
              queryCache: w,
              children: [
                Object(r.jsx)(x, {
                  id: 'App Root',
                  phases: ['mount'],
                  children: Object(r.jsx)(d.a, {
                    auth: j.a,
                    children: Object(r.jsx)(p, {}),
                  }),
                }),
                Object(r.jsx)(s.ReactQueryDevtools, {}),
              ],
            }),
            document.getElementById('root'),
          )
        },
      )
    },
  },
  [[57, 4, 5]],
  [0, 1, 2, 6],
])
//# sourceMappingURL=main.33b06a9e.chunk.js.map
