---
layout: post
title: BFS for Big Fat Schmucks
description: join me on a journey to competency
summary: Breadth-First (re)Search
tags: coding learning leetcode CS4CS
---

##### Or, Level-Order Traversal

### <u>DEFINITION</u>

Breadth-First Search, or BFS, is an algorithm that traverses a tree or graph, but rather than traversing down through each node's child nodes as soon as they are encountered, it traverses all nodes at each "level" before moving on to that level's nodes' child nodes. In other words, starting with the "root" node, it traverses the root, then traverses all the root's children in the order encountered, then traverses all of those nodes' children, into infinity. It (typically) does this by utilizing a second data structure,usually a queue, as the FIFO (first in, first out) behavior is important to ensure traversal happens in the proper order, and placing unexplored child nodes of each traversed node into this structure. While this queue still has contents (that is, until we've reached a point where no more nodes have child nodes) and what is being searched for hasn't been found, traversal continues.

So, these are the events in order: 
1. Queue is made, with the root as its only contents
2. While the queue has contents,
3. "pop" or "dequeue" the queue into a variable (remove the least recently added node from the queue)
4. process the node to meet your needs
5. "enqueue" or insert into the back of the queue, the child nodes, if any, of this node. Due to the queue's FIFO policy, nodes will be processed in the order added.

A visual representation of BFS in action (white = unexplored, grey = queued to be explored, and black = explored):

{:refdef: style="text-align: center;"}
![stolen from Wikipedia](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif "stolen from Wikipedia")
{: refdef}

### <u>CODE</u>

In Python3:
```python
    # (this definition is for a node of a binary tree)

    # class Node:
    # def __init__(self, val=0, left=None, right=None):
    #    self.val = val
    #    self.left = left
    #    self.right = right

    def BFS(self, root: Optional[Node]):
        queue = [(root)]
        while queue:
            node = queue.pop()
            if node:
                # whatever processing
                queue.append(node.left)
                queue.append(node.right)
```

(let me know if there's demand for showing the code in other languages, this is just what's most native to me)