import React from "react";
import {Redirect} from "react-router-dom";

export class AddArticle extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this); // Перепривязываем this от родителя AddArticle. Кладем объект AddArticle.
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: "",
            text: "",
            author: "",
            info: "",
            redirect: false,
            submitBtn: "disabled"
        };
    }

    // Отправка на сервер полученных данных.
    handleSubmit(event) {
        event.preventDefault();            // переопределение стандартного поведения браузера при отправке формы: перезагрузка страницы.
        if (this.state.info === "") {
            const formData = new FormData();
            formData.append("title", this.state.title);
            formData.append("text", this.state.text);
            formData.append("author", this.state.author);
            fetch("http://p9152834.beget.tech/Blog/php/addArticle.php", {
                method: "POST",
                body: formData
            }).then(response => response.json())
                .then(result => {
                    this.setState({
                            redirect: true
                        }
                    )
                });
        }
    }

    // Обработчик, который реагирует на изменение input.
    // Проверка есть ли в базе данных статья с вводимым названием.
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "title") {
            if (value === "") {
                this.setState( {
                    submitBtn: "disabled"
                })
            }
            const formData = new FormData();
            formData.append("title", value);
            fetch("http://p9152834.beget.tech/Blog/php/checkTitle.php", {
                method: "POST",
                body: formData
            }).then(response => response.json())
                .then(result => {
                    if (result.result === "exist") {
                        this.setState({
                            info: "Статья с таким заголовком уже существует",
                            submitBtn: "disabled"
                        });
                    } else {
                        this.setState({
                            info: "",
                            submitBtn: ""
                        });
                    }
                });
        }

        this.setState({             // AddArticle.setState();
            [name]: value                // [значение из переменной name]. В setState лежит title с каким-то значением name.
        });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/"/>);
        } else {
            return (
                <div className="col-md-5 my-5 mx-auto">
                    <h4 className="mb-5">Новая статья</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input name="title" value={this.state.title} onChange={this.handleInputChange} type="text"
                                   className="form-control"
                                   placeholder="Заголовок статьи"/>
                            <p style={{color: "red"}}>{this.state.info}</p>
                        </div>
                        <div className="mb-3">
                        <textarea name="text" value={this.state.text} onChange={this.handleInputChange} type="text"
                                  className="form-control" placeholder="Текст статьи"/>
                        </div>
                        <div className="mb-3">
                            <input name="author" value={this.state.author} onChange={this.handleInputChange} type="text"
                                   className="form-control" placeholder="Автор"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" disabled={this.state.submitBtn} className="form-control btn btn-primary" value="Опубликовать"/>
                        </div>
                    </form>
                </div>
            );
        }
    }
}