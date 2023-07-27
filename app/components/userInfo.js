'use client'
import {signIn,signOut} from 'next-auth/react'

export default function UserInfo({session}) {
	const logIn = () => {
		signIn();
	}
	const logOut = () => {
		signOut();
	}
    const profile = () => {
        return (
            <div className="profileWrap">
                <span className="thumdImg">
                    <img src={session.user.image} alt="" />
                </span>
                <span className="nameWrap">
                    <i className="profileName">{session.user.name}</i>
                    <i>{session.user.email}</i>
                </span>
            </div>
        )
    }

    return (
		<>
            { (!session) ? '' : profile() }
            <button className="postBtn" onClick={(!session) ? logIn : logOut}>
                {(!session) ? 'login' : 'logout'}
            </button>
        </>
    )
}