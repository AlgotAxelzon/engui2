import React from 'react'
import ReactMarkdown from 'react-markdown'
import RemarkMathPlugin from 'remark-math'
import RehypeKatex from 'rehype-katex'
import RehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css'

const _mapProps = (props) => ({
  ...props,
  skipHtml: false,
  plugins: [RemarkMathPlugin],
  rehypePlugins: [RehypeKatex, RehypeRaw],
})

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />

export default Markdown
