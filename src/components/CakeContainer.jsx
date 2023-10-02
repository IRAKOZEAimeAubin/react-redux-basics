import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer ( props ) {
    return (
        <div className="mx-auto flex flex-col gap-2">
            <h2 className="font-medium text-lg tracking-wide">Number of cakes - { props.numOfCakes }</h2>
            <button className="text-white uppercase tracking-widest font-semibold bg-amber-700 px-5 py-2.5 rounded hover:bg-amber-800 focus:ring-4 focus:ring-amber-300" onClick={ props.buyCake }>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch( buyCake() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CakeContainer );