import React, {useState} from 'react';
import {Checkbox, Popover} from "antd";
import {DeleteFilled, StarFilled, ToolFilled} from "@ant-design/icons";

import './MultipleSelectHeader.css';
import Button from "@material-ui/core/Button";

const MultipleSelectHeader = ({
                                  onChangeSelectAll,
                                  onClickAllStar,
                                  onClickAllDelete,
                                  onClickAllAlbum,
                                  onClickAllShare,
                                  onClickAllTag
                              }) => {

    const actions = (
        <div className={'actions'}>
            <Button variant="contained" onClick={onClickAllAlbum}>
                Add to album
            </Button>
            <Button variant="contained" onClick={onClickAllShare} style={{marginTop: 8}}>
                Share
            </Button>
            <Button variant="contained" onClick={onClickAllTag} style={{marginTop: 8}}>
                Add tags
            </Button>
        </div>
    )

    const [starStatus, setStarStatus] = useState(false);

    const handleOnClickAllStar = () => {
        onClickAllStar()
        setStarStatus(!starStatus)
    }

    return (
        <div>
            <div className={'multipleSelectHeader'}>
                <Checkbox onChange={onChangeSelectAll}><strong>SELECT ALL</strong></Checkbox>
                <div className={'multipleIcons'}>
                    <div className={starStatus ? 'multipleIcon like' : 'multipleIcon'}><StarFilled onClick={() => {
                        handleOnClickAllStar()
                    }}/>
                    </div>
                    <div className={'multipleIcon'}><DeleteFilled
                        onClick={onClickAllDelete}/></div>
                    <Popover
                        placement="rightTop"
                        title={<strong>ACTIONS</strong>}
                        content={actions}>
                        <div className={'multipleIcon'}><ToolFilled/></div>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default MultipleSelectHeader