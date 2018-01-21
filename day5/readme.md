###### Day 5: Graphs

# Graphs

[Slides](http://slides.com/bgando/graphs-n-paths-32#/)

Graphs are one of the most widely used data structures for studying real-life things. The internet, Google Maps, websites connected with links as edges, mazes are traversable via edges, social media networks, plus there are some mathematical/statistics applications as well.

Graphs are comprised of vertices, connected by edges.

## Vocab

* **Edges:** Represent the connection between 2 vertices; can be directed or undirected.
* **Vertices:** Nodes in the graph.
* **Path:** A Sequence of connected vertices; a simple path has no repeated vertices.
* **Cycles:** A path that is cyclical; a *acyclic graph* has no cycles.


### Common Operations

1. Adding an edge
2. Deleting an edge
3. Detecting an edge
4. Finding the neighbors of a vertex
5. Finding a path btwn two vertices


### Adjacency Matrix

Undirected Graph

![Undirected Graph](https://s3.amazonaws.com/media-p.slid.es/uploads/642472/images/3587200/UNDIRECTED_PNG.png)

What would change if we wanted to use a directed graph? Instead of having a two-way street, we would just put a `1` and `-1` where the nodes could travel:

Directed Graph

![Directed Graph](https://s3.amazonaws.com/media-p.slid.es/uploads/642472/images/3587227/directed.png)

We can also “weight” the edges, like this:

Weighted Directed Graph

![Weighted Directed Graph](https://s3.amazonaws.com/media-p.slid.es/uploads/642472/images/3587260/weighteddown.png)

### Pseudocode

```
Constructor
  initialize matrix

addNode(5) // assume node is 0-10 (value? order?)
  // how do we add the node?
    // Do we add to an already-existing matrix?
    // Do we add a column/row every time?

addEdge(v1, v2) 2,4 // directed? weighted
  //matrix[2,4] = 1
  //matrix[4,2] = 1
```

One thing that doesn’t come up as much is space complexity, but in this case, the space complexity is `O(n^2)`. It adds up fast!
