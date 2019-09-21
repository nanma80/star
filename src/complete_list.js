import React from "react";
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class CompleteList extends App {
  constructor(props) {
    super(props);

    this.state.intro = (
        <div>
        <div>
        So far we have seen some examples of 2D star polygons, 
        which can be easily generalized to an infinite family.
        We also see 3D star polyhedra and 4D star polytopes. 
        We also see 
        star tilings in the hyperbolic plane. Let us enumerate all 
        the regular star polytopes and star honeycombs.
        </div>
        </div>
        );


    this.state.content = (<div>
        <h4 id="euclidean">Euclidean spaces</h4>
        <div>
            Here is the complete list of regular star polytopes, in the Euclidean spaces of <strong>all</strong> dimensions:
            <ul>
            <li>
            2D: {'{'}p/q{'}'}, where p and q are coprime integers, p >= 5, 2 {'<='} q {'<'} p/2. 
            See the <Link to='/heptagram#general'>heptagram page</Link> for
            some discussion.
            We require q {'<'} p/2 because if q is between p/2 and p, {'{'}p/q{'}'} is equivalent 
            to {'{'}p/(p-q){'}'}.
            </li>
            <li>
            3D: four Kepler–Poinsot polyhedra,
            as shown in the <Link to='/intro_3d'>3D section</Link> of this website. 
            </li>
            <li>
            4D: ten Schläfli–Hess polytopes,
            as shown in the <Link to='/intro_4d'>4D section</Link> of this website. 
            </li>
            </ul>
            <br/>
            <div>
            As 
            H. S. M. Coxeter pointed out in his 
            book, <a href="https://en.wikipedia.org/wiki/Regular_Polytopes_(book)" target="_blank" rel="noopener noreferrer"><i>Regular Polytopes</i></a>,
            there are no regular star polytopes
            in Euclidean spaces of five or higher dimensions. 

            Although <a href="https://en.wikipedia.org/wiki/Honeycomb_(geometry)" target="_blank" rel="noopener noreferrer">honeycombs</a> exist
            in Euclidean spaces, there
            are no <strong>star</strong> honeycombs in 
            Euclidean spaces of any dimension.
            </div>
        </div>

        <h4 id="honeycomb">Hyperbolic spaces</h4>
        <div>
        In hyperbolic spaces,
        we can find the following star honeycombs:
            <ul>
            <li>
            2D hyperbolic plane: {'{'}m/2, m{'}'} and {'{'}m, m/2{'}'}, 
            where m is any odd integer with m >= 7. 
            See <Link to='/hyperbolic_72_7'>{'{'}7/2, 7{'}'}</Link> and <Link to='/hyperbolic_7_72'>{'{'}7, 7/2{'}'}</Link> for m = 7.
            For an even m, {'{'}m/2{'}'} is 
            not even a polygon, but a compound. For m = 5, the shapes exist, but they
            are not in the hyperbolic plane. 
            They are star polyhedra <Link to='/polyhedron_52_5'>{'{'}5/2, 5{'}'}</Link> and <Link to='/polyhedron_5_52'>{'{'}5, 5/2{'}'}</Link>.
            </li>
            <li>
            4D hyperbolic space: four star 
            honeycombs: {'{'}5/2, 5, 3, 
            3{'}'}, {'{'}3, 3, 5, 
            5/2{'}'}, {'{'}3, 5, 5/2, 
            5{'}'}, {'{'}5, 5/2, 5, 3{'}'}.
            You can see some detailed information <a href="https://en.wikipedia.org/wiki/List_of_regular_polytopes_and_compounds#Star_tessellations_of_hyperbolic_4-space" target="_blank" rel="noopener noreferrer">
            here</a>. They use some of
            the 4D polytopes we discussed here as building blocks. 
            I don't have any idea about how to visualize them.
            </li>
            </ul>
        </div>
        <br/>
        <div>
        H. S. M. Coxeter showed in the paper <i>Regular Honeycombs in Hyperbolic Spaces</i>,
        that there are no star honeycombs in hyperbolic spaces of 3D, 
        or 5 or more dimensions.
        Therefore, the 2D and 4D cases are the only ones in hyperbolic spaces.
        Here is a <a href="https://pdfs.semanticscholar.org/67fa/5c924fc515d05640308fe68f1d0974a3705c.pdf" target="_blank" rel="noopener noreferrer">copy</a> of the paper.
        </div>

        <h4 id="compound">Regular compounds</h4>
        <div>
        As we discussed in the <Link to='/hexagram'>hexagram page</Link>, 
        another way to relax the definition 
        is to consider the regular compounds of 
        multiple polytopes. They can be constructed in a similar way as the star polytopes.
        Read <a href="https://en.wikipedia.org/wiki/List_of_regular_polytopes_and_compounds#Compound_polytopes" target="_blank" rel="noopener noreferrer">
        this</a> if you are interested.
        </div>


    </div>)
    ;

    this.state.contentHeader = (<span>All regular star polytopes</span>)
  }
}

export default CompleteList;

