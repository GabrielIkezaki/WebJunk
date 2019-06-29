var requestPosts =new XMLHttpRequest();
requestPosts.open("get", "/posts");
requestPosts.addEventListener("load",preencherPagComPosts);
requestPosts.send();

function preencherPagComPosts(){
    if(requestPosts.status == 200){
        var postagens = JSON.parse(requestPosts.response);
        postagens.forEach(function(post){
            createPost(post);
        });
    }else {
        alert("Erou");
    }
}

function createPost(post)
{
    var postElement = document.createElement('div');
    postElement.className = "postagem postagem-" + post.id;
    var domString = '<div class = "details">' + 
    '<img class = "foto" src= "' + post.user.profilePic + '" alt= "User Image" style="width:100px;height:100px">' +
    '<p class = "nome">' + post.user.userName + '</p>' + 
    '<p class = "conttitle">' + post.productTitle + '</p>' +
    '<img class = "contimage" src= "'+ post.productImage + '" alt= "Product Image" style="width:300px;height:300px">' +
    '<p class = "likes">' + post.likes + '</p>' +
    '<button class = "back" onclick = "addLike(' + post.id + ')">' +
        '<img width = "20" height= "20" src = "facebook-like--v1.png"' +
    '</button>' + 
'</div>' + 
'<p class="textoPost">' + post.text + '</p>' +
'<p class = "contsource">' +post.productSource + '</p>'+
'<p class = "contSpacer">' + post.spacer + '</p>';

postElement.innerHTML = domString;

var divPostagem = document.querySelector('.contentcolor');
divPostagem.appendChild(postElement);
}

createPost(posts[0]);