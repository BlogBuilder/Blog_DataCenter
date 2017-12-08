<template>
    <div style="height: 100%">
        <!-- START JUMBOTRON -->
        <div class="jumbotron" data-pages="parallax">
            <div class=" container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                <div class="inner">
                    <!-- START BREADCRUMB -->
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">标签管理</a></li>
                        <li class="breadcrumb-item active" v-if="$route.path.toLowerCase().indexOf('/list')!=-1">我的标签
                        </li>
                        <li class="breadcrumb-item active" v-if="$route.path.toLowerCase().indexOf('/create')!=-1">新标签
                        </li>
                        <li class="breadcrumb-item active" v-if="$route.path.toLowerCase().indexOf('/update')!=-1">修改标签
                        </li>
                    </ol>
                    <!-- END BREADCRUMB -->
                </div>
            </div>
        </div>
        <!-- END JUMBOTRON -->
        <!-- START CONTAINER FLUID -->
        <div class="container-fluid container-fixed-lg bg-white" style="height: 100%">
            <!-- BEGIN PlACE PAGE CONTENT HERE -->
            <transition>
                <router-view></router-view>
            </transition>
            <!-- END PLACE PAGE CONTENT HERE -->
        </div>
        <!-- END CONTAINER FLUID -->
    </div>
</template>