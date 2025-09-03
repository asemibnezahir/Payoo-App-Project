// Making Login Button Functional

document.getElementById('_1st-login').addEventListener('click',function(event)
    {
        event.preventDefault();

        const num = '01788943691';
        const pass = '1747';
        const formNum = document.getElementById("Num").value;
        const formPass = document.getElementById("Pass").value;
        if(formNum===num&&formPass===pass)
        {
            window.location.href = './home.html';
        }
        else
        {
            alert('Mobile Number or Pin Incorrect');
        }
    }
);