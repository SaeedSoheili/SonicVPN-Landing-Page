let $ = document
let header2BigBtn = $.querySelector(".header2BigBtn")
let header2BottemMoreInfoTxt = $.querySelector(".header2BottemMoreInfoTxt")
let header2BottemMoreInfoImg = $.querySelector(".header2BottemMoreInfoImg")

let salePlans = [
    {id: 1, time: "یک ماهه", price: "450,000", image: "assets/1-month.png"},
    {id: 2, time: "دو ماهه", price: "650,000", image: "assets/2-month.png"},
    {id: 3, time: "سه ماهه", price: "850,000", image: "assets/3-month.png"},
]

let divBody1BodyBoxTime1 = $.getElementById("divBody1BodyBoxTime1")
let divBody1BodyBoxTime2 = $.getElementById("divBody1BodyBoxTime2")
let divBody1BodyBoxTime3 = $.getElementById("divBody1BodyBoxTime3")

let divBody1BodyBoxPrice1 = $.getElementById("divBody1BodyBoxPrice1")
let divBody1BodyBoxPrice2 = $.getElementById("divBody1BodyBoxPrice2")
let divBody1BodyBoxPrice3 = $.getElementById("divBody1BodyBoxPrice3")

let divBody1BodyBoxImage1 = $.getElementById("divBody1BodyBoxImage1")
let divBody1BodyBoxImage2 = $.getElementById("divBody1BodyBoxImage2")
let divBody1BodyBoxImage3 = $.getElementById("divBody1BodyBoxImage3")

let productBox1Flag = 0
let productBox2Flag = 1
let productBox3Flag = 2

let nextProduct = $.querySelector(".divBody1HeaderArrowRight")
let prevProduct = $.querySelector(".divBody1HeaderArrowLeft")

let divBody1BodyMidBox = $.querySelector(".divBody1BodyMidBox")
let divBody1BodySideBox = $.querySelectorAll(".divBody1BodySideBox")
let divBody1BodyMidBoxOpacity = 0


let shareProductsButtons = $.querySelectorAll(".shareThisProduct")
let shareProductText;



const counters = document.querySelectorAll('.counter');
const speed = 2000; // The speed in milliseconds at which the numbers grow

const options = {
  rootMargin: '0px',
  threshold: 0.5 // The percentage of the element that needs to be visible before the animation starts
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      let current = 0;
      const interval = setInterval(() => {
        if (current < target) {
          current += Math.ceil(target / (speed / 16));
          entry.target.innerText = '+' + current;
        } else {
          clearInterval(interval);
        }
      }, 30); // The interval time in milliseconds
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});




shareProductsButtons.forEach(function (product) {
    shareProductText = "خریداشتراک " + product.parentElement.children[1].innerHTML + " وی پی ان " + product.parentElement.children[3].innerHTML + " تومان"
    product.setAttribute("href", "https://t.me/share/url?url=https://buyvpn.nasaa&text="+ shareProductText)
})

function goNextProduct () {
    divBody1BodyMidBoxOpacity = 0
    divBody1BodyMidBox.style.opacity = 0;
    divBody1BodyMidBoxOpacityChange = setInterval(function () {
        divBody1BodyMidBoxOpacity += 0.1
        if (divBody1BodyMidBoxOpacity >= 1) {
            clearInterval(divBody1BodyMidBoxOpacityChange)
        }
        divBody1BodyMidBox.style.opacity = divBody1BodyMidBoxOpacity;
        nextProduct.style.opacity = divBody1BodyMidBoxOpacity;
        divBody1BodySideBox.forEach(function (sideBox) {
            sideBox.style.opacity = divBody1BodyMidBoxOpacity;
        })
    },50)

    productBox1Flag += 1
    productBox2Flag += 1
    productBox3Flag += 1

    if (productBox3Flag == 3) {
        productBox1Flag = 2
        productBox2Flag = 0
        productBox3Flag = 1
    }
    if (productBox2Flag == 3) {
        productBox1Flag = 0
        productBox2Flag = 1
        productBox3Flag = 2
    }
    if (productBox1Flag == 3) {
        productBox1Flag = 1
        productBox2Flag = 2
        productBox3Flag = 0
    }

    divBody1BodyBoxTime1.innerHTML = salePlans[productBox1Flag].time 
    divBody1BodyBoxTime2.innerHTML = salePlans[productBox2Flag].time
    divBody1BodyBoxTime3.innerHTML = salePlans[productBox3Flag].time

    divBody1BodyBoxPrice1.innerHTML = salePlans[productBox1Flag].price
    divBody1BodyBoxPrice2.innerHTML = salePlans[productBox2Flag].price
    divBody1BodyBoxPrice3.innerHTML = salePlans[productBox3Flag].price

    divBody1BodyBoxImage1.src = salePlans[productBox1Flag].image
    divBody1BodyBoxImage2.src = salePlans[productBox2Flag].image
    divBody1BodyBoxImage3.src = salePlans[productBox3Flag].image
}

function goPrevProduct () {
    divBody1BodyMidBoxOpacity = 0
    divBody1BodyMidBox.style.opacity = 0;
    divBody1BodyMidBoxOpacityChange = setInterval(function () {
        divBody1BodyMidBoxOpacity += 0.1
        if (divBody1BodyMidBoxOpacity >= 1) {
            clearInterval(divBody1BodyMidBoxOpacityChange)
        }
        divBody1BodyMidBox.style.opacity = divBody1BodyMidBoxOpacity;
        prevProduct.style.opacity = divBody1BodyMidBoxOpacity;
        divBody1BodySideBox.forEach(function (sideBox) {
            sideBox.style.opacity = divBody1BodyMidBoxOpacity;
        })
    },50)


    productBox1Flag -= 1
    productBox2Flag -= 1
    productBox3Flag -= 1


    if (productBox3Flag == -1) {
        productBox1Flag = 2
        productBox2Flag = 0
        productBox3Flag = 1
    }
    if (productBox2Flag == -1) {
        productBox1Flag = 0
        productBox2Flag = 1
        productBox3Flag = 2
    }
    if (productBox1Flag == -1) {
        productBox1Flag = 1
        productBox2Flag = 2
        productBox3Flag = 0
    }


    divBody1BodyBoxTime1.innerHTML = salePlans[productBox1Flag].time 
    divBody1BodyBoxTime2.innerHTML = salePlans[productBox2Flag].time
    divBody1BodyBoxTime3.innerHTML = salePlans[productBox3Flag].time

    divBody1BodyBoxPrice1.innerHTML = salePlans[productBox1Flag].price
    divBody1BodyBoxPrice2.innerHTML = salePlans[productBox2Flag].price
    divBody1BodyBoxPrice3.innerHTML = salePlans[productBox3Flag].price

    divBody1BodyBoxImage1.src = salePlans[productBox1Flag].image
    divBody1BodyBoxImage2.src = salePlans[productBox2Flag].image
    divBody1BodyBoxImage3.src = salePlans[productBox3Flag].image
}



function scrollTo (element) {
    element.scrollIntoView({behavior: 'smooth'});
} 





header2BigBtn.addEventListener("click", function () {
    scrollTo(divBody1HeaderTitle)
})
header2BottemMoreInfoTxt.addEventListener("click", function () {
    scrollTo(divHeader3Title)
})
header2BottemMoreInfoImg.addEventListener("click", function () {
    scrollTo(divHeader3Title)
})

nextProduct.addEventListener("click", goNextProduct)
prevProduct.addEventListener("click", goPrevProduct)

