import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { AccountApi, AuthorizationApi, User } from "../../api-clients";
import { configuration } from "@common/common-constants";
import { useNavigate } from "react-router-dom";

interface UserContextValue {
    user: User | null;
    isLoading?: boolean;
    fetchUser: () => void;
    logout: () => void;
}

const UserContext = createContext<UserContextValue | null>(null);
UserContext.displayName = "UserContext";

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    let isLoading: boolean = false;

    const accountApi = new AccountApi(configuration);
    const authorizationApi = new AuthorizationApi(configuration);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        isLoading = true;
        try {
            accountApi.accountUserInfoGet().then(
                userData => {
                    isLoading = false;
                    setUser(userData);
                    navigate("/jobList");
                },
                reason => {
                    navigate("/login");
                })
        }
        catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        authorizationApi.authorizationLogoutPost().then( _=> {
            navigate("/login");
        })
    }

    return (
        <UserContext.Provider
            value={{ user, isLoading, fetchUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
};
