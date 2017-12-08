<template>
    <div class="card card-transparent">
        <div class="card-header ">
            <div class="card-title">修改标签</div>
        </div>
        <div class="card-block">
            <div class="m-t-30 col-md-8 offset-2">
                <div class="info m-t-15">
                    <form role="form" id="tagForm">
                        <div class="form-group">
                            <label>标签名称</label>
                            <input type="text" class="form-control" placeholder="标签名称不能重复，且长度不超过六个字。"
                                   :readonly="!tag.id" maxlength="6"
                                   required="" v-model="tag.name">
                        </div>
                    </form>
                    <div class="m-t-20 text-center">
                        <button class="btn btn-primary" @click="_create">修 改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    module.exports = {
        data(){
            return {
                tag: {
                    name: ""
                }
            }
        },
        mounted(){
            let me = this;
            me._fetchData();
            $('#tagForm').validate();
        },
        methods: {
            _fetchData(){
                let me = this;
                let id = me.$route.params.id;
                me.$http.get("/api/v1.0/admin/tag/findById/" + id).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.tag = data.data.results[0]
                        },
                        503: "当前标签不存在！"
                    })
                }, response => {
                    serviceError(response);
                });
            },
            _create(){
                let me = this;
                if ($('#tagForm').valid() && me.tag.id) {
                    me.$http.put("/api/v1.0/admin/tag/update/" + me.tag.id, me.tag, {
                        params: {
                            name: me.tag.name
                        }
                    }).then(response => {
                        let data = response.data;
                        codeState(data.code, {
                            200: "标签修改成功！"
                        })
                    }, response => {
                        serviceError(response);
                    })
                }
            }
        }
    }
</script>