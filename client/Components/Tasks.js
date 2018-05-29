import React from 'react';
import Orders from './Orders'
import ItemList from './ItemList'

class Tasks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            active: -1
        };
    this.onActive = this.onActive.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.addOrderToTask = this.addOrderToTask.bind(this);
    this.doneOrder = this.doneOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    }

    addTask(event) {
        if (event.key == 'Enter') {
            let arr = this.state.tasks;
            let task = {
                history: false,
                done: false,
                name: this.refs.new.value,
                orders: [],
            };
            arr.push(task);
            this.refs.new.value = '';
            this.setState({tasks: arr});
        }
    }

    doneOrder(i) {

        this.setState(prevState => {

            prevState.tasks[prevState.active].orders[i].done =
                !prevState.tasks[prevState.active].orders[i].done;

            return {tasks: [...prevState.tasks]}
        });

    }

    removeOrder(i) {

        this.setState(prevState => {

            prevState.tasks[prevState.active].orders.splice(i, 1);

            return {tasks: [...prevState.tasks]}
        });

    }

    addOrderToTask(event) {
        if (event.key == 'Enter') {
            let order = {
                done: false,
                name: event.target.value
            };

            event.target.value = '';

            this.setState(prevState => {

                prevState.tasks[prevState.active].orders.push(order);

                return {tasks: [...prevState.tasks]}
            })
        }
    }

    onRemove(i) {
        let arr = this.state.tasks;
        let active = this.state.active;

        if (active > i)
            active -= 1;
        else if (active == i)
            active = -1;

        if (arr[i].history)
            arr.splice(i, 1);
        else
            arr[i].history = true;

        this.setState({tasks: arr});
        this.setState({active: active});
    }

    onDone(i) {

        let arr = this.state.tasks;

        arr[i].done = !arr[i].done;

        this.setState({tasks: arr});
    }

    onActive(i) {
        this.setState({active: i});
    }


    render() {

        console.log("render Task state-");
        console.log(this.state);

        return (

            <div className="container-fluid">

                <div className="row">

                    <div className="col-lg-2 col-md-12 taskList text-truncate">
                        <p>
                            <input
                                placeholder = "Add tasks ..."
                                ref = "new"
                                onKeyPress = {(e) => this.addTask(e)}
                            />
                        </p>
                        <ItemList
                            items = {this.state.tasks}
                            onDone = {this.onDone}
                            onRemove = {this.onRemove}
                            onActive = {this.onActive}
                            active = {this.state.active}
                        />
                    </div>

                    <div className="col-lg-10 col-md-12 orderList">
                        <Orders
                            orders={
                                this.state.tasks[this.state.active]
                                ?
                                this.state.tasks[this.state.active].orders
                                :
                                []
                            }
                            active = {this.state.active}
                            onAddOrder = {this.addOrderToTask}
                            onDoneOrder = {this.doneOrder}
                            onRemoveOrder = {this.removeOrder}
                        />
                    </div>

                </div>
            </div>
        );
    }
}
export default Tasks;

