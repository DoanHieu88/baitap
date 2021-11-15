// diện tích hình thang = (a+b)*h /2
// xử lí bất đồng bộ bằng promise
// tổng
// let sum = (a,b)=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof a !== "number" || typeof b!=="number"){
//                 return reject(new Error("err"));
//             }return resolve(a+b);
//         }, 1000);
//     });
// }

// nhân
// let mul = (a,b)=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof a !== "number" ||typeof b!=="number"){
//                 return reject(new Error("err"));
//             }return resolve(a*b);
//        });
//         }, 2000);
// }

// thương
// let der = (a,b)=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if( typeof a !== "number" ||typeof b!=="number"){
//                 return reject(new Error("err"));
//             }return resolve(a/b);
//        });
//         }, 3000);
// }

// let kq = (a,b,h)=>{
//     return sum(a,b)
//             .then((resolve)=>{
//                 return mul(resolve,h)
//             })
//             .then((resolve)=>{
//                 return der(resolve,2);
//             })
//             .catch((err) => {
//                 console.log("err")
//             });
// }

    // kq(1,2,3)
    //     .then((resolve)=> console.log("result", resolve))
    //     .catch((reject)=> console.log("err", reject))


//  xử lí bất đồng bộ bằng callBack
// nấu cơm
function findRice(callback){
    console.log("B1: Finding Rice");
    setTimeout(()=>{
        let a = console.log("doneB1: find out rice");
        return callback(a);
    },2000)
}

function washRice(callback){
    console.log("B2: washing rice");
    setTimeout(() => {
        let b = console.log("doneB2 :rice is clean");
        return callback(b);
    }, 2000);
}

function cookRice(){
    console.log("b3: cooking rice");
    setTimeout(() => {
        console.log("doneB3: cooked rice");
        return;
    }, 2000);
}

function done(){
    findRice(()=>{
        washRice(()=>{
            cookRice();
        })
    })
}

// done();


// diện tích hình thang
let sum = (a,b,cb)=>{
    console.log("starting add");
    setTimeout(() => {
        let total = a+b;
        console.log("add done",total);
        return cb(total);
    }, 2000);
}

let mul = (a,b,cb)=>{
    console.log("starting multiplication");
    setTimeout(() => {
        let product = a*b;
        console.log("multiplication done",product);
        return cb(product);
    }, 2000);
}

let div = (a,b,cb)=>{
    console.log("starting division");
    setTimeout(() => {
        let  quotient = a/b;
        console.log("division done", quotient);
        return cb(quotient);
    }, 2000);
}

let result=(dl,db,cc,callback)=>{
    sum(dl,db,(resultSum)=>{
        mul(resultSum,cc,(resultMul)=>{
            div(resultMul,2,(resultMil)=>{
                console.log(resultMil);
            });
        })
    })
}

result(3,8,5);
