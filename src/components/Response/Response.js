import Murray from '../../assets/Murray';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './Response.css';
import response from '../../actions/action.js';
// import reducer from '../../reducers/reducer.js';

const findNode = (id) => {
    return Murray.find(node => node.node_name === id)
}

const Response = (props) => {
    const [currentNode, setCurrentNode] = useState(
        null
    )

    useEffect(() => {
        const start = findNode('START')
        const next = findNode(start.next)
        props.setNode(next)
    }, [])

    const setNode = (choice) => {
        const next = findNode(choice)
        props.setNode(next)
        if (!next.choices && Boolean(next.next)) {
            setTimeout(() => setNode(next.next), 4000)
        }
    }

    console.log(currentNode);
    if (currentNode === null) {
        return null
    }

    const className = `dialogue-character-${props.currentNode.character[0]}`.toLowerCase()
    return (
        <div>
            <h1>{props.currentNode.character[0]}:</h1>
            {props.currentNode.text && <p className={className}>{props.currentNode.text}</p>}
            <br />
            <br />
            <div className="Buttons">
                {props.currentNode.choices && props.currentNode.choices.length && props.currentNode.choices.map(choice => {
                    return (<button className='button' onClick={() => setNode(choice.next)}>{choice.text}</button>)
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setNode: (node) => dispatch(response(node))
    };
};


const mapStateToProps = state => {
    return {
        currentNode: state.node
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Response);