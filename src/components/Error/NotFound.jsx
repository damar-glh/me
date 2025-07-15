import './notfound.css';

const NotFound = () => {
    return (
        <section className="notfound section" id="home" data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                 data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <h1 className="notfound__title">404 - Page Not Found</h1>
                <p className="notfound__description">The page you are looking for does not exist. Please check the URL or return to the homepage.</p>
                <p className="notfound__description">If you think this is an error, please contact me.</p>
                <a href="/me/" className="notfound__link button">Go to Homepage</a>
            </div>
        </section>
    )
}

export default NotFound;