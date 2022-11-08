// Create a Random component with 2 props:

// min: A number
// max: A number
// The component should display a random integer in the range between the min and the max number.

// Example:

// <Random min={1} max={6}/>
// <Random min={1} max={100}/>

function Random({min, max}){
    return (
        <h2 className="h-border">
            Random value between {min} and {max} =&gt;  
            {Math.floor(Math.random() * (max - min) + min)}
        </h2>
    )
};
export default Random;