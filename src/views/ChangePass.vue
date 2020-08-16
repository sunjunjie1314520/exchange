<template>
	<div class="app">
		<div class="change-pass">
            <div class="code">
                <span>好逗客服一</span>
                <div class="pict">
                    <img src="../../src/static/img/f0981e_430x430.jpg" alt="">
                </div>
            </div>
            <div class="code">
                <span>好逗客服二</span>
                <div class="pict">
                    <img src="../../src/static/img/9e0027_430x430.jpg" alt="">
                </div>
            </div>
            <div class="tips">
                <p>交易申诉请联系以上客服</p>
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
