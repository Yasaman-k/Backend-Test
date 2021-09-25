"use strict"
let input = {
    'one':
    {
        'two': 3,
        'four': [ 5,6,7]
    },
    'eight':
    {
        'nine':
        {
            'ten':11
        }
    }
}

// turns into:
// {
//     'one/two'  :  3  ,
//     'one/four/0':5,
//     'one/four/1':6,
//     'one/four/2':7,
//     'eight/nine/ten':11
// }


let arrLength = Object.keys(input).length
// console.log()

// /**
//  * output is an object
//  */
// let output = {}
// console.log(path.join("/"))
// Object.keys(Object.values(input))
let obj={}
let path =[]
let level_1_arr=[]




//level 1
let level_1 = Object.keys(input)
console.log(level_1[0])



let ll =Object.values(input)
let level_2= Object.keys(ll)

// for (let data in input ){
//   level_1_arr.push(level_1)

// }




//level 2
// for (let i = 0; i < level_2.length ; i++) {
//  console.log( Object.keys(ll[i]))
// }
console.log(  
  Object.keys(ll[0])
)

// for (let i = 0; i < level_2.length ; i++) {
//   console.log( Object.keys(ll[i]))[0]
//  }
console.log(
  Object.values(

    Object.values(
    
      Object.keys(ll[0])
    
    )[0]


  )
 
)
//  Object.values(Object.values(input)[0])[0]

// let level_2= Object.keys(Object.values(input))


// console.log(level_1)
// console.log(level_1_arr)


// for (let data in input) {
// // path.push(data)
// // level_1 = Object.keys(input)
// // level_2= Object.values(level_1)
// // console.log(level_1)
// // console.log(level_2)
// }

// console.log(typeof(path[0]))
// let key = path[0]
// obj[key]="3"
// // obj = {'first': "3"}
// console.log(obj)
// console.log(

//     Object.keys(Object.values(input)[0])

// )

// console.log(

//     Object.values(Object.values(input)[0])[0]
// )

// console.log(
//    Object.values( 
//     Object.values(Object.values(input)[1])[0]
//     )
//    [0]
// )

// console.log(
//   Object.values( 
//    Object.values(Object.values(input)[0])[0]
//    )
//   [0]
// )

// // if array
// console.log(
//   Object.values( 
//    Object.values(Object.values(input)[0])[1]
//    )
// )



//     Object.values(
//     (
//         Object.keys(

//             (
//              Object.values(input)
//             )[0]



//         )
//     )[0]


//     )
// )


// for (let i = 0; i < arrLength; i++) {
//    console.log(arrKeys[i])
//    console.log(arrKeys[i].length) //number of string barmigardone in stringe
//     console.log(typeof(arrKeys[i]))

// //    console.log(Object.valueOf(Object.keys(input)))

// //    for num in arrKeys[i]{

// //    }


// }
// console.table(input);
// console.table(input['one']['four']);

// function convertor (input) {

// // return typeof(input)
// return input[1] 

// }

// /**
//  * input : multi-dimensional container
//  * 
//  */
// console.log(convertor(input))



// let myjson = JSON.parse(input)
// console.log(myjson)

// loop the outer array
// for (let i = 0; i < input.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = activities[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++) {
//         console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
//     }
// }
// let arrLength = Object.keys(input).length
// let arrKeys = Object.keys(input)
// console.log(Object.keys(input).length)
// console.log(Object.keys(input)[0])
// console.log(Object.values(input)[0])