;(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [6, 9],
  {
    112: function (n, e, t) {
      'use strict'
      var r = t(6),
        c = t(5),
        a = t(31)
      function o() {
        var n = Object(r.a)([
          '\n            padding: 0;\n            margin: 0;\n          ',
        ])
        return (
          (o = function () {
            return n
          }),
          n
        )
      }
      function i() {
        var n = Object(r.a)(['\n            padding: 0;\n          '])
        return (
          (i = function () {
            return n
          }),
          n
        )
      }
      function u() {
        var n = Object(r.a)([
          '\n        display: flex;\n        place-content: center;\n        place-items: center;\n        height: 97vh;\n        flex-direction: column;\n        font-size: 159%;\n      ',
        ])
        return (
          (u = function () {
            return n
          }),
          n
        )
      }
      e.a = function () {
        return Object(c.c)(
          'div',
          {css: Object(c.b)(u())},
          Object(c.c)(c.a, {styles: a.c}),
          Object(c.c)('h1', {css: [a.d, Object(c.b)(i())]}, '404'),
          Object(c.c)('h2', {css: [a.d, Object(c.b)(o())]}, 'Page Not Found'),
        )
      }
    },
    113: function (n, e, t) {
      'use strict'
      var r = t(7),
        c = t(1),
        a = t(70),
        o = t(6),
        i = t(5),
        u = t(80),
        s = t(31),
        l = t.p + 'static/media/Layer-1@0,25x.e16596a5.png'
      function d() {
        var n = Object(o.a)([''])
        return (
          (d = function () {
            return n
          }),
          n
        )
      }
      function b() {
        var n = Object(o.a)([
          '\n            font-style: italic;\n            &:hover,\n            &:focus {\n              background-color: ',
          ';\n              color: ',
          ';\n            }\n          ',
        ])
        return (
          (b = function () {
            return n
          }),
          n
        )
      }
      function p() {
        var n = Object(o.a)([
          '\n    grid-row: 2;\n    grid-column: 1 / span 4;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    border: 9px solid ',
          ';\n    border-radius: 20%;\n    padding: 20px 55px;\n    margin: 0;\n    background-color: ',
          ';\n    & li {\n      font-size: 124%;\n      margin: 0 15px;\n      padding: 15px 25px;\n      background-color: ',
          ';\n      color: ',
          ';\n      border: 4.5px solid ',
          ';\n      font-weight: ',
          ';\n      border-radius: 20%;\n      &:last-child &:hover,\n      &:last-child &:focus {\n        background-color: ',
          ';\n        color: ',
          ';\n      }\n    }\n    ',
          ' {\n      flex-direction: column;\n      grid-row: 3;\n      grid-column: 1;\n\n      li {\n        font-size: 108%;\n        width: 10rem;\n        text-align: center;\n        letter-spacing: 1.2px;\n      }\n    }\n    ',
          ' {\n      display: none;\n      grid-row: 2;\n      grid-column: 1 / span 2;\n    }\n  ',
        ])
        return (
          (p = function () {
            return n
          }),
          n
        )
      }
      function f() {
        var n = Object(o.a)([
          '\n    display: grid;\n    place-items: center;\n    margin-bottom: 3%;\n    border-top: 22.5px solid ',
          ';\n    border-bottom: 22.5px solid ',
          ';\n    border-radius: 19%;\n    gap: 36px;\n    padding: 3% 7.5%;\n    img {\n      border: 15.5px solid ',
          ';\n      border-radius: 5%;\n      grid-column: 1;\n      grid-row: 1;\n    }\n    p {\n      font-size: 130%;\n      grid-column: 2 / span 3;\n      grid-row: 1;\n      letter-spacing: 0.1rem;\n    }\n    ',
          ' {\n      p {\n        font-size: 115%;\n        letter-spacing: 0.02rem;\n      }\n    }\n    ',
          ' {\n      gap: 0;\n      padding: 7% 1.5%;\n      border-radius: 6%;\n      img {\n        grid-row: 1;\n        grid-column: 1;\n      }\n      p {\n        grid-row: 2;\n        grid-column: 1;\n        padding: 0 13%;\n        font-size: 105%;\n        letter-spacing: 0.02rem;\n      }\n    }\n    ',
          ' {\n      margin-bottom: 5%;\n      border-radius: 0;\n    }\n  ',
        ])
        return (
          (f = function () {
            return n
          }),
          n
        )
      }
      var j = function () {
          var n = Object(i.b)(
              f(),
              s.b.darkBlue,
              s.b.darkBlue,
              s.b.darkBlue,
              s.f.desktop,
              s.f.phoneLarge,
              s.f.s,
            ),
            e = Object(i.b)(
              p(),
              s.b.kindaDarkBlue,
              s.b.darkBlue,
              s.b.whiteFaded,
              s.b.independenceBlue,
              s.b.independenceBlue,
              s.l.bold,
              s.b.independenceBlue,
              s.b.whiteFaded,
              s.f.phoneLarge,
              s.f.s,
            )
          return Object(i.c)(
            'div',
            {css: n},
            Object(i.c)('img', {src: l, alt: 'profilePicture'}),
            Object(i.c)(
              'p',
              null,
              'Welcome! I`m Ahmed Eldessouki. I`m ',
              (function () {
                var n = new Date(),
                  e = n.getFullYear(),
                  t = new Date('apr 4 1989'),
                  r = t.getFullYear(),
                  c = new Date(t)
                return c.setFullYear(e), e - r - (n < c ? 1 : 0)
              })(),
              ' years old from Cairo, Egypt currently living in Istanbul, Turkey. I looking for a new opportunity as a Front-End Developer. I graduated from University Of Wales. I worked at RoomMe as an entry level Front-End Developer. I`m a very passionate about Front-End Developer. Always developing myself. A strength of mine, is my ability to be observant of small details and to stay up-to-date with the newest technologies and techniques.',
            ),
            Object(i.c)(
              'ul',
              {css: e},
              Object(i.c)('li', null, 'Ahmed ElDessouki'),
              Object(i.c)(
                'li',
                {className: 'follow-container'},
                'Istanbul, Turkey',
              ),
              Object(i.c)(
                'li',
                {css: Object(i.b)(b(), s.b.independenceBlue, s.b.whiteFaded)},
                Object(i.c)(
                  'a',
                  {
                    href: 'www.github.com/ahmedeldessouki',
                    css: Object(i.b)(d()),
                  },
                  Object(i.c)(u.a, null),
                  ' Github Account',
                ),
              ),
            ),
          )
        },
        g = c.lazy(function () {
          return Promise.all([t.e(0), t.e(1), t.e(9)]).then(t.bind(null, 152))
        }),
        O = c.lazy(function () {
          return t.e(8).then(t.bind(null, 294))
        })
      e.a = function () {
        return Object(r.jsxs)(a.a, {
          children: [
            Object(r.jsx)(j, {}),
            Object(r.jsxs)(c.Suspense, {
              fallback: Object(r.jsx)('div', {children: 'loading...'}),
              children: [Object(r.jsx)(g, {}), Object(r.jsx)(O, {})],
            }),
          ],
        })
      }
    },
    152: function (n, e, t) {
      'use strict'
      t.r(e)
      var r = t(6),
        c = t(62),
        a = t.n(c),
        o = t(18),
        i = t(63),
        u = t(13),
        s = t(5),
        l = t(1),
        d = t.n(l),
        b = t(58),
        p = t(111),
        f = t(71),
        j = t(19),
        g = t(23),
        O = t(31),
        m = t(81)
      function h() {
        var n = Object(r.a)([
          '\n                    background: ',
          ';\n                    outline: none;\n                  ',
        ])
        return (
          (h = function () {
            return n
          }),
          n
        )
      }
      function v() {
        var n = Object(r.a)([
          '\n          justify-self: center;\n          grid-row: 5;\n          grid-column: 2 / span 3;\n          ',
          ' {\n            grid-row: 2;\n            grid-column: 1;\n          }\n        ',
        ])
        return (
          (v = function () {
            return n
          }),
          n
        )
      }
      function x() {
        var n = Object(r.a)([
          '\n    border: 0 solid ',
          ';\n    border-radius: 50%;\n    width: 1rem;\n    height: 1rem;\n    background: ',
          ';\n    margin: 0 5px 10px;\n    cursor: pointer;\n    :hover,\n    :focus {\n      background: ',
          ';\n    }\n  ',
        ])
        return (
          (x = function () {
            return n
          }),
          n
        )
      }
      function y() {
        var n = Object(r.a)([
          '\n    border: 0 solid;\n    background: ',
          ';\n    color: ',
          ';\n    font-weight: 900;\n    padding: 0 47px;\n    opacity: 0.6;\n    font-size: 4rem;\n    ',
          ' {\n      display: none;\n    }\n  ',
        ])
        return (
          (y = function () {
            return n
          }),
          n
        )
      }
      function w() {
        var n = Object(r.a)([
          '\n    grid-row: 1 / span 5;\n    grid-column: 5;\n    justify-self: end;\n    ',
          ' {\n      display: none;\n    }\n  ',
        ])
        return (
          (w = function () {
            return n
          }),
          n
        )
      }
      function k() {
        var n = Object(r.a)([
          '\n    grid-row: 1 / span 5;\n    grid-column: 1;\n    justify-self: start;\n    ',
          ' {\n      display: none;\n    }\n  ',
        ])
        return (
          (k = function () {
            return n
          }),
          n
        )
      }
      function B() {
        var n = Object(r.a)([
          '\n    border: 0 solid;\n    background: ',
          ';\n    color: ',
          ';\n    font-weight: 900;\n    padding: 0 47px;\n    opacity: 0.6;\n    font-size: 4rem;\n    cursor: pointer;\n    :hover {\n      background: ',
          ';\n    }\n  ',
        ])
        return (
          (B = function () {
            return n
          }),
          n
        )
      }
      function L() {
        var n = Object(r.a)([
          '\n    width: 100%;\n    display: grid;\n    place-items: center;\n    height: 440px;\n    a {\n      color: transparent;\n      justify-self: center;\n      grid-row: 1 / span 4;\n      grid-column: 2 / span 3;\n      img {\n        margin: 0;\n      }\n    }\n    ',
          ' {\n      a {\n        grid-row: 1;\n        grid-column: 1;\n      }\n    }\n  ',
        ])
        return (
          (L = function () {
            return n
          }),
          n
        )
      }
      var C = function (n) {
        var e = n.imgArray,
          t = n.imgAlt,
          r = d.a.useState(0),
          c = Object(u.a)(r, 2),
          a = c[0],
          o = c[1],
          i = Object(s.b)(L(), O.f.phoneLarge),
          l = Object(s.b)(B(), O.b.darkBlue, O.b.kindaDarkBlue, O.b.whiteFaded),
          b = Object(s.b)(k(), O.f.phoneLarge),
          p = Object(s.b)(w(), O.f.phoneLarge),
          f = Object(s.b)(y(), O.b.burgundyRed, O.b.whiteFaded, O.f.phoneLarge),
          j = Object(s.b)(x(), O.b.darkBlue, O.b.darkBlue, O.b.whiteFaded)
        return Object(s.c)(
          'div',
          {css: i},
          Object(s.c)(
            'button',
            {
              type: 'button',
              css: [0 === a ? f : l, b],
              onClick: function () {
                return 0 !== a ? o(a - 1) : null
              },
              'data-testid': 'previous',
              disabled: 0 === a,
            },
            '<',
          ),
          Object(s.c)(
            'a',
            {href: e[a]},
            Object(s.c)(m.Image, {
              width: '450',
              height: '400',
              alt: t,
              fit: 'contain',
              src: 'https://images.weserv.nl/?url='.concat(
                e[a],
                '&w=450&h=380&fit=contain',
              ),
            }),
          ),
          Object(s.c)(
            'section',
            {css: Object(s.b)(v(), O.f.phoneLarge)},
            e.map(function (n, e) {
              return Object(s.c)('button', {
                key: n,
                type: 'button',
                onClick: function () {
                  return o(e)
                },
                'data-testid': 'btn'.concat(e),
                css: [j, a === e ? Object(s.b)(h(), O.b.whiteFaded) : null],
              })
            }),
          ),
          Object(s.c)(
            'button',
            {
              type: 'button',
              'data-testid': 'next',
              css: [a === e.length - 1 ? f : l, p],
              onClick: function () {
                return a !== e.length ? o(a + 1) : null
              },
              disabled: a === e.length - 1,
            },
            '>',
          ),
        )
      }
      function D() {
        var n = Object(r.a)(['\n          margin: 50px 0 0;\n        '])
        return (
          (D = function () {
            return n
          }),
          n
        )
      }
      function N() {
        var n = Object(r.a)([
          '\n            display: flex;\n            place-content: space-between;\n            font-size: 1.1rem;\n            letter-spacing: 1.2px;\n            font-variant: all-petite-caps;\n          ',
        ])
        return (
          (N = function () {
            return n
          }),
          n
        )
      }
      function F() {
        var n = Object(r.a)([
          '\n            padding: 0 5%;\n            font-size: 1.45rem;\n            letter-spacing: 2.4px;\n          ',
        ])
        return (
          (F = function () {
            return n
          }),
          n
        )
      }
      function E() {
        var n = Object(r.a)([
          '\n            font-size: 2.75rem;\n            font-weight: 900;\n            color: #e9f1f7;\n            padding-left: 0;\n            border-radius: 7.5%;\n          ',
        ])
        return (
          (E = function () {
            return n
          }),
          n
        )
      }
      function S() {
        var n = Object(r.a)([
          '\n          display: flex;\n          flex-direction: column;\n          padding: 10px 50px 33px;\n          place-content: center;\n          min-height: 241px;\n          border-bottom: 24px solid ',
          ';\n        ',
        ])
        return (
          (S = function () {
            return n
          }),
          n
        )
      }
      var z = function (n) {
        var e = n.project
        return e
          ? Object(s.c)(
              l.Fragment,
              null,
              Object(s.c)(C, {imgArray: e.projectLogo, imgAlt: e.projectName}),
              Object(s.c)(
                'div',
                {css: Object(s.b)(S(), O.b.darkBlue)},
                Object(s.c)(
                  'h1',
                  {css: Object(s.b)(E())},
                  Object(s.c)('a', {href: e.projectLink}, e.projectName),
                ),
                Object(s.c)('p', {css: Object(s.b)(F())}, e.description),
                Object(s.c)(
                  'div',
                  {css: Object(s.b)(N())},
                  Object(s.c)(
                    'span',
                    null,
                    'Author: ',
                    e.authorFirstName,
                    ' ',
                    e.authorLastName,
                  ),
                  Object(s.c)('span', null, 'Created At: April 2020'),
                ),
              ),
            )
          : Object(s.c)('div', {css: [O.i, Object(s.b)(D())]})
      }
      function P() {
        var n = Object(r.a)([
          '\n          padding: 10px 20px;\n          font-size: 108%;\n          color: ',
          ';\n        ',
        ])
        return (
          (P = function () {
            return n
          }),
          n
        )
      }
      function _() {
        var n = Object(r.a)([
          '\n    color: white;\n    background-color: ',
          ';\n    padding: 8% 5%;\n    letter-spacing: 1.4px;\n    font-size: 1.82rem;\n    font-weight: ',
          ';\n    :hover,\n    :focus {\n      color: ',
          ';\n      background: ',
          ';\n    }\n  ',
        ])
        return (
          (_ = function () {
            return n
          }),
          n
        )
      }
      var I = function (n) {
          var e = n.project,
            t = Object(s.b)(
              _(),
              O.b.darkBlue,
              O.l.medium,
              O.b.independenceBlue,
              O.b.aliceLightBlue,
            )
          return Object(s.c)(
            l.Fragment,
            null,
            Object(s.c)('h1', {css: t}, e.projectName),
            Object(s.c)(
              'span',
              {css: Object(s.b)(P(), O.b.aliceLightBlue)},
              'Add Tags',
            ),
          )
        },
        A = t(92),
        R = t(27)
      function q() {
        var n = Object(r.a)([
          '\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                  ',
        ])
        return (
          (q = function () {
            return n
          }),
          n
        )
      }
      function U() {
        var n = Object(r.a)([
          '\n    margin: 0 10px;\n    padding: 20px 10px;\n    display: grid;\n    grid-gap: 25px;\n    justify-content: space-evenly;\n    grid-template-columns: repeat(auto-fit, minmax(231px, 264px));\n  ',
        ])
        return (
          (U = function () {
            return n
          }),
          n
        )
      }
      function M() {
        var n = Object(r.a)([
          '\n    border-bottom: 10px solid ',
          ';\n    border-radius: 11%;\n    width: 100%;\n    :hover,\n    :focus {\n      border-bottom-color: ',
          ';\n    }\n  ',
        ])
        return (
          (M = function () {
            return n
          }),
          n
        )
      }
      e.default = function () {
        var n = Object(g.b)(),
          e = n.authData,
          t = n.setProject,
          r = d.a.useState(null),
          c = Object(u.a)(r, 2),
          l = c[0],
          m = c[1],
          h = Object(R.c)({
            queryKey: 'projects',
            queryFn: (function () {
              var n = Object(i.a)(
                a.a.mark(function n() {
                  return a.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            j.b
                              .collection('projects')
                              .get()
                              .then(
                                function (n) {
                                  return n.docs.map(function (n) {
                                    return Object(o.a)(
                                      Object(o.a)({}, n.data()),
                                      {},
                                      {id: n.id},
                                    )
                                  })
                                },
                                function (n) {
                                  return n
                                },
                              )
                          )
                        case 2:
                          return n.abrupt('return', n.sent)
                        case 3:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )
              return function () {
                return n.apply(this, arguments)
              }
            })(),
          }),
          v = h.status,
          x = h.error,
          y = h.data
        if ('loading' === v) return 'loading'
        if (x) throw x.message
        var w = Object(s.b)(M(), O.b.darkBlue, O.b.aliceLightBlue),
          k = Object(s.b)(U())
        return l
          ? Object(s.c)(
              d.a.Fragment,
              null,
              Object(s.c)(
                'button',
                {
                  css: O.a,
                  onClick: function () {
                    return m(null)
                  },
                  type: 'button',
                },
                'Back',
              ),
              Object(s.c)(z, {project: l}),
            )
          : Object(s.c)(
              d.a.Fragment,
              null,
              Object(s.c)('h1', {css: O.d}, 'Projects'),
              Object(s.c)(
                'div',
                {css: k},
                null === y || void 0 === y
                  ? void 0
                  : y.map(function (n) {
                      return Object(s.c)(
                        'div',
                        {css: w, key: n.id},
                        e
                          ? Object(s.c)(
                              'div',
                              {css: Object(s.b)(q())},
                              Object(s.c)(
                                b.b,
                                {
                                  to: '/edit/'.concat(n.id),
                                  onFocus: function () {
                                    return t(n)
                                  },
                                },
                                Object(s.c)(p.e, {
                                  style: {
                                    color: O.b.lightBlue,
                                    fontSize: '1.5rem',
                                  },
                                }),
                              ),
                              Object(s.c)(f.a, {
                                project: n,
                                title: 'Project',
                                fn: function () {
                                  return Object(A.f)(n)
                                },
                              }),
                            )
                          : null,
                        Object(s.c)(
                          'button',
                          {
                            type: 'button',
                            onClick: function () {
                              return m(n)
                            },
                            style: {
                              background: 'transparent',
                              border: 'none',
                              width: '100%',
                            },
                          },
                          Object(s.c)(I, {project: n}),
                        ),
                      )
                    }),
              ),
            )
      }
    },
    288: function (n, e, t) {
      !(function (n, e) {
        'use strict'
        function t(n, e) {
          ;(n.prototype = Object.create(e.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = e)
        }
        var r = function (n, e) {
            return (
              void 0 === n && (n = []),
              void 0 === e && (e = []),
              n.length !== e.length ||
                n.some(function (n, t) {
                  return !Object.is(n, e[t])
                })
            )
          },
          c = {error: null},
          a = (function (n) {
            function a() {
              for (
                var e, t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a]
              return (
                ((e = n.call.apply(n, [this].concat(r)) || this).state = c),
                (e.updatedWithError = !1),
                (e.resetErrorBoundary = function () {
                  for (
                    var n, t = arguments.length, r = new Array(t), c = 0;
                    c < t;
                    c++
                  )
                    r[c] = arguments[c]
                  null == e.props.onReset || (n = e.props).onReset.apply(n, r),
                    e.reset()
                }),
                e
              )
            }
            t(a, n),
              (a.getDerivedStateFromError = function (n) {
                return {error: n}
              })
            var o = a.prototype
            return (
              (o.reset = function () {
                ;(this.updatedWithError = !1), this.setState(c)
              }),
              (o.componentDidCatch = function (n, e) {
                var t, r
                null == (t = (r = this.props).onError) || t.call(r, n, e)
              }),
              (o.componentDidUpdate = function (n) {
                var e,
                  t,
                  c = this.state.error,
                  a = this.props.resetKeys
                null === c || this.updatedWithError
                  ? null !== c &&
                    r(n.resetKeys, a) &&
                    (null == (e = (t = this.props).onResetKeysChange) ||
                      e.call(t, n.resetKeys, a),
                    this.reset())
                  : (this.updatedWithError = !0)
              }),
              (o.render = function () {
                var n = this.state.error,
                  t = this.props,
                  r = t.fallbackRender,
                  c = t.FallbackComponent,
                  a = t.fallback
                if (null !== n) {
                  var o = {
                    error: n,
                    resetErrorBoundary: this.resetErrorBoundary,
                  }
                  if (e.isValidElement(a)) return a
                  if ('function' === typeof r) return r(o)
                  if (c) return e.createElement(c, o)
                  throw new Error(
                    'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop',
                  )
                }
                return this.props.children
              }),
              a
            )
          })(e.Component)
        function o(n, t) {
          var r = function (r) {
              return e.createElement(a, t, e.createElement(n, r))
            },
            c = n.displayName || n.name || 'Unknown'
          return (r.displayName = 'withErrorBoundary(' + c + ')'), r
        }
        function i(n) {
          var t = e.useState(null),
            r = t[0],
            c = t[1]
          if (n) throw n
          if (r) throw r
          return c
        }
        ;(n.ErrorBoundary = a),
          (n.useErrorHandler = i),
          (n.withErrorBoundary = o),
          Object.defineProperty(n, '__esModule', {value: !0})
      })(e, t(1))
    },
    292: function (n, e, t) {
      'use strict'
      t.r(e)
      var r = t(7),
        c = t(1),
        a = t.n(c),
        o = t(58),
        i = t(39),
        u = t(113),
        s = t(152),
        l = t(70),
        d = t(62),
        b = t.n(d),
        p = t(18),
        f = t(63),
        j = t(6),
        g = t(13),
        O = t(5),
        m = t(27),
        h = t(19),
        v = t(31)
      function x() {
        var n = Object(j.a)([
          '\n    grid-column: 2 / span 2;\n    grid-row: 3;\n    place-self: end;\n    padding-right: 17px;\n    ',
          ' {\n      grid-column: 1;\n      grid-row: 4;\n      font-size: 117%;\n    }\n  ',
        ])
        return (
          (x = function () {
            return n
          }),
          n
        )
      }
      function y() {
        var n = Object(j.a)([
          '\n    grid-column: 2;\n    grid-row: 2;\n    place-self: center;\n    font-size: 175%;\n    width: 61vw;\n    background-color: ',
          ';\n    padding: 10px 26px;\n    width: 80%;\n    ',
          ' {\n      grid-column: 1;\n      grid-row: 3;\n      padding: 10px 13px;\n      font-size: 150%;\n    }\n  ',
        ])
        return (
          (y = function () {
            return n
          }),
          n
        )
      }
      function w() {
        var n = Object(j.a)([
          '\n    grid-column: 1 / span 3;\n    grid-row: 1;\n    place-self: baseline;\n  ',
        ])
        return (
          (w = function () {
            return n
          }),
          n
        )
      }
      function k() {
        var n = Object(j.a)([
          '\n    grid-column: 1;\n    grid-row: 2;\n    background-color: ',
          ';\n    padding: 30px 19px;\n    margin-left: 17px;\n\n    ',
          ' {\n      width: 80%;\n      margin-left: 0;\n      padding: 20px 10px;\n      & > h2 {\n        font-size: 124%;\n      }\n    }\n  ',
        ])
        return (
          (k = function () {
            return n
          }),
          n
        )
      }
      function B() {
        var n = Object(j.a)([
          '\n    display: grid;\n    place-content: center;\n    place-items: center;\n    grid-gap: 0px 17px;\n    place-content: inherit;\n    ',
          ' {\n      grid-gap: 0;\n    }\n  ',
        ])
        return (
          (B = function () {
            return n
          }),
          n
        )
      }
      var L = function (n) {
          var e = n.message,
            t = Object(O.b)(B(), v.f.phoneLarge),
            r = Object(O.b)(k(), v.b.darkBlue, v.f.phoneLarge),
            c = Object(O.b)(w()),
            a = Object(O.b)(y(), v.b.darkBlue, v.f.phoneLarge),
            o = Object(O.b)(x(), v.f.phoneLarge)
          return Object(O.c)(
            'div',
            {css: t},
            Object(O.c)('h1', {css: [v.d, c]}, e.contactName.toUpperCase()),
            Object(O.c)(
              'div',
              {css: r},
              Object(O.c)('h2', null, 'Phone Number:', e.phoneNumber),
              Object(O.c)(
                'h2',
                null,
                'Email: ',
                Object(O.c)('a', {href: 'mailto:'.concat(e.email)}, e.email),
              ),
            ),
            Object(O.c)('p', {css: a}, e.description),
            Object(O.c)(
              'h3',
              {css: o},
              'Msg Received: ',
              e.sentAt.toDate().toDateString(),
            ),
          )
        },
        C = t(17)
      function D() {
        return (D = Object(f.a)(
          b.a.mark(function n(e) {
            var t, r
            return b.a.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (n.next = 2),
                      h.b
                        .collection('contactedMe')
                        .doc(''.concat(e.id))
                        .delete()
                        .then(function () {
                          C.b.success(
                            'Message from "'.concat(
                              e.contactName,
                              '" is no longer exits',
                            ),
                          ),
                            (t = !0)
                        })
                        .catch(function (n) {
                          C.b.error('Error! Message Still Exists'),
                            (r = n.message)
                        })
                    )
                  case 2:
                    return n.abrupt('return', {resolved: t, error: r})
                  case 3:
                  case 'end':
                    return n.stop()
                }
            }, n)
          }),
        )).apply(this, arguments)
      }
      var N = t(71)
      function F() {
        var n = Object(j.a)([
          '\n    grid-column: 3;\n    padding-right: 11px;\n  ',
        ])
        return (
          (F = function () {
            return n
          }),
          n
        )
      }
      function E() {
        var n = Object(j.a)([
          '\n    grid-row: 3;\n    grid-column: 1 / span 3;\n  ',
        ])
        return (
          (E = function () {
            return n
          }),
          n
        )
      }
      function S() {
        var n = Object(j.a)([
          '\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    padding: 0 4%;\n    height: 98px;\n    overflow: hidden;\n  ',
        ])
        return (
          (S = function () {
            return n
          }),
          n
        )
      }
      function z() {
        var n = Object(j.a)([
          '\n    border: 0;\n    grid-row: 1;\n    grid-column: 1 / span 2;\n    place-self: baseline;\n    margin: 0;\n    place-self: baseline;\n  ',
        ])
        return (
          (z = function () {
            return n
          }),
          n
        )
      }
      function P() {
        var n = Object(j.a)([
          '\n    overflow: auto;\n    display: grid;\n    background-color: ',
          ';\n    grid-gap: 5px;\n    height: 220px;\n    place-items: center;\n    border: 6px solid ',
          ";\n    border-radius: 10px;\n    font-family: 'Merienda One', cursive;\n    & > a {\n      color: ",
          ';\n    }\n  ',
        ])
        return (
          (P = function () {
            return n
          }),
          n
        )
      }
      var _ = function (n) {
        var e = n.message,
          t = n.fn,
          r = Object(O.b)(
            P(),
            v.b.independenceBlue,
            v.b.darkBlue,
            v.b.aliceLightBlue,
          ),
          c = Object(O.b)(z()),
          a = Object(O.b)(S()),
          o = Object(O.b)(E()),
          i = Object(O.b)(F())
        return Object(O.c)(
          'div',
          {css: r},
          Object(O.c)(
            'button',
            {css: c, onClick: t},
            Object(O.c)('h2', {css: v.d}, e.contactName),
          ),
          Object(O.c)(
            'div',
            {css: i},
            Object(O.c)(N.a, {
              title: e.contactName,
              fn: function () {
                return (function (n) {
                  return D.apply(this, arguments)
                })(e)
              },
            }),
          ),
          Object(O.c)('p', {css: a}, e.description),
          Object(O.c)('span', {css: o}, e.sentAt.toDate().toDateString()),
        )
      }
      function I() {
        var n = Object(j.a)([
          '\n    border: 0;\n    grid-row: 1;\n    grid-column: 1 / span 2;\n    place-self: baseline;\n    margin: 0;\n    place-self: baseline;\n  ',
        ])
        return (
          (I = function () {
            return n
          }),
          n
        )
      }
      function A() {
        var n = Object(j.a)([
          '\n    margin: 0 10px;\n    padding: 20px 10px;\n    display: grid;\n    grid-gap: 25px;\n    justify-content: space-evenly;\n    grid-template-columns: repeat(auto-fit, minmax(270px, 1.5fr));\n  ',
        ])
        return (
          (A = function () {
            return n
          }),
          n
        )
      }
      var R = function () {
          var n = a.a.useReducer(function (n, e) {
              return e
            }, null),
            e = Object(g.a)(n, 2),
            t = e[0],
            r = e[1],
            c = Object(O.b)(A()),
            o = Object(O.b)(I()),
            i = Object(m.c)({
              queryKey: 'contactedMe',
              queryFn: (function () {
                var n = Object(f.a)(
                  b.a.mark(function n() {
                    return b.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              h.b
                                .collection('contactedMe')
                                .get()
                                .then(function (n) {
                                  return n.docs.map(function (n) {
                                    return Object(p.a)(
                                      Object(p.a)({}, n.data()),
                                      {},
                                      {id: n.id},
                                    )
                                  })
                                })
                            )
                          case 2:
                            return n.abrupt('return', n.sent)
                          case 3:
                          case 'end':
                            return n.stop()
                        }
                    }, n)
                  }),
                )
                return function () {
                  return n.apply(this, arguments)
                }
              })(),
            }),
            u = i.status,
            s = i.error,
            l = i.data
          if ('loading' === u) return 'loading'
          if (s) throw s.message
          return Object(O.c)(
            a.a.Fragment,
            null,
            Object(O.c)('h1', null, 'Messages'),
            t
              ? Object(O.c)(
                  a.a.Fragment,
                  null,
                  Object(O.c)(
                    'button',
                    {
                      css: o,
                      onClick: function () {
                        return r(null)
                      },
                    },
                    'Back',
                  ),
                  Object(O.c)(L, {message: t}),
                )
              : Object(O.c)(
                  'div',
                  {css: c},
                  l.map(function (n) {
                    return Object(O.c)(_, {
                      key: n.sentAt,
                      fn: function () {
                        return r(n)
                      },
                      message: n,
                    })
                  }),
                ),
          )
        },
        q = function () {
          return Object(r.jsxs)(l.a, {
            children: [Object(r.jsx)(s.default, {}), Object(r.jsx)(R, {})],
          })
        },
        U = t(23),
        M = t(75),
        W = t(32)
      function K() {
        var n = Object(j.a)(['\n                width: 100%;\n              '])
        return (
          (K = function () {
            return n
          }),
          n
        )
      }
      function T() {
        var n = Object(j.a)([
          '\n                    border-color: ',
          ';\n                  ',
        ])
        return (
          (T = function () {
            return n
          }),
          n
        )
      }
      function Y() {
        var n = Object(j.a)([
          '\n                    border-color: ',
          ';\n                  ',
        ])
        return (
          (Y = function () {
            return n
          }),
          n
        )
      }
      function G() {
        var n = Object(j.a)([
          '\n          width: 100%;\n          display: flex;\n          place-content: center;\n        ',
        ])
        return (
          (G = function () {
            return n
          }),
          n
        )
      }
      var H = function () {
          var n = (0, Object(U.b)().useSignUp)(),
            e = Object(g.a)(n, 2),
            t = e[0],
            r = e[1],
            c = Object(W.b)(),
            a = c.status,
            o = c.dispatch,
            i = (function () {
              var n = Object(f.a)(
                b.a.mark(function n(e) {
                  var c, a, i, u, s, l, d
                  return b.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            e.preventDefault(),
                            o({type: 'pending'}),
                            (c = e.target.elements),
                            (a = c.firstName),
                            (i = c.lastName),
                            (u = c.email),
                            (s = c.password),
                            (l = c.confirmPassword),
                            (d = {
                              firstName: a.value,
                              lastName: i.value,
                              email: u.value,
                              password: s.value,
                              confirmPassword: l.value,
                            }),
                            (n.next = 6),
                            r(d)
                          )
                        case 6:
                          t || e.currentTarget.reset(), o({type: 'resolved'})
                        case 8:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )
              return function (e) {
                return n.apply(this, arguments)
              }
            })()
          return Object(O.c)(
            l.a,
            null,
            Object(O.c)('h1', {css: v.d}, 'Sign up'),
            Object(O.c)(
              'div',
              {css: Object(O.b)(G())},
              Object(O.c)(
                'form',
                {id: '#sign-up', css: v.g, onSubmit: i},
                Object(O.c)(M.a, {
                  name: 'firstName',
                  placeholder: 'First Name',
                  required: !0,
                  minLength: 3,
                  maxLength: 15,
                  cleanColor: 'resolved' === a,
                }),
                Object(O.c)(M.a, {
                  name: 'lastName',
                  required: !0,
                  minLength: 3,
                  maxLength: 15,
                  placeholder: 'Last Name',
                  cleanColor: 'resolved' === a,
                }),
                Object(O.c)(M.a, {
                  name: 'email',
                  autoComplete: 'username',
                  type: 'email',
                  required: !0,
                  maxLength: 50,
                  placeholder: 'Email Address',
                  cleanColor: 'resolved' === a,
                }),
                Object(O.c)(M.a, {
                  cssNew:
                    'rejected' === a
                      ? Object(O.b)(Y(), v.b.burgundyRed)
                      : void 0,
                  name: 'password',
                  autoComplete: 'new-password',
                  type: 'password',
                  placeholder: 'Enter Password',
                  minLength: 6,
                  maxLength: 20,
                  required: !0,
                  cleanColor: 'resolved' === a,
                }),
                Object(O.c)(M.a, {
                  onBlur: function (n) {
                    n.target.form[3].value !== n.target.value
                      ? o({type: 'rejected'})
                      : o({type: 'idle'})
                  },
                  cssNew:
                    'rejected' === a
                      ? Object(O.b)(T(), v.b.burgundyRed)
                      : void 0,
                  autoComplete: 'new-password',
                  name: 'confirmPassword',
                  type: 'password',
                  placeholder: 'Confirm Password',
                  minLength: 6,
                  maxLength: 20,
                  required: !0,
                  cleanColor: 'resolved' === a,
                }),
                'rejected' === a
                  ? Object(O.c)('span', {css: v.k}, "Password Don't Match")
                  : null,
                t ? Object(O.c)('div', {css: v.k, type: 'alert'}, t) : null,
                'pending' === a
                  ? Object(O.c)(
                      'div',
                      {css: Object(O.b)(K())},
                      Object(O.c)('div', {css: v.i}),
                    )
                  : Object(O.c)(
                      'button',
                      {
                        type: 'submit',
                        disabled: 'pending' === a || 'rejected',
                        css: v.a,
                      },
                      'Submit',
                    ),
              ),
            ),
          )
        },
        J = t(33),
        V = t(288),
        X = t(92)
      function Z() {
        var n = Object(j.a)([
          '\n                    margin: 0;\n                    border-color: ',
          ';\n                  ',
        ])
        return (
          (Z = function () {
            return n
          }),
          n
        )
      }
      function Q() {
        var n = Object(j.a)([
          '\n            display: flex;\n            width: 98vw;\n            place-content: space-around;\n            flex-wrap: wrap-reverse;\n            ',
          ' {\n              place-content: center;\n              grid-template: none;\n            }\n          ',
        ])
        return (
          (Q = function () {
            return n
          }),
          n
        )
      }
      function $() {
        var n = Object(U.b)(),
          e = n.project,
          t = n.setProject,
          r = a.a.useReducer(X.g, {
            status: 'idle',
            formData: {
              projectName: e ? e.projectName : '',
              projectLink: e ? e.projectLink : '',
              projectLogo: e ? Object(J.a)(e.projectLogo) : [],
              description: e ? e.description : '',
            },
            error: null,
            imagesFile: [],
            imagesDisplay: [],
          }),
          c = Object(g.a)(r, 2),
          o = c[0],
          i = o.status,
          u = o.formData,
          s = o.imagesFile,
          d = o.imagesDisplay,
          j = c[1],
          m = Object(X.j)(j),
          h = a.a.useState(''),
          x = Object(g.a)(h, 2),
          y = x[0],
          w = x[1]
        'images_uploaded' === i &&
          (e && Object(X.h)(Object(p.a)(Object(p.a)({}, u), {}, {id: e.id})),
          e || Object(X.e)(u),
          m({type: 'idle'})),
          a.a.useEffect(
            function () {
              return function () {
                t(null), m({type: 'clean_up'})
              }
            },
            [m, t],
          )
        var k = a.a.useCallback(
          function () {
            return Promise.allSettled(
              s.map(function (n) {
                return m({type: 'next'}), Object(X.i)(n, u.projectName)
              }),
            )
              .then(function (n) {
                return n.forEach(function (n) {
                  return 'fulfilled' === n.status
                    ? (m({type: 'next_add', payload: n.value}), n.value)
                    : n.value
                })
              })
              .then(function () {
                C.b.success('Images Uploaded'), m({type: 'images_uploaded'})
              })
          },
          [m, u.projectName, s],
        )
        function B() {
          return (B = Object(f.a)(
            b.a.mark(function n() {
              return b.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), k()
                    case 2:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            }),
          )).apply(this, arguments)
        }
        function L(n) {
          m({type: 'submit_description', payload: n.target.value})
        }
        var D = u.projectName,
          N = u.projectLink,
          F = u.description,
          E = u.projectLogo
        return Object(O.c)(
          l.a,
          null,
          Object(O.c)(
            'div',
            null,
            Object(O.c)('h1', null, e ? 'Edit' : 'Create', ' Project'),
            Object(O.c)(
              'div',
              {css: Object(O.b)(Q(), v.f.s)},
              Object(O.c)(X.b, {
                imagesDisplay: d,
                oldImages: e ? E : null,
                handleClick: function (n, e) {
                  return m({
                    type: 'remove_image',
                    payload: {array: n, index: e},
                  })
                },
              }),
              Object(O.c)(
                'form',
                {
                  css: v.g,
                  onSubmit: function (n) {
                    n.preventDefault()
                    var e = n.target.elements,
                      t = e.projectName,
                      r = e.projectLink,
                      c = e.description
                    m({
                      type: 'submit_formData',
                      payload: {
                        projectName: t.value,
                        projectLink: r.value,
                        description: c.value,
                      },
                    }),
                      (function () {
                        B.apply(this, arguments)
                      })(),
                      n.currentTarget.reset()
                  },
                },
                Object(O.c)(X.c, {
                  handleDrop: function (n, e) {
                    var t = [],
                      r = []
                    n.forEach(function (c, a) {
                      n[a].size < 8e6 &&
                        (t.push(c), r.push(URL.createObjectURL(c))),
                        e &&
                          e.length > 0 &&
                          e[0].Size > 8e6 &&
                          C.b.error('This File is too big')
                    }),
                      m({type: 'images', payload: {file: t, src: r}})
                  },
                }),
                Object(O.c)(X.d, {
                  name: 'projectName',
                  project: D,
                  placeholder: 'Name',
                  required: !0,
                  minLength: 3,
                  maxLength: 15,
                  cleanColor: 'pending' === i,
                }),
                Object(O.c)(X.d, {
                  type: 'url',
                  required: !0,
                  project: N,
                  placeholder: 'Project Link',
                  name: 'projectLink',
                  cleanColor: 'pending' === i,
                }),
                Object(O.c)(
                  'label',
                  {htmlFor: 'description', css: v.e},
                  Object(O.c)('textarea', {
                    css: [v.j, Object(O.b)(Z(), y)],
                    placeholder: 'Project Description',
                    name: 'description',
                    value: e ? F : void 0,
                    minLength: 10,
                    onChange: e
                      ? function (n) {
                          return L(n)
                        }
                      : void 0,
                    onBlur: function (n) {
                      n.target.validity.valid
                        ? w(v.b.lightGreen)
                        : w(v.b.burgundyRed),
                        e && L.cancel()
                    },
                    required: !0,
                  }),
                ),
                Object(O.c)(X.a, {status: i, project: e}),
              ),
            ),
          ),
        )
      }
      function nn(n) {
        var e = n.error
        return Object(O.c)(W.a, {error: e})
      }
      var en = a.a.memo($)
      var tn = function () {
          return Object(O.c)(
            V.ErrorBoundary,
            {fallback: Object(O.c)(nn, null)},
            Object(O.c)(en, null),
          )
        },
        rn = t(112)
      e.default = function () {
        return Object(r.jsx)(o.a, {
          children: Object(r.jsxs)(i.d, {
            children: [
              Object(r.jsx)(i.b, {path: '/', exact: !0, component: u.a}),
              Object(r.jsx)(i.b, {path: '/dashboard', component: q}),
              Object(r.jsx)(i.b, {path: '/message/:id', component: L}),
              Object(r.jsx)(i.b, {path: '/signUp', component: H}),
              Object(r.jsx)(i.b, {path: '/create-project', component: tn}),
              Object(r.jsx)(i.b, {path: '/edit/:id', component: tn}),
              Object(r.jsx)(i.b, {from: '*', to: '/', component: rn.a}),
            ],
          }),
        })
      }
    },
    70: function (n, e, t) {
      'use strict'
      var r = t(7),
        c = t(1),
        a = t.n(c),
        o = t(5),
        i = t(17),
        u = t(31),
        s = t(6),
        l = t(58)
      function d() {
        var n = Object(s.a)([
          '\n    padding: 23px 40px 24px;\n    color: #61dafb;\n    font-size: 2.6rem;\n    background: ',
          ';\n    margin: 16px 0;\n    letter-spacing: 1.5px;\n    border-radius: 12%;\n    font-variant-caps: petite-caps;\n    :hover {\n      color: ',
          ';\n      background: ',
          ';\n    }\n    ',
          ' {\n      font-size: 1.6rem;\n    }\n  ',
        ])
        return (
          (d = function () {
            return n
          }),
          n
        )
      }
      function b() {
        var n = Object(s.a)([
          '\n    background-color: ',
          ';\n    display: flex;\n    justify-content: center;\n    min-width: 100%;\n  ',
        ])
        return (
          (b = function () {
            return n
          }),
          n
        )
      }
      var p = function () {
          var n = Object(o.b)(b(), u.b.darkBlue),
            e = Object(o.b)(
              d(),
              u.b.independenceBlue,
              u.b.aliceLightBlue,
              u.b.kindaDarkBlue,
              u.f.s,
            )
          return Object(o.c)(
            'div',
            {css: n},
            Object(o.c)(
              l.c,
              {to: '/'},
              Object(o.c)('h1', {css: e}, 'Ahmed Eldessouki'),
            ),
          )
        },
        f = t(23)
      function j() {
        var n = Object(s.a)([
          '\n    display: flex;\n    place-content: space-evenly;\n    background: black;\n    background-color: ',
          ';\n    font-size: 124%;\n    & > a {\n      font-weight: ',
          ';\n      letter-spacing: 0.145rem;\n      padding: 0 2%;\n      align-self: center;\n      flex-grow: 1;\n      &:hover,\n      &:focus {\n        background-color: ',
          ';\n      }\n    }\n    ',
          ' {\n      flex-direction: column;\n      padding-bottom: 17px;\n      & > a {\n        width: 73%;\n        text-align: center;\n      }\n    }\n  ',
        ])
        return (
          (j = function () {
            return n
          }),
          n
        )
      }
      var g = function () {
          var n = Object(f.b)().signOut,
            e = Object(o.b)(
              j(),
              u.b.darkBlue,
              u.l.black,
              u.b.independenceBlue,
              u.f.phoneLarge,
            )
          return Object(o.c)(
            'div',
            {css: e},
            Object(o.c)(
              l.c,
              {
                to: '/',
                exact: !0,
                activeStyle: {
                  backgroundColor: u.b.independenceBlue,
                  padding: '1% 2%',
                },
              },
              Object(o.c)(
                'span',
                {
                  style: {
                    width: '100%',
                    fontSize: '2rem',
                    padding: '5px 0',
                    color: '#61dafb',
                    letterSpacing: '1.6px',
                    fontVariantCaps: 'petite-caps',
                  },
                },
                'Ahmed ElDessouki',
              ),
            ),
            Object(o.c)(
              l.c,
              {
                to: '/dashboard',
                exact: !0,
                activeStyle: {
                  backgroundColor: u.b.independenceBlue,
                  padding: '1% 2%',
                },
              },
              'DashBoard',
            ),
            Object(o.c)(
              l.c,
              {
                to: '/create-project',
                exact: !0,
                activeStyle: {
                  backgroundColor: u.b.independenceBlue,
                  padding: '1% 2%',
                },
              },
              'Create Project',
            ),
            Object(o.c)(
              l.c,
              {
                to: '/signup',
                exact: !0,
                activeStyle: {
                  backgroundColor: u.b.independenceBlue,
                  padding: '1% 2%',
                },
              },
              'SignUp',
            ),
            Object(o.c)(l.c, {onClick: n, to: '/'}, 'SignOut'),
          )
        },
        O = a.a.memo(g),
        m =
          (t(93),
          c.lazy(function () {
            return Promise.all([t.e(0), t.e(10), t.e(11)]).then(
              t.bind(null, 291),
            )
          }))
      function h(n) {
        var e = n.children,
          t = Object(f.b)().authData
        return Object(r.jsxs)(r.Fragment, {
          children: [
            t ? Object(r.jsx)(O, {}) : Object(r.jsx)(p, {}),
            Object(r.jsx)(o.a, {styles: u.c}),
            Object(r.jsx)(c.Suspense, {fallback: 'loading...', children: e}),
            Object(r.jsx)(c.Suspense, {
              fallback: 'loading...',
              children: Object(r.jsx)(m, {}),
            }),
            Object(r.jsx)(i.a, {autoClose: 2e3}),
          ],
        })
      }
      var v = c.memo(h)
      e.a = v
    },
    71: function (n, e, t) {
      'use strict'
      var r = t(62),
        c = t.n(r),
        a = t(63),
        o = t(6),
        i = t(5),
        u = t(1),
        s = t(80),
        l = t(31),
        d = t(32)
      function b() {
        var n = Object(o.a)([
          '\n                  :hover {\n                    background-color: ',
          ';\n                  }\n                ',
        ])
        return (
          (b = function () {
            return n
          }),
          n
        )
      }
      function p() {
        var n = Object(o.a)([
          '\n    background: inherit;\n    box-shadow: none;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    color: ',
          ';\n    font-size: 2rem;\n    font-weight: ',
          ';\n    :hover,\n    :focus {\n      color: ',
          ';\n    }\n  ',
        ])
        return (
          (p = function () {
            return n
          }),
          n
        )
      }
      function f() {
        var n = Object(o.a)([
          '\n    :before {\n      width: 100%;\n    }\n    background-color: ',
          ';\n    color: ',
          ';\n    border-radius: 14%;\n    border: 0px;\n    font-size: 140%;\n    padding: 4px 36px;\n    margin: 0 15px;\n    :hover,\n    :focus {\n      color: ',
          ';\n      background-color: ',
          ';\n    }\n  ',
        ])
        return (
          (f = function () {
            return n
          }),
          n
        )
      }
      function j() {
        var n = Object(o.a)([
          '\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    display: flex;\n    flex-direction: column;\n    place-items: center;\n    position: fixed;\n    top: calc(50% - calc(288.3px / 2));\n    left: calc(50% - calc(554.8px / 2));\n    background-color: ',
          ';\n    opacity: 94.7%;\n    border: 10px solid ',
          ';\n    padding: 3% 7%;\n    border-radius: 29%;\n    width: 323px;\n    height: 178px;\n    justify-content: center;\n    align-items: center;\n    animation: fadeIn 0.5s ease-in-out;\n    box-shadow: 0 0 140px 100px ',
          ';\n  ',
        ])
        return (
          (j = function () {
            return n
          }),
          n
        )
      }
      e.a = function (n) {
        var e = n.title,
          t = n.fn,
          r = Object(i.b)(
            j(),
            l.b.independenceBlue,
            l.b.darkBlue,
            l.b.kindaDarkBlue,
          ),
          o = Object(i.b)(
            f(),
            l.b.whiteFaded,
            l.b.independenceBlue,
            l.b.aliceLightBlue,
            l.b.darkBlue,
          ),
          g = Object(i.b)(p(), l.b.aliceLightBlue, l.l.black, l.b.burgundyRed),
          O = Object(d.b)(),
          m = O.status,
          h = O.dispatch
        function v() {
          return (v = Object(a.a)(
            c.a.mark(function n() {
              return c.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), t()
                    case 2:
                      h({type: 'idle'})
                    case 3:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            }),
          )).apply(this, arguments)
        }
        return Object(i.c)(
          u.Fragment,
          null,
          'idle' === m
            ? Object(i.c)(
                'button',
                {
                  css: g,
                  type: 'button',
                  onClick: function () {
                    return h({type: 'pending'})
                  },
                },
                Object(i.c)(s.b, null),
              )
            : Object(i.c)(
                'div',
                {css: r, id: 'popup'},
                Object(i.c)('header', null, Object(i.c)('h1', null, 'Warning')),
                Object(i.c)('h2', null, 'Do you want to delete this ', e),
                Object(i.c)(
                  'footer',
                  null,
                  Object(i.c)(
                    'button',
                    {
                      type: 'button',
                      css: o,
                      onClick: function () {
                        return h({type: 'idle'})
                      },
                    },
                    'Nah!',
                  ),
                  Object(i.c)(
                    'button',
                    {
                      type: 'button',
                      css: [o, Object(i.b)(b(), l.b.burgundyRed)],
                      onClick: function () {
                        return v.apply(this, arguments)
                      },
                    },
                    'Yup!',
                  ),
                ),
              ),
        )
      }
    },
    75: function (n, e, t) {
      'use strict'
      var r = t(18),
        c = t(6),
        a = t(13),
        o = t(25),
        i = t(5),
        u = t(1),
        s = t.n(u),
        l = t(31)
      function d() {
        var n = Object(c.a)(['\n            border-color: ', ';\n          '])
        return (
          (d = function () {
            return n
          }),
          n
        )
      }
      e.a = function (n) {
        var e = n.onChange,
          t = n.onBlur,
          c = void 0 === t ? function () {} : t,
          u = n.cleanColor,
          b = n.cssNew,
          p = n.name,
          f = Object(o.a)(n, [
            'onChange',
            'onBlur',
            'cleanColor',
            'cssNew',
            'name',
          ]),
          j = s.a.useState(l.b.aliceLightBlue),
          g = Object(a.a)(j, 2),
          O = g[0],
          m = g[1]
        return (
          s.a.useEffect(
            function () {
              u && m(l.b.aliceLightBlue)
            },
            [u],
          ),
          Object(i.c)(
            'label',
            {htmlFor: p, css: l.e},
            Object(i.c)(
              'input',
              Object(r.a)(
                {
                  name: p,
                  id: p,
                  onChange: e,
                  'aria-label': p,
                  css: [l.h, Object(i.b)(d(), O), b],
                  onBlur: function (n) {
                    n.target.validity.valid
                      ? m(l.b.lightGreen)
                      : m(l.b.burgundyRed),
                      c(n)
                  },
                },
                f,
              ),
            ),
          )
        )
      }
    },
    92: function (n, e, t) {
      'use strict'
      t.d(e, 'd', function () {
        return A
      }),
        t.d(e, 'i', function () {
          return E
        }),
        t.d(e, 'c', function () {
          return S
        }),
        t.d(e, 'j', function () {
          return z
        }),
        t.d(e, 'g', function () {
          return P
        }),
        t.d(e, 'h', function () {
          return N
        }),
        t.d(e, 'f', function () {
          return F
        }),
        t.d(e, 'e', function () {
          return D
        }),
        t.d(e, 'a', function () {
          return _
        }),
        t.d(e, 'b', function () {
          return I
        })
      var r = t(13),
        c = t(25),
        a = t(33),
        o = t(6),
        i = t(18),
        u = t(5),
        s = t(1),
        l = t(142),
        d = t.n(l),
        b = t(17),
        p = t(151),
        f = t(81),
        j = t(31),
        g = t(19),
        O = t(75),
        m = t(71)
      function h() {
        var n = Object(o.a)([
          '\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 50px;\n      ',
        ])
        return (
          (h = function () {
            return n
          }),
          n
        )
      }
      function v() {
        var n = Object(o.a)([
          '\n    display: flex;\n    place-items: flex-start;\n    padding-right: 28px;\n    :hover {\n      background: ',
          ';\n    }\n  ',
        ])
        return (
          (v = function () {
            return n
          }),
          n
        )
      }
      function x() {
        var n = Object(o.a)([
          '\n    margin: 3px 0px 3px -15px;\n    background: ',
          ';\n    padding: 5px;\n  ',
        ])
        return (
          (x = function () {
            return n
          }),
          n
        )
      }
      function y() {
        var n = Object(o.a)([
          '\n    background: ',
          ';\n    overflow: hidden;\n    padding: 0 31px 43px;\n    width: 36vw;\n    ',
          ' {\n      width: 76vw;\n    }\n  ',
        ])
        return (
          (y = function () {
            return n
          }),
          n
        )
      }
      function w() {
        var n = Object(o.a)([
          '\n    display: grid;\n    grid-auto-flow: column;\n    grid-gap: 10px;\n    overflow: auto hidden;\n    background: ',
          ';\n    height: 199px;\n    padding-left: 22px;\n  ',
        ])
        return (
          (w = function () {
            return n
          }),
          n
        )
      }
      function k() {
        var n = Object(o.a)([
          '\n        width: 100%;\n        margin-top: 43px;\n      ',
        ])
        return (
          (k = function () {
            return n
          }),
          n
        )
      }
      function B() {
        var n = Object(o.a)([
          '\n                width: initial;\n                margin: 0;\n              ',
        ])
        return (
          (B = function () {
            return n
          }),
          n
        )
      }
      function L() {
        var n = Object(o.a)(['\n                color: ', ';\n              '])
        return (
          (L = function () {
            return n
          }),
          n
        )
      }
      function C() {
        var n = Object(o.a)([
          '\n              border: 10px dashed ',
          ';\n              width: 87%;\n              height: 200px;\n              text-align: center;\n              cursor: pointer;\n              margin-bottom: 20px;\n              margin-right: 0;\n              align-self: flex-end;\n            ',
        ])
        return (
          (C = function () {
            return n
          }),
          n
        )
      }
      function D(n) {
        g.b
          .collection('projects')
          .add(Object(i.a)(Object(i.a)({}, n), {}, {createdAt: new Date()}))
          .then(function () {
            b.b.success('Project "'.concat(n.projectName, '" Created'))
          })
          .catch(function (n) {
            throw (b.b.error('Project Creation Failed '.concat(n.message)), n)
          })
      }
      function N(n) {
        var e = n.id,
          t = n.projectName,
          r = n.projectLink,
          c = n.projectLogo,
          a = n.description
        g.b
          .collection('projects')
          .doc(''.concat(e))
          .update({
            projectName: t,
            projectLink: r,
            projectLogo: c,
            description: a,
            updatedOn: new Date(),
          })
          .then(function () {
            b.b.success('Project "'.concat(t, '" Updated'))
          })
          .catch(function (n) {
            throw (b.b.error("Project Didn't Update ".concat(n.message)), n)
          })
      }
      function F(n) {
        g.b
          .collection('projects')
          .doc(''.concat(n.id))
          .delete()
          .then(function () {
            b.b.success('Project "'.concat(n.projectName, '" deleted'))
          })
          .catch(function (n) {
            throw (b.b.error('Project Deletion Failed '.concat(n.message)), n)
          })
      }
      function E(n, e) {
        var t
        return (
          (t = new FormData()).set('file', n),
          t.set('tags', [''.concat(e), 'image']),
          t.set('upload_preset', 'obaxyyex'),
          t.set('api_key', '579628475278557'),
          d.a
            .post(
              ' https://api.cloudinary.com/v1_1/ahmedeldessouki/image/upload',
              t,
              {headers: {'X-Requested-With': 'XMLHttpRequest'}},
            )
            .then(
              function (n) {
                return n.data.secure_url
              },
              function (e) {
                return b.b.error('Upload of '.concat(n.name, 'Failed!')), e
              },
            )
        )
      }
      function S(n) {
        var e = n.handleDrop
        return Object(u.c)(
          p.a,
          {onDrop: e, accept: 'image/*', multiple: !0, maxSize: 8e6},
          function (n) {
            var e = n.getRootProps,
              t = n.getInputProps
            return Object(u.c)(
              'label',
              Object(i.a)(
                {
                  htmlFor: 'dropZone',
                  css: [j.e, Object(u.b)(C(), j.b.darkBlue)],
                },
                e(),
              ),
              Object(u.c)(
                'span',
                {css: [j.d, Object(u.b)(L(), j.b.aliceLightBlue)]},
                'Drop Image(s)',
              ),
              Object(u.c)(
                'input',
                Object(i.a)(
                  {
                    id: 'dropZone',
                    type: 'file',
                    name: 'projectLogo',
                    css: [j.j, Object(u.b)(B())],
                  },
                  t(),
                ),
              ),
            )
          },
        )
      }
      function z(n) {
        var e = s.useRef(!1)
        return (
          s.useLayoutEffect(function () {
            return (
              (e.current = !0),
              function () {
                return (e.current = !1)
              }
            )
          }, []),
          s.useCallback(
            function () {
              return e.current ? n.apply(void 0, arguments) : void 0
            },
            [n],
          )
        )
      }
      var P = function (n, e) {
        var t = e.type,
          r = e.payload,
          c = n.formData,
          o = n.imagesFile,
          u = n.imagesDisplay
        switch (t) {
          case 'images':
            return Object(i.a)(
              Object(i.a)({}, n),
              {},
              {
                imagesFile: o
                  ? [].concat(Object(a.a)(o), Object(a.a)(r.file))
                  : Object(a.a)(r.file),
                imagesDisplay: u
                  ? [].concat(Object(a.a)(u), Object(a.a)(r.src))
                  : Object(a.a)(r.src),
                status: 'idle',
                error: null,
              },
            )
          case 'remove_image':
            var s = r.array,
              l = r.index
            return (
              'oldImages' === s && c.projectLogo.splice(l, 1),
              'imagesDisplay' === s && u.splice(l, 1),
              Object(i.a)({}, n)
            )
          case 'submit_formData':
            return (
              (c.projectName = r.projectName),
              (c.projectLink = r.projectLink),
              (c.description = r.description),
              Object(i.a)(
                Object(i.a)({}, n),
                {},
                {status: 'submitted', error: null},
              )
            )
          case 'submit_description':
            return Object(i.a)(
              Object(i.a)({}, n),
              {},
              {formData: Object(i.a)(Object(i.a)({}, c), {}, {description: r})},
            )
          case 'idle':
            return Object(i.a)(Object(i.a)({}, n), {}, {status: 'idle'})
          case 'next':
            return Object(i.a)(Object(i.a)({}, n), {}, {status: 'next'})
          case 'images_uploaded':
            return Object(i.a)(
              Object(i.a)({}, n),
              {},
              {status: 'images_uploaded'},
            )
          case 'next_add':
            return (
              c.projectLogo.push(r),
              Object(i.a)(Object(i.a)({}, n), {}, {status: 'next_add'})
            )
          case 'clean_up':
            return (
              (c.projectName = ''),
              (c.projectLink = ''),
              (c.description = ''),
              (c.projectLogo = []),
              (o.length = 0),
              (u.length = 0),
              Object(i.a)(Object(i.a)({}, n), {}, {status: 'idle', error: null})
            )
          default:
            throw new Error('Unhandled action type: '.concat(t))
        }
      }
      function _(n) {
        var e = n.status,
          t = n.project
        return 'idle' !== e
          ? Object(u.c)(
              'div',
              {css: Object(u.b)(k())},
              Object(u.c)('div', {css: j.i}),
            )
          : Object(u.c)(
              'button',
              {type: 'submit', css: j.a, disabled: 'idle' !== e},
              t ? 'Edit' : 'Create',
              ' Project',
            )
      }
      function I(n) {
        var e = n.imagesDisplay,
          t = n.oldImages,
          r = n.handleClick,
          c = Object(u.b)(w(), j.b.kindaDarkBlue),
          a = Object(u.b)(y(), j.b.darkBlue, j.f.phoneLarge),
          o = Object(u.b)(x(), j.b.independenceBlue),
          i = Object(u.b)(v(), j.b.darkBlue)
        return Object(u.c)(
          'div',
          {css: Object(u.b)(h())},
          Object(u.c)(
            'div',
            {css: a},
            Object(u.c)('h2', {css: o}, 'New Images'),
            Object(u.c)(
              'div',
              {css: c},
              e &&
                e.map(function (n, e) {
                  return Object(u.c)(
                    'div',
                    {key: n, css: i},
                    Object(u.c)(m.a, {
                      title: 'Image',
                      fn: function () {
                        return r('imagesDisplay', e)
                      },
                    }),
                    Object(u.c)(f.Image, {
                      alt: '',
                      crop: 'lpad',
                      width: 100,
                      src: n,
                    }),
                  )
                }),
            ),
          ),
          t
            ? Object(u.c)(
                'div',
                {css: a},
                Object(u.c)('h2', {css: o}, 'Old Images'),
                Object(u.c)(
                  'div',
                  {css: c},
                  t &&
                    t.map(function (n, e) {
                      return Object(u.c)(
                        'div',
                        {key: n, css: i},
                        Object(u.c)(m.a, {
                          title: 'Image',
                          fn: function () {
                            return r('oldImages', e)
                          },
                        }),
                        Object(u.c)(f.Image, {
                          alt: '',
                          crop: 'lpad',
                          width: 100,
                          src: n,
                        }),
                      )
                    }),
                ),
              )
            : null,
        )
      }
      function A(n) {
        var e = n.project,
          t = Object(c.a)(n, ['project']),
          a = s.useState(e),
          o = Object(r.a)(a, 2),
          l = o[0],
          d = o[1]
        return e
          ? Object(u.c)(
              O.a,
              Object(i.a)(
                {
                  value: l,
                  onChange: function (n) {
                    return d(n.target.value)
                  },
                },
                t,
              ),
            )
          : Object(u.c)(O.a, Object(i.a)({}, t))
      }
    },
    93: function (n, e, t) {},
  },
])
//# sourceMappingURL=6.50f73e2a.chunk.js.map
