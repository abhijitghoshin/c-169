AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handlemarkerfound()
        })
        this.el.addEventListener("markerLost",()=>{
            this.handlemarkerlost()
        })
    },
    handlemarkerfound:function(){
var buttondiv=document.getElementById("button-div")
buttondiv.style.display="flex"
var ratingbutton=document.getElementById("rating-button")
ratingbutton.addEventListener("click",function(){
    swal({
        icon:"warning",
        title:"rate the dish",
        text:"work in progress"
    })
})
var orderbutton=document.getElementById("order-button")
orderbutton.addEventListener("click",function(){
    swal({
        icon:"success",
        title:"thanks for order",
        text:"your order will be served soon"
    })
})
    },
    handlemarkerlost:function(){
var buttondiv=document.getElementById("button-div")
buttondiv.style.display="none"
    }
})