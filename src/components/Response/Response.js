import Murray from '../../assets/Murray';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './Response.css';
import response from '../../actions/action.js';
import reducer from '../../reducers/reducer.js';

const findNode = (id) => {
    return Murray.find(node => node.node_name === id)
}

const Response = () => {
    const [currentNode, setCurrentNode] = useState(
        null
    )

    useEffect(() => {
        const start = findNode('START')
        const next = findNode(start.next)
        this.props.response(next)
    }, [])

    const setNode = (choice) => {
        const next = findNode(choice)
        this.props.response(next)
        if (!next.choices && Boolean(next.next)) {
            setTimeout(() => setNode(next.next), 4000)
        }
    }


    const className = `dialogue-character-${this.props.currentNode.character[0]}`.toLowerCase()
    return (
        <div>
            <h1>{this.props.currentNode.character[0]}:</h1>
            {this.props.currentNode.text && <p className={className}>{this.props.currentNode.text}</p>}
            <br />
            <br />
            <br />

            <div className="Buttons">
                {this.props.currentNode.choices && this.props.currentNode.choices.length && this.props.currentNode.choices.map(choice => {
                    return (<button className='button' onClick={() => setNode(choice.next)}>{choice.text}</button>)
                })}
            </div>
        </div>
    )
}

const mapStateToProps = response => {
    return {
        setNode: (node) => dispatch(response(node))
    };
};

// Dispatch actions/event handlers go here:
const mapDispatchToProps = currentNode => {
    return {
        currentNode: state.currentNode
    }
};

export default connect(mapStateToProps)(Response);