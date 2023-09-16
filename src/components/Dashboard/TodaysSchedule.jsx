import React, { useState } from 'react';
import { PlusCircleOutlined,WhatsAppOutlined,MailOutlined,YoutubeOutlined,InstagramOutlined, PhoneOutlined } from '@ant-design/icons';

function TodaysSchedule() {
  const [step, setStep] = useState(0); // Change the initial step to 0
  const [profileData, setProfileData] = useState({});
  const [contactData, setContactData] = useState({});

  const handleProfileNext = (data) => {
    setProfileData(data);
    setStep(2); // Move to step 2 (ContactForm)
  };

  const handleContactBack = () => {
    setStep(1); // Move back to step 1 (ProfileForm)
  };

  const handleContactDone = (data) => {
    setContactData(data);
    setStep(3); // Move to step 3 (Details)
  };

  const AddProfileButton = () => {
    const handleAddProfileClick = () => {
      setStep(1); // Move to step 1 (ProfileForm)
    };

    return (
      <div className='addProfile'>
      <PlusCircleOutlined  onClick={handleAddProfileClick} 
      style={{fontSize:"42px",marginLeft:200,marginTop:50}}/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Profile</div>
    );
  };

  const ProfileForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleNextClick = () => {
      handleProfileNext({ name, email, phone });
    };

    return (
      <div>
        <h2>Add a new Profile</h2>
        <h3>Basic &nbsp;&nbsp;&nbsp;Contact</h3>
        <form  className='profileForm'>
          <label>
            Name:<br/>
            <input
              type="text"
              placeholder='ex.john doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:<br/>
            <input
              type="email"
              placeholder='ex.john@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone:<br/>
            <input
              type="tel"
              placeholder='ex.9985775132'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleNextClick} style={{marginTop:5,backgroundColor:"#3E84F8",width:60,height:30}}>
            Next
          </button>
        </form>
      </div>
    );
  };

  const ContactForm = () => {
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');

    const handleBackClick = () => {
      handleContactBack();
    };

    const handleDoneClick = () => {
      handleContactDone({ instagram, youtube });
    };

    return (
      <div>
        <h2>Add a new Profile</h2>
        <h3>Basic &nbsp;&nbsp;&nbsp;Social</h3><br/>
        <form>
          <label>
            Instagram Link:(Optional)<br/>
            <input
              type="text"
              placeholder='Eg..instagram.com/username'
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </label><br/>
          <br />
          <label>
            YouTube Link:(Optional)<br/>
            <input
              type="text"
              placeholder='Eg...youtube/username'
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleBackClick}style={{width:60,height:30,marginLeft:230,marginTop:10}}>
            Back
          </button>&nbsp;&nbsp;
          <button type="button" onClick={handleDoneClick}style={{width:60,height:30,backgroundColor:"#3E84F8",borderRadius:5}}>
            Done
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {step === 0 && <AddProfileButton />} {/* Display the Add Profile button */}
      {step === 1 && <ProfileForm />}
      {step === 2 && <ContactForm />}
      {step === 3 && (
        <div>
          <h2 style={{marginLeft:20}}>{profileData.name}</h2><br/><br/>
          <p style={{marginLeft:20}}><WhatsAppOutlined style={{color:"green",fontSize:24}}/>&nbsp;&nbsp;{profileData.phone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InstagramOutlined style={{color:"pink",fontSize:24}}/>&nbsp;&nbsp;{contactData.instagram}</p><br/>
          <p style={{marginLeft:20}}><MailOutlined style={{color:"violet",fontSize:24}}/>&nbsp;&nbsp;{profileData.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <YoutubeOutlined style={{color:"red",fontSize:24}}/>&nbsp;&nbsp;{contactData.youtube}</p>
        </div>
      )}
    </div>
  );
}

export default TodaysSchedule;
