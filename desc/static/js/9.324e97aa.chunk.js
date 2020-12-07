;(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [9],
  {
    152: function (n, t, e) {
      'use strict'
      e.r(t)
      var c = e(6),
        r = e(62),
        o = e.n(r),
        a = e(18),
        i = e(63),
        u = e(13),
        b = e(5),
        s = e(1),
        d = e.n(s),
        l = e(58),
        p = e(111),
        j = e(71),
        f = e(19),
        O = e(23),
        g = e(31),
        m = e(81)
      function h() {
        var n = Object(c.a)([
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
        var n = Object(c.a)([
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
        var n = Object(c.a)([
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
        var n = Object(c.a)([
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
      function k() {
        var n = Object(c.a)([
          '\n    grid-row: 1 / span 5;\n    grid-column: 5;\n    justify-self: end;\n    ',
          ' {\n      display: none;\n    }\n  ',
        ])
        return (
          (k = function () {
            return n
          }),
          n
        )
      }
      function w() {
        var n = Object(c.a)([
          '\n    grid-row: 1 / span 5;\n    grid-column: 1;\n    justify-self: start;\n    ',
          ' {\n      display: none;\n    }\n  ',
        ])
        return (
          (w = function () {
            return n
          }),
          n
        )
      }
      function L() {
        var n = Object(c.a)([
          '\n    border: 0 solid;\n    background: ',
          ';\n    color: ',
          ';\n    font-weight: 900;\n    padding: 0 47px;\n    opacity: 0.6;\n    font-size: 4rem;\n    cursor: pointer;\n    :hover {\n      background: ',
          ';\n    }\n  ',
        ])
        return (
          (L = function () {
            return n
          }),
          n
        )
      }
      function B() {
        var n = Object(c.a)([
          '\n    width: 100%;\n    display: grid;\n    place-items: center;\n    height: 440px;\n    a {\n      color: transparent;\n      justify-self: center;\n      grid-row: 1 / span 4;\n      grid-column: 2 / span 3;\n      img {\n        margin: 0;\n      }\n    }\n    ',
          ' {\n      a {\n        grid-row: 1;\n        grid-column: 1;\n      }\n    }\n  ',
        ])
        return (
          (B = function () {
            return n
          }),
          n
        )
      }
      var D = function (n) {
        var t = n.imgArray,
          e = n.imgAlt,
          c = d.a.useState(0),
          r = Object(u.a)(c, 2),
          o = r[0],
          a = r[1],
          i = Object(b.b)(B(), g.f.phoneLarge),
          s = Object(b.b)(L(), g.b.darkBlue, g.b.kindaDarkBlue, g.b.whiteFaded),
          l = Object(b.b)(w(), g.f.phoneLarge),
          p = Object(b.b)(k(), g.f.phoneLarge),
          j = Object(b.b)(y(), g.b.burgundyRed, g.b.whiteFaded, g.f.phoneLarge),
          f = Object(b.b)(x(), g.b.darkBlue, g.b.darkBlue, g.b.whiteFaded)
        return Object(b.c)(
          'div',
          {css: i},
          Object(b.c)(
            'button',
            {
              type: 'button',
              css: [0 === o ? j : s, l],
              onClick: function () {
                return 0 !== o ? a(o - 1) : null
              },
              'data-testid': 'previous',
              disabled: 0 === o,
            },
            '<',
          ),
          Object(b.c)(
            'a',
            {href: t[o]},
            Object(b.c)(m.Image, {
              width: '450',
              height: '400',
              alt: e,
              fit: 'contain',
              src: 'https://images.weserv.nl/?url='.concat(
                t[o],
                '&w=450&h=380&fit=contain',
              ),
            }),
          ),
          Object(b.c)(
            'section',
            {css: Object(b.b)(v(), g.f.phoneLarge)},
            t.map(function (n, t) {
              return Object(b.c)('button', {
                key: n,
                type: 'button',
                onClick: function () {
                  return a(t)
                },
                'data-testid': 'btn'.concat(t),
                css: [f, o === t ? Object(b.b)(h(), g.b.whiteFaded) : null],
              })
            }),
          ),
          Object(b.c)(
            'button',
            {
              type: 'button',
              'data-testid': 'next',
              css: [o === t.length - 1 ? j : s, p],
              onClick: function () {
                return o !== t.length ? a(o + 1) : null
              },
              disabled: o === t.length - 1,
            },
            '>',
          ),
        )
      }
      function F() {
        var n = Object(c.a)(['\n          margin: 50px 0 0;\n        '])
        return (
          (F = function () {
            return n
          }),
          n
        )
      }
      function C() {
        var n = Object(c.a)([
          '\n            display: flex;\n            place-content: space-between;\n            font-size: 1.1rem;\n            letter-spacing: 1.2px;\n            font-variant: all-petite-caps;\n          ',
        ])
        return (
          (C = function () {
            return n
          }),
          n
        )
      }
      function I() {
        var n = Object(c.a)([
          '\n            padding: 0 5%;\n            font-size: 1.45rem;\n            letter-spacing: 2.4px;\n          ',
        ])
        return (
          (I = function () {
            return n
          }),
          n
        )
      }
      function N() {
        var n = Object(c.a)([
          '\n            font-size: 2.75rem;\n            font-weight: 900;\n            color: #e9f1f7;\n            padding-left: 0;\n            border-radius: 7.5%;\n          ',
        ])
        return (
          (N = function () {
            return n
          }),
          n
        )
      }
      function P() {
        var n = Object(c.a)([
          '\n          display: flex;\n          flex-direction: column;\n          padding: 10px 50px 33px;\n          place-content: center;\n          min-height: 241px;\n          border-bottom: 24px solid ',
          ';\n        ',
        ])
        return (
          (P = function () {
            return n
          }),
          n
        )
      }
      var _ = function (n) {
        var t = n.project
        return t
          ? Object(b.c)(
              s.Fragment,
              null,
              Object(b.c)(D, {imgArray: t.projectLogo, imgAlt: t.projectName}),
              Object(b.c)(
                'div',
                {css: Object(b.b)(P(), g.b.darkBlue)},
                Object(b.c)(
                  'h1',
                  {css: Object(b.b)(N())},
                  Object(b.c)('a', {href: t.projectLink}, t.projectName),
                ),
                Object(b.c)('p', {css: Object(b.b)(I())}, t.description),
                Object(b.c)(
                  'div',
                  {css: Object(b.b)(C())},
                  Object(b.c)(
                    'span',
                    null,
                    'Author: ',
                    t.authorFirstName,
                    ' ',
                    t.authorLastName,
                  ),
                  Object(b.c)('span', null, 'Created At: April 2020'),
                ),
              ),
            )
          : Object(b.c)('div', {css: [g.i, Object(b.b)(F())]})
      }
      function z() {
        var n = Object(c.a)([
          '\n          padding: 10px 20px;\n          font-size: 108%;\n          color: ',
          ';\n        ',
        ])
        return (
          (z = function () {
            return n
          }),
          n
        )
      }
      function A() {
        var n = Object(c.a)([
          '\n    color: white;\n    background-color: ',
          ';\n    padding: 8% 5%;\n    letter-spacing: 1.4px;\n    font-size: 1.82rem;\n    font-weight: ',
          ';\n    :hover,\n    :focus {\n      color: ',
          ';\n      background: ',
          ';\n    }\n  ',
        ])
        return (
          (A = function () {
            return n
          }),
          n
        )
      }
      var R = function (n) {
          var t = n.project,
            e = Object(b.b)(
              A(),
              g.b.darkBlue,
              g.l.medium,
              g.b.independenceBlue,
              g.b.aliceLightBlue,
            )
          return Object(b.c)(
            s.Fragment,
            null,
            Object(b.c)('h1', {css: e}, t.projectName),
            Object(b.c)(
              'span',
              {css: Object(b.b)(z(), g.b.aliceLightBlue)},
              'Add Tags',
            ),
          )
        },
        S = e(92),
        q = e(27)
      function U() {
        var n = Object(c.a)([
          '\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                  ',
        ])
        return (
          (U = function () {
            return n
          }),
          n
        )
      }
      function E() {
        var n = Object(c.a)([
          '\n    margin: 0 10px;\n    padding: 20px 10px;\n    display: grid;\n    grid-gap: 25px;\n    justify-content: space-evenly;\n    grid-template-columns: repeat(auto-fit, minmax(231px, 264px));\n  ',
        ])
        return (
          (E = function () {
            return n
          }),
          n
        )
      }
      function J() {
        var n = Object(c.a)([
          '\n    border-bottom: 10px solid ',
          ';\n    border-radius: 11%;\n    width: 100%;\n    :hover,\n    :focus {\n      border-bottom-color: ',
          ';\n    }\n  ',
        ])
        return (
          (J = function () {
            return n
          }),
          n
        )
      }
      t.default = function () {
        var n = Object(O.b)(),
          t = n.authData,
          e = n.setProject,
          c = d.a.useState(null),
          r = Object(u.a)(c, 2),
          s = r[0],
          m = r[1],
          h = Object(q.c)({
            queryKey: 'projects',
            queryFn: (function () {
              var n = Object(i.a)(
                o.a.mark(function n() {
                  return o.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            f.b
                              .collection('projects')
                              .get()
                              .then(
                                function (n) {
                                  return n.docs.map(function (n) {
                                    return Object(a.a)(
                                      Object(a.a)({}, n.data()),
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
        var k = Object(b.b)(J(), g.b.darkBlue, g.b.aliceLightBlue),
          w = Object(b.b)(E())
        return s
          ? Object(b.c)(
              d.a.Fragment,
              null,
              Object(b.c)(
                'button',
                {
                  css: g.a,
                  onClick: function () {
                    return m(null)
                  },
                  type: 'button',
                },
                'Back',
              ),
              Object(b.c)(_, {project: s}),
            )
          : Object(b.c)(
              d.a.Fragment,
              null,
              Object(b.c)('h1', {css: g.d}, 'Projects'),
              Object(b.c)(
                'div',
                {css: w},
                null === y || void 0 === y
                  ? void 0
                  : y.map(function (n) {
                      return Object(b.c)(
                        'div',
                        {css: k, key: n.id},
                        t
                          ? Object(b.c)(
                              'div',
                              {css: Object(b.b)(U())},
                              Object(b.c)(
                                l.b,
                                {
                                  to: '/edit/'.concat(n.id),
                                  onFocus: function () {
                                    return e(n)
                                  },
                                },
                                Object(b.c)(p.e, {
                                  style: {
                                    color: g.b.lightBlue,
                                    fontSize: '1.5rem',
                                  },
                                }),
                              ),
                              Object(b.c)(j.a, {
                                project: n,
                                title: 'Project',
                                fn: function () {
                                  return Object(S.f)(n)
                                },
                              }),
                            )
                          : null,
                        Object(b.c)(
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
                          Object(b.c)(R, {project: n}),
                        ),
                      )
                    }),
              ),
            )
      }
    },
    71: function (n, t, e) {
      'use strict'
      var c = e(62),
        r = e.n(c),
        o = e(63),
        a = e(6),
        i = e(5),
        u = e(1),
        b = e(80),
        s = e(31),
        d = e(32)
      function l() {
        var n = Object(a.a)([
          '\n                  :hover {\n                    background-color: ',
          ';\n                  }\n                ',
        ])
        return (
          (l = function () {
            return n
          }),
          n
        )
      }
      function p() {
        var n = Object(a.a)([
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
      function j() {
        var n = Object(a.a)([
          '\n    :before {\n      width: 100%;\n    }\n    background-color: ',
          ';\n    color: ',
          ';\n    border-radius: 14%;\n    border: 0px;\n    font-size: 140%;\n    padding: 4px 36px;\n    margin: 0 15px;\n    :hover,\n    :focus {\n      color: ',
          ';\n      background-color: ',
          ';\n    }\n  ',
        ])
        return (
          (j = function () {
            return n
          }),
          n
        )
      }
      function f() {
        var n = Object(a.a)([
          '\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    display: flex;\n    flex-direction: column;\n    place-items: center;\n    position: fixed;\n    top: calc(50% - calc(288.3px / 2));\n    left: calc(50% - calc(554.8px / 2));\n    background-color: ',
          ';\n    opacity: 94.7%;\n    border: 10px solid ',
          ';\n    padding: 3% 7%;\n    border-radius: 29%;\n    width: 323px;\n    height: 178px;\n    justify-content: center;\n    align-items: center;\n    animation: fadeIn 0.5s ease-in-out;\n    box-shadow: 0 0 140px 100px ',
          ';\n  ',
        ])
        return (
          (f = function () {
            return n
          }),
          n
        )
      }
      t.a = function (n) {
        var t = n.title,
          e = n.fn,
          c = Object(i.b)(
            f(),
            s.b.independenceBlue,
            s.b.darkBlue,
            s.b.kindaDarkBlue,
          ),
          a = Object(i.b)(
            j(),
            s.b.whiteFaded,
            s.b.independenceBlue,
            s.b.aliceLightBlue,
            s.b.darkBlue,
          ),
          O = Object(i.b)(p(), s.b.aliceLightBlue, s.l.black, s.b.burgundyRed),
          g = Object(d.b)(),
          m = g.status,
          h = g.dispatch
        function v() {
          return (v = Object(o.a)(
            r.a.mark(function n() {
              return r.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), e()
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
                  css: O,
                  type: 'button',
                  onClick: function () {
                    return h({type: 'pending'})
                  },
                },
                Object(i.c)(b.b, null),
              )
            : Object(i.c)(
                'div',
                {css: c, id: 'popup'},
                Object(i.c)('header', null, Object(i.c)('h1', null, 'Warning')),
                Object(i.c)('h2', null, 'Do you want to delete this ', t),
                Object(i.c)(
                  'footer',
                  null,
                  Object(i.c)(
                    'button',
                    {
                      type: 'button',
                      css: a,
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
                      css: [a, Object(i.b)(l(), s.b.burgundyRed)],
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
    92: function (n, t, e) {
      'use strict'
      e.d(t, 'd', function () {
        return S
      }),
        e.d(t, 'i', function () {
          return N
        }),
        e.d(t, 'c', function () {
          return P
        }),
        e.d(t, 'j', function () {
          return _
        }),
        e.d(t, 'g', function () {
          return z
        }),
        e.d(t, 'h', function () {
          return C
        }),
        e.d(t, 'f', function () {
          return I
        }),
        e.d(t, 'e', function () {
          return F
        }),
        e.d(t, 'a', function () {
          return A
        }),
        e.d(t, 'b', function () {
          return R
        })
      var c = e(13),
        r = e(25),
        o = e(33),
        a = e(6),
        i = e(18),
        u = e(5),
        b = e(1),
        s = e(142),
        d = e.n(s),
        l = e(17),
        p = e(151),
        j = e(81),
        f = e(31),
        O = e(19),
        g = e(75),
        m = e(71)
      function h() {
        var n = Object(a.a)([
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
        var n = Object(a.a)([
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
        var n = Object(a.a)([
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
        var n = Object(a.a)([
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
      function k() {
        var n = Object(a.a)([
          '\n    display: grid;\n    grid-auto-flow: column;\n    grid-gap: 10px;\n    overflow: auto hidden;\n    background: ',
          ';\n    height: 199px;\n    padding-left: 22px;\n  ',
        ])
        return (
          (k = function () {
            return n
          }),
          n
        )
      }
      function w() {
        var n = Object(a.a)([
          '\n        width: 100%;\n        margin-top: 43px;\n      ',
        ])
        return (
          (w = function () {
            return n
          }),
          n
        )
      }
      function L() {
        var n = Object(a.a)([
          '\n                width: initial;\n                margin: 0;\n              ',
        ])
        return (
          (L = function () {
            return n
          }),
          n
        )
      }
      function B() {
        var n = Object(a.a)(['\n                color: ', ';\n              '])
        return (
          (B = function () {
            return n
          }),
          n
        )
      }
      function D() {
        var n = Object(a.a)([
          '\n              border: 10px dashed ',
          ';\n              width: 87%;\n              height: 200px;\n              text-align: center;\n              cursor: pointer;\n              margin-bottom: 20px;\n              margin-right: 0;\n              align-self: flex-end;\n            ',
        ])
        return (
          (D = function () {
            return n
          }),
          n
        )
      }
      function F(n) {
        O.b
          .collection('projects')
          .add(Object(i.a)(Object(i.a)({}, n), {}, {createdAt: new Date()}))
          .then(function () {
            l.b.success('Project "'.concat(n.projectName, '" Created'))
          })
          .catch(function (n) {
            throw (l.b.error('Project Creation Failed '.concat(n.message)), n)
          })
      }
      function C(n) {
        var t = n.id,
          e = n.projectName,
          c = n.projectLink,
          r = n.projectLogo,
          o = n.description
        O.b
          .collection('projects')
          .doc(''.concat(t))
          .update({
            projectName: e,
            projectLink: c,
            projectLogo: r,
            description: o,
            updatedOn: new Date(),
          })
          .then(function () {
            l.b.success('Project "'.concat(e, '" Updated'))
          })
          .catch(function (n) {
            throw (l.b.error("Project Didn't Update ".concat(n.message)), n)
          })
      }
      function I(n) {
        O.b
          .collection('projects')
          .doc(''.concat(n.id))
          .delete()
          .then(function () {
            l.b.success('Project "'.concat(n.projectName, '" deleted'))
          })
          .catch(function (n) {
            throw (l.b.error('Project Deletion Failed '.concat(n.message)), n)
          })
      }
      function N(n, t) {
        var e
        return (
          (e = new FormData()).set('file', n),
          e.set('tags', [''.concat(t), 'image']),
          e.set('upload_preset', 'obaxyyex'),
          e.set('api_key', '579628475278557'),
          d.a
            .post(
              ' https://api.cloudinary.com/v1_1/ahmedeldessouki/image/upload',
              e,
              {headers: {'X-Requested-With': 'XMLHttpRequest'}},
            )
            .then(
              function (n) {
                return n.data.secure_url
              },
              function (t) {
                return l.b.error('Upload of '.concat(n.name, 'Failed!')), t
              },
            )
        )
      }
      function P(n) {
        var t = n.handleDrop
        return Object(u.c)(
          p.a,
          {onDrop: t, accept: 'image/*', multiple: !0, maxSize: 8e6},
          function (n) {
            var t = n.getRootProps,
              e = n.getInputProps
            return Object(u.c)(
              'label',
              Object(i.a)(
                {
                  htmlFor: 'dropZone',
                  css: [f.e, Object(u.b)(D(), f.b.darkBlue)],
                },
                t(),
              ),
              Object(u.c)(
                'span',
                {css: [f.d, Object(u.b)(B(), f.b.aliceLightBlue)]},
                'Drop Image(s)',
              ),
              Object(u.c)(
                'input',
                Object(i.a)(
                  {
                    id: 'dropZone',
                    type: 'file',
                    name: 'projectLogo',
                    css: [f.j, Object(u.b)(L())],
                  },
                  e(),
                ),
              ),
            )
          },
        )
      }
      function _(n) {
        var t = b.useRef(!1)
        return (
          b.useLayoutEffect(function () {
            return (
              (t.current = !0),
              function () {
                return (t.current = !1)
              }
            )
          }, []),
          b.useCallback(
            function () {
              return t.current ? n.apply(void 0, arguments) : void 0
            },
            [n],
          )
        )
      }
      var z = function (n, t) {
        var e = t.type,
          c = t.payload,
          r = n.formData,
          a = n.imagesFile,
          u = n.imagesDisplay
        switch (e) {
          case 'images':
            return Object(i.a)(
              Object(i.a)({}, n),
              {},
              {
                imagesFile: a
                  ? [].concat(Object(o.a)(a), Object(o.a)(c.file))
                  : Object(o.a)(c.file),
                imagesDisplay: u
                  ? [].concat(Object(o.a)(u), Object(o.a)(c.src))
                  : Object(o.a)(c.src),
                status: 'idle',
                error: null,
              },
            )
          case 'remove_image':
            var b = c.array,
              s = c.index
            return (
              'oldImages' === b && r.projectLogo.splice(s, 1),
              'imagesDisplay' === b && u.splice(s, 1),
              Object(i.a)({}, n)
            )
          case 'submit_formData':
            return (
              (r.projectName = c.projectName),
              (r.projectLink = c.projectLink),
              (r.description = c.description),
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
              {formData: Object(i.a)(Object(i.a)({}, r), {}, {description: c})},
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
              r.projectLogo.push(c),
              Object(i.a)(Object(i.a)({}, n), {}, {status: 'next_add'})
            )
          case 'clean_up':
            return (
              (r.projectName = ''),
              (r.projectLink = ''),
              (r.description = ''),
              (r.projectLogo = []),
              (a.length = 0),
              (u.length = 0),
              Object(i.a)(Object(i.a)({}, n), {}, {status: 'idle', error: null})
            )
          default:
            throw new Error('Unhandled action type: '.concat(e))
        }
      }
      function A(n) {
        var t = n.status,
          e = n.project
        return 'idle' !== t
          ? Object(u.c)(
              'div',
              {css: Object(u.b)(w())},
              Object(u.c)('div', {css: f.i}),
            )
          : Object(u.c)(
              'button',
              {type: 'submit', css: f.a, disabled: 'idle' !== t},
              e ? 'Edit' : 'Create',
              ' Project',
            )
      }
      function R(n) {
        var t = n.imagesDisplay,
          e = n.oldImages,
          c = n.handleClick,
          r = Object(u.b)(k(), f.b.kindaDarkBlue),
          o = Object(u.b)(y(), f.b.darkBlue, f.f.phoneLarge),
          a = Object(u.b)(x(), f.b.independenceBlue),
          i = Object(u.b)(v(), f.b.darkBlue)
        return Object(u.c)(
          'div',
          {css: Object(u.b)(h())},
          Object(u.c)(
            'div',
            {css: o},
            Object(u.c)('h2', {css: a}, 'New Images'),
            Object(u.c)(
              'div',
              {css: r},
              t &&
                t.map(function (n, t) {
                  return Object(u.c)(
                    'div',
                    {key: n, css: i},
                    Object(u.c)(m.a, {
                      title: 'Image',
                      fn: function () {
                        return c('imagesDisplay', t)
                      },
                    }),
                    Object(u.c)(j.Image, {
                      alt: '',
                      crop: 'lpad',
                      width: 100,
                      src: n,
                    }),
                  )
                }),
            ),
          ),
          e
            ? Object(u.c)(
                'div',
                {css: o},
                Object(u.c)('h2', {css: a}, 'Old Images'),
                Object(u.c)(
                  'div',
                  {css: r},
                  e &&
                    e.map(function (n, t) {
                      return Object(u.c)(
                        'div',
                        {key: n, css: i},
                        Object(u.c)(m.a, {
                          title: 'Image',
                          fn: function () {
                            return c('oldImages', t)
                          },
                        }),
                        Object(u.c)(j.Image, {
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
      function S(n) {
        var t = n.project,
          e = Object(r.a)(n, ['project']),
          o = b.useState(t),
          a = Object(c.a)(o, 2),
          s = a[0],
          d = a[1]
        return t
          ? Object(u.c)(
              g.a,
              Object(i.a)(
                {
                  value: s,
                  onChange: function (n) {
                    return d(n.target.value)
                  },
                },
                e,
              ),
            )
          : Object(u.c)(g.a, Object(i.a)({}, e))
      }
    },
  },
])
//# sourceMappingURL=9.324e97aa.chunk.js.map
