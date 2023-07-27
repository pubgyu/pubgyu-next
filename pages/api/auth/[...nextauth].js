import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '46c7006b6eb82f5514ae',
            clientSecret: '17eddafd0028923d6ce2cafd5b647dbe83d85dd4',
        }),
    ],
    secret : 'xjfrbxo1'
};
export default NextAuth(authOptions); 