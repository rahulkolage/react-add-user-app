
// Wrapper is element which won't render anything to DOM, but it act as one root component
const Wrapper = props => {
    return props.children;
};

export default Wrapper;