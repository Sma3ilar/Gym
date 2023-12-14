const navigation = () => {
  return [
    {
      title: 'Coach',
      icon: 'tabler:smart-home',
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
        {
          title: 'Add Players',
          path: '/players/addplayers'
        },
        {
          title: 'Coach',
          path: '/coach'
        }
      ]
    }
  ]
}

export default navigation
