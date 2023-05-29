

//=============================================================cart close button===============================================================
function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
	location.reload();
}
//=============================================================cart open and after close reload=================================================
window.addEventListener("popstate", detectHistory);
const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
const cart = document.querySelector('.producstOnCart');
cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
	window.history.pushState({id:1}, null, "");
});

function detectHistory(){
location.reload();
}
//=============================================================cart open and after close reload=================================================



const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);





// =========================================================for smooth scrolling in all device============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =========================================================for smooth scrolling in all device============================








let productsInCart = JSON.parse(localStorage.getItem('Cart'));
if (!productsInCart) {
	productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.product-under');

// ==============================================================total count item price ============================================
//
const countTheSumPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	localStorage.setItem("totalPrice", sum);
	return sum;
}
// ==============================================================total count item price ============================================



// ==============================================================add item section for cart============================================
const updateShoppingCartHTML = function () {  // 3
	localStorage.setItem('Cart', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			
		localStorage.setItem("amit", JSON.stringify(productsInCart));
			

			return `
				<li class="buyItem">
					<img src="${product.image}">
					<div class="deta">
					<div class="quantity">
							<i class="fa button-minus fa-minus" data-id=${product.id} ></i>
							<span class="countOfProduct">${product.count}</span>
							<i class="fa button-plus fa-plus" data-id=${product.id} ></i>
							</div>
						<h2>${product.category}</h2>
						<h5>${product.name}</h5>
						<h3>Size : ${product.select}</h3>
						<h3>Color : ${product.ColorRadio}</h3>
						<h3>${product.productMaterial}</h3>
						<h3>${product.productQuality}</h3>
						<h3>${product.productSeller}</h3>
						<h4>Base Price : &#8377;${product.basePrice}</h4>
						<h6>Total Price : &#8377;${product.price}</h6>
						
							
						<button class="button-zero" data-id=${product.id}>Remove</button>
						
					</div>
				</li>`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		document.querySelector('.line_break').innerHTML = ' Total Amount ' + '    ' + ' = ' + '   &#8377;' + countTheSumPrice();
		document.querySelector('.Items_count').innerHTML = productsInCart.length;

		// cartSumPrice.innerHTML = ' &#8377;' + countTheSumPrice();

	}
	else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h1 class="empty"> :Your shopping Cart is Empty: <a href="index.html">CLICK AND GO FOR SHOPPING</a></h1> ';
		cartSumPrice.innerHTML = '&#8377;' + 0;	  
	}

}

// ==============================================================add item section for cart============================================


function newFunction() {
	document.querySelector('buyNow');
}

function updateProductsInCart(product) { // 2
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	productsInCart.push(product);
}

// ==============================================================each item in cart============================================

products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToCart')) {
			swal("Product Add In To Cart", {
				buttons: false,
				timer: 500,
			  });



			const productID = e.target.dataset.productId;
			const productCategory = item.querySelector('.productCategory').innerHTML;
			const productMaterial = item.querySelector('.product_material').innerHTML;
			const productQuality = item.querySelector('.product_Quality').innerHTML;
			const productSeller = item.querySelector('.product_Seller').innerHTML;
			const productName = item.querySelector('.productName').innerHTML;
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			var radios = document.getElementsByName("color");
    		var selected = Array.from(radios).find(radio => radio.checked);
			var hi = selected.value
			var radis = document.getElementsByName("size");
    		var seleted = Array.from(radis).find(radio => radio.checked);
			var text = seleted.value
			let product = {
				category: productCategory,
				name: productName,
				id: productID,
				select: text,
				ColorRadio: hi,
				productMaterial:productMaterial,
				productQuality:productQuality,
				productSeller:productSeller,
				count: 1,
				productPrice:productPrice,
				price: +productPrice,
				basePrice: +productPrice,
				image: productImage,
			}

			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

// ==============================================================each item in cart============================================


// ==============================================================Quantity============================================

parentElement.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	const isZeroButton = e.target.classList.contains('button-zero');
	if (isPlusButton || isMinusButton || isZeroButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				else if (isZeroButton) {
					productsInCart[i].count = 0
				}

				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}

		}
		updateShoppingCartHTML();
	}
});

updateShoppingCartHTML();
// const isPlusButton = e.target.classList.contains('button-plus');


// function addToCart() {
// 	alert(`
// 	<div class="alert alert-success" role="alert">
//   A simple success alert—check it out!
// </div>
// 	`);
//   }

// $('#myModal').on('shown.bs.modal', function () {
// 	$('#myInput').trigger('focus')
//   })
// ==============================================================Quantity============================================




// ===================================================================for showing size and color=================================================
// ===================================================================size=================================================

const ChooseSizes = document.querySelectorAll('input[name="size"]');
for(const ChooseSize of ChooseSizes){
	ChooseSize.addEventListener('change', SelectedCSize);
}        
function SelectedCSize() {
	if (this.checked) {
		                    //for womens
		document.querySelector('#show_size1').innerText = `:  ${this.value}`;
		document.querySelector('#show_size2').innerText = `:  ${this.value}`;
		document.querySelector('#show_size3').innerText = `:  ${this.value}`;
		document.querySelector('#show_size4').innerText = `:  ${this.value}`;
		document.querySelector('#show_size5').innerText = `:  ${this.value}`;
		document.querySelector('#show_size6').innerText = `:  ${this.value}`;
		document.querySelector('#show_size7').innerText = `:  ${this.value}`;
		document.querySelector('#show_size8').innerText = `:  ${this.value}`;
		document.querySelector('#show_size9').innerText = `:  ${this.value}`;
		document.querySelector('#show_size10').innerText = `:  ${this.value}`;
		document.querySelector('#show_size11').innerText = `:  ${this.value}`;
		document.querySelector('#show_size12').innerText = `:  ${this.value}`;
		document.querySelector('#show_size13').innerText = `:  ${this.value}`;
		document.querySelector('#show_size14').innerText = `:  ${this.value}`;
		document.querySelector('#show_size15').innerText = `:  ${this.value}`;
		                         //for mens
		document.querySelector('#show_sizem1').innerText = `:  ${this.value}`;
		document.querySelector('#show_sizem2').innerText = `:  ${this.value}`;
		document.querySelector('#show_sizem3').innerText = `:  ${this.value}`;
		document.querySelector('#show_sizem4').innerText = `:  ${this.value}`;
	}
}
// ===================================================================color=================================================

const ChooseColors = document.querySelectorAll('input[name="color"]');
for(const ChooseColor of ChooseColors){
	ChooseColor.addEventListener('change', SelectedColor);
}        
function SelectedColor() {
	if (this.checked) {
		                       // for womens
		document.querySelector('#show_color1').innerText = `:  ${this.value}`;
		document.querySelector('#show_color2').innerText = `:  ${this.value}`;
		document.querySelector('#show_color3').innerText = `:  ${this.value}`;
		document.querySelector('#show_color4').innerText = `:  ${this.value}`;
		document.querySelector('#show_color5').innerText = `:  ${this.value}`;
		document.querySelector('#show_color6').innerText = `:  ${this.value}`;
		document.querySelector('#show_color7').innerText = `:  ${this.value}`;
		document.querySelector('#show_color8').innerText = `:  ${this.value}`;
		document.querySelector('#show_color9').innerText = `:  ${this.value}`;
		document.querySelector('#show_color10').innerText = `:  ${this.value}`;
		document.querySelector('#show_color11').innerText = `:  ${this.value}`;
		document.querySelector('#show_color12').innerText = `:  ${this.value}`;
		document.querySelector('#show_color13').innerText = `:  ${this.value}`;
		document.querySelector('#show_color14').innerText = `:  ${this.value}`;
		document.querySelector('#show_color15').innerText = `:  ${this.value}`;
		                        //for mens
		document.querySelector('#show_colorm1').innerText = `:  ${this.value}`;
		document.querySelector('#show_colorm2').innerText = `:  ${this.value}`;
		document.querySelector('#show_colorm3').innerText = `:  ${this.value}`;
		document.querySelector('#show_colorm4').innerText = `:  ${this.value}`;
	}
}
// ===================================================================for showing size and color=================================================






