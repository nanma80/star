import React from "react";
import App from './App';

class PolytopeData extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        <div>
        When I created this website, I generated the data for the polytopes including the 120-cell, the 600-cell,
        and 10 star polytopes. It includes the coordinates of the vertices, and the definition of edges, faces, and cells.
        I generated them using the <a href="https://www.wolfram.com/engine/" target="_blank" rel="noopener noreferrer">Wolfram Engine</a>.
        I exported the data to a JSON format so that it can be used in other platforms.
        If you are interested in the data, please come
        to <a href="https://github.com/nanma80/star-polytope/tree/master/data/json" target="_blank" rel="noopener noreferrer">this folder</a>.
        
        <ul>
        <li>
        The file names have the pattern like "polytope_x_y_z.json". It represents the polytope with the Schläfli symbol {'{'}x, y, z{'}'}.
        The number 52 means 5/2. For example, the file polytope_52_3_5.json is for the polytope {'{'}52, 3, 5{'}'}.
        </li>

        <li>
        The content of each file is in JSON with the following structure:
        <div>
        <code>
        {'{ "vertices": [...], "edges": [...], "faces": [...], "cells": [...] }'}
        </code>
        </div>
        </li>

        <li>
        The value of "vertices" is a length-n array for n vertices. Each element of the array, representing a 4D vertex, is a length-4 array. Each element of the length-4 array
        represents a component in the 4 dimensional vector. Each element is not purely a number, but a length-2 array <code>[a, b]</code>. This array represents the number <code>a + b * phi</code>,
        where <code>phi</code> is the golden ratio (1+sqrt(5))/2.
        For example, the following length-4 array:
        <div>
        <code>
        [[-1,1],[1,0],[0,-1],[0,0]]
        </code>
        </div>
        represents the 4-dimensional vector
        <div>
        <code>
        (-1 + phi, 1, -phi, 0) = (1/phi, 1, -phi, 0)
        </code>
        </div>
        I use <code>[a, b]</code> to represent a real number so that 
        I can deal with irrational numbers in the golden ratio field without compromising precision. 
        I only need <code>a</code> and <code>b</code> to be integers for the polytopes in this website.
        </li>

        <li>
        The value of "edges" is a length-m array for m edge. 
        Each element of the array, representing an edge, is a length-2 array. The length-2 array consists of the indices of the start and end vertices. For example,
        the edge <code>[0, 22]</code> means connecting the vertices with indices 0 and 22 to form an edge. The indices are zero based.
        </li>

        <li>
        The value of "faces" is a length-l array for l faces. 
        Each element of the array, representing a face, is an array. The array consists of the indices of the edges needed to form the face. For example,
        the face <code>[0, 2, 35, 37, 100]</code> means that this face is bounded by edges with indices 0, 2, 35, 37, and 100. The indices are zero based.
        </li>

        <li>
        The value of "cells" is a length-k array for k cells. 
        Each element of the array, representing a cell, is an array. The array consists of the indices of the faces on the boundary of the cell. The indices are zero based.
        </li>
        </ul>
        </div>

        The Wolfram scripts I used to created the images are all
        in <a href="https://github.com/nanma80/star-polytope" target="_blank" rel="noopener noreferrer">this Github 
        repo</a>. This website 
        is hosted by Github Pages 
        from <a href="https://github.com/nanma80/star" target="_blank" rel="noopener noreferrer">the other Github repo</a>.
        Images were copied over from the script repo to the website one. 
        All the text is written in the website repo.
        Feel free to create issues or pull requests.

    </div>)
    ;

    this.state.contentHeader = (<span>4D polytope data set</span>)
  }
}

export default PolytopeData;

