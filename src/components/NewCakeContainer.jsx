import { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const NewCakeContainer = ( props ) => {
    const [ number, setNumber ] = useState( 1 );

    return (
        <div className="mx-auto flex flex-col gap-2">
            <h2 className="font-medium text-lg tracking-wide">Number of cakes - { props.numOfCakes }</h2>
            <input type="text" value={ number } onChange={ e => setNumber( e.target.value ) } className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-4 focus:ring-amber-200 block w-full p-2.5" />
            <button className="text-white uppercase tracking-widest font-semibold bg-amber-700 px-5 py-2.5 rounded hover:bg-amber-800 focus:ring-4 focus:ring-amber-300" onClick={ () => props.buyCake( number ) }>Buy { number } Cake(s)</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch( buyCake( number ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( NewCakeContainer );