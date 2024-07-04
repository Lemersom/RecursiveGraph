/*

1 - 2 - 3
    |
    4 - 5 - 6 - 7 - 8 - 9 - 10
                        |
                        11

*/

const graph = {
    1: [2],
    2: [3, 4],
    3: [2],
    4: [2, 5],
    5: [4, 6],
    6: [5, 7],
    7: [6, 8],
    8: [7, 9],
    9: [10, 11],
    10: [9],
    11: [9]
}

const hasBeenSeen = {}

function findNode(graph, beginningNode, endNode, corruptedNode) {
    const nodeArray = graph[beginningNode]

    if(!hasBeenSeen[beginningNode]) {
        hasBeenSeen[beginningNode] = true
        for(let i = 0; i < nodeArray.length; i++) {
            if(nodeArray[i] === endNode) {
                return true;
            } else if(nodeArray[i] === corruptedNode) {
                return false
            } else {
                const result = findNode(graph, nodeArray[i], endNode, corruptedNode)
                if(result === true) {
                    return true
                }
            }
        }
    }
    return false

}

let beginning = 2
let end = 9
let corrupted = 7

console.log(`For beginning = ${beginning}\nend = ${end}\ncorrupted = ${corrupted}\nResult = ${findNode(graph, beginning, end, corrupted)}\n`)
