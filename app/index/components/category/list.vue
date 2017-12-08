<template>
    <div class="card card-transparent">
        <div class="card-header ">
            <div class="card-title">分类列表</div>
        </div>
        <div class="card-block">
            <div class="row">
                <div class="col-md-10">
                    <button class="btn btn-info" type="button" onclick='window.location.href="/category/create"'>
                        <i class="pg-form"></i> <span
                            class="bold">创建</span>
                    </button>
                    <button class="btn btn-danger" type="button" @click="_batchDestroy"><i class="pg-trash_line"></i>
                        <span
                                class="bold">删除</span>
                    </button>
                </div>
                <div class="input-group col-md-2">
                    <input type="text" class="form-control" id="searchKey" @keyup.enter="_queryData" placeholder="关键字">
                    <span class="input-group-addon" @click="_queryData">
                        <i class="fa fa-search"></i>
                        </span>
                </div>
            </div>
            <div class="table-responsive">
                <div id="basicTable_wrapper" class="dataTables_wrapper no-footer">
                    <table class="table table-hover dataTable no-footer" id="basicTable" role="grid">
                        <thead>
                        <tr>
                            <th class="text-center">选择</th>
                            <th class="text-center">分类名称</th>
                            <th class="text-center">文章数</th>
                            <th class="text-center">创建时间</th>
                            <th class="text-center">更新时间</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="item in categoryList">
                            <tr role="row" class="odd text-center">
                                <td class="v-align-middle">
                                    <div class="checkbox text-center">
                                        <input type="checkbox" v-model="selected" :value="item.id"
                                               :id="'checkbox'+item.id">
                                        <label :for="'checkbox'+item.id" class="no-padding no-margin"></label>
                                    </div>
                                </td>
                                <td class="v-align-middle">
                                    <p>{{item.name}}</p>
                                </td>
                                <td class="v-align-middle">
                                    <p>{{item.count}}</p>
                                </td>
                                <td class="v-align-middle">
                                    <p>
                                        {{item.create_time}}
                                    </p>
                                </td>
                                <td class="v-align-middle">
                                    <p>{{item.update_time}}</p>
                                </td>
                                <td class="v-align-middle">
                                    <!--<a href="" class="btn btn-primary btn-sm">修 改</a>-->
                                    <router-link class="btn btn-primary btn-sm"
                                                 :to="{ path: '/category/update/'+item.id}">修 改
                                    </router-link>
                                    <button class="btn btn-danger btn-sm" @click="_destroyData(item)">删 除</button>
                                </td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                    <!-- Pagination -->
                    <div class="pagination pull-right m-t-30">
                        <div class="M-box front"></div>
                    </div>
                    <!-- End Pagination -->
                </div>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    module.exports = {
        data(){
            return {
                categoryList: [],
                selected: [],
                currentPage: 1,
                condition: "",
            }
        },
        mounted(){
            let me = this;
            me._initTotal();
        },
        methods: {
            _initTotal(){
                let me = this;
                me._fetchData();
            },
            _fetchData(){
                let me = this;
                me.$http.get("/api/v1.0/admin/category/list/" + me.currentPage, {
                    params: me.condition
                }).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.categoryList = data.data.results;
                            jQuery(".M-box").pagination({
                                pageCount: data.data.totalPage,
                                nextContent: '<i class="ico-arrow-right4"></i>',
                                prevContent: '<i class="ico-arrow-left4"></i>',
                                current: me.currentPage,
                                callback: function (data) {
                                    me.currentPage = data.getCurrent();
                                    me._initTotal();
                                }
                            });
                        }
                    })
                }, response => {
                    serviceError(response);
                })
            },
            _queryData(){
                let me = this;
                let key = $('#searchKey').val();
                if (key) {
                    me.condition = {
                        key
                    }
                } else me.condition = {};
                me._initTotal();
            },
            _batchDestroy(){
                let me = this;
                if (me.selected.length === 0) {
                    error("请先选择需要删除的对象");
                    return;
                }
                confirm("是否批量删除选中对象？", () => {
                    me.$http.delete("/api/v1.0/admin/category/batchDestroy/" + me.selected).then(response => {
                        let data = response.data;
                        codeState(data.code, {
                            200(){
                                alert("删除成功！");
                                me._initTotal();
                            }
                        })
                    }, response => {
                        serviceError(response);
                    });
                });
            },
            _destroyData(item){
                let me = this;
                if (item) {
                    confirm("是否删除" + item.name + "？", () => {
                        me.$http.delete("/api/v1.0/admin/category/destroy/" + item.id).then(response => {
                            let data = response.data;
                            codeState(data.code, {
                                200(){
                                    alert("删除成功！");
                                    me._initTotal();
                                }
                            })
                        }, response => {
                            serviceError(response);
                        });
                    });
                }
            }
        }
    }
</script>