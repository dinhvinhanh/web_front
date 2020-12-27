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

const useUploadImage = () => {
    const uploadImages = (files) => {
        const formData = new FormData()
        formData.append('images', files);
        formData.append('folder_id', 1)

    };
    return {
        uploadImages
    }
}

export default {
    useChosenIndex,
    useUploadImage
}