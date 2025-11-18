
var confirmbtn=document.getElementById("confirmbtn")
var card=document.getElementById("card")
var confirmbtncardBtn=document.getElementById("confirmbtncard")

var menu=[
    {
        name:"Smoked Chicken Salad",
        price:14.99,
        img:"./images/m1.jpg",  
    },
     {
        name:"Chicken Creamy ",
        price: 12.99,
        img:"./images/m2.jpg",  
    },
     {
        name:"Chicken Lemon Sauce",
        price:17.99,
        img:"./images/m3.jpg",  
    },
     {
        name:"Pasta Meatballs ",
        price:15.00,
        img:"./images/m4.jpg",  
    },
     {
        name:"Cheesesteak Sandwich",
        price:20.50,
        img:"./images/m5.jpg",  
    },
     {
        name:"Chicken Shawarma ",
        price:25.99,
        img:"./images/m6.jpg",  
    },
    {
        name:"Mexican Chicken Fajita",
        price:27,
        img:"./images/m7.jpg",  
    },
    {
        name:"Burger Fajita BBQ",
        price:21.50,
        img:"./images/m8.jpg",  
    },
    
]

var orderList=[]

var menucontent=``
var total=0

for(var i=0;i<menu.length;i++){
    menucontent+=`
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${menu[i].img}" alt="">
            </div>
            <div class="menu-item-content">
                <h3> ${menu[i].name} </h3>
                <span class="price">$${menu[i].price}</span>
                <button class="btn btn-primary text-white" id="addbtn" onclick="addorder(${i})"> Add</button>
            </div>
        </div>
    `
}
document.getElementById("my-menu").innerHTML=menucontent;

function addorder(index){
    orderList.push(menu[index])
    displayOrder()
}

function displayOrder(){
    box=``
    box2=``
    for(var i=0; i<orderList.length; i++){
        box+=`
            <tr>
                <td>${i+1}</td>
                <td> ${orderList[i].name} </td>
                <td> ${orderList[i].price} </td>
                <td><button class="btn btn-danger" onclick="deleteOrder(${i})" ><i class="fa-solid fa-trash" ></i> Delete </button></td>
            </tr>
            `
    }
    box2=`
        <tr>
            <td></td>
            <td></td>
            <td class="fw-bold">total= ${total}</td>
            <td></td>
        </tr>
        `
    
    document.getElementById("m-body").innerHTML=box
    document.getElementById("m-foot").innerHTML=box2
    localStorage.setItem("order",JSON.stringify(orderList))
    
    confirmbtn.classList.replace("d-none","d-block")
}

function deleteOrder(index){
    orderList.splice(index,1)
    displayOrder()
    localStorage.setItem("order",JSON.stringify(orderList))
    if( orderList.length==0){
        confirmbtn.classList.replace("d-block","d-none")
    } 
}
function confirmOrder(){
    card.classList.replace("d-none","d-block")
}
function confirmOrderInfo(){
    card.classList.replace("d-block","d-none")
    window.alert("your order is confirmed")
}





