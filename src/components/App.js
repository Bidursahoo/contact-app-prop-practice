import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import Contacts from "./Contacts";
let myOwnPic = "https://media.licdn.com/dms/image/D5603AQFyA1hVsK8R_w/profile-displayphoto-shrink_200_200/0/1684927580593?e=1690416000&v=beta&t=Ede7iA0i0OFfvKCdfEgg3ypBwvUGbo74KNIyMJKla9g"

function createCard(contact){
  return <Card 
  key={contact.id}
  id={contact.id}
  name={contact.name} 
  imag={contact.imgURL} 
  tel={contact.phone} 
  email={contact.email} />
}

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imag={myOwnPic}/>

      {Contacts.map(createCard)}
      {/* <Card name={Contacts[1].name} imag={Contacts[1].imgURL} tel={Contacts[1].phone} email={Contacts[1].email} />
      <Card name={Contacts[2].name} imag={Contacts[2].imgURL} tel={Contacts[2].phone} email={Contacts[2].email} />
      <Card name={Contacts[0].name} imag={Contacts[0].imgURL} tel={Contacts[0].phone} email={Contacts[0].email} /> */}
    </div>
  );
}

export default App;
