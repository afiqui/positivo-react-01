import React from 'react';
import Title from './../components/Title/index';


function ProductPlan({plan}){

    return (
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{plan.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  </div>
  )
}

const plans = [
    {
        name:"Plano A",
        price:"$ 1.00",
        description:"Destalhes do plano A"
    },
    {
        name:"Plano B",
        price:"$ 3.00",
        description:"Destalhes do plano B"
    },
    {
        name:"Plano C",
        price:"$ 3.00",
        description:"Destalhes do plano B"
    }
]

 
function Planos(){
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} />
            {/* <Card /> */}
            <h1>Planos</h1>
            
            <div class="container">
                <div class="row">
                    {plans.map((plan,planId)=><ProductPlan key={planId} plan={plan} />)}                      
                </div>
                        
            </div>
        </div>
    )   
}
 
export default Planos;