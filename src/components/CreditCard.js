/*
Create a CreditCard component that displays a rectangle with the information coming from the props.

The component should take 8 props:

type: A string that can be "Visa" or "Master Card"
number: A string that is the number of the credit card. For security reasons, you should only display the 4 last digits 😉
expirationMonth: A number that represents the month, between 1 and 12
expirationYear: A number that represents the year
bank: A string that represents the name of the bank
owner: A string that represents the name of the owner
bgColor: A string for the background color of the card
color: A string for the text color of the card
Take your time to make the component look as close to the expected output as possible. You'll probably want to use flexbox.
*/

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const cores =  {backgroundColor: `${bgColor}`, color: `${color}`};

    return (
        <div className="cards">
            <div className="card" style={cores}>
                {type }
                {number}
                Expires {expirationMonth}/{expirationYear} {bank}
                {owner}
            </div>
        </div>
    )
}
export default CreditCard