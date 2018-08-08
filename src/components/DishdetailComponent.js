import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';

class Dishdetail extends Component{

    constructor(props){
        
        super(props);
        console.log('props',props);
    }

    renderDish(dish){
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }

    renderComments(dish){
        if (dish != null){
            return dish.comments.map((comment) => {
                return (
                    <div class="container">
                        <div key={comment.id}>
                            <div>{comment.comment}</div>
                            <div><span>-- {comment.author} , </span> <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</span></div>
                        </div>
                    </div>
                );
            });
        }
        else{
            return(<div></div>);
        }
    }

    render(){
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
            );
    }
}

export default Dishdetail;