/* https://desafio-front-default-rtdb.firebaseio.com/ */


const printPosts = posts => {
    $(".container-posts").empty()
    for ( key in posts) {
        /* console.log("key", key)
        console.log("object ", posts[key]) */
        let {title, tags} = posts[key]
        let entryHTML = `
        <div class="card mb-lg-3 mb-md-0 mb-sm-0 "data-entry-key=${key} >
            <div class="card-body print-card" >
                <div class="footer-card-central">
                    <img src="assets/images/profile-2.jpg" alt="" class="author-profile">
                    <div class="footer-firm">
                        <p class="card-text">Mateusz Leciejewski</p>
                        <a class="card-text">Nov 9 (5 hours ago)</a>
                    </div>
                </div>
                <div class="card-title print-card" onclick="saveKeyModal('${key}')" data-toggle="modal" data-target="#modal-card">
                    <h2>${title}</h2>
                </div>
                <div class="tag-link">
                    <a><span></span>${tags}</a>
                </div>
                <div class="reactions">
                    <div class="comments">
                        <a href=""><span><svg class="crayons-icon" width="24" height="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                    </path>
                                </svg></span>13 reactions</a>
                        <a href=""><span><svg class="crayons-icon" width="24" height="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                    </path>
                                </svg></span>3 comments</a>
                    </div>
                    <div class="time-read">
                        <p>2 min read</p>
                        <button class="btn-read-save button-save" onclick="saveKey('${key}')" type="button" data-entry-key=${key}>Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
        `
        $(".container-posts").append(entryHTML)
    }
}
const printPostsReading = posts => {
    $(".cardsEmpy").empty()
    for ( key in posts) {
        /* console.log("key", key)
        console.log("object ", posts[key]) */
        let {title, tags} = posts[key]
        let entryHTML = `
        <div class="card mb-lg-3 mb-md-0 mb-sm-0 "data-entry-key=${key} >
            <div class="card-body print-card" >
                <div class="footer-card-central">
                    <img src="assets/images/profile-2.jpg" alt="" class="author-profile">
                    <div class="footer-firm">
                        <p class="card-text">Mateusz Leciejewski</p>
                        <a class="card-text">Nov 9 (5 hours ago)</a>
                    </div>
                </div>
                <div class="card-title print-card" onclick="saveKeyModal('${key}')" data-toggle="modal" data-target="#modal-card">
                    <h2>${title}</h2>
                </div>
                <div class="tag-link">
                    <a><span></span>${tags}</a>
                </div>
                <div class="reactions">
                    <div class="comments">
                        <a href=""><span><svg class="crayons-icon" width="24" height="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                    </path>
                                </svg></span>13 reactions</a>
                        <a href=""><span><svg class="crayons-icon" width="24" height="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                    </path>
                                </svg></span>3 comments</a>
                    </div>
                    <div class="time-read">
                        <p>2 min read</p>
                        <button class="btn-read-save button-save" onclick="saveKey('${key}')" type="button" data-entry-key=${key}>Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
        `
        $(".cardsEmpy").append(entryHTML)
    }
}
/* $(document).click(event => {
    console.log(event.target)
}) */
let selectedPost= {}
let saveKey = key => {
    console.log("hola")
    console.log(key)
    selectedPost[key] = allPosts[key]
}

$(".reading-list").click(event => {
    event.preventDefault()
    console.log("hola")
    $(".cardsEmpy").empty()
    printPostsReading(selectedPost)
})

let saveKeyModal = key => {
    console.log("hola desde title")
    selectedPost[key] = allPosts[key]
    console.log(selectedPost)
}


$(".print-card").click(()=> {
$(".modal-body").empty()
    
})



/* $(".btn-read-save").click(event => {
    console.log("hola")
    let entryKey = $(event.target).closest(".card").data("entry-key")
    console.log( data("entry-key"))
    console.log( entryKey )
    let selectedPost = postsCollection[entryKey]
    console.log( selectedPost )
    
}) */

let allPosts= {}
const getPosts = () => {
    $.ajax({
        url: "https://desafio-front-default-rtdb.firebaseio.com/.json",
        method: "GET",
        success: response => {
            /* printPosts(response) */
            allPosts = response
            printPosts(response)
            
        },
        error: error => {
            console.log( error )
        }
    });
}

const getPostData = () => {
    let title = $("#title").val()
    let tags = $("#tags").val()
    let pic = $("#pic").val()
    let contentPost =  $("#exampleFormControlTextarea1").val()
    let postObject = {title, tags, pic, contentPost}
    console.log(postObject)
    savePost(postObject)
}

$(".btn-save-post").click(getPostData)

const savePost = post => {
    $.ajax({
        url: "https://desafio-front-default-rtdb.firebaseio.com/.json",
        method: "POST",
        data: JSON.stringify(post),
        success: response => {
            console.log( response )
            getPosts()
            $("#modalCreatePost").modal("hide")
        },
        error: error => {
            console.log( error )
        }
    });
}


getPosts()/* 
filterSearch(getPosts()) */

//search
let searchResultObject = {}
$(document).on('keyup','#entry',event=> {
    /* $(".print-search").empty() */
    searchResultObject= {}
    
    /* console.log(allPosts) */
    let search = $("#entry").val()
    for (key in allPosts) {
        
        let {title} = allPosts[key]
        /* console.log(title)
        console.log(allPosts[key]) */
        /* console.log(allPosts) */
        //let post = allPosts[key]
        /* let result = title.includes(search) */
        if(title.toLowerCase().includes(search.toLowerCase())) {
            searchResultObject[key] = allPosts[key]
            //searchResultObject = {...searchResultObject, post}
            $(".cardsEmpy").empty()
            printPostsReading(searchResultObject)
            /* printPosts(searchResultObject) */
        }


    }
    /* if(event.witch){
        console.log("entro la condicional")
        event.preventDefault()
        const entry = document.querySelector("#entry")
        const search = document.querySelector("#search")
        const result = document.querySelector("#result")
        
        console.log("allPosts",allPosts)
        const filterSearch = posts => {
            $(".card-header").empty()
            const text = entry.value.toLowerCase()

            

            for (const key in object) {
                let {title} = posts[key]
                console.log(title)
                
            }

                for(
                let product of products
                ) {
                let nombre = product.nombre.toLowerCase()
                if (nombre.indexOf(text) !== -1){
                result.innerHTML += `<li>${product.nombre} - Valor: ${product.valor}</li>`
                }
                }
                if (result.innerHTML === ""){
                result.innerHTML += `<li>no existe</li>`
                }
        }
        search.addEventListener("click", filterSearch)
    } */
})

//fechas 

let date = new Date ()

//erick