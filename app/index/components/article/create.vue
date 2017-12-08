<template>
    <div class="card card-transparent">
        <div class="card-header ">
            <div class="card-title">创建新文章</div>
        </div>
        <div class="card-block">
            <div class="row">
                <div class="col-xl-6 col-lg-6 ">
                    <!-- START card -->
                    <div class="card card-transparent">
                        <div class="card-block">
                            <!-- BEGIN PlACE PAGE CONTENT HERE -->
                            <div class=" m-t-30 col-md-12">
                                <div class="info m-t-15">
                                    <form role="form" id="articleForm" autocomplete="off"
                                          novalidate="novalidate">
                                        <div class="form-group  required">
                                            <label>文章标题</label>
                                            <input type="name" class="form-control" name="name"
                                                   required
                                                   aria-required="true">
                                        </div>
                                        <div class="form-group  required">
                                            <label>文章类型</label>
                                            <select class="cs-select cs-skin-slide form-control" id="article_type"
                                                    aria-required="true" data-init-plugin="select2" data-disable-search="true">
                                                <option value="2">标准文章</option>
                                                <option value="1">图集文章</option>
                                                <option value="3">视频文章</option>
                                                <option value="4">音频文章</option>
                                            </select>
                                        </div>
                                        <div class="form-group  required">
                                            <label>文章正文</label>
                                            <div id="articleBar" class="toolbar"
                                                 style="border: 1px solid rgba(0, 0, 0, 0.07);flex-wrap:wrap">
                                            </div>
                                            <div id="articleContent"
                                                 style="border:1px solid rgba(0, 0, 0, 0.07);min-height: 300px"></div>
                                        </div>
                                        <div class="m-t-10 m-b-10 pull-right">
                                            <button class="btn btn-info" @click="_filterData">
                                                引用
                                            </button>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="form-group  required">
                                            <label>文章分类</label>
                                            <select class="cs-select cs-skin-slide form-control" id="article_category"
                                                    aria-required="true" data-init-plugin="select2">
                                                <template v-for="item in categoryList">
                                                    <option :value="item.id">{{item.name}}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="form-group  required">
                                            <label>文章标签</label>
                                            <select class="cs-select cs-skin-slide form-control" id="article_tag"
                                                    aria-required="true" multiple data-init-plugin="select2">
                                                <template v-for="item in tagList">
                                                    <option :value="item.id">{{item.name}}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="form-group  required">
                                            <label>摘要</label>
                                            <textarea class="form-control" style="min-height: 100px"
                                                      required aria-required="true">

                                            </textarea>
                                        </div>
                                        <div class="form-group  required">
                                            <label>文章封面</label>
                                            <textarea class="form-control" style="min-height: 100px"
                                                      required aria-required="true" placeholder="多个地址使用“;”号隔开。">
                                            </textarea>
                                        </div>
                                        <div class="m-t-10 m-b-10 pull-right">
                                            <button class="btn btn-info" @click="_filterData">
                                                上传
                                            </button>
                                        </div>
                                        <div class="clearfix"></div>
                                    </form>
                                    <hr>
                                    <div class="m-t-20 text-right">
                                        <button class="btn btn-primary">提交</button>
                                    </div>
                                </div>
                            </div>
                            <!-- END PLACE PAGE CONTENT HERE -->
                        </div>
                    </div>
                    <!-- END card -->
                </div>
                <div class="col-xl-6 col-lg-6">
                    <!-- START card -->
                    <div class="card card-transparent">
                        <div class="card-block typo" v-html="article.content">

                        </div>
                    </div>
                    <!-- END card -->
                </div>
            </div>
        </div>

        <!-- MODAL STICK UP  -->
        <div class="modal fade stick-up" id="quoteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header clearfix text-left">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            <i class="pg-close fs-14"></i>
                        </button>
                        <h5>引用 <span class="semi-bold">源码</span></h5>
                        <p>源码将直接追加至编辑器中。</p>
                    </div>
                    <div class="modal-body">
                        <textarea class="form-control" id="quoteText" style="min-height: 100px"></textarea>
                        <div class="m-t-20 text-right">
                            <button class="btn btn-primary">确定</button>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- END MODAL STICK UP  -->
    </div>
</template>
<style>
    .w-e-menu:first-child {
        z-index: 111 !important;
    }

    .w-e-text img {
        max-width: 100% !important;
    }
</style>
<script type="es6">

    module.exports = {
        data(){
            return {
                categoryList: [],
                tagList: [],
                article: {
                    content: ""
                },
                editor: null
            }
        },
        mounted(){
            let me = this;
            me.editor = new wangEditor('#articleBar', '#articleContent');
            me.editor.customConfig.onchange = function (html) {
                // 监控变化，同步更新到 textarea
                me.article.content = html;
            };
            me.editor.customConfig.zIndex = 100;
            me.editor.customConfig.linkImgCallback = function (url) {
                return me._uploadQiNiu(url);
            };
            me.editor.customConfig.pasteTextHandle = function (content) {
                // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
                return content + '<p>在粘贴内容后面追加一行</p>'
            };

            me.editor.create();
            me._initTotal();
        },
        methods: {
            _initTotal(){
                let me = this;
                me._fetchCategory();
                me._fetchTag();
                $('#articleForm').validate();
                me.$nextTick(() => {
                    $.Pages.initSelect2Plugin();
                })
            },
            _fetchCategory(){
                let me = this;
                me.$http.get("/api/v1.0/category/list").then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.categoryList = data.data.results;
                        }
                    })
                }, response => {
                    serviceError(response);
                })
            },
            _fetchTag(){
                let me = this;
                me.$http.get("/api/v1.0/tag/list").then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.tagList = data.data.results;
                        }
                    });
                }, response => {
                    serviceError(response);
                })
            },
            _filterData(){
                let me = this;
                let data = me.editor.txt.html();
                let imgReg = /<img.*?(?:>|\/>)/gi;
                let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                let arr = data.match(imgReg);
                for (let i = 0; i < arr.length; i++) {
                    let src = arr[i].match(srcReg);
                    //此处上传七牛云
                    data = data.replace(src[1], me._uploadQiNiu(src[1]));
                }
                me.editor.txt.html(data);
            },
            _uploadQiNiu(src){
                console.log(src);
                return "https://cdn.qulongjun.cn/touxiang.jpg"
            }
        }
    }
</script>