import Murray from '../../assets/Murray';
import React, { useState, useEffect } from 'react';
import './Response.css'


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
        setCurrentNode(next)
    }, [])

    const setNode = (choice) => {
        const next = findNode(choice)
        setCurrentNode(next)
        if (!next.choices && Boolean(next.next)) {
            setTimeout(() => setNode(next.next), 3000)
        }
    }

    console.log(Murray);
    console.log(currentNode);
    if (currentNode === null) {
        return null
    }

    const className = `dialogue-character-${currentNode.character[0]}`.toLowerCase()
    return (
        <div>
            <h1>{currentNode.character[0]}</h1>
            {currentNode.choices && currentNode.choices.length && currentNode.choices.map(choice => {
                return (<button className={className} onClick={() => setNode(choice.next)}>{choice.text.ENG}</button>)

            })}
            {currentNode.text && <p className={className}>{currentNode.text.ENG}</p>}
        </div>
    )
}

export default Response;