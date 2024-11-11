<div class="links">
    <div class="link-list">
        <a href="/">Homepage</a>
        <span class="divider">•</span>
        <a href="https://instagram.com/flatpickles">Instagram</a>
        <span class="divider large">•</span>
        <a href="https://github.com/flatpickles" class="large">GitHub</a>
        <span class="divider medium">•</span>
        <a href="https://linkedin.com/in/man1" class="medium">LinkedIn</a>
    </div>
</div>

<style lang="scss">
    $break-size-1: 600px;
    $break-size-2: 450px;

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

    .link-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    @media (max-width: $break-size-1) {
        .large {
            display: none;
        }
    }

    @media (max-width: $break-size-2) {
        .medium {
            display: none;
        }


        .link-list {
            justify-content: center;
            flex-wrap: nowrap;
        }

        .divider {
            width: 3rem;
        }
    }
</style>