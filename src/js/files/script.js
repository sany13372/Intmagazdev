// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
    //const rightBlock = document.querySelector('.right-block__ic1');
    /*
    const rightBlocks = document.querySelectorAll('.right-block');
    if (rightBlocks.length) {
        rightBlocks.forEach( function(rightBlock) {
            rightBlock.addEventListener("click", function (e) {
                rightBlock.classList.toggle('_active');
            });
        });
    }
    */
    /*
    const rightBlocks = document.querySelector('.right-block__ic1');
    if (rightBlocks) {
        rightBlocks.addEventListener("click", function (e) {
            rightBlocks.classList.toggle('_active');
        });
    }
    */
    /*
    document.addEventListener("click", function (e) {
        const moment = e.target;
        if(moment.closest('.right-block__ic1')){
            const popupp = document.querySelector('.right-block__popup');
            popupp.classList.toggle('active-popup');
            if (popupp.classList.contains('active-popup')) {
                popupp.innerHTML = 'товар добавлен в сравнения';
            }else{
                popupp.innerHTML ="";в
            }
        }
    });
    */

    document.addEventListener("click", little ); 
    const blockPopup = document.querySelector('.right-block__popup');
    const spollerDitIc = document.querySelector(".spoller-dit__ic");

        function  little (e){
            const targetElement = e.target;
            if(targetElement.closest(".right-block__ic1")){
                blockPopup.classList.toggle('_active');
            }
            if (targetElement.closest('.spoller-dit__title')) {
                spollerDitIc.classList.toggle('_active');
            }
        }

        
        const momentbut = document.querySelector('.comapany__button');
        const blocksRightBodys = document.querySelectorAll('.blockright-body__wraper');
        const productBlocks =document.querySelectorAll('.production__block1');
        const blocks =document.querySelectorAll('.block-hidden');
        const companyIco = document.querySelector('.comapany__ico1');
        blocks.forEach( block => {
            let num = 0;
            momentbut.addEventListener("click", function (e) {
        const targetElement = e.target;
        if (targetElement.closest('.comapany__button')) {
            num++;
            console.log(num);
            if (num%2==0) {
                block.style.display = 'none';
                companyIco.classList.remove('_active')
            }else{ block.style.display = 'block';
            companyIco.classList.add('_active')
        }
        }
    });
        });
        blocksRightBodys.forEach(blocksRightBody => {
            console.log(blocksRightBody);
            let num = 0;
            momentbut.addEventListener("click", function (e) {
                const targetElement = e.target;
                if (targetElement.closest('.comapany__button')) {
                    num++;
                    console.log(num);
                    if (num%2==0) {
                        blocksRightBody.style.display = 'none';
                        companyIco.classList.remove('_active')
                    } else{blocksRightBody.style.display = 'block';
                    companyIco.classList.add('_active')
                    }
                }
        });
    });
    /*
    productBlocks.forEach(productBlock => {
        let num = 0;
            momentbut.addEventListener("click", function (e) {
                const targetElement = e.target;
                if (targetElement.closest('.comapany__button')) {
                    num++;
                    console.log(num);
                    if (num%2==0) {
                        productBlock.style.display = 'none';
                        companyIco.classList.remove('_active');
                    } else{productBlock.style.display = 'block';
                    companyIco.classList.add('_active')
                    }
                }
        });
    });
    */

    /*
     let num = 0;
            momentbut.addEventListener("click", function (e) {
                const targetElement = e.target;
                if (targetElement.closest('.comapany__button')) {
                    num++;
                    console.log(num);
                    if (num%2==0) {
                        blocksRightBody.style.display = 'none';
                    } else{block.style.display = 'block';

                    }
                }
        });
        */
        const buttonBaskets = document.querySelectorAll('.body__button1');
        const basketBody = document.querySelector('.left-backet__body-card');
        const ordersBlock = document.querySelector('.orders');
        
         //   buttonBasket.addEventListener("click", function () {
         //   });
            function buttonBaske(buttonBasket) {
                buttonBaskets.forEach(buttonBasket => {
                    
                });
            }
            const checkboxdata = document.querySelector('[data-checkbox]');
            const checkboxdata2 = document.querySelector('[data-checkbox2]');
            const decorationButton = document.querySelector('.decoration-left__button');
            const buttonRegistr = document.querySelector('[data-but1]');
            const buttonZakaz = document.querySelector('[data-but2]');
            const korzina = document.querySelector('.left-backet__body-card');
            const blockss =document.querySelector('.mass-kalkulator__title');
           // const blockrevo =basketButton.closest('.orders');
                document.addEventListener("click", function (e) {
                    const targetElement = e.target;
                    if (targetElement.closest('.orders__block-ic')) {
                        targetElement.closest('.orders').remove();
                    }
                    if (targetElement.closest('.body__button1')) {
                        let block = targetElement.closest('.cart-medical');
                        let blockkorzina = korzina.appendChild(block);
                       // korzina.appendChild(block);
                    }
                    //Условие калькулятора увелечение или уменьшение 
                    if (targetElement.closest('.mass-kalkulator__munes') || targetElement.closest('.mass-kalkulator__plus')) {
                        let bodyCard = targetElement.closest('.orders');
                        let counter = bodyCard.querySelector('.mass-kalkulator__title');
                        //Увелечение
                        if (targetElement.closest('.mass-kalkulator__munes')) {
                            counter.innerHTML = ++counter.innerHTML;
                        }
                        //Уменьшение 
                        if (targetElement.closest('.mass-kalkulator__plus')) {
                            if (counter.innerHTML > 1) {
                                counter.innerHTML = --counter.innerHTML;
                            }
                        }
                    }
                });
                //========================================================================================================================================================
            let formCall =document.querySelector('.popup__call'),
            inputNameuser = formCall.getElementsByTagName('input')[0],
            inputTeluser = formCall.getElementsByTagName('input')[1],
            inputTextuser = document.getElementById('input-textuser'),
            buttonForm = document.querySelector('.block-popup1__button'),
            popupEror = document.createElement('div');
            let popupEror2 = popupEror.innerHTML = 'Не заполнено поле';
            popupEror.classList.add('popup-eror');
            formCall.addEventListener("submit", function (e) {
                e.preventDefault();
                if (inputTeluser.value == ''  ) {
                    
                    inputTeluser.style.outlineColor = 'red'
                }
                if (inputNameuser.value == '') {
                    inputNameuser.style.outlineColor = 'red'
                }
            });
            formCall.appendChild(popupEror);
            let da =function(a,b) {
                return a + b;
            };
            function User(name, age) {
                this.name = name ,
                this.age = age
            }
            let Alex = new User('Alex','32')
            console.log(Alex);
            let funrDo = function jhony(params) {
                console.log(jhony);
            };
            let arr = [1,2,3,4,5],
            arr2 = [...arr, 6,7,8];
            console.log(arr2);

            //========================================================================================================================================================
            function polidrom(parament) {
                let massiv = parament.split('');
                let setMassiv = massiv.reverse();
                let readyMassiv = setMassiv.join('');
                if (parament.toLowerCase() == readyMassiv.toLowerCase()) {  
                    return true
                }   else{ return false}
                
            }
            console.log(polidrom('Дад'));
            const massiv = [-1,3,4,5,6,7,8,7,8]
            const sigh = function (params) {
              let result = 0;
              for (let index = 0; index < params.length; index++) {
                if (Math.sign(params[index]) !==1  ) {
                  ++result
                }
              }
            }
            console.log(sigh(massiv));