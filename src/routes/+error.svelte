<script>
    import { page } from '$app/stores';

    // Make an aesthetically pleasing error string, including
    // a replacement for the default 'Not Found' message.
    let errorMessage = (() => {
        if ($page.status == 500 || !$page.error) {
            return 'Something went wrong.';
        } else if ($page.error?.message === 'Not Found') {
            return 'This page doesn\'t exist.';
        } else {
            return $page.error?.message;
        }
    })();
</script>

<div class="error-container">
    <h1>Whoops!</h1>
    <p>{errorMessage}</p>
    <nav class="home">
        <a href="/">[Go Home]</a>
    </nav>
</div>

<style>
    h1 {
        font-family: 'Hobeaux';
        font-feature-settings: 'salt';
        font-weight: bold;
        font-size: 4em;
    }

    p {
        font-size: 1.2em;
    }

    a {
        font-size: 1.2em;
        color: var(--transparent-dark-text);
    }

    a:hover {
        color: var(--link-color);
    }

    .error-container {
        width: 100%;
        text-align: center;
        padding-top: var(--page-top-bottom-padding);
        padding-bottom: var(--page-top-bottom-padding);
        padding-left: 1em;
        padding-right: 1em;
    }
</style>