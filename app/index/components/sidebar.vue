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
            <img src="../assets/images/logo_d2.png" alt="logo" class="brand" data-src="../assets/images/logo_d2.png"
                 width="78" height="22">
        </div>
        <!-- END SIDEBAR MENU HEADER-->
        <!-- START SIDEBAR MENU -->
        <div class="sidebar-menu">
            <!-- BEGIN SIDEBAR MENU ITEMS-->
            <ul class="menu-items m-t-30">
                <li class="m-t-10">
                    <span class="category ">文章管理</span>
                </li>
                <li>
                    <a href="">
                        <span class="title">我的文章</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <router-link tag="li" to="/account" activeClass="active">
                    <a href="#">
                        <span class="title">新文章</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </router-link>
                <li class="">
                    <a href="#">
                        <span class="title">修改文章</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <li class="m-t-10">
                    <span class="category ">分类管理</span>
                </li>

                <router-link tag="li" to="/category/list" activeClass="active">
                    <a href="#">
                        <span class="title">我的分类</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </router-link>
                <router-link tag="li" to="/category/create" activeClass="active">
                    <a href="#">
                        <span class="title">新分类</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </router-link>
                <router-link tag="li" to="/category/update" activeClass="active">
                    <a href="#">
                        <span class="title">修改分类</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </router-link>

                <li class="m-t-10">
                    <span class="category ">标签管理</span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">我的标签</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">新标签</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">修改标签</span>
                    </a>
                    <span class="icon-thumbnail "><i data-feather="list"></i></span>
                </li>
                <li class="m-t-10">
                    <span class="category ">评论管理</span>
                </li>
                <li class="">
                    <a href="#">
                        <span class="title">审核评论</span>
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
    .category {
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