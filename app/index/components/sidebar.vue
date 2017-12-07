<template>
    <!-- BEGIN SIDEBAR -->
    <!-- BEGIN SIDEBPANEL-->
    <nav class="page-sidebar" data-pages="sidebar">
        <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->
        <div class="sidebar-overlay-slide from-top" id="appMenu">

        </div>
        <!-- END SIDEBAR MENU TOP TRAY CONTENT-->
        <!-- BEGIN SIDEBAR MENU HEADER-->
        <div class="sidebar-header">
            <img src="../assets/images/logo_blue.png" alt="logo" class="brand" data-src="../assets/images/logo_blue.png"
                 data-src-retina="../assets/images/logo_blue_2x.png" width="78" height="22">
        </div>
        <!-- END SIDEBAR MENU HEADER-->
        <!-- START SIDEBAR MENU -->
        <div class="sidebar-menu">
            <!-- BEGIN SIDEBAR MENU ITEMS-->
            <ul class="menu-items m-t-30" >
                <li class="m-t-10">
                    <span class="category ">基础</span>
                </li>
                <li>
                    <a href="">
                        <span class="title">概述</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <router-link tag="li" to="/account" activeClass="active">
                    <a href="#">
                        <span class="title">账户信息</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </router-link>
                <li class="">
                    <a href="#">
                        <span class="title">我的钱包</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <router-link tag="li" to="/certification" activeClass="active">
                    <a href="#">
                        <span class="title">实名认证</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </router-link>
                <li class="m-t-10">
                    <span class="category ">需求者</span>
                </li>

                <li class="">
                    <a href="#">
                        <span class="title">我的需求</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <router-link tag="li" to="/certification" activeClass="active">
                    <a href="#">
                        <span class="title">相关文档</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </router-link>

                <li class="m-t-10">
                    <span class="category ">开发者</span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">我的项目</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">技能展示</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">补充信息</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">保证金计划</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>

            </ul>
            <div class="clearfix"></div>
        </div>
        <!-- END SIDEBAR MENU -->
    </nav>
    <!-- END SIDEBAR -->
    <!-- END SIDEBAR -->
</template>
<style>
    .category{
        font-family: Arial, sans-serif;
        display: inline-block;
        padding-left: 15px;
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #6E828A;
        font-weight: bolder;
        clear: both;
    }
</style>