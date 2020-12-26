import Gallery from "react-grid-gallery";
import React, {useEffect, useState} from "react";
import {Checkbox, Affix} from 'antd';

import TrashImagesMultipleSelectHeader
    from "../../../components/TrashImagesMultipleSelectHeader/TrashImagesMultipleSelectHeader";
import {imagesHooks} from "../../../hooks";

import './TrashImages.css';

const TrashImages = ({
                         handledImages
                     }) => {
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
        console.log("handle onClick AllDelete")
    }

    const handleClickAllRestore = () => {

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