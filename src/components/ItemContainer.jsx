import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer ( props ) {
    return (
        <div className="mx-auto flex flex-col gap-2">
            <h2 className="font-medium text-lg tracking-wide">Item - { props.item }</h2>
            <button className="text-white uppercase tracking-widest font-semibold bg-amber-700 px-5 py-2.5 rounded hover:bg-amber-800 focus:ring-4 focus:ring-amber-300" onClick={props.buyItem}>Buy Item</button>
        </div>
    );
}

const mapStateToProps = ( state, ownProps ) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    
    return {
        item: itemState
    };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    const dispatchFunction = ownProps.cake ? () => dispatch( buyCake() ) : () => dispatch( buyIceCream() );

    return {
        buyItem:dispatchFunction
    }
};

export default connect( mapStateToProps,mapDispatchToProps )( ItemContainer );