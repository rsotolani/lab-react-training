/* 
Create a Greetings component with 2 props:

lang: A string that can have values: "de", "en", "es" or "fr"
children: A text
The component should display a greeting text in the chosen language.

Example:

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings> */

function Greetings(props) {

    // switch (props.lang) {
    //     case "de":
    //         return()
    // }

    return (
        <h2 className="h-border">
            {props.lang === "de" ? "Hallo" : "Bonjour"} {props.children}
        </h2>
    )
    
}

export default Greetings;