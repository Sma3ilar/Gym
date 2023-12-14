import { useMemo } from 'react'

const useCoachColumns = () => {
  return useMemo(() => [
    {
      field: 'name',
      headerName: 'User name',
      flex: 2
    },

    {
      type: 'date',
      field: 'createdAt',
      headerName: 'Date Of Registration',
      valueGetter: ({ value }) => value && new Date(value),
      flex: 2
    },
    {
      type: 'date',
      field: 'time',
      headerName: 'Time Of Registration',
      flex: 2
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 2
    },
    {
      field: 'email',
      headerName: 'Email Address'
    }
  ])
}

export default useCoachColumns
