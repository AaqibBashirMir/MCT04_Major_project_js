let input_search=document.querySelector("#search_input");
let form_search=document.querySelector("#search_form");
let recent_search_element=document.querySelector(".recent_search");
let main_container=document.querySelector(".outer_product_container");
let low_to_high=document.getElementById("lowTohigh");
let high_to_low=document.getElementById("highTolow");
let popularity=document.getElementById("popularity");


let recentAarry=["slipper","sneaker","beauty"];
form_search.addEventListener("submit",(e)=>{
    e.preventDefault();
    // alert("welcome to flipkart")
    recentAarry.unshift(input_search.value);
    // console.log(recentAarry);
    renderRecent();
});



function renderRecent(){
    let recent_search_html='';
    recentAarry.forEach(el=>{
        recent_search_html+=`
        
          <div class="recent_list">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p>${el}</p>
              </div>
              
        `
    })
    recent_search_element.innerHTML=recent_search_html ;

}
renderRecent();

let dataArray=[




        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/v/9/j/usb-to-4-usb-a-ports-bestor-original-imaghz6ufc255zwk.jpeg?q=70",
        
        title: "Bestor USB Hub Multiport Adapter for MacBook Pro Air M1...",
        
        rating: 4.5,
        
        flipkartAssured: true,
        
        price: 499.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: true,
        
        specialPrice: 449.99,
        
        discountPrice: 50.00,
        
        popularity: 200,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/q/b/r/adapter-expansion-for-pc-notebook-laptop-computer-mac-linux-original-imaghgwvxh8ynsze.jpeg?q=70",
        
        title: "Bestor 3 Port USB Hub High Speed Splitter Plug ,Data US...",
        
        rating: 4.2,
        
        flipkartAssured: false,
        
        price: 299.99,
        
        deliveryIn1Day: false,
        
        noCostEMI: true,
        
        specialPrice: 279.99,
        
        discountPrice: 20.00,
        popularity: 100,
        
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/l2dmky80/usb-gadget/h/a/l/por-1572-portronics-original-imagdq8hbzkfu8yj.jpeg?q=70",
        
        title: "Portronics Mport 4C USB 2.0 Hub with 4USB Ports POR-157...",
        
        rating: 3.9,
        
        flipkartAssured: true,
        
        price: 699.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: false,
        
        specialPrice: 599.99,
        
        discountPrice: 100.00,
        popularity: 500,
        
        
        },
        
        {
        
        image:"https://rukminim2.flixcart.com/image/612/612/ksgehzk0/usb-gadget/q/c/q/usb-hub-zeb-90hb-zebronics-original-imag6ymzfeyuevmt.jpeg?q=70",
        
        title: "ZEBRONICS 4 Port ZEB-90HB USB Hub",
        
        rating: 4.7,
        
        flipkartAssured: true,
        
        price: 199.99,
        
        deliveryIn1Day: false,
        
        noCostEMI: true,
        
        specialPrice: 179.99,
        
        discountPrice: 20.00,
        popularity: 900,
        
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/kw5ag7k0/laptop-accessories-combo/d/s/j/mport-31-1-portronics-original-imag8vufkje2revf.jpeg?q=70",
        
        title: "Portronics Mport 31 USB Hub (4-in-1) Multiport Adapter ...",
        
        rating: 4.3,
        
        flipkartAssured: true,
        
        price: 899.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: true,
        
        specialPrice: 849.99,
        
        discountPrice: 50.00,
        popularity: 10,
        
        
        image: "https://rukminim2.flixcart.com/image/612/612/koad9jk0/usb-gadget/x/h/w/100hb-zebronics-original-imaf8r2gbb3rzqfh.jpeg?q=70",
        
        title: "ZEBRONICS 100HB High Speed ZEB-100HB USB Hub",
        
        rating: 4.0,
        
        flipkartAssured: false,
        
        price: 399.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: false,
        
        specialPrice: 359.99,
        
        discountPrice: 40.00,
        
        popularity: 50,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/f/m/u/-original-imagppnd3hkuv6k4.jpeg?q=70",
        
        title: "TP-Link UH400 Portable 4-Port USB 3.0 Hub",
        
        rating: 4.8,
        
        flipkartAssured: true,
        
        price: 599.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: true,
        
        specialPrice: 549.99,
        
        discountPrice: 50.00,
        popularity: 1000,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/k/h/9/sd-tf-cards-reader-2-usb-3-0-ports-bestor-original-imaghgw3ahqbjabe.jpeg?q=70",
        
        title: "Bestor 7-in-1 USB-C Hub Multiport Adapter with HDMI, 10...",
        
        rating: 4.1,
        
        flipkartAssured: true,
        
        price: 349.99,
        
        deliveryIn1Day: false,
        
        noCostEMI: false,
        
        specialPrice: 329.99,
        
        discountPrice: 20.00,
        popularity: 2,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/l4rd0280/usb-gadget/0/x/p/with-2-0-x-4-ports-portronics-original-imagfh3y8g8dsefx.jpeg?q=70",
        
        title: "Portronics Mport 4D MPORT4D, POR 1634 USB Hub",
        
        rating: 3.8,
        
        flipkartAssured: true,
        
        price: 799.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: true,
        
        specialPrice: 749.99,
        
        discountPrice: 50.00,
        popularity: 34634,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/l4rd0280/usb-gadget/k/h/f/with-2-0-x-4-ports-portronics-original-imagfh3yzsuyusdz.jpeg?q=70",
        
        title: "Portronics Mport 4D MPORT4D, POR 1634 USB Hub",
        
        rating: 4.6,
        
        flipkartAssured: false,
        
        price: 249.99,
        
        deliveryIn1Day: false,
        
        noCostEMI: true,
        
        specialPrice: 229.99,
        
        discountPrice: 20.00,
        popularity: 9800,
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/l2rwzgw0/usb-gadget/c/c/g/type-c-to-4-usb-a-ports-bestor-original-imagefmhyffgjpvf.jpeg?q=70",
        
        title: "Bestor USB C Hub Multiport Adapter for MacBook Pro Air ...",
        
        rating: 4.4,
        
        flipkartAssured: true,
        
        price: 599.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: false,
        
        specialPrice: 579.99,
        
        discountPrice: 20.00,
        popularity: 201,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/s/s/l/hc000016-lap-ph-4u-honeywell-original-imagtvjrxrmmyswh.jpeg?q=70",
        
        title: "Honeywell 4in1 Ultra Slim Multiport Type C Hub to 1xUSB...",
        
        rating: 4.9,
        
        flipkartAssured: false,
        
        price: 179.99,
        
        deliveryIn1Day: false,
        
        noCostEMI: true,
        
        specialPrice: 169.99,
        
        discountPrice: 10.00,
        popularity: 199,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/kwqq1zk0/usb-gadget/p/h/p/por-1485-portronics-original-imag9cz4kqpznpvt.jpeg?q=70",
        
        title: "Portronics MPORT 31C Type C to 4 USB-A Ports POR-1485 U...",
        
        rating: 4.2,
        
        flipkartAssured: true,
        
        price: 899.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: true,
        
        specialPrice: 849.99,
        
        discountPrice: 50.00,
        popularity: 2300,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/khtghow0-0/usb-gadget/e/l/t/zeb-ta500u-4-in-1-zebronics-original-imafxqygfz3gjfuf.jpeg?q=70",
        
        title: "ZEBRONICS 4 in 1 USB Type C Multiport Adapter Zeb TA500...",
        
        rating: 4.3,
        
        flipkartAssured: false,
        
        price: 449.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: false,
        
        specialPrice: 429.99,
        
        discountPrice: 20.00,
        popularity: 990,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/kfeamq80/usb-gadget/g/r/m/3-0-with-charging-function-amkette-original-imafvv3kfdghsaca.jpeg?q=70",
        
        title: "AMKETTE 4 Port SuperSpeed 3.0 with charging function US...",
        
        rating: 4.7,
        
        flipkartAssured: true,
        
        price: 299.99,
        
        deliveryIn1Day: false,
        
        noCostEMI: true,
        
        specialPrice: 269.99,
        
        discountPrice: 30.00,
        popularity: 1000,
        
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/jtd98y80/usb-gadget/g/3/f/uh700-tp-link-original-imafeqh2anw6gph4.jpeg?q=70",
        
        title: "TP-Link 3.0 7-Port UH700 USB Hub",
        
        rating: 4.0,
        
        flipkartAssured: true,
        
        price: 699.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: true,
        
        specialPrice: 649.99,
        
        discountPrice: 50.00,
        popularity: 0,
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/a/q/r/ocs-0250a-oneclickshopping-original-imags4ewuhrmfdxw.jpeg?q=70",
        
        title: "Oneclickshopping Mini Portable USB Vacuum Cleaner OCS-0...",
        
        rating: 3.9,
        
        flipkartAssured: false,
        
        price: 549.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: false,
        
        specialPrice: 499.99,
        
        discountPrice: 50.00,
        popularity: 240,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/i/i/s/hc000011-lap-nph-4u-blk-honeywell-original-imaggg4hkzmdst2u.jpeg?q=70",
        
        title: "Honeywell 4 in 1 USB Hub 2.0, 1.2 Meter(4 feet) Cable, ...",
        
        rating: 4.5,
        
        flipkartAssured: false,
        
        price: 499.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: true,
        
        specialPrice: 469.99,
        
        discountPrice: 30.00,
        popularity: 560,
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/khavrm80/usb-gadget/h/r/c/por-1159-portronics-original-imafxcekdjcdtah4.jpeg?q=70",
        
        title: "Portronics Mport 4A USB 3.0 POR-1159 USB Hub",
        
        rating: 4.6,
        
        flipkartAssured: true,
        
        price: 349.99,
        
        deliveryIn1Day: true,
        
        noCostEMI: false,
        
        specialPrice: 329.99,
        
        discountPrice: 20.00,
        popularity: 299,
        
        
        },
        
        {
        
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/f/d/4/-original-imaggbngtqzeaz9z.jpeg?q=70",
        
        title: "ZEBRONICS Zeb-150HB with 4 USB Ports and LED Indicator ...",
        
        rating: 3.8,
        
        flipkartAssured: false,
        
        price: 649.99,
        
        deliveryIn1Day: false,
        
        noCostEMI: true,
        
        specialPrice: 599.99,
        
        discountPrice: 50.00,
        popularity: 200,
        
        },
        
    ]
    function productContainer(sortedAraay){
        main_container.innerHTML="";
        sortedAraay.forEach(e=>{
            
        
        let container=document.createElement("div");
        container.classList.add('product_container');
        // append data
        container.innerHTML=
        `
        <img src="${e.image}">
        <p>${e.title}</p>
        <div class="rating">
            <span class="rating_star">${e.rating}<i class="fa-solid fa-star"></i></span>
            <span>(5015)</span>
            
           

        </div>
        <div class="assured">
            <img src="./assets/images/fa_62673a.png" alt="" class="assured_img">
        </div>
        
       <div class="prize">
        <span>&#8377 </span><span>${e.specialPrice}</span>
        <span class="original_prize">&#8377 ${e.price}</span>
        
       </div>
       <div class="off">
        <span>${Math.floor((e.specialPrice/e.price)*100)}% off</span>
       </div>
        `
        main_container.appendChild(container)
    })
    
    //soting functiion low to high prize


    }
    productContainer(dataArray);

    low_to_high.addEventListener("click",(e)=>{
        e.preventDefault();
        let data=[...dataArray]
        data.sort((a,b)=>{
         return a.specialPrice-b.specialPrice
        })
        productContainer(data);
    })

    high_to_low.addEventListener("click",(e)=>{
        e.preventDefault();
        let data=[...dataArray];
        data.sort((a,b)=>{
            return b.specialPrice-a.specialPrice;
        })
        productContainer(data);
    })
    popularity.addEventListener("click",(e)=>{
        e.preventDefault();
        let data=[...dataArray]
        data.sort((a,b)=>{
         return a.popularity-b.popularity
        })
        productContainer(data);
    })
  
//filter on price

let rangeOfPrize=document.getElementById("rangeOfPrize");
rangeOfPrize.addEventListener("input",(e)=>{
    // console.log(e.target.value);
})


let assured_checkbox=document.getElementById("assured_checkbox");
assured_checkbox.addEventListener('click',(e)=>{
   
    if (assured_checkbox.checked){
        let data=[...dataArray]
       let filter_data= data.filter((ele)=>{
            return ele.flipkartAssured==true
        })
        productContainer(filter_data)
    }
    else{
        productContainer(dataArray)
    }



})
//filter in i day delivery or not
let delivery_checkbox=document.getElementById("delivery_in_1day");
delivery_checkbox.addEventListener('click',(e)=>{
    if (delivery_checkbox.checked){
        let data=[...dataArray]
       let filter_data= data.filter((ele)=>{
            return ele.deliveryIn1Day==true
        })
        productContainer(filter_data)
        
    }
    else{
        productContainer(dataArray)
    }
})
//filter in emi
let emi_checkbox=document.getElementById("no_emi");
emi_checkbox.addEventListener('click',(e)=>{
    if (emi_checkbox.checked){
        let data=[...dataArray];
        let emi_data=data.filter((ele)=>{
            return ele.noCostEMI==true;
        })
        productContainer(emi_data);
    }
    else{
        productContainer(dataArray);
    }
})

//filter of 4 star rating product
let fourstar_checkbox=document.getElementById("rating4star");
fourstar_checkbox.addEventListener("click",(e)=>{
    if (fourstar_checkbox.checked){
        let data=[...dataArray];
        let fourstar_data=data.filter((ele)=>{
            return ele.rating>=4;
        })
        productContainer(fourstar_data);
    }
    else{
        productContainer(dataArray)
    }
})

//filter of 3 star rating product
let threestar_checkbox=document.getElementById("rating3star");
threestar_checkbox.addEventListener("click",(e)=>{
    if (threestar_checkbox.checked){
        let data=[...dataArray];
        let threestar_data=data.filter((ele)=>{
            return ele.rating==3 || ele.rating<4; 
        })
        productContainer(threestar_data);
    }
    else{
        productContainer(dataArray)
    }
})

//filter of 2 star rating product
let twostar_checkbox=document.getElementById("rating2star");
twostar_checkbox.addEventListener("click",(e)=>{
    if (twostar_checkbox.checked){
        let data=[...dataArray];
        let twostar_data=data.filter((ele)=>{
            return ele.rating==2 || ele.rating<3; 
        })
        productContainer(twostar_data);
    }
    else{
        productContainer(dataArray)
    }
})

//filter of 1 star rating product
let onestar_checkbox=document.getElementById("rating1star");
onestar_checkbox.addEventListener("click",(e)=>{
    if (onestar_checkboxchecked){
        let data=[...dataArray];
        let onestar_data=data.filter((ele)=>{
            return ele.rating==1 || ele.rating<2; 
        })
        productContainer(onestar_data);
    }
    else{
        productContainer(dataArray)
    }
})



