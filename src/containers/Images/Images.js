import Gallery from "react-grid-gallery";
import React, {useState} from "react";

import CustomHeader from "./CustomHeader/CustomHeader";

import ImageInfos from "../../components/ImageInfos/ImageInfos";

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
        isSelected: true,
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
        isSelected: true,
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
        isSelected: true,
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
        isSelected: true,
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
        isSelected: true,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        isSelected: true,
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
        isSelected: true,
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
        isSelected: true,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    }
]


const Demo1 = () => {
    const [images, setImages] = useState(asdfasdf);

    const [allSelected, setAllSelected] = useState(false);

    const [infoModalVisible, setInfoModalVisible] = useState(false);

    const [toolModalVisible, setToolModalVisible] = useState(false)

    const onSelectImage = (index, image) => {
        const tempImages = images.slice()
        let img = tempImages[index];
        if (img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;
        setImages(tempImages)
    }

    return (
        <div style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            border: "1px solid #ddd",
            overflowY: "scroll",
            overflowX: "hidden",
            maxHeight: "80vh"
        }}>
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
        </div>
    );

}

export default Demo1;