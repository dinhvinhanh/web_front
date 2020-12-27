import Gallery from "react-grid-gallery";
import React, {useEffect, useState} from "react";
import {Checkbox, Affix} from 'antd';

import TrashImagesMultipleSelectHeader
    from "../../../components/TrashImagesMultipleSelectHeader/TrashImagesMultipleSelectHeader";
import {imagesHooks} from "../../../hooks";

import './TrashImages.css';
import {imagesServices} from "../../../services";

import {useHistory} from 'react-router-dom';

const TrashImages = ({
                         handledIDs,
                         handledImages
                     }) => {
    const history = useHistory();

    const [images, setImages] = useState(handledImages);

    const {
        chosenIndexs,
        handleSelectImageIndex,
        handleSelectAll
    } = imagesHooks.useChosenIndex()

    const [allSelected, setAllSelected] = useState(false);

    const [infoModalVisible, setInfoModalVisible] = useState(false);

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const handleClickDownload = () => {

    }

    const handleClickLocation = () => {

    }

    const onChangeSelectAll = () => {
        let selectAllChecked = !allSelected;
        setAllSelected(selectAllChecked)
        const tempImages = images.slice();
        handleSelectAll(selectAllChecked, tempImages.length)
        if (selectAllChecked) {
            for (let i = 0; i < tempImages.length; i++)
                tempImages[i].isSelected = true;
        } else {
            for (let i = 0; i < tempImages.length; i++)
                tempImages[i].isSelected = false;

        }
        setImages(tempImages)
    }

    const onSelectImage = (index, image) => {
        const tempImages = images.slice()
        let img = tempImages[index];
        if (img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;
        setImages(tempImages)
        handleSelectImageIndex(index)
    }

    const handleClickAllDelete = () => {
        console.log(images)
        console.log(handledIDs)
        console.log(chosenIndexs)
        let chosenImageIDs = handledIDs.map((id, index) => {
            if (chosenIndexs.includes(index)) {
                return id
            }
        })

        chosenImageIDs = chosenImageIDs.filter(id => id !== undefined)
        imagesServices.deleteImageForever(chosenImageIDs).then(
            res => {
                console.log("something")
                console.log(res.data)
                window.location.reload()
            }
        )
    }

    const handleClickAllRestore = () => {
        console.log(images)
        console.log(handledIDs)
        console.log(chosenIndexs)
        let chosenImageIDs = handledIDs.map((id, index) => {
            if (chosenIndexs.includes(index)) {
                return id
            }
        })

        chosenImageIDs = chosenImageIDs.filter(id => id !== undefined)
        imagesServices.restoreTrashedImages(chosenImageIDs).then(
            res => {
                console.log(res)
                history.push('/photos')
            }
        )
    }

    return (
        <div className={'images'}>
            {
                chosenIndexs.length !== 0 ? (
                    <Affix offsetTop={10} style={{margin: 10}}>
                        <TrashImagesMultipleSelectHeader
                            onChangeSelectAll={onChangeSelectAll}
                            onClickAllDelete={handleClickAllDelete}
                            onClickAllRestore={handleClickAllRestore}/>
                    </Affix>
                ) : null
            }
            <div>
                <Gallery
                    images={images}
                    onSelectImage={onSelectImage}
                    lightboxWidth={1536}
                    showLightboxThumbnails={true}
                    margin={4}
                />
            </div>
        </div>
    );

}

export default TrashImages;