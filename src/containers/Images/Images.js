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

const Images = ({
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

    const handleClickAllStar = () => {
        console.log("anh tuan")
    }

    const handleClickAllDelete = () => {
        console.log("handle onClick AllDelete")
    }

    const handleClickAllAlbum = () => {
        setAlbumModalVisible(true)
        // open album modal
        console.log("handle click all albums")
    }

    const handleClickAllShare = () => {
        setShareModalVisible(true);
    }

    const handleClickDownload = () => {

    }

    const handleClickAllTag = () => {
        setTagModalVisible(true)
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
                            onClickInfo={() => setInfoModalVisible(true)}
                            onClickDownload={() => handleClickDownload()}/>
                    ]}
                    showLightboxThumbnails={true}
                    margin={4}
                />
                <ImageInfos visible={infoModalVisible} onCloseInfo={() => setInfoModalVisible(false)}/>
                <AlbumModal chosenImageIDs={chosenIndexs} modalVisible={albumModalVisible}
                            onCloseModal={() => setAlbumModalVisible(false)}/>
                <SharingModal chosenImageIDs={chosenIndexs} modalVisible={shareModalVisible}
                              onCloseModal={() => setShareModalVisible(false)}/>
                <TagModal chosenImageIDs={chosenIndexs} modalVisible={tagModalVisible}
                          onCloseModal={() => setTagModalVisible(false)}/>
            </div>
        </div>
    );

}

export default Images;