# Computer science fundamentals

## Algorithms and Data Structures

## Data Structures

- ### Stack - LIFO (Last In First Out)
  - **peek()**: see the very top element or node of the Stack
  - **push(value)**: add a node (or element to the top of the Stack
  - **pop()**: remove an element or node from the top of the Stack
  - **isEmpty()**: check if Stack is empty
- ### Queue - FIFO (First In First Out)

  - **peek()**: get the very fist element or node in the Queue
  - **enqueue(value)**: add a node or element to the Queue
  - **dequeue()**: remove an element or node from the Queue
  - **isEmpty()**: check if the Queue is empty

- ### Trees

  - #### Binary Search Tree (Balanced)
    - **lookup**: O(log N)
    - **insert**: O(log N)
    - **delete**: O(log N)
  - #### Binary Search Tree (Unbalanced)
    - **lookup**: O(N)
    - **insert**: O(N)
    - **delete**: O(N)

- ### Graphs

---

## Algorithms

- Sorting
- Dynamic Programming
- BFS + DFS (Searching)
- Recursion

**Anatomy of recursion**

- 1- Identify the base case
- 2- Identify the recursive case
- 3- Get closer and closer and return when needed. Usually you have 2 returns (1 for the base case and 1 for the recursive case).

**Sorting**
What sorting algorithm to choose based on the problem?
How to make the right decision?

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

**Elementary sort**

- Bubble Sort - **O(n^2)**
- Insertion Sort
- Selection Sort - **O(n^2)**

**NB:**:

- When the data set is small or data is nearly sorted, use insertion sort over other sorting algorithms.

---

## Big Os

- **O(1)** Constant - no loops
- **O(log N)** Logarithmic - usually searching algorithms have log(n) if they are sorted (Binary Search)
- **O(N)** Linear - for loops while loops

<img src="./assets/images/big-o.png" alt="Big O Complexity Chart" style="width: 70%; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">

<img src="./assets/images/common-ds-ops.png" alt="Common Data Structure Operations" style="width: 70%; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">

<img src="./assets/images/array-sorting.png" alt="Array Sorting" style="width: 70%; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">

## Useful Ressources

- [Know Thy Complexities](https://www.bigocheatsheet.com/)
- [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
- [Visualize data structures and algorithms through animation](https://visualgo.net/en)

## Searching + Traversal

- Linear Search
- Binary Search
- Depth First Search (DFS)
- Breadth First search (BFS)

### BFS + DFS

- All traverals are **O(n)**
- **BFS** is good for
  - Finding the shortest path
  - Closer Nodes
  - Require more memory (downside)
- **DFS**
  - Less memory
  - Does Path Exist?
  - Can Get Slow

### Dynamic Programming

Divide and Conquer + Memmoization

#### Can we use DP to solve a problem ?

1. Can be divided into subproblem
2. Recursive solution
3. Are there repetitive subproblems?
4. Memoize subproblems
