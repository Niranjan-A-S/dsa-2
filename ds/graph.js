//!Graphs
/**
 * In a graph each item is called a node or vertex and they are connected to each other with edges
 * The nodes are connected as a network
 * Even trees linked lists etc are type of graphs where the nodes are connected to each other
 */

//!Directed graphs(twitter where users are connected as followers and following) and Undirected graphs(facebook where users are connected as friends)

//!Weighted Graphs (values can be assigned not only to the nodes but also the edges ) and Unweighted Graphs

//!Cyclic(vertices are connected in circular function ) and Acyclic Graphs

/**
 * For example to create this graph There are multiple approaches
 *              2------0
 *             / \
 *            /   \
 *           /     \
 *          1-------3 
 */

//!Edge List
const edgeGraph = [[0, 2], [2, 1], [2, 3], [1, 3]]

//!Adjacent List where the indexes of the array are the actual nodes
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]]

//!Adjacent Matrix where the 1 ans 0s determine whether each nodes are connected to other nodes
const adjacentMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
]
//also in the form of an object
/**
 * {
 *  0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
 * }
 */

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addNode(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return this;
    }

    addEdge(nodeA, nodeB) {
        //undirected graph
        this.adjacentList[nodeA].push(nodeB);
        this.adjacentList[nodeB].push(nodeA);
        return this;
    }

}

const graph = new Graph();
graph.addNode(0).addNode(1).addNode(2).addNode(3).addNode(4).addEdge(1, 2);
console.log(graph);