import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Idea Pool</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/About"><a className="nav-link" >About</a></Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/Contact"><a className="nav-link" >Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar