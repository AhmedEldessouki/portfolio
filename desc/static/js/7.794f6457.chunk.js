;(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [7],
  {
    112: function (n, e, t) {
      'use strict'
      var c = t(6),
        r = t(5),
        a = t(31)
      function o() {
        var n = Object(c.a)([
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
        var n = Object(c.a)(['\n            padding: 0;\n          '])
        return (
          (i = function () {
            return n
          }),
          n
        )
      }
      function l() {
        var n = Object(c.a)([
          '\n        display: flex;\n        place-content: center;\n        place-items: center;\n        height: 97vh;\n        flex-direction: column;\n        font-size: 159%;\n      ',
        ])
        return (
          (l = function () {
            return n
          }),
          n
        )
      }
      e.a = function () {
        return Object(r.c)(
          'div',
          {css: Object(r.b)(l())},
          Object(r.c)(r.a, {styles: a.c}),
          Object(r.c)('h1', {css: [a.d, Object(r.b)(i())]}, '404'),
          Object(r.c)('h2', {css: [a.d, Object(r.b)(o())]}, 'Page Not Found'),
        )
      }
    },
    113: function (n, e, t) {
      'use strict'
      var c = t(7),
        r = t(1),
        a = t(70),
        o = t(6),
        i = t(5),
        l = t(80),
        d = t(31),
        s = t.p + 'static/media/Layer-1@0,25x.e16596a5.png'
      function u() {
        var n = Object(o.a)([''])
        return (
          (u = function () {
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
      function g() {
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
          (g = function () {
            return n
          }),
          n
        )
      }
      var j = function () {
          var n = Object(i.b)(
              g(),
              d.b.darkBlue,
              d.b.darkBlue,
              d.b.darkBlue,
              d.f.desktop,
              d.f.phoneLarge,
              d.f.s,
            ),
            e = Object(i.b)(
              p(),
              d.b.kindaDarkBlue,
              d.b.darkBlue,
              d.b.whiteFaded,
              d.b.independenceBlue,
              d.b.independenceBlue,
              d.l.bold,
              d.b.independenceBlue,
              d.b.whiteFaded,
              d.f.phoneLarge,
              d.f.s,
            )
          return Object(i.c)(
            'div',
            {css: n},
            Object(i.c)('img', {src: s, alt: 'profilePicture'}),
            Object(i.c)(
              'p',
              null,
              'Welcome! I`m Ahmed Eldessouki. I`m ',
              (function () {
                var n = new Date(),
                  e = n.getFullYear(),
                  t = new Date('apr 4 1989'),
                  c = t.getFullYear(),
                  r = new Date(t)
                return r.setFullYear(e), e - c - (n < r ? 1 : 0)
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
                {css: Object(i.b)(b(), d.b.independenceBlue, d.b.whiteFaded)},
                Object(i.c)(
                  'a',
                  {
                    href: 'www.github.com/ahmedeldessouki',
                    css: Object(i.b)(u()),
                  },
                  Object(i.c)(l.a, null),
                  ' Github Account',
                ),
              ),
            ),
          )
        },
        f = r.lazy(function () {
          return Promise.all([t.e(0), t.e(1), t.e(9)]).then(t.bind(null, 152))
        }),
        O = r.lazy(function () {
          return t.e(8).then(t.bind(null, 294))
        })
      e.a = function () {
        return Object(c.jsxs)(a.a, {
          children: [
            Object(c.jsx)(j, {}),
            Object(c.jsxs)(r.Suspense, {
              fallback: Object(c.jsx)('div', {children: 'loading...'}),
              children: [Object(c.jsx)(f, {}), Object(c.jsx)(O, {})],
            }),
          ],
        })
      }
    },
    293: function (n, e, t) {
      'use strict'
      t.r(e)
      var c = t(7),
        r = (t(1), t(58)),
        a = t(39),
        o = t(113),
        i = t(6),
        l = t(13),
        d = t(5),
        s = t(31),
        u = t(23),
        b = t(70),
        p = t(75),
        g = t(32)
      function j() {
        var n = Object(i.a)(['\n                width: 100%;\n              '])
        return (
          (j = function () {
            return n
          }),
          n
        )
      }
      function f() {
        var n = Object(i.a)([
          '\n          width: 100%;\n          display: flex;\n          place-content: center;\n        ',
        ])
        return (
          (f = function () {
            return n
          }),
          n
        )
      }
      var O = function () {
          var n = (0, Object(u.b)(null).useSignIn)(),
            e = Object(l.a)(n, 2),
            t = e[0],
            c = e[1],
            r = Object(g.b)(),
            a = r.status,
            o = r.dispatch
          return Object(d.c)(
            b.a,
            null,
            Object(d.c)('h1', {css: s.d}, 'Sign-in'),
            Object(d.c)(
              'div',
              {css: Object(d.b)(f())},
              Object(d.c)(
                'form',
                {
                  onSubmit: function (n) {
                    n.preventDefault(), o({type: 'pending'})
                    var e = n.target.elements,
                      t = e.email,
                      r = e.password,
                      a = {email: t.value, password: r.value}
                    c(a), o({type: 'resolved'}), n.target.reset()
                  },
                  css: s.g,
                },
                Object(d.c)(
                  'div',
                  {className: 'field-container'},
                  Object(d.c)(p.a, {
                    type: 'email',
                    autoComplete: 'email',
                    placeholder: 'Email',
                    name: 'email',
                    required: !0,
                    cleanColor: 'resolved' === a,
                  }),
                  Object(d.c)(p.a, {
                    type: 'password',
                    name: 'password',
                    autoComplete: 'password',
                    minLength: 6,
                    maxLength: 20,
                    required: !0,
                    placeholder: 'Password',
                    cleanColor: 'resolved' === a,
                  }),
                ),
                t ? Object(d.c)('div', {type: 'alert', css: s.k}, t) : null,
                'pending' === a
                  ? Object(d.c)(
                      'div',
                      {css: Object(d.b)(j())},
                      Object(d.c)('div', {css: s.i}),
                    )
                  : Object(d.c)(
                      'button',
                      {type: 'submit', disabled: 'pending' === a, css: s.a},
                      'Submit',
                    ),
              ),
            ),
          )
        },
        m = t(112)
      e.default = function () {
        return Object(c.jsx)(r.a, {
          children: Object(c.jsxs)(a.d, {
            children: [
              Object(c.jsx)(a.b, {path: '/', exact: !0, component: o.a}),
              Object(c.jsx)(a.b, {path: '/signin', component: O}),
              Object(c.jsx)(a.b, {from: '*', to: '/', component: m.a}),
            ],
          }),
        })
      }
    },
    70: function (n, e, t) {
      'use strict'
      var c = t(7),
        r = t(1),
        a = t.n(r),
        o = t(5),
        i = t(17),
        l = t(31),
        d = t(6),
        s = t(58)
      function u() {
        var n = Object(d.a)([
          '\n    padding: 23px 40px 24px;\n    color: #61dafb;\n    font-size: 2.6rem;\n    background: ',
          ';\n    margin: 16px 0;\n    letter-spacing: 1.5px;\n    border-radius: 12%;\n    font-variant-caps: petite-caps;\n    :hover {\n      color: ',
          ';\n      background: ',
          ';\n    }\n    ',
          ' {\n      font-size: 1.6rem;\n    }\n  ',
        ])
        return (
          (u = function () {
            return n
          }),
          n
        )
      }
      function b() {
        var n = Object(d.a)([
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
          var n = Object(o.b)(b(), l.b.darkBlue),
            e = Object(o.b)(
              u(),
              l.b.independenceBlue,
              l.b.aliceLightBlue,
              l.b.kindaDarkBlue,
              l.f.s,
            )
          return Object(o.c)(
            'div',
            {css: n},
            Object(o.c)(
              s.c,
              {to: '/'},
              Object(o.c)('h1', {css: e}, 'Ahmed Eldessouki'),
            ),
          )
        },
        g = t(23)
      function j() {
        var n = Object(d.a)([
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
      var f = function () {
          var n = Object(g.b)().signOut,
            e = Object(o.b)(
              j(),
              l.b.darkBlue,
              l.l.black,
              l.b.independenceBlue,
              l.f.phoneLarge,
            )
          return Object(o.c)(
            'div',
            {css: e},
            Object(o.c)(
              s.c,
              {
                to: '/',
                exact: !0,
                activeStyle: {
                  backgroundColor: l.b.independenceBlue,
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
              s.c,
              {
                to: '/dashboard',
                exact: !0,
                activeStyle: {
                  backgroundColor: l.b.independenceBlue,
                  padding: '1% 2%',
                },
              },
              'DashBoard',
            ),
            Object(o.c)(
              s.c,
              {
                to: '/create-project',
                exact: !0,
                activeStyle: {
                  backgroundColor: l.b.independenceBlue,
                  padding: '1% 2%',
                },
              },
              'Create Project',
            ),
            Object(o.c)(
              s.c,
              {
                to: '/signup',
                exact: !0,
                activeStyle: {
                  backgroundColor: l.b.independenceBlue,
                  padding: '1% 2%',
                },
              },
              'SignUp',
            ),
            Object(o.c)(s.c, {onClick: n, to: '/'}, 'SignOut'),
          )
        },
        O = a.a.memo(f),
        m =
          (t(93),
          r.lazy(function () {
            return Promise.all([t.e(0), t.e(10), t.e(11)]).then(
              t.bind(null, 291),
            )
          }))
      function h(n) {
        var e = n.children,
          t = Object(g.b)().authData
        return Object(c.jsxs)(c.Fragment, {
          children: [
            t ? Object(c.jsx)(O, {}) : Object(c.jsx)(p, {}),
            Object(c.jsx)(o.a, {styles: l.c}),
            Object(c.jsx)(r.Suspense, {fallback: 'loading...', children: e}),
            Object(c.jsx)(r.Suspense, {
              fallback: 'loading...',
              children: Object(c.jsx)(m, {}),
            }),
            Object(c.jsx)(i.a, {autoClose: 2e3}),
          ],
        })
      }
      var v = r.memo(h)
      e.a = v
    },
    75: function (n, e, t) {
      'use strict'
      var c = t(18),
        r = t(6),
        a = t(13),
        o = t(25),
        i = t(5),
        l = t(1),
        d = t.n(l),
        s = t(31)
      function u() {
        var n = Object(r.a)(['\n            border-color: ', ';\n          '])
        return (
          (u = function () {
            return n
          }),
          n
        )
      }
      e.a = function (n) {
        var e = n.onChange,
          t = n.onBlur,
          r = void 0 === t ? function () {} : t,
          l = n.cleanColor,
          b = n.cssNew,
          p = n.name,
          g = Object(o.a)(n, [
            'onChange',
            'onBlur',
            'cleanColor',
            'cssNew',
            'name',
          ]),
          j = d.a.useState(s.b.aliceLightBlue),
          f = Object(a.a)(j, 2),
          O = f[0],
          m = f[1]
        return (
          d.a.useEffect(
            function () {
              l && m(s.b.aliceLightBlue)
            },
            [l],
          ),
          Object(i.c)(
            'label',
            {htmlFor: p, css: s.e},
            Object(i.c)(
              'input',
              Object(c.a)(
                {
                  name: p,
                  id: p,
                  onChange: e,
                  'aria-label': p,
                  css: [s.h, Object(i.b)(u(), O), b],
                  onBlur: function (n) {
                    n.target.validity.valid
                      ? m(s.b.lightGreen)
                      : m(s.b.burgundyRed),
                      r(n)
                  },
                },
                g,
              ),
            ),
          )
        )
      }
    },
    93: function (n, e, t) {},
  },
])
//# sourceMappingURL=7.794f6457.chunk.js.map
