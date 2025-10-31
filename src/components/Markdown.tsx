import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

// Optional: tighten the default sanitize schema if you allow inline HTML
// import { defaultSchema } from 'hast-util-sanitize' // if you want to customize

type Props = {
  content: string | null | undefined
  className?: string
}

export default function Markdown({ content, className }: Props) {
  if (!content) return null

  return (
    <div className={className}>
      <ReactMarkdown
        // Enable lists, tables, task-lists, strikethrough
        remarkPlugins={[remarkGfm]}
        // Allow (sanitized) inline HTML inside the markdown if you use it
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        // Optional: map tags to your design system or Tailwind classes
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-semibold mb-4" {...props} />,
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
          ),
          p: ({ node, ...props }) => <p className="mb-3 leading-7" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-3 space-y-1" {...props} />,
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 mb-3 space-y-1" {...props} />
          ),
          li: ({ node, ...props }) => <li className="leading-7" {...props} />,
          a: ({ node, ...props }) => <a className="underline underline-offset-2" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 pl-4 italic opacity-90 my-4" {...props} />
          ),
          // @ts-ignore
          code: ({ inline, ...props }) =>
            inline ? (
              <code className="px-1 py-0.5 rounded bg-gray-100" {...props} />
            ) : (
              <code className="block p-3 rounded bg-gray-100 overflow-auto" {...props} />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
