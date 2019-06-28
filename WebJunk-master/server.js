var express = require('express');
var bodyParser = require('body-parser');

var servidor = express();

servidor.use(bodyParser.json());

servidor.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
});

//In memory database
var usuarios = [
    
    {id: 0, userName: "Daddy Sakurai", profilePic: "http://r74n.com/stickers/images/masahiro.png"},
    {id: 1, userName: "BOT Gaben", profilePic:"https://pbs.twimg.com/profile_images/640854256988352512/bJqa-AUh_400x400.png"},
    {id: 2, userName: "mah_B", profilePic:"https://www.ssbwiki.com/images/b/ba/Chillindude_teamliquid.jpg"}
    
]

var posts = [
    {id: 0, user: usuarios[0], productTitle: "Fiji Water", productSource: "https://www.fijiwater.com/", productImage: "fiji-500ml-resized_1024x1024.jpg", text: "Fiji Water\n\nWhat can I say? It's a water bottle, except that it costs your kidney.\nThere isn't anything weird or junky in particular about this product,\nbut hey, it's expensive as all hell, and it fits the whole Vaporwave\ntheme going on in this website, so... Why not?\nAlso, this item is just an example for testing.", likes: 3},
    {id: 1, user: usuarios[1], productTitle: "Unicorn Meat", productSource: "https://www.thinkgeek.com/product/e5a7/", productImage: "e5a7_canned_unicorn_meat.jpg", text: "Unicorn Meat\n\nYep, you read that right. It's friggin' Unicorn Meat. Is it leggit? I dunno. I mean,\n according to their website, hell yeah it's leggit. So...Yeah, I mean, why wouldn't it?\nAccording to the website where I found this product, the little can is packed\nwith love, sunshine, happiness, stars, hugs, dreams, dead unicorns, you name it. It's\ndescribed to taste like chicken, but with a hint of marshmallow sweetness, so you\nmight wanna figure out what that tastes like.\nAlso, they ran out of meat... But you can\nstill take a look at it.", likes: 6},
    {id: 2, user: usuarios[2], productTitle: "Pooping Pooches White Elephant Gag Gift Calendar", productSource: "https://www.amazon.com/Pooping-Pooches-White-Elephant-Calendar/dp/B0754Y9GNH", productImage: "41Nw1x0M7ML._SY382_BO1,204,203,200_.jpg", text: " A lovely calendar full of dog picture for each month... dogs doing their business that is.\nBuy one for your best friend, your dad, your mom, your dog, I'm sure they'll love it. What\nbetter way to keep track of your days with such pleasing pictures right? You know what, just\nbuy one for your whole family. Best of all, it's from 2019. If you're looking forward to buy\none of these, you should hurry. I mean, it's mid 2019. ", likes: 2}
]

servidor.get("/posts", function(req,res){
    res.send(posts);
});

//Quando alguem acessar o site, o servidor retorna a pagina index.html encontrada na pasta dist
servidor.use(express.static("dist"));

//Escutando a porta 3000 (localhost:3000). Caso haja sinal da porta, o console vai printar "servidor rodando"
servidor.listen(process.env.PORT||3000, function(req, res){
    console.log("servidor rodando");
}); 