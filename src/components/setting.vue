<template>
	<div class="setting_panel">
		<div class="setting_panel_maker" @click="hideSetting">
			<div class="inner_contaner" @click.stop="stopPropagation">
				<el-icon :size="25" class="settingPanelCloseBtn" @click="hideSetting">
					<Close-bold :size="25" />
				</el-icon>
				<div class="setting_panel_title">
					系统配置
				</div>
				<el-form ref="settingFormRef" :model="settingForm" status-icon :rules="rules" label-width="120px"
					class="settingForm">
					<el-form-item :label="item.label+':'" prop="item.type" v-for="(item,index) in configs">
						<!-- 识别配置项类型并创建对应组件 -->
						<el-input v-if="item.type != 'select'" v-model="settingForm[item.key]"
							placeholder="请输入{{item.label}}" type="item.type" autocomplete="off" />
						<el-select v-if="item.type == 'select'" style="width:100%" v-model="settingForm[item.key]"
							placeholder="请选择{{item.label}}">
							<el-option v-for="(optionitem,index1) in item.options" :label="optionitem.label"
								:value="optionitem.value" />
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-row style="width:100%">
							<el-col :span="11">
								<el-button style="width:100%" type="primary" @click="submitForm(settingFormRef)">
									保存配置</el-button>
							</el-col>
							<el-col :span="2">
							</el-col>
							<el-col :span="11">
								<el-button style="width:100%" @click="defalutForm(settingFormRef)">恢复默认
								</el-button>
							</el-col>
						</el-row>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		defineEmits
	} from 'vue'

	import "../css/dark_theme.css"
	import "../css/default.css"

	import config from '../js/config.js'
	import utils from '../js/utils.js'

	const emit = defineEmits(['saved']);

	//菜单居中
	const settingPanelTop = ref(11);
	//菜单居中
	const settingPanelLeft = ref(11);
	const settingPanelWidth = ref(600);
	const settingPanelHeight = ref(350);

	const settingFormRef = ref('');

	const settingForm = reactive({});
	const rules = reactive({});

	let configs = config.getConfig();
	configs.forEach(function(item, index, arr) {
		settingForm[item.key] = item.value;
		rules[item.key] = [{
			required: item.required,
			message: '请输入' + item.label,
			trigger: 'blur'
		}];
	});
	
	const hideSetting = ()=>{
		emit('hideSetting', {})
	}

	// 阻止事件冒泡
	const stopPropagation = () => {};

	/**
	 * 恢复默认
	 */
	const defalutForm = async (formEl) => {
		if (!formEl) return;
		configs = config.defaultconfig;
		configs.forEach(function(item, index, arr) {
			settingForm[item.key] = item.value;
			rules[item.key] = [{
				required: item.required,
				message: '请输入' + item.label,
				trigger: 'blur'
			}];
		});
	};
	/**
	 * 提交表单
	 */
	const submitForm = async (formEl) => {
		if (!formEl) return;

		await formEl.validate((valid, fields) => {
			if (!valid) {
				return;
			}
			//将数据组合成数组格式
			let configdata = [];
			for (let key in settingForm) {
				let itemconfig = null;
				for (let i = 0; i < configs.length; i++) {
					if (configs[i].key == key) {
						itemconfig = configs[i];
						break;
					}
				}
				if (!itemconfig) { //未识别的配置项
					continue;
				}
				//更新数据
				itemconfig.value = settingForm[key];
				configdata.push(itemconfig);
			}

			//保存系统配置
			utils.saveConfig(configdata);

			//刷新并应用系统配置
			emit('saved', {})
		})
	};
</script>

<style>
	.setting_panel .inner_contaner {
		width: 40vw;
		height: 40vh;
		top: 30vh;
		left: 30vw;
	}
</style>
