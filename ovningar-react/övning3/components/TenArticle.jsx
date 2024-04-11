import React from 'react'

function TenArticle() {

    const articles = [
        {
            'title': 'Just a random article',
            'image': 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'paragraf':
                "Randomness in the universe is ubiquitous. Here are a few examples, you choose to read this article, randomly. You throw a dice, you get a number, a random number every single time. Let’s say you are taking a bus to your office, you see all sorts of people, how random it is, isn’t it? You go to watch your favorite match in the stadium and people cheer for their favorite team, each one of them yells distinctly.Have you ever seen a sunflower closely? If not, google it right away, look how arbitrarily the seeds are placed, looks beautiful, right? The stars, they are placed randomly, there aren’t any fundamental principles to back this randomness, it’s just, random."

        },
        {
            'title': 'Man Not Sure What More He Must Do To Make Women He Flashes Love Him',
            'image': 'https://images.unsplash.com/photo-1541975120427-a1017e9c618b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'paragraf': "NEW YORK—Sighing deeply as he closed his overcoat yet again and kicked in dismay at the scattered alleyway trash, local man Frank Pendrowski told reporters Tuesday he wasn’t sure what more he could possibly do to make women he flashes love him. For years I’ve put myself out there, exposing my genitals to passersby, and every time I’m left feeling like there’s something lacking in me,” said the 43-year-old, stressing that it was hard to believe in your own self-worth when no one else seemed to believe in you and your semi-engorged penis."
        },
        {
            'title': "‘Beetlejuice’ Sequel Praised For Using Actual Demonic Forces Over CGI",
            'image': 'https://images.unsplash.com/photo-1516771317026-14d76f5396e5?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'paragraf': "LOS ANGELES—Following the release of the sequel’s first trailer, fans and critics praised Beetlejuice Beetlejuice director Tim Burton for opting to use actual demonic forces in his film rather than attempting to recreate them using CGI. “It’s honestly so refreshing to see a modern production using good old-fashioned black magic, said movie vlogger and self-professed Beetlejuice fan Sabrina Tomczak” who lauded star Michael Keaton for learning to spin his head 360 degrees on his shoulders after weeks of training with a satanic high priestess. “Instead of acting in front of a green screen, you can tell the whole cast really is confronting demonic forces summoned straight from hell. Sure, there are the added dangers that a few people from craft services might get dragged into the underworld, but at the end of the day, the benefits outweigh the costs."
        },
    ]

    return articles.map(article =>
        <article className='ten-article'>
            <h3 className='ten-article__title'>{article.title}</h3>
            <img className='ten-article__image' src={article.image} />
            <section className='ten-article__text-container'>
                <p className="ten-artivle__description"> {article.paragraf} </p>
            </section>
        </article>
    )
}

export default TenArticle
