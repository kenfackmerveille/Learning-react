import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList () {
    return ( 
        <section className="bookList">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
}

const Book = () => {
    return (<article className="book">
        <Image className="img"/>
        <Title className="h2"/>
        <Autor className="h2"/>
    </article>
    );
};

const Image = () => <img 
src="https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL300_SR300,200_.jpg" alt="Iron Flame (The Empyrean, 2) "/>;
const Title = () => <h2>Iron Flame (The Empyrean, 2) </h2>;
const Autor = () => {
    return <h4>Rebecca Yarros </h4>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
