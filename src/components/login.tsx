import { Paper } from "@mui/material";
import "./login.scss";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {AuthorizationApi} from "../api-clients";
import { configuration } from "@common/common-constants";
import {useUser} from "../data/providers/user";

export const Login = () => {
    const { fetchUser } = useUser();
    const api = new AuthorizationApi(configuration);

    return (
        <Paper className="login-component">
            <GoogleOAuthProvider clientId="500231959926-0v9bs8tddmmultcoo4ojj4k4kcrkgn9s.apps.googleusercontent.com">
                <GoogleLogin
                    theme="filled_blue"
                    size="large"
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        api.authorizationGoogleSignInPost(credentialResponse.credential).then(() => {
                            fetchUser();
                        });
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </Paper>
    )
}