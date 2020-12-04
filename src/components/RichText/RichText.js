import React, { useCallback, useEffect, useRef } from 'react'
import useStyles from './useStyles'
import clsx from 'clsx'
import hljs from 'utils/highlight'
import 'styles/monokai-sublime.css'

const RichText = ({ content }) => {
  const classes = useStyles()

  const contentRef = useRef(null)

  const highlight = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  }, [])

  useEffect(() => {
    if (!contentRef) return

    const timeout = setTimeout(() => {
      highlight()
    }, 500)

    return () => clearTimeout(timeout)
  }, [highlight])

  return (
    <div className="ql-snow" ref={contentRef}>
      <div
        className={clsx('ql-editor', classes.content)}
        dangerouslySetInnerHTML={{
          __html: content
        }}
      ></div>
    </div>
  )
}

export default RichText
