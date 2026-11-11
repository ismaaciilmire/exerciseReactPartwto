// ContactForm.jsx
import { useState, useEffect } from 'react';


const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {


  const [contact, setContact] = useState(
    editingContact || { id: null, name: '', email: '', phone: '' }
  );

  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: 'edit', payload: contact });
        setIsEditing(false);
      } else {
        dispatch({
          type: 'add',
          payload: { ...contact, id: Date.now(), favorite: false },
        });
      }
      setContact({ id: null, name: '', email: '', phone: '' });
    }
  };

  const handleCancelEdit = () => {
    setContact({ id: null, name: '', email: '', phone: '' });
    setIsEditing(false);
  };

  return (
    <form className='p-4'  onSubmit={handleSubmit}>
      <h3>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
      <div >
        <label>
          Name:
          <input 
           className='bg-gray-100 rounded-full p-2'
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
           className='bg-gray-100 rounded-full p-2'
          
          
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input 
           className='bg-gray-100 rounded-full p-2'
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button className='bg-green-400 p-2 rounded-lg text-white mt-2' type="submit">{isEditing ? 'Update' : 'Add'}</button>
      {isEditing && <button   onClick={handleCancelEdit}>Cancel</button>}
    </form>
  );
};

export default ContactForm;
