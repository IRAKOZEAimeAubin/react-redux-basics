import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamContainer = ( props ) => {
    return (
        <div className="mx-auto flex flex-col gap-2">
            <h2 className="font-medium text-lg tracking-wide">Number of ice creams - { props.numOfIceCreams }</h2>
            <button className="text-white uppercase tracking-widest font-semibold bg-amber-700 px-5 py-2.5 rounded hover:bg-amber-800 focus:ring-4 focus:ring-amber-300" onClick={ props.buyIceCream }>Buy Ice Cream</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch( buyIceCream() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(IceCreamContainer);