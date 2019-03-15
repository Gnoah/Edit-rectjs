import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
		    onSubmit={event => {
			event.preventDefault()
			if(isNaN(user.username)){
				var error = document.getElementById('nb')
				error.innerHTML = 'Entrer un nombre'
			}else{
				var err = document.getElementById('nb')
				err.innerHTML = ''
				props.addUser(user)
				props.setCount(props.count +1)
				setUser(initialFormState)
			}
			
		}}
		>
        
			<label>Produit </label>
			<input type="text" name="name" className="marg" value={user.name} onChange={handleInputChange} />
			<label className="marger" id="mar">Prix </label>
			<input type="text" name="username" className="marg"value={user.username} onChange={handleInputChange} />
			<label className="marger">Ar </label>
			<button className="btn btn-primary btn-md">Ajouter</button>
			<p id="nb"></p>
		</form>
	)
}

export default AddUserForm