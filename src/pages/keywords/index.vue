<template>
    <div>
        <fes-search-panel>
            <Wb-form :label-width="150" type="query">
                <Form-item label="关键词：">
                    <wb-input v-model="keywrapper.keywrapper" placeholder="请输入" />
                </Form-item>
                <Form-item label="分类：">
                    <Dropdown :data="category_data" trigger="click" @on-choose="clickDropDownCategory" >
                           <Wb-button type="primary">选择分类</Wb-button>
                    </Dropdown>
                </Form-item>
                <Form-item label="选定项目：">
                    <wb-input v-model="keywrapper.keywrapper_label" :maxlength="20"  />
                </Form-item>
            </Wb-form>
            <div slot="button">
                <Wb-button @click="add_keywords" type="primary" icon="add">
                    添加
                </Wb-button>
            </div>            
            <div v-show="error" class="error">
                    <Icon type="exclamation-circle" />{{error}}
                </div>

        </fes-search-panel>
        <fes-list-panel>
            <Wb-table :data="data">
                <Column prop="ID" name="日期" />
                <Column prop="Keywords" name="姓名" />
                <Column prop="Category" name="年龄" />                
            </Wb-table>
            <Pagination :size="paginationOption.pageSize" :current="paginationOption.currentPage" :total="paginationOption.totalPage" @on-change="changePage" />
        </fes-list-panel>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    FesDataCache: 'test',
    FesData() {
        return {
            category_data: [
                {
                    content: '百度资讯搜索'
                },
                {
                    content: '搜狗资讯搜索'
                },
            ],
            keywrapper: {
                keywords: '',
                category: '',
                keywrapper_label:'',
            },
            data: [{
                ID: '张晓刚',
                Keywords: '北京市海淀区西二旗',
                Category: '北京市海淀区西二旗',                
            }, ],
            paginationOption: {
                pageSize: 10,
                currentPage: 1,
                totalPage: 2
            },
            error : ''
        };
    },
    FesReady() {

        //this.FesApi.fetch('/api/v1/search/cms/keywords/list',{})

        this.FesApi.fetch('/api/v1/search/cms/keywords/list',{}).then( res => {
                    
                console.log("list res:", res);                

                var { data } = this;

                data = res;

        });


        //console.log(this);
    },
    methods: {
        clickDropDownCategory (data){
            this.keywrapper.keywrapper_label = data.content;
            this.$Toast(data.content+' is clicked');
        },
        changePage({ current, size }) {
            this.paginationOption.currentPage = current;
            this.paginationOption.pageSize = size;
        },
        add_keywords() {
            if( this.add_validate()  ){
                const { keywrapper } = this;
                this.FesApi.fetch('/api/v1/search/cms/keywords/add',{keywords:keywrapper.keywrapper,
                    category:keywrapper.keywrapper_label}).then( res => {
                    console.log("query_search res:", res);                
                });
            }else{
                console.log("validate FAILED ");
            }
        },
        add_validate() {
            const { keywrapper } = this;
            //console.log("keywords:", keywrapper.keywrapper);
            if (  keywrapper.keywrapper === '' || keywrapper.keywrapper == null) {
                 this.$Toast('请输入关键词');
                return false;
            } 
            //console.log("keywrapper_label:", keywrapper.keywrapper_label);
            if (keywrapper.keywrapper_label === '' || keywrapper.keywrapper_label == null) {
                this.$Toast('请选择类别');
                return false;
            }
            return true;
        },


    }
};
</script>
