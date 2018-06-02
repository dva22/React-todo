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
    this.setActiveTask = this.setActiveTask.bind(this);
    this.setDoneTask = this.setDoneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addOrderToTask = this.addOrderToTask.bind(this);
    this.setDoneOrder = this.setDoneOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    }

    render() {

        if (this.props.navChange === 1) {
            this.setState({active: -1});
            this.props.navChange = 0;
        }
        let isVisibleInputTask = this.props.navItem === 'WORKING';

        return (

            <div className = "container-fluid">

                <div className = "row">

                    <div className = "col-lg-2 col-md-12 taskList text-truncate">
                        {isVisibleInputTask &&
                        (<p>
                            <input
                                placeholder = "Add tasks ..."
                                ref = "new"
                                onKeyPress = {(e) => this.addTask(e)}
                            />
                        </p>)
                        }
                        <ItemList
                            items = {this.state.tasks}
                            onDone = {this.setDoneTask}
                            onRemove = {this.removeTask}
                            onActive = {this.setActiveTask}
                            active = {this.state.active}
                            navItem = {this.props.navItem}
                        />
                    </div>

                    <div className = "col-lg-10 col-md-12 orderList">
                        <Orders
                            orders = {
                                this.state.tasks[this.state.active]
                                    ?
                                    this.state.tasks[this.state.active].orders
                                    :
                                    []
                            }
                            active = {this.state.active}
                            onAddOrder = {this.addOrderToTask}
                            onDoneOrder = {this.setDoneOrder}
                            onRemoveOrder = {this.removeOrder}
                        />
                    </div>

                </div>
            </div>
        );
    }

    //add new task
    addTask(event) {

        if (event.key === 'Enter') {
            let arr = this.state.tasks;
            let task = {
                history: false,
                done: false,
                name: this.refs.new.value,
                orders: [],
                countAllOrders: 0,
                countWorkingOrders: 0
            };

            arr.push(task);
            this.refs.new.value = '';
            this.setState({tasks: arr});
        }

    }

    setDoneOrder(i) {

        this.setState(prevState => {
            //change done
            prevState.tasks[prevState.active].orders[i].done =
                !prevState.tasks[prevState.active].orders[i].done;

            //change count working orders in active task
            if (prevState.tasks[prevState.active].orders[i].done)
                prevState.tasks[prevState.active].countWorkingOrders ++;
            else
                prevState.tasks[prevState.active].countWorkingOrders --;

            return {tasks: [...prevState.tasks]}

        });

    }

    removeOrder(i) {

        this.setState(prevState => {

            //change count working orders in active task
            if (prevState.tasks[prevState.active].orders[i].done)
                prevState.tasks[prevState.active].countWorkingOrders --;

            //change count all orders in active task
            prevState.tasks[prevState.active].orders.splice(i, 1);
            prevState.tasks[prevState.active].countAllOrders --;

            return {tasks: [...prevState.tasks]}
        });

    }

    //add new order in active task
    addOrderToTask(event) {
        if (event.key === 'Enter') {
            let order = {
                done: false,
                name: event.target.value
            };

            event.target.value = '';

            this.setState(prevState => {

                prevState.tasks[prevState.active].orders.push(order);
                prevState.tasks[prevState.active].countAllOrders ++;

                return {tasks: [...prevState.tasks]}
            })
        }
    }

    removeTask(i) {

        this.setState(prevState => {

            let activeTask = this.state.active;

            //if remove active task then has not active task
            if (activeTask > i)
                activeTask -= 1;
            else if (activeTask === i)
                activeTask = -1;

            //at first move to history, then remove
            if (prevState.tasks[i].history)
                prevState.tasks.splice(i, 1);
            else
                prevState.tasks[i].history = true;

            return {
                tasks: [...prevState.tasks],
                active: activeTask
            }
        })
    }

    setDoneTask(i) {

        this.setState(prevState => {
            //if task in history then move to working
            if (!prevState.tasks[i].history)
                prevState.tasks[i].done = !prevState.tasks[i].done;
            else
                prevState.tasks[i].history = false;

            return {tasks: [...prevState.tasks]}
        })
    }

    setActiveTask(i) {
        this.setState({active: i});
    }



}
export default Tasks;

