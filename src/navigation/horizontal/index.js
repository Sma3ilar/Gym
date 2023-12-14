const navigation = () => {
  return [
    {
      icon: 'tabler:smart-home',
      title: 'players',
      children: [
        {
          icon: 'tabler:chart-pie-2',
          title: 'Add player',
          path: '/players/addplayers'
        }
      ]
    }
  ]
}

export default navigation
