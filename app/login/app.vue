<template>
    <div class="login-wrapper ">
        <!-- START Login Background Pic Wrapper-->
        <div class="bg-pic">
            <!-- START Background Pic-->
            <img src="http://cdn.qulongjun.cn/bg1.png"
                 data-src="http://cdn.qulongjun.cn/bg1.png"
                 data-src-retina="http://cdn.qulongjun.cn/bg1.png" alt=""
                 class="lazy">
            <!-- END Background Pic-->
            <!-- START Background Caption-->
            <div class="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
                <h2 class="semi-bold text-white">
                    落苏博客后台管理系统</h2>
                <p class="small">
                    你懂的越多，懂你的越少。
                </p>
            </div>
            <!-- END Background Caption-->
        </div>
        <!-- END Login Background Pic Wrapper-->
        <!-- START Login Right Container-->
        <div class="login-container bg-white">
            <div class="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
                <img src="./assets/images/logo_new.png" alt="logo" width="250" height="auto">
                <!--<p class="p-t-15">使用管理员账号登陆</p>-->
                <!-- START Login Form -->
                <form id="form-login" class="p-t-15 m-t-50" role="form" action="index.html">
                    <!-- START Form Control-->
                    <div class="form-group form-group-default">
                        <label>用户名</label>
                        <div class="controls">
                            <input type="text" name="username" placeholder="请输入管理员账号" class="form-control"
                                   v-model="loginInfo.username" required>
                        </div>
                    </div>
                    <!-- END Form Control-->
                    <!-- START Form Control-->
                    <div class="form-group form-group-default">
                        <label>密码</label>
                        <div class="controls">
                            <input type="password" class="form-control" name="password" v-model="loginInfo.password"
                                   placeholder="请输入管理员密码"
                                   required>
                        </div>
                    </div>
                    <!-- START Form Control-->
                    <div class="row">
                        <div class="col-md-6 no-padding sm-p-l-10">
                            <div class="checkbox ">
                                <input type="checkbox" id="checkbox1" v-model="loginInfo.remember">
                                <label for="checkbox1">记住密码</label>
                            </div>
                        </div>
                    </div>
                    <!-- END Form Control-->
                    <button class="btn btn-primary btn-cons m-t-10" type="button" @click="login">登 陆</button>
                </form>
                <!--END Login Form-->
                <div class="pull-bottom sm-pull-bottom">
                    <div class="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
                        <div class="col-sm-12 no-padding m-t-10">
                            <p>
                                <small>
                                    Copyright © 2017 Powered By 瞿龙俊, All Rights Reserved.
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Login Right Container-->
    </div>
</template>
<script type="es6">
    const jwt = require('jsonwebtoken');
    const config = require('../global/config');
    const store = require('store');
    module.exports = {
        data(){
            return {
                loginInfo: {
                    username: "",
                    password: "",
                    remember: false
                }
            }
        },
        mounted(){
            let me = this;
            $('#form-login').validate();
            me.$nextTick(() => {
                me.fetchLocal();
            })
        },
        methods: {
            login(){
                let me = this;
                let token = jwt.sign(me.loginInfo, config.publicKey, {
                    expiresIn: 40
                });
                me.$http.post('/api/v1.0/login/admin', {
                    loginInfo: token
                }).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            if (me.loginInfo.remember) {
                                let loginLocal = jwt.sign(me.loginInfo, config.localKey, {
                                    expiresIn: 10 * 24 * 60 * 60
                                });
                                store.set("loginInfo", loginLocal);
                            } else {
                                store.remove('loginInfo');
                            }
                            window.location.href = "/";
                        },
                        506: "登陆密码错误！",
                        503: "当前用户不存在"
                    })
                }, response => {
                    serviceError(response);
                })
            },
            fetchLocal(){
                let me = this;
                let loginInfo = store.get("loginInfo");
                if (loginInfo) {
                    jwt.verify(loginInfo, config.localKey, (err, decoded) => {
                        if (!err) {
                            me.loginInfo = {
                                username: decoded.username,
                                password: decoded.password,
                                remember: decoded.remember
                            };
                        }
                    });
                }
            }
        }
    }
</script>
