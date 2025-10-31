'use client'

import { useRowLabel } from '@payloadcms/ui'

interface RowLabelSectionItem {
  title?: string
}

export function RowLabel() {
  const data = useRowLabel<RowLabelSectionItem>()

  const label = data?.data?.title ? `📁 ${data?.data?.title}` : 'Section'

  return <div style={{ fontWeight: 'bold', color: '#666' }}>{label}</div>
}
