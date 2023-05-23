const { default: Link } = require("next/link");

const Card = ({ link, title, description}) => 
    <Link href={link}>
        <div className="mb-4 text-2xl border border-slate-400 rounded-lg m-4 p-6 group-hover:boder-sky-600">
            <h3 className="mb-4 text-2xl group-hover:text-sky-600">
                {title}
            </h3>
            <p className="text-lg">
                {description}
            </p>
        </div>
    </Link>

export default Card;