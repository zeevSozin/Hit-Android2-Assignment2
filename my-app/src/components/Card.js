

import './Card.css';
import ExpenseItem from './ExpenseItem';

function Card(props) {

    const classes = 'card ' + props.className;
    return <div className={classes}>
        {props.children}
    </div>
}

export default Card