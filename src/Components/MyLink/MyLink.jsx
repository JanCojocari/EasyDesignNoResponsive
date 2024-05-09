import { Typography } from '@mui/material'
import React from 'react'

const MyLink = ({children,href,target}) => {
  return (
    <Typography component={"span"}><a href={href} target={target}>{children}</a></Typography>
  )
}

export default MyLink
