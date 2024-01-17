function reverse()
{
    var num = document.getElementById("enterNum").value;

    document.getElementById("result").innerHTML = num.split("").reverse().join("");
}