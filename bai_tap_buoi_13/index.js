// diện tích hình thang = (a+b)*h /2
// xử lí bất đồng bộ bằng promise
// tổng
let sum = (a,b)=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a !== "number" || typeof b!=="number"){
                return reject(new Error("err"));
            }return resolve(a+b);
        }, 1000);
    });
}

// nhân
let mul = (a,b)=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a !== "number" ||typeof b!=="number"){
                return reject(new Error("err"));
            }return resolve(a*b);
       });
        }, 2000);
}

// thương
let der = (a,b)=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if( typeof a !== "number" ||typeof b!=="number"){
                return reject(new Error("err"));
            }return resolve(a/b);
       });
        }, 3000);
}

let kq = (a,b,h)=>{
    return sum(a,b)
            .then((resolve)=>{
                return mul(resolve,h)
            })
            .then((resolve)=>{
                return der(resolve,2);
            })
            .catch((err) => {
                console.log("err")
            });
}

    kq(1,2,3)
        .then((resolve)=> console.log("result", resolve))
        .catch((reject)=> console.log("err", reject))