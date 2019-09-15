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
        which can be easily generalized to an infinite collection.
        We also see 3D star polyhedra and 4D star polytopes. As 
        H.S.M. Coxeter pointed out in his 
        book, <a href="https://en.wikipedia.org/wiki/Regular_Polytopes_(book)" target="_blank" rel="noopener noreferrer"><i>Regular Polytopes</i></a>,
        there are no regular star polytopes
        in Euclidean space of five or higher dimensions.
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
        </div>

        <h4 id="honeycomb">Regular star honeycombs</h4>
        <div>
        If you are really hungry for more star polytopes, you will have to
        generalize and relax the definition of polytopes. We can view tessellations
        of a plane, or honeycombs of space, as special polytopes with infinite faces.
        Think of a plane filled by infinitely many hexagons, or space filled by cubes.
        Unfortunately, although tessellations and honeycombs exist, there
        is no <strong>star</strong> honeycombs in Euclidean spaces of any dimension.
        </div>

        <br/>
        <div>
        When you go a bit further to the hyperbolic spaces,
        you can find some star honeycombs:
            <ul>
            <li>
            2D hyperbolic plane: {'{'}m/2, m{'}'} and {'{'}m, m/2{'}'}, 
            where m is any odd integer with m >= 7. Examples for m = 7
            are <a href="https://en.wikipedia.org/wiki/Order-7_heptagrammic_tiling" target="_blank" rel="noopener noreferrer">{'{'}7/2, 
            7{'}'}</a> and <a href="https://en.wikipedia.org/wiki/Heptagrammic-order_heptagonal_tiling"  target="_blank" rel="noopener noreferrer">{'{'}7, 
            7/2{'}'}</a>.

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
            </li>
            </ul>
        </div>
        <br/>
        <div>
        H.S.M. Coxeter showed in the paper <i>Regular Honeycombs in Hyperbolic Spaces</i>,
        that there are no star honeycombs in hyperbolic spaces of 3 or 5 or more dimensions.
        Therefore the 2D and 4D cases are the only ones in hyperbolic spaces.
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

