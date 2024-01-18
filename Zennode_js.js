let wrapFeeA = 0;
let wrapFeeB = 0;
let wrapFeeC = 0;

let ProductA = parseInt(prompt("Enter the number of quantities for product A:"));

let isGiftWrapA = prompt("Do you want to gift wrap this product (y/n)?");
if (isGiftWrapA === "y") {
    wrapFeeA = ProductA * 1;
} else if (isGiftWrapA === "n") {
    wrapFeeA = 0;
} else {
    console.log("Invalid choice. Enter either 'y' or 'n'.");
}
let ProductAPrice = ProductA * 20;

let ProductB = parseInt(prompt("Enter the number of quantities for product B:"));

let isGiftWrapB = prompt("Do you want to gift wrap this product (y/n)?");
if (isGiftWrapB === "y") {
    wrapFeeB = ProductB * 1;
} else if (isGiftWrapB === "n") {
    wrapFeeB = 0;
} else {
    console.log("Invalid choice. Enter either 'y' or 'n'.");
}
let ProductBPrice = ProductB * 40;

let ProductC = parseInt(prompt("Enter the number of quantities for product C:"));

let isGiftWrapC = prompt("Do you want to gift wrap this product (y/n)?");
if (isGiftWrapC === "y") {
    wrapFeeC = ProductC * 1;
} else if (isGiftWrapC === "n") {
    wrapFeeC = 0;
} else {
    console.log("Invalid choice. Enter either 'y' or 'n'.");
}
let ProductCPrice = ProductC * 50;

let cartPrice = ProductAPrice + ProductBPrice + ProductCPrice;
let totalprice = cartPrice;
let totalquantity = ProductA + ProductB + ProductC;

let gt15unitdiscount = 0;
let productgt10discount = 0;
let totalgt15unitdiscount = 0;
let productgt10 = 0;
let total15unitprice = 0;
let flat_10D_discount = 0;
let max_discountName = " ";
let flat_10P_discount = 0;

if (totalquantity > 20) {
    flat_10P_discount = totalprice * (10 / 100);
}

if (cartPrice > 200) {
    flat_10D_discount = 10;
}

let maxunit, maxunitprice;
if (ProductA >= ProductB && ProductA >= ProductC) {
    maxunit = ProductA;
    maxunitprice = 20;
} else if (ProductB >= ProductA && ProductB >= ProductC) {
    maxunit = ProductB;
    maxunitprice = 40;
} else {
    maxunit = ProductC;
    maxunitprice = 50;
}

if (maxunit > 15 && totalquantity > 30) {
    total15unitprice = maxunit * maxunitprice;
    let gt15unitDff = maxunit - 15;
    totalgt15unitdiscount = (gt15unitDff * maxunitprice) / 2;
} else if (maxunit > 10) {
    productgt10discount = productgt10 - (productgt10 * (5 / 100));
}

function maxdiscount(totalgt15unitdiscount, productgt10discount, flat_10D_discount, flat_10P_discount) {
    if (totalgt15unitdiscount >= productgt10discount && totalgt15unitdiscount >= flat_10D_discount && totalgt15unitdiscount >= flat_10P_discount) {
        return totalgt15unitdiscount;
    } else if (productgt10discount >= totalgt15unitdiscount && productgt10discount >= flat_10D_discount && productgt10discount >= flat_10P_discount) {
        return productgt10discount;
    } else if (flat_10D_discount >= totalgt15unitdiscount && flat_10D_discount >= productgt10discount && flat_10D_discount >= flat_10P_discount) {
        return flat_10D_discount;
    } else {
        return flat_10P_discount;
    }
}

let MaxDiscount = maxdiscount(totalgt15unitdiscount, productgt10discount, flat_10D_discount, flat_10P_discount);


if (MaxDiscount === 0) {
    max_discountName = "no discounts applicable";
} else if (MaxDiscount === totalgt15unitdiscount) {
    max_discountName = "tiered_50_discount";
} else if (MaxDiscount === productgt10discount) {
    max_discountName = "bulk_5_discount";
} else if (MaxDiscount === flat_10D_discount) {
    max_discountName = "flat_10_discount";
} else if (MaxDiscount === flat_10P_discount) {
    max_discountName = "bulk_10_discount";
}

let totalshippingfee;
if (totalquantity < 10) {
    totalshippingfee = 5;
} else {
    totalshippingfee = ((totalquantity % 10) * 5) + Math.floor(totalquantity / 10) * 5;
}

let totalwrapfee = wrapFeeA + wrapFeeB + wrapFeeC;
let totalfee = totalshippingfee + totalwrapfee;
let subtotal = cartPrice - MaxDiscount;

let a, b, c;
if (ProductA) {
    a = "Product A";
}
if (ProductB) {
    b = "Product B";
}
if (ProductC) {
    c = "Product C";
}

console.log(`${a}, Amount = ${ProductAPrice}`);
console.log(`${b}, Amount = ${ProductBPrice}`);
console.log(`${c}, Amount = ${ProductCPrice}`);
console.log("Cart price =", cartPrice);
console.log("Sub Total =", subtotal);
console.log(`Discount applied = ${MaxDiscount}, Discount name = ${max_discountName}`);
console.log(`Shipping fee = ${totalshippingfee}, Gift wrap fee = ${totalwrapfee}`);
let total = subtotal + totalfee;
console.log("Total quantities =", totalquantity);
console.log("Total =", total);
