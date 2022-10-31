
//Q:1 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//  var person_name = "Eric"
//  alert("hello "+person_name+" would you like to learn some Python today?")



 // Q:02 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase


//  var person_name = "Eric"
//  alert(person_name.toUpperCase())

// var person_name = "Eric"
//  alert(person_name.toLowerCase())

//  var person_name = "Eric"
//  alert(person_name.toString())


//Q: 03
//console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')



// Q: 04
/*var famous_person = ("Albert Einstein")
console.log(famous_person+ (' once said, "A person who never made a mistake never tried anything new."'))*/


//Q :05
// var myName = ("   \t  \n   khuram       ")

// console.log(myName)

// var myName = ("   \t  \n   khuram         ")

// console.log(myName.trim())



//Q: 07

// var a = 5;
// var b = 3;
// var c = a+b;
// document.write("a+b = "+c )

// var a = 12;
// var b = 4;
// var c = a-b;
// document.write("a-b = "+c)

// var a = 4;
// var b = 2;
// var c = a*b;
// document.write("a x b = "+c)

// var a = 64;
// var b = 8;
// var c = a/b;
// document.write("a/b = "+c)


// //Q:08
// var a = 5;
// var b = 3;
// var c = a+b;
// document.write("a+b = "+c + "<br>")

// var a = 12;
// var b = 4;
// var c = a-b;
// document.write("a-b = "+c + "<br>")

// var a = 4;
// var b = 2;
// var c = a*b;
// document.write("a x b = "+c + "<br>")

// var a = 64;
// var b = 8;
// var c = a/b;
// document.write("a/b = "+c)


//Q:09
// var fav_num = 9;
// var massage = ("I'm learning web 3.0 and metaverse")
// if (fav_num===9){
//     document.write(massage)
//}


//Q:10

// var a = 5;
// var b = 3;
// var c = a+b;
// document.write("a+b = "+c ) // document.write print the values on screen

//Q:11
// var friends_names = ["khuram","asim","saim","zain","Ali","qasim"]
//  document.write(friends_names)

//2nd method
// var friends_names = ["khuram","asim","saim","zain","Ali","qasim"]
// document.write(friends_names.slice(0,6))

//Q:12
// var friends_names = ["khuram","asim","saim","zain","Ali","qasim"]
// var names = prompt("enter name from friends list")
// var found = false
// for(i = 0; i<friends_names.length; i++){
//     if(friends_names[i]==names){
//         document.write("Are you want to learn javascript?")
//         found = true
//         break
//     }
// }
// if(!found){
//     document.write("You are not serious")
// }


// var friends_names = ["khuram","asim","saim","zain","Ali","qasim"]
// var names = prompt("enter name from friends list")
// for(i = 0; i<friends_names.length; i++){
//     if(friends_names[i]==names){
//         document.write("Are you want to learn javascript?")
//         break;
//     }else{
//         document.write("Name not in friends list")
//         break;
//     }
//}



//Q:13
// var fav_transpotation = ["car","bike"]
// var vehical = prompt("enter your mode of transpotation","car or bike")
// var found = false
// for (i = 0; i<fav_transpotation.length; i++){
//     if (fav_transpotation[i]==vehical){
//         found = true
//         document.write("I would like to own a honda "+vehical+"<br>"+"its fuel avg is good")
        
//     }
// }


// Q:14
// var guests = ["Amir","Ali","Asad"]
// console.log(guests[0]+" you are invited to dinner with us")
// console.log(guests[1]+" you are invited to dinner with us")
// console.log(guests[2]+" you are invited to dinner with us")
//2nd method
// var guests = ["Amir","Ali","Asad"]
// for(i = 0; i<guests.length; i++){
//     console.log(guests[i]+" you are invited to dinner with us")
// }


//Q:15

// var guests = ["Amir","Ali","Asad"]
// for(i = 0; i<guests.length; i++){
//     console.log(guests[i]+" you are invited to dinner with us")
// }
// console.log(guests[2]+" can't  reached on dinner due to some busy schedule")


// var guests = ["Amir","Ali","Asad"]
// for(i = 0; i<guests.length; i++){
//     guests.splice(1,1,"Azaan")
//     console.log(guests[i]+" you are invited to dinner with us")
// }


// var guests = ["Amir","Ali","Asad"]
// for(i = 0; i<guests.length; i++){
//     guests.splice(1,1,"Azaan")
//     console.log(guests[i]+" you are invited to dinner with us and Asad is some busy today")
// }



// Q:16

// var guests = ["Amir","Ali","Asad"]
// for(i = 0; i<guests.length; i++){
//     guests.splice(1,1,"Azaan")
//     document.write(guests[i]+" you are invited to dinner with us and Asad is some busy today." +"<br>"+ "it is informing to you people that you will found a big table for dinner"+"<br>")
// }

// var guests = ["Amir","Ali","Asad"]
// guests.unshift("khuram")
// console.log(guests)

// var guests = ["Amir","Ali","Asad"]
// guests.splice(1,0,"daniyal")
// console.log(guests)


// var guests = ["Amir","Ali","Asad","Awais"]
// guests.push("saim")
// console.log(guests)


// Q:17

// var guests = ["Amir","Ali","Asad","Awais","saim"]
// console.log(guests)
// console.log("we have only space for two guests")
// var name1 = guests.pop()
// console.log(name1 + " we are sorry,we can't invite you on dinner")
// var name2 = guests.pop()
// console.log(name1 + " we are sorry,we can't invite you on dinner")
// var name3 = guests.pop()
// console.log(name1 + " we are sorry,we can't invite you on dinner")
// console.log(guests + " you are invited for dinner tonight")

// while(guests.length){
//     guests.pop()
// }console.log(guests)




// Q:18

// var visiting_places = ["Kashmir","Norway","Malta","Maldeves","Japan","Australlia","Thailand"]
// console.log(visiting_places)
// console.log(visiting_places.sort())
// console.log(visiting_places.reverse())
// console.log(visiting_places)
// console.log(visiting_places.reverse())
// console.log(visiting_places.sort())
// console.log(visiting_places.reverse())


// Q:19

// var guests = ["Amir","Ali","Asad"]
// console.log(guests.length+" people are invited to dinner with us")



// Q:20

// var words = "mountains rivers vally pakistan kashmir"
// var wordsArr = words.split(' ')
// console.log(wordsArr)

//Q:21
// var mylist = new Array();
// mylist.push('mountain')
// mylist.push('river')
// mylist.push('vally')
// mylist.push('pakistan')
// for(i = 0; i<mylist.length; i++){
//     console.log(mylist[i])
// }



// Q:22


// var mylist = new Array();
// mylist.push('mountain')
// mylist.push('river')
// mylist.push('vally')
// mylist.push('pakistan')
// for(i = 0; i<mylist.length; i++){
//     // console.log(mylist[10])     // index error
//     console.log(mylist[10])
// }


// Q:23

// var student_name = "khuram"
// console.log(student_name==="khuram") // this will return true 
// console.log(student_name>"khuram")   // this will returns false

// let bikeColor =  "red"
// console.log(bikeColor==="green")  // this will return false
// console.log(bikeColor==="red")    // this will return true
// console.log(bikeColor==="Red")    //this will return false because of upper case
// console.log(bikeColor==="!red")  // this will return false


// var cemera_px = 8
// console.log(cemera_px===8)       // this will return true
// console.log(cemera_px===8)       // this will return true
// console.log(cemera_px==="8")       // this will return false
// console.log(cemera_px=="8")       // this will return true


//Q:24

// let bikeColor =  "Red"
// console.log(bikeColor==="Red")  // this will return true
// console.log(bikeColor==="!Red") // this will return false
// console.log(bikeColor.toUpperCase())
// console.log(bikeColor.toLowerCase())

// var num = 10;
// console.log(num===10)       // this will return true
// console.log(num<10)         // this will return false
// console.log(num<=10)        // this will return true
// console.log(num>10)         // this will return false
// console.log(num>=10)        // this will return true
// console.log(num==10 &&  num<20)    // this will return true
// console.log(num==10 &&  num>20)     // this will return false
// console.log(num==10 ||  num>2)     // this will return true
// console.log(num==1 ||  num>20)     // this will return false

// var misc = ["mobile","laptop",3214,"iron","glass"]
// console.log(misc.includes("mobile"))

// var misc = ["mobile","laptop",3214,"iron","glass"]
// console.log(misc.includes("charger"))

// var misc = ["mobile","laptop",3214,"iron","glass"]
// console.log(misc.indexOf("mobile"))


// Q:25

// var alien_color  = "green"
// if(alien_color==="green"){
//     console.log("The player just earned 5 points")
// }

// var alien_color  = "green"
// if(alien_color==="red"){
//     console.log("The player just earned 5 points")
// }

// Q:26
// var alien_color  = "green"
// if(alien_color==="green"){
//     console.log("The player just earned 5 points")
// }
// else{
//     console.log("The player just earns 10 points")
// }

// var alien_color  = "green"
// if(alien_color==="!green"){
//     console.log("The player just earned 5 points")
// }
// else{
//     console.log("The player just earns 10 points")
// }


// Q:27

// var alien_color  = "green"
// if(alien_color=="green"){
//     console.log("The player just earned 5 points")
// }else{
//     if(alien_color=="yellow"){
//         console.log("The player just earned 10 points")
//     }else{
//         if(alien_color=="red"){
//             console.log("The player just earned 15 points")
//         }
//     }
// }
 


// var alien_color  = "yellow"
// if(alien_color=="green"){
//     console.log("The player just earned 5 points")
// }else{
//     if(alien_color=="yellow"){
//         console.log("The player just earned 10 points")
//     }else{
//         if(alien_color=="red"){
//             console.log("The player just earned 15 points")
//         }
//     }
// }
    
 


// var alien_color  = "red"
// if(alien_color=="green"){
//     console.log("The player just earned 5 points")
// }else{
//     if(alien_color=="yellow"){
//         console.log("The player just earned 10 points")
//     }else{
//         if(alien_color=="red"){
//             console.log("The player just earned 15 points")
//         }
//     }
// }
 



// Q:28

// var age = +prompt("enter your age")

// if (age<2){
//     console.log("the person is baby")
// }else{
//     if((age==2) || (age<4)){
//         console.log("the person is toddler")
//     }else{
//         if((age==4) || (age<13)){
//             console.log("the person is a kid")
//         }else{
//             if((age==13) || (age<20)){
//                 console.log("the person is a teenager")
//             }else{
//                 if((age==20) || (age<65)){
//                     console.log("the person is a adult")
//                 }else{
//                     console.log("the person is an elder")
//                 }
//             }
//         }
//     }
// }
  
// Q:29

// var fav_fruits = ["apple","banana","orange","grapes","mango"]
// var userInput = prompt("enter fruit name")
// fav_fruits = userInput
// if (fav_fruits.includes("apple")==true){
//     console.log("you really like apple")
// }else{
//     if(fav_fruits.includes("banana")==true){
//         console.log("you really like banana")
//     }else{
//         if(fav_fruits.includes("orange")==true){
//             console.log("you really like orange")
//         }else{
//             if(fav_fruits.includes("grapes")==true){
//                 console.log("you really like grapes")
//             }else{
//                 if(fav_fruits.includes("mango")==true){
//                     console.log("you really like mango")
//                 }else{
//                     console.log("the fruit name you enterd is not in list")
//                 }
//             }
//         }
//     }
// }


// Q:30

// var userNames = ["Admin","Tariq","Ehsan","Bilal","Nasir","Adnan"]

// for(i = 0; i<userNames.length; i++){
//     console.log(userNames[i] + " thank you for logging in")
// }


// var userNames = ["Admin","Tariq","Ehsan","Bilal","Nasir","Adnan"]


// for(i = 0; i<userNames.length; i++){
//     if (userNames[i]=="Admin"){
//         console.log("Hello admin, would you like to see a status report?")   
//     }else{
//         console.log(userNames[i] +" thank you for logging in again")
//     }
// }



// Q:31

// var userNames = ["Admin","Tariq","Ehsan","Bilal","Nasir","Adnan"]

// while (userNames.length){
//     userNames.pop()

// }console.log(userNames+" we need to find some users!")

// Q:32

// var current_users = ["waqar","hamza","gibran","SAAD","usman"]
// var new_users = ["jamil","aslam","hamza","usman","saad","khalil"]
// var matches = []
// for(i = 0; i<current_users.length; i++){
//     for(j = 0; j<new_users.length; j++){
//         if(current_users[i]===new_users[j]){
//             matches.push(current_users[i])
//             console.log( matches+" found")
//         }
//     }
// }




// Q:33

// var ordinal_num = [1,2,3,4,5,6,7,8,9]

// for(i = 0; i <ordinal_num.length; i++){
//     if (ordinal_num[i]===1){
//         console.log(ordinal_num[i]+"th")
//     }else{
//         console.log(ordinal_num[i]+"th")
//     }
// }



// Q:34

// var pizzas = ["Veggie Pizza","Pepperoni Pizza","Hawaiian Pizza"]

// for(i = 0; i<pizzas.length; i++){
//     if(pizzas[i]==="Veggie Pizza"){
//         console.log("I like Veggie Pizza")
//     }else if(pizzas[i]==="Pepperoni Pizza"){
//         console.log("I like Pepperoni Pizza")
//     }else{
//         console.log("I like "+pizzas[i])
//     }
// }
// console.log("I like pizza because Pizza is a great source of nutrients.\n It provides high percentages of the total daily intake of protein.\n Pizza is very delicious food item and can be used as instant energy provider")


// Q:35

// var Animals = ["Bull","Goat","Hourse"]
// for(var i = 0; i<Animals.length; i++){
//     if(Animals[i]==="Bull"){
//         console.log(Animals[i]+" would make a great pet")
//     }else if(Animals[i]==="Goat"){
//         console.log(Animals[i]+" would make a great pet")
//     }else{
//         console.log(Animals[i]+" would make a great pet")
//     }
// }console.log("These three animals are common in food\nThese animals would make great pets")

// Q:36
// method 1
// function make_shirt(size,massage){
//     console.log("The size of shirt is "+size)
//     console.log("The massage printed on shirt is"+massage)
// }
// make_shirt('large','I love pakistan')

// method 2
// function make_shirt(size,massage){
//     return "The size of shirt is "+size+"\nThe massage printed on shirt is "+massage
// }
// var shirt = make_shirt('large','I love pakistan')
// console.log(shirt)


// Q:37


// function make_shirts(size="large",massage=" I love java script"){
//     var size = prompt("enter shirt size")
//     var massage = prompt(" enter your massage")
//     return size + massage
// }
// var shirts = make_shirts()
// console.log(shirts)



// function make_shirts(size,massage){
//     var size = prompt("enter shirt size","large,medium,small")
//     if(size == "large"){
//         return "I love java script"
//     }else if(size=="medium"){
//         return "I love web 3.0 and metaverse"
//     }else{
//         return "I am learning javascript"
//     }
// }
// var shirts = make_shirts()
// console.log(shirts)


// Q:38

// function discribe_city(city,country = "Pakistan"){
//     var city = prompt("enter your desired city")
//     return city + " is in " +country
// }
// var city_name = discribe_city()
// console.log(city_name)


// Q:39

// function city_country(city,country){
//     return (city +" , " + country)
// }
// var a = city_country("karachi"," pakistan")
// console.log(a)



// Q:40

// function make_album(artist_name,album_title){
//    var album_object = {
//         "Artist name": artist_name,
//         "Album title": album_title
//     }

//     return album_object
// }
// console.log(make_album("James Blunt"," Back to Bedlam"))
// console.log(make_album(" Dido"," No Angel"))
// console.log(make_album("David Gray","White Ladder"))


// function make_album(artist_name,album_title,tracks){
    // var album_object = {
    //      "Artist name": artist_name,
    //      "Album title": album_title
    //  }
//      var no_of_tracks = {
//         "tracks": tracks
//      }
//      var Album = Object.assign(album_object,no_of_tracks)
//      return Album
//  }
//  console.log(make_album("James Blunt"," Back to Bedlam",8))






//Q:41
// var magician_names = ["Ricky Jay","Harry Anderson","Mark Wilson","Lance Burton"]
// function show_magicians(){
//     for (i = 0; i<magician_names.length; i++){
//         return magician_names;
//     }
// }
// var show = show_magicians()
// console.log(show);



// //Q:42       
// var magician_names = ["Ricky Jay","Harry Anderson","Mark Wilson","Lance Burton"]
// function show_magicians(){
//     for (i = 0; i<magician_names.length; i++){
//         return  magician_names;
//     }
// }
// var show = show_magicians()
// console.log(show);


// Q:43
// function make_great(massage){
//     var q = new Array(massage )
//     var greatArray = show.concat(make_great);
//     console.log(greatArray)
//     var obj1 = {...greatArray}
//     console.log(obj1);
//     return q
    
// }
// var w = make_great("thegreat")
// console.log(w)





// Q:44
// function make_sandwich(...items){
//     console.log("\n I will make sandwich for you sir zia when I will be able to earn InshaAllah ")
//     var items = new Array(items)
//      for (var i = 0; i<items.length; i++){
//         return "\n adding "+items[i]  + " in your sandwich "
//      }
     
// }
// console.log(make_sandwich("kabab"," egg","meat"))
// console.log(make_sandwich("apple slice"," honey musterd","cheese"))
// console.log(make_sandwich("jam"," butter"))



// Q:45

// function make_car(manufacturer, model){
//     var car_obj = {
//         "Manufacturer": manufacturer,
//         "Model name": model
        
//     }
//     let option  =arguments;
//     for(i = 0; i<arguments.length; i++){
//         car_obj[i] =arguments[i]
//     }
//     return car_obj
    

// }  


// var car = make_car("honda","city",color='blue', headlights = "popup")

// console.log(car);



