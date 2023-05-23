const { default: Footer } = require("../Footer")
import style from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={style.Layout}>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;