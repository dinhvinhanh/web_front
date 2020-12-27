import Gallery from "react-grid-gallery";
import React, {useEffect, useState} from "react";
import {Checkbox, Affix} from 'antd';

import CustomHeader from "./CustomHeader/CustomHeader";

import ImageInfos from "../../components/ImageInfos/ImageInfos";
import MultipleSelectHeader from "../../components/MultipleSelectHeader/MultipleSelectHeader";
import AlbumModal from "../../components/AlbumModal/AlbumModal";
import SharingModal from "../../components/SharingModal/SharingModal";
import TagModal from "../../components/TagModal/TagModal";
import {imagesHooks} from "../../hooks";

import './Images.css';
import {imagesServices} from "../../services";

const Images = ({
                    handledImages,
                    imagesIDs
                }) => {
    const [images, setImages] = useState(handledImages);

    const {
        chosenIndexs,
        handleSelectImageIndex,
        handleSelectAll
    } = imagesHooks.useChosenIndex()

    const [allSelected, setAllSelected] = useState(false);

    const [infoModalVisible, setInfoModalVisible] = useState(false);

    const [albumModalVisible, setAlbumModalVisible] = useState(false);

    const [shareModalVisible, setShareModalVisible] = useState(false);

    const [toolModalVisible, setToolModalVisible] = useState(false);

    const [tagModalVisible, setTagModalVisible] = useState(false);

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

    const [chosenIndex, setChosenIndex] = useState(0);

    const onSelectImage = (index, image) => {
        setChosenIndex(index)
        const tempImages = images.slice()
        let img = tempImages[index];
        if (img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;
        setImages(tempImages)
        handleSelectImageIndex(index)
    }

    const handleClickAllStar = () => {
        let chosenImageIDs = imagesIDs.map((id, index) => {
            if (chosenIndexs.includes(index)) {
                return id
            }
        })
        chosenImageIDs = chosenImageIDs.filter(id => id !== undefined)
        imagesServices.starImagesMultiple(chosenImageIDs).then(
            res => {
                window.location.reload()
            }
        )
    }

    const handleClickAllDelete = () => {
        let chosenImageIDs = imagesIDs.map((id, index) => {
            if (chosenIndexs.includes(index)) {
                return id
            }
        })
        chosenImageIDs = chosenImageIDs.filter(id => id !== undefined)
        imagesServices.trashImagesMultiple(chosenImageIDs).then(
            res => {
                window.location.reload()
            }
        )
    }

    const handleClickAllAlbum = () => {
        setAlbumModalVisible(true)
        // open album modal
        console.log("handle click all albums")
    }

    const handleClickAllShare = () => {
        setShareModalVisible(true);
    }

    const handleClickAllTag = () => {
        setTagModalVisible(true)
    }

    const handleChosenImageIDs = () => {
        let chosenImageIDs = imagesIDs.map((id, index) => {
            if (chosenIndexs.includes(index)) {
                return id
            }
        })
        return  chosenImageIDs.filter(id => id !== undefined)
    }

    const handleClickInfo = (index) => {
        console.log(chosenIndex)
        console.log()
    }

    const handleClickDownload = (index) => [
        console.log(index)
    ]

    const onClickImage = (index) => {
        console.log(index)
    }

    return (
        <div className={'images'}>
            {
                chosenIndexs.length !== 0 ? (
                    <Affix offsetTop={10} style={{margin: 10}}>
                        <MultipleSelectHeader
                            onChangeSelectAll={onChangeSelectAll}
                            onClickAllStar={handleClickAllStar}
                            onClickAllDelete={handleClickAllDelete}
                            onClickAllAlbum={handleClickAllAlbum}
                            onClickAllShare={handleClickAllShare}
                        onClickAllTag={handleClickAllTag}/>
                    </Affix>
                ) : null
            }
            <div>
                <Gallery
                    images={images}
                    onSelectImage={onSelectImage}
                    lightboxWidth={1536}
                    customControls={[
                        <CustomHeader
                            onClickInfo={handleClickInfo}
                            onClickDownload={handleClickDownload}/>
                    ]}
                    showLightboxThumbnails={true}
                    margin={4}
                />
                <ImageInfos visible={infoModalVisible} onCloseInfo={() => setInfoModalVisible(false)}/>
                <AlbumModal chosenImageIDs={handleChosenImageIDs()} modalVisible={albumModalVisible}
                            onCloseModal={() => setAlbumModalVisible(false)}/>
                <SharingModal chosenImageIDs={handleChosenImageIDs()} modalVisible={shareModalVisible}
                              onCloseModal={() => setShareModalVisible(false)}/>
                <TagModal chosenImageIDs={handleChosenImageIDs()} modalVisible={tagModalVisible}
                          onCloseModal={() => setTagModalVisible(false)}/>
            </div>
        </div>
    );

}

export default Images;