import { produits } from "../product"

function Image (){
    return(
        <div>
           <img src={produits.image} alt="not found"/>
        </div>
    )
}
export default Image