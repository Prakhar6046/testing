'use client'

import { useRowLabel } from '@payloadcms/ui'

interface RowLabelItem {
  name?: string
}

export function RowLabel() {
  const data = useRowLabel<RowLabelItem>()

  const label = data?.data?.name ? `${data?.data?.name}` : 'Row'

  return <div>{label}</div>
}
