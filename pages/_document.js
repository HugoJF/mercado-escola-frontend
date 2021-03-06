import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body className="min-h-screen">
                <Main/>
                {/* Here we will mount our modal portal */}
                <div id="modal"/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
