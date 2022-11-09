/*
Create a BoxColor component that displays a rectangle with a background color based on props. For this, you will need to add inline styles (documentation).

The component should take 3 props:

r: A number between 0 and 255 representing the amount of red
g: A number between 0 and 255 representing the amount of green
b: A number between 0 and 255 representing the amount of blue
Example:

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
*/

function BoxColor({r, g, b}) {
    const colorStyle = {backgroundColor: `rgb(${r},${g},${b})`};


    return (
        <div className="boxcolor" style={colorStyle}>
            <h2 className="boxcolor-h" >rgb({r},{g},{b})</h2>
            <h2 className="boxcolor-h">#{r.toString(16)}{g.toString(16)}{b.toString(16)}</h2>
        </div>
    )
}
export default BoxColor