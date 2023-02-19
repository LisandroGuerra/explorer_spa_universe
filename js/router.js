export class Router {
    routes = {}
    atualPage = 'home'

    menuList = document.querySelector('.links').children
    

    backGround(pageName) {
      document.querySelector('body').removeAttribute('class')
      document.querySelector('body').classList.add(pageName)
    }

    navMenu(menuList, pageName) {
      for (let item of menuList){
        item.id == pageName ? 
        document.querySelector('#'+item.id).classList.add('active') : 
        document.querySelector('#'+item.id).classList.remove('active')
      }
    }


    add(routeName, page) {
      this.routes[routeName] = page
    }
    
    route(event) {
      event = event || window.event
      event.preventDefault()
  
      window.history.pushState({}, "", event.target.href)
  
      this.handle()
    }

    
  
    handle() {
      const { pathname }  = window.location
      const route = this.routes[pathname] || this.routes[404]
      this.atualPage = pathname == "/" ? "home" : pathname.slice(1,)      
      
      
      fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
      .then(this.navMenu(this.menuList, this.atualPage))
      .then(this.backGround(this.atualPage))
    }
}
