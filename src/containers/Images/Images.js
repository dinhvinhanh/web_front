import Gallery from "react-grid-gallery";
import React, {useEffect, useState} from "react";
import {Checkbox, Affix} from 'antd';

import CustomHeader from "./CustomHeader/CustomHeader";

import ImageInfos from "../../components/ImageInfos/ImageInfos";
import MultipleSelectHeader from "../../components/MultipleSelectHeader/MultipleSelectHeader";
import AlbumModal from "../../components/AlbumModal/AlbumModal";
import SharingModal from "../../components/SharingModal/SharingModal";
import {imagesHooks} from "../../hooks";

const asdfasdf = [
    {
        src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
        thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "8H (gratisography.com)"
    },
    {
        id: "adfaldfjal;sdfjal;sdal;sdf",
        src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
        thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "286H (gratisography.com)"
    },
    {
        src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
        caption: "315H (gratisography.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "201H (gratisography.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        thumbnailWidth: 313,
        thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        thumbnailWidth: 313,
        thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        thumbnailWidth: 313,
        thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        thumbnailWidth: 313,
        thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
        thumbnailWidth: 120,
        thumbnailHeight: 113,
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        thumbnailWidth: 313,
        thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    }
]


const Demo1 = () => {
    const [images, setImages] = useState(asdfasdf);

    const {
        chosenIndexs,
        handleSelectImageIndex,
        handleSelectAll
    } = imagesHooks.useChosenIndex()

    const [allSelected, setAllSelected] = useState(false);

    const [infoModalVisible, setInfoModalVisible] = useState(false);

    const [albumModalVisible, setAlbumModalVisible] = useState(false)

    const [toolModalVisible, setToolModalVisible] = useState(false);

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

    const handleClickAllFolder = () => {
        // open folder modal
        console.log("handle click all folders")
    }

    return (
        <div style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
        }}>
            {
                chosenIndexs.length !== 0 ? (
                    <Affix offsetTop={10} style={{margin: 10}}>
                        <MultipleSelectHeader
                            onChangeSelectAll={onChangeSelectAll}
                            onClickAllStar={handleClickAllStar}
                            onClickAllDelete={handleClickAllDelete}
                            onClickAllAlbum={handleClickAllAlbum}
                            onClickAllFolder={handleClickAllFolder}/>
                    </Affix>
                ) : null
            }
            <div style={
                {
                    overflowY: "scroll",
                    overflowX: "hidden",
                    maxHeight: "80vh"
                }
            }>
                <Gallery
                    images={images}
                    onSelectImage={onSelectImage}
                    lightboxWidth={1536}
                    customControls={[
                        <CustomHeader
                            onClickInfo={() => setInfoModalVisible(true)}
                            onClickTool={() => setToolModalVisible(true)}/>
                    ]}
                    showLightboxThumbnails={true}
                />
                <ImageInfos visible={infoModalVisible} onCloseInfo={() => setInfoModalVisible(false)}/>
                <AlbumModal chosenImageIDs={chosenIndexs} modalVisible={albumModalVisible} onCloseModal={() => setAlbumModalVisible(false)}/>
                <SharingModal chosenImageIDs={chosenIndexs} modalVisible={false} />
            </div>
        </div>
    );

}

export default Demo1;