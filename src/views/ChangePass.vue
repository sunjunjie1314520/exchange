<template>
	<div class="app">
		<div class="change-pass">
            <ul>
                <li>
                    <span>手机号码</span>
                    <div class="fr">
                        <input type="text" :value="formData.phone" readonly>
                    </div>
                </li>
                <li>
                    <span>验证码</span>
                    <div class="fr">
                        <input class="short" type="text" placeholder="请输入验证码">
                        <b>获取验证码</b>
                    </div>
                </li>
                <li>
                    <span>交易密码</span>
                    <div class="fr">
                        <input type="password" maxlength="20" placeholder="请输入交易密码">
                    </div>
                </li>
                <li>
                    <span>确认密码</span>
                    <div class="fr">
                        <input type="password" maxlength="20" placeholder="请再次输入交易密码">
                    </div>
                </li>
            </ul>
            <div class="tips">
                <p>交易密码由6位数字组成，新用户首次需要设置交易密码后才能购买出售。</p>
            </div>
        </div>
	</div>
</template>

<script>

export default {
	name: 'ChangePass',
	data(){
		return {
            formData: {
                phone: '6546464654654'
            }
		}
	}
}
</script>
