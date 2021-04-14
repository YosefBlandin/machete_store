import React, {useContext} from "react"
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import AppContext from "../context/AppContext";
import "../styles/components/checkout.scss";

const Checkout = () => {
    const {stateReduced} = useContext(AppContext)
    const totalSum = () => stateReduced.cart.map(e => e.price).reduce((acc,curr) => acc + curr)
    
    return (
        <div className="checkout ">
                <h3>Lista de Pedidos:</h3>

                <div className="checkout__content">
                        <CheckoutItem isButton={true}/>
                </div>
            <div className="checkout__sidebar">
                        <h3>Precio Total: {stateReduced.cart.length > 0 ? totalSum() : 0} $</h3>
                        <Link to="/checkout/information">
                            Continuar Pedido
                        </Link>
            </div>
        </div>
    );
};


export default Checkout
