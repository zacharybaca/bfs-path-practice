
function findNeighbors(node, matrix) {
  const [row, col] = node;
    const neighbors = [];
    // Up
    if (row > 0) {
        neighbors.push([row - 1, col])
    }
    // Down
    if (row < matrix.length - 1) {
        neighbors.push([row + 1, col])
    }
    // Left
    if (col > 0) {
        neighbors.push([row, col - 1])
    }
    // Right
    if (col < matrix[0].length - 1) {
        neighbors.push([row, col + 1])
    }

    return neighbors
}







function bfsPath(matrix, startNode, endValue) {
    //Create a queue. Create a separate array containing the starting node. Enqueue this array. The enqueued array is the current path.
    const queue = [[startNode]];
    let path = [];
    //Create a set to store visited nodes
    const visited = new Set();
    //Add the starting node to the visited set before looping
    visited.add(`${startNode}`)
    //If the coordinates of the starting node's value in the matrix equals endValue return startNode
    if (matrix[startNode[0]][startNode[1]] === endValue) return [startNode];
    //While the queue is not empty, repeat steps 4-6
    while (queue.length) {
    //Dequeue the first path, and save it in a variable
    let currentPath = queue.shift();
    //Save the last node in the path in a variable (DO NOT pop it)
    let lastNode = currentPath[currentPath.length - 1];
    //Add the lastNode to the path to be returned
    path.push(lastNode);
    //IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
    if (matrix[lastNode[0]][lastNode[1]] === endValue) return path;
    // Get Neighbors of current node
    let neighbors = findNeighbors(lastNode, matrix);
    //For each unvisited neighbor of the last node:
    for (let neighbor of neighbors) {
        if (!visited.has(`${neighbor}`)) {
        //Add it to the visited nodes set
        visited.add(`${neighbor}`);
        //Copy the saved path, and add the neighbor to the end. Enqueue this new path
        queue.push([...currentPath, neighbor]);
        }
    }
    //If the queue has become empty without finding the thing, then the thing has not been found. Return false, an error, or a message as appropriate for the problem you are solving.

    }
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];




// EXAMPLE TESTS #2. Tests for bfsPath function

 console.log('First: ', bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

  console.log('Second: ', bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // // value is located at start node
// // // [ [ 2, 2 ] ]

 console.log('Third: ', bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

  console.log('Fourth: ', bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // // is not found
// // // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
