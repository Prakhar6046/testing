import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

type Props = {
  path: string
  value?: string
  onChange: (val: string) => void
}

export default function AdminMarkdown({ value, onChange }: Props) {
  return (
    <SimpleMDE
      value={value || ''}
      onChange={onChange}
      options={{
        spellChecker: false,
        autofocus: false,
        status: false,
        toolbar: [
          'bold',
          'italic',
          'heading',
          '|',
          'unordered-list',
          'ordered-list',
          '|',
          'link',
          'quote',
          'code',
          'table',
          'horizontal-rule',
          '|',
          'preview',
          'side-by-side',
          'fullscreen',
        ],
        renderingConfig: { singleLineBreaks: false },
      }}
    />
  )
}
