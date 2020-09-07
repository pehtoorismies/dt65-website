import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { AppType } from 'next/dist/next-server/lib/utils'

class EnhancedDocument extends Document {
  static async getInitialProps(documentContext: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()

    const page = documentContext.renderPage({
      enhanceApp: (App: AppType) => {
        return (props): React.ReactElement => {
          return sheet.collectStyles(<App {...props} />)
        }
      },
    })

    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }

  render(): JSX.Element {
    return (
      <Html lang="fi">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default EnhancedDocument
