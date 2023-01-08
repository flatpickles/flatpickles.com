<div class="links">
    <a href="/">Homepage</a>
    <a href="https://xoxo.zone/@flatpickles">Mastodon</a>
    <a href="https://instagram.com/flatpickles">Instagram</a>
    <a href="https://github.com/flatpickles">GitHub</a>
    <a href="https://man1.biz">LinkedIn</a>
    <a href="/matt-nichols-resume.pdf">Resume</a>
</div>

<style lang="scss">
    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: calc(var(--padding) / 2);
        margin-top: calc(var(--padding) * 1.5);
    }

    a {
        font-family: 'Hobeaux';
        font-size: 1.2em;
        text-decoration: none;
        color: rgb(11, 85, 11);
    }

    a:hover {
        text-decoration: underline;
    }

    /*
        Size and align links so that there are always the same
        number on each wrapped line (2 or 3).

        todo: mitigate magic numbers in here
    */

    @media ( max-width: 600px) {
        a {
            flex-basis: 25%;
            &:nth-child(3n - 1) {
                text-align: center;
            }
            &:nth-child(3n) {
                text-align: right;
            }
        }
    }

    @media ( max-width: 350px) {
        a {
            flex-basis: 45%;
            &:nth-child(odd) {
                text-align: left;
            }
            &:nth-child(even) {
                text-align: right;
            }
        }
    }
</style>