import Article from './Article'

function ArticleList({posts}) {
    const articlePosts = posts.map((post) => {
        return <Article key={post.id} post={post} />
    })
    return (
        <main>
            {articlePosts}
        </main>
    )
}

export default ArticleList