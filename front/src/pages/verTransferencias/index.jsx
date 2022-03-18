import React,  { useState, useEffect } from 'react'

export const Transferencias = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch( window.$dir+'api/v1/transactions/getTransactionsInfo',{
                          method: 'GET',
                          headers: {
                              'Content-Type': 'application/json'
                          }
                        }
                      );
      const parsedRes = await res.json();
      setData(parsedRes);
    }     
  
    fetchData();
  }, [])

  return (
    <>
        <h2>Ver Transferencias</h2>

        <div>
          <ul>
              {
                <>
                  <p>Numero de transacciones: {data.numTransactions}</p>
                  <p>Valor: {data.valueTransactions} </p>
                </>
              }
          </ul>
        </div>
    </>
  )
}

