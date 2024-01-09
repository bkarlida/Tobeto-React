import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';


type Props = {}

const CartSummary = (props: Props) => {

    const {cartItems} = useSelector((state: any) => state.cart)
  return (
    <div>
            <Dropdown item text="Sepetiniz">
              <Dropdown.Menu>
                {
                  cartItems.map((cartItem: any)=>(
                    <Dropdown.Item key={cartItem.product.id}>
                      {cartItem.product.productName}
                      <Label>
                        {cartItem.quantity}
                      </Label>
                    </Dropdown.Item>
                  ))
                }
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
  )
}

export default CartSummary
