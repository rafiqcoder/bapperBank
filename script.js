
if (window.location.href.endsWith("login.html")) {

    window.onload = function () {
        const email = 'rafiqcoder@gmail.com';
        const password = '123456';

        const emailIn = document.getElementById('email');
        const passIn = document.getElementById('password');
        const submit_btn = document.getElementById('subBtn');

        document.getElementById('subBtn').onclick = function () {
            const emailVal = emailIn.value;
            const passVal = passIn.value;
            if (emailVal == email && passVal == password) {
                window.location.href = "index.html";
            } else {
                alert('You Have Entered Wrong Email or Password');
            }
        };
    }
} else if (window.location.href.endsWith('index.html')) {

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
            const depoValue = parseInt(depoIn.value);
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

            }
            // console.log(depoSum);
            let withSum = 0;
            document.getElementById('with_btn').addEventListener('click', function (e) {

                const withVal = parseInt(withIn.value);
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
                }
                if (balanceSum == 0) {
                    totalBalance.innerText = "$00";
                } else {

                    totalBalance.innerText = "$ " + balanceSum;
                }

                e.stopImmediatePropagation();
            })

        });



    }
} else {
    console.log('false');
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

