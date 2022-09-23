import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: ""}

function Form({ addContact, contacts }) {
    const [form,setForm] = useState (initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        addContact([...contacts, form])
        setForm(initialFormValues)
    }

  return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullname"
                placeholder="Fullname"
                value={form.fullname}
                onChange={onChangeInput}
                required
                />
            </div>
        
            <div>
                <input name="phone_number"
                placeholder="Phone Number"
                value={form.phone_number}
                onChange={onChangeInput}
                required
                />
            </div>

            <div className="btn">
                <button>Add</button>
            </div>
        </form>

    
  )
}

export default Form
