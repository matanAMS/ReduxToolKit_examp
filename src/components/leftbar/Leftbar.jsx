import {
    ExitToAppOutlined,
    FileCopyOutlined,
    GroupOutlined,
    HearingOutlined,
    HomeOutlined,
    List,
    MovieCreationOutlined,
    PhotoSizeSelectActualOutlined,
    ScheduleOutlined,
    Settings,
    ShoppingBasketOutlined,
} from "@material-ui/icons";
import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <MenuLink icon={<HomeOutlined />} text="Home" />
                <MenuLink icon={<List />} text="List" />
                <MenuLink icon={<ShoppingBasketOutlined />} text="products" />
                <MenuLink icon={<GroupOutlined />} text="Group" />
                <MenuLink icon={<FileCopyOutlined />} text="Pages" />
                <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
                <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
                <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
                <MenuLink icon={<HearingOutlined />} text="Wishlist" />
                <MenuLink icon={<Settings />} text="Settings" />
                <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
            </div>
        </div>
    )
}