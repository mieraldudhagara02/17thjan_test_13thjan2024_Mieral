function getotp()
{
    let num = Math.floor(1000 + Math.random() * 9000);

    document.getElementById("result").innerHTML = num;
}