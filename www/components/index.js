window.onload = () =>{
    const dolar = document.querySelector('#dolar');

        dolar.addEventListener('click', ()=>{
            fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
            .then(
                response => { response.json()
                .then(data => {
                        document.querySelector('#compra').textContent = data.USDBRL.bid;
                        document.querySelector('#venda').textContent = data.USDBRL.ask;
                        document.querySelector('#variacao').textContent = data.USDBRL.varBid;
                        document.querySelector('#maxima').textContent = data.USDBRL.high;
                        document.querySelector('#minima').textContent = data.USDBRL.low;                
                });
            }
        )
    });

     const btnUsa = document.querySelector('#usd');
    const btnEuro = document.querySelector('#euro');
    
        btnUsa.addEventListener('click', ()=>{
        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
        .then(
          response => { response.json()
          .then(data => {
            document.querySelector('#compra2').textContent = data.USDBRL.bid;
            document.querySelector('#venda2').textContent = data.USDBRL.ask;
            document.querySelector('#variacao2').textContent = data.USDBRL.varBid;
            document.querySelector('#maxima2').textContent = data.USDBRL.high;
            document.querySelector('#minima2').textContent = data.USDBRL.low;          
          });
        }
      )
    });
    
        btnEuro.addEventListener('click', ()=>{
        fetch(`https://economia.awesomeapi.com.br/json/last/EUR-BRL`)
        .then(
          response => { response.json()
          .then(data => {
            document.querySelector('#compra2').textContent = data.EURBRL.bid;
            document.querySelector('#venda2').textContent = data.EURBRL.ask;
            document.querySelector('#variacao2').textContent = data.EURBRL.varBid;
            document.querySelector('#maxima2').textContent = data.EURBRL.high;
            document.querySelector('#minima2').textContent = data.EURBRL.low;          
          });
        }
      )      
    });

    const selectbtn = document.querySelector('#btnSelect')
    select.addEventListener('click', ()=>{
        let select = document.querySelector('#select').value;
        fetch(`https://economia.awesomeapi.com.br/json/last/${select}`)
        .then(
            response => { response.json()
                .then(data => {
                    if(select == 'USD-BRL'){
                        document.querySelector('#compra3').textContent = data.USDBRL.bid;
                        document.querySelector('#venda3').textContent = data.USDBRL.ask;
                        document.querySelector('#variacao3').textContent = data.USDBRL.varBid;
                        document.querySelector('#maxima3').textContent = data.USDBRL.high;
                        document.querySelector('#minima3').textContent = data.USDBRL.low;
                    }
                    else if(select == 'BTC-BRL'){
                        document.querySelector('#compra3').textContent = data.BTCBRL.bid;
                        document.querySelector('#venda3').textContent = data.BTCBRL.ask;
                        document.querySelector('#variacao3').textContent = data.BTCBRL.varBid;
                        document.querySelector('#maxima3').textContent = data.BTCBRL.high;
                        document.querySelector('#minima3').textContent = data.BTCBRL.low;
                    }
                    else if(select == 'EUR-BRL'){
                        document.querySelector('#compra3').textContent = data.EURBRL.bid;
                        document.querySelector('#venda3').textContent = data.EURBRL.ask;
                        document.querySelector('#variacao3').textContent = data.EURBRL.varBid;
                        document.querySelector('#maxima3').textContent = data.EURBRL.high;
                        document.querySelector('#minima3').textContent = data.EURBRL.low;
                    }
                })
            }
        )
    })
}