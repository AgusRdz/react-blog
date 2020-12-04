import hljs from 'highlight.js'

hljs.configure({
  languages: [
    'javascript',
    'markdown',
    'apache',
    'bash',
    'css',
    'dockerfile',
    'json',
    'makefile',
    'nginx',
    'pgslq',
    'php',
    'plaintext',
    'python',
    'r',
    'ruby',
    'shell',
    'typescript',
    'xml',
    'yaml',
    'sql',
    'html'
  ]
})
hljs.initHighlighting()

export default hljs
