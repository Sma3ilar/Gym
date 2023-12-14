// ** Table Columns
import { useDispatch, useSelector } from 'react-redux'
import { getCoachesData } from './store'
import { useEffect } from 'react'
import CoachTable from '../../features/Coach/Componets/DataGrid'

// ** Third Party Components

const CoachesPage = () => {
  const store = useSelector(state => state.CoachStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCoachesData())
  }, [dispatch, store?.data?.length])

  console.log(store.data)

  return (
    <>
      <CoachTable rows={store.data} />
    </>
  )
}

export default CoachesPage
