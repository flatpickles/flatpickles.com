<div class="links">
    <a href="/">Homepage</a>
    <a href="https://xoxo.zone/@flatpickles">Mastodon</a>
    <a href="https://instagram.com/flatpickles">Instagram</a>
    <a href="https://github.com/flatpickles">GitHub</a>
    <a href="https://man1.biz">LinkedIn</a>
    <a href="/matt-nichols-resume.pdf">Resume</a>
</div>

<style>
    .links {
        margin-top: 1em;
        margin-bottom: 0.8em;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5em;

        font-size: 1.2em;
    }

    a {
        font-family: 'Hobeaux';
    }

    /*
        Size and align links so that there are always the same
        number on each wrapped line (2 or 3).

        todo: mitigate magic numbers in here
    */

    @media ( max-width: 600px) {
        a {
            flex-basis: 25%;
        }

        a:nth-child(3n - 1) {
            text-align: center;
        }
    
        a:nth-child(3n) {
            text-align: right;
        }
    }

    @media ( max-width: 350px) {
        a {
            flex-basis: 45%;
        }

        a:nth-child(odd) {
            text-align: left;
        }

        a:nth-child(even) {
            text-align: right;
        }
    }
</style>