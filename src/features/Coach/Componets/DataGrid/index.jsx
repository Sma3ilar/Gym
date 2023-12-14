import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import useCoachColumns from '../../Hooks/useCoachColumn'
import { Box } from '@mui/system'

export default function CoachTable({ rows }) {
  console.log(rows)
  const columns = useCoachColumns()

  return (
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  )
}
