import React from 'react';
import './Cart.css';
import { Table, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;

    let serialNo = 1;
    const total = cart.reduce((total,course) => total + course.price,0)


    
    return (
        <div className="cart">
            <h3 className="text-center">Order Summery({cart.length})</h3>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Course</th>
                    <th>Price(BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    cart.map(course => 
                    <tr>
                        <td>{serialNo++}</td>
                        <td>{course.course_name}</td>
                        <td>{course.price}</td>
                    </tr>  )
                    }
                </tbody>
                <thead>
                    <tr>
                    <td colSpan="2" className="total text-center">Total price</td>
                    <td className="total">{total}</td>

                    </tr>
                    <tr>
                        <td colSpan="3" className="text-center"><Button className="total checkout-btn" variant="secondary"> 
                        <FontAwesomeIcon icon={faSignInAlt} /> Proceed to Checkout</Button></td>
                    </tr>
                </thead>
            </Table>
            
        </div>
    );
};

export default Cart;