/*
Create and render an IdCard component with 6 props:

lastName: A string
firstName: A string
gender: A string, 'male' or 'female'
height: A number
birth: A date
picture: A string
Example:

<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
*/

function IdCard({lastName, firstName, gender, height, birth, picture}) {

    // const lastName = props.lastName;
    // const firstName = props.firstName;
    // const gender = props.gender;
    // const height = props.height;
    // const birth = props.birth;
    // const picture = props.picture;

    return (
        <div className='idcard-border'>
            <img
                src = {picture} 
                alt = "photo"
                />
            <div>
              <p><strong>First name:</strong> {firstName}</p>
              <p><strong>Last name:</strong> {lastName}</p>
              <p><strong>Gender:</strong> {gender} </p>
              <p><strong>Height:</strong> {height} </p>
              <p><strong>Birth:</strong> {birth} </p>
            </div>
            
        </div>
    );
};

export default IdCard;