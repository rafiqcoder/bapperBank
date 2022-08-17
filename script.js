


if (window.location.href.endsWith('home.html')) {

    window.onload = function () {

        const depoTotal = document.getElementById('depoTotal');
        const withTotal = document.getElementById('withTotal');
        const totalBalance = document.getElementById('totalBalance');
        const depoIn = document.getElementById('depoIn');
        const withIn = document.getElementById('withIn');
        const depo_btn2 = document.getElementById('depo_btn');
        const with_btn = document.getElementById('with_btn');



        let balanceSum = 0;
        let depoSum = 0;
        document.getElementById('depo_btn').addEventListener('click', function () {

            // console.log('clicked');
            let depoValue = parseInt(depoIn.value);
            if (isNaN(depoValue) || depoValue < 1 || depoValue == 0) {
                alert('please put a valid input');
            } else {
                // console.log(depoValue);
                depoSum = depoSum + depoValue;
                balanceSum = balanceSum + depoValue;

                if (depoSum == 0) {
                    depoTotal.innerText = "$00";

                } else if (balanceSum == 0) {
                    totalBalance.innerText = "$00";
                } else {
                    depoTotal.innerText = "$" + depoSum;
                    totalBalance.innerText = "$" + balanceSum;
                    console.log(balanceSum);
                    document.getElementById('depoIn').value = "";

                }
            }

        });

        // console.log(depoSum);
        let withSum = 0;



        document.getElementById('with_btn').addEventListener('click', function (e) {
            let withVal = parseInt(withIn.value);
            console.log(withVal);
            if (isNaN(withVal) || withVal == " ") {
                alert('please put a valid input');
            } else {

                if (balanceSum !== 0 && withVal <= balanceSum) {


                    console.log(`withdraw${withVal}`);



                    withSum = withSum + withVal;
                    console.log(withSum);
                    // console.log(balanceSum);
                    balanceSum = balanceSum - withVal;



                    // console.log(balanceSum);
                    if (withSum == 0) {
                        withTotal.innerText = "$00";
                    } else {
                        withTotal.innerText = `$ ${withSum}`;
                        document.getElementById('withIn').value = "";
                    }
                    if (balanceSum == 0) {
                        totalBalance.innerText = "$00";
                    } else {

                        totalBalance.innerText = "$ " + balanceSum;

                    }
                    document.getElementById('withIn').value = "";
                }
                else {
                    alert('You dont have sufficient Balance');
                    document.getElementById('withIn').value = "";
                }
            }



            e.stopImmediatePropagation();
        })




    }
}









//     const depoTotal = document.getElementById('depoTotal');
//     const withTotal = document.getElementById('withTotal');
//     const totalBalance = document.getElementById('totalBalance');
//     const depoIn = document.getElementById('depoIn');
//     const withIn = document.getElementById('withIn');
// const depo_btn2 = document.getElementById('depo_btn');
//     const with_btn = document.getElementById('with_btn');
//     const depoSum = 0;
//     const withSum = 0;
//     const balanceSum = 0;

