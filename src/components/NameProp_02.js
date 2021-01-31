//Props - short for properties

//Parameters of a component function that get passed into the
//component to aid in its reuseability.

//They are also dynamic data that can be assigned to child components.

const NameProp = () => {  //property returning React element
    return <h1>Hello,{ props.name }</h1>

}

export default NameProp;

//Create a component called Contacts
//Pass name, age, school, graduationYear props into it
//Return an h3 with name, and a p with remaining information