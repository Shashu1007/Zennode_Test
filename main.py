wrapFeeA = 0
wrapFeeB = 0
wrapFeeC = 0


ProductA = int(input("Enter the number of quantities for product A:"))

isGiftWrapA = (input("Do you want to gift wrap this product (y/n)?"))
if isGiftWrapA == "y":
    wrapFeeA = ProductA * 1

elif isGiftWrapA == "n":
    wrapFeeA = 0

else:
    print("invalid choice enter either 'y' or 'n' ")
ProductAPrice = ProductA * 20


ProductB = int(input("Enter the number of quantities for product B:"))

isGiftWrapB = (input("Do you want to gift wrap this product (y/n)?"))
if isGiftWrapB == "y":
    wrapFeeB = ProductB * 1

elif isGiftWrapB == "n":
    wrapFeeB = 0

else:
    print("invalid choice enter either 'y' or 'n' ")

ProductBPrice = ProductB * 40


ProductC = int(input("enter the number of quantities for product C:"))

isGiftWrapC = (input("Do you want to gift wrap this product (y/n)?"))
if isGiftWrapC == "y":
    wrapFeeC = ProductC * 1

elif isGiftWrapC == "n":
    wrapFeeC = 0

else:
    print("invalid choice enter either 'y' or 'n' ")

ProductCPrice = ProductC * 50


cartPrice = ProductAPrice + ProductBPrice + ProductCPrice
totalprice = cartPrice
totalquantity = ProductA + ProductB + ProductC


gt15unitdiscount = 0
productgt10discount = 0
totalgt15unitdiscount = 0
productgt10 = 0
total15unitprice = 0
flat_10D_discount = 0
max_discountName = " "
flat_10P_discount = 0


if totalquantity > 20:
    flat_10P_discount = totalprice * (10/100)

if cartPrice > 200:
    flat_10D_discount = 10

if ProductA >= ProductB and ProductA >= ProductC:
    maxunit = ProductA
    maxunitprice = 20
elif ProductB >= ProductA and ProductB >= ProductC:
    maxunit = ProductB
    maxunitprice = 40

else:
    maxunit = ProductC
    maxunitprice = 50

if maxunit > 15 and totalquantity > 30:
    total15unitprice = maxunit * maxunitprice
    gt15unitDff = maxunit - 15
    totalgt15unitdiscount = (gt15unitDff * maxunitprice) / 2


elif maxunit > 10:
    productgt10discount = productgt10 - (productgt10 * (5/100))


def maxdiscount(totalgt15unitdiscount, productgt10discount, flat_10D_discount, flat_10P_discount):
    if totalgt15unitdiscount >= productgt10discount and totalgt15unitdiscount >= flat_10D_discount and totalgt15unitdiscount >= flat_10P_discount:
        return totalgt15unitdiscount
    elif productgt10discount >= totalgt15unitdiscount and productgt10discount >= flat_10D_discount and productgt10discount >= flat_10P_discount:
        return productgt10discount
    elif flat_10D_discount >= totalgt15unitdiscount and flat_10D_discount >= productgt10discount and flat_10D_discount >= flat_10P_discount:
        return flat_10D_discount
    else:
        return flat_10P_discount


MaxDiscount = maxdiscount(totalgt15unitdiscount, productgt10discount, flat_10D_discount, flat_10P_discount)
if MaxDiscount==0:
    max_discountName="no discounts applicable"
elif MaxDiscount == totalgt15unitdiscount:
    max_discountName = "tiered_50_discount"
elif MaxDiscount == productgt10discount:
    max_discountName = "bulk_5_discount"
elif MaxDiscount == flat_10D_discount:
    max_discountName = "flat_10_discount"
elif MaxDiscount == flat_10P_discount:
    max_discountName = "bulk_10_discount"


if totalquantity < 10:
    totalshippingfee = 5
else:
    totalshippingfee = ((totalquantity % 10) * 5) + ((totalquantity // 10) * 5)


totalwrapfee = wrapFeeA + wrapFeeB + wrapFeeC
totalfee = totalshippingfee + totalwrapfee
subtotal =  cartPrice - MaxDiscount

if ProductA:
    a = "Product A"
if ProductB:
    b = "Product B"
if ProductC:
    c = "Product C"

print("Product A = {}, Amount = {} ".format(ProductA, ProductAPrice))
print("Product B = {}, Amount = {} ".format(ProductB, ProductBPrice))
print("Product C = {}, Amount = {} ".format(ProductC, ProductCPrice))
print("Cart price = ", cartPrice)
print("Sub Total = ", subtotal)
print("Discount applied = {}, Discount name = {}".format(MaxDiscount, max_discountName))
print("Shipping fee={}, Gift wrap fee={}".format(totalshippingfee, totalwrapfee))
total = subtotal + totalfee
print("Total quantities = ", totalquantity)
print("Total = ", total)
