import Murray from '../../assets/Murray';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './Response.css';
import response from '../../actions/action.js';
// import reducer from '../../reducers/reducer.js';

const findNode = (id) => {
    return Murray.find(node => node.node_name === id)
}

const Response = ({ setNode, currentNode }) => {
    const [stateNode, setCurrentNode] = useState(
        null
    )

    useEffect(() => {
        const start = findNode('START')
        const next = findNode(start.next)
        setNode(next)
    }, [setNode])


    const nextNode = (choice) => {
        const next = findNode(choice)
        nextNode(next)
        if (!next.choices && Boolean(next.next)) {
            setTimeout(() => nextNode(next.next), 4000)
        }
    }

    console.log(stateNode);
    if (stateNode === null) {
        return null
    }

    const className = `dialogue-character-${stateNode.character[0]}`.toLowerCase()
    return (
        <div>
            <h1>{stateNode.character[0]}:</h1>
            {stateNode.text && <p className={className}>{stateNode.text}</p>}
            <br />
            <br />
            <div className="Buttons">
                {stateNode.choices && stateNode.choices.length && stateNode.choices.map(choice => {
                    return (<button className='button' onClick={() => nextNode(choice.next)}>{choice.text}</button>)
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