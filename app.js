a = prompt("Sonni kiriting: ");
// b = prompt("Darajani kiriting: ");
document.body.innerHTML = nodir(a);
function nodir(a){
            n = a.toString();
            k = n.split(".");
            m = k[1].split("");
            sum = k[0] + "." + (m[0] + m[1]);
            if(m[2] > 5){
                let cell = k[0] + "." + (m[0] + (Number(m[1]) + Number(1)));
                return Number(cell);
            }
            else{
                return Number(sum);
            }

        };
        console.log(nodir(a));
    
    
// document.body.innerHTML = daraja(a,b);
// function daraja(a,b){
//     let n = Math.pow(a,b);
//     return n;
// }
//     console.log(daraja(a,b));