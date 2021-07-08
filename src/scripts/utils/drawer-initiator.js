const DrawerInitiator = {
  init ({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer)
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer)
    })
  },

  _toggleDrawer (event, button, drawer) {
    event.stopPropagation()
    button.classList.toggle('is-active')
    drawer.classList.toggle('active')
  },

  _closeDrawer (event, button, drawer) {
    event.stopPropagation()
    button.classList.remove('is-active')
    drawer.classList.remove('active')
  }
}

export default DrawerInitiator
