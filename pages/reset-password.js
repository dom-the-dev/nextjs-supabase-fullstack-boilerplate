import React, {useState} from 'react';
import {supabase} from "../lib/initSupabase";
import {withRouter} from "next/router";
import Layout from "../components/Layout";

const ResetPassword = ({router}) => {
    const accessToken = router.query.accessToken
    const [newPassword, setNewPassword] = useState("");
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    async function updatePassword(e) {
        e.preventDefault()

        const {error, data} = await supabase.auth.api
            .updateUser(accessToken, {password: newPassword})
        if (error) {
            console.error(error)
            setError(true)
        }

        if (data) {
            setSuccess(true)
            setTimeout(() => {
                router.push('/')
            }, 500)
        }
    }

    return (
        <Layout title={"Reset password"}>
            {success && "New password set!"}
            {error && "Something went wrong"}

            <h1>Reset your password</h1>

            {!success &&
                <form onSubmit={updatePassword}>
                    <input type="password" placeholder={"New password"} onChange={e => setNewPassword(e.target.value)}/>
                    <button type={"submit"}>Reset</button>
                </form>
            }
        </Layout>
    );
};

export default withRouter(ResetPassword);
