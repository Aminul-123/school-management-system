
import { class1, class2 , class3, class4, questionArrAccordion } from "./students.js"
//element selectors
const form = document.querySelector('form')

const formHtml = `<div>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Type your name" required >
            </div>
            <div>
                <label for="id-num">ID</label>
                <input type="text" id="id-num"  placeholder="Type ID number" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Type your password" required>
            </div>
            
            <button class="btn-login btn">Login</button>`

form.insertAdjacentHTML('afterbegin', formHtml)

const input_name = document.getElementById('name')
const input_ID = document.getElementById('id-num')
// console.log(inputName);
const input_password = document.getElementById('password');
const loginBtn = document.querySelector('.btn-login');
const loginForm = document.querySelector('.login-form');
const imgSlide = document.querySelector('.img-slide');
const studentList = document.querySelector('.student-list')
//btns
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')

const _class1 = document.querySelector('.class-1')
const _class2 = document.querySelector('.class-2')
const _class3 = document.querySelector('.class-3')
const _class4 = document.querySelector('.class-4')
//accordions
const accordions = document.querySelector('.accordions');

const loginState = {
    name : '',
    id : '',
    password: ''
}


input_name.addEventListener('change', (e) => {
        input_name.value = e.target.value
        loginState.name = input_name.value
})
input_ID.addEventListener('change', (e) => {
    input_ID.value = e.target.value
    loginState.id = input_ID.value
})
input_password.addEventListener('change', (e) => {
    input_password.value = e.target.value;
    
    loginState.password = input_password.value
})
loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(loginState);

    if (loginState.name === 'Alex' || loginState.id === '222' || loginState.password=== '222' ) {
        alert('Login Successful')
        loginForm.classList.add('hide')
        document.querySelector('.main-cont').classList.toggle('hide'); 
    } else {
        alert('Login Failed !');
    } 
})
setTimeout(function () {
    alert('By Default our application uses a fake authentication, so use name : alex , id: 123 and password : 222')
}, 2000)

//img slider
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const img1 = 'img/_20772283-189c-4510-b1af-b645151d2742.jpg'
const img2 = "img/_6561e201-c527-45e1-a7a3-1e479d1e3353.jpg"
const img3 = "img/_77355d3a-1a15-4254-8ed2-b9ef4428e1fc.jpg"
const img4 = "img/_d928eee7-399a-4c22-916a-8b3b4e09c24c.jpg"
const img5 = "img/_e6e00022-cb22-40a4-b350-a136ef5cf88d.jpg"
const img6 = "img/_eac93dbc-45ab-4707-a93a-eea5f77d076f.jpg"

const imgArr = [img1, img2, img3, img4, img5, img6]
let counter = 1

imgArr.map((elem) => {

    let imgHtml = `<img src=${elem} alt="img" class="sliding-img">`;
    // console.log(imgHtml)
    imgSlide.insertAdjacentHTML('afterbegin', imgHtml);
})

const slides = document.querySelectorAll('.sliding-img')
// console.log(slides);

slides.forEach((elem, idx) => {
    elem.style.left = `${idx * 25}rem`;
})

const slideImgFunc = function () {
    slides.forEach((elem) => {
        elem.style.transform = `translateX(-${counter * 25}rem)`
    })
}
next.addEventListener('click', () => {
    slideImgFunc()
    if(counter < 5) {
        counter = counter + 1;
    } else {
        counter = 0
    }
})
prev.addEventListener('click', () => {
    slideImgFunc()
    if (counter >= 0) {
        counter = counter - 1
    } else {
        counter = 5;
    }
})



// STUDENT INFO. TABS
const getStudentList = function (students, class_name ) {
    students.reverse().forEach((student) => {
        const singleStudentHtml =  ` <div class='student-data'>
        <span>${student.id}</span>
        <span>${student.name}</span>
        <span>${student.roll_no}</span>
       </div>`
      // console.log(singleStudentHtml);
       class_name.insertAdjacentHTML('afterbegin', singleStudentHtml)
    })
}
getStudentList(class1, _class1)
getStudentList(class4, _class4)
getStudentList(class3 , _class3)
getStudentList(class2, _class2)

const setZ_IndexToZero = function (first, sec, third, firstBtn, secBtn, thirdBtn) {
    first.style.zIndex = 0
    sec.style.zIndex = 0
    third.style.zIndex = 0
    firstBtn.style.backgroundColor = 'rgb(129, 129, 250)'
    secBtn.style.backgroundColor = 'rgb(129, 129, 250)'
    thirdBtn.style.backgroundColor = 'rgb(129, 129, 250)'
}
const btnClicked = function (b1, c1, c2, c3, c4, b2, b3, b4) {
    // b1 -> btn to apply
    //c1 -> class to  apply with respect to its btn

    b1.addEventListener('click', () => {
        c1.style.zIndex = 100;
        b1.style.backgroundColor = 'orange'
        //all other btns and classes to pass in the func below
        setZ_IndexToZero(c2, c3, c4, b2, b3, b4)
    })
}

//for btn 1
btnClicked(btn1, _class1, _class2, _class3, _class4, btn2, btn3, btn4 )
//for btn 2
//order in which args is passed  matters
btnClicked(btn2, _class2, _class1, _class3, _class4, btn1, btn3, btn4 )
//for btn 3
btnClicked(btn3, _class3, _class1, _class2, _class4, btn1, btn2, btn4 )
//for btn 4
btnClicked(btn4, _class4,  _class1, _class2, _class3,  btn1, btn3, btn2)



//accordions q and ans
questionArrAccordion.forEach((question, idx) => {
    const questionHtml = `<div class="single-qna">
                        <p class="q"> <span> (${idx + 1}) </span> ${question.q} <span class='show-down'>   &#x25BC;  </span>
                         <span class='show-up hide'>
                           &#x25B2;
                        </span> </p> 
                        <p class="ans hide">Answer:  ${question.ans}</p>
                    </div>`
    accordions.insertAdjacentHTML('beforebegin', questionHtml)
})

const allAns = document.querySelectorAll('.ans');
allAns[0].classList.remove('hide')


function makeHidden (class_name, i) {
        document.querySelectorAll(class_name)[i].classList.toggle('hide');
}
document.querySelectorAll('.q').forEach((elem, idx) => {
    elem.addEventListener('click', () => {
        makeHidden('.ans', idx)
        makeHidden('.show-down', idx)
        makeHidden('.show-up', idx)
    })
})
