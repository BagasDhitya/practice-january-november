import { useState, useEffect } from "react"

export default function StateExample() {
    const [isHide, setIsHide] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [isHide])


    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            {
                loading === false ?
                    <>
                        <button
                            className="p-5 bg-blue-500 rounded-md text-white mb-10"
                            onClick={() => setIsHide(!isHide)}
                        >{isHide ? 'Open box' : 'Hide box'}</button>
                        {
                            isHide === false ?
                                <div className="border rounded-md bg-purple-400 text-white p-5 w-60 h-60 text-center">
                                    <h1>Purple Box</h1>
                                </div> :
                                <div className="text-center">
                                    Box is Hidden
                                </div>
                        }
                    </> :
                    <div className="text-center">
                        <h1>Please wait until your data loaded...</h1>
                    </div>
            }
        </div>
    )
}
