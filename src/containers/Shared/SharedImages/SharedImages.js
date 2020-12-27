import Gallery from "react-grid-gallery";
import React, {useEffect, useState} from "react";
import {Checkbox, Affix} from 'antd';

import ImageInfos from "../../../components/ImageInfos/ImageInfos";
import SharedImagesMultipleSelectHeader
    from "../../../components/SharedImagesMultipleSelectHeader/SharedImagesMultipleSelectHeader";

import SharedImagesHeader from "./SharedImagesHeader/SharedImagesHeader";

import {imagesHooks} from "../../../hooks";

import './SharedImages.css';
import {imagesServices} from "../../../services";

import {useHistory} from 'react-router-dom';

const SharedImages = ({
                          handledIDs,
                          handledImages
                      }) => {

    const history = useHistory();

    const [images, setImages] = useState(handledImages);

    // const [imageIDs, setImageIDs] = useState(handledIDs)

    const {
        chosenIndexs,
        handleSelectImageIndex,
        handleSelectAll
    } = imagesHooks.useChosenIndex()

    const [allSelected, setAllSelected] = useState(false);

    const [infoModalVisible, setInfoModalVisible] = useState(false);

    const [folderModalVisible, setFolderModalVisible] = useState(false);

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

    const handleClickDownload = () => {
        console.log("images", images)
        console.log(handledIDs)
        let chosenImageIDs = handledIDs.map((id, index) => {
            if (chosenIndexs.includes(index)) {
                return id
            }
        })
        chosenImageIDs = chosenImageIDs.filter(id => id !== undefined)
        for (let i=0; i < chosenImageIDs.length; i++) {
            imagesServices.downloadImage(chosenImageIDs[i])
        }
    }

    const handleClickAddToPhotos = () => {
        console.log("images", images)
        console.log(handledIDs)
        let chosenImageIDs = handledIDs.map((id, index) => {
            if (chosenIndexs.includes(index)) {
                return id
            }
        })
        chosenImageIDs = chosenImageIDs.filter(id => id !== undefined)
        imagesServices.addToMyCollections(chosenImageIDs).then(
            res => {
                console.log(res);
                history.push('/photos')
            }
        )
    }

    return (
        <div className={'images'}>
            {
                chosenIndexs.length !== 0 ? (
                    <Affix offsetTop={10} style={{margin: 10}}>
                        <SharedImagesMultipleSelectHeader
                            onChangeSelectAll={onChangeSelectAll}
                            onClickAllAddToPhotos={handleClickAddToPhotos}
                            onClickDownload={handleClickDownload}/>
                    </Affix>
                ) : null
            }
            <div>
                <Gallery
                    images={images}
                    onSelectImage={onSelectImage}
                    lightboxWidth={1536}
                    customControls={[
                        <SharedImagesHeader
                            onClickInfo={() => setInfoModalVisible(true)}
                            onClickDownload={() => handleClickDownload()}
                            onClickAddToPhotos={() => handleClickAddToPhotos()}/>
                    ]}
                    showLightboxThumbnails={true}
                    margin={4}
                />
                <ImageInfos visible={infoModalVisible} onCloseInfo={() => setInfoModalVisible(false)}/>
            </div>
        </div>
    );

}

export default SharedImages;