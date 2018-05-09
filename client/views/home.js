import React from 'react';

class Order extends React.Component {

  constructor(props) {
      super(props);
      this.state = {done: false};
    }
  			
            handledChecked () {
                    this.setState({done: !this.state.done})
            }

            remove () {

                this.props.deleteFromBoard(this.props.index);

            }

            renderDone () {
                return (
                    <div>
                        <input type = "checkbox" onChange={this.handledChecked} defaultChecked={this.state.checked} value="dfdf"/>{this.props.children}
                        <button onClick={() => this.remove()}>Remove</button>
                     </div>
                );
            }

            renderWorking () {
                return (
                    <div>
                        <input type = "checkbox" onChange={this.handledChecked} defaultChecked={this.state.checked} value="dfdf"/>{this.props.children}
                        <button onClick={() => this.remove()}>Remove</button>
                    </div>
                );
            }

           render  () { 
                if (this.state.done) {
                    return this.renderWorking();
                } else {
                    return this.renderDone();
                }

               
           }
        }
class Home extends React.Component {

           

            constructor(props) {
      super(props);
      this.state = {comments: []};
    }

            add(e) {
                if (e.key == 'Enter') {
                    let arr =  this.state.comments;
                    arr.push(this.refs.newOrder.value);
                    this.refs.newOrder.value = '';
                    this.setState({comments: arr});
                }

            }

            removeComment(i) {

                let arr = this.state.comments;
                arr.splice(i, 1);
                this.setState({comments: arr});

            }



            eachComment(text, i) {
                return (<Order key={i} index = {i} deleteFromBoard = {this.removeComment.bind(this)}>
                            {text}
                        </Order>
                        );
            }

            render() {
                console.log(this.props.model);
               

                return (

                    <div>
                        <input
                            ref = "newOrder"
                            onKeyPress={(e) => this.add(e)}
                            placeholder="What needs to be done?"
                        />
                        <div>
                            {
                                this.state.comments.map(this.eachComment, this)
                            }
                        </div>
                        <h3>{this.state.comments.length}</h3>
                    </div>
                );
            }
        };

export default Home;

