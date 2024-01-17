# Graph Algorithm

- [Graph Algorithm](#graph-algorithm)
  - [Graph terminology](#graph-terminology)
    - [Type of edges](#type-of-edges)
    - [Degree](#degree)
    - [Path](#path)
    - [Cycle](#cycle)
    - [Tree](#tree)
  - [Eulerian Path and Cycle](#eulerian-path-and-cycle)
  - [Graph traversal (Graph search)](#graph-traversal-graph-search)
    - [BFS applications](#bfs-applications)
    - [Finding a longest path on a tree](#finding-a-longest-path-on-a-tree)

---

## Graph terminology

A **graph** $G$ is a pair of $V$ and $E$, i.e., $G = (V, E)$, where

- $V =$ set of vertices
- $E =$ set of edges

### Type of edges

- Undirected vs. Directed

  - Undirected: edge $(u, v) = (v, u)$
  - Directed: edge $(u, v)$ goes from vertex $u$ to vertex $v$

  ![image](https://storage.googleapis.com/algodailyrandomassets/curriculum/graphs/implementing-graphs-graph.png)

- Unweighted vs. Weighted

  - Weighted: graph associates weights with edges

- Simple vs. Multigraph
  f ![image](https://miro.medium.com/v2/resize:fit:1400/1*gc_apWNe2s9lXzbvl_HTYg.png)

### Degree

The **degree** of a vertex $v$ is the number of edges incident to $v$.

- Even vertices = vertices with even degree
- Odd vertices = vertices with odd degree

In a directed graph,

- In-degree of $v$ = the number of edges entering $v$
- Out-degree of $v$ = the number of edges leaving $v$

### Path

A **path** in a graph is a sequence of edges connecting a sequence of vertices.

- A sequence of vertices $v_1, v_2, \dots, v_k$ is a path if $(v_{i-1}, v_i) \in E$ for all $i = 1, 2, \dots, k$
- A path's **length** is the number of edges in the path
- A path is **simple** if all vertices are distinct

Vertex $v$ is **reachable** from vertex $u$ if there is a path from $u$ to $v$.

- An undirected graph is **connected** or a directed graph is **strongly connected**, if every vertex is reachable from all others.

### Cycle

A **cycle** is a path $(v_1, v_2, \dots, v_k)$ in which $v_1 = v_k$.

- A cycle is **simple** where $v_1, v_2, \dots, v_{k-1}$ are all distinct

An **acyclic** graph is a graph with no cycles.

### Tree

**Tree** is a connected, acyclic, undirected graph.

- **Internal vertex** of a tree = vertex of degree $\geq 2$
- **External vertex** (or **leaf**) of a tree = vertex of degree $1$

**Forest** is an acyclic, undirected but possibly disconnected graph.

![image](https://slideplayer.com/slide/6626226/23/images/6/Trees+A+tree+is+a+connected%2C+acyclic%2C+undirected+graph..jpg)

<br>

## Eulerian Path and Cycle

Let $G$ be an undireced, connected graph.

- $G$ has an Eulerian cycle $\iff$ **all** vertex of $G$ has **even** degree
- $G$ has an Eulerian path $\iff$ $G$ has **exactly 0 or 2 odd vertices**

[Eulerian path and circuit for undirected graph](https://www.geeksforgeeks.org/eulerian-path-and-circuit/)

<br>

## Graph traversal (Graph search)

- [The 2 Most Popular Graph Traversal Algorithms](https://www.graphable.ai/blog/best-graph-traversal-algorithms/)
- [Depth First Search or DFS for a Graph](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)

### BFS applications

- Finding a shortest path on an unweighted graph
  - Path length = number of edges
- Finding **connected components** on an undirected graph
- Finding a longest path on a tree
  - The length of the longest path = the **diameter** of the tree

### Finding a longest path on a tree

- Observation 1 - A longest path will always occur between two leaf vertices
- Observation 2 - Selecting any vertex as the root, a longest path always has at least one end farthest from the root

Thus, to find a longest path on a tree $T,
1. $BFS(T, s)$, where $s$ is any vertex; let $z$ be the vertex farthest from $s$
2. $BFS(T, z)$; let $y$ be the vertex farthest from $z$
3. $(y,z)$ is a longest path on $T$