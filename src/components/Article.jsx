import React from "react";
import {render} from "@testing-library/react";

export class Article extends React.Component {
    constructor() {
        super();
        this.state = {
              post: ""
        };
    }
    render() {
        console.log("Компонент Article отрисовывается");
        return (
            <div className="container col-8">
                <div>
                    <h4>{this.state.title}</h4>
                </div>
                <div className="d-flex justify-content-end">
                    <div>{this.state.author}</div>
                </div>
                <div className="text-start">
                    <div>{this.state.text}</div>
                </div>
                <div className="d-flex justify-content-end">
                    <div>{this.state.date}</div>
                </div>
                <div>
                    <p>ID: {this.state.id}</p>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log("Компонент Article отрисован");
        const formData = new FormData();
        formData.append("id", "id");
         // const body = `{"id": "id"}`;
        fetch("http://p9152834.beget.tech/php/getIdArticle.php", {
            method: "POST",
             body: formData
        })  .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    id: result.id,
                    title: result.title,
                    author: result.author,
                    text: result.text,
                    date: result.date_added
                })
            });
    }
}

