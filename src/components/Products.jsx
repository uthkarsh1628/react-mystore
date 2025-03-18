import "./Products.css"
export default function Products(){
    const products =[
        {id:1,name:"Product 1",price: 30},
        {id:2,name:"Product 2",price: 20},
        {id:3,name:"Product 3",price: 10},
        {id:4,name:"Product 4",price: 100},
        {id:5,name:"Product 5",price: 120},
        {id:6,name:"Product 6",price: 200}

    ]
    return(
        <div>
             
             <div className="App-Products-row">
                {

                    products.map((value,index)=>(
                        <div className="App-Products-Box" key={index}>
                           <h3> {value.name}</h3>
                             <h4>{value.price}</h4>
                             <button>Add to cart</button>
                            </div>
                    ))
                }
             </div>
        </div>
    )
}