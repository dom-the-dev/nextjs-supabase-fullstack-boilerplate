import React from 'react';
import {supabase} from "../lib/initSupabase";
import Layout from "../components/Layout";

const Profile = ({user}) => {
    return (
        <Layout title={"Profile"}>
            <h1>Profile</h1>
            <p>
                Id: {user.id}
            </p>
            <p>
                Email: {user.email}
            </p>
        </Layout>
    );
};

export default Profile;

export async function getServerSideProps({req}) {
    const {user} = await supabase.auth.api.getUserByCookie(req)

    if (!user) {
        // force supabase sign out
        await supabase.auth.signOut()

        return {
            props: {expired: true}, redirect: {destination: '/login'}
        }
    }

    return {
        props: {
            user
        }
    }
}
