a = prompt("Sonni kiriting: ");
document.body.innerHTML = nodir(a);
function nodir(a){
        n = a.toString();
        k = n.split(".");
        m = k[1].split("");
        sum = k[0] + "." + (m[0] + m[1]);
        return Number(sum);
    };
    console.log(nodir(a));
