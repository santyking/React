import React,{useState} from 'react'

function AddemailComp() {
    const[emailfields ,setemailfield] = useState([{email:''}])

    const handleInputChange = (index, event) => {
        const newFields = [...emailfields];
        newFields[index].email = event.target.value;
        setemailfield(newFields);
      };

      const addemail =() =>{
        setemailfield([...emailfields,{email:''}])
      }

      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = {
          emails: emailFields.map(field => field.email),
        };
        console.log('Form Submitted:', formData);
        alert('Form submitted successfully!');
      };

  return (
    <div>
        <h1>Add Email fields</h1>
        <form onSubmit={handleSubmit}>
{
    emailfields.map((field , index) =>(
        <div key={index}>
            <input  type='email' value={field.email} onChange={(e)=> handleInputChange(index,e)} />
        </div>
    ))
}
        </form>
        <button onClick={addemail}>Add email</button>
        <button type='submit'>Submit form</button>
    </div>
  )
}

export default AddemailComp