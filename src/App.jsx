import React, { Component } from 'react'

class Article extends Component {
  render() {
    return (
      <article>
        <a href={this.props.mainLink}>
          <img
            src={this.props.mainImageLink}
            width="400"
            height="400"
            alt={this.props.mainAlt}
          />
        </a>
        <ul>
          <li>
            #{this.props.number}:
            <a href={this.props.mainLink}>
              <strong>{this.props.mainAlt}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.creatorLink}>
              <img
                src={this.props.creatorImageLink}
                width="24px"
                height="24px"
                alt={this.props.creatorAlt}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <main>
        <section>
          <Article
            mainLink="https://octodex.github.com//octoqueer/"
            mainImageLink="https://octodex.github.com//images/Octoqueer.png"
            mainAlt="Octoqueer"
            creatorLink="https://github.com/cameronfoxly"
            creatorImageLink="https://github.com/cameronfoxly.png"
            creatorAlt="cameronfoxly"
            number={150}
          />
          <Article
            mainLink="https://octodex.github.com//terracottocat/"
            mainImageLink="https://octodex.github.com//images/Terracottocat_Single.png"
            mainAlt="Terracottocat"
            creatorLink="https://github.com/chubbmo"
            creatorImageLink="https://github.com/chubbmo.png"
            creatorAlt="chubbmo"
            number={149}
          />

          <Article
            mainLink="https://octodex.github.com//octogatos/"
            mainImageLink="https://octodex.github.com//images/Octogatos.png"
            mainAlt="Octogatos"
            creatorLink="https://github.com/cameronfoxly"
            creatorImageLink="https://github.com/cameronfoxly.png"
            creatorAlt="cameronfoxly"
            number={148}
          />

          <Article
            mainLink="https://octodex.github.com//adacats/"
            mainImageLink="https://octodex.github.com//images/Adacats.png"
            mainAlt="Adacats"
            creatorLink="https://github.com/cameronfoxly"
            creatorImageLink="https://github.com/cameronfoxly.png"
            creatorAlt="cameronfoxly"
            number={147}
          />

          <Article
            mainLink="https://octodex.github.com//fintechtocat/"
            mainImageLink="https://octodex.github.com//images/Fintechtocat.png"
            mainAlt="Fintechtocat"
            creatorLink="https://github.com/ceciliorz"
            creatorImageLink="https://github.com/ceciliorz.png"
            creatorAlt="ceciliorz"
            number={146}
          />

          <Article
            mainLink="https://octodex.github.com//brennatocat/"
            mainImageLink="https://octodex.github.com//images/Brennatocat.png"
            mainAlt="Brennatocat"
            creatorLink="https://github.com/johncreek"
            creatorImageLink="https://github.com/johncreek.png"
            creatorAlt="johncreek"
            number={145}
          />

          <Article
            mainLink="https://octodex.github.com//filmtocats/"
            mainImageLink="https://octodex.github.com//images/filmtocats.png"
            mainAlt="Filmtocats"
            creatorLink="https://github.com/heyhayhay"
            creatorImageLink="https://github.com/heyhayhay.png"
            creatorAlt="heyhayhay"
            number={144}
          />
          <Article
            mainLink="https://octodex.github.com//sentrytocat/"
            mainImageLink="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            mainAlt="Sentrytocat"
            creatorLink="https://github.com/cameronmcefee"
            creatorImageLink="https://github.com/cameronmcefee.png"
            creatorAlt="cameronmcefee"
            number={143}
          />
        </section>
      </main>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <headerBackground>
        <header>
          <nav>
            <ul>
              <lockup>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GithubLogo"
                  />
                </li>
                <li>
                  <octodex href="#">Octodex</octodex>
                </li>
              </lockup>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>
      </headerBackground>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

class App extends Component {
  render() {
    return [<Header />, <Body />, <Footer />]
  }
}

export default App
