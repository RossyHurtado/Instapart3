export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Home/style.css"
        <article>
        <section>

    
        <nav class="navbar">
        <div class="nav-wrapper">
         <img src="./images/logo2.png" class="logo" alt="">
        
         <input type="text" class="search-box" placeholder="Buscar"> 


         <div class="nav-items">
         <img src="./images/chat.png" class="icono" alt="">
         <img src="./images/np.png" class="icono" alt="">
         <img src="./images/finder.png" class="icono" alt="">
         <img src="./images/heart2.png" class="icono" alt="">
    
         <div class="nav-user">
         <img src="./images/rossy.jpg" class="nav-user" alt="">

         <div class="casa">
         <img src="./images/house.png" class="icono" alt="">

         <div class="card">


        
         <img src="./images/construction.jpg" class="popup" alt="">
         
              <p>Registrado con Exito! Bienvenido </p>

      </div>
    
      <div class="card__content">
      
      </div>
         
         </div>
     
           </div>
         </div>
        
      </nav>
     
        </section>
        
      
        </article>
        `;
    }
}
customElements.define("app-home", Home);
