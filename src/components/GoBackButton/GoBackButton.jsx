import { useRouter } from "next/router";

const GoBackButton = () => {
    const router = useRouter();

    const onClickHandler = () => {
        router.back();
    }

    return (
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-1 px-3 rounded-full absolute top-1/4 left-1/4"
            onClick={onClickHandler}
        >
            &larr;
        </button>
    )
}

export default GoBackButton;