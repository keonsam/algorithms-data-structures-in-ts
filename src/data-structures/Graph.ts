type Vertex = number | string;
type Weight = unknown;
type Callback = (v: Vertex) => void;
type Visited = Record<Vertex, boolean>;

interface Edge {
    [key: Vertex]: Record<Vertex, Weight>;
}
function _isEmpty(obj: Object) {
  return Object.keys(obj).length === 0; 
};

interface Dist {
  [key: Vertex]: number;
}

abstract class Graph {
  edges: Edge = {};

  addVertex(vertex: Vertex) {
    this.edges[vertex] = {};
  }

  abstract addEdge(vertex1: Vertex, vertex2: Vertex, weight?: Weight) : void

  abstract removeEdge(vertex1: Vertex, vertex2: Vertex): void

  removeVertex(vertex: Vertex) {
    delete this.edges[vertex];
    for (let adjVertex in this.edges) {
      this.removeEdge(adjVertex, vertex);
    }
  }

  traverseBFS(vertex: Vertex, callback: Callback) {
    const queue: Vertex[] = [];
    const visited: Visited = {};

    queue.push(vertex);

    while (queue.length) {
      const currentVertex = queue.shift();

      if (currentVertex && !visited[currentVertex]) {
        visited[currentVertex] = true;
        callback(vertex);
        for (let adjVertex in this.edges[currentVertex]) {
          queue.push(adjVertex);
        }
      }
    }
  }

  traverseDFS(vertex: Vertex, callback: Callback) {
    const visited = {};
    return this._traverseDFS(vertex, visited, callback);
  }

  private _traverseDFS(vertex: Vertex, visited: Visited, callback: Callback): unknown {
    visited[vertex] = true;
    callback(vertex);
    for (let adjVertex in this.edges[vertex]) {
      if (!visited[adjVertex]) {
        return this._traverseDFS(adjVertex, visited, callback);
      }
    }
  }
};

export class UndirectedGraph extends Graph {
    addEdge(vertex1: Vertex, vertex2: Vertex, weight?: Weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    };

    removeEdge(vertex1: Vertex, vertex2: Vertex) {
        if (this.edges[vertex1] !== undefined) {
            delete this.edges[vertex1][vertex2];
        };

        if (this.edges[vertex2] !== undefined) {
          delete this.edges[vertex2][vertex1];
        }
    }
};

export class DirectedGraph extends Graph {
  addEdge(origVertex: Vertex, destVertex: Vertex, weight?: Weight) {
    if (weight === undefined) {
      weight = 0;
    }
    this.edges[origVertex][destVertex] = weight;
  }

  removeEdge(origVertex: Vertex, destVertex: Vertex) {
    if (this.edges[origVertex] !== undefined) {
      delete this.edges[origVertex][destVertex];
    }
  }

  dijkstra(source: Vertex) {
    const q: Edge = {};
    const dist = {};
    for (let vertex in this.edges) {
      dist[vertex] = Infinity;
      q[vertex] = this.edges[vertex];
    }

    dist[source] = 0;

    while (!_isEmpty(q)) {
      const u = this._extractMin(q, dist);
      delete q[u];
      for (let neighbor in this.edges[u]) {
        const alt = dist[u] + this.edges[u][neighbor];
        if (alt < dist[neighbor]) {
          dist[neighbor] = alt;
        }
      }
    }

    return dist;
  }

  private _extractMin(q: Edge, dist: Dist) {
    let minDistance = Infinity;
    let nodeWithMinDistance: Vertex = "";

    for (let node in q) {
      const distance = dist[node];
      if (distance <= minDistance) {
        minDistance = distance;
        nodeWithMinDistance = node;
      }
    }

    return nodeWithMinDistance;
  }

  topologicalSort() {
    const visited: Visited = {};
    const stack: Vertex[] = [];

    for (let vertex in this.edges) {
      if (!visited[vertex]) {
        this._topologicalSort(vertex, visited, stack);
      }
    }
  }

  private _topologicalSort(vertex: Vertex, visited: Visited, stack: Vertex[]) {
    visited[vertex] = true;
    for(let v in this.edges[vertex]) {
      if (!visited[v]) {
        return this._topologicalSort(v, visited, stack);
      }
    }
    stack.unshift(vertex);
  }
};



const graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 1);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(2,3, 8);
graph1.addEdge(3,4, 10);
graph1.addEdge(4,5, 100);
graph1.addEdge(1, 5, 88);
graph1.traverseBFS(1, console.log);
graph1.traverseDFS(1, console.log);


const digraph1 = new DirectedGraph();
digraph1.addVertex(1);
digraph1.addVertex(2);
digraph1.addEdge(1, 2, 1);
digraph1.addVertex(3);
digraph1.addVertex(4);
digraph1.addVertex(5);
digraph1.addEdge(2, 3, 8);
digraph1.addEdge(3, 4, 10);
digraph1.addEdge(4, 5, 100);
digraph1.addEdge(1, 5, 88);
digraph1.traverseBFS(1, console.log);
digraph1.traverseDFS(1, console.log);




