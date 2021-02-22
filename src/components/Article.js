function Article({ post }) {
    const {title, date, preview, minutes} = post
    return (
        <article>
            <h3>
                {title}
            </h3>
            <small>
                {date}
            </small>
            <small>
                {minutes < 30 ? ` - ${ '☕️'.repeat(Math.ceil(minutes/5))} ${minutes} min read` : null}
                {minutes >= 30 ? ` - ${ '🍱'.repeat(Math.ceil(minutes/10))} ${minutes} min read` : null}
            </small>
            <p>
                {preview}
            </p>
        </article>
    )
}

export default Article