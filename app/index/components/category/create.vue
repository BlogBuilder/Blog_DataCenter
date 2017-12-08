<template>
    <div class="card card-transparent">
        <div class="card-header ">
            <div class="card-title">创建新分类</div>
        </div>
        <div class="card-block">
            <div class="m-t-30 col-md-8 offset-2">
                <div class="info m-t-15">
                    <form role="form" id="categoryForm">
                        <div class="form-group">
                            <label>分类名称</label>
                            <input type="text" class="form-control" placeholder="分类名称不能重复，且长度不超过六个字。" maxlength="6"
                                   required="" v-model="category.name">
                        </div>
                    </form>
                    <div class="m-t-20 text-center">
                        <button class="btn btn-primary" @click="_create">保 存</button>
                        <button class="btn btn-default m-l-30" @click="_clear">清 空</button>
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
                category: {
                    name: ""
                }
            }
        },
        mounted(){
            $('#categoryForm').validate();
        },
        methods: {
            _create(){
                let me = this;
                if ($('#categoryForm').valid()) {
                    me.$http.post("/api/v1.0/admin/category/create", me.category).then(response => {
                        let data = response.data;
                        codeState(data.code, {
                            200(){
                                alert("分类保存成功！");
                                me._clear();
                            }
                        })
                    }, response => {
                        serviceError(response);
                    })
                }
            },
            _clear(){
                let me = this;
                me.category = {
                    name: ""
                };
            }
        }
    }
</script>