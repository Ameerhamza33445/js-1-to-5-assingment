document.write("<h2>Value After Varible delartion in undeined<h2/>")

var num1 = 20

var num2 = 10

var sum = num1 + num2 

document.write("<br>","Addition of 20 and 10","=",sum)

var num3 = 20

var sum1 = sum - num3

document.write("<br>","subtraction of 20 in 30","=",sum1)

var num4 = 10

var sum2 = sum1 * num4

document.write("<br>","Multypection of 10 in 10","=",sum2)

var num5 = 5

var sum3 = sum2 / num5

document.write("<br>","Divided of 5 in 100","=",sum3)

    //  ---Ticketprice----

var tiketprice = 600

var getprice = prompt ("Cost of buy 1 movie  ticket is 600 PKR")

document.write( "Total cost to buy", getprice,"tickets to a movie is")
document.write(tiketprice * getprice)

    //     // AgeCalculator

document.write("<h1>Age Calculator</h1>")


document.write("current year 2016")

document.write("<br>","birth year 1992")

document.write("<br>", "your age is 24")


    // ----the geometrizer-----

document.write("<h1>The Geometrizer</h1>")

    var radius = 20
    var circumfarance = 2*3.14*radius

    console.log(circumfarance)

    document.write("Radius of a circle :20")
    document.write("<br>", "Circumference :" , circumfarance)

    var area = 3.14*radius*radius
    
    document.write( "<br>","The Area is", area)



      //  ---table of 4------


 var tablenum = 4

document.write("<p>Table of 4</p>")

for(var i = 1; i <=10; i++){
    document.write("</br>",tablenum +" "+"x" +" "+ i +""+ "=" +" "+ tablenum * i)
}


    // -----Shopping Card-----

document.write("<h1>Shopping Card</h1>")

document.write("price of item is 650")
document.write("<br/>","Quantity ofitem 1 is 3")
document.write("<br/>","price of item 2 is 100")
document.write("<br/>","Quantity of item 2 is 7")
document.write("<br/>","Shopping charges 100")

document.write ("<br/>", "Total Cost Of Your Order is 2750")


     // ---- marks Sheet ------


var total = 980
var obtain = 804

var multply = 804 * 100
var result = multply / total
document.write("<h1>Mark Sheet</h1>")

document.write("Total marks :" ," "+ total , "<br>")
document.write("Mark obtain :" ," "+ obtain, "<br>")
document.write("Percentage"," "+ result , "%", "<br>")


       // ----currency in PKR------

document.write("<h1>currency in PKR</h1>")

var exchengrate1 = "1 US Dollar = 104.80 Pakistani Rupee"
var exchengrate2 = "1 Saudi Riyal = 28 Pakistani Rupee"

console.log( exchengrate1 + exchengrate2);
document.write("Total Currency in PKR: 1748")


      // -----The lifetime Supply Calculator-----


document.write("<h1>The Lifitime Supply Calculator<h1/>")

document.write("<br>","<p>Favourite Snack: chocolate chip</p>")
document.write("<br>", "Current age: 15")
document.write("<br>","Estomated Maximum Age: 65")
document.write("<br>","Amount of snacks per day: 3")
document.write("<br>","You will need 150 chocolate chip to last You until tha ripe old age of 65")





