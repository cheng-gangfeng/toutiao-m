<template>
<div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- /导航栏 -->
    <!-- 登陆表单 -->
    <van-form @submit="onSubmit">
        <van-field v-model="user.mobile" name="手机号" placeholder="请输入手机号">
            <i slot="left-icon" class="toutiao toutiao-shouji"></i>
        </van-field>
        <van-field v-model="user.code" name="验证码"  placeholder="请输入验证码">
            <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
            <template #button>
                <van-button class="send-sms-btn" round size="small" type="default">发送验证码</van-button>
            </template>
        </van-field>
        <div class="login-btn-wrap">
            <van-button class="login-btn" block type="info" native-type="submit">登录</van-button>
        </div>
    </van-form>
    <!-- /登陆表单 -->
</div>
</template>

<script>
    // 按需导入登录请求函数
    import {login} from '../../api/user'
export default {
    name: 'Login',
    data() {
        return {
               user:{
                // 根据接口定义数据双向绑定 发送过去
                mobile:'',//手机号
                code:''//验证码
               }
        };
    },
    methods: {
        // 表单登录提交事件 点击登录之后会触发这个事件
     
      async  onSubmit() {
        // 1，获取表单数据
        const user=this.user
        console.log(user);
        // 2，表单验证
        // 3.1登录提示 vent toast轻提示
        // 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。
        this.$toast.loading({
            message: '登录中',
            forbidClick: true,
            duration:0//吐司持续时间 0 一直持续。
        });

        // 3，提交表单请求 登录（定义api 前端请求函数）
        // 成功或者失败
        try {
            // 登录后得到的后端数据
            const res=await login(user)
            // console.log('登录成功',res);
            // 当新建一个吐司会覆盖前一个吐司。
            this.$toast.success('登录成功')
        } catch (err) {
            // 登录失败
            if(err.response.status===400){
                // console.log('手机号或验证码错误');
                this.$toast.fail('手机号或验证码错误')
            }else{
                // console.log('登录失败请稍后 网络不好 服务器错误');
                this.$toast.fail('登录失败请稍后重试！！！')
            }
        }
        // 4，根据请求响应结果 处理后续操作
        
        },
    },
}
</script>

<style lang="less" scoped>
.login-container {
    .toutiao {
        font-size: 37px;
    }

    .send-sms-btn {
        width: 156px;
        height: 46px;
        line-height: 46px;
        background-color: #ededed;
        font-size:22px;
        color: #666666;
    }
  
    .login-btn-wrap{
   padding: 53px 28px;
   .login-btn{
    background-color: #6bd4fb;
    border: none;
   }
    }
}
</style>
