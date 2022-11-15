import React from "react";

function Form({
  firstName,
  lastName, 
  handleFirstNameChange,
  handleLastNameChange,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName}/>
      <input type="text" onChange={handleLastNameChange} value={lastName}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");
//   const[newsletter, setNewsletter] = useState(false);

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   function handleNewsletterChange(event) {
//     setNewsletter(event.target.checked);
//   }

//   return (
//     <form>
//       <label htmlFor= "newsletter">Subcribe to our Newsletter?</label>
//       <input 
//         type="checkbox" 
//         id="newsletter" 
//         onChange={handleNewsletterChange} 
//         checked={newsletter}/>
//       <button type="submit">Submit</button>
//       <input type="text" value={firstName} onChange={handleFirstNameChange} />
//       <input type="text" value={lastName} onChange={handleLastNameChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
