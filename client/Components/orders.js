import React from 'react';
import ItemList from './ItemList'

class Orders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: this.props ? this.props.orders : []
        };
        this.done = this.done.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(e) {
        if (e.key == 'Enter') {
            let arr = this.state.orders;
            let order = {
                done: false,
                name: this.refs.newOrder.value
            };
            arr.push(order);
            this.refs.newOrder.value = '';
            this.setState({orders: arr});
        }

    }

    remove(i) {
        let arr = this.state.orders;
            arr.splice(i, 1);

        this.setState({orders: arr});
    }

    done(i) {

        let arr = this.state.orders;

        arr[i].done = !arr[i].done;

        this.setState({orders: arr});

    }

    each(text, i) {

            return (<p>
                    <a className="done" onClick={() => this.done(i)}>|V|</a>
                    <a className="del"  onClick={() => this.remove(i)}>|X|</a>
                    <a className="link" href="/home">{text.name}  </a>
                </p>
            );
    }

    render() {
        console.log("renderOrder props-");
        console.log(this.props);

        this.state = {
            orders: this.props ? [...this.props.orders] : []
        };

        return (
            <div>
                {this.props.active > -1 &&
                    (<p>
                        <input
                            placeholder="Add orders to  ..."
                            ref="newOrder"
                            onKeyPress={(e) => this.props.onAddOrder(e)}

                        />
                    </p>)
                }
                <ItemList
                    items = {this.state.orders}
                    onDone = {this.props.onDoneOrder}
                    onRemove = {this.props.onRemoveOrder}
                    active = {-1}

                />

        </div>

        )
    }
}/*
this.state = {
    orders: this.props.orders ? this.props.orders.orders : []
};*/
export default Orders;