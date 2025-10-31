'use client'

import * as React from 'react'
import type { UIFieldClientProps } from 'payload'
import { Button, useForm, useFormFields } from '@payloadcms/ui'

type ExtraProps = { targetPath?: string }

const PasteAppend: React.FC<UIFieldClientProps & ExtraProps> = (props) => {
  const { addFieldRow, dispatchFields } = useForm()

  // In client components, the field config is on `clientField` (not `field`)
  const targetPath = props.targetPath ?? 'layout'

  const targetState = useFormFields(([fields]) => (targetPath ? fields[targetPath] : undefined))

  const currentLen = Array.isArray(targetState?.rows)
    ? targetState.rows.length
    : Array.isArray(targetState?.value)
      ? targetState.value.length
      : 0

  const [status, setStatus] = React.useState<string | null>(null)

  const normalizeClipboard = (data: unknown): any[] => {
    const obj = data as any
    let rows: any[] = Array.isArray(obj)
      ? obj
      : Array.isArray(obj?.rows)
        ? obj.rows
        : Array.isArray(obj?.data)
          ? obj.data
          : obj
            ? [obj]
            : []

    return rows.map((r) => {
      const { id, _id, ...rest } = r || {}
      return rest?.blockType ? rest : r
    })
  }

  const toSubFieldState = (obj: Record<string, any>) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, { initialValue: v, value: v, valid: true }]),
    )

  const onPasteAppend = async () => {
    setStatus(null)
    if (!targetPath) return setStatus('No targetPath provided.')

    let text = ''
    try {
      text = await navigator.clipboard.readText()
    } catch {
      return setStatus('Clipboard not accessible.')
    }

    if (!text) return setStatus('Clipboard is empty.')

    let parsed: unknown
    try {
      parsed = JSON.parse(text)
    } catch {
      return setStatus('Clipboard must be JSON (row or rows).')
    }

    const rows = normalizeClipboard(parsed)
    if (!rows.length) return setStatus('Nothing to append.')

    await Promise.all(
      rows.map((rawRow, i) => {
        const { blockType, ...fields } = rawRow || {}
        dispatchFields({
          type: 'ADD_ROW',
          path: targetPath, // your Array/Blocks field path
          rowIndex: currentLen + i, // append at end; omit to let it push
          blockType, // required for Blocks; undefined for Array
          subFieldState: toSubFieldState(fields),
        })
      }),
    )

    setStatus(`Appended ${rows.length} row(s) to “${targetPath}”.`)
  }

  return (
    <div className="field-type">
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Button size="small" onClick={onPasteAppend} type="button">
          Paste (append)
        </Button>
        {status && <small aria-live="polite">{status}</small>}
      </div>
    </div>
  )
}

export default PasteAppend
