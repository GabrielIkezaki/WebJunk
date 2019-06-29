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
    
    {id: 0, userName: "D4ddySakurai20XX", profilePic: "http://r74n.com/stickers/images/masahiro.png"},
    {id: 1, userName: "B0T_Gaben123", profilePic:"https://pbs.twimg.com/profile_images/640854256988352512/bJqa-AUh_400x400.png"},
    {id: 2, userName: "mah_B", profilePic:"https://www.ssbwiki.com/images/b/ba/Chillindude_teamliquid.jpg"},
    {id: 3, userName: "noobmaster69", profilePic:"https://images-na.ssl-images-amazon.com/images/I/51FIYrzOaVL._SY355_.jpg"},
    {id: 4, userName: "waldo?", profilePic:"https://images-na.ssl-images-amazon.com/images/I/71RYSZirOEL._SL1500_.jpg"}
    
]

var posts = [
    {id: 0, user: usuarios[0], productTitle: "Fiji Water", productSource: "https://www.fijiwater.com/", productImage: "https://cdn.shoplightspeed.com/shops/609238/files/2954905/fiji-water-1l.jpg", text: "What can I say? It's a water bottle, except that it costs your kidney.\nThere isn't anything weird or junky in particular about this product,\nbut hey, it's expensive as all hell, and it fits the whole Vaporwave\ntheme going on in this website, so... Why not?\nAlso, this item is just an example for testing.", likes: 3},
    {id: 1, user: usuarios[1], productTitle: "Unicorn Meat", productSource: "https://www.thinkgeek.com/product/e5a7/", productImage: "https://www.thinkgeek.com/images/products/zoom/e5a7_canned_unicorn_meat.jpg", text: "Yep, you read that right. It's friggin' Unicorn Meat. Is it leggit? I dunno. I mean,\n according to their website, hell yeah it's leggit. So...Yeah, I mean, why wouldn't it?\nAccording to the website where I found this product, the little can is packed\nwith love, sunshine, happiness, stars, hugs, dreams, dead unicorns, you name it. It's\ndescribed to taste like chicken, but with a hint of marshmallow sweetness, so you\nmight wanna figure out what that tastes like.\nAlso, they ran out of meat... But you can\nstill take a look at it.", likes: 6},
    {id: 2, user: usuarios[2], productTitle: "Pooping Pooches White Elephant Gag Gift Calendar", productSource: "https://www.amazon.com/Pooping-Pooches-White-Elephant-Calendar/dp/B0754Y9GNH", productImage: "https://i.ebayimg.com/images/g/mfAAAOSwS4NbpPLi/s-l300.jpg", text: " A lovely calendar full of dog picture for each month... dogs doing their business that is.\nBuy one for your best friend, your dad, your mom, your dog, I'm sure they'll love it. What\nbetter way to keep track of your days with such pleasing pictures right? You know what, just\nbuy one for your whole family. Best of all, it's from 2019. If you're looking forward to buy\none of these, you should hurry. I mean, it's mid 2019. ", likes: 2},
    {id: 3, user: usuarios[3], productTitle: "Bacon Strips Adhesive Bandages", productSource: "https://www.amazon.com/Pack-Adhesive-Bandages-Die-cut-Sterile/dp/B00VY1CW78", productImage: "https://images-na.ssl-images-amazon.com/images/I/71dDG-QeueL._SL1200_.jpg", text:"Well, the name for this product is pretty self explantory. These are bandages, that look like bacon strips. Getting hurt has never been tastier. As far as I know, their resemblance to bacon is visual only. So please, PLEASE, do NOT try to eat those. You may try to sniff it though... Then tell me rather it smells like the real thing or not.", likes: 4},
    {id: 4, user: usuarios[4], productTitle: "Accoutrements Yodelling Pickle", productSource: "https://www.amazon.com/Accoutrements-11761-Yodelling-Pickle/dp/B0010VS078", productImage: "https://thecooleststuffever.com/sites/default/files/styles/product_main/public/yodeling_pickle.jpeg?itok=3OTu4fx9", text:"Why exactly would you want to have it? I have no idea. But I found it on Amazon, so why not take a look? It's a talking pickle, batteries not included. The best thing about it is its description: Great gift for the person who has everything except a yodeling pickle.", likes: 9}
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