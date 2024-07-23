<div class="links">
    <div class="wide">
        <a href="/">Homepage</a>
        <span class="divider">•</span>
        <a href="https://instagram.com/flatpickles">Instagram</a>
        <span class="divider">•</span>
        <a href="https://github.com/flatpickles">GitHub</a>
        <span class="divider">•</span>
        <a href="https://linkedin.com/in/man1">LinkedIn</a>
        <span class="divider">•</span>
        <a href="/matt-nichols-resume.pdf">Resume</a>
    </div>

    <div class="narrow">
        <div class="top">
            <a href="/">Homepage</a>
            <span class="divider">•</span>
            <a href="https://instagram.com/flatpickles">Instagram</a>
            <span class="divider">•</span>
            <a href="https://github.com/flatpickles">GitHub</a>
        </div>
        <div class="bottom">
            <a href="https://linkedin.com/in/man1">LinkedIn</a>
            <span class="divider">•</span>
            <a href="/matt-nichols-resume.pdf">Resume</a>
        </div>
    </div>
</div>

<style lang="scss">
    $break-size: 600px;

    .links {
        font-family: 'Hobeaux';
        margin: 1rem 2rem;
        padding-bottom: 0.5rem;
    }

    a {
        font-family: 'Hobeaux';
        font-feature-settings: 'salt';
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1;

        text-decoration-thickness: 2px;
    }

    .divider {
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.2rem; // center vertically
    }

    /* Kind of a gnarly responsive setup, not beautiful but it works */

    .wide {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .narrow {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        .top, .bottom {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .divider {
            flex-grow: 1;
            min-width: 2rem;
            max-width: 3rem;
        }
    }

    @media ( max-width: ($break-size - 1)) {
        .wide {
            display: none;
        }
    }

    @media ( min-width: $break-size) {
        .narrow {
            display: none;
        }
    }


</style>