import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
	const [ user, setUser ] = useState(props.currentUser)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
    }
    useEffect(
        () => {
          setUser(props.currentUser)
        },
        [ props ]
      )

     

	return (
		<form
		onSubmit={event => {
			event.preventDefault()
			if(isNaN(user.username)){
				var error = document.getElementById('nbr')
				error.innerHTML = 'Entrer un nombre'
			}else{
				var err = document.getElementById('nbr')
				err.innerHTML = ''
				props.updateUser(user.id, user)
				document.getElementById('popup').style.display="none"
			}
		}}
		>
        <div className="edit">
            <input type="text" name="username" value={user.username} onChange={handleInputChange} /> <br/>
						<button>Ok</button><p id="nbr"></p>
						<button onClick={()=>props.setEditing(false)} className="button muted-button">Annuler</button>
        </div>			
		</form>
	)
}

export default EditUserForm;

