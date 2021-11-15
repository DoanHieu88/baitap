// xử lí bất đồng bộ bằng async await
// diện tích hình thang

let sum = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a !== "number" || typeof b !== "number"){
                return reject("err");
            }return resolve(a+b)
        }, 1000);
    })
}

let mul = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a !== "number" || typeof b !== "number"){
                return reject("err");
            }return resolve(a*b)
        }, 1000);
    })
}

let mil = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a !== "number" || typeof b !== "number"){
                return reject("err");
            }return resolve(a/b)
        }, 1000);
    })
};

let kqAsync = async (a,b,h) => {
    try{
        let tong = await sum(a,b);
        let tich = await mul(tong,h);
        let thuong = await mil(tich,2);
        console.log("ket qua", thuong);
    } catch(err) {
        console.log(err);
    }
};

kqAsync(2,5,2);
  