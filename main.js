const counterNumber = document.getElementById('number');
        const increamentButton = document.getElementById('increament');
        const decreamentButton = document.getElementById('decreament');
        let count = 0;
        increamentButton.addEventListener('click',function(){
            count++;
            if(count > 0){
                counterNumber.style.color= 'green';
                
            }
            common();

        })
        decreamentButton.addEventListener('click',function(){
            count--;
            if(count < 0){
                count = 0;
                counterNumber.style.color= 'red';
            }
            common();
        })
        function common(){
            counterNumber.innerText = count;
        }