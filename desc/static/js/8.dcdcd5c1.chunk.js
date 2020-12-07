;(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [8],
  {
    294: function (t, e, r) {
      'use strict'
      r.r(e)
      var n = r(62),
        o = r.n(n),
        i = r(6),
        a = r(63),
        c = r(13),
        u = r(5),
        s = r(1),
        l = r.n(s),
        h = r(17),
        f = r(19)
      function p(t) {
        return d.apply(this, arguments)
      }
      function d() {
        return (d = Object(a.a)(
          o.a.mark(function t(e) {
            var r, n
            return o.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      f.b
                        .collection('contactedMe')
                        .add({
                          contactName: e.contactName,
                          email: e.email,
                          phoneNumber: e.phoneNumber,
                          description: e.description,
                          sentAt: new Date(),
                        })
                        .then(function () {
                          h.b.success(
                            'Thanks "'.concat(
                              e.contactName,
                              '" For Contacting Me',
                            ),
                          ),
                            (r = !0)
                        })
                        .catch(function (t) {
                          h.b.error(
                            "Sorry, I Didn't Get Your Message. Due to an Error",
                          ),
                            (n = t.message)
                        })
                    )
                  case 2:
                    return t.abrupt('return', {resolved: r, error: n})
                  case 3:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )).apply(this, arguments)
      }
      var v = r(31),
        m = r(75),
        y = r(32)
      function g() {
        var t = Object(i.a)([
          '\n              margin-top: 38px;\n              margin-left: 42px;\n              width: 100%;\n            ',
        ])
        return (
          (g = function () {
            return t
          }),
          t
        )
      }
      function b() {
        var t = Object(i.a)([
          '\n                border-color: ',
          ';\n              ',
        ])
        return (
          (b = function () {
            return t
          }),
          t
        )
      }
      e.default = function () {
        var t = l.a.useState(!1),
          e = Object(c.a)(t, 2),
          r = e[0],
          n = e[1],
          i = l.a.useState(''),
          s = Object(c.a)(i, 2),
          h = s[0],
          f = s[1],
          d = l.a.useState(''),
          w = Object(c.a)(d, 2),
          x = w[0],
          j = w[1],
          O = Object(y.b)(),
          L = O.status,
          E = O.dispatch
        function N() {
          return (N = Object(a.a)(
            o.a.mark(function t(e) {
              var r, n, i, a, c, u, s, l
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        e.preventDefault(),
                        E({type: 'pending'}),
                        (r = e.target.elements),
                        (n = r.contactName),
                        (i = r.email),
                        (a = r.phoneNumber),
                        (c = r.description),
                        (u = {
                          contactName: n.value,
                          email: i.value,
                          phoneNumber: a.value,
                          description: c.value,
                        }),
                        e.currentTarget.reset(),
                        (t.next = 7),
                        p(u)
                      )
                    case 7:
                      ;(s = t.sent),
                        (l = s.error) && j(l),
                        f(v.b.aliceLightBlue),
                        E({type: 'idle'})
                    case 12:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )).apply(this, arguments)
        }
        return Object(u.c)(
          l.a.Fragment,
          null,
          Object(u.c)('h1', {css: v.d}, 'Contact Me'),
          Object(u.c)(
            'form',
            {
              id: 'ContactMe',
              onSubmit: function (t) {
                return N.apply(this, arguments)
              },
              css: v.m,
            },
            Object(u.c)(
              'section',
              null,
              Object(u.c)(m.a, {
                name: 'contactName',
                pattern: '[^\\(\\)0-9]*',
                placeholder: 'Name',
                required: !0,
                minLength: 3,
                maxLength: 30,
                inputMode: 'text',
                cleanColor: 'pending' === L,
              }),
              Object(u.c)(m.a, {
                name: 'email',
                type: 'email',
                inputMode: 'email',
                placeholder: 'Email Address',
                required: !0,
                cleanColor: 'pending' === L,
              }),
              Object(u.c)(m.a, {
                onBlur: function (t) {
                  t.target.value.search(/^[0-9\b]+$/g) ? n(!0) : n(!1)
                },
                name: 'phoneNumber',
                inputMode: 'tel',
                minLength: 11,
                required: !0,
                maxLength: 13,
                placeholder: 'Phone Number',
                pattern: '^[0-9\\b]+$',
                cleanColor: 'pending' === L,
              }),
              r
                ? Object(u.c)('span', {css: v.k}, 'Invalid Phone Number')
                : null,
            ),
            Object(u.c)(
              'label',
              {css: v.e, htmlFor: 'description'},
              Object(u.c)('textarea', {
                name: 'description',
                onBlur: function (t) {
                  return t.target.validity.valid
                    ? f(v.b.lightGreen)
                    : f(v.b.burgundyRed)
                },
                required: !0,
                placeholder: 'Description',
                minLength: 10,
                maxLength: 500,
                css: [v.j, Object(u.b)(b(), h)],
              }),
            ),
            'pending' === L
              ? Object(u.c)(
                  'div',
                  {css: Object(u.b)(g())},
                  Object(u.c)('div', {css: v.i}),
                )
              : Object(u.c)(
                  'button',
                  {
                    type: 'submit',
                    'data-testid': 'submit',
                    disabled: 'pending' === L,
                    css: v.a,
                  },
                  'Submit',
                ),
            x ? Object(u.c)('span', {css: v.k, type: 'alert'}, x) : null,
          ),
        )
      }
    },
    62: function (t, e, r) {
      t.exports = r(94)
    },
    63: function (t, e, r) {
      'use strict'
      function n(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value
        } catch (s) {
          return void r(s)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments
          return new Promise(function (o, i) {
            var a = t.apply(e, r)
            function c(t) {
              n(a, o, i, c, u, 'next', t)
            }
            function u(t) {
              n(a, o, i, c, u, 'throw', t)
            }
            c(void 0)
          })
        }
      }
      r.d(e, 'a', function () {
        return o
      })
    },
    94: function (t, e, r) {
      var n = (function (t) {
        'use strict'
        var e,
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = 'function' === typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag'
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          )
        }
        try {
          u({}, '')
        } catch (P) {
          u = function (t, e, r) {
            return (t[e] = r)
          }
        }
        function s(t, e, r, n) {
          var o = e && e.prototype instanceof m ? e : m,
            i = Object.create(o.prototype),
            a = new _(n || [])
          return (
            (i._invoke = (function (t, e, r) {
              var n = h
              return function (o, i) {
                if (n === p) throw new Error('Generator is already running')
                if (n === d) {
                  if ('throw' === o) throw i
                  return G()
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate
                  if (a) {
                    var c = E(a, r)
                    if (c) {
                      if (c === v) continue
                      return c
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg
                  else if ('throw' === r.method) {
                    if (n === h) throw ((n = d), r.arg)
                    r.dispatchException(r.arg)
                  } else 'return' === r.method && r.abrupt('return', r.arg)
                  n = p
                  var u = l(t, e, r)
                  if ('normal' === u.type) {
                    if (((n = r.done ? d : f), u.arg === v)) continue
                    return {value: u.arg, done: r.done}
                  }
                  'throw' === u.type &&
                    ((n = d), (r.method = 'throw'), (r.arg = u.arg))
                }
              }
            })(t, r, a)),
            i
          )
        }
        function l(t, e, r) {
          try {
            return {type: 'normal', arg: t.call(e, r)}
          } catch (P) {
            return {type: 'throw', arg: P}
          }
        }
        t.wrap = s
        var h = 'suspendedStart',
          f = 'suspendedYield',
          p = 'executing',
          d = 'completed',
          v = {}
        function m() {}
        function y() {}
        function g() {}
        var b = {}
        b[i] = function () {
          return this
        }
        var w = Object.getPrototypeOf,
          x = w && w(w(S([])))
        x && x !== r && n.call(x, i) && (b = x)
        var j = (g.prototype = m.prototype = Object.create(b))
        function O(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }
        function L(t, e) {
          function r(o, i, a, c) {
            var u = l(t[o], t, i)
            if ('throw' !== u.type) {
              var s = u.arg,
                h = s.value
              return h && 'object' === typeof h && n.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      r('next', t, a, c)
                    },
                    function (t) {
                      r('throw', t, a, c)
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      ;(s.value = t), a(s)
                    },
                    function (t) {
                      return r('throw', t, a, c)
                    },
                  )
            }
            c(u.arg)
          }
          var o
          this._invoke = function (t, n) {
            function i() {
              return new e(function (e, o) {
                r(t, n, e, o)
              })
            }
            return (o = o ? o.then(i, i) : i())
          }
        }
        function E(t, r) {
          var n = t.iterator[r.method]
          if (n === e) {
            if (((r.delegate = null), 'throw' === r.method)) {
              if (
                t.iterator.return &&
                ((r.method = 'return'),
                (r.arg = e),
                E(t, r),
                'throw' === r.method)
              )
                return v
              ;(r.method = 'throw'),
                (r.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ))
            }
            return v
          }
          var o = l(n, t.iterator, r.arg)
          if ('throw' === o.type)
            return (r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), v
          var i = o.arg
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                (r.delegate = null),
                v)
              : i
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              v)
        }
        function N(t) {
          var e = {tryLoc: t[0]}
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function k(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function _(t) {
          ;(this.tryEntries = [{tryLoc: 'root'}]),
            t.forEach(N, this),
            this.reset(!0)
        }
        function S(t) {
          if (t) {
            var r = t[i]
            if (r) return r.call(t)
            if ('function' === typeof t.next) return t
            if (!isNaN(t.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r
                  return (r.value = e), (r.done = !0), r
                }
              return (a.next = a)
            }
          }
          return {next: G}
        }
        function G() {
          return {value: e, done: !0}
        }
        return (
          (y.prototype = j.constructor = g),
          (g.constructor = y),
          (y.displayName = u(g, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' === typeof t && t.constructor
            return (
              !!e &&
              (e === y || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(j)),
              t
            )
          }),
          (t.awrap = function (t) {
            return {__await: t}
          }),
          O(L.prototype),
          (L.prototype[a] = function () {
            return this
          }),
          (t.AsyncIterator = L),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new L(s(e, r, n, o), i)
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next()
                })
          }),
          O(j),
          u(j, c, 'Generator'),
          (j[i] = function () {
            return this
          }),
          (j.toString = function () {
            return '[object Generator]'
          }),
          (t.keys = function (t) {
            var e = []
            for (var r in t) e.push(r)
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop()
                  if (n in t) return (r.value = n), (r.done = !1), r
                }
                return (r.done = !0), r
              }
            )
          }),
          (t.values = S),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(k),
                !t)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (t) {
              if (this.done) throw t
              var r = this
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = t),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = e)),
                  !!o
                )
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion
                if ('root' === a.tryLoc) return o('end')
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc'),
                    s = n.call(a, 'finallyLoc')
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r]
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                v
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e]
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), k(r), v
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e]
                if (r.tryLoc === t) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    k(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = {iterator: S(t), resultName: r, nextLoc: n}),
                'next' === this.method && (this.arg = e),
                v
              )
            },
          }),
          t
        )
      })(t.exports)
      try {
        regeneratorRuntime = n
      } catch (o) {
        Function('r', 'regeneratorRuntime = r')(n)
      }
    },
  },
])
//# sourceMappingURL=8.dcdcd5c1.chunk.js.map
