import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.css';

function Cart(props) {

    const {cartItems, onOkay} = props;
    

    return (
        <div className={classes.cartWrapper}>
            <Card>
            {cartItems.map(e => (
                <CartItem 
                 key={e.id}
                 name={e.name}
                 description={e.description}
                 price={e.price}
                 qty={e.qty}
                />
            ))}
            <Button onClick={onOkay}>Back</Button>
            </Card>
        </div>
    )
}

export default Cart
