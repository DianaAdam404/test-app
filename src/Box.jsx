function Box({ text, onClick }) {
    return (
        <article className="box">
            <p>{text}</p>
            <button type="button" onClick={onClick}>
                Click me
            </button>
        </article>
    );
}

export default Box;
