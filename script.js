let nameOfTheMainPlate;
let priceOfTheMainPlate;
let nameOfTheDrink;
let priceOfTheDrink;
let nameOfTheDesert;
let priceOfTheDesert;

function selectMainPlate(parameter){

    const selectedItem = document.querySelector('.main-course .selected')
    if(selectedItem){
        selectedItem.classList.remove('selected')
    }

    const selected = document.querySelector(parameter);
    selected.classList.add('selected')

    const newSelected = document.querySelector('.main-course .visible')
    if(newSelected ){
        newSelected.classList.remove('visible')
    }

    let iconId = parameter + 'icon'
    document.querySelector(iconId).classList.add('visible')

    nameOfTheMainPlate = document.querySelector('.main-course .selected h2').innerHTML
    priceOfTheMainPlate = document.querySelector('.main-course .selected .price').innerHTML.replace(',', '.')

    orderClosing()
}

function selectDrinks(parameter){

    const selectedItem = document.querySelector('.drinks .selected')
    if(selectedItem){
        selectedItem.classList.remove('selected')
    }

    
    document.querySelector(parameter).classList.add('selected')

    const newSelected = document.querySelector('.drinks .visible')
    if(newSelected ){
        newSelected.classList.remove('visible')
    }

    nameOfTheDrink = document.querySelector('.drinks .selected h2').innerHTML
    priceOfTheDrink = document.querySelector('.drinks .selected .price').innerHTML.replace(',', '.')

    let iconId = parameter + 'icon'
    document.querySelector(iconId).classList.add('visible')
     
    orderClosing()

}

function selectDesert(parameter){

    const selectedItem = document.querySelector('.desert .selected')
    if(selectedItem){
        selectedItem.classList.remove('selected')
    }

    const selected = document.querySelector(parameter);
    selected.classList.add('selected')

    const newSelected = document.querySelector('.desert .visible')
    if(newSelected ){
        newSelected.classList.remove('visible')
    }
    

    nameOfTheDesert = document.querySelector('.desert .selected h2').innerHTML
    priceOfTheDesert = document.querySelector('.desert .selected .price').innerHTML.replace(',', '.')

    let iconId = parameter + 'icon'
    document.querySelector(iconId).classList.add('visible')

    orderClosing()

}

function orderClosing(){

    const mainCourseSelected = document.querySelector('.main-course .selected')
    const drinksSelected = document.querySelector('.drinks .selected')
    const desertSelected = document.querySelector('.desert .selected')

    const botao = document.querySelector('.close-order')
    const hiddenButton = document.querySelector('.trigger')

    if((mainCourseSelected && drinksSelected && desertSelected)){
        botao.classList.add('visible');
        botao.classList.add('order-green');
        botao.innerHTML = 'Fechar pedido';
        hiddenButton.classList.remove('.hidden')
    }  
}


function orderOnWpp(){

    let messsageToTheClient =
		"Olá, gostaria de fazer um pedido! \n " +
		"Prato: " +
		nameOfTheMainPlate +
		"\n Bebida: " +
		nameOfTheDrink +
		"\n Sobremesa: " +
		nameOfTheDesert +
		"\nTotal do pedido: R$ " +
		(Number(priceOfTheMainPlate) + Number(priceOfTheDrink) + Number(priceOfTheDesert)).toFixed(2)
        console.log(messsageToTheClient)

    	let link = "https://wa.me/5548991213223?text=" + encodeURIComponent(messsageToTheClient)

	    window.open(link, "_blank")
}