import "./App.css";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";

import { Button } from "flowbite-react";
import Header from "./components/Header";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const authLink = setContext((parent, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <>
                <Button />
                <Header />
                <Outlet />
            </>
        </ApolloProvider>
    );
}

export default App;
