import React, {ChangeEvent} from 'react';
import {User} from '../data/types';

type Props = {
    data: User[]
    addUser: () => void;
    deleteUser: (uID: string) => void
    currentValueInput: string
    getCurrentValueInput: (currentValue: string) => void
}

export const UserComponent = ({
                                  data,
                                  currentValueInput,
                                  addUser,
                                  getCurrentValueInput,
                                  deleteUser
                              }: Props): React.ReactElement => {

    const mappedUsers: React.ReactElement[] = data.map(m => {

        const clickHandler = () => {
            deleteUser(m.id)
        }
        return (
            <li key={m.id}>{m.name}
                <button onClick={clickHandler}>delete</button>
            </li>
        )
    })

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        getCurrentValueInput(e.currentTarget.value)

    const blurHandler = () => {
        alert('blur into it!')
    }

    return (
        <div>
            <div>List of student</div>
            <input value={currentValueInput}
                   onChange={changeHandler}
                   onBlur={blurHandler}/>
            <button onClick={addUser}>add</button>
            <ul>{mappedUsers}</ul>
        </div>
    )
}

