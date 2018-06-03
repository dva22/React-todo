import React from 'react';
import ItemList from './ItemList'

class Orders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: this.props ? this.props.orders : []
        };
    }

    render() {

        //if have orders in tasks, take it.
        this.state = {
            orders: this.props ? [...this.props.orders] : []
        };

        // if have not active tasks then not add order
        let isVisibleInput = this.props.active > -1;

        return (
            <div>
                {isVisibleInput &&
                    (<p>
                        <input
                            placeholder="Add orders to  ..."
                            ref="newOrder"
                            onKeyPress={(e) => this.props.onAddOrder(e)}

                        />
                    </p>)
                }

                <ItemList
                    items={this.state.orders}
                    onDone={this.props.onDoneOrder}
                    onRemove={this.props.onRemoveOrder}
                    active={-1}
                />

            </div>

        )
    }
}

export default Orders;