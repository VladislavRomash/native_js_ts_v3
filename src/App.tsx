import React, {useState} from 'react';
import './App.css';
import {UserComponent} from './06_callback/UserComponent';
import {User} from './data/types';
import {user} from './data/data';

function App() {

    const [data, setData] = useState<User[]>(user)
    const [currentValueInput, setCurrentValueInput] = useState<string>('')

    const addUser = () => {
        const newUser: User = {id: crypto.randomUUID(), name: currentValueInput}
        setData([newUser, ...data])
        setCurrentValueInput('')
    }
    const deleteUser = (uID: string) => {
        setData(data.filter(f => f.id !== uID))
    }

    const getCurrentValueInput = (currentValue: string) => {
        setCurrentValueInput(currentValue)
    }

    return (
        <div className="App">
            <UserComponent data={data}
                           addUser={addUser}
                           deleteUser={deleteUser}
                           currentValueInput={currentValueInput}
                           getCurrentValueInput={getCurrentValueInput}
            />
        </div>
    );
}

export default App;
