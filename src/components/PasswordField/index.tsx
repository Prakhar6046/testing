'use client'

import type { TextFieldClientComponent } from 'payload'
import { TextField } from '@payloadcms/ui'
import React from 'react'

export const PasswordField: TextFieldClientComponent = (props) => {
  return (
    <TextField
      {...props}
      field={{ ...props.field, admin: { ...props.field.admin, type: 'password' } }}
    />
  )
}

export default PasswordField
