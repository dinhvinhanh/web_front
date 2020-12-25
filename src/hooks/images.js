import {useState} from "react";
import {commonHelper} from "../helpers";

const useChosenIndex = () => {
    const [chosenIndexs, setChosenIndexs] = useState([])

    const handleSelectImageIndex = (index) => {
        const tempChosenIndex = chosenIndexs
        if (tempChosenIndex.includes(index)) {
            commonHelper.removeArrayElement(tempChosenIndex, index)
        } else {
            tempChosenIndex.push(index)
        }
        setChosenIndexs(tempChosenIndex)
    }

    const handleSelectAll = (selected, length) => {
        if (selected) {
            const tempChosenIndex = [...Array(length).keys()]
            setChosenIndexs(tempChosenIndex)
        } else {
            setChosenIndexs([])
        }
    }

    return {
        chosenIndexs,
        handleSelectImageIndex,
        handleSelectAll
    }
}

export default {
    useChosenIndex
}