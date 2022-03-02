import React,  { useState, useEffect } from 'react'

export const Movimientos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/v1/transactions/getTransactionsDetail',{
                          method: 'GET',
                          headers: {
                              'Content-Type': 'application/json'
                          }
                        }
                      );
      const parsedRes = await res.json();
      setData(parsedRes.result);
    }     
  
    fetchData();
  }, [])
  

  return (
    <>
        <h2>Ver Movimientos</h2>

        <div>
          <ul>
              {
                data && data.map((item, idx)=> {
                  return <li key={idx}>
                    <p>Fecha: {item.date}</p>
                    <p>Emisor: {`${item.source_name} ${item.source_lastname}`} </p>
                    <p>Receptor: {`${item.destiny_name} ${item.destiny_lastname}`} </p>
                    <p>Valor: {item.amount}</p>
                  </li>
                })
              }
          </ul>
        </div>
    </>
  )
}

