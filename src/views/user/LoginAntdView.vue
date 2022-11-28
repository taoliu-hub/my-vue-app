<template>
    pending page
    <h1>This is a Login Antd page</h1>
    <a-form name="custom-validation" ref="formRef" :model="modelRef" :rules="rules" v-bind="layout"
        @finish="handleFinish" @finishFailed="handleFinishFailed">
        <div class="card-box">
            <div class="card-head">基础信息</div>
            <div class="card-body">
                <a-form-item label="食材名称" name="name">
                    <a-input v-model:value="modelRef.name" autocomplete="off" />
                </a-form-item>
                <a-form-item label="食材编号" name="foodNumber">
                    <a-input v-model:value="modelRef.foodNumber" autocomplete="off" />
                </a-form-item>
                <a-form-item label="食材类型" name="foodType">
                    <a-select v-model:value="modelRef.foodType" placeholder="">
                        <a-select-option value="shanghai">Zone one</a-select-option>
                        <a-select-option value="beijing">Zone two</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="食材产地" name="birthplace">
                    <a-input v-model:value="modelRef.birthplace" autocomplete="off" />
                </a-form-item>
            </div>
        </div>
        <div class="card-box">
            <div class="card-head">营养成分信息</div>
            <div class="card-body">
                <a-button primary shape="round" @click="onAdd">
                    <PlusSquareOutlined /> 新增
                </a-button>
                <div class="nutrients-content-box">
                    <a-row type="flex" justify="space-between" align="middle">
                        <a-col :span="5" v-for="(item, index) in modelRef.nutrients" :key="index">
                            <div class="nutrients-input-box card-box">
                                <div>{{ item.name }}</div>
                                <div class="flex-align-end">
                                    <div>
                                        <!-- 注:form.item的name必须与modelRef里面的字段保持一致，否则无法实现自动校验，所以此处name使用动态数据，
                                             当数组nutrients值改变时，就往modelRef里面加字段（与这里的name保持一致）。下面代码有说明 -->
                                        <!-- 当name设置成功了,此处的规则便会在change触发后执行 -->
                                        <a-form-item :name="item.id + 'nutrients'"
                                            :rules="[{ validator: validateNutrients, trigger: 'change' }]">
                                            <a-input v-model:value="item.value" @change="onFieldChange(item)" />
                                        </a-form-item>
                                    </div>
                                    <span>{{ item.unit }}</span>
                                </div>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
        <div class="op-btn-box">
            <a-form-item :wrapper-col="{ span: 12, offset: 18 }">
                <a-button>取消</a-button>
                <a-button type="primary" style="margin-left: 10px" html-type="submit">保存</a-button>
            </a-form-item>
        </div>
    </a-form>
</template>
<!-- <router-link to="/register-antd"> register now!</router-link> -->
<script>
import { reactive, toRefs, watch } from 'vue'

export default {

    // setup(){
    //     console.log('set up');
    //     axios.get("http://localhost:3000/users").then(response =>{
    //         console.log(response);
    //     })
    // },
    setup() {
        //表单校验里的name值必须与此处的字段保持一致
        const modelRef = reactive({
            name: '',
            foodNumber: '',
            foodType: null,
            birthplace: '',
            nutrients: [],
        })
        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 6 },
        }
        //此处为动态表单的自定义规则
        const validateNutrients = async (rule, value) => {
            if (!value) {
                return Promise.reject(new Error('请输入数值'))
            }
            const numReg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/
            if (!numReg.exec(value)) {
                return Promise.reject(new Error('请输入正确数字'))
            }
        }

        //其他普通的校验，可做统一处理
        const rules = {
            name: [
                { required: true, message: '请输入食材名称', trigger: 'change' },
                { max: 20, message: '最多输入20字', trigger: 'change' },
            ],
            foodNumber: [
                { required: true, message: '请输入食材编号', trigger: 'change' },
                { max: 20, message: '最多输入20字', trigger: 'change' },
            ],
            foodType: [
                { required: true, message: '请选择食材类型', trigger: 'change' },
            ],
            birthplace: [
                { required: true, message: '请输入食材产地', trigger: 'change' },
                { max: 20, message: '最多输入20字', trigger: 'change' },
            ],
        }

        //此处是关键，modelRef.nutrients是遍历动态表单所用的数组，当数组值改变时，往modelRef里面加字段，与上面的动态循环出来的form.item的name保持一致
        watch(
            () => modelRef.nutrients,
            val => {
                if (val.length) {
                    val.forEach(item => {
                        modelRef[`${item.id}nutrients`] = item.value
                    })
                }
            },
        )
        /* 提交保存 */
        const handleFinish = (values) => {
            console.log(values)
        }
        const handleFinishFailed = (errors) => {
            console.log(errors)
        }
        //输入框的值改变时，需要更新modelRef里动态添加的字段的值，否则校验会出错。
        const onFieldChange = (item) => {
            modelRef[`${item.id}nutrients`] = item.value
        }

        return {
            ...toRefs(),
            modelRef,
            rules,
            layout,
            handleFinish,
            handleFinishFailed,
            validateNutrients,
            onFieldChange,
        }
    }
}
</script>

<style>
.btn-primary,
.btn-warning,
.btn-success,
.btn-info,
.btn-danger,
.btn-default {
    margin: 0 15px 0 15px !important;
}
</style>