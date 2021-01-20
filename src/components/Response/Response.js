import Murray from '../../assets/Murray';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import './Response.css';
import response from '../../actions/action.js';
// import reducer from '../../reducers/reducer.js';

const findNode = (id) => {
    return Murray.find(node => node.node_name === id)
}

const Response = ({ setNode, currentNode }) => {

    useEffect(() => {
        const start = findNode('START')
        const next = findNode(start.next)
        setNode(next)
    }, [setNode])


    const nextNode = (choice) => {
        const next = findNode(choice)
        setNode(next)
        if (!next.choices && Boolean(next.next)) {
            setTimeout(() => nextNode(next.next), 4000)
        }
    }

    console.log(currentNode);
    if (!Boolean(currentNode)) {
        return null
    }

    const className = `dialogue-character-${currentNode.character[0]}`.toLowerCase()
    return (
        <div>
            <h1>{currentNode.character[0]}:</h1>
            {currentNode.text && <p className={className}>{currentNode.text}</p>}
            <br />
            <br />
            <br />
            <br />
            <div className="Buttons">
                {currentNode.choices && currentNode.choices.length && currentNode.choices.map(choice => {
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
        currentNode: state.currentNode
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Response);