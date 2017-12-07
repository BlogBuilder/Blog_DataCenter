<template>
    <div>
        <!-- START JUMBOTRON -->
        <div class="jumbotron" data-pages="parallax">
            <div class=" container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                <div class="inner">
                    <!-- START BREADCRUMB -->
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">基础</a></li>
                        <li class="breadcrumb-item active">实名认证<a href="javascript:;" data-html="true"
                                                                  data-toggle="tooltip" id="info"
                                                                  data-placement="bottom"
                        ><i class="fa fa-warning text-warning"></i></a></li>
                    </ol>
                    <!-- END BREADCRUMB -->
                </div>
            </div>
        </div>
        <!-- END JUMBOTRON -->
        <!-- START CONTAINER FLUID -->
        <div class="container-fluid container-fixed-lg">
            <!-- BEGIN PlACE PAGE CONTENT HERE -->

            <div class="alert"
                 :class="(state===-1)?'alert-danger':((state===1||state===0)?'alert-warning':'alert-success')"
                 role="alert">
                <button class="close" data-dismiss="alert"></button>
                <template v-if="state===0">
                    <strong>注意: </strong>为了保障您资金安全，必须通过实名认证才能发布／分配需求，实名认证提交后不支持更改。
                </template>
                <template v-if="state===1">
                    <strong>提示: </strong>该账号正进行实名认证，预计需要八小时，请关注相关认证进度。
                </template>
                <template v-if="state===2">
                    <strong>提示: </strong>该账号已经通过实名认证，不支持更改。
                </template>
                <template v-if="state===-1">
                    <strong>注意: </strong>对不起，您提交的信息有误，未能通过实名认证，请重新认证。
                </template>
            </div>
            <div class="m-l-30 m-t-30 col-md-4" v-if="state===1||state===2">
                <h4>实名信息：</h4>
                <div class="info m-t-15">
                    <p>姓名：{{info.name}}</p>
                    <p>证件类型：{{_cardArray(info.card_type)}}</p>
                    <p>证件号码：{{info.card_num}}</p>
                    <p style="font-style:italic" class="m-t-50" v-if="state!=1">认证完成于 {{update_time}} ，谢谢配合！</p>
                    <p style="font-style:italic" class="m-t-50" v-if="state===1">认证申请提交于 {{update_time}} ，谢谢配合！</p>
                </div>
            </div>
            <div class="m-l-30 m-t-30 col-md-4" v-if="state===0||state===-1">
                <h4>实名信息：</h4>
                <div class="info m-t-15">
                    <form role="form" id="certificateForm">
                        <div class="form-group">
                            <label>真实姓名</label>
                            <input type="name" class="form-control" required="" v-model="info.name">
                        </div>
                        <div class="form-group">
                            <label>证件类型</label>
                            <!--<input type="password" class="form-control" required="">-->
                            <select class="cs-select cs-skin-slide form-control" id="card-type"
                                    data-init-plugin="cs-select" v-model="info.card_type">
                                <option value="0">身份证</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>证件号码</label>
                            <input type="text" class="form-control" required="" v-model="info.card_num">
                        </div>
                    </form>
                    <div class="m-t-20 text-center">
                        <button class="btn btn-primary" @click="authentication">提 交</button>
                        <button class="btn btn-default m-l-30" @click="_clearInfo">清 空</button>
                    </div>
                </div>
            </div>
            <!-- END PLACE PAGE CONTENT HERE -->

        </div>
        <!-- END CONTAINER FLUID -->
    </div>
</template>
<script type="es6">
    module.exports = {
        data(){
            return {
                info: {
                    name: "",
                    card_type: 0,
                    card_num: ""
                },
                state: 0,
                update_time: ""
            }
        },
        mounted(){
            let me = this;
            me.fetchData();
            me._initPlugins();
        },
        methods: {
            //获取实名认证数据
            fetchData(){
                let me = this;
                me.$http.get("/api/certificate/info").then(response => {
                    let result = response.data;
                    if (result.code === 200) {
                        let data = result.data;
                        me.state = data.state;
                        switch (data.state) {
                            case 1:
                            case 2://正在审核实名认证信息
                                me.info = data.result;
                                me.update_time = data.update_time;
                                break;
                        }
                    }
                }, response => {
                    serviceError();
                });
            },
            //发送实名认证数据
            authentication(){
                let me = this;
                if (!me.info.name) {
                    error("真实姓名不能为空！");
                    return;
                }
                if (!me.info.card_num) {
                    error("证件号码不能为空！");
                    return;
                }
                me.$http.post("/api/certificate/check", me.info).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200: "实名认证信息提交成功！"
                    })
                }, response => {
                    serviceError();
                });

            },
            //显示身份认证说明
            _initPlugins(){
                $('#info').attr("title", require('html-withimg-loader!../../layout/certification.html')).tooltip();
            },
            //清空表单
            _clearInfo(){
                let me = this;
                me.info = {
                    name: "",
                    card_type: 0,
                    card_num: ""
                }
            },
            //数据字典
            _cardArray(type){
                let array = ['身份证'];
                return array[type];
            }
        }
    }
</script>