import React from "react";
import {Link} from "react-router-dom";

function Tr(props) {
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td><Link to={"/article/" + props.id}>{props.title}</Link></td>
            <td>{props.author}</td>
            <td>{props.date_added}</td>
            <td>
                <span className="delete-post-btn" onClick={() => {
                    const formData = new FormData();
                    formData.append("id", props.id);
                    fetch("http://p9152834.beget.tech/studies/php/removeArticle.php", {
                        method: "POST",
                        body: formData
                    }).then(response => response.json())
                        .then(result => {
                            let articles = props.parent.state.articles; // скопировали сюда весь массив статей из класса.
                            articles.splice(props.index - 1, 1); // Удаление записи из массива.
                            props.parent.setState({
                                articles: articles
                            })
                        })
                }}>
                    [Удалить]
                </span>
            </td>
        </tr>
    );
}

export class ArticlesList extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        console.log("Компонент ArticlesList отрисован");
        fetch("http://p9152834.beget.tech/studies/php/getArticles.php")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Tr
                        key={i}
                        index={i + 1}
                        id={result[i].id}
                        title={result[i].title}
                        author={result[i].author}
                        date_added={result[i].date_added}
                        parent={this}
                    />)
                }
                this.setState({
                    articles: rows
                })
            })
    }

    render() {
        console.log("Компонент ArticlesList рисуется");
        return (
            <div className="col-md-8 my-5 mx-auto">
                <h4 className="mb-5">Список статей</h4>
                <table className="table text-start">
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Заголовок</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Дата публикации</th>
                        <th scope="col">Управление</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.articles}
                    </tbody>
                </table>
            </div>
        );
    }
}
