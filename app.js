var a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
}

let drop1 = document.getElementById('drop1');
let drop2 = document.getElementById('drop2');

let div = document.getElementById('div');
let mobilebrand = Object.keys(a.mobiles);

for(let i = 0 ; i < mobilebrand.length ; i++) {
    drop1.innerHTML += `<option value="${mobilebrand[i]}">${mobilebrand[i]}</option>`;
}

function  sel1() {
    let mobilenames = drop1.value;
    let mobile = Object.keys(a.mobiles[mobilenames]);

    drop2.innerHTML = "";
    for(let i = 0; i < mobile.length ; i++) {
       drop2.innerHTML += `<option value="${mobile[i]}">${mobile[i]}</option>`;
    }
}


function sel2() {
    let brand =  drop1.value;
    let mobile = drop2.value;
    let all = a.mobiles[brand][mobile];
   
    div.innerHTML = "";
    for(var key in all){
    div.innerHTML += `<p style="background:darkcyan; margin-top: 1px; font-size:20px; padding:5px;">${all[key]}</p>`
    }
}
    