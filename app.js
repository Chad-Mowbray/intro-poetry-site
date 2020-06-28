// let stuff = require("stuff.json")


// let stuff = {
//     "nuwas": ["يقولونَ شهرُ الصوم شهرٌ مبارَكٌ"]

// }


let title = document.querySelector('h1')
let base = document.querySelector('#base')

function loadPoem() {

    stuff.nuwas.forEach( (element, i) => {

        element.forEach( (elem, i) => {

            console.log(elem)
            let e = document.createElement('span')
            let text = document.createTextNode(elem)
            e.appendChild(text)
            base.appendChild(e)
            if(i == 0) {
                addExtraSpan(base)
            }

        })

        addEmptyPara(base)

        

    });
}


function addExtraSpan(attachTo) {
    let e = document.createElement('span')
    let text = document.createTextNode(' | ')
    e.appendChild(text)
    e.classList.add('span-space')
    attachTo.appendChild(e)
}

function addEmptyPara(attachTo) {
    let e = document.createElement('p')
    e.classList.add('vertical-space')
    attachTo.appendChild(e)
}