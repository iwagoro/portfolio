"use client";
import React from "react";
import Link from "next/link";
import Drawer from "./drawer";

export default function TopBar() {
    return (
        <div className="w-screen h-[100px] box-border fixed top-5 left-0 flex justify-center items-center z-50">
            <div className="w-screen max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <img src="./logo.svg" className="ml-10 logo2  " />
                    <p>ockwell</p>
                </Link>
                <div className="mr-10">
                    <Drawer />
                </div>
            </div>
        </div>
    );
}
