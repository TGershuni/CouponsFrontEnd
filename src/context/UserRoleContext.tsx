import React, { createContext, useContext, useState } from "react";

export const UserRoleContext = createContext<{
    role: "Customer" | "Company" | "Admin";
    setRole: (role:"Customer" | "Company" | "Admin") => void;
}>({
    role: "Customer",
    setRole: () => {},
});

export const UserRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [role, setRole] = useState<"Customer" | "Company" | "Admin">("Customer");
    

    return (
        <UserRoleContext.Provider value={{ role, setRole}}>
            {children}
        </UserRoleContext.Provider>
    );
};

export const useUserRole = () => {
    return useContext(UserRoleContext);
};