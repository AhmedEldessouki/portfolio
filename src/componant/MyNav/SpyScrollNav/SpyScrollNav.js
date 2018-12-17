import React, { Component } from 'react'
import '../MyNav.scss'
import { ScrollSpy, Link } from '../../SpyScroll/ScrollSpy'
import MyInfo from '../../ContactMe/ContactMe'
import Projects from '../../Projects/Projects'
import ContactMe from '../../ContactMe/ContactMe'
import MyFooter from '../../MyFooter/MyFooter'

export default class MyNav extends Component {
  render() {
    return (
      <div className="MyNav">
        <div >
          <ScrollSpy>
            <Link ref={c => this._firstLink = c} section="1">Section 1</Link>
            <Link section="2">Section 2</Link>
            <Link section="3">Section 3</Link>
          </ScrollSpy>
          <section id="1">
          <MyInfo/>
          </section>
          <section id="2">
          <Projects/>
          </section>
          <section id="3">
          <ContactMe/>
          </section>
        </div>
      </div>
    )
  }
}
