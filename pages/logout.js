import React from 'react';
import {supabase} from "../lib/initSupabase";
import Layout from "../components/Layout";
import {useRouter} from "next/router";

const Logout = () => {
    const router = useRouter()

    async function signOut() {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <Layout title={"Sign Out"}>
            <h1>Logout</h1>
            <div className={`text-center`}>
                <p>Are you sure you want to log out?</p>
                <button className={`primary`} onClick={signOut}>Logout</button>
            </div>
        </Layout>
    );
};

export default Logout;
