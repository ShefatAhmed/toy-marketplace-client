import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToyStars | ${title}`;
    }, [title])
}

export default useTitle;