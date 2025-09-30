document.querySelector(".year").innerHTML = new Date().getFullYear()

const menu_btn = document.querySelector(".menu-btn")
const nav = document.querySelector("nav")
const main = document.querySelector("main")

menu_btn.addEventListener("click", display_nav)

function display_nav(){
    nav.classList.toggle("show-nav")
    menu_btn.classList.toggle("change-bg")
}

const form_btn = document.querySelector(".form-btn")
const form = document.querySelector(".form")
const close_btn = document.querySelector(".form-close")

form_btn.addEventListener("click", display_form)

function display_form(){
    form.style.display = "flex"
}

close_btn.addEventListener("click", close_form)

function close_form(){
    form.style.display = "none"
}


const theme_btn = document.querySelector(".theme-btn")
const theme_ball = document.querySelector(".theme-ball")

theme_btn.addEventListener("click", slide_theme_ball)

function slide_theme_ball(){
         theme_ball.classList.toggle("slide-theme-ball")
        
        document.querySelector("header").classList.toggle("header-dark-theme")
        document.querySelector("header div").classList.toggle("header-div-dark-theme")
        

        main.classList.toggle("main-dark-theme")
        document.querySelectorAll("nav a img").forEach(function(img){
                img.classList.toggle("white-icon")
        })

         document.querySelectorAll("nav a").forEach(function(a){
                a.classList.toggle("white-text")
        })

        document.querySelectorAll(".post-can").forEach(function(a){
                a.classList.toggle("post-container-dark-theme")
        })


        document.querySelector(".main-posts").classList.toggle("main-post-dark-theme")
        document.querySelector(".main-posts h2").classList.toggle("h2-dark-theme")
        document.querySelector(".f1").classList.toggle("footer-dark-theme")
        document.querySelector(".username").classList.toggle("user-dark-theme")
         document.querySelector(".form").classList.toggle("post-dark-theme")
        document.querySelector(".form-close").classList.toggle("close-form-dark-theme")
        
        


        

}


const upload_input = document.querySelector(".post-img")
const file_input = document.querySelector("#file")

let image = ""
file_input.addEventListener("change", function(){
          let selected_image = file_input.files[0]
      image =   URL.createObjectURL(selected_image)

      document.querySelector(".post-img").src = image
})

const post_container = document.querySelector(".posts-container")

form.addEventListener("submit", function(event){
    event.preventDefault()

  let username = document.querySelector(".user").value
  
  let title = document.querySelector(".title").value

  let post_body = document.querySelector(".post-body").value
  
  let post =`<div class="post-can">
                        <img src="${image}" alt="" class="post-image" width="100">
                        <p>
                            <b>${title}</b>
                            <span>
                              ${post_body}
                            </span>
                            <button>See more...</button>
                            <small class="username-date">
                                <i class="username">
                                   ${username}
                                </i>
                    
                                <i class="date">
                                   ${new Date().toLocaleString()}
                                </i>
                            </small>
                    
                            <small class="social">
                                <span>
                                    <img src="./image/like.png" alt="" width="15"><small>25</small>
                                </span>
                    
                                <span>
                                    <img src="./image/love.png" alt="" width="15"><small>10</small>
                                </span>
                    
                                <span>
                                    <img src="./image/comment.png" alt="" width="15"><small>12</small>
                                </span>
                    
                                <span>
                                    <img src="./image/share.png" alt="" width="15"><small>50</small>
                                </span>
                    
                            </small>
                    
                        </p>
                    
                    </div>`
                        
                               
                         

  
    post_container.innerHTML += post

     form.style.display = "none"

})

    
     


     
      