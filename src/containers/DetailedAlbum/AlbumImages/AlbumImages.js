import Gallery from "react-grid-gallery";
import React, {useEffect, useState} from "react";
import {Checkbox, Affix} from 'antd';

import AlbumImagesHeader from "./AlbumImagesHeader/AlbumImagesHeader";

import ImageInfos from "../../../components/ImageInfos/ImageInfos";
import AlbumImagesMultipleSelectHeader
    from "../../../components/AlbumImagesMultipleSelectHeader/AlbumImagesMultipleSelectHeader";
import {imagesHooks} from "../../../hooks";

import './AlbumImages.css';

const AlbumImages = ({
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

    return (
        <div className={'images'}>
            {
                chosenIndexs.length !== 0 ? (
                    <Affix offsetTop={10} style={{margin: 10}}>
                        <AlbumImagesMultipleSelectHeader
                            onChangeSelectAll={onChangeSelectAll}
                            onClickAllDelete={handleClickAllDelete} />
                    </Affix>
                ) : null
            }
            <div>
                <Gallery
                    images={images}
                    onSelectImage={onSelectImage}
                    lightboxWidth={1536}
                    customControls={[
                        <AlbumImagesHeader
                            onClickInfo={() => setInfoModalVisible(true)}
                            onClickDelete={() => setDeleteModalVisible(true)}
                            onClickDownload={() => handleClickDownload()}
                            onClickLocation={() => handleClickLocation()}/>
                    ]}
                    showLightboxThumbnails={true}
                    margin={4}
                />
                <ImageInfos visible={infoModalVisible} onCloseInfo={() => setInfoModalVisible(false)}/>
            </div>
        </div>
    );

}

export default AlbumImages;